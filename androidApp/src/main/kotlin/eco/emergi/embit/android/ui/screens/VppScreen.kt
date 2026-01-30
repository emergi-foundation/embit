package eco.emergi.embit.android.ui.screens

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import eco.emergi.embit.android.analytics.RemoteConfigManager
import eco.emergi.embit.domain.models.*
import eco.emergi.embit.domain.repositories.IVppRepository
import eco.emergi.embit.domain.repositories.VppStats
import eco.emergi.embit.domain.usecases.vpp.ParticipateInDREventUseCase
import eco.emergi.embit.domain.vpp.VppControlExecutor
import eco.emergi.embit.presentation.VppViewModel
import org.koin.compose.koinInject
import java.text.SimpleDateFormat
import java.util.*
import kotlin.math.roundToInt

/**
 * Virtual Power Plant / Demand Response screen
 * Shows user participation status, active events, and performance history
 */
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun VppScreen(
    remoteConfigManager: RemoteConfigManager? = null
) {
    // Check if VPP feature is enabled via Remote Config
    val isVppEnabled = remoteConfigManager?.isVppEnabled() ?: true

    if (!isVppEnabled) {
        // Show feature disabled screen
        VppDisabledScreen()
        return
    }

    val scope = rememberCoroutineScope()

    // Get dependencies from Koin
    val repository: IVppRepository = koinInject()
    val participateUseCase: ParticipateInDREventUseCase = koinInject()
    val vppExecutor: VppControlExecutor = koinInject()

    // Create ViewModel
    val viewModel = remember(scope) {
        VppViewModel(
            repository = repository,
            participateUseCase = participateUseCase,
            vppExecutor = vppExecutor,
            viewModelScope = scope
        )
    }

    val uiState by viewModel.uiState.collectAsState()
    val performanceHistory by viewModel.performanceHistory.collectAsState()
    val pastEvents by viewModel.pastEvents.collectAsState()

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("Grid Participation") },
                actions = {
                    IconButton(onClick = { viewModel.refresh() }) {
                        Icon(Icons.Default.Refresh, contentDescription = "Refresh")
                    }
                }
            )
        }
    ) { paddingValues ->
        Box(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
        ) {
            if (uiState.isLoading) {
                LoadingContent()
            } else {
                VppContent(
                    uiState = uiState,
                    performanceHistory = performanceHistory,
                    onEnableParticipation = { viewModel.enableParticipation() },
                    onDisableParticipation = { viewModel.disableParticipation() },
                    onClearError = { viewModel.clearError() }
                )
            }
        }
    }
}

@Composable
private fun VppContent(
    uiState: VppViewModel.VppUiState,
    performanceHistory: List<EventPerformance>,
    onEnableParticipation: () -> Unit,
    onDisableParticipation: () -> Unit,
    onClearError: () -> Unit
) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .verticalScroll(rememberScrollState())
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        // Error message (if any)
        uiState.error?.let { error ->
            ErrorCard(error = error, onDismiss = onClearError)
        }

        // Participation toggle card
        ParticipationToggleCard(
            isEnabled = uiState.isEnabled,
            onToggle = { enabled ->
                if (enabled) onEnableParticipation() else onDisableParticipation()
            }
        )

        // Active event card (if any)
        uiState.activeEvent?.let { event ->
            ActiveEventCard(
                event = event,
                currentReduction = uiState.currentReduction,
                isParticipating = uiState.isParticipating
            )
        }

        // Stats summary card
        uiState.totalStats?.let { stats ->
            StatsCard(stats = stats)
        }

        // Performance history
        if (performanceHistory.isNotEmpty()) {
            Text(
                text = "Performance History",
                style = MaterialTheme.typography.titleLarge,
                modifier = Modifier.padding(top = 8.dp)
            )

            performanceHistory.forEach { performance ->
                PerformanceHistoryItem(performance = performance)
            }
        } else {
            EmptyHistoryCard()
        }
    }
}

@Composable
private fun ParticipationToggleCard(
    isEnabled: Boolean,
    onToggle: (Boolean) -> Unit
) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardDefaults.cardColors(
            containerColor = if (isEnabled)
                MaterialTheme.colorScheme.primaryContainer
            else
                MaterialTheme.colorScheme.surfaceVariant
        )
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            Column(modifier = Modifier.weight(1f)) {
                Text(
                    text = "Grid Participation",
                    style = MaterialTheme.typography.titleMedium
                )
                Text(
                    text = if (isEnabled)
                        "Your device helps balance the grid during high demand"
                    else
                        "Enable to participate in demand response events",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }
            Switch(
                checked = isEnabled,
                onCheckedChange = onToggle
            )
        }
    }
}

@Composable
private fun ActiveEventCard(
    event: DemandResponseEvent,
    currentReduction: Double,
    isParticipating: Boolean
) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardDefaults.cardColors(
            containerColor = when (event.priority) {
                EventPriority.CRITICAL -> MaterialTheme.colorScheme.errorContainer
                EventPriority.HIGH -> MaterialTheme.colorScheme.tertiaryContainer
                else -> MaterialTheme.colorScheme.secondaryContainer
            }
        )
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            Row(
                verticalAlignment = Alignment.CenterVertically,
                modifier = Modifier.fillMaxWidth()
            ) {
                Icon(
                    Icons.Default.ElectricBolt,
                    contentDescription = null,
                    tint = MaterialTheme.colorScheme.primary
                )
                Spacer(Modifier.width(8.dp))
                Text(
                    "Active Grid Event",
                    style = MaterialTheme.typography.titleMedium
                )
                Spacer(Modifier.weight(1f))
                AssistChip(
                    onClick = { },
                    label = { Text(event.priority.name) },
                    colors = AssistChipDefaults.assistChipColors(
                        containerColor = when (event.priority) {
                            EventPriority.CRITICAL -> MaterialTheme.colorScheme.error
                            EventPriority.HIGH -> MaterialTheme.colorScheme.tertiary
                            else -> MaterialTheme.colorScheme.secondary
                        }
                    )
                )
            }

            Spacer(Modifier.height(8.dp))

            Text(
                text = event.message,
                style = MaterialTheme.typography.bodyMedium
            )

            if (isParticipating) {
                Spacer(Modifier.height(16.dp))

                Row(modifier = Modifier.fillMaxWidth()) {
                    Column(modifier = Modifier.weight(1f)) {
                        Text(
                            "Your Reduction",
                            style = MaterialTheme.typography.labelSmall,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                        Text(
                            "${currentReduction.roundToInt()}W",
                            style = MaterialTheme.typography.titleLarge,
                            color = MaterialTheme.colorScheme.primary
                        )
                    }

                    Column(modifier = Modifier.weight(1f)) {
                        Text(
                            "Target",
                            style = MaterialTheme.typography.labelSmall,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                        Text(
                            "${event.targetReductionWatts.roundToInt()}W",
                            style = MaterialTheme.typography.titleLarge
                        )
                    }
                }

                Spacer(Modifier.height(16.dp))

                LinearProgressIndicator(
                    progress = (currentReduction / event.targetReductionWatts).toFloat().coerceIn(0f, 1f),
                    modifier = Modifier.fillMaxWidth()
                )
            }

            Spacer(Modifier.height(12.dp))

            val remaining = event.endTime - System.currentTimeMillis()
            val remainingMinutes = (remaining / 60_000).toInt()
            Text(
                "Ends in $remainingMinutes minutes",
                style = MaterialTheme.typography.labelSmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
        }
    }
}

@Composable
private fun StatsCard(stats: VppStats) {
    Card(modifier = Modifier.fillMaxWidth()) {
        Column(modifier = Modifier.padding(16.dp)) {
            Text(
                "Your Impact",
                style = MaterialTheme.typography.titleMedium
            )

            Spacer(Modifier.height(16.dp))

            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                StatItem(
                    label = "Events",
                    value = "${stats.completedEvents}",
                    icon = Icons.Default.EventAvailable
                )
                StatItem(
                    label = "Energy Saved",
                    value = "${stats.totalEnergyReducedWh.roundToInt()} Wh",
                    icon = Icons.Default.BatteryChargingFull
                )
            }

            Spacer(Modifier.height(16.dp))

            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                StatItem(
                    label = "CO2 Prevented",
                    value = "${stats.totalCO2SavedGrams.roundToInt()}g",
                    icon = Icons.Default.Eco
                )
                StatItem(
                    label = "Avg Reduction",
                    value = "${stats.averageReductionWatts.roundToInt()}W",
                    icon = Icons.Default.TrendingDown
                )
            }
        }
    }
}

@Composable
private fun StatItem(
    label: String,
    value: String,
    icon: androidx.compose.ui.graphics.vector.ImageVector
) {
    Column {
        Row(verticalAlignment = Alignment.CenterVertically) {
            Icon(
                icon,
                contentDescription = null,
                modifier = Modifier.size(16.dp),
                tint = MaterialTheme.colorScheme.primary
            )
            Spacer(Modifier.width(4.dp))
            Text(
                label,
                style = MaterialTheme.typography.labelSmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
        }
        Text(
            value,
            style = MaterialTheme.typography.titleMedium,
            color = MaterialTheme.colorScheme.primary
        )
    }
}

@Composable
private fun PerformanceHistoryItem(performance: EventPerformance) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardDefaults.cardColors(
            containerColor = if (performance.completed)
                MaterialTheme.colorScheme.surfaceVariant
            else
                MaterialTheme.colorScheme.errorContainer.copy(alpha = 0.3f)
        )
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Icon(
                if (performance.completed) Icons.Default.CheckCircle else Icons.Default.Cancel,
                contentDescription = null,
                tint = if (performance.completed)
                    MaterialTheme.colorScheme.primary
                else
                    MaterialTheme.colorScheme.error
            )

            Spacer(Modifier.width(12.dp))

            Column(modifier = Modifier.weight(1f)) {
                Text(
                    "Grid Event",
                    style = MaterialTheme.typography.titleSmall
                )
                Text(
                    formatTimestamp(performance.startTime),
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
                if (performance.completed) {
                    Text(
                        "Duration: ${performance.durationMinutes} min",
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                }
            }

            if (performance.completed) {
                Column(horizontalAlignment = Alignment.End) {
                    Text(
                        "${performance.reductionWatts.roundToInt()}W",
                        style = MaterialTheme.typography.titleMedium,
                        color = MaterialTheme.colorScheme.primary
                    )
                    Text(
                        "${performance.energyReducedWh.roundToInt()} Wh saved",
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                }
            }
        }
    }
}

@Composable
private fun EmptyHistoryCard() {
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.surfaceVariant
        )
    ) {
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .padding(32.dp),
            contentAlignment = Alignment.Center
        ) {
            Column(
                horizontalAlignment = Alignment.CenterHorizontally,
                verticalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                Icon(
                    Icons.Default.History,
                    contentDescription = null,
                    modifier = Modifier.size(48.dp),
                    tint = MaterialTheme.colorScheme.onSurfaceVariant
                )
                Text(
                    "No events yet",
                    style = MaterialTheme.typography.titleMedium,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
                Text(
                    "Enable participation to join demand response events",
                    style = MaterialTheme.typography.bodySmall,
                    textAlign = TextAlign.Center,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }
        }
    }
}

@Composable
private fun ErrorCard(error: String, onDismiss: () -> Unit) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.errorContainer
        )
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Icon(
                Icons.Default.Error,
                contentDescription = null,
                tint = MaterialTheme.colorScheme.error
            )
            Spacer(Modifier.width(12.dp))
            Text(
                error,
                modifier = Modifier.weight(1f),
                style = MaterialTheme.typography.bodyMedium,
                color = MaterialTheme.colorScheme.onErrorContainer
            )
            IconButton(onClick = onDismiss) {
                Icon(
                    Icons.Default.Close,
                    contentDescription = "Dismiss",
                    tint = MaterialTheme.colorScheme.onErrorContainer
                )
            }
        }
    }
}

@Composable
private fun LoadingContent() {
    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {
        CircularProgressIndicator()
    }
}

private fun formatTimestamp(timestamp: Long): String {
    val format = SimpleDateFormat("MMM dd, h:mm a", Locale.getDefault())
    return format.format(Date(timestamp))
}

@Composable
private fun VppDisabledScreen() {
    Surface(
        modifier = Modifier.fillMaxSize(),
        color = MaterialTheme.colorScheme.background
    ) {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(24.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            Icon(
                imageVector = Icons.Default.ElectricBolt,
                contentDescription = null,
                modifier = Modifier.size(96.dp),
                tint = MaterialTheme.colorScheme.onSurfaceVariant
            )

            Spacer(modifier = Modifier.height(24.dp))

            Text(
                text = "Feature Temporarily Unavailable",
                style = MaterialTheme.typography.headlineMedium,
                fontWeight = androidx.compose.ui.text.font.FontWeight.Bold,
                textAlign = TextAlign.Center
            )

            Spacer(modifier = Modifier.height(16.dp))

            Text(
                text = "Grid participation features are currently disabled. This may be due to system maintenance or regional availability.",
                style = MaterialTheme.typography.bodyLarge,
                color = MaterialTheme.colorScheme.onSurfaceVariant,
                textAlign = TextAlign.Center
            )

            Spacer(modifier = Modifier.height(32.dp))

            Text(
                text = "Check back later or contact support if you believe this is an error.",
                style = MaterialTheme.typography.bodyMedium,
                color = MaterialTheme.colorScheme.onSurfaceVariant,
                textAlign = TextAlign.Center
            )
        }
    }
}

@Composable
private fun remember(
    scope: kotlinx.coroutines.CoroutineScope,
    calculation: () -> VppViewModel
): VppViewModel {
    return androidx.compose.runtime.remember(scope) { calculation() }
}
