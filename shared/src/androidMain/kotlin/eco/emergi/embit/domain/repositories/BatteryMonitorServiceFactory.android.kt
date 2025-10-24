package eco.emergi.embit.domain.repositories

import android.content.Context

/**
 * Android implementation of BatteryMonitorServiceFactory
 */
actual class BatteryMonitorServiceFactory(private val context: Context) {
    actual fun create(): IBatteryMonitorService {
        return AndroidBatteryMonitorService(context)
    }
}
