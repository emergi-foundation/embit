package eco.emergi.embit.domain.usecases.grid

import eco.emergi.embit.domain.models.ChargingRecommendation
import eco.emergi.embit.domain.repositories.IGridDataRepository

/**
 * Use case for getting smart charging recommendations based on grid conditions.
 */
class GetChargingRecommendationUseCase(
    private val gridDataRepository: IGridDataRepository
) {
    /**
     * Get charging recommendation
     *
     * @param currentBatteryLevel Current battery percentage (0-100)
     * @param targetBatteryLevel Desired battery level (default: 80%)
     * @return Result containing charging recommendation
     */
    suspend operator fun invoke(
        currentBatteryLevel: Int,
        targetBatteryLevel: Int = 80
    ): Result<ChargingRecommendation> {
        // Validate input
        if (currentBatteryLevel !in 0..100) {
            return Result.failure(Exception("Invalid battery level: $currentBatteryLevel"))
        }
        if (targetBatteryLevel !in currentBatteryLevel..100) {
            return Result.failure(Exception("Invalid target level: $targetBatteryLevel"))
        }

        val location = gridDataRepository.getUserLocation()
        return gridDataRepository.getChargingRecommendation(
            location = location,
            currentBatteryLevel = currentBatteryLevel,
            targetBatteryLevel = targetBatteryLevel
        )
    }
}
