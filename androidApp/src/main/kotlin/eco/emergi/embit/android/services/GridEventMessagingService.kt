package eco.emergi.embit.android.services

import android.util.Log
import com.google.firebase.messaging.FirebaseMessagingService
import com.google.firebase.messaging.RemoteMessage
import eco.emergi.embit.android.analytics.VppAnalytics
import eco.emergi.embit.domain.models.*
import eco.emergi.embit.domain.repositories.IUserPreferencesRepository
import eco.emergi.embit.domain.repositories.IVppRepository
import eco.emergi.embit.domain.vpp.VppControlExecutor
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.launch
import org.koin.core.component.KoinComponent
import org.koin.core.component.inject

/**
 * Firebase Cloud Messaging Service for receiving server-driven grid events
 *
 * Utilities/grid operators can push demand response events to participating devices
 * Format:
 * {
 *   "type": "grid_event",
 *   "event_id": "DR-2026-01-31-001",
 *   "priority": "HIGH",
 *   "start_time": 1738350000000,
 *   "end_time": 1738356000000,
 *   "target_reduction_watts": 50.0,
 *   "message": "Grid stress detected - reduce power usage",
 *   "location": "CAISO_NORTH"
 * }
 */
class GridEventMessagingService : FirebaseMessagingService(), KoinComponent {

    private val vppAnalytics: VppAnalytics by inject()
    private val vppControlExecutor: VppControlExecutor by inject()
    private val userPreferencesRepository: IUserPreferencesRepository by inject()
    private val vppRepository: IVppRepository by inject()

    private val serviceScope = CoroutineScope(SupervisorJob() + Dispatchers.IO)

    companion object {
        private const val TAG = "GridEventMessaging"
        private const val TYPE_GRID_EVENT = "grid_event"
        private const val TYPE_GRID_STATUS_UPDATE = "grid_status_update"
        private const val TYPE_VPP_COMMAND = "vpp_command"
    }

    /**
     * Called when a new FCM message is received
     */
    override fun onMessageReceived(remoteMessage: RemoteMessage) {
        Log.d(TAG, "Message received from: ${remoteMessage.from}")

        // Check if message contains data payload
        if (remoteMessage.data.isNotEmpty()) {
            Log.d(TAG, "Message data: ${remoteMessage.data}")

            val messageType = remoteMessage.data["type"]
            when (messageType) {
                TYPE_GRID_EVENT -> handleGridEvent(remoteMessage.data)
                TYPE_GRID_STATUS_UPDATE -> handleGridStatusUpdate(remoteMessage.data)
                TYPE_VPP_COMMAND -> handleVppCommand(remoteMessage.data)
                else -> {
                    Log.w(TAG, "Unknown message type: $messageType")
                    vppAnalytics.logVppError("unknown_message_type", "Type: $messageType")
                }
            }
        }

        // Check if message contains notification payload
        remoteMessage.notification?.let { notification ->
            Log.d(TAG, "Notification: ${notification.title} - ${notification.body}")
            // Show notification to user
            showGridEventNotification(
                title = notification.title ?: "Grid Event",
                message = notification.body ?: ""
            )
        }
    }

    /**
     * Handle demand response grid event from utility
     */
    private fun handleGridEvent(data: Map<String, String>) {
        serviceScope.launch {
            try {
                // Parse event from message data
                val event = DemandResponseEvent(
                    eventId = data["event_id"] ?: return@launch,
                    startTime = data["start_time"]?.toLongOrNull() ?: return@launch,
                    endTime = data["end_time"]?.toLongOrNull() ?: return@launch,
                    targetReductionWatts = data["target_reduction_watts"]?.toDoubleOrNull() ?: 0.0,
                    priority = EventPriority.valueOf(data["priority"] ?: "MEDIUM"),
                    message = data["message"] ?: "Grid event",
                    location = data["location"] ?: "Unknown"
                )

                Log.d(TAG, "Grid event received: ${event.eventId} (${event.priority})")
                vppAnalytics.logGridEventReceived(event)

                // Check if user has VPP participation enabled
                val preferences = userPreferencesRepository.getUserPreferences().getOrNull()
                if (preferences?.vppParticipationEnabled != true) {
                    Log.d(TAG, "VPP participation disabled by user")
                    vppAnalytics.logParticipationDecision(
                        eventId = event.eventId,
                        participated = false,
                        reason = "user_disabled"
                    )
                    return@launch
                }

                // Check if event is active
                if (!event.isActive) {
                    Log.d(TAG, "Event is not active yet or already ended")
                    return@launch
                }

                // Create participation settings
                val participationSettings = ParticipationSettings(
                    enabled = true,
                    minimumPriority = EventPriority.MEDIUM, // TODO: Get from user preferences
                    allowBatterySaver = true,
                    allowBackgroundSync = true,
                    allowNetworkControl = true,
                    maxDurationMinutes = 120
                )

                // Show notification for critical events
                if (event.priority == EventPriority.CRITICAL || event.priority == EventPriority.HIGH) {
                    showGridEventNotification(
                        title = "Grid Event: ${event.priority.name}",
                        message = event.message
                    )
                }

                // Execute demand response
                val performance = vppControlExecutor.executeDemandResponse(event, participationSettings)

                Log.d(TAG, "Event executed: ${performance.reductionWatts}W reduced (${performance.reductionPercentage}%)")

                vppAnalytics.logParticipationDecision(
                    eventId = event.eventId,
                    participated = true,
                    reason = "automated_response"
                )
                vppAnalytics.logEventPerformance(performance)

                // Report performance back to server (via VPP repository)
                // This would send the metrics to your backend
                // vppRepository.reportEventPerformance(performance)

            } catch (e: Exception) {
                Log.e(TAG, "Error handling grid event", e)
                vppAnalytics.logVppError(
                    errorType = "grid_event_handling",
                    errorMessage = e.message ?: "Unknown error",
                    eventId = data["event_id"]
                )
            }
        }
    }

    /**
     * Handle grid status updates (stress level, pricing, carbon intensity)
     */
    private fun handleGridStatusUpdate(data: Map<String, String>) {
        serviceScope.launch {
            try {
                Log.d(TAG, "Grid status update received")
                // Parse and update local grid status cache
                // This could update a local database or shared preferences
                // to be used by the UI and predictive charging logic
            } catch (e: Exception) {
                Log.e(TAG, "Error handling grid status update", e)
            }
        }
    }

    /**
     * Handle direct VPP commands (restore, pause, resume)
     */
    private fun handleVppCommand(data: Map<String, String>) {
        serviceScope.launch {
            try {
                val command = data["command"]
                Log.d(TAG, "VPP command received: $command")

                when (command) {
                    "restore" -> {
                        vppControlExecutor.restoreNormalOperation()
                        Log.d(TAG, "Normal operation restored via remote command")
                    }
                    "pause" -> {
                        // Temporarily pause VPP participation
                        Log.d(TAG, "VPP participation paused via remote command")
                    }
                    "resume" -> {
                        // Resume VPP participation
                        Log.d(TAG, "VPP participation resumed via remote command")
                    }
                    else -> {
                        Log.w(TAG, "Unknown VPP command: $command")
                    }
                }
            } catch (e: Exception) {
                Log.e(TAG, "Error handling VPP command", e)
            }
        }
    }

    /**
     * Show notification for grid event
     */
    private fun showGridEventNotification(title: String, message: String) {
        val notificationHelper = BatteryNotificationHelper(applicationContext)
        notificationHelper.showNotification(
            title = title,
            message = message,
            notificationId = System.currentTimeMillis().toInt(),
            channelId = "grid_events",
            priority = androidx.core.app.NotificationCompat.PRIORITY_HIGH
        )
    }

    /**
     * Called when FCM registration token is updated
     * Upload to your server to enable push notifications
     */
    override fun onNewToken(token: String) {
        Log.d(TAG, "New FCM token: $token")

        // TODO: Send token to your backend server
        serviceScope.launch {
            try {
                // Example: vppRepository.uploadFcmToken(token)
                Log.d(TAG, "FCM token uploaded to server")
            } catch (e: Exception) {
                Log.e(TAG, "Failed to upload FCM token", e)
            }
        }
    }
}
