package eco.emergi.embit.android.ui.screens

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.pluralStringResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.semantics.*
import androidx.compose.ui.unit.dp
import eco.emergi.embit.android.R
import eco.emergi.embit.android.ui.components.*
import eco.emergi.embit.domain.models.TimePeriod
import eco.emergi.embit.domain.usecases.*
import eco.emergi.embit.presentation.BatteryHistoryUiState
import eco.emergi.embit.presentation.BatteryHistoryViewModel
import kotlinx.coroutines.CoroutineScope
import org.koin.compose.koinInject

/**
 * Battery history screen showing historical data and trends
 */
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun BatteryHistoryScreen() {
    val scope = rememberCoroutineScope()

    // Get use cases from Koin
    val historyUseCase: GetBatteryHistoryUseCase = koinInject()
    val statisticsUseCase: CalculateBatteryStatisticsUseCase = koinInject()

    // Create ViewModel
    val viewModel = remember(scope) {
        BatteryHistoryViewModel(
            getBatteryHistoryUseCase = historyUseCase,
            calculateStatisticsUseCase = statisticsUseCase,
            viewModelScope = scope
        )
    }

    val uiState by viewModel.uiState.collectAsState()
    val selectedPeriod by viewModel.selectedPeriod.collectAsState()

    // Fetch raw battery readings for charts
    var rawReadings by remember { mutableStateOf<List<eco.emergi.embit.domain.models.BatteryReading>>(emptyList()) }

    LaunchedEffect(selectedPeriod) {
        val result = historyUseCase(selectedPeriod)
        result.onSuccess { readings ->
            rawReadings = readings
        }
    }

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text(stringResource(R.string.history_title), modifier = Modifier.semantics { heading() }) }
            )
        }
    ) { paddingValues ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
                .padding(16.dp)
                .verticalScroll(rememberScrollState()),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            // Period selector
            PeriodSelector(
                selectedPeriod = selectedPeriod,
                onPeriodSelected = { viewModel.loadHistory(it) }
            )

            // Content based on state
            when (val state = uiState) {
                is BatteryHistoryUiState.Loading -> {
                    Box(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(32.dp),
                        contentAlignment = Alignment.Center
                    ) {
                        CircularProgressIndicator(
                            modifier = Modifier.semantics {
                                liveRegion = LiveRegionMode.Polite
                                contentDescription = "Loading battery history"
                            }
                        )
                    }
                }
                is BatteryHistoryUiState.Success -> {
                    state.statistics?.let { stats ->
                        StatisticsCard(
                            statistics = stats,
                            title = "${stringResource(R.string.history_title)} - ${selectedPeriod.name}"
                        )
                    }

                    // Data Visualization Charts using REAL battery readings
                    if (rawReadings.isNotEmpty()) {
                        // Battery Level Over Time
                        BatteryLevelChart(readings = rawReadings)

                        // Temperature Over Time
                        TemperatureChart(readings = rawReadings)

                        // Power Consumption/Generation
                        PowerConsumptionChart(readings = rawReadings)

                        // Charging Cycles
                        ChargingCyclesChart(readings = rawReadings)
                    }

                    // Trends
                    if (state.trends.isNotEmpty()) {
                        TrendsCard(trends = state.trends)
                    }

                    // Data points count
                    val readingsCountText = pluralStringResource(R.plurals.readings_count, state.dataPoints.size, state.dataPoints.size)
                    Card(modifier = Modifier.fillMaxWidth()) {
                        Column(modifier = Modifier.padding(16.dp)) {
                            Text(
                                text = readingsCountText,
                                style = MaterialTheme.typography.bodyLarge,
                                modifier = Modifier.semantics {
                                    contentDescription = "$readingsCountText in the selected time period"
                                }
                            )
                        }
                    }
                }
                is BatteryHistoryUiState.Error -> {
                    Card(
                        modifier = Modifier.fillMaxWidth(),
                        colors = CardDefaults.cardColors(
                            containerColor = MaterialTheme.colorScheme.errorContainer
                        )
                    ) {
                        Text(
                            text = state.message,
                            modifier = Modifier.padding(16.dp),
                            color = MaterialTheme.colorScheme.onErrorContainer
                        )
                    }
                }
            }
        }
    }
}

@Composable
private fun PeriodSelector(
    selectedPeriod: TimePeriod,
    onPeriodSelected: (TimePeriod) -> Unit
) {
    val periods = listOf(
        TimePeriod.HOUR,
        TimePeriod.DAY,
        TimePeriod.WEEK,
        TimePeriod.MONTH
    )

    Card(modifier = Modifier.fillMaxWidth()) {
        Column(modifier = Modifier.padding(16.dp)) {
            Text(
                stringResource(R.string.history_time_period),
                style = MaterialTheme.typography.titleMedium,
                modifier = Modifier.semantics { heading() }
            )
            Spacer(modifier = Modifier.height(8.dp))
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                periods.forEach { period ->
                    val isSelected = period == selectedPeriod
                    FilterChip(
                        selected = isSelected,
                        onClick = { onPeriodSelected(period) },
                        label = { Text(period.name) },
                        modifier = Modifier.semantics {
                            role = Role.RadioButton
                            stateDescription = if (isSelected) "Selected" else "Not selected"
                        }
                    )
                }
            }
        }
    }
}

@Composable
private fun TrendsCard(trends: List<eco.emergi.embit.domain.models.BatteryTrend>) {
    Card(modifier = Modifier.fillMaxWidth()) {
        Column(
            modifier = Modifier.padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            Text(
                stringResource(R.string.history_trends),
                style = MaterialTheme.typography.titleMedium,
                modifier = Modifier.semantics { heading() }
            )
            HorizontalDivider()

            trends.forEach { trend ->
                Column {
                    Text(
                        text = trend.metric.name.replace("_", " "),
                        style = MaterialTheme.typography.bodyMedium
                    )
                    Text(
                        text = "${trend.direction.name} (${String.format("%.1f%%", trend.changePercentage)})",
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                    trend.recommendation?.let {
                        Text(
                            text = it,
                            style = MaterialTheme.typography.bodySmall,
                            color = MaterialTheme.colorScheme.primary
                        )
                    }
                }
            }
        }
    }
}

@Composable
private fun remember(scope: CoroutineScope, calculation: () -> BatteryHistoryViewModel): BatteryHistoryViewModel {
    return androidx.compose.runtime.remember(scope) { calculation() }
}
