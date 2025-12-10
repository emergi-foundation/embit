package eco.emergi.embit.domain.usecases.grid

import eco.emergi.embit.data.api.GridDataRepository
import eco.emergi.embit.domain.models.EnergyProduct

/**
 * Use case for setting the user's energy product/plan
 */
class SetEnergyProductUseCase(
    private val gridDataRepository: GridDataRepository
) {
    suspend operator fun invoke(product: EnergyProduct): Result<Unit> {
        return gridDataRepository.setUserEnergyProduct(product)
    }
}
