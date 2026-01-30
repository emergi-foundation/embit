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

    /**
     * Schedule periodic charging session tracking (runs every 15 minutes)
     */
    fun scheduleChargingSessionTracking(context: Context) {
        val constraints = Constraints.Builder()
            .setRequiresBatteryNotLow(false) // Track even on low battery
            .build()

        val workRequest = PeriodicWorkRequestBuilder<ChargingSessionWorker>(
            repeatInterval = 15,
            repeatIntervalTimeUnit = TimeUnit.MINUTES,
            flexTimeInterval = 5,
            flexTimeIntervalUnit = TimeUnit.MINUTES
        )
            .setConstraints(constraints)
            .addTag(ChargingSessionWorker.TAG)
            .setBackoffCriteria(
                BackoffPolicy.EXPONENTIAL,
                WorkRequest.MIN_BACKOFF_MILLIS,
                TimeUnit.MILLISECONDS
            )
            .build()

        WorkManager.getInstance(context).enqueueUniquePeriodicWork(
            ChargingSessionWorker.WORK_NAME,
            ExistingPeriodicWorkPolicy.KEEP,
            workRequest
        )
    }

    /**
     * Cancel periodic charging session tracking
     */
    fun cancelChargingSessionTracking(context: Context) {
        WorkManager.getInstance(context)
            .cancelUniqueWork(ChargingSessionWorker.WORK_NAME)
    }

    /**
     * Check if charging session tracking is scheduled
     */
    fun isChargingSessionTrackingScheduled(context: Context): Boolean {
        val workInfos = WorkManager.getInstance(context)
            .getWorkInfosForUniqueWork(ChargingSessionWorker.WORK_NAME)
            .get()

        return workInfos.any {
            it.state == WorkInfo.State.ENQUEUED || it.state == WorkInfo.State.RUNNING
        }
    }

    /**
     * Schedule daily health metrics aggregation (runs once per day)
     */
    fun scheduleHealthMetricsAggregation(context: Context) {
        val constraints = Constraints.Builder()
            .setRequiredNetworkType(NetworkType.CONNECTED) // Need network to upload to Firestore
            .setRequiresBatteryNotLow(false) // Run even on low battery
            .build()

        val workRequest = PeriodicWorkRequestBuilder<HealthMetricsAggregationWorker>(
            repeatInterval = 1,
            repeatIntervalTimeUnit = TimeUnit.DAYS,
            flexTimeInterval = 2, // Allow 2 hours of flex time
            flexTimeIntervalUnit = TimeUnit.HOURS
        )
            .setConstraints(constraints)
            .addTag(HealthMetricsAggregationWorker.TAG)
            .setBackoffCriteria(
                BackoffPolicy.EXPONENTIAL,
                WorkRequest.MIN_BACKOFF_MILLIS,
                TimeUnit.MILLISECONDS
            )
            .build()

        WorkManager.getInstance(context).enqueueUniquePeriodicWork(
            HealthMetricsAggregationWorker.WORK_NAME,
            ExistingPeriodicWorkPolicy.KEEP,
            workRequest
        )
    }

    /**
     * Cancel daily health metrics aggregation
     */
    fun cancelHealthMetricsAggregation(context: Context) {
        WorkManager.getInstance(context)
            .cancelUniqueWork(HealthMetricsAggregationWorker.WORK_NAME)
    }

    /**
     * Check if health metrics aggregation is scheduled
     */
    fun isHealthMetricsAggregationScheduled(context: Context): Boolean {
        val workInfos = WorkManager.getInstance(context)
            .getWorkInfosForUniqueWork(HealthMetricsAggregationWorker.WORK_NAME)
            .get()

        return workInfos.any {
            it.state == WorkInfo.State.ENQUEUED || it.state == WorkInfo.State.RUNNING
        }
    }
}
