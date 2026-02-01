package eco.emergi.embit.android.ui.components

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material3.Card
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.patrykandpatrick.vico.compose.cartesian.CartesianChartHost
import com.patrykandpatrick.vico.compose.cartesian.axis.rememberBottomAxis
import com.patrykandpatrick.vico.compose.cartesian.axis.rememberStartAxis
import com.patrykandpatrick.vico.compose.cartesian.layer.rememberLineCartesianLayer
import com.patrykandpatrick.vico.core.cartesian.layer.LineCartesianLayer
import com.patrykandpatrick.vico.compose.cartesian.rememberCartesianChart
import com.patrykandpatrick.vico.compose.common.component.rememberShapeComponent
import com.patrykandpatrick.vico.compose.common.component.rememberTextComponent
import com.patrykandpatrick.vico.compose.common.of
import com.patrykandpatrick.vico.core.cartesian.data.CartesianChartModelProducer
import com.patrykandpatrick.vico.core.cartesian.data.lineSeries
import com.patrykandpatrick.vico.core.common.shape.Shape
import eco.emergi.embit.android.R
import eco.emergi.embit.domain.models.BatteryReading
import eco.emergi.embit.domain.models.BatteryState
import java.text.SimpleDateFormat
import java.util.*

/**
 * Battery Level Chart Component
 * Displays battery percentage over time using REAL data from database
 *
 * Features:
 * - Line chart showing battery level (0-100%)
 * - Color-coded: Green when charging, Red when discharging
 * - Shows actual readings from BatteryMonitorWorker
 * - Time-based X-axis, percentage Y-axis
 *
 * @param readings List of real battery readings from SQLDelight database
 * @param modifier Optional modifier
 */
@Composable
fun BatteryLevelChart(
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
                text = "Battery Level Over Time",
                style = MaterialTheme.typography.titleMedium,
                color = MaterialTheme.colorScheme.onSurface
            )

            Spacer(modifier = Modifier.height(8.dp))

            // Data summary
            val avgLevel = readings.map { it.batteryPercentage }.average().toInt()
            val minLevel = readings.minOf { it.batteryPercentage }
            val maxLevel = readings.maxOf { it.batteryPercentage }

            Text(
                text = "Avg: $avgLevel% • Min: $minLevel% • Max: $maxLevel%",
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )

            Spacer(modifier = Modifier.height(16.dp))

            // Prepare chart data from REAL battery readings
            val modelProducer = remember(readings) {
                CartesianChartModelProducer.build {
                    // Extract battery percentages for Y-axis
                    val percentages = readings.map { it.batteryPercentage.toFloat() }

                    lineSeries {
                        series(percentages)
                    }
                }
            }

            // Chart colors based on charging state
            val lineColor = if (readings.lastOrNull()?.isCharging == true) {
                Color(0xFF4CAF50) // Green when charging
            } else {
                Color(0xFFF44336) // Red when discharging
            }

            // Create chart
            CartesianChartHost(
                chart = rememberCartesianChart(
                    rememberLineCartesianLayer(),
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

            // Legend
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.Center
            ) {
                // Charging indicator
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
                    text = "Charging",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )

                Spacer(modifier = Modifier.width(16.dp))

                // Discharging indicator
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
                    text = "Discharging",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }
        }
    }
}
