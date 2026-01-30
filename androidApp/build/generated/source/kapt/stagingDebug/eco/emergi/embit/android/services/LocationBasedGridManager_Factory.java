package eco.emergi.embit.android.services;

import android.content.Context;
import dagger.internal.DaggerGenerated;
import dagger.internal.Factory;
import dagger.internal.QualifierMetadata;
import dagger.internal.ScopeMetadata;
import eco.emergi.embit.domain.repositories.IUserPreferencesRepository;
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
public final class LocationBasedGridManager_Factory implements Factory<LocationBasedGridManager> {
  private final Provider<Context> contextProvider;

  private final Provider<IUserPreferencesRepository> userPreferencesRepositoryProvider;

  public LocationBasedGridManager_Factory(Provider<Context> contextProvider,
      Provider<IUserPreferencesRepository> userPreferencesRepositoryProvider) {
    this.contextProvider = contextProvider;
    this.userPreferencesRepositoryProvider = userPreferencesRepositoryProvider;
  }

  @Override
  public LocationBasedGridManager get() {
    return newInstance(contextProvider.get(), userPreferencesRepositoryProvider.get());
  }

  public static LocationBasedGridManager_Factory create(Provider<Context> contextProvider,
      Provider<IUserPreferencesRepository> userPreferencesRepositoryProvider) {
    return new LocationBasedGridManager_Factory(contextProvider, userPreferencesRepositoryProvider);
  }

  public static LocationBasedGridManager newInstance(Context context,
      IUserPreferencesRepository userPreferencesRepository) {
    return new LocationBasedGridManager(context, userPreferencesRepository);
  }
}
