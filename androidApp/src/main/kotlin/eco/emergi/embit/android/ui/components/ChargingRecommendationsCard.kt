package eco.emergi.embit.android.ui.components

import androidx.compose.foundation.layout.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import eco.emergi.embit.domain.usecases.ChargingRecommendation
import eco.emergi.embit.domain.usecases.ChargingRecommendations
import eco.emergi.embit.domain.usecases.RecommendationPriority

/**
 * Card showing charging recommendations
 */
@Composable
fun ChargingRecommendationsCard(
    recommendations: ChargingRecommendations,
    modifier: Modifier = Modifier
) {
    if (recommendations.recommendations.isEmpty()) {
        return
    }

    Card(
        modifier = modifier.fillMaxWidth(),
        elevation = CardDefaults.cardElevation(defaultElevation = 2.dp),
        colors = if (recommendations.urgentCount > 0) {
            CardDefaults.cardColors(
                containerColor = MaterialTheme.colorScheme.errorContainer
            )
        } else {
            CardDefaults.cardColors()
        }
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
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                Text(
                    text = "Charging Tips",
                    style = MaterialTheme.typography.titleMedium,
                    fontWeight = FontWeight.Bold
                )

                if (recommendations.urgentCount > 0) {
                    Badge {
                        Text("${recommendations.urgentCount}")
                    }
                }
            }

            HorizontalDivider()

            // Show recommendations
            recommendations.recommendations.take(3).forEach { recommendation ->
                RecommendationItem(recommendation)
            }

            if (recommendations.recommendations.size > 3) {
                Text(
                    text = "+${recommendations.recommendations.size - 3} more recommendations",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }
        }
    }
}

@Composable
private fun RecommendationItem(recommendation: ChargingRecommendation) {
    Row(
        modifier = Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.spacedBy(12.dp)
    ) {
        // Priority icon
        Icon(
            imageVector = when (recommendation.priority) {
                RecommendationPriority.HIGH -> Icons.Default.Warning
                RecommendationPriority.MEDIUM -> Icons.Default.Info
                RecommendationPriority.LOW -> Icons.Default.Lightbulb
            },
            contentDescription = null,
            tint = when (recommendation.priority) {
                RecommendationPriority.HIGH -> MaterialTheme.colorScheme.error
                RecommendationPriority.MEDIUM -> MaterialTheme.colorScheme.tertiary
                RecommendationPriority.LOW -> MaterialTheme.colorScheme.primary
            },
            modifier = Modifier.size(20.dp)
        )

        Column(
            modifier = Modifier.weight(1f),
            verticalArrangement = Arrangement.spacedBy(4.dp)
        ) {
            Text(
                text = recommendation.action,
                style = MaterialTheme.typography.bodyMedium,
                fontWeight = FontWeight.SemiBold
            )
            Text(
                text = recommendation.reason,
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
            Text(
                text = "💡 ${recommendation.expectedImpact}",
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.primary
            )
        }
    }
}
