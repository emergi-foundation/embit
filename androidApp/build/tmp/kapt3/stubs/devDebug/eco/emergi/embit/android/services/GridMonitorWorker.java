package eco.emergi.embit.android.services;

import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.BatteryManager;
import androidx.hilt.work.HiltWorker;
import androidx.work.CoroutineWorker;
import androidx.work.WorkerParameters;
import dagger.assisted.Assisted;
import dagger.assisted.AssistedInject;
import eco.emergi.embit.domain.models.GridStressLevel;
import eco.emergi.embit.domain.usecases.grid.GetChargingRecommendationUseCase;
import eco.emergi.embit.domain.usecases.grid.ObserveGridStatusUseCase;

/**
 * Worker to monitor grid status and send charging notifications
 */
@kotlin.Metadata(mv = {1, 9, 0}, k = 1, xi = 48, d1 = {"\u0000H\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\b\u0007\u0018\u0000 \u00172\u00020\u0001:\u0001\u0017B+\b\u0007\u0012\b\b\u0001\u0010\u0002\u001a\u00020\u0003\u0012\b\b\u0001\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\u0006\u0010\b\u001a\u00020\t\u00a2\u0006\u0002\u0010\nJ\u000e\u0010\u0010\u001a\u00020\u0011H\u0096@\u00a2\u0006\u0002\u0010\u0012J\b\u0010\u0013\u001a\u00020\u0014H\u0002J\b\u0010\u0015\u001a\u00020\u0016H\u0002R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\tX\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\fX\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u0016\u0010\r\u001a\n \u000f*\u0004\u0018\u00010\u000e0\u000eX\u0082\u0004\u00a2\u0006\u0002\n\u0000\u00a8\u0006\u0018"}, d2 = {"Leco/emergi/embit/android/services/GridMonitorWorker;", "Landroidx/work/CoroutineWorker;", "appContext", "Landroid/content/Context;", "workerParams", "Landroidx/work/WorkerParameters;", "observeGridStatusUseCase", "Leco/emergi/embit/domain/usecases/grid/ObserveGridStatusUseCase;", "getChargingRecommendationUseCase", "Leco/emergi/embit/domain/usecases/grid/GetChargingRecommendationUseCase;", "(Landroid/content/Context;Landroidx/work/WorkerParameters;Leco/emergi/embit/domain/usecases/grid/ObserveGridStatusUseCase;Leco/emergi/embit/domain/usecases/grid/GetChargingRecommendationUseCase;)V", "notificationManager", "Leco/emergi/embit/android/services/ChargingNotificationManager;", "prefs", "Landroid/content/SharedPreferences;", "kotlin.jvm.PlatformType", "doWork", "Landroidx/work/ListenableWorker$Result;", "(Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "getCurrentBatteryLevel", "", "isDeviceCharging", "", "Companion", "androidApp_devDebug"})
@androidx.hilt.work.HiltWorker()
public final class GridMonitorWorker extends androidx.work.CoroutineWorker {
    @org.jetbrains.annotations.NotNull()
    private final android.content.Context appContext = null;
    @org.jetbrains.annotations.NotNull()
    private final eco.emergi.embit.domain.usecases.grid.ObserveGridStatusUseCase observeGridStatusUseCase = null;
    @org.jetbrains.annotations.NotNull()
    private final eco.emergi.embit.domain.usecases.grid.GetChargingRecommendationUseCase getChargingRecommendationUseCase = null;
    @org.jetbrains.annotations.NotNull()
    public static final java.lang.String WORK_NAME = "grid_monitor_work";
    @org.jetbrains.annotations.NotNull()
    private static final java.lang.String PREFS_NAME = "grid_monitor_prefs";
    @org.jetbrains.annotations.NotNull()
    private static final java.lang.String KEY_LAST_NOTIFICATION_TYPE = "last_notification_type";
    @org.jetbrains.annotations.NotNull()
    private static final java.lang.String KEY_LAST_STRESS_LEVEL = "last_stress_level";
    private static final int NOTIFICATION_TYPE_NONE = 0;
    private static final int NOTIFICATION_TYPE_GOOD = 1;
    private static final int NOTIFICATION_TYPE_BAD = 2;
    private static final int NOTIFICATION_TYPE_CRITICAL = 3;
    @org.jetbrains.annotations.NotNull()
    private final eco.emergi.embit.android.services.ChargingNotificationManager notificationManager = null;
    private final android.content.SharedPreferences prefs = null;
    @org.jetbrains.annotations.NotNull()
    public static final eco.emergi.embit.android.services.GridMonitorWorker.Companion Companion = null;
    
    @dagger.assisted.AssistedInject()
    public GridMonitorWorker(@dagger.assisted.Assisted()
    @org.jetbrains.annotations.NotNull()
    android.content.Context appContext, @dagger.assisted.Assisted()
    @org.jetbrains.annotations.NotNull()
    androidx.work.WorkerParameters workerParams, @org.jetbrains.annotations.NotNull()
    eco.emergi.embit.domain.usecases.grid.ObserveGridStatusUseCase observeGridStatusUseCase, @org.jetbrains.annotations.NotNull()
    eco.emergi.embit.domain.usecases.grid.GetChargingRecommendationUseCase getChargingRecommendationUseCase) {
        super(null, null);
    }
    
    @java.lang.Override()
    @org.jetbrains.annotations.Nullable()
    public java.lang.Object doWork(@org.jetbrains.annotations.NotNull()
    kotlin.coroutines.Continuation<? super androidx.work.ListenableWorker.Result> $completion) {
        return null;
    }
    
    /**
     * Check if device is currently charging
     */
    private final boolean isDeviceCharging() {
        return false;
    }
    
    /**
     * Get current battery level (0-100)
     */
    private final int getCurrentBatteryLevel() {
        return 0;
    }
    
    @kotlin.Metadata(mv = {1, 9, 0}, k = 1, xi = 48, d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0006\b\u0086\u0003\u0018\u00002\u00020\u0001B\u0007\b\u0002\u00a2\u0006\u0002\u0010\u0002R\u000e\u0010\u0003\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0005\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0007X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\u0007X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u0007X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000\u00a8\u0006\r"}, d2 = {"Leco/emergi/embit/android/services/GridMonitorWorker$Companion;", "", "()V", "KEY_LAST_NOTIFICATION_TYPE", "", "KEY_LAST_STRESS_LEVEL", "NOTIFICATION_TYPE_BAD", "", "NOTIFICATION_TYPE_CRITICAL", "NOTIFICATION_TYPE_GOOD", "NOTIFICATION_TYPE_NONE", "PREFS_NAME", "WORK_NAME", "androidApp_devDebug"})
    public static final class Companion {
        
        private Companion() {
            super();
        }
    }
}