package eco.emergi.embit.data.local

import app.cash.sqldelight.db.SqlDriver
import app.cash.sqldelight.driver.worker.WebWorkerDriver
import org.w3c.dom.Worker

/**
 * JS/Web implementation of DatabaseDriverFactory
 * Uses WebWorker driver for browser-based SQL storage
 */
actual class DatabaseDriverFactory {
    actual fun createDriver(): SqlDriver {
        // Create worker using inline script for now
        // This is a temporary solution until we properly configure the worker script
        val worker = createWorker()
        return WebWorkerDriver(worker).also { driver ->
            EmbitDatabase.Schema.create(driver)
        }
    }

    private fun createWorker(): Worker {
        // Create a simple worker - WebWorkerDriver will handle the SQL.js integration
        return js("""
            new Worker(URL.createObjectURL(new Blob([
                'self.postMessage("ready");'
            ], { type: 'application/javascript' })))
        """).unsafeCast<Worker>()
    }
}
