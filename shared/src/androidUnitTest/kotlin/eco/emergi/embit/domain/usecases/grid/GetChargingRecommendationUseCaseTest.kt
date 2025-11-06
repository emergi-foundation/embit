package eco.emergi.embit.domain.usecases.grid

import eco.emergi.embit.domain.models.*
import eco.emergi.embit.domain.repositories.IGridDataRepository
import io.mockk.coEvery
import io.mockk.mockk
import kotlinx.coroutines.test.runTest
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

/**
 * Smoke tests for GetChargingRecommendationUseCase
 * Tests basic happy path scenarios to ensure grid-aware charging works
 */
class GetChargingRecommendationUseCaseTest {

    private val mockRepository = mockk<IGridDataRepository>()
    private val useCase = GetChargingRecommendationUseCase(mockRepository)

    @Test
    fun `should recommend charging when grid is clean and renewable`() = runTest {
        // Given: Clean grid with high renewable energy
        val cleanGridStatus = GridStatus(
            timestamp = System.currentTimeMillis(),
            stressLevel = GridStressLevel.LOW,
            carbonIntensity = CarbonIntensity(
                gramsPerKwh = 80.0,
                level = CarbonLevel.VERY_LOW,
                renewablePercentage = 85.0
            ),
            pricing = GridPricing(
                pricePerKwh = 5.0,
                pricingTier = PricingTier.OFF_PEAK
            ),
            location = "California"
        )

        val recommendation = ChargingRecommendation(
            shouldCharge = true,
            confidence = 0.95,
            reason = "Clean energy available - great time to charge!",
            savingsEstimate = 15.0,
            carbonSavingsEstimate = 150.0,
            bestTimeToCharge = null,
            gridStatus = cleanGridStatus
        )

        coEvery { mockRepository.getUserLocation() } returns "California"
        coEvery {
            mockRepository.getChargingRecommendation(
                location = "California",
                currentBatteryLevel = 30,
                targetBatteryLevel = 80
            )
        } returns Result.success(recommendation)

        // When: Getting charging recommendation with low battery
        val result = useCase(currentBatteryLevel = 30, targetBatteryLevel = 80)

        // Then: Should recommend charging
        assertTrue(result.isSuccess)
        val rec = result.getOrNull()!!
        assertTrue(rec.shouldCharge)
        assertTrue(rec.confidence > 0.9)
        assertEquals(GridStressLevel.LOW, rec.gridStatus.stressLevel)
        assertTrue(rec.gridStatus.carbonIntensity.renewablePercentage > 80)
    }

    @Test
    fun `should not recommend charging when grid is dirty and stressed`() = runTest {
        // Given: Stressed grid with high carbon intensity
        val dirtyGridStatus = GridStatus(
            timestamp = System.currentTimeMillis(),
            stressLevel = GridStressLevel.HIGH,
            carbonIntensity = CarbonIntensity(
                gramsPerKwh = 650.0,
                level = CarbonLevel.VERY_HIGH,
                renewablePercentage = 15.0
            ),
            pricing = GridPricing(
                pricePerKwh = 25.0,
                pricingTier = PricingTier.ON_PEAK
            ),
            location = "Texas"
        )

        val recommendation = ChargingRecommendation(
            shouldCharge = false,
            confidence = 0.9,
            reason = "High grid stress and expensive peak pricing - wait to charge",
            savingsEstimate = 30.0,
            carbonSavingsEstimate = 400.0,
            bestTimeToCharge = System.currentTimeMillis() + 7200000, // 2 hours later
            gridStatus = dirtyGridStatus
        )

        coEvery { mockRepository.getUserLocation() } returns "Texas"
        coEvery {
            mockRepository.getChargingRecommendation(
                location = "Texas",
                currentBatteryLevel = 60,
                targetBatteryLevel = 80
            )
        } returns Result.success(recommendation)

        // When: Getting charging recommendation during peak
        val result = useCase(currentBatteryLevel = 60, targetBatteryLevel = 80)

        // Then: Should not recommend charging
        assertTrue(result.isSuccess)
        val rec = result.getOrNull()!!
        assertFalse(rec.shouldCharge)
        assertEquals(GridStressLevel.HIGH, rec.gridStatus.stressLevel)
        assertTrue(rec.gridStatus.carbonIntensity.renewablePercentage < 20)
        assertTrue(rec.savingsEstimate!! > 20)
    }

    @Test
    fun `should return failure for invalid battery level`() = runTest {
        // When: Using invalid battery level
        val result = useCase(currentBatteryLevel = 150, targetBatteryLevel = 80)

        // Then: Should fail with error
        assertTrue(result.isFailure)
        val exception = result.exceptionOrNull()
        assertTrue(exception?.message?.contains("Invalid battery level") == true)
    }
}
