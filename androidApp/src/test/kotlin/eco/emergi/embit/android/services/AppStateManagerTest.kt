package eco.emergi.embit.android.services

import android.content.Context
import eco.emergi.embit.domain.models.AuthState
import eco.emergi.embit.domain.models.User
import eco.emergi.embit.domain.usecases.auth.ObserveAuthStateUseCase
import eco.emergi.embit.domain.usecases.sync.BidirectionalSyncUseCase
import eco.emergi.embit.domain.usecases.sync.ImportBatteryDataUseCase
import io.mockk.*
import kotlinx.coroutines.flow.flowOf
import kotlinx.coroutines.test.runTest
import org.junit.After
import org.junit.Before
import org.junit.Test
import org.junit.runner.RunWith
import org.robolectric.RobolectricTestRunner
import org.robolectric.annotation.Config
import kotlin.test.assertEquals

/**
 * Unit tests for AppStateManager
 *
 * Verifies:
 * - Automatic sync is triggered when user authenticates
 * - Sync only runs once per app session
 * - Sync uses correct parameters
 * - Success and failure cases are handled properly
 */
@RunWith(RobolectricTestRunner::class)
@Config(sdk = [33])
class AppStateManagerTest {

    private lateinit var context: Context
    private lateinit var observeAuthStateUseCase: ObserveAuthStateUseCase
    private lateinit var bidirectionalSyncUseCase: BidirectionalSyncUseCase
    private lateinit var appStateManager: AppStateManager

    @Before
    fun setup() {
        context = mockk(relaxed = true)
        observeAuthStateUseCase = mockk()
        bidirectionalSyncUseCase = mockk()

        appStateManager = AppStateManager(
            context = context,
            observeAuthStateUseCase = observeAuthStateUseCase,
            bidirectionalSyncUseCase = bidirectionalSyncUseCase
        )
    }

    @After
    fun teardown() {
        clearAllMocks()
    }

    @Test
    fun `test automatic sync is triggered when user authenticates`() = runTest {
        // Given: User is authenticated
        val user = User(
            uid = "test-user-123",
            email = "test@example.com",
            displayName = "Test User",
            photoUrl = null
        )
        val authState = AuthState.Authenticated(user)

        coEvery { observeAuthStateUseCase() } returns flowOf(authState)
        coEvery { bidirectionalSyncUseCase(any(), any(), any(), any()) } returns
                BidirectionalSyncUseCase.BidirectionalSyncResult.Success(
                    uploadedCount = 10,
                    importedCount = 5,
                    conflictsResolved = 2,
                    skippedCount = 1,
                    duration = 1000,
                    uploadResult = null,
                    importResult = null
                )

        // When: AppStateManager is initialized
        appStateManager.initialize()

        // Wait for coroutine to complete
        kotlinx.coroutines.delay(100)

        // Then: Sync should be triggered with correct parameters
        coVerify(exactly = 1) {
            bidirectionalSyncUseCase(
                maxUploadBatchSize = 100,
                maxDownloadLimit = 1000,
                conflictStrategy = ImportBatteryDataUseCase.ConflictStrategy.KEEP_NEWER,
                syncDirection = BidirectionalSyncUseCase.SyncDirection.BOTH
            )
        }
    }

    @Test
    fun `test sync only runs once per session`() = runTest {
        // Given: User authenticates twice in same session
        val user = User(
            uid = "test-user-123",
            email = "test@example.com",
            displayName = "Test User",
            photoUrl = null
        )
        val authState = AuthState.Authenticated(user)

        coEvery { observeAuthStateUseCase() } returns flowOf(authState, authState)
        coEvery { bidirectionalSyncUseCase(any(), any(), any(), any()) } returns
                BidirectionalSyncUseCase.BidirectionalSyncResult.Success(
                    uploadedCount = 10,
                    importedCount = 5,
                    conflictsResolved = 2,
                    skippedCount = 1,
                    duration = 1000,
                    uploadResult = null,
                    importResult = null
                )

        // When: AppStateManager is initialized
        appStateManager.initialize()

        // Wait for coroutines to complete
        kotlinx.coroutines.delay(200)

        // Then: Sync should only be triggered once
        coVerify(exactly = 1) {
            bidirectionalSyncUseCase(any(), any(), any(), any())
        }
    }

    @Test
    fun `test sync handles failure gracefully`() = runTest {
        // Given: User is authenticated but sync fails
        val user = User(
            uid = "test-user-123",
            email = "test@example.com",
            displayName = "Test User",
            photoUrl = null
        )
        val authState = AuthState.Authenticated(user)

        coEvery { observeAuthStateUseCase() } returns flowOf(authState)
        coEvery { bidirectionalSyncUseCase(any(), any(), any(), any()) } returns
                BidirectionalSyncUseCase.BidirectionalSyncResult.Failure("Network error")

        // When: AppStateManager is initialized
        appStateManager.initialize()

        // Wait for coroutine to complete
        kotlinx.coroutines.delay(100)

        // Then: Should not crash, just log error
        coVerify(exactly = 1) {
            bidirectionalSyncUseCase(any(), any(), any(), any())
        }
    }

    @Test
    fun `test manual sync uses correct parameters`() = runTest {
        // Given: Sync is configured
        coEvery { bidirectionalSyncUseCase(any(), any(), any(), any()) } returns
                BidirectionalSyncUseCase.BidirectionalSyncResult.Success(
                    uploadedCount = 5,
                    importedCount = 3,
                    conflictsResolved = 1,
                    skippedCount = 0,
                    duration = 500,
                    uploadResult = null,
                    importResult = null
                )

        // When: Manual sync is triggered
        val result = appStateManager.manualSync()

        // Then: Should return success result
        assert(result is BidirectionalSyncUseCase.BidirectionalSyncResult.Success)
        val successResult = result as BidirectionalSyncUseCase.BidirectionalSyncResult.Success
        assertEquals(5, successResult.uploadedCount)
        assertEquals(3, successResult.importedCount)
        assertEquals(1, successResult.conflictsResolved)

        // Verify correct parameters
        coVerify(exactly = 1) {
            bidirectionalSyncUseCase(
                maxUploadBatchSize = 100,
                maxDownloadLimit = 1000,
                conflictStrategy = ImportBatteryDataUseCase.ConflictStrategy.KEEP_NEWER,
                syncDirection = BidirectionalSyncUseCase.SyncDirection.BOTH
            )
        }
    }

    @Test
    fun `test unauthenticated state does not trigger sync`() = runTest {
        // Given: User is not authenticated
        val authState = AuthState.Unauthenticated

        coEvery { observeAuthStateUseCase() } returns flowOf(authState)

        // When: AppStateManager is initialized
        appStateManager.initialize()

        // Wait for coroutine to complete
        kotlinx.coroutines.delay(100)

        // Then: Sync should not be triggered
        coVerify(exactly = 0) {
            bidirectionalSyncUseCase(any(), any(), any(), any())
        }
    }

    @Test
    fun `test loading state does not trigger sync`() = runTest {
        // Given: Auth state is loading
        val authState = AuthState.Loading

        coEvery { observeAuthStateUseCase() } returns flowOf(authState)

        // When: AppStateManager is initialized
        appStateManager.initialize()

        // Wait for coroutine to complete
        kotlinx.coroutines.delay(100)

        // Then: Sync should not be triggered
        coVerify(exactly = 0) {
            bidirectionalSyncUseCase(any(), any(), any(), any())
        }
    }
}
