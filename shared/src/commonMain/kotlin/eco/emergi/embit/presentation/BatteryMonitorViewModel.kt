package eco.emergi.embit.presentation

import eco.emergi.embit.domain.models.BatteryReading
import eco.emergi.embit.domain.models.BatteryStatistics
import eco.emergi.embit.domain.models.TimePeriod
import eco.emergi.embit.domain.usecases.*
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Job
import kotlinx.coroutines.flow.*
import kotlinx.coroutines.launch

/**
 * ViewModel for battery monitoring screen.
 * Manages real-time battery monitoring and current state.
 */
class BatteryMonitorViewModel(
    private val monitorBatteryUseCase: MonitorBatteryUseCase,
    private val getBatteryHistoryUseCase: GetBatteryHistoryUseCase,
    private val calculateStatisticsUseCase: CalculateBatteryStatisticsUseCase,
    private val predictBatteryLifeUseCase: PredictBatteryLifeUseCase,
    private val generateChargingRecommendationsUseCase: GenerateChargingRecommendationsUseCase,
    private val viewModelScope: CoroutineScope
) {
    private val _uiState = MutableStateFlow<BatteryMonitorUiState>(BatteryMonitorUiState.Initial)
    val uiState: StateFlow<BatteryMonitorUiState> = _uiState.asStateFlow()

    private val _currentReading = MutableStateFlow<BatteryReading?>(null)
    val currentReading: StateFlow<BatteryReading?> = _currentReading.asStateFlow()

    private val _todayStatistics = MutableStateFlow<BatteryStatistics?>(null)
    val todayStatistics: StateFlow<BatteryStatistics?> = _todayStatistics.asStateFlow()

    private val _batteryLifePrediction = MutableStateFlow<BatteryLifePrediction?>(null)
    val batteryLifePrediction: StateFlow<BatteryLifePrediction?> = _batteryLifePrediction.asStateFlow()

    private val _chargingRecommendations = MutableStateFlow<ChargingRecommendations?>(null)
    val chargingRecommendations: StateFlow<ChargingRecommendations?> = _chargingRecommendations.asStateFlow()

    private var monitoringJob: Job? = null
    private var isMonitoringActive = false

    init {
        startMonitoring()
        loadTodayStatistics()
    }

    /**
     * Start battery monitoring
     */
    fun startMonitoring() {
        if (isMonitoringActive) return

        if (!monitorBatteryUseCase.isSupported()) {
            _uiState.value = BatteryMonitorUiState.Error("Battery monitoring not supported on this device")
            return
        }

        monitoringJob = viewModelScope.launch {
            val hasPermissions = monitorBatteryUseCase.ensurePermissions()
            if (!hasPermissions) {
                _uiState.value = BatteryMonitorUiState.PermissionRequired
                return@launch
            }

            isMonitoringActive = true
            _uiState.value = BatteryMonitorUiState.Monitoring

            monitorBatteryUseCase()
                .catch { error ->
                    _uiState.value = BatteryMonitorUiState.Error(error.message ?: "Unknown error")
                    isMonitoringActive = false
                }
                .collect { reading ->
                    _currentReading.value = reading
                    // Update predictions and recommendations when reading changes
                    updatePredictionsAndRecommendations(reading)
                }
        }
    }

    /**
     * Stop battery monitoring
     */
    fun stopMonitoring() {
        monitoringJob?.cancel()
        monitorBatteryUseCase.stop()
        isMonitoringActive = false
        _uiState.value = BatteryMonitorUiState.Stopped
    }

    /**
     * Load today's battery statistics
     */
    fun loadTodayStatistics() {
        viewModelScope.launch {
            calculateStatisticsUseCase(TimePeriod.DAY)
                .onSuccess { stats ->
                    _todayStatistics.value = stats
                }
                .onFailure {
                    // Silently fail for statistics, not critical
                }
        }
    }

    /**
     * Refresh statistics
     */
    fun refreshStatistics() {
        loadTodayStatistics()
        _currentReading.value?.let { updatePredictionsAndRecommendations(it) }
    }

    /**
     * Update predictions and recommendations based on current reading
     */
    private fun updatePredictionsAndRecommendations(reading: BatteryReading) {
        viewModelScope.launch {
            // Update battery life prediction
            predictBatteryLifeUseCase(reading)
                .onSuccess { prediction ->
                    _batteryLifePrediction.value = prediction
                }
                .onFailure {
                    // Silently fail, not critical
                }

            // Update charging recommendations
            generateChargingRecommendationsUseCase(reading)
                .onSuccess { recommendations ->
                    _chargingRecommendations.value = recommendations
                }
                .onFailure {
                    // Silently fail, not critical
                }
        }
    }

    /**
     * Clean up when ViewModel is no longer needed
     */
    fun onCleared() {
        stopMonitoring()
    }
}

/**
 * UI state for battery monitoring screen
 */
sealed class BatteryMonitorUiState {
    data object Initial : BatteryMonitorUiState()
    data object PermissionRequired : BatteryMonitorUiState()
    data object Monitoring : BatteryMonitorUiState()
    data object Stopped : BatteryMonitorUiState()
    data class Error(val message: String) : BatteryMonitorUiState()
}
