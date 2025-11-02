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
 * Compatibility mode for the application
 */
enum class CompatibilityMode {
    FULL,       // All features available
    LIMITED,    // Limited features (no battery monitoring)
    UNSUPPORTED // No compatible features
}

/**
 * Main entry point for Embit Web Application
 */
fun main() {
    // Initialize Koin DI
    initializeKoin()

    // Check browser compatibility
    val compatMode = checkBrowserCompatibility()

    when (compatMode) {
        CompatibilityMode.FULL -> {
            // Full app with battery monitoring
            renderComposable(rootElementId = "root") {
                EmbitApp()
            }
        }
        CompatibilityMode.LIMITED -> {
            // Limited mode without battery monitoring
            renderComposable(rootElementId = "root") {
                LimitedModeApp()
            }
        }
        CompatibilityMode.UNSUPPORTED -> {
            // Show compatibility error
            showCompatibilityError()
        }
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
private fun checkBrowserCompatibility(): CompatibilityMode {
    val hasBatteryApi = js("'getBattery' in navigator") as Boolean
    val hasIndexedDB = js("'indexedDB' in window") as Boolean
    val hasServiceWorker = js("'serviceWorker' in navigator") as Boolean
    val hasFetch = js("'fetch' in window") as Boolean

    console.log("Browser Compatibility Check:")
    console.log("  Battery API: $hasBatteryApi")
    console.log("  IndexedDB: $hasIndexedDB")
    console.log("  Service Worker: $hasServiceWorker")
    console.log("  Fetch API: $hasFetch")
    console.log("  User Agent: ${js("navigator.userAgent")}")

    return when {
        hasBatteryApi && hasIndexedDB -> CompatibilityMode.FULL
        hasIndexedDB && hasFetch -> CompatibilityMode.LIMITED
        else -> CompatibilityMode.UNSUPPORTED
    }
}

/**
 * Detect browser type from user agent
 */
private fun detectBrowser(): String {
    val userAgent = js("navigator.userAgent.toLowerCase()") as String
    return when {
        userAgent.contains("firefox") -> "Firefox"
        userAgent.contains("edg") -> "Edge"
        userAgent.contains("chrome") -> "Chrome"
        userAgent.contains("safari") && !userAgent.contains("chrome") -> "Safari"
        userAgent.contains("opera") || userAgent.contains("opr") -> "Opera"
        else -> "Unknown"
    }
}

/**
 * Detect if running on mobile device
 */
private fun isMobileDevice(): Boolean {
    val userAgent = js("navigator.userAgent.toLowerCase()") as String
    return userAgent.contains("android") ||
           userAgent.contains("iphone") ||
           userAgent.contains("ipad") ||
           userAgent.contains("mobile")
}

/**
 * Show compatibility error message
 */
private fun showCompatibilityError() {
    val rootElement = document.getElementById("root") as? HTMLElement ?: return
    val browser = detectBrowser()
    val isMobile = isMobileDevice()

    // Browser-specific guidance
    val browserGuidance = when (browser) {
        "Firefox" -> """
            <div class="browser-specific firefox">
                <h3>🦊 Firefox Users</h3>
                <p>Firefox removed Battery Status API support due to privacy concerns. We respect that decision!</p>
                <p><strong>Your best option:</strong> Use our Android app for full battery monitoring with privacy-focused local storage.</p>
            </div>
        """
        "Safari" -> """
            <div class="browser-specific safari">
                <h3>🧭 Safari Users</h3>
                <p>Safari doesn't support the Battery Status API.</p>
                <p><strong>Alternative:</strong> Try Chrome, Edge, or our Android app.</p>
            </div>
        """
        else -> """
            <div class="browser-specific">
                <h3>Browser Support</h3>
                <p>Your browser (${browser}) doesn't support the Battery Status API needed for battery monitoring.</p>
            </div>
        """
    }

    // Mobile-specific messaging
    val mobileSection = if (isMobile) {
        """
            <div class="recommendation-card primary">
                <div class="card-icon">📱</div>
                <h3>Recommended: Install Android App</h3>
                <p>You're on a mobile device! Get the best experience with our native Android app:</p>
                <ul class="feature-list">
                    <li>✅ Full battery monitoring with background tracking</li>
                    <li>✅ Detailed energy usage analytics</li>
                    <li>✅ Smart charging recommendations</li>
                    <li>✅ Grid awareness & carbon tracking</li>
                    <li>✅ Works offline</li>
                </ul>
                <a href="https://github.com/ScheierVentures/embit/releases" class="cta-button" target="_blank">
                    📥 Download APK
                </a>
                <p class="help-text">Scan this QR code on your Android device:</p>
                <div class="qr-placeholder">
                    <svg viewBox="0 0 200 200" width="150" height="150">
                        <rect width="200" height="200" fill="#fff"/>
                        <text x="100" y="100" text-anchor="middle" font-size="14" fill="#666">
                            QR Code
                        </text>
                        <text x="100" y="120" text-anchor="middle" font-size="10" fill="#999">
                            GitHub Releases
                        </text>
                    </svg>
                </div>
            </div>
        """
    } else {
        """
            <div class="recommendation-card">
                <div class="card-icon">💻</div>
                <h3>Desktop Options</h3>
                <ol class="numbered-steps">
                    <li>
                        <strong>Switch to a compatible browser:</strong>
                        <div class="browser-badges">
                            <span class="badge chrome">Chrome ✓</span>
                            <span class="badge edge">Edge ✓</span>
                            <span class="badge opera">Opera ✓</span>
                        </div>
                    </li>
                    <li>
                        <strong>Or use on mobile:</strong> Download our Android app for the full experience
                        <br/>
                        <a href="https://github.com/ScheierVentures/embit/releases" class="download-link" target="_blank">
                            View releases on GitHub →
                        </a>
                    </li>
                </ol>
            </div>
        """
    }

    rootElement.innerHTML = """
        <div class="compat-container">
            <div class="compat-header">
                <div class="icon-wrap">⚡</div>
                <h1>Embit Battery Monitor</h1>
                <p class="subtitle">Smart Battery & Energy Management</p>
            </div>

            ${browserGuidance}

            ${mobileSection}

            <div class="info-section">
                <details class="faq">
                    <summary>❓ Why doesn't this work in ${browser}?</summary>
                    <div class="faq-content">
                        <p>Embit uses the Battery Status API to monitor your device's battery in real-time. This API is supported in Chrome, Edge, and Opera, but not in Firefox (removed for privacy) or Safari (never implemented).</p>
                        <p><strong>Privacy Note:</strong> When using the Battery Status API, no data leaves your device unless you explicitly sync to our optional cloud service.</p>
                    </div>
                </details>

                <details class="faq">
                    <summary>🔒 What about privacy?</summary>
                    <div class="faq-content">
                        <p>Your battery data is stored locally on your device. Cloud sync is optional and requires authentication.</p>
                        <p>The Android app offers the most privacy-friendly experience with complete local control.</p>
                    </div>
                </details>

                <details class="faq">
                    <summary>🌐 Is there any way to use this in ${browser}?</summary>
                    <div class="faq-content">
                        <p>Your browser doesn't support the necessary APIs for any version of Embit web app.</p>
                        <p><strong>Browsers with Limited Mode support:</strong> Firefox and Safari can use a limited mode with grid features only.</p>
                        <p><strong>Your best option:</strong> Download the Android app for full functionality.</p>
                    </div>
                </details>
            </div>

            <div class="footer-links">
                <a href="https://github.com/ScheierVentures/embit" target="_blank">📖 Documentation</a>
                <span class="separator">•</span>
                <a href="https://github.com/ScheierVentures/embit/issues" target="_blank">🐛 Report Issue</a>
                <span class="separator">•</span>
                <a href="https://github.com/ScheierVentures/embit" target="_blank">⭐ GitHub</a>
            </div>
        </div>
        <style>
            * { box-sizing: border-box; }
            body { margin: 0; background: linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%); min-height: 100vh; }

            .compat-container {
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            }

            .compat-header {
                background: white;
                border-radius: 16px;
                padding: 40px;
                text-align: center;
                box-shadow: 0 8px 32px rgba(0,0,0,0.1);
                margin-bottom: 24px;
            }

            .icon-wrap {
                font-size: 4rem;
                margin-bottom: 16px;
                animation: pulse 2s infinite;
            }

            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
            }

            .compat-header h1 {
                margin: 0 0 8px 0;
                color: #1b5e20;
                font-size: 2.5rem;
            }

            .subtitle {
                color: #666;
                font-size: 1.1rem;
                margin: 0;
            }

            .browser-specific {
                background: #fff3e0;
                border-left: 4px solid #ff9800;
                padding: 20px;
                border-radius: 8px;
                margin-bottom: 24px;
            }

            .browser-specific.firefox {
                background: #e8eaf6;
                border-left-color: #ff6611;
            }

            .browser-specific.safari {
                background: #e3f2fd;
                border-left-color: #0066cc;
            }

            .browser-specific h3 {
                margin-top: 0;
                color: #333;
            }

            .browser-specific p {
                margin: 8px 0;
                line-height: 1.6;
            }

            .recommendation-card {
                background: white;
                border-radius: 12px;
                padding: 32px;
                margin-bottom: 24px;
                box-shadow: 0 4px 16px rgba(0,0,0,0.1);
            }

            .recommendation-card.primary {
                background: linear-gradient(135deg, #ffffff 0%, #f1f8e9 100%);
                border: 2px solid #1b5e20;
            }

            .card-icon {
                font-size: 3rem;
                margin-bottom: 16px;
            }

            .recommendation-card h3 {
                margin: 0 0 16px 0;
                color: #1b5e20;
                font-size: 1.5rem;
            }

            .feature-list {
                list-style: none;
                padding: 0;
                margin: 16px 0;
            }

            .feature-list li {
                padding: 8px 0;
                font-size: 0.95rem;
                line-height: 1.5;
            }

            .cta-button {
                display: inline-block;
                background: #1b5e20;
                color: white;
                padding: 16px 32px;
                border-radius: 8px;
                text-decoration: none;
                font-weight: 600;
                font-size: 1.1rem;
                margin: 16px 0;
                transition: all 0.2s;
                box-shadow: 0 4px 12px rgba(27, 94, 32, 0.3);
            }

            .cta-button:hover {
                background: #2e7d32;
                transform: translateY(-2px);
                box-shadow: 0 6px 16px rgba(27, 94, 32, 0.4);
            }

            .help-text {
                font-size: 0.9rem;
                color: #666;
                margin: 16px 0 8px 0;
            }

            .qr-placeholder {
                display: flex;
                justify-content: center;
                margin: 16px 0;
                padding: 16px;
                background: white;
                border-radius: 8px;
                border: 2px dashed #ddd;
            }

            .numbered-steps {
                padding-left: 24px;
                margin: 16px 0;
            }

            .numbered-steps li {
                padding: 12px 0;
                line-height: 1.6;
            }

            .browser-badges {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
                margin-top: 8px;
            }

            .badge {
                display: inline-block;
                padding: 6px 12px;
                border-radius: 6px;
                font-size: 0.85rem;
                font-weight: 600;
            }

            .badge.chrome {
                background: #4285f4;
                color: white;
            }

            .badge.edge {
                background: #0078d4;
                color: white;
            }

            .badge.opera {
                background: #ff1b2d;
                color: white;
            }

            .download-link {
                color: #1b5e20;
                font-weight: 600;
                text-decoration: none;
                border-bottom: 2px solid #1b5e20;
                transition: all 0.2s;
            }

            .download-link:hover {
                color: #2e7d32;
                border-bottom-color: #2e7d32;
            }

            .info-section {
                background: white;
                border-radius: 12px;
                padding: 24px;
                margin-bottom: 24px;
                box-shadow: 0 4px 16px rgba(0,0,0,0.1);
            }

            .faq {
                margin: 16px 0;
                border-bottom: 1px solid #eee;
                padding-bottom: 16px;
            }

            .faq:last-child {
                border-bottom: none;
            }

            .faq summary {
                cursor: pointer;
                font-weight: 600;
                padding: 12px 0;
                user-select: none;
                color: #333;
                font-size: 1rem;
            }

            .faq summary:hover {
                color: #1b5e20;
            }

            .faq-content {
                padding: 12px 0 0 24px;
                color: #555;
                line-height: 1.6;
            }

            .faq-content ul {
                margin: 8px 0;
            }

            .footer-links {
                text-align: center;
                padding: 24px;
                color: white;
            }

            .footer-links a {
                color: white;
                text-decoration: none;
                font-weight: 500;
                transition: opacity 0.2s;
            }

            .footer-links a:hover {
                opacity: 0.8;
                text-decoration: underline;
            }

            .separator {
                margin: 0 12px;
                opacity: 0.5;
            }

            @media (max-width: 600px) {
                .compat-container {
                    padding: 12px;
                }

                .compat-header {
                    padding: 24px 20px;
                }

                .compat-header h1 {
                    font-size: 1.75rem;
                }

                .recommendation-card {
                    padding: 20px;
                }

                .browser-badges {
                    flex-direction: column;
                }
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
 * Limited mode app for browsers without Battery Status API
 */
@Composable
fun LimitedModeApp() {
    Style(AppStyles)
    Style(LimitedModeStyles)

    Div(attrs = { classes(AppStyles.app) }) {
        // Header
        Header(attrs = { classes(AppStyles.header) }) {
            Div(attrs = { classes(AppStyles.headerContainer) }) {
                H1(attrs = { classes(AppStyles.appTitle) }) {
                    Text("⚡ Embit")
                }
                Div(attrs = {
                    classes(LimitedModeStyles.limitedBadge)
                }) {
                    Text("🔒 Limited Mode")
                }
            }
        }

        // Main content
        Main(attrs = { classes(AppStyles.mainContent) }) {
            LimitedModeContent()
        }

        // Footer
        Footer()
    }
}

/**
 * Content for limited mode
 */
@Composable
fun LimitedModeContent() {
    val browser = detectBrowser()

    Div(attrs = { classes(LimitedModeStyles.container) }) {
        // Notice banner
        Div(attrs = { classes(LimitedModeStyles.noticeBanner) }) {
            Div(attrs = { classes(LimitedModeStyles.noticeIcon) }) {
                Text("ℹ️")
            }
            Div(attrs = { classes(LimitedModeStyles.noticeContent) }) {
                H2 { Text("Limited Mode Active") }
                P {
                    Text("${browser} doesn't support battery monitoring. You can still explore grid features and energy insights!")
                }
                A(
                    href = "https://github.com/ScheierVentures/embit/releases",
                    attrs = {
                        classes(LimitedModeStyles.upgradeLink)
                        target("_blank")
                    }
                ) {
                    Text("📥 Download Android App for Full Features")
                }
            }
        }

        // Demo Grid Status Card
        Div(attrs = { classes(LimitedModeStyles.card) }) {
            H2(attrs = { classes(LimitedModeStyles.cardTitle) }) {
                Text("⚡ Grid Status (Demo)")
            }

            Div(attrs = { classes(LimitedModeStyles.statusGrid) }) {
                // Grid Stress
                Div(attrs = { classes(LimitedModeStyles.statusItem) }) {
                    Div(attrs = { classes(LimitedModeStyles.statusLabel) }) {
                        Text("Grid Stress Level")
                    }
                    Div(attrs = {
                        classes(LimitedModeStyles.statusValue, LimitedModeStyles.statusNormal)
                    }) {
                        Text("NORMAL")
                    }
                }

                // Renewable Energy
                Div(attrs = { classes(LimitedModeStyles.statusItem) }) {
                    Div(attrs = { classes(LimitedModeStyles.statusLabel) }) {
                        Text("Renewable Energy")
                    }
                    Div(attrs = { classes(LimitedModeStyles.statusValue) }) {
                        Text("45%")
                    }
                }

                // Carbon Intensity
                Div(attrs = { classes(LimitedModeStyles.statusItem) }) {
                    Div(attrs = { classes(LimitedModeStyles.statusLabel) }) {
                        Text("Carbon Intensity")
                    }
                    Div(attrs = { classes(LimitedModeStyles.statusValue) }) {
                        Text("380g CO₂/kWh")
                    }
                }

                // Pricing
                Div(attrs = { classes(LimitedModeStyles.statusItem) }) {
                    Div(attrs = { classes(LimitedModeStyles.statusLabel) }) {
                        Text("Current Pricing")
                    }
                    Div(attrs = { classes(LimitedModeStyles.statusValue) }) {
                        Text("12.5¢/kWh (Standard)")
                    }
                }
            }

            P(attrs = { classes(LimitedModeStyles.demoNote) }) {
                Text("📊 This is demo data. Connect the Android app to see real-time grid information for your location.")
            }
        }

        // Smart Charging Card
        Div(attrs = { classes(LimitedModeStyles.card, LimitedModeStyles.cardHighlight) }) {
            H2(attrs = { classes(LimitedModeStyles.cardTitle) }) {
                Text("🔋 Smart Charging Insights")
            }

            Div(attrs = { classes(LimitedModeStyles.recommendation) }) {
                Div(attrs = { classes(LimitedModeStyles.recommendationIcon) }) {
                    Text("✅")
                }
                Div(attrs = { classes(LimitedModeStyles.recommendationContent) }) {
                    H3 { Text("Good Time to Charge") }
                    P {
                        Text("Current grid conditions are favorable with moderate renewable energy and standard pricing. " +
                             "Charging now would result in approximately 380g CO₂ per kWh.")
                    }
                }
            }

            Ul(attrs = { classes(LimitedModeStyles.tipsList) }) {
                Li { Text("💡 Tip: Charge during off-peak hours (11 PM - 7 AM) to save money") }
                Li { Text("🌱 Tip: Look for times with high renewable energy percentage") }
                Li { Text("⚠️ Tip: Avoid charging during critical peak times (4-9 PM)") }
            }
        }

        // Features Card
        Div(attrs = { classes(LimitedModeStyles.card) }) {
            H2(attrs = { classes(LimitedModeStyles.cardTitle) }) {
                Text("📱 Unlock Full Features")
            }

            P {
                Text("The Android app provides complete battery monitoring and energy tracking:")
            }

            Ul(attrs = { classes(LimitedModeStyles.featuresList) }) {
                Li { Text("⚡ Real-time battery monitoring with 15-minute intervals") }
                Li { Text("📊 Detailed energy usage analytics and statistics") }
                Li { Text("🔋 Battery health analysis and life predictions") }
                Li { Text("🌍 Location-based grid data for your area") }
                Li { Text("🔔 Smart notifications for optimal charging times") }
                Li { Text("☁️ Cloud sync across devices (optional)") }
                Li { Text("🔒 Privacy-first: all data stored locally by default") }
            }

            A(
                href = "https://github.com/ScheierVentures/embit/releases",
                attrs = {
                    classes(LimitedModeStyles.ctaButton)
                    target("_blank")
                }
            ) {
                Text("📥 Download Android App")
            }
        }

        // Browser Compatibility Card
        Div(attrs = { classes(LimitedModeStyles.infoCard) }) {
            H3 { Text("Why Limited Mode?") }
            P {
                Text("${browser} doesn't support the Battery Status API, which is required for real-time battery monitoring. " +
                     "This API is available in Chrome, Edge, and Opera.")
            }
            P {
                Text("Firefox removed this API for privacy reasons, and Safari never implemented it. " +
                     "We respect these decisions and recommend using our native Android app for the best experience.")
            }
        }
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

/**
 * Limited mode styles
 */
object LimitedModeStyles : StyleSheet() {
    val container by style {
        maxWidth(900.px)
        property("margin", "0 auto")
    }

    val limitedBadge by style {
        backgroundColor(rgba(255, 152, 0, 0.2))
        color(rgb(255, 152, 0))
        padding(0.5.cssRem, 1.cssRem)
        borderRadius(20.px)
        fontSize(0.875.cssRem)
        fontWeight(600)
    }

    val noticeBanner by style {
        backgroundColor(rgb(232, 234, 246))
        borderLeft(4.px, LineStyle.Solid, rgb(255, 102, 17))
        borderRadius(8.px)
        padding(1.5.cssRem)
        marginBottom(2.cssRem)
        display(DisplayStyle.Flex)
        gap(1.cssRem)
        alignItems(AlignItems.FlexStart)
    }

    val noticeIcon by style {
        fontSize(2.cssRem)
        flexShrink(0)
    }

    val noticeContent by style {
        flex(1)

        child(self, selector("h2")) style {
            margin(0.px, 0.px, 0.5.cssRem, 0.px)
            color(rgb(51, 51, 51))
            fontSize(1.25.cssRem)
        }

        child(self, selector("p")) style {
            margin(0.px, 0.px, 1.cssRem, 0.px)
            color(rgb(85, 85, 85))
            lineHeight(1.6.number)
        }
    }

    val upgradeLink by style {
        display(DisplayStyle.InlineBlock)
        backgroundColor(rgb(27, 94, 32))
        color(Color.white)
        padding(0.75.cssRem, 1.5.cssRem)
        borderRadius(6.px)
        textDecoration("none")
        fontWeight(600)
        property("transition", "all 0.2s")

        hover(self) style {
            backgroundColor(rgb(46, 125, 50))
            property("transform", "translateY(-2px)")
        }
    }

    val card by style {
        backgroundColor(Color.white)
        borderRadius(12.px)
        padding(1.5.cssRem)
        marginBottom(1.5.cssRem)
        property("box-shadow", "0 2px 8px rgba(0,0,0,0.1)")
    }

    val cardHighlight by style {
        border(2.px, LineStyle.Solid, rgb(27, 94, 32))
        backgroundColor(rgb(241, 248, 233))
    }

    val cardTitle by style {
        fontSize(1.5.cssRem)
        color(rgb(27, 94, 32))
        marginTop(0.px)
        marginBottom(1.cssRem)
    }

    val statusGrid by style {
        display(DisplayStyle.Grid)
        property("grid-template-columns", "repeat(auto-fit, minmax(200px, 1fr))")
        gap(1.cssRem)
        marginBottom(1.cssRem)
    }

    val statusItem by style {
        backgroundColor(rgb(245, 245, 245))
        padding(1.cssRem)
        borderRadius(8.px)
    }

    val statusLabel by style {
        fontSize(0.875.cssRem)
        color(rgb(117, 117, 117))
        marginBottom(0.5.cssRem)
    }

    val statusValue by style {
        fontSize(1.25.cssRem)
        fontWeight(700)
        color(rgb(51, 51, 51))
    }

    val statusNormal by style {
        color(rgb(27, 94, 32))
    }

    val demoNote by style {
        fontSize(0.875.cssRem)
        color(rgb(117, 117, 117))
        fontStyle("italic")
        marginTop(1.cssRem)
        marginBottom(0.px)
        padding(0.75.cssRem)
        backgroundColor(rgb(255, 248, 225))
        borderRadius(6.px)
    }

    val recommendation by style {
        display(DisplayStyle.Flex)
        gap(1.cssRem)
        alignItems(AlignItems.FlexStart)
        marginBottom(1.cssRem)
    }

    val recommendationIcon by style {
        fontSize(2.5.cssRem)
        flexShrink(0)
    }

    val recommendationContent by style {
        flex(1)

        child(self, selector("h3")) style {
            margin(0.px, 0.px, 0.5.cssRem, 0.px)
            color(rgb(27, 94, 32))
            fontSize(1.25.cssRem)
        }

        child(self, selector("p")) style {
            margin(0.px)
            color(rgb(85, 85, 85))
            lineHeight(1.6.number)
        }
    }

    val tipsList by style {
        listStyleType("none")
        padding(0.px)
        margin(1.cssRem, 0.px, 0.px, 0.px)

        child(self, selector("li")) style {
            padding(0.75.cssRem)
            marginBottom(0.5.cssRem)
            backgroundColor(Color.white)
            borderRadius(6.px)
            borderLeft(3.px, LineStyle.Solid, rgb(129, 199, 132))
        }
    }

    val featuresList by style {
        listStyleType("none")
        padding(0.px)
        margin(1.cssRem, 0.px)

        child(self, selector("li")) style {
            padding(0.5.cssRem, 0.px)
            lineHeight(1.6.number)
        }
    }

    val ctaButton by style {
        display(DisplayStyle.InlineBlock)
        backgroundColor(rgb(27, 94, 32))
        color(Color.white)
        padding(1.cssRem, 2.cssRem)
        borderRadius(8.px)
        textDecoration("none")
        fontWeight(600)
        fontSize(1.1.cssRem)
        marginTop(1.cssRem)
        property("transition", "all 0.2s")
        property("box-shadow", "0 4px 12px rgba(27, 94, 32, 0.3)")

        hover(self) style {
            backgroundColor(rgb(46, 125, 50))
            property("transform", "translateY(-2px)")
            property("box-shadow", "0 6px 16px rgba(27, 94, 32, 0.4)")
        }
    }

    val infoCard by style {
        backgroundColor(rgb(227, 242, 253))
        border(1.px, LineStyle.Solid, rgb(144, 202, 249))
        borderRadius(8.px)
        padding(1.5.cssRem)
        marginBottom(1.5.cssRem)

        child(self, selector("h3")) style {
            marginTop(0.px)
            color(rgb(13, 71, 161))
        }

        child(self, selector("p")) style {
            lineHeight(1.6.number)
            color(rgb(51, 51, 51))
        }
    }
}
