package eco.emergi.embit.data.local

import app.cash.sqldelight.db.SqlDriver

/**
 * Platform-specific database driver factory.
 * Implementations provide the appropriate SQLDelight driver for each platform.
 */
expect class DatabaseDriverFactory {
    fun createDriver(): SqlDriver
}
