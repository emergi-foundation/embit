package eco.emergi.embit.domain.models

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

/**
 * Unit tests for UserPreferences data model
 *
 * Verifies:
 * - VPP participation defaults to ON (true)
 * - Default preferences are created correctly
 * - Firestore serialization includes vppParticipationEnabled
 * - Firestore deserialization defaults to true when field is missing
 */
class UserPreferencesTest {

    @Test
    fun `test VPP participation defaults to ON in data class`() {
        val userId = "test-user-123"
        val prefs = UserPreferences(userId = userId)

        assertTrue(
            prefs.vppParticipationEnabled,
            "VPP participation should default to ON (true)"
        )
    }

    @Test
    fun `test default preferences have VPP enabled`() {
        val userId = "test-user-123"
        val prefs = UserPreferences.default(userId)

        assertTrue(
            prefs.vppParticipationEnabled,
            "Default preferences should have VPP participation ON"
        )
    }

    @Test
    fun `test Firestore map includes vppParticipationEnabled`() {
        val userId = "test-user-123"
        val prefs = UserPreferences(
            userId = userId,
            vppParticipationEnabled = true
        )

        val firestoreMap = prefs.toFirestoreMap()

        assertTrue(
            firestoreMap.containsKey("vppParticipationEnabled"),
            "Firestore map should include vppParticipationEnabled field"
        )
        assertEquals(
            true,
            firestoreMap["vppParticipationEnabled"],
            "vppParticipationEnabled should be true in Firestore map"
        )
    }

    @Test
    fun `test Firestore deserialization defaults to true when field missing`() {
        val firestoreData = mapOf(
            "userId" to "test-user-123",
            "location" to "CAISO_NORTH",
            "energyProductType" to "STANDARD_GRID"
            // vppParticipationEnabled is intentionally missing
        )

        val prefs = UserPreferences.fromFirestoreMap(firestoreData)

        assertTrue(
            prefs.vppParticipationEnabled,
            "vppParticipationEnabled should default to true when missing from Firestore"
        )
    }

    @Test
    fun `test Firestore deserialization preserves explicit false value`() {
        val firestoreData = mapOf(
            "userId" to "test-user-123",
            "location" to "CAISO_NORTH",
            "energyProductType" to "STANDARD_GRID",
            "vppParticipationEnabled" to false // User explicitly disabled
        )

        val prefs = UserPreferences.fromFirestoreMap(firestoreData)

        assertEquals(
            false,
            prefs.vppParticipationEnabled,
            "vppParticipationEnabled should preserve explicit false value"
        )
    }

    @Test
    fun `test Firestore deserialization preserves explicit true value`() {
        val firestoreData = mapOf(
            "userId" to "test-user-123",
            "location" to "CAISO_NORTH",
            "energyProductType" to "STANDARD_GRID",
            "vppParticipationEnabled" to true
        )

        val prefs = UserPreferences.fromFirestoreMap(firestoreData)

        assertTrue(
            prefs.vppParticipationEnabled,
            "vppParticipationEnabled should preserve explicit true value"
        )
    }

    @Test
    fun `test VPP can be disabled via copy`() {
        val userId = "test-user-123"
        val prefs = UserPreferences.default(userId)

        assertTrue(prefs.vppParticipationEnabled, "Should start enabled")

        val disabledPrefs = prefs.copy(vppParticipationEnabled = false)

        assertEquals(
            false,
            disabledPrefs.vppParticipationEnabled,
            "Should be able to disable VPP participation"
        )
    }

    @Test
    fun `test VPP can be enabled via copy`() {
        val userId = "test-user-123"
        val prefs = UserPreferences(
            userId = userId,
            vppParticipationEnabled = false
        )

        assertEquals(false, prefs.vppParticipationEnabled, "Should start disabled")

        val enabledPrefs = prefs.copy(vppParticipationEnabled = true)

        assertTrue(
            enabledPrefs.vppParticipationEnabled,
            "Should be able to enable VPP participation"
        )
    }

    @Test
    fun `test default location is CAISO_NORTH`() {
        val userId = "test-user-123"
        val prefs = UserPreferences.default(userId)

        assertEquals(
            "CAISO_NORTH",
            prefs.location,
            "Default location should be CAISO_NORTH (WattTime format)"
        )
    }

    @Test
    fun `test default energy product is STANDARD_GRID`() {
        val userId = "test-user-123"
        val prefs = UserPreferences.default(userId)

        assertEquals(
            EnergyProductType.STANDARD_GRID,
            prefs.energyProductType,
            "Default energy product should be STANDARD_GRID"
        )
    }
}
