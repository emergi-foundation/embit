package eco.emergi.embit.data.repositories

import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.firestore.ListenerRegistration
import eco.emergi.embit.domain.models.*
import eco.emergi.embit.domain.repositories.IVppRepository
import eco.emergi.embit.domain.repositories.VppStats
import kotlinx.coroutines.channels.awaitClose
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.callbackFlow
import kotlinx.coroutines.tasks.await
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json

/**
 * Firebase implementation of VPP repository
 */
class VppRepositoryImpl(
    private val firestore: FirebaseFirestore,
    private val userId: String,
    private val userLocation: String // e.g., "California"
) : IVppRepository {

    private val json = Json { ignoreUnknownKeys = true }

    override suspend fun getParticipationSettings(): ParticipationSettings {
        return try {
            val doc = firestore.collection("users")
                .document(userId)
                .collection("vpp_settings")
                .document("participation")
                .get()
                .await()

            if (doc.exists()) {
                val data = doc.data ?: return ParticipationSettings()
                ParticipationSettings(
                    enabled = data["enabled"] as? Boolean ?: false,
                    minimumPriority = EventPriority.valueOf(
                        data["minimumPriority"] as? String ?: "MEDIUM"
                    ),
                    allowBatterySaver = data["allowBatterySaver"] as? Boolean ?: true,
                    allowBackgroundSync = data["allowBackgroundSync"] as? Boolean ?: true,
                    allowNetworkControl = data["allowNetworkControl"] as? Boolean ?: true,
                    maxDurationMinutes = (data["maxDurationMinutes"] as? Long)?.toInt() ?: 120
                )
            } else {
                // Return defaults
                ParticipationSettings()
            }
        } catch (e: Exception) {
            // Return defaults on error
            ParticipationSettings()
        }
    }

    override suspend fun updateParticipationSettings(settings: ParticipationSettings) {
        val data = hashMapOf(
            "enabled" to settings.enabled,
            "minimumPriority" to settings.minimumPriority.name,
            "allowBatterySaver" to settings.allowBatterySaver,
            "allowBackgroundSync" to settings.allowBackgroundSync,
            "allowNetworkControl" to settings.allowNetworkControl,
            "maxDurationMinutes" to settings.maxDurationMinutes,
            "lastUpdated" to System.currentTimeMillis()
        )

        firestore.collection("users")
            .document(userId)
            .collection("vpp_settings")
            .document("participation")
            .set(data)
            .await()
    }

    override fun observeActiveEvents(): Flow<List<DemandResponseEvent>> = callbackFlow {
        val listener: ListenerRegistration = firestore
            .collection("demand_response_events")
            .whereEqualTo("location", userLocation)
            .whereGreaterThan("endTime", System.currentTimeMillis())
            .addSnapshotListener { snapshot, error ->
                if (error != null) {
                    close(error)
                    return@addSnapshotListener
                }

                val events = snapshot?.documents?.mapNotNull { doc ->
                    try {
                        DemandResponseEvent(
                            eventId = doc.id,
                            startTime = doc.getLong("startTime") ?: 0L,
                            endTime = doc.getLong("endTime") ?: 0L,
                            targetReductionWatts = doc.getDouble("targetReductionWatts") ?: 10.0,
                            priority = EventPriority.valueOf(
                                doc.getString("priority") ?: "MEDIUM"
                            ),
                            message = doc.getString("message") ?: "Grid needs help!",
                            location = doc.getString("location") ?: userLocation
                        )
                    } catch (e: Exception) {
                        null
                    }
                } ?: emptyList()

                trySend(events)
            }

        awaitClose { listener.remove() }
    }

    override suspend fun getPastEvents(limit: Int): List<DemandResponseEvent> {
        return try {
            val snapshot = firestore
                .collection("demand_response_events")
                .whereEqualTo("location", userLocation)
                .whereLessThan("endTime", System.currentTimeMillis())
                .orderBy("endTime", com.google.firebase.firestore.Query.Direction.DESCENDING)
                .limit(limit.toLong())
                .get()
                .await()

            snapshot.documents.mapNotNull { doc ->
                try {
                    DemandResponseEvent(
                        eventId = doc.id,
                        startTime = doc.getLong("startTime") ?: 0L,
                        endTime = doc.getLong("endTime") ?: 0L,
                        targetReductionWatts = doc.getDouble("targetReductionWatts") ?: 10.0,
                        priority = EventPriority.valueOf(
                            doc.getString("priority") ?: "MEDIUM"
                        ),
                        message = doc.getString("message") ?: "",
                        location = doc.getString("location") ?: userLocation
                    )
                } catch (e: Exception) {
                    null
                }
            }
        } catch (e: Exception) {
            emptyList()
        }
    }

    override suspend fun getPerformanceHistory(limit: Int): List<EventPerformance> {
        return try {
            val snapshot = firestore
                .collection("users")
                .document(userId)
                .collection("event_performance")
                .orderBy("endTime", com.google.firebase.firestore.Query.Direction.DESCENDING)
                .limit(limit.toLong())
                .get()
                .await()

            snapshot.documents.mapNotNull { doc ->
                try {
                    EventPerformance(
                        eventId = doc.getString("eventId") ?: "",
                        userId = userId,
                        deviceId = doc.getString("deviceId") ?: "",
                        startTime = doc.getLong("startTime") ?: 0L,
                        endTime = doc.getLong("endTime") ?: 0L,
                        baselinePowerWatts = doc.getDouble("baselinePowerWatts") ?: 0.0,
                        actualPowerWatts = doc.getDouble("actualPowerWatts") ?: 0.0,
                        reductionWatts = doc.getDouble("reductionWatts") ?: 0.0,
                        reductionPercentage = doc.getDouble("reductionPercentage") ?: 0.0,
                        actionsApplied = (doc.get("actionsApplied") as? List<*>)
                            ?.filterIsInstance<String>() ?: emptyList(),
                        completed = doc.getBoolean("completed") ?: false
                    )
                } catch (e: Exception) {
                    null
                }
            }
        } catch (e: Exception) {
            emptyList()
        }
    }

    override suspend fun saveEventPerformance(performance: EventPerformance) {
        val data = hashMapOf(
            "eventId" to performance.eventId,
            "deviceId" to performance.deviceId,
            "startTime" to performance.startTime,
            "endTime" to performance.endTime,
            "baselinePowerWatts" to performance.baselinePowerWatts,
            "actualPowerWatts" to performance.actualPowerWatts,
            "reductionWatts" to performance.reductionWatts,
            "reductionPercentage" to performance.reductionPercentage,
            "actionsApplied" to performance.actionsApplied,
            "completed" to performance.completed,
            "durationMinutes" to performance.durationMinutes,
            "energyReducedWh" to performance.energyReducedWh
        )

        firestore.collection("users")
            .document(userId)
            .collection("event_performance")
            .add(data)
            .await()

        // Update aggregate stats
        updateAggregateStats()
    }

    override suspend fun getTotalStats(): VppStats {
        return try {
            val doc = firestore.collection("users")
                .document(userId)
                .get()
                .await()

            val stats = doc.get("vppStats") as? Map<*, *>
            if (stats != null) {
                VppStats(
                    totalEvents = (stats["totalEvents"] as? Long)?.toInt() ?: 0,
                    completedEvents = (stats["completedEvents"] as? Long)?.toInt() ?: 0,
                    totalEnergyReducedWh = (stats["totalEnergyReducedWh"] as? Number)?.toDouble() ?: 0.0,
                    totalCO2SavedGrams = (stats["totalCO2SavedGrams"] as? Number)?.toDouble() ?: 0.0,
                    averageReductionWatts = (stats["averageReductionWatts"] as? Number)?.toDouble() ?: 0.0
                )
            } else {
                VppStats(0, 0, 0.0, 0.0, 0.0)
            }
        } catch (e: Exception) {
            VppStats(0, 0, 0.0, 0.0, 0.0)
        }
    }

    private suspend fun updateAggregateStats() {
        try {
            val performanceSnapshot = firestore
                .collection("users")
                .document(userId)
                .collection("event_performance")
                .get()
                .await()

            var totalEvents = 0
            var completedEvents = 0
            var totalEnergyWh = 0.0
            var totalReductionWatts = 0.0

            performanceSnapshot.documents.forEach { doc ->
                totalEvents++
                val completed = doc.getBoolean("completed") ?: false
                if (completed) completedEvents++

                val energyWh = doc.getDouble("energyReducedWh") ?: 0.0
                totalEnergyWh += energyWh

                val reductionWatts = doc.getDouble("reductionWatts") ?: 0.0
                totalReductionWatts += reductionWatts
            }

            val averageReduction = if (totalEvents > 0) {
                totalReductionWatts / totalEvents
            } else 0.0

            // CO2 estimate: 0.75g per Wh (rough average for US grid)
            val totalCO2 = totalEnergyWh * 0.75

            val stats = hashMapOf(
                "totalEvents" to totalEvents,
                "completedEvents" to completedEvents,
                "totalEnergyReducedWh" to totalEnergyWh,
                "totalCO2SavedGrams" to totalCO2,
                "averageReductionWatts" to averageReduction,
                "lastUpdated" to System.currentTimeMillis()
            )

            firestore.collection("users")
                .document(userId)
                .set(hashMapOf("vppStats" to stats), com.google.firebase.firestore.SetOptions.merge())
                .await()
        } catch (e: Exception) {
            // Log error but don't fail
        }
    }
}
