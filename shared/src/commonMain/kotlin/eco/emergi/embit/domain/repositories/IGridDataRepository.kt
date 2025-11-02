package eco.emergi.embit.domain.repositories

import eco.emergi.embit.domain.models.*
import kotlinx.coroutines.flow.Flow

/**
 * Repository interface for grid data operations.
 * Implementations fetch real-time grid status, pricing, and carbon intensity data.
 */
interface IGridDataRepository {
    /**
     * Get current grid status for a location
     *
     * @param location Location identifier (e.g., "California", "Texas")
     * @return Result containing current grid status or error
     */
    suspend fun getCurrentGridStatus(location: String): Result<GridStatus>

    /**
     * Observe grid status changes as a Flow
     * Useful for real-time monitoring
     *
     * @param location Location identifier
     * @return Flow of grid status updates
     */
    fun observeGridStatus(location: String): Flow<GridStatus>

    /**
     * Get grid forecast for the next 24 hours
     *
     * @param location Location identifier
     * @return Result containing hourly forecasts or error
     */
    suspend fun getGridForecast(location: String): Result<GridForecast>

    /**
     * Get charging recommendation based on current grid status
     *
     * @param location Location identifier
     * @param currentBatteryLevel Current battery percentage (0-100)
     * @param targetBatteryLevel Desired battery level (0-100)
     * @return Result containing charging recommendation or error
     */
    suspend fun getChargingRecommendation(
        location: String,
        currentBatteryLevel: Int,
        targetBatteryLevel: Int = 80
    ): Result<ChargingRecommendation>

    /**
     * Calculate carbon impact for energy consumption
     *
     * @param energyKwh Energy consumed in kilowatt-hours
     * @param location Location identifier
     * @param timestamp Timestamp of consumption
     * @return Result containing carbon emissions in grams
     */
    suspend fun calculateCarbonImpact(
        energyKwh: Double,
        location: String,
        timestamp: Long
    ): Result<Double>

    /**
     * Get user's total carbon impact summary
     *
     * @param userId User identifier
     * @param startTimestamp Start of period
     * @param endTimestamp End of period
     * @return Result containing carbon impact summary
     */
    suspend fun getCarbonImpactSummary(
        userId: String,
        startTimestamp: Long,
        endTimestamp: Long
    ): Result<CarbonImpact>

    /**
     * Save a smart charging session
     *
     * @param session Charging session data
     * @return Result indicating success or failure
     */
    suspend fun saveChargingSession(session: SmartChargingSession): Result<Unit>

    /**
     * Get user's charging history
     *
     * @param userId User identifier
     * @param limit Maximum number of sessions to return
     * @return Result containing list of charging sessions
     */
    suspend fun getChargingHistory(
        userId: String,
        limit: Int = 50
    ): Result<List<SmartChargingSession>>

    /**
     * Get historical grid data for analysis
     *
     * @param location Location identifier
     * @param startTimestamp Start of period
     * @param endTimestamp End of period
     * @return Result containing historical grid data points
     */
    suspend fun getHistoricalGridData(
        location: String,
        startTimestamp: Long,
        endTimestamp: Long
    ): Result<List<GridDataPoint>>

    /**
     * Get user's location for grid data
     * This could be based on device location or user settings
     *
     * @return Location identifier
     */
    suspend fun getUserLocation(): String

    /**
     * Set user's location for grid data
     *
     * @param location Location identifier
     * @return Result indicating success or failure
     */
    suspend fun setUserLocation(location: String): Result<Unit>
}
