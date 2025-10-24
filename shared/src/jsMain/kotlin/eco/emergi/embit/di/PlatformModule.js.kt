package eco.emergi.embit.di

import eco.emergi.embit.data.local.DatabaseDriverFactory
import eco.emergi.embit.domain.repositories.BatteryMonitorServiceFactory
import org.koin.core.module.Module
import org.koin.dsl.module

/**
 * JS/Web platform-specific Koin module
 */
actual fun platformModule(): Module = module {
    single { DatabaseDriverFactory() }
    single { BatteryMonitorServiceFactory() }
}
