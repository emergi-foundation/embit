package eco.emergi.embit.android.services

import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.os.BatteryManager
import androidx.hilt.work.HiltWorker
import androidx.work.CoroutineWorker
import androidx.work.WorkerParameters
import dagger.assisted.Assisted
import dagger.assisted.AssistedInject
import eco.emergi.embit.domain.models.GridStressLevel
import eco.emergi.embit.domain.usecases.grid.GetChargingRecommendationUseCase
import eco.emergi.embit.domain.usecases.grid.ObserveGridStatusUseCase
import kotlinx.coroutines.flow.first

/**
 * Worker to monitor grid status and send charging notifications
 */
@HiltWorker
class GridMonitorWorker @AssistedInject constructor(
    @Assisted private val appContext: Context,
    @Assisted workerParams: WorkerParameters,
    private val observeGridStatusUseCase: ObserveGridStatusUseCase,
    private val getChargingRecommendationUseCase: GetChargingRecommendationUseCase
) : CoroutineWorker(appContext, workerParams) {

    companion object {
        const val WORK_NAME = "grid_monitor_work"

        // Preference keys
        private const val PREFS_NAME = "grid_monitor_prefs"
        private const val KEY_LAST_NOTIFICATION_TYPE = "last_notification_type"
        private const val KEY_LAST_STRESS_LEVEL = "last_stress_level"

        // Notification types
        private const val NOTIFICATION_TYPE_NONE = 0
        private const val NOTIFICATION_TYPE_GOOD = 1
        private const val NOTIFICATION_TYPE_BAD = 2
        private const val NOTIFICATION_TYPE_CRITICAL = 3
    }

    private val notificationManager = ChargingNotificationManager(appContext)
    private val prefs = appContext.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)

    override suspend fun doWork(): Result {
        return try {
            // Get current battery state
            val isCharging = isDeviceCharging()
            val batteryLevel = getCurrentBatteryLevel()

            // Get current grid status
            val gridStatus = observeGridStatusUseCase().first()

            // Get charging recommendation
            val recommendationResult = getChargingRecommendationUseCase(
                currentBatteryLevel = batteryLevel,
                targetBatteryLevel = 80
            )

            if (recommendationResult.isFailure) {
                return Result.retry()
            }

            val recommendation = recommendationResult.getOrNull() ?: return Result.success()

            // Determine notification state
            val currentNotificationType = when {
                gridStatus.stressLevel == GridStressLevel.CRITICAL ||
                gridStatus.stressLevel == GridStressLevel.HIGH -> {
                    // Critical grid alert
                    if (isCharging) {
                        notificationManager.notifyGridCritical(gridStatus)
                        NOTIFICATION_TYPE_CRITICAL
                    } else {
                        NOTIFICATION_TYPE_NONE
                    }
                }
                !isCharging && recommendation.shouldCharge -> {
                    // Good time to charge, not currently charging
                    if (batteryLevel < 80) {
                        notificationManager.notifyGoodTimeToCharge(recommendation, gridStatus)
                        NOTIFICATION_TYPE_GOOD
                    } else {
                        NOTIFICATION_TYPE_NONE
                    }
                }
                isCharging && !recommendation.shouldCharge -> {
                    // Bad time to charge, currently charging
                    notificationManager.notifyBadTimeToCharge(recommendation, gridStatus)
                    NOTIFICATION_TYPE_BAD
                }
                else -> {
                    // No notification needed
                    NOTIFICATION_TYPE_NONE
                }
            }

            // Save state to avoid duplicate notifications
            val lastNotificationType = prefs.getInt(KEY_LAST_NOTIFICATION_TYPE, NOTIFICATION_TYPE_NONE)
            val lastStressLevel = prefs.getString(KEY_LAST_STRESS_LEVEL, GridStressLevel.NORMAL.name)

            // Only send notification if state changed
            if (currentNotificationType != lastNotificationType ||
                gridStatus.stressLevel.name != lastStressLevel) {

                prefs.edit().apply {
                    putInt(KEY_LAST_NOTIFICATION_TYPE, currentNotificationType)
                    putString(KEY_LAST_STRESS_LEVEL, gridStatus.stressLevel.name)
                    apply()
                }
            } else if (currentNotificationType == NOTIFICATION_TYPE_NONE) {
                // Clear notifications if conditions are normal
                notificationManager.cancelAllNotifications()
            }

            Result.success()
        } catch (e: Exception) {
            Result.retry()
        }
    }

    /**
     * Check if device is currently charging
     */
    private fun isDeviceCharging(): Boolean {
        val intentFilter = IntentFilter(Intent.ACTION_BATTERY_CHANGED)
        val batteryStatus = appContext.registerReceiver(null, intentFilter)

        val status = batteryStatus?.getIntExtra(BatteryManager.EXTRA_STATUS, -1) ?: -1
        return status == BatteryManager.BATTERY_STATUS_CHARGING ||
               status == BatteryManager.BATTERY_STATUS_FULL
    }

    /**
     * Get current battery level (0-100)
     */
    private fun getCurrentBatteryLevel(): Int {
        val intentFilter = IntentFilter(Intent.ACTION_BATTERY_CHANGED)
        val batteryStatus = appContext.registerReceiver(null, intentFilter)

        val level = batteryStatus?.getIntExtra(BatteryManager.EXTRA_LEVEL, -1) ?: -1
        val scale = batteryStatus?.getIntExtra(BatteryManager.EXTRA_SCALE, -1) ?: -1

        return if (level >= 0 && scale > 0) {
            (level.toFloat() / scale.toFloat() * 100).toInt()
        } else {
            50 // Default to 50% if unable to determine
        }
    }
}
