package eco.emergi.embit.di

import eco.emergi.embit.data.local.DatabaseDriverFactory
import eco.emergi.embit.data.local.EmbitDatabase
import eco.emergi.embit.data.repositories.BatteryRepositoryImpl
import eco.emergi.embit.domain.repositories.BatteryMonitorServiceFactory
import eco.emergi.embit.domain.repositories.IBatteryMonitorService
import eco.emergi.embit.domain.repositories.IBatteryRepository
import eco.emergi.embit.domain.repositories.IAuthRepository
import eco.emergi.embit.domain.repositories.IGridDataRepository
import eco.emergi.embit.domain.repositories.ISyncRepository
import eco.emergi.embit.domain.usecases.*
import eco.emergi.embit.domain.usecases.analytics.*
import eco.emergi.embit.domain.usecases.auth.*
import eco.emergi.embit.domain.usecases.grid.*
import eco.emergi.embit.domain.usecases.sync.*
import eco.emergi.embit.domain.usecases.vpp.*
import org.koin.core.module.Module
import org.koin.core.module.dsl.factoryOf
import org.koin.core.module.dsl.singleOf
import org.koin.dsl.bind
import org.koin.dsl.module

/**
 * Shared Koin module for common dependencies.
 * Platform-specific modules will provide DatabaseDriverFactory and BatteryMonitorServiceFactory.
 */
val sharedModule = module {
    // Database
    single {
        val driverFactory: DatabaseDriverFactory = get()
        EmbitDatabase(driverFactory.createDriver())
    }

    // Repositories
    single<IBatteryRepository> {
        BatteryRepositoryImpl(get())
    }

    // Battery Monitor Service
    single<IBatteryMonitorService> {
        val factory: BatteryMonitorServiceFactory = get()
        factory.create()
    }

    // Use Cases
    factory {
        MonitorBatteryUseCase(
            monitorService = get(),
            repository = get()
        )
    }

    factory {
        GetBatteryHistoryUseCase(
            repository = get()
        )
    }

    factory {
        CalculateBatteryStatisticsUseCase(
            repository = get()
        )
    }

    factory {
        ManageBatteryDataUseCase(
            repository = get()
        )
    }

    factory {
        AnalyzeBatteryHealthUseCase(
            repository = get()
        )
    }

    factory {
        PredictBatteryLifeUseCase(
            repository = get()
        )
    }

    factory {
        GenerateChargingRecommendationsUseCase(
            repository = get()
        )
    }

    // Auth Use Cases
    factory {
        ObserveAuthStateUseCase(
            authRepository = get()
        )
    }

    factory {
        SignInUseCase(
            authRepository = get()
        )
    }

    factory {
        SignUpUseCase(
            authRepository = get()
        )
    }

    factory {
        SignOutUseCase(
            authRepository = get()
        )
    }

    factory {
        GetCurrentUserUseCase(
            authRepository = get()
        )
    }

    factory {
        SendPasswordResetUseCase(
            authRepository = get()
        )
    }

    factory {
        SignInWithGoogleUseCase(
            authRepository = get()
        )
    }

    factory {
        IsNewUserUseCase(
            userPreferencesRepository = get()
        )
    }

    // Sync Use Cases
    factory {
        ObserveSyncStatusUseCase(
            syncRepository = get()
        )
    }

    factory {
        GetSyncSettingsUseCase(
            syncRepository = get()
        )
    }

    factory {
        SaveSyncSettingsUseCase(
            syncRepository = get()
        )
    }

    factory {
        ImportBatteryDataUseCase(
            syncRepository = get(),
            batteryRepository = get()
        )
    }

    // Grid Use Cases
    factory {
        GetChargingRecommendationUseCase(
            gridDataRepository = get()
        )
    }

    factory {
        ObserveGridStatusUseCase(
            gridDataRepository = get()
        )
    }

    factory {
        GetCarbonImpactUseCase(
            gridDataRepository = get(),
            authRepository = get()
        )
    }

    factory {
        GetEnergyProductUseCase(
            userPreferencesRepository = get()
        )
    }

    factory {
        SetEnergyProductUseCase(
            userPreferencesRepository = get()
        )
    }

    factory {
        TrackChargingSessionUseCase(
            batteryRepository = get(),
            gridDataRepository = get(),
            authRepository = get()
        )
    }

    factory {
        GetChargingAnalyticsUseCase(
            gridDataRepository = get(),
            authRepository = get()
        )
    }

    // Analytics Use Cases
    factory {
        AggregateHealthMetricsUseCase(
            batteryRepository = get(),
            analyticsRepository = get(),
            analyzeBatteryHealthUseCase = get()
        )
    }

    // VPP Use Cases
    factory {
        ParticipateInDREventUseCase(
            vppExecutor = get(),
            repository = get()
        )
    }
}

/**
 * Helper function to initialize Koin with platform-specific module.
 * Platform modules must provide:
 * - DatabaseDriverFactory
 * - BatteryMonitorServiceFactory
 */
expect fun platformModule(): Module
