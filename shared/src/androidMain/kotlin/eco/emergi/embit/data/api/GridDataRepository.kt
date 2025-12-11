package eco.emergi.embit.data.api

import com.google.firebase.firestore.FirebaseFirestore
import eco.emergi.embit.domain.api.providers.WattTimeProvider
import eco.emergi.embit.domain.models.*
import eco.emergi.embit.domain.repositories.IAuthRepository
import eco.emergi.embit.domain.repositories.IGridDataProvider
import eco.emergi.embit.domain.repositories.IGridDataRepository
import kotlinx.coroutines.channels.awaitClose
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.callbackFlow
import kotlinx.coroutines.tasks.await

/**
 * Implementation of grid data repository using backend API.
 *
 * This implementation uses pluggable grid data providers (WattTime, ElectricityMap, etc.)
 * and supports energy product selection for users who want guaranteed renewable energy.
 */
class GridDataRepository(
    private val firestore: FirebaseFirestore = FirebaseFirestore.getInstance(),
    private val authRepository: IAuthRepository,
    private val userPreferencesRepository: eco.emergi.embit.domain.repositories.IUserPreferencesRepository,
    private val gridDataProvider: IGridDataProvider = WattTimeProvider(useMockData = true)
) : IGridDataRepository {

    override suspend fun getCurrentGridStatus(location: String): Result<GridStatus> {
        return try {
            // Fetch grid status from provider (WattTime, ElectricityMap, etc.)
            val result = gridDataProvider.fetchGridStatus(location)

            result.map { gridStatus ->
                // Apply energy product override if user has selected a specific plan
                val userEnergyProduct = getUserEnergyProduct()
                applyEnergyProductOverride(gridStatus, userEnergyProduct)
            }
        } catch (e: Exception) {
            Result.failure(Exception("Failed to fetch grid status: ${e.message}"))
        }
    }

    override fun observeGridStatus(location: String): Flow<GridStatus> = callbackFlow {
        // Poll grid data provider periodically (every minute)
        // In the future, this could use WebSocket for real-time updates
        try {
            while (true) {
                val result = gridDataProvider.fetchGridStatus(location)
                result.onSuccess { gridStatus ->
                    val userEnergyProduct = getUserEnergyProduct()
                    val overriddenStatus = applyEnergyProductOverride(gridStatus, userEnergyProduct)
                    trySend(overriddenStatus)
                }.onFailure { error ->
                    close(error)
                    return@callbackFlow
                }
                kotlinx.coroutines.delay(60000) // Update every minute
            }
        } catch (e: Exception) {
            close(e)
        }
        awaitClose()
    }

    override suspend fun getGridForecast(location: String): Result<GridForecast> {
        return try {
            // TODO: Replace with actual backend API call
            val forecast = generateMockForecast(location)
            Result.success(forecast)
        } catch (e: Exception) {
            Result.failure(Exception("Failed to fetch grid forecast: ${e.message}"))
        }
    }

    override suspend fun getChargingRecommendation(
        location: String,
        currentBatteryLevel: Int,
        targetBatteryLevel: Int
    ): Result<ChargingRecommendation> {
        return try {
            val gridStatus = getCurrentGridStatus(location).getOrThrow()
            val recommendation = calculateRecommendation(
                gridStatus,
                currentBatteryLevel,
                targetBatteryLevel
            )
            Result.success(recommendation)
        } catch (e: Exception) {
            Result.failure(Exception("Failed to get charging recommendation: ${e.message}"))
        }
    }

    override suspend fun calculateCarbonImpact(
        energyKwh: Double,
        location: String,
        timestamp: Long
    ): Result<Double> {
        return try {
            val gridStatus = getCurrentGridStatus(location).getOrThrow()
            val carbonGrams = energyKwh * gridStatus.carbonIntensity.gramsPerKwh
            Result.success(carbonGrams)
        } catch (e: Exception) {
            Result.failure(Exception("Failed to calculate carbon impact: ${e.message}"))
        }
    }

    override suspend fun getCarbonImpactSummary(
        userId: String,
        startTimestamp: Long,
        endTimestamp: Long
    ): Result<CarbonImpact> {
        return try {
            // TODO: Fetch actual data from Firestore
            val summary = CarbonImpact(
                totalEnergyUsedKwh = 5.2,
                totalCarbonEmissionsGrams = 2340.0,
                carbonSavedBySmartChargingGrams = 450.0,
                treesEquivalent = 0.12,
                comparisonToAverage = 0.85 // 15% below average
            )
            Result.success(summary)
        } catch (e: Exception) {
            Result.failure(Exception("Failed to get carbon impact summary: ${e.message}"))
        }
    }

    override suspend fun saveChargingSession(session: SmartChargingSession): Result<Unit> {
        return try {
            val userId = authRepository.getCurrentUser()?.uid
                ?: return Result.failure(Exception("User not authenticated"))

            val sessionData = hashMapOf(
                "id" to session.id,
                "userId" to session.userId,
                "startTime" to session.startTime,
                "endTime" to session.endTime,
                "startBatteryLevel" to session.startBatteryLevel,
                "endBatteryLevel" to session.endBatteryLevel,
                "energyConsumedKwh" to session.energyConsumedKwh,
                "averageCarbonIntensity" to session.averageCarbonIntensity,
                "averagePricePerKwh" to session.averagePricePerKwh,
                "costEstimate" to session.costEstimate,
                "carbonEmissions" to session.carbonEmissions,
                "wasOptimal" to session.wasOptimal,
                "potentialSavings" to session.potentialSavings
            )

            firestore
                .collection("users")
                .document(userId)
                .collection("charging_sessions")
                .document(session.id.toString())
                .set(sessionData)
                .await()

            Result.success(Unit)
        } catch (e: Exception) {
            Result.failure(Exception("Failed to save charging session: ${e.message}"))
        }
    }

    override suspend fun getChargingHistory(
        userId: String,
        limit: Int
    ): Result<List<SmartChargingSession>> {
        return try {
            // TODO: Implement Firestore query
            Result.success(emptyList())
        } catch (e: Exception) {
            Result.failure(Exception("Failed to get charging history: ${e.message}"))
        }
    }

    override suspend fun getHistoricalGridData(
        location: String,
        startTimestamp: Long,
        endTimestamp: Long
    ): Result<List<GridDataPoint>> {
        return try {
            // TODO: Implement backend API call
            Result.success(emptyList())
        } catch (e: Exception) {
            Result.failure(Exception("Failed to get historical grid data: ${e.message}"))
        }
    }

    override suspend fun getUserLocation(): String {
        val preferences = userPreferencesRepository.getUserPreferences().getOrNull()
        return preferences?.location ?: "CAISO_NORTH" // Default to California ISO
    }

    override suspend fun setUserLocation(location: String): Result<Unit> {
        return userPreferencesRepository.updateLocation(location)
    }

    /**
     * Get user's selected energy product/plan
     */
    suspend fun getUserEnergyProduct(): EnergyProduct {
        val preferences = userPreferencesRepository.getUserPreferences().getOrNull()
        return EnergyProducts.fromType(
            preferences?.energyProductType ?: EnergyProductType.STANDARD_GRID
        )
    }

    /**
     * Set user's energy product/plan
     */
    suspend fun setUserEnergyProduct(product: EnergyProduct): Result<Unit> {
        return userPreferencesRepository.updateEnergyProduct(product)
    }

    /**
     * Apply energy product override to grid status.
     *
     * If user has selected a guaranteed clean energy product (e.g., 100% Solar),
     * override the grid's actual renewable percentage with the product's guarantee.
     */
    private fun applyEnergyProductOverride(gridStatus: GridStatus, userEnergyProduct: EnergyProduct): GridStatus {
        // If user has standard grid, return actual grid status
        if (userEnergyProduct.type == EnergyProductType.STANDARD_GRID) {
            return gridStatus
        }

        // If user has a guaranteed clean energy product, override renewable percentage
        val fixedPercentage = userEnergyProduct.fixedRenewablePercentage
        if (fixedPercentage != null) {
            val overriddenCarbonIntensity = CarbonIntensity(
                gramsPerKwh = 450.0 - (fixedPercentage * 3.5), // Lower carbon intensity
                level = when (fixedPercentage) {
                    in 70.0..100.0 -> CarbonLevel.VERY_LOW
                    in 50.0..70.0 -> CarbonLevel.LOW
                    in 30.0..50.0 -> CarbonLevel.MODERATE
                    in 15.0..30.0 -> CarbonLevel.HIGH
                    else -> CarbonLevel.VERY_HIGH
                },
                renewablePercentage = fixedPercentage
            )

            return gridStatus.copy(
                carbonIntensity = overriddenCarbonIntensity
            )
        }

        return gridStatus
    }

    /**
     * Generate mock forecast
     * TODO: Replace with actual backend API call
     */
    private fun generateMockForecast(location: String): GridForecast {
        val forecasts = (0..23).map { hour ->
            val isPeakHour = hour in 16..21
            HourlyGridForecast(
                hour = hour,
                timestamp = System.currentTimeMillis() + (hour * 3600000),
                predictedStressLevel = if (isPeakHour) GridStressLevel.HIGH else GridStressLevel.LOW,
                predictedPricing = if (isPeakHour) PricingTier.ON_PEAK else PricingTier.OFF_PEAK,
                predictedCarbonIntensity = if (hour in 10..16) 150.0 else 400.0,
                confidence = 0.85
            )
        }

        return GridForecast(
            location = location,
            generatedAt = System.currentTimeMillis(),
            hourlyForecasts = forecasts
        )
    }

    /**
     * Calculate charging recommendation
     */
    private fun calculateRecommendation(
        gridStatus: GridStatus,
        currentLevel: Int,
        targetLevel: Int
    ): ChargingRecommendation {
        val shouldCharge = when {
            currentLevel < 20 -> true // Always charge if critically low
            gridStatus.stressLevel == GridStressLevel.LOW -> true
            gridStatus.stressLevel == GridStressLevel.HIGH -> false
            gridStatus.carbonIntensity.renewablePercentage > 60 -> true
            gridStatus.pricing.pricingTier == PricingTier.OFF_PEAK -> true
            else -> currentLevel < 50 // Charge if below 50% during moderate conditions
        }

        val reason = when {
            currentLevel < 20 -> "Battery critically low - charge now"
            !shouldCharge && gridStatus.stressLevel == GridStressLevel.HIGH ->
                "Grid stress is high. Wait for off-peak hours to save ${String.format("%.1f", 15.0)}¢ and reduce carbon emissions."
            shouldCharge && gridStatus.carbonIntensity.renewablePercentage > 60 ->
                "Great time to charge! Grid is ${String.format("%.0f", gridStatus.carbonIntensity.renewablePercentage)}% renewable energy."
            shouldCharge && gridStatus.pricing.pricingTier == PricingTier.OFF_PEAK ->
                "Off-peak pricing - save money by charging now!"
            else -> "Moderate grid conditions"
        }

        return ChargingRecommendation(
            shouldCharge = shouldCharge,
            confidence = 0.85,
            reason = reason,
            savingsEstimate = if (!shouldCharge) 15.0 else null,
            carbonSavingsEstimate = if (!shouldCharge) 200.0 else null,
            bestTimeToCharge = if (!shouldCharge)
                System.currentTimeMillis() + (6 * 3600000) // 6 hours from now
            else null,
            gridStatus = gridStatus
        )
    }
}
