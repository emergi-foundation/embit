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
public final class DataSyncWorker_AssistedFactory_Impl implements DataSyncWorker_AssistedFactory {
  private final DataSyncWorker_Factory delegateFactory;

  DataSyncWorker_AssistedFactory_Impl(DataSyncWorker_Factory delegateFactory) {
    this.delegateFactory = delegateFactory;
  }

  @Override
  public DataSyncWorker create(Context arg0, WorkerParameters arg1) {
    return delegateFactory.get(arg0, arg1);
  }

  public static Provider<DataSyncWorker_AssistedFactory> create(
      DataSyncWorker_Factory delegateFactory) {
    return InstanceFactory.create(new DataSyncWorker_AssistedFactory_Impl(delegateFactory));
  }

  public static dagger.internal.Provider<DataSyncWorker_AssistedFactory> createFactoryProvider(
      DataSyncWorker_Factory delegateFactory) {
    return InstanceFactory.create(new DataSyncWorker_AssistedFactory_Impl(delegateFactory));
  }
}
