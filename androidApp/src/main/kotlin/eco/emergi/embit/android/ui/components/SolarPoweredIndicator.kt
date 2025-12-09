package eco.emergi.embit.android.ui.components

import androidx.compose.animation.animateColorAsState
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.WbSunny
import androidx.compose.material.icons.filled.NightsStay
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import eco.emergi.embit.android.ui.theme.ChargingGreen
import eco.emergi.embit.domain.models.GridStatus

/**
 * Persistent indicator showing solar/renewable energy status.
 * Displays prominently to show users their phone is powered by clean energy.
 */
@Composable
fun SolarPoweredIndicator(
    gridStatus: GridStatus?,
    modifier: Modifier = Modifier
) {
    if (gridStatus == null) {
        return
    }

    val renewablePercentage = gridStatus.carbonIntensity.renewablePercentage

    // Determine if this is "solar time" (high renewable energy)
    val isSolarPowered = renewablePercentage >= 50.0

    // Animated color transitions
    val backgroundColor by animateColorAsState(
        targetValue = when {
            renewablePercentage >= 70 -> ChargingGreen.copy(alpha = 0.15f)
            renewablePercentage >= 50 -> ChargingGreen.copy(alpha = 0.1f)
            renewablePercentage >= 30 -> Color(0xFFFFB74D).copy(alpha = 0.1f) // Amber
            else -> MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.5f)
        },
        animationSpec = tween(durationMillis = 800),
        label = "background_color"
    )

    val contentColor by animateColorAsState(
        targetValue = when {
            renewablePercentage >= 70 -> ChargingGreen
            renewablePercentage >= 50 -> ChargingGreen.copy(alpha = 0.9f)
            renewablePercentage >= 30 -> Color(0xFFFF9800) // Orange
            else -> MaterialTheme.colorScheme.onSurfaceVariant
        },
        animationSpec = tween(durationMillis = 800),
        label = "content_color"
    )

    Surface(
        modifier = modifier.fillMaxWidth(),
        color = backgroundColor,
        tonalElevation = if (isSolarPowered) 1.dp else 0.dp
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 16.dp, vertical = 8.dp),
            horizontalArrangement = Arrangement.Center,
            verticalAlignment = Alignment.CenterVertically
        ) {
            // Icon (sun for high renewable, moon for low)
            Icon(
                imageVector = if (isSolarPowered) Icons.Default.WbSunny else Icons.Default.NightsStay,
                contentDescription = null,
                tint = contentColor,
                modifier = Modifier.size(20.dp)
            )

            Spacer(modifier = Modifier.width(8.dp))

            // Main message
            Text(
                text = when {
                    renewablePercentage >= 70 -> "Solar Powered"
                    renewablePercentage >= 50 -> "Clean Energy"
                    renewablePercentage >= 30 -> "Mixed Energy"
                    else -> "Grid Power"
                },
                style = MaterialTheme.typography.bodyMedium,
                fontWeight = FontWeight.SemiBold,
                color = contentColor,
                fontSize = 14.sp
            )

            Spacer(modifier = Modifier.width(4.dp))

            // Percentage badge
            Surface(
                color = contentColor.copy(alpha = 0.15f),
                shape = MaterialTheme.shapes.small,
                modifier = Modifier.padding(start = 4.dp)
            ) {
                Text(
                    text = "${String.format("%.0f", renewablePercentage)}% renewable",
                    style = MaterialTheme.typography.labelSmall,
                    color = contentColor,
                    fontWeight = FontWeight.Bold,
                    modifier = Modifier.padding(horizontal = 8.dp, vertical = 2.dp)
                )
            }

            // Location indicator (if available)
            if (gridStatus.location.isNotBlank()) {
                Spacer(modifier = Modifier.width(6.dp))
                Text(
                    text = "• ${gridStatus.location}",
                    style = MaterialTheme.typography.labelSmall,
                    color = contentColor.copy(alpha = 0.7f)
                )
            }
        }
    }
}
