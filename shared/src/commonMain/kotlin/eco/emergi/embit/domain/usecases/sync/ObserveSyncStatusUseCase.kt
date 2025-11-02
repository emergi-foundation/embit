package eco.emergi.embit.domain.usecases.sync

import eco.emergi.embit.domain.models.SyncStatus
import eco.emergi.embit.domain.repositories.ISyncRepository
import kotlinx.coroutines.flow.Flow

/**
 * Use case for observing sync status changes.
 * Returns a Flow that emits updates when sync operations occur.
 */
class ObserveSyncStatusUseCase(
    private val syncRepository: ISyncRepository
) {
    /**
     * Observe sync status as a Flow
     *
     * @return Flow of sync status updates
     */
    operator fun invoke(): Flow<SyncStatus> {
        return syncRepository.observeSyncStatus()
    }
}
