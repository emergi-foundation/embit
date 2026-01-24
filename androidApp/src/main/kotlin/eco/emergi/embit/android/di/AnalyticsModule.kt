package eco.emergi.embit.android.di

import android.content.Context
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.android.qualifiers.ApplicationContext
import dagger.hilt.components.SingletonComponent
import eco.emergi.embit.android.analytics.AnalyticsManager
import eco.emergi.embit.android.analytics.CrashlyticsManager
import eco.emergi.embit.android.analytics.RemoteConfigManager
import javax.inject.Singleton

/**
 * Hilt module for providing Firebase analytics, Crashlytics, and Remote Config instances.
 *
 * All managers are provided as singletons to ensure single instances across the app.
 */
@Module
@InstallIn(SingletonComponent::class)
object AnalyticsModule {

    @Provides
    @Singleton
    fun provideAnalyticsManager(
        @ApplicationContext context: Context
    ): AnalyticsManager {
        return AnalyticsManager(context)
    }

    @Provides
    @Singleton
    fun provideCrashlyticsManager(
        @ApplicationContext context: Context
    ): CrashlyticsManager {
        return CrashlyticsManager(context)
    }

    @Provides
    @Singleton
    fun provideRemoteConfigManager(
        @ApplicationContext context: Context
    ): RemoteConfigManager {
        return RemoteConfigManager(context)
    }
}
