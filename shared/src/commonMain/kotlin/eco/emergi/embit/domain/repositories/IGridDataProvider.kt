package eco.emergi.embit.domain.repositories

import eco.emergi.embit.domain.models.GridStatus

/**
 * Interface for grid data providers (WattTime, ElectricityMap, etc.)
 * Allows swapping between different real-time grid monitoring APIs
 */
interface IGridDataProvider {
    /**
     * Provider name for identification
     */
    val providerName: String

    /**
     * Fetch current grid status for a location
     *
     * @param location Location identifier (varies by provider: zip code, lat/lon, region code)
     * @return Grid status or null if unavailable
     */
    suspend fun fetchGridStatus(location: String): Result<GridStatus>

    /**
     * Check if this provider supports the given location
     */
    suspend fun supportsLocation(location: String): Boolean

    /**
     * Get recommended location format for this provider
     */
    fun getLocationFormatHint(): String
}
