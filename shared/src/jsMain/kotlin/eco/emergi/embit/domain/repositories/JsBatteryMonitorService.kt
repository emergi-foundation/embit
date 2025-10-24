package eco.emergi.embit.domain.repositories

import eco.emergi.embit.domain.models.BatteryReading
import eco.emergi.embit.domain.models.BatteryState
import eco.emergi.embit.domain.models.ChargingType
import kotlinx.coroutines.await
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.flow
import kotlinx.datetime.Clock
import kotlin.js.Promise

/**
 * JS/Web implementation of IBatteryMonitorService
 * Uses the Battery Status API available in modern browsers
 */
class JsBatteryMonitorService : IBatteryMonitorService {

    private var isMonitoring = false

    override fun isMonitoringSupported(): Boolean {
        return js("'getBattery' in navigator") as Boolean
    }

    override suspend fun hasRequiredPermissions(): Boolean {
        // Battery Status API doesn't require explicit permissions
        return isMonitoringSupported()
    }

    override suspend fun requestPermissions(): Boolean {
        // Battery Status API doesn't require explicit permissions
        return isMonitoringSupported()
    }

    override suspend fun getCurrentReading(): Result<BatteryReading?> {
        return try {
            if (!isMonitoringSupported()) {
                return Result.failure(UnsupportedOperationException("Battery Status API not supported"))
            }

            val batteryManager = getBatteryManager()
            val reading = createBatteryReading(batteryManager)
            Result.success(reading)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    override fun startMonitoring(): Flow<BatteryReading> = flow {
        if (!isMonitoringSupported()) {
            throw UnsupportedOperationException("Battery Status API not supported in this browser")
        }

        isMonitoring = true

        try {
            // Get battery manager
            val batteryManager = getBatteryManager()

            while (isMonitoring) {
                val reading = createBatteryReading(batteryManager)
                emit(reading)

                // Poll every 30 seconds (Battery API doesn't provide continuous updates)
                delay(30_000)
            }
        } catch (e: Exception) {
            isMonitoring = false
            throw e
        }
    }

    override fun stopMonitoring() {
        isMonitoring = false
    }

    private suspend fun getBatteryManager(): dynamic {
        val promise: Promise<dynamic> = js("navigator.getBattery()")
        return promise.await()
    }

    private fun createBatteryReading(battery: dynamic): BatteryReading {
        val level = (battery.level as Double) * 100  // Convert 0-1 to 0-100
        val charging = battery.charging as Boolean

        // Battery Status API provides limited information
        // We need to estimate voltage and amperage
        val voltage = estimateVoltage(level.toInt())
        val amperage = if (charging) 1000000L else -1000000L  // Estimated

        val state: BatteryState = when {
            charging && level >= 99.0 -> BatteryState.Full
            charging -> BatteryState.Charging(ChargingType.UNKNOWN)
            !charging -> BatteryState.Discharging
            else -> BatteryState.Unknown
        }

        return BatteryReading(
            id = 0,
            timestamp = Clock.System.now(),
            voltageMillivolts = voltage,
            amperageMicroamps = amperage,
            temperatureCelsius = null, // Not available in Battery Status API
            batteryPercentage = level.toInt().coerceIn(0, 100),
            batteryState = state
        )
    }

    /**
     * Estimate voltage from battery percentage (Li-ion curve)
     */
    private fun estimateVoltage(percentage: Int): Int {
        // Li-ion voltage range: 3.0V (0%) to 4.2V (100%)
        val volts = 3.0 + (percentage / 100.0) * (4.2 - 3.0)
        return (volts * 1000).toInt() // Convert to millivolts
    }
}

/**
 * Factory for creating JsBatteryMonitorService
 */
actual class BatteryMonitorServiceFactory {
    actual fun create(): IBatteryMonitorService {
        return JsBatteryMonitorService()
    }
}
