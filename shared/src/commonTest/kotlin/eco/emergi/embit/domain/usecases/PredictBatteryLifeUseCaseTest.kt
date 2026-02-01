package eco.emergi.embit.domain.usecases

import eco.emergi.embit.domain.models.BatteryReading
import eco.emergi.embit.domain.models.BatteryState
import eco.emergi.embit.test.fakes.FakeBatteryRepository
import kotlinx.coroutines.test.runTest
import kotlinx.datetime.Clock
import kotlinx.datetime.Instant
import kotlin.test.*
import kotlin.time.Duration.Companion.minutes

/**
 * Unit tests for PredictBatteryLifeUseCase
 */
class PredictBatteryLifeUseCaseTest {

    private lateinit var repository: FakeBatteryRepository
    private lateinit var useCase: PredictBatteryLifeUseCase

    @BeforeTest
    fun setup() {
        repository = FakeBatteryRepository()
        useCase = PredictBatteryLifeUseCase(repository)
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
    fun `charging prediction with steady rate`() = runTest {
        // Given: Charging at 10% per hour, currently at 50%
        val now = Clock.System.now()
        val currentReading = createReading(
            timestamp = now,
            percentage = 50,
            isCharging = true
        )

        // Historical data: gained 10% in last hour
        repository.setRecentReadings(
            listOf(
                createReading(now - 60.minutes, 40, true),
                createReading(now - 30.minutes, 45, true),
                currentReading
            )
        )

        // When: Predicting
        val result = useCase.invoke(currentReading)

        // Then: Should predict ~5 hours to full (50% remaining / 10% per hour)
        assertTrue(result.isSuccess)
        val prediction = result.getOrNull()!!
        assertTrue(prediction.isCharging)
        assertTrue(prediction.hoursRemaining in 4.5..5.5, "Expected ~5 hours, got ${prediction.hoursRemaining}")
        assertTrue(prediction.percentagePerHour in 9.0..11.0, "Expected ~10%/hr, got ${prediction.percentagePerHour}")
        assertEquals(ConfidenceLevel.MEDIUM, prediction.confidenceLevel)
    }

    @Test
    fun `discharging prediction with steady rate`() = runTest {
        // Given: Discharging at 20% per hour, currently at 60%
        val now = Clock.System.now()
        val currentReading = createReading(
            timestamp = now,
            percentage = 60,
            isCharging = false
        )

        // Historical data: lost 20% in last hour
        repository.setRecentReadings(
            listOf(
                createReading(now - 60.minutes, 80, false),
                createReading(now - 30.minutes, 70, false),
                currentReading
            )
        )

        // When: Predicting
        val result = useCase.invoke(currentReading)

        // Then: Should predict ~3 hours remaining (60% / 20% per hour)
        assertTrue(result.isSuccess)
        val prediction = result.getOrNull()!!
        assertFalse(prediction.isCharging)
        assertTrue(prediction.hoursRemaining in 2.5..3.5, "Expected ~3 hours, got ${prediction.hoursRemaining}")
        assertTrue(prediction.percentagePerHour in -21.0..-19.0, "Expected ~-20%/hr, got ${prediction.percentagePerHour}")
    }

    @Test
    fun `high confidence with many data points`() = runTest {
        // Given: Many readings over long period
        val now = Clock.System.now()
        val currentReading = createReading(now, 50, true)

        // 20 readings over 2 hours
        val readings = (0..20).map { i ->
            createReading(
                timestamp = now - (120 - i * 6).minutes,
                percentage = 30 + i,
                isCharging = true
            )
        }
        repository.setRecentReadings(readings)

        // When: Predicting
        val result = useCase.invoke(currentReading)

        // Then: Should have HIGH confidence
        assertTrue(result.isSuccess)
        val prediction = result.getOrNull()!!
        assertEquals(ConfidenceLevel.HIGH, prediction.confidenceLevel)
        assertTrue(prediction.basedOnMinutes >= 60, "Should be based on 60+ minutes of data")
    }

    @Test
    fun `low confidence with minimal data`() = runTest {
        // Given: Only 2 readings
        val now = Clock.System.now()
        val currentReading = createReading(now, 50, true)

        repository.setRecentReadings(
            listOf(
                createReading(now - 10.minutes, 48, true),
                currentReading
            )
        )

        // When: Predicting
        val result = useCase.invoke(currentReading)

        // Then: Should have LOW confidence
        assertTrue(result.isSuccess)
        val prediction = result.getOrNull()!!
        assertEquals(ConfidenceLevel.LOW, prediction.confidenceLevel)
        assertTrue(prediction.basedOnMinutes < 30)
    }

    @Test
    fun `zero rate returns very long time`() = runTest {
        // Given: Battery not changing (e.g., at 100% charged, idle)
        val now = Clock.System.now()
        val currentReading = createReading(now, 100, false)

        repository.setRecentReadings(
            listOf(
                createReading(now - 60.minutes, 100, false),
                createReading(now - 30.minutes, 100, false),
                currentReading
            )
        )

        // When: Predicting
        val result = useCase.invoke(currentReading)

        // Then: Should return very long time
        assertTrue(result.isSuccess)
        val prediction = result.getOrNull()!!
        assertTrue(prediction.hoursRemaining > 100, "Should predict >100 hours with zero drain")
        assertEquals(0.0, prediction.percentagePerHour, 0.1)
    }

    @Test
    fun `fast charging detected correctly`() = runTest {
        // Given: Fast charging (50% per hour)
        val now = Clock.System.now()
        val currentReading = createReading(now, 50, true)

        repository.setRecentReadings(
            listOf(
                createReading(now - 60.minutes, 0, true),
                currentReading
            )
        )

        // When: Predicting
        val result = useCase.invoke(currentReading)

        // Then: Should predict ~1 hour to full
        assertTrue(result.isSuccess)
        val prediction = result.getOrNull()!!
        assertTrue(prediction.hoursRemaining in 0.8..1.2, "Expected ~1 hour, got ${prediction.hoursRemaining}")
        assertTrue(prediction.percentagePerHour > 40.0, "Should detect fast charging")
    }

    @Test
    fun `heavy usage detected correctly`() = runTest {
        // Given: Heavy usage (40% drain per hour)
        val now = Clock.System.now()
        val currentReading = createReading(now, 20, false)

        repository.setRecentReadings(
            listOf(
                createReading(now - 60.minutes, 60, false),
                currentReading
            )
        )

        // When: Predicting
        val result = useCase.invoke(currentReading)

        // Then: Should predict ~30 minutes remaining
        assertTrue(result.isSuccess)
        val prediction = result.getOrNull()!!
        assertTrue(prediction.hoursRemaining < 1.0, "Expected <1 hour with heavy usage, got ${prediction.hoursRemaining}")
        assertTrue(prediction.percentagePerHour < -30.0, "Should detect heavy usage")
    }

    @Test
    fun `formatted time displays correctly for hours`() = runTest {
        // Given: 2.5 hours remaining
        val now = Clock.System.now()
        val currentReading = createReading(now, 50, true)

        repository.setRecentReadings(
            listOf(
                createReading(now - 60.minutes, 30, true),
                currentReading
            )
        )

        // When: Predicting
        val result = useCase.invoke(currentReading)

        // Then: Should format correctly
        assertTrue(result.isSuccess)
        val prediction = result.getOrNull()!!
        assertTrue(prediction.formattedTime.contains("h"), "Should contain hours: ${prediction.formattedTime}")
    }

    @Test
    fun `prediction handles edge case of 100 percent charging`() = runTest {
        // Given: Already at 100%, charging
        val now = Clock.System.now()
        val currentReading = createReading(now, 100, true)

        repository.setRecentReadings(
            listOf(
                createReading(now - 30.minutes, 98, true),
                currentReading
            )
        )

        // When: Predicting
        val result = useCase.invoke(currentReading)

        // Then: Should predict zero or very short time
        assertTrue(result.isSuccess)
        val prediction = result.getOrNull()!!
        assertTrue(prediction.hoursRemaining < 0.5, "Should be nearly complete")
    }

    @Test
    fun `prediction handles edge case of 0 percent`() = runTest {
        // Given: At 0%, discharging (impossible but test boundary)
        val now = Clock.System.now()
        val currentReading = createReading(now, 0, false)

        repository.setRecentReadings(
            listOf(
                createReading(now - 30.minutes, 5, false),
                currentReading
            )
        )

        // When: Predicting
        val result = useCase.invoke(currentReading)

        // Then: Should predict zero time
        assertTrue(result.isSuccess)
        val prediction = result.getOrNull()!!
        assertEquals(0.0, prediction.hoursRemaining, 0.1)
    }

    @Test
    fun `insufficient historical data returns low confidence`() = runTest {
        // Given: Only current reading
        val now = Clock.System.now()
        val currentReading = createReading(now, 50, true)

        repository.setRecentReadings(listOf(currentReading))

        // When: Predicting
        val result = useCase.invoke(currentReading)

        // Then: Should succeed but with low confidence
        assertTrue(result.isSuccess)
        val prediction = result.getOrNull()!!
        assertEquals(ConfidenceLevel.LOW, prediction.confidenceLevel)
    }

    // Helper functions

    private fun createReading(
        timestamp: Instant,
        percentage: Int,
        isCharging: Boolean
    ): BatteryReading = BatteryReading(
        id = 0,
        timestamp = timestamp,
        voltageMillivolts = 3800,
        amperageMicroamps = if (isCharging) 1000000L else -1000000L,
        temperatureCelsius = 25.0f,
        batteryPercentage = percentage,
        batteryState = if (isCharging) BatteryState.Charging(eco.emergi.embit.domain.models.ChargingType.AC) else BatteryState.Discharging
    )
}
