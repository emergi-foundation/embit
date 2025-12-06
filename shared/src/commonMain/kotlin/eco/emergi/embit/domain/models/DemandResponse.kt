package eco.emergi.embit.domain.models

import kotlinx.serialization.Serializable

/**
 * Demand Response Event from grid operator
 */
@Serializable
data class DemandResponseEvent(
    val eventId: String,
    val startTime: Long,
    val endTime: Long,
    val targetReductionWatts: Double,
    val priority: EventPriority,
    val message: String,
    val location: String
) {
    val durationMinutes: Int
        get() = ((endTime - startTime) / 60_000).toInt()

    val isActive: Boolean
        get() {
            val now = System.currentTimeMillis()
            return now in startTime..endTime
        }
}

@Serializable
enum class EventPriority {
    LOW,      // Optional participation
    MEDIUM,   // Recommended participation
    HIGH,     // Strongly requested
    CRITICAL  // Emergency event - grid stability at risk
}

/**
 * User's participation level settings
 */
@Serializable
data class ParticipationSettings(
    val enabled: Boolean = false,
    val minimumPriority: EventPriority = EventPriority.MEDIUM,
    val allowBatterySaver: Boolean = true,
    val allowBackgroundSync: Boolean = true,
    val allowNetworkControl: Boolean = true,
    val maxDurationMinutes: Int = 120
)

/**
 * Result of executing a DR event
 */
@Serializable
data class EventPerformance(
    val eventId: String,
    val userId: String,
    val deviceId: String,
    val startTime: Long,
    val endTime: Long,
    val baselinePowerWatts: Double,
    val actualPowerWatts: Double,
    val reductionWatts: Double,
    val reductionPercentage: Double,
    val actionsApplied: List<String>,
    val completed: Boolean
) {
    val durationMinutes: Int
        get() = ((endTime - startTime) / 60_000).toInt()

    val energyReducedWh: Double
        get() = reductionWatts * (durationMinutes / 60.0)
}

/**
 * Power measurement at a point in time
 */
@Serializable
data class PowerMeasurement(
    val timestamp: Long,
    val voltageMillivolts: Int,
    val currentMicroamps: Int,
    val powerWatts: Double,
    val batteryPercentage: Int,
    val isCharging: Boolean,
    val temperature: Int? = null
)

/**
 * Power control actions that can be applied
 */
sealed class PowerControlAction {
    abstract val name: String
    abstract val estimatedReductionWatts: Double

    object EnableBatterySaver : PowerControlAction() {
        override val name = "Battery Saver Mode"
        override val estimatedReductionWatts = 7.0
    }

    object DisableBackgroundSync : PowerControlAction() {
        override val name = "Background Sync Disabled"
        override val estimatedReductionWatts = 2.0
    }

    object DeferBackgroundTasks : PowerControlAction() {
        override val name = "Background Tasks Deferred"
        override val estimatedReductionWatts = 3.0
    }

    object ForceWifiOnly : PowerControlAction() {
        override val name = "WiFi-Only Mode"
        override val estimatedReductionWatts = 1.5
    }

    object LimitCpuUsage : PowerControlAction() {
        override val name = "CPU Usage Limited"
        override val estimatedReductionWatts = 2.5
    }

    fun toSerializable(): String = name
}
