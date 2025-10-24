package eco.emergi.embit.domain.usecases

import eco.emergi.embit.domain.models.BatteryReading
import eco.emergi.embit.domain.models.BatteryState
import eco.emergi.embit.domain.models.BatteryStatistics
import eco.emergi.embit.domain.repositories.IBatteryRepository
import kotlinx.coroutines.flow.flowOf
import kotlinx.coroutines.test.runTest
import kotlinx.datetime.Clock
import kotlinx.datetime.Instant
import kotlin.test.*
import kotlin.time.Duration.Companion.days

/**
 * Unit tests for GenerateChargingRecommendationsUseCase
 */
class GenerateChargingRecommendationsUseCaseTest {

    private lateinit var repository: FakeBatteryRepository
    private lateinit var useCase: GenerateChargingRecommendationsUseCase

    @BeforeTest
    fun setup() {
        repository = FakeBatteryRepository()
        useCase = GenerateChargingRecommendationsUseCase(repository)
    }

    @Test
    fun `null reading returns failure`() = runTest {
        // Given: No current reading
        val result = useCase.invoke(null)

        // Then: Should fail
        assertTrue(result.isFailure)
        assertEquals("No current battery reading available", result.exceptionOrNull()?.message)
    }

    @Test
    fun `high battery charging returns unplug recommendation`() = runTest {
        // Given: Charging at 96%
        val reading = createReading(batteryPercentage = 96, isCharging = true)

        // When: Getting recommendations
        val result = useCase.invoke(reading)

        // Then: Should recommend unplugging
        assertTrue(result.isSuccess)
        val recommendations = result.getOrNull()!!
        assertTrue(recommendations.recommendations.isNotEmpty())
        val unpluRec = recommendations.recommendations.first()
        assertEquals(RecommendationPriority.HIGH, unplugRec.priority)
        assertTrue(unpluRec.action.contains("Unplug", ignoreCase = true))
    }

    @Test
    fun `medium battery charging returns consider unplugging`() = runTest {
        // Given: Charging at 87%
        val reading = createReading(batteryPercentage = 87, isCharging = true)

        // When: Getting recommendations
        val result = useCase.invoke(reading)

        // Then: Should suggest considering unplugging
        assertTrue(result.isSuccess)
        val recommendations = result.getOrNull()!!
        assertTrue(recommendations.recommendations.any {
            it.priority == RecommendationPriority.MEDIUM &&
            it.action.contains("unplugging", ignoreCase = true)
        })
    }

    @Test
    fun `low battery discharging returns charge soon`() = runTest {
        // Given: Discharging at 14%
        val reading = createReading(batteryPercentage = 14, isCharging = false)

        // When: Getting recommendations
        val result = useCase.invoke(reading)

        // Then: Should recommend charging
        assertTrue(result.isSuccess)
        val recommendations = result.getOrNull()!!
        val chargeRec = recommendations.recommendations.first()
        assertEquals(RecommendationPriority.HIGH, chargeRec.priority)
        assertTrue(chargeRec.action.contains("Charge", ignoreCase = true))
    }

    @Test
    fun `medium low battery discharging suggests consider charging`() = runTest {
        // Given: Discharging at 23%
        val reading = createReading(batteryPercentage = 23, isCharging = false)

        // When: Getting recommendations
        val result = useCase.invoke(reading)

        // Then: Should suggest considering charging
        assertTrue(result.isSuccess)
        val recommendations = result.getOrNull()!!
        assertTrue(recommendations.recommendations.any {
            it.priority == RecommendationPriority.MEDIUM &&
            it.action.contains("Consider charging", ignoreCase = true)
        })
    }

    @Test
    fun `high battery not charging returns no need to charge`() = runTest {
        // Given: Not charging at 90%
        val reading = createReading(batteryPercentage = 90, isCharging = false)

        // When: Getting recommendations
        val result = useCase.invoke(reading)

        // Then: Should say no need to charge
        assertTrue(result.isSuccess)
        val recommendations = result.getOrNull()!!
        assertTrue(recommendations.recommendations.any {
            it.priority == RecommendationPriority.LOW &&
            it.action.contains("No need", ignoreCase = true)
        })
    }

    @Test
    fun `very high temperature while charging returns critical warning`() = runTest {
        // Given: Charging at high temperature
        val reading = createReading(
            batteryPercentage = 50,
            isCharging = true,
            temperature = 46.0f
        )

        // When: Getting recommendations
        val result = useCase.invoke(reading)

        // Then: Should return critical temperature warning
        assertTrue(result.isSuccess)
        val recommendations = result.getOrNull()!!
        val tempRec = recommendations.recommendations.first { it.priority == RecommendationPriority.HIGH }
        assertTrue(tempRec.action.contains("Stop charging", ignoreCase = true))
        assertTrue(tempRec.reason.contains("temperature", ignoreCase = true))
    }

    @Test
    fun `elevated temperature while charging returns cooling recommendation`() = runTest {
        // Given: Charging at elevated temperature
        val reading = createReading(
            batteryPercentage = 50,
            isCharging = true,
            temperature = 42.0f
        )

        // When: Getting recommendations
        val result = useCase.invoke(reading)

        // Then: Should recommend cooling
        assertTrue(result.isSuccess)
        val recommendations = result.getOrNull()!!
        assertTrue(recommendations.recommendations.any {
            it.priority == RecommendationPriority.HIGH &&
            it.reason.contains("cool", ignoreCase = true)
        })
    }

    @Test
    fun `warm temperature while charging suggests improvement`() = runTest {
        // Given: Charging at warm temperature
        val reading = createReading(
            batteryPercentage = 50,
            isCharging = true,
            temperature = 37.0f
        )

        // When: Getting recommendations
        val result = useCase.invoke(reading)

        // Then: Should suggest improving cooling
        assertTrue(result.isSuccess)
        val recommendations = result.getOrNull()!!
        assertTrue(recommendations.recommendations.any {
            it.priority == RecommendationPriority.MEDIUM &&
            it.action.contains("cooling", ignoreCase = true)
        })
    }

    @Test
    fun `cold temperature while charging warns about efficiency`() = runTest {
        // Given: Charging in cold
        val reading = createReading(
            batteryPercentage = 50,
            isCharging = true,
            temperature = 8.0f
        )

        // When: Getting recommendations
        val result = useCase.invoke(reading)

        // Then: Should warn about cold charging
        assertTrue(result.isSuccess)
        val recommendations = result.getOrNull()!!
        assertTrue(recommendations.recommendations.any {
            it.priority == RecommendationPriority.MEDIUM &&
            it.action.contains("Warm", ignoreCase = true)
        })
    }

    @Test
    fun `excessive charging frequency detected`() = runTest {
        // Given: Too many charge cycles
        val reading = createReading(batteryPercentage = 50, isCharging = true)
        repository.setStatistics(
            createBaselineStatistics().copy(
                chargeCount = 25 // >3 per day for 7 days
            )
        )

        // When: Getting recommendations
        val result = useCase.invoke(reading)

        // Then: Should recommend reducing frequency
        assertTrue(result.isSuccess)
        val recommendations = result.getOrNull()!!
        assertTrue(recommendations.recommendations.any {
            it.action.contains("frequency", ignoreCase = true)
        })
    }

    @Test
    fun `excessive charging time detected`() = runTest {
        // Given: Device plugged in too much
        val reading = createReading(batteryPercentage = 50, isCharging = false)
        repository.setStatistics(
            createBaselineStatistics().copy(
                chargingTimePercentage = 75f // >70%
            )
        )

        // When: Getting recommendations
        val result = useCase.invoke(reading)

        // Then: Should recommend reducing time on charger
        assertTrue(result.isSuccess)
        val recommendations = result.getOrNull()!!
        assertTrue(recommendations.recommendations.any {
            it.action.contains("time on charger", ignoreCase = true)
        })
    }

    @Test
    fun `too few charges detected`() = runTest {
        // Given: Letting battery drain too low
        val reading = createReading(batteryPercentage = 50, isCharging = false)
        repository.setStatistics(
            createBaselineStatistics().copy(
                chargeCount = 2 // <0.5 per day for 7 days
            )
        )

        // When: Getting recommendations
        val result = useCase.invoke(reading)

        // Then: Should recommend charging more regularly
        assertTrue(result.isSuccess)
        val recommendations = result.getOrNull()!!
        assertTrue(recommendations.recommendations.any {
            it.action.contains("more regularly", ignoreCase = true)
        })
    }

    @Test
    fun `urgent count calculated correctly`() = runTest {
        // Given: Multiple urgent conditions
        val reading = createReading(
            batteryPercentage = 96, // Too high
            isCharging = true,
            temperature = 46.0f // Too hot
        )

        // When: Getting recommendations
        val result = useCase.invoke(reading)

        // Then: Should have 2 urgent recommendations
        assertTrue(result.isSuccess)
        val recommendations = result.getOrNull()!!
        assertEquals(2, recommendations.urgentCount)
    }

    @Test
    fun `primary recommendation is highest priority`() = runTest {
        // Given: Multiple recommendations with different priorities
        val reading = createReading(
            batteryPercentage = 96,
            isCharging = true
        )

        // When: Getting recommendations
        val result = useCase.invoke(reading)

        // Then: Primary should be HIGH priority
        assertTrue(result.isSuccess)
        val recommendations = result.getOrNull()!!
        assertNotNull(recommendations.primaryRecommendation)
        assertEquals(RecommendationPriority.HIGH, recommendations.primaryRecommendation!!.priority)
    }

    @Test
    fun `recommendations include expected impact`() = runTest {
        // Given: Any condition with recommendations
        val reading = createReading(batteryPercentage = 96, isCharging = true)

        // When: Getting recommendations
        val result = useCase.invoke(reading)

        // Then: All recommendations should have impact description
        assertTrue(result.isSuccess)
        val recommendations = result.getOrNull()!!
        recommendations.recommendations.forEach { rec ->
            assertTrue(rec.expectedImpact.isNotEmpty(), "Expected impact should not be empty")
        }
    }

    @Test
    fun `good battery conditions produce minimal recommendations`() = runTest {
        // Given: Ideal conditions
        val reading = createReading(
            batteryPercentage = 50,
            isCharging = false,
            temperature = 25.0f
        )
        repository.setStatistics(
            createBaselineStatistics().copy(
                chargeCount = 7, // Once per day
                chargingTimePercentage = 30f // Reasonable
            )
        )

        // When: Getting recommendations
        val result = useCase.invoke(reading)

        // Then: Should have minimal or low priority recommendations
        assertTrue(result.isSuccess)
        val recommendations = result.getOrNull()!!
        assertTrue(
            recommendations.urgentCount == 0,
            "Should have no urgent recommendations for good conditions"
        )
    }

    @Test
    fun `multiple issues generate multiple recommendations`() = runTest {
        // Given: Several problems
        val reading = createReading(
            batteryPercentage = 96,
            isCharging = true,
            temperature = 42.0f
        )
        repository.setStatistics(
            createBaselineStatistics().copy(
                chargeCount = 30, // Too frequent
                chargingTimePercentage = 80f // Too much
            )
        )

        // When: Getting recommendations
        val result = useCase.invoke(reading)

        // Then: Should have multiple recommendations
        assertTrue(result.isSuccess)
        val recommendations = result.getOrNull()!!
        assertTrue(
            recommendations.recommendations.size >= 3,
            "Should have at least 3 recommendations for multiple issues"
        )
    }

    // Helper functions

    private fun createReading(
        batteryPercentage: Int,
        isCharging: Boolean,
        temperature: Float? = 30.0f
    ) = BatteryReading(
        id = 0,
        timestamp = Clock.System.now(),
        voltageMillivolts = 3800,
        amperageMicroamps = if (isCharging) 1000000 else -1000000,
        temperatureCelsius = temperature,
        batteryPercentage = batteryPercentage,
        batteryState = if (isCharging) BatteryState.Charging else BatteryState.Discharging
    )

    private fun createBaselineStatistics() = BatteryStatistics(
        totalReadings = 1000,
        averageVoltage = 3800.0,
        averageAmperage = -1000.0,
        averagePowerMilliwatts = -3800.0,
        averageTemperature = 30.0f,
        maxTemperature = 40.0f,
        minTemperature = 20.0f,
        chargeCount = 7, // Once per day for 7 days
        averageBatteryPercentage = 50.0,
        chargingTimePercentage = 30f,
        startTime = Clock.System.now() - 7.days,
        endTime = Clock.System.now(),
        dataPoints = emptyList()
    )

    // Fake repository
    private class FakeBatteryRepository : IBatteryRepository {
        private var statistics: BatteryStatistics? = null

        fun setStatistics(stats: BatteryStatistics?) {
            statistics = stats
        }

        override suspend fun calculateStatistics(startTime: Instant, endTime: Instant): Result<BatteryStatistics> {
            return statistics?.let { Result.success(it) }
                ?: Result.failure(Exception("No statistics"))
        }

        // Unused methods
        override suspend fun insertReading(reading: BatteryReading) {}
        override suspend fun getAllReadings() = flowOf<List<BatteryReading>>(emptyList())
        override suspend fun getReadingsByTimeRange(startTime: Instant, endTime: Instant) = flowOf<List<BatteryReading>>(emptyList())
        override suspend fun getRecentReadings(limit: Int) = flowOf<List<BatteryReading>>(emptyList())
        override suspend fun getReadingById(id: Long): BatteryReading? = null
        override suspend fun deleteReading(id: Long) {}
        override suspend fun deleteAllReadings() {}
        override suspend fun deleteReadingsByTimeRange(startTime: Instant, endTime: Instant) {}
        override suspend fun getReadingsCount(): Long = 0
        override suspend fun getOldestReading(): BatteryReading? = null
        override suspend fun getLatestReading(): BatteryReading? = null
    }
}
