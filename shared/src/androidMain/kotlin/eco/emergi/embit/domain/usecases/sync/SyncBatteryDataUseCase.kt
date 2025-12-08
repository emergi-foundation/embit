package eco.emergi.embit.domain.usecases.sync

import android.content.Context
import android.os.Build
import eco.emergi.embit.domain.models.DeviceInfo
import eco.emergi.embit.domain.models.SyncResult
import eco.emergi.embit.domain.models.SyncableBatteryReading
import eco.emergi.embit.domain.repositories.IAuthRepository
import eco.emergi.embit.domain.repositories.IBatteryRepository
import eco.emergi.embit.domain.repositories.ISyncRepository

/**
 * Use case for syncing battery data to the cloud.
 * Android-specific implementation with device info collection.
 */
class SyncBatteryDataUseCase(
    private val syncRepository: ISyncRepository,
    private val batteryRepository: IBatteryRepository,
    private val authRepository: IAuthRepository,
    private val context: Context
) {
    /**
     * Sync unsynced battery readings to the cloud
     *
     * @param maxBatchSize Maximum number of readings to sync in one operation
     * @return SyncResult indicating success or failure
     */
    suspend operator fun invoke(maxBatchSize: Int = 100): SyncResult {
        // Check if user is authenticated
        if (!syncRepository.isReadyToSync()) {
            return SyncResult.Failure("User not authenticated")
        }

        val currentUser = authRepository.getCurrentUser()
            ?: return SyncResult.Failure("No current user")

        try {
            // Register/update device info
            registerDevice()

            // Get unsynced readings from local database
            val readingsResult = batteryRepository.getUnsyncedReadings(limit = maxBatchSize)
            val readings = readingsResult.getOrNull() ?: emptyList()

            if (readings.isEmpty()) {
                return SyncResult.Success(0, System.currentTimeMillis())
            }

            // Convert to syncable readings
            val deviceId = getDeviceId()
            val syncableReadings = readings.map { reading ->
                SyncableBatteryReading.fromBatteryReading(
                    reading = reading,
                    userId = currentUser.uid,
                    deviceId = deviceId
                )
            }

            // Sync to cloud
            val syncResult = syncRepository.syncBatteryReadings(syncableReadings)

            // If sync was successful, mark readings as synced
            if (syncResult is SyncResult.Success) {
                val readingIds = readings.map { it.id }
                batteryRepository.markReadingsAsSynced(
                    readingIds = readingIds,
                    syncTimestamp = syncResult.timestamp
                )
            }

            return syncResult
        } catch (e: Exception) {
            return SyncResult.Failure("Sync failed: ${e.message}")
        }
    }

    /**
     * Register the current device with the sync service
     */
    private suspend fun registerDevice() {
        val deviceInfo = DeviceInfo(
            deviceId = getDeviceId(),
            deviceName = getDeviceName(),
            deviceModel = Build.MODEL,
            osVersion = "Android ${Build.VERSION.RELEASE}",
            appVersion = getAppVersion(),
            lastActiveTimestamp = System.currentTimeMillis()
        )

        syncRepository.registerDevice(deviceInfo)
    }

    /**
     * Get a unique device identifier
     */
    private fun getDeviceId(): String {
        return "${Build.MODEL}_${Build.DEVICE}".replace(" ", "_")
    }

    /**
     * Get a user-friendly device name
     */
    private fun getDeviceName(): String {
        val manufacturer = Build.MANUFACTURER
        val model = Build.MODEL
        return if (model.startsWith(manufacturer)) {
            model
        } else {
            "$manufacturer $model"
        }
    }

    /**
     * Get the current app version
     */
    private fun getAppVersion(): String {
        return try {
            val packageInfo = context.packageManager.getPackageInfo(context.packageName, 0)
            packageInfo.versionName ?: "Unknown"
        } catch (e: Exception) {
            "Unknown"
        }
    }
}
