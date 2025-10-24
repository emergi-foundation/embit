package eco.emergi.embit.android.di

import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.components.SingletonComponent
import eco.emergi.embit.android.migration.DataMigrationManager
import eco.emergi.embit.domain.repositories.IBatteryRepository
import javax.inject.Singleton

/**
 * Hilt module for data migration dependencies
 */
@Module
@InstallIn(SingletonComponent::class)
object MigrationModule {

    @Provides
    @Singleton
    fun provideDataMigrationManager(
        repository: IBatteryRepository
    ): DataMigrationManager {
        return DataMigrationManager(repository)
    }
}
