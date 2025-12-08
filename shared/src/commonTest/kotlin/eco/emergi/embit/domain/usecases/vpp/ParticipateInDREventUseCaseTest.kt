package eco.emergi.embit.domain.usecases.vpp

import eco.emergi.embit.domain.models.DemandResponseEvent
import eco.emergi.embit.domain.models.EventPerformance
import eco.emergi.embit.domain.models.EventPriority
import eco.emergi.embit.domain.models.ParticipationSettings
import eco.emergi.embit.domain.repositories.IVppRepository
import eco.emergi.embit.domain.vpp.VppControlExecutor
import io.mockk.coEvery
import io.mockk.coVerify
import io.mockk.coVerifySequence
import io.mockk.mockk
import kotlinx.coroutines.test.runTest
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class ParticipateInDREventUseCaseTest {

    private val mockVppExecutor = mockk<VppControlExecutor>()
    private val mockRepository = mockk<IVppRepository>()
    private val useCase = ParticipateInDREventUseCase(mockVppExecutor, mockRepository)

    // Test data
    private val testSettings = ParticipationSettings(
        enabled = true,
        minimumPriority = EventPriority.MEDIUM,
        allowBatterySaver = true,
        allowBackgroundSync = true,
        allowNetworkControl = true,
        maxDurationMinutes = 120
    )

    private val currentTime = System.currentTimeMillis()

    private val testEvent = DemandResponseEvent(
        eventId = "event-123",
        startTime = currentTime,
        endTime = currentTime + 60_000, // 1 minute from now
        targetReductionWatts = 50.0,
        priority = EventPriority.HIGH,
        message = "Test event",
        location = "California"
    )

    private val testPerformance = EventPerformance(
        eventId = "event-123",
        userId = "user-123",
        deviceId = "device-123",
        startTime = currentTime,
        endTime = currentTime + 60_000,
        baselinePowerWatts = 100.0,
        actualPowerWatts = 50.0,
        reductionWatts = 50.0,
        reductionPercentage = 50.0,
        actionsApplied = listOf("Battery Saver Mode"),
        completed = true
    )

    @Test
    fun `should successfully participate in DR event and return performance`() = runTest {
        // Given
        coEvery { mockRepository.getParticipationSettings() } returns testSettings
        coEvery {
            mockVppExecutor.executeDemandResponse(testEvent, testSettings)
        } returns testPerformance
        coEvery { mockRepository.saveEventPerformance(testPerformance) } returns Unit
        coEvery { mockVppExecutor.restoreNormalOperation() } returns Unit

        // When
        val result = useCase(testEvent)

        // Then
        assertTrue(result.isSuccess)
        assertEquals(testPerformance, result.getOrNull())

        // Verify sequence of calls
        coVerifySequence {
            mockRepository.getParticipationSettings()
            mockVppExecutor.executeDemandResponse(testEvent, testSettings)
            mockRepository.saveEventPerformance(testPerformance)
            mockVppExecutor.restoreNormalOperation()
        }
    }

    @Test
    fun `should handle exception during DR event execution`() = runTest {
        // Given
        val exception = Exception("Execution failed")
        coEvery { mockRepository.getParticipationSettings() } returns testSettings
        coEvery {
            mockVppExecutor.executeDemandResponse(testEvent, testSettings)
        } throws exception

        // When
        val result = useCase(testEvent)

        // Then
        assertTrue(result.isFailure)
        assertEquals(exception, result.exceptionOrNull())

        // Verify executor was called but save was not
        coVerify(exactly = 1) { mockRepository.getParticipationSettings() }
        coVerify(exactly = 1) { mockVppExecutor.executeDemandResponse(testEvent, testSettings) }
        coVerify(exactly = 0) { mockRepository.saveEventPerformance(any()) }
        coVerify(exactly = 0) { mockVppExecutor.restoreNormalOperation() }
    }

    @Test
    fun `should handle exception during save performance`() = runTest {
        // Given
        val exception = Exception("Save failed")
        coEvery { mockRepository.getParticipationSettings() } returns testSettings
        coEvery {
            mockVppExecutor.executeDemandResponse(testEvent, testSettings)
        } returns testPerformance
        coEvery { mockRepository.saveEventPerformance(testPerformance) } throws exception

        // When
        val result = useCase(testEvent)

        // Then
        assertTrue(result.isFailure)
        assertEquals(exception, result.exceptionOrNull())

        // Verify restore was not called
        coVerify(exactly = 1) { mockRepository.getParticipationSettings() }
        coVerify(exactly = 1) { mockVppExecutor.executeDemandResponse(testEvent, testSettings) }
        coVerify(exactly = 1) { mockRepository.saveEventPerformance(testPerformance) }
        coVerify(exactly = 0) { mockVppExecutor.restoreNormalOperation() }
    }

    @Test
    fun `should not wait or restore when event has already ended`() = runTest {
        // Given: Event that already ended
        val pastEvent = testEvent.copy(
            startTime = currentTime - 120_000, // 2 minutes ago
            endTime = currentTime - 60_000      // 1 minute ago
        )

        coEvery { mockRepository.getParticipationSettings() } returns testSettings
        coEvery {
            mockVppExecutor.executeDemandResponse(pastEvent, testSettings)
        } returns testPerformance
        coEvery { mockRepository.saveEventPerformance(testPerformance) } returns Unit

        // When
        val result = useCase(pastEvent)

        // Then
        assertTrue(result.isSuccess)

        // Verify restore was not called (event already ended)
        coVerify(exactly = 0) { mockVppExecutor.restoreNormalOperation() }
    }

    @Test
    fun `should handle exception during restore operation`() = runTest {
        // Given
        val exception = Exception("Restore failed")
        coEvery { mockRepository.getParticipationSettings() } returns testSettings
        coEvery {
            mockVppExecutor.executeDemandResponse(testEvent, testSettings)
        } returns testPerformance
        coEvery { mockRepository.saveEventPerformance(testPerformance) } returns Unit
        coEvery { mockVppExecutor.restoreNormalOperation() } throws exception

        // When
        val result = useCase(testEvent)

        // Then
        assertTrue(result.isFailure)
        assertEquals(exception, result.exceptionOrNull())
    }

    @Test
    fun `should return incomplete performance if executor returns incomplete event`() = runTest {
        // Given
        val incompletePerformance = testPerformance.copy(completed = false)
        coEvery { mockRepository.getParticipationSettings() } returns testSettings
        coEvery {
            mockVppExecutor.executeDemandResponse(testEvent, testSettings)
        } returns incompletePerformance
        coEvery { mockRepository.saveEventPerformance(incompletePerformance) } returns Unit
        coEvery { mockVppExecutor.restoreNormalOperation() } returns Unit

        // When
        val result = useCase(testEvent)

        // Then
        assertTrue(result.isSuccess)
        val performance = result.getOrNull()
        assertFalse(performance?.completed ?: true)
    }

    @Test
    fun `should handle low priority event with appropriate settings`() = runTest {
        // Given
        val lowPriorityEvent = testEvent.copy(priority = EventPriority.LOW)
        coEvery { mockRepository.getParticipationSettings() } returns testSettings
        coEvery {
            mockVppExecutor.executeDemandResponse(lowPriorityEvent, testSettings)
        } returns testPerformance
        coEvery { mockRepository.saveEventPerformance(testPerformance) } returns Unit
        coEvery { mockVppExecutor.restoreNormalOperation() } returns Unit

        // When
        val result = useCase(lowPriorityEvent)

        // Then
        assertTrue(result.isSuccess)
        coVerify(exactly = 1) { mockVppExecutor.executeDemandResponse(lowPriorityEvent, testSettings) }
    }

    @Test
    fun `should handle critical priority event`() = runTest {
        // Given
        val criticalEvent = testEvent.copy(priority = EventPriority.CRITICAL)
        coEvery { mockRepository.getParticipationSettings() } returns testSettings
        coEvery {
            mockVppExecutor.executeDemandResponse(criticalEvent, testSettings)
        } returns testPerformance.copy(reductionWatts = 75.0)
        coEvery { mockRepository.saveEventPerformance(any()) } returns Unit
        coEvery { mockVppExecutor.restoreNormalOperation() } returns Unit

        // When
        val result = useCase(criticalEvent)

        // Then
        assertTrue(result.isSuccess)
        coVerify(exactly = 1) { mockVppExecutor.executeDemandResponse(criticalEvent, testSettings) }
    }
}
