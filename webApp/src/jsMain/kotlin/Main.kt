import androidx.compose.runtime.*
import eco.emergi.embit.di.sharedModule
import eco.emergi.embit.di.platformModule
import kotlinx.browser.document
import kotlinx.browser.window
import org.jetbrains.compose.web.css.*
import org.jetbrains.compose.web.dom.*
import org.jetbrains.compose.web.renderComposable
import org.koin.core.context.startKoin
import org.w3c.dom.HTMLElement

/**
 * Main entry point for Embit Web Application
 */
fun main() {
    // Initialize Koin DI
    initializeKoin()

    // Check browser compatibility
    if (!checkBrowserCompatibility()) {
        showCompatibilityError()
        return
    }

    // Render the application
    renderComposable(rootElementId = "root") {
        EmbitApp()
    }
}

/**
 * Initialize Koin dependency injection
 */
private fun initializeKoin() {
    startKoin {
        modules(
            platformModule(),
            sharedModule
        )
    }
}

/**
 * Check if the browser supports required APIs
 */
private fun checkBrowserCompatibility(): Boolean {
    val hasBatteryApi = js("'getBattery' in navigator") as Boolean
    val hasIndexedDB = js("'indexedDB' in window") as Boolean
    val hasServiceWorker = js("'serviceWorker' in navigator") as Boolean

    console.log("Browser Compatibility Check:")
    console.log("  Battery API: $hasBatteryApi")
    console.log("  IndexedDB: $hasIndexedDB")
    console.log("  Service Worker: $hasServiceWorker")

    return hasBatteryApi && hasIndexedDB
}

/**
 * Show compatibility error message
 */
private fun showCompatibilityError() {
    val rootElement = document.getElementById("root") as? HTMLElement ?: return

    rootElement.innerHTML = """
        <div class="error-container">
            <div class="error-icon">⚠️</div>
            <h1 class="error-title">Browser Not Supported</h1>
            <p class="error-message">
                Your browser doesn't support the Battery Status API required for this web application.
            </p>
            <div class="alternatives-section">
                <h2 class="alternatives-title">Try these alternatives:</h2>
                <ul class="alternatives-list">
                    <li>
                        <strong>Use a compatible browser:</strong> Chrome, Edge, or Opera
                    </li>
                    <li>
                        <strong>Download the Android app:</strong>
                        <a href="https://github.com/ScheierVentures/embit/releases" class="download-link" target="_blank">
                            Get the APK for Android devices
                        </a>
                    </li>
                </ul>
            </div>
            <p class="note">
                The Android app provides full battery monitoring features with background tracking and detailed analytics.
            </p>
        </div>
        <style>
            .error-container {
                max-width: 600px;
                margin: 100px auto;
                padding: 40px;
                text-align: center;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }
            .error-icon {
                font-size: 4rem;
                margin-bottom: 20px;
            }
            .error-title {
                font-size: 2rem;
                color: #c62828;
                margin-bottom: 20px;
            }
            .error-message {
                font-size: 1.1rem;
                color: #555;
                margin-bottom: 30px;
                line-height: 1.6;
            }
            .alternatives-section {
                background: #f5f5f5;
                padding: 30px;
                border-radius: 12px;
                margin: 30px 0;
                text-align: left;
            }
            .alternatives-title {
                font-size: 1.3rem;
                color: #1b5e20;
                margin-bottom: 15px;
            }
            .alternatives-list {
                list-style: none;
                padding: 0;
                margin: 0;
            }
            .alternatives-list li {
                padding: 15px 0;
                border-bottom: 1px solid #ddd;
                line-height: 1.6;
            }
            .alternatives-list li:last-child {
                border-bottom: none;
            }
            .download-link {
                color: #1b5e20;
                text-decoration: none;
                font-weight: 600;
                border-bottom: 2px solid #1b5e20;
                padding-bottom: 2px;
            }
            .download-link:hover {
                color: #2e7d32;
                border-bottom-color: #2e7d32;
            }
            .note {
                font-size: 0.9rem;
                color: #777;
                font-style: italic;
                margin-top: 20px;
            }
        </style>
    """.trimIndent()
}

/**
 * Root composable for the Embit web application
 */
@Composable
fun EmbitApp() {
    var currentRoute by remember { mutableStateOf(Route.Monitor) }

    Style(AppStyles)

    Div(attrs = { classes(AppStyles.app) }) {
        // Header
        Header(
            currentRoute = currentRoute,
            onNavigate = { route -> currentRoute = route }
        )

        // Main content
        Main(attrs = { classes(AppStyles.mainContent) }) {
            when (currentRoute) {
                Route.Monitor -> MonitorScreen()
                Route.Analytics -> AnalyticsScreen()
                Route.History -> HistoryScreen()
                Route.Settings -> SettingsScreen()
            }
        }

        // Footer
        Footer()
    }
}

/**
 * Navigation header component
 */
@Composable
fun Header(
    currentRoute: Route,
    onNavigate: (Route) -> Unit
) {
    Header(attrs = { classes(AppStyles.header) }) {
        Div(attrs = { classes(AppStyles.headerContainer) }) {
            H1(attrs = { classes(AppStyles.appTitle) }) {
                Text("⚡ Embit")
            }

            Nav(attrs = { classes(AppStyles.nav) }) {
                Route.values().forEach { route ->
                    Button(
                        attrs = {
                            classes(
                                AppStyles.navButton,
                                if (currentRoute == route) AppStyles.navButtonActive else ""
                            )
                            onClick { onNavigate(route) }
                        }
                    ) {
                        Text(route.title)
                    }
                }
            }
        }
    }
}

/**
 * Footer component
 */
@Composable
fun Footer() {
    Footer(attrs = { classes(AppStyles.footer) }) {
        P(attrs = { classes(AppStyles.footerText) }) {
            Text("Embit v2.1.0 © 2025 | ")
            A(href = "https://github.com/embit", attrs = { classes(AppStyles.footerLink) }) {
                Text("Open Source")
            }
        }
    }
}

/**
 * Application routes
 */
enum class Route(val title: String) {
    Monitor("Monitor"),
    Analytics("Analytics"),
    History("History"),
    Settings("Settings")
}

/**
 * Application styles
 */
object AppStyles : StyleSheet() {
    val app by style {
        display(DisplayStyle.Flex)
        flexDirection(FlexDirection.Column)
        minHeight(100.vh)
        backgroundColor(rgb(245, 245, 245))
    }

    val header by style {
        backgroundColor(rgb(27, 94, 32))
        color(Color.white)
        padding(1.cssRem, 0.px)
        property("box-shadow", "0 2px 4px rgba(0,0,0,0.1)")
    }

    val headerContainer by style {
        maxWidth(1200.px)
        property("margin", "0 auto")
        padding(0.px, 1.cssRem)
        display(DisplayStyle.Flex)
        justifyContent(JustifyContent.SpaceBetween)
        alignItems(AlignItems.Center)
        flexWrap(FlexWrap.Wrap)
        gap(1.cssRem)
    }

    val appTitle by style {
        fontSize(1.75.cssRem)
        fontWeight(600)
        margin(0.px)
    }

    val nav by style {
        display(DisplayStyle.Flex)
        gap(0.5.cssRem)
    }

    val navButton by style {
        backgroundColor(Color.transparent)
        color(Color.white)
        border(0.px)
        padding(0.5.cssRem, 1.cssRem)
        fontSize(1.cssRem)
        cursor("pointer")
        borderRadius(4.px)
        property("transition", "background-color 0.2s")
    }

    val navButtonActive by style {
        backgroundColor(rgba(255, 255, 255, 0.2))
        fontWeight(600)
    }

    val mainContent by style {
        flex(1)
        maxWidth(1200.px)
        width(100.percent)
        property("margin", "0 auto")
        padding(2.cssRem, 1.cssRem)
    }

    val footer by style {
        backgroundColor(rgb(33, 33, 33))
        color(rgb(200, 200, 200))
        padding(1.cssRem)
        textAlign("center")
        property("margin-top", "auto")
    }

    val footerText by style {
        margin(0.px)
        fontSize(0.875.cssRem)
    }

    val footerLink by style {
        color(rgb(129, 199, 132))
        textDecoration("none")
    }
}
