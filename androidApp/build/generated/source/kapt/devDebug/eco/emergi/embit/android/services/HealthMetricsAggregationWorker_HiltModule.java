package eco.emergi.embit.android.services;

import androidx.hilt.work.WorkerAssistedFactory;
import androidx.work.ListenableWorker;
import dagger.Binds;
import dagger.Module;
import dagger.hilt.InstallIn;
import dagger.hilt.codegen.OriginatingElement;
import dagger.hilt.components.SingletonComponent;
import dagger.multibindings.IntoMap;
import dagger.multibindings.StringKey;
import javax.annotation.processing.Generated;

@Generated("androidx.hilt.AndroidXHiltProcessor")
@Module
@InstallIn(SingletonComponent.class)
@OriginatingElement(
    topLevelClass = HealthMetricsAggregationWorker.class
)
public interface HealthMetricsAggregationWorker_HiltModule {
  @Binds
  @IntoMap
  @StringKey("eco.emergi.embit.android.services.HealthMetricsAggregationWorker")
  WorkerAssistedFactory<? extends ListenableWorker> bind(
      HealthMetricsAggregationWorker_AssistedFactory factory);
}
