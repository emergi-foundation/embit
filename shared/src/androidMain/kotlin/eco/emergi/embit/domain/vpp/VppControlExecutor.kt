package eco.emergi.embit.domain.vpp

import android.content.ContentResolver
import android.content.Context
import android.os.BatteryManager
import android.os.PowerManager
import androidx.work.WorkManager
import eco.emergi.embit.domain.models.*
import eco.emergi.embit.domain.repositories.IAuthRepository
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.flow
import kotlin.math.abs

/**
 * Android implementation of VPP control executor
 * Controls device power consumption during demand response events
 */
class AndroidVppControlExecutor(
    private val context: Context,
    private val authRepository: IAuthRepository
) : VppControlExecutor {

    private val powerManager = context.getSystemService(Context.POWER_SERVICE) as PowerManager
    private val batteryManager = context.getSystemService(Context.BATTERY_SERVICE) as BatteryManager

    private var baselinePower: Double = 0.0
    private val appliedActions = mutableListOf<PowerControlAction>()

    override suspend fun executeDemandResponse(
        event: DemandResponseEvent,
        settings: ParticipationSettings
    ): EventPerformance {
        // Check if user wants to participate
        if (!settings.enabled || event.priority.ordinal < settings.minimumPriority.ordinal) {
            return createEmptyPerformance(event)
        }

        // Measure baseline power
        baselinePower = getCurrentPowerMeasurement().powerWatts

        // Select and apply control actions
        val actionsToApply = selectControlActions(event, settings)
        appliedActions.clear()

        for (action in actionsToApply) {
            val success = applyControlAction(action)
            if (success) {
                appliedActions.add(action)
            }
        }

        // Wait for actions to take effect
        delay(5000)

        // Measure actual power after reduction
        val actualPower = getCurrentPowerMeasurement().powerWatts
        val reduction = baselinePower - actualPower

        val currentUser = authRepository.getCurrentUser()

        return EventPerformance(
            eventId = event.eventId,
            userId = currentUser?.uid ?: "anonymous",
            deviceId = getDeviceId(),
            startTime = System.currentTimeMillis(),
            endTime = event.endTime,
            baselinePowerWatts = baselinePower,
            actualPowerWatts = actualPower,
            reductionWatts = reduction,
            reductionPercentage = if (baselinePower > 0) (reduction / baselinePower) * 100 else 0.0,
            actionsApplied = appliedActions.map { it.name },
            completed = true
        )
    }

    override suspend fun restoreNormalOperation() {
        // Restore settings that were changed
        if (appliedActions.any { it is PowerControlAction.DisableBackgroundSync }) {
            try {
                ContentResolver.setMasterSyncAutomatically(true)
            } catch (e: Exception) {
                // Ignore - may not have permission
            }
        }

        appliedActions.clear()
    }

    override suspend fun getCurrentPowerMeasurement(): PowerMeasurement {
        val voltage = try {
            // Using integer constant directly for compatibility (BATTERY_PROPERTY_VOLTAGE_NOW = 11)
            batteryManager.getIntProperty(11)
        } catch (e: Exception) {
            4000000 // Default 4V in microvolts
        }

        val current = try {
            // Using integer constant directly for compatibility (BATTERY_PROPERTY_CURRENT_NOW = 2)
            batteryManager.getIntProperty(2)
        } catch (e: Exception) {
            -1000000 // Default -1A in microamps (discharging)
        }

        // Calculate power: P = V × I (convert from micro units to watts)
        val power = (voltage / 1000.0) * (abs(current) / 1000000.0)

        val batteryPct = try {
            // Using integer constant directly for compatibility (BATTERY_PROPERTY_CAPACITY = 4)
            batteryManager.getIntProperty(4)
        } catch (e: Exception) {
            50 // Default
        }

        val isCharging = batteryManager.isCharging

        // Note: Temperature is not available via BatteryManager.getIntProperty()
        // It requires registering a BroadcastReceiver for ACTION_BATTERY_CHANGED
        val temperature: Int? = null

        return PowerMeasurement(
            timestamp = System.currentTimeMillis(),
            voltageMillivolts = voltage / 1000,
            currentMicroamps = current,
            powerWatts = power,
            batteryPercentage = batteryPct,
            isCharging = isCharging,
            temperature = temperature
        )
    }

    override fun observePowerConsumption(): Flow<PowerMeasurement> = flow {
        while (true) {
            emit(getCurrentPowerMeasurement())
            delay(5000) // 5 second sampling
        }
    }

    private fun selectControlActions(
        event: DemandResponseEvent,
        settings: ParticipationSettings
    ): List<PowerControlAction> {
        val actions = mutableListOf<PowerControlAction>()

        // Always start with least invasive actions
        if (settings.allowBackgroundSync) {
            actions.add(PowerControlAction.DisableBackgroundSync)
            actions.add(PowerControlAction.DeferBackgroundTasks)
        }

        if (settings.allowNetworkControl) {
            actions.add(PowerControlAction.ForceWifiOnly)
        }

        // More aggressive for higher priority events
        if (event.priority >= EventPriority.MEDIUM) {
            if (settings.allowBatterySaver) {
                actions.add(PowerControlAction.EnableBatterySaver)
            }
            actions.add(PowerControlAction.LimitCpuUsage)
        }

        return actions
    }

    private fun applyControlAction(action: PowerControlAction): Boolean {
        return when (action) {
            is PowerControlAction.EnableBatterySaver -> {
                // Note: Cannot programmatically enable battery saver without user interaction
                // Can only check if already enabled
                powerManager.isPowerSaveMode
            }
            is PowerControlAction.DisableBackgroundSync -> {
                try {
                    ContentResolver.setMasterSyncAutomatically(false)
                    true
                } catch (e: Exception) {
                    false
                }
            }
            is PowerControlAction.DeferBackgroundTasks -> {
                try {
                    // Cancel all deferrable WorkManager tasks
                    WorkManager.getInstance(context).cancelAllWorkByTag("deferrable")
                    true
                } catch (e: Exception) {
                    false
                }
            }
            is PowerControlAction.ForceWifiOnly -> {
                // This is enforced at app level, not system wide
                // Can set preference for background tasks to use WiFi only
                true
            }
            is PowerControlAction.LimitCpuUsage -> {
                try {
                    // Set app thread priority to background
                    android.os.Process.setThreadPriority(
                        android.os.Process.THREAD_PRIORITY_BACKGROUND
                    )
                    true
                } catch (e: Exception) {
                    false
                }
            }
        }
    }

    private suspend fun createEmptyPerformance(event: DemandResponseEvent): EventPerformance {
        val currentUser = authRepository.getCurrentUser()
        return EventPerformance(
            eventId = event.eventId,
            userId = currentUser?.uid ?: "anonymous",
            deviceId = getDeviceId(),
            startTime = System.currentTimeMillis(),
            endTime = System.currentTimeMillis(),
            baselinePowerWatts = 0.0,
            actualPowerWatts = 0.0,
            reductionWatts = 0.0,
            reductionPercentage = 0.0,
            actionsApplied = emptyList(),
            completed = false
        )
    }

    private fun getDeviceId(): String {
        return android.provider.Settings.Secure.getString(
            context.contentResolver,
            android.provider.Settings.Secure.ANDROID_ID
        )
    }
}
