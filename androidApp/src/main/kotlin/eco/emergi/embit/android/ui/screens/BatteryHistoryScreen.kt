package eco.emergi.embit.android.ui.screens

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import eco.emergi.embit.android.ui.components.StatisticsCard
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

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("Battery History") }
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
                        CircularProgressIndicator()
                    }
                }
                is BatteryHistoryUiState.Success -> {
                    state.statistics?.let { stats ->
                        StatisticsCard(
                            statistics = stats,
                            title = "Statistics for ${selectedPeriod.name}"
                        )
                    }

                    // Trends
                    if (state.trends.isNotEmpty()) {
                        TrendsCard(trends = state.trends)
                    }

                    // Data points count
                    Card(modifier = Modifier.fillMaxWidth()) {
                        Column(modifier = Modifier.padding(16.dp)) {
                            Text(
                                text = "Data Points: ${state.dataPoints.size}",
                                style = MaterialTheme.typography.bodyLarge
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
            Text("Time Period", style = MaterialTheme.typography.titleMedium)
            Spacer(modifier = Modifier.height(8.dp))
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                periods.forEach { period ->
                    FilterChip(
                        selected = period == selectedPeriod,
                        onClick = { onPeriodSelected(period) },
                        label = { Text(period.name) }
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
            Text("Trends", style = MaterialTheme.typography.titleMedium)
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
