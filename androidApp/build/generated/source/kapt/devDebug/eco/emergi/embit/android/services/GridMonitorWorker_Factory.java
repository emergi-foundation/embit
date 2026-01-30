package eco.emergi.embit.android.services;

import android.content.Context;
import androidx.work.WorkerParameters;
import dagger.internal.DaggerGenerated;
import dagger.internal.QualifierMetadata;
import dagger.internal.ScopeMetadata;
import eco.emergi.embit.domain.usecases.grid.GetChargingRecommendationUseCase;
import eco.emergi.embit.domain.usecases.grid.ObserveGridStatusUseCase;
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
public final class GridMonitorWorker_Factory {
  private final Provider<ObserveGridStatusUseCase> observeGridStatusUseCaseProvider;

  private final Provider<GetChargingRecommendationUseCase> getChargingRecommendationUseCaseProvider;

  public GridMonitorWorker_Factory(
      Provider<ObserveGridStatusUseCase> observeGridStatusUseCaseProvider,
      Provider<GetChargingRecommendationUseCase> getChargingRecommendationUseCaseProvider) {
    this.observeGridStatusUseCaseProvider = observeGridStatusUseCaseProvider;
    this.getChargingRecommendationUseCaseProvider = getChargingRecommendationUseCaseProvider;
  }

  public GridMonitorWorker get(Context appContext, WorkerParameters workerParams) {
    return newInstance(appContext, workerParams, observeGridStatusUseCaseProvider.get(), getChargingRecommendationUseCaseProvider.get());
  }

  public static GridMonitorWorker_Factory create(
      Provider<ObserveGridStatusUseCase> observeGridStatusUseCaseProvider,
      Provider<GetChargingRecommendationUseCase> getChargingRecommendationUseCaseProvider) {
    return new GridMonitorWorker_Factory(observeGridStatusUseCaseProvider, getChargingRecommendationUseCaseProvider);
  }

  public static GridMonitorWorker newInstance(Context appContext, WorkerParameters workerParams,
      ObserveGridStatusUseCase observeGridStatusUseCase,
      GetChargingRecommendationUseCase getChargingRecommendationUseCase) {
    return new GridMonitorWorker(appContext, workerParams, observeGridStatusUseCase, getChargingRecommendationUseCase);
  }
}
