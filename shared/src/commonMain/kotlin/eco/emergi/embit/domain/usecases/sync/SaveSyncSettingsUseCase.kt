package eco.emergi.embit.domain.usecases.sync

import eco.emergi.embit.domain.models.SyncSettings
import eco.emergi.embit.domain.repositories.ISyncRepository

/**
 * Use case for saving sync settings to the cloud.
 */
class SaveSyncSettingsUseCase(
    private val syncRepository: ISyncRepository
) {
    /**
     * Save sync settings
     *
     * @param settings Sync settings to save
     * @return Result indicating success or failure
     */
    suspend operator fun invoke(settings: SyncSettings): Result<Unit> {
        return syncRepository.saveSyncSettings(settings)
    }
}
