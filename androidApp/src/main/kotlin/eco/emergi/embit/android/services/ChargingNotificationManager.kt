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
import eco.emergi.embit.domain.models.ChargingRecommendation
import eco.emergi.embit.domain.models.GridStatus
import eco.emergi.embit.domain.models.GridStressLevel

/**
 * Manager for grid-aware charging notifications
 */
class ChargingNotificationManager(private val context: Context) {

    companion object {
        private const val CHANNEL_ID = "charging_recommendations"
        private const val CHANNEL_NAME = "Smart Charging"
        private const val CHANNEL_DESCRIPTION = "Notifications for optimal charging times based on grid conditions"

        private const val NOTIFICATION_ID_GOOD_TIME = 1001
        private const val NOTIFICATION_ID_BAD_TIME = 1002
        private const val NOTIFICATION_ID_GRID_ALERT = 1003
    }

    init {
        createNotificationChannel()
    }

    /**
     * Create notification channel for charging recommendations
     */
    private fun createNotificationChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val importance = NotificationManager.IMPORTANCE_DEFAULT
            val channel = NotificationChannel(CHANNEL_ID, CHANNEL_NAME, importance).apply {
                description = CHANNEL_DESCRIPTION
            }

            val notificationManager = context.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
            notificationManager.createNotificationChannel(channel)
        }
    }

    /**
     * Show notification for good charging conditions
     */
    fun notifyGoodTimeToCharge(
        recommendation: ChargingRecommendation,
        gridStatus: GridStatus
    ) {
        if (!hasNotificationPermission()) {
            return
        }

        val intent = Intent(context, MainActivity::class.java).apply {
            flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK
        }
        val pendingIntent = PendingIntent.getActivity(
            context,
            0,
            intent,
            PendingIntent.FLAG_IMMUTABLE
        )

        val savingsText = buildString {
            recommendation.savingsEstimate?.let {
                append("Save ~${String.format("%.1f", it)}¢")
            }
            if (recommendation.savingsEstimate != null && recommendation.carbonSavingsEstimate != null) {
                append(" • ")
            }
            recommendation.carbonSavingsEstimate?.let {
                append("${String.format("%.0f", it)}g CO₂")
            }
        }

        val notification = NotificationCompat.Builder(context, CHANNEL_ID)
            .setSmallIcon(android.R.drawable.ic_dialog_info)
            .setContentTitle("🔋 Great Time to Charge!")
            .setContentText(recommendation.reason)
            .setStyle(
                NotificationCompat.BigTextStyle()
                    .bigText("${recommendation.reason}\n\n" +
                            "🌱 Renewable Energy: ${String.format("%.0f", gridStatus.carbonIntensity.renewablePercentage)}%\n" +
                            if (savingsText.isNotEmpty()) "💰 $savingsText" else ""
                    )
            )
            .setPriority(NotificationCompat.PRIORITY_DEFAULT)
            .setContentIntent(pendingIntent)
            .setAutoCancel(true)
            .build()

        NotificationManagerCompat.from(context).notify(NOTIFICATION_ID_GOOD_TIME, notification)
    }

    /**
     * Show notification to avoid charging
     */
    fun notifyBadTimeToCharge(
        recommendation: ChargingRecommendation,
        gridStatus: GridStatus
    ) {
        if (!hasNotificationPermission()) {
            return
        }

        val intent = Intent(context, MainActivity::class.java).apply {
            flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK
        }
        val pendingIntent = PendingIntent.getActivity(
            context,
            0,
            intent,
            PendingIntent.FLAG_IMMUTABLE
        )

        val notification = NotificationCompat.Builder(context, CHANNEL_ID)
            .setSmallIcon(android.R.drawable.ic_dialog_alert)
            .setContentTitle("⚠️ Wait to Charge")
            .setContentText(recommendation.reason)
            .setStyle(
                NotificationCompat.BigTextStyle()
                    .bigText("${recommendation.reason}\n\n" +
                            "Grid Stress: ${gridStatus.stressLevel.name}\n" +
                            "💡 Consider charging later to save money and reduce emissions."
                    )
            )
            .setPriority(NotificationCompat.PRIORITY_DEFAULT)
            .setContentIntent(pendingIntent)
            .setAutoCancel(true)
            .build()

        NotificationManagerCompat.from(context).notify(NOTIFICATION_ID_BAD_TIME, notification)
    }

    /**
     * Show notification for critical grid conditions
     */
    fun notifyGridCritical(gridStatus: GridStatus) {
        if (!hasNotificationPermission()) {
            return
        }

        if (gridStatus.stressLevel != GridStressLevel.CRITICAL &&
            gridStatus.stressLevel != GridStressLevel.HIGH) {
            return
        }

        val intent = Intent(context, MainActivity::class.java).apply {
            flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK
        }
        val pendingIntent = PendingIntent.getActivity(
            context,
            0,
            intent,
            PendingIntent.FLAG_IMMUTABLE
        )

        val notification = NotificationCompat.Builder(context, CHANNEL_ID)
            .setSmallIcon(android.R.drawable.stat_notify_error)
            .setContentTitle("🚨 Critical Grid Alert")
            .setContentText("Grid stress is ${gridStatus.stressLevel.name}. Please avoid charging now.")
            .setStyle(
                NotificationCompat.BigTextStyle()
                    .bigText("The electricity grid is under ${gridStatus.stressLevel.name.lowercase()} stress.\n\n" +
                            "⚡ Avoid charging to prevent outages and reduce strain on the grid.\n" +
                            "💰 Charging now may be significantly more expensive."
                    )
            )
            .setPriority(NotificationCompat.PRIORITY_HIGH)
            .setContentIntent(pendingIntent)
            .setAutoCancel(true)
            .build()

        NotificationManagerCompat.from(context).notify(NOTIFICATION_ID_GRID_ALERT, notification)
    }

    /**
     * Cancel all charging notifications
     */
    fun cancelAllNotifications() {
        NotificationManagerCompat.from(context).apply {
            cancel(NOTIFICATION_ID_GOOD_TIME)
            cancel(NOTIFICATION_ID_BAD_TIME)
            cancel(NOTIFICATION_ID_GRID_ALERT)
        }
    }

    /**
     * Check if notification permission is granted
     */
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
}
