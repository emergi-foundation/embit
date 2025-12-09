package eco.emergi.embit.domain.models

import kotlinx.serialization.Serializable

/**
 * Represents different energy product/plan types that users can subscribe to.
 * These products determine the renewable energy mix powering their devices.
 */
@Serializable
enum class EnergyProductType {
    /** Standard grid mix - varies by location and time */
    STANDARD_GRID,

    /** 100% solar energy */
    SOLAR_100,

    /** 100% wind energy */
    WIND_100,

    /** Mix of 50% solar + 50% wind */
    SOLAR_WIND_50_50,

    /** Mix of 75% solar + 25% wind */
    SOLAR_75_WIND_25,

    /** 100% renewable (any source) */
    RENEWABLE_100,

    /** Custom renewable mix */
    CUSTOM
}

/**
 * User's selected energy product/plan
 */
@Serializable
data class EnergyProduct(
    val type: EnergyProductType,
    val displayName: String,
    val description: String,

    /** Fixed renewable percentage (0-100). Null if varies by grid */
    val fixedRenewablePercentage: Double? = null,

    /** Breakdown of renewable sources if applicable */
    val renewableBreakdown: RenewableBreakdown? = null,

    /** Whether this product guarantees clean energy */
    val isGuaranteedClean: Boolean = false
)

/**
 * Breakdown of renewable energy sources
 */
@Serializable
data class RenewableBreakdown(
    val solarPercentage: Double = 0.0,
    val windPercentage: Double = 0.0,
    val hydroPercentage: Double = 0.0,
    val geothermalPercentage: Double = 0.0,
    val biomassPercentage: Double = 0.0,
    val otherPercentage: Double = 0.0
) {
    val totalRenewable: Double
        get() = solarPercentage + windPercentage + hydroPercentage +
                geothermalPercentage + biomassPercentage + otherPercentage
}

/**
 * Predefined energy products
 */
object EnergyProducts {
    val STANDARD_GRID = EnergyProduct(
        type = EnergyProductType.STANDARD_GRID,
        displayName = "Standard Grid Mix",
        description = "Your energy mix varies based on local grid conditions and time of day",
        fixedRenewablePercentage = null,
        isGuaranteedClean = false
    )

    val SOLAR_100 = EnergyProduct(
        type = EnergyProductType.SOLAR_100,
        displayName = "100% Solar",
        description = "All your energy comes from solar power",
        fixedRenewablePercentage = 100.0,
        renewableBreakdown = RenewableBreakdown(solarPercentage = 100.0),
        isGuaranteedClean = true
    )

    val WIND_100 = EnergyProduct(
        type = EnergyProductType.WIND_100,
        displayName = "100% Wind",
        description = "All your energy comes from wind power",
        fixedRenewablePercentage = 100.0,
        renewableBreakdown = RenewableBreakdown(windPercentage = 100.0),
        isGuaranteedClean = true
    )

    val SOLAR_WIND_50_50 = EnergyProduct(
        type = EnergyProductType.SOLAR_WIND_50_50,
        displayName = "50% Solar + 50% Wind",
        description = "Half solar, half wind energy",
        fixedRenewablePercentage = 100.0,
        renewableBreakdown = RenewableBreakdown(
            solarPercentage = 50.0,
            windPercentage = 50.0
        ),
        isGuaranteedClean = true
    )

    val SOLAR_75_WIND_25 = EnergyProduct(
        type = EnergyProductType.SOLAR_75_WIND_25,
        displayName = "75% Solar + 25% Wind",
        description = "Primarily solar with wind backup",
        fixedRenewablePercentage = 100.0,
        renewableBreakdown = RenewableBreakdown(
            solarPercentage = 75.0,
            windPercentage = 25.0
        ),
        isGuaranteedClean = true
    )

    val RENEWABLE_100 = EnergyProduct(
        type = EnergyProductType.RENEWABLE_100,
        displayName = "100% Renewable",
        description = "All renewable energy sources (mix varies)",
        fixedRenewablePercentage = 100.0,
        isGuaranteedClean = true
    )

    val ALL_PRODUCTS = listOf(
        STANDARD_GRID,
        SOLAR_100,
        WIND_100,
        SOLAR_WIND_50_50,
        SOLAR_75_WIND_25,
        RENEWABLE_100
    )
}
