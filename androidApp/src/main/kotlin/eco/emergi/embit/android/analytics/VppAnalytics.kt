package eco.emergi.embit.android.analytics

import android.os.Bundle
import com.google.firebase.analytics.FirebaseAnalytics
import eco.emergi.embit.domain.models.DemandResponseEvent
import eco.emergi.embit.domain.models.EventPerformance
import eco.emergi.embit.domain.models.EventPriority
import javax.inject.Inject
import javax.inject.Singleton

/**
 * Analytics tracker for Virtual Power Plant (VPP) events
 * Tracks participation, performance, and power reduction metrics
 */
@Singleton
class VppAnalytics @Inject constructor(
    private val firebaseAnalytics: FirebaseAnalytics
) {

    /**
     * Track when a grid event is received
     */
    fun logGridEventReceived(event: DemandResponseEvent) {
        val bundle = Bundle().apply {
            putString("event_id", event.eventId)
            putString("priority", event.priority.name)
            putDouble("target_reduction_watts", event.targetReductionWatts)
            putInt("duration_minutes", event.durationMinutes)
            putString("location", event.location)
            putLong("start_time", event.startTime)
        }
        firebaseAnalytics.logEvent("vpp_event_received", bundle)
    }

    /**
     * Track user's decision to participate or not
     */
    fun logParticipationDecision(
        eventId: String,
        participated: Boolean,
        reason: String
    ) {
        val bundle = Bundle().apply {
            putString("event_id", eventId)
            putBoolean("participated", participated)
            putString("reason", reason)
        }
        firebaseAnalytics.logEvent("vpp_participation_decision", bundle)
    }

    /**
     * Track event performance and power reduction achieved
     */
    fun logEventPerformance(performance: EventPerformance) {
        val bundle = Bundle().apply {
            putString("event_id", performance.eventId)
            putString("user_id", performance.userId)
            putString("device_id", performance.deviceId)
            putDouble("baseline_power_watts", performance.baselinePowerWatts)
            putDouble("actual_power_watts", performance.actualPowerWatts)
            putDouble("reduction_watts", performance.reductionWatts)
            putDouble("reduction_percentage", performance.reductionPercentage)
            putInt("duration_minutes", performance.durationMinutes)
            putDouble("energy_reduced_wh", performance.energyReducedWh)
            putBoolean("completed", performance.completed)
            putInt("actions_count", performance.actionsApplied.size)
            putString("actions", performance.actionsApplied.joinToString(","))
        }
        firebaseAnalytics.logEvent("vpp_event_performance", bundle)

        // Also log as a user property for aggregate tracking
        if (performance.completed && performance.reductionWatts > 0) {
            firebaseAnalytics.setUserProperty("vpp_participant", "true")
            firebaseAnalytics.setUserProperty("last_participation", System.currentTimeMillis().toString())
        }
    }

    /**
     * Track power measurement during event
     */
    fun logPowerMeasurement(
        eventId: String,
        powerWatts: Double,
        batteryPercentage: Int,
        isCharging: Boolean,
        measurementType: String // "baseline" or "actual"
    ) {
        val bundle = Bundle().apply {
            putString("event_id", eventId)
            putDouble("power_watts", powerWatts)
            putInt("battery_percentage", batteryPercentage)
            putBoolean("is_charging", isCharging)
            putString("measurement_type", measurementType)
        }
        firebaseAnalytics.logEvent("vpp_power_measurement", bundle)
    }

    /**
     * Track control actions applied during event
     */
    fun logControlActionApplied(
        eventId: String,
        actionName: String,
        success: Boolean,
        estimatedReductionWatts: Double
    ) {
        val bundle = Bundle().apply {
            putString("event_id", eventId)
            putString("action_name", actionName)
            putBoolean("success", success)
            putDouble("estimated_reduction_watts", estimatedReductionWatts)
        }
        firebaseAnalytics.logEvent("vpp_action_applied", bundle)
    }

    /**
     * Track when normal operation is restored after event
     */
    fun logNormalOperationRestored(
        eventId: String,
        actionsReverted: Int
    ) {
        val bundle = Bundle().apply {
            putString("event_id", eventId)
            putInt("actions_reverted", actionsReverted)
        }
        firebaseAnalytics.logEvent("vpp_operation_restored", bundle)
    }

    /**
     * Track predictive charging notifications
     */
    fun logChargingNotification(
        notificationType: String, // "low_battery", "optimal_time", "battery_full", etc.
        batteryPercentage: Int,
        gridStressLevel: String? = null,
        pricingTier: String? = null
    ) {
        val bundle = Bundle().apply {
            putString("notification_type", notificationType)
            putInt("battery_percentage", batteryPercentage)
            gridStressLevel?.let { putString("grid_stress", it) }
            pricingTier?.let { putString("pricing_tier", it) }
        }
        firebaseAnalytics.logEvent("charging_notification", bundle)
    }

    /**
     * Track VPP settings changes
     */
    fun logVppSettingsChanged(
        enabled: Boolean,
        minimumPriority: EventPriority,
        allowBatterySaver: Boolean,
        allowBackgroundSync: Boolean,
        allowNetworkControl: Boolean
    ) {
        val bundle = Bundle().apply {
            putBoolean("enabled", enabled)
            putString("minimum_priority", minimumPriority.name)
            putBoolean("allow_battery_saver", allowBatterySaver)
            putBoolean("allow_background_sync", allowBackgroundSync)
            putBoolean("allow_network_control", allowNetworkControl)
        }
        firebaseAnalytics.logEvent("vpp_settings_changed", bundle)

        // Set user property
        firebaseAnalytics.setUserProperty("vpp_enabled", enabled.toString())
    }

    /**
     * Track aggregate VPP impact
     */
    fun logVppImpactSummary(
        totalEventsParticipated: Int,
        totalEnergyReducedWh: Double,
        totalCarbonSavedGrams: Double,
        averageReductionPercentage: Double
    ) {
        val bundle = Bundle().apply {
            putInt("total_events", totalEventsParticipated)
            putDouble("total_energy_wh", totalEnergyReducedWh)
            putDouble("total_carbon_grams", totalCarbonSavedGrams)
            putDouble("avg_reduction_pct", averageReductionPercentage)
        }
        firebaseAnalytics.logEvent("vpp_impact_summary", bundle)

        // Set user properties for segmentation
        firebaseAnalytics.setUserProperty("vpp_events_count", totalEventsParticipated.toString())
        firebaseAnalytics.setUserProperty("vpp_total_energy_wh", totalEnergyReducedWh.toInt().toString())
    }

    /**
     * Track errors in VPP system
     */
    fun logVppError(
        errorType: String,
        errorMessage: String,
        eventId: String? = null
    ) {
        val bundle = Bundle().apply {
            putString("error_type", errorType)
            putString("error_message", errorMessage)
            eventId?.let { putString("event_id", it) }
        }
        firebaseAnalytics.logEvent("vpp_error", bundle)
    }
}
