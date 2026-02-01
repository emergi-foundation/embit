package eco.emergi.embit.domain.repositories

import eco.emergi.embit.domain.models.EnergyProduct
import eco.emergi.embit.domain.models.UserPreferences
import kotlinx.coroutines.flow.Flow

/**
 * Repository interface for user preferences stored in Firestore.
 * Handles persisting and retrieving user-specific settings tied to their account.
 */
interface IUserPreferencesRepository {
    /**
     * Get user preferences for the current authenticated user
     * Returns default preferences if none exist in Firestore
     *
     * @return Result containing user preferences or error
     */
    suspend fun getUserPreferences(): Result<UserPreferences>

    /**
     * Observe user preferences changes as a Flow
     * Emits updates whenever preferences are modified in Firestore
     *
     * @return Flow of user preferences
     */
    fun observeUserPreferences(): Flow<UserPreferences>

    /**
     * Save/update user preferences to Firestore
     *
     * @param preferences User preferences to save
     * @return Result indicating success or failure
     */
    suspend fun saveUserPreferences(preferences: UserPreferences): Result<Unit>

    /**
     * Update user's grid location
     *
     * @param location Grid location/region identifier
     * @return Result indicating success or failure
     */
    suspend fun updateLocation(location: String): Result<Unit>

    /**
     * Update user's energy product selection
     *
     * @param energyProduct Selected energy product
     * @return Result indicating success or failure
     */
    suspend fun updateEnergyProduct(energyProduct: EnergyProduct): Result<Unit>

    /**
     * Update notification preferences
     *
     * @param enabled Whether notifications are enabled
     * @return Result indicating success or failure
     */
    suspend fun updateNotificationsEnabled(enabled: Boolean): Result<Unit>

    /**
     * Update optimal charging preference
     *
     * @param enabled Whether smart/optimal charging is enabled
     * @return Result indicating success or failure
     */
    suspend fun updateOptimalChargingEnabled(enabled: Boolean): Result<Unit>

    /**
     * Update app theme preference
     *
     * @param theme Theme name ("light", "dark", "system")
     * @return Result indicating success or failure
     */
    suspend fun updateTheme(theme: String): Result<Unit>

    /**
     * Update high-contrast mode preference
     *
     * @param enabled Whether high-contrast mode is enabled
     * @return Result indicating success or failure
     */
    suspend fun updateHighContrastMode(enabled: Boolean): Result<Unit>
}
