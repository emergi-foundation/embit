package eco.emergi.embit.domain.usecases.auth

import eco.emergi.embit.domain.repositories.IUserPreferencesRepository

/**
 * Use case to determine if a user is signing in for the first time.
 *
 * Checks if user preferences were just created (within the last 60 seconds)
 * to identify new users who should see the preferences setup screen.
 */
class IsNewUserUseCase(
    private val userPreferencesRepository: IUserPreferencesRepository
) {
    /**
     * Check if the current user is new (signed up recently)
     *
     * @return true if user preferences were created within the last 60 seconds, false otherwise
     */
    suspend operator fun invoke(): Boolean {
        return try {
            val result = userPreferencesRepository.getUserPreferences()
            result.getOrNull()?.let { prefs ->
                // Check if preferences were just created (within last 60 seconds)
                val now = System.currentTimeMillis()
                val timeDiff = now - prefs.updatedAt
                timeDiff < 60_000L
            } ?: true // If Result failed, assume new user
        } catch (e: Exception) {
            // If we can't fetch preferences, assume new user
            // (preferences will be created on first access)
            true
        }
    }
}
