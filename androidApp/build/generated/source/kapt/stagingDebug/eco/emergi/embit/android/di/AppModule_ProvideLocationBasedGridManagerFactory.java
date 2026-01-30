package eco.emergi.embit.android.di;

import android.content.Context;
import dagger.internal.DaggerGenerated;
import dagger.internal.Factory;
import dagger.internal.Preconditions;
import dagger.internal.QualifierMetadata;
import dagger.internal.ScopeMetadata;
import eco.emergi.embit.android.services.LocationBasedGridManager;
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
public final class AppModule_ProvideLocationBasedGridManagerFactory implements Factory<LocationBasedGridManager> {
  private final Provider<Context> contextProvider;

  public AppModule_ProvideLocationBasedGridManagerFactory(Provider<Context> contextProvider) {
    this.contextProvider = contextProvider;
  }

  @Override
  public LocationBasedGridManager get() {
    return provideLocationBasedGridManager(contextProvider.get());
  }

  public static AppModule_ProvideLocationBasedGridManagerFactory create(
      Provider<Context> contextProvider) {
    return new AppModule_ProvideLocationBasedGridManagerFactory(contextProvider);
  }

  public static LocationBasedGridManager provideLocationBasedGridManager(Context context) {
    return Preconditions.checkNotNullFromProvides(AppModule.INSTANCE.provideLocationBasedGridManager(context));
  }
}
