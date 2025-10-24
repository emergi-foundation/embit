package eco.emergi.embit.presentation

import eco.emergi.embit.domain.models.BatteryHealth
import eco.emergi.embit.domain.repositories.IBatteryRepository
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch

/**
 * ViewModel for battery health screen.
 */
class BatteryHealthViewModel(
    private val batteryRepository: IBatteryRepository,
    private val viewModelScope: CoroutineScope
) {
    private val _uiState = MutableStateFlow<BatteryHealthUiState>(BatteryHealthUiState.Loading)
    val uiState: StateFlow<BatteryHealthUiState> = _uiState.asStateFlow()

    init {
        loadBatteryHealth()
    }

    /**
     * Load current battery health
     */
    fun loadBatteryHealth() {
        _uiState.value = BatteryHealthUiState.Loading

        viewModelScope.launch {
            batteryRepository.calculateBatteryHealth()
                .onSuccess { health ->
                    val recommendations = generateRecommendations(health)
                    _uiState.value = BatteryHealthUiState.Success(
                        health = health,
                        recommendations = recommendations
                    )
                }
                .onFailure { error ->
                    _uiState.value = BatteryHealthUiState.Error(
                        error.message ?: "Failed to calculate battery health"
                    )
                }
        }
    }

    /**
     * Refresh battery health
     */
    fun refresh() {
        loadBatteryHealth()
    }

    private fun generateRecommendations(health: BatteryHealth): List<String> {
        val recommendations = mutableListOf<String>()

        // Temperature-based recommendations
        health.averageTemperature?.let { temp ->
            when {
                temp > 40f -> recommendations.add("⚠️ Battery temperature is very high. Avoid heavy usage and direct sunlight.")
                temp > 35f -> recommendations.add("Battery is running warm. Consider removing case or reducing usage.")
                temp < 15f -> recommendations.add("Battery is cold. Performance may be reduced in cold conditions.")
            }
        }

        // Charge frequency recommendations
        health.chargeCount?.let { count ->
            val avgPerDay = count / 30.0
            when {
                avgPerDay > 3 -> recommendations.add("You're charging frequently. Consider letting battery drain more between charges.")
                avgPerDay < 0.5 -> recommendations.add("Good charging habits! You're not over-charging.")
            }
        }

        // Health-based recommendations
        when (health.healthStatus) {
            eco.emergi.embit.domain.models.HealthStatus.EXCELLENT ->
                recommendations.add("✅ Battery health is excellent! Keep up the good habits.")
            eco.emergi.embit.domain.models.HealthStatus.GOOD ->
                recommendations.add("Battery health is good. Continue current usage patterns.")
            eco.emergi.embit.domain.models.HealthStatus.FAIR ->
                recommendations.add("Battery health is fair. Consider optimizing charging habits.")
            eco.emergi.embit.domain.models.HealthStatus.POOR ->
                recommendations.add("⚠️ Battery health is declining. Avoid extreme temperatures and frequent full discharges.")
            eco.emergi.embit.domain.models.HealthStatus.CRITICAL ->
                recommendations.add("❌ Battery health is critical. Consider battery replacement.")
            eco.emergi.embit.domain.models.HealthStatus.UNKNOWN ->
                recommendations.add("Need more data to assess battery health.")
        }

        if (recommendations.isEmpty()) {
            recommendations.add("Continue monitoring battery usage for personalized recommendations.")
        }

        return recommendations
    }
}

/**
 * UI state for battery health screen
 */
sealed class BatteryHealthUiState {
    data object Loading : BatteryHealthUiState()

    data class Success(
        val health: BatteryHealth,
        val recommendations: List<String>
    ) : BatteryHealthUiState()

    data class Error(val message: String) : BatteryHealthUiState()
}
