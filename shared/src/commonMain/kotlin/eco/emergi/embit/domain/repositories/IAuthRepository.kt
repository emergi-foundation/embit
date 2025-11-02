package eco.emergi.embit.domain.repositories

import eco.emergi.embit.domain.models.AuthResult
import eco.emergi.embit.domain.models.AuthState
import eco.emergi.embit.domain.models.User
import kotlinx.coroutines.flow.Flow

/**
 * Repository interface for authentication operations.
 * Implementations handle user authentication, registration, and session management.
 */
interface IAuthRepository {
    /**
     * Observe the current authentication state as a Flow
     * Emits updates when the user signs in or out
     */
    fun observeAuthState(): Flow<AuthState>

    /**
     * Get the current authenticated user
     * @return Current user if authenticated, null otherwise
     */
    suspend fun getCurrentUser(): User?

    /**
     * Sign in with email and password
     * @param email User's email address
     * @param password User's password
     * @return AuthResult indicating success or failure
     */
    suspend fun signInWithEmail(
        email: String,
        password: String
    ): AuthResult

    /**
     * Sign up (create new account) with email and password
     * @param email User's email address
     * @param password User's password
     * @param displayName Optional display name for the user
     * @return AuthResult indicating success or failure
     */
    suspend fun signUpWithEmail(
        email: String,
        password: String,
        displayName: String? = null
    ): AuthResult

    /**
     * Sign in with Google authentication
     * @param idToken Google ID token from the authentication flow
     * @return AuthResult indicating success or failure
     */
    suspend fun signInWithGoogle(idToken: String): AuthResult

    /**
     * Sign in anonymously (no credentials required)
     * Useful for trying the app without creating an account
     * @return AuthResult indicating success or failure
     */
    suspend fun signInAnonymously(): AuthResult

    /**
     * Sign out the current user
     * @return Result indicating success or failure
     */
    suspend fun signOut(): Result<Unit>

    /**
     * Delete the current user's account
     * This will permanently delete the user's account and all associated data
     * @return Result indicating success or failure
     */
    suspend fun deleteAccount(): Result<Unit>

    /**
     * Send a password reset email to the specified address
     * @param email Email address to send reset link to
     * @return Result indicating success or failure
     */
    suspend fun sendPasswordResetEmail(email: String): Result<Unit>

    /**
     * Update the current user's display name
     * @param displayName New display name
     * @return Result indicating success or failure
     */
    suspend fun updateDisplayName(displayName: String): Result<Unit>

    /**
     * Update the current user's email address
     * @param newEmail New email address
     * @return Result indicating success or failure
     */
    suspend fun updateEmail(newEmail: String): Result<Unit>

    /**
     * Update the current user's password
     * @param newPassword New password
     * @return Result indicating success or failure
     */
    suspend fun updatePassword(newPassword: String): Result<Unit>

    /**
     * Check if a user is currently signed in
     * @return true if authenticated, false otherwise
     */
    suspend fun isSignedIn(): Boolean

    /**
     * Reload the current user's data from the authentication provider
     * Useful after making profile updates
     * @return Result indicating success or failure
     */
    suspend fun reloadUser(): Result<User?>
}
