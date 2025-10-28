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
import eco.emergi.embit.domain.usecases.BatteryLifePrediction
import eco.emergi.embit.domain.usecases.ConfidenceLevel

/**
 * Card showing battery life prediction
 */
@Composable
fun BatteryLifePredictionCard(
    prediction: BatteryLifePrediction,
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
            // Header
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(
                    text = if (prediction.isCharging) "Time to Full Charge" else "Battery Life Remaining",
                    style = MaterialTheme.typography.titleMedium,
                    fontWeight = FontWeight.Bold
                )

                Icon(
                    imageVector = if (prediction.isCharging) Icons.Default.BatteryChargingFull else Icons.Default.BatteryFull,
                    contentDescription = null,
                    tint = MaterialTheme.colorScheme.primary
                )
            }

            // Time prediction
            Text(
                text = prediction.formattedTime,
                style = MaterialTheme.typography.displaySmall,
                fontWeight = FontWeight.Bold,
                color = MaterialTheme.colorScheme.primary
            )

            // Rate information
            val rateText = if (prediction.isCharging) {
                "+${String.format("%.1f", prediction.percentagePerHour)}% per hour"
            } else {
                "${String.format("%.1f", prediction.percentagePerHour)}% per hour"
            }
            Text(
                text = rateText,
                style = MaterialTheme.typography.bodyMedium,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )

            // Confidence indicator
            Row(
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(4.dp)
            ) {
                val confidenceIcon = when (prediction.confidenceLevel) {
                    ConfidenceLevel.HIGH -> Icons.Default.CheckCircle
                    ConfidenceLevel.MEDIUM -> Icons.Default.Info
                    ConfidenceLevel.LOW -> Icons.Default.Warning
                }

                Icon(
                    imageVector = confidenceIcon,
                    contentDescription = null,
                    modifier = Modifier.size(16.dp),
                    tint = when (prediction.confidenceLevel) {
                        ConfidenceLevel.HIGH -> MaterialTheme.colorScheme.primary
                        ConfidenceLevel.MEDIUM -> MaterialTheme.colorScheme.secondary
                        ConfidenceLevel.LOW -> MaterialTheme.colorScheme.tertiary
                    }
                )

                Text(
                    text = prediction.qualityMessage,
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }
        }
    }
}
