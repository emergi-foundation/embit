package eco.emergi.embit.android.services;

import android.content.Context;
import androidx.hilt.work.HiltWorker;
import androidx.work.CoroutineWorker;
import androidx.work.WorkerParameters;
import dagger.assisted.Assisted;
import dagger.assisted.AssistedInject;
import eco.emergi.embit.android.analytics.AnalyticsManager;
import eco.emergi.embit.android.analytics.CrashlyticsManager;
import eco.emergi.embit.domain.usecases.analytics.AggregateHealthMetricsUseCase;

/**
 * WorkManager worker for aggregating daily battery health metrics.
 *
 * This worker runs daily to:
 * 1. Aggregate yesterday's battery readings
 * 2. Calculate daily metrics (avg health, temperature, charging cycles, etc.)
 * 3. Save aggregated data to Firestore for analytics and research
 *
 * Scheduled to run once per day, preferably during off-peak hours.
 */
@kotlin.Metadata(mv = {1, 9, 0}, k = 1, xi = 48, d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0007\u0018\u0000 \u00102\u00020\u0001:\u0001\u0010B3\b\u0007\u0012\b\b\u0001\u0010\u0002\u001a\u00020\u0003\u0012\b\b\u0001\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\u0006\u0010\b\u001a\u00020\t\u0012\u0006\u0010\n\u001a\u00020\u000b\u00a2\u0006\u0002\u0010\fJ\u000e\u0010\r\u001a\u00020\u000eH\u0096@\u00a2\u0006\u0002\u0010\u000fR\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\tX\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u000bX\u0082\u0004\u00a2\u0006\u0002\n\u0000\u00a8\u0006\u0011"}, d2 = {"Leco/emergi/embit/android/services/HealthMetricsAggregationWorker;", "Landroidx/work/CoroutineWorker;", "context", "Landroid/content/Context;", "params", "Landroidx/work/WorkerParameters;", "aggregateHealthMetricsUseCase", "Leco/emergi/embit/domain/usecases/analytics/AggregateHealthMetricsUseCase;", "analyticsManager", "Leco/emergi/embit/android/analytics/AnalyticsManager;", "crashlyticsManager", "Leco/emergi/embit/android/analytics/CrashlyticsManager;", "(Landroid/content/Context;Landroidx/work/WorkerParameters;Leco/emergi/embit/domain/usecases/analytics/AggregateHealthMetricsUseCase;Leco/emergi/embit/android/analytics/AnalyticsManager;Leco/emergi/embit/android/analytics/CrashlyticsManager;)V", "doWork", "Landroidx/work/ListenableWorker$Result;", "(Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "Companion", "androidApp_devDebug"})
@androidx.hilt.work.HiltWorker()
public final class HealthMetricsAggregationWorker extends androidx.work.CoroutineWorker {
    @org.jetbrains.annotations.NotNull()
    private final eco.emergi.embit.domain.usecases.analytics.AggregateHealthMetricsUseCase aggregateHealthMetricsUseCase = null;
    @org.jetbrains.annotations.NotNull()
    private final eco.emergi.embit.android.analytics.AnalyticsManager analyticsManager = null;
    @org.jetbrains.annotations.NotNull()
    private final eco.emergi.embit.android.analytics.CrashlyticsManager crashlyticsManager = null;
    @org.jetbrains.annotations.NotNull()
    public static final java.lang.String WORK_NAME = "health_metrics_aggregation";
    @org.jetbrains.annotations.NotNull()
    public static final java.lang.String TAG = "HealthMetricsAggregation";
    private static final int MAX_RETRY_ATTEMPTS = 3;
    @org.jetbrains.annotations.NotNull()
    public static final eco.emergi.embit.android.services.HealthMetricsAggregationWorker.Companion Companion = null;
    
    @dagger.assisted.AssistedInject()
    public HealthMetricsAggregationWorker(@dagger.assisted.Assisted()
    @org.jetbrains.annotations.NotNull()
    android.content.Context context, @dagger.assisted.Assisted()
    @org.jetbrains.annotations.NotNull()
    androidx.work.WorkerParameters params, @org.jetbrains.annotations.NotNull()
    eco.emergi.embit.domain.usecases.analytics.AggregateHealthMetricsUseCase aggregateHealthMetricsUseCase, @org.jetbrains.annotations.NotNull()
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
    
    @kotlin.Metadata(mv = {1, 9, 0}, k = 1, xi = 48, d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\u0007\b\u0002\u00a2\u0006\u0002\u0010\u0002R\u000e\u0010\u0003\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0005\u001a\u00020\u0006X\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0006X\u0086T\u00a2\u0006\u0002\n\u0000\u00a8\u0006\b"}, d2 = {"Leco/emergi/embit/android/services/HealthMetricsAggregationWorker$Companion;", "", "()V", "MAX_RETRY_ATTEMPTS", "", "TAG", "", "WORK_NAME", "androidApp_devDebug"})
    public static final class Companion {
        
        private Companion() {
            super();
        }
    }
}