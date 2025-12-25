package eco.emergi.embit.platform.auth

import android.content.Context
import android.content.Intent
import com.google.android.gms.auth.api.identity.BeginSignInRequest
import com.google.android.gms.auth.api.identity.Identity
import com.google.android.gms.auth.api.identity.SignInClient
import com.google.android.gms.common.api.ApiException
import kotlinx.coroutines.tasks.await

/**
 * Manager for Google Sign-In using Google Identity Services (One Tap).
 *
 * Provides methods to:
 * - Configure and start One Tap sign-in flow
 * - Extract Google ID token from sign-in result
 * - Sign out from Google
 *
 * This is a platform-specific implementation for Android.
 */
class GoogleSignInManager(
    private val context: Context
) {
    private val oneTapClient: SignInClient = Identity.getSignInClient(context)

    /**
     * Web Client ID from Firebase Console.
     * TODO: Replace with actual Web Client ID from google-services.json after Firebase configuration.
     *
     * To find this:
     * 1. Open google-services.json
     * 2. Find the oauth_client with "client_type": 3
     * 3. Copy the "client_id" value
     */
    private val webClientId = "YOUR_WEB_CLIENT_ID_HERE"

    /**
     * Creates a One Tap sign-in request with configured settings.
     *
     * Configuration:
     * - Auto-select account if only one Google account is available
     * - Filter to only show Google accounts
     * - Requires ID token for Firebase authentication
     *
     * @return BeginSignInRequest configured for One Tap
     */
    fun createOneTapRequest(): BeginSignInRequest {
        return BeginSignInRequest.builder()
            .setGoogleIdTokenRequestOptions(
                BeginSignInRequest.GoogleIdTokenRequestOptions.builder()
                    .setSupported(true)
                    // Set to true to only show accounts previously used to sign in
                    .setFilterByAuthorizedAccounts(false)
                    // Web Client ID from Firebase Console
                    .setServerClientId(webClientId)
                    .build()
            )
            // Auto-select account if only one is available
            .setAutoSelectEnabled(true)
            .build()
    }

    /**
     * Begins the One Tap sign-in flow.
     *
     * This will:
     * 1. Show the One Tap UI with available Google accounts
     * 2. Auto-select if only one account is available
     * 3. Return a PendingIntent to launch the sign-in UI
     *
     * @return BeginSignInResult containing the PendingIntent
     * @throws ApiException if One Tap is not available (no Google accounts, etc.)
     */
    suspend fun beginOneTapSignIn() = oneTapClient.beginSignIn(createOneTapRequest()).await()

    /**
     * Extracts the Google ID token from the One Tap sign-in result.
     *
     * This token is used to authenticate with Firebase Auth.
     *
     * @param data Intent returned from One Tap activity result
     * @return Google ID token string, or null if extraction fails
     */
    fun getGoogleIdToken(data: Intent): String? {
        return try {
            val credential = oneTapClient.getSignInCredentialFromIntent(data)
            credential.googleIdToken
        } catch (e: ApiException) {
            e.printStackTrace()
            null
        }
    }

    /**
     * Signs out from Google.
     *
     * This clears the One Tap state so that the user will be prompted
     * to select an account again on next sign-in.
     */
    suspend fun signOut() {
        oneTapClient.signOut().await()
    }
}
