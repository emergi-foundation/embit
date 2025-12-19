package eco.emergi.embit.android.services

import android.content.Context
import androidx.hilt.work.HiltWorker
import androidx.work.CoroutineWorker
import androidx.work.WorkerParameters
import dagger.assisted.Assisted
import dagger.assisted.AssistedInject
import eco.emergi.embit.domain.models.BatteryState
import eco.emergi.embit.domain.models.SmartChargingSession
import eco.emergi.embit.domain.repositories.IAuthRepository
import eco.emergi.embit.domain.repositories.IBatteryRepository
import eco.emergi.embit.domain.repositories.IGridDataRepository
import eco.emergi.embit.domain.usecases.grid.TrackChargingSessionUseCase
import kotlinx.coroutines.flow.firstOrNull

/**
 * WorkManager worker for tracking charging sessions automatically.
 *
 * This worker runs periodically to:
 * 1. Monitor battery state changes (charging/discharging)
 * 2. Detect when charging starts and stops
 * 3. Calculate session statistics
 * 4. Save completed sessions to Firestore
 *
 * Runs when the user is authenticated.
 */
@HiltWorker
class ChargingSessionWorker @AssistedInject constructor(
    @Assisted appContext: Context,
    @Assisted workerParams: WorkerParameters,
    private val batteryRepository: IBatteryRepository,
    private val gridDataRepository: IGridDataRepository,
    private val authRepository: IAuthRepository
) : CoroutineWorker(appContext, workerParams) {

    private val prefs = appContext.getSharedPreferences("charging_sessions", Context.MODE_PRIVATE)

    override suspend fun doWork(): Result {
        return try {
            // Check if user is authenticated
            if (!authRepository.isSignedIn()) {
                return Result.success() // Skip if not signed in
            }

            // Get latest battery reading
            val reading = batteryRepository.observeLatestReading().firstOrNull()
                ?: return Result.retry()

            val isCharging = reading.batteryState is BatteryState.Charging
            val wasCharging = prefs.getBoolean(KEY_WAS_CHARGING, false)
            val sessionStartTime = prefs.getLong(KEY_SESSION_START_TIME, 0L)
            val sessionStartLevel = prefs.getInt(KEY_SESSION_START_LEVEL, 0)

            when {
                // Charging started
                isCharging && !wasCharging -> {
                    startNewSession(reading)
                }
                // Charging stopped
                !isCharging && wasCharging && sessionStartTime > 0 -> {
                    endCurrentSession(reading, sessionStartTime, sessionStartLevel)
                }
                // Charging continuing - update timestamp
                isCharging && wasCharging -> {
                    // Just update the last check time
                    android.util.Log.d(TAG, "Charging session ongoing: ${reading.batteryPercentage}%")
                }
                // Not charging and no session - nothing to do
                else -> {
                    // No active session
                }
            }

            Result.success()
        } catch (e: Exception) {
            android.util.Log.e(TAG, "Charging session tracking failed: ${e.message}")
            Result.retry()
        }
    }

    /**
     * Start a new charging session
     */
    private suspend fun startNewSession(reading: eco.emergi.embit.domain.models.BatteryReading) {
        prefs.edit()
            .putBoolean(KEY_WAS_CHARGING, true)
            .putLong(KEY_SESSION_START_TIME, reading.timestamp.toEpochMilliseconds())
            .putInt(KEY_SESSION_START_LEVEL, reading.batteryPercentage)
            .apply()

        android.util.Log.d(TAG, "Charging session started: ${reading.batteryPercentage}%")
    }

    /**
     * End the current charging session and save to Firestore
     */
    private suspend fun endCurrentSession(
        endReading: eco.emergi.embit.domain.models.BatteryReading,
        startTime: Long,
        startLevel: Int
    ) {
        val userId = authRepository.getCurrentUser()?.uid ?: "anonymous"
        val endTime = endReading.timestamp.toEpochMilliseconds()
        val durationHours = (endTime - startTime) / (1000.0 * 60.0 * 60.0)

        // Calculate energy consumed (simplified)
        val percentageGained = endReading.batteryPercentage - startLevel
        val avgBatteryCapacityWh = 14.8 // Average smartphone battery
        val energyWh = (percentageGained / 100.0) * avgBatteryCapacityWh
        val energyKwh = energyWh / 1000.0

        // Get grid status for cost and carbon calculations
        val userLocation = gridDataRepository.getUserLocation()
        val gridStatus = gridDataRepository.getCurrentGridStatus(userLocation).getOrNull()

        val carbonIntensity = gridStatus?.carbonIntensity?.gramsPerKwh ?: 400.0
        val pricePerKwh = gridStatus?.pricing?.pricePerKwh ?: 0.12

        val carbonEmissions = energyKwh * carbonIntensity
        val costEstimate = energyKwh * pricePerKwh

        // Determine if charging was optimal
        val wasOptimal = gridStatus?.let { status ->
            status.carbonIntensity.gramsPerKwh < 300 || status.pricing.pricePerKwh < 0.15
        } ?: false

        val potentialSavings = if (!wasOptimal) {
            energyKwh * (pricePerKwh - 0.08) // Could have saved with off-peak pricing
        } else null

        // Create session
        val session = SmartChargingSession(
            id = startTime,
            userId = userId,
            startTime = startTime,
            endTime = endTime,
            startBatteryLevel = startLevel,
            endBatteryLevel = endReading.batteryPercentage,
            energyConsumedKwh = energyKwh,
            averageCarbonIntensity = carbonIntensity,
            averagePricePerKwh = pricePerKwh,
            costEstimate = costEstimate,
            carbonEmissions = carbonEmissions,
            wasOptimal = wasOptimal,
            potentialSavings = potentialSavings
        )

        // Save to Firestore
        val saveResult = gridDataRepository.saveChargingSession(session)

        if (saveResult.isSuccess) {
            android.util.Log.d(TAG, "Charging session saved: " +
                    "${percentageGained}% gain, " +
                    "cost=$${String.format("%.2f", costEstimate)}, " +
                    "carbon=${carbonEmissions.toInt()}g CO₂")
        } else {
            android.util.Log.e(TAG, "Failed to save charging session: ${saveResult.exceptionOrNull()?.message}")
        }

        // Clear session state
        prefs.edit()
            .putBoolean(KEY_WAS_CHARGING, false)
            .putLong(KEY_SESSION_START_TIME, 0)
            .putInt(KEY_SESSION_START_LEVEL, 0)
            .apply()
    }

    companion object {
        const val WORK_NAME = "charging_session_tracking"
        const val TAG = "ChargingSession"

        // SharedPreferences keys
        private const val KEY_WAS_CHARGING = "was_charging"
        private const val KEY_SESSION_START_TIME = "session_start_time"
        private const val KEY_SESSION_START_LEVEL = "session_start_level"
    }
}
