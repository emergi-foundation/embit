package eco.emergi.embit.test

import eco.emergi.embit.domain.models.BatteryReading
import eco.emergi.embit.domain.models.BatteryState
import eco.emergi.embit.domain.models.ChargingType
import kotlinx.datetime.Clock
import kotlinx.datetime.Instant
import kotlin.time.Duration.Companion.hours
import kotlin.time.Duration.Companion.minutes

/**
 * Factory for creating test data.
 * Provides realistic battery readings and other domain models for testing.
 */
object TestDataFactory {

    /**
     * Create a sample battery reading with default values.
     */
    fun createBatteryReading(
        id: Long = 0L,
        timestamp: Instant = Clock.System.now(),
        voltageMillivolts: Int = 4000,
        amperageMicroamps: Long = -500000L, // Discharging by default
        temperatureCelsius: Float? = 30.0f,
        batteryPercentage: Int = 80,
        batteryState: BatteryState = BatteryState.Discharging
    ): BatteryReading {
        return BatteryReading(
            id = id,
            timestamp = timestamp,
            voltageMillivolts = voltageMillivolts,
            amperageMicroamps = amperageMicroamps,
            temperatureCelsius = temperatureCelsius,
            batteryPercentage = batteryPercentage,
            batteryState = batteryState
        )
    }

    /**
     * Create a charging battery reading.
     */
    fun createChargingReading(
        timestamp: Instant = Clock.System.now(),
        batteryPercentage: Int = 50
    ): BatteryReading {
        return createBatteryReading(
            timestamp = timestamp,
            amperageMicroamps = 1500000L, // Positive = charging
            batteryPercentage = batteryPercentage,
            batteryState = BatteryState.Charging(ChargingType.AC)
        )
    }

    /**
     * Create a discharging battery reading.
     */
    fun createDischargingReading(
        timestamp: Instant = Clock.System.now(),
        batteryPercentage: Int = 75
    ): BatteryReading {
        return createBatteryReading(
            timestamp = timestamp,
            amperageMicroamps = -800000L, // Negative = discharging
            batteryPercentage = batteryPercentage,
            batteryState = BatteryState.Discharging
        )
    }

    /**
     * Create a hot battery reading (temperature > 40°C).
     */
    fun createHotBatteryReading(
        temperatureCelsius: Float = 45.0f,
        batteryPercentage: Int = 60
    ): BatteryReading {
        return createBatteryReading(
            temperatureCelsius = temperatureCelsius,
            batteryPercentage = batteryPercentage
        )
    }

    /**
     * Create a series of battery readings over time.
     * Useful for testing statistics and trends.
     */
    fun createReadingsOverTime(
        count: Int = 10,
        startTime: Instant = Clock.System.now() - 1.hours,
        intervalMinutes: Long = 15,
        startPercentage: Int = 100,
        endPercentage: Int = 80,
        isCharging: Boolean = false
    ): List<BatteryReading> {
        val readings = mutableListOf<BatteryReading>()
        val percentageDelta = (endPercentage - startPercentage).toDouble() / (count - 1)

        repeat(count) { index ->
            val timestamp = startTime + (index * intervalMinutes).minutes
            val percentage = (startPercentage + (percentageDelta * index)).toInt()

            readings.add(
                createBatteryReading(
                    id = (index + 1).toLong(),
                    timestamp = timestamp,
                    batteryPercentage = percentage,
                    amperageMicroamps = if (isCharging) 1500000L else -800000L,
                    batteryState = if (isCharging) BatteryState.Charging(ChargingType.AC) else BatteryState.Discharging
                )
            )
        }

        return readings
    }

    /**
     * Create a charging session (battery goes from low to high percentage).
     */
    fun createChargingSession(
        startPercentage: Int = 20,
        endPercentage: Int = 100,
        durationHours: Int = 2
    ): List<BatteryReading> {
        val count = durationHours * 4 // 15-minute intervals
        return createReadingsOverTime(
            count = count,
            startTime = Clock.System.now() - durationHours.hours,
            intervalMinutes = 15,
            startPercentage = startPercentage,
            endPercentage = endPercentage,
            isCharging = true
        )
    }

    /**
     * Create a discharge session (battery goes from high to low percentage).
     */
    fun createDischargeSession(
        startPercentage: Int = 100,
        endPercentage: Int = 20,
        durationHours: Int = 8
    ): List<BatteryReading> {
        val count = durationHours * 4 // 15-minute intervals
        return createReadingsOverTime(
            count = count,
            startTime = Clock.System.now() - durationHours.hours,
            intervalMinutes = 15,
            startPercentage = startPercentage,
            endPercentage = endPercentage,
            isCharging = false
        )
    }

    /**
     * Create readings with fluctuating temperature.
     * Useful for testing temperature-related health warnings.
     */
    fun createReadingsWithTemperatureSpikes(
        count: Int = 10,
        normalTemp: Float = 30.0f,
        spikeTemp: Float = 50.0f,
        spikeIndices: List<Int> = listOf(3, 7)
    ): List<BatteryReading> {
        return List(count) { index ->
            val temp = if (index in spikeIndices) spikeTemp else normalTemp
            createBatteryReading(
                id = (index + 1).toLong(),
                timestamp = Clock.System.now() + (index * 15).minutes,
                temperatureCelsius = temp,
                batteryPercentage = 80 - (index * 2)
            )
        }
    }
}
