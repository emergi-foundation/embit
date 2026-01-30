package eco.emergi.embit.android.services

import android.content.Context
import androidx.hilt.work.HiltWorker
import androidx.work.CoroutineWorker
import androidx.work.WorkerParameters
import dagger.assisted.Assisted
import dagger.assisted.AssistedInject
import eco.emergi.embit.android.analytics.AnalyticsManager
import eco.emergi.embit.android.analytics.CrashlyticsManager
import eco.emergi.embit.domain.usecases.MonitorBatteryUseCase
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.withTimeoutOrNull

/**
 * WorkManager worker for periodic battery monitoring in the background.
 *
 * This worker runs periodically (recommended: every 15 minutes) to collect
 * battery readings even when the app is not actively used.
 */
@HiltWorker
class BatteryMonitorWorker @AssistedInject constructor(
    @Assisted appContext: Context,
    @Assisted workerParams: WorkerParameters,
    private val monitorBatteryUseCase: MonitorBatteryUseCase,
    private val notificationHelper: BatteryNotificationHelper,
    private val analyticsManager: AnalyticsManager,
    private val crashlyticsManager: CrashlyticsManager
) : CoroutineWorker(appContext, workerParams) {

    override suspend fun doWork(): Result {
        return try {
            // Check if monitoring is supported
            if (!monitorBatteryUseCase.isSupported()) {
                crashlyticsManager.log("Battery monitoring not supported")
                return Result.failure()
            }

            // Ensure permissions (should already be granted)
            if (!monitorBatteryUseCase.ensurePermissions()) {
                crashlyticsManager.log("Battery monitoring permissions not granted")
                analyticsManager.logPermissionDenied("BATTERY_STATS")
                return Result.failure()
            }

            // Collect a single battery reading with timeout
            val reading = withTimeoutOrNull(10_000) {
                monitorBatteryUseCase()
                    .first() // Get just one reading
            }

            if (reading != null) {
                // Update Crashlytics context with current battery state
                crashlyticsManager.setBatteryPercentage(reading.batteryPercentage)
                crashlyticsManager.setIsCharging(reading.isCharging)
                reading.temperatureCelsius?.let { temp ->
                    crashlyticsManager.setBatteryTemperature(temp)
                }

                // Log battery reading analytics
                analyticsManager.logBatteryReading(
                    percentage = reading.batteryPercentage,
                    temperature = reading.temperatureCelsius ?: 0f,
                    isCharging = reading.isCharging
                )

                // Check for notable battery events and show notification if needed
                checkAndNotify(reading)
                Result.success()
            } else {
                crashlyticsManager.log("Failed to collect battery reading (timeout)")
                Result.retry()
            }
        } catch (e: Exception) {
            // Log error to Crashlytics
            crashlyticsManager.logException(e)
            analyticsManager.logError(
                errorType = "battery_monitoring_error",
                errorMessage = e.message,
                errorContext = "BatteryMonitorWorker"
            )
            // Don't fail permanently
            Result.retry()
        }
    }

    private suspend fun checkAndNotify(reading: eco.emergi.embit.domain.models.BatteryReading) {
        // Show notification for low battery
        if (reading.batteryPercentage <= 20 && reading.isDischarging) {
            notificationHelper.showLowBatteryNotification(reading.batteryPercentage)
        }

        // Show notification for full battery while charging
        if (reading.batteryPercentage >= 95 && reading.isCharging) {
            notificationHelper.showFullyChargedNotification()
        }

        // Show notification for high temperature
        reading.temperatureCelsius?.let { temp ->
            if (temp > 45f) {
                notificationHelper.showHighTemperatureNotification(temp)
            }
        }
    }

    companion object {
        const val WORK_NAME = "battery_monitor_periodic"
        const val TAG = "BatteryMonitor"
    }
}
