package eco.emergi.embit.android.ui.screens

import android.app.Activity
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.IntentSenderRequest
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.text.KeyboardActions
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Email
import androidx.compose.material.icons.filled.Lock
import androidx.compose.material.icons.filled.Visibility
import androidx.compose.material.icons.filled.VisibilityOff
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.focus.FocusDirection
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.LocalFocusManager
import androidx.compose.ui.semantics.*
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.input.VisualTransformation
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.res.stringResource
import eco.emergi.embit.android.R
import eco.emergi.embit.android.analytics.AnalyticsManager
import eco.emergi.embit.android.ui.components.GoogleSignInButton
import eco.emergi.embit.domain.models.AuthState
import eco.emergi.embit.domain.usecases.auth.*
import eco.emergi.embit.platform.auth.GoogleSignInManager
import eco.emergi.embit.presentation.AuthUiState
import eco.emergi.embit.presentation.AuthViewModel
import kotlinx.coroutines.launch
import org.koin.compose.koinInject

/**
 * Login screen for user authentication
 */
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun LoginScreen(
    analyticsManager: AnalyticsManager,
    onNavigateToSignUp: () -> Unit,
    onNavigateToForgotPassword: () -> Unit,
    onLoginSuccess: (isNewUser: Boolean) -> Unit
) {
    val scope = rememberCoroutineScope()
    val context = LocalContext.current
    val focusManager = LocalFocusManager.current

    // Google Sign-In Manager
    val googleSignInManager = remember { GoogleSignInManager(context) }

    // Get use cases from Koin
    val observeAuthStateUseCase: ObserveAuthStateUseCase = koinInject()
    val signInUseCase: SignInUseCase = koinInject()
    val signUpUseCase: SignUpUseCase = koinInject()
    val signOutUseCase: SignOutUseCase = koinInject()
    val getCurrentUserUseCase: GetCurrentUserUseCase = koinInject()
    val sendPasswordResetUseCase: SendPasswordResetUseCase = koinInject()
    val signInWithGoogleUseCase: SignInWithGoogleUseCase = koinInject()
    val isNewUserUseCase: IsNewUserUseCase = koinInject()
    val userPreferencesRepository: eco.emergi.embit.domain.repositories.IUserPreferencesRepository = koinInject()

    // Create ViewModel
    val viewModel = remember(scope) {
        AuthViewModel(
            observeAuthStateUseCase = observeAuthStateUseCase,
            signInUseCase = signInUseCase,
            signUpUseCase = signUpUseCase,
            signOutUseCase = signOutUseCase,
            getCurrentUserUseCase = getCurrentUserUseCase,
            sendPasswordResetUseCase = sendPasswordResetUseCase,
            signInWithGoogleUseCase = signInWithGoogleUseCase,
            isNewUserUseCase = isNewUserUseCase,
            userPreferencesRepository = userPreferencesRepository,
            viewModelScope = scope
        )
    }

    val uiState by viewModel.uiState.collectAsState()
    val authState by viewModel.authState.collectAsState()
    val isNewUser by viewModel.isNewUser.collectAsState()

    // Snackbar host state
    val snackbarHostState = remember { SnackbarHostState() }

    // One Tap launcher
    val oneTapLauncher = rememberLauncherForActivityResult(
        contract = ActivityResultContracts.StartIntentSenderForResult()
    ) { result ->
        if (result.resultCode == Activity.RESULT_OK) {
            result.data?.let { data ->
                val idToken = googleSignInManager.getGoogleIdToken(data)
                if (idToken != null) {
                    viewModel.signInWithGoogle(idToken)
                } else {
                    scope.launch {
                        snackbarHostState.showSnackbar(
                            message = context.getString(R.string.error_google_id_token),
                            duration = SnackbarDuration.Short
                        )
                    }
                }
            }
        }
    }

    // Auto-trigger One Tap on screen load
    LaunchedEffect(Unit) {
        try {
            val result = googleSignInManager.beginOneTapSignIn()
            oneTapLauncher.launch(
                IntentSenderRequest.Builder(result.pendingIntent.intentSender).build()
            )
        } catch (e: Exception) {
            // One Tap not available - user can still use manual Google Sign-In button or email/password
        }
    }

    // Trigger initial sync when auth state becomes Authenticated
    val bidirectionalSyncUseCase: eco.emergi.embit.domain.usecases.sync.BidirectionalSyncUseCase = koinInject()
    LaunchedEffect(authState) {
        if (authState is eco.emergi.embit.domain.models.AuthState.Authenticated) {
            // Trigger initial sync in background
            bidirectionalSyncUseCase(
                maxUploadBatchSize = 100,
                maxDownloadLimit = 1000,
                conflictStrategy = eco.emergi.embit.domain.usecases.sync.ImportBatteryDataUseCase.ConflictStrategy.KEEP_NEWER,
                syncDirection = eco.emergi.embit.domain.usecases.sync.BidirectionalSyncUseCase.SyncDirection.BOTH
            )
        }
    }

    var email by remember { mutableStateOf("") }
    var password by remember { mutableStateOf("") }
    var passwordVisible by remember { mutableStateOf(false) }

    // Handle auth state changes
    LaunchedEffect(authState) {
        when (val state = authState) {
            is AuthState.Authenticated -> {
                // Log successful login
                val authMethod = if (state.user.email?.contains("google") == true ||
                                     state.user.displayName != null) "google" else "email"
                analyticsManager.logLogin(authMethod)

                // Set user ID for analytics
                analyticsManager.setUserId(state.user.uid)

                // Set user properties
                analyticsManager.setUserProperty("auth_provider", authMethod)

                // Navigate to next screen
                onLoginSuccess(isNewUser)
            }
            is AuthState.Error -> {
                // Log login failure
                analyticsManager.logError(
                    errorType = "login_failed",
                    errorMessage = state.message,
                    errorContext = "LoginScreen"
                )
            }
            else -> {
                // Do nothing for other states
            }
        }
    }

    // Handle UI state messages
    LaunchedEffect(uiState) {
        when (val state = uiState) {
            is AuthUiState.Success -> {
                snackbarHostState.showSnackbar(
                    message = state.message,
                    duration = SnackbarDuration.Short
                )
                viewModel.clearUiState()
            }
            is AuthUiState.Error -> {
                snackbarHostState.showSnackbar(
                    message = state.message,
                    duration = SnackbarDuration.Long
                )
                viewModel.clearUiState()
            }
            else -> {}
        }
    }

    Scaffold(
        snackbarHost = { SnackbarHost(snackbarHostState) }
    ) { paddingValues ->
        Box(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
                .verticalScroll(rememberScrollState())
        ) {
            Column(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(24.dp),
                horizontalAlignment = Alignment.CenterHorizontally,
                verticalArrangement = Arrangement.Center
            ) {
                // App branding
                Text(
                    text = stringResource(R.string.app_name),
                    style = MaterialTheme.typography.displayMedium,
                    fontWeight = FontWeight.Bold,
                    color = MaterialTheme.colorScheme.primary,
                    modifier = Modifier.semantics { heading() }
                )

                Spacer(modifier = Modifier.height(8.dp))

                val taglineText = stringResource(R.string.app_tagline)
                Text(
                    text = taglineText,
                    style = MaterialTheme.typography.bodyLarge,
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                    textAlign = TextAlign.Center,
                    modifier = Modifier.semantics {
                        contentDescription = taglineText
                    }
                )

                Spacer(modifier = Modifier.height(48.dp))

                // Google Sign-In button
                GoogleSignInButton(
                    onClick = {
                        scope.launch {
                            try {
                                val result = googleSignInManager.beginOneTapSignIn()
                                oneTapLauncher.launch(
                                    IntentSenderRequest.Builder(result.pendingIntent.intentSender).build()
                                )
                            } catch (e: Exception) {
                                snackbarHostState.showSnackbar(
                                    message = context.getString(R.string.error_google_signin_unavailable, e.message ?: "Unknown error"),
                                    duration = SnackbarDuration.Short
                                )
                            }
                        }
                    },
                    isLoading = uiState is AuthUiState.Loading,
                    enabled = uiState !is AuthUiState.Loading,
                    modifier = Modifier.semantics {
                        contentDescription = "Sign in with Google button"
                        role = Role.Button
                    }
                )

                Spacer(modifier = Modifier.height(24.dp))

                // Divider
                val dividerText = stringResource(R.string.auth_or_continue_with_email)
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    HorizontalDivider(modifier = Modifier.weight(1f))
                    Text(
                        text = dividerText,
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant,
                        modifier = Modifier.semantics {
                            contentDescription = dividerText
                        }
                    )
                    HorizontalDivider(modifier = Modifier.weight(1f))
                }

                Spacer(modifier = Modifier.height(24.dp))

                // Email field
                OutlinedTextField(
                    value = email,
                    onValueChange = { email = it },
                    label = { Text(stringResource(R.string.label_email)) },
                    leadingIcon = {
                        Icon(Icons.Default.Email, contentDescription = stringResource(R.string.cd_email_icon))
                    },
                    singleLine = true,
                    keyboardOptions = KeyboardOptions(
                        keyboardType = KeyboardType.Email,
                        imeAction = ImeAction.Next
                    ),
                    keyboardActions = KeyboardActions(
                        onNext = { focusManager.moveFocus(FocusDirection.Down) }
                    ),
                    modifier = Modifier
                        .fillMaxWidth()
                        .semantics {
                            contentDescription = "Email input field"
                        },
                    enabled = uiState !is AuthUiState.Loading
                )

                Spacer(modifier = Modifier.height(16.dp))

                // Password field
                OutlinedTextField(
                    value = password,
                    onValueChange = { password = it },
                    label = { Text(stringResource(R.string.label_password)) },
                    leadingIcon = {
                        Icon(Icons.Default.Lock, contentDescription = stringResource(R.string.cd_password_icon))
                    },
                    trailingIcon = {
                        IconButton(onClick = { passwordVisible = !passwordVisible }) {
                            Icon(
                                imageVector = if (passwordVisible) Icons.Default.Visibility else Icons.Default.VisibilityOff,
                                contentDescription = if (passwordVisible) stringResource(R.string.cd_hide_password) else stringResource(R.string.cd_show_password)
                            )
                        }
                    },
                    visualTransformation = if (passwordVisible) VisualTransformation.None else PasswordVisualTransformation(),
                    singleLine = true,
                    keyboardOptions = KeyboardOptions(
                        keyboardType = KeyboardType.Password,
                        imeAction = ImeAction.Done
                    ),
                    keyboardActions = KeyboardActions(
                        onDone = {
                            focusManager.clearFocus()
                            if (email.isNotBlank() && password.isNotBlank()) {
                                viewModel.signIn(email, password)
                            }
                        }
                    ),
                    modifier = Modifier
                        .fillMaxWidth()
                        .semantics {
                            contentDescription = "Password input field, currently ${if (passwordVisible) "visible" else "hidden"}"
                        },
                    enabled = uiState !is AuthUiState.Loading
                )

                Spacer(modifier = Modifier.height(8.dp))

                // Forgot password link
                TextButton(
                    onClick = onNavigateToForgotPassword,
                    enabled = uiState !is AuthUiState.Loading,
                    modifier = Modifier.semantics {
                        contentDescription = "Forgot password link"
                        role = Role.Button
                    }
                ) {
                    Text(stringResource(R.string.auth_forgot_password))
                }

                Spacer(modifier = Modifier.height(24.dp))

                // Sign in button
                Button(
                    onClick = {
                        focusManager.clearFocus()
                        viewModel.signIn(email, password)
                    },
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(50.dp)
                        .semantics {
                            contentDescription = "Sign in button"
                            role = Role.Button
                        },
                    enabled = email.isNotBlank() && password.isNotBlank() && uiState !is AuthUiState.Loading
                ) {
                    if (uiState is AuthUiState.Loading) {
                        CircularProgressIndicator(
                            modifier = Modifier
                                .size(24.dp)
                                .semantics {
                                    liveRegion = LiveRegionMode.Polite
                                    contentDescription = "Signing in, please wait"
                                },
                            color = MaterialTheme.colorScheme.onPrimary
                        )
                    } else {
                        Text(stringResource(R.string.action_sign_in))
                    }
                }

                Spacer(modifier = Modifier.height(24.dp))

                // Sign up link
                Text(
                    text = stringResource(R.string.auth_no_account),
                    style = MaterialTheme.typography.bodyMedium,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )

                Spacer(modifier = Modifier.height(8.dp))
                OutlinedButton(
                    onClick = onNavigateToSignUp,
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(50.dp)
                        .semantics {
                            contentDescription = "Create account button"
                            role = Role.Button
                        },
                    enabled = uiState !is AuthUiState.Loading
                ) {
                    Text(stringResource(R.string.action_create_account))
                }

                Spacer(modifier = Modifier.height(24.dp))

                // Privacy note
                val privacyNotice = stringResource(R.string.auth_privacy_notice)
                Text(
                    text = privacyNotice,
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                    textAlign = TextAlign.Center,
                    modifier = Modifier
                        .padding(horizontal = 16.dp)
                        .semantics {
                            contentDescription = privacyNotice
                        }
                )
            }
        }
    }
}
