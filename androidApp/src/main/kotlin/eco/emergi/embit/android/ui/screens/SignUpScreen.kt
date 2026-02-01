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
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.filled.Email
import androidx.compose.material.icons.filled.Lock
import androidx.compose.material.icons.filled.Person
import androidx.compose.material.icons.filled.Visibility
import androidx.compose.material.icons.filled.VisibilityOff
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.focus.FocusDirection
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.LocalFocusManager
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.input.VisualTransformation
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.semantics.*
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
 * Sign up screen for creating a new user account
 */
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun SignUpScreen(
    analyticsManager: AnalyticsManager,
    onNavigateBack: () -> Unit,
    onSignUpSuccess: (isNewUser: Boolean) -> Unit
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

    var displayName by remember { mutableStateOf("") }
    var email by remember { mutableStateOf("") }
    var password by remember { mutableStateOf("") }
    var confirmPassword by remember { mutableStateOf("") }
    var passwordVisible by remember { mutableStateOf(false) }
    var confirmPasswordVisible by remember { mutableStateOf(false) }

    // Handle auth state changes
    LaunchedEffect(authState) {
        when (val state = authState) {
            is AuthState.Authenticated -> {
                // Log successful sign up
                val authMethod = if (state.user.email?.contains("google") == true ||
                                     state.user.displayName != null) "google" else "email"
                analyticsManager.logSignUp(authMethod)

                // Set user ID for analytics
                analyticsManager.setUserId(state.user.uid)

                // Set user properties
                analyticsManager.setUserProperty("auth_provider", authMethod)
                analyticsManager.setUserProperty("is_new_user", "true")

                // Navigate to next screen
                onSignUpSuccess(isNewUser)
            }
            is AuthState.Error -> {
                // Log sign up failure
                analyticsManager.logError(
                    errorType = "sign_up_failed",
                    errorMessage = state.message,
                    errorContext = "SignUpScreen"
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
        topBar = {
            TopAppBar(
                title = { Text(stringResource(R.string.action_create_account)) },
                navigationIcon = {
                    IconButton(onClick = onNavigateBack) {
                        Icon(Icons.Default.ArrowBack, contentDescription = stringResource(R.string.cd_back))
                    }
                }
            )
        },
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
                    text = stringResource(R.string.auth_join_embit),
                    style = MaterialTheme.typography.headlineLarge,
                    fontWeight = FontWeight.Bold,
                    color = MaterialTheme.colorScheme.primary,
                    modifier = Modifier.semantics { heading() }
                )

                Spacer(modifier = Modifier.height(8.dp))

                Text(
                    text = stringResource(R.string.auth_start_tracking),
                    style = MaterialTheme.typography.bodyLarge,
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                    textAlign = TextAlign.Center
                )

                Spacer(modifier = Modifier.height(32.dp))

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
                                    message = context.getString(R.string.error_google_signin_unavailable, e.message),
                                    duration = SnackbarDuration.Short
                                )
                            }
                        }
                    },
                    text = stringResource(R.string.auth_sign_up_with_google),
                    isLoading = uiState is AuthUiState.Loading,
                    enabled = uiState !is AuthUiState.Loading
                )

                Spacer(modifier = Modifier.height(24.dp))

                // Divider
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    HorizontalDivider(modifier = Modifier.weight(1f))
                    Text(
                        text = "  ${stringResource(R.string.auth_or_use_email)}  ",
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                    HorizontalDivider(modifier = Modifier.weight(1f))
                }

                Spacer(modifier = Modifier.height(24.dp))

                // Display name field
                OutlinedTextField(
                    value = displayName,
                    onValueChange = { displayName = it },
                    label = { Text(stringResource(R.string.label_display_name_optional)) },
                    leadingIcon = {
                        Icon(Icons.Default.Person, contentDescription = stringResource(R.string.cd_name_icon))
                    },
                    singleLine = true,
                    keyboardOptions = KeyboardOptions(
                        keyboardType = KeyboardType.Text,
                        imeAction = ImeAction.Next
                    ),
                    keyboardActions = KeyboardActions(
                        onNext = { focusManager.moveFocus(FocusDirection.Down) }
                    ),
                    modifier = Modifier
                        .fillMaxWidth()
                        .semantics { contentDescription = "Display name input field, optional" },
                    enabled = uiState !is AuthUiState.Loading
                )

                Spacer(modifier = Modifier.height(16.dp))

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
                        .semantics { contentDescription = "Email address input field" },
                    enabled = uiState !is AuthUiState.Loading
                )

                Spacer(modifier = Modifier.height(16.dp))

                // Password field
                val passwordVisibilityDesc = if (passwordVisible) "visible" else "hidden"
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
                        imeAction = ImeAction.Next
                    ),
                    keyboardActions = KeyboardActions(
                        onNext = { focusManager.moveFocus(FocusDirection.Down) }
                    ),
                    modifier = Modifier
                        .fillMaxWidth()
                        .semantics { contentDescription = "Password input field, password is $passwordVisibilityDesc" },
                    enabled = uiState !is AuthUiState.Loading,
                    supportingText = {
                        Text(stringResource(R.string.hint_password_length))
                    }
                )

                Spacer(modifier = Modifier.height(16.dp))

                // Confirm password field
                val confirmPasswordVisibilityDesc = if (confirmPasswordVisible) "visible" else "hidden"
                val passwordsMatch = password == confirmPassword
                OutlinedTextField(
                    value = confirmPassword,
                    onValueChange = { confirmPassword = it },
                    label = { Text(stringResource(R.string.label_confirm_password)) },
                    leadingIcon = {
                        Icon(Icons.Default.Lock, contentDescription = stringResource(R.string.cd_confirm_password_icon))
                    },
                    trailingIcon = {
                        IconButton(onClick = { confirmPasswordVisible = !confirmPasswordVisible }) {
                            Icon(
                                imageVector = if (confirmPasswordVisible) Icons.Default.Visibility else Icons.Default.VisibilityOff,
                                contentDescription = if (confirmPasswordVisible) stringResource(R.string.cd_hide_password) else stringResource(R.string.cd_show_password)
                            )
                        }
                    },
                    visualTransformation = if (confirmPasswordVisible) VisualTransformation.None else PasswordVisualTransformation(),
                    singleLine = true,
                    keyboardOptions = KeyboardOptions(
                        keyboardType = KeyboardType.Password,
                        imeAction = ImeAction.Done
                    ),
                    keyboardActions = KeyboardActions(
                        onDone = {
                            focusManager.clearFocus()
                            if (email.isNotBlank() && password.isNotBlank() && password == confirmPassword) {
                                viewModel.signUp(email, password, displayName.ifBlank { null })
                            }
                        }
                    ),
                    modifier = Modifier
                        .fillMaxWidth()
                        .semantics {
                            contentDescription = "Confirm password input field, password is $confirmPasswordVisibilityDesc"
                            if (confirmPassword.isNotBlank()) {
                                stateDescription = if (passwordsMatch) "Passwords match" else "Passwords do not match"
                            }
                        },
                    enabled = uiState !is AuthUiState.Loading,
                    isError = confirmPassword.isNotBlank() && password != confirmPassword,
                    supportingText = {
                        if (confirmPassword.isNotBlank() && password != confirmPassword) {
                            Text(stringResource(R.string.error_passwords_dont_match), color = MaterialTheme.colorScheme.error)
                        }
                    }
                )

                Spacer(modifier = Modifier.height(32.dp))

                // Sign up button
                val isLoading = uiState is AuthUiState.Loading
                Button(
                    onClick = {
                        focusManager.clearFocus()
                        viewModel.signUp(email, password, displayName.ifBlank { null })
                    },
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(50.dp)
                        .semantics {
                            role = Role.Button
                            contentDescription = if (isLoading) "Creating account, please wait" else "Create account button"
                        },
                    enabled = email.isNotBlank() &&
                             password.isNotBlank() &&
                             confirmPassword.isNotBlank() &&
                             password == confirmPassword &&
                             !isLoading
                ) {
                    if (isLoading) {
                        CircularProgressIndicator(
                            modifier = Modifier
                                .size(24.dp)
                                .semantics {
                                    liveRegion = LiveRegionMode.Polite
                                    contentDescription = "Creating account"
                                },
                            color = MaterialTheme.colorScheme.onPrimary
                        )
                    } else {
                        Text(stringResource(R.string.action_create_account))
                    }
                }

                Spacer(modifier = Modifier.height(24.dp))

                // Terms note
                Text(
                    text = stringResource(R.string.auth_privacy_notice_signup),
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                    textAlign = TextAlign.Center,
                    modifier = Modifier.padding(horizontal = 16.dp)
                )
            }
        }
    }
}
