package eco.emergi.embit.domain.models

import kotlinx.serialization.Serializable

/**
 * Represents the current grid status including stress level and pricing
 */
@Serializable
data class GridStatus(
    val timestamp: Long,
    val stressLevel: GridStressLevel,
    val carbonIntensity: CarbonIntensity,
    val pricing: GridPricing,
    val location: String, // e.g., "California", "Texas", etc.
    val gridOperator: String? = null
)

/**
 * Grid stress levels indicating demand vs. supply
 */
enum class GridStressLevel {
    LOW,        // Low demand, plenty of supply - best time to charge
    NORMAL,     // Normal operation
    MODERATE,   // Elevated demand
    HIGH,       // High stress - avoid charging if possible
    CRITICAL    // Critical stress - strongly discourage charging
}

/**
 * Carbon intensity of electricity on the grid
 */
@Serializable
data class CarbonIntensity(
    val gramsPerKwh: Double,        // grams of CO2 per kilowatt-hour
    val level: CarbonLevel,
    val renewablePercentage: Double  // Percentage of renewable energy (0-100)
)

/**
 * Carbon intensity levels for easy interpretation
 */
enum class CarbonLevel {
    VERY_LOW,   // < 100 g/kWh - mostly renewable
    LOW,        // 100-250 g/kWh
    MODERATE,   // 250-400 g/kWh
    HIGH,       // 400-600 g/kWh
    VERY_HIGH   // > 600 g/kWh - mostly fossil fuels
}

/**
 * Electricity pricing information
 */
@Serializable
data class GridPricing(
    val pricePerKwh: Double,        // Current price in cents per kWh
    val currency: String = "USD",
    val pricingTier: PricingTier,
    val peakHours: List<Int> = emptyList() // Hours of day that are peak pricing (0-23)
)

/**
 * Pricing tiers for time-of-use rates
 */
enum class PricingTier {
    OFF_PEAK,   // Cheapest rates - best time to charge
    MID_PEAK,   // Moderate rates
    ON_PEAK     // Highest rates - avoid charging
}

/**
 * Smart charging recommendation based on grid status
 */
@Serializable
data class ChargingRecommendation(
    val shouldCharge: Boolean,
    val confidence: Double,           // 0.0 to 1.0 confidence score
    val reason: String,
    val savingsEstimate: Double?,     // Estimated savings in cents if waiting
    val carbonSavingsEstimate: Double?, // Estimated CO2 savings in grams if waiting
    val bestTimeToCharge: Long?,      // Unix timestamp of best time in next 24 hours
    val gridStatus: GridStatus
)

/**
 * Historical grid data for analysis and forecasting
 */
@Serializable
data class GridDataPoint(
    val timestamp: Long,
    val stressLevel: GridStressLevel,
    val carbonIntensityGramsPerKwh: Double,
    val pricePerKwh: Double,
    val renewablePercentage: Double
)

/**
 * User's carbon impact summary
 */
@Serializable
data class CarbonImpact(
    val totalEnergyUsedKwh: Double,
    val totalCarbonEmissionsGrams: Double,
    val carbonSavedBySmartChargingGrams: Double,
    val treesEquivalent: Double,        // Equivalent number of trees to offset emissions
    val comparisonToAverage: Double     // Percentage compared to average user
)

/**
 * Grid forecast for the next hours/days
 */
@Serializable
data class GridForecast(
    val location: String,
    val generatedAt: Long,
    val hourlyForecasts: List<HourlyGridForecast>
)

/**
 * Hourly forecast data point
 */
@Serializable
data class HourlyGridForecast(
    val hour: Int,                    // Hour of day (0-23)
    val timestamp: Long,
    val predictedStressLevel: GridStressLevel,
    val predictedPricing: PricingTier,
    val predictedCarbonIntensity: Double,
    val confidence: Double            // 0.0 to 1.0
)

/**
 * Charging session with grid awareness
 */
@Serializable
data class SmartChargingSession(
    val id: Long = 0,
    val userId: String,
    val startTime: Long,
    val endTime: Long?,
    val startBatteryLevel: Int,
    val endBatteryLevel: Int?,
    val energyConsumedKwh: Double,
    val averageCarbonIntensity: Double,
    val averagePricePerKwh: Double,
    val costEstimate: Double,
    val carbonEmissions: Double,
    val wasOptimal: Boolean,          // Whether charging occurred during optimal time
    val potentialSavings: Double?     // How much could have been saved
)
