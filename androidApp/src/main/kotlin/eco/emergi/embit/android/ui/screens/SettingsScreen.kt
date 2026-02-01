package eco.emergi.embit.android.ui.screens

import android.content.Context
import android.content.Intent
import android.net.Uri
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material.icons.filled.ChevronRight
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.input.key.*
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.semantics.*
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import eco.emergi.embit.android.R
import eco.emergi.embit.android.analytics.AnalyticsManager
import eco.emergi.embit.android.analytics.RemoteConfigManager
import eco.emergi.embit.android.services.BatteryWorkScheduler
import eco.emergi.embit.android.services.DataSyncScheduler
import eco.emergi.embit.android.services.GridMonitorScheduler
import eco.emergi.embit.android.ui.components.FeedbackDialog
import eco.emergi.embit.domain.models.AuthState
import eco.emergi.embit.domain.models.EnergyProduct
import eco.emergi.embit.domain.models.EnergyProducts
import eco.emergi.embit.domain.models.Feedback
import eco.emergi.embit.domain.models.SyncInterval
import eco.emergi.embit.domain.models.SyncResult
import eco.emergi.embit.domain.models.SyncSettings
import eco.emergi.embit.domain.repositories.IFeedbackRepository
import javax.inject.Inject
import eco.emergi.embit.domain.usecases.ManageBatteryDataUseCase
import eco.emergi.embit.domain.usecases.auth.*
import eco.emergi.embit.domain.usecases.grid.GetEnergyProductUseCase
import eco.emergi.embit.domain.usecases.grid.SetEnergyProductUseCase
import eco.emergi.embit.domain.usecases.sync.*
import eco.emergi.embit.presentation.AuthViewModel
import eco.emergi.embit.presentation.SettingsUiState
import eco.emergi.embit.presentation.SettingsViewModel
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.launch
import org.koin.compose.koinInject
import java.text.DateFormat
import java.util.*

/**
 * Settings screen for app configuration and data management
 */
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun SettingsScreen(
    onNavigateToLogin: () -> Unit = {},
    onNavigateToProfile: () -> Unit = {},
    onNavigateToPrivacySettings: () -> Unit = {},
    analyticsManager: AnalyticsManager? = null,
    remoteConfigManager: RemoteConfigManager? = null
) {
    val context = LocalContext.current
    val scope = rememberCoroutineScope()
    val manageDataUseCase: ManageBatteryDataUseCase = koinInject()
    val feedbackRepository: IFeedbackRepository = koinInject()

    val viewModel = remember {
        SettingsViewModel(
            manageBatteryDataUseCase = manageDataUseCase,
            viewModelScope = scope
        )
    }

    // Get battery monitor use cases for real-time battery data
    val monitorBatteryUseCase: eco.emergi.embit.domain.usecases.MonitorBatteryUseCase = koinInject()
    val getBatteryHistoryUseCase: eco.emergi.embit.domain.usecases.GetBatteryHistoryUseCase = koinInject()
    val calculateStatisticsUseCase: eco.emergi.embit.domain.usecases.CalculateBatteryStatisticsUseCase = koinInject()
    val predictBatteryLifeUseCase: eco.emergi.embit.domain.usecases.PredictBatteryLifeUseCase = koinInject()
    val generateChargingRecommendationsUseCase: eco.emergi.embit.domain.usecases.GenerateChargingRecommendationsUseCase = koinInject()
    val observeGridStatusUseCase: eco.emergi.embit.domain.usecases.grid.ObserveGridStatusUseCase = koinInject()
    val getChargingRecommendationUseCase: eco.emergi.embit.domain.usecases.grid.GetChargingRecommendationUseCase = koinInject()

    val batteryMonitorViewModel = remember {
        eco.emergi.embit.presentation.BatteryMonitorViewModel(
            monitorBatteryUseCase = monitorBatteryUseCase,
            getBatteryHistoryUseCase = getBatteryHistoryUseCase,
            calculateStatisticsUseCase = calculateStatisticsUseCase,
            predictBatteryLifeUseCase = predictBatteryLifeUseCase,
            generateChargingRecommendationsUseCase = generateChargingRecommendationsUseCase,
            observeGridStatusUseCase = observeGridStatusUseCase,
            getChargingRecommendationUseCase = getChargingRecommendationUseCase,
            viewModelScope = scope
        )
    }

    // Collect current battery reading
    val currentBatteryReading by batteryMonitorViewModel.currentReading.collectAsState()

    // Get auth use cases from Koin
    val observeAuthStateUseCase: ObserveAuthStateUseCase = koinInject()
    val signInUseCase: SignInUseCase = koinInject()
    val signUpUseCase: SignUpUseCase = koinInject()
    val signOutUseCase: SignOutUseCase = koinInject()
    val getCurrentUserUseCase: GetCurrentUserUseCase = koinInject()
    val sendPasswordResetUseCase: SendPasswordResetUseCase = koinInject()
    val signInWithGoogleUseCase: SignInWithGoogleUseCase = koinInject()
    val isNewUserUseCase: IsNewUserUseCase = koinInject()
    val userPreferencesRepository: eco.emergi.embit.domain.repositories.IUserPreferencesRepository = koinInject()

    val authViewModel = remember {
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

    // Get sync use cases from Koin
    val syncBatteryDataUseCase: SyncBatteryDataUseCase = koinInject()
    val observeSyncStatusUseCase: ObserveSyncStatusUseCase = koinInject()
    val getSyncSettingsUseCase: GetSyncSettingsUseCase = koinInject()
    val saveSyncSettingsUseCase: SaveSyncSettingsUseCase = koinInject()

    // Get energy product use cases from Koin
    val getEnergyProductUseCase: GetEnergyProductUseCase = koinInject()
    val setEnergyProductUseCase: SetEnergyProductUseCase = koinInject()

    val uiState by viewModel.uiState.collectAsState()
    val databaseStats by viewModel.databaseStats.collectAsState()
    val authState by authViewModel.authState.collectAsState()
    val currentUser by authViewModel.currentUser.collectAsState()
    val syncStatus by observeSyncStatusUseCase().collectAsState(initial = eco.emergi.embit.domain.models.SyncStatus())

    var syncSettings by remember { mutableStateOf(SyncSettings()) }
    var isSyncing by remember { mutableStateOf(false) }
    var showClearDialog by remember { mutableStateOf(false) }
    var selectedEnergyProduct by remember { mutableStateOf(EnergyProducts.STANDARD_GRID) }
    var showEnergyProductSelector by remember { mutableStateOf(false) }
    var isMonitoringEnabled by remember {
        mutableStateOf(BatteryWorkScheduler.isMonitoringScheduled(context))
    }
    var gridNotificationsEnabled by remember {
        mutableStateOf(
            context.getSharedPreferences("grid_settings", Context.MODE_PRIVATE)
                .getBoolean("notifications_enabled", true)
        )
    }
    var showFeedbackDialog by remember { mutableStateOf(false) }
    var feedbackSubmitSuccess by remember { mutableStateOf(false) }
    var feedbackSubmitError by remember { mutableStateOf<String?>(null) }

    // Observe user preferences for high-contrast mode
    val userPreferences by userPreferencesRepository.observeUserPreferences()
        .collectAsState(initial = null)

    // Load sync settings when authenticated
    LaunchedEffect(authState) {
        if (authState is AuthState.Authenticated) {
            getSyncSettingsUseCase().onSuccess { settings ->
                syncSettings = settings
            }
        }
    }

    // Load energy product selection
    LaunchedEffect(Unit) {
        selectedEnergyProduct = getEnergyProductUseCase()
    }

    // Handle UI state changes
    LaunchedEffect(uiState) {
        when (val state = uiState) {
            is SettingsUiState.ExportSuccess -> {
                // Log successful export
                analyticsManager?.logDataExported(
                    format = "json",
                    recordCount = state.jsonData.split("\n").size
                )
                shareExportedData(context, state.jsonData)
                viewModel.resetState()
            }
            is SettingsUiState.ImportSuccess -> {
                // Log successful import
                analyticsManager?.logDataImported(
                    format = "json",
                    recordCount = state.recordCount,
                    success = true
                )
                viewModel.resetState()
            }
            is SettingsUiState.CleanupSuccess -> {
                // Log successful cleanup
                analyticsManager?.logDataCleanup(
                    deletedCount = state.deletedCount,
                    timePeriod = "90_days"
                )
                viewModel.resetState()
            }
            is SettingsUiState.ClearAllSuccess -> {
                // Log successful clear all
                analyticsManager?.logDataCleanup(
                    deletedCount = 0, // Unknown count for clear all
                    timePeriod = "all"
                )
                viewModel.resetState()
            }
            is SettingsUiState.Error -> {
                // Log error
                analyticsManager?.logError(
                    errorType = "settings_operation_failed",
                    errorMessage = state.message,
                    errorContext = "SettingsScreen"
                )
            }
            else -> {}
        }
    }

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text(stringResource(R.string.settings_title), modifier = Modifier.semantics { heading() }) }
            )
        }
    ) { paddingValues ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
                .verticalScroll(rememberScrollState())
                .onKeyEvent { event ->
                    // Handle keyboard shortcuts
                    if (event.type == KeyEventType.KeyDown) {
                        when {
                            // Ctrl+E: Export data
                            event.isCtrlPressed && event.key == Key.E -> {
                                if (remoteConfigManager?.isDataExportEnabled() != false &&
                                    uiState !is SettingsUiState.ExportingData) {
                                    viewModel.exportData()
                                }
                                true
                            }
                            // Ctrl+S: Sync now
                            event.isCtrlPressed && event.key == Key.S -> {
                                if (authState is eco.emergi.embit.domain.models.AuthState.Authenticated &&
                                    !isSyncing) {
                                    scope.launch {
                                        isSyncing = true
                                        syncBatteryDataUseCase()
                                        isSyncing = false
                                    }
                                }
                                true
                            }
                            else -> false
                        }
                    } else {
                        false
                    }
                },
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
                    Text(
                        stringResource(R.string.settings_monitoring),
                        style = MaterialTheme.typography.titleMedium,
                        modifier = Modifier.semantics { heading() }
                    )
                    Spacer(modifier = Modifier.height(8.dp))

                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Column(modifier = Modifier.weight(1f)) {
                            Text(stringResource(R.string.settings_background_monitoring))
                            Text(
                                stringResource(R.string.settings_background_monitoring_desc),
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
                            },
                            modifier = Modifier.semantics {
                                role = Role.Switch
                                stateDescription = if (isMonitoringEnabled) "Background monitoring enabled" else "Background monitoring disabled"
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
                    Text(
                        stringResource(R.string.settings_account),
                        style = MaterialTheme.typography.titleMedium,
                        modifier = Modifier.semantics { heading() }
                    )
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
                                        Text(stringResource(R.string.settings_view_profile))
                                    }
                                }
                            }
                        }
                        is AuthState.Unauthenticated -> {
                            // User is not authenticated
                            Column {
                                Text(
                                    text = stringResource(R.string.settings_sign_in_message),
                                    style = MaterialTheme.typography.bodyMedium,
                                    color = MaterialTheme.colorScheme.onSurfaceVariant
                                )
                                Spacer(modifier = Modifier.height(12.dp))
                                Button(
                                    onClick = onNavigateToLogin,
                                    modifier = Modifier
                                        .fillMaxWidth()
                                        .semantics {
                                            role = Role.Button
                                            contentDescription = "Sign in to your account"
                                        }
                                ) {
                                    Icon(Icons.Default.Login, contentDescription = null)
                                    Spacer(Modifier.width(8.dp))
                                    Text(stringResource(R.string.action_sign_in))
                                }
                            }
                        }
                        is AuthState.Loading -> {
                            CircularProgressIndicator(
                                modifier = Modifier
                                    .size(32.dp)
                                    .align(Alignment.CenterHorizontally)
                                    .semantics {
                                        liveRegion = LiveRegionMode.Polite
                                        contentDescription = "Loading account information"
                                    }
                            )
                        }
                        is AuthState.Error -> {
                            Text(
                                text = stringResource(R.string.settings_account_load_error),
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
                        Text(
                            stringResource(R.string.settings_data_sync),
                            style = MaterialTheme.typography.titleMedium,
                            modifier = Modifier.semantics { heading() }
                        )
                        Spacer(modifier = Modifier.height(8.dp))

                        // Auto-sync toggle
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.SpaceBetween,
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            Column(modifier = Modifier.weight(1f)) {
                                Text(stringResource(R.string.settings_auto_sync))
                                Text(
                                    stringResource(R.string.settings_auto_sync_desc),
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
                                },
                                modifier = Modifier.semantics {
                                    role = Role.Switch
                                    stateDescription = if (syncSettings.autoSyncEnabled) "Auto sync enabled" else "Auto sync disabled"
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
                                Text(stringResource(R.string.settings_wifi_only))
                                Text(
                                    stringResource(R.string.settings_wifi_only_desc),
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
                                enabled = syncSettings.autoSyncEnabled,
                                modifier = Modifier.semantics {
                                    role = Role.Switch
                                    stateDescription = if (syncSettings.syncOnWifiOnly) "WiFi only enabled" else "WiFi only disabled"
                                }
                            )
                        }

                        Spacer(modifier = Modifier.height(16.dp))

                        // Last sync info
                        syncStatus.lastSyncTimestamp?.let { timestamp ->
                            val dateFormat = DateFormat.getDateTimeInstance(DateFormat.MEDIUM, DateFormat.SHORT, Locale.getDefault())
                            val lastSyncDate = dateFormat.format(Date(timestamp))
                            Text(
                                text = stringResource(R.string.settings_last_synced, lastSyncDate),
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
                                    text = stringResource(R.string.settings_syncing),
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
                            Text(stringResource(R.string.settings_sync_now))
                        }
                    }
                }
            }

            // Energy Product Section
            Card(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 16.dp)
            ) {
                Column(modifier = Modifier.padding(16.dp)) {
                    Text(
                        stringResource(R.string.settings_energy_product),
                        style = MaterialTheme.typography.titleMedium,
                        modifier = Modifier.semantics { heading() }
                    )
                    Spacer(modifier = Modifier.height(8.dp))

                    Text(
                        stringResource(R.string.settings_energy_product_desc),
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )

                    Spacer(modifier = Modifier.height(16.dp))

                    // Current selection
                    OutlinedButton(
                        onClick = { showEnergyProductSelector = true },
                        modifier = Modifier.fillMaxWidth()
                    ) {
                        Column(
                            modifier = Modifier.padding(vertical = 8.dp),
                            horizontalAlignment = Alignment.Start
                        ) {
                            Row(
                                modifier = Modifier.fillMaxWidth(),
                                horizontalArrangement = Arrangement.SpaceBetween,
                                verticalAlignment = Alignment.CenterVertically
                            ) {
                                Text(
                                    text = selectedEnergyProduct.displayName,
                                    style = MaterialTheme.typography.bodyLarge,
                                    fontWeight = FontWeight.Bold
                                )
                                Icon(Icons.Default.ChevronRight, contentDescription = null)
                            }
                            Spacer(modifier = Modifier.height(4.dp))
                            Text(
                                text = selectedEnergyProduct.description,
                                style = MaterialTheme.typography.bodySmall,
                                color = MaterialTheme.colorScheme.onSurfaceVariant
                            )
                            selectedEnergyProduct.fixedRenewablePercentage?.let { percentage ->
                                Spacer(modifier = Modifier.height(4.dp))
                                Text(
                                    text = stringResource(R.string.settings_renewable_percent, percentage.toInt()),
                                    style = MaterialTheme.typography.labelMedium,
                                    color = MaterialTheme.colorScheme.primary,
                                    fontWeight = FontWeight.Bold
                                )
                            }
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
                                stringResource(R.string.settings_grid_notifications),
                                style = MaterialTheme.typography.titleMedium
                            )
                            Spacer(modifier = Modifier.height(4.dp))
                            Text(
                                stringResource(R.string.settings_grid_notifications_desc),
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
                            Text(stringResource(R.string.settings_enable_notifications))
                            Text(
                                stringResource(R.string.settings_grid_alerts_desc),
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

                                // Log grid monitoring toggle
                                analyticsManager?.logCustomEvent(
                                    eventName = "grid_monitoring_toggled",
                                    params = mapOf(
                                        "enabled" to enabled
                                    )
                                )
                            },
                            modifier = Modifier.semantics {
                                role = Role.Switch
                                stateDescription = if (gridNotificationsEnabled) "Grid notifications enabled" else "Grid notifications disabled"
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
                            stringResource(R.string.settings_grid_notifications_info),
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
                        Text(stringResource(R.string.settings_database_stats), style = MaterialTheme.typography.titleMedium)
                        Spacer(modifier = Modifier.height(8.dp))
                        Text(stringResource(R.string.settings_total_readings, stats.totalReadings))
                        Text(stringResource(R.string.settings_estimated_size, stats.estimatedSizeMB))
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
                    Text(stringResource(R.string.settings_data_management), style = MaterialTheme.typography.titleMedium)
                    Spacer(modifier = Modifier.height(8.dp))

                    // Export Data (only if enabled via remote config)
                    if (remoteConfigManager?.isDataExportEnabled() != false) {
                        Button(
                            onClick = { viewModel.exportData() },
                            modifier = Modifier.fillMaxWidth(),
                            enabled = uiState !is SettingsUiState.ExportingData
                        ) {
                            Icon(Icons.Default.FileDownload, contentDescription = null)
                            Spacer(Modifier.width(8.dp))
                            Text(stringResource(R.string.settings_export_data))
                        }

                        Spacer(modifier = Modifier.height(8.dp))
                    }

                    // Cleanup Old Data
                    OutlinedButton(
                        onClick = { viewModel.cleanupOldData(90) },
                        modifier = Modifier.fillMaxWidth(),
                        enabled = uiState !is SettingsUiState.CleaningData
                    ) {
                        Icon(Icons.Default.CleaningServices, contentDescription = null)
                        Spacer(Modifier.width(8.dp))
                        Text(stringResource(R.string.settings_cleanup_old_data_days))
                    }

                    Spacer(modifier = Modifier.height(8.dp))

                    // Clear All Data
                    OutlinedButton(
                        onClick = { showClearDialog = true },
                        modifier = Modifier.fillMaxWidth(),
                        colors = ButtonDefaults.outlinedButtonColors(
                            contentColor = MaterialTheme.colorScheme.error
                        )
                    ) {
                        Icon(Icons.Default.DeleteForever, contentDescription = null)
                        Spacer(Modifier.width(8.dp))
                        Text(stringResource(R.string.settings_clear_all_data))
                    }
                }
            }

            // Feedback Section (only show if enabled in remote config)
            if (remoteConfigManager?.isFeedbackEnabled() != false) {
                Card(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 16.dp)
                ) {
                    Column(modifier = Modifier.padding(16.dp)) {
                        Text(stringResource(R.string.settings_feedback), style = MaterialTheme.typography.titleMedium)
                        Spacer(modifier = Modifier.height(8.dp))

                        Text(
                            stringResource(R.string.settings_feedback_desc),
                            style = MaterialTheme.typography.bodySmall,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )

                        Spacer(modifier = Modifier.height(12.dp))

                        OutlinedButton(
                            onClick = { showFeedbackDialog = true },
                            modifier = Modifier.fillMaxWidth(),
                            enabled = authState is AuthState.Authenticated
                        ) {
                            Icon(Icons.Default.Star, contentDescription = null)
                            Spacer(Modifier.width(8.dp))
                            Text(stringResource(R.string.settings_rate_embit))
                        }

                        Spacer(modifier = Modifier.height(8.dp))

                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.spacedBy(8.dp)
                        ) {
                            OutlinedButton(
                                onClick = { showFeedbackDialog = true },
                                modifier = Modifier.weight(1f),
                                enabled = authState is AuthState.Authenticated
                            ) {
                                Icon(Icons.Default.BugReport, contentDescription = null, modifier = Modifier.size(18.dp))
                                Spacer(Modifier.width(4.dp))
                                Text(stringResource(R.string.settings_report_bug), style = MaterialTheme.typography.bodySmall)
                            }

                            OutlinedButton(
                                onClick = { showFeedbackDialog = true },
                                modifier = Modifier.weight(1f),
                                enabled = authState is AuthState.Authenticated
                            ) {
                                Icon(Icons.Default.Lightbulb, contentDescription = null, modifier = Modifier.size(18.dp))
                                Spacer(Modifier.width(4.dp))
                                Text(stringResource(R.string.settings_suggest), style = MaterialTheme.typography.bodySmall)
                            }
                        }

                        if (authState !is AuthState.Authenticated) {
                            Spacer(modifier = Modifier.height(8.dp))
                            Text(
                                stringResource(R.string.settings_sign_in_to_feedback),
                                style = MaterialTheme.typography.bodySmall,
                                color = MaterialTheme.colorScheme.onSurfaceVariant,
                                modifier = Modifier.padding(start = 8.dp)
                            )
                        }

                        // Show success/error messages
                        if (feedbackSubmitSuccess) {
                            Spacer(modifier = Modifier.height(8.dp))
                            Text(
                                stringResource(R.string.settings_feedback_success),
                                style = MaterialTheme.typography.bodySmall,
                                color = MaterialTheme.colorScheme.primary,
                                modifier = Modifier.padding(start = 8.dp)
                            )
                        }

                        feedbackSubmitError?.let { error ->
                            Spacer(modifier = Modifier.height(8.dp))
                            Text(
                                stringResource(R.string.settings_feedback_error, error),
                                style = MaterialTheme.typography.bodySmall,
                                color = MaterialTheme.colorScheme.error,
                                modifier = Modifier.padding(start = 8.dp)
                            )
                        }
                    }
                }
            }

            // Appearance Section
            Card(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 16.dp)
            ) {
                Column(modifier = Modifier.padding(16.dp)) {
                    Text(
                        stringResource(R.string.settings_appearance),
                        style = MaterialTheme.typography.titleMedium,
                        modifier = Modifier.semantics { heading() }
                    )
                    Spacer(modifier = Modifier.height(8.dp))

                    Text(
                        stringResource(R.string.settings_appearance_desc),
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )

                    Spacer(modifier = Modifier.height(16.dp))

                    // High Contrast Mode Toggle
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Column(modifier = Modifier.weight(1f)) {
                            Text(
                                stringResource(R.string.settings_high_contrast),
                                style = MaterialTheme.typography.titleMedium
                            )
                            Spacer(modifier = Modifier.height(4.dp))
                            Text(
                                stringResource(R.string.settings_high_contrast_desc),
                                style = MaterialTheme.typography.bodySmall,
                                color = MaterialTheme.colorScheme.onSurfaceVariant
                            )
                        }
                        Switch(
                            checked = userPreferences?.highContrastMode ?: false,
                            onCheckedChange = { enabled ->
                                scope.launch {
                                    userPreferencesRepository.updateHighContrastMode(enabled)
                                }
                            },
                            modifier = Modifier.semantics {
                                role = Role.Switch
                                stateDescription = if (userPreferences?.highContrastMode == true)
                                    "High contrast mode enabled" else "High contrast mode disabled"
                            }
                        )
                    }
                }
            }

            Spacer(modifier = Modifier.height(16.dp))

            // Privacy Settings Section
            Card(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 16.dp)
            ) {
                Column(modifier = Modifier.padding(16.dp)) {
                    Text(stringResource(R.string.settings_privacy_data), style = MaterialTheme.typography.titleMedium)
                    Spacer(modifier = Modifier.height(8.dp))

                    Text(
                        stringResource(R.string.settings_privacy_data_desc),
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )

                    Spacer(modifier = Modifier.height(12.dp))

                    OutlinedButton(
                        onClick = onNavigateToPrivacySettings,
                        modifier = Modifier.fillMaxWidth()
                    ) {
                        Icon(Icons.Default.PrivacyTip, contentDescription = null)
                        Spacer(Modifier.width(8.dp))
                        Text(stringResource(R.string.settings_manage_privacy))
                    }

                    Spacer(modifier = Modifier.height(8.dp))

                    OutlinedButton(
                        onClick = {
                            // Open privacy policy in browser
                            val intent = Intent(Intent.ACTION_VIEW, Uri.parse("https://embit.eco/privacy"))
                            context.startActivity(intent)
                        },
                        modifier = Modifier.fillMaxWidth()
                    ) {
                        Icon(Icons.Default.Policy, contentDescription = null)
                        Spacer(Modifier.width(8.dp))
                        Text(stringResource(R.string.settings_privacy_policy))
                    }
                }
            }

            Spacer(modifier = Modifier.height(16.dp))

            // About Section
            Card(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 16.dp)
                    .padding(bottom = 16.dp)
            ) {
                Column(modifier = Modifier.padding(16.dp)) {
                    Text(stringResource(R.string.settings_about), style = MaterialTheme.typography.titleMedium)
                    Spacer(modifier = Modifier.height(8.dp))
                    Text(stringResource(R.string.settings_about_version))
                    Text(stringResource(R.string.settings_about_stack))
                }
            }
        }

        // Energy Product Selector Dialog
        if (showEnergyProductSelector) {
            AlertDialog(
                onDismissRequest = { showEnergyProductSelector = false },
                title = { Text(stringResource(R.string.settings_select_energy_product)) },
                text = {
                    Column(modifier = Modifier.verticalScroll(rememberScrollState())) {
                        EnergyProducts.ALL_PRODUCTS.forEach { product ->
                            val isSelected = product.type == selectedEnergyProduct.type
                            OutlinedButton(
                                onClick = {
                                    selectedEnergyProduct = product
                                    scope.launch {
                                        setEnergyProductUseCase(product)
                                        // Log energy product selection
                                        analyticsManager?.logCustomEvent(
                                            eventName = "energy_product_selected",
                                            params = mapOf(
                                                "product_type" to product.type.name,
                                                "display_name" to product.displayName
                                            )
                                        )
                                    }
                                    showEnergyProductSelector = false
                                },
                                modifier = Modifier
                                    .fillMaxWidth()
                                    .padding(vertical = 4.dp),
                                colors = if (isSelected) {
                                    ButtonDefaults.outlinedButtonColors(
                                        containerColor = MaterialTheme.colorScheme.primaryContainer,
                                        contentColor = MaterialTheme.colorScheme.onPrimaryContainer
                                    )
                                } else {
                                    ButtonDefaults.outlinedButtonColors()
                                }
                            ) {
                                Column(
                                    modifier = Modifier.padding(vertical = 8.dp),
                                    horizontalAlignment = Alignment.Start
                                ) {
                                    Row(
                                        modifier = Modifier.fillMaxWidth(),
                                        horizontalArrangement = Arrangement.SpaceBetween,
                                        verticalAlignment = Alignment.CenterVertically
                                    ) {
                                        Text(
                                            text = product.displayName,
                                            style = MaterialTheme.typography.bodyLarge,
                                            fontWeight = if (isSelected) FontWeight.Bold else FontWeight.Normal
                                        )
                                        product.fixedRenewablePercentage?.let { percentage ->
                                            Text(
                                                text = "${percentage.toInt()}%",
                                                style = MaterialTheme.typography.labelMedium,
                                                color = MaterialTheme.colorScheme.primary,
                                                fontWeight = FontWeight.Bold
                                            )
                                        }
                                    }
                                    Spacer(modifier = Modifier.height(4.dp))
                                    Text(
                                        text = product.description,
                                        style = MaterialTheme.typography.bodySmall,
                                        color = MaterialTheme.colorScheme.onSurfaceVariant
                                    )
                                }
                            }
                        }
                    }
                },
                confirmButton = {
                    TextButton(onClick = { showEnergyProductSelector = false }) {
                        Text(stringResource(R.string.action_close))
                    }
                }
            )
        }

        // Clear All Data Confirmation Dialog
        if (showClearDialog) {
            AlertDialog(
                onDismissRequest = { showClearDialog = false },
                title = { Text(stringResource(R.string.dialog_clear_data_title)) },
                text = { Text(stringResource(R.string.dialog_clear_data_message)) },
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
                        Text(stringResource(R.string.action_delete))
                    }
                },
                dismissButton = {
                    TextButton(onClick = { showClearDialog = false }) {
                        Text(stringResource(R.string.action_cancel))
                    }
                }
            )
        }

        // Feedback Dialog
        if (showFeedbackDialog && authState is AuthState.Authenticated) {
            val userId = currentUser?.uid ?: ""
            // Get current battery status from real-time battery monitoring
            val batteryPercentage = currentBatteryReading?.batteryPercentage ?: 0
            val isCharging = currentBatteryReading?.isCharging ?: false

            FeedbackDialog(
                onDismiss = {
                    showFeedbackDialog = false
                    feedbackSubmitSuccess = false
                    feedbackSubmitError = null
                },
                onSubmit = { feedback ->
                    scope.launch {
                        feedbackRepository.submitFeedback(feedback)
                            .onSuccess { feedbackId ->
                                feedbackSubmitSuccess = true
                                feedbackSubmitError = null
                                showFeedbackDialog = false

                                // Log analytics event
                                analyticsManager?.logFeedbackSubmitted(
                                    feedbackType = feedback.type.name,
                                    rating = feedback.rating
                                )
                            }
                            .onFailure { error ->
                                feedbackSubmitError = error.message
                                feedbackSubmitSuccess = false
                            }
                    }
                },
                userId = userId,
                batteryPercentage = batteryPercentage,
                isCharging = isCharging
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

/**
 * Share exported battery data using Android share intent
 * @param context Android context for starting the intent
 * @param jsonData JSON string containing the exported data
 */
private fun shareExportedData(context: Context, jsonData: String) {
    try {
        // Create share intent with plain text
        val sendIntent = Intent().apply {
            action = Intent.ACTION_SEND
            type = "text/plain"
            putExtra(Intent.EXTRA_TEXT, jsonData)
            putExtra(Intent.EXTRA_SUBJECT, "Embit Battery Data Export")
            putExtra(Intent.EXTRA_TITLE, "Battery Data - ${DateFormat.getDateTimeInstance(DateFormat.SHORT, DateFormat.SHORT, Locale.getDefault()).format(Date())}")
        }

        // Create chooser to show all available apps
        val shareIntent = Intent.createChooser(sendIntent, context.getString(R.string.settings_share_data_via))

        // Start the share intent
        context.startActivity(shareIntent)
    } catch (e: Exception) {
        // Handle error silently - user will see no share dialog if this fails
        android.util.Log.e("SettingsScreen", "Failed to share data", e)
    }
}
