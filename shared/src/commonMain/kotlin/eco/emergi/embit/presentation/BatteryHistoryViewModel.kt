package eco.emergi.embit.presentation

import eco.emergi.embit.domain.models.*
import eco.emergi.embit.domain.usecases.CalculateBatteryStatisticsUseCase
import eco.emergi.embit.domain.usecases.GetBatteryHistoryUseCase
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import kotlinx.datetime.Instant

/**
 * ViewModel for battery history and statistics screen.
 */
class BatteryHistoryViewModel(
    private val getBatteryHistoryUseCase: GetBatteryHistoryUseCase,
    private val calculateStatisticsUseCase: CalculateBatteryStatisticsUseCase,
    private val viewModelScope: CoroutineScope
) {
    private val _uiState = MutableStateFlow<BatteryHistoryUiState>(BatteryHistoryUiState.Loading)
    val uiState: StateFlow<BatteryHistoryUiState> = _uiState.asStateFlow()

    private val _selectedPeriod = MutableStateFlow(TimePeriod.DAY)
    val selectedPeriod: StateFlow<TimePeriod> = _selectedPeriod.asStateFlow()

    init {
        loadHistory(TimePeriod.DAY)
    }

    /**
     * Load battery history for a specific period
     */
    fun loadHistory(period: TimePeriod) {
        _selectedPeriod.value = period
        _uiState.value = BatteryHistoryUiState.Loading

        viewModelScope.launch {
            // Load data points for charting
            val dataPointsResult = getBatteryHistoryUseCase.getDataPoints(period)

            // Load statistics
            val statisticsResult = calculateStatisticsUseCase(period)

            // Load trends
            val trendsResult = calculateStatisticsUseCase.calculateTrends(period)

            when {
                dataPointsResult.isSuccess && statisticsResult.isSuccess -> {
                    _uiState.value = BatteryHistoryUiState.Success(
                        dataPoints = dataPointsResult.getOrNull() ?: emptyList(),
                        statistics = statisticsResult.getOrNull(),
                        trends = trendsResult.getOrNull() ?: emptyList()
                    )
                }
                else -> {
                    _uiState.value = BatteryHistoryUiState.Error(
                        "Failed to load battery history"
                    )
                }
            }
        }
    }

    /**
     * Load custom time range
     */
    fun loadCustomRange(start: Instant, end: Instant) {
        _uiState.value = BatteryHistoryUiState.Loading

        viewModelScope.launch {
            val dataPointsResult = getBatteryHistoryUseCase.getDataPoints(
                TimePeriod.CUSTOM,
                customStart = start,
                customEnd = end
            )

            val statisticsResult = calculateStatisticsUseCase(
                TimePeriod.CUSTOM,
                customStart = start,
                customEnd = end
            )

            when {
                dataPointsResult.isSuccess && statisticsResult.isSuccess -> {
                    _uiState.value = BatteryHistoryUiState.Success(
                        dataPoints = dataPointsResult.getOrNull() ?: emptyList(),
                        statistics = statisticsResult.getOrNull(),
                        trends = emptyList() // Trends not available for custom range
                    )
                }
                else -> {
                    _uiState.value = BatteryHistoryUiState.Error(
                        "Failed to load battery history for custom range"
                    )
                }
            }
        }
    }

    /**
     * Refresh current view
     */
    fun refresh() {
        loadHistory(_selectedPeriod.value)
    }
}

/**
 * UI state for battery history screen
 */
sealed class BatteryHistoryUiState {
    data object Loading : BatteryHistoryUiState()

    data class Success(
        val dataPoints: List<BatteryDataPoint>,
        val statistics: BatteryStatistics?,
        val trends: List<BatteryTrend>
    ) : BatteryHistoryUiState()

    data class Error(val message: String) : BatteryHistoryUiState()
}
