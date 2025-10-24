package eco.emergi.embit.android.services

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.os.BatteryManager
import android.util.Log

/**
 * BroadcastReceiver for real-time battery events.
 * This complements the WorkManager periodic monitoring with immediate event detection.
 */
class BatteryMonitorReceiver : BroadcastReceiver() {

    override fun onReceive(context: Context, intent: Intent) {
        when (intent.action) {
            Intent.ACTION_POWER_CONNECTED -> {
                Log.d("BatteryMonitorReceiver", "Power connected")
                // Trigger immediate reading when power is connected
                BatteryWorkScheduler.runImmediateReading(context)
            }
            Intent.ACTION_POWER_DISCONNECTED -> {
                Log.d("BatteryMonitorReceiver", "Power disconnected")
                // Trigger immediate reading when power is disconnected
                BatteryWorkScheduler.runImmediateReading(context)
            }
            Intent.ACTION_BATTERY_LOW -> {
                Log.d("BatteryMonitorReceiver", "Battery low")
                // Battery is low, trigger reading and potential notification
                BatteryWorkScheduler.runImmediateReading(context)
            }
            Intent.ACTION_BATTERY_OKAY -> {
                Log.d("BatteryMonitorReceiver", "Battery okay")
                BatteryWorkScheduler.runImmediateReading(context)
            }
        }
    }
}
