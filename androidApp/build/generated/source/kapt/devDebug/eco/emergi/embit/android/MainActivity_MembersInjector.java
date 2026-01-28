package eco.emergi.embit.android;

import dagger.MembersInjector;
import dagger.internal.DaggerGenerated;
import dagger.internal.InjectedFieldSignature;
import dagger.internal.QualifierMetadata;
import eco.emergi.embit.android.analytics.AnalyticsManager;
import eco.emergi.embit.android.analytics.RemoteConfigManager;
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
public final class MainActivity_MembersInjector implements MembersInjector<MainActivity> {
  private final Provider<AnalyticsManager> analyticsManagerProvider;

  private final Provider<RemoteConfigManager> remoteConfigManagerProvider;

  public MainActivity_MembersInjector(Provider<AnalyticsManager> analyticsManagerProvider,
      Provider<RemoteConfigManager> remoteConfigManagerProvider) {
    this.analyticsManagerProvider = analyticsManagerProvider;
    this.remoteConfigManagerProvider = remoteConfigManagerProvider;
  }

  public static MembersInjector<MainActivity> create(
      Provider<AnalyticsManager> analyticsManagerProvider,
      Provider<RemoteConfigManager> remoteConfigManagerProvider) {
    return new MainActivity_MembersInjector(analyticsManagerProvider, remoteConfigManagerProvider);
  }

  @Override
  public void injectMembers(MainActivity instance) {
    injectAnalyticsManager(instance, analyticsManagerProvider.get());
    injectRemoteConfigManager(instance, remoteConfigManagerProvider.get());
  }

  @InjectedFieldSignature("eco.emergi.embit.android.MainActivity.analyticsManager")
  public static void injectAnalyticsManager(MainActivity instance,
      AnalyticsManager analyticsManager) {
    instance.analyticsManager = analyticsManager;
  }

  @InjectedFieldSignature("eco.emergi.embit.android.MainActivity.remoteConfigManager")
  public static void injectRemoteConfigManager(MainActivity instance,
      RemoteConfigManager remoteConfigManager) {
    instance.remoteConfigManager = remoteConfigManager;
  }
}
