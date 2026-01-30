package eco.emergi.embit.android.di;

import android.content.Context;
import dagger.internal.DaggerGenerated;
import dagger.internal.Factory;
import dagger.internal.Preconditions;
import dagger.internal.QualifierMetadata;
import dagger.internal.ScopeMetadata;
import eco.emergi.embit.android.analytics.AnalyticsManager;
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
public final class AnalyticsModule_ProvideAnalyticsManagerFactory implements Factory<AnalyticsManager> {
  private final Provider<Context> contextProvider;

  public AnalyticsModule_ProvideAnalyticsManagerFactory(Provider<Context> contextProvider) {
    this.contextProvider = contextProvider;
  }

  @Override
  public AnalyticsManager get() {
    return provideAnalyticsManager(contextProvider.get());
  }

  public static AnalyticsModule_ProvideAnalyticsManagerFactory create(
      Provider<Context> contextProvider) {
    return new AnalyticsModule_ProvideAnalyticsManagerFactory(contextProvider);
  }

  public static AnalyticsManager provideAnalyticsManager(Context context) {
    return Preconditions.checkNotNullFromProvides(AnalyticsModule.INSTANCE.provideAnalyticsManager(context));
  }
}
