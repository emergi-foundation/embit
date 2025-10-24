package eco.emergi.embit.di

import android.content.Context
import eco.emergi.embit.data.local.DatabaseDriverFactory
import eco.emergi.embit.domain.repositories.BatteryMonitorServiceFactory
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
}
