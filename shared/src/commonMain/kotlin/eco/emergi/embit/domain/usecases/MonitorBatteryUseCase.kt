package eco.emergi.embit.domain.usecases

import eco.emergi.embit.domain.models.BatteryReading
import eco.emergi.embit.domain.repositories.IBatteryMonitorService
import eco.emergi.embit.domain.repositories.IBatteryRepository
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.onEach

/**
 * Use case for monitoring battery status and storing readings.
 *
 * This use case coordinates between the platform-specific battery monitor service
 * and the repository to continuously track and store battery data.
 */
class MonitorBatteryUseCase(
    private val monitorService: IBatteryMonitorService,
    private val repository: IBatteryRepository
) {
    /**
     * Start monitoring battery and automatically save readings to the repository.
     *
     * @return Flow of battery readings
     */
    operator fun invoke(): Flow<BatteryReading> {
        return monitorService.startMonitoring()
            .onEach { reading ->
                // Store each reading in the repository
                repository.insertReading(reading)
                    .onFailure { error ->
                        // Log error but don't stop monitoring
                        println("Error storing battery reading: ${error.message}")
                    }
            }
            .catch { error ->
                println("Battery monitoring error: ${error.message}")
                throw error
            }
    }

    /**
     * Stop battery monitoring
     */
    fun stop() {
        monitorService.stopMonitoring()
    }

    /**
     * Check if monitoring is supported on this platform
     */
    fun isSupported(): Boolean = monitorService.isMonitoringSupported()

    /**
     * Check and request necessary permissions
     */
    suspend fun ensurePermissions(): Boolean {
        return if (monitorService.hasRequiredPermissions()) {
            true
        } else {
            monitorService.requestPermissions()
        }
    }
}
