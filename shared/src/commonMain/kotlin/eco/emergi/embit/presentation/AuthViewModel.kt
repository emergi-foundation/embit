package eco.emergi.embit.presentation

import eco.emergi.embit.domain.models.AuthResult
import eco.emergi.embit.domain.models.AuthState
import eco.emergi.embit.domain.models.User
import eco.emergi.embit.domain.repositories.IUserPreferencesRepository
import eco.emergi.embit.domain.usecases.auth.*
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.flow.*
import kotlinx.coroutines.launch

/**
 * ViewModel for authentication screens.
 * Manages user authentication state and operations.
 */
class AuthViewModel(
    private val observeAuthStateUseCase: ObserveAuthStateUseCase,
    private val signInUseCase: SignInUseCase,
    private val signUpUseCase: SignUpUseCase,
    private val signOutUseCase: SignOutUseCase,
    private val getCurrentUserUseCase: GetCurrentUserUseCase,
    private val sendPasswordResetUseCase: SendPasswordResetUseCase,
    private val signInWithGoogleUseCase: SignInWithGoogleUseCase,
    private val isNewUserUseCase: IsNewUserUseCase,
    private val userPreferencesRepository: IUserPreferencesRepository,
    private val viewModelScope: CoroutineScope
) {
    private val _uiState = MutableStateFlow<AuthUiState>(AuthUiState.Initial)
    val uiState: StateFlow<AuthUiState> = _uiState.asStateFlow()

    private val _authState = MutableStateFlow<AuthState>(AuthState.Loading)
    val authState: StateFlow<AuthState> = _authState.asStateFlow()

    private val _currentUser = MutableStateFlow<User?>(null)
    val currentUser: StateFlow<User?> = _currentUser.asStateFlow()

    private val _isNewUser = MutableStateFlow(false)
    val isNewUser: StateFlow<Boolean> = _isNewUser.asStateFlow()

    init {
        observeAuthState()
    }

    /**
     * Observe authentication state changes
     */
    private fun observeAuthState() {
        viewModelScope.launch {
            observeAuthStateUseCase()
                .catch { error ->
                    _authState.value = AuthState.Error(
                        message = error.message ?: "Authentication error",
                        code = null
                    )
                }
                .collect { state ->
                    _authState.value = state
                    _currentUser.value = when (state) {
                        is AuthState.Authenticated -> state.user
                        else -> null
                    }
                }
        }
    }

    /**
     * Sign in with email and password
     */
    fun signIn(email: String, password: String) {
        viewModelScope.launch {
            _uiState.value = AuthUiState.Loading

            when (val result = signInUseCase(email, password)) {
                is AuthResult.Success -> {
                    _uiState.value = AuthUiState.Success("Signed in successfully")
                    // Note: Initial sync will be triggered by Android app layer
                }
                is AuthResult.Failure -> {
                    _uiState.value = AuthUiState.Error(result.message)
                }
            }
        }
    }

    /**
     * Sign up with email and password
     */
    fun signUp(email: String, password: String, displayName: String?) {
        viewModelScope.launch {
            _uiState.value = AuthUiState.Loading

            when (val result = signUpUseCase(email, password, displayName)) {
                is AuthResult.Success -> {
                    _uiState.value = AuthUiState.Success("Account created successfully")

                    // Create default user preferences in Firestore
                    initializeDefaultPreferences()
                    // Note: Initial sync will be triggered by Android app layer
                }
                is AuthResult.Failure -> {
                    _uiState.value = AuthUiState.Error(result.message)
                }
            }
        }
    }

    /**
     * Sign in with Google ID token
     */
    fun signInWithGoogle(idToken: String) {
        viewModelScope.launch {
            _uiState.value = AuthUiState.Loading

            when (val result = signInWithGoogleUseCase(idToken)) {
                is AuthResult.Success -> {
                    _uiState.value = AuthUiState.Success("Signed in with Google successfully")

                    // Check if this is a new user
                    _isNewUser.value = isNewUserUseCase()

                    // Create default user preferences in Firestore if new user
                    // (This also initializes preferences for existing users if they don't have any)
                    initializeDefaultPreferences()
                    // Note: Initial sync will be triggered by Android app layer
                }
                is AuthResult.Failure -> {
                    _uiState.value = AuthUiState.Error(result.message)
                }
            }
        }
    }

    /**
     * Clear the new user flag after preferences setup is complete
     */
    fun clearNewUserFlag() {
        _isNewUser.value = false
    }

    /**
     * Sign out the current user
     */
    fun signOut() {
        viewModelScope.launch {
            _uiState.value = AuthUiState.Loading

            signOutUseCase()
                .onSuccess {
                    _uiState.value = AuthUiState.Success("Signed out successfully")
                }
                .onFailure { error ->
                    _uiState.value = AuthUiState.Error(
                        error.message ?: "Failed to sign out"
                    )
                }
        }
    }

    /**
     * Send password reset email
     */
    fun sendPasswordReset(email: String) {
        viewModelScope.launch {
            _uiState.value = AuthUiState.Loading

            sendPasswordResetUseCase(email)
                .onSuccess {
                    _uiState.value = AuthUiState.Success(
                        "Password reset email sent. Please check your inbox."
                    )
                }
                .onFailure { error ->
                    _uiState.value = AuthUiState.Error(
                        error.message ?: "Failed to send password reset email"
                    )
                }
        }
    }

    /**
     * Get current authenticated user
     */
    fun getCurrentUser() {
        viewModelScope.launch {
            val user = getCurrentUserUseCase()
            _currentUser.value = user
        }
    }

    /**
     * Clear UI state (after showing a message)
     */
    fun clearUiState() {
        _uiState.value = AuthUiState.Initial
    }

    /**
     * Initialize default preferences for new users
     */
    private fun initializeDefaultPreferences() {
        viewModelScope.launch {
            try {
                // getUserPreferences() will automatically create defaults if none exist
                // and save them to Firestore
                userPreferencesRepository.getUserPreferences()
            } catch (e: Exception) {
                // Silently fail - don't block sign-up flow
                // Error will be logged by repository layer
            }
        }
    }

    /**
     * Clean up when ViewModel is no longer needed
     */
    fun onCleared() {
        // No cleanup needed for auth
    }
}

/**
 * UI state for authentication screens
 */
sealed class AuthUiState {
    data object Initial : AuthUiState()
    data object Loading : AuthUiState()
    data class Success(val message: String) : AuthUiState()
    data class Error(val message: String) : AuthUiState()
}
