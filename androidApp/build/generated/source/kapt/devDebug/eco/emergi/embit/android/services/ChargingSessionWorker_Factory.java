package eco.emergi.embit.android.services;

import android.content.Context;
import androidx.work.WorkerParameters;
import dagger.internal.DaggerGenerated;
import dagger.internal.QualifierMetadata;
import dagger.internal.ScopeMetadata;
import eco.emergi.embit.android.analytics.AnalyticsManager;
import eco.emergi.embit.android.analytics.CrashlyticsManager;
import eco.emergi.embit.domain.repositories.IAuthRepository;
import eco.emergi.embit.domain.repositories.IBatteryRepository;
import eco.emergi.embit.domain.repositories.IGridDataRepository;
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
public final class ChargingSessionWorker_Factory {
  private final Provider<IBatteryRepository> batteryRepositoryProvider;

  private final Provider<IGridDataRepository> gridDataRepositoryProvider;

  private final Provider<IAuthRepository> authRepositoryProvider;

  private final Provider<AnalyticsManager> analyticsManagerProvider;

  private final Provider<CrashlyticsManager> crashlyticsManagerProvider;

  public ChargingSessionWorker_Factory(Provider<IBatteryRepository> batteryRepositoryProvider,
      Provider<IGridDataRepository> gridDataRepositoryProvider,
      Provider<IAuthRepository> authRepositoryProvider,
      Provider<AnalyticsManager> analyticsManagerProvider,
      Provider<CrashlyticsManager> crashlyticsManagerProvider) {
    this.batteryRepositoryProvider = batteryRepositoryProvider;
    this.gridDataRepositoryProvider = gridDataRepositoryProvider;
    this.authRepositoryProvider = authRepositoryProvider;
    this.analyticsManagerProvider = analyticsManagerProvider;
    this.crashlyticsManagerProvider = crashlyticsManagerProvider;
  }

  public ChargingSessionWorker get(Context appContext, WorkerParameters workerParams) {
    return newInstance(appContext, workerParams, batteryRepositoryProvider.get(), gridDataRepositoryProvider.get(), authRepositoryProvider.get(), analyticsManagerProvider.get(), crashlyticsManagerProvider.get());
  }

  public static ChargingSessionWorker_Factory create(
      Provider<IBatteryRepository> batteryRepositoryProvider,
      Provider<IGridDataRepository> gridDataRepositoryProvider,
      Provider<IAuthRepository> authRepositoryProvider,
      Provider<AnalyticsManager> analyticsManagerProvider,
      Provider<CrashlyticsManager> crashlyticsManagerProvider) {
    return new ChargingSessionWorker_Factory(batteryRepositoryProvider, gridDataRepositoryProvider, authRepositoryProvider, analyticsManagerProvider, crashlyticsManagerProvider);
  }

  public static ChargingSessionWorker newInstance(Context appContext, WorkerParameters workerParams,
      IBatteryRepository batteryRepository, IGridDataRepository gridDataRepository,
      IAuthRepository authRepository, AnalyticsManager analyticsManager,
      CrashlyticsManager crashlyticsManager) {
    return new ChargingSessionWorker(appContext, workerParams, batteryRepository, gridDataRepository, authRepository, analyticsManager, crashlyticsManager);
  }
}
