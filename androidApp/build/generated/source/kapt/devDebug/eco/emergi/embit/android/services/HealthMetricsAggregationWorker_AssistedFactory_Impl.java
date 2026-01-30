package eco.emergi.embit.android.services;

import android.content.Context;
import androidx.work.WorkerParameters;
import dagger.internal.DaggerGenerated;
import dagger.internal.InstanceFactory;
import javax.annotation.processing.Generated;
import javax.inject.Provider;

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
public final class HealthMetricsAggregationWorker_AssistedFactory_Impl implements HealthMetricsAggregationWorker_AssistedFactory {
  private final HealthMetricsAggregationWorker_Factory delegateFactory;

  HealthMetricsAggregationWorker_AssistedFactory_Impl(
      HealthMetricsAggregationWorker_Factory delegateFactory) {
    this.delegateFactory = delegateFactory;
  }

  @Override
  public HealthMetricsAggregationWorker create(Context arg0, WorkerParameters arg1) {
    return delegateFactory.get(arg0, arg1);
  }

  public static Provider<HealthMetricsAggregationWorker_AssistedFactory> create(
      HealthMetricsAggregationWorker_Factory delegateFactory) {
    return InstanceFactory.create(new HealthMetricsAggregationWorker_AssistedFactory_Impl(delegateFactory));
  }

  public static dagger.internal.Provider<HealthMetricsAggregationWorker_AssistedFactory> createFactoryProvider(
      HealthMetricsAggregationWorker_Factory delegateFactory) {
    return InstanceFactory.create(new HealthMetricsAggregationWorker_AssistedFactory_Impl(delegateFactory));
  }
}
