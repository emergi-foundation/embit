package eco.emergi.embit.android.services

import android.content.Context
import androidx.work.*
import java.util.concurrent.TimeUnit

/**
 * Scheduler for grid monitoring background work
 */
object GridMonitorScheduler {

    /**
     * Schedule periodic grid monitoring
     * Runs every 30 minutes to check grid conditions
     */
    fun schedulePeriodicMonitoring(context: Context) {
        val constraints = Constraints.Builder()
            .setRequiredNetworkType(NetworkType.CONNECTED)
            .build()

        val workRequest = PeriodicWorkRequestBuilder<GridMonitorWorker>(
            30, TimeUnit.MINUTES,
            15, TimeUnit.MINUTES // Flex interval
        )
            .setConstraints(constraints)
            .setBackoffCriteria(
                BackoffPolicy.EXPONENTIAL,
                WorkRequest.MIN_BACKOFF_MILLIS,
                TimeUnit.MILLISECONDS
            )
            .build()

        WorkManager.getInstance(context)
            .enqueueUniquePeriodicWork(
                GridMonitorWorker.WORK_NAME,
                ExistingPeriodicWorkPolicy.KEEP,
                workRequest
            )
    }

    /**
     * Schedule one-time grid monitoring (immediate)
     */
    fun scheduleImmediateMonitoring(context: Context) {
        val constraints = Constraints.Builder()
            .setRequiredNetworkType(NetworkType.CONNECTED)
            .build()

        val workRequest = OneTimeWorkRequestBuilder<GridMonitorWorker>()
            .setConstraints(constraints)
            .build()

        WorkManager.getInstance(context)
            .enqueue(workRequest)
    }

    /**
     * Cancel periodic grid monitoring
     */
    fun cancelPeriodicMonitoring(context: Context) {
        WorkManager.getInstance(context)
            .cancelUniqueWork(GridMonitorWorker.WORK_NAME)
    }
}
