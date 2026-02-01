package eco.emergi.embit.android.ui.screens

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.BatteryChargingFull
import androidx.compose.material.icons.filled.Refresh
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.input.key.*
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.semantics.*
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import eco.emergi.embit.android.R
import eco.emergi.embit.android.ui.components.*
import eco.emergi.embit.android.ui.theme.ChargingGreen
import eco.emergi.embit.android.ui.theme.DischargingRed
import eco.emergi.embit.domain.models.BatteryState
import eco.emergi.embit.domain.usecases.*
import eco.emergi.embit.domain.usecases.grid.GetChargingRecommendationUseCase
import eco.emergi.embit.domain.usecases.grid.ObserveGridStatusUseCase
import eco.emergi.embit.presentation.BatteryMonitorUiState
import eco.emergi.embit.presentation.BatteryMonitorViewModel
import kotlinx.coroutines.CoroutineScope
import org.koin.compose.koinInject

/**
 * Battery monitoring screen showing real-time battery data
 */
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun BatteryMonitorScreen() {
    val scope = rememberCoroutineScope()

    // Get use cases from Koin
    val monitorUseCase: MonitorBatteryUseCase = koinInject()
    val historyUseCase: GetBatteryHistoryUseCase = koinInject()
    val statisticsUseCase: CalculateBatteryStatisticsUseCase = koinInject()
    val predictLifeUseCase: PredictBatteryLifeUseCase = koinInject()
    val recommendationsUseCase: GenerateChargingRecommendationsUseCase = koinInject()
    val observeGridStatusUseCase: ObserveGridStatusUseCase = koinInject()
    val getChargingRecommendationUseCase: GetChargingRecommendationUseCase = koinInject()

    // Create ViewModel
    val viewModel = remember(scope) {
        BatteryMonitorViewModel(
            monitorBatteryUseCase = monitorUseCase,
            getBatteryHistoryUseCase = historyUseCase,
            calculateStatisticsUseCase = statisticsUseCase,
            predictBatteryLifeUseCase = predictLifeUseCase,
            generateChargingRecommendationsUseCase = recommendationsUseCase,
            observeGridStatusUseCase = observeGridStatusUseCase,
            getChargingRecommendationUseCase = getChargingRecommendationUseCase,
            viewModelScope = scope
        )
    }

    val uiState by viewModel.uiState.collectAsState()
    val currentReading by viewModel.currentReading.collectAsState()
    val todayStats by viewModel.todayStatistics.collectAsState()
    val batteryLifePrediction by viewModel.batteryLifePrediction.collectAsState()
    val chargingRecommendations by viewModel.chargingRecommendations.collectAsState()
    val gridStatus by viewModel.gridStatus.collectAsState()
    val gridChargingRecommendation by viewModel.gridChargingRecommendation.collectAsState()

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text(stringResource(R.string.monitor_title), modifier = Modifier.semantics { heading() }) },
                actions = {
                    IconButton(
                        onClick = { viewModel.refreshStatistics() },
                        modifier = Modifier.semantics {
                            role = Role.Button
                            contentDescription = "Refresh battery statistics"
                        }
                    ) {
                        Icon(Icons.Default.Refresh, contentDescription = stringResource(R.string.action_refresh))
                    }
                }
            )
        }
    ) { paddingValues ->
        Box(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
                .onKeyEvent { event ->
                    // Handle keyboard shortcuts
                    if (event.type == KeyEventType.KeyDown) {
                        when {
                            // Ctrl+R: Refresh statistics
                            event.isCtrlPressed && event.key == Key.R -> {
                                viewModel.refreshStatistics()
                                true
                            }
                            else -> false
                        }
                    } else {
                        false
                    }
                }
        ) {
            when (uiState) {
                is BatteryMonitorUiState.Error -> {
                    ErrorContent((uiState as BatteryMonitorUiState.Error).message)
                }
                is BatteryMonitorUiState.PermissionRequired -> {
                    PermissionRequiredContent()
                }
                else -> {
                    MonitoringContent(
                        currentReading = currentReading,
                        todayStats = todayStats,
                        batteryLifePrediction = batteryLifePrediction,
                        chargingRecommendations = chargingRecommendations,
                        gridStatus = gridStatus,
                        gridChargingRecommendation = gridChargingRecommendation,
                        onRefresh = { viewModel.refreshStatistics() }
                    )
                }
            }
        }
    }
}

@Composable
private fun MonitoringContent(
    currentReading: eco.emergi.embit.domain.models.BatteryReading?,
    todayStats: eco.emergi.embit.domain.models.BatteryStatistics?,
    batteryLifePrediction: BatteryLifePrediction?,
    chargingRecommendations: ChargingRecommendations?,
    gridStatus: eco.emergi.embit.domain.models.GridStatus?,
    gridChargingRecommendation: eco.emergi.embit.domain.models.ChargingRecommendation?,
    onRefresh: () -> Unit
) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .verticalScroll(rememberScrollState())
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        // Network status indicators
        val isOffline by rememberConnectionState()

        OfflineIndicator(
            isOffline = isOffline,
            lastSyncTimestamp = System.currentTimeMillis() - (5 * 60 * 1000), // TODO: Get real last sync time
            pendingSyncCount = 0 // TODO: Get real pending count
        )

        // Current Battery Reading Card
        currentReading?.let {
            BatteryReadingCard(reading = it)
        } ?: run {
            Card(
                modifier = Modifier.fillMaxWidth()
            ) {
                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(32.dp),
                    contentAlignment = Alignment.Center
                ) {
                    Column(
                        horizontalAlignment = Alignment.CenterHorizontally,
                        verticalArrangement = Arrangement.spacedBy(8.dp)
                    ) {
                        CircularProgressIndicator(
                            modifier = Modifier.semantics {
                                liveRegion = LiveRegionMode.Polite
                                contentDescription = "Loading battery data"
                            }
                        )
                        Text(stringResource(R.string.monitor_waiting_for_data))
                    }
                }
            }
        }

        // Grid Status Card - Show grid information and smart charging recommendations
        GridStatusCard(
            gridStatus = gridStatus,
            chargingRecommendation = gridChargingRecommendation
        )

        // Battery Life Prediction Card
        batteryLifePrediction?.let {
            BatteryLifePredictionCard(prediction = it)
        }

        // Charging Recommendations Card
        chargingRecommendations?.let {
            ChargingRecommendationsCard(recommendations = it)
        }

        // Today's Statistics Card
        todayStats?.let {
            StatisticsCard(statistics = it, title = stringResource(R.string.monitor_current_status))
        }
    }
}

@Composable
private fun ErrorContent(message: String) {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .padding(32.dp),
        contentAlignment = Alignment.Center
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            Icon(
                Icons.Default.BatteryChargingFull,
                contentDescription = null,
                modifier = Modifier.size(64.dp),
                tint = MaterialTheme.colorScheme.error
            )
            Text(
                text = message,
                style = MaterialTheme.typography.bodyLarge,
                textAlign = TextAlign.Center,
                color = MaterialTheme.colorScheme.error
            )
        }
    }
}

@Composable
private fun PermissionRequiredContent() {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .padding(32.dp),
        contentAlignment = Alignment.Center
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            Text(
                text = stringResource(R.string.permission_required),
                style = MaterialTheme.typography.headlineMedium,
                modifier = Modifier.semantics { heading() }
            )
            Text(
                text = stringResource(R.string.permission_battery_description),
                style = MaterialTheme.typography.bodyLarge,
                textAlign = TextAlign.Center
            )
        }
    }
}

@Composable
private fun remember(scope: CoroutineScope, calculation: () -> BatteryMonitorViewModel): BatteryMonitorViewModel {
    return androidx.compose.runtime.remember(scope) { calculation() }
}
