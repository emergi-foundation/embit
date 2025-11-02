package eco.emergi.embit.domain.models

import kotlinx.serialization.Serializable

/**
 * Represents an authenticated user in the Embit system.
 *
 * @property uid Unique identifier from Firebase Auth
 * @property email User's email address (nullable for anonymous users)
 * @property displayName User's display name (nullable)
 * @property photoUrl URL to user's profile photo (nullable)
 * @property isAnonymous Whether this is an anonymous user account
 * @property createdAt Timestamp when the account was created (milliseconds since epoch)
 * @property lastSignInAt Timestamp of last sign-in (milliseconds since epoch)
 */
@Serializable
data class User(
    val uid: String,
    val email: String? = null,
    val displayName: String? = null,
    val photoUrl: String? = null,
    val isAnonymous: Boolean = false,
    val createdAt: Long = 0L,
    val lastSignInAt: Long = 0L
) {
    /**
     * Returns a display-friendly name for the user.
     * Prioritizes displayName, falls back to email, then shows "Anonymous User".
     */
    fun getDisplayNameOrEmail(): String {
        return when {
            !displayName.isNullOrBlank() -> displayName
            !email.isNullOrBlank() -> email
            else -> "Anonymous User"
        }
    }

    /**
     * Returns initials for profile avatar display.
     * Takes first letter of display name or email.
     */
    fun getInitials(): String {
        return when {
            !displayName.isNullOrBlank() -> {
                displayName.split(" ")
                    .take(2)
                    .map { it.first().uppercaseChar() }
                    .joinToString("")
            }
            !email.isNullOrBlank() -> email.first().uppercaseChar().toString()
            else -> "?"
        }
    }
}
