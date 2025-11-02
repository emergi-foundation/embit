package eco.emergi.embit.data.firebase

import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.FirebaseAuthException
import com.google.firebase.auth.GoogleAuthProvider
import com.google.firebase.auth.UserProfileChangeRequest
import eco.emergi.embit.domain.models.AuthResult
import eco.emergi.embit.domain.models.AuthState
import eco.emergi.embit.domain.models.User
import eco.emergi.embit.domain.repositories.IAuthRepository
import kotlinx.coroutines.channels.awaitClose
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.callbackFlow
import kotlinx.coroutines.tasks.await

/**
 * Firebase implementation of the authentication repository.
 * Handles all authentication operations using Firebase Auth.
 */
class FirebaseAuthRepository(
    private val firebaseAuth: FirebaseAuth = FirebaseAuth.getInstance()
) : IAuthRepository {

    override fun observeAuthState(): Flow<AuthState> = callbackFlow {
        val authStateListener = FirebaseAuth.AuthStateListener { auth ->
            val firebaseUser = auth.currentUser
            val authState = if (firebaseUser != null) {
                AuthState.Authenticated(firebaseUser.toUser())
            } else {
                AuthState.Unauthenticated
            }
            trySend(authState)
        }

        firebaseAuth.addAuthStateListener(authStateListener)

        // Send initial state
        val currentUser = firebaseAuth.currentUser
        trySend(
            if (currentUser != null) {
                AuthState.Authenticated(currentUser.toUser())
            } else {
                AuthState.Unauthenticated
            }
        )

        awaitClose { firebaseAuth.removeAuthStateListener(authStateListener) }
    }

    override suspend fun getCurrentUser(): User? {
        return firebaseAuth.currentUser?.toUser()
    }

    override suspend fun signInWithEmail(email: String, password: String): AuthResult {
        return try {
            val result = firebaseAuth.signInWithEmailAndPassword(email, password).await()
            val user = result.user?.toUser()
            if (user != null) {
                AuthResult.Success(user)
            } else {
                AuthResult.Failure("Sign in failed: User data not available")
            }
        } catch (e: FirebaseAuthException) {
            AuthResult.Failure(
                message = getErrorMessage(e.errorCode),
                code = e.errorCode
            )
        } catch (e: Exception) {
            AuthResult.Failure("Sign in failed: ${e.message ?: "Unknown error"}")
        }
    }

    override suspend fun signUpWithEmail(
        email: String,
        password: String,
        displayName: String?
    ): AuthResult {
        return try {
            // Create the user account
            val result = firebaseAuth.createUserWithEmailAndPassword(email, password).await()
            val firebaseUser = result.user

            if (firebaseUser == null) {
                return AuthResult.Failure("Sign up failed: User creation failed")
            }

            // Update display name if provided
            if (!displayName.isNullOrBlank()) {
                val profileUpdates = UserProfileChangeRequest.Builder()
                    .setDisplayName(displayName)
                    .build()
                firebaseUser.updateProfile(profileUpdates).await()
            }

            // Reload user to get updated profile
            firebaseUser.reload().await()

            val user = firebaseUser.toUser()
            AuthResult.Success(user)
        } catch (e: FirebaseAuthException) {
            AuthResult.Failure(
                message = getErrorMessage(e.errorCode),
                code = e.errorCode
            )
        } catch (e: Exception) {
            AuthResult.Failure("Sign up failed: ${e.message ?: "Unknown error"}")
        }
    }

    override suspend fun signInWithGoogle(idToken: String): AuthResult {
        return try {
            val credential = GoogleAuthProvider.getCredential(idToken, null)
            val result = firebaseAuth.signInWithCredential(credential).await()
            val user = result.user?.toUser()
            if (user != null) {
                AuthResult.Success(user)
            } else {
                AuthResult.Failure("Google sign in failed: User data not available")
            }
        } catch (e: FirebaseAuthException) {
            AuthResult.Failure(
                message = getErrorMessage(e.errorCode),
                code = e.errorCode
            )
        } catch (e: Exception) {
            AuthResult.Failure("Google sign in failed: ${e.message ?: "Unknown error"}")
        }
    }

    override suspend fun signInAnonymously(): AuthResult {
        return try {
            val result = firebaseAuth.signInAnonymously().await()
            val user = result.user?.toUser()
            if (user != null) {
                AuthResult.Success(user)
            } else {
                AuthResult.Failure("Anonymous sign in failed: User data not available")
            }
        } catch (e: FirebaseAuthException) {
            AuthResult.Failure(
                message = getErrorMessage(e.errorCode),
                code = e.errorCode
            )
        } catch (e: Exception) {
            AuthResult.Failure("Anonymous sign in failed: ${e.message ?: "Unknown error"}")
        }
    }

    override suspend fun signOut(): Result<Unit> {
        return try {
            firebaseAuth.signOut()
            Result.success(Unit)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    override suspend fun deleteAccount(): Result<Unit> {
        return try {
            val user = firebaseAuth.currentUser
                ?: return Result.failure(Exception("No user signed in"))
            user.delete().await()
            Result.success(Unit)
        } catch (e: FirebaseAuthException) {
            Result.failure(Exception(getErrorMessage(e.errorCode)))
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    override suspend fun sendPasswordResetEmail(email: String): Result<Unit> {
        return try {
            firebaseAuth.sendPasswordResetEmail(email).await()
            Result.success(Unit)
        } catch (e: FirebaseAuthException) {
            Result.failure(Exception(getErrorMessage(e.errorCode)))
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    override suspend fun updateDisplayName(displayName: String): Result<Unit> {
        return try {
            val user = firebaseAuth.currentUser
                ?: return Result.failure(Exception("No user signed in"))

            val profileUpdates = UserProfileChangeRequest.Builder()
                .setDisplayName(displayName)
                .build()

            user.updateProfile(profileUpdates).await()
            Result.success(Unit)
        } catch (e: FirebaseAuthException) {
            Result.failure(Exception(getErrorMessage(e.errorCode)))
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    override suspend fun updateEmail(newEmail: String): Result<Unit> {
        return try {
            val user = firebaseAuth.currentUser
                ?: return Result.failure(Exception("No user signed in"))
            user.updateEmail(newEmail).await()
            Result.success(Unit)
        } catch (e: FirebaseAuthException) {
            Result.failure(Exception(getErrorMessage(e.errorCode)))
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    override suspend fun updatePassword(newPassword: String): Result<Unit> {
        return try {
            val user = firebaseAuth.currentUser
                ?: return Result.failure(Exception("No user signed in"))
            user.updatePassword(newPassword).await()
            Result.success(Unit)
        } catch (e: FirebaseAuthException) {
            Result.failure(Exception(getErrorMessage(e.errorCode)))
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    override suspend fun isSignedIn(): Boolean {
        return firebaseAuth.currentUser != null
    }

    override suspend fun reloadUser(): Result<User?> {
        return try {
            val user = firebaseAuth.currentUser
                ?: return Result.success(null)
            user.reload().await()
            Result.success(user.toUser())
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    /**
     * Extension function to convert Firebase User to domain User model
     */
    private fun com.google.firebase.auth.FirebaseUser.toUser(): User {
        return User(
            uid = uid,
            email = email,
            displayName = displayName,
            photoUrl = photoUrl?.toString(),
            isAnonymous = isAnonymous,
            createdAt = metadata?.creationTimestamp ?: 0L,
            lastSignInAt = metadata?.lastSignInTimestamp ?: 0L
        )
    }

    /**
     * Get user-friendly error messages from Firebase error codes
     */
    private fun getErrorMessage(errorCode: String): String {
        return when (errorCode) {
            "ERROR_INVALID_EMAIL" -> "The email address is invalid."
            "ERROR_WRONG_PASSWORD" -> "The password is incorrect."
            "ERROR_USER_NOT_FOUND" -> "No account found with this email."
            "ERROR_USER_DISABLED" -> "This account has been disabled."
            "ERROR_TOO_MANY_REQUESTS" -> "Too many attempts. Please try again later."
            "ERROR_OPERATION_NOT_ALLOWED" -> "This sign in method is not allowed."
            "ERROR_EMAIL_ALREADY_IN_USE" -> "An account already exists with this email."
            "ERROR_WEAK_PASSWORD" -> "The password is too weak. Use at least 6 characters."
            "ERROR_REQUIRES_RECENT_LOGIN" -> "This operation requires recent authentication. Please sign in again."
            "ERROR_CREDENTIAL_ALREADY_IN_USE" -> "This credential is already associated with a different account."
            "ERROR_ACCOUNT_EXISTS_WITH_DIFFERENT_CREDENTIAL" -> "An account already exists with the same email but different sign-in method."
            else -> "Authentication failed. Please try again."
        }
    }
}
