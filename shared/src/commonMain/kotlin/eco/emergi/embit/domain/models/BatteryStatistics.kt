package eco.emergi.embit.domain.models

import kotlinx.datetime.Instant
import kotlinx.serialization.Serializable

/**
 * Aggregated battery statistics for a specific time period.
 *
 * @property periodStart Start of the statistics period
 * @property periodEnd End of the statistics period
 * @property averagePowerMilliwatts Average power consumption in mW
 * @property peakPowerMilliwatts Peak power consumption in mW
 * @property totalEnergyMilliwattHours Total energy consumed in mWh
 * @property averageTemperature Average battery temperature
 * @property chargingTimeSeconds Total time spent charging in seconds
 * @property dischargingTimeSeconds Total time spent discharging in seconds
 * @property chargeCount Number of charging sessions
 * @property averageBatteryPercentage Average battery percentage during period
 */
@Serializable
data class BatteryStatistics(
    val periodStart: Instant,
    val periodEnd: Instant,
    val averagePowerMilliwatts: Double,
    val peakPowerMilliwatts: Double,
    val totalEnergyMilliwattHours: Double,
    val averageTemperature: Float? = null,
    val chargingTimeSeconds: Long,
    val dischargingTimeSeconds: Long,
    val chargeCount: Int,
    val averageBatteryPercentage: Int
) {
    /**
     * Total time covered by statistics in seconds
     */
    val totalTimeSeconds: Long
        get() = chargingTimeSeconds + dischargingTimeSeconds

    /**
     * Percentage of time spent charging
     */
    val chargingTimePercentage: Float
        get() = if (totalTimeSeconds > 0) {
            (chargingTimeSeconds.toFloat() / totalTimeSeconds) * 100f
        } else 0f

    /**
     * Average power in watts
     */
    val averagePowerWatts: Double
        get() = averagePowerMilliwatts / 1000.0

    /**
     * Total energy in watt-hours
     */
    val totalEnergyWattHours: Double
        get() = totalEnergyMilliwattHours / 1000.0
}

/**
 * Time period for statistics queries
 */
@Serializable
enum class TimePeriod {
    HOUR,
    DAY,
    WEEK,
    MONTH,
    YEAR,
    ALL_TIME,
    CUSTOM
}

/**
 * Data point for charting/graphing battery metrics over time
 */
@Serializable
data class BatteryDataPoint(
    val timestamp: Instant,
    val value: Double,
    val label: String? = null
)

/**
 * Battery trend analysis result
 */
@Serializable
data class BatteryTrend(
    val metric: TrendMetric,
    val direction: TrendDirection,
    val changePercentage: Float,
    val recommendation: String? = null
)

@Serializable
enum class TrendMetric {
    POWER_CONSUMPTION,
    BATTERY_HEALTH,
    CHARGING_FREQUENCY,
    TEMPERATURE
}

@Serializable
enum class TrendDirection {
    IMPROVING,
    STABLE,
    DECLINING
}
