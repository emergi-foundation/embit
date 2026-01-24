package eco.emergi.embit.data.firebase

import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.firestore.SetOptions
import eco.emergi.embit.domain.models.AnalyticsConsent
import eco.emergi.embit.domain.repositories.IAnalyticsRepository
import kotlinx.coroutines.channels.awaitClose
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.callbackFlow
import kotlinx.coroutines.tasks.await

/**
 * Firebase Firestore implementation of analytics repository.
 *
 * Firestore structure:
 * - `users/{userId}/analytics_consent` - User consent preferences
 * - `battery_health_metrics/{userId}/metrics/{date}` - Daily aggregated metrics per user
 * - `device_profiles/{userId}/devices/{deviceId}` - Device-specific patterns
 * - `global_stats/daily/{date}` - Anonymous aggregated data (opt-in only)
 */
class FirebaseAnalyticsRepository(
    private val firestore: FirebaseFirestore,
    private val auth: FirebaseAuth
) : IAnalyticsRepository {

    override fun getAnalyticsConsent(): Flow<AnalyticsConsent> = callbackFlow {
        val userId = auth.currentUser?.uid
        if (userId == null) {
            trySend(AnalyticsConsent.default())
            close()
            return@callbackFlow
        }

        val listener = firestore
            .collection(COLLECTION_USERS)
            .document(userId)
            .collection(COLLECTION_CONSENT)
            .document(DOC_ANALYTICS_CONSENT)
            .addSnapshotListener { snapshot, error ->
                if (error != null) {
                    close(error)
                    return@addSnapshotListener
                }

                val consent = snapshot?.let {
                    AnalyticsConsent(
                        analyticsEnabled = it.getBoolean(FIELD_ANALYTICS_ENABLED) ?: true,
                        crashlyticsEnabled = it.getBoolean(FIELD_CRASHLYTICS_ENABLED) ?: true,
                        anonymousDataSharingEnabled = it.getBoolean(FIELD_ANONYMOUS_SHARING) ?: false,
                        personalizedRecommendationsEnabled = it.getBoolean(FIELD_PERSONALIZED_RECS) ?: true,
                        consentTimestamp = it.getLong(FIELD_CONSENT_TIMESTAMP)
                            ?: eco.emergi.embit.domain.models.AnalyticsConsent.default().consentTimestamp,
                        consentVersion = it.getString(FIELD_CONSENT_VERSION)
                            ?: eco.emergi.embit.domain.models.AnalyticsConsent.default().consentVersion
                    )
                } ?: AnalyticsConsent.default()

                trySend(consent)
            }

        awaitClose { listener.remove() }
    }

    override suspend fun updateAnalyticsConsent(consent: AnalyticsConsent): Result<Unit> {
        return try {
            val userId = auth.currentUser?.uid
                ?: return Result.failure(Exception("User not authenticated"))

            val consentData = mapOf(
                FIELD_ANALYTICS_ENABLED to consent.analyticsEnabled,
                FIELD_CRASHLYTICS_ENABLED to consent.crashlyticsEnabled,
                FIELD_ANONYMOUS_SHARING to consent.anonymousDataSharingEnabled,
                FIELD_PERSONALIZED_RECS to consent.personalizedRecommendationsEnabled,
                FIELD_CONSENT_TIMESTAMP to consent.consentTimestamp,
                FIELD_CONSENT_VERSION to consent.consentVersion
            )

            firestore
                .collection(COLLECTION_USERS)
                .document(userId)
                .collection(COLLECTION_CONSENT)
                .document(DOC_ANALYTICS_CONSENT)
                .set(consentData, SetOptions.merge())
                .await()

            Result.success(Unit)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    override suspend fun saveDailyHealthMetrics(
        date: String,
        metrics: Map<String, Any>
    ): Result<Unit> {
        return try {
            val userId = auth.currentUser?.uid
                ?: return Result.failure(Exception("User not authenticated"))

            firestore
                .collection(COLLECTION_HEALTH_METRICS)
                .document(userId)
                .collection(COLLECTION_METRICS)
                .document(date)
                .set(metrics, SetOptions.merge())
                .await()

            Result.success(Unit)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    override suspend fun saveDeviceProfile(
        deviceId: String,
        profile: Map<String, Any>
    ): Result<Unit> {
        return try {
            val userId = auth.currentUser?.uid
                ?: return Result.failure(Exception("User not authenticated"))

            firestore
                .collection(COLLECTION_DEVICE_PROFILES)
                .document(userId)
                .collection(COLLECTION_DEVICES)
                .document(deviceId)
                .set(profile, SetOptions.merge())
                .await()

            Result.success(Unit)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    override suspend fun contributeToGlobalStats(
        date: String,
        stats: Map<String, Any>
    ): Result<Unit> {
        return try {
            // Check if user has consented to anonymous data sharing
            val userId = auth.currentUser?.uid ?: return Result.success(Unit)

            val consentDoc = firestore
                .collection(COLLECTION_USERS)
                .document(userId)
                .collection(COLLECTION_CONSENT)
                .document(DOC_ANALYTICS_CONSENT)
                .get()
                .await()

            val hasConsented = consentDoc.getBoolean(FIELD_ANONYMOUS_SHARING) ?: false

            if (!hasConsented) {
                return Result.success(Unit) // Skip if user hasn't consented
            }

            // Contribute to global stats (anonymous)
            // Note: In production, this would use Cloud Functions to aggregate data securely
            firestore
                .collection(COLLECTION_GLOBAL_STATS)
                .document(COLLECTION_DAILY)
                .collection(date)
                .add(stats)
                .await()

            Result.success(Unit)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    companion object {
        // Collections
        private const val COLLECTION_USERS = "users"
        private const val COLLECTION_CONSENT = "analytics_consent"
        private const val COLLECTION_HEALTH_METRICS = "battery_health_metrics"
        private const val COLLECTION_METRICS = "metrics"
        private const val COLLECTION_DEVICE_PROFILES = "device_profiles"
        private const val COLLECTION_DEVICES = "devices"
        private const val COLLECTION_GLOBAL_STATS = "global_stats"
        private const val COLLECTION_DAILY = "daily"

        // Documents
        private const val DOC_ANALYTICS_CONSENT = "consent"

        // Fields - Consent
        private const val FIELD_ANALYTICS_ENABLED = "analyticsEnabled"
        private const val FIELD_CRASHLYTICS_ENABLED = "crashlyticsEnabled"
        private const val FIELD_ANONYMOUS_SHARING = "anonymousDataSharingEnabled"
        private const val FIELD_PERSONALIZED_RECS = "personalizedRecommendationsEnabled"
        private const val FIELD_CONSENT_TIMESTAMP = "consentTimestamp"
        private const val FIELD_CONSENT_VERSION = "consentVersion"
    }
}
