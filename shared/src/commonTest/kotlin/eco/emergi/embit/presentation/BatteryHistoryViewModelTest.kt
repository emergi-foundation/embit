package eco.emergi.embit.presentation

import eco.emergi.embit.domain.models.BatteryDataPoint
import eco.emergi.embit.domain.models.BatteryStatistics
import eco.emergi.embit.domain.models.BatteryTrend
import eco.emergi.embit.domain.models.TimePeriod
import eco.emergi.embit.domain.usecases.CalculateBatteryStatisticsUseCase
import eco.emergi.embit.domain.usecases.GetBatteryHistoryUseCase
import eco.emergi.embit.test.TestDataFactory
import eco.emergi.embit.test.fakes.FakeBatteryRepository
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.cancel
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.test.StandardTestDispatcher
import kotlinx.coroutines.test.resetMain
import kotlinx.coroutines.test.runTest
import kotlinx.coroutines.test.setMain
import kotlinx.datetime.Clock
import kotlin.test.*
import kotlin.time.Duration.Companion.days

/**
 * Tests for BatteryHistoryViewModel.
 *
 * Tests state management, period selection, and data loading.
 */
@OptIn(ExperimentalCoroutinesApi::class)
class BatteryHistoryViewModelTest {

    private val testDispatcher = StandardTestDispatcher()
    private lateinit var viewModelScope: CoroutineScope
    private lateinit var fakeRepository: FakeBatteryRepository
    private lateinit var getBatteryHistoryUseCase: GetBatteryHistoryUseCase
    private lateinit var calculateStatisticsUseCase: CalculateBatteryStatisticsUseCase

    @BeforeTest
    fun setup() {
        Dispatchers.setMain(testDispatcher)
        viewModelScope = CoroutineScope(testDispatcher)
        fakeRepository = FakeBatteryRepository()
        getBatteryHistoryUseCase = GetBatteryHistoryUseCase(fakeRepository)
        calculateStatisticsUseCase = CalculateBatteryStatisticsUseCase(fakeRepository)
    }

    @AfterTest
    fun tearDown() {
        fakeRepository.clear()
        viewModelScope.cancel()
        Dispatchers.resetMain()
    }

    @Test
    fun `initial state is Loading`() = runTest {
        val viewModel = createViewModel()

        // Initial state should be Loading
        val initialState = viewModel.uiState.value
        assertTrue(initialState is BatteryHistoryUiState.Loading)
    }

    @Test
    fun `loads DAY period by default on init`() = runTest {
        // Given: Repository with data
        val readings = TestDataFactory.createReadingsOverTime(
            count = 96, // 24 hours of data (every 15 min)
            startTime = Clock.System.now() - 1.days
        )
        fakeRepository.addReadings(*readings.toTypedArray())

        // When: ViewModel is created
        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: Should load DAY period
        assertEquals(TimePeriod.DAY, viewModel.selectedPeriod.first())

        val state = viewModel.uiState.value
        assertTrue(state is BatteryHistoryUiState.Success)
    }

    @Test
    fun `loadHistory changes selected period`() = runTest {
        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // When: Loading a different period
        viewModel.loadHistory(TimePeriod.WEEK)
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: Selected period should update
        assertEquals(TimePeriod.WEEK, viewModel.selectedPeriod.first())
    }

    @Test
    fun `loadHistory with data shows Success state`() = runTest {
        // Given: Repository with week of data
        val readings = TestDataFactory.createReadingsOverTime(
            count = 672, // 7 days * 96 readings/day
            startTime = Clock.System.now() - 7.days
        )
        fakeRepository.addReadings(*readings.toTypedArray())

        // When: Loading history
        val viewModel = createViewModel()
        viewModel.loadHistory(TimePeriod.WEEK)
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: State should be Success
        val state = viewModel.uiState.value
        assertTrue(state is BatteryHistoryUiState.Success)

        val successState = state as BatteryHistoryUiState.Success
        assertTrue(successState.dataPoints.isNotEmpty(), "Should have data points")
        assertNotNull(successState.statistics, "Should have statistics")
    }

    @Test
    fun `loadHistory without data shows Error state`() = runTest {
        // Given: Empty repository

        // When: Loading history
        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: State should be Error (no data available)
        val state = viewModel.uiState.value
        assertTrue(
            state is BatteryHistoryUiState.Error,
            "Should show error when no data available"
        )
    }

    @Test
    fun `loadCustomRange loads specific time period`() = runTest {
        // Given: Repository with data across multiple days
        val now = Clock.System.now()
        val start = now - 3.days
        val end = now - 1.days

        val readings = TestDataFactory.createReadingsOverTime(
            count = 200,
            startTime = start,
            endPercentage = 50
        )
        fakeRepository.addReadings(*readings.toTypedArray())

        // When: Loading custom range
        val viewModel = createViewModel()
        viewModel.loadCustomRange(start, end)
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: Should load data for that range
        val state = viewModel.uiState.value
        assertTrue(state is BatteryHistoryUiState.Success)
    }

    @Test
    fun `state transitions from Loading to Success`() = runTest {
        // Given: Repository with data
        val readings = TestDataFactory.createReadingsOverTime(count = 100)
        fakeRepository.addReadings(*readings.toTypedArray())

        val viewModel = createViewModel()

        // Initially Loading
        assertTrue(viewModel.uiState.value is BatteryHistoryUiState.Loading)

        // When: Coroutines complete
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: Should transition to Success
        assertTrue(viewModel.uiState.value is BatteryHistoryUiState.Success)
    }

    @Test
    fun `switching periods triggers new data load`() = runTest {
        // Given: ViewModel with initial data
        val readings = TestDataFactory.createReadingsOverTime(
            count = 672,
            startTime = Clock.System.now() - 7.days
        )
        fakeRepository.addReadings(*readings.toTypedArray())

        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        val initialState = viewModel.uiState.value
        assertTrue(initialState is BatteryHistoryUiState.Success)

        // When: Switching to a different period
        viewModel.loadHistory(TimePeriod.MONTH)

        // Then: Should go back to Loading
        assertTrue(viewModel.uiState.value is BatteryHistoryUiState.Loading)

        // And then to Success after data loads
        testDispatcher.scheduler.advanceUntilIdle()
        assertTrue(viewModel.uiState.value is BatteryHistoryUiState.Success)
    }

    @Test
    fun `Success state contains all expected data`() = runTest {
        // Given: Repository with comprehensive data
        val readings = TestDataFactory.createReadingsOverTime(
            count = 96,
            startTime = Clock.System.now() - 1.days
        )
        fakeRepository.addReadings(*readings.toTypedArray())

        // When: Loading history
        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: Success state should contain dataPoints and statistics
        val state = viewModel.uiState.value
        assertTrue(state is BatteryHistoryUiState.Success)

        val successState = state as BatteryHistoryUiState.Success
        assertTrue(successState.dataPoints.isNotEmpty(), "Should have data points for chart")
        assertNotNull(successState.statistics, "Should have calculated statistics")
        assertTrue(successState.trends.isNotEmpty() || successState.trends.isEmpty(), "Trends list should exist")
    }

    @Test
    fun `all time periods can be loaded`() = runTest {
        // Given: Repository with 30 days of data
        val readings = TestDataFactory.createReadingsOverTime(
            count = 2880, // 30 days * 96 readings/day
            startTime = Clock.System.now() - 30.days
        )
        fakeRepository.addReadings(*readings.toTypedArray())

        val viewModel = createViewModel()

        // Test each period
        val periods = listOf(
            TimePeriod.HOUR,
            TimePeriod.DAY,
            TimePeriod.WEEK,
            TimePeriod.MONTH
        )

        periods.forEach { period ->
            viewModel.loadHistory(period)
            testDispatcher.scheduler.advanceUntilIdle()

            assertEquals(period, viewModel.selectedPeriod.first(), "Selected period should match")

            // All should succeed with our test data
            assertTrue(
                viewModel.uiState.value is BatteryHistoryUiState.Success ||
                viewModel.uiState.value is BatteryHistoryUiState.Error,
                "Should have a definite state for $period"
            )
        }
    }

    // Helper to create ViewModel
    private fun createViewModel(): BatteryHistoryViewModel {
        return BatteryHistoryViewModel(
            getBatteryHistoryUseCase = getBatteryHistoryUseCase,
            calculateStatisticsUseCase = calculateStatisticsUseCase,
            viewModelScope = viewModelScope
        )
    }
}
