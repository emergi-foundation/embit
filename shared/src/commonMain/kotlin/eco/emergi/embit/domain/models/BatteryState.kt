package eco.emergi.embit.domain.models

import kotlinx.serialization.Serializable

/**
 * Represents the current charging/discharging state of the battery.
 */
@Serializable
sealed class BatteryState {
    /**
     * Battery is currently charging
     * @property chargingType The type of charging connection (AC, USB, Wireless)
     */
    @Serializable
    data class Charging(val chargingType: ChargingType) : BatteryState()

    /**
     * Battery is currently discharging (device is using battery power)
     */
    @Serializable
    data object Discharging : BatteryState()

    /**
     * Battery is full and not charging
     */
    @Serializable
    data object Full : BatteryState()

    /**
     * Battery is connected to power but not charging
     */
    @Serializable
    data object NotCharging : BatteryState()

    /**
     * Battery state is unknown or unavailable
     */
    @Serializable
    data object Unknown : BatteryState()
}

/**
 * Types of charging connections
 */
@Serializable
enum class ChargingType {
    AC,         // Wall charger
    USB,        // USB connection
    WIRELESS,   // Wireless charging
    UNKNOWN     // Unknown charging type
}
