package eco.emergi.embit.android.di;

import android.content.Context;
import dagger.internal.DaggerGenerated;
import dagger.internal.Factory;
import dagger.internal.Preconditions;
import dagger.internal.QualifierMetadata;
import dagger.internal.ScopeMetadata;
import eco.emergi.embit.android.analytics.CrashlyticsManager;
import javax.annotation.processing.Generated;
import javax.inject.Provider;

@ScopeMetadata("javax.inject.Singleton")
@QualifierMetadata("dagger.hilt.android.qualifiers.ApplicationContext")
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
public final class AnalyticsModule_ProvideCrashlyticsManagerFactory implements Factory<CrashlyticsManager> {
  private final Provider<Context> contextProvider;

  public AnalyticsModule_ProvideCrashlyticsManagerFactory(Provider<Context> contextProvider) {
    this.contextProvider = contextProvider;
  }

  @Override
  public CrashlyticsManager get() {
    return provideCrashlyticsManager(contextProvider.get());
  }

  public static AnalyticsModule_ProvideCrashlyticsManagerFactory create(
      Provider<Context> contextProvider) {
    return new AnalyticsModule_ProvideCrashlyticsManagerFactory(contextProvider);
  }

  public static CrashlyticsManager provideCrashlyticsManager(Context context) {
    return Preconditions.checkNotNullFromProvides(AnalyticsModule.INSTANCE.provideCrashlyticsManager(context));
  }
}
