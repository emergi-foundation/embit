package eco.emergi.embit.android.services

import android.Manifest
import android.content.Context
import android.content.pm.PackageManager
import android.location.Geocoder
import android.location.Location
import android.os.Build
import android.util.Log
import androidx.core.content.ContextCompat
import com.google.android.gms.location.FusedLocationProviderClient
import com.google.android.gms.location.LocationServices
import com.google.android.gms.location.Priority
import com.google.android.gms.tasks.CancellationTokenSource
import dagger.hilt.android.qualifiers.ApplicationContext
import eco.emergi.embit.domain.repositories.IUserPreferencesRepository
import kotlinx.coroutines.tasks.await
import java.util.*
import javax.inject.Inject
import javax.inject.Singleton

/**
 * Detects user location and configures grid mix based on their region.
 *
 * Maps geographic locations to grid operators:
 * - California → CAISO
 * - Texas → ERCOT
 * - Northeast → NYISO, ISO-NE
 * - Midwest → MISO
 * - etc.
 */
@Singleton
class LocationBasedGridManager @Inject constructor(
    @ApplicationContext private val context: Context,
    private val userPreferencesRepository: IUserPreferencesRepository
) {
    private val TAG = "LocationGridManager"
    private val fusedLocationClient: FusedLocationProviderClient =
        LocationServices.getFusedLocationProviderClient(context)

    /**
     * Detects user's location and sets appropriate grid region.
     * Requests location permission if not granted.
     */
    suspend fun detectAndSetGridRegion(): String? {
        if (!hasLocationPermission()) {
            Log.w(TAG, "Location permission not granted, using default grid region")
            return null
        }

        return try {
            val location = getCurrentLocation()
            if (location != null) {
                val gridRegion = getGridRegionFromLocation(location)
                Log.d(TAG, "Detected grid region: $gridRegion")

                // Save to user preferences
                userPreferencesRepository.updateLocation(gridRegion)
                gridRegion
            } else {
                Log.w(TAG, "Could not get current location")
                null
            }
        } catch (e: Exception) {
            Log.e(TAG, "Error detecting location", e)
            null
        }
    }

    /**
     * Gets current location using FusedLocationProviderClient.
     */
    private suspend fun getCurrentLocation(): Location? {
        if (!hasLocationPermission()) return null

        return try {
            val cancellationToken = CancellationTokenSource()
            fusedLocationClient.getCurrentLocation(
                Priority.PRIORITY_BALANCED_POWER_ACCURACY,
                cancellationToken.token
            ).await()
        } catch (e: Exception) {
            Log.e(TAG, "Error getting location", e)
            null
        }
    }

    /**
     * Maps geographic location to grid operator region.
     */
    private suspend fun getGridRegionFromLocation(location: Location): String {
        val state = getStateFromLocation(location)

        return when (state?.uppercase()) {
            // California Independent System Operator
            "CALIFORNIA", "CA" -> "California"

            // Electric Reliability Council of Texas
            "TEXAS", "TX" -> "Texas"

            // New York ISO
            "NEW YORK", "NY" -> "New York"

            // ISO New England (Northeast states)
            "CONNECTICUT", "CT",
            "MAINE", "ME",
            "MASSACHUSETTS", "MA",
            "NEW HAMPSHIRE", "NH",
            "RHODE ISLAND", "RI",
            "VERMONT", "VT" -> "New England"

            // PJM Interconnection (Mid-Atlantic and parts of Midwest)
            "PENNSYLVANIA", "PA",
            "NEW JERSEY", "NJ",
            "DELAWARE", "DE",
            "MARYLAND", "MD",
            "VIRGINIA", "VA",
            "WEST VIRGINIA", "WV",
            "OHIO", "OH",
            "INDIANA", "IN",
            "ILLINOIS", "IL",
            "KENTUCKY", "KY",
            "NORTH CAROLINA", "NC",
            "TENNESSEE", "TN",
            "MICHIGAN", "MI" -> "PJM"

            // Midcontinent ISO
            "MINNESOTA", "MN",
            "WISCONSIN", "WI",
            "IOWA", "IA",
            "MISSOURI", "MO",
            "ARKANSAS", "AR",
            "LOUISIANA", "LA",
            "MISSISSIPPI", "MS",
            "NORTH DAKOTA", "ND",
            "SOUTH DAKOTA", "SD",
            "MONTANA", "MT" -> "MISO"

            // Southwest Power Pool
            "KANSAS", "KS",
            "OKLAHOMA", "OK",
            "NEBRASKA", "NE",
            "NEW MEXICO", "NM" -> "SPP"

            // Western Electricity Coordinating Council (excluding CAISO)
            "ARIZONA", "AZ",
            "COLORADO", "CO",
            "IDAHO", "ID",
            "NEVADA", "NV",
            "OREGON", "OR",
            "UTAH", "UT",
            "WASHINGTON", "WA",
            "WYOMING", "WY" -> "WECC"

            // Southeast
            "FLORIDA", "FL",
            "GEORGIA", "GA",
            "ALABAMA", "AL",
            "SOUTH CAROLINA", "SC" -> "Southeast"

            // Default
            else -> {
                Log.w(TAG, "Unknown state: $state, defaulting to California")
                "California"
            }
        }
    }

    /**
     * Uses Geocoder to get state name from coordinates.
     */
    private suspend fun getStateFromLocation(location: Location): String? {
        return try {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
                // Use modern async API
                Geocoder(context).getFromLocation(location.latitude, location.longitude, 1)
                    ?.firstOrNull()
                    ?.adminArea
            } else {
                // Use deprecated synchronous API
                @Suppress("DEPRECATION")
                Geocoder(context).getFromLocation(location.latitude, location.longitude, 1)
                    ?.firstOrNull()
                    ?.adminArea
            }
        } catch (e: Exception) {
            Log.e(TAG, "Error geocoding location", e)
            null
        }
    }

    /**
     * Checks if location permission is granted.
     */
    private fun hasLocationPermission(): Boolean {
        return ContextCompat.checkSelfPermission(
            context,
            Manifest.permission.ACCESS_COARSE_LOCATION
        ) == PackageManager.PERMISSION_GRANTED
    }

    /**
     * Gets grid region display name for user.
     */
    fun getGridDisplayName(region: String): String {
        return when (region) {
            "California" -> "California (CAISO)"
            "Texas" -> "Texas (ERCOT)"
            "New York" -> "New York (NYISO)"
            "New England" -> "New England (ISO-NE)"
            "PJM" -> "Mid-Atlantic & Midwest (PJM)"
            "MISO" -> "Midwest (MISO)"
            "SPP" -> "Southwest (SPP)"
            "WECC" -> "Western US (WECC)"
            "Southeast" -> "Southeast US"
            else -> region
        }
    }
}
