package eco.emergi.embit.presentation

import eco.emergi.embit.domain.models.*
import eco.emergi.embit.domain.repositories.IVppRepository
import eco.emergi.embit.domain.repositories.VppStats
import eco.emergi.embit.domain.usecases.vpp.ParticipateInDREventUseCase
import eco.emergi.embit.domain.vpp.VppControlExecutor
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.cancel
import kotlinx.coroutines.flow.*
import kotlinx.coroutines.test.StandardTestDispatcher
import kotlinx.coroutines.test.resetMain
import kotlinx.coroutines.test.runTest
import kotlinx.coroutines.test.setMain
import kotlin.test.*

/**
 * Tests for VppViewModel.
 *
 * Tests Virtual Power Plant participation, event management, and settings.
 */
@OptIn(ExperimentalCoroutinesApi::class)
class VppViewModelTest {

    private val testDispatcher = StandardTestDispatcher()
    private lateinit var viewModelScope: CoroutineScope
    private lateinit var fakeRepository: FakeVppRepository
    private lateinit var fakeVppExecutor: FakeVppControlExecutor
    private lateinit var participateUseCase: ParticipateInDREventUseCase

    @BeforeTest
    fun setup() {
        Dispatchers.setMain(testDispatcher)
        viewModelScope = CoroutineScope(testDispatcher)
        fakeRepository = FakeVppRepository()
        fakeVppExecutor = FakeVppControlExecutor()
        participateUseCase = ParticipateInDREventUseCase(fakeVppExecutor, fakeRepository)
    }

    @AfterTest
    fun tearDown() {
        viewModelScope.cancel()
        Dispatchers.resetMain()
    }

    @Test
    fun `initial state has VPP disabled`() = runTest {
        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // Initial state should have VPP disabled
        val state = viewModel.uiState.value
        assertFalse(state.isEnabled)
        assertFalse(state.isParticipating)
    }

    @Test
    fun `loads settings on init`() = runTest {
        // Given: Settings with VPP enabled
        val settings = ParticipationSettings(
            enabled = true,
            minimumPriority = EventPriority.LOW,
            allowBatterySaver = true
        )
        fakeRepository.setSettings(settings)

        // When: ViewModel is created
        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: Settings should be loaded
        val state = viewModel.uiState.value
        assertTrue(state.isEnabled)
        assertEquals(EventPriority.LOW, state.settings.minimumPriority)
    }

    @Test
    fun `loads total stats on init`() = runTest {
        // Given: Repository with VPP stats
        val stats = VppStats(
            totalEvents = 10,
            completedEvents = 8,
            totalEnergyReducedWh = 500.0,
            totalCO2SavedGrams = 250.0,
            averageReductionWatts = 50.0
        )
        fakeRepository.setStats(stats)

        // When: ViewModel is created
        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: Stats should be loaded
        val state = viewModel.uiState.value
        assertNotNull(state.totalStats)
        assertEquals(10, state.totalStats?.totalEvents)
        assertEquals(500.0, state.totalStats?.totalEnergyReducedWh)
    }

    @Test
    fun `enableParticipation updates settings and state`() = runTest {
        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // Initially disabled
        assertFalse(viewModel.uiState.value.isEnabled)

        // When: Enabling participation
        viewModel.enableParticipation()
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: Should be enabled
        val state = viewModel.uiState.value
        assertTrue(state.isEnabled)
        assertTrue(state.settings.enabled)
        assertNull(state.error)
    }

    @Test
    fun `disableParticipation updates settings and state`() = runTest {
        // Given: VPP is enabled
        val enabledSettings = ParticipationSettings(enabled = true)
        fakeRepository.setSettings(enabledSettings)

        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()
        assertTrue(viewModel.uiState.value.isEnabled)

        // When: Disabling participation
        viewModel.disableParticipation()
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: Should be disabled
        val state = viewModel.uiState.value
        assertFalse(state.isEnabled)
        assertFalse(state.settings.enabled)
    }

    @Test
    fun `updateSettings saves new settings`() = runTest {
        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // Given: New settings
        val newSettings = ParticipationSettings(
            enabled = true,
            minimumPriority = EventPriority.HIGH,
            allowBatterySaver = false,
            maxDurationMinutes = 60
        )

        // When: Updating settings
        viewModel.updateSettings(newSettings)
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: Settings should be updated
        val state = viewModel.uiState.value
        assertEquals(EventPriority.HIGH, state.settings.minimumPriority)
        assertFalse(state.settings.allowBatterySaver)
        assertEquals(60, state.settings.maxDurationMinutes)
    }

    @Test
    fun `observes active events on init`() = runTest {
        // Given: Active DR event
        val activeEvent = createTestEvent(
            eventId = "event-1",
            startTime = System.currentTimeMillis() - 60000, // Started 1 min ago
            endTime = System.currentTimeMillis() + 3600000 // Ends in 1 hour
        )
        fakeRepository.addActiveEvent(activeEvent)

        // When: ViewModel is created
        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: Active event should be observed
        val state = viewModel.uiState.value
        assertNotNull(state.activeEvent)
        assertEquals("event-1", state.activeEvent?.eventId)
    }

    @Test
    fun `auto-participates when event becomes active and VPP is enabled`() = runTest {
        // Given: VPP is enabled
        val enabledSettings = ParticipationSettings(enabled = true)
        fakeRepository.setSettings(enabledSettings)

        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // When: Active event appears
        val activeEvent = createTestEvent(eventId = "auto-event")
        fakeRepository.addActiveEvent(activeEvent)
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: Should auto-participate
        val state = viewModel.uiState.value
        assertTrue(state.isParticipating || fakeVppExecutor.wasExecuteCalled)
    }

    @Test
    fun `does not auto-participate when VPP is disabled`() = runTest {
        // Given: VPP is disabled
        val disabledSettings = ParticipationSettings(enabled = false)
        fakeRepository.setSettings(disabledSettings)

        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // When: Active event appears
        val activeEvent = createTestEvent(eventId = "event-disabled")
        fakeRepository.addActiveEvent(activeEvent)
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: Should NOT participate
        val state = viewModel.uiState.value
        assertFalse(state.isParticipating)
    }

    @Test
    fun `loadPerformanceHistory loads event history`() = runTest {
        // Given: Performance history exists
        val performance1 = createTestPerformance(eventId = "event-1", reductionWatts = 50.0)
        val performance2 = createTestPerformance(eventId = "event-2", reductionWatts = 75.0)
        fakeRepository.addPerformance(performance1)
        fakeRepository.addPerformance(performance2)

        // When: Loading history
        val viewModel = createViewModel()
        viewModel.loadPerformanceHistory()
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: History should be loaded
        val history = viewModel.performanceHistory.value
        assertEquals(2, history.size)
        assertEquals("event-1", history[0].eventId)
        assertEquals("event-2", history[1].eventId)
    }

    @Test
    fun `refresh reloads all data`() = runTest {
        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // Given: Updated data
        val newStats = VppStats(
            totalEvents = 20,
            completedEvents = 18,
            totalEnergyReducedWh = 1000.0,
            totalCO2SavedGrams = 500.0,
            averageReductionWatts = 100.0
        )
        fakeRepository.setStats(newStats)

        // When: Refreshing
        viewModel.refresh()
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: Stats should be updated
        val state = viewModel.uiState.value
        assertEquals(20, state.totalStats?.totalEvents)
    }

    @Test
    fun `clearError removes error message`() = runTest {
        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // Given: Error state (simulate by failing settings load)
        fakeRepository.setShouldFailSettings(true)
        viewModel.enableParticipation()
        testDispatcher.scheduler.advanceUntilIdle()
        assertNotNull(viewModel.uiState.value.error)

        // When: Clearing error
        viewModel.clearError()

        // Then: Error should be cleared
        assertNull(viewModel.uiState.value.error)
    }

    @Test
    fun `power monitoring starts during event participation`() = runTest {
        // Given: VPP enabled
        val enabledSettings = ParticipationSettings(enabled = true)
        fakeRepository.setSettings(enabledSettings)

        // And: Power measurement available
        val measurement = PowerMeasurement(
            timestamp = System.currentTimeMillis(),
            voltageMillivolts = 4000,
            currentMicroamps = -500000,
            powerWatts = 2.0,
            batteryPercentage = 80,
            isCharging = false
        )
        fakeVppExecutor.setPowerMeasurement(measurement)

        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // When: Event becomes active
        val activeEvent = createTestEvent()
        fakeRepository.addActiveEvent(activeEvent)
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: Power should be monitored (check that power flow was observed)
        assertTrue(fakeVppExecutor.wasObservePowerCalled || viewModel.currentPowerMeasurement.value != null)
    }

    @Test
    fun `past events are loaded on init`() = runTest {
        // Given: Past events exist
        val pastEvent1 = createTestEvent(
            eventId = "past-1",
            startTime = System.currentTimeMillis() - 7200000, // 2 hours ago
            endTime = System.currentTimeMillis() - 3600000   // 1 hour ago
        )
        fakeRepository.addPastEvent(pastEvent1)

        // When: ViewModel is created
        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: Past events should be loaded
        val pastEvents = viewModel.pastEvents.value
        assertTrue(pastEvents.isNotEmpty())
        assertEquals("past-1", pastEvents[0].eventId)
    }

    @Test
    fun `handles error when loading settings fails`() = runTest {
        // Given: Settings will fail to load
        fakeRepository.setShouldFailSettings(true)

        // When: ViewModel is created
        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: Error should be set
        val state = viewModel.uiState.value
        assertNotNull(state.error)
        assertTrue(state.error!!.contains("Failed to load settings"))
    }

    // Helper to create ViewModel
    private fun createViewModel(): VppViewModel {
        return VppViewModel(
            repository = fakeRepository,
            participateUseCase = participateUseCase,
            vppExecutor = fakeVppExecutor,
            viewModelScope = viewModelScope
        )
    }

    // Helper to create test event
    private fun createTestEvent(
        eventId: String = "test-event",
        startTime: Long = System.currentTimeMillis(),
        endTime: Long = System.currentTimeMillis() + 3600000,
        targetReductionWatts: Double = 50.0
    ): DemandResponseEvent {
        return DemandResponseEvent(
            eventId = eventId,
            startTime = startTime,
            endTime = endTime,
            targetReductionWatts = targetReductionWatts,
            priority = EventPriority.MEDIUM,
            message = "Please reduce power consumption",
            location = "California"
        )
    }

    // Helper to create test performance
    private fun createTestPerformance(
        eventId: String = "test-event",
        reductionWatts: Double = 50.0
    ): EventPerformance {
        return EventPerformance(
            eventId = eventId,
            userId = "test-user",
            deviceId = "test-device",
            startTime = System.currentTimeMillis() - 3600000,
            endTime = System.currentTimeMillis(),
            baselinePowerWatts = 100.0,
            actualPowerWatts = 100.0 - reductionWatts,
            reductionWatts = reductionWatts,
            reductionPercentage = (reductionWatts / 100.0) * 100,
            actionsApplied = listOf("Battery Saver Mode"),
            completed = true
        )
    }

    // Fake implementations
    private class FakeVppRepository : IVppRepository {
        private var settings = ParticipationSettings()
        private val activeEventsFlow = MutableStateFlow<List<DemandResponseEvent>>(emptyList())
        private val pastEventsList = mutableListOf<DemandResponseEvent>()
        private val performanceList = mutableListOf<EventPerformance>()
        private var stats: VppStats? = null
        private var shouldFailSettings = false

        fun setSettings(newSettings: ParticipationSettings) {
            settings = newSettings
        }

        fun setShouldFailSettings(shouldFail: Boolean) {
            shouldFailSettings = shouldFail
        }

        fun setStats(newStats: VppStats) {
            stats = newStats
        }

        fun addActiveEvent(event: DemandResponseEvent) {
            activeEventsFlow.value = activeEventsFlow.value + event
        }

        fun addPastEvent(event: DemandResponseEvent) {
            pastEventsList.add(event)
        }

        fun addPerformance(performance: EventPerformance) {
            performanceList.add(performance)
        }

        override suspend fun getParticipationSettings(): ParticipationSettings {
            if (shouldFailSettings) throw Exception("Failed to load settings")
            return settings
        }

        override suspend fun updateParticipationSettings(settings: ParticipationSettings) {
            if (shouldFailSettings) throw Exception("Failed to update settings")
            this.settings = settings
        }

        override fun observeActiveEvents(): Flow<List<DemandResponseEvent>> = activeEventsFlow

        override suspend fun getPastEvents(limit: Int): List<DemandResponseEvent> {
            return pastEventsList.take(limit)
        }

        override suspend fun getPerformanceHistory(limit: Int): List<EventPerformance> {
            return performanceList.take(limit)
        }

        override suspend fun saveEventPerformance(performance: EventPerformance) {
            performanceList.add(performance)
        }

        override suspend fun getTotalStats(): VppStats {
            return stats ?: VppStats(0, 0, 0.0, 0.0, 0.0)
        }
    }

    private class FakeVppControlExecutor : VppControlExecutor {
        private var powerMeasurement: PowerMeasurement? = null
        var wasExecuteCalled = false
        var wasRestoreCalled = false
        var wasObservePowerCalled = false

        fun setPowerMeasurement(measurement: PowerMeasurement) {
            powerMeasurement = measurement
        }

        override suspend fun executeDemandResponse(
            event: DemandResponseEvent,
            settings: ParticipationSettings
        ): EventPerformance {
            wasExecuteCalled = true
            return EventPerformance(
                eventId = event.eventId,
                userId = "test-user",
                deviceId = "test-device",
                startTime = event.startTime,
                endTime = event.endTime,
                baselinePowerWatts = 100.0,
                actualPowerWatts = 50.0,
                reductionWatts = 50.0,
                reductionPercentage = 50.0,
                actionsApplied = listOf("Battery Saver Mode"),
                completed = true
            )
        }

        override suspend fun restoreNormalOperation() {
            wasRestoreCalled = true
        }

        override suspend fun getCurrentPowerMeasurement(): PowerMeasurement {
            return powerMeasurement ?: PowerMeasurement(
                timestamp = System.currentTimeMillis(),
                voltageMillivolts = 4000,
                currentMicroamps = -500000,
                powerWatts = 2.0,
                batteryPercentage = 80,
                isCharging = false
            )
        }

        override fun observePowerConsumption(): Flow<PowerMeasurement> {
            wasObservePowerCalled = true
            return flow {
                emit(getCurrentPowerMeasurement())
            }
        }
    }
}
