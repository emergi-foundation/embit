package eco.emergi.embit.domain.repositories

import eco.emergi.embit.domain.models.BatteryReading
import kotlinx.coroutines.flow.Flow

/**
 * Platform-specific battery monitoring service.
 * This interface will have different implementations for each platform (Android, Web, iOS).
 *
 * Use expect/actual pattern for platform-specific implementations.
 */
interface IBatteryMonitorService {
    /**
     * Start monitoring battery status and emit readings
     */
    fun startMonitoring(): Flow<BatteryReading>

    /**
     * Stop battery monitoring
     */
    fun stopMonitoring()

    /**
     * Get current battery reading synchronously (if available)
     */
    suspend fun getCurrentReading(): Result<BatteryReading?>

    /**
     * Check if battery monitoring is supported on this platform
     */
    fun isMonitoringSupported(): Boolean

    /**
     * Check if battery monitoring permission is granted
     */
    suspend fun hasRequiredPermissions(): Boolean

    /**
     * Request battery monitoring permissions (if applicable)
     */
    suspend fun requestPermissions(): Boolean
}

/**
 * Factory to create platform-specific battery monitor service
 */
expect class BatteryMonitorServiceFactory {
    fun create(): IBatteryMonitorService
}
