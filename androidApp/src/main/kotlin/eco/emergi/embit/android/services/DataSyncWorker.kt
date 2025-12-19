package eco.emergi.embit.android.services

import android.content.Context
import android.net.ConnectivityManager
import android.net.NetworkCapabilities
import androidx.hilt.work.HiltWorker
import androidx.work.CoroutineWorker
import androidx.work.WorkerParameters
import dagger.assisted.Assisted
import dagger.assisted.AssistedInject
import eco.emergi.embit.domain.repositories.IAuthRepository
import eco.emergi.embit.domain.usecases.sync.BidirectionalSyncUseCase
import eco.emergi.embit.domain.usecases.sync.GetSyncSettingsUseCase
import eco.emergi.embit.domain.usecases.sync.ImportBatteryDataUseCase

/**
 * WorkManager worker for bidirectional data synchronization with the cloud.
 *
 * This worker runs periodically to:
 * 1. Upload unsynced battery readings to Firestore
 * 2. Download new/updated readings from Firestore
 * 3. Resolve conflicts using smart strategies
 *
 * Runs when the user is authenticated and has auto-sync enabled.
 */
@HiltWorker
class DataSyncWorker @AssistedInject constructor(
    @Assisted appContext: Context,
    @Assisted workerParams: WorkerParameters,
    private val bidirectionalSyncUseCase: BidirectionalSyncUseCase,
    private val getSyncSettingsUseCase: GetSyncSettingsUseCase,
    private val authRepository: IAuthRepository
) : CoroutineWorker(appContext, workerParams) {

    override suspend fun doWork(): Result {
        return try {
            // Check if user is authenticated
            if (!authRepository.isSignedIn()) {
                return Result.success() // Skip sync if not signed in
            }

            // Get sync settings
            val settingsResult = getSyncSettingsUseCase()
            val settings = settingsResult.getOrNull() ?: run {
                return Result.retry()
            }

            // Check if auto-sync is enabled
            if (!settings.autoSyncEnabled) {
                return Result.success() // Skip sync if auto-sync is disabled
            }

            // Check WiFi requirement
            if (settings.syncOnWifiOnly && !isWifiConnected()) {
                return Result.success() // Skip sync if WiFi-only and not on WiFi
            }

            // Perform bidirectional sync (upload + download)
            when (val syncResult = bidirectionalSyncUseCase(
                maxUploadBatchSize = settings.maxBatchSize,
                maxDownloadLimit = 1000,
                conflictStrategy = ImportBatteryDataUseCase.ConflictStrategy.KEEP_NEWER,
                syncDirection = BidirectionalSyncUseCase.SyncDirection.BOTH
            )) {
                is BidirectionalSyncUseCase.BidirectionalSyncResult.Success -> {
                    // Log sync statistics
                    android.util.Log.d(TAG, "Sync completed: " +
                            "uploaded=${syncResult.uploadedCount}, " +
                            "imported=${syncResult.importedCount}, " +
                            "conflicts=${syncResult.conflictsResolved}")
                    Result.success()
                }
                is BidirectionalSyncUseCase.BidirectionalSyncResult.Failure -> {
                    android.util.Log.e(TAG, "Sync failed: ${syncResult.error}")
                    Result.retry()
                }
            }
        } catch (e: Exception) {
            // Log error but don't fail permanently
            Result.retry()
        }
    }

    /**
     * Check if device is connected to WiFi
     */
    private fun isWifiConnected(): Boolean {
        val connectivityManager = applicationContext.getSystemService(Context.CONNECTIVITY_SERVICE) as ConnectivityManager
        val network = connectivityManager.activeNetwork ?: return false
        val capabilities = connectivityManager.getNetworkCapabilities(network) ?: return false
        return capabilities.hasTransport(NetworkCapabilities.TRANSPORT_WIFI)
    }

    companion object {
        const val WORK_NAME = "data_sync_periodic"
        const val TAG = "DataSync"
    }
}
