package components

import androidx.compose.runtime.*
import kotlinx.browser.document
import org.jetbrains.compose.web.css.*
import org.jetbrains.compose.web.dom.*
import org.w3c.dom.HTMLCanvasElement

/**
 * Battery chart component using Chart.js
 * Displays battery data as interactive charts
 */
@Composable
fun BatteryChart(
    chartId: String,
    chartType: ChartType = ChartType.LINE,
    labels: List<String>,
    datasets: List<ChartDataset>,
    title: String = ""
) {
    DisposableEffect(chartId, labels, datasets) {
        val canvas = document.getElementById(chartId) as? HTMLCanvasElement
        if (canvas != null) {
            createChart(canvas, chartType, labels, datasets, title)
        }

        onDispose {
            destroyChart(chartId)
        }
    }

    Div(attrs = { classes(ChartStyles.chartContainer) }) {
        if (title.isNotEmpty()) {
            H4(attrs = { classes(ChartStyles.chartTitle) }) {
                Text(title)
            }
        }
        Canvas(attrs = {
            id(chartId)
            classes(ChartStyles.canvas)
        })
    }
}

/**
 * Create a Chart.js chart instance
 */
private fun createChart(
    canvas: HTMLCanvasElement,
    chartType: ChartType,
    labels: List<String>,
    datasets: List<ChartDataset>,
    title: String
) {
    // Convert datasets to JavaScript-friendly format
    val jsDatasets = datasets.map { dataset ->
        js("""{
            label: dataset.label,
            data: dataset.data.map(function(n) { return n; }),
            backgroundColor: dataset.backgroundColor,
            borderColor: dataset.borderColor,
            borderWidth: dataset.borderWidth,
            fill: dataset.fill,
            tension: 0.4
        }""")
    }.toTypedArray()

    val chartTypeStr = chartType.name.lowercase()
    val labelsArray = labels.toTypedArray()

    // Create chart using dynamic JavaScript
    js("""
        (function() {
            var chartModule = require('chart.js/auto');
            var Chart = chartModule.Chart || chartModule.default || chartModule;

            if (window.charts === undefined) {
                window.charts = {};
            }
            if (window.charts[canvas.id]) {
                window.charts[canvas.id].destroy();
            }

            var config = {
                type: chartTypeStr,
                data: {
                    labels: labelsArray,
                    datasets: jsDatasets
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    aspectRatio: 2,
                    plugins: {
                        title: {
                            display: (title !== ''),
                            text: title,
                            font: { size: 16, weight: 'bold' }
                        },
                        legend: {
                            display: true,
                            position: 'top'
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            };

            window.charts[canvas.id] = new Chart(canvas, config);
        })();
    """)
}

/**
 * Destroy a chart instance
 */
private fun destroyChart(chartId: String) {
    js("""
        if (window.charts && window.charts[chartId]) {
            window.charts[chartId].destroy();
            delete window.charts[chartId];
        }
    """)
}

/**
 * Chart type enumeration
 */
enum class ChartType {
    LINE,
    BAR,
    AREA
}

/**
 * Chart dataset configuration
 */
data class ChartDataset(
    val label: String,
    val data: List<Number>,
    val backgroundColor: String = "rgba(27, 94, 32, 0.2)",
    val borderColor: String = "rgb(27, 94, 32)",
    val borderWidth: Int = 2,
    val fill: Boolean = false
)

/**
 * Styles for charts
 */
object ChartStyles : StyleSheet() {
    val chartContainer by style {
        backgroundColor(Color.white)
        borderRadius(12.px)
        padding(1.5.cssRem)
        property("box-shadow", "0 2px 8px rgba(0,0,0,0.1)")
        marginBottom(1.5.cssRem)
    }

    val chartTitle by style {
        fontSize(1.25.cssRem)
        fontWeight(600)
        color(rgb(33, 33, 33))
        margin(0.px, 0.px, 1.cssRem)
    }

    val canvas by style {
        width(100.percent)
        property("max-height", "400px")
    }
}
