package eco.emergi.embit.android.di

import android.content.Context
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.android.qualifiers.ApplicationContext
import dagger.hilt.components.SingletonComponent
import eco.emergi.embit.android.services.AppStateManager
import eco.emergi.embit.android.services.LocationBasedGridManager
import eco.emergi.embit.domain.repositories.IUserPreferencesRepository
import eco.emergi.embit.domain.usecases.auth.ObserveAuthStateUseCase
import eco.emergi.embit.domain.usecases.sync.BidirectionalSyncUseCase
import org.koin.java.KoinJavaComponent.inject
import javax.inject.Singleton

/**
 * Hilt module for app-level services and managers.
 */
@Module
@InstallIn(SingletonComponent::class)
object AppModule {

    @Provides
    @Singleton
    fun provideAppStateManager(
        @ApplicationContext context: Context
    ): AppStateManager {
        // Get Koin dependencies
        val observeAuthStateUseCase: ObserveAuthStateUseCase by inject(ObserveAuthStateUseCase::class.java)
        val bidirectionalSyncUseCase: BidirectionalSyncUseCase by inject(BidirectionalSyncUseCase::class.java)

        return AppStateManager(
            context = context,
            observeAuthStateUseCase = observeAuthStateUseCase,
            bidirectionalSyncUseCase = bidirectionalSyncUseCase
        )
    }

    @Provides
    @Singleton
    fun provideLocationBasedGridManager(
        @ApplicationContext context: Context
    ): LocationBasedGridManager {
        // Get Koin dependency
        val userPreferencesRepository: IUserPreferencesRepository by inject(IUserPreferencesRepository::class.java)

        return LocationBasedGridManager(
            context = context,
            userPreferencesRepository = userPreferencesRepository
        )
    }
}
