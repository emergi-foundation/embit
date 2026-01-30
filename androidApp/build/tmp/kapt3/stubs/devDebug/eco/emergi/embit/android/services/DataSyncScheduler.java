package eco.emergi.embit.android.services;

import android.content.Context;
import androidx.work.*;
import eco.emergi.embit.domain.models.SyncInterval;
import java.util.concurrent.TimeUnit;

/**
 * Scheduler for data synchronization WorkManager tasks.
 */
@kotlin.Metadata(mv = {1, 9, 0}, k = 1, xi = 48, d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0004\b\u00c7\u0002\u0018\u00002\u00020\u0001B\u0007\b\u0002\u00a2\u0006\u0002\u0010\u0002J\u000e\u0010\u0003\u001a\u00020\u00042\u0006\u0010\u0005\u001a\u00020\u0006J\u000e\u0010\u0007\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\nJ\u000e\u0010\u000b\u001a\u00020\f2\u0006\u0010\u0005\u001a\u00020\u0006J\u000e\u0010\r\u001a\u00020\u00042\u0006\u0010\u0005\u001a\u00020\u0006J\u0018\u0010\u000e\u001a\u00020\u00042\u0006\u0010\u0005\u001a\u00020\u00062\b\b\u0002\u0010\u000f\u001a\u00020\b\u00a8\u0006\u0010"}, d2 = {"Leco/emergi/embit/android/services/DataSyncScheduler;", "", "()V", "cancelPeriodicSync", "", "context", "Landroid/content/Context;", "getSyncInterval", "Leco/emergi/embit/domain/models/SyncInterval;", "minutes", "", "isSyncScheduled", "", "runImmediateSync", "schedulePeriodicSync", "interval", "androidApp_devDebug"})
public final class DataSyncScheduler {
    @org.jetbrains.annotations.NotNull()
    public static final eco.emergi.embit.android.services.DataSyncScheduler INSTANCE = null;
    
    private DataSyncScheduler() {
        super();
    }
    
    /**
     * Schedule periodic data synchronization based on sync interval
     *
     * @param context Application context
     * @param interval Sync interval (defaults to HOURLY)
     */
    public final void schedulePeriodicSync(@org.jetbrains.annotations.NotNull()
    android.content.Context context, @org.jetbrains.annotations.NotNull()
    eco.emergi.embit.domain.models.SyncInterval interval) {
    }
    
    /**
     * Cancel periodic data synchronization
     */
    public final void cancelPeriodicSync(@org.jetbrains.annotations.NotNull()
    android.content.Context context) {
    }
    
    /**
     * Check if periodic sync is scheduled
     */
    public final boolean isSyncScheduled(@org.jetbrains.annotations.NotNull()
    android.content.Context context) {
        return false;
    }
    
    /**
     * Run immediate sync (one-time work)
     * Useful for manual sync button
     */
    public final void runImmediateSync(@org.jetbrains.annotations.NotNull()
    android.content.Context context) {
    }
    
    /**
     * Get sync interval from minutes value
     */
    @org.jetbrains.annotations.NotNull()
    public final eco.emergi.embit.domain.models.SyncInterval getSyncInterval(int minutes) {
        return null;
    }
}