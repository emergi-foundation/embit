package eco.emergi.embit.domain.usecases

import eco.emergi.embit.domain.models.BatteryDataPoint
import eco.emergi.embit.domain.models.BatteryReading
import eco.emergi.embit.domain.models.TimePeriod
import eco.emergi.embit.domain.repositories.IBatteryRepository
import kotlinx.datetime.Clock
import kotlinx.datetime.Instant
import kotlin.time.Duration
import kotlin.time.Duration.Companion.days
import kotlin.time.Duration.Companion.hours

/**
 * Use case for retrieving battery history data for a specific time period.
 */
class GetBatteryHistoryUseCase(
    private val repository: IBatteryRepository
) {
    /**
     * Get battery readings for a specific time period
     */
    suspend operator fun invoke(
        period: TimePeriod,
        customStart: Instant? = null,
        customEnd: Instant? = null
    ): Result<List<BatteryReading>> {
        val (start, end) = getTimeRange(period, customStart, customEnd)
        return repository.getReadingsInRange(start, end)
    }

    /**
     * Get aggregated data points for charting
     */
    suspend fun getDataPoints(
        period: TimePeriod,
        customStart: Instant? = null,
        customEnd: Instant? = null
    ): Result<List<BatteryDataPoint>> {
        val (start, end) = getTimeRange(period, customStart, customEnd)
        val interval = calculateInterval(period)
        return repository.getDataPoints(start, end, interval)
    }

    /**
     * Get the count of readings for a period
     */
    suspend fun getReadingCount(
        period: TimePeriod,
        customStart: Instant? = null,
        customEnd: Instant? = null
    ): Result<Long> {
        val (start, end) = getTimeRange(period, customStart, customEnd)
        return repository.getReadingsInRange(start, end)
            .map { it.size.toLong() }
    }

    private fun getTimeRange(
        period: TimePeriod,
        customStart: Instant?,
        customEnd: Instant?
    ): Pair<Instant, Instant> {
        val now = Clock.System.now()

        return when (period) {
            TimePeriod.HOUR -> {
                val start = now - 1.hours
                Pair(start, now)
            }
            TimePeriod.DAY -> {
                val start = now - 1.days
                Pair(start, now)
            }
            TimePeriod.WEEK -> {
                val start = now - 7.days
                Pair(start, now)
            }
            TimePeriod.MONTH -> {
                val start = now - 30.days
                Pair(start, now)
            }
            TimePeriod.YEAR -> {
                val start = now - 365.days
                Pair(start, now)
            }
            TimePeriod.ALL_TIME -> {
                val start = Instant.DISTANT_PAST
                Pair(start, now)
            }
            TimePeriod.CUSTOM -> {
                require(customStart != null && customEnd != null) {
                    "Custom time period requires both start and end times"
                }
                Pair(customStart, customEnd)
            }
        }
    }

    private fun calculateInterval(period: TimePeriod): Long {
        // Return interval in seconds for data aggregation
        return when (period) {
            TimePeriod.HOUR -> 60L // 1 minute intervals
            TimePeriod.DAY -> 300L // 5 minute intervals
            TimePeriod.WEEK -> 3600L // 1 hour intervals
            TimePeriod.MONTH -> 14400L // 4 hour intervals
            TimePeriod.YEAR -> 86400L // 1 day intervals
            TimePeriod.ALL_TIME -> 86400L // 1 day intervals
            TimePeriod.CUSTOM -> 3600L // Default to 1 hour
        }
    }
}
