package eco.emergi.embit.android.ui.screens

import android.content.Context
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.dp
import eco.emergi.embit.android.services.BatteryWorkScheduler
import eco.emergi.embit.android.services.DataSyncScheduler
import eco.emergi.embit.android.services.GridMonitorScheduler
import eco.emergi.embit.domain.models.AuthState
import eco.emergi.embit.domain.models.SyncInterval
import eco.emergi.embit.domain.models.SyncResult
import eco.emergi.embit.domain.models.SyncSettings
import eco.emergi.embit.domain.usecases.ManageBatteryDataUseCase
import eco.emergi.embit.domain.usecases.auth.*
import eco.emergi.embit.domain.usecases.sync.*
import eco.emergi.embit.presentation.AuthViewModel
import eco.emergi.embit.presentation.SettingsUiState
import eco.emergi.embit.presentation.SettingsViewModel
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.launch
import org.koin.compose.koinInject
import java.text.SimpleDateFormat
import java.util.*

/**
 * Settings screen for app configuration and data management
 */
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun SettingsScreen(
    onNavigateToLogin: () -> Unit = {},
    onNavigateToProfile: () -> Unit = {}
) {
    val context = LocalContext.current
    val scope = rememberCoroutineScope()
    val manageDataUseCase: ManageBatteryDataUseCase = koinInject()

    val viewModel = remember {
        SettingsViewModel(
            manageBatteryDataUseCase = manageDataUseCase,
            viewModelScope = scope
        )
    }

    // Get auth use cases from Koin
    val observeAuthStateUseCase: ObserveAuthStateUseCase = koinInject()
    val signInUseCase: SignInUseCase = koinInject()
    val signUpUseCase: SignUpUseCase = koinInject()
    val signOutUseCase: SignOutUseCase = koinInject()
    val getCurrentUserUseCase: GetCurrentUserUseCase = koinInject()
    val sendPasswordResetUseCase: SendPasswordResetUseCase = koinInject()

    val authViewModel = remember {
        AuthViewModel(
            observeAuthStateUseCase = observeAuthStateUseCase,
            signInUseCase = signInUseCase,
            signUpUseCase = signUpUseCase,
            signOutUseCase = signOutUseCase,
            getCurrentUserUseCase = getCurrentUserUseCase,
            sendPasswordResetUseCase = sendPasswordResetUseCase,
            viewModelScope = scope
        )
    }

    // Get sync use cases from Koin
    val syncBatteryDataUseCase: SyncBatteryDataUseCase = koinInject()
    val observeSyncStatusUseCase: ObserveSyncStatusUseCase = koinInject()
    val getSyncSettingsUseCase: GetSyncSettingsUseCase = koinInject()
    val saveSyncSettingsUseCase: SaveSyncSettingsUseCase = koinInject()

    val uiState by viewModel.uiState.collectAsState()
    val databaseStats by viewModel.databaseStats.collectAsState()
    val authState by authViewModel.authState.collectAsState()
    val currentUser by authViewModel.currentUser.collectAsState()
    val syncStatus by observeSyncStatusUseCase().collectAsState(initial = eco.emergi.embit.domain.models.SyncStatus())

    var syncSettings by remember { mutableStateOf(SyncSettings()) }
    var isSyncing by remember { mutableStateOf(false) }
    var showClearDialog by remember { mutableStateOf(false) }
    var isMonitoringEnabled by remember {
        mutableStateOf(BatteryWorkScheduler.isMonitoringScheduled(context))
    }
    var gridNotificationsEnabled by remember {
        mutableStateOf(
            context.getSharedPreferences("grid_settings", Context.MODE_PRIVATE)
                .getBoolean("notifications_enabled", true)
        )
    }

    // Load sync settings when authenticated
    LaunchedEffect(authState) {
        if (authState is AuthState.Authenticated) {
            getSyncSettingsUseCase().onSuccess { settings ->
                syncSettings = settings
            }
        }
    }

    // Handle UI state changes
    LaunchedEffect(uiState) {
        when (val state = uiState) {
            is SettingsUiState.ExportSuccess -> {
                // TODO: Share the exported data
                viewModel.resetState()
            }
            is SettingsUiState.ImportSuccess -> {
                viewModel.resetState()
            }
            is SettingsUiState.CleanupSuccess -> {
                viewModel.resetState()
            }
            is SettingsUiState.ClearAllSuccess -> {
                viewModel.resetState()
            }
            else -> {}
        }
    }

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("Settings") }
            )
        }
    ) { paddingValues ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
                .verticalScroll(rememberScrollState()),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            // Monitoring Settings
            Card(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 16.dp)
                    .padding(top = 16.dp)
            ) {
                Column(modifier = Modifier.padding(16.dp)) {
                    Text("Monitoring Settings", style = MaterialTheme.typography.titleMedium)
                    Spacer(modifier = Modifier.height(8.dp))

                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Column(modifier = Modifier.weight(1f)) {
                            Text("Background Monitoring")
                            Text(
                                "Collect battery data every 15 minutes",
                                style = MaterialTheme.typography.bodySmall,
                                color = MaterialTheme.colorScheme.onSurfaceVariant
                            )
                        }
                        Switch(
                            checked = isMonitoringEnabled,
                            onCheckedChange = { enabled ->
                                if (enabled) {
                                    BatteryWorkScheduler.schedulePeriodicMonitoring(context)
                                } else {
                                    BatteryWorkScheduler.cancelPeriodicMonitoring(context)
                                }
                                isMonitoringEnabled = enabled
                            }
                        )
                    }
                }
            }

            // Account Section
            Card(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 16.dp)
            ) {
                Column(modifier = Modifier.padding(16.dp)) {
                    Text("Account", style = MaterialTheme.typography.titleMedium)
                    Spacer(modifier = Modifier.height(8.dp))

                    when (authState) {
                        is AuthState.Authenticated -> {
                            // User is authenticated
                            currentUser?.let { user ->
                                Row(
                                    modifier = Modifier.fillMaxWidth(),
                                    horizontalArrangement = Arrangement.SpaceBetween,
                                    verticalAlignment = Alignment.CenterVertically
                                ) {
                                    Column(modifier = Modifier.weight(1f)) {
                                        Text(
                                            text = user.getDisplayNameOrEmail(),
                                            style = MaterialTheme.typography.bodyLarge
                                        )
                                        user.email?.let { email ->
                                            if (email.isNotBlank() && email != user.displayName) {
                                                Text(
                                                    text = email,
                                                    style = MaterialTheme.typography.bodySmall,
                                                    color = MaterialTheme.colorScheme.onSurfaceVariant
                                                )
                                            }
                                        }
                                    }
                                    TextButton(onClick = onNavigateToProfile) {
                                        Text("View Profile")
                                    }
                                }
                            }
                        }
                        is AuthState.Unauthenticated -> {
                            // User is not authenticated
                            Column {
                                Text(
                                    text = "Sign in to sync your data and access advanced features",
                                    style = MaterialTheme.typography.bodyMedium,
                                    color = MaterialTheme.colorScheme.onSurfaceVariant
                                )
                                Spacer(modifier = Modifier.height(12.dp))
                                Button(
                                    onClick = onNavigateToLogin,
                                    modifier = Modifier.fillMaxWidth()
                                ) {
                                    Icon(Icons.Default.Login, contentDescription = null)
                                    Spacer(Modifier.width(8.dp))
                                    Text("Sign In")
                                }
                            }
                        }
                        is AuthState.Loading -> {
                            CircularProgressIndicator(
                                modifier = Modifier
                                    .size(32.dp)
                                    .align(Alignment.CenterHorizontally)
                            )
                        }
                        is AuthState.Error -> {
                            Text(
                                text = "Unable to load account information",
                                style = MaterialTheme.typography.bodyMedium,
                                color = MaterialTheme.colorScheme.error
                            )
                        }
                    }
                }
            }

            // Data Sync Section (only show when authenticated)
            if (authState is AuthState.Authenticated) {
                Card(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 16.dp)
                ) {
                    Column(modifier = Modifier.padding(16.dp)) {
                        Text("Data Sync", style = MaterialTheme.typography.titleMedium)
                        Spacer(modifier = Modifier.height(8.dp))

                        // Auto-sync toggle
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.SpaceBetween,
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            Column(modifier = Modifier.weight(1f)) {
                                Text("Auto Sync")
                                Text(
                                    "Automatically sync data to cloud",
                                    style = MaterialTheme.typography.bodySmall,
                                    color = MaterialTheme.colorScheme.onSurfaceVariant
                                )
                            }
                            Switch(
                                checked = syncSettings.autoSyncEnabled,
                                onCheckedChange = { enabled ->
                                    val newSettings = syncSettings.copy(autoSyncEnabled = enabled)
                                    syncSettings = newSettings
                                    scope.launch {
                                        saveSyncSettingsUseCase(newSettings)
                                    }
                                    // Schedule or cancel background sync
                                    if (enabled) {
                                        DataSyncScheduler.schedulePeriodicSync(context, newSettings.syncInterval)
                                    } else {
                                        DataSyncScheduler.cancelPeriodicSync(context)
                                    }
                                }
                            )
                        }

                        Spacer(modifier = Modifier.height(12.dp))

                        // WiFi-only toggle
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.SpaceBetween,
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            Column(modifier = Modifier.weight(1f)) {
                                Text("WiFi Only")
                                Text(
                                    "Sync only when connected to WiFi",
                                    style = MaterialTheme.typography.bodySmall,
                                    color = MaterialTheme.colorScheme.onSurfaceVariant
                                )
                            }
                            Switch(
                                checked = syncSettings.syncOnWifiOnly,
                                onCheckedChange = { enabled ->
                                    val newSettings = syncSettings.copy(syncOnWifiOnly = enabled)
                                    syncSettings = newSettings
                                    scope.launch {
                                        saveSyncSettingsUseCase(newSettings)
                                    }
                                },
                                enabled = syncSettings.autoSyncEnabled
                            )
                        }

                        Spacer(modifier = Modifier.height(16.dp))

                        // Last sync info
                        syncStatus.lastSyncTimestamp?.let { timestamp ->
                            val dateFormat = SimpleDateFormat("MMM dd, yyyy HH:mm", Locale.getDefault())
                            val lastSyncDate = dateFormat.format(Date(timestamp))
                            Text(
                                text = "Last synced: $lastSyncDate",
                                style = MaterialTheme.typography.bodySmall,
                                color = MaterialTheme.colorScheme.onSurfaceVariant
                            )
                            Spacer(modifier = Modifier.height(8.dp))
                        }

                        // Sync status
                        if (syncStatus.syncInProgress || isSyncing) {
                            Row(
                                modifier = Modifier.fillMaxWidth(),
                                verticalAlignment = Alignment.CenterVertically
                            ) {
                                CircularProgressIndicator(
                                    modifier = Modifier.size(16.dp),
                                    strokeWidth = 2.dp
                                )
                                Spacer(modifier = Modifier.width(8.dp))
                                Text(
                                    text = "Syncing...",
                                    style = MaterialTheme.typography.bodySmall,
                                    color = MaterialTheme.colorScheme.primary
                                )
                            }
                            Spacer(modifier = Modifier.height(8.dp))
                        }

                        // Error message
                        syncStatus.lastSyncError?.let { error ->
                            Text(
                                text = error,
                                style = MaterialTheme.typography.bodySmall,
                                color = MaterialTheme.colorScheme.error
                            )
                            Spacer(modifier = Modifier.height(8.dp))
                        }

                        // Manual sync button
                        Button(
                            onClick = {
                                scope.launch {
                                    isSyncing = true
                                    when (val result = syncBatteryDataUseCase()) {
                                        is SyncResult.Success -> {
                                            // Success handled by sync status flow
                                        }
                                        is SyncResult.PartialSuccess -> {
                                            // Partial success
                                        }
                                        is SyncResult.Failure -> {
                                            // Failure handled by sync status flow
                                        }
                                    }
                                    isSyncing = false
                                }
                            },
                            modifier = Modifier.fillMaxWidth(),
                            enabled = !syncStatus.syncInProgress && !isSyncing
                        ) {
                            Icon(Icons.Default.CloudUpload, contentDescription = null)
                            Spacer(Modifier.width(8.dp))
                            Text("Sync Now")
                        }
                    }
                }
            }

            // Grid Notifications Section
            Card(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 16.dp)
            ) {
                Column(modifier = Modifier.padding(16.dp)) {
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Column(modifier = Modifier.weight(1f)) {
                            Text(
                                "Smart Charging Notifications",
                                style = MaterialTheme.typography.titleMedium
                            )
                            Spacer(modifier = Modifier.height(4.dp))
                            Text(
                                "Get notified about optimal charging times",
                                style = MaterialTheme.typography.bodySmall,
                                color = MaterialTheme.colorScheme.onSurfaceVariant
                            )
                        }
                    }

                    Spacer(modifier = Modifier.height(12.dp))

                    // Enable notifications toggle
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Column(modifier = Modifier.weight(1f)) {
                            Text("Enable Notifications")
                            Text(
                                "Get alerts for grid conditions",
                                style = MaterialTheme.typography.bodySmall,
                                color = MaterialTheme.colorScheme.onSurfaceVariant
                            )
                        }
                        Switch(
                            checked = gridNotificationsEnabled,
                            onCheckedChange = { enabled ->
                                gridNotificationsEnabled = enabled
                                // Save preference
                                context.getSharedPreferences("grid_settings", Context.MODE_PRIVATE)
                                    .edit()
                                    .putBoolean("notifications_enabled", enabled)
                                    .apply()

                                // Schedule or cancel grid monitoring
                                if (enabled) {
                                    GridMonitorScheduler.schedulePeriodicMonitoring(context)
                                } else {
                                    GridMonitorScheduler.cancelPeriodicMonitoring(context)
                                }
                            }
                        )
                    }

                    Spacer(modifier = Modifier.height(12.dp))

                    // Info text
                    Row(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(8.dp),
                        horizontalArrangement = Arrangement.spacedBy(8.dp)
                    ) {
                        Icon(
                            Icons.Default.Info,
                            contentDescription = null,
                            modifier = Modifier.size(20.dp),
                            tint = MaterialTheme.colorScheme.primary
                        )
                        Text(
                            "Receive notifications when:\n" +
                            "• Grid is optimal for charging (low cost, high renewables)\n" +
                            "• Grid stress is high (avoid charging)\n" +
                            "• Critical grid conditions (urgent)",
                            style = MaterialTheme.typography.bodySmall,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }
                }
            }

            // Database Statistics
            databaseStats?.let { stats ->
                Card(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 16.dp)
                ) {
                    Column(modifier = Modifier.padding(16.dp)) {
                        Text("Database Statistics", style = MaterialTheme.typography.titleMedium)
                        Spacer(modifier = Modifier.height(8.dp))
                        Text("Total Readings: ${stats.totalReadings}")
                        Text("Estimated Size: ${stats.estimatedSizeMB}")
                    }
                }
            }

            // Data Management Section
            Card(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 16.dp)
            ) {
                Column(modifier = Modifier.padding(16.dp)) {
                    Text("Data Management", style = MaterialTheme.typography.titleMedium)
                    Spacer(modifier = Modifier.height(8.dp))

                    Button(
                        onClick = { viewModel.exportData() },
                        modifier = Modifier.fillMaxWidth(),
                        enabled = uiState !is SettingsUiState.ExportingData
                    ) {
                        Icon(Icons.Default.FileDownload, contentDescription = null)
                        Spacer(Modifier.width(8.dp))
                        Text("Export Data")
                    }

                    Spacer(modifier = Modifier.height(8.dp))

                    OutlinedButton(
                        onClick = { viewModel.cleanupOldData(90) },
                        modifier = Modifier.fillMaxWidth(),
                        enabled = uiState !is SettingsUiState.CleaningData
                    ) {
                        Icon(Icons.Default.CleaningServices, contentDescription = null)
                        Spacer(Modifier.width(8.dp))
                        Text("Cleanup Old Data (90+ days)")
                    }

                    Spacer(modifier = Modifier.height(8.dp))

                    OutlinedButton(
                        onClick = { showClearDialog = true },
                        modifier = Modifier.fillMaxWidth(),
                        colors = ButtonDefaults.outlinedButtonColors(
                            contentColor = MaterialTheme.colorScheme.error
                        )
                    ) {
                        Icon(Icons.Default.DeleteForever, contentDescription = null)
                        Spacer(Modifier.width(8.dp))
                        Text("Clear All Data")
                    }
                }
            }

            // About Section
            Card(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 16.dp)
                    .padding(bottom = 16.dp)
            ) {
                Column(modifier = Modifier.padding(16.dp)) {
                    Text("About", style = MaterialTheme.typography.titleMedium)
                    Spacer(modifier = Modifier.height(8.dp))
                    Text("Embit Battery Monitor v2.0.0")
                    Text("Built with Kotlin Multiplatform & Compose")
                }
            }
        }

        // Clear All Data Confirmation Dialog
        if (showClearDialog) {
            AlertDialog(
                onDismissRequest = { showClearDialog = false },
                title = { Text("Clear All Data?") },
                text = { Text("This will permanently delete all battery readings. This action cannot be undone.") },
                confirmButton = {
                    TextButton(
                        onClick = {
                            showClearDialog = false
                            viewModel.clearAllData()
                        },
                        colors = ButtonDefaults.textButtonColors(
                            contentColor = MaterialTheme.colorScheme.error
                        )
                    ) {
                        Text("Clear")
                    }
                },
                dismissButton = {
                    TextButton(onClick = { showClearDialog = false }) {
                        Text("Cancel")
                    }
                }
            )
        }

        // Loading/Progress Indicator
        if (uiState is SettingsUiState.ExportingData ||
            uiState is SettingsUiState.ImportingData ||
            uiState is SettingsUiState.CleaningData ||
            uiState is SettingsUiState.ClearingAllData
        ) {
            Box(
                modifier = Modifier.fillMaxSize(),
                contentAlignment = Alignment.Center
            ) {
                CircularProgressIndicator()
            }
        }
    }
}

@Composable
private fun remember(scope: CoroutineScope, calculation: () -> SettingsViewModel): SettingsViewModel {
    return androidx.compose.runtime.remember(scope) { calculation() }
}
