package eco.emergi.embit.android.services

import android.content.Context
import androidx.hilt.work.HiltWorker
import androidx.work.CoroutineWorker
import androidx.work.WorkerParameters
import dagger.assisted.Assisted
import dagger.assisted.AssistedInject
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
    private val notificationHelper: BatteryNotificationHelper
) : CoroutineWorker(appContext, workerParams) {

    override suspend fun doWork(): Result {
        return try {
            // Check if monitoring is supported
            if (!monitorBatteryUseCase.isSupported()) {
                return Result.failure()
            }

            // Ensure permissions (should already be granted)
            if (!monitorBatteryUseCase.ensurePermissions()) {
                return Result.failure()
            }

            // Collect a single battery reading with timeout
            val reading = withTimeoutOrNull(10_000) {
                monitorBatteryUseCase()
                    .first() // Get just one reading
            }

            if (reading != null) {
                // Check for notable battery events and show notification if needed
                checkAndNotify(reading)
                Result.success()
            } else {
                Result.retry()
            }
        } catch (e: Exception) {
            // Log error but don't fail permanently
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
