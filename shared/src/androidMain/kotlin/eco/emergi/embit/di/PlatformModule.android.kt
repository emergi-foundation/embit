package eco.emergi.embit.di

import android.content.Context
import com.google.firebase.auth.ktx.auth
import com.google.firebase.firestore.ktx.firestore
import com.google.firebase.ktx.Firebase
import eco.emergi.embit.data.api.GridDataRepository
import eco.emergi.embit.data.firebase.FirebaseAuthRepository
import eco.emergi.embit.data.firebase.FirebaseUserPreferencesRepository
import eco.emergi.embit.data.firebase.FirestoreSyncRepository
import eco.emergi.embit.data.local.DatabaseDriverFactory
import eco.emergi.embit.data.repositories.VppRepositoryImpl
import eco.emergi.embit.domain.repositories.BatteryMonitorServiceFactory
import eco.emergi.embit.domain.repositories.IAuthRepository
import eco.emergi.embit.domain.repositories.IGridDataRepository
import eco.emergi.embit.domain.repositories.ISyncRepository
import eco.emergi.embit.domain.repositories.IUserPreferencesRepository
import eco.emergi.embit.domain.repositories.IVppRepository
import eco.emergi.embit.domain.usecases.sync.BidirectionalSyncUseCase
import eco.emergi.embit.domain.usecases.sync.SyncBatteryDataUseCase
import eco.emergi.embit.domain.vpp.AndroidVppControlExecutor
import eco.emergi.embit.domain.vpp.VppControlExecutor
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

    // User Preferences Repository (Firestore)
    single<IUserPreferencesRepository> {
        FirebaseUserPreferencesRepository(
            authRepository = get()
        )
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
            authRepository = get(),
            userPreferencesRepository = get()
        )
    }

    // VPP Control Executor (Android power control)
    single<VppControlExecutor> {
        AndroidVppControlExecutor(
            context = get(),
            authRepository = get()
        )
    }

    // VPP Repository (Firestore)
    single<IVppRepository> {
        val userId = Firebase.auth.currentUser?.uid ?: "anonymous"
        val userLocation = "California" // TODO: Get from user profile/settings
        VppRepositoryImpl(
            firestore = Firebase.firestore,
            userId = userId,
            userLocation = userLocation
        )
    }

    // Android-specific sync use cases
    factory {
        SyncBatteryDataUseCase(
            syncRepository = get(),
            batteryRepository = get(),
            authRepository = get(),
            context = get()
        )
    }

    factory {
        BidirectionalSyncUseCase(
            syncRepository = get(),
            batteryRepository = get(),
            uploadUseCase = get(),
            importUseCase = get()
        )
    }
}
