package eco.emergi.embit.presentation

import eco.emergi.embit.domain.usecases.ManageBatteryDataUseCase
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch

/**
 * ViewModel for settings and data management screen.
 */
class SettingsViewModel(
    private val manageBatteryDataUseCase: ManageBatteryDataUseCase,
    private val viewModelScope: CoroutineScope
) {
    private val _uiState = MutableStateFlow<SettingsUiState>(SettingsUiState.Idle)
    val uiState: StateFlow<SettingsUiState> = _uiState.asStateFlow()

    private val _databaseStats = MutableStateFlow<DatabaseStatsUi?>(null)
    val databaseStats: StateFlow<DatabaseStatsUi?> = _databaseStats.asStateFlow()

    init {
        loadDatabaseStats()
    }

    /**
     * Load database statistics
     */
    fun loadDatabaseStats() {
        viewModelScope.launch {
            manageBatteryDataUseCase.getDatabaseStats()
                .onSuccess { stats ->
                    _databaseStats.value = DatabaseStatsUi(
                        totalReadings = stats.totalReadings,
                        estimatedSizeMB = "${formatDecimal(stats.estimatedSizeMB.toDouble(), 2)} MB"
                    )
                }
        }
    }

    /**
     * Export battery data to JSON
     */
    fun exportData() {
        _uiState.value = SettingsUiState.ExportingData

        viewModelScope.launch {
            manageBatteryDataUseCase.exportData()
                .onSuccess { jsonData ->
                    _uiState.value = SettingsUiState.ExportSuccess(jsonData)
                }
                .onFailure { error ->
                    _uiState.value = SettingsUiState.Error(
                        "Failed to export data: ${error.message}"
                    )
                }
        }
    }

    /**
     * Import battery data from JSON
     */
    fun importData(jsonData: String) {
        _uiState.value = SettingsUiState.ImportingData

        viewModelScope.launch {
            manageBatteryDataUseCase.importData(jsonData)
                .onSuccess { count ->
                    _uiState.value = SettingsUiState.ImportSuccess(count)
                    loadDatabaseStats()
                }
                .onFailure { error ->
                    _uiState.value = SettingsUiState.Error(
                        "Failed to import data: ${error.message}"
                    )
                }
        }
    }

    /**
     * Clean up old battery data
     */
    fun cleanupOldData(daysToKeep: Int = 90) {
        _uiState.value = SettingsUiState.CleaningData

        viewModelScope.launch {
            manageBatteryDataUseCase.cleanupOldData(daysToKeep)
                .onSuccess { deletedCount ->
                    _uiState.value = SettingsUiState.CleanupSuccess(deletedCount)
                    loadDatabaseStats()
                }
                .onFailure { error ->
                    _uiState.value = SettingsUiState.Error(
                        "Failed to cleanup data: ${error.message}"
                    )
                }
        }
    }

    /**
     * Clear all battery data (use with caution!)
     */
    fun clearAllData() {
        _uiState.value = SettingsUiState.ClearingAllData

        viewModelScope.launch {
            manageBatteryDataUseCase.clearAllData()
                .onSuccess {
                    _uiState.value = SettingsUiState.ClearAllSuccess
                    loadDatabaseStats()
                }
                .onFailure { error ->
                    _uiState.value = SettingsUiState.Error(
                        "Failed to clear data: ${error.message}"
                    )
                }
        }
    }

    /**
     * Reset UI state to idle
     */
    fun resetState() {
        _uiState.value = SettingsUiState.Idle
    }
}

/**
 * UI state for settings screen
 */
sealed class SettingsUiState {
    data object Idle : SettingsUiState()
    data object ExportingData : SettingsUiState()
    data class ExportSuccess(val jsonData: String) : SettingsUiState()
    data object ImportingData : SettingsUiState()
    data class ImportSuccess(val recordCount: Int) : SettingsUiState()
    data object CleaningData : SettingsUiState()
    data class CleanupSuccess(val deletedCount: Int) : SettingsUiState()
    data object ClearingAllData : SettingsUiState()
    data object ClearAllSuccess : SettingsUiState()
    data class Error(val message: String) : SettingsUiState()
}

/**
 * Database statistics for UI display
 */
data class DatabaseStatsUi(
    val totalReadings: Long,
    val estimatedSizeMB: String
)

/**
 * Format a decimal number to a specified number of decimal places
 * Multiplatform-compatible alternative to String.format()
 */
private fun formatDecimal(value: Double, decimalPlaces: Int): String {
    val multiplier = when (decimalPlaces) {
        0 -> 1.0
        1 -> 10.0
        2 -> 100.0
        else -> 10.0
    }
    val rounded = kotlin.math.round(value * multiplier) / multiplier
    return when (decimalPlaces) {
        0 -> rounded.toInt().toString()
        else -> {
            val intPart = rounded.toInt()
            val fracPart = ((rounded - intPart) * multiplier).toInt()
            "$intPart.${fracPart.toString().padStart(decimalPlaces, '0')}"
        }
    }
}
