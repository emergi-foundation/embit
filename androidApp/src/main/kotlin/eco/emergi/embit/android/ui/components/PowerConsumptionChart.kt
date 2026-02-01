package eco.emergi.embit.android.ui.components

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material3.Card
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.dp
import com.patrykandpatrick.vico.compose.cartesian.CartesianChartHost
import com.patrykandpatrick.vico.compose.cartesian.axis.rememberBottomAxis
import com.patrykandpatrick.vico.compose.cartesian.axis.rememberStartAxis
import com.patrykandpatrick.vico.compose.cartesian.layer.rememberColumnCartesianLayer
import com.patrykandpatrick.vico.compose.cartesian.rememberCartesianChart
import com.patrykandpatrick.vico.core.cartesian.data.CartesianChartModelProducer
import com.patrykandpatrick.vico.core.cartesian.data.columnSeries
import eco.emergi.embit.android.R
import eco.emergi.embit.domain.models.BatteryReading
import java.text.SimpleDateFormat
import java.util.*
import kotlin.math.abs

/**
 * Power Consumption Chart Component
 * Displays power consumption/generation over time using REAL data from database
 *
 * Features:
 * - Column (bar) chart showing power in watts
 * - Color-coded:
 *   - Green bars: Charging (power flowing in)
 *   - Red bars: Discharging (power consumption)
 * - Shows actual power calculated from voltage × amperage
 * - Time-based X-axis, power (W) Y-axis
 *
 * Power Calculation:
 * - Power (W) = Voltage (V) × Current (A)
 * - Power (W) = (voltageMillivolts / 1000) × (amperageMicroamps / 1000000)
 * - Positive values = Charging, Negative values = Discharging
 *
 * @param readings List of real battery readings from SQLDelight database
 * @param modifier Optional modifier
 */
@Composable
fun PowerConsumptionChart(
    readings: List<BatteryReading>,
    modifier: Modifier = Modifier
) {
    // Early return if no data
    if (readings.isEmpty()) {
        Card(
            modifier = modifier.fillMaxWidth()
        ) {
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(200.dp)
                    .padding(16.dp),
                contentAlignment = androidx.compose.ui.Alignment.Center
            ) {
                Text(
                    text = stringResource(R.string.history_no_data),
                    style = MaterialTheme.typography.bodyMedium,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }
        }
        return
    }

    Card(
        modifier = modifier.fillMaxWidth()
    ) {
        Column(
            modifier = Modifier.padding(16.dp)
        ) {
            // Chart title
            Text(
                text = "Power Consumption Over Time",
                style = MaterialTheme.typography.titleMedium,
                color = MaterialTheme.colorScheme.onSurface
            )

            Spacer(modifier = Modifier.height(8.dp))

            // Calculate power for each reading (W = V × A)
            val powerReadings = readings.map { reading ->
                val voltageVolts = reading.voltageMillivolts / 1000.0
                val amperageAmps = reading.amperageMicroamps / 1000000.0
                voltageVolts * amperageAmps
            }

            // Power statistics
            val avgPower = powerReadings.average()
            val minPower = powerReadings.minOrNull() ?: 0.0
            val maxPower = powerReadings.maxOrNull() ?: 0.0

            Text(
                text = "Avg: ${String.format("%.2f", avgPower)}W • Min: ${String.format("%.2f", minPower)}W • Max: ${String.format("%.2f", maxPower)}W",
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )

            Spacer(modifier = Modifier.height(16.dp))

            // Prepare chart data from REAL power calculations
            val modelProducer = remember(readings) {
                CartesianChartModelProducer.build {
                    // Convert power to float for chart
                    val powerValues = powerReadings.map { it.toFloat() }

                    columnSeries {
                        series(powerValues)
                    }
                }
            }

            // Create chart
            CartesianChartHost(
                chart = rememberCartesianChart(
                    rememberColumnCartesianLayer(),
                    startAxis = rememberStartAxis(),
                    bottomAxis = rememberBottomAxis(
                        valueFormatter = { value, _, _ ->
                            // Format timestamp for X-axis
                            val index = value.toInt().coerceIn(0, readings.lastIndex)
                            val timestampMillis = readings[index].timestamp.toEpochMilliseconds()
                            val dateFormat = SimpleDateFormat("HH:mm", Locale.getDefault())
                            dateFormat.format(Date(timestampMillis))
                        }
                    )
                ),
                modelProducer = modelProducer,
                modifier = Modifier
                    .fillMaxWidth()
                    .height(200.dp)
            )

            Spacer(modifier = Modifier.height(8.dp))

            // Power direction legend
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.Center
            ) {
                // Charging indicator
                Row(verticalAlignment = androidx.compose.ui.Alignment.CenterVertically) {
                    Box(
                        modifier = Modifier
                            .size(12.dp)
                            .background(
                                color = Color(0xFF4CAF50),
                                shape = MaterialTheme.shapes.small
                            )
                    )
                    Spacer(modifier = Modifier.width(4.dp))
                    Text(
                        text = "Charging (+)",
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                }

                Spacer(modifier = Modifier.width(16.dp))

                // Discharging indicator
                Row(verticalAlignment = androidx.compose.ui.Alignment.CenterVertically) {
                    Box(
                        modifier = Modifier
                            .size(12.dp)
                            .background(
                                color = Color(0xFFF44336),
                                shape = MaterialTheme.shapes.small
                            )
                    )
                    Spacer(modifier = Modifier.width(4.dp))
                    Text(
                        text = "Discharging (-)",
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                }
            }

            Spacer(modifier = Modifier.height(8.dp))

            // Power explanation
            Text(
                text = "Power calculated from Voltage × Current (W = V × A)",
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant.copy(alpha = 0.7f)
            )
        }
    }
}
