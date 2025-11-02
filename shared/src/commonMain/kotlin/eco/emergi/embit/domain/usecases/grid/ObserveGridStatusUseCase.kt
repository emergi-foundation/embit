package eco.emergi.embit.domain.usecases.grid

import eco.emergi.embit.domain.models.GridStatus
import eco.emergi.embit.domain.repositories.IGridDataRepository
import kotlinx.coroutines.flow.Flow

/**
 * Use case for observing grid status changes in real-time.
 */
class ObserveGridStatusUseCase(
    private val gridDataRepository: IGridDataRepository
) {
    /**
     * Observe grid status for user's location
     *
     * @return Flow of grid status updates
     */
    suspend operator fun invoke(): Flow<GridStatus> {
        val location = gridDataRepository.getUserLocation()
        return gridDataRepository.observeGridStatus(location)
    }
}
