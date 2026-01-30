package eco.emergi.embit.domain.repositories

import eco.emergi.embit.domain.models.AnalyticsConsent
import kotlinx.coroutines.flow.Flow

/**
 * Repository interface for analytics data operations.
 *
 * Manages user consent and aggregated analytics data in Firestore.
 */
interface IAnalyticsRepository {
    /**
     * Get user's analytics consent preferences.
     *
     * @return Flow of AnalyticsConsent
     */
    fun getAnalyticsConsent(): Flow<AnalyticsConsent>

    /**
     * Update user's analytics consent preferences.
     *
     * @param consent Updated consent preferences
     * @return Result indicating success or failure
     */
    suspend fun updateAnalyticsConsent(consent: AnalyticsConsent): Result<Unit>

    /**
     * Save daily battery health metrics to Firestore.
     *
     * @param date Date in "yyyy-MM-dd" format
     * @param metrics Map of metric name to value
     * @return Result indicating success or failure
     */
    suspend fun saveDailyHealthMetrics(
        date: String,
        metrics: Map<String, Any>
    ): Result<Unit>

    /**
     * Save device profile information to Firestore.
     *
     * @param deviceId Unique device identifier
     * @param profile Map of profile data
     * @return Result indicating success or failure
     */
    suspend fun saveDeviceProfile(
        deviceId: String,
        profile: Map<String, Any>
    ): Result<Unit>

    /**
     * Contribute to global anonymous statistics (if user has consented).
     *
     * @param date Date in "yyyy-MM-dd" format
     * @param stats Map of anonymous statistics
     * @return Result indicating success or failure
     */
    suspend fun contributeToGlobalStats(
        date: String,
        stats: Map<String, Any>
    ): Result<Unit>
}
