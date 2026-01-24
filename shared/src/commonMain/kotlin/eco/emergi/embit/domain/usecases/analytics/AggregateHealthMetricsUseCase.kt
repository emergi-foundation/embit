package eco.emergi.embit.domain.usecases.analytics

import eco.emergi.embit.domain.models.BatteryReading
import eco.emergi.embit.domain.repositories.IAnalyticsRepository
import eco.emergi.embit.domain.repositories.IBatteryRepository
import eco.emergi.embit.domain.usecases.AnalyzeBatteryHealthUseCase
import kotlinx.datetime.*
import kotlin.time.Duration.Companion.days

/**
 * Use case to aggregate daily battery health metrics and save to Firestore.
 *
 * This use case:
 * 1. Fetches battery readings for a specific date
 * 2. Calculates daily metrics (avg health, temperature, charging cycles, etc.)
 * 3. Saves aggregated data to Firestore for analytics and research
 *
 * Should be run daily via WorkManager to build historical analytics data.
 */
class AggregateHealthMetricsUseCase(
    private val batteryRepository: IBatteryRepository,
    private val analyticsRepository: IAnalyticsRepository,
    private val analyzeBatteryHealthUseCase: AnalyzeBatteryHealthUseCase
) {
    /**
     * Aggregate and save metrics for a specific date.
     *
     * @param date The date to aggregate metrics for (defaults to yesterday)
     * @return Result indicating success or failure
     */
    suspend operator fun invoke(
        date: LocalDate = Clock.System.now()
            .toLocalDateTime(TimeZone.currentSystemDefault())
            .date
            .minus(1, DateTimeUnit.DAY)
    ): Result<Unit> {
        return try {
            // Get start and end timestamps for the date
            val startOfDay = date.atStartOfDayIn(TimeZone.currentSystemDefault())
            val endOfDay = date.plus(1, DateTimeUnit.DAY).atStartOfDayIn(TimeZone.currentSystemDefault())

            // Fetch battery readings for the date using the correct method
            val readingsResult = batteryRepository.getReadingsInRange(
                start = startOfDay,
                end = endOfDay
            )

            val readings = readingsResult.getOrNull() ?: run {
                return Result.failure(Exception("No battery readings for date: $date"))
            }

            if (readings.isEmpty()) {
                return Result.failure(Exception("No battery readings for date: $date"))
            }

            // Calculate health score for the overall period
            val healthAnalysisResult = analyzeBatteryHealthUseCase()
            val healthScore = healthAnalysisResult.getOrNull()?.overallScore ?: 0

            // Calculate daily metrics
            val metrics = calculateDailyMetrics(readings, healthScore)

            // Save to Firestore
            analyticsRepository.saveDailyHealthMetrics(
                date = date.toString(), // "yyyy-MM-dd" format
                metrics = metrics
            )

            Result.success(Unit)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    /**
     * Calculate aggregated metrics from battery readings.
     */
    private fun calculateDailyMetrics(
        readings: List<BatteryReading>,
        healthScore: Int
    ): Map<String, Any> {
        val avgBatteryPercentage = readings.map { it.batteryPercentage }.average()
        val minBatteryPercentage = readings.minOf { it.batteryPercentage }
        val maxBatteryPercentage = readings.maxOf { it.batteryPercentage }

        val avgTemperature = readings.mapNotNull { it.temperatureCelsius }.average()
        val peakTemperature = readings.mapNotNull { it.temperatureCelsius }.maxOrNull() ?: 0.0

        // Count charging cycles (transitions from discharging to charging)
        val chargingCycles = countChargingCycles(readings)

        // Calculate total charging time (in minutes)
        val totalChargingTime = calculateTotalChargingTime(readings)

        val minHealthScore = healthScore // Could calculate min if we store historical health scores
        val maxHealthScore = healthScore

        return mapOf(
            "date" to readings.first().timestamp.toEpochMilliseconds(), // Store as timestamp
            "avgHealthScore" to healthScore.toDouble(),
            "minHealthScore" to minHealthScore,
            "maxHealthScore" to maxHealthScore,
            "avgBatteryPercentage" to avgBatteryPercentage,
            "minBatteryPercentage" to minBatteryPercentage,
            "maxBatteryPercentage" to maxBatteryPercentage,
            "avgTemperature" to avgTemperature,
            "peakTemperature" to peakTemperature,
            "totalReadings" to readings.size,
            "chargingCycles" to chargingCycles,
            "totalChargingTimeMinutes" to totalChargingTime,
            "updatedAt" to Clock.System.now().toEpochMilliseconds()
        )
    }

    /**
     * Count charging cycles (number of times charging started).
     */
    private fun countChargingCycles(readings: List<BatteryReading>): Int {
        var cycles = 0
        var wasCharging = false

        readings.forEach { reading ->
            if (reading.isCharging && !wasCharging) {
                cycles++
            }
            wasCharging = reading.isCharging
        }

        return cycles
    }

    /**
     * Calculate total time spent charging (in minutes).
     */
    private fun calculateTotalChargingTime(readings: List<BatteryReading>): Int {
        var totalMinutes = 0
        var lastTimestamp: Instant? = null
        var wasCharging = false

        readings.forEach { reading ->
            if (reading.isCharging) {
                lastTimestamp?.let { last ->
                    val diffMinutes = ((reading.timestamp - last).inWholeMinutes).toInt()
                    if (wasCharging && diffMinutes < 60) { // Only count if less than 1 hour gap
                        totalMinutes += diffMinutes
                    }
                }
            }
            lastTimestamp = reading.timestamp
            wasCharging = reading.isCharging
        }

        return totalMinutes
    }
}
