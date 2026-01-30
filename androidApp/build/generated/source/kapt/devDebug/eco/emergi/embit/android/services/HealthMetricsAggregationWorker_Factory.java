package eco.emergi.embit.android.services;

import android.content.Context;
import androidx.work.WorkerParameters;
import dagger.internal.DaggerGenerated;
import dagger.internal.QualifierMetadata;
import dagger.internal.ScopeMetadata;
import eco.emergi.embit.android.analytics.AnalyticsManager;
import eco.emergi.embit.android.analytics.CrashlyticsManager;
import eco.emergi.embit.domain.usecases.analytics.AggregateHealthMetricsUseCase;
import javax.annotation.processing.Generated;
import javax.inject.Provider;

@ScopeMetadata
@QualifierMetadata
@DaggerGenerated
@Generated(
    value = "dagger.internal.codegen.ComponentProcessor",
    comments = "https://dagger.dev"
)
@SuppressWarnings({
    "unchecked",
    "rawtypes",
    "KotlinInternal",
    "KotlinInternalInJava",
    "cast",
    "deprecation"
})
public final class HealthMetricsAggregationWorker_Factory {
  private final Provider<AggregateHealthMetricsUseCase> aggregateHealthMetricsUseCaseProvider;

  private final Provider<AnalyticsManager> analyticsManagerProvider;

  private final Provider<CrashlyticsManager> crashlyticsManagerProvider;

  public HealthMetricsAggregationWorker_Factory(
      Provider<AggregateHealthMetricsUseCase> aggregateHealthMetricsUseCaseProvider,
      Provider<AnalyticsManager> analyticsManagerProvider,
      Provider<CrashlyticsManager> crashlyticsManagerProvider) {
    this.aggregateHealthMetricsUseCaseProvider = aggregateHealthMetricsUseCaseProvider;
    this.analyticsManagerProvider = analyticsManagerProvider;
    this.crashlyticsManagerProvider = crashlyticsManagerProvider;
  }

  public HealthMetricsAggregationWorker get(Context context, WorkerParameters params) {
    return newInstance(context, params, aggregateHealthMetricsUseCaseProvider.get(), analyticsManagerProvider.get(), crashlyticsManagerProvider.get());
  }

  public static HealthMetricsAggregationWorker_Factory create(
      Provider<AggregateHealthMetricsUseCase> aggregateHealthMetricsUseCaseProvider,
      Provider<AnalyticsManager> analyticsManagerProvider,
      Provider<CrashlyticsManager> crashlyticsManagerProvider) {
    return new HealthMetricsAggregationWorker_Factory(aggregateHealthMetricsUseCaseProvider, analyticsManagerProvider, crashlyticsManagerProvider);
  }

  public static HealthMetricsAggregationWorker newInstance(Context context, WorkerParameters params,
      AggregateHealthMetricsUseCase aggregateHealthMetricsUseCase,
      AnalyticsManager analyticsManager, CrashlyticsManager crashlyticsManager) {
    return new HealthMetricsAggregationWorker(context, params, aggregateHealthMetricsUseCase, analyticsManager, crashlyticsManager);
  }
}
