package eco.emergi.embit.domain.repositories

import eco.emergi.embit.domain.models.*
import kotlinx.coroutines.flow.Flow

/**
 * Repository interface for syncing battery data to the cloud.
 * Implementations handle data synchronization with backend services like Firestore.
 */
interface ISyncRepository {
    /**
     * Sync unsynchronized battery readings to the cloud
     *
     * @param readings List of battery readings to sync
     * @return Result indicating success or failure with details
     */
    suspend fun syncBatteryReadings(readings: List<SyncableBatteryReading>): SyncResult

    /**
     * Observe sync status as a Flow
     * Emits updates when sync operations occur
     *
     * @return Flow of sync status updates
     */
    fun observeSyncStatus(): Flow<SyncStatus>

    /**
     * Get the current sync status
     *
     * @return Current sync status
     */
    suspend fun getSyncStatus(): SyncStatus

    /**
     * Get battery readings from the cloud for the current user
     * Useful for restoring data on a new device
     *
     * @param startTimestamp Start of time range (inclusive)
     * @param endTimestamp End of time range (inclusive)
     * @param limit Maximum number of readings to fetch
     * @return List of syncable battery readings
     */
    suspend fun fetchBatteryReadings(
        startTimestamp: Long,
        endTimestamp: Long,
        limit: Int = 1000
    ): Result<List<SyncableBatteryReading>>

    /**
     * Register or update device information in the cloud
     *
     * @param deviceInfo Device information to register
     * @return Result indicating success or failure
     */
    suspend fun registerDevice(deviceInfo: DeviceInfo): Result<Unit>

    /**
     * Get all devices registered for the current user
     *
     * @return List of device information
     */
    suspend fun getUserDevices(): Result<List<DeviceInfo>>

    /**
     * Save sync settings to the cloud
     *
     * @param settings Sync settings to save
     * @return Result indicating success or failure
     */
    suspend fun saveSyncSettings(settings: SyncSettings): Result<Unit>

    /**
     * Get sync settings from the cloud
     *
     * @return Sync settings or default if not found
     */
    suspend fun getSyncSettings(): Result<SyncSettings>

    /**
     * Delete all synced data for the current user
     * WARNING: This is a destructive operation
     *
     * @return Result indicating success or failure
     */
    suspend fun deleteAllSyncedData(): Result<Unit>

    /**
     * Get the count of readings pending sync
     *
     * @return Number of readings waiting to be synced
     */
    suspend fun getPendingSyncCount(): Int

    /**
     * Mark readings as synced in the local database
     *
     * @param readingIds List of reading IDs that were successfully synced
     * @param syncTimestamp Timestamp when sync occurred
     * @return Result indicating success or failure
     */
    suspend fun markReadingsAsSynced(readingIds: List<Long>, syncTimestamp: Long): Result<Unit>

    /**
     * Check if the repository is properly initialized and authenticated
     *
     * @return true if ready to sync, false otherwise
     */
    suspend fun isReadyToSync(): Boolean
}
