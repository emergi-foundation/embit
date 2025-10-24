package eco.emergi.embit.data.local

import eco.emergi.embit.domain.models.BatteryReading
import eco.emergi.embit.domain.models.BatteryState
import eco.emergi.embit.domain.models.ChargingType
import kotlinx.datetime.Instant

/**
 * Maps between database entities and domain models.
 */

/**
 * Convert SQLDelight BatteryReading to domain model
 */
fun eco.emergi.embit.data.local.BatteryReading.toDomainModel(): BatteryReading {
    return BatteryReading(
        id = id,
        timestamp = Instant.fromEpochMilliseconds(timestamp),
        voltageMillivolts = voltageMillivolts.toInt(),
        amperageMicroamps = amperageMicroamps,
        temperatureCelsius = temperatureCelsius?.toFloat(),
        batteryPercentage = batteryPercentage.toInt(),
        batteryState = parseBatteryState(batteryState, chargingType)
    )
}

/**
 * Parse battery state from string representation
 */
private fun parseBatteryState(state: String, chargingTypeStr: String?): BatteryState {
    return when {
        state.startsWith("Charging") -> {
            val type = when (chargingTypeStr) {
                "AC" -> ChargingType.AC
                "USB" -> ChargingType.USB
                "WIRELESS" -> ChargingType.WIRELESS
                else -> ChargingType.UNKNOWN
            }
            BatteryState.Charging(type)
        }
        state == "Discharging" -> BatteryState.Discharging
        state == "Full" -> BatteryState.Full
        state == "NotCharging" -> BatteryState.NotCharging
        else -> BatteryState.Unknown
    }
}

/**
 * Serialize battery state to string for database
 */
fun serializeBatteryState(state: BatteryState): String {
    return when (state) {
        is BatteryState.Charging -> "Charging"
        BatteryState.Discharging -> "Discharging"
        BatteryState.Full -> "Full"
        BatteryState.NotCharging -> "NotCharging"
        BatteryState.Unknown -> "Unknown"
    }
}

/**
 * Serialize charging type to string for database
 */
fun serializeChargingType(state: BatteryState): String? {
    return when (state) {
        is BatteryState.Charging -> when (state.chargingType) {
            ChargingType.AC -> "AC"
            ChargingType.USB -> "USB"
            ChargingType.WIRELESS -> "WIRELESS"
            ChargingType.UNKNOWN -> "UNKNOWN"
        }
        else -> null
    }
}
