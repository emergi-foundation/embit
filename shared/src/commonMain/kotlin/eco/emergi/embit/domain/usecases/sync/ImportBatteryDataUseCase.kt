package eco.emergi.embit.domain.usecases.sync

import eco.emergi.embit.domain.models.BatteryReading
import eco.emergi.embit.domain.models.BatteryState
import eco.emergi.embit.domain.models.SyncableBatteryReading
import eco.emergi.embit.domain.repositories.IBatteryRepository
import eco.emergi.embit.domain.repositories.ISyncRepository

/**
 * Use case for importing battery data from Firestore to local database.
 * Downloads readings from the cloud and merges them with local data.
 */
class ImportBatteryDataUseCase(
    private val syncRepository: ISyncRepository,
    private val batteryRepository: IBatteryRepository
) {
    /**
     * Import battery readings from cloud for a specific time range
     *
     * @param startTimestamp Start of time range (milliseconds)
     * @param endTimestamp End of time range (milliseconds)
     * @param limit Maximum number of readings to fetch
     * @param conflictStrategy Strategy for handling conflicts (KEEP_NEWER, KEEP_LOCAL, KEEP_REMOTE)
     * @return Result with count of imported readings
     */
    suspend operator fun invoke(
        startTimestamp: Long = 0,
        endTimestamp: Long = System.currentTimeMillis(),
        limit: Int = 1000,
        conflictStrategy: ConflictStrategy = ConflictStrategy.KEEP_NEWER
    ): ImportResult {
        // Check if sync is ready
        if (!syncRepository.isReadyToSync()) {
            return ImportResult.Failure("User not authenticated")
        }

        return try {
            // Fetch readings from Firestore
            val fetchResult = syncRepository.fetchBatteryReadings(
                startTimestamp = startTimestamp,
                endTimestamp = endTimestamp,
                limit = limit
            )

            val remoteReadings = fetchResult.getOrNull()
                ?: return ImportResult.Failure("Failed to fetch remote readings")

            if (remoteReadings.isEmpty()) {
                return ImportResult.Success(
                    imported = 0,
                    skipped = 0,
                    conflicts = 0
                )
            }

            // Get existing local readings in the same time range
            val localReadingsResult = batteryRepository.getBatteryReadingsByTimeRange(
                startTime = startTimestamp,
                endTime = endTimestamp
            )
            val localReadings = localReadingsResult.getOrNull() ?: emptyList()

            // Create a map of local readings by timestamp for quick lookup
            val localReadingsByTimestamp = localReadings.associateBy { it.timestamp }

            var imported = 0
            var skipped = 0
            var conflicts = 0

            val readingsToImport = mutableListOf<BatteryReading>()

            // Process each remote reading
            remoteReadings.forEach { remoteReading ->
                val localReading = localReadingsByTimestamp[remoteReading.timestamp]

                if (localReading == null) {
                    // No conflict - reading doesn't exist locally
                    readingsToImport.add(remoteReading.toBatteryReading())
                } else {
                    // Conflict - reading exists both locally and remotely
                    conflicts++

                    val shouldImport = when (conflictStrategy) {
                        ConflictStrategy.KEEP_NEWER -> {
                            // Compare sync timestamps if available
                            val remoteSyncTime = remoteReading.syncedAt ?: 0
                            val localSyncTime = localReading.syncedAt ?: 0
                            remoteSyncTime > localSyncTime
                        }
                        ConflictStrategy.KEEP_LOCAL -> false
                        ConflictStrategy.KEEP_REMOTE -> true
                    }

                    if (shouldImport) {
                        readingsToImport.add(remoteReading.toBatteryReading())
                    } else {
                        skipped++
                    }
                }
            }

            // Bulk insert new readings
            if (readingsToImport.isNotEmpty()) {
                val insertResult = batteryRepository.insertReadings(readingsToImport)
                if (insertResult.isFailure) {
                    return ImportResult.Failure("Failed to insert imported readings: ${insertResult.exceptionOrNull()?.message}")
                }
                imported = readingsToImport.size
            }

            ImportResult.Success(
                imported = imported,
                skipped = skipped,
                conflicts = conflicts
            )
        } catch (e: Exception) {
            ImportResult.Failure("Import failed: ${e.message}")
        }
    }

    /**
     * Strategy for resolving conflicts when same reading exists locally and remotely
     */
    enum class ConflictStrategy {
        /** Keep the reading with the newer sync timestamp */
        KEEP_NEWER,
        /** Always keep the local reading */
        KEEP_LOCAL,
        /** Always keep the remote reading */
        KEEP_REMOTE
    }

    /**
     * Result of import operation
     */
    sealed class ImportResult {
        data class Success(
            val imported: Int,
            val skipped: Int,
            val conflicts: Int
        ) : ImportResult()

        data class Failure(val error: String) : ImportResult()
    }
}

/**
 * Extension function to convert SyncableBatteryReading to BatteryReading
 */
private fun SyncableBatteryReading.toBatteryReading(): BatteryReading {
    return BatteryReading(
        id = this.id,
        timestamp = this.timestamp,
        voltageMillivolts = this.voltageMillivolts,
        amperageMicroamps = this.amperageMicroamps,
        temperatureCelsius = this.temperatureCelsius,
        batteryPercentage = this.batteryPercentage,
        batteryState = BatteryState.fromType(this.batteryStateType),
        syncedAt = this.syncedAt
    )
}
