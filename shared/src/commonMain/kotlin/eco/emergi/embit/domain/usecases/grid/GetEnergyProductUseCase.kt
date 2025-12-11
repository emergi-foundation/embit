package eco.emergi.embit.domain.usecases.grid

import eco.emergi.embit.domain.models.EnergyProduct
import eco.emergi.embit.domain.models.EnergyProducts
import eco.emergi.embit.domain.repositories.IUserPreferencesRepository

/**
 * Use case for getting the user's selected energy product/plan
 */
class GetEnergyProductUseCase(
    private val userPreferencesRepository: IUserPreferencesRepository
) {
    suspend operator fun invoke(): EnergyProduct {
        val preferences = userPreferencesRepository.getUserPreferences().getOrNull()
        return EnergyProducts.fromType(
            preferences?.energyProductType ?: eco.emergi.embit.domain.models.EnergyProductType.STANDARD_GRID
        )
    }
}
