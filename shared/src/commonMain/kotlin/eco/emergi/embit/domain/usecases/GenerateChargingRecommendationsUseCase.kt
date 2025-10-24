package eco.emergi.embit.domain.usecases

import eco.emergi.embit.domain.models.BatteryReading
import eco.emergi.embit.domain.repositories.IBatteryRepository
import kotlinx.datetime.Clock
import kotlin.time.Duration.Companion.days

/**
 * Use case for generating personalized charging recommendations
 * to optimize battery health and longevity.
 */
class GenerateChargingRecommendationsUseCase(
    private val repository: IBatteryRepository
) {
    /**
     * Generate charging recommendations based on current state and historical patterns
     */
    suspend operator fun invoke(currentReading: BatteryReading?): Result<ChargingRecommendations> {
        if (currentReading == null) {
            return Result.failure(Exception("No current battery reading available"))
        }

        val now = Clock.System.now()
        val sevenDaysAgo = now - 7.days

        val stats = repository.calculateStatistics(sevenDaysAgo, now).getOrNull()

        val recommendations = mutableListOf<ChargingRecommendation>()

        // Current state recommendations
        if (currentReading.isCharging) {
            recommendations.addAll(getChargingRecommendations(currentReading, stats))
        } else {
            recommendations.addAll(getDischargingRecommendations(currentReading, stats))
        }

        // Pattern-based recommendations
        stats?.let {
            recommendations.addAll(getPatternBasedRecommendations(it))
        }

        // Temperature-based recommendations
        currentReading.temperatureCelsius?.let { temp ->
            recommendations.addAll(getTemperatureRecommendations(temp, currentReading.isCharging))
        }

        return Result.success(
            ChargingRecommendations(
                recommendations = recommendations,
                currentBatteryLevel = currentReading.batteryPercentage,
                isCharging = currentReading.isCharging,
                temperature = currentReading.temperatureCelsius
            )
        )
    }

    private fun getChargingRecommendations(
        reading: BatteryReading,
        stats: eco.emergi.embit.domain.models.BatteryStatistics?
    ): List<ChargingRecommendation> {
        val recommendations = mutableListOf<ChargingRecommendation>()

        when {
            reading.batteryPercentage >= 95 -> {
                recommendations.add(
                    ChargingRecommendation(
                        priority = RecommendationPriority.HIGH,
                        action = "Unplug charger now",
                        reason = "Battery is fully charged. Overcharging reduces battery lifespan.",
                        expectedImpact = "Extends battery life by 20-30%"
                    )
                )
            }
            reading.batteryPercentage >= 85 -> {
                recommendations.add(
                    ChargingRecommendation(
                        priority = RecommendationPriority.MEDIUM,
                        action = "Consider unplugging soon",
                        reason = "Optimal battery range is 20-80%. Charging to 100% frequently degrades battery.",
                        expectedImpact = "Maintains battery health"
                    )
                )
            }
            reading.batteryPercentage <= 30 -> {
                recommendations.add(
                    ChargingRecommendation(
                        priority = RecommendationPriority.LOW,
                        action = "Continue charging",
                        reason = "Battery is still low. Safe to charge to 80-85%.",
                        expectedImpact = "Ensures adequate charge"
                    )
                )
            }
        }

        // Check charging frequency
        stats?.let { s ->
            val avgChargesPerDay = s.chargeCount / 7.0
            if (avgChargesPerDay > 3) {
                recommendations.add(
                    ChargingRecommendation(
                        priority = RecommendationPriority.MEDIUM,
                        action = "Reduce charging frequency",
                        reason = "You're charging ${formatDecimal(avgChargesPerDay, 1)} times per day. Aim for once daily.",
                        expectedImpact = "Reduces charge cycles, extends battery life"
                    )
                )
            }
        }

        return recommendations
    }

    private fun getDischargingRecommendations(
        reading: BatteryReading,
        stats: eco.emergi.embit.domain.models.BatteryStatistics?
    ): List<ChargingRecommendation> {
        val recommendations = mutableListOf<ChargingRecommendation>()

        when {
            reading.batteryPercentage <= 15 -> {
                recommendations.add(
                    ChargingRecommendation(
                        priority = RecommendationPriority.HIGH,
                        action = "Charge battery soon",
                        reason = "Battery is critically low. Deep discharges below 20% damage battery health.",
                        expectedImpact = "Prevents battery degradation"
                    )
                )
            }
            reading.batteryPercentage <= 25 -> {
                recommendations.add(
                    ChargingRecommendation(
                        priority = RecommendationPriority.MEDIUM,
                        action = "Consider charging",
                        reason = "Optimal charging range is 20-80%. Charge before reaching 15%.",
                        expectedImpact = "Maintains battery health"
                    )
                )
            }
            reading.batteryPercentage >= 85 -> {
                recommendations.add(
                    ChargingRecommendation(
                        priority = RecommendationPriority.LOW,
                        action = "No need to charge yet",
                        reason = "Battery level is good. You can wait until 20-30% before charging.",
                        expectedImpact = "Optimal usage pattern"
                    )
                )
            }
        }

        return recommendations
    }

    private fun getPatternBasedRecommendations(
        stats: eco.emergi.embit.domain.models.BatteryStatistics
    ): List<ChargingRecommendation> {
        val recommendations = mutableListOf<ChargingRecommendation>()

        // Check if device is plugged in too often
        if (stats.chargingTimePercentage > 70f) {
            recommendations.add(
                ChargingRecommendation(
                    priority = RecommendationPriority.MEDIUM,
                    action = "Reduce time on charger",
                    reason = "Device is plugged in ${formatDecimal(stats.chargingTimePercentage.toDouble(), 0)}% of the time. This accelerates battery wear.",
                    expectedImpact = "Reduces continuous charging stress"
                )
            )
        }

        // Check average charge count
        val avgChargesPerDay = stats.chargeCount / 7.0
        if (avgChargesPerDay < 0.5) {
            recommendations.add(
                ChargingRecommendation(
                    priority = RecommendationPriority.LOW,
                    action = "Charge more regularly",
                    reason = "You're letting battery drain too low. Charge when reaching 20-30%.",
                    expectedImpact = "Prevents deep discharge damage"
                )
            )
        }

        return recommendations
    }

    private fun getTemperatureRecommendations(
        temperature: Float,
        isCharging: Boolean
    ): List<ChargingRecommendation> {
        val recommendations = mutableListOf<ChargingRecommendation>()

        when {
            temperature > 45f && isCharging -> {
                recommendations.add(
                    ChargingRecommendation(
                        priority = RecommendationPriority.HIGH,
                        action = "Stop charging immediately",
                        reason = "Temperature is dangerously high (${formatDecimal(temperature.toDouble(), 1)}°C). Charging at high temperatures severely damages battery.",
                        expectedImpact = "Prevents permanent battery damage"
                    )
                )
            }
            temperature > 40f && isCharging -> {
                recommendations.add(
                    ChargingRecommendation(
                        priority = RecommendationPriority.HIGH,
                        action = "Let device cool before continuing",
                        reason = "Temperature is elevated (${formatDecimal(temperature.toDouble(), 1)}°C). Remove case, place in cooler location.",
                        expectedImpact = "Reduces heat-related degradation"
                    )
                )
            }
            temperature > 35f && isCharging -> {
                recommendations.add(
                    ChargingRecommendation(
                        priority = RecommendationPriority.MEDIUM,
                        action = "Improve cooling while charging",
                        reason = "Charging at ${formatDecimal(temperature.toDouble(), 1)}°C. Cooler is better for battery health.",
                        expectedImpact = "Optimizes charging conditions"
                    )
                )
            }
            temperature < 10f && isCharging -> {
                recommendations.add(
                    ChargingRecommendation(
                        priority = RecommendationPriority.MEDIUM,
                        action = "Warm device before charging",
                        reason = "Battery is cold (${formatDecimal(temperature.toDouble(), 1)}°C). Charging in cold reduces efficiency.",
                        expectedImpact = "Improves charging safety"
                    )
                )
            }
        }

        return recommendations
    }
}

/**
 * Container for charging recommendations
 */
data class ChargingRecommendations(
    val recommendations: List<ChargingRecommendation>,
    val currentBatteryLevel: Int,
    val isCharging: Boolean,
    val temperature: Float?
) {
    /**
     * Get highest priority recommendation
     */
    val primaryRecommendation: ChargingRecommendation?
        get() = recommendations.maxByOrNull { it.priority.ordinal }

    /**
     * Count of high priority recommendations
     */
    val urgentCount: Int
        get() = recommendations.count { it.priority == RecommendationPriority.HIGH }
}

/**
 * Individual charging recommendation
 */
data class ChargingRecommendation(
    val priority: RecommendationPriority,
    val action: String,
    val reason: String,
    val expectedImpact: String
)

/**
 * Priority levels for recommendations
 */
enum class RecommendationPriority {
    LOW,
    MEDIUM,
    HIGH
}

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
