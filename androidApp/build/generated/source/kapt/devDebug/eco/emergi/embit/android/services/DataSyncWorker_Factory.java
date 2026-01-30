package eco.emergi.embit.android.services;

import android.content.Context;
import androidx.work.WorkerParameters;
import dagger.internal.DaggerGenerated;
import dagger.internal.QualifierMetadata;
import dagger.internal.ScopeMetadata;
import eco.emergi.embit.android.analytics.AnalyticsManager;
import eco.emergi.embit.android.analytics.CrashlyticsManager;
import eco.emergi.embit.domain.repositories.IAuthRepository;
import eco.emergi.embit.domain.usecases.sync.BidirectionalSyncUseCase;
import eco.emergi.embit.domain.usecases.sync.GetSyncSettingsUseCase;
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
public final class DataSyncWorker_Factory {
  private final Provider<BidirectionalSyncUseCase> bidirectionalSyncUseCaseProvider;

  private final Provider<GetSyncSettingsUseCase> getSyncSettingsUseCaseProvider;

  private final Provider<IAuthRepository> authRepositoryProvider;

  private final Provider<AnalyticsManager> analyticsManagerProvider;

  private final Provider<CrashlyticsManager> crashlyticsManagerProvider;

  public DataSyncWorker_Factory(Provider<BidirectionalSyncUseCase> bidirectionalSyncUseCaseProvider,
      Provider<GetSyncSettingsUseCase> getSyncSettingsUseCaseProvider,
      Provider<IAuthRepository> authRepositoryProvider,
      Provider<AnalyticsManager> analyticsManagerProvider,
      Provider<CrashlyticsManager> crashlyticsManagerProvider) {
    this.bidirectionalSyncUseCaseProvider = bidirectionalSyncUseCaseProvider;
    this.getSyncSettingsUseCaseProvider = getSyncSettingsUseCaseProvider;
    this.authRepositoryProvider = authRepositoryProvider;
    this.analyticsManagerProvider = analyticsManagerProvider;
    this.crashlyticsManagerProvider = crashlyticsManagerProvider;
  }

  public DataSyncWorker get(Context appContext, WorkerParameters workerParams) {
    return newInstance(appContext, workerParams, bidirectionalSyncUseCaseProvider.get(), getSyncSettingsUseCaseProvider.get(), authRepositoryProvider.get(), analyticsManagerProvider.get(), crashlyticsManagerProvider.get());
  }

  public static DataSyncWorker_Factory create(
      Provider<BidirectionalSyncUseCase> bidirectionalSyncUseCaseProvider,
      Provider<GetSyncSettingsUseCase> getSyncSettingsUseCaseProvider,
      Provider<IAuthRepository> authRepositoryProvider,
      Provider<AnalyticsManager> analyticsManagerProvider,
      Provider<CrashlyticsManager> crashlyticsManagerProvider) {
    return new DataSyncWorker_Factory(bidirectionalSyncUseCaseProvider, getSyncSettingsUseCaseProvider, authRepositoryProvider, analyticsManagerProvider, crashlyticsManagerProvider);
  }

  public static DataSyncWorker newInstance(Context appContext, WorkerParameters workerParams,
      BidirectionalSyncUseCase bidirectionalSyncUseCase,
      GetSyncSettingsUseCase getSyncSettingsUseCase, IAuthRepository authRepository,
      AnalyticsManager analyticsManager, CrashlyticsManager crashlyticsManager) {
    return new DataSyncWorker(appContext, workerParams, bidirectionalSyncUseCase, getSyncSettingsUseCase, authRepository, analyticsManager, crashlyticsManager);
  }
}
