package eco.emergi.embit.domain.models

import kotlinx.serialization.Serializable

/**
 * Battery reading optimized for Firestore syncing.
 * Excludes computed properties and uses primitive types compatible with Firestore.
 */
@Serializable
data class SyncableBatteryReading(
    val id: Long,
    val userId: String,
    val timestamp: Long, // Unix timestamp in milliseconds
    val voltageMillivolts: Int,
    val amperageMicroamps: Long,
    val temperatureCelsius: Float? = null,
    val batteryPercentage: Int,
    val batteryStateType: String, // "charging", "discharging", "full", "not_charging"
    val deviceId: String, // Unique device identifier
    val syncedAt: Long? = null // When this reading was synced to cloud
) {
    companion object {
        /**
         * Convert a domain BatteryReading to a SyncableBatteryReading
         */
        fun fromBatteryReading(
            reading: BatteryReading,
            userId: String,
            deviceId: String
        ): SyncableBatteryReading {
            return SyncableBatteryReading(
                id = reading.id,
                userId = userId,
                timestamp = reading.timestamp.toEpochMilliseconds(),
                voltageMillivolts = reading.voltageMillivolts,
                amperageMicroamps = reading.amperageMicroamps,
                temperatureCelsius = reading.temperatureCelsius,
                batteryPercentage = reading.batteryPercentage,
                batteryStateType = when (reading.batteryState) {
                    is BatteryState.Charging -> "charging"
                    is BatteryState.Discharging -> "discharging"
                    is BatteryState.Full -> "full"
                    is BatteryState.NotCharging -> "not_charging"
                    is BatteryState.Unknown -> "unknown"
                },
                deviceId = deviceId,
                syncedAt = null
            )
        }
    }
}

/**
 * Represents the sync status for a batch of battery readings
 */
@Serializable
data class SyncStatus(
    val lastSyncTimestamp: Long? = null, // When the last successful sync occurred
    val lastSyncReadingId: Long? = null, // ID of the last reading that was synced
    val pendingSyncCount: Int = 0, // Number of readings waiting to be synced
    val syncInProgress: Boolean = false,
    val lastSyncError: String? = null
)

/**
 * Sync operation result
 */
sealed class SyncResult {
    data class Success(val syncedCount: Int, val timestamp: Long) : SyncResult()
    data class PartialSuccess(val syncedCount: Int, val failedCount: Int, val error: String) : SyncResult()
    data class Failure(val error: String) : SyncResult()
}

/**
 * Device information for multi-device sync
 */
@Serializable
data class DeviceInfo(
    val deviceId: String,
    val deviceName: String,
    val deviceModel: String,
    val osVersion: String,
    val appVersion: String,
    val lastActiveTimestamp: Long
)

/**
 * User sync settings
 */
@Serializable
data class SyncSettings(
    val autoSyncEnabled: Boolean = true,
    val syncOnWifiOnly: Boolean = true,
    val syncInterval: SyncInterval = SyncInterval.HOURLY,
    val maxBatchSize: Int = 100 // Max readings to sync in one batch
)

/**
 * Sync interval options
 */
enum class SyncInterval {
    MANUAL,     // Manual sync only
    HOURLY,     // Sync every hour
    DAILY,      // Sync once per day
    REAL_TIME   // Sync immediately after each reading
}
