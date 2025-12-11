package eco.emergi.embit.domain.usecases.grid

import eco.emergi.embit.domain.models.EnergyProduct
import eco.emergi.embit.domain.repositories.IUserPreferencesRepository

/**
 * Use case for setting the user's energy product/plan
 */
class SetEnergyProductUseCase(
    private val userPreferencesRepository: IUserPreferencesRepository
) {
    suspend operator fun invoke(product: EnergyProduct): Result<Unit> {
        return userPreferencesRepository.updateEnergyProduct(product)
    }
}
