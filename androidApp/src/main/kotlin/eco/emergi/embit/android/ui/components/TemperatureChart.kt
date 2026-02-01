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
import com.patrykandpatrick.vico.compose.cartesian.layer.rememberLineCartesianLayer
import com.patrykandpatrick.vico.compose.cartesian.rememberCartesianChart
import com.patrykandpatrick.vico.core.cartesian.data.CartesianChartModelProducer
import com.patrykandpatrick.vico.core.cartesian.data.lineSeries
import eco.emergi.embit.android.R
import eco.emergi.embit.domain.models.BatteryReading
import java.text.SimpleDateFormat
import java.util.*

/**
 * Temperature Chart Component
 * Displays battery temperature over time using REAL data from database
 *
 * Features:
 * - Line chart showing temperature (°C)
 * - Color-coded zones:
 *   - Green: Safe (< 35°C)
 *   - Yellow: Warm (35-40°C)
 *   - Orange: Hot (40-45°C)
 *   - Red: Dangerous (> 45°C)
 * - Shows actual temperature readings from BatteryMonitorWorker
 * - Time-based X-axis, temperature Y-axis
 *
 * @param readings List of real battery readings from SQLDelight database
 * @param modifier Optional modifier
 */
@Composable
fun TemperatureChart(
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

    // Filter readings that have temperature data
    val readingsWithTemp = readings.filter { it.temperatureCelsius != null }

    if (readingsWithTemp.isEmpty()) {
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
                    text = "No temperature data available",
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
                text = "Battery Temperature Over Time",
                style = MaterialTheme.typography.titleMedium,
                color = MaterialTheme.colorScheme.onSurface
            )

            Spacer(modifier = Modifier.height(8.dp))

            // Temperature statistics
            val avgTemp = readingsWithTemp.mapNotNull { it.temperatureCelsius }.average()
            val minTemp = readingsWithTemp.minOf { it.temperatureCelsius!! }
            val maxTemp = readingsWithTemp.maxOf { it.temperatureCelsius!! }

            Text(
                text = "Avg: ${String.format("%.1f", avgTemp)}°C • Min: ${String.format("%.1f", minTemp)}°C • Max: ${String.format("%.1f", maxTemp)}°C",
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )

            Spacer(modifier = Modifier.height(16.dp))

            // Prepare chart data from REAL temperature readings
            val modelProducer = remember(readingsWithTemp) {
                CartesianChartModelProducer.build {
                    // Extract temperatures for Y-axis
                    val temperatures = readingsWithTemp.map { it.temperatureCelsius!!.toFloat() }

                    lineSeries {
                        series(temperatures)
                    }
                }
            }

            // Determine line color based on max temperature
            val lineColor = when {
                maxTemp >= 45f -> Color(0xFFF44336) // Red - Dangerous
                maxTemp >= 40f -> Color(0xFFFF9800) // Orange - Hot
                maxTemp >= 35f -> Color(0xFFFFC107) // Yellow - Warm
                else -> Color(0xFF4CAF50) // Green - Safe
            }

            // Create chart
            CartesianChartHost(
                chart = rememberCartesianChart(
                    rememberLineCartesianLayer(),
                    startAxis = rememberStartAxis(),
                    bottomAxis = rememberBottomAxis(
                        valueFormatter = { value, _, _ ->
                            // Format timestamp for X-axis
                            val index = value.toInt().coerceIn(0, readingsWithTemp.lastIndex)
                            val timestampMillis = readingsWithTemp[index].timestamp.toEpochMilliseconds()
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

            // Temperature zones legend
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceEvenly
            ) {
                // Safe zone
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
                        text = "Safe",
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                }

                // Warm zone
                Row(verticalAlignment = androidx.compose.ui.Alignment.CenterVertically) {
                    Box(
                        modifier = Modifier
                            .size(12.dp)
                            .background(
                                color = Color(0xFFFFC107),
                                shape = MaterialTheme.shapes.small
                            )
                    )
                    Spacer(modifier = Modifier.width(4.dp))
                    Text(
                        text = "Warm",
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                }

                // Hot zone
                Row(verticalAlignment = androidx.compose.ui.Alignment.CenterVertically) {
                    Box(
                        modifier = Modifier
                            .size(12.dp)
                            .background(
                                color = Color(0xFFFF9800),
                                shape = MaterialTheme.shapes.small
                            )
                    )
                    Spacer(modifier = Modifier.width(4.dp))
                    Text(
                        text = "Hot",
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                }

                // Danger zone
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
                        text = "Danger",
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                }
            }
        }
    }
}
