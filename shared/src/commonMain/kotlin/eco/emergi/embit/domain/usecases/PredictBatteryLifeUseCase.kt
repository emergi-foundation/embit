package eco.emergi.embit.domain.usecases

import eco.emergi.embit.domain.models.BatteryReading
import eco.emergi.embit.domain.repositories.IBatteryRepository
import kotlinx.datetime.Clock
import kotlinx.datetime.Instant
import kotlin.time.Duration.Companion.hours

/**
 * Use case for predicting remaining battery life based on current usage patterns.
 */
class PredictBatteryLifeUseCase(
    private val repository: IBatteryRepository
) {
    /**
     * Predict remaining battery life based on recent usage
     * @param currentReading Current battery reading
     * @return Predicted time remaining in hours
     */
    suspend operator fun invoke(currentReading: BatteryReading?): Result<BatteryLifePrediction> {
        if (currentReading == null) {
            return Result.failure(Exception("No current battery reading available"))
        }

        // If charging, predict time to full charge
        if (currentReading.isCharging) {
            val timeToFull = predictTimeToFullCharge(currentReading)
            return Result.success(
                BatteryLifePrediction(
                    isCharging = true,
                    hoursRemaining = timeToFull,
                    percentagePerHour = calculateChargingRate(currentReading),
                    confidenceLevel = ConfidenceLevel.MEDIUM,
                    basedOnMinutes = 60
                )
            )
        }

        // If discharging, predict time until battery depleted
        val now = Clock.System.now()
        val oneHourAgo = now - 1.hours

        // Get recent readings to calculate discharge rate
        val recentReadings = repository.getReadingsInRange(oneHourAgo, now, limit = 100)
            .getOrNull() ?: emptyList()

        if (recentReadings.size < 5) {
            // Not enough data for accurate prediction, use simple estimate
            return Result.success(
                BatteryLifePrediction(
                    isCharging = false,
                    hoursRemaining = estimateSimpleDischargeTime(currentReading),
                    percentagePerHour = -15.0, // Rough estimate
                    confidenceLevel = ConfidenceLevel.LOW,
                    basedOnMinutes = 5
                )
            )
        }

        // Calculate average discharge rate
        val dischargeRate = calculateDischargeRate(recentReadings)
        val hoursRemaining = if (dischargeRate > 0) {
            currentReading.batteryPercentage / dischargeRate
        } else {
            8.0 // Default if no discharge detected
        }

        // Confidence based on data quality
        val confidence = when {
            recentReadings.size >= 30 -> ConfidenceLevel.HIGH
            recentReadings.size >= 15 -> ConfidenceLevel.MEDIUM
            else -> ConfidenceLevel.LOW
        }

        return Result.success(
            BatteryLifePrediction(
                isCharging = false,
                hoursRemaining = hoursRemaining.coerceIn(0.1, 48.0),
                percentagePerHour = -dischargeRate,
                confidenceLevel = confidence,
                basedOnMinutes = recentReadings.size
            )
        )
    }

    private fun predictTimeToFullCharge(reading: BatteryReading): Double {
        val remainingPercentage = 100 - reading.batteryPercentage

        // Estimate charging rate based on charging type and current
        val estimatedChargingRatePerHour = when (reading.batteryState) {
            is eco.emergi.embit.domain.models.BatteryState.Charging -> {
                when (reading.batteryState.chargingType) {
                    eco.emergi.embit.domain.models.ChargingType.AC -> 45.0 // Fast charging
                    eco.emergi.embit.domain.models.ChargingType.USB -> 25.0 // Slow charging
                    eco.emergi.embit.domain.models.ChargingType.WIRELESS -> 30.0 // Medium
                    else -> 35.0 // Unknown, assume medium
                }
            }
            else -> 35.0
        }

        // Charging slows down significantly above 80%
        val adjustedRate = if (reading.batteryPercentage > 80) {
            estimatedChargingRatePerHour * 0.5
        } else if (reading.batteryPercentage > 90) {
            estimatedChargingRatePerHour * 0.3
        } else {
            estimatedChargingRatePerHour
        }

        return (remainingPercentage / adjustedRate).coerceIn(0.1, 6.0)
    }

    private fun calculateChargingRate(reading: BatteryReading): Double {
        return when (reading.batteryState) {
            is eco.emergi.embit.domain.models.BatteryState.Charging -> {
                when (reading.batteryState.chargingType) {
                    eco.emergi.embit.domain.models.ChargingType.AC -> 45.0
                    eco.emergi.embit.domain.models.ChargingType.USB -> 25.0
                    eco.emergi.embit.domain.models.ChargingType.WIRELESS -> 30.0
                    else -> 35.0
                }
            }
            else -> 0.0
        }
    }

    private fun calculateDischargeRate(readings: List<BatteryReading>): Double {
        if (readings.size < 2) return 15.0 // Default ~6-7 hours battery life

        val sortedReadings = readings.sortedBy { it.timestamp }
        val firstReading = sortedReadings.first()
        val lastReading = sortedReadings.last()

        val percentageDrop = firstReading.batteryPercentage - lastReading.batteryPercentage
        val timeElapsedHours = (lastReading.timestamp - firstReading.timestamp).inWholeSeconds / 3600.0

        return if (timeElapsedHours > 0 && percentageDrop > 0) {
            percentageDrop / timeElapsedHours
        } else {
            15.0 // Default
        }
    }

    private fun estimateSimpleDischargeTime(reading: BatteryReading): Double {
        // Simple estimate based on current power draw
        val power = reading.powerMilliwatts

        // Typical battery: 3000-4000 mAh at 3.7V = ~11-15 Wh
        val typicalCapacityWh = 13.0
        val remainingCapacityWh = typicalCapacityWh * (reading.batteryPercentage / 100.0)

        return if (power > 100) {
            (remainingCapacityWh / (power / 1000.0)).coerceIn(0.5, 24.0)
        } else {
            8.0 // Default ~8 hours
        }
    }
}

/**
 * Battery life prediction result
 */
data class BatteryLifePrediction(
    val isCharging: Boolean,
    val hoursRemaining: Double,
    val percentagePerHour: Double,
    val confidenceLevel: ConfidenceLevel,
    val basedOnMinutes: Int
) {
    /**
     * Get formatted time remaining as "Xh Ym"
     */
    val formattedTime: String
        get() {
            val hours = hoursRemaining.toInt()
            val minutes = ((hoursRemaining - hours) * 60).toInt()
            return if (hours > 0) {
                "${hours}h ${minutes}m"
            } else {
                "${minutes}m"
            }
        }

    /**
     * Get prediction quality message
     */
    val qualityMessage: String
        get() = when (confidenceLevel) {
            ConfidenceLevel.HIGH -> "Based on recent usage patterns"
            ConfidenceLevel.MEDIUM -> "Estimate based on limited data"
            ConfidenceLevel.LOW -> "Rough estimate - gathering more data"
        }
}

/**
 * Confidence level for predictions
 */
enum class ConfidenceLevel {
    LOW,    // < 15 minutes of data
    MEDIUM, // 15-30 minutes of data
    HIGH    // > 30 minutes of data
}
