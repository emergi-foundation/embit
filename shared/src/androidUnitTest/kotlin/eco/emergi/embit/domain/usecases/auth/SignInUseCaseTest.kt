package eco.emergi.embit.domain.usecases.auth

import eco.emergi.embit.domain.models.AuthResult
import eco.emergi.embit.domain.models.User
import eco.emergi.embit.domain.repositories.IAuthRepository
import io.mockk.coEvery
import io.mockk.mockk
import kotlinx.coroutines.test.runTest
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

/**
 * Smoke tests for SignInUseCase
 * Tests basic authentication scenarios to ensure sign-in works
 */
class SignInUseCaseTest {

    private val mockRepository = mockk<IAuthRepository>()
    private val useCase = SignInUseCase(mockRepository)

    @Test
    fun `should successfully sign in with valid credentials`() = runTest {
        // Given: Valid email and password
        val testUser = User(
            uid = "test-user-123",
            email = "test@example.com",
            displayName = "Test User",
            isAnonymous = false,
            createdAt = System.currentTimeMillis(),
            lastSignInAt = System.currentTimeMillis()
        )

        coEvery {
            mockRepository.signInWithEmail("test@example.com", "password123")
        } returns AuthResult.Success(testUser)

        // When: Signing in with valid credentials
        val result = useCase("test@example.com", "password123")

        // Then: Should return success with user
        assertTrue(result is AuthResult.Success)
        val successResult = result as AuthResult.Success
        assertEquals("test-user-123", successResult.user.uid)
        assertEquals("test@example.com", successResult.user.email)
    }

    @Test
    fun `should fail sign in with invalid email`() = runTest {
        // When: Signing in with invalid email (no @ symbol)
        val result = useCase("invalidemail", "password123")

        // Then: Should return failure
        assertTrue(result is AuthResult.Failure)
        val failure = result as AuthResult.Failure
        assertTrue(failure.message.contains("valid email"))
    }

    @Test
    fun `should fail sign in with short password`() = runTest {
        // When: Signing in with password less than 6 characters
        val result = useCase("test@example.com", "123")

        // Then: Should return failure
        assertTrue(result is AuthResult.Failure)
        val failure = result as AuthResult.Failure
        assertTrue(failure.message.contains("at least 6 characters"))
    }
}
