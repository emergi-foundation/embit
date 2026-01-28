package eco.emergi.embit.android;

import dagger.MembersInjector;
import dagger.internal.DaggerGenerated;
import dagger.internal.InjectedFieldSignature;
import dagger.internal.QualifierMetadata;
import eco.emergi.embit.android.analytics.AnalyticsManager;
import eco.emergi.embit.android.analytics.CrashlyticsManager;
import eco.emergi.embit.android.analytics.RemoteConfigManager;
import eco.emergi.embit.android.services.AppStateManager;
import eco.emergi.embit.android.services.LocationBasedGridManager;
import javax.annotation.processing.Generated;
import javax.inject.Provider;

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
public final class EmbitApplication_MembersInjector implements MembersInjector<EmbitApplication> {
  private final Provider<AnalyticsManager> analyticsManagerProvider;

  private final Provider<CrashlyticsManager> crashlyticsManagerProvider;

  private final Provider<RemoteConfigManager> remoteConfigManagerProvider;

  private final Provider<AppStateManager> appStateManagerProvider;

  private final Provider<LocationBasedGridManager> locationBasedGridManagerProvider;

  public EmbitApplication_MembersInjector(Provider<AnalyticsManager> analyticsManagerProvider,
      Provider<CrashlyticsManager> crashlyticsManagerProvider,
      Provider<RemoteConfigManager> remoteConfigManagerProvider,
      Provider<AppStateManager> appStateManagerProvider,
      Provider<LocationBasedGridManager> locationBasedGridManagerProvider) {
    this.analyticsManagerProvider = analyticsManagerProvider;
    this.crashlyticsManagerProvider = crashlyticsManagerProvider;
    this.remoteConfigManagerProvider = remoteConfigManagerProvider;
    this.appStateManagerProvider = appStateManagerProvider;
    this.locationBasedGridManagerProvider = locationBasedGridManagerProvider;
  }

  public static MembersInjector<EmbitApplication> create(
      Provider<AnalyticsManager> analyticsManagerProvider,
      Provider<CrashlyticsManager> crashlyticsManagerProvider,
      Provider<RemoteConfigManager> remoteConfigManagerProvider,
      Provider<AppStateManager> appStateManagerProvider,
      Provider<LocationBasedGridManager> locationBasedGridManagerProvider) {
    return new EmbitApplication_MembersInjector(analyticsManagerProvider, crashlyticsManagerProvider, remoteConfigManagerProvider, appStateManagerProvider, locationBasedGridManagerProvider);
  }

  @Override
  public void injectMembers(EmbitApplication instance) {
    injectAnalyticsManager(instance, analyticsManagerProvider.get());
    injectCrashlyticsManager(instance, crashlyticsManagerProvider.get());
    injectRemoteConfigManager(instance, remoteConfigManagerProvider.get());
    injectAppStateManager(instance, appStateManagerProvider.get());
    injectLocationBasedGridManager(instance, locationBasedGridManagerProvider.get());
  }

  @InjectedFieldSignature("eco.emergi.embit.android.EmbitApplication.analyticsManager")
  public static void injectAnalyticsManager(EmbitApplication instance,
      AnalyticsManager analyticsManager) {
    instance.analyticsManager = analyticsManager;
  }

  @InjectedFieldSignature("eco.emergi.embit.android.EmbitApplication.crashlyticsManager")
  public static void injectCrashlyticsManager(EmbitApplication instance,
      CrashlyticsManager crashlyticsManager) {
    instance.crashlyticsManager = crashlyticsManager;
  }

  @InjectedFieldSignature("eco.emergi.embit.android.EmbitApplication.remoteConfigManager")
  public static void injectRemoteConfigManager(EmbitApplication instance,
      RemoteConfigManager remoteConfigManager) {
    instance.remoteConfigManager = remoteConfigManager;
  }

  @InjectedFieldSignature("eco.emergi.embit.android.EmbitApplication.appStateManager")
  public static void injectAppStateManager(EmbitApplication instance,
      AppStateManager appStateManager) {
    instance.appStateManager = appStateManager;
  }

  @InjectedFieldSignature("eco.emergi.embit.android.EmbitApplication.locationBasedGridManager")
  public static void injectLocationBasedGridManager(EmbitApplication instance,
      LocationBasedGridManager locationBasedGridManager) {
    instance.locationBasedGridManager = locationBasedGridManager;
  }
}
