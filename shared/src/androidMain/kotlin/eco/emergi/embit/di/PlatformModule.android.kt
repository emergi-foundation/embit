package eco.emergi.embit.di

import android.content.Context
import eco.emergi.embit.data.api.GridDataRepository
import eco.emergi.embit.data.firebase.FirebaseAuthRepository
import eco.emergi.embit.data.firebase.FirestoreSyncRepository
import eco.emergi.embit.data.local.DatabaseDriverFactory
import eco.emergi.embit.domain.repositories.BatteryMonitorServiceFactory
import eco.emergi.embit.domain.repositories.IAuthRepository
import eco.emergi.embit.domain.repositories.IGridDataRepository
import eco.emergi.embit.domain.repositories.ISyncRepository
import eco.emergi.embit.domain.usecases.sync.SyncBatteryDataUseCase
import org.koin.core.module.Module
import org.koin.dsl.module

/**
 * Android platform-specific Koin module.
 * Provides Android Context and platform implementations.
 */
actual fun platformModule(): Module = module {
    // Context should be provided when initializing Koin in the Android app
    // single<Context> { androidContext() }

    single {
        DatabaseDriverFactory(context = get())
    }

    single {
        BatteryMonitorServiceFactory(context = get())
    }

    // Auth Repository (Firebase)
    single<IAuthRepository> {
        FirebaseAuthRepository()
    }

    // Sync Repository (Firestore)
    single<ISyncRepository> {
        FirestoreSyncRepository(
            batteryRepository = get()
        )
    }

    // Grid Data Repository (Backend API)
    single<IGridDataRepository> {
        GridDataRepository(
            authRepository = get()
        )
    }

    // Android-specific sync use case
    factory {
        SyncBatteryDataUseCase(
            syncRepository = get(),
            batteryRepository = get(),
            authRepository = get(),
            context = get()
        )
    }
}
