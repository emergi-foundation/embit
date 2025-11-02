package eco.emergi.embit.android.services

import android.content.Context
import androidx.work.*
import eco.emergi.embit.domain.models.SyncInterval
import java.util.concurrent.TimeUnit

/**
 * Scheduler for data synchronization WorkManager tasks.
 */
object DataSyncScheduler {

    /**
     * Schedule periodic data synchronization based on sync interval
     *
     * @param context Application context
     * @param interval Sync interval (defaults to HOURLY)
     */
    fun schedulePeriodicSync(context: Context, interval: SyncInterval = SyncInterval.HOURLY) {
        // Cancel existing work first
        cancelPeriodicSync(context)

        // Don't schedule if manual sync only
        if (interval == SyncInterval.MANUAL) {
            return
        }

        val (repeatInterval, timeUnit) = when (interval) {
            SyncInterval.HOURLY -> Pair(1L, TimeUnit.HOURS)
            SyncInterval.DAILY -> Pair(24L, TimeUnit.HOURS)
            SyncInterval.REAL_TIME -> Pair(15L, TimeUnit.MINUTES) // Sync every 15 minutes for "real-time"
            SyncInterval.MANUAL -> return // Already handled above
        }

        val constraints = Constraints.Builder()
            .setRequiredNetworkType(NetworkType.CONNECTED) // Require network connection
            .setRequiresBatteryNotLow(true) // Don't sync on low battery
            .build()

        val workRequest = PeriodicWorkRequestBuilder<DataSyncWorker>(
            repeatInterval = repeatInterval,
            repeatIntervalTimeUnit = timeUnit,
            flexTimeInterval = if (interval == SyncInterval.DAILY) 2 else 15, // Allow some flex time
            flexTimeIntervalUnit = if (interval == SyncInterval.DAILY) TimeUnit.HOURS else TimeUnit.MINUTES
        )
            .setConstraints(constraints)
            .addTag(DataSyncWorker.TAG)
            .setBackoffCriteria(
                BackoffPolicy.EXPONENTIAL,
                WorkRequest.MIN_BACKOFF_MILLIS,
                TimeUnit.MILLISECONDS
            )
            .build()

        WorkManager.getInstance(context).enqueueUniquePeriodicWork(
            DataSyncWorker.WORK_NAME,
            ExistingPeriodicWorkPolicy.REPLACE, // Replace existing work with new settings
            workRequest
        )
    }

    /**
     * Cancel periodic data synchronization
     */
    fun cancelPeriodicSync(context: Context) {
        WorkManager.getInstance(context)
            .cancelUniqueWork(DataSyncWorker.WORK_NAME)
    }

    /**
     * Check if periodic sync is scheduled
     */
    fun isSyncScheduled(context: Context): Boolean {
        val workInfos = WorkManager.getInstance(context)
            .getWorkInfosForUniqueWork(DataSyncWorker.WORK_NAME)
            .get()

        return workInfos.any {
            it.state == WorkInfo.State.ENQUEUED || it.state == WorkInfo.State.RUNNING
        }
    }

    /**
     * Run immediate sync (one-time work)
     * Useful for manual sync button
     */
    fun runImmediateSync(context: Context) {
        val constraints = Constraints.Builder()
            .setRequiredNetworkType(NetworkType.CONNECTED)
            .build()

        val workRequest = OneTimeWorkRequestBuilder<DataSyncWorker>()
            .setConstraints(constraints)
            .addTag(DataSyncWorker.TAG)
            .build()

        WorkManager.getInstance(context).enqueue(workRequest)
    }

    /**
     * Get sync interval from minutes value
     */
    fun getSyncInterval(minutes: Int): SyncInterval {
        return when {
            minutes == 0 -> SyncInterval.MANUAL
            minutes < 60 -> SyncInterval.REAL_TIME
            minutes < 1440 -> SyncInterval.HOURLY
            else -> SyncInterval.DAILY
        }
    }
}
