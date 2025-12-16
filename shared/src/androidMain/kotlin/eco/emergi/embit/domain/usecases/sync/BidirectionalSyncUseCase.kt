package eco.emergi.embit.domain.usecases.sync

import eco.emergi.embit.domain.models.SyncResult
import eco.emergi.embit.domain.repositories.IBatteryRepository
import eco.emergi.embit.domain.repositories.ISyncRepository

/**
 * Comprehensive bidirectional sync use case.
 * Orchestrates both upload (local → cloud) and download (cloud → local) operations.
 *
 * Sync Flow:
 * 1. Upload unsynced local readings to cloud
 * 2. Download new/updated readings from cloud
 * 3. Handle conflicts using configured strategy
 * 4. Update sync status
 */
class BidirectionalSyncUseCase(
    private val syncRepository: ISyncRepository,
    private val batteryRepository: IBatteryRepository,
    private val uploadUseCase: SyncBatteryDataUseCase,
    private val importUseCase: ImportBatteryDataUseCase
) {
    /**
     * Perform full bidirectional sync
     *
     * @param maxUploadBatchSize Maximum readings to upload in one batch
     * @param maxDownloadLimit Maximum readings to download
     * @param conflictStrategy How to handle conflicts during import
     * @param syncDirection Direction of sync (BOTH, UPLOAD_ONLY, DOWNLOAD_ONLY)
     * @return BidirectionalSyncResult with details of both operations
     */
    suspend operator fun invoke(
        maxUploadBatchSize: Int = 100,
        maxDownloadLimit: Int = 1000,
        conflictStrategy: ImportBatteryDataUseCase.ConflictStrategy = ImportBatteryDataUseCase.ConflictStrategy.KEEP_NEWER,
        syncDirection: SyncDirection = SyncDirection.BOTH
    ): BidirectionalSyncResult {
        if (!syncRepository.isReadyToSync()) {
            return BidirectionalSyncResult.Failure("User not authenticated")
        }

        val startTime = System.currentTimeMillis()

        return try {
            var uploadResult: SyncResult? = null
            var importResult: ImportBatteryDataUseCase.ImportResult? = null

            // Step 1: Upload unsynced local readings to cloud
            if (syncDirection == SyncDirection.BOTH || syncDirection == SyncDirection.UPLOAD_ONLY) {
                uploadResult = uploadUseCase(maxUploadBatchSize)

                if (uploadResult is SyncResult.Failure && syncDirection == SyncDirection.UPLOAD_ONLY) {
                    return BidirectionalSyncResult.Failure("Upload failed: ${uploadResult.error}")
                }
            }

            // Step 2: Download and import readings from cloud
            if (syncDirection == SyncDirection.BOTH || syncDirection == SyncDirection.DOWNLOAD_ONLY) {
                // Get the timestamp of the last synced reading to avoid re-downloading
                val lastSyncTimestamp = syncRepository.getSyncStatus().lastSyncTimestamp ?: 0

                // Download readings from last sync until now
                importResult = importUseCase(
                    startTimestamp = if (lastSyncTimestamp > 0) lastSyncTimestamp else 0,
                    endTimestamp = System.currentTimeMillis(),
                    limit = maxDownloadLimit,
                    conflictStrategy = conflictStrategy
                )

                if (importResult is ImportBatteryDataUseCase.ImportResult.Failure
                    && syncDirection == SyncDirection.DOWNLOAD_ONLY) {
                    return BidirectionalSyncResult.Failure("Import failed: ${importResult.error}")
                }
            }

            // Build result summary
            val duration = System.currentTimeMillis() - startTime

            BidirectionalSyncResult.Success(
                uploadedCount = (uploadResult as? SyncResult.Success)?.syncedCount ?: 0,
                importedCount = (importResult as? ImportBatteryDataUseCase.ImportResult.Success)?.imported ?: 0,
                conflictsResolved = (importResult as? ImportBatteryDataUseCase.ImportResult.Success)?.conflicts ?: 0,
                skippedCount = (importResult as? ImportBatteryDataUseCase.ImportResult.Success)?.skipped ?: 0,
                duration = duration,
                uploadResult = uploadResult,
                importResult = importResult
            )
        } catch (e: Exception) {
            BidirectionalSyncResult.Failure("Bidirectional sync failed: ${e.message}")
        }
    }

    /**
     * Perform initial full sync for a new device
     * Downloads all historical data from cloud
     */
    suspend fun performInitialSync(): BidirectionalSyncResult {
        return invoke(
            maxUploadBatchSize = 100,
            maxDownloadLimit = 10000,  // Higher limit for initial sync
            conflictStrategy = ImportBatteryDataUseCase.ConflictStrategy.KEEP_REMOTE,  // Prefer cloud data
            syncDirection = SyncDirection.BOTH
        )
    }

    /**
     * Direction of sync operation
     */
    enum class SyncDirection {
        /** Sync both ways: upload local changes and download remote changes */
        BOTH,
        /** Only upload local changes to cloud */
        UPLOAD_ONLY,
        /** Only download remote changes from cloud */
        DOWNLOAD_ONLY
    }

    /**
     * Result of bidirectional sync operation
     */
    sealed class BidirectionalSyncResult {
        data class Success(
            val uploadedCount: Int,
            val importedCount: Int,
            val conflictsResolved: Int,
            val skippedCount: Int,
            val duration: Long,
            val uploadResult: SyncResult?,
            val importResult: ImportBatteryDataUseCase.ImportResult?
        ) : BidirectionalSyncResult() {
            val totalSynced: Int get() = uploadedCount + importedCount
        }

        data class Failure(val error: String) : BidirectionalSyncResult()
    }
}
