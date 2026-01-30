package eco.emergi.embit.domain.usecases.auth

import eco.emergi.embit.domain.models.AuthResult
import eco.emergi.embit.domain.repositories.IAuthRepository

/**
 * Use case for signing in a user with Google.
 *
 * Validates the Google ID token and delegates to the authentication repository.
 */
class SignInWithGoogleUseCase(
    private val authRepository: IAuthRepository
) {
    /**
     * Sign in with Google ID token
     *
     * @param idToken Google ID token from Google Sign-In flow
     * @return AuthResult indicating success or failure
     */
    suspend operator fun invoke(idToken: String): AuthResult {
        // Validate token
        if (idToken.isBlank()) {
            return AuthResult.Failure("Invalid Google ID token")
        }

        // Perform Google sign in
        return authRepository.signInWithGoogle(idToken)
    }
}
