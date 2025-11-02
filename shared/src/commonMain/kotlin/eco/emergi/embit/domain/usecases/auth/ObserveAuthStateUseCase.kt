package eco.emergi.embit.domain.usecases.auth

import eco.emergi.embit.domain.models.AuthState
import eco.emergi.embit.domain.repositories.IAuthRepository
import kotlinx.coroutines.flow.Flow

/**
 * Use case for observing authentication state changes.
 *
 * Returns a Flow that emits updates when the user signs in or out.
 */
class ObserveAuthStateUseCase(
    private val authRepository: IAuthRepository
) {
    /**
     * Observe authentication state as a Flow
     *
     * @return Flow emitting AuthState updates
     */
    operator fun invoke(): Flow<AuthState> {
        return authRepository.observeAuthState()
    }
}
