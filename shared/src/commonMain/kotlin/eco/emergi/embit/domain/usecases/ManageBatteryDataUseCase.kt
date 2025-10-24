package eco.emergi.embit.domain.usecases

import eco.emergi.embit.domain.repositories.IBatteryRepository
import kotlinx.datetime.Clock
import kotlinx.datetime.Instant
import kotlin.time.Duration.Companion.days

/**
 * Use case for managing battery data (cleanup, export, import).
 */
class ManageBatteryDataUseCase(
    private val repository: IBatteryRepository
) {
    /**
     * Clean up old battery readings older than specified days
     * @param daysToKeep Number of days of data to keep
     * @return Number of readings deleted
     */
    suspend fun cleanupOldData(daysToKeep: Int = 90): Result<Int> {
        val cutoffDate = Clock.System.now() - daysToKeep.days
        return repository.deleteReadingsOlderThan(cutoffDate)
    }

    /**
     * Export all battery data to JSON format
     */
    suspend fun exportData(): Result<String> {
        return repository.exportToJson()
    }

    /**
     * Import battery data from JSON format
     * @return Number of readings imported
     */
    suspend fun importData(jsonData: String): Result<Int> {
        return repository.importFromJson(jsonData)
    }

    /**
     * Get database statistics
     */
    suspend fun getDatabaseStats(): Result<DatabaseStats> {
        val count = repository.getReadingCount().getOrElse { return Result.failure(it) }

        // Estimate database size (rough calculation)
        // Average reading ~150 bytes
        val estimatedSizeBytes = count * 150

        return Result.success(
            DatabaseStats(
                totalReadings = count,
                estimatedSizeMB = estimatedSizeBytes / (1024.0 * 1024.0)
            )
        )
    }

    /**
     * Clear all battery data (use with caution!)
     */
    suspend fun clearAllData(): Result<Unit> {
        return repository.deleteAllReadings()
    }
}

/**
 * Database statistics information
 */
data class DatabaseStats(
    val totalReadings: Long,
    val estimatedSizeMB: Double
)
