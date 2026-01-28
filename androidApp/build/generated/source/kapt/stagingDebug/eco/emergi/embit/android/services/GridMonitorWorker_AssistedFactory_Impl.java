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
public final class GridMonitorWorker_AssistedFactory_Impl implements GridMonitorWorker_AssistedFactory {
  private final GridMonitorWorker_Factory delegateFactory;

  GridMonitorWorker_AssistedFactory_Impl(GridMonitorWorker_Factory delegateFactory) {
    this.delegateFactory = delegateFactory;
  }

  @Override
  public GridMonitorWorker create(Context arg0, WorkerParameters arg1) {
    return delegateFactory.get(arg0, arg1);
  }

  public static Provider<GridMonitorWorker_AssistedFactory> create(
      GridMonitorWorker_Factory delegateFactory) {
    return InstanceFactory.create(new GridMonitorWorker_AssistedFactory_Impl(delegateFactory));
  }

  public static dagger.internal.Provider<GridMonitorWorker_AssistedFactory> createFactoryProvider(
      GridMonitorWorker_Factory delegateFactory) {
    return InstanceFactory.create(new GridMonitorWorker_AssistedFactory_Impl(delegateFactory));
  }
}
