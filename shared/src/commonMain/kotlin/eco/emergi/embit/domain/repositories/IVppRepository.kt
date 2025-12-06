package eco.emergi.embit.domain.repositories

import eco.emergi.embit.domain.models.DemandResponseEvent
import eco.emergi.embit.domain.models.EventPerformance
import eco.emergi.embit.domain.models.ParticipationSettings
import kotlinx.coroutines.flow.Flow

/**
 * Repository for Virtual Power Plant / Demand Response operations
 */
interface IVppRepository {
    /**
     * Get user's participation settings
     */
    suspend fun getParticipationSettings(): ParticipationSettings

    /**
     * Update participation settings
     */
    suspend fun updateParticipationSettings(settings: ParticipationSettings)

    /**
     * Observe active demand response events
     */
    fun observeActiveEvents(): Flow<List<DemandResponseEvent>>

    /**
     * Get all past events
     */
    suspend fun getPastEvents(limit: Int = 20): List<Demand ResponseEvent>

    /**
     * Get performance history
     */
    suspend fun getPerformanceHistory(limit: Int = 20): List<EventPerformance>

    /**
     * Save event performance
     */
    suspend fun saveEventPerformance(performance: EventPerformance)

    /**
     * Get total statistics
     */
    suspend fun getTotalStats(): VppStats
}

/**
 * Overall VPP participation statistics
 */
data class VppStats(
    val totalEvents: Int,
    val completedEvents: Int,
    val totalEnergyReducedWh: Double,
    val totalCO2SavedGrams: Double,
    val averageReductionWatts: Double
)
