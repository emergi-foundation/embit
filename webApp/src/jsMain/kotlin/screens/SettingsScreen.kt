import androidx.compose.runtime.*
import org.jetbrains.compose.web.css.*
import org.jetbrains.compose.web.dom.*

/**
 * Settings screen - app configuration and information
 */
@Composable
fun SettingsScreen() {
    Div(attrs = { classes(SettingsStyles.container) }) {
        H2(attrs = { classes(SettingsStyles.title) }) {
            Text("Settings")
        }

        // About Section
        AboutCard()

        // Browser Compatibility
        CompatibilityCard()

        // Data Management
        DataManagementCard()

        // App Information
        InfoCard()
    }
}

@Composable
fun AboutCard() {
    Div(attrs = { classes(SettingsStyles.card) }) {
        H3(attrs = { classes(SettingsStyles.cardTitle) }) {
            Text("About Embit")
        }
        P(attrs = { classes(SettingsStyles.description) }) {
            Text("Embit is a battery monitoring and analytics application that helps you track your device's battery health, analyze usage patterns, and get intelligent recommendations for better battery life.")
        }
        Div(attrs = { classes(SettingsStyles.version) }) {
            Text("Version 2.1.0")
        }
    }
}

@Composable
fun CompatibilityCard() {
    val hasBatteryApi = js("'getBattery' in navigator") as Boolean
    val hasIndexedDB = js("'indexedDB' in window") as Boolean
    val hasServiceWorker = js("'serviceWorker' in navigator") as Boolean
    val hasNotifications = js("'Notification' in window") as Boolean

    Div(attrs = { classes(SettingsStyles.card) }) {
        H3(attrs = { classes(SettingsStyles.cardTitle) }) {
            Text("Browser Compatibility")
        }

        Div(attrs = { classes(SettingsStyles.compatibilityGrid) }) {
            CompatibilityItem("Battery API", hasBatteryApi, "Required for battery monitoring")
            CompatibilityItem("IndexedDB", hasIndexedDB, "Required for data storage")
            CompatibilityItem("Service Worker", hasServiceWorker, "Required for offline support")
            CompatibilityItem("Notifications", hasNotifications, "Optional for alerts")
        }

        if (!hasBatteryApi) {
            Div(attrs = { classes(SettingsStyles.warningBox) }) {
                Span(attrs = { classes(SettingsStyles.warningIcon) }) {
                    Text("⚠️")
                }
                Span {
                    Text("Your browser doesn't support the Battery Status API. Battery monitoring features will not work.")
                }
            }
        }
    }
}

@Composable
fun CompatibilityItem(name: String, supported: Boolean, description: String) {
    Div(attrs = { classes(SettingsStyles.compatibilityItem) }) {
        Div(attrs = { classes(SettingsStyles.compatibilityHeader) }) {
            Span(attrs = { classes(SettingsStyles.compatibilityName) }) {
                Text(name)
            }
            Span(attrs = {
                classes(
                    SettingsStyles.compatibilityStatus,
                    if (supported) SettingsStyles.statusSupported else SettingsStyles.statusUnsupported
                )
            }) {
                Text(if (supported) "✓ Supported" else "✗ Not Supported")
            }
        }
        P(attrs = { classes(SettingsStyles.compatibilityDescription) }) {
            Text(description)
        }
    }
}

@Composable
fun DataManagementCard() {
    var showClearConfirm by remember { mutableStateOf(false) }

    Div(attrs = { classes(SettingsStyles.card) }) {
        H3(attrs = { classes(SettingsStyles.cardTitle) }) {
            Text("Data Management")
        }

        P(attrs = { classes(SettingsStyles.description) }) {
            Text("All battery readings and analytics are stored locally in your browser. No data is sent to external servers.")
        }

        if (showClearConfirm) {
            Div(attrs = { classes(SettingsStyles.confirmBox) }) {
                P(attrs = { classes(SettingsStyles.confirmText) }) {
                    Text("Are you sure you want to clear all data? This action cannot be undone.")
                }
                Div(attrs = { classes(SettingsStyles.confirmButtons) }) {
                    Button(attrs = {
                        classes(SettingsStyles.button, SettingsStyles.dangerButton)
                        onClick {
                            clearAllData()
                            showClearConfirm = false
                        }
                    }) {
                        Text("Yes, Clear All Data")
                    }
                    Button(attrs = {
                        classes(SettingsStyles.button, SettingsStyles.secondaryButton)
                        onClick { showClearConfirm = false }
                    }) {
                        Text("Cancel")
                    }
                }
            }
        } else {
            Button(attrs = {
                classes(SettingsStyles.button, SettingsStyles.dangerButton)
                onClick { showClearConfirm = true }
            }) {
                Text("Clear All Data")
            }
        }
    }
}

@Composable
fun InfoCard() {
    Div(attrs = { classes(SettingsStyles.card) }) {
        H3(attrs = { classes(SettingsStyles.cardTitle) }) {
            Text("Information")
        }

        Div(attrs = { classes(SettingsStyles.infoGrid) }) {
            InfoItem("Technology", "Kotlin Multiplatform")
            InfoItem("UI Framework", "Compose for Web")
            InfoItem("Database", "SQLDelight + WebWorker")
            InfoItem("Architecture", "Clean Architecture + MVVM")
        }

        Div(attrs = { classes(SettingsStyles.linksContainer) }) {
            A(
                href = "https://github.com/embit/embit",
                attrs = { classes(SettingsStyles.linkButton) }
            ) {
                Text("📖 Documentation")
            }
            A(
                href = "https://github.com/embit/embit/issues",
                attrs = { classes(SettingsStyles.linkButton) }
            ) {
                Text("🐛 Report Issue")
            }
            A(
                href = "https://github.com/embit/embit",
                attrs = { classes(SettingsStyles.linkButton) }
            ) {
                Text("⭐ View on GitHub")
            }
        }
    }
}

@Composable
fun InfoItem(label: String, value: String) {
    Div(attrs = { classes(SettingsStyles.infoItem) }) {
        Span(attrs = { classes(SettingsStyles.infoLabel) }) {
            Text("$label:")
        }
        Span(attrs = { classes(SettingsStyles.infoValue) }) {
            Text(value)
        }
    }
}

/**
 * Clear all application data
 */
fun clearAllData() {
    // Clear IndexedDB
    js("if (window.indexedDB) { window.indexedDB.databases().then(function(dbs) { dbs.forEach(function(db) { if (db.name && db.name.includes('embit')) { window.indexedDB.deleteDatabase(db.name); } }); }); }")

    // Clear localStorage
    js("localStorage.clear()")

    // Clear sessionStorage
    js("sessionStorage.clear()")

    // Clear cache
    js("if ('caches' in window) { caches.keys().then(function(names) { names.forEach(function(name) { caches.delete(name); }); }); }")

    // Reload page
    js("window.location.reload()")
}

/**
 * Styles for SettingsScreen
 */
object SettingsStyles : StyleSheet() {
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
        margin(0.px, 0.px, 1.cssRem)
    }

    val description by style {
        fontSize(1.cssRem)
        color(rgb(60, 60, 60))
        property("line-height", "1.6")
        margin(0.px, 0.px, 1.cssRem)
    }

    val version by style {
        display(DisplayStyle.InlineBlock)
        padding(0.5.cssRem, 1.cssRem)
        backgroundColor(rgb(232, 245, 233))
        color(rgb(27, 94, 32))
        borderRadius(20.px)
        fontSize(0.875.cssRem)
        fontWeight(600)
    }

    val compatibilityGrid by style {
        display(DisplayStyle.Flex)
        flexDirection(FlexDirection.Column)
        gap(1.cssRem)
        marginBottom(1.cssRem)
    }

    val compatibilityItem by style {
        padding(1.cssRem)
        backgroundColor(rgb(250, 250, 250))
        borderRadius(8.px)
    }

    val compatibilityHeader by style {
        display(DisplayStyle.Flex)
        justifyContent(JustifyContent.SpaceBetween)
        alignItems(AlignItems.Center)
        marginBottom(0.5.cssRem)
        flexWrap(FlexWrap.Wrap)
        gap(0.5.cssRem)
    }

    val compatibilityName by style {
        fontSize(1.cssRem)
        fontWeight(600)
        color(rgb(33, 33, 33))
    }

    val compatibilityStatus by style {
        fontSize(0.875.cssRem)
        fontWeight(500)
        padding(0.25.cssRem, 0.75.cssRem)
        borderRadius(12.px)
    }

    val statusSupported by style {
        backgroundColor(rgb(232, 245, 233))
        color(rgb(27, 94, 32))
    }

    val statusUnsupported by style {
        backgroundColor(rgb(255, 235, 238))
        color(rgb(198, 40, 40))
    }

    val compatibilityDescription by style {
        fontSize(0.875.cssRem)
        color(rgb(100, 100, 100))
        margin(0.px)
    }

    val warningBox by style {
        display(DisplayStyle.Flex)
        gap(0.75.cssRem)
        padding(1.cssRem)
        backgroundColor(rgb(255, 243, 224))
        borderRadius(8.px)
        border(1.px, LineStyle.Solid, rgb(255, 193, 7))
        marginTop(1.cssRem)
    }

    val warningIcon by style {
        fontSize(1.25.cssRem)
    }

    val confirmBox by style {
        padding(1.cssRem)
        backgroundColor(rgb(255, 245, 245))
        borderRadius(8.px)
        border(1.px, LineStyle.Solid, rgb(244, 67, 54))
    }

    val confirmText by style {
        margin(0.px, 0.px, 1.cssRem)
        color(rgb(60, 60, 60))
    }

    val confirmButtons by style {
        display(DisplayStyle.Flex)
        gap(0.75.cssRem)
        flexWrap(FlexWrap.Wrap)
    }

    val button by style {
        padding(0.75.cssRem, 1.5.cssRem)
        fontSize(1.cssRem)
        fontWeight(500)
        borderRadius(8.px)
        border(0.px)
        cursor("pointer")
        property("transition", "all 0.2s")
    }

    val dangerButton by style {
        backgroundColor(rgb(244, 67, 54))
        color(Color.white)
    }

    val dangerButtonHover by style {
        backgroundColor(rgb(211, 47, 47))
    }

    val secondaryButton by style {
        backgroundColor(rgb(224, 224, 224))
        color(rgb(33, 33, 33))
    }

    val secondaryButtonHover by style {
        backgroundColor(rgb(189, 189, 189))
    }

    val infoGrid by style {
        display(DisplayStyle.Flex)
        flexDirection(FlexDirection.Column)
        gap(0.75.cssRem)
        marginBottom(1.5.cssRem)
    }

    val infoItem by style {
        fontSize(0.9375.cssRem)
        color(rgb(60, 60, 60))
    }

    val infoLabel by style {
        fontWeight(600)
        marginRight(0.5.cssRem)
    }

    val infoValue by style {
        color(rgb(100, 100, 100))
    }

    val linksContainer by style {
        display(DisplayStyle.Flex)
        flexWrap(FlexWrap.Wrap)
        gap(1.cssRem)
    }

    val linkButton by style {
        color(rgb(27, 94, 32))
        textDecoration("none")
        fontSize(1.cssRem)
        fontWeight(500)
    }
}
