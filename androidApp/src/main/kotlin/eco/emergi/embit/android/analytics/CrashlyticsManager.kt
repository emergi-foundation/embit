package eco.emergi.embit.android.analytics

import android.content.Context
import com.google.firebase.crashlytics.FirebaseCrashlytics
import com.google.firebase.crashlytics.ktx.crashlytics
import com.google.firebase.ktx.Firebase
import dagger.hilt.android.qualifiers.ApplicationContext
import javax.inject.Inject
import javax.inject.Singleton

/**
 * Centralized crash reporting and error tracking manager using Firebase Crashlytics.
 *
 * Provides methods to:
 * - Log non-fatal exceptions
 * - Set custom keys for debugging context
 * - Set user identifiers
 * - Enable/disable crash reporting for GDPR compliance
 */
@Singleton
class CrashlyticsManager @Inject constructor(
    @ApplicationContext private val context: Context
) {
    private val crashlytics: FirebaseCrashlytics by lazy {
        Firebase.crashlytics
    }

    private var isEnabled = true

    /**
     * Enable or disable Crashlytics collection (for GDPR compliance).
     */
    fun setCrashlyticsEnabled(enabled: Boolean) {
        isEnabled = enabled
        crashlytics.setCrashlyticsCollectionEnabled(enabled)
    }

    /**
     * Set user ID for crash reports (call on login).
     */
    fun setUserId(userId: String?) {
        if (!isEnabled) return
        crashlytics.setUserId(userId ?: "")
    }

    /**
     * Log a non-fatal exception.
     */
    fun logException(throwable: Throwable) {
        if (!isEnabled) return
        crashlytics.recordException(throwable)
    }

    /**
     * Log a custom message (useful for debugging).
     */
    fun log(message: String) {
        if (!isEnabled) return
        crashlytics.log(message)
    }

    // ========================================
    // Custom Keys - Battery Context
    // ========================================

    fun setBatteryPercentage(percentage: Int) {
        if (!isEnabled) return
        crashlytics.setCustomKey("battery_percentage", percentage)
    }

    fun setIsCharging(isCharging: Boolean) {
        if (!isEnabled) return
        crashlytics.setCustomKey("is_charging", isCharging)
    }

    fun setBatteryTemperature(temperature: Float) {
        if (!isEnabled) return
        crashlytics.setCustomKey("battery_temperature", temperature)
    }

    fun setBatteryHealthScore(score: Int) {
        if (!isEnabled) return
        crashlytics.setCustomKey("battery_health_score", score)
    }

    // ========================================
    // Custom Keys - Sync Context
    // ========================================

    fun setIsSyncing(isSyncing: Boolean) {
        if (!isEnabled) return
        crashlytics.setCustomKey("is_syncing", isSyncing)
    }

    fun setLastSyncTimestamp(timestamp: Long) {
        if (!isEnabled) return
        crashlytics.setCustomKey("last_sync_timestamp", timestamp)
    }

    fun setPendingSyncCount(count: Int) {
        if (!isEnabled) return
        crashlytics.setCustomKey("pending_sync_count", count)
    }

    // ========================================
    // Custom Keys - Auth Context
    // ========================================

    fun setAuthState(state: String) {
        if (!isEnabled) return
        crashlytics.setCustomKey("auth_state", state)
    }

    fun setGridMonitoringEnabled(enabled: Boolean) {
        if (!isEnabled) return
        crashlytics.setCustomKey("grid_monitoring_enabled", enabled)
    }

    // ========================================
    // Custom Keys - App Context
    // ========================================

    fun setAppVersion(version: String) {
        if (!isEnabled) return
        crashlytics.setCustomKey("app_version", version)
    }

    fun setEnvironment(environment: String) {
        if (!isEnabled) return
        crashlytics.setCustomKey("environment", environment)
    }

    /**
     * Clear all custom keys (call on logout).
     */
    fun clearCustomKeys() {
        if (!isEnabled) return
        // Set user ID to empty
        setUserId(null)
        // Reset critical keys
        setAuthState("logged_out")
        setBatteryPercentage(0)
        setIsCharging(false)
        setBatteryHealthScore(0)
        setIsSyncing(false)
        setPendingSyncCount(0)
    }

    /**
     * Force a test crash (for testing Crashlytics integration).
     * NEVER call this in production!
     */
    fun forceCrash() {
        throw RuntimeException("Test crash from CrashlyticsManager")
    }
}
