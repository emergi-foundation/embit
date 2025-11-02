package eco.emergi.embit.domain.usecases.auth

import eco.emergi.embit.domain.repositories.IAuthRepository

/**
 * Use case for signing out the current user.
 *
 * Delegates to the authentication repository to sign out.
 */
class SignOutUseCase(
    private val authRepository: IAuthRepository
) {
    /**
     * Sign out the current user
     *
     * @return Result indicating success or failure
     */
    suspend operator fun invoke(): Result<Unit> {
        return authRepository.signOut()
    }
}
