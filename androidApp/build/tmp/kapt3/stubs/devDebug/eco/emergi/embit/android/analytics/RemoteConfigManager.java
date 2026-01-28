package eco.emergi.embit.android.analytics;

import android.content.Context;
import com.google.firebase.remoteconfig.FirebaseRemoteConfig;
import com.google.firebase.ktx.Firebase;
import dagger.hilt.android.qualifiers.ApplicationContext;
import javax.inject.Inject;
import javax.inject.Singleton;

/**
 * Centralized remote configuration manager using Firebase Remote Config.
 *
 * Provides feature flags and dynamic app configuration.
 * Config values are cached locally and fetched periodically.
 */
@javax.inject.Singleton()
@kotlin.Metadata(mv = {1, 9, 0}, k = 1, xi = 48, d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010$\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\t\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0010\u0006\n\u0002\b\u0016\b\u0007\u0018\u0000 02\u00020\u0001:\u00010B\u0011\b\u0007\u0012\b\b\u0001\u0010\u0002\u001a\u00020\u0003\u00a2\u0006\u0002\u0010\u0004J\u000e\u0010\u000b\u001a\u00020\fH\u0086@\u00a2\u0006\u0002\u0010\rJ\u0014\u0010\u000e\u001a\u000e\u0012\u0004\u0012\u00020\u0010\u0012\u0004\u0012\u00020\u00010\u000fH\u0002J\u0006\u0010\u0011\u001a\u00020\u0010J\u0006\u0010\u0012\u001a\u00020\u0013J\u000e\u0010\u0014\u001a\u00020\u00102\u0006\u0010\u0015\u001a\u00020\u0016J\u0006\u0010\u0017\u001a\u00020\u0013J\u0006\u0010\u0018\u001a\u00020\u0013J\u0006\u0010\u0019\u001a\u00020\u0013J\u0006\u0010\u001a\u001a\u00020\u001bJ\u0006\u0010\u001c\u001a\u00020\u0013J\u0006\u0010\u001d\u001a\u00020\u0010J\u0006\u0010\u001e\u001a\u00020\u0013J\u0006\u0010\u001f\u001a\u00020\u0013J\u0006\u0010 \u001a\u00020\u0010J\u0006\u0010!\u001a\u00020\u0013J\u0006\u0010\"\u001a\u00020\u0013J\u0006\u0010#\u001a\u00020\fJ\u0006\u0010$\u001a\u00020\fJ\u0006\u0010%\u001a\u00020\fJ\u0006\u0010&\u001a\u00020\fJ\u0006\u0010\'\u001a\u00020\fJ\u0006\u0010(\u001a\u00020\fJ\u0006\u0010)\u001a\u00020\fJ\u0006\u0010*\u001a\u00020\fJ\u0006\u0010+\u001a\u00020\fJ\u0006\u0010,\u001a\u00020\fJ\u0006\u0010-\u001a\u00020\fJ\u0006\u0010.\u001a\u00020\fJ\u0006\u0010/\u001a\u00020\fR\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u001b\u0010\u0005\u001a\u00020\u00068BX\u0082\u0084\u0002\u00a2\u0006\f\n\u0004\b\t\u0010\n\u001a\u0004\b\u0007\u0010\b\u00a8\u00061"}, d2 = {"Leco/emergi/embit/android/analytics/RemoteConfigManager;", "", "context", "Landroid/content/Context;", "(Landroid/content/Context;)V", "remoteConfig", "Lcom/google/firebase/remoteconfig/FirebaseRemoteConfig;", "getRemoteConfig", "()Lcom/google/firebase/remoteconfig/FirebaseRemoteConfig;", "remoteConfig$delegate", "Lkotlin/Lazy;", "fetchAndActivate", "", "(Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "getDefaults", "", "", "getExperimentVariant", "getFullChargeThreshold", "", "getHealthCategory", "score", "", "getHealthScoreFairThreshold", "getHealthScoreGoodThreshold", "getHealthScorePoorThreshold", "getHighTempThreshold", "", "getLowBatteryThreshold", "getMaintenanceMessage", "getMaxReadingsPerDay", "getMaxSyncBatchSize", "getMinAppVersion", "getMonitoringIntervalMinutes", "getSyncIntervalMinutes", "isAdvancedAnalyticsEnabled", "isAutoSyncEnabled", "isBetaFeaturesEnabled", "isChargingSessionTrackingEnabled", "isDataExportEnabled", "isDataImportEnabled", "isFeedbackEnabled", "isForceUpdateRequired", "isGridMonitoringEnabled", "isInExperimentalGroup", "isMaintenanceMode", "isPushNotificationsEnabled", "isVppEnabled", "Companion", "androidApp_devDebug"})
public final class RemoteConfigManager {
    @org.jetbrains.annotations.NotNull()
    private final android.content.Context context = null;
    @org.jetbrains.annotations.NotNull()
    private final kotlin.Lazy remoteConfig$delegate = null;
    @org.jetbrains.annotations.NotNull()
    private static final java.lang.String KEY_GRID_MONITORING_ENABLED = "grid_monitoring_enabled";
    @org.jetbrains.annotations.NotNull()
    private static final java.lang.String KEY_VPP_ENABLED = "vpp_enabled";
    @org.jetbrains.annotations.NotNull()
    private static final java.lang.String KEY_FEEDBACK_ENABLED = "feedback_enabled";
    @org.jetbrains.annotations.NotNull()
    private static final java.lang.String KEY_DATA_EXPORT_ENABLED = "data_export_enabled";
    @org.jetbrains.annotations.NotNull()
    private static final java.lang.String KEY_DATA_IMPORT_ENABLED = "data_import_enabled";
    @org.jetbrains.annotations.NotNull()
    private static final java.lang.String KEY_CHARGING_SESSION_TRACKING_ENABLED = "charging_session_tracking_enabled";
    @org.jetbrains.annotations.NotNull()
    private static final java.lang.String KEY_ADVANCED_ANALYTICS_ENABLED = "advanced_analytics_enabled";
    @org.jetbrains.annotations.NotNull()
    private static final java.lang.String KEY_BETA_FEATURES_ENABLED = "beta_features_enabled";
    @org.jetbrains.annotations.NotNull()
    private static final java.lang.String KEY_PUSH_NOTIFICATIONS_ENABLED = "push_notifications_enabled";
    @org.jetbrains.annotations.NotNull()
    private static final java.lang.String KEY_MIN_APP_VERSION = "min_app_version";
    @org.jetbrains.annotations.NotNull()
    private static final java.lang.String KEY_FORCE_UPDATE_REQUIRED = "force_update_required";
    @org.jetbrains.annotations.NotNull()
    private static final java.lang.String KEY_MAINTENANCE_MODE = "maintenance_mode";
    @org.jetbrains.annotations.NotNull()
    private static final java.lang.String KEY_MAINTENANCE_MESSAGE = "maintenance_message";
    @org.jetbrains.annotations.NotNull()
    private static final java.lang.String KEY_SYNC_INTERVAL_MINUTES = "sync_interval_minutes";
    @org.jetbrains.annotations.NotNull()
    private static final java.lang.String KEY_MAX_SYNC_BATCH_SIZE = "max_sync_batch_size";
    @org.jetbrains.annotations.NotNull()
    private static final java.lang.String KEY_AUTO_SYNC_ENABLED = "auto_sync_enabled";
    @org.jetbrains.annotations.NotNull()
    private static final java.lang.String KEY_HEALTH_SCORE_GOOD = "health_score_good";
    @org.jetbrains.annotations.NotNull()
    private static final java.lang.String KEY_HEALTH_SCORE_FAIR = "health_score_fair";
    @org.jetbrains.annotations.NotNull()
    private static final java.lang.String KEY_HEALTH_SCORE_POOR = "health_score_poor";
    @org.jetbrains.annotations.NotNull()
    private static final java.lang.String KEY_LOW_BATTERY_THRESHOLD = "low_battery_threshold";
    @org.jetbrains.annotations.NotNull()
    private static final java.lang.String KEY_HIGH_TEMP_THRESHOLD = "high_temp_threshold";
    @org.jetbrains.annotations.NotNull()
    private static final java.lang.String KEY_FULL_CHARGE_THRESHOLD = "full_charge_threshold";
    @org.jetbrains.annotations.NotNull()
    private static final java.lang.String KEY_MONITORING_INTERVAL_MINUTES = "monitoring_interval_minutes";
    @org.jetbrains.annotations.NotNull()
    private static final java.lang.String KEY_MAX_READINGS_PER_DAY = "max_readings_per_day";
    @org.jetbrains.annotations.NotNull()
    private static final java.lang.String KEY_EXPERIMENT_VARIANT = "experiment_variant";
    @org.jetbrains.annotations.NotNull()
    public static final eco.emergi.embit.android.analytics.RemoteConfigManager.Companion Companion = null;
    
    @javax.inject.Inject()
    public RemoteConfigManager(@dagger.hilt.android.qualifiers.ApplicationContext()
    @org.jetbrains.annotations.NotNull()
    android.content.Context context) {
        super();
    }
    
    private final com.google.firebase.remoteconfig.FirebaseRemoteConfig getRemoteConfig() {
        return null;
    }
    
    /**
     * Fetch and activate remote config values.
     * Call this on app start or when needed.
     *
     * @return true if new values were fetched and activated, false otherwise
     */
    @org.jetbrains.annotations.Nullable()
    public final java.lang.Object fetchAndActivate(@org.jetbrains.annotations.NotNull()
    kotlin.coroutines.Continuation<? super java.lang.Boolean> $completion) {
        return null;
    }
    
    /**
     * Get default configuration values.
     */
    private final java.util.Map<java.lang.String, java.lang.Object> getDefaults() {
        return null;
    }
    
    public final boolean isGridMonitoringEnabled() {
        return false;
    }
    
    public final boolean isVppEnabled() {
        return false;
    }
    
    public final boolean isFeedbackEnabled() {
        return false;
    }
    
    public final boolean isDataExportEnabled() {
        return false;
    }
    
    public final boolean isDataImportEnabled() {
        return false;
    }
    
    public final boolean isChargingSessionTrackingEnabled() {
        return false;
    }
    
    public final boolean isAdvancedAnalyticsEnabled() {
        return false;
    }
    
    public final boolean isBetaFeaturesEnabled() {
        return false;
    }
    
    public final boolean isPushNotificationsEnabled() {
        return false;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String getMinAppVersion() {
        return null;
    }
    
    public final boolean isForceUpdateRequired() {
        return false;
    }
    
    public final boolean isMaintenanceMode() {
        return false;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String getMaintenanceMessage() {
        return null;
    }
    
    public final long getSyncIntervalMinutes() {
        return 0L;
    }
    
    public final long getMaxSyncBatchSize() {
        return 0L;
    }
    
    public final boolean isAutoSyncEnabled() {
        return false;
    }
    
    public final long getHealthScoreGoodThreshold() {
        return 0L;
    }
    
    public final long getHealthScoreFairThreshold() {
        return 0L;
    }
    
    public final long getHealthScorePoorThreshold() {
        return 0L;
    }
    
    /**
     * Get health category based on score and remote config thresholds.
     */
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String getHealthCategory(int score) {
        return null;
    }
    
    public final long getLowBatteryThreshold() {
        return 0L;
    }
    
    public final double getHighTempThreshold() {
        return 0.0;
    }
    
    public final long getFullChargeThreshold() {
        return 0L;
    }
    
    public final long getMonitoringIntervalMinutes() {
        return 0L;
    }
    
    public final long getMaxReadingsPerDay() {
        return 0L;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String getExperimentVariant() {
        return null;
    }
    
    public final boolean isInExperimentalGroup() {
        return false;
    }
    
    @kotlin.Metadata(mv = {1, 9, 0}, k = 1, xi = 48, d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0019\b\u0086\u0003\u0018\u00002\u00020\u0001B\u0007\b\u0002\u00a2\u0006\u0002\u0010\u0002R\u000e\u0010\u0003\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0005\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\r\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u000e\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u000f\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0010\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0011\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0012\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0013\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0014\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0015\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0016\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0017\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0018\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0019\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u001a\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u001b\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u001c\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000\u00a8\u0006\u001d"}, d2 = {"Leco/emergi/embit/android/analytics/RemoteConfigManager$Companion;", "", "()V", "KEY_ADVANCED_ANALYTICS_ENABLED", "", "KEY_AUTO_SYNC_ENABLED", "KEY_BETA_FEATURES_ENABLED", "KEY_CHARGING_SESSION_TRACKING_ENABLED", "KEY_DATA_EXPORT_ENABLED", "KEY_DATA_IMPORT_ENABLED", "KEY_EXPERIMENT_VARIANT", "KEY_FEEDBACK_ENABLED", "KEY_FORCE_UPDATE_REQUIRED", "KEY_FULL_CHARGE_THRESHOLD", "KEY_GRID_MONITORING_ENABLED", "KEY_HEALTH_SCORE_FAIR", "KEY_HEALTH_SCORE_GOOD", "KEY_HEALTH_SCORE_POOR", "KEY_HIGH_TEMP_THRESHOLD", "KEY_LOW_BATTERY_THRESHOLD", "KEY_MAINTENANCE_MESSAGE", "KEY_MAINTENANCE_MODE", "KEY_MAX_READINGS_PER_DAY", "KEY_MAX_SYNC_BATCH_SIZE", "KEY_MIN_APP_VERSION", "KEY_MONITORING_INTERVAL_MINUTES", "KEY_PUSH_NOTIFICATIONS_ENABLED", "KEY_SYNC_INTERVAL_MINUTES", "KEY_VPP_ENABLED", "androidApp_devDebug"})
    public static final class Companion {
        
        private Companion() {
            super();
        }
    }
}