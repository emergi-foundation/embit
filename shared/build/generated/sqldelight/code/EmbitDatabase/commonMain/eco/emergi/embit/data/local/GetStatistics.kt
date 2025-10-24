package eco.emergi.embit.`data`.local

import kotlin.Double
import kotlin.Long

public data class GetStatistics(
  public val totalCount: Long,
  public val avgVoltage: Double?,
  public val avgAmperage: Double?,
  public val avgTemperature: Double?,
  public val avgBatteryPercentage: Double?,
  public val maxVoltage: Long?,
  public val maxAmperage: Long?,
  public val minVoltage: Long?,
  public val minAmperage: Long?,
)
