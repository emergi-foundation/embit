package eco.emergi.embit.android.services

import android.content.Context
import android.util.Log
import androidx.hilt.work.HiltWorker
import androidx.work.*
import dagger.assisted.Assisted
import dagger.assisted.AssistedInject
import eco.emergi.embit.domain.models.GridStressLevel
import eco.emergi.embit.domain.models.PricingTier
import eco.emergi.embit.domain.repositories.IGridDataRepository
import eco.emergi.embit.domain.usecases.PredictBatteryLifeUseCase
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import java.util.concurrent.TimeUnit

/**
 * Worker that provides intelligent charging recommendations based on:
 * - Battery prediction (time remaining)
 * - Grid status (stress, pricing, carbon intensity)
 * - User preferences
 *
 * Shows notifications at optimal times to charge or unplug
 */
@HiltWorker
class PredictiveChargingWorker @AssistedInject constructor(
    @Assisted appContext: Context,
    @Assisted workerParams: WorkerParameters,
) : CoroutineWorker(appContext, workerParams) {

    companion object {
        private const val TAG = "PredictiveChargingWorker"
        private const val WORK_NAME = "predictive_charging_monitor"

        /**
         * Schedule predictive charging monitoring
         */
        fun schedule(context: Context) {
            val constraints = Constraints.Builder()
                .setRequiredNetworkType(NetworkType.CONNECTED)
                .build()

            val request = PeriodicWorkRequestBuilder<PredictiveChargingWorker>(
                repeatInterval = 30, // Check every 30 minutes
                repeatIntervalTimeUnit = TimeUnit.MINUTES
            )
                .setConstraints(constraints)
                .setBackoffCriteria(
                    BackoffPolicy.EXPONENTIAL,
                    WorkRequest.MIN_BACKOFF_MILLIS,
                    TimeUnit.MILLISECONDS
                )
                .build()

            WorkManager.getInstance(context).enqueueUniquePeriodicWork(
                WORK_NAME,
                ExistingPeriodicWorkPolicy.KEEP,
                request
            )

            Log.d(TAG, "Predictive charging monitoring scheduled")
        }

        /**
         * Cancel predictive charging monitoring
         */
        fun cancel(context: Context) {
            WorkManager.getInstance(context).cancelUniqueWork(WORK_NAME)
            Log.d(TAG, "Predictive charging monitoring cancelled")
        }
    }

    override suspend fun doWork(): Result = withContext(Dispatchers.IO) {
        try {
            Log.d(TAG, "Checking for charging recommendations...")

            // Get dependencies from Koin
            val gridDataRepository: IGridDataRepository = org.koin.core.context.GlobalContext.get().get()
            val predictBatteryLifeUseCase: PredictBatteryLifeUseCase = org.koin.core.context.GlobalContext.get().get()
            val batteryRepository: eco.emergi.embit.domain.repositories.IBatteryRepository = org.koin.core.context.GlobalContext.get().get()

            // Get current battery reading
            val currentReadingResult = batteryRepository.getLatestReading()
            val currentReading = currentReadingResult.getOrNull()

            if (currentReading == null) {
                Log.e(TAG, "No battery reading available")
                return@withContext Result.retry()
            }

            // Get battery prediction
            val predictionResult = predictBatteryLifeUseCase(currentReading)
            val prediction = predictionResult.getOrNull()

            if (prediction == null) {
                Log.e(TAG, "Failed to predict battery life")
                return@withContext Result.retry()
            }

            // Get user location for grid status
            val userLocation = gridDataRepository.getUserLocation()

            // Get current grid status
            val gridStatusResult = gridDataRepository.getCurrentGridStatus(userLocation)
            val gridStatus = gridStatusResult.getOrNull()

            if (gridStatus == null) {
                Log.e(TAG, "Failed to fetch grid status")
                return@withContext Result.retry()
            }

            val notificationHelper = BatteryNotificationHelper(applicationContext)

            // Battery is low and not charging - warn user
            if (!prediction.isCharging && prediction.hoursRemaining <= 2.0 && currentReading.batteryPercentage <= 20) {
                notificationHelper.showLowBatteryNotification(currentReading.batteryPercentage)
                Log.d(TAG, "Low battery alert sent")
            }

            // Battery is full and still charging - recommend unplugging
            if (prediction.isCharging && currentReading.batteryPercentage >= 95) {
                notificationHelper.showFullyChargedNotification()
                Log.d(TAG, "Unplug recommendation sent")
            }

            // High temperature warning
            currentReading.temperatureCelsius?.let { temp ->
                if (temp > 45f) {
                    notificationHelper.showHighTemperatureNotification(temp)
                    Log.d(TAG, "High temperature alert sent")
                }
            }

            Result.success()
        } catch (e: Exception) {
            Log.e(TAG, "Error in predictive charging worker", e)
            Result.retry()
        }
    }
}
