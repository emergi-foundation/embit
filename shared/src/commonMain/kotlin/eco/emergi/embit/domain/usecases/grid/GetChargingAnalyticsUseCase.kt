package eco.emergi.embit.domain.usecases.grid

import eco.emergi.embit.domain.models.SmartChargingSession
import eco.emergi.embit.domain.repositories.IAuthRepository
import eco.emergi.embit.domain.repositories.IGridDataRepository

/**
 * Analyzes charging history and provides insights to help users optimize their charging behavior.
 */
class GetChargingAnalyticsUseCase(
    private val gridDataRepository: IGridDataRepository,
    private val authRepository: IAuthRepository
) {
    /**
     * Get comprehensive charging analytics for the current user
     *
     * @param limit Number of recent sessions to analyze (default: 30 days worth)
     * @return ChargingAnalytics with insights and recommendations
     */
    suspend operator fun invoke(limit: Int = 100): Result<ChargingAnalytics> {
        val userId = authRepository.getCurrentUser()?.uid
            ?: return Result.failure(Exception("User not authenticated"))

        return try {
            val sessionsResult = gridDataRepository.getChargingHistory(userId, limit)
            val sessions = sessionsResult.getOrNull()
                ?: return Result.failure(Exception("Failed to load charging history"))

            if (sessions.isEmpty()) {
                return Result.success(ChargingAnalytics.empty())
            }

            val analytics = calculateAnalytics(sessions)
            Result.success(analytics)
        } catch (e: Exception) {
            Result.failure(Exception("Failed to calculate analytics: ${e.message}"))
        }
    }

    /**
     * Calculate comprehensive analytics from charging sessions
     */
    private fun calculateAnalytics(sessions: List<SmartChargingSession>): ChargingAnalytics {
        val completedSessions = sessions.filter { it.endTime != null }

        // Basic statistics
        val totalSessions = completedSessions.size
        val optimalSessions = completedSessions.count { it.wasOptimal }
        val optimalPercentage = if (totalSessions > 0) {
            (optimalSessions.toDouble() / totalSessions) * 100
        } else 0.0

        // Cost and carbon
        val totalCost = completedSessions.sumOf { it.costEstimate }
        val totalCarbon = completedSessions.sumOf { it.carbonEmissions }
        val totalPotentialSavings = completedSessions.mapNotNull { it.potentialSavings }.sum()

        // Energy
        val totalEnergy = completedSessions.sumOf { it.energyConsumedKwh }
        val averageEnergyPerSession = if (totalSessions > 0) totalEnergy / totalSessions else 0.0

        // Duration and battery stats
        val averageDuration = calculateAverageDuration(completedSessions)
        val averageBatteryGain = calculateAverageBatteryGain(completedSessions)

        // Pricing and carbon averages
        val averagePrice = if (totalSessions > 0) totalCost / totalEnergy else 0.0
        val averageCarbon = if (totalSessions > 0) totalCarbon / totalEnergy else 0.0

        // Recommendations
        val recommendations = generateRecommendations(
            optimalPercentage = optimalPercentage,
            potentialSavings = totalPotentialSavings,
            averageCarbon = averageCarbon,
            sessions = completedSessions
        )

        return ChargingAnalytics(
            totalSessions = totalSessions,
            optimalSessions = optimalSessions,
            optimalPercentage = optimalPercentage,
            totalCostDollars = totalCost,
            totalCarbonGrams = totalCarbon,
            potentialSavingsDollars = totalPotentialSavings,
            totalEnergyKwh = totalEnergy,
            averageEnergyPerSessionKwh = averageEnergyPerSession,
            averageDurationMinutes = averageDuration,
            averageBatteryGainPercent = averageBatteryGain,
            averagePricePerKwh = averagePrice,
            averageCarbonPerKwh = averageCarbon,
            recommendations = recommendations
        )
    }

    /**
     * Calculate average session duration in minutes
     */
    private fun calculateAverageDuration(sessions: List<SmartChargingSession>): Double {
        if (sessions.isEmpty()) return 0.0

        val totalDuration = sessions.sumOf { session ->
            val endTime = session.endTime ?: session.startTime
            (endTime - session.startTime) / (1000.0 * 60.0) // Convert to minutes
        }

        return totalDuration / sessions.size
    }

    /**
     * Calculate average battery percentage gain per session
     */
    private fun calculateAverageBatteryGain(sessions: List<SmartChargingSession>): Double {
        if (sessions.isEmpty()) return 0.0

        val totalGain = sessions.sumOf { session ->
            val endLevel = session.endBatteryLevel ?: session.startBatteryLevel
            (endLevel - session.startBatteryLevel).toDouble()
        }

        return totalGain / sessions.size
    }

    /**
     * Generate personalized recommendations based on charging patterns
     */
    private fun generateRecommendations(
        optimalPercentage: Double,
        potentialSavings: Double,
        averageCarbon: Double,
        sessions: List<SmartChargingSession>
    ): List<ChargingRecommendation> {
        val recommendations = mutableListOf<ChargingRecommendation>()

        // Recommendation 1: Timing optimization
        if (optimalPercentage < 50) {
            recommendations.add(
                ChargingRecommendation(
                    priority = RecommendationPriority.HIGH,
                    title = "Optimize charging timing",
                    description = "Only ${optimalPercentage.toInt()}% of your charging sessions occur during optimal times. " +
                            "Charging during off-peak hours could save you $${String.format("%.2f", potentialSavings)}.",
                    action = "Enable smart charging notifications to get alerts for optimal charging times."
                )
            )
        }

        // Recommendation 2: Carbon reduction
        if (averageCarbon > 300) {
            recommendations.add(
                ChargingRecommendation(
                    priority = RecommendationPriority.MEDIUM,
                    title = "Reduce carbon footprint",
                    description = "Your average charging carbon intensity is ${averageCarbon.toInt()}g CO₂/kWh. " +
                            "Charging when renewable energy is high can reduce your environmental impact.",
                    action = "Check the grid status before charging to find cleaner energy times."
                )
            )
        }

        // Recommendation 3: Cost savings
        if (potentialSavings > 5.0) {
            recommendations.add(
                ChargingRecommendation(
                    priority = RecommendationPriority.HIGH,
                    title = "Significant savings available",
                    description = "You could have saved $${String.format("%.2f", potentialSavings)} by charging at better times.",
                    action = "Set up automatic charging schedules for off-peak hours."
                )
            )
        }

        // Recommendation 4: Charging habits
        val recentSessions = sessions.take(10)
        if (recentSessions.size >= 5) {
            val recentOptimalPercentage = (recentSessions.count { it.wasOptimal }.toDouble() / recentSessions.size) * 100
            if (recentOptimalPercentage > 70) {
                recommendations.add(
                    ChargingRecommendation(
                        priority = RecommendationPriority.LOW,
                        title = "Great charging habits!",
                        description = "You're charging optimally ${recentOptimalPercentage.toInt()}% of the time recently. Keep it up!",
                        action = ""
                    )
                )
            }
        }

        return recommendations
    }
}

/**
 * Comprehensive charging analytics data
 */
data class ChargingAnalytics(
    val totalSessions: Int,
    val optimalSessions: Int,
    val optimalPercentage: Double,
    val totalCostDollars: Double,
    val totalCarbonGrams: Double,
    val potentialSavingsDollars: Double,
    val totalEnergyKwh: Double,
    val averageEnergyPerSessionKwh: Double,
    val averageDurationMinutes: Double,
    val averageBatteryGainPercent: Double,
    val averagePricePerKwh: Double,
    val averageCarbonPerKwh: Double,
    val recommendations: List<ChargingRecommendation>
) {
    companion object {
        fun empty() = ChargingAnalytics(
            totalSessions = 0,
            optimalSessions = 0,
            optimalPercentage = 0.0,
            totalCostDollars = 0.0,
            totalCarbonGrams = 0.0,
            potentialSavingsDollars = 0.0,
            totalEnergyKwh = 0.0,
            averageEnergyPerSessionKwh = 0.0,
            averageDurationMinutes = 0.0,
            averageBatteryGainPercent = 0.0,
            averagePricePerKwh = 0.0,
            averageCarbonPerKwh = 0.0,
            recommendations = emptyList()
        )
    }
}

/**
 * Personalized recommendation for charging optimization
 */
data class ChargingRecommendation(
    val priority: RecommendationPriority,
    val title: String,
    val description: String,
    val action: String
)

/**
 * Priority level for recommendations
 */
enum class RecommendationPriority {
    HIGH,
    MEDIUM,
    LOW
}
