package eco.emergi.embit.domain.usecases.sync

import eco.emergi.embit.domain.models.SyncSettings
import eco.emergi.embit.domain.repositories.ISyncRepository

/**
 * Use case for getting sync settings from the cloud.
 */
class GetSyncSettingsUseCase(
    private val syncRepository: ISyncRepository
) {
    /**
     * Get sync settings
     *
     * @return Result containing sync settings or error
     */
    suspend operator fun invoke(): Result<SyncSettings> {
        return syncRepository.getSyncSettings()
    }
}
