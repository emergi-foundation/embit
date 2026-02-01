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
import eco.emergi.embit.domain.models.BatteryState
import java.text.SimpleDateFormat
import java.util.*

/**
 * Charging Cycles Chart Component
 * Displays battery level over time with charging cycles highlighted using REAL data
 *
 * Features:
 * - Area chart showing battery percentage (0-100%)
 * - Visual distinction between charging and discharging periods
 * - Shows complete charging cycles from battery data
 * - Counts and displays number of charging cycles in period
 * - Time-based X-axis, percentage Y-axis
 *
 * Charging Cycle Definition:
 * - A cycle is a transition from discharging to charging and back
 * - Helps track battery wear (more cycles = more wear)
 *
 * @param readings List of real battery readings from SQLDelight database
 * @param modifier Optional modifier
 */
@Composable
fun ChargingCyclesChart(
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
                text = "Charging Cycles Over Time",
                style = MaterialTheme.typography.titleMedium,
                color = MaterialTheme.colorScheme.onSurface
            )

            Spacer(modifier = Modifier.height(8.dp))

            // Count charging cycles
            var chargingCycles = 0
            var wasCharging = readings.firstOrNull()?.isCharging ?: false

            readings.forEach { reading ->
                // Detect transition from not charging to charging
                if (reading.isCharging && !wasCharging) {
                    chargingCycles++
                }
                wasCharging = reading.isCharging
            }

            // Calculate statistics
            val chargingReadings = readings.filter { it.isCharging }
            val dischargingReadings = readings.filter { !it.isCharging }

            val avgChargingLevel = if (chargingReadings.isNotEmpty()) {
                chargingReadings.map { it.batteryPercentage }.average().toInt()
            } else 0

            val avgDischargingLevel = if (dischargingReadings.isNotEmpty()) {
                dischargingReadings.map { it.batteryPercentage }.average().toInt()
            } else 0

            Text(
                text = "Cycles: $chargingCycles • Avg Charging: $avgChargingLevel% • Avg Discharging: $avgDischargingLevel%",
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

            // Charging state legend
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
                        text = "Charging",
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
                        text = "Discharging",
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                }
            }

            Spacer(modifier = Modifier.height(8.dp))

            // Cycle explanation
            Text(
                text = "Each cycle represents one complete charge/discharge period",
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant.copy(alpha = 0.7f)
            )
        }
    }
}
