package eco.emergi.embit.`data`.local

import kotlin.Double
import kotlin.Long
import kotlin.String

public data class GetReadingsByInterval(
  public val timestamp: Long,
  public val voltageMillivolts: Long,
  public val amperageMicroamps: Long,
  public val temperatureCelsius: Double?,
  public val batteryPercentage: Long,
  public val batteryState: String,
)
