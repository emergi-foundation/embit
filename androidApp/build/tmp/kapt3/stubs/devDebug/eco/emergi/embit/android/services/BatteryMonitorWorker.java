package eco.emergi.embit.android.services;

import android.content.Context;
import androidx.hilt.work.HiltWorker;
import androidx.work.CoroutineWorker;
import androidx.work.WorkerParameters;
import dagger.assisted.Assisted;
import dagger.assisted.AssistedInject;
import eco.emergi.embit.android.analytics.AnalyticsManager;
import eco.emergi.embit.android.analytics.CrashlyticsManager;
import eco.emergi.embit.domain.usecases.MonitorBatteryUseCase;

/**
 * WorkManager worker for periodic battery monitoring in the background.
 *
 * This worker runs periodically (recommended: every 15 minutes) to collect
 * battery readings even when the app is not actively used.
 */
@kotlin.Metadata(mv = {1, 9, 0}, k = 1, xi = 48, d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0007\u0018\u0000 \u00172\u00020\u0001:\u0001\u0017B;\b\u0007\u0012\b\b\u0001\u0010\u0002\u001a\u00020\u0003\u0012\b\b\u0001\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\u0006\u0010\b\u001a\u00020\t\u0012\u0006\u0010\n\u001a\u00020\u000b\u0012\u0006\u0010\f\u001a\u00020\r\u00a2\u0006\u0002\u0010\u000eJ\u0016\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u0012H\u0082@\u00a2\u0006\u0002\u0010\u0013J\u000e\u0010\u0014\u001a\u00020\u0015H\u0096@\u00a2\u0006\u0002\u0010\u0016R\u000e\u0010\n\u001a\u00020\u000bX\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\rX\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\tX\u0082\u0004\u00a2\u0006\u0002\n\u0000\u00a8\u0006\u0018"}, d2 = {"Leco/emergi/embit/android/services/BatteryMonitorWorker;", "Landroidx/work/CoroutineWorker;", "appContext", "Landroid/content/Context;", "workerParams", "Landroidx/work/WorkerParameters;", "monitorBatteryUseCase", "Leco/emergi/embit/domain/usecases/MonitorBatteryUseCase;", "notificationHelper", "Leco/emergi/embit/android/services/BatteryNotificationHelper;", "analyticsManager", "Leco/emergi/embit/android/analytics/AnalyticsManager;", "crashlyticsManager", "Leco/emergi/embit/android/analytics/CrashlyticsManager;", "(Landroid/content/Context;Landroidx/work/WorkerParameters;Leco/emergi/embit/domain/usecases/MonitorBatteryUseCase;Leco/emergi/embit/android/services/BatteryNotificationHelper;Leco/emergi/embit/android/analytics/AnalyticsManager;Leco/emergi/embit/android/analytics/CrashlyticsManager;)V", "checkAndNotify", "", "reading", "Leco/emergi/embit/domain/models/BatteryReading;", "(Leco/emergi/embit/domain/models/BatteryReading;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "doWork", "Landroidx/work/ListenableWorker$Result;", "(Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "Companion", "androidApp_devDebug"})
@androidx.hilt.work.HiltWorker()
public final class BatteryMonitorWorker extends androidx.work.CoroutineWorker {
    @org.jetbrains.annotations.NotNull()
    private final eco.emergi.embit.domain.usecases.MonitorBatteryUseCase monitorBatteryUseCase = null;
    @org.jetbrains.annotations.NotNull()
    private final eco.emergi.embit.android.services.BatteryNotificationHelper notificationHelper = null;
    @org.jetbrains.annotations.NotNull()
    private final eco.emergi.embit.android.analytics.AnalyticsManager analyticsManager = null;
    @org.jetbrains.annotations.NotNull()
    private final eco.emergi.embit.android.analytics.CrashlyticsManager crashlyticsManager = null;
    @org.jetbrains.annotations.NotNull()
    public static final java.lang.String WORK_NAME = "battery_monitor_periodic";
    @org.jetbrains.annotations.NotNull()
    public static final java.lang.String TAG = "BatteryMonitor";
    @org.jetbrains.annotations.NotNull()
    public static final eco.emergi.embit.android.services.BatteryMonitorWorker.Companion Companion = null;
    
    @dagger.assisted.AssistedInject()
    public BatteryMonitorWorker(@dagger.assisted.Assisted()
    @org.jetbrains.annotations.NotNull()
    android.content.Context appContext, @dagger.assisted.Assisted()
    @org.jetbrains.annotations.NotNull()
    androidx.work.WorkerParameters workerParams, @org.jetbrains.annotations.NotNull()
    eco.emergi.embit.domain.usecases.MonitorBatteryUseCase monitorBatteryUseCase, @org.jetbrains.annotations.NotNull()
    eco.emergi.embit.android.services.BatteryNotificationHelper notificationHelper, @org.jetbrains.annotations.NotNull()
    eco.emergi.embit.android.analytics.AnalyticsManager analyticsManager, @org.jetbrains.annotations.NotNull()
    eco.emergi.embit.android.analytics.CrashlyticsManager crashlyticsManager) {
        super(null, null);
    }
    
    @java.lang.Override()
    @org.jetbrains.annotations.Nullable()
    public java.lang.Object doWork(@org.jetbrains.annotations.NotNull()
    kotlin.coroutines.Continuation<? super androidx.work.ListenableWorker.Result> $completion) {
        return null;
    }
    
    private final java.lang.Object checkAndNotify(eco.emergi.embit.domain.models.BatteryReading reading, kotlin.coroutines.Continuation<? super kotlin.Unit> $completion) {
        return null;
    }
    
    @kotlin.Metadata(mv = {1, 9, 0}, k = 1, xi = 48, d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\u0007\b\u0002\u00a2\u0006\u0002\u0010\u0002R\u000e\u0010\u0003\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0005\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000\u00a8\u0006\u0006"}, d2 = {"Leco/emergi/embit/android/services/BatteryMonitorWorker$Companion;", "", "()V", "TAG", "", "WORK_NAME", "androidApp_devDebug"})
    public static final class Companion {
        
        private Companion() {
            super();
        }
    }
}