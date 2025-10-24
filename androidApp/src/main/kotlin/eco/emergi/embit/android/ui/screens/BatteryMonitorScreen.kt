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
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import eco.emergi.embit.android.ui.components.BatteryReadingCard
import eco.emergi.embit.android.ui.components.StatisticsCard
import eco.emergi.embit.android.ui.components.BatteryLifePredictionCard
import eco.emergi.embit.android.ui.components.ChargingRecommendationsCard
import eco.emergi.embit.android.ui.theme.ChargingGreen
import eco.emergi.embit.android.ui.theme.DischargingRed
import eco.emergi.embit.domain.models.BatteryState
import eco.emergi.embit.domain.usecases.*
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

    // Create ViewModel
    val viewModel = remember(scope) {
        BatteryMonitorViewModel(
            monitorBatteryUseCase = monitorUseCase,
            getBatteryHistoryUseCase = historyUseCase,
            calculateStatisticsUseCase = statisticsUseCase,
            predictBatteryLifeUseCase = predictLifeUseCase,
            generateChargingRecommendationsUseCase = recommendationsUseCase,
            viewModelScope = scope
        )
    }

    val uiState by viewModel.uiState.collectAsState()
    val currentReading by viewModel.currentReading.collectAsState()
    val todayStats by viewModel.todayStatistics.collectAsState()
    val batteryLifePrediction by viewModel.batteryLifePrediction.collectAsState()
    val chargingRecommendations by viewModel.chargingRecommendations.collectAsState()

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("Battery Monitor") },
                actions = {
                    IconButton(onClick = { viewModel.refreshStatistics() }) {
                        Icon(Icons.Default.Refresh, contentDescription = "Refresh")
                    }
                }
            )
        }
    ) { paddingValues ->
        Box(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
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
    onRefresh: () -> Unit
) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .verticalScroll(rememberScrollState())
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
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
                        CircularProgressIndicator()
                        Text("Waiting for battery data...")
                    }
                }
            }
        }

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
            StatisticsCard(statistics = it, title = "Today's Statistics")
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
                text = "Permission Required",
                style = MaterialTheme.typography.headlineMedium
            )
            Text(
                text = "Battery monitoring requires permission to access battery information.",
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
