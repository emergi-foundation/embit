package eco.emergi.embit.android.services

import android.content.Context
import android.net.ConnectivityManager
import android.net.NetworkCapabilities
import androidx.hilt.work.HiltWorker
import androidx.work.CoroutineWorker
import androidx.work.WorkerParameters
import dagger.assisted.Assisted
import dagger.assisted.AssistedInject
import eco.emergi.embit.domain.models.SyncResult
import eco.emergi.embit.domain.repositories.IAuthRepository
import eco.emergi.embit.domain.usecases.sync.GetSyncSettingsUseCase
import eco.emergi.embit.domain.usecases.sync.SyncBatteryDataUseCase

/**
 * WorkManager worker for periodic data synchronization to the cloud.
 *
 * This worker runs periodically to sync battery readings to Firestore
 * when the user is authenticated and has auto-sync enabled.
 */
@HiltWorker
class DataSyncWorker @AssistedInject constructor(
    @Assisted appContext: Context,
    @Assisted workerParams: WorkerParameters,
    private val syncBatteryDataUseCase: SyncBatteryDataUseCase,
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

            // Perform sync
            when (val syncResult = syncBatteryDataUseCase(settings.maxBatchSize)) {
                is SyncResult.Success -> {
                    Result.success()
                }
                is SyncResult.PartialSuccess -> {
                    // Some data synced, retry for the rest
                    Result.retry()
                }
                is SyncResult.Failure -> {
                    // Failed to sync, will retry later
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
