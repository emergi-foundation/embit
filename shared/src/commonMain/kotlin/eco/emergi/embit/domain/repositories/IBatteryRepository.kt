package eco.emergi.embit.domain.repositories

import eco.emergi.embit.domain.models.*
import kotlinx.coroutines.flow.Flow
import kotlinx.datetime.Instant

/**
 * Repository interface for battery data operations.
 * Implementations handle data persistence and retrieval.
 */
interface IBatteryRepository {
    /**
     * Insert a new battery reading
     */
    suspend fun insertReading(reading: BatteryReading): Result<Long>

    /**
     * Insert multiple readings in a batch operation
     */
    suspend fun insertReadings(readings: List<BatteryReading>): Result<Unit>

    /**
     * Get the most recent battery reading
     */
    suspend fun getLatestReading(): Result<BatteryReading?>

    /**
     * Observe the latest battery reading as a Flow
     */
    fun observeLatestReading(): Flow<BatteryReading?>

    /**
     * Get readings within a specific time range
     */
    suspend fun getReadingsInRange(
        start: Instant,
        end: Instant,
        limit: Int? = null
    ): Result<List<BatteryReading>>

    /**
     * Get readings as a Flow for reactive updates
     */
    fun observeReadingsInRange(
        start: Instant,
        end: Instant
    ): Flow<List<BatteryReading>>

    /**
     * Calculate statistics for a given time period
     */
    suspend fun calculateStatistics(
        start: Instant,
        end: Instant
    ): Result<BatteryStatistics>

    /**
     * Get aggregated data points for charting
     * @param interval The interval between data points (in seconds)
     */
    suspend fun getDataPoints(
        start: Instant,
        end: Instant,
        interval: Long
    ): Result<List<BatteryDataPoint>>

    /**
     * Calculate current battery health metrics
     */
    suspend fun calculateBatteryHealth(): Result<BatteryHealth>

    /**
     * Get historical battery health records
     */
    suspend fun getBatteryHealthHistory(
        start: Instant,
        end: Instant
    ): Result<List<BatteryHealth>>

    /**
     * Delete readings older than the specified instant
     */
    suspend fun deleteReadingsOlderThan(before: Instant): Result<Int>

    /**
     * Delete all readings (use with caution)
     */
    suspend fun deleteAllReadings(): Result<Unit>

    /**
     * Get total count of readings
     */
    suspend fun getReadingCount(): Result<Long>

    /**
     * Export all readings as JSON string
     */
    suspend fun exportToJson(): Result<String>

    /**
     * Import readings from JSON string
     */
    suspend fun importFromJson(json: String): Result<Int>
}
