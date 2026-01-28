package eco.emergi.embit.android.ui

import androidx.compose.foundation.layout.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.navigation.NavDestination.Companion.hierarchy
import androidx.navigation.NavGraph.Companion.findStartDestination
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.navigation.compose.rememberNavController
import eco.emergi.embit.android.analytics.AnalyticsManager
import eco.emergi.embit.android.analytics.RemoteConfigManager
import eco.emergi.embit.android.ui.components.SolarPoweredIndicator
import eco.emergi.embit.android.ui.screens.*
import eco.emergi.embit.domain.models.AuthState
import eco.emergi.embit.domain.models.GridStatus
import eco.emergi.embit.domain.usecases.auth.ObserveAuthStateUseCase
import eco.emergi.embit.domain.usecases.grid.ObserveGridStatusUseCase
import kotlinx.coroutines.flow.collectLatest
import org.koin.compose.koinInject

/**
 * Main app composable with navigation
 */
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun EmbitApp(
    analyticsManager: AnalyticsManager,
    remoteConfigManager: RemoteConfigManager
) {
    val navController = rememberNavController()
    val navBackStackEntry by navController.currentBackStackEntryAsState()
    val currentRoute = navBackStackEntry?.destination?.route

    // Check for maintenance mode or forced update
    val isMaintenanceMode = remoteConfigManager.isMaintenanceMode()
    val isForceUpdateRequired = remoteConfigManager.isForceUpdateRequired()

    // Show maintenance or update screen if needed
    if (isMaintenanceMode) {
        MaintenanceScreen(message = remoteConfigManager.getMaintenanceMessage())
        return
    }

    if (isForceUpdateRequired) {
        ForceUpdateScreen(minVersion = remoteConfigManager.getMinAppVersion())
        return
    }

    // Auto sign-in: Observe auth state and navigate accordingly
    val observeAuthStateUseCase: ObserveAuthStateUseCase = koinInject()
    var authChecked by remember { mutableStateOf(false) }

    LaunchedEffect(Unit) {
        observeAuthStateUseCase().collectLatest { authState ->
            if (!authChecked) {
                authChecked = true
                // Auto-navigate to Monitor if already authenticated
                if (authState is AuthState.Authenticated && currentRoute == Screen.Login.route) {
                    navController.navigate(Screen.Monitor.route) {
                        popUpTo(Screen.Login.route) { inclusive = true }
                    }
                }
            }
        }
    }

    // Observe grid status globally for solar indicator
    val observeGridStatusUseCase: ObserveGridStatusUseCase = koinInject()
    var gridStatus by remember { mutableStateOf<GridStatus?>(null) }

    LaunchedEffect(Unit) {
        observeGridStatusUseCase().collectLatest { status ->
            gridStatus = status
        }
    }

    // Determine if we should show bottom bar (hide on auth screens and onboarding)
    val showBottomBar = currentRoute !in listOf(
        Screen.Login.route,
        Screen.SignUp.route,
        Screen.Profile.route,
        Screen.ForgotPassword.route,
        Screen.PreferencesSetup.route,
        Screen.LocationPermission.route,
        Screen.AnalyticsConsent.route
    )

    // Build bottom nav items dynamically based on feature flags
    val dynamicBottomNavItems = remember(remoteConfigManager) {
        buildList {
            add(Screen.Monitor)
            add(Screen.History)
            add(Screen.Health)
            // Only add VPP if enabled in remote config
            if (remoteConfigManager.isVppEnabled()) {
                add(Screen.Vpp)
            }
            add(Screen.Settings)
        }
    }

    Scaffold(
        bottomBar = {
            if (showBottomBar) {
                NavigationBar {
                    val currentDestination = navBackStackEntry?.destination

                    dynamicBottomNavItems.forEach { screen ->
                        NavigationBarItem(
                            icon = { Icon(screen.icon!!, contentDescription = screen.label) },
                            label = { Text(screen.label) },
                            selected = currentDestination?.hierarchy?.any { it.route == screen.route } == true,
                            onClick = {
                                navController.navigate(screen.route) {
                                    popUpTo(navController.graph.findStartDestination().id) {
                                        saveState = true
                                    }
                                    launchSingleTop = true
                                    restoreState = true
                                }
                            }
                        )
                    }
                }
            }
        }
    ) { innerPadding ->
        Column(
            modifier = Modifier.padding(innerPadding)
        ) {
            // Solar-powered indicator at the top (visible at all times)
            SolarPoweredIndicator(gridStatus = gridStatus)

            // Main navigation content
            NavHost(
                navController = navController,
                startDestination = Screen.Login.route
            ) {
            composable(Screen.Monitor.route) {
                LaunchedEffect(Unit) {
                    analyticsManager.logScreenView("Monitor", "BatteryMonitorScreen")
                }
                BatteryMonitorScreen()
            }
            composable(Screen.History.route) {
                LaunchedEffect(Unit) {
                    analyticsManager.logScreenView("History", "BatteryHistoryScreen")
                }
                BatteryHistoryScreen()
            }
            composable(Screen.Health.route) {
                LaunchedEffect(Unit) {
                    analyticsManager.logScreenView("Health", "BatteryHealthScreen")
                }
                BatteryHealthScreen()
            }
            composable(Screen.Vpp.route) {
                LaunchedEffect(Unit) {
                    analyticsManager.logScreenView("VPP", "VppScreen")
                }
                VppScreen(remoteConfigManager = remoteConfigManager)
            }
            composable(Screen.Settings.route) {
                LaunchedEffect(Unit) {
                    analyticsManager.logScreenView("Settings", "SettingsScreen")
                }
                SettingsScreen(
                    analyticsManager = analyticsManager,
                    remoteConfigManager = remoteConfigManager,
                    onNavigateToLogin = {
                        navController.navigate(Screen.Login.route)
                    },
                    onNavigateToProfile = {
                        navController.navigate(Screen.Profile.route)
                    }
                )
            }

            // Auth screens
            composable(Screen.Login.route) {
                LaunchedEffect(Unit) {
                    analyticsManager.logScreenView("Login", "LoginScreen")
                }
                LoginScreen(
                    analyticsManager = analyticsManager,
                    onNavigateToSignUp = {
                        navController.navigate(Screen.SignUp.route)
                    },
                    onNavigateToForgotPassword = {
                        navController.navigate(Screen.ForgotPassword.route)
                    },
                    onLoginSuccess = { isNewUser ->
                        if (isNewUser) {
                            navController.navigate(Screen.PreferencesSetup.route) {
                                popUpTo(Screen.Login.route) { inclusive = true }
                            }
                        } else {
                            navController.navigate(Screen.Monitor.route) {
                                popUpTo(Screen.Login.route) { inclusive = true }
                            }
                        }
                    }
                )
            }

            composable(Screen.SignUp.route) {
                LaunchedEffect(Unit) {
                    analyticsManager.logScreenView("SignUp", "SignUpScreen")
                }
                SignUpScreen(
                    analyticsManager = analyticsManager,
                    onNavigateBack = {
                        navController.popBackStack()
                    },
                    onSignUpSuccess = { isNewUser ->
                        // Always show preferences setup for new sign-ups
                        navController.navigate(Screen.PreferencesSetup.route) {
                            popUpTo(Screen.SignUp.route) { inclusive = true }
                        }
                    }
                )
            }

            composable(Screen.PreferencesSetup.route) {
                LaunchedEffect(Unit) {
                    analyticsManager.logScreenView("PreferencesSetup", "PreferencesSetupScreen")
                }
                PreferencesSetupScreen(
                    onComplete = {
                        // After preferences, request location permission
                        navController.navigate(Screen.LocationPermission.route) {
                            popUpTo(Screen.PreferencesSetup.route) { inclusive = true }
                        }
                    }
                )
            }

            composable(Screen.LocationPermission.route) {
                LaunchedEffect(Unit) {
                    analyticsManager.logScreenView("LocationPermission", "LocationPermissionScreen")
                }
                LocationPermissionScreen(
                    onComplete = {
                        navController.navigate(Screen.AnalyticsConsent.route) {
                            popUpTo(Screen.LocationPermission.route) { inclusive = true }
                        }
                    }
                )
            }

            composable(Screen.AnalyticsConsent.route) {
                LaunchedEffect(Unit) {
                    analyticsManager.logScreenView("AnalyticsConsent", "AnalyticsConsentScreen")
                }
                AnalyticsConsentScreen(
                    onComplete = {
                        navController.navigate(Screen.Monitor.route) {
                            popUpTo(Screen.AnalyticsConsent.route) { inclusive = true }
                        }
                    },
                    onSkip = {
                        navController.navigate(Screen.Monitor.route) {
                            popUpTo(Screen.AnalyticsConsent.route) { inclusive = true }
                        }
                    }
                )
            }

            composable(Screen.Profile.route) {
                LaunchedEffect(Unit) {
                    analyticsManager.logScreenView("Profile", "ProfileScreen")
                }
                ProfileScreen(
                    analyticsManager = analyticsManager,
                    onNavigateBack = {
                        navController.popBackStack()
                    },
                    onSignOut = {
                        navController.navigate(Screen.Monitor.route) {
                            popUpTo(navController.graph.findStartDestination().id)
                        }
                    }
                )
            }
        }
        }
    }
}

/**
 * Navigation destinations
 */
sealed class Screen(val route: String, val label: String = "", val icon: ImageVector? = null) {
    // Bottom navigation screens
    data object Monitor : Screen("monitor", "Monitor", Icons.Default.BatteryChargingFull)
    data object History : Screen("history", "History", Icons.Default.Analytics)
    data object Health : Screen("health", "Health", Icons.Default.Favorite)
    data object Vpp : Screen("vpp", "Grid", Icons.Default.ElectricBolt)
    data object Settings : Screen("settings", "Settings", Icons.Default.Settings)

    // Auth screens (not in bottom nav)
    data object Login : Screen("login")
    data object SignUp : Screen("signup")
    data object Profile : Screen("profile")
    data object ForgotPassword : Screen("forgot_password")
    data object PreferencesSetup : Screen("preferences_setup")
    data object LocationPermission : Screen("location_permission")
    data object AnalyticsConsent : Screen("analytics_consent")
}

private val bottomNavItems = listOf(
    Screen.Monitor,
    Screen.History,
    Screen.Health,
    Screen.Vpp,
    Screen.Settings
)

/**
 * Maintenance mode screen shown when app is under maintenance.
 */
@Composable
private fun MaintenanceScreen(message: String) {
    Surface(
        modifier = Modifier.fillMaxSize(),
        color = MaterialTheme.colorScheme.background
    ) {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(24.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            Icon(
                imageVector = Icons.Default.Build,
                contentDescription = null,
                modifier = Modifier.size(96.dp),
                tint = MaterialTheme.colorScheme.primary
            )

            Spacer(modifier = Modifier.height(24.dp))

            Text(
                text = "Under Maintenance",
                style = MaterialTheme.typography.headlineMedium,
                fontWeight = androidx.compose.ui.text.font.FontWeight.Bold,
                textAlign = androidx.compose.ui.text.style.TextAlign.Center
            )

            Spacer(modifier = Modifier.height(16.dp))

            Text(
                text = message,
                style = MaterialTheme.typography.bodyLarge,
                color = MaterialTheme.colorScheme.onSurfaceVariant,
                textAlign = androidx.compose.ui.text.style.TextAlign.Center
            )

            Spacer(modifier = Modifier.height(32.dp))

            Text(
                text = "Please check back later",
                style = MaterialTheme.typography.bodyMedium,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
        }
    }
}

/**
 * Force update screen shown when app version is too old.
 */
@Composable
private fun ForceUpdateScreen(minVersion: String) {
    Surface(
        modifier = Modifier.fillMaxSize(),
        color = MaterialTheme.colorScheme.background
    ) {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(24.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            Icon(
                imageVector = Icons.Default.Update,
                contentDescription = null,
                modifier = Modifier.size(96.dp),
                tint = MaterialTheme.colorScheme.primary
            )

            Spacer(modifier = Modifier.height(24.dp))

            Text(
                text = "Update Required",
                style = MaterialTheme.typography.headlineMedium,
                fontWeight = androidx.compose.ui.text.font.FontWeight.Bold,
                textAlign = androidx.compose.ui.text.style.TextAlign.Center
            )

            Spacer(modifier = Modifier.height(16.dp))

            Text(
                text = "A new version of Embit is available. Please update to continue using the app.",
                style = MaterialTheme.typography.bodyLarge,
                color = MaterialTheme.colorScheme.onSurfaceVariant,
                textAlign = androidx.compose.ui.text.style.TextAlign.Center
            )

            Spacer(modifier = Modifier.height(8.dp))

            Text(
                text = "Required Version: $minVersion",
                style = MaterialTheme.typography.bodyMedium,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )

            Spacer(modifier = Modifier.height(32.dp))

            Button(
                onClick = {
                    // TODO: Open Play Store
                },
                modifier = Modifier.fillMaxWidth().height(50.dp)
            ) {
                Icon(Icons.Default.ShoppingCart, contentDescription = null)
                Spacer(Modifier.width(8.dp))
                Text("Update Now")
            }
        }
    }
}
