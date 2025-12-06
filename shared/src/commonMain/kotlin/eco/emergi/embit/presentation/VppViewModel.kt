package eco.emergi.embit.presentation

import eco.emergi.embit.domain.models.*
import eco.emergi.embit.domain.repositories.IVppRepository
import eco.emergi.embit.domain.repositories.VppStats
import eco.emergi.embit.domain.usecases.vpp.ParticipateInDREventUseCase
import eco.emergi.embit.domain.vpp.VppControlExecutor
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Job
import kotlinx.coroutines.flow.*
import kotlinx.coroutines.launch

/**
 * ViewModel for Virtual Power Plant / Demand Response features
 * Manages user participation in grid balancing events
 */
class VppViewModel(
    private val repository: IVppRepository,
    private val participateUseCase: ParticipateInDREventUseCase,
    private val vppExecutor: VppControlExecutor,
    private val viewModelScope: CoroutineScope
) {
    private val _uiState = MutableStateFlow(VppUiState())
    val uiState: StateFlow<VppUiState> = _uiState.asStateFlow()

    private val _currentPowerMeasurement = MutableStateFlow<PowerMeasurement?>(null)
    val currentPowerMeasurement: StateFlow<PowerMeasurement?> = _currentPowerMeasurement.asStateFlow()

    private val _performanceHistory = MutableStateFlow<List<EventPerformance>>(emptyList())
    val performanceHistory: StateFlow<List<EventPerformance>> = _performanceHistory.asStateFlow()

    private val _pastEvents = MutableStateFlow<List<DemandResponseEvent>>(emptyList())
    val pastEvents: StateFlow<List<DemandResponseEvent>> = _pastEvents.asStateFlow()

    private var activeEventsJob: Job? = null
    private var powerMonitoringJob: Job? = null
    private var currentEventJob: Job? = null

    init {
        loadSettings()
        loadTotalStats()
        loadPerformanceHistory()
        loadPastEvents()
        observeActiveEvents()
    }

    /**
     * UI State for VPP screen
     */
    data class VppUiState(
        val isEnabled: Boolean = false,
        val settings: ParticipationSettings = ParticipationSettings(),
        val activeEvent: DemandResponseEvent? = null,
        val currentReduction: Double = 0.0,
        val totalStats: VppStats? = null,
        val isParticipating: Boolean = false,
        val error: String? = null,
        val isLoading: Boolean = false
    )

    /**
     * Load user participation settings
     */
    private fun loadSettings() {
        viewModelScope.launch {
            try {
                val settings = repository.getParticipationSettings()
                _uiState.update { it.copy(
                    isEnabled = settings.enabled,
                    settings = settings,
                    isLoading = false
                )}
            } catch (e: Exception) {
                _uiState.update { it.copy(
                    error = "Failed to load settings: ${e.message}",
                    isLoading = false
                )}
            }
        }
    }

    /**
     * Load total statistics
     */
    private fun loadTotalStats() {
        viewModelScope.launch {
            try {
                val stats = repository.getTotalStats()
                _uiState.update { it.copy(totalStats = stats) }
            } catch (e: Exception) {
                // Silently fail - stats are not critical
            }
        }
    }

    /**
     * Load performance history
     */
    fun loadPerformanceHistory(limit: Int = 20) {
        viewModelScope.launch {
            try {
                val history = repository.getPerformanceHistory(limit)
                _performanceHistory.value = history
            } catch (e: Exception) {
                // Silently fail
            }
        }
    }

    /**
     * Load past events
     */
    private fun loadPastEvents(limit: Int = 20) {
        viewModelScope.launch {
            try {
                val events = repository.getPastEvents(limit)
                _pastEvents.value = events
            } catch (e: Exception) {
                // Silently fail
            }
        }
    }

    /**
     * Observe active demand response events
     */
    private fun observeActiveEvents() {
        activeEventsJob?.cancel()
        activeEventsJob = viewModelScope.launch {
            repository.observeActiveEvents().collect { events ->
                val activeEvent = events.firstOrNull { it.isActive }
                _uiState.update { it.copy(activeEvent = activeEvent) }

                // Auto-participate if enabled and not already participating
                if (activeEvent != null &&
                    _uiState.value.isEnabled &&
                    !_uiState.value.isParticipating) {
                    participateInEvent(activeEvent)
                }
            }
        }
    }

    /**
     * Enable VPP participation
     */
    fun enableParticipation() {
        viewModelScope.launch {
            try {
                val updated = _uiState.value.settings.copy(enabled = true)
                repository.updateParticipationSettings(updated)
                _uiState.update { it.copy(
                    isEnabled = true,
                    settings = updated,
                    error = null
                )}

                // If there's an active event, participate now
                _uiState.value.activeEvent?.let { event ->
                    participateInEvent(event)
                }
            } catch (e: Exception) {
                _uiState.update { it.copy(
                    error = "Failed to enable participation: ${e.message}"
                )}
            }
        }
    }

    /**
     * Disable VPP participation
     */
    fun disableParticipation() {
        viewModelScope.launch {
            try {
                val updated = _uiState.value.settings.copy(enabled = false)
                repository.updateParticipationSettings(updated)
                _uiState.update { it.copy(
                    isEnabled = false,
                    settings = updated,
                    error = null
                )}

                // Stop any active participation
                stopParticipation()
            } catch (e: Exception) {
                _uiState.update { it.copy(
                    error = "Failed to disable participation: ${e.message}"
                )}
            }
        }
    }

    /**
     * Update participation settings
     */
    fun updateSettings(settings: ParticipationSettings) {
        viewModelScope.launch {
            try {
                repository.updateParticipationSettings(settings)
                _uiState.update { it.copy(
                    settings = settings,
                    isEnabled = settings.enabled,
                    error = null
                )}
            } catch (e: Exception) {
                _uiState.update { it.copy(
                    error = "Failed to update settings: ${e.message}"
                )}
            }
        }
    }

    /**
     * Participate in a demand response event
     */
    private fun participateInEvent(event: DemandResponseEvent) {
        // Cancel any existing event participation
        currentEventJob?.cancel()

        _uiState.update { it.copy(isParticipating = true) }

        currentEventJob = viewModelScope.launch {
            try {
                // Start monitoring power consumption
                startPowerMonitoring()

                // Execute the demand response event
                val result = participateUseCase(event)

                result.fold(
                    onSuccess = { performance ->
                        // Refresh stats and history
                        loadTotalStats()
                        loadPerformanceHistory()
                        loadPastEvents()

                        _uiState.update { it.copy(
                            isParticipating = false,
                            error = null
                        )}
                    },
                    onFailure = { error ->
                        _uiState.update { it.copy(
                            isParticipating = false,
                            error = "Event participation failed: ${error.message}"
                        )}
                    }
                )
            } catch (e: Exception) {
                _uiState.update { it.copy(
                    isParticipating = false,
                    error = "Event participation error: ${e.message}"
                )}
            } finally {
                stopPowerMonitoring()
            }
        }
    }

    /**
     * Stop current participation
     */
    private fun stopParticipation() {
        currentEventJob?.cancel()
        currentEventJob = null
        stopPowerMonitoring()

        viewModelScope.launch {
            try {
                vppExecutor.restoreNormalOperation()
                _uiState.update { it.copy(
                    isParticipating = false,
                    currentReduction = 0.0
                )}
            } catch (e: Exception) {
                // Silently fail
            }
        }
    }

    /**
     * Start monitoring power consumption in real-time
     */
    private fun startPowerMonitoring() {
        powerMonitoringJob?.cancel()
        powerMonitoringJob = viewModelScope.launch {
            vppExecutor.observePowerConsumption().collect { measurement ->
                _currentPowerMeasurement.value = measurement

                // Calculate current reduction
                // This assumes we stored baseline power when event started
                // For now, we'll update reduction based on the measurement
                _uiState.update { state ->
                    state.copy(currentReduction = measurement.powerWatts)
                }
            }
        }
    }

    /**
     * Stop power monitoring
     */
    private fun stopPowerMonitoring() {
        powerMonitoringJob?.cancel()
        powerMonitoringJob = null
    }

    /**
     * Refresh all data
     */
    fun refresh() {
        loadSettings()
        loadTotalStats()
        loadPerformanceHistory()
        loadPastEvents()
    }

    /**
     * Clear error message
     */
    fun clearError() {
        _uiState.update { it.copy(error = null) }
    }

    /**
     * Clean up resources
     */
    fun onCleared() {
        activeEventsJob?.cancel()
        powerMonitoringJob?.cancel()
        currentEventJob?.cancel()
    }
}
