package eco.emergi.embit.`data`.local

import kotlin.Long
import kotlin.String

public data class GetStateDurations(
  public val batteryState: String,
  public val durationSeconds: Long,
  public val readingCount: Long,
)
