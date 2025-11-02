package eco.emergi.embit.domain.usecases.auth

import eco.emergi.embit.domain.models.AuthResult
import eco.emergi.embit.domain.repositories.IAuthRepository

/**
 * Use case for signing up a new user with email and password.
 *
 * Validates input and delegates to the authentication repository.
 */
class SignUpUseCase(
    private val authRepository: IAuthRepository
) {
    /**
     * Sign up with email and password
     *
     * @param email User's email address
     * @param password User's password
     * @param displayName Optional display name for the user
     * @return AuthResult indicating success or failure
     */
    suspend operator fun invoke(
        email: String,
        password: String,
        displayName: String? = null
    ): AuthResult {
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

        // Validate display name if provided
        if (displayName != null && displayName.isBlank()) {
            return AuthResult.Failure("Display name cannot be empty if provided")
        }

        // Perform sign up
        return authRepository.signUpWithEmail(
            email = email.trim(),
            password = password,
            displayName = displayName?.trim()
        )
    }
}
