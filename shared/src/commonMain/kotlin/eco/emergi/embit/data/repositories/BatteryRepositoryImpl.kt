package eco.emergi.embit.data.repositories

import app.cash.sqldelight.coroutines.asFlow
import app.cash.sqldelight.coroutines.mapToList
import app.cash.sqldelight.coroutines.mapToOne
import app.cash.sqldelight.coroutines.mapToOneOrNull
import eco.emergi.embit.data.local.*
import eco.emergi.embit.domain.models.BatteryDataPoint
import eco.emergi.embit.domain.models.BatteryHealth
import eco.emergi.embit.domain.models.BatteryReading as DomainBatteryReading
import eco.emergi.embit.domain.models.BatteryStatistics
import eco.emergi.embit.domain.models.BatteryState
import eco.emergi.embit.domain.models.ChargingType
import eco.emergi.embit.domain.models.HealthStatus
import eco.emergi.embit.domain.models.getHealthStatus
import eco.emergi.embit.domain.repositories.IBatteryRepository
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.withContext
import kotlinx.datetime.Clock
import kotlinx.datetime.Instant
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import kotlin.time.Duration.Companion.seconds

/**
 * Repository implementation using SQLDelight for battery data persistence.
 */
class BatteryRepositoryImpl(
    private val database: EmbitDatabase
) : IBatteryRepository {

    private val queries = database.batteryReadingQueries
    private val json = Json { prettyPrint = true }

    override suspend fun insertReading(reading: DomainBatteryReading): Result<Long> = withContext(Dispatchers.Default) {
        try {
            queries.insertReading(
                timestamp = reading.timestamp.toEpochMilliseconds(),
                voltageMillivolts = reading.voltageMillivolts.toLong(),
                amperageMicroamps = reading.amperageMicroamps,
                temperatureCelsius = reading.temperatureCelsius?.toDouble(),
                batteryPercentage = reading.batteryPercentage.toLong(),
                batteryState = serializeBatteryState(reading.batteryState),
                chargingType = serializeChargingType(reading.batteryState)
            )

            val lastInsertId = queries.getLatestReading().executeAsOneOrNull()?.id ?: 0L
            Result.success(lastInsertId)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    override suspend fun insertReadings(readings: List<DomainBatteryReading>): Result<Unit> = withContext(Dispatchers.Default) {
        try {
            queries.transaction {
                readings.forEach { reading ->
                    queries.insertReading(
                        timestamp = reading.timestamp.toEpochMilliseconds(),
                        voltageMillivolts = reading.voltageMillivolts.toLong(),
                        amperageMicroamps = reading.amperageMicroamps,
                        temperatureCelsius = reading.temperatureCelsius?.toDouble(),
                        batteryPercentage = reading.batteryPercentage.toLong(),
                        batteryState = serializeBatteryState(reading.batteryState),
                        chargingType = serializeChargingType(reading.batteryState)
                    )
                }
            }
            Result.success(Unit)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    override suspend fun getLatestReading(): Result<DomainBatteryReading?> = withContext(Dispatchers.Default) {
        try {
            val reading = queries.getLatestReading().executeAsOneOrNull()?.toDomainModel()
            Result.success(reading)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    override fun observeLatestReading(): Flow<DomainBatteryReading?> {
        return queries.getLatestReading()
            .asFlow()
            .mapToOneOrNull(Dispatchers.Default)
            .map { it?.toDomainModel() }
    }

    override suspend fun getReadingsInRange(
        start: Instant,
        end: Instant,
        limit: Int?
    ): Result<List<DomainBatteryReading>> = withContext(Dispatchers.Default) {
        try {
            val readings = if (limit != null) {
                queries.getReadingsInRange(
                    startTime = start.toEpochMilliseconds(),
                    endTime = end.toEpochMilliseconds(),
                    limit = limit.toLong()
                ).executeAsList()
            } else {
                queries.getAllReadingsInRange(
                    startTime = start.toEpochMilliseconds(),
                    endTime = end.toEpochMilliseconds()
                ).executeAsList()
            }

            Result.success(readings.map { it.toDomainModel() })
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    override fun observeReadingsInRange(start: Instant, end: Instant): Flow<List<DomainBatteryReading>> {
        return queries.getAllReadingsInRange(
            startTime = start.toEpochMilliseconds(),
            endTime = end.toEpochMilliseconds()
        )
            .asFlow()
            .mapToList(Dispatchers.Default)
            .map { list -> list.map { it.toDomainModel() } }
    }

    override suspend fun calculateStatistics(start: Instant, end: Instant): Result<BatteryStatistics> =
        withContext(Dispatchers.Default) {
            try {
                val stats = queries.getStatistics(
                    startTime = start.toEpochMilliseconds(),
                    endTime = end.toEpochMilliseconds()
                ).executeAsOne()

                if (stats.totalCount == 0L) {
                    return@withContext Result.failure(Exception("No data available for this period"))
                }

                // Calculate power metrics
                val avgPowerMilliwatts = calculateAveragePower(
                    stats.avgVoltage ?: 0.0,
                    stats.avgAmperage ?: 0.0
                )

                val peakPowerMilliwatts = calculateAveragePower(
                    stats.maxVoltage?.toDouble() ?: 0.0,
                    stats.maxAmperage?.toDouble() ?: 0.0
                )

                // Get state durations (assuming ~60 second intervals)
                val stateDurations = queries.getStateDurations(
                    startTime = start.toEpochMilliseconds(),
                    endTime = end.toEpochMilliseconds(),
                    sampleInterval = 60
                ).executeAsList()

                val chargingSeconds = stateDurations
                    .filter { it.batteryState?.startsWith("Charging") == true }
                    .sumOf { it.durationSeconds ?: 0L }

                val dischargingSeconds = stateDurations
                    .firstOrNull { it.batteryState == "Discharging" }
                    ?.durationSeconds ?: 0L

                // Get charge count
                val chargeCount = queries.getChargeCount(
                    startTime = start.toEpochMilliseconds(),
                    endTime = end.toEpochMilliseconds()
                ).executeAsOne().toInt()

                // Calculate total energy consumed (rough estimate)
                val durationHours = ((end - start).inWholeSeconds / 3600.0)
                val totalEnergyMilliwattHours = avgPowerMilliwatts * durationHours

                val statistics = BatteryStatistics(
                    periodStart = start,
                    periodEnd = end,
                    averagePowerMilliwatts = avgPowerMilliwatts,
                    peakPowerMilliwatts = peakPowerMilliwatts,
                    totalEnergyMilliwattHours = totalEnergyMilliwattHours,
                    averageTemperature = stats.avgTemperature?.toFloat(),
                    chargingTimeSeconds = chargingSeconds,
                    dischargingTimeSeconds = dischargingSeconds,
                    chargeCount = chargeCount,
                    averageBatteryPercentage = stats.avgBatteryPercentage?.toInt() ?: 0
                )

                Result.success(statistics)
            } catch (e: Exception) {
                Result.failure(e)
            }
        }

    override suspend fun getDataPoints(
        start: Instant,
        end: Instant,
        interval: Long
    ): Result<List<BatteryDataPoint>> = withContext(Dispatchers.Default) {
        try {
            val dataPoints = queries.getAveragePowerByInterval(
                startTime = start.toEpochMilliseconds(),
                endTime = end.toEpochMilliseconds(),
                intervalSeconds = interval
            ).executeAsList().map { result ->
                BatteryDataPoint(
                    timestamp = Instant.fromEpochMilliseconds(result.intervalStart ?: 0L),
                    value = result.avgPowerMilliwatts ?: 0.0,
                    label = null
                )
            }

            Result.success(dataPoints)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    override suspend fun calculateBatteryHealth(): Result<BatteryHealth> = withContext(Dispatchers.Default) {
        try {
            // Get recent battery data (last 30 days)
            val now = Clock.System.now()
            val thirtyDaysAgo = now - 30.seconds * 86400 // 30 days

            val stats = calculateStatistics(thirtyDaysAgo, now).getOrNull()
                ?: return@withContext Result.failure(Exception("Insufficient data for health calculation"))

            // Simple health scoring based on average temperature and charge frequency
            var healthScore = 100

            // Deduct points for high average temperature
            stats.averageTemperature?.let { temp ->
                when {
                    temp > 40f -> healthScore -= 30
                    temp > 35f -> healthScore -= 20
                    temp > 30f -> healthScore -= 10
                }
            }

            // Deduct points for excessive charging
            val avgChargesPerDay = stats.chargeCount / 30.0
            when {
                avgChargesPerDay > 3 -> healthScore -= 20
                avgChargesPerDay > 2 -> healthScore -= 10
            }

            healthScore = healthScore.coerceIn(0, 100)

            val health = BatteryHealth(
                timestamp = now,
                healthPercentage = healthScore,
                estimatedCapacityMah = null, // Would need device-specific info
                designCapacityMah = null,
                chargeCount = stats.chargeCount,
                averageTemperature = stats.averageTemperature,
                healthStatus = getHealthStatus(healthScore)
            )

            Result.success(health)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    override suspend fun getBatteryHealthHistory(
        start: Instant,
        end: Instant
    ): Result<List<BatteryHealth>> = withContext(Dispatchers.Default) {
        try {
            // For now, return a single current health reading
            // In a production app, you'd store health snapshots periodically
            val currentHealth = calculateBatteryHealth().getOrNull()
            Result.success(currentHealth?.let { listOf(it) } ?: emptyList())
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    override suspend fun deleteReadingsOlderThan(before: Instant): Result<Int> = withContext(Dispatchers.Default) {
        try {
            val countBefore = queries.getReadingCount().executeAsOne()
            queries.deleteReadingsOlderThan(before.toEpochMilliseconds())
            val countAfter = queries.getReadingCount().executeAsOne()
            val deleted = (countBefore - countAfter).toInt()
            Result.success(deleted)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    override suspend fun deleteAllReadings(): Result<Unit> = withContext(Dispatchers.Default) {
        try {
            queries.deleteAllReadings()
            Result.success(Unit)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    override suspend fun getReadingCount(): Result<Long> = withContext(Dispatchers.Default) {
        try {
            val count = queries.getReadingCount().executeAsOne()
            Result.success(count)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    override suspend fun exportToJson(): Result<String> = withContext(Dispatchers.Default) {
        try {
            val allReadings = queries.getAllReadingsInRange(
                startTime = 0L,
                endTime = Long.MAX_VALUE
            ).executeAsList().map { it.toDomainModel() }

            val jsonString = json.encodeToString(allReadings)
            Result.success(jsonString)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    override suspend fun importFromJson(json: String): Result<Int> = withContext(Dispatchers.Default) {
        try {
            val readings: List<DomainBatteryReading> = this@BatteryRepositoryImpl.json.decodeFromString(json)
            insertReadings(readings)
            Result.success(readings.size)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    private fun calculateAveragePower(voltageMillivolts: Double, amperageMicroamps: Double): Double {
        val voltageVolts = voltageMillivolts / 1000.0
        val amperageAmps = amperageMicroamps / 1_000_000.0
        return voltageVolts * amperageAmps * 1000.0 // Return in milliwatts
    }
}
