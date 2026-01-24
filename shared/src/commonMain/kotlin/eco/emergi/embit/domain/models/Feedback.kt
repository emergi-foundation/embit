package eco.emergi.embit.domain.models

import kotlinx.datetime.Clock
import kotlinx.datetime.Instant
import kotlinx.serialization.Serializable

/**
 * Represents user feedback submitted through the app.
 *
 * @property id Unique identifier for the feedback
 * @property userId ID of the user who submitted the feedback
 * @property type Type of feedback (rating, bug report, feature request, support)
 * @property rating Star rating (1-5), only applicable for RATING type
 * @property subject Brief subject/title of the feedback
 * @property message Detailed feedback message
 * @property deviceInfo Device information for bug reports
 * @property timestamp When the feedback was submitted
 * @property status Current status of the feedback
 */
@Serializable
data class Feedback(
    val id: String = "",
    val userId: String = "",
    val type: FeedbackType = FeedbackType.RATING,
    val rating: Int? = null, // 1-5 stars, null if not a rating
    val subject: String? = null,
    val message: String = "",
    val deviceInfo: FeedbackDeviceInfo = FeedbackDeviceInfo(),
    val timestamp: Long = Clock.System.now().toEpochMilliseconds(),
    val status: FeedbackStatus = FeedbackStatus.SUBMITTED
) {
    companion object {
        /**
         * Create a new feedback instance with current device info.
         */
        fun create(
            userId: String,
            type: FeedbackType,
            rating: Int? = null,
            subject: String? = null,
            message: String,
            deviceInfo: FeedbackDeviceInfo
        ): Feedback {
            return Feedback(
                userId = userId,
                type = type,
                rating = rating,
                subject = subject,
                message = message,
                deviceInfo = deviceInfo,
                timestamp = Clock.System.now().toEpochMilliseconds(),
                status = FeedbackStatus.SUBMITTED
            )
        }
    }
}

/**
 * Type of feedback being submitted.
 */
@Serializable
enum class FeedbackType {
    /** Star rating with optional comments */
    RATING,

    /** Bug report or issue */
    BUG_REPORT,

    /** Feature request or suggestion */
    FEATURE_REQUEST,

    /** General support or help request */
    SUPPORT
}

/**
 * Status of the feedback in the review process.
 */
@Serializable
enum class FeedbackStatus {
    /** Newly submitted, not yet reviewed */
    SUBMITTED,

    /** Under review by support team */
    IN_REVIEW,

    /** Issue has been resolved or implemented */
    RESOLVED,

    /** Closed without resolution */
    CLOSED
}

/**
 * Device information for debugging and context (used in feedback).
 *
 * @property deviceModel Device model name (e.g., "Pixel 6")
 * @property osVersion Android OS version (e.g., "14")
 * @property appVersion App version string (e.g., "2.0.0")
 * @property batteryPercentage Current battery percentage at time of feedback
 * @property isCharging Whether device is charging
 */
@Serializable
data class FeedbackDeviceInfo(
    val deviceModel: String = "",
    val osVersion: String = "",
    val appVersion: String = "",
    val batteryPercentage: Int = 0,
    val isCharging: Boolean = false
) {
    companion object {
        /**
         * Create device info with default/empty values (platform-specific implementation will populate).
         */
        fun empty(): FeedbackDeviceInfo = FeedbackDeviceInfo()
    }
}
