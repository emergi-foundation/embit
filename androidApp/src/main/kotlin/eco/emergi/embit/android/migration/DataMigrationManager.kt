package eco.emergi.embit.android.migration

import android.content.Context
import android.util.Log
import eco.emergi.embit.EnergyUsage
import eco.emergi.embit.EnergyUsageDatabase
import eco.emergi.embit.domain.models.BatteryReading
import eco.emergi.embit.domain.models.BatteryState
import eco.emergi.embit.domain.repositories.IBatteryRepository
import kotlinx.coroutines.flow.first
import kotlinx.datetime.Instant
import javax.inject.Inject

/**
 * Manages migration of battery data from legacy Room database
 * to new SQLDelight database.
 */
class DataMigrationManager @Inject constructor(
    private val repository: IBatteryRepository
) {
    companion object {
        private const val TAG = "DataMigration"
        private const val PREFS_NAME = "embit_migration"
        private const val KEY_MIGRATION_COMPLETED = "migration_v1_completed"
        private const val KEY_MIGRATION_TIMESTAMP = "migration_timestamp"
        private const val KEY_RECORDS_MIGRATED = "records_migrated"
    }

    /**
     * Check if migration has already been completed
     */
    fun isMigrationCompleted(context: Context): Boolean {
        val prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
        return prefs.getBoolean(KEY_MIGRATION_COMPLETED, false)
    }

    /**
     * Get migration statistics
     */
    fun getMigrationStats(context: Context): MigrationStats? {
        val prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
        if (!prefs.getBoolean(KEY_MIGRATION_COMPLETED, false)) {
            return null
        }

        return MigrationStats(
            recordsMigrated = prefs.getInt(KEY_RECORDS_MIGRATED, 0),
            timestamp = prefs.getLong(KEY_MIGRATION_TIMESTAMP, 0)
        )
    }

    /**
     * Perform migration from Room to SQLDelight database
     *
     * @return MigrationResult with success status and details
     */
    suspend fun migrate(context: Context): MigrationResult {
        try {
            Log.i(TAG, "Starting data migration from Room to SQLDelight")

            // Check if already migrated
            if (isMigrationCompleted(context)) {
                Log.i(TAG, "Migration already completed")
                return MigrationResult.AlreadyMigrated(
                    getMigrationStats(context) ?: MigrationStats(0, 0)
                )
            }

            // Check if old database exists
            val dbFile = context.getDatabasePath("energy_usage_database")
            if (!dbFile.exists()) {
                Log.i(TAG, "No legacy database found - nothing to migrate")
                markMigrationComplete(context, 0)
                return MigrationResult.NoDataToMigrate
            }

            // Open old Room database
            val oldDb = EnergyUsageDatabase.getInstance(context)
            val oldDao = oldDb.energyUsageDao()

            // Read all old records
            val oldRecords = oldDao.getAllEnergyUsageData().first()
            Log.i(TAG, "Found ${oldRecords.size} records to migrate")

            if (oldRecords.isEmpty()) {
                markMigrationComplete(context, 0)
                return MigrationResult.Success(0, emptyList())
            }

            // Transform and insert records
            val warnings = mutableListOf<String>()
            var successCount = 0

            oldRecords.forEach { oldRecord ->
                try {
                    val newRecord = transformRecord(oldRecord)
                    repository.insertReading(newRecord)
                    successCount++
                } catch (e: Exception) {
                    val warning = "Failed to migrate record id=${oldRecord.id}: ${e.message}"
                    Log.w(TAG, warning)
                    warnings.add(warning)
                }
            }

            // Mark migration as complete
            markMigrationComplete(context, successCount)

            Log.i(TAG, "Migration completed: $successCount/$${oldRecords.size} records migrated")

            return MigrationResult.Success(
                recordsMigrated = successCount,
                warnings = warnings
            )

        } catch (e: Exception) {
            Log.e(TAG, "Migration failed", e)
            return MigrationResult.Failed(e.message ?: "Unknown error")
        }
    }

    /**
     * Transform old EnergyUsage record to new BatteryReading format
     */
    private fun transformRecord(old: EnergyUsage): BatteryReading {
        // Convert units:
        // Old: amperage in amps (Long), voltage in volts (Int)
        // New: amperageMicroamps (Int), voltageMillivolts (Int)

        // Note: The old schema stored amperage as Long, which seems unusual
        // Assuming it's in microamps already, otherwise scale appropriately
        val amperageMicroamps = old.amperage
        val voltageMillivolts = old.voltage * 1000 // volts to millivolts

        // Calculate estimated battery percentage from voltage
        // Typical Li-ion: 3.0V (0%) to 4.2V (100%)
        val voltageVolts = old.voltage.toFloat()
        val batteryPercentage = estimateBatteryPercentage(voltageVolts)

        // Determine charging state from amperage
        // Positive amperage typically means charging
        val isCharging = amperageMicroamps > 0
        val batteryState = when {
            isCharging -> BatteryState.Charging
            amperageMicroamps < 0 -> BatteryState.Discharging
            else -> BatteryState.NotCharging
        }

        return BatteryReading(
            id = 0, // Will be auto-generated
            timestamp = Instant.fromEpochMilliseconds(old.time),
            voltageMillivolts = voltageMillivolts,
            amperageMicroamps = amperageMicroamps,
            temperatureCelsius = null, // Not available in old schema
            batteryPercentage = batteryPercentage,
            batteryState = batteryState
        )
    }

    /**
     * Estimate battery percentage from voltage (for Li-ion batteries)
     */
    private fun estimateBatteryPercentage(voltageVolts: Float): Int {
        return when {
            voltageVolts >= 4.2 -> 100
            voltageVolts <= 3.0 -> 0
            else -> {
                // Linear interpolation between 3.0V and 4.2V
                val percentage = ((voltageVolts - 3.0) / (4.2 - 3.0) * 100).toInt()
                percentage.coerceIn(0, 100)
            }
        }
    }

    /**
     * Mark migration as completed in SharedPreferences
     */
    private fun markMigrationComplete(context: Context, recordCount: Int) {
        val prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
        prefs.edit()
            .putBoolean(KEY_MIGRATION_COMPLETED, true)
            .putInt(KEY_RECORDS_MIGRATED, recordCount)
            .putLong(KEY_MIGRATION_TIMESTAMP, System.currentTimeMillis())
            .apply()
    }

    /**
     * Reset migration state (for testing purposes)
     */
    fun resetMigrationState(context: Context) {
        val prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
        prefs.edit().clear().apply()
        Log.i(TAG, "Migration state reset")
    }
}

/**
 * Result of migration operation
 */
sealed class MigrationResult {
    data class Success(
        val recordsMigrated: Int,
        val warnings: List<String>
    ) : MigrationResult()

    data class AlreadyMigrated(
        val stats: MigrationStats
    ) : MigrationResult()

    data object NoDataToMigrate : MigrationResult()

    data class Failed(val error: String) : MigrationResult()
}

/**
 * Statistics about completed migration
 */
data class MigrationStats(
    val recordsMigrated: Int,
    val timestamp: Long
)
