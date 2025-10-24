package eco.emergi.embit.domain.repositories

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.os.BatteryManager
import android.os.Build
import eco.emergi.embit.domain.models.BatteryReading
import eco.emergi.embit.domain.models.BatteryState
import eco.emergi.embit.domain.models.ChargingType
import kotlinx.coroutines.channels.awaitClose
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.callbackFlow
import kotlinx.datetime.Clock

/**
 * Android implementation of battery monitoring service using BatteryManager and BroadcastReceiver.
 */
class AndroidBatteryMonitorService(
    private val context: Context
) : IBatteryMonitorService {

    private var isMonitoring = false

    override fun startMonitoring(): Flow<BatteryReading> = callbackFlow {
        if (!isMonitoringSupported()) {
            close(IllegalStateException("Battery monitoring not supported on this device"))
            return@callbackFlow
        }

        isMonitoring = true

        val receiver = object : BroadcastReceiver() {
            override fun onReceive(context: Context, intent: Intent) {
                val reading = createBatteryReading(intent)
                reading?.let { trySend(it) }
            }
        }

        // Register for battery-related broadcasts
        val filter = IntentFilter().apply {
            addAction(Intent.ACTION_BATTERY_CHANGED)
            addAction(Intent.ACTION_POWER_CONNECTED)
            addAction(Intent.ACTION_POWER_DISCONNECTED)
            addAction(Intent.ACTION_BATTERY_LOW)
            addAction(Intent.ACTION_BATTERY_OKAY)
        }

        context.registerReceiver(receiver, filter)

        // Send initial reading
        getCurrentReading().getOrNull()?.let { send(it) }

        awaitClose {
            isMonitoring = false
            try {
                context.unregisterReceiver(receiver)
            } catch (e: IllegalArgumentException) {
                // Receiver already unregistered
            }
        }
    }

    override fun stopMonitoring() {
        isMonitoring = false
    }

    override suspend fun getCurrentReading(): Result<BatteryReading?> {
        return try {
            val intent = context.registerReceiver(
                null,
                IntentFilter(Intent.ACTION_BATTERY_CHANGED)
            )

            val reading = intent?.let { createBatteryReading(it) }
            Result.success(reading)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    override fun isMonitoringSupported(): Boolean {
        return true // Battery monitoring is always supported on Android
    }

    override suspend fun hasRequiredPermissions(): Boolean {
        return true // No special permissions needed for battery monitoring on Android
    }

    override suspend fun requestPermissions(): Boolean {
        return true // No permissions to request
    }

    private fun createBatteryReading(intent: Intent): BatteryReading? {
        try {
            val level = intent.getIntExtra(BatteryManager.EXTRA_LEVEL, -1)
            val scale = intent.getIntExtra(BatteryManager.EXTRA_SCALE, -1)
            val percentage = if (level >= 0 && scale > 0) {
                (level * 100 / scale)
            } else {
                0
            }

            val voltage = intent.getIntExtra(BatteryManager.EXTRA_VOLTAGE, 0)

            // Get current from BatteryManager (API 21+)
            val amperage = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
                val batteryManager = context.getSystemService(Context.BATTERY_SERVICE) as? BatteryManager
                batteryManager?.getLongProperty(BatteryManager.BATTERY_PROPERTY_CURRENT_NOW) ?: 0L
            } else {
                0L
            }

            // Get temperature (in tenths of degrees Celsius)
            val temperature = intent.getIntExtra(BatteryManager.EXTRA_TEMPERATURE, 0) / 10.0f

            // Determine battery state
            val status = intent.getIntExtra(BatteryManager.EXTRA_STATUS, -1)
            val plugged = intent.getIntExtra(BatteryManager.EXTRA_PLUGGED, -1)

            val batteryState = when (status) {
                BatteryManager.BATTERY_STATUS_CHARGING -> {
                    val chargingType = when (plugged) {
                        BatteryManager.BATTERY_PLUGGED_AC -> ChargingType.AC
                        BatteryManager.BATTERY_PLUGGED_USB -> ChargingType.USB
                        BatteryManager.BATTERY_PLUGGED_WIRELESS -> ChargingType.WIRELESS
                        else -> ChargingType.UNKNOWN
                    }
                    BatteryState.Charging(chargingType)
                }
                BatteryManager.BATTERY_STATUS_DISCHARGING -> BatteryState.Discharging
                BatteryManager.BATTERY_STATUS_FULL -> BatteryState.Full
                BatteryManager.BATTERY_STATUS_NOT_CHARGING -> BatteryState.NotCharging
                else -> BatteryState.Unknown
            }

            return BatteryReading(
                timestamp = Clock.System.now(),
                voltageMillivolts = voltage,
                amperageMicroamps = amperage,
                temperatureCelsius = temperature,
                batteryPercentage = percentage,
                batteryState = batteryState
            )
        } catch (e: Exception) {
            return null
        }
    }
}
