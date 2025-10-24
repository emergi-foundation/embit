package eco.emergi.embit.android.ui.screens

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
import eco.emergi.embit.domain.usecases.ManageBatteryDataUseCase
import eco.emergi.embit.presentation.SettingsUiState
import eco.emergi.embit.presentation.SettingsViewModel
import kotlinx.coroutines.CoroutineScope
import org.koin.compose.koinInject

/**
 * Settings screen for app configuration and data management
 */
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun SettingsScreen() {
    val context = LocalContext.current
    val scope = rememberCoroutineScope()
    val manageDataUseCase: ManageBatteryDataUseCase = koinInject()

    val viewModel = remember(scope) {
        SettingsViewModel(
            manageBatteryDataUseCase = manageDataUseCase,
            viewModelScope = scope
        )
    }

    val uiState by viewModel.uiState.collectAsState()
    val databaseStats by viewModel.databaseStats.collectAsState()
    var showClearDialog by remember { mutableStateOf(false) }
    var isMonitoringEnabled by remember {
        mutableStateOf(BatteryWorkScheduler.isMonitoringScheduled(context))
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
