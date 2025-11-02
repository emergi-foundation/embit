package eco.emergi.embit.domain.usecases.auth

import eco.emergi.embit.domain.models.User
import eco.emergi.embit.domain.repositories.IAuthRepository

/**
 * Use case for retrieving the current authenticated user.
 *
 * Returns the current user if authenticated, null otherwise.
 */
class GetCurrentUserUseCase(
    private val authRepository: IAuthRepository
) {
    /**
     * Get the current authenticated user
     *
     * @return Current user if authenticated, null otherwise
     */
    suspend operator fun invoke(): User? {
        return authRepository.getCurrentUser()
    }
}
