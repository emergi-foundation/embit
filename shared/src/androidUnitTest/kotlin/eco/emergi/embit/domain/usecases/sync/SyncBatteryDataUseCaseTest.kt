package eco.emergi.embit.domain.usecases.sync

import android.content.Context
import eco.emergi.embit.domain.models.SyncResult
import eco.emergi.embit.domain.models.User
import eco.emergi.embit.domain.repositories.IAuthRepository
import eco.emergi.embit.domain.repositories.IBatteryRepository
import eco.emergi.embit.domain.repositories.ISyncRepository
import io.mockk.coEvery
import io.mockk.mockk
import kotlinx.coroutines.test.runTest
import kotlin.test.Test
import kotlin.test.assertTrue

/**
 * Smoke tests for SyncBatteryDataUseCase
 * Tests basic data synchronization scenarios
 */
class SyncBatteryDataUseCaseTest {

    private val mockSyncRepository = mockk<ISyncRepository>()
    private val mockBatteryRepository = mockk<IBatteryRepository>()
    private val mockAuthRepository = mockk<IAuthRepository>()
    private val mockContext = mockk<Context>(relaxed = true)

    @Test
    fun `should return success when sync is ready and user is authenticated`() = runTest {
        // Given: User is authenticated and ready to sync
        val testUser = User(
            uid = "test-user-123",
            email = "test@example.com",
            displayName = "Test User"
        )

        val useCase = SyncBatteryDataUseCase(
            syncRepository = mockSyncRepository,
            batteryRepository = mockBatteryRepository,
            authRepository = mockAuthRepository,
            context = mockContext
        )

        coEvery { mockSyncRepository.isReadyToSync() } returns true
        coEvery { mockAuthRepository.getCurrentUser() } returns testUser
        coEvery { mockSyncRepository.registerDevice(any()) } returns Unit

        // When: Invoking sync
        val result = useCase()

        // Then: Should return success (even with 0 readings in current placeholder implementation)
        assertTrue(result is SyncResult.Success)
        val successResult = result as SyncResult.Success
        assertTrue(successResult.timestamp > 0)
    }

    @Test
    fun `should return failure when user is not authenticated`() = runTest {
        // Given: User is not authenticated
        val useCase = SyncBatteryDataUseCase(
            syncRepository = mockSyncRepository,
            batteryRepository = mockBatteryRepository,
            authRepository = mockAuthRepository,
            context = mockContext
        )

        coEvery { mockSyncRepository.isReadyToSync() } returns false

        // When: Invoking sync
        val result = useCase()

        // Then: Should return failure
        assertTrue(result is SyncResult.Failure)
        val failureResult = result as SyncResult.Failure
        assertTrue(failureResult.error.contains("not authenticated"))
    }

    @Test
    fun `should return failure when current user is null`() = runTest {
        // Given: Sync is ready but current user is null
        val useCase = SyncBatteryDataUseCase(
            syncRepository = mockSyncRepository,
            batteryRepository = mockBatteryRepository,
            authRepository = mockAuthRepository,
            context = mockContext
        )

        coEvery { mockSyncRepository.isReadyToSync() } returns true
        coEvery { mockAuthRepository.getCurrentUser() } returns null

        // When: Invoking sync
        val result = useCase()

        // Then: Should return failure
        assertTrue(result is SyncResult.Failure)
        val failureResult = result as SyncResult.Failure
        assertTrue(failureResult.error.contains("No current user"))
    }
}
