package eco.emergi.embit.domain.usecases

import eco.emergi.embit.domain.models.BatteryStatistics
import eco.emergi.embit.domain.models.BatteryTrend
import eco.emergi.embit.domain.models.TimePeriod
import eco.emergi.embit.domain.models.TrendDirection
import eco.emergi.embit.domain.models.TrendMetric
import eco.emergi.embit.domain.repositories.IBatteryRepository
import kotlinx.datetime.Clock
import kotlinx.datetime.Instant
import kotlin.time.Duration.Companion.days
import kotlin.time.Duration.Companion.hours

/**
 * Use case for calculating battery usage statistics and trends.
 */
class CalculateBatteryStatisticsUseCase(
    private val repository: IBatteryRepository
) {
    /**
     * Calculate statistics for a specific time period
     */
    suspend operator fun invoke(
        period: TimePeriod,
        customStart: Instant? = null,
        customEnd: Instant? = null
    ): Result<BatteryStatistics> {
        val (start, end) = getTimeRange(period, customStart, customEnd)
        return repository.calculateStatistics(start, end)
    }

    /**
     * Calculate trends by comparing current period with previous period
     */
    suspend fun calculateTrends(period: TimePeriod): Result<List<BatteryTrend>> {
        val now = Clock.System.now()
        val duration = when (period) {
            TimePeriod.HOUR -> 1.hours
            TimePeriod.DAY -> 1.days
            TimePeriod.WEEK -> 7.days
            TimePeriod.MONTH -> 30.days
            else -> 1.days
        }

        // Get current period statistics
        val currentStart = now - duration
        val currentStats = repository.calculateStatistics(currentStart, now)
            .getOrNull() ?: return Result.failure(Exception("Failed to get current statistics"))

        // Get previous period statistics
        val previousStart = currentStart - duration
        val previousStats = repository.calculateStatistics(previousStart, currentStart)
            .getOrNull() ?: return Result.failure(Exception("Failed to get previous statistics"))

        val trends = mutableListOf<BatteryTrend>()

        // Power consumption trend
        val powerChange = calculatePercentageChange(
            previousStats.averagePowerMilliwatts,
            currentStats.averagePowerMilliwatts
        )
        trends.add(
            BatteryTrend(
                metric = TrendMetric.POWER_CONSUMPTION,
                direction = getTrendDirection(powerChange, inverse = true), // Lower is better
                changePercentage = powerChange,
                recommendation = if (powerChange > 10f) {
                    "Power consumption has increased. Consider checking for power-hungry apps."
                } else null
            )
        )

        // Charging frequency trend
        val chargingChange = calculatePercentageChange(
            previousStats.chargeCount.toFloat(),
            currentStats.chargeCount.toFloat()
        )
        trends.add(
            BatteryTrend(
                metric = TrendMetric.CHARGING_FREQUENCY,
                direction = getTrendDirection(chargingChange),
                changePercentage = chargingChange,
                recommendation = if (chargingChange > 20f) {
                    "Charging frequency has increased significantly."
                } else null
            )
        )

        // Temperature trend (if available)
        if (currentStats.averageTemperature != null && previousStats.averageTemperature != null) {
            val tempChange = calculatePercentageChange(
                previousStats.averageTemperature,
                currentStats.averageTemperature
            )
            trends.add(
                BatteryTrend(
                    metric = TrendMetric.TEMPERATURE,
                    direction = getTrendDirection(tempChange, inverse = true),
                    changePercentage = tempChange,
                    recommendation = if (currentStats.averageTemperature > 35f) {
                        "Battery temperature is elevated. Consider reducing usage or removing case."
                    } else null
                )
            )
        }

        return Result.success(trends)
    }

    private fun getTimeRange(
        period: TimePeriod,
        customStart: Instant?,
        customEnd: Instant?
    ): Pair<Instant, Instant> {
        val now = Clock.System.now()

        return when (period) {
            TimePeriod.HOUR -> Pair(now - 1.hours, now)
            TimePeriod.DAY -> Pair(now - 1.days, now)
            TimePeriod.WEEK -> Pair(now - 7.days, now)
            TimePeriod.MONTH -> Pair(now - 30.days, now)
            TimePeriod.YEAR -> Pair(now - 365.days, now)
            TimePeriod.ALL_TIME -> Pair(Instant.DISTANT_PAST, now)
            TimePeriod.CUSTOM -> {
                require(customStart != null && customEnd != null) {
                    "Custom time period requires both start and end times"
                }
                Pair(customStart, customEnd)
            }
        }
    }

    private fun calculatePercentageChange(previous: Float, current: Float): Float {
        if (previous == 0f) return 0f
        return ((current - previous) / previous) * 100f
    }

    private fun calculatePercentageChange(previous: Double, current: Double): Float {
        if (previous == 0.0) return 0f
        return (((current - previous) / previous) * 100f).toFloat()
    }

    private fun getTrendDirection(changePercentage: Float, inverse: Boolean = false): TrendDirection {
        val threshold = 5f // 5% change threshold

        return when {
            changePercentage < -threshold -> if (inverse) TrendDirection.IMPROVING else TrendDirection.DECLINING
            changePercentage > threshold -> if (inverse) TrendDirection.DECLINING else TrendDirection.IMPROVING
            else -> TrendDirection.STABLE
        }
    }
}
