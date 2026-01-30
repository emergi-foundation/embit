package eco.emergi.embit.domain.repositories

import eco.emergi.embit.domain.models.Feedback
import eco.emergi.embit.domain.models.FeedbackType
import kotlinx.coroutines.flow.Flow

/**
 * Repository interface for user feedback operations.
 *
 * Handles submission and retrieval of user feedback (ratings, bug reports, feature requests).
 */
interface IFeedbackRepository {
    /**
     * Submit new feedback.
     *
     * @param feedback The feedback to submit
     * @return Result with feedback ID if successful, or error
     */
    suspend fun submitFeedback(feedback: Feedback): Result<String>

    /**
     * Get all feedback submitted by the current user.
     *
     * @return Flow of user's feedback list
     */
    fun getUserFeedback(): Flow<List<Feedback>>

    /**
     * Get feedback by type for the current user.
     *
     * @param type Filter by feedback type
     * @return Flow of filtered feedback list
     */
    fun getUserFeedbackByType(type: FeedbackType): Flow<List<Feedback>>

    /**
     * Get a specific feedback item by ID.
     *
     * @param feedbackId The feedback ID
     * @return Result with Feedback if found, or error
     */
    suspend fun getFeedbackById(feedbackId: String): Result<Feedback?>
}
