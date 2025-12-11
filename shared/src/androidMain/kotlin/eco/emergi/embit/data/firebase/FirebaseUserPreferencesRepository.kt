package eco.emergi.embit.data.firebase

import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.firestore.ListenerRegistration
import eco.emergi.embit.domain.models.EnergyProduct
import eco.emergi.embit.domain.models.EnergyProducts
import eco.emergi.embit.domain.models.UserPreferences
import eco.emergi.embit.domain.repositories.IAuthRepository
import eco.emergi.embit.domain.repositories.IUserPreferencesRepository
import kotlinx.coroutines.channels.awaitClose
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.callbackFlow
import kotlinx.coroutines.tasks.await

/**
 * Firebase Firestore implementation of user preferences repository.
 * Stores preferences under: users/{userId}/preferences/settings
 */
class FirebaseUserPreferencesRepository(
    private val firestore: FirebaseFirestore = FirebaseFirestore.getInstance(),
    private val authRepository: IAuthRepository
) : IUserPreferencesRepository {

    companion object {
        private const val USERS_COLLECTION = "users"
        private const val PREFERENCES_COLLECTION = "preferences"
        private const val SETTINGS_DOCUMENT = "settings"
    }

    override suspend fun getUserPreferences(): Result<UserPreferences> {
        return try {
            val userId = authRepository.getCurrentUser()?.uid
                ?: return Result.failure(Exception("User not authenticated"))

            val docRef = firestore
                .collection(USERS_COLLECTION)
                .document(userId)
                .collection(PREFERENCES_COLLECTION)
                .document(SETTINGS_DOCUMENT)

            val snapshot = docRef.get().await()

            if (snapshot.exists()) {
                val data = snapshot.data ?: return Result.success(UserPreferences.default(userId))
                Result.success(UserPreferences.fromFirestoreMap(data))
            } else {
                // Return default preferences if none exist yet
                val defaultPrefs = UserPreferences.default(userId)
                // Save defaults to Firestore for future use
                saveUserPreferences(defaultPrefs)
                Result.success(defaultPrefs)
            }
        } catch (e: Exception) {
            Result.failure(Exception("Failed to get user preferences: ${e.message}"))
        }
    }

    override fun observeUserPreferences(): Flow<UserPreferences> = callbackFlow {
        var listenerRegistration: ListenerRegistration? = null

        try {
            val userId = authRepository.getCurrentUser()?.uid
            if (userId == null) {
                close(Exception("User not authenticated"))
                return@callbackFlow
            }

            val docRef = firestore
                .collection(USERS_COLLECTION)
                .document(userId)
                .collection(PREFERENCES_COLLECTION)
                .document(SETTINGS_DOCUMENT)

            listenerRegistration = docRef.addSnapshotListener { snapshot, error ->
                if (error != null) {
                    close(error)
                    return@addSnapshotListener
                }

                if (snapshot != null && snapshot.exists()) {
                    val data = snapshot.data
                    if (data != null) {
                        trySend(UserPreferences.fromFirestoreMap(data))
                    }
                } else {
                    // Send default preferences if document doesn't exist
                    trySend(UserPreferences.default(userId))
                }
            }

            awaitClose {
                listenerRegistration?.remove()
            }
        } catch (e: Exception) {
            close(e)
        }
    }

    override suspend fun saveUserPreferences(preferences: UserPreferences): Result<Unit> {
        return try {
            val userId = authRepository.getCurrentUser()?.uid
                ?: return Result.failure(Exception("User not authenticated"))

            // Update the userId to match current user (in case it's different)
            val updatedPreferences = preferences.copy(
                userId = userId,
                updatedAt = System.currentTimeMillis()
            )

            firestore
                .collection(USERS_COLLECTION)
                .document(userId)
                .collection(PREFERENCES_COLLECTION)
                .document(SETTINGS_DOCUMENT)
                .set(updatedPreferences.toFirestoreMap())
                .await()

            Result.success(Unit)
        } catch (e: Exception) {
            Result.failure(Exception("Failed to save user preferences: ${e.message}"))
        }
    }

    override suspend fun updateLocation(location: String): Result<Unit> {
        return updateField("location", location)
    }

    override suspend fun updateEnergyProduct(energyProduct: EnergyProduct): Result<Unit> {
        return updateField("energyProductType", energyProduct.type.name)
    }

    override suspend fun updateNotificationsEnabled(enabled: Boolean): Result<Unit> {
        return updateField("notificationsEnabled", enabled)
    }

    override suspend fun updateOptimalChargingEnabled(enabled: Boolean): Result<Unit> {
        return updateField("optimalChargingEnabled", enabled)
    }

    override suspend fun updateTheme(theme: String): Result<Unit> {
        return updateField("theme", theme)
    }

    /**
     * Helper function to update a single field in Firestore
     */
    private suspend fun updateField(fieldName: String, value: Any): Result<Unit> {
        return try {
            val userId = authRepository.getCurrentUser()?.uid
                ?: return Result.failure(Exception("User not authenticated"))

            val updates = mapOf(
                fieldName to value,
                "updatedAt" to System.currentTimeMillis()
            )

            firestore
                .collection(USERS_COLLECTION)
                .document(userId)
                .collection(PREFERENCES_COLLECTION)
                .document(SETTINGS_DOCUMENT)
                .update(updates)
                .await()

            Result.success(Unit)
        } catch (e: Exception) {
            // If document doesn't exist yet, create it with the field
            try {
                val userId = authRepository.getCurrentUser()?.uid
                    ?: return Result.failure(Exception("User not authenticated"))

                val currentPrefs = getUserPreferences().getOrNull()
                    ?: UserPreferences.default(userId)

                val updatedPrefs = when (fieldName) {
                    "location" -> currentPrefs.copy(location = value as String)
                    "energyProductType" -> {
                        val productType = EnergyProducts.fromTypeName(value as String)
                        currentPrefs.copy(energyProductType = productType.type)
                    }
                    "notificationsEnabled" -> currentPrefs.copy(notificationsEnabled = value as Boolean)
                    "optimalChargingEnabled" -> currentPrefs.copy(optimalChargingEnabled = value as Boolean)
                    "theme" -> currentPrefs.copy(theme = value as String)
                    else -> currentPrefs
                }

                saveUserPreferences(updatedPrefs.copy(updatedAt = System.currentTimeMillis()))
            } catch (createException: Exception) {
                Result.failure(Exception("Failed to update $fieldName: ${createException.message}"))
            }
        }
    }
}
