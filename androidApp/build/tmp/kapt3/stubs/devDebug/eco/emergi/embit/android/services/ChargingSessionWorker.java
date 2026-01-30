package eco.emergi.embit.android.services;

import android.content.Context;
import androidx.hilt.work.HiltWorker;
import androidx.work.CoroutineWorker;
import androidx.work.WorkerParameters;
import dagger.assisted.Assisted;
import dagger.assisted.AssistedInject;
import eco.emergi.embit.android.analytics.AnalyticsManager;
import eco.emergi.embit.android.analytics.CrashlyticsManager;
import eco.emergi.embit.domain.models.BatteryState;
import eco.emergi.embit.domain.models.SmartChargingSession;
import eco.emergi.embit.domain.repositories.IAuthRepository;
import eco.emergi.embit.domain.repositories.IBatteryRepository;
import eco.emergi.embit.domain.repositories.IGridDataRepository;
import eco.emergi.embit.domain.usecases.grid.TrackChargingSessionUseCase;

/**
 * WorkManager worker for tracking charging sessions automatically.
 *
 * This worker runs periodically to:
 * 1. Monitor battery state changes (charging/discharging)
 * 2. Detect when charging starts and stops
 * 3. Calculate session statistics
 * 4. Save completed sessions to Firestore
 *
 * Runs when the user is authenticated.
 */
@kotlin.Metadata(mv = {1, 9, 0}, k = 1, xi = 48, d1 = {"\u0000`\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0010\b\n\u0002\b\u0006\b\u0007\u0018\u0000 #2\u00020\u0001:\u0001#BC\b\u0007\u0012\b\b\u0001\u0010\u0002\u001a\u00020\u0003\u0012\b\b\u0001\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\u0006\u0010\b\u001a\u00020\t\u0012\u0006\u0010\n\u001a\u00020\u000b\u0012\u0006\u0010\f\u001a\u00020\r\u0012\u0006\u0010\u000e\u001a\u00020\u000f\u00a2\u0006\u0002\u0010\u0010J\u000e\u0010\u0014\u001a\u00020\u0015H\u0096@\u00a2\u0006\u0002\u0010\u0016J&\u0010\u0017\u001a\u00020\u00182\u0006\u0010\u0019\u001a\u00020\u001a2\u0006\u0010\u001b\u001a\u00020\u001c2\u0006\u0010\u001d\u001a\u00020\u001eH\u0082@\u00a2\u0006\u0002\u0010\u001fJ\u0016\u0010 \u001a\u00020\u00182\u0006\u0010!\u001a\u00020\u001aH\u0082@\u00a2\u0006\u0002\u0010\"R\u000e\u0010\f\u001a\u00020\rX\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u000bX\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u000e\u001a\u00020\u000fX\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\tX\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u0016\u0010\u0011\u001a\n \u0013*\u0004\u0018\u00010\u00120\u0012X\u0082\u0004\u00a2\u0006\u0002\n\u0000\u00a8\u0006$"}, d2 = {"Leco/emergi/embit/android/services/ChargingSessionWorker;", "Landroidx/work/CoroutineWorker;", "appContext", "Landroid/content/Context;", "workerParams", "Landroidx/work/WorkerParameters;", "batteryRepository", "Leco/emergi/embit/domain/repositories/IBatteryRepository;", "gridDataRepository", "Leco/emergi/embit/domain/repositories/IGridDataRepository;", "authRepository", "Leco/emergi/embit/domain/repositories/IAuthRepository;", "analyticsManager", "Leco/emergi/embit/android/analytics/AnalyticsManager;", "crashlyticsManager", "Leco/emergi/embit/android/analytics/CrashlyticsManager;", "(Landroid/content/Context;Landroidx/work/WorkerParameters;Leco/emergi/embit/domain/repositories/IBatteryRepository;Leco/emergi/embit/domain/repositories/IGridDataRepository;Leco/emergi/embit/domain/repositories/IAuthRepository;Leco/emergi/embit/android/analytics/AnalyticsManager;Leco/emergi/embit/android/analytics/CrashlyticsManager;)V", "prefs", "Landroid/content/SharedPreferences;", "kotlin.jvm.PlatformType", "doWork", "Landroidx/work/ListenableWorker$Result;", "(Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "endCurrentSession", "", "endReading", "Leco/emergi/embit/domain/models/BatteryReading;", "startTime", "", "startLevel", "", "(Leco/emergi/embit/domain/models/BatteryReading;JILkotlin/coroutines/Continuation;)Ljava/lang/Object;", "startNewSession", "reading", "(Leco/emergi/embit/domain/models/BatteryReading;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "Companion", "androidApp_devDebug"})
@androidx.hilt.work.HiltWorker()
public final class ChargingSessionWorker extends androidx.work.CoroutineWorker {
    @org.jetbrains.annotations.NotNull()
    private final eco.emergi.embit.domain.repositories.IBatteryRepository batteryRepository = null;
    @org.jetbrains.annotations.NotNull()
    private final eco.emergi.embit.domain.repositories.IGridDataRepository gridDataRepository = null;
    @org.jetbrains.annotations.NotNull()
    private final eco.emergi.embit.domain.repositories.IAuthRepository authRepository = null;
    @org.jetbrains.annotations.NotNull()
    private final eco.emergi.embit.android.analytics.AnalyticsManager analyticsManager = null;
    @org.jetbrains.annotations.NotNull()
    private final eco.emergi.embit.android.analytics.CrashlyticsManager crashlyticsManager = null;
    private final android.content.SharedPreferences prefs = null;
    @org.jetbrains.annotations.NotNull()
    public static final java.lang.String WORK_NAME = "charging_session_tracking";
    @org.jetbrains.annotations.NotNull()
    public static final java.lang.String TAG = "ChargingSession";
    @org.jetbrains.annotations.NotNull()
    private static final java.lang.String KEY_WAS_CHARGING = "was_charging";
    @org.jetbrains.annotations.NotNull()
    private static final java.lang.String KEY_SESSION_START_TIME = "session_start_time";
    @org.jetbrains.annotations.NotNull()
    private static final java.lang.String KEY_SESSION_START_LEVEL = "session_start_level";
    @org.jetbrains.annotations.NotNull()
    public static final eco.emergi.embit.android.services.ChargingSessionWorker.Companion Companion = null;
    
    @dagger.assisted.AssistedInject()
    public ChargingSessionWorker(@dagger.assisted.Assisted()
    @org.jetbrains.annotations.NotNull()
    android.content.Context appContext, @dagger.assisted.Assisted()
    @org.jetbrains.annotations.NotNull()
    androidx.work.WorkerParameters workerParams, @org.jetbrains.annotations.NotNull()
    eco.emergi.embit.domain.repositories.IBatteryRepository batteryRepository, @org.jetbrains.annotations.NotNull()
    eco.emergi.embit.domain.repositories.IGridDataRepository gridDataRepository, @org.jetbrains.annotations.NotNull()
    eco.emergi.embit.domain.repositories.IAuthRepository authRepository, @org.jetbrains.annotations.NotNull()
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
    
    /**
     * Start a new charging session
     */
    private final java.lang.Object startNewSession(eco.emergi.embit.domain.models.BatteryReading reading, kotlin.coroutines.Continuation<? super kotlin.Unit> $completion) {
        return null;
    }
    
    /**
     * End the current charging session and save to Firestore
     */
    private final java.lang.Object endCurrentSession(eco.emergi.embit.domain.models.BatteryReading endReading, long startTime, int startLevel, kotlin.coroutines.Continuation<? super kotlin.Unit> $completion) {
        return null;
    }
    
    @kotlin.Metadata(mv = {1, 9, 0}, k = 1, xi = 48, d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0005\b\u0086\u0003\u0018\u00002\u00020\u0001B\u0007\b\u0002\u00a2\u0006\u0002\u0010\u0002R\u000e\u0010\u0003\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0005\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000\u00a8\u0006\t"}, d2 = {"Leco/emergi/embit/android/services/ChargingSessionWorker$Companion;", "", "()V", "KEY_SESSION_START_LEVEL", "", "KEY_SESSION_START_TIME", "KEY_WAS_CHARGING", "TAG", "WORK_NAME", "androidApp_devDebug"})
    public static final class Companion {
        
        private Companion() {
            super();
        }
    }
}