package eco.emergi.embit.domain.usecases.auth

import eco.emergi.embit.domain.models.AuthResult
import eco.emergi.embit.domain.repositories.IAuthRepository

/**
 * Use case for signing in a user with email and password.
 *
 * Validates input and delegates to the authentication repository.
 */
class SignInUseCase(
    private val authRepository: IAuthRepository
) {
    /**
     * Sign in with email and password
     *
     * @param email User's email address
     * @param password User's password
     * @return AuthResult indicating success or failure
     */
    suspend operator fun invoke(email: String, password: String): AuthResult {
        // Validate email
        if (email.isBlank()) {
            return AuthResult.Failure("Email cannot be empty")
        }
        if (!email.contains("@")) {
            return AuthResult.Failure("Please enter a valid email address")
        }

        // Validate password
        if (password.isBlank()) {
            return AuthResult.Failure("Password cannot be empty")
        }
        if (password.length < 6) {
            return AuthResult.Failure("Password must be at least 6 characters")
        }

        // Perform sign in
        return authRepository.signInWithEmail(email.trim(), password)
    }
}
