package eco.emergi.embit.android.ui.components

import androidx.compose.foundation.layout.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import eco.emergi.embit.android.ui.theme.ChargingGreen
import eco.emergi.embit.android.ui.theme.DischargingRed
import eco.emergi.embit.android.ui.theme.FullBatteryBlue
import eco.emergi.embit.domain.models.BatteryReading
import eco.emergi.embit.domain.models.BatteryState
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toLocalDateTime

/**
 * Card displaying current battery reading information
 */
@Composable
fun BatteryReadingCard(
    reading: BatteryReading,
    modifier: Modifier = Modifier
) {
    Card(
        modifier = modifier.fillMaxWidth(),
        elevation = CardDefaults.cardElevation(defaultElevation = 4.dp)
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(20.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            // Battery Status Header
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Column {
                    Text(
                        text = "Current Status",
                        style = MaterialTheme.typography.titleLarge,
                        fontWeight = FontWeight.Bold
                    )
                    Text(
                        text = getBatteryStateText(reading.batteryState),
                        style = MaterialTheme.typography.bodyMedium,
                        color = getBatteryStateColor(reading.batteryState)
                    )
                }

                // Battery Percentage
                Text(
                    text = "${reading.batteryPercentage}%",
                    style = MaterialTheme.typography.displayMedium,
                    fontWeight = FontWeight.Bold,
                    color = getBatteryStateColor(reading.batteryState)
                )
            }

            HorizontalDivider()

            // Metrics Grid
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceEvenly
            ) {
                MetricItem(
                    label = "Voltage",
                    value = String.format("%.2f V", reading.voltageVolts),
                    icon = Icons.Default.Bolt
                )

                MetricItem(
                    label = "Current",
                    value = String.format("%.0f mA", reading.amperageMilliamps),
                    icon = Icons.Default.Bolt
                )
            }

            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceEvenly
            ) {
                MetricItem(
                    label = "Power",
                    value = String.format("%.1f mW", reading.powerMilliwatts),
                    icon = Icons.Default.PowerSettingsNew
                )

                reading.temperatureCelsius?.let { temp ->
                    MetricItem(
                        label = "Temperature",
                        value = String.format("%.1f °C", temp),
                        icon = Icons.Default.Thermostat
                    )
                } ?: Box(modifier = Modifier.weight(1f))
            }

            // Timestamp
            Text(
                text = "Last updated: ${formatTimestamp(reading.timestamp)}",
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
        }
    }
}

@Composable
private fun RowScope.MetricItem(
    label: String,
    value: String,
    icon: androidx.compose.ui.graphics.vector.ImageVector
) {
    Column(
        modifier = Modifier.weight(1f),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(4.dp)
    ) {
        Icon(
            imageVector = icon,
            contentDescription = null,
            tint = MaterialTheme.colorScheme.primary,
            modifier = Modifier.size(24.dp)
        )
        Text(
            text = label,
            style = MaterialTheme.typography.labelSmall,
            color = MaterialTheme.colorScheme.onSurfaceVariant
        )
        Text(
            text = value,
            style = MaterialTheme.typography.titleMedium,
            fontWeight = FontWeight.SemiBold
        )
    }
}

private fun getBatteryStateText(state: BatteryState): String {
    return when (state) {
        is BatteryState.Charging -> "Charging (${state.chargingType.name})"
        BatteryState.Discharging -> "Discharging"
        BatteryState.Full -> "Full"
        BatteryState.NotCharging -> "Not Charging"
        BatteryState.Unknown -> "Unknown"
    }
}

@Composable
private fun getBatteryStateColor(state: BatteryState): androidx.compose.ui.graphics.Color {
    return when (state) {
        is BatteryState.Charging -> ChargingGreen
        BatteryState.Discharging -> DischargingRed
        BatteryState.Full -> FullBatteryBlue
        else -> MaterialTheme.colorScheme.onSurface
    }
}

private fun formatTimestamp(instant: kotlinx.datetime.Instant): String {
    val localDateTime = instant.toLocalDateTime(TimeZone.currentSystemDefault())
    return String.format(
        "%02d:%02d:%02d",
        localDateTime.hour,
        localDateTime.minute,
        localDateTime.second
    )
}
