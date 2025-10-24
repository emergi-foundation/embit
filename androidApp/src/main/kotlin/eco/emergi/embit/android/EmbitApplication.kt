package eco.emergi.embit.android

import android.app.Application
import dagger.hilt.android.HiltAndroidApp
import eco.emergi.embit.android.services.BatteryWorkScheduler
import eco.emergi.embit.di.platformModule
import eco.emergi.embit.di.sharedModule
import org.koin.android.ext.koin.androidContext
import org.koin.android.ext.koin.androidLogger
import org.koin.core.context.startKoin
import org.koin.core.logger.Level

/**
 * Application class for Embit.
 * Initializes Hilt for Android-specific DI and Koin for shared dependencies.
 */
@HiltAndroidApp
class EmbitApplication : Application() {

    override fun onCreate() {
        super.onCreate()

        // Initialize Koin for shared dependencies
        startKoin {
            androidLogger(Level.ERROR)
            androidContext(this@EmbitApplication)
            modules(
                sharedModule,
                platformModule()
            )
        }

        // Schedule periodic battery monitoring
        BatteryWorkScheduler.schedulePeriodicMonitoring(this)
    }
}
