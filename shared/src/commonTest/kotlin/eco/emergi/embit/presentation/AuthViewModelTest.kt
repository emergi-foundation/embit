package eco.emergi.embit.presentation

import eco.emergi.embit.domain.models.*
import eco.emergi.embit.domain.repositories.IAuthRepository
import eco.emergi.embit.domain.repositories.IUserPreferencesRepository
import eco.emergi.embit.domain.usecases.auth.*
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.cancel
import kotlinx.coroutines.flow.*
import kotlinx.coroutines.test.StandardTestDispatcher
import kotlinx.coroutines.test.resetMain
import kotlinx.coroutines.test.runTest
import kotlinx.coroutines.test.setMain
import kotlinx.datetime.Clock
import kotlin.test.*

/**
 * Tests for AuthViewModel.
 *
 * Tests authentication flows: sign in, sign up, sign out, Google auth, password reset.
 */
@OptIn(ExperimentalCoroutinesApi::class)
class AuthViewModelTest {

    private val testDispatcher = StandardTestDispatcher()
    private lateinit var viewModelScope: CoroutineScope
    private lateinit var fakeAuthRepository: FakeAuthRepository
    private lateinit var fakeUserPreferencesRepository: FakeUserPreferencesRepository

    // Real use cases with fake repositories
    private lateinit var observeAuthStateUseCase: ObserveAuthStateUseCase
    private lateinit var signInUseCase: SignInUseCase
    private lateinit var signUpUseCase: SignUpUseCase
    private lateinit var signOutUseCase: SignOutUseCase
    private lateinit var getCurrentUserUseCase: GetCurrentUserUseCase
    private lateinit var sendPasswordResetUseCase: SendPasswordResetUseCase
    private lateinit var signInWithGoogleUseCase: SignInWithGoogleUseCase
    private lateinit var isNewUserUseCase: IsNewUserUseCase

    @BeforeTest
    fun setup() {
        Dispatchers.setMain(testDispatcher)
        viewModelScope = CoroutineScope(testDispatcher)
        fakeAuthRepository = FakeAuthRepository()
        fakeUserPreferencesRepository = FakeUserPreferencesRepository()

        // Initialize real use cases with fake repositories
        observeAuthStateUseCase = ObserveAuthStateUseCase(fakeAuthRepository)
        signInUseCase = SignInUseCase(fakeAuthRepository)
        signUpUseCase = SignUpUseCase(fakeAuthRepository)
        signOutUseCase = SignOutUseCase(fakeAuthRepository)
        getCurrentUserUseCase = GetCurrentUserUseCase(fakeAuthRepository)
        sendPasswordResetUseCase = SendPasswordResetUseCase(fakeAuthRepository)
        signInWithGoogleUseCase = SignInWithGoogleUseCase(fakeAuthRepository)
        isNewUserUseCase = IsNewUserUseCase(fakeUserPreferencesRepository)
    }

    @AfterTest
    fun tearDown() {
        viewModelScope.cancel()
        Dispatchers.resetMain()
    }

    @Test
    fun `initial state is Initial`() = runTest {
        val viewModel = createViewModel()

        // Initial UI state should be Initial
        val initialState = viewModel.uiState.value
        assertTrue(initialState is AuthUiState.Initial)
    }

    @Test
    fun `observes auth state on init`() = runTest {
        // Given: Auth state is Authenticated
        val testUser = createTestUser()
        fakeAuthRepository.setCurrentUser(testUser)
        fakeAuthRepository.emitAuthState(AuthState.Authenticated(testUser))

        // When: ViewModel is created
        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: Auth state should be observed
        val authState = viewModel.authState.value
        assertTrue(authState is AuthState.Authenticated)
        assertEquals(testUser, (authState as AuthState.Authenticated).user)

        val currentUser = viewModel.currentUser.value
        assertEquals(testUser, currentUser)
    }

    @Test
    fun `signIn with valid credentials shows Success state`() = runTest {
        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // Given: Sign in will succeed
        val testUser = createTestUser(email = "test@example.com")
        fakeAuthRepository.setSignInResult(AuthResult.Success(testUser))

        // When: Signing in
        viewModel.signIn("test@example.com", "password123")
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: UI state should be Success
        val state = viewModel.uiState.value
        assertTrue(state is AuthUiState.Success)
        assertEquals("Signed in successfully", (state as AuthUiState.Success).message)
    }

    @Test
    fun `signIn with invalid credentials shows Error state`() = runTest {
        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // Given: Sign in will fail
        fakeAuthRepository.setSignInResult(AuthResult.Failure("Invalid credentials", "auth/invalid-credential"))

        // When: Signing in with invalid credentials
        viewModel.signIn("test@example.com", "wrongpassword")
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: UI state should be Error
        val state = viewModel.uiState.value
        assertTrue(state is AuthUiState.Error)
        assertEquals("Invalid credentials", (state as AuthUiState.Error).message)
    }

    @Test
    fun `signUp creates account and shows Success state`() = runTest {
        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // Given: Sign up will succeed
        val testUser = createTestUser(email = "newuser@example.com", displayName = "New User")
        fakeAuthRepository.setSignUpResult(AuthResult.Success(testUser))

        // When: Signing up
        viewModel.signUp("newuser@example.com", "password123", "New User")
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: UI state should be Success
        val state = viewModel.uiState.value
        assertTrue(state is AuthUiState.Success)
        assertEquals("Account created successfully", (state as AuthUiState.Success).message)

        // And: Default preferences should be initialized
        assertTrue(fakeUserPreferencesRepository.wasGetPreferencesCalled)
    }

    @Test
    fun `signUp with existing email shows Error state`() = runTest {
        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // Given: Sign up will fail (email exists)
        fakeAuthRepository.setSignUpResult(AuthResult.Failure("Email already in use", "auth/email-already-in-use"))

        // When: Signing up with existing email
        viewModel.signUp("existing@example.com", "password123", "User")
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: UI state should be Error
        val state = viewModel.uiState.value
        assertTrue(state is AuthUiState.Error)
        assertEquals("Email already in use", (state as AuthUiState.Error).message)
    }

    @Test
    fun `signInWithGoogle succeeds and sets isNewUser flag`() = runTest {
        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // Given: Google sign-in will succeed with new user
        val testUser = createTestUser(email = "google@example.com", displayName = "Google User")
        fakeAuthRepository.setGoogleSignInResult(AuthResult.Success(testUser))
        fakeUserPreferencesRepository.setIsNewUser(true)

        // When: Signing in with Google
        viewModel.signInWithGoogle("fake-google-id-token")
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: UI state should be Success
        val state = viewModel.uiState.value
        assertTrue(state is AuthUiState.Success)
        assertEquals("Signed in with Google successfully", (state as AuthUiState.Success).message)

        // And: isNewUser flag should be set
        assertTrue(viewModel.isNewUser.value)

        // And: Default preferences should be initialized
        assertTrue(fakeUserPreferencesRepository.wasGetPreferencesCalled)
    }

    @Test
    fun `signInWithGoogle with existing user does not set isNewUser flag`() = runTest {
        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // Given: Google sign-in will succeed with existing user
        val testUser = createTestUser(email = "google@example.com")
        fakeAuthRepository.setGoogleSignInResult(AuthResult.Success(testUser))
        fakeUserPreferencesRepository.setIsNewUser(false)

        // When: Signing in with Google
        viewModel.signInWithGoogle("fake-google-id-token")
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: isNewUser should be false
        assertFalse(viewModel.isNewUser.value)
    }

    @Test
    fun `clearNewUserFlag resets flag`() = runTest {
        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // Given: isNewUser is true
        val testUser = createTestUser()
        fakeAuthRepository.setGoogleSignInResult(AuthResult.Success(testUser))
        fakeUserPreferencesRepository.setIsNewUser(true)
        viewModel.signInWithGoogle("token")
        testDispatcher.scheduler.advanceUntilIdle()
        assertTrue(viewModel.isNewUser.value)

        // When: Clearing flag
        viewModel.clearNewUserFlag()

        // Then: Flag should be false
        assertFalse(viewModel.isNewUser.value)
    }

    @Test
    fun `signOut succeeds and shows Success state`() = runTest {
        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // Given: Sign out will succeed
        fakeAuthRepository.setSignOutResult(Result.success(Unit))

        // When: Signing out
        viewModel.signOut()
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: UI state should be Success
        val state = viewModel.uiState.value
        assertTrue(state is AuthUiState.Success)
        assertEquals("Signed out successfully", (state as AuthUiState.Success).message)
    }

    @Test
    fun `signOut failure shows Error state`() = runTest {
        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // Given: Sign out will fail
        fakeAuthRepository.setSignOutResult(Result.failure(Exception("Network error")))

        // When: Signing out
        viewModel.signOut()
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: UI state should be Error
        val state = viewModel.uiState.value
        assertTrue(state is AuthUiState.Error)
        assertEquals("Network error", (state as AuthUiState.Error).message)
    }

    @Test
    fun `sendPasswordReset succeeds and shows Success state`() = runTest {
        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // Given: Password reset will succeed
        fakeAuthRepository.setPasswordResetResult(Result.success(Unit))

        // When: Sending password reset
        viewModel.sendPasswordReset("test@example.com")
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: UI state should be Success
        val state = viewModel.uiState.value
        assertTrue(state is AuthUiState.Success)
        assertTrue((state as AuthUiState.Success).message.contains("Password reset email sent"))
    }

    @Test
    fun `sendPasswordReset failure shows Error state`() = runTest {
        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // Given: Password reset will fail
        fakeAuthRepository.setPasswordResetResult(Result.failure(Exception("Email not found")))

        // When: Sending password reset
        viewModel.sendPasswordReset("nonexistent@example.com")
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: UI state should be Error
        val state = viewModel.uiState.value
        assertTrue(state is AuthUiState.Error)
        assertEquals("Email not found", (state as AuthUiState.Error).message)
    }

    @Test
    fun `getCurrentUser updates currentUser state`() = runTest {
        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // Given: User is authenticated
        val testUser = createTestUser()
        fakeAuthRepository.setCurrentUser(testUser)

        // When: Getting current user
        viewModel.getCurrentUser()
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: currentUser should be updated
        assertEquals(testUser, viewModel.currentUser.value)
    }

    @Test
    fun `clearUiState resets to Initial`() = runTest {
        val viewModel = createViewModel()

        // Given: ViewModel in Success state
        fakeAuthRepository.setSignInResult(AuthResult.Success(createTestUser()))
        viewModel.signIn("test@example.com", "password123")
        testDispatcher.scheduler.advanceUntilIdle()
        assertTrue(viewModel.uiState.value is AuthUiState.Success)

        // When: Clearing UI state
        viewModel.clearUiState()

        // Then: State should be Initial
        assertTrue(viewModel.uiState.value is AuthUiState.Initial)
    }

    @Test
    fun `auth state transitions from Loading to Authenticated`() = runTest {
        val viewModel = createViewModel()

        // Initially Loading
        assertEquals(AuthState.Loading, viewModel.authState.value)

        // When: Auth state changes to Authenticated
        val testUser = createTestUser()
        fakeAuthRepository.emitAuthState(AuthState.Authenticated(testUser))
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: Should transition to Authenticated
        val state = viewModel.authState.value
        assertTrue(state is AuthState.Authenticated)
        assertEquals(testUser, (state as AuthState.Authenticated).user)
    }

    @Test
    fun `auth state error updates auth state`() = runTest {
        val viewModel = createViewModel()
        testDispatcher.scheduler.advanceUntilIdle()

        // When: Auth state changes to Error
        fakeAuthRepository.emitAuthState(AuthState.Error("Authentication failed", "auth/error"))
        testDispatcher.scheduler.advanceUntilIdle()

        // Then: Auth state should be Error
        val state = viewModel.authState.value
        assertTrue(state is AuthState.Error)
        assertEquals("Authentication failed", (state as AuthState.Error).message)
    }

    // Helper to create ViewModel
    private fun createViewModel(): AuthViewModel {
        return AuthViewModel(
            observeAuthStateUseCase = observeAuthStateUseCase,
            signInUseCase = signInUseCase,
            signUpUseCase = signUpUseCase,
            signOutUseCase = signOutUseCase,
            getCurrentUserUseCase = getCurrentUserUseCase,
            sendPasswordResetUseCase = sendPasswordResetUseCase,
            signInWithGoogleUseCase = signInWithGoogleUseCase,
            isNewUserUseCase = isNewUserUseCase,
            userPreferencesRepository = fakeUserPreferencesRepository,
            viewModelScope = viewModelScope
        )
    }

    // Helper to create test user
    private fun createTestUser(
        uid: String = "test-uid-123",
        email: String = "test@example.com",
        displayName: String = "Test User"
    ): User {
        return User(
            uid = uid,
            email = email,
            displayName = displayName,
            photoUrl = null,
            isAnonymous = false,
            createdAt = Clock.System.now().toEpochMilliseconds(),
            lastSignInAt = Clock.System.now().toEpochMilliseconds()
        )
    }

    // Fake implementations
    private class FakeAuthRepository : IAuthRepository {
        private val authStateFlow = MutableStateFlow<AuthState>(AuthState.Loading)
        private var currentUser: User? = null
        private var signInResult: AuthResult = AuthResult.Success(User("uid", "test@example.com"))
        private var signUpResult: AuthResult = AuthResult.Success(User("uid", "test@example.com"))
        private var googleSignInResult: AuthResult = AuthResult.Success(User("uid", "google@example.com"))
        private var signOutResult: Result<Unit> = Result.success(Unit)
        private var passwordResetResult: Result<Unit> = Result.success(Unit)

        fun setCurrentUser(user: User?) {
            currentUser = user
        }

        fun emitAuthState(state: AuthState) {
            authStateFlow.value = state
        }

        fun setSignInResult(result: AuthResult) {
            signInResult = result
        }

        fun setSignUpResult(result: AuthResult) {
            signUpResult = result
        }

        fun setGoogleSignInResult(result: AuthResult) {
            googleSignInResult = result
        }

        fun setSignOutResult(result: Result<Unit>) {
            signOutResult = result
        }

        fun setPasswordResetResult(result: Result<Unit>) {
            passwordResetResult = result
        }

        override fun observeAuthState(): Flow<AuthState> = authStateFlow

        override suspend fun getCurrentUser(): User? = currentUser

        override suspend fun signInWithEmail(email: String, password: String): AuthResult = signInResult

        override suspend fun signUpWithEmail(email: String, password: String, displayName: String?): AuthResult = signUpResult

        override suspend fun signInWithGoogle(idToken: String): AuthResult = googleSignInResult

        override suspend fun signInAnonymously(): AuthResult = AuthResult.Success(User("anon", null))

        override suspend fun signOut(): Result<Unit> = signOutResult

        override suspend fun deleteAccount(): Result<Unit> = Result.success(Unit)

        override suspend fun sendPasswordResetEmail(email: String): Result<Unit> = passwordResetResult

        override suspend fun updateDisplayName(displayName: String): Result<Unit> = Result.success(Unit)

        override suspend fun updateEmail(newEmail: String): Result<Unit> = Result.success(Unit)

        override suspend fun updatePassword(newPassword: String): Result<Unit> = Result.success(Unit)

        override suspend fun isSignedIn(): Boolean = currentUser != null

        override suspend fun reloadUser(): Result<User?> = Result.success(currentUser)
    }

    private class FakeUserPreferencesRepository : IUserPreferencesRepository {
        var wasGetPreferencesCalled = false
        private var isNewUser: Boolean = false
        private val defaultPreferences = UserPreferences(
            userId = "test-uid",
            location = "CAISO_NORTH"
        )

        fun setIsNewUser(isNew: Boolean) {
            isNewUser = isNew
        }

        suspend fun isNewUser(): Boolean = isNewUser

        override suspend fun getUserPreferences(): Result<UserPreferences> {
            wasGetPreferencesCalled = true
            return Result.success(defaultPreferences)
        }

        override fun observeUserPreferences(): Flow<UserPreferences> = flowOf(defaultPreferences)

        override suspend fun saveUserPreferences(preferences: UserPreferences): Result<Unit> = Result.success(Unit)

        override suspend fun updateLocation(location: String): Result<Unit> = Result.success(Unit)

        override suspend fun updateEnergyProduct(energyProduct: EnergyProduct): Result<Unit> = Result.success(Unit)

        override suspend fun updateNotificationsEnabled(enabled: Boolean): Result<Unit> = Result.success(Unit)

        override suspend fun updateOptimalChargingEnabled(enabled: Boolean): Result<Unit> = Result.success(Unit)

        override suspend fun updateTheme(theme: String): Result<Unit> = Result.success(Unit)
    }
}
