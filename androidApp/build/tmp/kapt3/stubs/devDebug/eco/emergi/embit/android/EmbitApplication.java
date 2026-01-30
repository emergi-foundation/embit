package eco.emergi.embit.android;

import android.app.Application;
import android.os.Build;
import dagger.hilt.android.HiltAndroidApp;
import eco.emergi.embit.android.analytics.AnalyticsManager;
import eco.emergi.embit.android.analytics.CrashlyticsManager;
import eco.emergi.embit.android.analytics.RemoteConfigManager;
import eco.emergi.embit.android.services.AppStateManager;
import eco.emergi.embit.android.services.BatteryWorkScheduler;
import eco.emergi.embit.android.services.LocationBasedGridManager;
import eco.emergi.embit.domain.models.AuthState;
import eco.emergi.embit.domain.repositories.IAnalyticsRepository;
import eco.emergi.embit.domain.repositories.IUserPreferencesRepository;
import eco.emergi.embit.domain.usecases.auth.ObserveAuthStateUseCase;
import kotlinx.coroutines.Dispatchers;
import org.koin.core.context.GlobalContext;
import org.koin.core.logger.Level;
import javax.inject.Inject;

/**
 * Application class for Embit.
 * Initializes Hilt for Android-specific DI and Koin for shared dependencies.
 */
@dagger.hilt.android.HiltAndroidApp()
@kotlin.Metadata(mv = {1, 9, 0}, k = 1, xi = 48, d1 = {"\u0000B\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u0002\n\u0002\b\u0004\b\u0007\u0018\u00002\u00020\u0001B\u0005\u00a2\u0006\u0002\u0010\u0002J\b\u0010#\u001a\u00020$H\u0002J\b\u0010%\u001a\u00020$H\u0002J\b\u0010&\u001a\u00020$H\u0016J\b\u0010\'\u001a\u00020$H\u0002R\u001e\u0010\u0003\u001a\u00020\u00048\u0006@\u0006X\u0087.\u00a2\u0006\u000e\n\u0000\u001a\u0004\b\u0005\u0010\u0006\"\u0004\b\u0007\u0010\bR\u001e\u0010\t\u001a\u00020\n8\u0006@\u0006X\u0087.\u00a2\u0006\u000e\n\u0000\u001a\u0004\b\u000b\u0010\f\"\u0004\b\r\u0010\u000eR\u000e\u0010\u000f\u001a\u00020\u0010X\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u001e\u0010\u0011\u001a\u00020\u00128\u0006@\u0006X\u0087.\u00a2\u0006\u000e\n\u0000\u001a\u0004\b\u0013\u0010\u0014\"\u0004\b\u0015\u0010\u0016R\u001e\u0010\u0017\u001a\u00020\u00188\u0006@\u0006X\u0087.\u00a2\u0006\u000e\n\u0000\u001a\u0004\b\u0019\u0010\u001a\"\u0004\b\u001b\u0010\u001cR\u001e\u0010\u001d\u001a\u00020\u001e8\u0006@\u0006X\u0087.\u00a2\u0006\u000e\n\u0000\u001a\u0004\b\u001f\u0010 \"\u0004\b!\u0010\"\u00a8\u0006("}, d2 = {"Leco/emergi/embit/android/EmbitApplication;", "Landroid/app/Application;", "()V", "analyticsManager", "Leco/emergi/embit/android/analytics/AnalyticsManager;", "getAnalyticsManager", "()Leco/emergi/embit/android/analytics/AnalyticsManager;", "setAnalyticsManager", "(Leco/emergi/embit/android/analytics/AnalyticsManager;)V", "appStateManager", "Leco/emergi/embit/android/services/AppStateManager;", "getAppStateManager", "()Leco/emergi/embit/android/services/AppStateManager;", "setAppStateManager", "(Leco/emergi/embit/android/services/AppStateManager;)V", "applicationScope", "Lkotlinx/coroutines/CoroutineScope;", "crashlyticsManager", "Leco/emergi/embit/android/analytics/CrashlyticsManager;", "getCrashlyticsManager", "()Leco/emergi/embit/android/analytics/CrashlyticsManager;", "setCrashlyticsManager", "(Leco/emergi/embit/android/analytics/CrashlyticsManager;)V", "locationBasedGridManager", "Leco/emergi/embit/android/services/LocationBasedGridManager;", "getLocationBasedGridManager", "()Leco/emergi/embit/android/services/LocationBasedGridManager;", "setLocationBasedGridManager", "(Leco/emergi/embit/android/services/LocationBasedGridManager;)V", "remoteConfigManager", "Leco/emergi/embit/android/analytics/RemoteConfigManager;", "getRemoteConfigManager", "()Leco/emergi/embit/android/analytics/RemoteConfigManager;", "setRemoteConfigManager", "(Leco/emergi/embit/android/analytics/RemoteConfigManager;)V", "initializeFirebase", "", "observeAnalyticsConsent", "onCreate", "setUserPropertiesForAuthenticatedUser", "androidApp_devDebug"})
public final class EmbitApplication extends android.app.Application {
    @javax.inject.Inject()
    public eco.emergi.embit.android.analytics.AnalyticsManager analyticsManager;
    @javax.inject.Inject()
    public eco.emergi.embit.android.analytics.CrashlyticsManager crashlyticsManager;
    @javax.inject.Inject()
    public eco.emergi.embit.android.analytics.RemoteConfigManager remoteConfigManager;
    @javax.inject.Inject()
    public eco.emergi.embit.android.services.AppStateManager appStateManager;
    @javax.inject.Inject()
    public eco.emergi.embit.android.services.LocationBasedGridManager locationBasedGridManager;
    @org.jetbrains.annotations.NotNull()
    private final kotlinx.coroutines.CoroutineScope applicationScope = null;
    
    public EmbitApplication() {
        super();
    }
    
    @org.jetbrains.annotations.NotNull()
    public final eco.emergi.embit.android.analytics.AnalyticsManager getAnalyticsManager() {
        return null;
    }
    
    public final void setAnalyticsManager(@org.jetbrains.annotations.NotNull()
    eco.emergi.embit.android.analytics.AnalyticsManager p0) {
    }
    
    @org.jetbrains.annotations.NotNull()
    public final eco.emergi.embit.android.analytics.CrashlyticsManager getCrashlyticsManager() {
        return null;
    }
    
    public final void setCrashlyticsManager(@org.jetbrains.annotations.NotNull()
    eco.emergi.embit.android.analytics.CrashlyticsManager p0) {
    }
    
    @org.jetbrains.annotations.NotNull()
    public final eco.emergi.embit.android.analytics.RemoteConfigManager getRemoteConfigManager() {
        return null;
    }
    
    public final void setRemoteConfigManager(@org.jetbrains.annotations.NotNull()
    eco.emergi.embit.android.analytics.RemoteConfigManager p0) {
    }
    
    @org.jetbrains.annotations.NotNull()
    public final eco.emergi.embit.android.services.AppStateManager getAppStateManager() {
        return null;
    }
    
    public final void setAppStateManager(@org.jetbrains.annotations.NotNull()
    eco.emergi.embit.android.services.AppStateManager p0) {
    }
    
    @org.jetbrains.annotations.NotNull()
    public final eco.emergi.embit.android.services.LocationBasedGridManager getLocationBasedGridManager() {
        return null;
    }
    
    public final void setLocationBasedGridManager(@org.jetbrains.annotations.NotNull()
    eco.emergi.embit.android.services.LocationBasedGridManager p0) {
    }
    
    @java.lang.Override()
    public void onCreate() {
    }
    
    private final void initializeFirebase() {
    }
    
    /**
     * Observe analytics consent changes and apply settings to Firebase services.
     */
    private final void observeAnalyticsConsent() {
    }
    
    /**
     * Set user properties for existing authenticated users on app startup.
     * This ensures analytics has proper context for users who are already logged in.
     */
    private final void setUserPropertiesForAuthenticatedUser() {
    }
}