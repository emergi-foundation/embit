package eco.emergi.embit.android.services

import android.content.Context
import androidx.hilt.work.HiltWorker
import androidx.work.CoroutineWorker
import androidx.work.WorkerParameters
import dagger.assisted.Assisted
import dagger.assisted.AssistedInject
import eco.emergi.embit.android.analytics.AnalyticsManager
import eco.emergi.embit.android.analytics.CrashlyticsManager
import eco.emergi.embit.domain.usecases.analytics.AggregateHealthMetricsUseCase

/**
 * WorkManager worker for aggregating daily battery health metrics.
 *
 * This worker runs daily to:
 * 1. Aggregate yesterday's battery readings
 * 2. Calculate daily metrics (avg health, temperature, charging cycles, etc.)
 * 3. Save aggregated data to Firestore for analytics and research
 *
 * Scheduled to run once per day, preferably during off-peak hours.
 */
@HiltWorker
class HealthMetricsAggregationWorker @AssistedInject constructor(
    @Assisted context: Context,
    @Assisted params: WorkerParameters,
    private val aggregateHealthMetricsUseCase: AggregateHealthMetricsUseCase,
    private val analyticsManager: AnalyticsManager,
    private val crashlyticsManager: CrashlyticsManager
) : CoroutineWorker(context, params) {

    override suspend fun doWork(): Result {
        return try {
            crashlyticsManager.log("Starting daily health metrics aggregation")

            // Aggregate yesterday's metrics (default behavior of the use case)
            aggregateHealthMetricsUseCase().fold(
                onSuccess = {
                    // Log successful aggregation
                    crashlyticsManager.log("Health metrics aggregated successfully")
                    analyticsManager.logCustomEvent(
                        eventName = "health_metrics_aggregated",
                        params = mapOf(
                            "status" to "success",
                            "timestamp" to System.currentTimeMillis()
                        )
                    )
                    Result.success()
                },
                onFailure = { error ->
                    // Log failure for investigation
                    crashlyticsManager.log("Health metrics aggregation failed: ${error.message}")
                    crashlyticsManager.logException(error)
                    analyticsManager.logError(
                        errorType = "health_metrics_aggregation_failed",
                        errorMessage = error.message,
                        errorContext = "HealthMetricsAggregationWorker"
                    )

                    // Retry if the failure might be transient (network issues, etc.)
                    if (runAttemptCount < MAX_RETRY_ATTEMPTS) {
                        Result.retry()
                    } else {
                        // Give up after max retries to avoid infinite loops
                        crashlyticsManager.log("Max retry attempts reached for health metrics aggregation")
                        Result.failure()
                    }
                }
            )
        } catch (e: Exception) {
            // Catch any unexpected exceptions
            crashlyticsManager.logException(e)
            analyticsManager.logError(
                errorType = "health_metrics_aggregation_error",
                errorMessage = e.message,
                errorContext = "HealthMetricsAggregationWorker"
            )

            if (runAttemptCount < MAX_RETRY_ATTEMPTS) {
                Result.retry()
            } else {
                Result.failure()
            }
        }
    }

    companion object {
        const val WORK_NAME = "health_metrics_aggregation"
        const val TAG = "HealthMetricsAggregation"
        private const val MAX_RETRY_ATTEMPTS = 3
    }
}
