package eco.emergi.embit.domain.usecases.grid

import eco.emergi.embit.domain.models.CarbonImpact
import eco.emergi.embit.domain.repositories.IAuthRepository
import eco.emergi.embit.domain.repositories.IGridDataRepository

/**
 * Use case for getting user's carbon impact summary.
 */
class GetCarbonImpactUseCase(
    private val gridDataRepository: IGridDataRepository,
    private val authRepository: IAuthRepository
) {
    /**
     * Get carbon impact summary for a time period
     *
     * @param startTimestamp Start of period (defaults to 30 days ago)
     * @param endTimestamp End of period (defaults to now)
     * @return Result containing carbon impact summary
     */
    suspend operator fun invoke(
        startTimestamp: Long = System.currentTimeMillis() - (30L * 24 * 60 * 60 * 1000),
        endTimestamp: Long = System.currentTimeMillis()
    ): Result<CarbonImpact> {
        val userId = authRepository.getCurrentUser()?.uid
            ?: return Result.failure(Exception("User not authenticated"))

        return gridDataRepository.getCarbonImpactSummary(
            userId = userId,
            startTimestamp = startTimestamp,
            endTimestamp = endTimestamp
        )
    }
}
