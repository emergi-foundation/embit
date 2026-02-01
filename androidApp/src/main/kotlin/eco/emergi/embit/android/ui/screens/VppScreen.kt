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
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.semantics.*
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import eco.emergi.embit.android.R
import eco.emergi.embit.android.analytics.RemoteConfigManager
import eco.emergi.embit.domain.models.*
import eco.emergi.embit.domain.repositories.IVppRepository
import eco.emergi.embit.domain.repositories.VppStats
import eco.emergi.embit.domain.usecases.vpp.ParticipateInDREventUseCase
import eco.emergi.embit.domain.vpp.VppControlExecutor
import eco.emergi.embit.presentation.VppViewModel
import org.koin.compose.koinInject
import java.text.DateFormat
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
                title = { Text(stringResource(R.string.vpp_grid_participation), modifier = Modifier.semantics { heading() }) },
                actions = {
                    IconButton(
                        onClick = { viewModel.refresh() },
                        modifier = Modifier.semantics {
                            role = Role.Button
                            contentDescription = "Refresh grid participation data"
                        }
                    ) {
                        Icon(Icons.Default.Refresh, contentDescription = stringResource(R.string.action_refresh))
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
                    text = stringResource(R.string.vpp_grid_participation),
                    style = MaterialTheme.typography.titleMedium,
                    modifier = Modifier.semantics { heading() }
                )
                Text(
                    text = if (isEnabled)
                        stringResource(R.string.vpp_participation_enabled_desc)
                    else
                        stringResource(R.string.vpp_participation_disabled_desc),
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }
            Switch(
                checked = isEnabled,
                onCheckedChange = onToggle,
                modifier = Modifier.semantics {
                    role = Role.Switch
                    stateDescription = if (isEnabled) "Grid participation enabled" else "Grid participation disabled"
                }
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
                    stringResource(R.string.vpp_active_grid_event),
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
                            stringResource(R.string.vpp_your_reduction),
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
                            stringResource(R.string.vpp_target),
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
                stringResource(R.string.vpp_ends_in, remainingMinutes),
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
                stringResource(R.string.vpp_your_impact),
                style = MaterialTheme.typography.titleMedium
            )

            Spacer(Modifier.height(16.dp))

            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                StatItem(
                    label = stringResource(R.string.vpp_events),
                    value = "${stats.completedEvents}",
                    icon = Icons.Default.EventAvailable
                )
                StatItem(
                    label = stringResource(R.string.vpp_energy_saved),
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
                    label = stringResource(R.string.vpp_co2_prevented),
                    value = "${stats.totalCO2SavedGrams.roundToInt()}g",
                    icon = Icons.Default.Eco
                )
                StatItem(
                    label = stringResource(R.string.vpp_avg_reduction),
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
                    stringResource(R.string.vpp_grid_event),
                    style = MaterialTheme.typography.titleSmall
                )
                Text(
                    formatTimestamp(performance.startTime),
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
                if (performance.completed) {
                    Text(
                        stringResource(R.string.vpp_duration, performance.durationMinutes),
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
                        stringResource(R.string.vpp_wh_saved, performance.energyReducedWh.roundToInt()),
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
                    stringResource(R.string.vpp_no_events),
                    style = MaterialTheme.typography.titleMedium,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
                Text(
                    stringResource(R.string.vpp_enable_participation_prompt),
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
        CircularProgressIndicator(
            modifier = Modifier.semantics {
                liveRegion = LiveRegionMode.Polite
                contentDescription = "Loading virtual power plant data"
            }
        )
    }
}

private fun formatTimestamp(timestamp: Long): String {
    val format = DateFormat.getDateTimeInstance(DateFormat.MEDIUM, DateFormat.SHORT, Locale.getDefault())
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
                text = stringResource(R.string.vpp_feature_unavailable),
                style = MaterialTheme.typography.headlineMedium,
                fontWeight = androidx.compose.ui.text.font.FontWeight.Bold,
                textAlign = TextAlign.Center
            )

            Spacer(modifier = Modifier.height(16.dp))

            Text(
                text = stringResource(R.string.vpp_feature_unavailable_desc),
                style = MaterialTheme.typography.bodyLarge,
                color = MaterialTheme.colorScheme.onSurfaceVariant,
                textAlign = TextAlign.Center
            )

            Spacer(modifier = Modifier.height(32.dp))

            Text(
                text = stringResource(R.string.vpp_check_back),
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
