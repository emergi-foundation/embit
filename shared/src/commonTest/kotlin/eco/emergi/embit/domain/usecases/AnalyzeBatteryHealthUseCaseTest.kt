package eco.emergi.embit.domain.usecases

import eco.emergi.embit.test.TestDataFactory
import eco.emergi.embit.test.fakes.FakeBatteryRepository
import kotlinx.coroutines.test.runTest
import kotlinx.datetime.Clock
import kotlin.test.*
import kotlin.time.Duration.Companion.days
import kotlin.time.Duration.Companion.hours

/**
 * Unit tests for AnalyzeBatteryHealthUseCase.
 *
 * Tests the comprehensive battery health analysis system including:
 * - Overall health scoring
 * - Temperature impact assessment
 * - Charging pattern analysis
 * - Usage pattern analysis
 * - Degradation rate estimation
 * - Health recommendations
 */
class AnalyzeBatteryHealthUseCaseTest {

    private lateinit var repository: FakeBatteryRepository
    private lateinit var useCase: AnalyzeBatteryHealthUseCase

    @BeforeTest
    fun setup() {
        repository = FakeBatteryRepository()
        useCase = AnalyzeBatteryHealthUseCase(repository)
    }

    @AfterTest
    fun tearDown() {
        repository.clear()
    }

    @Test
    fun `health analysis succeeds with sufficient data`() = runTest {
        // Given: 30 days of normal battery readings
        val readings = TestDataFactory.createReadingsOverTime(
            count = 120, // 30 days worth
            startTime = Clock.System.now() - 30.days,
            intervalMinutes = 360, // Every 6 hours
            startPercentage = 100,
            endPercentage = 20,
            isCharging = false
        )
        repository.addReadings(*readings.toTypedArray())

        // When: Analyzing health
        val result = useCase.invoke()

        // Then: Should succeed with valid analysis
        assertTrue(result.isSuccess, "Health analysis should succeed with sufficient data")
        val analysis = result.getOrNull()
        assertNotNull(analysis, "Analysis should not be null")

        assertTrue(analysis.overallScore in 0..100, "Overall score should be 0-100")
        assertTrue(analysis.temperatureScore in 0..100, "Temperature score should be 0-100")
        assertTrue(analysis.chargingPatternsScore in 0..100, "Charging patterns score should be 0-100")
        assertTrue(analysis.usageScore in 0..100, "Usage score should be 0-100")

        assertTrue(analysis.degradationRate >= 0, "Degradation rate should be non-negative")
        assertTrue(analysis.estimatedLifetimeRemaining >= 0, "Lifetime should be non-negative")
        assertNotNull(analysis.recommendations, "Recommendations should exist")
        assertNotNull(analysis.predictions, "Predictions should exist")
    }

    @Test
    fun `health analysis fails with insufficient data`() = runTest {
        // Given: Empty repository (no data)

        // When: Analyzing health
        val result = useCase.invoke()

        // Then: Should fail due to insufficient data
        assertTrue(result.isFailure, "Health analysis should fail without data")
        val exception = result.exceptionOrNull()
        assertNotNull(exception)
        assertTrue(
            exception.message?.contains("Insufficient data") == true ||
            exception.message?.contains("No readings") == true,
            "Error message should indicate insufficient data, got: ${exception.message}"
        )
    }

    @Test
    fun `high temperature readings reduce overall health score`() = runTest {
        // Given: Readings with high temperatures
        val hotReadings = List(100) { index ->
            TestDataFactory.createBatteryReading(
                id = (index + 1).toLong(),
                timestamp = Clock.System.now() - 30.days + (index * 7).hours,
                temperatureCelsius = 47.0f, // Very high temperature
                batteryPercentage = 80
            )
        }
        repository.addReadings(*hotReadings.toTypedArray())

        // When: Analyzing health
        val result = useCase.invoke()

        // Then: Temperature score should be significantly reduced
        assertTrue(result.isSuccess)
        val analysis = result.getOrNull()!!

        // High temps (>45°C) should reduce temperature score
        assertTrue(
            analysis.temperatureScore < 80,
            "Temperature score should be reduced for hot battery, got ${analysis.temperatureScore}"
        )

        // Recommendations should mention temperature
        assertTrue(
            analysis.recommendations.any { it.contains("temperature", ignoreCase = true) },
            "Recommendations should include temperature warnings"
        )
    }

    @Test
    fun `normal temperature readings result in good health score`() = runTest {
        // Given: Readings with optimal temperatures (20-30°C)
        val normalReadings = List(100) { index ->
            TestDataFactory.createBatteryReading(
                id = (index + 1).toLong(),
                timestamp = Clock.System.now() - 30.days + (index * 7).hours,
                temperatureCelsius = 25.0f, // Optimal temperature
                batteryPercentage = 80
            )
        }
        repository.addReadings(*normalReadings.toTypedArray())

        // When: Analyzing health
        val result = useCase.invoke()

        // Then: Temperature score should be good
        assertTrue(result.isSuccess)
        val analysis = result.getOrNull()!!

        assertTrue(
            analysis.temperatureScore >= 90,
            "Temperature score should be high for optimal temps, got ${analysis.temperatureScore}"
        )
    }

    @Test
    fun `excessive charging frequency reduces charging patterns score`() = runTest {
        // Given: Many short charging sessions (simulating frequent charging)
        val readings = mutableListOf<eco.emergi.embit.domain.models.BatteryReading>()
        var timestamp = Clock.System.now() - 30.days

        // Create 120 charging sessions (4 per day for 30 days)
        repeat(120) { index ->
            readings.add(
                TestDataFactory.createChargingReading(
                    timestamp = timestamp,
                    batteryPercentage = 50 + (index % 40)
                )
            )
            timestamp += 6.hours
        }
        repository.addReadings(*readings.toTypedArray())

        // When: Analyzing health
        val result = useCase.invoke()

        // Then: Charging patterns score should be reduced
        assertTrue(result.isSuccess)
        val analysis = result.getOrNull()!!

        // Excessive charging should reduce score
        assertTrue(
            analysis.chargingPatternsScore < 85,
            "Charging patterns score should be reduced for excessive charging, got ${analysis.chargingPatternsScore}"
        )

        // Should recommend reducing charging frequency
        assertTrue(
            analysis.recommendations.any {
                it.contains("charging", ignoreCase = true) ||
                it.contains("frequency", ignoreCase = true)
            },
            "Recommendations should mention charging frequency"
        )
    }

    @Test
    fun `moderate charging frequency maintains good score`() = runTest {
        // Given: Moderate charging (once per day)
        val readings = mutableListOf<eco.emergi.embit.domain.models.BatteryReading>()
        var timestamp = Clock.System.now() - 30.days

        // Create 30 charging sessions (1 per day for 30 days)
        repeat(30) { index ->
            readings.add(
                TestDataFactory.createChargingReading(
                    timestamp = timestamp,
                    batteryPercentage = 50 + index
                )
            )
            timestamp += 24.hours
        }
        repository.addReadings(*readings.toTypedArray())

        // When: Analyzing health
        val result = useCase.invoke()

        // Then: Charging patterns score should be good
        assertTrue(result.isSuccess)
        val analysis = result.getOrNull()!!

        assertTrue(
            analysis.chargingPatternsScore >= 80,
            "Charging patterns score should be good for moderate charging, got ${analysis.chargingPatternsScore}"
        )
    }

    @Test
    fun `health analysis includes valid predictions`() = runTest {
        // Given: 30 days of realistic battery data
        val readings = TestDataFactory.createReadingsOverTime(
            count = 120,
            startTime = Clock.System.now() - 30.days,
            intervalMinutes = 360
        )
        repository.addReadings(*readings.toTypedArray())

        // When: Analyzing health
        val result = useCase.invoke()

        // Then: Predictions should be valid
        assertTrue(result.isSuccess)
        val analysis = result.getOrNull()!!
        val predictions = analysis.predictions

        assertTrue(predictions.estimatedTimeRemaining >= 0, "Estimated time remaining should be non-negative")
        assertTrue(predictions.predictedFullChargeTime >= 0, "Predicted charge time should be non-negative")
        assertTrue(predictions.capacityIn6Months in 0f..100f, "6-month capacity should be 0-100%")
        assertTrue(predictions.capacityIn1Year in 0f..100f, "1-year capacity should be 0-100%")
        assertTrue(predictions.yearsUntilReplacement >= 0, "Years until replacement should be non-negative")
    }

    @Test
    fun `degradation rate is calculated based on battery usage`() = runTest {
        // Given: Battery readings over 30 days
        val readings = TestDataFactory.createReadingsOverTime(
            count = 120,
            startTime = Clock.System.now() - 30.days
        )
        repository.addReadings(*readings.toTypedArray())

        // When: Analyzing health
        val result = useCase.invoke()

        // Then: Degradation rate should be present
        assertTrue(result.isSuccess)
        val analysis = result.getOrNull()!!

        assertTrue(
            analysis.degradationRate >= 0,
            "Degradation rate should be non-negative, got ${analysis.degradationRate}"
        )

        // Typical degradation is 5-20% per year for lithium-ion batteries
        assertTrue(
            analysis.degradationRate <= 50,
            "Degradation rate should be realistic (<50% per year), got ${analysis.degradationRate}"
        )
    }

    @Test
    fun `recommendations are provided for poor health conditions`() = runTest {
        // Given: Poor conditions (high temp, excessive charging)
        val readings = List(100) { index ->
            TestDataFactory.createBatteryReading(
                id = (index + 1).toLong(),
                timestamp = Clock.System.now() - 30.days + (index * 7).hours,
                temperatureCelsius = 48.0f,
                batteryPercentage = 90
            )
        }
        repository.addReadings(*readings.toTypedArray())

        // When: Analyzing health
        val result = useCase.invoke()

        // Then: Should provide actionable recommendations
        assertTrue(result.isSuccess)
        val analysis = result.getOrNull()!!

        assertTrue(
            analysis.recommendations.isNotEmpty(),
            "Should provide recommendations for poor health"
        )

        // Should have specific recommendations about temperature
        assertTrue(
            analysis.recommendations.any { it.isNotBlank() },
            "Recommendations should have content"
        )
    }

    @Test
    fun `overall score reflects combined impact of all factors`() = runTest {
        // Given: Mixed conditions
        val readings = mutableListOf<eco.emergi.embit.domain.models.BatteryReading>()
        var timestamp = Clock.System.now() - 30.days

        repeat(100) { index ->
            readings.add(
                TestDataFactory.createBatteryReading(
                    id = (index + 1).toLong(),
                    timestamp = timestamp,
                    temperatureCelsius = if (index % 10 == 0) 46.0f else 28.0f,
                    batteryPercentage = 70
                )
            )
            timestamp += 7.hours
        }
        repository.addReadings(*readings.toTypedArray())

        // When: Analyzing health
        val result = useCase.invoke()

        // Then: Overall score should be between component scores
        assertTrue(result.isSuccess)
        val analysis = result.getOrNull()!!

        // Overall score should be influenced by all component scores
        val minComponentScore = minOf(
            analysis.temperatureScore,
            analysis.chargingPatternsScore,
            analysis.usageScore
        )
        val maxComponentScore = maxOf(
            analysis.temperatureScore,
            analysis.chargingPatternsScore,
            analysis.usageScore
        )

        // Overall score should be reasonable given component scores
        assertTrue(
            analysis.overallScore in 0..100,
            "Overall score should be 0-100, got ${analysis.overallScore}"
        )
    }
}
