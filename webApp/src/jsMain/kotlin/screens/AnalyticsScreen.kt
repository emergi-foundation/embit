import androidx.compose.runtime.*
import eco.emergi.embit.domain.models.BatteryStatistics
import eco.emergi.embit.domain.models.TimePeriod
import eco.emergi.embit.domain.usecases.AnalyzeBatteryHealthUseCase
import eco.emergi.embit.domain.usecases.BatteryHealthAnalysis
import eco.emergi.embit.domain.usecases.CalculateBatteryStatisticsUseCase
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*
import org.jetbrains.compose.web.css.*
import org.jetbrains.compose.web.dom.*
import org.koin.core.component.KoinComponent
import org.koin.core.component.inject

/**
 * Analytics screen - displays battery health analysis and statistics
 */
@Composable
fun AnalyticsScreen() {
    val presenter = remember { AnalyticsPresenter() }
    val state by presenter.state.collectAsState()

    LaunchedEffect(Unit) {
        presenter.loadAnalytics()
    }

    Div(attrs = { classes(AnalyticsStyles.container) }) {
        H2(attrs = { classes(AnalyticsStyles.title) }) {
            Text("Battery Analytics")
        }

        when {
            state.isLoading -> LoadingSection()
            state.error != null -> ErrorSection(state.error!!)
            state.analysis != null -> {
                // Health Score
                HealthScoreCard(state.analysis!!)

                // Statistics
                state.statistics?.let { stats ->
                    StatisticsCard(stats)
                }

                // Recommendations
                RecommendationsCard(state.analysis!!.recommendations)
            }
            else -> EmptyStateSection()
        }
    }
}

@Composable
fun HealthScoreCard(analysis: BatteryHealthAnalysis) {
    Div(attrs = { classes(AnalyticsStyles.card, AnalyticsStyles.healthCard) }) {
        H3(attrs = { classes(AnalyticsStyles.cardTitle) }) {
            Text("Battery Health Score")
        }

        Div(attrs = { classes(AnalyticsStyles.scoreContainer) }) {
            // Score circle
            Div(attrs = { classes(AnalyticsStyles.scoreCircle) }) {
                Span(attrs = { classes(AnalyticsStyles.scoreNumber) }) {
                    Text("${analysis.overallScore}")
                }
                Span(attrs = { classes(AnalyticsStyles.scoreLabel) }) {
                    Text("/ 100")
                }
            }

            // Score interpretation
            Div(attrs = { classes(AnalyticsStyles.scoreInterpretation) }) {
                val (label, color) = getHealthLabel(analysis.overallScore)
                P(attrs = {
                    classes(AnalyticsStyles.healthLabel)
                    style { color(Color(color)) }
                }) {
                    Text(label)
                }
                P(attrs = { classes(AnalyticsStyles.healthDescription) }) {
                    Text(getHealthDescription(analysis.overallScore))
                }
            }
        }

        // Factors
        Div(attrs = { classes(AnalyticsStyles.factorsContainer) }) {
            H4(attrs = { classes(AnalyticsStyles.factorsTitle) }) {
                Text("Health Factors")
            }
            Ul(attrs = { classes(AnalyticsStyles.factorsList) }) {
                Li { Text("Charging Cycles: Impact assessed") }
                Li { Text("Temperature: Evaluated") }
                Li { Text("Usage Patterns: Analyzed") }
                Li { Text("Discharge Rate: Monitored") }
            }
        }
    }
}

@Composable
fun StatisticsCard(stats: BatteryStatistics) {
    Div(attrs = { classes(AnalyticsStyles.card) }) {
        H3(attrs = { classes(AnalyticsStyles.cardTitle) }) {
            Text("Usage Statistics")
        }

        Div(attrs = { classes(AnalyticsStyles.statsGrid) }) {
            StatItem("Average Charge", "${stats.averageBatteryPercentage}%")
            StatItem("Avg Temperature", "${stats.averageTemperature ?: 0f}°C")
            StatItem("Avg Power", "${formatDecimal(stats.averagePowerWatts, 2)} W")
            StatItem("Charging Cycles", "${stats.chargeCount}")
            StatItem("Total Energy", "${formatDecimal(stats.totalEnergyWattHours, 2)} Wh")
            StatItem("Time Range", "${((stats.periodEnd.toEpochMilliseconds() - stats.periodStart.toEpochMilliseconds()) / 3600000)}h")
        }
    }
}

@Composable
fun RecommendationsCard(recommendations: List<String>) {
    Div(attrs = { classes(AnalyticsStyles.card, AnalyticsStyles.recommendationsCard) }) {
        H3(attrs = { classes(AnalyticsStyles.cardTitle) }) {
            Text("Recommendations")
        }

        if (recommendations.isEmpty()) {
            P(attrs = { classes(AnalyticsStyles.emptyText) }) {
                Text("No recommendations at this time. Your battery is in good condition!")
            }
        } else {
            Ul(attrs = { classes(AnalyticsStyles.recommendationsList) }) {
                recommendations.forEach { recommendation ->
                    Li(attrs = { classes(AnalyticsStyles.recommendationItem) }) {
                        Span(attrs = { classes(AnalyticsStyles.recommendationIcon) }) {
                            Text("💡")
                        }
                        Span { Text(recommendation) }
                    }
                }
            }
        }
    }
}

@Composable
fun StatItem(label: String, value: String) {
    Div(attrs = { classes(AnalyticsStyles.statItem) }) {
        P(attrs = { classes(AnalyticsStyles.statLabel) }) {
            Text(label)
        }
        P(attrs = { classes(AnalyticsStyles.statValue) }) {
            Text(value)
        }
    }
}

@Composable
fun LoadingSection() {
    Div(attrs = { classes(AnalyticsStyles.card, AnalyticsStyles.centerCard) }) {
        Div(attrs = { classes(AnalyticsStyles.spinner) })
        P { Text("Loading analytics...") }
    }
}

@Composable
fun ErrorSection(error: String) {
    Div(attrs = { classes(AnalyticsStyles.card, AnalyticsStyles.errorCard) }) {
        Div(attrs = { classes(AnalyticsStyles.errorIcon) }) {
            Text("⚠️")
        }
        H3 { Text("Error Loading Analytics") }
        P { Text(error) }
    }
}

@Composable
fun EmptyStateSection() {
    Div(attrs = { classes(AnalyticsStyles.card, AnalyticsStyles.centerCard) }) {
        Div(attrs = { classes(AnalyticsStyles.emptyIcon) }) {
            Text("📊")
        }
        H3 { Text("No Data Available") }
        P(attrs = { classes(AnalyticsStyles.emptyText) }) {
            Text("Start monitoring your battery to see analytics and insights.")
        }
    }
}

/**
 * Get health label and color based on score
 */
fun getHealthLabel(score: Int): Pair<String, String> {
    return when {
        score >= 90 -> "Excellent" to "rgb(76, 175, 80)"
        score >= 75 -> "Good" to "rgb(139, 195, 74)"
        score >= 60 -> "Fair" to "rgb(255, 193, 7)"
        score >= 40 -> "Poor" to "rgb(255, 152, 0)"
        else -> "Critical" to "rgb(244, 67, 54)"
    }
}

/**
 * Get health description based on score
 */
fun getHealthDescription(score: Int): String {
    return when {
        score >= 90 -> "Your battery is in excellent condition. Keep up the good practices!"
        score >= 75 -> "Your battery health is good. Minor improvements can be made."
        score >= 60 -> "Battery health is acceptable, but could be improved with better practices."
        score >= 40 -> "Battery health is declining. Follow recommendations to prevent further degradation."
        else -> "Battery health is critical. Immediate action recommended."
    }
}

/**
 * Presenter for AnalyticsScreen
 */
class AnalyticsPresenter : KoinComponent {
    private val analyzeHealthUseCase: AnalyzeBatteryHealthUseCase by inject()
    private val calculateStatsUseCase: CalculateBatteryStatisticsUseCase by inject()

    private val _state = MutableStateFlow(AnalyticsState())
    val state: StateFlow<AnalyticsState> = _state

    fun loadAnalytics() {
        CoroutineScope(Dispatchers.Default).launch {
            _state.value = AnalyticsState(isLoading = true)

            try {
                // Load health analysis
                val analysisResult = analyzeHealthUseCase()
                val analysis = analysisResult.getOrNull()

                // Load statistics (last 30 days)
                val statsResult = calculateStatsUseCase(TimePeriod.MONTH)
                val statistics = statsResult.getOrNull()

                _state.value = AnalyticsState(
                    analysis = analysis,
                    statistics = statistics,
                    isLoading = false,
                    error = if (analysis == null) "Failed to load analytics" else null
                )
            } catch (e: Exception) {
                _state.value = AnalyticsState(
                    isLoading = false,
                    error = e.message ?: "Unknown error occurred"
                )
            }
        }
    }
}

data class AnalyticsState(
    val analysis: BatteryHealthAnalysis? = null,
    val statistics: BatteryStatistics? = null,
    val isLoading: Boolean = false,
    val error: String? = null
)

/**
 * Styles for AnalyticsScreen
 */
object AnalyticsStyles : StyleSheet() {
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

    val cardTitle by style {
        fontSize(1.5.cssRem)
        fontWeight(600)
        color(rgb(33, 33, 33))
        margin(0.px, 0.px, 1.5.cssRem)
    }

    val healthCard by style {
        backgroundColor(rgb(232, 245, 233))
    }

    val scoreContainer by style {
        display(DisplayStyle.Flex)
        alignItems(AlignItems.Center)
        gap(2.cssRem)
        flexWrap(FlexWrap.Wrap)
    }

    val scoreCircle by style {
        width(150.px)
        height(150.px)
        borderRadius(50.percent)
        backgroundColor(Color.white)
        display(DisplayStyle.Flex)
        flexDirection(FlexDirection.Column)
        alignItems(AlignItems.Center)
        justifyContent(JustifyContent.Center)
        property("box-shadow", "0 4px 12px rgba(0,0,0,0.1)")
    }

    val scoreNumber by style {
        fontSize(3.cssRem)
        fontWeight(700)
        color(rgb(27, 94, 32))
    }

    val scoreLabel by style {
        fontSize(1.cssRem)
        color(rgb(100, 100, 100))
    }

    val scoreInterpretation by style {
        flex(1)
        minWidth(250.px)
    }

    val healthLabel by style {
        fontSize(1.5.cssRem)
        fontWeight(600)
        margin(0.px, 0.px, 0.5.cssRem)
    }

    val healthDescription by style {
        fontSize(1.cssRem)
        color(rgb(60, 60, 60))
        property("line-height", "1.6")
        margin(0.px)
    }

    val factorsContainer by style {
        marginTop(1.5.cssRem)
        paddingTop(1.5.cssRem)
        property("border-top", "1px solid rgb(200, 230, 201)")
    }

    val factorsTitle by style {
        fontSize(1.125.cssRem)
        fontWeight(600)
        color(rgb(33, 33, 33))
        margin(0.px, 0.px, 1.cssRem)
    }

    val factorsList by style {
        margin(0.px)
        paddingLeft(1.5.cssRem)
        property("line-height", "1.8")
        color(rgb(60, 60, 60))
    }

    val statsGrid by style {
        display(DisplayStyle.Grid)
        property("grid-template-columns", "repeat(auto-fit, minmax(200px, 1fr))")
        gap(1.cssRem)
    }

    val statItem by style {
        padding(1.cssRem)
        backgroundColor(rgb(245, 245, 245))
        borderRadius(8.px)
        textAlign("center")
    }

    val statLabel by style {
        fontSize(0.875.cssRem)
        color(rgb(100, 100, 100))
        margin(0.px, 0.px, 0.5.cssRem)
    }

    val statValue by style {
        fontSize(1.5.cssRem)
        fontWeight(600)
        color(rgb(27, 94, 32))
        margin(0.px)
    }

    val recommendationsCard by style {
        backgroundColor(rgb(255, 248, 225))
    }

    val recommendationsList by style {
        margin(0.px)
        padding(0.px)
        property("list-style", "none")
    }

    val recommendationItem by style {
        display(DisplayStyle.Flex)
        alignItems(AlignItems.FlexStart)
        gap(0.75.cssRem)
        padding(1.cssRem)
        backgroundColor(Color.white)
        borderRadius(8.px)
        marginBottom(0.75.cssRem)
        property("line-height", "1.6")
    }

    val recommendationIcon by style {
        fontSize(1.25.cssRem)
    }

    val centerCard by style {
        display(DisplayStyle.Flex)
        flexDirection(FlexDirection.Column)
        alignItems(AlignItems.Center)
        gap(1.cssRem)
        padding(3.cssRem)
        textAlign("center")
    }

    val spinner by style {
        width(40.px)
        height(40.px)
        border(4.px, LineStyle.Solid, rgb(27, 94, 32))
        property("border-top-color", "transparent")
        borderRadius(50.percent)
        property("animation", "spin 1s linear infinite")
    }

    val errorCard by style {
        backgroundColor(rgb(255, 245, 245))
    }

    val errorIcon by style {
        fontSize(3.cssRem)
    }

    val emptyIcon by style {
        fontSize(4.cssRem)
    }

    val emptyText by style {
        fontSize(1.cssRem)
        color(rgb(100, 100, 100))
        margin(0.px)
    }
}

/**
 * Format a decimal number to a specified number of decimal places
 * Multiplatform-compatible alternative to String.format()
 */
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
