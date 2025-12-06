package eco.emergi.embit.domain.usecases.vpp

import eco.emergi.embit.domain.models.DemandResponseEvent
import eco.emergi.embit.domain.models.EventPerformance
import eco.emergi.embit.domain.repositories.IVppRepository
import eco.emergi.embit.domain.vpp.VppControlExecutor
import kotlinx.coroutines.delay

/**
 * Use case for participating in a demand response event
 */
class ParticipateInDREventUseCase(
    private val vppExecutor: VppControlExecutor,
    private val repository: IVppRepository
) {
    suspend operator fun invoke(event: DemandResponseEvent): Result<EventPerformance> {
        return try {
            // Get user settings
            val settings = repository.getParticipationSettings()

            // Execute the DR event
            val performance = vppExecutor.executeDemandResponse(event, settings)

            // Save performance to repository
            repository.saveEventPerformance(performance)

            // Schedule restore operation for when event ends
            val remainingTime = event.endTime - System.currentTimeMillis()
            if (remainingTime > 0) {
                delay(remainingTime)
                vppExecutor.restoreNormalOperation()
            }

            Result.success(performance)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
}
