package eco.emergi.embit.android.services;

import android.content.Context;
import androidx.work.*;
import java.util.concurrent.TimeUnit;

/**
 * Scheduler for battery monitoring WorkManager tasks.
 */
@kotlin.Metadata(mv = {1, 9, 0}, k = 1, xi = 48, d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0007\b\u00c7\u0002\u0018\u00002\u00020\u0001B\u0007\b\u0002\u00a2\u0006\u0002\u0010\u0002J\u000e\u0010\u0003\u001a\u00020\u00042\u0006\u0010\u0005\u001a\u00020\u0006J\u000e\u0010\u0007\u001a\u00020\u00042\u0006\u0010\u0005\u001a\u00020\u0006J\u000e\u0010\b\u001a\u00020\u00042\u0006\u0010\u0005\u001a\u00020\u0006J\u000e\u0010\t\u001a\u00020\n2\u0006\u0010\u0005\u001a\u00020\u0006J\u000e\u0010\u000b\u001a\u00020\n2\u0006\u0010\u0005\u001a\u00020\u0006J\u000e\u0010\f\u001a\u00020\n2\u0006\u0010\u0005\u001a\u00020\u0006J\u000e\u0010\r\u001a\u00020\u00042\u0006\u0010\u0005\u001a\u00020\u0006J\u000e\u0010\u000e\u001a\u00020\u00042\u0006\u0010\u0005\u001a\u00020\u0006J\u000e\u0010\u000f\u001a\u00020\u00042\u0006\u0010\u0005\u001a\u00020\u0006J\u000e\u0010\u0010\u001a\u00020\u00042\u0006\u0010\u0005\u001a\u00020\u0006\u00a8\u0006\u0011"}, d2 = {"Leco/emergi/embit/android/services/BatteryWorkScheduler;", "", "()V", "cancelChargingSessionTracking", "", "context", "Landroid/content/Context;", "cancelHealthMetricsAggregation", "cancelPeriodicMonitoring", "isChargingSessionTrackingScheduled", "", "isHealthMetricsAggregationScheduled", "isMonitoringScheduled", "runImmediateReading", "scheduleChargingSessionTracking", "scheduleHealthMetricsAggregation", "schedulePeriodicMonitoring", "androidApp_devDebug"})
public final class BatteryWorkScheduler {
    @org.jetbrains.annotations.NotNull()
    public static final eco.emergi.embit.android.services.BatteryWorkScheduler INSTANCE = null;
    
    private BatteryWorkScheduler() {
        super();
    }
    
    /**
     * Schedule periodic battery monitoring (runs every 15 minutes)
     */
    public final void schedulePeriodicMonitoring(@org.jetbrains.annotations.NotNull()
    android.content.Context context) {
    }
    
    /**
     * Cancel periodic battery monitoring
     */
    public final void cancelPeriodicMonitoring(@org.jetbrains.annotations.NotNull()
    android.content.Context context) {
    }
    
    /**
     * Check if periodic monitoring is scheduled
     */
    public final boolean isMonitoringScheduled(@org.jetbrains.annotations.NotNull()
    android.content.Context context) {
        return false;
    }
    
    /**
     * Run immediate battery reading (one-time work)
     */
    public final void runImmediateReading(@org.jetbrains.annotations.NotNull()
    android.content.Context context) {
    }
    
    /**
     * Schedule periodic charging session tracking (runs every 15 minutes)
     */
    public final void scheduleChargingSessionTracking(@org.jetbrains.annotations.NotNull()
    android.content.Context context) {
    }
    
    /**
     * Cancel periodic charging session tracking
     */
    public final void cancelChargingSessionTracking(@org.jetbrains.annotations.NotNull()
    android.content.Context context) {
    }
    
    /**
     * Check if charging session tracking is scheduled
     */
    public final boolean isChargingSessionTrackingScheduled(@org.jetbrains.annotations.NotNull()
    android.content.Context context) {
        return false;
    }
    
    /**
     * Schedule daily health metrics aggregation (runs once per day)
     */
    public final void scheduleHealthMetricsAggregation(@org.jetbrains.annotations.NotNull()
    android.content.Context context) {
    }
    
    /**
     * Cancel daily health metrics aggregation
     */
    public final void cancelHealthMetricsAggregation(@org.jetbrains.annotations.NotNull()
    android.content.Context context) {
    }
    
    /**
     * Check if health metrics aggregation is scheduled
     */
    public final boolean isHealthMetricsAggregationScheduled(@org.jetbrains.annotations.NotNull()
    android.content.Context context) {
        return false;
    }
}