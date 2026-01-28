package eco.emergi.embit.android.services;

import android.content.Context;
import dagger.internal.DaggerGenerated;
import dagger.internal.Factory;
import dagger.internal.QualifierMetadata;
import dagger.internal.ScopeMetadata;
import eco.emergi.embit.domain.usecases.auth.ObserveAuthStateUseCase;
import eco.emergi.embit.domain.usecases.sync.BidirectionalSyncUseCase;
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
public final class AppStateManager_Factory implements Factory<AppStateManager> {
  private final Provider<Context> contextProvider;

  private final Provider<ObserveAuthStateUseCase> observeAuthStateUseCaseProvider;

  private final Provider<BidirectionalSyncUseCase> bidirectionalSyncUseCaseProvider;

  public AppStateManager_Factory(Provider<Context> contextProvider,
      Provider<ObserveAuthStateUseCase> observeAuthStateUseCaseProvider,
      Provider<BidirectionalSyncUseCase> bidirectionalSyncUseCaseProvider) {
    this.contextProvider = contextProvider;
    this.observeAuthStateUseCaseProvider = observeAuthStateUseCaseProvider;
    this.bidirectionalSyncUseCaseProvider = bidirectionalSyncUseCaseProvider;
  }

  @Override
  public AppStateManager get() {
    return newInstance(contextProvider.get(), observeAuthStateUseCaseProvider.get(), bidirectionalSyncUseCaseProvider.get());
  }

  public static AppStateManager_Factory create(Provider<Context> contextProvider,
      Provider<ObserveAuthStateUseCase> observeAuthStateUseCaseProvider,
      Provider<BidirectionalSyncUseCase> bidirectionalSyncUseCaseProvider) {
    return new AppStateManager_Factory(contextProvider, observeAuthStateUseCaseProvider, bidirectionalSyncUseCaseProvider);
  }

  public static AppStateManager newInstance(Context context,
      ObserveAuthStateUseCase observeAuthStateUseCase,
      BidirectionalSyncUseCase bidirectionalSyncUseCase) {
    return new AppStateManager(context, observeAuthStateUseCase, bidirectionalSyncUseCase);
  }
}
