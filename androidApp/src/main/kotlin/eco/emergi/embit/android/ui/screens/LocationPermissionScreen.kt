package eco.emergi.embit.android.ui.screens

import android.Manifest
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.layout.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.LocationOn
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import eco.emergi.embit.android.services.LocationBasedGridManager
import kotlinx.coroutines.launch
import org.koin.compose.koinInject

/**
 * Location permission request screen shown after user completes preferences setup.
 *
 * This screen:
 * - Explains why location is needed (for accurate grid region detection)
 * - Requests location permission
 * - Triggers grid region detection once permission is granted
 * - Allows skipping (will default to CAISO_NORTH)
 */
@Composable
fun LocationPermissionScreen(
    onComplete: () -> Unit
) {
    val scope = rememberCoroutineScope()
    val locationManager: LocationBasedGridManager = koinInject()

    var isDetecting by remember { mutableStateOf(false) }
    var detectedRegion by remember { mutableStateOf<String?>(null) }
    var showError by remember { mutableStateOf(false) }

    // Permission launcher
    val permissionLauncher = rememberLauncherForActivityResult(
        contract = ActivityResultContracts.RequestPermission()
    ) { isGranted ->
        if (isGranted) {
            // Permission granted, detect grid region
            scope.launch {
                isDetecting = true
                try {
                    val region = locationManager.detectAndSetGridRegion()
                    detectedRegion = region
                    if (region != null) {
                        // Wait a moment to show success message
                        kotlinx.coroutines.delay(1500)
                        onComplete()
                    } else {
                        showError = true
                    }
                } catch (e: Exception) {
                    showError = true
                } finally {
                    isDetecting = false
                }
            }
        } else {
            // Permission denied, continue with default
            onComplete()
        }
    }

    Scaffold { paddingValues ->
        Box(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
        ) {
            Column(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(24.dp),
                horizontalAlignment = Alignment.CenterHorizontally,
                verticalArrangement = Arrangement.Center
            ) {
                // Icon
                Icon(
                    imageVector = Icons.Default.LocationOn,
                    contentDescription = null,
                    tint = MaterialTheme.colorScheme.primary,
                    modifier = Modifier.size(80.dp)
                )

                Spacer(modifier = Modifier.height(32.dp))

                // Title
                Text(
                    text = "Enable Location Services",
                    style = MaterialTheme.typography.headlineMedium,
                    fontWeight = FontWeight.Bold,
                    color = MaterialTheme.colorScheme.primary,
                    textAlign = TextAlign.Center
                )

                Spacer(modifier = Modifier.height(16.dp))

                // Description
                Text(
                    text = "Embit uses your location to detect your local grid operator and provide accurate carbon impact calculations.",
                    style = MaterialTheme.typography.bodyLarge,
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                    textAlign = TextAlign.Center
                )

                Spacer(modifier = Modifier.height(24.dp))

                // Benefits card
                Card(
                    modifier = Modifier.fillMaxWidth(),
                    colors = CardDefaults.cardColors(
                        containerColor = MaterialTheme.colorScheme.secondaryContainer
                    )
                ) {
                    Column(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(16.dp)
                    ) {
                        Text(
                            text = "Why we need this:",
                            style = MaterialTheme.typography.titleSmall,
                            fontWeight = FontWeight.Bold
                        )
                        Spacer(modifier = Modifier.height(12.dp))
                        BulletPoint("Automatically detect your grid operator (CAISO, ERCOT, etc.)")
                        BulletPoint("Show accurate renewable energy percentages for your region")
                        BulletPoint("Provide personalized charging recommendations")
                        BulletPoint("Help you reduce carbon emissions effectively")
                    }
                }

                Spacer(modifier = Modifier.height(32.dp))

                // Detection status
                if (isDetecting) {
                    CircularProgressIndicator()
                    Spacer(modifier = Modifier.height(16.dp))
                    Text(
                        text = "Detecting your grid region...",
                        style = MaterialTheme.typography.bodyMedium,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                } else if (detectedRegion != null) {
                    Text(
                        text = "✓ Detected: ${locationManager.getGridDisplayName(detectedRegion!!)}",
                        style = MaterialTheme.typography.bodyLarge,
                        color = MaterialTheme.colorScheme.primary,
                        fontWeight = FontWeight.Bold
                    )
                } else if (showError) {
                    Text(
                        text = "Could not detect location. Using default region.",
                        style = MaterialTheme.typography.bodyMedium,
                        color = MaterialTheme.colorScheme.error
                    )
                }

                Spacer(modifier = Modifier.height(32.dp))

                // Enable button
                Button(
                    onClick = {
                        permissionLauncher.launch(Manifest.permission.ACCESS_COARSE_LOCATION)
                    },
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(50.dp),
                    enabled = !isDetecting
                ) {
                    Text("Enable Location Services")
                }

                Spacer(modifier = Modifier.height(16.dp))

                // Skip button
                TextButton(
                    onClick = onComplete,
                    enabled = !isDetecting
                ) {
                    Text("Skip for now")
                }

                Spacer(modifier = Modifier.height(16.dp))

                // Privacy note
                Text(
                    text = "Your location is only used to determine your grid region and is not stored or shared.",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant.copy(alpha = 0.7f),
                    textAlign = TextAlign.Center
                )
            }
        }
    }
}

@Composable
private fun BulletPoint(text: String) {
    Row(
        modifier = Modifier.padding(vertical = 4.dp)
    ) {
        Text(
            text = "•",
            style = MaterialTheme.typography.bodyMedium,
            modifier = Modifier.padding(end = 8.dp)
        )
        Text(
            text = text,
            style = MaterialTheme.typography.bodyMedium
        )
    }
}
