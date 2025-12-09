package eco.emergi.embit.android.ui

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.navigation.NavDestination.Companion.hierarchy
import androidx.navigation.NavGraph.Companion.findStartDestination
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.navigation.compose.rememberNavController
import eco.emergi.embit.android.ui.components.SolarPoweredIndicator
import eco.emergi.embit.android.ui.screens.*
import eco.emergi.embit.domain.usecases.grid.ObserveGridStatusUseCase
import org.koin.compose.koinInject

/**
 * Main app composable with navigation
 */
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun EmbitApp() {
    val navController = rememberNavController()
    val navBackStackEntry by navController.currentBackStackEntryAsState()
    val currentRoute = navBackStackEntry?.destination?.route

    // Observe grid status globally for solar indicator
    val observeGridStatusUseCase: ObserveGridStatusUseCase = koinInject()
    val gridStatus by observeGridStatusUseCase().collectAsState(initial = null)

    // Determine if we should show bottom bar (hide on auth screens)
    val showBottomBar = currentRoute !in listOf(
        Screen.Login.route,
        Screen.SignUp.route,
        Screen.Profile.route,
        Screen.ForgotPassword.route
    )

    Scaffold(
        bottomBar = {
            if (showBottomBar) {
                NavigationBar {
                    val currentDestination = navBackStackEntry?.destination

                    bottomNavItems.forEach { screen ->
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
                startDestination = Screen.Monitor.route
            ) {
            composable(Screen.Monitor.route) {
                BatteryMonitorScreen()
            }
            composable(Screen.History.route) {
                BatteryHistoryScreen()
            }
            composable(Screen.Health.route) {
                BatteryHealthScreen()
            }
            composable(Screen.Vpp.route) {
                VppScreen()
            }
            composable(Screen.Settings.route) {
                SettingsScreen(
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
                LoginScreen(
                    onNavigateToSignUp = {
                        navController.navigate(Screen.SignUp.route)
                    },
                    onNavigateToForgotPassword = {
                        navController.navigate(Screen.ForgotPassword.route)
                    },
                    onLoginSuccess = {
                        navController.navigate(Screen.Monitor.route) {
                            popUpTo(Screen.Login.route) { inclusive = true }
                        }
                    }
                )
            }

            composable(Screen.SignUp.route) {
                SignUpScreen(
                    onNavigateBack = {
                        navController.popBackStack()
                    },
                    onSignUpSuccess = {
                        navController.navigate(Screen.Monitor.route) {
                            popUpTo(Screen.SignUp.route) { inclusive = true }
                        }
                    }
                )
            }

            composable(Screen.Profile.route) {
                ProfileScreen(
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
}

private val bottomNavItems = listOf(
    Screen.Monitor,
    Screen.History,
    Screen.Health,
    Screen.Vpp,
    Screen.Settings
)
