package eco.emergi.embit.domain.models

import kotlinx.datetime.Instant
import kotlinx.serialization.Serializable

/**
 * Represents a single battery reading with voltage, amperage, and calculated power consumption.
 *
 * @property id Unique identifier for the reading
 * @property timestamp When the reading was taken
 * @property voltageMillivolts Battery voltage in millivolts (mV)
 * @property amperageMicroamps Battery current in microamperes (µA) - negative when discharging
 * @property temperatureCelsius Battery temperature in Celsius (if available)
 * @property batteryPercentage Battery percentage (0-100)
 * @property batteryState Current charging state
 */
@Serializable
data class BatteryReading(
    val id: Long = 0,
    val timestamp: Instant,
    val voltageMillivolts: Int,
    val amperageMicroamps: Long,
    val temperatureCelsius: Float? = null,
    val batteryPercentage: Int,
    val batteryState: BatteryState
) {
    /**
     * Calculate instantaneous power consumption in milliwatts (mW).
     * Power = Voltage × Current
     */
    val powerMilliwatts: Double
        get() = (voltageMillivolts / 1000.0) * (amperageMicroamps / 1_000_000.0) * 1000.0

    /**
     * Get voltage in volts (V)
     */
    val voltageVolts: Double
        get() = voltageMillivolts / 1000.0

    /**
     * Get amperage in milliamps (mA)
     */
    val amperageMilliamps: Double
        get() = amperageMicroamps / 1000.0

    /**
     * Check if the device is currently charging
     */
    val isCharging: Boolean
        get() = batteryState is BatteryState.Charging

    /**
     * Check if the device is discharging (actively using battery)
     */
    val isDischarging: Boolean
        get() = batteryState is BatteryState.Discharging
}
