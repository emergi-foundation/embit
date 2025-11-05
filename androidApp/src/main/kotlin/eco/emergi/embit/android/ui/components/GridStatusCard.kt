package eco.emergi.embit.android.ui.components

import androidx.compose.foundation.layout.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import eco.emergi.embit.android.ui.theme.ChargingGreen
import eco.emergi.embit.domain.models.GridStatus
import eco.emergi.embit.domain.models.GridStressLevel
import eco.emergi.embit.domain.models.PricingTier
import eco.emergi.embit.domain.models.CarbonLevel
import eco.emergi.embit.domain.models.ChargingRecommendation

/**
 * Card showing grid status and smart charging recommendations
 */
@Composable
fun GridStatusCard(
    gridStatus: GridStatus?,
    chargingRecommendation: ChargingRecommendation?,
    modifier: Modifier = Modifier
) {
    if (gridStatus == null) {
        return
    }

    Card(
        modifier = modifier.fillMaxWidth(),
        elevation = CardDefaults.cardElevation(defaultElevation = 2.dp),
        colors = CardDefaults.cardColors(
            containerColor = when {
                chargingRecommendation?.shouldCharge == true &&
                gridStatus.carbonIntensity.renewablePercentage > 60 ->
                    ChargingGreen.copy(alpha = 0.1f)
                gridStatus.stressLevel == GridStressLevel.HIGH ||
                gridStatus.stressLevel == GridStressLevel.CRITICAL ->
                    MaterialTheme.colorScheme.errorContainer.copy(alpha = 0.3f)
                else -> MaterialTheme.colorScheme.surfaceVariant
            }
        )
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
                Row(
                    horizontalArrangement = Arrangement.spacedBy(8.dp),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Icon(
                        imageVector = Icons.Default.ElectricBolt,
                        contentDescription = null,
                        tint = MaterialTheme.colorScheme.primary,
                        modifier = Modifier.size(24.dp)
                    )
                    Text(
                        text = "Grid Status",
                        style = MaterialTheme.typography.titleMedium,
                        fontWeight = FontWeight.Bold
                    )
                }

                // Grid stress badge
                Badge(
                    containerColor = getStressLevelColor(gridStatus.stressLevel)
                ) {
                    Text(
                        text = gridStatus.stressLevel.name,
                        style = MaterialTheme.typography.labelSmall
                    )
                }
            }

            HorizontalDivider()

            // Charging Recommendation
            chargingRecommendation?.let { recommendation ->
                RecommendationSection(recommendation)
                HorizontalDivider()
            }

            // Grid Details
            GridDetailsSection(gridStatus)
        }
    }
}

@Composable
private fun RecommendationSection(recommendation: ChargingRecommendation) {
    Row(
        modifier = Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.spacedBy(12.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Icon(
            imageVector = if (recommendation.shouldCharge) Icons.Default.BatteryChargingFull else Icons.Default.BatteryAlert,
            contentDescription = null,
            tint = if (recommendation.shouldCharge) ChargingGreen else MaterialTheme.colorScheme.error,
            modifier = Modifier.size(32.dp)
        )

        Column(
            modifier = Modifier.weight(1f),
            verticalArrangement = Arrangement.spacedBy(4.dp)
        ) {
            Text(
                text = if (recommendation.shouldCharge) "Good Time to Charge" else "Wait to Charge",
                style = MaterialTheme.typography.titleSmall,
                fontWeight = FontWeight.Bold,
                color = if (recommendation.shouldCharge) ChargingGreen else MaterialTheme.colorScheme.error
            )
            Text(
                text = recommendation.reason,
                style = MaterialTheme.typography.bodyMedium,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )

            // Show savings estimate if available
            recommendation.savingsEstimate?.let { savings ->
                Text(
                    text = "💰 Save ~${String.format("%.1f", savings)}¢",
                    style = MaterialTheme.typography.bodySmall,
                    color = ChargingGreen,
                    fontWeight = FontWeight.SemiBold
                )
            }

            // Show carbon savings if available
            recommendation.carbonSavingsEstimate?.let { carbonSavings ->
                Text(
                    text = "🌱 Save ~${String.format("%.0f", carbonSavings)}g CO₂",
                    style = MaterialTheme.typography.bodySmall,
                    color = ChargingGreen,
                    fontWeight = FontWeight.SemiBold
                )
            }
        }
    }
}

@Composable
private fun GridDetailsSection(gridStatus: GridStatus) {
    Column(
        verticalArrangement = Arrangement.spacedBy(8.dp)
    ) {
        // Renewable Energy
        GridDetailRow(
            icon = Icons.Default.Eco,
            label = "Renewable Energy",
            value = "${String.format("%.0f", gridStatus.carbonIntensity.renewablePercentage)}%",
            color = if (gridStatus.carbonIntensity.renewablePercentage > 50) ChargingGreen else MaterialTheme.colorScheme.onSurface
        )

        // Carbon Intensity
        GridDetailRow(
            icon = Icons.Default.Cloud,
            label = "Carbon Intensity",
            value = "${String.format("%.0f", gridStatus.carbonIntensity.gramsPerKwh)}g/kWh",
            color = getCarbonLevelColor(gridStatus.carbonIntensity.level)
        )

        // Pricing
        GridDetailRow(
            icon = Icons.Default.MonetizationOn,
            label = "Pricing",
            value = "${gridStatus.pricing.pricingTier.name} • ${String.format("%.1f", gridStatus.pricing.pricePerKwh)}¢/kWh",
            color = getPricingColor(gridStatus.pricing.pricingTier)
        )

        // Location
        if (gridStatus.location.isNotBlank()) {
            GridDetailRow(
                icon = Icons.Default.LocationOn,
                label = "Location",
                value = gridStatus.location,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
        }
    }
}

@Composable
private fun GridDetailRow(
    icon: androidx.compose.ui.graphics.vector.ImageVector,
    label: String,
    value: String,
    color: Color
) {
    Row(
        modifier = Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.spacedBy(12.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Icon(
            imageVector = icon,
            contentDescription = null,
            tint = color,
            modifier = Modifier.size(20.dp)
        )

        Text(
            text = label,
            style = MaterialTheme.typography.bodyMedium,
            color = MaterialTheme.colorScheme.onSurfaceVariant,
            modifier = Modifier.weight(0.5f)
        )

        Text(
            text = value,
            style = MaterialTheme.typography.bodyMedium,
            fontWeight = FontWeight.SemiBold,
            color = color,
            modifier = Modifier.weight(0.5f)
        )
    }
}

@Composable
private fun getStressLevelColor(level: GridStressLevel): Color {
    return when (level) {
        GridStressLevel.LOW -> ChargingGreen
        GridStressLevel.NORMAL -> MaterialTheme.colorScheme.primary
        GridStressLevel.MODERATE -> MaterialTheme.colorScheme.tertiary
        GridStressLevel.HIGH -> Color(0xFFFF9800) // Orange
        GridStressLevel.CRITICAL -> MaterialTheme.colorScheme.error
    }
}

@Composable
private fun getCarbonLevelColor(level: CarbonLevel): Color {
    return when (level) {
        CarbonLevel.VERY_LOW, CarbonLevel.LOW -> ChargingGreen
        CarbonLevel.MODERATE -> MaterialTheme.colorScheme.tertiary
        CarbonLevel.HIGH, CarbonLevel.VERY_HIGH -> MaterialTheme.colorScheme.error
    }
}

@Composable
private fun getPricingColor(tier: PricingTier): Color {
    return when (tier) {
        PricingTier.OFF_PEAK -> ChargingGreen
        PricingTier.MID_PEAK -> MaterialTheme.colorScheme.tertiary
        PricingTier.ON_PEAK -> MaterialTheme.colorScheme.error
    }
}
