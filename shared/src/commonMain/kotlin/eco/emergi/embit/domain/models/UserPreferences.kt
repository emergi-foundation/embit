package eco.emergi.embit.domain.models

import kotlinx.serialization.Serializable

/**
 * User-specific preferences and settings stored in Firestore.
 * These preferences are tied to a user's account and persist across devices.
 *
 * @property userId Firebase Auth user ID
 * @property location Grid location/region (e.g., "CAISO_NORTH", "PJM", "ERCOT")
 * @property energyProductType Type of energy product selected by user
 * @property notificationsEnabled Whether to show charging recommendations
 * @property optimalChargingEnabled Whether to enable smart charging features
 * @property vppParticipationEnabled Whether to participate in Virtual Power Plant demand response
 * @property theme App theme preference ("light", "dark", "system")
 * @property highContrastMode Enable high-contrast colors for accessibility (WCAG AAA)
 * @property updatedAt Timestamp of last update (milliseconds since epoch)
 */
@Serializable
data class UserPreferences(
    val userId: String,
    val location: String = "CAISO_NORTH",  // Default to California ISO
    val energyProductType: EnergyProductType = EnergyProductType.STANDARD_GRID,
    val notificationsEnabled: Boolean = true,
    val optimalChargingEnabled: Boolean = true,
    val vppParticipationEnabled: Boolean = true,  // Default ON for grid participation
    val theme: String = "system",
    val highContrastMode: Boolean = false,
    val updatedAt: Long = System.currentTimeMillis()
) {
    /**
     * Convert to Firestore map for storage
     */
    fun toFirestoreMap(): Map<String, Any> {
        return mapOf(
            "userId" to userId,
            "location" to location,
            "energyProductType" to energyProductType.name,
            "notificationsEnabled" to notificationsEnabled,
            "optimalChargingEnabled" to optimalChargingEnabled,
            "vppParticipationEnabled" to vppParticipationEnabled,
            "theme" to theme,
            "highContrastMode" to highContrastMode,
            "updatedAt" to updatedAt
        )
    }

    companion object {
        /**
         * Create default preferences for a new user
         */
        fun default(userId: String): UserPreferences {
            return UserPreferences(userId = userId)
        }

        /**
         * Create from Firestore document data
         */
        fun fromFirestoreMap(data: Map<String, Any>): UserPreferences {
            return UserPreferences(
                userId = data["userId"] as? String ?: "",
                location = data["location"] as? String ?: "CAISO_NORTH",
                energyProductType = try {
                    EnergyProductType.valueOf(data["energyProductType"] as? String ?: "STANDARD_GRID")
                } catch (e: IllegalArgumentException) {
                    EnergyProductType.STANDARD_GRID
                },
                notificationsEnabled = data["notificationsEnabled"] as? Boolean ?: true,
                optimalChargingEnabled = data["optimalChargingEnabled"] as? Boolean ?: true,
                vppParticipationEnabled = data["vppParticipationEnabled"] as? Boolean ?: true,
                theme = data["theme"] as? String ?: "system",
                highContrastMode = data["highContrastMode"] as? Boolean ?: false,
                updatedAt = (data["updatedAt"] as? Long) ?: System.currentTimeMillis()
            )
        }
    }
}
