import androidx.compose.runtime.*
import components.BatteryChart
import components.ChartDataset
import components.ChartStyles
import components.ChartType
import eco.emergi.embit.domain.models.TimePeriod
import eco.emergi.embit.domain.usecases.GetBatteryHistoryUseCase
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*
import kotlinx.datetime.Instant
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toLocalDateTime
import org.jetbrains.compose.web.css.*
import org.jetbrains.compose.web.dom.*
import org.koin.core.component.KoinComponent
import org.koin.core.component.inject

/**
 * History screen - displays battery data trends with charts
 */
@Composable
fun HistoryScreen() {
    val presenter = remember { HistoryPresenter() }
    val state by presenter.state.collectAsState()

    LaunchedEffect(Unit) {
        presenter.loadHistory(TimePeriod.DAY)
    }

    Div(attrs = { classes(HistoryStyles.container) }) {
        H2(attrs = { classes(HistoryStyles.title) }) {
            Text("Battery History")
        }

        // Time period selector
        TimePeriodSelector(
            selectedPeriod = state.selectedPeriod,
            onPeriodChanged = { period ->
                CoroutineScope(Dispatchers.Default).launch {
                    presenter.loadHistory(period)
                }
            }
        )

        when {
            state.isLoading -> HistoryLoadingSection()
            state.error != null -> HistoryErrorSection(state.error!!)
            state.chartData != null -> {
                val data = state.chartData!!

                // Battery Level Chart
                if (data.labels.isNotEmpty()) {
                    BatteryChart(
                        chartId = "batteryLevelChart",
                        chartType = ChartType.LINE,
                        labels = data.labels,
                        datasets = listOf(
                            ChartDataset(
                                label = "Battery Level (%)",
                                data = data.batteryLevels,
                                backgroundColor = "rgba(76, 175, 80, 0.1)",
                                borderColor = "rgb(76, 175, 80)",
                                borderWidth = 2,
                                fill = true
                            )
                        ),
                        title = "Battery Level Over Time"
                    )

                    // Voltage Chart
                    BatteryChart(
                        chartId = "voltageChart",
                        chartType = ChartType.LINE,
                        labels = data.labels,
                        datasets = listOf(
                            ChartDataset(
                                label = "Voltage (V)",
                                data = data.voltages,
                                backgroundColor = "rgba(33, 150, 243, 0.1)",
                                borderColor = "rgb(33, 150, 243)",
                                borderWidth = 2,
                                fill = true
                            )
                        ),
                        title = "Voltage Over Time"
                    )

                    // Temperature Chart (if available)
                    if (data.temperatures.any { it.toDouble() > 0 }) {
                        BatteryChart(
                            chartId = "temperatureChart",
                            chartType = ChartType.LINE,
                            labels = data.labels,
                            datasets = listOf(
                                ChartDataset(
                                    label = "Temperature (°C)",
                                    data = data.temperatures,
                                    backgroundColor = "rgba(255, 152, 0, 0.1)",
                                    borderColor = "rgb(255, 152, 0)",
                                    borderWidth = 2,
                                    fill = true
                                )
                            ),
                            title = "Temperature Over Time"
                        )
                    }

                    // Statistics Summary
                    StatisticsSummary(data)
                } else {
                    HistoryEmptyStateSection()
                }
            }
            else -> HistoryEmptyStateSection()
        }
    }
}

@Composable
fun TimePeriodSelector(
    selectedPeriod: TimePeriod,
    onPeriodChanged: (TimePeriod) -> Unit
) {
    Div(attrs = { classes(HistoryStyles.periodSelector) }) {
        TimePeriod.values().forEach { period ->
            Button(attrs = {
                classes(
                    HistoryStyles.periodButton,
                    if (selectedPeriod == period) HistoryStyles.periodButtonActive else ""
                )
                onClick { onPeriodChanged(period) }
            }) {
                Text(getPeriodLabel(period))
            }
        }
    }
}

@Composable
fun StatisticsSummary(data: ChartData) {
    Div(attrs = { classes(HistoryStyles.summaryCard) }) {
        H3(attrs = { classes(HistoryStyles.summaryTitle) }) {
            Text("Summary Statistics")
        }

        Div(attrs = { classes(HistoryStyles.summaryGrid) }) {
            SummaryItem("Data Points", "${data.labels.size}")
            SummaryItem("Avg Battery", "${data.batteryLevels.average().toInt()}%")
            SummaryItem("Avg Voltage", "${formatDecimal(data.voltages.average(), 2)} V")

            if (data.temperatures.any { it.toDouble() > 0 }) {
                val avgTemp = data.temperatures.filter { it.toDouble() > 0 }.average()
                SummaryItem("Avg Temp", "${formatDecimal(avgTemp, 1)} °C")
            }
        }
    }
}

@Composable
fun SummaryItem(label: String, value: String) {
    Div(attrs = { classes(HistoryStyles.summaryItem) }) {
        P(attrs = { classes(HistoryStyles.summaryLabel) }) {
            Text(label)
        }
        P(attrs = { classes(HistoryStyles.summaryValue) }) {
            Text(value)
        }
    }
}

@Composable
fun HistoryLoadingSection() {
    Div(attrs = { classes(ChartStyles.chartContainer) }) {
        Div(attrs = { style {
            display(DisplayStyle.Flex)
            flexDirection(FlexDirection.Column)
            alignItems(AlignItems.Center)
            gap(1.cssRem)
            padding(3.cssRem)
        }}) {
            P { Text("Loading history data...") }
        }
    }
}

@Composable
fun HistoryErrorSection(error: String) {
    Div(attrs = { classes(ChartStyles.chartContainer) }) {
        Div(attrs = { style {
            display(DisplayStyle.Flex)
            flexDirection(FlexDirection.Column)
            alignItems(AlignItems.Center)
            gap(1.cssRem)
            padding(3.cssRem)
            backgroundColor(rgb(255, 245, 245))
        }}) {
            H3 { Text("Error Loading History") }
            P { Text(error) }
        }
    }
}

@Composable
fun HistoryEmptyStateSection() {
    Div(attrs = { classes(ChartStyles.chartContainer) }) {
        Div(attrs = { style {
            display(DisplayStyle.Flex)
            flexDirection(FlexDirection.Column)
            alignItems(AlignItems.Center)
            gap(1.cssRem)
            padding(3.cssRem)
        }}) {
            H3 { Text("No History Data") }
            P { Text("Start monitoring your battery to see historical trends.") }
        }
    }
}

fun getPeriodLabel(period: TimePeriod): String {
    return when (period) {
        TimePeriod.HOUR -> "Last Hour"
        TimePeriod.DAY -> "Last 24 Hours"
        TimePeriod.WEEK -> "Last Week"
        TimePeriod.MONTH -> "Last Month"
        TimePeriod.YEAR -> "Last Year"
        TimePeriod.ALL_TIME -> "All Time"
        TimePeriod.CUSTOM -> "Custom"
    }
}

/**
 * Presenter for HistoryScreen
 */
class HistoryPresenter : KoinComponent {
    private val getBatteryHistoryUseCase: GetBatteryHistoryUseCase by inject()

    private val _state = MutableStateFlow(HistoryState())
    val state: StateFlow<HistoryState> = _state

    suspend fun loadHistory(period: TimePeriod) {
        _state.value = HistoryState(isLoading = true, selectedPeriod = period)

        try {
            val result = getBatteryHistoryUseCase(period)
            val readings = result.getOrNull() ?: emptyList()

            if (readings.isEmpty()) {
                _state.value = HistoryState(selectedPeriod = period)
                return
            }

            // Prepare chart data
            val labels = readings.map { reading ->
                formatTimestamp(reading.timestamp)
            }

            val batteryLevels = readings.map { it.batteryPercentage }
            val voltages = readings.map { it.voltageMillivolts / 1000.0 }
            val temperatures = readings.map { it.temperatureCelsius?.toDouble() ?: 0.0 }

            val chartData = ChartData(
                labels = labels,
                batteryLevels = batteryLevels,
                voltages = voltages,
                temperatures = temperatures
            )

            _state.value = HistoryState(
                chartData = chartData,
                selectedPeriod = period,
                isLoading = false
            )
        } catch (e: Exception) {
            _state.value = HistoryState(
                error = e.message ?: "Unknown error occurred",
                selectedPeriod = period,
                isLoading = false
            )
        }
    }

    private fun formatTimestamp(timestamp: Instant): String {
        val localDateTime = timestamp.toLocalDateTime(TimeZone.currentSystemDefault())
        return "${localDateTime.hour.toString().padStart(2, '0')}:${localDateTime.minute.toString().padStart(2, '0')}"
    }
}

data class HistoryState(
    val chartData: ChartData? = null,
    val selectedPeriod: TimePeriod = TimePeriod.DAY,
    val isLoading: Boolean = false,
    val error: String? = null
)

data class ChartData(
    val labels: List<String>,
    val batteryLevels: List<Int>,
    val voltages: List<Double>,
    val temperatures: List<Double>
)

/**
 * Styles for HistoryScreen
 */
object HistoryStyles : StyleSheet() {
    val container by style {
        display(DisplayStyle.Flex)
        flexDirection(FlexDirection.Column)
        gap(1.5.cssRem)
    }

    val title by style {
        fontSize(2.cssRem)
        fontWeight(600)
        color(rgb(33, 33, 33))
        margin(0.px, 0.px, 1.cssRem)
    }

    val periodSelector by style {
        display(DisplayStyle.Flex)
        gap(0.5.cssRem)
        flexWrap(FlexWrap.Wrap)
        marginBottom(1.cssRem)
    }

    val periodButton by style {
        padding(0.5.cssRem, 1.cssRem)
        fontSize(0.875.cssRem)
        fontWeight(500)
        borderRadius(8.px)
        border(1.px, LineStyle.Solid, rgb(27, 94, 32))
        backgroundColor(Color.white)
        color(rgb(27, 94, 32))
        cursor("pointer")
        property("transition", "all 0.2s")
    }

    val periodButtonActive by style {
        backgroundColor(rgb(27, 94, 32))
        color(Color.white)
    }

    val summaryCard by style {
        backgroundColor(Color.white)
        borderRadius(12.px)
        padding(2.cssRem)
        property("box-shadow", "0 2px 8px rgba(0,0,0,0.1)")
    }

    val summaryTitle by style {
        fontSize(1.5.cssRem)
        fontWeight(600)
        color(rgb(33, 33, 33))
        margin(0.px, 0.px, 1.5.cssRem)
    }

    val summaryGrid by style {
        display(DisplayStyle.Grid)
        property("grid-template-columns", "repeat(auto-fit, minmax(150px, 1fr))")
        gap(1.cssRem)
    }

    val summaryItem by style {
        textAlign("center")
        padding(1.cssRem)
        backgroundColor(rgb(245, 245, 245))
        borderRadius(8.px)
    }

    val summaryLabel by style {
        fontSize(0.875.cssRem)
        color(rgb(100, 100, 100))
        margin(0.px, 0.px, 0.5.cssRem)
    }

    val summaryValue by style {
        fontSize(1.5.cssRem)
        fontWeight(600)
        color(rgb(27, 94, 32))
        margin(0.px)
    }
}

private fun formatDecimal(value: Double, decimalPlaces: Int): String {
    val multiplier = when (decimalPlaces) {
        0 -> 1.0
        1 -> 10.0
        2 -> 100.0
        else -> 10.0
    }
    val rounded = kotlin.math.round(value * multiplier) / multiplier
    return when (decimalPlaces) {
        0 -> rounded.toInt().toString()
        else -> {
            val intPart = rounded.toInt()
            val fracPart = ((rounded - intPart) * multiplier).toInt()
            "$intPart.${fracPart.toString().padStart(decimalPlaces, '0')}"
        }
    }
}
