package eco.emergi.embit.android.services

import android.content.Context
import android.util.Log
import dagger.hilt.android.qualifiers.ApplicationContext
import eco.emergi.embit.domain.models.AuthState
import eco.emergi.embit.domain.usecases.auth.ObserveAuthStateUseCase
import eco.emergi.embit.domain.usecases.sync.BidirectionalSyncUseCase
import eco.emergi.embit.domain.usecases.sync.ImportBatteryDataUseCase
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.flow.collectLatest
import kotlinx.coroutines.launch
import javax.inject.Inject
import javax.inject.Singleton

/**
 * Manages app-wide state initialization and automatic background tasks.
 *
 * Responsibilities:
 * - Automatic data sync for authenticated users on app launch
 * - Persistent authentication state monitoring
 * - Background data synchronization
 * - Location-based grid configuration updates
 *
 * WARNING: This class depends on Koin use cases (ObserveAuthStateUseCase, BidirectionalSyncUseCase).
 * Do NOT inject this via Hilt in EmbitApplication - it will crash at startup!
 * Instead, manually instantiate it after Koin initialization using GlobalContext.get().
 */
@Singleton
class AppStateManager @Inject constructor(
    @ApplicationContext private val context: Context,
    private val observeAuthStateUseCase: ObserveAuthStateUseCase,
    private val bidirectionalSyncUseCase: BidirectionalSyncUseCase
) {
    private val scope = CoroutineScope(SupervisorJob() + Dispatchers.IO)
    private val TAG = "AppStateManager"

    private var hasInitializedSync = false

    /**
     * Initialize app state management.
     * Call this from Application.onCreate()
     */
    fun initialize() {
        Log.d(TAG, "Initializing app state manager")

        // Monitor authentication state and trigger automatic sync
        scope.launch {
            observeAuthStateUseCase().collectLatest { authState ->
                when (authState) {
                    is AuthState.Authenticated -> {
                        onUserAuthenticated(authState.user.uid)
                    }
                    is AuthState.Unauthenticated -> {
                        onUserUnauthenticated()
                    }
                    else -> {
                        // Loading state - do nothing
                    }
                }
            }
        }
    }

    /**
     * Called when user is authenticated (either on app launch or after sign-in).
     * Triggers automatic data synchronization.
     */
    private suspend fun onUserAuthenticated(userId: String) {
        Log.d(TAG, "User authenticated: $userId")

        // Only run initial sync once per app session
        if (!hasInitializedSync) {
            hasInitializedSync = true
            triggerAutomaticSync()
        }
    }

    /**
     * Called when user signs out.
     * Resets initialization state.
     */
    private fun onUserUnauthenticated() {
        Log.d(TAG, "User unauthenticated")
        hasInitializedSync = false
    }

    /**
     * Triggers automatic bidirectional sync in the background.
     * Downloads latest data from Firestore and uploads any local changes.
     */
    private suspend fun triggerAutomaticSync() {
        Log.d(TAG, "Starting automatic sync...")

        try {
            when (val result = bidirectionalSyncUseCase(
                maxUploadBatchSize = 100,
                maxDownloadLimit = 1000,
                conflictStrategy = ImportBatteryDataUseCase.ConflictStrategy.KEEP_NEWER,
                syncDirection = BidirectionalSyncUseCase.SyncDirection.BOTH
            )) {
                is BidirectionalSyncUseCase.BidirectionalSyncResult.Success -> {
                    Log.d(TAG, "Automatic sync completed: " +
                            "uploaded ${result.uploadedCount}, " +
                            "imported ${result.importedCount}, " +
                            "conflicts ${result.conflictsResolved}")
                }
                is BidirectionalSyncUseCase.BidirectionalSyncResult.Failure -> {
                    Log.e(TAG, "Automatic sync failed: ${result.error}")
                }
            }
        } catch (e: Exception) {
            Log.e(TAG, "Error during automatic sync", e)
        }
    }

    /**
     * Manually trigger a sync (can be called from UI).
     */
    suspend fun manualSync(): BidirectionalSyncUseCase.BidirectionalSyncResult {
        Log.d(TAG, "Manual sync requested")
        return bidirectionalSyncUseCase(
            maxUploadBatchSize = 100,
            maxDownloadLimit = 1000,
            conflictStrategy = ImportBatteryDataUseCase.ConflictStrategy.KEEP_NEWER,
            syncDirection = BidirectionalSyncUseCase.SyncDirection.BOTH
        )
    }
}
