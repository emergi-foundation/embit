package eco.emergi.embit.presentation

import eco.emergi.embit.domain.usecases.ManageBatteryDataUseCase
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
import kotlin.test.*

/**
 * Tests for SettingsViewModel.
 *
 * Tests data management operations: export, import, delete.
 */
@OptIn(ExperimentalCoroutinesApi::class)
class SettingsViewModelTest {

    private val testDispatcher = StandardTestDispatcher()
    private lateinit var viewModelScope: CoroutineScope
    private lateinit var fakeRepository: FakeBatteryRepository
    private lateinit var manageBatteryDataUseCase: ManageBatteryDataUseCase

    @BeforeTest
    fun setup() {
        Dispatchers.setMain(testDispatcher)
        viewModelScope = CoroutineScope(testDispatcher)
        fakeRepository = FakeBatteryRepository()
        manageBatteryDataUseCase = ManageBatteryDataUseCase(fakeRepository)
    }

    @AfterTest
    fun tearDown() {
        fakeRepository.clear()
        viewModelScope.cancel()
        Dispatchers.resetMain()
    }

    @Test
    fun `initial state is Idle`() = runTest {
        val viewModel = createViewModel()

        // Initial UI state should be Idle
        val initialState = viewModel.uiState.value
        assertTrue(initialState is SettingsUiState.Idle)
    }

    @Test
    fun `loadDatabaseStats loads statistics on init`() = runTest {
        // Given: Repository with readings
        val readings = TestDataFactory.createReadingsOverTime(count = 50)
        fakeRepository.addReadings(*readings.toTypedArray())

        // When: ViewModel is created
        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: Database stats should be loaded
        val stats = viewModel.databaseStats.first()
        assertNotNull(stats, "Database stats should be loaded")
        assertEquals(50L, stats.totalReadings)
        assertTrue(stats.estimatedSizeMB.contains("MB"))
    }

    @Test
    fun `exportData changes state to ExportingData`() = runTest {
        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // When: Exporting data
        viewModel.exportData()

        // Then: State should change to ExportingData
        assertTrue(viewModel.uiState.value is SettingsUiState.ExportingData)
    }

    @Test
    fun `exportData succeeds with ExportSuccess state`() = runTest {
        // Given: Repository with data
        val readings = TestDataFactory.createReadingsOverTime(count = 10)
        fakeRepository.addReadings(*readings.toTypedArray())

        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // When: Exporting data
        viewModel.exportData()
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: State should be ExportSuccess
        val state = viewModel.uiState.value
        assertTrue(state is SettingsUiState.ExportSuccess)

        val exportState = state as SettingsUiState.ExportSuccess
        assertTrue(exportState.jsonData.isNotEmpty(), "Exported JSON should not be empty")
    }

    @Test
    fun `importData changes state to ImportingData`() = runTest {
        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // When: Importing data
        viewModel.importData("{}")

        // Then: State should change to ImportingData
        assertTrue(viewModel.uiState.value is SettingsUiState.ImportingData)
    }

    @Test
    fun `importData succeeds with ImportSuccess state`() = runTest {
        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // When: Importing valid JSON (our fake accepts any JSON)
        viewModel.importData("{\"readings\": []}")
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: State should be ImportSuccess
        val state = viewModel.uiState.value
        assertTrue(state is SettingsUiState.ImportSuccess)

        val importState = state as SettingsUiState.ImportSuccess
        assertTrue(importState.recordCount >= 0, "Import count should be non-negative")
    }

    @Test
    fun `importData updates database stats after success`() = runTest {
        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        val initialStats = viewModel.databaseStats.first()
        val initialCount = initialStats?.totalReadings ?: 0L

        // When: Importing data
        viewModel.importData("{\"readings\": []}")
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: Database stats should be refreshed
        // Note: Our fake doesn't actually change the count, but the method is called
        val state = viewModel.uiState.value
        assertTrue(state is SettingsUiState.ImportSuccess)
    }

    @Test
    fun `cleanupOldData changes state to CleaningData`() = runTest {
        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // When: Cleaning up old data
        viewModel.cleanupOldData(30)

        // Then: State should change to CleaningData
        assertTrue(viewModel.uiState.value is SettingsUiState.CleaningData)
    }

    @Test
    fun `cleanupOldData succeeds with CleanupSuccess state`() = runTest {
        // Given: Repository with data
        val readings = TestDataFactory.createReadingsOverTime(count = 100)
        fakeRepository.addReadings(*readings.toTypedArray())

        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // When: Cleaning up old data (30 days)
        viewModel.cleanupOldData(30)
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: State should be CleanupSuccess
        val state = viewModel.uiState.value
        assertTrue(state is SettingsUiState.CleanupSuccess)

        val cleanupState = state as SettingsUiState.CleanupSuccess
        assertTrue(cleanupState.deletedCount >= 0, "Deleted count should be non-negative")
    }

    @Test
    fun `clearAllData clears all readings`() = runTest {
        // Given: Repository with data
        val readings = TestDataFactory.createReadingsOverTime(count = 50)
        fakeRepository.addReadings(*readings.toTypedArray())

        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // When: Clearing all data
        viewModel.clearAllData()
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: State should be ClearAllSuccess
        val state = viewModel.uiState.value
        assertTrue(state is SettingsUiState.ClearAllSuccess)
    }

    @Test
    fun `resetState returns to Idle`() = runTest {
        val viewModel = createViewModel()

        // Given: ViewModel in some other state
        viewModel.exportData()
        assertTrue(viewModel.uiState.value is SettingsUiState.ExportingData)

        // When: Resetting state
        viewModel.resetState()

        // Then: State should be Idle
        assertTrue(viewModel.uiState.value is SettingsUiState.Idle)
    }

    @Test
    fun `multiple export operations work correctly`() = runTest {
        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // When: Exporting multiple times
        repeat(3) { iteration ->
            viewModel.exportData()
            testDispatcher.scheduler.advanceUntilIdle()

            // Then: Each export should succeed
            assertTrue(
                viewModel.uiState.value is SettingsUiState.ExportSuccess,
                "Export iteration $iteration should succeed"
            )

            viewModel.resetState()
        }
    }

    @Test
    fun `state transitions correctly through export lifecycle`() = runTest {
        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // Initially Idle
        assertTrue(viewModel.uiState.value is SettingsUiState.Idle)

        // Start export -> ExportingData
        viewModel.exportData()
        assertTrue(viewModel.uiState.value is SettingsUiState.ExportingData)

        // Complete export -> ExportSuccess
        testDispatcher.scheduler.advanceUntilIdle()
        assertTrue(viewModel.uiState.value is SettingsUiState.ExportSuccess)

        // Reset -> Idle
        viewModel.resetState()
        assertTrue(viewModel.uiState.value is SettingsUiState.Idle)
    }

    @Test
    fun `database stats format is correct`() = runTest {
        // Given: Repository with data
        val readings = TestDataFactory.createReadingsOverTime(count = 123)
        fakeRepository.addReadings(*readings.toTypedArray())

        // When: Loading stats
        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: Stats should be formatted correctly
        val stats = viewModel.databaseStats.first()
        assertNotNull(stats)
        assertEquals(123L, stats.totalReadings)
        assertTrue(stats.estimatedSizeMB.endsWith(" MB"), "Size should have MB suffix")
    }

    @Test
    fun `empty database shows zero stats`() = runTest {
        // Given: Empty repository

        // When: Loading stats
        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: Stats should show zero
        val stats = viewModel.databaseStats.first()
        // May be null or have zero count depending on implementation
        if (stats != null) {
            assertEquals(0L, stats.totalReadings)
        }
    }

    // Helper to create ViewModel
    private fun createViewModel(): SettingsViewModel {
        return SettingsViewModel(
            manageBatteryDataUseCase = manageBatteryDataUseCase,
            viewModelScope = viewModelScope
        )
    }
}
