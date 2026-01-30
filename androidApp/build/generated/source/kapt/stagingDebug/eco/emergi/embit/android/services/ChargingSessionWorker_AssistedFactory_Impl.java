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
public final class ChargingSessionWorker_AssistedFactory_Impl implements ChargingSessionWorker_AssistedFactory {
  private final ChargingSessionWorker_Factory delegateFactory;

  ChargingSessionWorker_AssistedFactory_Impl(ChargingSessionWorker_Factory delegateFactory) {
    this.delegateFactory = delegateFactory;
  }

  @Override
  public ChargingSessionWorker create(Context arg0, WorkerParameters arg1) {
    return delegateFactory.get(arg0, arg1);
  }

  public static Provider<ChargingSessionWorker_AssistedFactory> create(
      ChargingSessionWorker_Factory delegateFactory) {
    return InstanceFactory.create(new ChargingSessionWorker_AssistedFactory_Impl(delegateFactory));
  }

  public static dagger.internal.Provider<ChargingSessionWorker_AssistedFactory> createFactoryProvider(
      ChargingSessionWorker_Factory delegateFactory) {
    return InstanceFactory.create(new ChargingSessionWorker_AssistedFactory_Impl(delegateFactory));
  }
}
