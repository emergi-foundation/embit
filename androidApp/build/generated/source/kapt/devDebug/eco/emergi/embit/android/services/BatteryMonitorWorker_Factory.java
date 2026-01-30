package eco.emergi.embit.android.services;

import android.content.Context;
import androidx.work.WorkerParameters;
import dagger.internal.DaggerGenerated;
import dagger.internal.QualifierMetadata;
import dagger.internal.ScopeMetadata;
import eco.emergi.embit.android.analytics.AnalyticsManager;
import eco.emergi.embit.android.analytics.CrashlyticsManager;
import eco.emergi.embit.domain.usecases.MonitorBatteryUseCase;
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
public final class BatteryMonitorWorker_Factory {
  private final Provider<MonitorBatteryUseCase> monitorBatteryUseCaseProvider;

  private final Provider<BatteryNotificationHelper> notificationHelperProvider;

  private final Provider<AnalyticsManager> analyticsManagerProvider;

  private final Provider<CrashlyticsManager> crashlyticsManagerProvider;

  public BatteryMonitorWorker_Factory(Provider<MonitorBatteryUseCase> monitorBatteryUseCaseProvider,
      Provider<BatteryNotificationHelper> notificationHelperProvider,
      Provider<AnalyticsManager> analyticsManagerProvider,
      Provider<CrashlyticsManager> crashlyticsManagerProvider) {
    this.monitorBatteryUseCaseProvider = monitorBatteryUseCaseProvider;
    this.notificationHelperProvider = notificationHelperProvider;
    this.analyticsManagerProvider = analyticsManagerProvider;
    this.crashlyticsManagerProvider = crashlyticsManagerProvider;
  }

  public BatteryMonitorWorker get(Context appContext, WorkerParameters workerParams) {
    return newInstance(appContext, workerParams, monitorBatteryUseCaseProvider.get(), notificationHelperProvider.get(), analyticsManagerProvider.get(), crashlyticsManagerProvider.get());
  }

  public static BatteryMonitorWorker_Factory create(
      Provider<MonitorBatteryUseCase> monitorBatteryUseCaseProvider,
      Provider<BatteryNotificationHelper> notificationHelperProvider,
      Provider<AnalyticsManager> analyticsManagerProvider,
      Provider<CrashlyticsManager> crashlyticsManagerProvider) {
    return new BatteryMonitorWorker_Factory(monitorBatteryUseCaseProvider, notificationHelperProvider, analyticsManagerProvider, crashlyticsManagerProvider);
  }

  public static BatteryMonitorWorker newInstance(Context appContext, WorkerParameters workerParams,
      MonitorBatteryUseCase monitorBatteryUseCase, BatteryNotificationHelper notificationHelper,
      AnalyticsManager analyticsManager, CrashlyticsManager crashlyticsManager) {
    return new BatteryMonitorWorker(appContext, workerParams, monitorBatteryUseCase, notificationHelper, analyticsManager, crashlyticsManager);
  }
}
