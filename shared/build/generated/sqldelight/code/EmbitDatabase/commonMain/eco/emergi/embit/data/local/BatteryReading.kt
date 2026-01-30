package eco.emergi.embit.`data`.local

import kotlin.Double
import kotlin.Long
import kotlin.String

public data class BatteryReading(
  public val id: Long,
  public val timestamp: Long,
  public val voltageMillivolts: Long,
  public val amperageMicroamps: Long,
  public val temperatureCelsius: Double?,
  public val batteryPercentage: Long,
  public val batteryState: String,
  public val chargingType: String?,
  public val syncedAt: Long?,
)
