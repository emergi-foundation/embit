package eco.emergi.embit.data.firebase

import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.firestore.Query
import eco.emergi.embit.domain.models.*
import eco.emergi.embit.domain.repositories.IBatteryRepository
import eco.emergi.embit.domain.repositories.ISyncRepository
import kotlinx.coroutines.channels.awaitClose
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.callbackFlow
import kotlinx.coroutines.tasks.await

/**
 * Firestore implementation of sync repository.
 * Syncs battery data to Firebase Firestore for cloud backup and multi-device access.
 */
class FirestoreSyncRepository(
    private val firestore: FirebaseFirestore = FirebaseFirestore.getInstance(),
    private val firebaseAuth: FirebaseAuth = FirebaseAuth.getInstance(),
    private val batteryRepository: IBatteryRepository
) : ISyncRepository {

    private val syncStatusFlow = MutableStateFlow(SyncStatus())

    companion object {
        private const val COLLECTION_READINGS = "battery_readings"
        private const val COLLECTION_DEVICES = "devices"
        private const val COLLECTION_SETTINGS = "settings"
        private const val COLLECTION_USERS = "users"
    }

    override suspend fun syncBatteryReadings(readings: List<SyncableBatteryReading>): SyncResult {
        val userId = firebaseAuth.currentUser?.uid
            ?: return SyncResult.Failure("User not authenticated")

        if (readings.isEmpty()) {
            return SyncResult.Success(0, System.currentTimeMillis())
        }

        return try {
            syncStatusFlow.value = syncStatusFlow.value.copy(syncInProgress = true)

            val batch = firestore.batch()
            val syncTimestamp = System.currentTimeMillis()
            val syncedIds = mutableListOf<Long>()

            readings.forEach { reading ->
                val docRef = firestore
                    .collection(COLLECTION_USERS)
                    .document(userId)
                    .collection(COLLECTION_READINGS)
                    .document(reading.id.toString())

                val data = hashMapOf(
                    "id" to reading.id,
                    "userId" to reading.userId,
                    "timestamp" to reading.timestamp,
                    "voltageMillivolts" to reading.voltageMillivolts,
                    "amperageMicroamps" to reading.amperageMicroamps,
                    "temperatureCelsius" to reading.temperatureCelsius,
                    "batteryPercentage" to reading.batteryPercentage,
                    "batteryStateType" to reading.batteryStateType,
                    "deviceId" to reading.deviceId,
                    "syncedAt" to syncTimestamp
                )

                batch.set(docRef, data)
                syncedIds.add(reading.id)
            }

            batch.commit().await()

            // Mark readings as synced locally
            markReadingsAsSynced(syncedIds, syncTimestamp)

            val newStatus = SyncStatus(
                lastSyncTimestamp = syncTimestamp,
                lastSyncReadingId = readings.maxOfOrNull { it.id },
                pendingSyncCount = getPendingSyncCount(),
                syncInProgress = false,
                lastSyncError = null
            )
            syncStatusFlow.value = newStatus

            SyncResult.Success(syncedIds.size, syncTimestamp)
        } catch (e: Exception) {
            val errorMessage = "Sync failed: ${e.message}"
            syncStatusFlow.value = syncStatusFlow.value.copy(
                syncInProgress = false,
                lastSyncError = errorMessage
            )
            SyncResult.Failure(errorMessage)
        }
    }

    override fun observeSyncStatus(): Flow<SyncStatus> {
        return syncStatusFlow
    }

    override suspend fun getSyncStatus(): SyncStatus {
        return syncStatusFlow.value
    }

    override suspend fun fetchBatteryReadings(
        startTimestamp: Long,
        endTimestamp: Long,
        limit: Int
    ): Result<List<SyncableBatteryReading>> {
        val userId = firebaseAuth.currentUser?.uid
            ?: return Result.failure(Exception("User not authenticated"))

        return try {
            val querySnapshot = firestore
                .collection(COLLECTION_USERS)
                .document(userId)
                .collection(COLLECTION_READINGS)
                .whereGreaterThanOrEqualTo("timestamp", startTimestamp)
                .whereLessThanOrEqualTo("timestamp", endTimestamp)
                .orderBy("timestamp", Query.Direction.DESCENDING)
                .limit(limit.toLong())
                .get()
                .await()

            val readings = querySnapshot.documents.mapNotNull { doc ->
                try {
                    SyncableBatteryReading(
                        id = doc.getLong("id") ?: 0,
                        userId = doc.getString("userId") ?: userId,
                        timestamp = doc.getLong("timestamp") ?: 0,
                        voltageMillivolts = doc.getLong("voltageMillivolts")?.toInt() ?: 0,
                        amperageMicroamps = doc.getLong("amperageMicroamps") ?: 0,
                        temperatureCelsius = doc.getDouble("temperatureCelsius")?.toFloat(),
                        batteryPercentage = doc.getLong("batteryPercentage")?.toInt() ?: 0,
                        batteryStateType = doc.getString("batteryStateType") ?: "unknown",
                        deviceId = doc.getString("deviceId") ?: "",
                        syncedAt = doc.getLong("syncedAt")
                    )
                } catch (e: Exception) {
                    null
                }
            }

            Result.success(readings)
        } catch (e: Exception) {
            Result.failure(Exception("Failed to fetch readings: ${e.message}"))
        }
    }

    override suspend fun registerDevice(deviceInfo: DeviceInfo): Result<Unit> {
        val userId = firebaseAuth.currentUser?.uid
            ?: return Result.failure(Exception("User not authenticated"))

        return try {
            val deviceData = hashMapOf(
                "deviceId" to deviceInfo.deviceId,
                "deviceName" to deviceInfo.deviceName,
                "deviceModel" to deviceInfo.deviceModel,
                "osVersion" to deviceInfo.osVersion,
                "appVersion" to deviceInfo.appVersion,
                "lastActiveTimestamp" to deviceInfo.lastActiveTimestamp
            )

            firestore
                .collection(COLLECTION_USERS)
                .document(userId)
                .collection(COLLECTION_DEVICES)
                .document(deviceInfo.deviceId)
                .set(deviceData)
                .await()

            Result.success(Unit)
        } catch (e: Exception) {
            Result.failure(Exception("Failed to register device: ${e.message}"))
        }
    }

    override suspend fun getUserDevices(): Result<List<DeviceInfo>> {
        val userId = firebaseAuth.currentUser?.uid
            ?: return Result.failure(Exception("User not authenticated"))

        return try {
            val querySnapshot = firestore
                .collection(COLLECTION_USERS)
                .document(userId)
                .collection(COLLECTION_DEVICES)
                .orderBy("lastActiveTimestamp", Query.Direction.DESCENDING)
                .get()
                .await()

            val devices = querySnapshot.documents.mapNotNull { doc ->
                try {
                    DeviceInfo(
                        deviceId = doc.getString("deviceId") ?: "",
                        deviceName = doc.getString("deviceName") ?: "",
                        deviceModel = doc.getString("deviceModel") ?: "",
                        osVersion = doc.getString("osVersion") ?: "",
                        appVersion = doc.getString("appVersion") ?: "",
                        lastActiveTimestamp = doc.getLong("lastActiveTimestamp") ?: 0
                    )
                } catch (e: Exception) {
                    null
                }
            }

            Result.success(devices)
        } catch (e: Exception) {
            Result.failure(Exception("Failed to fetch devices: ${e.message}"))
        }
    }

    override suspend fun saveSyncSettings(settings: SyncSettings): Result<Unit> {
        val userId = firebaseAuth.currentUser?.uid
            ?: return Result.failure(Exception("User not authenticated"))

        return try {
            val settingsData = hashMapOf(
                "autoSyncEnabled" to settings.autoSyncEnabled,
                "syncOnWifiOnly" to settings.syncOnWifiOnly,
                "syncInterval" to settings.syncInterval.name,
                "maxBatchSize" to settings.maxBatchSize
            )

            firestore
                .collection(COLLECTION_USERS)
                .document(userId)
                .collection(COLLECTION_SETTINGS)
                .document("sync")
                .set(settingsData)
                .await()

            Result.success(Unit)
        } catch (e: Exception) {
            Result.failure(Exception("Failed to save settings: ${e.message}"))
        }
    }

    override suspend fun getSyncSettings(): Result<SyncSettings> {
        val userId = firebaseAuth.currentUser?.uid
            ?: return Result.failure(Exception("User not authenticated"))

        return try {
            val doc = firestore
                .collection(COLLECTION_USERS)
                .document(userId)
                .collection(COLLECTION_SETTINGS)
                .document("sync")
                .get()
                .await()

            if (!doc.exists()) {
                // Return default settings if not found
                return Result.success(SyncSettings())
            }

            val settings = SyncSettings(
                autoSyncEnabled = doc.getBoolean("autoSyncEnabled") ?: true,
                syncOnWifiOnly = doc.getBoolean("syncOnWifiOnly") ?: true,
                syncInterval = try {
                    SyncInterval.valueOf(doc.getString("syncInterval") ?: "HOURLY")
                } catch (e: Exception) {
                    SyncInterval.HOURLY
                },
                maxBatchSize = doc.getLong("maxBatchSize")?.toInt() ?: 100
            )

            Result.success(settings)
        } catch (e: Exception) {
            Result.failure(Exception("Failed to get settings: ${e.message}"))
        }
    }

    override suspend fun deleteAllSyncedData(): Result<Unit> {
        val userId = firebaseAuth.currentUser?.uid
            ?: return Result.failure(Exception("User not authenticated"))

        return try {
            // Delete all battery readings
            val readingsSnapshot = firestore
                .collection(COLLECTION_USERS)
                .document(userId)
                .collection(COLLECTION_READINGS)
                .get()
                .await()

            val batch = firestore.batch()
            readingsSnapshot.documents.forEach { doc ->
                batch.delete(doc.reference)
            }
            batch.commit().await()

            Result.success(Unit)
        } catch (e: Exception) {
            Result.failure(Exception("Failed to delete synced data: ${e.message}"))
        }
    }

    override suspend fun getPendingSyncCount(): Int {
        return try {
            // TODO: Query actual unsynced readings count from local database
            // For now, return 0 as placeholder
            0
        } catch (e: Exception) {
            0
        }
    }

    override suspend fun markReadingsAsSynced(readingIds: List<Long>, syncTimestamp: Long): Result<Unit> {
        return try {
            // TODO: Update local database to mark readings as synced
            // This will need to be implemented in BatteryRepository
            Result.success(Unit)
        } catch (e: Exception) {
            Result.failure(Exception("Failed to mark readings as synced: ${e.message}"))
        }
    }

    override suspend fun isReadyToSync(): Boolean {
        return firebaseAuth.currentUser != null
    }
}
