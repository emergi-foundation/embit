package eco.emergi.embit.android.di;

import android.content.Context;
import dagger.internal.DaggerGenerated;
import dagger.internal.Factory;
import dagger.internal.Preconditions;
import dagger.internal.QualifierMetadata;
import dagger.internal.ScopeMetadata;
import eco.emergi.embit.android.services.AppStateManager;
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
public final class AppModule_ProvideAppStateManagerFactory implements Factory<AppStateManager> {
  private final Provider<Context> contextProvider;

  public AppModule_ProvideAppStateManagerFactory(Provider<Context> contextProvider) {
    this.contextProvider = contextProvider;
  }

  @Override
  public AppStateManager get() {
    return provideAppStateManager(contextProvider.get());
  }

  public static AppModule_ProvideAppStateManagerFactory create(Provider<Context> contextProvider) {
    return new AppModule_ProvideAppStateManagerFactory(contextProvider);
  }

  public static AppStateManager provideAppStateManager(Context context) {
    return Preconditions.checkNotNullFromProvides(AppModule.INSTANCE.provideAppStateManager(context));
  }
}
