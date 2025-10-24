package eco.emergi.embit.android.services

import android.Manifest
import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.os.Build
import androidx.core.app.ActivityCompat
import androidx.core.app.NotificationCompat
import androidx.core.app.NotificationManagerCompat
import eco.emergi.embit.android.MainActivity
import eco.emergi.embit.android.R
import javax.inject.Inject
import javax.inject.Singleton

/**
 * Helper class for creating and showing battery-related notifications.
 */
@Singleton
class BatteryNotificationHelper @Inject constructor(
    private val context: Context
) {
    private val notificationManager = NotificationManagerCompat.from(context)

    init {
        createNotificationChannels()
    }

    /**
     * Create notification channels for different types of battery notifications
     */
    private fun createNotificationChannels() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val channels = listOf(
                NotificationChannel(
                    CHANNEL_BATTERY_STATUS,
                    "Battery Status",
                    NotificationManager.IMPORTANCE_DEFAULT
                ).apply {
                    description = "Notifications about battery status changes"
                },
                NotificationChannel(
                    CHANNEL_BATTERY_ALERTS,
                    "Battery Alerts",
                    NotificationManager.IMPORTANCE_HIGH
                ).apply {
                    description = "Important battery alerts (low battery, high temperature)"
                },
                NotificationChannel(
                    CHANNEL_MONITORING,
                    "Battery Monitoring",
                    NotificationManager.IMPORTANCE_LOW
                ).apply {
                    description = "Ongoing battery monitoring notification"
                    setShowBadge(false)
                }
            )

            val manager = context.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
            channels.forEach { manager.createNotificationChannel(it) }
        }
    }

    /**
     * Show low battery notification
     */
    fun showLowBatteryNotification(percentage: Int) {
        if (!hasNotificationPermission()) return

        val notification = NotificationCompat.Builder(context, CHANNEL_BATTERY_ALERTS)
            .setSmallIcon(R.drawable.ic_battery_alert)
            .setContentTitle("Low Battery")
            .setContentText("Battery is at $percentage%. Consider charging soon.")
            .setPriority(NotificationCompat.PRIORITY_HIGH)
            .setAutoCancel(true)
            .setContentIntent(createMainActivityPendingIntent())
            .build()

        notificationManager.notify(NOTIFICATION_ID_LOW_BATTERY, notification)
    }

    /**
     * Show fully charged notification
     */
    fun showFullyChargedNotification() {
        if (!hasNotificationPermission()) return

        val notification = NotificationCompat.Builder(context, CHANNEL_BATTERY_STATUS)
            .setSmallIcon(R.drawable.ic_battery_full)
            .setContentTitle("Battery Fully Charged")
            .setContentText("Your battery is fully charged. Unplug to preserve battery health.")
            .setPriority(NotificationCompat.PRIORITY_DEFAULT)
            .setAutoCancel(true)
            .setContentIntent(createMainActivityPendingIntent())
            .build()

        notificationManager.notify(NOTIFICATION_ID_FULLY_CHARGED, notification)
    }

    /**
     * Show high temperature notification
     */
    fun showHighTemperatureNotification(temperature: Float) {
        if (!hasNotificationPermission()) return

        val notification = NotificationCompat.Builder(context, CHANNEL_BATTERY_ALERTS)
            .setSmallIcon(R.drawable.ic_warning)
            .setContentTitle("High Battery Temperature")
            .setContentText("Battery temperature is ${String.format("%.1f", temperature)}°C. Let device cool down.")
            .setPriority(NotificationCompat.PRIORITY_HIGH)
            .setAutoCancel(true)
            .setContentIntent(createMainActivityPendingIntent())
            .build()

        notificationManager.notify(NOTIFICATION_ID_HIGH_TEMP, notification)
    }

    /**
     * Create ongoing notification for foreground service
     */
    fun createMonitoringNotification(
        currentPercentage: Int,
        powerMilliwatts: Double
    ): android.app.Notification {
        return NotificationCompat.Builder(context, CHANNEL_MONITORING)
            .setSmallIcon(R.drawable.ic_monitoring)
            .setContentTitle("Battery Monitoring Active")
            .setContentText("$currentPercentage% • ${String.format("%.1f", powerMilliwatts)}mW")
            .setPriority(NotificationCompat.PRIORITY_LOW)
            .setOngoing(true)
            .setContentIntent(createMainActivityPendingIntent())
            .build()
    }

    private fun createMainActivityPendingIntent(): PendingIntent {
        val intent = Intent(context, MainActivity::class.java).apply {
            flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK
        }
        return PendingIntent.getActivity(
            context,
            0,
            intent,
            PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
        )
    }

    private fun hasNotificationPermission(): Boolean {
        return if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            ActivityCompat.checkSelfPermission(
                context,
                Manifest.permission.POST_NOTIFICATIONS
            ) == PackageManager.PERMISSION_GRANTED
        } else {
            true
        }
    }

    companion object {
        const val CHANNEL_BATTERY_STATUS = "battery_status"
        const val CHANNEL_BATTERY_ALERTS = "battery_alerts"
        const val CHANNEL_MONITORING = "battery_monitoring"

        const val NOTIFICATION_ID_LOW_BATTERY = 1001
        const val NOTIFICATION_ID_FULLY_CHARGED = 1002
        const val NOTIFICATION_ID_HIGH_TEMP = 1003
        const val NOTIFICATION_ID_MONITORING = 1000
    }
}
