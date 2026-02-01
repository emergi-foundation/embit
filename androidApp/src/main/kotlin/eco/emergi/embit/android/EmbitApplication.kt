package eco.emergi.embit.android

import android.app.Application
import android.os.Build
import dagger.hilt.android.HiltAndroidApp
import eco.emergi.embit.android.BuildConfig
import eco.emergi.embit.android.analytics.AnalyticsManager
import eco.emergi.embit.android.analytics.CrashlyticsManager
import eco.emergi.embit.android.analytics.RemoteConfigManager
import eco.emergi.embit.android.services.AppStateManager
import eco.emergi.embit.android.services.BatteryWorkScheduler
import eco.emergi.embit.android.services.LocationBasedGridManager
import eco.emergi.embit.android.services.PredictiveChargingWorker
import eco.emergi.embit.di.platformModule
import eco.emergi.embit.di.sharedModule
import eco.emergi.embit.domain.models.AuthState
import eco.emergi.embit.domain.repositories.IAnalyticsRepository
import eco.emergi.embit.domain.repositories.IUserPreferencesRepository
import eco.emergi.embit.domain.usecases.auth.ObserveAuthStateUseCase
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.flow.collectLatest
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.launch
import org.koin.android.ext.koin.androidContext
import org.koin.android.ext.koin.androidLogger
import org.koin.core.context.GlobalContext
import org.koin.core.context.startKoin
import org.koin.core.logger.Level
import javax.inject.Inject

/**
 * Application class for Embit.
 * Initializes Hilt for Android-specific DI and Koin for shared dependencies.
 *
 * IMPORTANT - Dependency Injection Architecture:
 * - Hilt: Used for Android-specific dependencies (Firebase, Android services)
 * - Koin: Used for shared/multiplatform dependencies (use cases, repositories)
 *
 * WARNING: Do NOT @Inject classes that have Koin dependencies in their constructors!
 * Hilt cannot resolve Koin dependencies, which will cause runtime crashes.
 * Instead, manually instantiate such classes after startKoin() completes.
 *
 * Safe to @Inject (Android-only dependencies):
 * - AnalyticsManager, CrashlyticsManager, RemoteConfigManager
 *
 * Must instantiate manually (depend on Koin):
 * - AppStateManager (needs ObserveAuthStateUseCase, BidirectionalSyncUseCase)
 * - LocationBasedGridManager (needs IUserPreferencesRepository)
 */
@HiltAndroidApp
class EmbitApplication : Application() {

    // Safe: Hilt-provided, Android-only dependencies
    @Inject
    lateinit var analyticsManager: AnalyticsManager

    @Inject
    lateinit var crashlyticsManager: CrashlyticsManager

    @Inject
    lateinit var remoteConfigManager: RemoteConfigManager

    // Manual initialization required: These classes depend on Koin dependencies
    // NEVER add @Inject to these - it will crash the app at startup!
    private lateinit var appStateManager: AppStateManager
    private lateinit var locationBasedGridManager: LocationBasedGridManager

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

        // Initialize managers that depend on Koin dependencies
        // These can't be Hilt-injected because they need Koin use cases
        appStateManager = AppStateManager(
            context = this,
            observeAuthStateUseCase = GlobalContext.get().get(),
            bidirectionalSyncUseCase = GlobalContext.get().get()
        )

        locationBasedGridManager = LocationBasedGridManager(
            context = this,
            userPreferencesRepository = GlobalContext.get().get()
        )

        // Initialize Firebase services
        initializeFirebase()

        // Initialize app state manager for automatic sync
        appStateManager.initialize()

        // Note: Grid region detection now happens in LocationPermissionScreen
        // during onboarding to request location permission from user

        // Schedule periodic battery monitoring
        BatteryWorkScheduler.schedulePeriodicMonitoring(this)

        // Schedule predictive charging recommendations
        PredictiveChargingWorker.schedule(this)

        // Schedule periodic charging session tracking
        BatteryWorkScheduler.scheduleChargingSessionTracking(this)

        // Schedule daily health metrics aggregation
        BatteryWorkScheduler.scheduleHealthMetricsAggregation(this)

        // Observe and apply analytics consent settings
        observeAnalyticsConsent()

        // Set user properties for existing authenticated users
        setUserPropertiesForAuthenticatedUser()
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

    /**
     * Observe analytics consent changes and apply settings to Firebase services.
     */
    private fun observeAnalyticsConsent() {
        applicationScope.launch {
            try {
                // Get analytics repository from Koin
                val analyticsRepository = GlobalContext.get().get<IAnalyticsRepository>()

                // Observe consent changes
                analyticsRepository.getAnalyticsConsent()
                    .collectLatest { consent ->
                        // Apply consent settings to Analytics
                        analyticsManager.setAnalyticsEnabled(consent.analyticsEnabled)

                        // Apply consent settings to Crashlytics
                        crashlyticsManager.setCrashlyticsEnabled(consent.crashlyticsEnabled)

                        // Log consent change (only if analytics is enabled)
                        if (consent.analyticsEnabled) {
                            analyticsManager.logCustomEvent(
                                eventName = "analytics_consent_changed",
                                params = mapOf(
                                    "analytics_enabled" to consent.analyticsEnabled,
                                    "crashlytics_enabled" to consent.crashlyticsEnabled,
                                    "anonymous_sharing_enabled" to consent.anonymousDataSharingEnabled,
                                    "personalized_recommendations_enabled" to consent.personalizedRecommendationsEnabled
                                )
                            )
                        }

                        crashlyticsManager.log("Analytics consent updated: $consent")
                    }
            } catch (e: Exception) {
                // Silently fail if consent observation fails
                crashlyticsManager.logException(e)
            }
        }
    }

    /**
     * Set user properties for existing authenticated users on app startup.
     * This ensures analytics has proper context for users who are already logged in.
     */
    private fun setUserPropertiesForAuthenticatedUser() {
        applicationScope.launch {
            try {
                // Get use cases and repositories from Koin
                val observeAuthStateUseCase = GlobalContext.get().get<ObserveAuthStateUseCase>()
                val userPreferencesRepository = GlobalContext.get().get<IUserPreferencesRepository>()

                // Get current auth state
                val authState = observeAuthStateUseCase().first()

                // If user is authenticated, set all user properties
                if (authState is AuthState.Authenticated) {
                    val user = authState.user

                    // Set user ID
                    analyticsManager.setUserId(user.uid)

                    // Set auth provider (derive from email if possible)
                    val authProvider = when {
                        user.email?.contains("google") == true -> "google"
                        user.email != null -> "email"
                        else -> "unknown"
                    }
                    analyticsManager.setUserProperty("auth_provider", authProvider)

                    // Set device info
                    analyticsManager.setUserProperty("device_model", Build.MODEL)
                    analyticsManager.setUserProperty("os_version", Build.VERSION.RELEASE)

                    // Get and set grid region from user preferences
                    userPreferencesRepository.getUserPreferences()
                        .onSuccess { preferences ->
                            analyticsManager.setUserProperty("grid_region", preferences.location)
                        }

                    crashlyticsManager.log("User properties set for authenticated user: ${user.uid}")
                }
            } catch (e: Exception) {
                // Silently fail if user property setup fails
                crashlyticsManager.logException(e)
            }
        }
    }
}
