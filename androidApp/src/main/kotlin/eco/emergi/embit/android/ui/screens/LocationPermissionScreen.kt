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
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.semantics.*
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import eco.emergi.embit.android.R
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
                    text = stringResource(R.string.permission_location_title),
                    style = MaterialTheme.typography.headlineMedium,
                    fontWeight = FontWeight.Bold,
                    color = MaterialTheme.colorScheme.primary,
                    textAlign = TextAlign.Center,
                    modifier = Modifier.semantics { heading() }
                )

                Spacer(modifier = Modifier.height(16.dp))

                // Description
                Text(
                    text = stringResource(R.string.permission_location_desc),
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
                            text = stringResource(R.string.permission_why_needed),
                            style = MaterialTheme.typography.titleSmall,
                            fontWeight = FontWeight.Bold
                        )
                        Spacer(modifier = Modifier.height(12.dp))
                        BulletPoint(stringResource(R.string.permission_detect_grid))
                        BulletPoint(stringResource(R.string.permission_accurate_renewables))
                        BulletPoint(stringResource(R.string.permission_personalized_recommendations))
                        BulletPoint(stringResource(R.string.permission_reduce_carbon))
                    }
                }

                Spacer(modifier = Modifier.height(32.dp))

                // Detection status
                if (isDetecting) {
                    CircularProgressIndicator(
                        modifier = Modifier.semantics {
                            liveRegion = LiveRegionMode.Polite
                            contentDescription = "Detecting grid region"
                        }
                    )
                    Spacer(modifier = Modifier.height(16.dp))
                    Text(
                        text = stringResource(R.string.permission_detecting),
                        style = MaterialTheme.typography.bodyMedium,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                } else if (detectedRegion != null) {
                    val regionName = locationManager.getGridDisplayName(detectedRegion!!)
                    Text(
                        text = stringResource(R.string.permission_detected, regionName),
                        style = MaterialTheme.typography.bodyLarge,
                        color = MaterialTheme.colorScheme.primary,
                        fontWeight = FontWeight.Bold,
                        modifier = Modifier.semantics {
                            liveRegion = LiveRegionMode.Polite
                            contentDescription = "Grid region detected: $regionName"
                        }
                    )
                } else if (showError) {
                    Text(
                        text = stringResource(R.string.permission_detection_failed),
                        style = MaterialTheme.typography.bodyMedium,
                        color = MaterialTheme.colorScheme.error,
                        modifier = Modifier.semantics {
                            liveRegion = LiveRegionMode.Polite
                        }
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
                        .height(50.dp)
                        .semantics {
                            role = Role.Button
                            contentDescription = "Enable location permission to detect grid region"
                        },
                    enabled = !isDetecting
                ) {
                    Text(stringResource(R.string.permission_enable_location))
                }

                Spacer(modifier = Modifier.height(16.dp))

                // Skip button
                TextButton(
                    onClick = onComplete,
                    enabled = !isDetecting
                ) {
                    Text(stringResource(R.string.action_skip))
                }

                Spacer(modifier = Modifier.height(16.dp))

                // Privacy note
                Text(
                    text = stringResource(R.string.permission_privacy_note),
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
