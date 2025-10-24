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
import kotlin.time.Duration.Companion.hours

/**
 * Unit tests for AnalyzeBatteryHealthUseCase
 */
class AnalyzeBatteryHealthUseCaseTest {

    private lateinit var repository: FakeBatteryRepository
    private lateinit var useCase: AnalyzeBatteryHealthUseCase

    @BeforeTest
    fun setup() {
        repository = FakeBatteryRepository()
        useCase = AnalyzeBatteryHealthUseCase(repository)
    }

    @Test
    fun `perfect health conditions return score of 100`() = runTest {
        // Given: Ideal battery conditions
        repository.setStatistics(
            BatteryStatistics(
                totalReadings = 1000,
                averageVoltage = 3800.0,
                averageAmperage = -500.0,
                averagePowerMilliwatts = -1900.0,
                averageTemperature = 25.0f, // Perfect temp
                maxTemperature = 30.0f,
                minTemperature = 20.0f,
                chargeCount = 10, // ~1 per day
                averageBatteryPercentage = 50.0,
                chargingTimePercentage = 20f, // Minimal charging time
                startTime = Clock.System.now() - 30.days,
                endTime = Clock.System.now(),
                dataPoints = emptyList()
            )
        )

        // When: Analyzing health
        val result = useCase.invoke()

        // Then: Should get perfect or near-perfect score
        assertTrue(result.isSuccess)
        val analysis = result.getOrNull()!!
        assertTrue(analysis.healthScore >= 95, "Health score should be 95+ for perfect conditions, got ${analysis.healthScore}")
    }

    @Test
    fun `high temperature reduces health score`() = runTest {
        // Given: High temperature conditions
        repository.setStatistics(
            createBaselineStatistics().copy(
                averageTemperature = 50.0f, // Very high
                maxTemperature = 55.0f
            )
        )

        // When: Analyzing health
        val result = useCase.invoke()

        // Then: Score should be significantly reduced
        assertTrue(result.isSuccess)
        val analysis = result.getOrNull()!!
        assertTrue(analysis.healthScore < 70, "High temperature should reduce score below 70, got ${analysis.healthScore}")
        assertTrue(analysis.recommendations.any { it.contains("temperature", ignoreCase = true) })
    }

    @Test
    fun `excessive charging frequency reduces score`() = runTest {
        // Given: Too many charge cycles
        repository.setStatistics(
            createBaselineStatistics().copy(
                chargeCount = 120 // 4 times per day for 30 days
            )
        )

        // When: Analyzing health
        val result = useCase.invoke()

        // Then: Score should be reduced
        assertTrue(result.isSuccess)
        val analysis = result.getOrNull()!!
        assertTrue(analysis.healthScore < 80, "Excessive charging should reduce score, got ${analysis.healthScore}")
        assertTrue(analysis.recommendations.any { it.contains("charging frequency", ignoreCase = true) })
    }

    @Test
    fun `high power draw reduces score`() = runTest {
        // Given: High power consumption
        repository.setStatistics(
            createBaselineStatistics().copy(
                averagePowerMilliwatts = -5000.0 // Very high draw
            )
        )

        // When: Analyzing health
        val result = useCase.invoke()

        // Then: Score should be reduced
        assertTrue(result.isSuccess)
        val analysis = result.getOrNull()!!
        assertTrue(analysis.healthScore < 85, "High power draw should reduce score, got ${analysis.healthScore}")
    }

    @Test
    fun `too much time charging reduces score`() = runTest {
        // Given: Device always plugged in
        repository.setStatistics(
            createBaselineStatistics().copy(
                chargingTimePercentage = 95f // Almost always charging
            )
        )

        // When: Analyzing health
        val result = useCase.invoke()

        // Then: Score should be reduced
        assertTrue(result.isSuccess)
        val analysis = result.getOrNull()!!
        assertTrue(analysis.healthScore < 85, "Excessive charging time should reduce score, got ${analysis.healthScore}")
        assertTrue(analysis.recommendations.any { it.contains("charging", ignoreCase = true) })
    }

    @Test
    fun `insufficient data returns low confidence`() = runTest {
        // Given: Very little data
        repository.setStatistics(
            createBaselineStatistics().copy(
                totalReadings = 10 // Very few readings
            )
        )

        // When: Analyzing health
        val result = useCase.invoke()

        // Then: Should succeed but indicate low confidence
        assertTrue(result.isSuccess)
        val analysis = result.getOrNull()!!
        assertTrue(
            analysis.recommendations.any { it.contains("more data", ignoreCase = true) },
            "Should recommend collecting more data"
        )
    }

    @Test
    fun `no statistics data returns failure`() = runTest {
        // Given: No data available
        repository.setStatistics(null)

        // When: Analyzing health
        val result = useCase.invoke()

        // Then: Should fail
        assertTrue(result.isFailure)
    }

    @Test
    fun `multiple factors compound to reduce score`() = runTest {
        // Given: Multiple poor conditions
        repository.setStatistics(
            createBaselineStatistics().copy(
                averageTemperature = 45.0f, // High temp
                chargeCount = 150, // Too frequent
                averagePowerMilliwatts = -4000.0, // High draw
                chargingTimePercentage = 80f // Too much charging
            )
        )

        // When: Analyzing health
        val result = useCase.invoke()

        // Then: Score should be significantly reduced
        assertTrue(result.isSuccess)
        val analysis = result.getOrNull()!!
        assertTrue(analysis.healthScore < 50, "Multiple poor factors should reduce score below 50, got ${analysis.healthScore}")
        assertTrue(analysis.recommendations.size >= 2, "Should have multiple recommendations")
    }

    @Test
    fun `degradation rate calculated correctly`() = runTest {
        // Given: Some usage data
        repository.setStatistics(createBaselineStatistics())

        // When: Analyzing health
        val result = useCase.invoke()

        // Then: Should calculate degradation rate
        assertTrue(result.isSuccess)
        val analysis = result.getOrNull()!!
        assertNotNull(analysis.estimatedDegradationRate)
        assertTrue(analysis.estimatedDegradationRate!! >= 0, "Degradation rate should be non-negative")
    }

    @Test
    fun `health score never exceeds 100`() = runTest {
        // Given: Perfect conditions (shouldn't happen but test boundary)
        repository.setStatistics(
            BatteryStatistics(
                totalReadings = 10000,
                averageVoltage = 4000.0,
                averageAmperage = 0.0,
                averagePowerMilliwatts = 0.0,
                averageTemperature = 20.0f,
                maxTemperature = 25.0f,
                minTemperature = 15.0f,
                chargeCount = 5,
                averageBatteryPercentage = 50.0,
                chargingTimePercentage = 10f,
                startTime = Clock.System.now() - 30.days,
                endTime = Clock.System.now(),
                dataPoints = emptyList()
            )
        )

        // When: Analyzing health
        val result = useCase.invoke()

        // Then: Score should not exceed 100
        assertTrue(result.isSuccess)
        val analysis = result.getOrNull()!!
        assertTrue(analysis.healthScore <= 100, "Health score should never exceed 100")
    }

    @Test
    fun `health score never goes below 0`() = runTest {
        // Given: Worst possible conditions
        repository.setStatistics(
            BatteryStatistics(
                totalReadings = 100,
                averageVoltage = 3000.0,
                averageAmperage = -10000.0,
                averagePowerMilliwatts = -10000.0,
                averageTemperature = 70.0f, // Extremely high
                maxTemperature = 80.0f,
                minTemperature = 60.0f,
                chargeCount = 500, // Way too frequent
                averageBatteryPercentage = 50.0,
                chargingTimePercentage = 99f, // Always charging
                startTime = Clock.System.now() - 30.days,
                endTime = Clock.System.now(),
                dataPoints = emptyList()
            )
        )

        // When: Analyzing health
        val result = useCase.invoke()

        // Then: Score should not go below 0
        assertTrue(result.isSuccess)
        val analysis = result.getOrNull()!!
        assertTrue(analysis.healthScore >= 0, "Health score should never be negative")
    }

    // Helper functions

    private fun createBaselineStatistics() = BatteryStatistics(
        totalReadings = 1000,
        averageVoltage = 3800.0,
        averageAmperage = -1000.0,
        averagePowerMilliwatts = -3800.0,
        averageTemperature = 30.0f,
        maxTemperature = 40.0f,
        minTemperature = 20.0f,
        chargeCount = 30, // Once per day
        averageBatteryPercentage = 50.0,
        chargingTimePercentage = 30f,
        startTime = Clock.System.now() - 30.days,
        endTime = Clock.System.now(),
        dataPoints = emptyList()
    )

    // Fake repository for testing
    private class FakeBatteryRepository : IBatteryRepository {
        private var statistics: BatteryStatistics? = null

        fun setStatistics(stats: BatteryStatistics?) {
            statistics = stats
        }

        override suspend fun calculateStatistics(startTime: Instant, endTime: Instant): Result<BatteryStatistics> {
            return statistics?.let { Result.success(it) }
                ?: Result.failure(Exception("No statistics available"))
        }

        // Unused methods for this test
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
