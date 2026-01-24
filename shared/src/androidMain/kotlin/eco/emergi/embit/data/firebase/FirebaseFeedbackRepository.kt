package eco.emergi.embit.data.firebase

import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.firestore.Query
import eco.emergi.embit.domain.models.Feedback
import eco.emergi.embit.domain.models.FeedbackType
import eco.emergi.embit.domain.repositories.IFeedbackRepository
import kotlinx.coroutines.channels.awaitClose
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.callbackFlow
import kotlinx.coroutines.tasks.await

/**
 * Firebase Firestore implementation of feedback repository.
 *
 * Stores feedback in Firestore collection: `feedback/{feedbackId}`
 */
class FirebaseFeedbackRepository(
    private val firestore: FirebaseFirestore,
    private val auth: FirebaseAuth
) : IFeedbackRepository {

    private val feedbackCollection = firestore.collection(COLLECTION_FEEDBACK)

    override suspend fun submitFeedback(feedback: Feedback): Result<String> {
        return try {
            val userId = auth.currentUser?.uid
                ?: return Result.failure(Exception("User not authenticated"))

            // Create feedback with user ID
            val feedbackWithUser = feedback.copy(userId = userId)

            // Add to Firestore
            val documentRef = feedbackCollection.add(feedbackWithUser.toMap()).await()

            Result.success(documentRef.id)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    override fun getUserFeedback(): Flow<List<Feedback>> = callbackFlow {
        val userId = auth.currentUser?.uid
        if (userId == null) {
            trySend(emptyList())
            close()
            return@callbackFlow
        }

        val listener = feedbackCollection
            .whereEqualTo(FIELD_USER_ID, userId)
            .orderBy(FIELD_TIMESTAMP, Query.Direction.DESCENDING)
            .addSnapshotListener { snapshot, error ->
                if (error != null) {
                    close(error)
                    return@addSnapshotListener
                }

                val feedbackList = snapshot?.documents?.mapNotNull { doc ->
                    doc.toFeedback(doc.id)
                } ?: emptyList()

                trySend(feedbackList)
            }

        awaitClose { listener.remove() }
    }

    override fun getUserFeedbackByType(type: FeedbackType): Flow<List<Feedback>> = callbackFlow {
        val userId = auth.currentUser?.uid
        if (userId == null) {
            trySend(emptyList())
            close()
            return@callbackFlow
        }

        val listener = feedbackCollection
            .whereEqualTo(FIELD_USER_ID, userId)
            .whereEqualTo(FIELD_TYPE, type.name)
            .orderBy(FIELD_TIMESTAMP, Query.Direction.DESCENDING)
            .addSnapshotListener { snapshot, error ->
                if (error != null) {
                    close(error)
                    return@addSnapshotListener
                }

                val feedbackList = snapshot?.documents?.mapNotNull { doc ->
                    doc.toFeedback(doc.id)
                } ?: emptyList()

                trySend(feedbackList)
            }

        awaitClose { listener.remove() }
    }

    override suspend fun getFeedbackById(feedbackId: String): Result<Feedback?> {
        return try {
            val document = feedbackCollection.document(feedbackId).get().await()
            val feedback = document.toFeedback(document.id)
            Result.success(feedback)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    companion object {
        private const val COLLECTION_FEEDBACK = "feedback"
        private const val FIELD_USER_ID = "userId"
        private const val FIELD_TYPE = "type"
        private const val FIELD_RATING = "rating"
        private const val FIELD_SUBJECT = "subject"
        private const val FIELD_MESSAGE = "message"
        private const val FIELD_DEVICE_INFO = "deviceInfo"
        private const val FIELD_TIMESTAMP = "timestamp"
        private const val FIELD_STATUS = "status"

        // DeviceInfo fields
        private const val FIELD_DEVICE_MODEL = "deviceModel"
        private const val FIELD_OS_VERSION = "osVersion"
        private const val FIELD_APP_VERSION = "appVersion"
        private const val FIELD_BATTERY_PERCENTAGE = "batteryPercentage"
        private const val FIELD_IS_CHARGING = "isCharging"
    }
}

/**
 * Extension function to convert Feedback to Firestore map.
 */
private fun Feedback.toMap(): Map<String, Any?> {
    return mapOf(
        "userId" to userId,
        "type" to type.name,
        "rating" to rating,
        "subject" to subject,
        "message" to message,
        "deviceInfo" to mapOf(
            "deviceModel" to deviceInfo.deviceModel,
            "osVersion" to deviceInfo.osVersion,
            "appVersion" to deviceInfo.appVersion,
            "batteryPercentage" to deviceInfo.batteryPercentage,
            "isCharging" to deviceInfo.isCharging
        ),
        "timestamp" to timestamp,
        "status" to status.name
    )
}

/**
 * Extension function to convert Firestore document to Feedback.
 */
private fun com.google.firebase.firestore.DocumentSnapshot.toFeedback(id: String): Feedback? {
    return try {
        val deviceInfoMap = get("deviceInfo") as? Map<*, *>

        Feedback(
            id = id,
            userId = getString("userId") ?: "",
            type = FeedbackType.valueOf(getString("type") ?: "RATING"),
            rating = getLong("rating")?.toInt(),
            subject = getString("subject"),
            message = getString("message") ?: "",
            deviceInfo = eco.emergi.embit.domain.models.FeedbackDeviceInfo(
                deviceModel = deviceInfoMap?.get("deviceModel") as? String ?: "",
                osVersion = deviceInfoMap?.get("osVersion") as? String ?: "",
                appVersion = deviceInfoMap?.get("appVersion") as? String ?: "",
                batteryPercentage = (deviceInfoMap?.get("batteryPercentage") as? Long)?.toInt() ?: 0,
                isCharging = deviceInfoMap?.get("isCharging") as? Boolean ?: false
            ),
            timestamp = getLong("timestamp") ?: 0,
            status = eco.emergi.embit.domain.models.FeedbackStatus.valueOf(
                getString("status") ?: "SUBMITTED"
            )
        )
    } catch (e: Exception) {
        null
    }
}
