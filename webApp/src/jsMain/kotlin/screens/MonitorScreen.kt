import androidx.compose.runtime.*
import eco.emergi.embit.domain.models.BatteryReading
import eco.emergi.embit.domain.models.BatteryState
import eco.emergi.embit.domain.repositories.IBatteryMonitorService
import eco.emergi.embit.domain.usecases.MonitorBatteryUseCase
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*
import org.jetbrains.compose.web.css.*
import org.jetbrains.compose.web.dom.*
import org.koin.core.component.KoinComponent
import org.koin.core.component.inject

/**
 * Battery monitoring screen - displays real-time battery information
 */
@Composable
fun MonitorScreen() {
    val presenter = remember { MonitorPresenter() }
    val state by presenter.state.collectAsState()

    LaunchedEffect(Unit) {
        presenter.startMonitoring()
    }

    DisposableEffect(Unit) {
        onDispose {
            presenter.stopMonitoring()
        }
    }

    Div(attrs = { classes(MonitorStyles.container) }) {
        H2(attrs = { classes(MonitorStyles.title) }) {
            Text("Battery Monitor")
        }

        when {
            state.error != null -> {
                ErrorCard(state.error!!)
            }
            state.batteryReading == null -> {
                LoadingCard()
            }
            else -> {
                BatteryCard(state.batteryReading!!)
            }
        }

        // Instructions
        if (state.batteryReading == null && state.error == null) {
            InstructionsCard()
        }
    }
}

@Composable
fun BatteryCard(reading: BatteryReading) {
    Div(attrs = { classes(MonitorStyles.card, MonitorStyles.batteryCard) }) {
        // Battery Icon
        Div(attrs = { classes(MonitorStyles.batteryIcon) }) {
            BatteryIcon(reading.batteryPercentage, reading.batteryState)
        }

        // Battery Level
        Div(attrs = { classes(MonitorStyles.batteryLevel) }) {
            H3(attrs = { classes(MonitorStyles.levelNumber) }) {
                Text("${reading.batteryPercentage}%")
            }
            P(attrs = { classes(MonitorStyles.levelLabel) }) {
                Text(getBatteryStateText(reading.batteryState))
            }
        }

        // Details Grid
        Div(attrs = { classes(MonitorStyles.detailsGrid) }) {
            DetailItem("Voltage", "${reading.voltageMillivolts / 1000.0} V")
            DetailItem("Current", "${reading.amperageMicroamps / 1000000.0} A")
            reading.temperatureCelsius?.let {
                DetailItem("Temperature", "$it °C")
            }
        }
    }
}

@Composable
fun BatteryIcon(percentage: Int, state: BatteryState) {
    val batteryColor = when {
        percentage >= 80 -> "rgb(76, 175, 80)"
        percentage >= 50 -> "rgb(255, 193, 7)"
        percentage >= 20 -> "rgb(255, 152, 0)"
        else -> "rgb(244, 67, 54)"
    }

    Div(attrs = {
        style {
            fontSize(4.cssRem)
            color(Color(batteryColor))
        }
    }) {
        Text(
            when (state) {
                BatteryState.Charging -> "🔋⚡"
                BatteryState.Full -> "🔋✓"
                BatteryState.Discharging -> "🔋"
                else -> "🔋"
            }
        )
    }
}

@Composable
fun DetailItem(label: String, value: String) {
    Div(attrs = { classes(MonitorStyles.detailItem) }) {
        P(attrs = { classes(MonitorStyles.detailLabel) }) {
            Text(label)
        }
        P(attrs = { classes(MonitorStyles.detailValue) }) {
            Text(value)
        }
    }
}

@Composable
fun LoadingCard() {
    Div(attrs = { classes(MonitorStyles.card, MonitorStyles.loadingCard) }) {
        Div(attrs = { classes(MonitorStyles.spinner) })
        P(attrs = { classes(MonitorStyles.loadingText) }) {
            Text("Initializing battery monitoring...")
        }
    }
}

@Composable
fun ErrorCard(error: String) {
    Div(attrs = { classes(MonitorStyles.card, MonitorStyles.errorCard) }) {
        Div(attrs = { classes(MonitorStyles.errorIcon) }) {
            Text("⚠️")
        }
        H3(attrs = { classes(MonitorStyles.errorTitle) }) {
            Text("Error")
        }
        P(attrs = { classes(MonitorStyles.errorMessage) }) {
            Text(error)
        }
    }
}

@Composable
fun InstructionsCard() {
    Div(attrs = { classes(MonitorStyles.card, MonitorStyles.instructionsCard) }) {
        H3(attrs = { classes(MonitorStyles.instructionsTitle) }) {
            Text("How to Use")
        }
        Ul(attrs = { classes(MonitorStyles.instructionsList) }) {
            Li { Text("The Battery Status API provides basic battery information") }
            Li { Text("Monitoring updates every 30 seconds") }
            Li { Text("Temperature data may not be available on all browsers") }
            Li { Text("This works best on laptops and mobile devices") }
        }
    }
}

/**
 * Presenter for MonitorScreen
 */
class MonitorPresenter : KoinComponent {
    private val monitorUseCase: MonitorBatteryUseCase by inject()

    private val _state = MutableStateFlow(MonitorState())
    val state: StateFlow<MonitorState> = _state

    private var monitoringJob: Job? = null

    fun startMonitoring() {
        monitoringJob = CoroutineScope(Dispatchers.Default).launch {
            monitorUseCase()
                .catch { e ->
                    _state.value = MonitorState(error = e.message ?: "Unknown error occurred")
                }
                .collect { reading ->
                    _state.value = MonitorState(batteryReading = reading)
                }
        }
    }

    fun stopMonitoring() {
        monitoringJob?.cancel()
    }
}

data class MonitorState(
    val batteryReading: BatteryReading? = null,
    val error: String? = null
)

/**
 * Convert BatteryState to display text
 */
private fun getBatteryStateText(state: BatteryState): String {
    return when (state) {
        is BatteryState.Charging -> "Charging"
        BatteryState.Discharging -> "Discharging"
        BatteryState.Full -> "Full"
        BatteryState.NotCharging -> "Not Charging"
        BatteryState.Unknown -> "Unknown"
    }
}

/**
 * Styles for MonitorScreen
 */
object MonitorStyles : StyleSheet() {
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

    val card by style {
        backgroundColor(Color.white)
        borderRadius(12.px)
        padding(2.cssRem)
        property("box-shadow", "0 2px 8px rgba(0,0,0,0.1)")
    }

    val batteryCard by style {
        display(DisplayStyle.Flex)
        flexDirection(FlexDirection.Column)
        alignItems(AlignItems.Center)
        gap(1.5.cssRem)
    }

    val batteryIcon by style {
        // Styles applied inline
    }

    val batteryLevel by style {
        textAlign("center")
    }

    val levelNumber by style {
        fontSize(3.cssRem)
        fontWeight(700)
        margin(0.px)
        color(rgb(27, 94, 32))
    }

    val levelLabel by style {
        fontSize(1.25.cssRem)
        color(rgb(100, 100, 100))
        margin(0.5.cssRem, 0.px, 0.px)
    }

    val detailsGrid by style {
        display(DisplayStyle.Grid)
        property("grid-template-columns", "repeat(auto-fit, minmax(150px, 1fr))")
        gap(1.cssRem)
        width(100.percent)
        marginTop(1.cssRem)
    }

    val detailItem by style {
        textAlign("center")
        padding(1.cssRem)
        backgroundColor(rgb(245, 245, 245))
        borderRadius(8.px)
    }

    val detailLabel by style {
        fontSize(0.875.cssRem)
        color(rgb(100, 100, 100))
        margin(0.px, 0.px, 0.5.cssRem)
    }

    val detailValue by style {
        fontSize(1.125.cssRem)
        fontWeight(600)
        color(rgb(33, 33, 33))
        margin(0.px)
    }

    val loadingCard by style {
        display(DisplayStyle.Flex)
        flexDirection(FlexDirection.Column)
        alignItems(AlignItems.Center)
        gap(1.cssRem)
        padding(3.cssRem)
    }

    val spinner by style {
        width(40.px)
        height(40.px)
        border(4.px, LineStyle.Solid, rgb(27, 94, 32))
        property("border-top-color", "transparent")
        borderRadius(50.percent)
        property("animation", "spin 1s linear infinite")
    }

    val loadingText by style {
        fontSize(1.cssRem)
        color(rgb(100, 100, 100))
        margin(0.px)
    }

    val errorCard by style {
        display(DisplayStyle.Flex)
        flexDirection(FlexDirection.Column)
        alignItems(AlignItems.Center)
        gap(1.cssRem)
        padding(3.cssRem)
        backgroundColor(rgb(255, 245, 245))
    }

    val errorIcon by style {
        fontSize(3.cssRem)
    }

    val errorTitle by style {
        fontSize(1.5.cssRem)
        fontWeight(600)
        color(rgb(198, 40, 40))
        margin(0.px)
    }

    val errorMessage by style {
        fontSize(1.cssRem)
        color(rgb(100, 100, 100))
        textAlign("center")
        margin(0.px)
    }

    val instructionsCard by style {
        marginTop(1.cssRem)
        backgroundColor(rgb(232, 245, 233))
    }

    val instructionsTitle by style {
        fontSize(1.25.cssRem)
        fontWeight(600)
        color(rgb(27, 94, 32))
        margin(0.px, 0.px, 1.cssRem)
    }

    val instructionsList by style {
        margin(0.px)
        paddingLeft(1.5.cssRem)
        property("line-height", "1.8")
        color(rgb(60, 60, 60))
    }
}
