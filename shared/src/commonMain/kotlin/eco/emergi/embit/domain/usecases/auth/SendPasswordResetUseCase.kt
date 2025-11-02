package eco.emergi.embit.domain.usecases.auth

import eco.emergi.embit.domain.repositories.IAuthRepository

/**
 * Use case for sending a password reset email.
 *
 * Validates input and delegates to the authentication repository.
 */
class SendPasswordResetUseCase(
    private val authRepository: IAuthRepository
) {
    /**
     * Send password reset email
     *
     * @param email Email address to send reset link to
     * @return Result indicating success or failure
     */
    suspend operator fun invoke(email: String): Result<Unit> {
        // Validate email
        if (email.isBlank()) {
            return Result.failure(Exception("Email cannot be empty"))
        }
        if (!email.contains("@")) {
            return Result.failure(Exception("Please enter a valid email address"))
        }

        return authRepository.sendPasswordResetEmail(email.trim())
    }
}
