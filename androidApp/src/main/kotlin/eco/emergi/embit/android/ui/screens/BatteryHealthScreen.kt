package eco.emergi.embit.android.ui.screens

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Refresh
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import eco.emergi.embit.android.ui.theme.*
import eco.emergi.embit.domain.models.HealthStatus
import eco.emergi.embit.domain.repositories.IBatteryRepository
import eco.emergi.embit.presentation.BatteryHealthUiState
import eco.emergi.embit.presentation.BatteryHealthViewModel
import kotlinx.coroutines.CoroutineScope
import org.koin.compose.koinInject

/**
 * Battery health screen showing health metrics and recommendations
 */
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun BatteryHealthScreen() {
    val scope = rememberCoroutineScope()
    val repository: IBatteryRepository = koinInject()

    val viewModel = remember(scope) {
        BatteryHealthViewModel(
            batteryRepository = repository,
            viewModelScope = scope
        )
    }

    val uiState by viewModel.uiState.collectAsState()

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("Battery Health") },
                actions = {
                    IconButton(onClick = { viewModel.refresh() }) {
                        Icon(Icons.Default.Refresh, contentDescription = "Refresh")
                    }
                }
            )
        }
    ) { paddingValues ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
                .padding(16.dp)
                .verticalScroll(rememberScrollState()),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            when (val state = uiState) {
                is BatteryHealthUiState.Loading -> {
                    Box(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(32.dp),
                        contentAlignment = Alignment.Center
                    ) {
                        CircularProgressIndicator()
                    }
                }
                is BatteryHealthUiState.Success -> {
                    HealthScoreCard(
                        healthPercentage = state.health.healthPercentage,
                        healthStatus = state.health.healthStatus
                    )

                    HealthDetailsCard(health = state.health)

                    RecommendationsCard(recommendations = state.recommendations)
                }
                is BatteryHealthUiState.Error -> {
                    Card(
                        modifier = Modifier.fillMaxWidth(),
                        colors = CardDefaults.cardColors(
                            containerColor = MaterialTheme.colorScheme.errorContainer
                        )
                    ) {
                        Text(
                            text = state.message,
                            modifier = Modifier.padding(16.dp),
                            color = MaterialTheme.colorScheme.onErrorContainer
                        )
                    }
                }
            }
        }
    }
}

@Composable
private fun HealthScoreCard(
    healthPercentage: Int,
    healthStatus: HealthStatus
) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardDefaults.cardColors(
            containerColor = getHealthColor(healthStatus).copy(alpha = 0.1f)
        )
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(24.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            Text(
                text = "Battery Health Score",
                style = MaterialTheme.typography.titleMedium
            )
            Text(
                text = "$healthPercentage",
                style = MaterialTheme.typography.displayLarge,
                fontWeight = FontWeight.Bold,
                color = getHealthColor(healthStatus)
            )
            Text(
                text = healthStatus.name,
                style = MaterialTheme.typography.titleMedium,
                color = getHealthColor(healthStatus)
            )
        }
    }
}

@Composable
private fun HealthDetailsCard(health: eco.emergi.embit.domain.models.BatteryHealth) {
    Card(modifier = Modifier.fillMaxWidth()) {
        Column(
            modifier = Modifier.padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            Text("Health Details", style = MaterialTheme.typography.titleMedium)
            HorizontalDivider()

            health.chargeCount?.let {
                DetailRow("Charge Cycles", it.toString())
            }

            health.averageTemperature?.let {
                DetailRow("Avg Temperature", String.format("%.1f °C", it))
            }

            health.estimatedCapacityMah?.let { estimated ->
                DetailRow("Estimated Capacity", "$estimated mAh")

                health.designCapacityMah?.let { design ->
                    DetailRow("Design Capacity", "$design mAh")

                    health.capacityDegradation?.let { degradation ->
                        DetailRow("Degradation", String.format("%.1f%%", degradation))
                    }
                }
            }
        }
    }
}

@Composable
private fun RecommendationsCard(recommendations: List<String>) {
    Card(modifier = Modifier.fillMaxWidth()) {
        Column(
            modifier = Modifier.padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            Text("Recommendations", style = MaterialTheme.typography.titleMedium)
            HorizontalDivider()

            recommendations.forEach { recommendation ->
                Text(
                    text = "• $recommendation",
                    style = MaterialTheme.typography.bodyMedium
                )
            }
        }
    }
}

@Composable
private fun DetailRow(label: String, value: String) {
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
            fontWeight = FontWeight.SemiBold
        )
    }
}

@Composable
private fun getHealthColor(status: HealthStatus): androidx.compose.ui.graphics.Color {
    return when (status) {
        HealthStatus.EXCELLENT, HealthStatus.GOOD -> HealthGood
        HealthStatus.FAIR -> HealthFair
        HealthStatus.POOR, HealthStatus.CRITICAL -> HealthPoor
        HealthStatus.UNKNOWN -> MaterialTheme.colorScheme.onSurface
    }
}

@Composable
private fun remember(scope: CoroutineScope, calculation: () -> BatteryHealthViewModel): BatteryHealthViewModel {
    return androidx.compose.runtime.remember(scope) { calculation() }
}
