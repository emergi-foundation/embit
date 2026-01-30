package eco.emergi.embit.android.ui.screens

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import eco.emergi.embit.domain.models.AnalyticsConsent
import eco.emergi.embit.domain.repositories.IAnalyticsRepository
import kotlinx.coroutines.launch
import org.koin.compose.koinInject

/**
 * Analytics consent screen for GDPR compliance.
 * Shows privacy options and allows users to control data collection.
 */
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun AnalyticsConsentScreen(
    onComplete: () -> Unit,
    onSkip: () -> Unit
) {
    val scope = rememberCoroutineScope()
    val analyticsRepository: IAnalyticsRepository = koinInject()

    var analyticsEnabled by remember { mutableStateOf(true) }
    var crashlyticsEnabled by remember { mutableStateOf(true) }
    var anonymousDataSharingEnabled by remember { mutableStateOf(false) }
    var personalizedRecommendationsEnabled by remember { mutableStateOf(true) }

    var isSubmitting by remember { mutableStateOf(false) }
    val snackbarHostState = remember { SnackbarHostState() }

    fun saveConsent() {
        scope.launch {
            isSubmitting = true
            val consent = AnalyticsConsent(
                analyticsEnabled = analyticsEnabled,
                crashlyticsEnabled = crashlyticsEnabled,
                anonymousDataSharingEnabled = anonymousDataSharingEnabled,
                personalizedRecommendationsEnabled = personalizedRecommendationsEnabled
            )

            analyticsRepository.updateAnalyticsConsent(consent)
                .onSuccess {
                    onComplete()
                }
                .onFailure { error ->
                    snackbarHostState.showSnackbar(
                        message = "Failed to save preferences: ${error.message}",
                        duration = SnackbarDuration.Short
                    )
                    isSubmitting = false
                }
        }
    }

    Scaffold(
        snackbarHost = { SnackbarHost(snackbarHostState) }
    ) { paddingValues ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
                .verticalScroll(rememberScrollState())
                .padding(24.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            // Header
            Icon(
                imageVector = Icons.Default.PrivacyTip,
                contentDescription = null,
                modifier = Modifier.size(64.dp),
                tint = MaterialTheme.colorScheme.primary
            )

            Spacer(modifier = Modifier.height(16.dp))

            Text(
                text = "Privacy & Data",
                style = MaterialTheme.typography.headlineMedium,
                fontWeight = FontWeight.Bold,
                textAlign = TextAlign.Center
            )

            Spacer(modifier = Modifier.height(8.dp))

            Text(
                text = "Help us improve Embit while protecting your privacy",
                style = MaterialTheme.typography.bodyLarge,
                color = MaterialTheme.colorScheme.onSurfaceVariant,
                textAlign = TextAlign.Center
            )

            Spacer(modifier = Modifier.height(32.dp))

            // Privacy Options Card
            Card(
                modifier = Modifier.fillMaxWidth(),
                colors = CardDefaults.cardColors(
                    containerColor = MaterialTheme.colorScheme.surfaceVariant
                )
            ) {
                Column(modifier = Modifier.padding(16.dp)) {
                    // Analytics Toggle
                    ConsentOption(
                        icon = Icons.Default.Analytics,
                        title = "Usage Analytics",
                        description = "Help us understand how you use Embit to improve features and performance",
                        checked = analyticsEnabled,
                        onCheckedChange = { analyticsEnabled = it },
                        recommended = true
                    )

                    HorizontalDivider(modifier = Modifier.padding(vertical = 12.dp))

                    // Crashlytics Toggle
                    ConsentOption(
                        icon = Icons.Default.BugReport,
                        title = "Crash Reports",
                        description = "Automatically send crash reports to help us fix bugs faster",
                        checked = crashlyticsEnabled,
                        onCheckedChange = { crashlyticsEnabled = it },
                        recommended = true
                    )

                    HorizontalDivider(modifier = Modifier.padding(vertical = 12.dp))

                    // Personalized Recommendations Toggle
                    ConsentOption(
                        icon = Icons.Default.TipsAndUpdates,
                        title = "Personalized Tips",
                        description = "Get charging recommendations based on your battery usage patterns",
                        checked = personalizedRecommendationsEnabled,
                        onCheckedChange = { personalizedRecommendationsEnabled = it },
                        recommended = false
                    )

                    HorizontalDivider(modifier = Modifier.padding(vertical = 12.dp))

                    // Anonymous Data Sharing Toggle
                    ConsentOption(
                        icon = Icons.Default.Science,
                        title = "Anonymous Research Data",
                        description = "Share anonymized battery health data to contribute to energy research",
                        checked = anonymousDataSharingEnabled,
                        onCheckedChange = { anonymousDataSharingEnabled = it },
                        recommended = false,
                        highlighted = true
                    )
                }
            }

            Spacer(modifier = Modifier.height(24.dp))

            // Privacy Note
            Card(
                modifier = Modifier.fillMaxWidth(),
                colors = CardDefaults.cardColors(
                    containerColor = MaterialTheme.colorScheme.primaryContainer
                )
            ) {
                Row(
                    modifier = Modifier.padding(12.dp),
                    horizontalArrangement = Arrangement.spacedBy(8.dp)
                ) {
                    Icon(
                        imageVector = Icons.Default.Lock,
                        contentDescription = null,
                        tint = MaterialTheme.colorScheme.onPrimaryContainer,
                        modifier = Modifier.size(20.dp)
                    )
                    Text(
                        text = "Your battery data is encrypted and never sold to third parties. You can change these settings anytime in Settings.",
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onPrimaryContainer
                    )
                }
            }

            Spacer(modifier = Modifier.height(24.dp))

            // Action Buttons
            Button(
                onClick = { saveConsent() },
                modifier = Modifier
                    .fillMaxWidth()
                    .height(50.dp),
                enabled = !isSubmitting
            ) {
                if (isSubmitting) {
                    CircularProgressIndicator(
                        modifier = Modifier.size(24.dp),
                        color = MaterialTheme.colorScheme.onPrimary
                    )
                } else {
                    Text("Continue")
                }
            }

            Spacer(modifier = Modifier.height(12.dp))

            TextButton(
                onClick = onSkip,
                enabled = !isSubmitting
            ) {
                Text("Skip for now")
            }

            Spacer(modifier = Modifier.height(16.dp))

            // Privacy Policy Link
            Text(
                text = "By continuing, you agree to our Privacy Policy",
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant,
                textAlign = TextAlign.Center
            )
        }
    }
}

/**
 * Reusable consent option component
 */
@Composable
private fun ConsentOption(
    icon: androidx.compose.ui.graphics.vector.ImageVector,
    title: String,
    description: String,
    checked: Boolean,
    onCheckedChange: (Boolean) -> Unit,
    recommended: Boolean = false,
    highlighted: Boolean = false
) {
    Row(
        modifier = Modifier.fillMaxWidth(),
        verticalAlignment = Alignment.Top
    ) {
        Icon(
            imageVector = icon,
            contentDescription = null,
            modifier = Modifier
                .size(24.dp)
                .padding(top = 2.dp),
            tint = if (highlighted) MaterialTheme.colorScheme.primary else MaterialTheme.colorScheme.onSurfaceVariant
        )

        Spacer(modifier = Modifier.width(12.dp))

        Column(
            modifier = Modifier.weight(1f)
        ) {
            Row(
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                Text(
                    text = title,
                    style = MaterialTheme.typography.titleSmall,
                    fontWeight = FontWeight.Medium
                )

                if (recommended) {
                    Surface(
                        color = MaterialTheme.colorScheme.primaryContainer,
                        shape = MaterialTheme.shapes.small
                    ) {
                        Text(
                            text = "Recommended",
                            style = MaterialTheme.typography.labelSmall,
                            color = MaterialTheme.colorScheme.onPrimaryContainer,
                            modifier = Modifier.padding(horizontal = 6.dp, vertical = 2.dp)
                        )
                    }
                }
            }

            Spacer(modifier = Modifier.height(4.dp))

            Text(
                text = description,
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
        }

        Switch(
            checked = checked,
            onCheckedChange = onCheckedChange
        )
    }
}
