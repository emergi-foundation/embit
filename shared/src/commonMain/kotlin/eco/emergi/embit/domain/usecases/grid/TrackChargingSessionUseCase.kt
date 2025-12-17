package eco.emergi.embit.domain.usecases.grid

import eco.emergi.embit.domain.models.BatteryReading
import eco.emergi.embit.domain.models.BatteryState
import eco.emergi.embit.domain.models.GridStatus
import eco.emergi.embit.domain.models.SmartChargingSession
import eco.emergi.embit.domain.repositories.IAuthRepository
import eco.emergi.embit.domain.repositories.IBatteryRepository
import eco.emergi.embit.domain.repositories.IGridDataRepository
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.flow
import kotlinx.datetime.Instant

/**
 * Tracks charging sessions automatically by monitoring battery readings.
 * Detects when charging starts and stops, calculates session statistics,
 * and saves completed sessions to Firestore.
 */
class TrackChargingSessionUseCase(
    private val batteryRepository: IBatteryRepository,
    private val gridDataRepository: IGridDataRepository,
    private val authRepository: IAuthRepository
) {
    private var currentSession: SessionInProgress? = null

    /**
     * Monitor battery readings and track charging sessions
     */
    operator fun invoke(): Flow<ChargingSessionEvent> = flow {
        batteryRepository.observeLatestReading().collect { reading ->
            if (reading != null) {
                val event = processReading(reading)
                if (event != null) {
                    emit(event)
                }
            }
        }
    }

    /**
     * Process a battery reading and detect session start/end
     */
    private suspend fun processReading(reading: BatteryReading): ChargingSessionEvent? {
        val isCharging = reading.batteryState is BatteryState.Charging

        return when {
            // Charging started
            isCharging && currentSession == null -> {
                startNewSession(reading)
            }
            // Charging stopped
            !isCharging && currentSession != null -> {
                endCurrentSession(reading)
            }
            // Charging continuing
            isCharging && currentSession != null -> {
                updateCurrentSession(reading)
                null
            }
            // Not charging and no session
            else -> null
        }
    }

    /**
     * Start a new charging session
     */
    private suspend fun startNewSession(reading: BatteryReading): ChargingSessionEvent {
        val userId = authRepository.getCurrentUser()?.uid ?: "anonymous"

        // Get current grid status for this session
        val userLocation = gridDataRepository.getUserLocation()
        val gridStatus = gridDataRepository.getCurrentGridStatus(userLocation).getOrNull()

        currentSession = SessionInProgress(
            startReading = reading,
            startGridStatus = gridStatus,
            userId = userId
        )

        return ChargingSessionEvent.SessionStarted(
            startTime = reading.timestamp,
            startBatteryLevel = reading.batteryPercentage,
            gridStatus = gridStatus
        )
    }

    /**
     * End the current charging session and calculate statistics
     */
    private suspend fun endCurrentSession(reading: BatteryReading): ChargingSessionEvent {
        val session = currentSession ?: return ChargingSessionEvent.Error("No active session")

        // Calculate session statistics
        val sessionStats = calculateSessionStatistics(session, reading)

        // Save to Firestore
        val saveResult = gridDataRepository.saveChargingSession(sessionStats)

        currentSession = null

        return if (saveResult.isSuccess) {
            ChargingSessionEvent.SessionEnded(sessionStats)
        } else {
            ChargingSessionEvent.Error("Failed to save session: ${saveResult.exceptionOrNull()?.message}")
        }
    }

    /**
     * Update the current session with new reading (for analytics)
     */
    private fun updateCurrentSession(reading: BatteryReading) {
        currentSession = currentSession?.copy(
            lastReading = reading
        )
    }

    /**
     * Calculate comprehensive session statistics
     */
    private suspend fun calculateSessionStatistics(
        session: SessionInProgress,
        endReading: BatteryReading
    ): SmartChargingSession {
        val startTime = session.startReading.timestamp.toEpochMilliseconds()
        val endTime = endReading.timestamp.toEpochMilliseconds()
        val durationHours = (endTime - startTime) / (1000.0 * 60.0 * 60.0)

        // Calculate energy consumed (simplified - based on battery percentage change)
        val percentageGained = endReading.batteryPercentage - session.startReading.batteryPercentage
        val energyConsumedKwh = calculateEnergyConsumed(percentageGained, durationHours)

        // Get grid data for cost and carbon calculations
        val userLocation = gridDataRepository.getUserLocation()
        val gridStatus = session.startGridStatus ?: gridDataRepository.getCurrentGridStatus(userLocation).getOrNull()

        val averageCarbonIntensity = gridStatus?.carbonIntensity?.gramsPerKwh ?: 400.0
        val averagePricePerKwh = gridStatus?.pricing?.pricePerKwh ?: 0.12

        val carbonEmissions = energyConsumedKwh * averageCarbonIntensity
        val costEstimate = energyConsumedKwh * averagePricePerKwh

        // Determine if charging was optimal (during low carbon/cost time)
        val wasOptimal = determineIfOptimal(gridStatus)
        val potentialSavings = if (!wasOptimal) {
            calculatePotentialSavings(energyConsumedKwh, averagePricePerKwh)
        } else null

        return SmartChargingSession(
            id = generateSessionId(startTime),
            userId = session.userId,
            startTime = startTime,
            endTime = endTime,
            startBatteryLevel = session.startReading.batteryPercentage,
            endBatteryLevel = endReading.batteryPercentage,
            energyConsumedKwh = energyConsumedKwh,
            averageCarbonIntensity = averageCarbonIntensity,
            averagePricePerKwh = averagePricePerKwh,
            costEstimate = costEstimate,
            carbonEmissions = carbonEmissions,
            wasOptimal = wasOptimal,
            potentialSavings = potentialSavings
        )
    }

    /**
     * Calculate energy consumed based on battery percentage change
     * Assumes average smartphone battery capacity of ~4000 mAh @ 3.7V ≈ 14.8 Wh
     */
    private fun calculateEnergyConsumed(percentageGained: Int, durationHours: Double): Double {
        val avgBatteryCapacityWh = 14.8 // Average smartphone battery in Wh
        val energyWh = (percentageGained / 100.0) * avgBatteryCapacityWh
        return energyWh / 1000.0 // Convert to kWh
    }

    /**
     * Determine if charging occurred during optimal time
     * Optimal = low carbon intensity AND low pricing
     */
    private fun determineIfOptimal(gridStatus: GridStatus?): Boolean {
        if (gridStatus == null) return false

        val lowCarbon = gridStatus.carbonIntensity.gramsPerKwh < 300 // Below 300g/kWh is good
        val lowPrice = gridStatus.pricing.pricePerKwh < 0.15 // Below $0.15/kWh is good

        return lowCarbon || lowPrice
    }

    /**
     * Calculate potential savings if charging had occurred at optimal time
     */
    private fun calculatePotentialSavings(energyKwh: Double, currentPrice: Double): Double {
        val optimalPrice = 0.08 // Estimated off-peak price
        return energyKwh * (currentPrice - optimalPrice)
    }

    /**
     * Generate a unique session ID based on start timestamp
     */
    private fun generateSessionId(startTime: Long): Long {
        return startTime // Use timestamp as ID for simplicity
    }

    /**
     * Represents a charging session currently in progress
     */
    private data class SessionInProgress(
        val startReading: BatteryReading,
        val lastReading: BatteryReading = startReading,
        val startGridStatus: GridStatus?,
        val userId: String
    )

    /**
     * Events emitted during charging session tracking
     */
    sealed class ChargingSessionEvent {
        data class SessionStarted(
            val startTime: Instant,
            val startBatteryLevel: Int,
            val gridStatus: GridStatus?
        ) : ChargingSessionEvent()

        data class SessionEnded(
            val session: SmartChargingSession
        ) : ChargingSessionEvent()

        data class Error(val message: String) : ChargingSessionEvent()
    }
}
