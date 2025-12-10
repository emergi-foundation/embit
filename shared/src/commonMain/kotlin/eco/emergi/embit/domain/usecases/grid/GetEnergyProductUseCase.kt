package eco.emergi.embit.domain.usecases.grid

import eco.emergi.embit.data.api.GridDataRepository
import eco.emergi.embit.domain.models.EnergyProduct

/**
 * Use case for getting the user's selected energy product/plan
 */
class GetEnergyProductUseCase(
    private val gridDataRepository: GridDataRepository
) {
    suspend operator fun invoke(): EnergyProduct {
        return gridDataRepository.getUserEnergyProduct()
    }
}
