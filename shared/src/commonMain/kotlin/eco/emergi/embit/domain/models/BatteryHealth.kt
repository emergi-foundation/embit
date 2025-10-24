package eco.emergi.embit.domain.models

import kotlinx.datetime.Instant
import kotlinx.serialization.Serializable

/**
 * Represents battery health metrics and degradation information.
 *
 * @property timestamp When the health was calculated
 * @property healthPercentage Overall battery health score (0-100)
 * @property estimatedCapacityMah Estimated current battery capacity in mAh
 * @property designCapacityMah Original design capacity in mAh
 * @property chargeCount Number of charge cycles completed
 * @property averageTemperature Average operating temperature
 * @property healthStatus Overall health status assessment
 */
@Serializable
data class BatteryHealth(
    val timestamp: Instant,
    val healthPercentage: Int,
    val estimatedCapacityMah: Int? = null,
    val designCapacityMah: Int? = null,
    val chargeCount: Int? = null,
    val averageTemperature: Float? = null,
    val healthStatus: HealthStatus = HealthStatus.UNKNOWN
) {
    /**
     * Calculate capacity degradation percentage
     */
    val capacityDegradation: Float?
        get() = if (estimatedCapacityMah != null && designCapacityMah != null && designCapacityMah > 0) {
            ((designCapacityMah - estimatedCapacityMah) / designCapacityMah.toFloat()) * 100f
        } else null
}

/**
 * Battery health status categories
 */
@Serializable
enum class HealthStatus {
    EXCELLENT,  // 90-100%
    GOOD,       // 80-89%
    FAIR,       // 70-79%
    POOR,       // 50-69%
    CRITICAL,   // <50%
    UNKNOWN     // Health cannot be determined
}

/**
 * Determine health status from health percentage
 */
fun getHealthStatus(healthPercentage: Int): HealthStatus = when {
    healthPercentage >= 90 -> HealthStatus.EXCELLENT
    healthPercentage >= 80 -> HealthStatus.GOOD
    healthPercentage >= 70 -> HealthStatus.FAIR
    healthPercentage >= 50 -> HealthStatus.POOR
    healthPercentage > 0 -> HealthStatus.CRITICAL
    else -> HealthStatus.UNKNOWN
}
