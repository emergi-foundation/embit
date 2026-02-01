package eco.emergi.embit.test.fakes

import eco.emergi.embit.domain.models.BatteryDataPoint
import eco.emergi.embit.domain.models.BatteryHealth
import eco.emergi.embit.domain.models.BatteryReading
import eco.emergi.embit.domain.models.BatteryStatistics
import eco.emergi.embit.domain.models.HealthStatus
import eco.emergi.embit.domain.repositories.IBatteryRepository
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.map
import kotlinx.datetime.Clock
import kotlinx.datetime.Instant

/**
 * Fake implementation of IBatteryRepository for testing.
 *
 * Maintains an in-memory list of readings and provides full control over
 * repository behavior for testing different scenarios.
 */
class FakeBatteryRepository : IBatteryRepository {
    private val readings = mutableListOf<BatteryReading>()
    private var nextId = 1L
    private val readingsFlow = MutableStateFlow<List<BatteryReading>>(emptyList())
    private var mockStatistics: BatteryStatistics? = null

    // Control flags for testing error scenarios
    var shouldFailInsert = false
    var shouldFailGetReadings = false
    var shouldFailCalculateStatistics = false

    // Test helper to set mock statistics
    fun setStatistics(stats: BatteryStatistics?) {
        mockStatistics = stats
    }

    override suspend fun insertReading(reading: BatteryReading): Result<Long> {
        return if (shouldFailInsert) {
            Result.failure(Exception("Insert failed"))
        } else {
            val id = nextId++
            val readingWithId = reading.copy(id = id)
            readings.add(readingWithId)
            readingsFlow.value = readings.toList()
            Result.success(id)
        }
    }

    override suspend fun insertReadings(readings: List<BatteryReading>): Result<Unit> {
        return if (shouldFailInsert) {
            Result.failure(Exception("Batch insert failed"))
        } else {
            readings.forEach { reading ->
                val id = nextId++
                this.readings.add(reading.copy(id = id))
            }
            readingsFlow.value = this.readings.toList()
            Result.success(Unit)
        }
    }

    override suspend fun getLatestReading(): Result<BatteryReading?> {
        return if (shouldFailGetReadings) {
            Result.failure(Exception("Get latest reading failed"))
        } else {
            Result.success(readings.maxByOrNull { it.timestamp })
        }
    }

    override fun observeLatestReading(): Flow<BatteryReading?> {
        return readingsFlow.map { it.maxByOrNull { reading -> reading.timestamp } }
    }

    override suspend fun getReadingsInRange(
        start: Instant,
        end: Instant,
        limit: Int?
    ): Result<List<BatteryReading>> {
        return if (shouldFailGetReadings) {
            Result.failure(Exception("Get readings in range failed"))
        } else {
            val filtered = readings.filter { it.timestamp in start..end }
                .sortedBy { it.timestamp }
            val result = if (limit != null) filtered.take(limit) else filtered
            Result.success(result)
        }
    }

    override fun observeReadingsInRange(start: Instant, end: Instant): Flow<List<BatteryReading>> {
        return readingsFlow.map { readings ->
            readings.filter { it.timestamp in start..end }
                .sortedBy { it.timestamp }
        }
    }

    override suspend fun calculateStatistics(
        start: Instant,
        end: Instant
    ): Result<BatteryStatistics> {
        return if (shouldFailCalculateStatistics) {
            Result.failure(Exception("Calculate statistics failed"))
        } else if (mockStatistics != null) {
            // Use mock statistics if set
            Result.success(mockStatistics!!)
        } else {
            val relevantReadings = readings.filter { it.timestamp in start..end }

            if (relevantReadings.isEmpty()) {
                return Result.failure(Exception("No readings in range"))
            }

            val stats = BatteryStatistics(
                periodStart = start,
                periodEnd = end,
                averagePowerMilliwatts = relevantReadings.map {
                    it.voltageMillivolts * it.amperageMicroamps / 1000.0
                }.average(),
                peakPowerMilliwatts = relevantReadings.map {
                    it.voltageMillivolts * it.amperageMicroamps / 1000.0
                }.maxOrNull() ?: 0.0,
                totalEnergyMilliwattHours = 0.0, // Simplified for testing
                averageTemperature = relevantReadings.mapNotNull { it.temperatureCelsius }.average().toFloat(),
                chargingTimeSeconds = relevantReadings.count { it.isCharging }.toLong() * 60, // Simplified
                dischargingTimeSeconds = relevantReadings.count { !it.isCharging }.toLong() * 60, // Simplified
                chargeCount = relevantReadings.count { it.isCharging },
                averageBatteryPercentage = relevantReadings.map { it.batteryPercentage }.average().toInt()
            )

            Result.success(stats)
        }
    }

    override suspend fun getDataPoints(
        start: Instant,
        end: Instant,
        interval: Long
    ): Result<List<BatteryDataPoint>> {
        // Return empty list for fake implementation
        return Result.success(emptyList())
    }

    override suspend fun calculateBatteryHealth(): Result<BatteryHealth> {
        // Return mock battery health
        return Result.success(
            BatteryHealth(
                timestamp = Clock.System.now(),
                healthPercentage = 90,
                estimatedCapacityMah = 2700,
                designCapacityMah = 3000,
                chargeCount = readings.count { it.batteryState is eco.emergi.embit.domain.models.BatteryState.Charging },
                averageTemperature = readings.mapNotNull { it.temperatureCelsius }.average().toFloat(),
                healthStatus = HealthStatus.GOOD
            )
        )
    }

    override suspend fun getBatteryHealthHistory(
        start: Instant,
        end: Instant
    ): Result<List<BatteryHealth>> {
        // Return empty history for fake
        return Result.success(emptyList())
    }

    override suspend fun deleteReadingsOlderThan(beforeTimestamp: Instant): Result<Int> {
        val beforeCount = readings.size
        readings.removeAll { it.timestamp < beforeTimestamp }
        readingsFlow.value = readings.toList()
        return Result.success(beforeCount - readings.size)
    }

    override suspend fun deleteAllReadings(): Result<Unit> {
        readings.clear()
        readingsFlow.value = emptyList()
        return Result.success(Unit)
    }

    override suspend fun getReadingCount(): Result<Long> {
        return Result.success(readings.size.toLong())
    }

    override suspend fun exportToJson(): Result<String> {
        return Result.success("{}")
    }

    override suspend fun importFromJson(json: String): Result<Int> {
        return Result.success(0)
    }

    override suspend fun getUnsyncedReadings(limit: Int?): Result<List<BatteryReading>> {
        return Result.success(emptyList())
    }

    override suspend fun getUnsyncedReadingsCount(): Result<Long> {
        return Result.success(0L)
    }

    override suspend fun markReadingsAsSynced(readingIds: List<Long>, syncTimestamp: Long): Result<Unit> {
        return Result.success(Unit)
    }

    // Test helper methods
    fun addReadings(vararg newReadings: BatteryReading) {
        newReadings.forEach { reading ->
            val id = nextId++
            readings.add(reading.copy(id = id))
        }
        readingsFlow.value = readings.toList()
    }

    fun setRecentReadings(recentReadings: List<BatteryReading>) {
        clear()
        addReadings(*recentReadings.toTypedArray())
    }

    fun getAll(): List<BatteryReading> = readings.toList()

    fun clear() {
        readings.clear()
        readingsFlow.value = emptyList()
        nextId = 1L
        mockStatistics = null
    }
}
