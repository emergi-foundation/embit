package eco.emergi.embit.android.services;

import android.content.Context;
import androidx.work.*;
import java.util.concurrent.TimeUnit;

/**
 * Scheduler for grid monitoring background work
 */
@kotlin.Metadata(mv = {1, 9, 0}, k = 1, xi = 48, d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u00c7\u0002\u0018\u00002\u00020\u0001B\u0007\b\u0002\u00a2\u0006\u0002\u0010\u0002J\u000e\u0010\u0003\u001a\u00020\u00042\u0006\u0010\u0005\u001a\u00020\u0006J\u000e\u0010\u0007\u001a\u00020\u00042\u0006\u0010\u0005\u001a\u00020\u0006J\u000e\u0010\b\u001a\u00020\u00042\u0006\u0010\u0005\u001a\u00020\u0006\u00a8\u0006\t"}, d2 = {"Leco/emergi/embit/android/services/GridMonitorScheduler;", "", "()V", "cancelPeriodicMonitoring", "", "context", "Landroid/content/Context;", "scheduleImmediateMonitoring", "schedulePeriodicMonitoring", "androidApp_devDebug"})
public final class GridMonitorScheduler {
    @org.jetbrains.annotations.NotNull()
    public static final eco.emergi.embit.android.services.GridMonitorScheduler INSTANCE = null;
    
    private GridMonitorScheduler() {
        super();
    }
    
    /**
     * Schedule periodic grid monitoring
     * Runs every 30 minutes to check grid conditions
     */
    public final void schedulePeriodicMonitoring(@org.jetbrains.annotations.NotNull()
    android.content.Context context) {
    }
    
    /**
     * Schedule one-time grid monitoring (immediate)
     */
    public final void scheduleImmediateMonitoring(@org.jetbrains.annotations.NotNull()
    android.content.Context context) {
    }
    
    /**
     * Cancel periodic grid monitoring
     */
    public final void cancelPeriodicMonitoring(@org.jetbrains.annotations.NotNull()
    android.content.Context context) {
    }
}