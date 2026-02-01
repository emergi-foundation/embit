package eco.emergi.embit.android.ui.components

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.slideInVertically
import androidx.compose.animation.slideOutVertically
import androidx.compose.foundation.layout.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.CloudOff
import androidx.compose.material.icons.filled.Sync
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.semantics.contentDescription
import androidx.compose.ui.semantics.semantics
import androidx.compose.ui.unit.dp
import kotlinx.coroutines.delay
import java.text.DateFormat
import java.util.*

/**
 * Offline Indicator Component
 * Shows connection status and last sync time
 *
 * Features:
 * - Animated banner when offline
 * - Shows last successful sync timestamp
 * - Optional sync queue count
 * - Auto-hide when connection restored
 */
@Composable
fun OfflineIndicator(
    isOffline: Boolean,
    lastSyncTimestamp: Long? = null,
    pendingSyncCount: Int = 0,
    onSyncClick: (() -> Unit)? = null,
    modifier: Modifier = Modifier
) {
    AnimatedVisibility(
        visible = isOffline,
        enter = slideInVertically() + fadeIn(),
        exit = slideOutVertically() + fadeOut(),
        modifier = modifier
    ) {
        Card(
            colors = CardDefaults.cardColors(
                containerColor = MaterialTheme.colorScheme.errorContainer
            ),
            modifier = Modifier
                .fillMaxWidth()
                .semantics {
                    contentDescription = "Device is offline. Showing cached data."
                }
        ) {
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(12.dp),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                // Offline icon and message
                Row(
                    horizontalArrangement = Arrangement.Start,
                    verticalAlignment = Alignment.CenterVertically,
                    modifier = Modifier.weight(1f)
                ) {
                    Icon(
                        imageVector = Icons.Default.CloudOff,
                        contentDescription = "Offline",
                        tint = MaterialTheme.colorScheme.onErrorContainer
                    )

                    Spacer(modifier = Modifier.width(8.dp))

                    Column {
                        Text(
                            text = "No connection",
                            style = MaterialTheme.typography.bodyMedium,
                            color = MaterialTheme.colorScheme.onErrorContainer
                        )

                        // Show last sync time if available
                        lastSyncTimestamp?.let { timestamp ->
                            val dateFormat = DateFormat.getDateTimeInstance(
                                DateFormat.SHORT,
                                DateFormat.SHORT,
                                Locale.getDefault()
                            )
                            val formattedTime = dateFormat.format(Date(timestamp))

                            Text(
                                text = "Last synced: $formattedTime",
                                style = MaterialTheme.typography.bodySmall,
                                color = MaterialTheme.colorScheme.onErrorContainer.copy(alpha = 0.8f)
                            )
                        }

                        // Show pending sync count if any
                        if (pendingSyncCount > 0) {
                            Text(
                                text = "$pendingSyncCount items pending sync",
                                style = MaterialTheme.typography.bodySmall,
                                color = MaterialTheme.colorScheme.onErrorContainer.copy(alpha = 0.8f)
                            )
                        }
                    }
                }

                // Sync button (disabled when offline)
                onSyncClick?.let { clickHandler ->
                    IconButton(
                        onClick = clickHandler,
                        enabled = false // Can't sync when offline
                    ) {
                        Icon(
                            imageVector = Icons.Default.Sync,
                            contentDescription = "Sync",
                            tint = MaterialTheme.colorScheme.onErrorContainer.copy(alpha = 0.5f)
                        )
                    }
                }
            }
        }
    }
}

/**
 * Connection Monitor Composable
 * Monitors network connectivity and provides offline state
 */
@Composable
fun rememberConnectionState(): State<Boolean> {
    val context = androidx.compose.ui.platform.LocalContext.current
    val isOffline = remember { mutableStateOf(false) }

    DisposableEffect(context) {
        val connectivityManager = context.getSystemService(android.content.Context.CONNECTIVITY_SERVICE)
            as? android.net.ConnectivityManager

        val callback = object : android.net.ConnectivityManager.NetworkCallback() {
            override fun onAvailable(network: android.net.Network) {
                isOffline.value = false
            }

            override fun onLost(network: android.net.Network) {
                isOffline.value = true
            }
        }

        connectivityManager?.registerDefaultNetworkCallback(callback)

        // Initial state check
        val activeNetwork = connectivityManager?.activeNetworkInfo
        isOffline.value = activeNetwork?.isConnected != true

        onDispose {
            connectivityManager?.unregisterNetworkCallback(callback)
        }
    }

    return isOffline
}

/**
 * Sync Status Indicator
 * Shows sync progress when syncing
 */
@Composable
fun SyncStatusIndicator(
    isSyncing: Boolean,
    modifier: Modifier = Modifier
) {
    AnimatedVisibility(
        visible = isSyncing,
        enter = fadeIn(),
        exit = fadeOut(),
        modifier = modifier
    ) {
        Card(
            colors = CardDefaults.cardColors(
                containerColor = MaterialTheme.colorScheme.primaryContainer
            ),
            modifier = Modifier.fillMaxWidth()
        ) {
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(12.dp),
                horizontalArrangement = Arrangement.Center,
                verticalAlignment = Alignment.CenterVertically
            ) {
                CircularProgressIndicator(
                    modifier = Modifier.size(16.dp),
                    strokeWidth = 2.dp,
                    color = MaterialTheme.colorScheme.onPrimaryContainer
                )

                Spacer(modifier = Modifier.width(8.dp))

                Text(
                    text = "Syncing data...",
                    style = MaterialTheme.typography.bodyMedium,
                    color = MaterialTheme.colorScheme.onPrimaryContainer
                )
            }
        }
    }
}
