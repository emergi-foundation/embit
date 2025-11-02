package eco.emergi.embit.domain.models

import kotlinx.serialization.Serializable

/**
 * Represents the current authentication state of the user.
 */
@Serializable
sealed class AuthState {
    /**
     * User is authenticated and signed in
     * @property user The authenticated user information
     */
    @Serializable
    data class Authenticated(val user: User) : AuthState()

    /**
     * User is not authenticated (signed out)
     */
    @Serializable
    data object Unauthenticated : AuthState()

    /**
     * Authentication state is being checked (initial app load)
     */
    @Serializable
    data object Loading : AuthState()

    /**
     * An authentication error occurred
     * @property message Error message describing what went wrong
     * @property code Optional error code for specific error handling
     */
    @Serializable
    data class Error(val message: String, val code: String? = null) : AuthState()
}

/**
 * Sealed class representing authentication result from operations
 */
sealed class AuthResult {
    /**
     * Authentication operation succeeded
     * @property user The authenticated user
     */
    data class Success(val user: User) : AuthResult()

    /**
     * Authentication operation failed
     * @property message Error message
     * @property code Optional error code (e.g., "auth/user-not-found")
     */
    data class Failure(val message: String, val code: String? = null) : AuthResult()
}

/**
 * Types of authentication providers
 */
enum class AuthProvider {
    EMAIL,      // Email/password authentication
    GOOGLE,     // Google Sign-In
    ANONYMOUS,  // Anonymous authentication
    UNKNOWN     // Unknown provider
}
