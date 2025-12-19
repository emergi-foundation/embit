package eco.emergi.embit.android.ui.screens

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
import androidx.compose.ui.platform.LocalFocusManager
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.input.VisualTransformation
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import eco.emergi.embit.domain.models.AuthState
import eco.emergi.embit.domain.usecases.auth.*
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
    onNavigateToSignUp: () -> Unit,
    onNavigateToForgotPassword: () -> Unit,
    onLoginSuccess: () -> Unit
) {
    val scope = rememberCoroutineScope()
    val focusManager = LocalFocusManager.current

    // Get use cases from Koin
    val observeAuthStateUseCase: ObserveAuthStateUseCase = koinInject()
    val signInUseCase: SignInUseCase = koinInject()
    val signUpUseCase: SignUpUseCase = koinInject()
    val signOutUseCase: SignOutUseCase = koinInject()
    val getCurrentUserUseCase: GetCurrentUserUseCase = koinInject()
    val sendPasswordResetUseCase: SendPasswordResetUseCase = koinInject()
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
            userPreferencesRepository = userPreferencesRepository,
            viewModelScope = scope
        )
    }

    val uiState by viewModel.uiState.collectAsState()
    val authState by viewModel.authState.collectAsState()

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

    val snackbarHostState = remember { SnackbarHostState() }

    // Handle auth state changes
    LaunchedEffect(authState) {
        when (authState) {
            is AuthState.Authenticated -> {
                onLoginSuccess()
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
                    text = "Embit",
                    style = MaterialTheme.typography.displayMedium,
                    fontWeight = FontWeight.Bold,
                    color = MaterialTheme.colorScheme.primary
                )

                Spacer(modifier = Modifier.height(8.dp))

                Text(
                    text = "Track your energy impact",
                    style = MaterialTheme.typography.bodyLarge,
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                    textAlign = TextAlign.Center
                )

                Spacer(modifier = Modifier.height(48.dp))

                // Email field
                OutlinedTextField(
                    value = email,
                    onValueChange = { email = it },
                    label = { Text("Email") },
                    leadingIcon = {
                        Icon(Icons.Default.Email, contentDescription = "Email icon")
                    },
                    singleLine = true,
                    keyboardOptions = KeyboardOptions(
                        keyboardType = KeyboardType.Email,
                        imeAction = ImeAction.Next
                    ),
                    keyboardActions = KeyboardActions(
                        onNext = { focusManager.moveFocus(FocusDirection.Down) }
                    ),
                    modifier = Modifier.fillMaxWidth(),
                    enabled = uiState !is AuthUiState.Loading
                )

                Spacer(modifier = Modifier.height(16.dp))

                // Password field
                OutlinedTextField(
                    value = password,
                    onValueChange = { password = it },
                    label = { Text("Password") },
                    leadingIcon = {
                        Icon(Icons.Default.Lock, contentDescription = "Password icon")
                    },
                    trailingIcon = {
                        IconButton(onClick = { passwordVisible = !passwordVisible }) {
                            Icon(
                                imageVector = if (passwordVisible) Icons.Default.Visibility else Icons.Default.VisibilityOff,
                                contentDescription = if (passwordVisible) "Hide password" else "Show password"
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
                    modifier = Modifier.fillMaxWidth(),
                    enabled = uiState !is AuthUiState.Loading
                )

                Spacer(modifier = Modifier.height(8.dp))

                // Forgot password link
                TextButton(
                    onClick = onNavigateToForgotPassword,
                    enabled = uiState !is AuthUiState.Loading
                ) {
                    Text("Forgot password?")
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
                        .height(50.dp),
                    enabled = email.isNotBlank() && password.isNotBlank() && uiState !is AuthUiState.Loading
                ) {
                    if (uiState is AuthUiState.Loading) {
                        CircularProgressIndicator(
                            modifier = Modifier.size(24.dp),
                            color = MaterialTheme.colorScheme.onPrimary
                        )
                    } else {
                        Text("Sign In")
                    }
                }

                Spacer(modifier = Modifier.height(16.dp))

                // Divider
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    HorizontalDivider(modifier = Modifier.weight(1f))
                    Text(
                        text = "  or  ",
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                    HorizontalDivider(modifier = Modifier.weight(1f))
                }

                Spacer(modifier = Modifier.height(16.dp))

                // Sign up link
                OutlinedButton(
                    onClick = onNavigateToSignUp,
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(50.dp),
                    enabled = uiState !is AuthUiState.Loading
                ) {
                    Text("Create Account")
                }

                Spacer(modifier = Modifier.height(24.dp))

                // Privacy note
                Text(
                    text = "By signing in, you agree to track and sync your battery usage data to help reduce energy consumption.",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                    textAlign = TextAlign.Center,
                    modifier = Modifier.padding(horizontal = 16.dp)
                )
            }
        }
    }
}
