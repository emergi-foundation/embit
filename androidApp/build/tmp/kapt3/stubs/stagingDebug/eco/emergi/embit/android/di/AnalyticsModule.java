package eco.emergi.embit.android.di;

import android.content.Context;
import dagger.Module;
import dagger.Provides;
import dagger.hilt.InstallIn;
import dagger.hilt.android.qualifiers.ApplicationContext;
import dagger.hilt.components.SingletonComponent;
import eco.emergi.embit.android.analytics.AnalyticsManager;
import eco.emergi.embit.android.analytics.CrashlyticsManager;
import eco.emergi.embit.android.analytics.RemoteConfigManager;
import javax.inject.Singleton;

/**
 * Hilt module for providing Firebase analytics, Crashlytics, and Remote Config instances.
 *
 * All managers are provided as singletons to ensure single instances across the app.
 */
@dagger.Module()
@kotlin.Metadata(mv = {1, 9, 0}, k = 1, xi = 48, d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u00c7\u0002\u0018\u00002\u00020\u0001B\u0007\b\u0002\u00a2\u0006\u0002\u0010\u0002J\u0012\u0010\u0003\u001a\u00020\u00042\b\b\u0001\u0010\u0005\u001a\u00020\u0006H\u0007J\u0012\u0010\u0007\u001a\u00020\b2\b\b\u0001\u0010\u0005\u001a\u00020\u0006H\u0007J\u0012\u0010\t\u001a\u00020\n2\b\b\u0001\u0010\u0005\u001a\u00020\u0006H\u0007\u00a8\u0006\u000b"}, d2 = {"Leco/emergi/embit/android/di/AnalyticsModule;", "", "()V", "provideAnalyticsManager", "Leco/emergi/embit/android/analytics/AnalyticsManager;", "context", "Landroid/content/Context;", "provideCrashlyticsManager", "Leco/emergi/embit/android/analytics/CrashlyticsManager;", "provideRemoteConfigManager", "Leco/emergi/embit/android/analytics/RemoteConfigManager;", "androidApp_stagingDebug"})
@dagger.hilt.InstallIn(value = {dagger.hilt.components.SingletonComponent.class})
public final class AnalyticsModule {
    @org.jetbrains.annotations.NotNull()
    public static final eco.emergi.embit.android.di.AnalyticsModule INSTANCE = null;
    
    private AnalyticsModule() {
        super();
    }
    
    @dagger.Provides()
    @javax.inject.Singleton()
    @org.jetbrains.annotations.NotNull()
    public final eco.emergi.embit.android.analytics.AnalyticsManager provideAnalyticsManager(@dagger.hilt.android.qualifiers.ApplicationContext()
    @org.jetbrains.annotations.NotNull()
    android.content.Context context) {
        return null;
    }
    
    @dagger.Provides()
    @javax.inject.Singleton()
    @org.jetbrains.annotations.NotNull()
    public final eco.emergi.embit.android.analytics.CrashlyticsManager provideCrashlyticsManager(@dagger.hilt.android.qualifiers.ApplicationContext()
    @org.jetbrains.annotations.NotNull()
    android.content.Context context) {
        return null;
    }
    
    @dagger.Provides()
    @javax.inject.Singleton()
    @org.jetbrains.annotations.NotNull()
    public final eco.emergi.embit.android.analytics.RemoteConfigManager provideRemoteConfigManager(@dagger.hilt.android.qualifiers.ApplicationContext()
    @org.jetbrains.annotations.NotNull()
    android.content.Context context) {
        return null;
    }
}