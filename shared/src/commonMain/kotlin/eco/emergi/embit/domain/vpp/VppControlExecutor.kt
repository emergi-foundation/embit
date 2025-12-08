package eco.emergi.embit.domain.vpp

import eco.emergi.embit.domain.models.*
import kotlinx.coroutines.flow.Flow

/**
 * Interface for VPP control executor (platform-agnostic)
 */
interface VppControlExecutor {
    /**
     * Execute a demand response event
     * @return Performance metrics of the event
     */
    suspend fun executeDemandResponse(
        event: DemandResponseEvent,
        settings: ParticipationSettings
    ): EventPerformance

    /**
     * Restore normal device operation after event
     */
    suspend fun restoreNormalOperation()

    /**
     * Get current power consumption measurement
     */
    suspend fun getCurrentPowerMeasurement(): PowerMeasurement

    /**
     * Observe real-time power consumption
     */
    fun observePowerConsumption(): Flow<PowerMeasurement>
}
