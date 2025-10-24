package eco.emergi.embit.android.ui.components

import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import eco.emergi.embit.domain.models.BatteryStatistics

/**
 * Card displaying battery statistics
 */
@Composable
fun StatisticsCard(
    statistics: BatteryStatistics,
    title: String = "Statistics",
    modifier: Modifier = Modifier
) {
    Card(
        modifier = modifier.fillMaxWidth(),
        elevation = CardDefaults.cardElevation(defaultElevation = 2.dp)
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            Text(
                text = title,
                style = MaterialTheme.typography.titleMedium,
                fontWeight = FontWeight.Bold
            )

            HorizontalDivider()

            // Statistics rows
            StatRow("Avg Power", String.format("%.1f mW", statistics.averagePowerMilliwatts))
            StatRow("Peak Power", String.format("%.1f mW", statistics.peakPowerMilliwatts))
            StatRow("Total Energy", String.format("%.2f Wh", statistics.totalEnergyWattHours))
            StatRow("Avg Battery %", "${statistics.averageBatteryPercentage}%")

            statistics.averageTemperature?.let { temp ->
                StatRow("Avg Temperature", String.format("%.1f °C", temp))
            }

            StatRow("Charging Time", formatDuration(statistics.chargingTimeSeconds))
            StatRow("Discharging Time", formatDuration(statistics.dischargingTimeSeconds))
            StatRow("Charge Count", statistics.chargeCount.toString())
        }
    }
}

@Composable
private fun StatRow(label: String, value: String) {
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

private fun formatDuration(seconds: Long): String {
    val hours = seconds / 3600
    val minutes = (seconds % 3600) / 60
    return if (hours > 0) {
        "${hours}h ${minutes}m"
    } else {
        "${minutes}m"
    }
}
