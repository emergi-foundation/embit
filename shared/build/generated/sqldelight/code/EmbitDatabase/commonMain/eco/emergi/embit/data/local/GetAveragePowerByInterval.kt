package eco.emergi.embit.`data`.local

import kotlin.Double
import kotlin.Long

public data class GetAveragePowerByInterval(
  public val intervalStart: Long,
  public val avgPowerMilliwatts: Double?,
  public val sampleCount: Long,
)
