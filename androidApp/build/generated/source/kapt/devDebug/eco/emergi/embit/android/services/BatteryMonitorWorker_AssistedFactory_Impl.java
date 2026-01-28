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
public final class BatteryMonitorWorker_AssistedFactory_Impl implements BatteryMonitorWorker_AssistedFactory {
  private final BatteryMonitorWorker_Factory delegateFactory;

  BatteryMonitorWorker_AssistedFactory_Impl(BatteryMonitorWorker_Factory delegateFactory) {
    this.delegateFactory = delegateFactory;
  }

  @Override
  public BatteryMonitorWorker create(Context arg0, WorkerParameters arg1) {
    return delegateFactory.get(arg0, arg1);
  }

  public static Provider<BatteryMonitorWorker_AssistedFactory> create(
      BatteryMonitorWorker_Factory delegateFactory) {
    return InstanceFactory.create(new BatteryMonitorWorker_AssistedFactory_Impl(delegateFactory));
  }

  public static dagger.internal.Provider<BatteryMonitorWorker_AssistedFactory> createFactoryProvider(
      BatteryMonitorWorker_Factory delegateFactory) {
    return InstanceFactory.create(new BatteryMonitorWorker_AssistedFactory_Impl(delegateFactory));
  }
}
