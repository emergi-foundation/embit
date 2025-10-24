package eco.emergi.embit.android.services

import android.content.Context
import androidx.work.*
import java.util.concurrent.TimeUnit

/**
 * Scheduler for battery monitoring WorkManager tasks.
 */
object BatteryWorkScheduler {

    /**
     * Schedule periodic battery monitoring (runs every 15 minutes)
     */
    fun schedulePeriodicMonitoring(context: Context) {
        val constraints = Constraints.Builder()
            .setRequiresBatteryNotLow(false) // We want to monitor even on low battery
            .build()

        val workRequest = PeriodicWorkRequestBuilder<BatteryMonitorWorker>(
            repeatInterval = 15,
            repeatIntervalTimeUnit = TimeUnit.MINUTES,
            flexTimeInterval = 5, // Allow 5 minutes of flex time
            flexTimeIntervalUnit = TimeUnit.MINUTES
        )
            .setConstraints(constraints)
            .addTag(BatteryMonitorWorker.TAG)
            .setBackoffCriteria(
                BackoffPolicy.EXPONENTIAL,
                WorkRequest.MIN_BACKOFF_MILLIS,
                TimeUnit.MILLISECONDS
            )
            .build()

        WorkManager.getInstance(context).enqueueUniquePeriodicWork(
            BatteryMonitorWorker.WORK_NAME,
            ExistingPeriodicWorkPolicy.KEEP, // Keep existing work if already scheduled
            workRequest
        )
    }

    /**
     * Cancel periodic battery monitoring
     */
    fun cancelPeriodicMonitoring(context: Context) {
        WorkManager.getInstance(context)
            .cancelUniqueWork(BatteryMonitorWorker.WORK_NAME)
    }

    /**
     * Check if periodic monitoring is scheduled
     */
    fun isMonitoringScheduled(context: Context): Boolean {
        val workInfos = WorkManager.getInstance(context)
            .getWorkInfosForUniqueWork(BatteryMonitorWorker.WORK_NAME)
            .get()

        return workInfos.any {
            it.state == WorkInfo.State.ENQUEUED || it.state == WorkInfo.State.RUNNING
        }
    }

    /**
     * Run immediate battery reading (one-time work)
     */
    fun runImmediateReading(context: Context) {
        val workRequest = OneTimeWorkRequestBuilder<BatteryMonitorWorker>()
            .addTag(BatteryMonitorWorker.TAG)
            .build()

        WorkManager.getInstance(context).enqueue(workRequest)
    }
}
