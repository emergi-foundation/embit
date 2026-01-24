package eco.emergi.embit.android.analytics

import android.content.Context
import android.os.Bundle
import com.google.firebase.analytics.FirebaseAnalytics
import com.google.firebase.analytics.ktx.analytics
import com.google.firebase.analytics.ktx.logEvent
import com.google.firebase.ktx.Firebase
import dagger.hilt.android.qualifiers.ApplicationContext
import javax.inject.Inject
import javax.inject.Singleton

/**
 * Centralized analytics tracking manager using Firebase Analytics.
 *
 * Provides type-safe event logging methods for all app analytics events.
 * Events are logged asynchronously and won't block the main thread.
 */
@Singleton
class AnalyticsManager @Inject constructor(
    @ApplicationContext private val context: Context
) {
    private val analytics: FirebaseAnalytics by lazy {
        Firebase.analytics
    }

    private var isEnabled = true

    /**
     * Enable or disable analytics collection (for GDPR compliance).
     */
    fun setAnalyticsEnabled(enabled: Boolean) {
        isEnabled = enabled
        analytics.setAnalyticsCollectionEnabled(enabled)
    }

    /**
     * Set user ID for analytics (call on login).
     */
    fun setUserId(userId: String?) {
        if (!isEnabled) return
        analytics.setUserId(userId)
    }

    /**
     * Set user property.
     */
    fun setUserProperty(name: String, value: String?) {
        if (!isEnabled) return
        analytics.setUserProperty(name, value)
    }

    /**
     * Log screen view event.
     */
    fun logScreenView(screenName: String, screenClass: String? = null) {
        if (!isEnabled) return
        analytics.logEvent(FirebaseAnalytics.Event.SCREEN_VIEW) {
            param(FirebaseAnalytics.Param.SCREEN_NAME, screenName)
            screenClass?.let { param(FirebaseAnalytics.Param.SCREEN_CLASS, it) }
        }
    }

    // ========================================
    // Authentication Events
    // ========================================

    fun logLogin(method: String = "google") {
        if (!isEnabled) return
        analytics.logEvent(FirebaseAnalytics.Event.LOGIN) {
            param(FirebaseAnalytics.Param.METHOD, method)
        }
    }

    fun logSignUp(method: String = "google") {
        if (!isEnabled) return
        analytics.logEvent(FirebaseAnalytics.Event.SIGN_UP) {
            param(FirebaseAnalytics.Param.METHOD, method)
        }
    }

    fun logLogout() {
        if (!isEnabled) return
        analytics.logEvent("logout", Bundle())
    }

    // ========================================
    // Battery Monitoring Events
    // ========================================

    fun logMonitoringStarted() {
        if (!isEnabled) return
        analytics.logEvent("monitoring_started", Bundle())
    }

    fun logMonitoringStopped(reason: String = "user_action") {
        if (!isEnabled) return
        analytics.logEvent("monitoring_stopped") {
            param("reason", reason)
        }
    }

    fun logHealthCheck(healthScore: Int) {
        if (!isEnabled) return
        analytics.logEvent("health_check") {
            param("health_score", healthScore.toLong())
            param("health_category", getHealthCategory(healthScore))
        }
    }

    fun logBatteryReading(
        percentage: Int,
        temperature: Float,
        isCharging: Boolean
    ) {
        if (!isEnabled) return
        analytics.logEvent("battery_reading") {
            param("percentage", percentage.toLong())
            param("temperature", temperature.toDouble())
            param("is_charging", if (isCharging) "true" else "false")
        }
    }

    // ========================================
    // Data Sync Events
    // ========================================

    fun logSyncStarted(triggerSource: String = "automatic") {
        if (!isEnabled) return
        analytics.logEvent("sync_started") {
            param("trigger_source", triggerSource)
        }
    }

    fun logSyncCompleted(
        recordCount: Int,
        durationMs: Long,
        triggerSource: String = "automatic"
    ) {
        if (!isEnabled) return
        analytics.logEvent("sync_completed") {
            param("record_count", recordCount.toLong())
            param("duration_ms", durationMs)
            param("trigger_source", triggerSource)
        }
    }

    fun logSyncFailed(
        errorType: String,
        errorMessage: String? = null,
        triggerSource: String = "automatic"
    ) {
        if (!isEnabled) return
        analytics.logEvent("sync_failed") {
            param("error_type", errorType)
            errorMessage?.let { param("error_message", it) }
            param("trigger_source", triggerSource)
        }
    }

    // ========================================
    // Data Management Events
    // ========================================

    fun logDataExported(format: String, recordCount: Int) {
        if (!isEnabled) return
        analytics.logEvent("data_exported") {
            param("format", format)
            param("record_count", recordCount.toLong())
        }
    }

    fun logDataImported(format: String, recordCount: Int, success: Boolean) {
        if (!isEnabled) return
        analytics.logEvent("data_imported") {
            param("format", format)
            param("record_count", recordCount.toLong())
            param("success", if (success) "true" else "false")
        }
    }

    fun logDataCleanup(
        deletedCount: Int,
        timePeriod: String
    ) {
        if (!isEnabled) return
        analytics.logEvent("data_cleanup") {
            param("deleted_count", deletedCount.toLong())
            param("time_period", timePeriod)
        }
    }

    // ========================================
    // Settings Events
    // ========================================

    fun logSettingChanged(settingName: String, newValue: String) {
        if (!isEnabled) return
        analytics.logEvent("setting_changed") {
            param("setting_name", settingName)
            param("new_value", newValue)
        }
    }

    fun logGridMonitoringToggled(enabled: Boolean) {
        if (!isEnabled) return
        analytics.logEvent("grid_monitoring_toggled") {
            param("enabled", if (enabled) "true" else "false")
        }
    }

    fun logEnergyProductSelected(productType: String) {
        if (!isEnabled) return
        analytics.logEvent("energy_product_selected") {
            param("product_type", productType)
        }
    }

    // ========================================
    // Error Events
    // ========================================

    fun logError(
        errorType: String,
        errorMessage: String? = null,
        errorContext: String? = null
    ) {
        if (!isEnabled) return
        analytics.logEvent("error_occurred") {
            param("error_type", errorType)
            errorMessage?.let { param("error_message", it) }
            errorContext?.let { param("error_context", it) }
        }
    }

    fun logPermissionDenied(permission: String) {
        if (!isEnabled) return
        analytics.logEvent("permission_denied") {
            param("permission", permission)
        }
    }

    // ========================================
    // Feedback Events
    // ========================================

    fun logFeedbackSubmitted(
        feedbackType: String,
        rating: Int? = null
    ) {
        if (!isEnabled) return
        analytics.logEvent("feedback_submitted") {
            param("feedback_type", feedbackType)
            rating?.let { param("rating", it.toLong()) }
        }
    }

    // ========================================
    // Helper Methods
    // ========================================

    private fun getHealthCategory(score: Int): String {
        return when {
            score >= 80 -> "excellent"
            score >= 60 -> "good"
            score >= 40 -> "fair"
            else -> "poor"
        }
    }
}
