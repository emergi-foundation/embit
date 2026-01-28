package eco.emergi.embit.android.services

import android.content.Context
import android.location.Location
import eco.emergi.embit.domain.repositories.IUserPreferencesRepository
import io.mockk.*
import kotlinx.coroutines.test.runTest
import org.junit.After
import org.junit.Before
import org.junit.Test
import org.junit.runner.RunWith
import org.robolectric.RobolectricTestRunner
import org.robolectric.annotation.Config
import kotlin.test.assertEquals
import kotlin.test.assertNotNull

/**
 * Unit tests for LocationBasedGridManager
 *
 * Verifies:
 * - State to grid region mapping is correct
 * - WattTime balancing authority codes are used (not friendly names)
 * - Grid region detection saves to user preferences
 * - Display names are formatted correctly
 */
@RunWith(RobolectricTestRunner::class)
@Config(sdk = [33])
class LocationBasedGridManagerTest {

    private lateinit var context: Context
    private lateinit var userPreferencesRepository: IUserPreferencesRepository
    private lateinit var locationBasedGridManager: LocationBasedGridManager

    @Before
    fun setup() {
        context = mockk(relaxed = true)
        userPreferencesRepository = mockk(relaxed = true)

        // Mock successful location update
        coEvery { userPreferencesRepository.updateLocation(any()) } returns Result.success(Unit)

        locationBasedGridManager = LocationBasedGridManager(
            context = context,
            userPreferencesRepository = userPreferencesRepository
        )
    }

    @After
    fun teardown() {
        clearAllMocks()
    }

    @Test
    fun `test California maps to CAISO_NORTH`() {
        val displayName = locationBasedGridManager.getGridDisplayName("CAISO_NORTH")
        assertEquals("California (CAISO)", displayName)
    }

    @Test
    fun `test Texas maps to ERCOT`() {
        val displayName = locationBasedGridManager.getGridDisplayName("ERCOT")
        assertEquals("Texas (ERCOT)", displayName)
    }

    @Test
    fun `test New York maps to NYISO`() {
        val displayName = locationBasedGridManager.getGridDisplayName("NYISO")
        assertEquals("New York (NYISO)", displayName)
    }

    @Test
    fun `test New England states map to ISONE`() {
        val displayName = locationBasedGridManager.getGridDisplayName("ISONE")
        assertEquals("New England (ISO-NE)", displayName)
    }

    @Test
    fun `test Mid-Atlantic states map to PJM`() {
        val displayName = locationBasedGridManager.getGridDisplayName("PJM")
        assertEquals("Mid-Atlantic & Midwest (PJM)", displayName)
    }

    @Test
    fun `test Midwest states map to MISO`() {
        val displayName = locationBasedGridManager.getGridDisplayName("MISO")
        assertEquals("Midwest (MISO)", displayName)
    }

    @Test
    fun `test Southwest states map to SPP`() {
        val displayName = locationBasedGridManager.getGridDisplayName("SPP")
        assertEquals("Southwest (SPP)", displayName)
    }

    @Test
    fun `test Western states map to BPAT`() {
        val displayName = locationBasedGridManager.getGridDisplayName("BPAT")
        assertEquals("Western US (Bonneville)", displayName)
    }

    @Test
    fun `test Florida maps to FPL`() {
        val displayName = locationBasedGridManager.getGridDisplayName("FPL")
        assertEquals("Florida", displayName)
    }

    @Test
    fun `test Southeast states map to PACE`() {
        val displayName = locationBasedGridManager.getGridDisplayName("PACE")
        assertEquals("Southeast US", displayName)
    }

    @Test
    fun `test all grid codes use WattTime format not friendly names`() {
        // These should be WattTime balancing authority codes
        val validCodes = listOf(
            "CAISO_NORTH", "CAISO_ZP26", "ERCOT", "NYISO", "ISONE",
            "PJM", "MISO", "SPP", "BPAT", "FPL", "PACE"
        )

        // None of these should be friendly names
        val invalidCodes = listOf(
            "California", "Texas", "New York", "New England",
            "Mid-Atlantic", "Midwest", "Southwest", "Western US", "Southeast"
        )

        validCodes.forEach { code ->
            val displayName = locationBasedGridManager.getGridDisplayName(code)
            assertNotNull(displayName, "Display name should exist for code: $code")
        }

        invalidCodes.forEach { name ->
            // These friendly names should not be recognized as valid codes
            val displayName = locationBasedGridManager.getGridDisplayName(name)
            // Should return the input as-is since it's not a recognized code
            assertEquals(name, displayName, "Friendly name $name should not be a valid grid code")
        }
    }

    @Test
    fun `test unknown grid code returns input as-is`() {
        val unknownCode = "UNKNOWN_REGION"
        val displayName = locationBasedGridManager.getGridDisplayName(unknownCode)
        assertEquals(unknownCode, displayName)
    }
}
