package eco.emergi.embit.android.ui.components

import android.os.Build
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.BugReport
import androidx.compose.material.icons.filled.Lightbulb
import androidx.compose.material.icons.filled.Star
import androidx.compose.material.icons.filled.SupportAgent
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import eco.emergi.embit.android.BuildConfig
import eco.emergi.embit.domain.models.FeedbackDeviceInfo
import eco.emergi.embit.domain.models.Feedback
import eco.emergi.embit.domain.models.FeedbackType

/**
 * Dialog for submitting user feedback (ratings, bug reports, feature requests).
 *
 * @param onDismiss Callback when dialog is dismissed
 * @param onSubmit Callback when feedback is submitted with the created Feedback object
 * @param userId Current user's ID
 * @param batteryPercentage Current battery percentage for device info
 * @param isCharging Whether device is currently charging
 */
@Composable
fun FeedbackDialog(
    onDismiss: () -> Unit,
    onSubmit: (Feedback) -> Unit,
    userId: String,
    batteryPercentage: Int = 0,
    isCharging: Boolean = false
) {
    var selectedType by remember { mutableStateOf(FeedbackType.RATING) }
    var rating by remember { mutableIntStateOf(5) }
    var subject by remember { mutableStateOf("") }
    var message by remember { mutableStateOf("") }
    var showError by remember { mutableStateOf(false) }

    AlertDialog(
        onDismissRequest = onDismiss,
        title = {
            Text("Submit Feedback")
        },
        text = {
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .verticalScroll(rememberScrollState()),
                verticalArrangement = Arrangement.spacedBy(16.dp)
            ) {
                // Feedback Type Selection
                Text(
                    text = "Feedback Type",
                    style = MaterialTheme.typography.labelLarge,
                    fontWeight = FontWeight.Bold
                )

                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(8.dp)
                ) {
                    FeedbackTypeChip(
                        type = FeedbackType.RATING,
                        icon = Icons.Default.Star,
                        label = "Rating",
                        selected = selectedType == FeedbackType.RATING,
                        onClick = { selectedType = FeedbackType.RATING }
                    )
                    FeedbackTypeChip(
                        type = FeedbackType.BUG_REPORT,
                        icon = Icons.Default.BugReport,
                        label = "Bug",
                        selected = selectedType == FeedbackType.BUG_REPORT,
                        onClick = { selectedType = FeedbackType.BUG_REPORT }
                    )
                }

                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(8.dp)
                ) {
                    FeedbackTypeChip(
                        type = FeedbackType.FEATURE_REQUEST,
                        icon = Icons.Default.Lightbulb,
                        label = "Feature",
                        selected = selectedType == FeedbackType.FEATURE_REQUEST,
                        onClick = { selectedType = FeedbackType.FEATURE_REQUEST }
                    )
                    FeedbackTypeChip(
                        type = FeedbackType.SUPPORT,
                        icon = Icons.Default.SupportAgent,
                        label = "Support",
                        selected = selectedType == FeedbackType.SUPPORT,
                        onClick = { selectedType = FeedbackType.SUPPORT }
                    )
                }

                // Star Rating (only for RATING type)
                if (selectedType == FeedbackType.RATING) {
                    Text(
                        text = "Your Rating",
                        style = MaterialTheme.typography.labelLarge,
                        fontWeight = FontWeight.Bold
                    )

                    StarRatingBar(
                        rating = rating,
                        onRatingChanged = { rating = it }
                    )
                }

                // Subject (optional for RATING, required for others)
                if (selectedType != FeedbackType.RATING) {
                    OutlinedTextField(
                        value = subject,
                        onValueChange = { subject = it },
                        label = { Text("Subject *") },
                        modifier = Modifier.fillMaxWidth(),
                        singleLine = true,
                        isError = showError && subject.isBlank()
                    )
                }

                // Message
                OutlinedTextField(
                    value = message,
                    onValueChange = { message = it },
                    label = { Text(if (selectedType == FeedbackType.RATING) "Comments (Optional)" else "Message *") },
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(120.dp),
                    maxLines = 5,
                    isError = showError && message.isBlank() && selectedType != FeedbackType.RATING
                )

                if (showError) {
                    Text(
                        text = "Please fill in all required fields",
                        color = MaterialTheme.colorScheme.error,
                        style = MaterialTheme.typography.bodySmall
                    )
                }
            }
        },
        confirmButton = {
            TextButton(
                onClick = {
                    // Validate inputs
                    val isValid = when (selectedType) {
                        FeedbackType.RATING -> true // Message is optional for ratings
                        else -> subject.isNotBlank() && message.isNotBlank()
                    }

                    if (isValid) {
                        val deviceInfo = FeedbackDeviceInfo(
                            deviceModel = "${Build.MANUFACTURER} ${Build.MODEL}",
                            osVersion = Build.VERSION.RELEASE,
                            appVersion = BuildConfig.VERSION_NAME,
                            batteryPercentage = batteryPercentage,
                            isCharging = isCharging
                        )

                        val feedback = Feedback.create(
                            userId = userId,
                            type = selectedType,
                            rating = if (selectedType == FeedbackType.RATING) rating else null,
                            subject = if (subject.isNotBlank()) subject else null,
                            message = message,
                            deviceInfo = deviceInfo
                        )

                        onSubmit(feedback)
                    } else {
                        showError = true
                    }
                }
            ) {
                Text("Submit")
            }
        },
        dismissButton = {
            TextButton(onClick = onDismiss) {
                Text("Cancel")
            }
        }
    )
}

/**
 * Chip for selecting feedback type.
 */
@Composable
private fun RowScope.FeedbackTypeChip(
    type: FeedbackType,
    icon: ImageVector,
    label: String,
    selected: Boolean,
    onClick: () -> Unit
) {
    FilterChip(
        selected = selected,
        onClick = onClick,
        label = { Text(label) },
        leadingIcon = {
            Icon(
                imageVector = icon,
                contentDescription = null,
                modifier = Modifier.size(18.dp)
            )
        },
        modifier = Modifier.weight(1f)
    )
}

/**
 * Star rating bar (1-5 stars).
 */
@Composable
private fun StarRatingBar(
    rating: Int,
    onRatingChanged: (Int) -> Unit,
    modifier: Modifier = Modifier
) {
    Row(
        modifier = modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.Center,
        verticalAlignment = Alignment.CenterVertically
    ) {
        for (i in 1..5) {
            IconButton(
                onClick = { onRatingChanged(i) }
            ) {
                Icon(
                    imageVector = Icons.Default.Star,
                    contentDescription = "Star $i",
                    tint = if (i <= rating) {
                        MaterialTheme.colorScheme.primary
                    } else {
                        MaterialTheme.colorScheme.outline
                    },
                    modifier = Modifier.size(40.dp)
                )
            }
        }
    }

    Text(
        text = when (rating) {
            1 -> "Poor"
            2 -> "Fair"
            3 -> "Good"
            4 -> "Very Good"
            5 -> "Excellent"
            else -> ""
        },
        style = MaterialTheme.typography.bodyMedium,
        modifier = Modifier.fillMaxWidth(),
        textAlign = androidx.compose.ui.text.style.TextAlign.Center,
        color = MaterialTheme.colorScheme.onSurfaceVariant
    )
}
