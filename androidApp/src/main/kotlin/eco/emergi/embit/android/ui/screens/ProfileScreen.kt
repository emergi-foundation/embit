package eco.emergi.embit.android.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.filled.Email
import androidx.compose.material.icons.filled.Person
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.semantics.*
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import eco.emergi.embit.android.R
import eco.emergi.embit.android.analytics.AnalyticsManager
import eco.emergi.embit.domain.models.AuthState
import eco.emergi.embit.domain.usecases.auth.*
import eco.emergi.embit.presentation.AuthUiState
import eco.emergi.embit.presentation.AuthViewModel
import kotlinx.coroutines.launch
import org.koin.compose.koinInject
import java.text.DateFormat
import java.util.*

/**
 * Profile screen showing user information and account options
 */
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ProfileScreen(
    analyticsManager: AnalyticsManager,
    onNavigateBack: () -> Unit,
    onSignOut: () -> Unit
) {
    val scope = rememberCoroutineScope()

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
    val currentUser by viewModel.currentUser.collectAsState()

    val snackbarHostState = remember { SnackbarHostState() }
    var showSignOutDialog by remember { mutableStateOf(false) }

    // Handle auth state changes
    LaunchedEffect(authState) {
        when (authState) {
            is AuthState.Unauthenticated -> {
                // Log successful sign out
                analyticsManager.logLogout()
                // Clear user ID in analytics
                analyticsManager.setUserId(null)
                onSignOut()
            }
            else -> {}
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

    // Sign out confirmation dialog
    if (showSignOutDialog) {
        AlertDialog(
            onDismissRequest = { showSignOutDialog = false },
            title = { Text(stringResource(R.string.dialog_sign_out_title)) },
            text = { Text(stringResource(R.string.dialog_sign_out_message)) },
            confirmButton = {
                TextButton(
                    onClick = {
                        showSignOutDialog = false
                        viewModel.signOut()
                    }
                ) {
                    Text(stringResource(R.string.action_sign_out))
                }
            },
            dismissButton = {
                TextButton(onClick = { showSignOutDialog = false }) {
                    Text(stringResource(R.string.action_cancel))
                }
            }
        )
    }

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text(stringResource(R.string.profile_title), modifier = Modifier.semantics { heading() }) },
                navigationIcon = {
                    IconButton(
                        onClick = onNavigateBack,
                        modifier = Modifier.semantics {
                            role = Role.Button
                            contentDescription = "Navigate back"
                        }
                    ) {
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
        ) {
            when (authState) {
                is AuthState.Loading -> {
                    CircularProgressIndicator(
                        modifier = Modifier
                            .align(Alignment.Center)
                            .semantics {
                                liveRegion = LiveRegionMode.Polite
                                contentDescription = "Loading profile information"
                            }
                    )
                }
                is AuthState.Authenticated -> {
                    currentUser?.let { user ->
                        Column(
                            modifier = Modifier
                                .fillMaxSize()
                                .verticalScroll(rememberScrollState())
                                .padding(24.dp),
                            horizontalAlignment = Alignment.CenterHorizontally
                        ) {
                            Spacer(modifier = Modifier.height(24.dp))

                            // User avatar (initials)
                            val userInitials = user.getInitials()
                            Box(
                                modifier = Modifier
                                    .size(100.dp)
                                    .clip(CircleShape)
                                    .background(MaterialTheme.colorScheme.primaryContainer)
                                    .semantics {
                                        contentDescription = "User avatar with initials $userInitials"
                                    },
                                contentAlignment = Alignment.Center
                            ) {
                                Text(
                                    text = userInitials,
                                    style = MaterialTheme.typography.displayMedium,
                                    fontWeight = FontWeight.Bold,
                                    color = MaterialTheme.colorScheme.onPrimaryContainer
                                )
                            }

                            Spacer(modifier = Modifier.height(16.dp))

                            // Display name
                            Text(
                                text = user.getDisplayNameOrEmail(),
                                style = MaterialTheme.typography.headlineMedium,
                                fontWeight = FontWeight.Bold
                            )

                            Spacer(modifier = Modifier.height(8.dp))

                            // Email
                            user.email?.let { email ->
                                if (email.isNotBlank() && email != user.displayName) {
                                    Text(
                                        text = email,
                                        style = MaterialTheme.typography.bodyLarge,
                                        color = MaterialTheme.colorScheme.onSurfaceVariant
                                    )
                                }
                            }

                            Spacer(modifier = Modifier.height(32.dp))

                            // User info card
                            Card(
                                modifier = Modifier.fillMaxWidth()
                            ) {
                                Column(
                                    modifier = Modifier.padding(16.dp)
                                ) {
                                    Text(
                                        text = stringResource(R.string.profile_account_info),
                                        style = MaterialTheme.typography.titleMedium,
                                        fontWeight = FontWeight.Bold,
                                        modifier = Modifier.semantics { heading() }
                                    )

                                    Spacer(modifier = Modifier.height(16.dp))

                                    // User ID
                                    InfoRow(
                                        label = stringResource(R.string.profile_user_id),
                                        value = user.uid.take(12) + "..."
                                    )

                                    HorizontalDivider(modifier = Modifier.padding(vertical = 12.dp))

                                    // Account type
                                    InfoRow(
                                        label = stringResource(R.string.profile_account_type),
                                        value = if (user.isAnonymous) stringResource(R.string.profile_account_type_anonymous) else stringResource(R.string.profile_account_type_email)
                                    )

                                    HorizontalDivider(modifier = Modifier.padding(vertical = 12.dp))

                                    // Created date
                                    if (user.createdAt > 0) {
                                        val dateFormat = DateFormat.getDateInstance(DateFormat.MEDIUM, Locale.getDefault())
                                        val createdDate = dateFormat.format(Date(user.createdAt))
                                        InfoRow(
                                            label = stringResource(R.string.profile_member_since_label),
                                            value = createdDate
                                        )

                                        HorizontalDivider(modifier = Modifier.padding(vertical = 12.dp))
                                    }

                                    // Last sign in
                                    if (user.lastSignInAt > 0) {
                                        val dateFormat = DateFormat.getDateInstance(DateFormat.MEDIUM, Locale.getDefault())
                                        val lastSignIn = dateFormat.format(Date(user.lastSignInAt))
                                        InfoRow(
                                            label = stringResource(R.string.profile_last_sign_in_label),
                                            value = lastSignIn
                                        )
                                    }
                                }
                            }

                            Spacer(modifier = Modifier.height(24.dp))

                            // Sign out button
                            val isLoading = uiState is AuthUiState.Loading
                            OutlinedButton(
                                onClick = { showSignOutDialog = true },
                                modifier = Modifier
                                    .fillMaxWidth()
                                    .height(50.dp)
                                    .semantics {
                                        role = Role.Button
                                        contentDescription = if (isLoading) "Signing out, please wait" else "Sign out of your account"
                                    },
                                enabled = !isLoading
                            ) {
                                if (isLoading) {
                                    CircularProgressIndicator(
                                        modifier = Modifier
                                            .size(24.dp)
                                            .semantics {
                                                liveRegion = LiveRegionMode.Polite
                                                contentDescription = "Signing out"
                                            }
                                    )
                                } else {
                                    Text(stringResource(R.string.action_sign_out))
                                }
                            }

                            Spacer(modifier = Modifier.height(16.dp))

                            // About section
                            Text(
                                text = stringResource(R.string.profile_about),
                                style = MaterialTheme.typography.bodySmall,
                                color = MaterialTheme.colorScheme.onSurfaceVariant,
                                textAlign = TextAlign.Center,
                                modifier = Modifier.padding(horizontal = 16.dp)
                            )
                        }
                    } ?: run {
                        // No user data
                        Column(
                            modifier = Modifier
                                .fillMaxSize()
                                .padding(24.dp),
                            horizontalAlignment = Alignment.CenterHorizontally,
                            verticalArrangement = Arrangement.Center
                        ) {
                            Text(
                                text = stringResource(R.string.profile_no_data),
                                style = MaterialTheme.typography.bodyLarge,
                                color = MaterialTheme.colorScheme.onSurfaceVariant
                            )
                        }
                    }
                }
                is AuthState.Unauthenticated -> {
                    // Will be handled by LaunchedEffect
                }
                is AuthState.Error -> {
                    Column(
                        modifier = Modifier
                            .fillMaxSize()
                            .padding(24.dp),
                        horizontalAlignment = Alignment.CenterHorizontally,
                        verticalArrangement = Arrangement.Center
                    ) {
                        Text(
                            text = (authState as AuthState.Error).message,
                            style = MaterialTheme.typography.bodyLarge,
                            color = MaterialTheme.colorScheme.error,
                            textAlign = TextAlign.Center
                        )
                    }
                }
            }
        }
    }
}

/**
 * Helper composable for displaying info rows
 */
@Composable
private fun InfoRow(
    label: String,
    value: String
) {
    Row(
        modifier = Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.SpaceBetween
    ) {
        Text(
            text = label,
            style = MaterialTheme.typography.bodyMedium,
            color = MaterialTheme.colorScheme.onSurfaceVariant
        )
        Text(
            text = value,
            style = MaterialTheme.typography.bodyMedium,
            fontWeight = FontWeight.Medium
        )
    }
}
