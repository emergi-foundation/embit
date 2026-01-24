package eco.emergi.embit.android.analytics

import android.content.Context
import com.google.firebase.remoteconfig.FirebaseRemoteConfig
import com.google.firebase.remoteconfig.ktx.remoteConfig
import com.google.firebase.remoteconfig.ktx.remoteConfigSettings
import com.google.firebase.ktx.Firebase
import dagger.hilt.android.qualifiers.ApplicationContext
import kotlinx.coroutines.tasks.await
import javax.inject.Inject
import javax.inject.Singleton
import kotlin.time.Duration.Companion.hours

/**
 * Centralized remote configuration manager using Firebase Remote Config.
 *
 * Provides feature flags and dynamic app configuration.
 * Config values are cached locally and fetched periodically.
 */
@Singleton
class RemoteConfigManager @Inject constructor(
    @ApplicationContext private val context: Context
) {
    private val remoteConfig: FirebaseRemoteConfig by lazy {
        Firebase.remoteConfig.apply {
            val configSettings = remoteConfigSettings {
                minimumFetchIntervalInSeconds = 12.hours.inWholeSeconds // Fetch every 12 hours
            }
            setConfigSettingsAsync(configSettings)
            setDefaultsAsync(getDefaults())
        }
    }

    /**
     * Fetch and activate remote config values.
     * Call this on app start or when needed.
     *
     * @return true if new values were fetched and activated, false otherwise
     */
    suspend fun fetchAndActivate(): Boolean {
        return try {
            remoteConfig.fetchAndActivate().await()
        } catch (e: Exception) {
            false
        }
    }

    /**
     * Get default configuration values.
     */
    private fun getDefaults(): Map<String, Any> {
        return mapOf(
            // Feature Flags
            KEY_GRID_MONITORING_ENABLED to true,
            KEY_VPP_ENABLED to true,
            KEY_FEEDBACK_ENABLED to true,

            // App Configuration
            KEY_MIN_APP_VERSION to "2.0.0",
            KEY_FORCE_UPDATE_REQUIRED to false,

            // Sync Settings
            KEY_SYNC_INTERVAL_MINUTES to 60,
            KEY_MAX_SYNC_BATCH_SIZE to 100,

            // Health Score Thresholds
            KEY_HEALTH_SCORE_GOOD to 80,
            KEY_HEALTH_SCORE_FAIR to 60,
            KEY_HEALTH_SCORE_POOR to 40,

            // Notification Thresholds
            KEY_LOW_BATTERY_THRESHOLD to 20,
            KEY_HIGH_TEMP_THRESHOLD to 45.0,

            // A/B Testing
            KEY_EXPERIMENT_VARIANT to "control"
        )
    }

    // ========================================
    // Feature Flags
    // ========================================

    fun isGridMonitoringEnabled(): Boolean {
        return remoteConfig.getBoolean(KEY_GRID_MONITORING_ENABLED)
    }

    fun isVppEnabled(): Boolean {
        return remoteConfig.getBoolean(KEY_VPP_ENABLED)
    }

    fun isFeedbackEnabled(): Boolean {
        return remoteConfig.getBoolean(KEY_FEEDBACK_ENABLED)
    }

    // ========================================
    // App Configuration
    // ========================================

    fun getMinAppVersion(): String {
        return remoteConfig.getString(KEY_MIN_APP_VERSION)
    }

    fun isForceUpdateRequired(): Boolean {
        return remoteConfig.getBoolean(KEY_FORCE_UPDATE_REQUIRED)
    }

    // ========================================
    // Sync Settings
    // ========================================

    fun getSyncIntervalMinutes(): Long {
        return remoteConfig.getLong(KEY_SYNC_INTERVAL_MINUTES)
    }

    fun getMaxSyncBatchSize(): Long {
        return remoteConfig.getLong(KEY_MAX_SYNC_BATCH_SIZE)
    }

    // ========================================
    // Health Score Thresholds
    // ========================================

    fun getHealthScoreGoodThreshold(): Long {
        return remoteConfig.getLong(KEY_HEALTH_SCORE_GOOD)
    }

    fun getHealthScoreFairThreshold(): Long {
        return remoteConfig.getLong(KEY_HEALTH_SCORE_FAIR)
    }

    fun getHealthScorePoorThreshold(): Long {
        return remoteConfig.getLong(KEY_HEALTH_SCORE_POOR)
    }

    /**
     * Get health category based on score and remote config thresholds.
     */
    fun getHealthCategory(score: Int): String {
        return when {
            score >= getHealthScoreGoodThreshold() -> "excellent"
            score >= getHealthScoreFairThreshold() -> "good"
            score >= getHealthScorePoorThreshold() -> "fair"
            else -> "poor"
        }
    }

    // ========================================
    // Notification Thresholds
    // ========================================

    fun getLowBatteryThreshold(): Long {
        return remoteConfig.getLong(KEY_LOW_BATTERY_THRESHOLD)
    }

    fun getHighTempThreshold(): Double {
        return remoteConfig.getDouble(KEY_HIGH_TEMP_THRESHOLD)
    }

    // ========================================
    // A/B Testing
    // ========================================

    fun getExperimentVariant(): String {
        return remoteConfig.getString(KEY_EXPERIMENT_VARIANT)
    }

    fun isInExperimentalGroup(): Boolean {
        return getExperimentVariant() == "experimental"
    }

    // ========================================
    // Keys
    // ========================================

    companion object {
        // Feature Flags
        private const val KEY_GRID_MONITORING_ENABLED = "grid_monitoring_enabled"
        private const val KEY_VPP_ENABLED = "vpp_enabled"
        private const val KEY_FEEDBACK_ENABLED = "feedback_enabled"

        // App Configuration
        private const val KEY_MIN_APP_VERSION = "min_app_version"
        private const val KEY_FORCE_UPDATE_REQUIRED = "force_update_required"

        // Sync Settings
        private const val KEY_SYNC_INTERVAL_MINUTES = "sync_interval_minutes"
        private const val KEY_MAX_SYNC_BATCH_SIZE = "max_sync_batch_size"

        // Health Score Thresholds
        private const val KEY_HEALTH_SCORE_GOOD = "health_score_good"
        private const val KEY_HEALTH_SCORE_FAIR = "health_score_fair"
        private const val KEY_HEALTH_SCORE_POOR = "health_score_poor"

        // Notification Thresholds
        private const val KEY_LOW_BATTERY_THRESHOLD = "low_battery_threshold"
        private const val KEY_HIGH_TEMP_THRESHOLD = "high_temp_threshold"

        // A/B Testing
        private const val KEY_EXPERIMENT_VARIANT = "experiment_variant"
    }
}
