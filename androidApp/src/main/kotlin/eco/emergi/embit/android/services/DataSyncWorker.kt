package eco.emergi.embit.android.services

import android.content.Context
import android.net.ConnectivityManager
import android.net.NetworkCapabilities
import androidx.hilt.work.HiltWorker
import androidx.work.CoroutineWorker
import androidx.work.WorkerParameters
import dagger.assisted.Assisted
import dagger.assisted.AssistedInject
import eco.emergi.embit.android.analytics.AnalyticsManager
import eco.emergi.embit.android.analytics.CrashlyticsManager
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
    private val authRepository: IAuthRepository,
    private val analyticsManager: AnalyticsManager,
    private val crashlyticsManager: CrashlyticsManager
) : CoroutineWorker(appContext, workerParams) {

    override suspend fun doWork(): Result {
        val startTime = System.currentTimeMillis()

        return try {
            // Check if user is authenticated
            if (!authRepository.isSignedIn()) {
                crashlyticsManager.log("Sync skipped: User not authenticated")
                return Result.success() // Skip sync if not signed in
            }

            // Get sync settings
            val settingsResult = getSyncSettingsUseCase()
            val settings = settingsResult.getOrNull() ?: run {
                crashlyticsManager.log("Sync failed: Could not get sync settings")
                return Result.retry()
            }

            // Check if auto-sync is enabled
            if (!settings.autoSyncEnabled) {
                crashlyticsManager.log("Sync skipped: Auto-sync disabled")
                return Result.success() // Skip sync if auto-sync is disabled
            }

            // Check WiFi requirement
            if (settings.syncOnWifiOnly && !isWifiConnected()) {
                crashlyticsManager.log("Sync skipped: WiFi-only enabled but not on WiFi")
                return Result.success() // Skip sync if WiFi-only and not on WiFi
            }

            // Log sync started
            analyticsManager.logSyncStarted(triggerSource = "automatic")
            crashlyticsManager.setIsSyncing(true)

            // Perform bidirectional sync (upload + download)
            when (val syncResult = bidirectionalSyncUseCase(
                maxUploadBatchSize = settings.maxBatchSize,
                maxDownloadLimit = 1000,
                conflictStrategy = ImportBatteryDataUseCase.ConflictStrategy.KEEP_NEWER,
                syncDirection = BidirectionalSyncUseCase.SyncDirection.BOTH
            )) {
                is BidirectionalSyncUseCase.BidirectionalSyncResult.Success -> {
                    val duration = System.currentTimeMillis() - startTime
                    val totalRecords = syncResult.uploadedCount + syncResult.importedCount

                    // Log sync statistics
                    android.util.Log.d(TAG, "Sync completed: " +
                            "uploaded=${syncResult.uploadedCount}, " +
                            "imported=${syncResult.importedCount}, " +
                            "conflicts=${syncResult.conflictsResolved}")

                    // Log analytics
                    analyticsManager.logSyncCompleted(
                        recordCount = totalRecords,
                        durationMs = duration,
                        triggerSource = "automatic"
                    )

                    // Update Crashlytics context
                    crashlyticsManager.setIsSyncing(false)
                    crashlyticsManager.setLastSyncTimestamp(System.currentTimeMillis())
                    crashlyticsManager.setPendingSyncCount(0)

                    Result.success()
                }
                is BidirectionalSyncUseCase.BidirectionalSyncResult.Failure -> {
                    android.util.Log.e(TAG, "Sync failed: ${syncResult.error}")

                    // Log analytics
                    analyticsManager.logSyncFailed(
                        errorType = "sync_error",
                        errorMessage = syncResult.error,
                        triggerSource = "automatic"
                    )

                    // Log to Crashlytics
                    crashlyticsManager.logException(Exception("Sync failed: ${syncResult.error}"))
                    crashlyticsManager.setIsSyncing(false)

                    Result.retry()
                }
            }
        } catch (e: Exception) {
            // Log error to Crashlytics and Analytics
            crashlyticsManager.logException(e)
            crashlyticsManager.setIsSyncing(false)
            analyticsManager.logSyncFailed(
                errorType = "sync_exception",
                errorMessage = e.message,
                triggerSource = "automatic"
            )
            // Don't fail permanently
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
