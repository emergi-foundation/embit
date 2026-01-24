package eco.emergi.embit.domain.models

import kotlinx.datetime.Clock
import kotlinx.serialization.Serializable

/**
 * User consent and preferences for analytics data collection.
 *
 * Tracks user's privacy preferences for data sharing and analytics.
 * Required for GDPR and privacy compliance.
 *
 * @property analyticsEnabled Whether Firebase Analytics is enabled
 * @property crashlyticsEnabled Whether Crashlytics crash reporting is enabled
 * @property anonymousDataSharingEnabled Whether user consents to sharing anonymized aggregate data
 * @property personalizedRecommendationsEnabled Whether to use data for personalized recommendations
 * @property consentTimestamp When consent was last updated
 * @property consentVersion Version of the privacy policy/terms the user consented to
 */
@Serializable
data class AnalyticsConsent(
    val analyticsEnabled: Boolean = true,
    val crashlyticsEnabled: Boolean = true,
    val anonymousDataSharingEnabled: Boolean = false, // Opt-in required
    val personalizedRecommendationsEnabled: Boolean = true,
    val consentTimestamp: Long = Clock.System.now().toEpochMilliseconds(),
    val consentVersion: String = "1.0"
) {
    /**
     * Check if user has consented to any form of data collection.
     */
    fun hasAnyConsentEnabled(): Boolean {
        return analyticsEnabled || crashlyticsEnabled || anonymousDataSharingEnabled
    }

    /**
     * Check if user has opted out of all data collection.
     */
    fun hasOptedOutCompletely(): Boolean {
        return !analyticsEnabled && !crashlyticsEnabled && !anonymousDataSharingEnabled
    }

    companion object {
        /**
         * Default consent with all optional features disabled (privacy-first).
         */
        fun default(): AnalyticsConsent {
            return AnalyticsConsent(
                analyticsEnabled = true, // Essential for app improvement
                crashlyticsEnabled = true, // Essential for bug fixes
                anonymousDataSharingEnabled = false, // Opt-in required
                personalizedRecommendationsEnabled = true
            )
        }

        /**
         * Full consent (all features enabled).
         */
        fun fullConsent(): AnalyticsConsent {
            return AnalyticsConsent(
                analyticsEnabled = true,
                crashlyticsEnabled = true,
                anonymousDataSharingEnabled = true,
                personalizedRecommendationsEnabled = true
            )
        }

        /**
         * Minimal consent (only essential features).
         */
        fun minimalConsent(): AnalyticsConsent {
            return AnalyticsConsent(
                analyticsEnabled = false,
                crashlyticsEnabled = false,
                anonymousDataSharingEnabled = false,
                personalizedRecommendationsEnabled = false
            )
        }
    }
}
