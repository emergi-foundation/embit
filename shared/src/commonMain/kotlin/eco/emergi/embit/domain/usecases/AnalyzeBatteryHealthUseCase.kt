package eco.emergi.embit.domain.usecases

import eco.emergi.embit.domain.models.*
import eco.emergi.embit.domain.repositories.IBatteryRepository
import kotlinx.datetime.Clock
import kotlin.time.Duration.Companion.days

/**
 * Advanced use case for detailed battery health analysis.
 * Provides comprehensive health metrics and personalized recommendations.
 */
class AnalyzeBatteryHealthUseCase(
    private val repository: IBatteryRepository
) {
    /**
     * Perform comprehensive battery health analysis
     */
    suspend operator fun invoke(): Result<BatteryHealthAnalysis> {
        val now = Clock.System.now()
        val thirtyDaysAgo = now - 30.days

        // Get statistics for last 30 days
        val stats = repository.calculateStatistics(thirtyDaysAgo, now)
            .getOrNull() ?: return Result.failure(Exception("Insufficient data for analysis"))

        // Calculate health metrics
        val healthScore = calculateHealthScore(stats)
        val degradationRate = estimateDegradationRate(stats)
        val recommendations = generateAdvancedRecommendations(stats, healthScore)
        val predictions = generatePredictions(stats, degradationRate)

        val analysis = BatteryHealthAnalysis(
            timestamp = now,
            overallScore = healthScore,
            temperatureScore = calculateTemperatureScore(stats),
            chargingPatternsScore = calculateChargingPatternsScore(stats),
            usageScore = calculateUsageScore(stats),
            degradationRate = degradationRate,
            estimatedLifetimeRemaining = estimateLifetimeRemaining(degradationRate),
            recommendations = recommendations,
            predictions = predictions
        )

        return Result.success(analysis)
    }

    private fun calculateHealthScore(stats: BatteryStatistics): Int {
        var score = 100

        // Temperature impact (30 points max)
        stats.averageTemperature?.let { temp ->
            score -= when {
                temp > 45f -> 30
                temp > 40f -> 20
                temp > 35f -> 10
                temp > 30f -> 5
                temp < 10f -> 10 // Cold also affects battery
                else -> 0
            }
        }

        // Charging patterns impact (30 points max)
        val avgChargesPerDay = stats.chargeCount / 30.0
        score -= when {
            avgChargesPerDay > 4 -> 30
            avgChargesPerDay > 3 -> 20
            avgChargesPerDay > 2 -> 10
            avgChargesPerDay < 0.3 -> 5 // Too few charges might mean letting battery drain too low
            else -> 0
        }

        // Power consumption patterns (20 points max)
        if (stats.averagePowerMilliwatts > 5000) {
            score -= 20 // Very high power draw
        } else if (stats.averagePowerMilliwatts > 3000) {
            score -= 10
        }

        // Charging time ratio (20 points max)
        val chargingRatio = stats.chargingTimePercentage
        if (chargingRatio > 80f) {
            score -= 20 // Device is plugged in too often
        } else if (chargingRatio > 60f) {
            score -= 10
        }

        return score.coerceIn(0, 100)
    }

    private fun calculateTemperatureScore(stats: BatteryStatistics): Int {
        stats.averageTemperature?.let { temp ->
            return when {
                temp in 15f..30f -> 100 // Ideal range
                temp in 30f..35f -> 85
                temp in 35f..40f -> 70
                temp in 40f..45f -> 50
                temp > 45f -> 25
                temp < 10f -> 60 // Cold
                else -> 80
            }
        }
        return 80 // Unknown, assume reasonable
    }

    private fun calculateChargingPatternsScore(stats: BatteryStatistics): Int {
        val avgChargesPerDay = stats.chargeCount / 30.0
        return when {
            avgChargesPerDay in 0.8..1.5 -> 100 // Ideal: once per day
            avgChargesPerDay in 1.5..2.0 -> 90
            avgChargesPerDay in 0.5..0.8 -> 85
            avgChargesPerDay in 2.0..3.0 -> 75
            avgChargesPerDay > 3.0 -> 50
            else -> 70
        }
    }

    private fun calculateUsageScore(stats: BatteryStatistics): Int {
        // Based on power consumption patterns
        val avgPower = stats.averagePowerMilliwatts
        return when {
            avgPower < 1000 -> 100 // Light usage
            avgPower < 2000 -> 90
            avgPower < 3000 -> 80
            avgPower < 4000 -> 70
            avgPower < 5000 -> 60
            else -> 50 // Heavy usage
        }
    }

    private fun estimateDegradationRate(stats: BatteryStatistics): Float {
        // Simplified degradation estimation based on charge cycles and temperature
        val cyclesPerDay = stats.chargeCount / 30.0
        val yearlyChargeCycles = (cyclesPerDay * 365).toFloat()

        // Normal degradation: ~20% after 500 cycles (1.5 years at 1 cycle/day)
        // Accelerated by high temperature
        var baseRate = (yearlyChargeCycles / 500f) * 20f // % per year

        // Temperature acceleration factor
        stats.averageTemperature?.let { temp ->
            val tempMultiplier = when {
                temp > 40f -> 1.5f
                temp > 35f -> 1.2f
                temp < 15f -> 1.3f
                else -> 1.0f
            }
            baseRate *= tempMultiplier
        }

        return baseRate.coerceIn(5f, 50f) // % per year
    }

    private fun estimateLifetimeRemaining(degradationRate: Float): Int {
        // Calculate years until battery reaches 80% capacity (standard threshold)
        // Assuming current capacity is 100%
        val yearsTo80Percent = 20f / degradationRate
        return yearsTo80Percent.toInt().coerceIn(1, 10)
    }

    private fun generateAdvancedRecommendations(
        stats: BatteryStatistics,
        healthScore: Int
    ): List<String> {
        val recommendations = mutableListOf<String>()

        // Temperature-based recommendations
        stats.averageTemperature?.let { temp ->
            when {
                temp > 40f -> recommendations.add("⚠️ High Temperature: Avoid using device while charging. Remove case. Keep in cooler environment.")
                temp > 35f -> recommendations.add("Temperature elevated: Reduce intensive usage while charging.")
                temp < 15f -> recommendations.add("Low Temperature: Battery performance reduced in cold. Keep device warmer if possible.")
            }
        }

        // Charging pattern recommendations
        val avgChargesPerDay = stats.chargeCount / 30.0
        when {
            avgChargesPerDay > 3 -> recommendations.add("🔌 Reduce charging frequency: Try to charge only once per day. Let battery drain to 20-30% before charging.")
            avgChargesPerDay < 0.5 -> recommendations.add("⚡ Charge more regularly: Letting battery fully drain frequently can reduce lifespan.")
            stats.chargingTimePercentage > 80f -> recommendations.add("🔋 Reduce charging time: Unplug when charged. Keeping device plugged in constantly degrades battery.")
        }

        // Power consumption recommendations
        if (stats.averagePowerMilliwatts > 3000) {
            recommendations.add("📊 High power usage detected: Close background apps, reduce screen brightness, disable unused features.")
        }

        // Overall health recommendations
        when {
            healthScore >= 90 -> recommendations.add("✅ Excellent battery health! Keep up current usage patterns.")
            healthScore >= 80 -> recommendations.add("👍 Good battery health. Minor improvements recommended.")
            healthScore >= 70 -> recommendations.add("⚠️ Battery health declining. Follow recommendations to improve.")
            else -> recommendations.add("❌ Poor battery health. Consider battery replacement or aggressive optimization.")
        }

        return recommendations
    }

    private fun generatePredictions(
        stats: BatteryStatistics,
        degradationRate: Float
    ): BatteryPredictions {
        val avgDischargingPower = stats.averagePowerMilliwatts

        // Estimate remaining time at current discharge rate
        // Assuming typical 3000-4000 mAh battery at 3.7V = ~11-15 Wh
        val estimatedCapacityWh = 13.0 // Conservative estimate
        val currentPercentage = stats.averageBatteryPercentage / 100.0

        // Hours of usage remaining (rough estimate)
        val remainingCapacityWh = estimatedCapacityWh * currentPercentage
        val hoursRemaining = if (avgDischargingPower > 0) {
            (remainingCapacityWh / (avgDischargingPower / 1000.0)) * stats.dischargingTimeSeconds.toDouble() / stats.totalTimeSeconds
        } else {
            8.0 // Default estimate
        }

        // Predict when battery will need replacement
        val yearsUntilReplacement = 20f / degradationRate // 80% capacity threshold

        return BatteryPredictions(
            estimatedTimeRemaining = hoursRemaining,
            predictedFullChargeTime = 2.5, // Typical charge time
            capacityIn6Months = 100f - (degradationRate / 2f),
            capacityIn1Year = 100f - degradationRate,
            yearsUntilReplacement = yearsUntilReplacement.toInt().coerceIn(1, 10)
        )
    }
}

/**
 * Comprehensive battery health analysis result
 */
data class BatteryHealthAnalysis(
    val timestamp: kotlinx.datetime.Instant,
    val overallScore: Int,
    val temperatureScore: Int,
    val chargingPatternsScore: Int,
    val usageScore: Int,
    val degradationRate: Float, // % per year
    val estimatedLifetimeRemaining: Int, // years
    val recommendations: List<String>,
    val predictions: BatteryPredictions
)

/**
 * Battery predictions and forecasts
 */
data class BatteryPredictions(
    val estimatedTimeRemaining: Double, // hours
    val predictedFullChargeTime: Double, // hours
    val capacityIn6Months: Float, // percentage
    val capacityIn1Year: Float, // percentage
    val yearsUntilReplacement: Int
)
