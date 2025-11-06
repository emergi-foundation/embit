package eco.emergi.embit.domain.usecases.grid

import app.cash.turbine.test
import eco.emergi.embit.domain.models.*
import eco.emergi.embit.domain.repositories.IGridDataRepository
import io.mockk.coEvery
import io.mockk.mockk
import kotlinx.coroutines.flow.flowOf
import kotlinx.coroutines.test.runTest
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

/**
 * Smoke tests for ObserveGridStatusUseCase
 * Tests Flow-based grid status observation
 */
class ObserveGridStatusUseCaseTest {

    private val mockRepository = mockk<IGridDataRepository>()
    private val useCase = ObserveGridStatusUseCase(mockRepository)

    @Test
    fun `should emit grid status updates from repository`() = runTest {
        // Given: Repository emits grid status updates
        val gridStatus1 = createGridStatus(stressLevel = GridStressLevel.LOW, renewablePercentage = 85.0)
        val gridStatus2 = createGridStatus(stressLevel = GridStressLevel.NORMAL, renewablePercentage = 65.0)

        coEvery { mockRepository.getUserLocation() } returns "California"
        coEvery {
            mockRepository.observeGridStatus("California")
        } returns flowOf(gridStatus1, gridStatus2)

        // When: Observing grid status
        val flow = useCase()

        // Then: Should emit both status updates
        flow.test {
            val first = awaitItem()
            assertEquals(GridStressLevel.LOW, first.stressLevel)
            assertTrue(first.carbonIntensity.renewablePercentage > 80)

            val second = awaitItem()
            assertEquals(GridStressLevel.NORMAL, second.stressLevel)
            assertTrue(second.carbonIntensity.renewablePercentage > 60)

            awaitComplete()
        }
    }

    @Test
    fun `should use user location to fetch grid status`() = runTest {
        // Given: User is in Texas
        val gridStatus = createGridStatus(stressLevel = GridStressLevel.MODERATE, renewablePercentage = 45.0)

        coEvery { mockRepository.getUserLocation() } returns "Texas"
        coEvery {
            mockRepository.observeGridStatus("Texas")
        } returns flowOf(gridStatus)

        // When: Observing grid status
        val flow = useCase()

        // Then: Should use Texas location
        flow.test {
            val status = awaitItem()
            assertEquals(GridStressLevel.MODERATE, status.stressLevel)
            awaitComplete()
        }
    }

    // Helper function to create test grid status
    private fun createGridStatus(
        stressLevel: GridStressLevel,
        renewablePercentage: Double
    ): GridStatus {
        return GridStatus(
            timestamp = System.currentTimeMillis(),
            stressLevel = stressLevel,
            carbonIntensity = CarbonIntensity(
                gramsPerKwh = 200.0,
                level = CarbonLevel.LOW,
                renewablePercentage = renewablePercentage
            ),
            pricing = GridPricing(
                pricePerKwh = 10.0,
                pricingTier = PricingTier.OFF_PEAK
            ),
            location = "Test Location"
        )
    }
}
