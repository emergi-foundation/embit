package eco.emergi.embit.android.ui.screens

import androidx.compose.foundation.layout.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import eco.emergi.embit.android.migration.DataMigrationManager
import eco.emergi.embit.android.migration.MigrationResult
import kotlinx.coroutines.launch

/**
 * Screen for migrating data from old Room database to new SQLDelight database
 */
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun MigrationScreen(
    migrationManager: DataMigrationManager,
    onMigrationComplete: () -> Unit,
    onSkipMigration: () -> Unit
) {
    val context = LocalContext.current
    val scope = rememberCoroutineScope()

    var migrationState by remember { mutableStateOf<MigrationState>(MigrationState.Idle) }
    var migrationResult by remember { mutableStateOf<MigrationResult?>(null) }

    // Check if migration is already done
    LaunchedEffect(Unit) {
        if (migrationManager.isMigrationCompleted(context)) {
            val stats = migrationManager.getMigrationStats(context)
            migrationState = MigrationState.Completed
            migrationResult = stats?.let { MigrationResult.AlreadyMigrated(it) }
        }
    }

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("Data Migration") }
            )
        }
    ) { paddingValues ->
        Box(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
                .padding(24.dp),
            contentAlignment = Alignment.Center
        ) {
            when (migrationState) {
                MigrationState.Idle -> {
                    IdleContent(
                        onStartMigration = {
                            scope.launch {
                                migrationState = MigrationState.InProgress
                                val result = migrationManager.migrate(context)
                                migrationResult = result
                                migrationState = when (result) {
                                    is MigrationResult.Success -> MigrationState.Completed
                                    is MigrationResult.AlreadyMigrated -> MigrationState.Completed
                                    is MigrationResult.NoDataToMigrate -> MigrationState.Completed
                                    is MigrationResult.Failed -> MigrationState.Failed
                                }
                            }
                        },
                        onSkip = onSkipMigration
                    )
                }

                MigrationState.InProgress -> {
                    InProgressContent()
                }

                MigrationState.Completed -> {
                    CompletedContent(
                        result = migrationResult,
                        onContinue = onMigrationComplete
                    )
                }

                MigrationState.Failed -> {
                    FailedContent(
                        result = migrationResult as? MigrationResult.Failed,
                        onRetry = {
                            migrationState = MigrationState.Idle
                        },
                        onSkip = onSkipMigration
                    )
                }
            }
        }
    }
}

@Composable
private fun IdleContent(
    onStartMigration: () -> Unit,
    onSkip: () -> Unit
) {
    Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(24.dp)
    ) {
        Icon(
            imageVector = Icons.Default.CloudSync,
            contentDescription = null,
            modifier = Modifier.size(80.dp),
            tint = MaterialTheme.colorScheme.primary
        )

        Text(
            text = "Migrate Your Data",
            style = MaterialTheme.typography.headlineMedium,
            fontWeight = FontWeight.Bold,
            textAlign = TextAlign.Center
        )

        Text(
            text = "We found data from the previous version of Embit. " +
                    "Would you like to import your battery history to the new version?",
            style = MaterialTheme.typography.bodyLarge,
            textAlign = TextAlign.Center,
            color = MaterialTheme.colorScheme.onSurfaceVariant
        )

        Spacer(modifier = Modifier.height(8.dp))

        Card(
            colors = CardDefaults.cardColors(
                containerColor = MaterialTheme.colorScheme.surfaceVariant
            )
        ) {
            Column(
                modifier = Modifier.padding(16.dp),
                verticalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Icon(
                        Icons.Default.Check,
                        contentDescription = null,
                        modifier = Modifier.size(20.dp),
                        tint = MaterialTheme.colorScheme.primary
                    )
                    Spacer(modifier = Modifier.width(8.dp))
                    Text("Preserves historical battery data")
                }
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Icon(
                        Icons.Default.Check,
                        contentDescription = null,
                        modifier = Modifier.size(20.dp),
                        tint = MaterialTheme.colorScheme.primary
                    )
                    Spacer(modifier = Modifier.width(8.dp))
                    Text("Maintains statistics and trends")
                }
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Icon(
                        Icons.Default.Check,
                        contentDescription = null,
                        modifier = Modifier.size(20.dp),
                        tint = MaterialTheme.colorScheme.primary
                    )
                    Spacer(modifier = Modifier.width(8.dp))
                    Text("One-time process")
                }
            }
        }

        Spacer(modifier = Modifier.height(8.dp))

        Button(
            onClick = onStartMigration,
            modifier = Modifier
                .fillMaxWidth()
                .height(56.dp)
        ) {
            Icon(Icons.Default.CloudUpload, contentDescription = null)
            Spacer(modifier = Modifier.width(8.dp))
            Text("Start Migration", style = MaterialTheme.typography.titleMedium)
        }

        OutlinedButton(
            onClick = onSkip,
            modifier = Modifier.fillMaxWidth()
        ) {
            Text("Skip - Start Fresh")
        }
    }
}

@Composable
private fun InProgressContent() {
    Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(24.dp)
    ) {
        CircularProgressIndicator(
            modifier = Modifier.size(80.dp),
            strokeWidth = 6.dp
        )

        Text(
            text = "Migrating Your Data",
            style = MaterialTheme.typography.headlineMedium,
            fontWeight = FontWeight.Bold
        )

        Text(
            text = "Please wait while we transfer your battery history to the new database...",
            style = MaterialTheme.typography.bodyLarge,
            textAlign = TextAlign.Center,
            color = MaterialTheme.colorScheme.onSurfaceVariant
        )
    }
}

@Composable
private fun CompletedContent(
    result: MigrationResult?,
    onContinue: () -> Unit
) {
    Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(24.dp)
    ) {
        Icon(
            imageVector = Icons.Default.CheckCircle,
            contentDescription = null,
            modifier = Modifier.size(80.dp),
            tint = MaterialTheme.colorScheme.primary
        )

        Text(
            text = "Migration Complete!",
            style = MaterialTheme.typography.headlineMedium,
            fontWeight = FontWeight.Bold,
            color = MaterialTheme.colorScheme.primary
        )

        when (result) {
            is MigrationResult.Success -> {
                Text(
                    text = "Successfully migrated ${result.recordsMigrated} battery readings.",
                    style = MaterialTheme.typography.bodyLarge,
                    textAlign = TextAlign.Center
                )

                if (result.warnings.isNotEmpty()) {
                    Card(
                        colors = CardDefaults.cardColors(
                            containerColor = MaterialTheme.colorScheme.errorContainer
                        )
                    ) {
                        Column(modifier = Modifier.padding(16.dp)) {
                            Text(
                                text = "Warnings:",
                                fontWeight = FontWeight.Bold,
                                color = MaterialTheme.colorScheme.onErrorContainer
                            )
                            Spacer(modifier = Modifier.height(8.dp))
                            result.warnings.take(3).forEach { warning ->
                                Text(
                                    text = "• $warning",
                                    style = MaterialTheme.typography.bodySmall,
                                    color = MaterialTheme.colorScheme.onErrorContainer
                                )
                            }
                            if (result.warnings.size > 3) {
                                Text(
                                    text = "...and ${result.warnings.size - 3} more",
                                    style = MaterialTheme.typography.bodySmall,
                                    color = MaterialTheme.colorScheme.onErrorContainer
                                )
                            }
                        }
                    }
                }
            }

            is MigrationResult.NoDataToMigrate -> {
                Text(
                    text = "No previous data found to migrate.",
                    style = MaterialTheme.typography.bodyLarge,
                    textAlign = TextAlign.Center
                )
            }

            is MigrationResult.AlreadyMigrated -> {
                Text(
                    text = "Your data was already migrated.\n${result.stats.recordsMigrated} records.",
                    style = MaterialTheme.typography.bodyLarge,
                    textAlign = TextAlign.Center
                )
            }

            else -> {}
        }

        Spacer(modifier = Modifier.height(8.dp))

        Button(
            onClick = onContinue,
            modifier = Modifier
                .fillMaxWidth()
                .height(56.dp)
        ) {
            Text("Continue to App", style = MaterialTheme.typography.titleMedium)
        }
    }
}

@Composable
private fun FailedContent(
    result: MigrationResult.Failed?,
    onRetry: () -> Unit,
    onSkip: () -> Unit
) {
    Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(24.dp)
    ) {
        Icon(
            imageVector = Icons.Default.Error,
            contentDescription = null,
            modifier = Modifier.size(80.dp),
            tint = MaterialTheme.colorScheme.error
        )

        Text(
            text = "Migration Failed",
            style = MaterialTheme.typography.headlineMedium,
            fontWeight = FontWeight.Bold,
            color = MaterialTheme.colorScheme.error
        )

        Text(
            text = result?.error ?: "An unknown error occurred during migration.",
            style = MaterialTheme.typography.bodyLarge,
            textAlign = TextAlign.Center,
            color = MaterialTheme.colorScheme.onSurfaceVariant
        )

        Spacer(modifier = Modifier.height(8.dp))

        Button(
            onClick = onRetry,
            modifier = Modifier.fillMaxWidth()
        ) {
            Icon(Icons.Default.Refresh, contentDescription = null)
            Spacer(modifier = Modifier.width(8.dp))
            Text("Retry Migration")
        }

        OutlinedButton(
            onClick = onSkip,
            modifier = Modifier.fillMaxWidth()
        ) {
            Text("Skip - Continue Anyway")
        }
    }
}

private enum class MigrationState {
    Idle,
    InProgress,
    Completed,
    Failed
}
