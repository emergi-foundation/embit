package eco.emergi.embit.android

import android.app.Application
import dagger.hilt.android.HiltAndroidApp
import eco.emergi.embit.android.analytics.AnalyticsManager
import eco.emergi.embit.android.analytics.CrashlyticsManager
import eco.emergi.embit.android.analytics.RemoteConfigManager
import eco.emergi.embit.android.services.BatteryWorkScheduler
import eco.emergi.embit.di.platformModule
import eco.emergi.embit.di.sharedModule
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.launch
import org.koin.android.ext.koin.androidContext
import org.koin.android.ext.koin.androidLogger
import org.koin.core.context.startKoin
import org.koin.core.logger.Level
import javax.inject.Inject

/**
 * Application class for Embit.
 * Initializes Hilt for Android-specific DI and Koin for shared dependencies.
 */
@HiltAndroidApp
class EmbitApplication : Application() {

    @Inject
    lateinit var analyticsManager: AnalyticsManager

    @Inject
    lateinit var crashlyticsManager: CrashlyticsManager

    @Inject
    lateinit var remoteConfigManager: RemoteConfigManager

    private val applicationScope = CoroutineScope(SupervisorJob() + Dispatchers.Main)

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

        // Initialize Firebase services
        initializeFirebase()

        // Schedule periodic battery monitoring
        BatteryWorkScheduler.schedulePeriodicMonitoring(this)

        // Schedule periodic charging session tracking
        BatteryWorkScheduler.scheduleChargingSessionTracking(this)
    }

    private fun initializeFirebase() {
        // Set app version and environment in Crashlytics
        crashlyticsManager.setAppVersion(BuildConfig.VERSION_NAME)
        crashlyticsManager.setEnvironment(BuildConfig.ENVIRONMENT)

        // Fetch Remote Config values asynchronously
        applicationScope.launch {
            try {
                val fetched = remoteConfigManager.fetchAndActivate()
                if (fetched) {
                    // Log successful config fetch
                    crashlyticsManager.log("Remote Config fetched successfully")
                }
            } catch (e: Exception) {
                crashlyticsManager.logException(e)
            }
        }

        // Analytics is automatically initialized by Firebase
        analyticsManager.setAnalyticsEnabled(true)
    }
}
