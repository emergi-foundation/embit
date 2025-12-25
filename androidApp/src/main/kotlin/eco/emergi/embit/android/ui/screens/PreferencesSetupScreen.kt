package eco.emergi.embit.android.ui.screens

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import eco.emergi.embit.domain.models.EnergyProduct
import eco.emergi.embit.domain.models.EnergyProducts
import eco.emergi.embit.domain.usecases.grid.SetEnergyProductUseCase
import kotlinx.coroutines.launch
import org.koin.compose.koinInject

/**
 * First-time user onboarding screen shown after Google Sign-In.
 *
 * Allows new users to set up their preferences before entering the app:
 * - Select energy product (Standard Grid, Green Power, etc.)
 * - Can skip setup and use defaults
 *
 * @param onComplete Callback when setup is complete (user clicks "Get Started" or "Skip")
 */
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun PreferencesSetupScreen(
    onComplete: () -> Unit
) {
    val scope = rememberCoroutineScope()

    // Get use cases from Koin
    val setEnergyProductUseCase: SetEnergyProductUseCase = koinInject()

    // State
    var selectedEnergyProduct by remember { mutableStateOf(EnergyProducts.STANDARD_GRID) }
    var isSaving by remember { mutableStateOf(false) }

    val snackbarHostState = remember { SnackbarHostState() }

    Scaffold(
        snackbarHost = { SnackbarHost(snackbarHostState) }
    ) { paddingValues ->
        Box(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
        ) {
            Column(
                modifier = Modifier
                    .fillMaxSize()
                    .verticalScroll(rememberScrollState())
                    .padding(24.dp),
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                Spacer(modifier = Modifier.height(32.dp))

                // Welcome header
                Text(
                    text = "Welcome to Embit!",
                    style = MaterialTheme.typography.headlineMedium,
                    fontWeight = FontWeight.Bold,
                    color = MaterialTheme.colorScheme.primary
                )

                Spacer(modifier = Modifier.height(8.dp))

                Text(
                    text = "Let's set up your preferences to track your energy impact",
                    style = MaterialTheme.typography.bodyLarge,
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                    textAlign = TextAlign.Center
                )

                Spacer(modifier = Modifier.height(48.dp))

                // Energy Product Section
                Text(
                    text = "Energy Product",
                    style = MaterialTheme.typography.titleMedium,
                    fontWeight = FontWeight.Bold,
                    modifier = Modifier.fillMaxWidth()
                )

                Spacer(modifier = Modifier.height(8.dp))

                Text(
                    text = "Select your electricity plan to get accurate carbon impact calculations",
                    style = MaterialTheme.typography.bodyMedium,
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                    modifier = Modifier.fillMaxWidth()
                )

                Spacer(modifier = Modifier.height(16.dp))

                // Energy product options
                EnergyProducts.ALL_PRODUCTS.forEach { product ->
                    val isSelected = product.type == selectedEnergyProduct.type
                    OutlinedCard(
                        onClick = { selectedEnergyProduct = product },
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(vertical = 6.dp),
                        colors = if (isSelected) {
                            CardDefaults.outlinedCardColors(
                                containerColor = MaterialTheme.colorScheme.primaryContainer,
                                contentColor = MaterialTheme.colorScheme.onPrimaryContainer
                            )
                        } else {
                            CardDefaults.outlinedCardColors()
                        },
                        border = if (isSelected) {
                            CardDefaults.outlinedCardBorder().copy(
                                brush = androidx.compose.ui.graphics.SolidColor(
                                    MaterialTheme.colorScheme.primary
                                ),
                                width = 2.dp
                            )
                        } else {
                            CardDefaults.outlinedCardBorder()
                        }
                    ) {
                        Column(
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(16.dp)
                        ) {
                            Row(
                                modifier = Modifier.fillMaxWidth(),
                                horizontalArrangement = Arrangement.SpaceBetween,
                                verticalAlignment = Alignment.CenterVertically
                            ) {
                                Text(
                                    text = product.displayName,
                                    style = MaterialTheme.typography.bodyLarge,
                                    fontWeight = if (isSelected) FontWeight.Bold else FontWeight.SemiBold
                                )
                                product.fixedRenewablePercentage?.let { percentage ->
                                    Surface(
                                        color = if (isSelected) {
                                            MaterialTheme.colorScheme.primary
                                        } else {
                                            MaterialTheme.colorScheme.primaryContainer
                                        },
                                        shape = MaterialTheme.shapes.small
                                    ) {
                                        Text(
                                            text = "${percentage.toInt()}%",
                                            style = MaterialTheme.typography.labelMedium,
                                            color = if (isSelected) {
                                                MaterialTheme.colorScheme.onPrimary
                                            } else {
                                                MaterialTheme.colorScheme.onPrimaryContainer
                                            },
                                            fontWeight = FontWeight.Bold,
                                            modifier = Modifier.padding(horizontal = 8.dp, vertical = 4.dp)
                                        )
                                    }
                                }
                            }
                            Spacer(modifier = Modifier.height(8.dp))
                            Text(
                                text = product.description,
                                style = MaterialTheme.typography.bodySmall,
                                color = if (isSelected) {
                                    MaterialTheme.colorScheme.onPrimaryContainer.copy(alpha = 0.8f)
                                } else {
                                    MaterialTheme.colorScheme.onSurfaceVariant
                                }
                            )
                        }
                    }
                }

                Spacer(modifier = Modifier.height(32.dp))

                // Get Started button
                Button(
                    onClick = {
                        scope.launch {
                            isSaving = true
                            try {
                                // Save energy product
                                setEnergyProductUseCase(selectedEnergyProduct)
                                onComplete()
                            } catch (e: Exception) {
                                snackbarHostState.showSnackbar(
                                    message = "Failed to save preferences: ${e.message}",
                                    duration = SnackbarDuration.Short
                                )
                            } finally {
                                isSaving = false
                            }
                        }
                    },
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(50.dp),
                    enabled = !isSaving
                ) {
                    if (isSaving) {
                        CircularProgressIndicator(
                            modifier = Modifier.size(24.dp),
                            color = MaterialTheme.colorScheme.onPrimary
                        )
                    } else {
                        Text("Get Started")
                    }
                }

                Spacer(modifier = Modifier.height(16.dp))

                // Skip button
                TextButton(
                    onClick = {
                        // Use default settings and complete onboarding
                        onComplete()
                    },
                    enabled = !isSaving
                ) {
                    Text("Skip for now")
                }

                Spacer(modifier = Modifier.height(16.dp))

                // Info text
                Text(
                    text = "You can change these settings later in the Settings screen",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                    textAlign = TextAlign.Center,
                    modifier = Modifier.padding(horizontal = 16.dp)
                )
            }
        }
    }
}
