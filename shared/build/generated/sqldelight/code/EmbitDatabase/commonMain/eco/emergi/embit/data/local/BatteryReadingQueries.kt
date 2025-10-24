package eco.emergi.embit.`data`.local

import app.cash.sqldelight.Query
import app.cash.sqldelight.TransacterImpl
import app.cash.sqldelight.db.QueryResult
import app.cash.sqldelight.db.SqlCursor
import app.cash.sqldelight.db.SqlDriver
import kotlin.Any
import kotlin.Double
import kotlin.Long
import kotlin.String

public class BatteryReadingQueries(
  driver: SqlDriver,
) : TransacterImpl(driver) {
  public fun <T : Any> getLatestReading(mapper: (
    id: Long,
    timestamp: Long,
    voltageMillivolts: Long,
    amperageMicroamps: Long,
    temperatureCelsius: Double?,
    batteryPercentage: Long,
    batteryState: String,
    chargingType: String?,
  ) -> T): Query<T> = Query(209_701_580, arrayOf("BatteryReading"), driver, "BatteryReading.sq",
      "getLatestReading", """
  |SELECT BatteryReading.id, BatteryReading.timestamp, BatteryReading.voltageMillivolts, BatteryReading.amperageMicroamps, BatteryReading.temperatureCelsius, BatteryReading.batteryPercentage, BatteryReading.batteryState, BatteryReading.chargingType FROM BatteryReading
  |ORDER BY timestamp DESC
  |LIMIT 1
  """.trimMargin()) { cursor ->
    mapper(
      cursor.getLong(0)!!,
      cursor.getLong(1)!!,
      cursor.getLong(2)!!,
      cursor.getLong(3)!!,
      cursor.getDouble(4),
      cursor.getLong(5)!!,
      cursor.getString(6)!!,
      cursor.getString(7)
    )
  }

  public fun getLatestReading(): Query<BatteryReading> = getLatestReading { id, timestamp,
      voltageMillivolts, amperageMicroamps, temperatureCelsius, batteryPercentage, batteryState,
      chargingType ->
    BatteryReading(
      id,
      timestamp,
      voltageMillivolts,
      amperageMicroamps,
      temperatureCelsius,
      batteryPercentage,
      batteryState,
      chargingType
    )
  }

  public fun <T : Any> getReadingsInRange(
    startTime: Long,
    endTime: Long,
    limit: Long,
    mapper: (
      id: Long,
      timestamp: Long,
      voltageMillivolts: Long,
      amperageMicroamps: Long,
      temperatureCelsius: Double?,
      batteryPercentage: Long,
      batteryState: String,
      chargingType: String?,
    ) -> T,
  ): Query<T> = GetReadingsInRangeQuery(startTime, endTime, limit) { cursor ->
    mapper(
      cursor.getLong(0)!!,
      cursor.getLong(1)!!,
      cursor.getLong(2)!!,
      cursor.getLong(3)!!,
      cursor.getDouble(4),
      cursor.getLong(5)!!,
      cursor.getString(6)!!,
      cursor.getString(7)
    )
  }

  public fun getReadingsInRange(
    startTime: Long,
    endTime: Long,
    limit: Long,
  ): Query<BatteryReading> = getReadingsInRange(startTime, endTime, limit) { id, timestamp,
      voltageMillivolts, amperageMicroamps, temperatureCelsius, batteryPercentage, batteryState,
      chargingType ->
    BatteryReading(
      id,
      timestamp,
      voltageMillivolts,
      amperageMicroamps,
      temperatureCelsius,
      batteryPercentage,
      batteryState,
      chargingType
    )
  }

  public fun <T : Any> getAllReadingsInRange(
    startTime: Long,
    endTime: Long,
    mapper: (
      id: Long,
      timestamp: Long,
      voltageMillivolts: Long,
      amperageMicroamps: Long,
      temperatureCelsius: Double?,
      batteryPercentage: Long,
      batteryState: String,
      chargingType: String?,
    ) -> T,
  ): Query<T> = GetAllReadingsInRangeQuery(startTime, endTime) { cursor ->
    mapper(
      cursor.getLong(0)!!,
      cursor.getLong(1)!!,
      cursor.getLong(2)!!,
      cursor.getLong(3)!!,
      cursor.getDouble(4),
      cursor.getLong(5)!!,
      cursor.getString(6)!!,
      cursor.getString(7)
    )
  }

  public fun getAllReadingsInRange(startTime: Long, endTime: Long): Query<BatteryReading> =
      getAllReadingsInRange(startTime, endTime) { id, timestamp, voltageMillivolts,
      amperageMicroamps, temperatureCelsius, batteryPercentage, batteryState, chargingType ->
    BatteryReading(
      id,
      timestamp,
      voltageMillivolts,
      amperageMicroamps,
      temperatureCelsius,
      batteryPercentage,
      batteryState,
      chargingType
    )
  }

  public fun getReadingCount(): Query<Long> = Query(1_890_306_876, arrayOf("BatteryReading"),
      driver, "BatteryReading.sq", "getReadingCount", "SELECT COUNT(*) FROM BatteryReading") {
      cursor ->
    cursor.getLong(0)!!
  }

  public fun getReadingCountInRange(startTime: Long, endTime: Long): Query<Long> =
      GetReadingCountInRangeQuery(startTime, endTime) { cursor ->
    cursor.getLong(0)!!
  }

  public fun <T : Any> getStatistics(
    startTime: Long,
    endTime: Long,
    mapper: (
      totalCount: Long,
      avgVoltage: Double?,
      avgAmperage: Double?,
      avgTemperature: Double?,
      avgBatteryPercentage: Double?,
      maxVoltage: Long?,
      maxAmperage: Long?,
      minVoltage: Long?,
      minAmperage: Long?,
    ) -> T,
  ): Query<T> = GetStatisticsQuery(startTime, endTime) { cursor ->
    mapper(
      cursor.getLong(0)!!,
      cursor.getDouble(1),
      cursor.getDouble(2),
      cursor.getDouble(3),
      cursor.getDouble(4),
      cursor.getLong(5),
      cursor.getLong(6),
      cursor.getLong(7),
      cursor.getLong(8)
    )
  }

  public fun getStatistics(startTime: Long, endTime: Long): Query<GetStatistics> =
      getStatistics(startTime, endTime) { totalCount, avgVoltage, avgAmperage, avgTemperature,
      avgBatteryPercentage, maxVoltage, maxAmperage, minVoltage, minAmperage ->
    GetStatistics(
      totalCount,
      avgVoltage,
      avgAmperage,
      avgTemperature,
      avgBatteryPercentage,
      maxVoltage,
      maxAmperage,
      minVoltage,
      minAmperage
    )
  }

  public fun getChargeCount(startTime: Long, endTime: Long): Query<Long> =
      GetChargeCountQuery(startTime, endTime) { cursor ->
    cursor.getLong(0)!!
  }

  public fun <T : Any> getReadingsByInterval(
    startTime: Long,
    endTime: Long,
    intervalSeconds: Long,
    mapper: (
      timestamp: Long,
      voltageMillivolts: Long,
      amperageMicroamps: Long,
      temperatureCelsius: Double?,
      batteryPercentage: Long,
      batteryState: String,
    ) -> T,
  ): Query<T> = GetReadingsByIntervalQuery(startTime, endTime, intervalSeconds) { cursor ->
    mapper(
      cursor.getLong(0)!!,
      cursor.getLong(1)!!,
      cursor.getLong(2)!!,
      cursor.getDouble(3),
      cursor.getLong(4)!!,
      cursor.getString(5)!!
    )
  }

  public fun getReadingsByInterval(
    startTime: Long,
    endTime: Long,
    intervalSeconds: Long,
  ): Query<GetReadingsByInterval> = getReadingsByInterval(startTime, endTime, intervalSeconds) {
      timestamp, voltageMillivolts, amperageMicroamps, temperatureCelsius, batteryPercentage,
      batteryState ->
    GetReadingsByInterval(
      timestamp,
      voltageMillivolts,
      amperageMicroamps,
      temperatureCelsius,
      batteryPercentage,
      batteryState
    )
  }

  public fun <T : Any> getAveragePowerByInterval(
    intervalSeconds: Long,
    startTime: Long,
    endTime: Long,
    mapper: (
      intervalStart: Long,
      avgPowerMilliwatts: Double?,
      sampleCount: Long,
    ) -> T,
  ): Query<T> = GetAveragePowerByIntervalQuery(intervalSeconds, startTime, endTime) { cursor ->
    mapper(
      cursor.getLong(0)!!,
      cursor.getDouble(1),
      cursor.getLong(2)!!
    )
  }

  public fun getAveragePowerByInterval(
    intervalSeconds: Long,
    startTime: Long,
    endTime: Long,
  ): Query<GetAveragePowerByInterval> = getAveragePowerByInterval(intervalSeconds, startTime,
      endTime) { intervalStart, avgPowerMilliwatts, sampleCount ->
    GetAveragePowerByInterval(
      intervalStart,
      avgPowerMilliwatts,
      sampleCount
    )
  }

  public fun <T : Any> getStateDurations(
    sampleInterval: Long,
    startTime: Long,
    endTime: Long,
    mapper: (
      batteryState: String,
      durationSeconds: Long,
      readingCount: Long,
    ) -> T,
  ): Query<T> = GetStateDurationsQuery(sampleInterval, startTime, endTime) { cursor ->
    mapper(
      cursor.getString(0)!!,
      cursor.getLong(1)!!,
      cursor.getLong(2)!!
    )
  }

  public fun getStateDurations(
    sampleInterval: Long,
    startTime: Long,
    endTime: Long,
  ): Query<GetStateDurations> = getStateDurations(sampleInterval, startTime, endTime) {
      batteryState, durationSeconds, readingCount ->
    GetStateDurations(
      batteryState,
      durationSeconds,
      readingCount
    )
  }

  public fun insertReading(
    timestamp: Long,
    voltageMillivolts: Long,
    amperageMicroamps: Long,
    temperatureCelsius: Double?,
    batteryPercentage: Long,
    batteryState: String,
    chargingType: String?,
  ) {
    driver.execute(-1_936_679_626, """
        |INSERT INTO BatteryReading (
        |    timestamp,
        |    voltageMillivolts,
        |    amperageMicroamps,
        |    temperatureCelsius,
        |    batteryPercentage,
        |    batteryState,
        |    chargingType
        |) VALUES (?, ?, ?, ?, ?, ?, ?)
        """.trimMargin(), 7) {
          bindLong(0, timestamp)
          bindLong(1, voltageMillivolts)
          bindLong(2, amperageMicroamps)
          bindDouble(3, temperatureCelsius)
          bindLong(4, batteryPercentage)
          bindString(5, batteryState)
          bindString(6, chargingType)
        }
    notifyQueries(-1_936_679_626) { emit ->
      emit("BatteryReading")
    }
  }

  public fun deleteReadingsOlderThan(before: Long) {
    driver.execute(19_801_766, """
        |DELETE FROM BatteryReading
        |WHERE timestamp < ?
        """.trimMargin(), 1) {
          bindLong(0, before)
        }
    notifyQueries(19_801_766) { emit ->
      emit("BatteryReading")
    }
  }

  public fun deleteAllReadings() {
    driver.execute(-783_586_400, """DELETE FROM BatteryReading""", 0)
    notifyQueries(-783_586_400) { emit ->
      emit("BatteryReading")
    }
  }

  private inner class GetReadingsInRangeQuery<out T : Any>(
    public val startTime: Long,
    public val endTime: Long,
    public val limit: Long,
    mapper: (SqlCursor) -> T,
  ) : Query<T>(mapper) {
    override fun addListener(listener: Query.Listener) {
      driver.addListener("BatteryReading", listener = listener)
    }

    override fun removeListener(listener: Query.Listener) {
      driver.removeListener("BatteryReading", listener = listener)
    }

    override fun <R> execute(mapper: (SqlCursor) -> QueryResult<R>): QueryResult<R> =
        driver.executeQuery(979_354_040, """
    |SELECT BatteryReading.id, BatteryReading.timestamp, BatteryReading.voltageMillivolts, BatteryReading.amperageMicroamps, BatteryReading.temperatureCelsius, BatteryReading.batteryPercentage, BatteryReading.batteryState, BatteryReading.chargingType FROM BatteryReading
    |WHERE timestamp BETWEEN ? AND ?
    |ORDER BY timestamp DESC
    |LIMIT ?
    """.trimMargin(), mapper, 3) {
      bindLong(0, startTime)
      bindLong(1, endTime)
      bindLong(2, limit)
    }

    override fun toString(): String = "BatteryReading.sq:getReadingsInRange"
  }

  private inner class GetAllReadingsInRangeQuery<out T : Any>(
    public val startTime: Long,
    public val endTime: Long,
    mapper: (SqlCursor) -> T,
  ) : Query<T>(mapper) {
    override fun addListener(listener: Query.Listener) {
      driver.addListener("BatteryReading", listener = listener)
    }

    override fun removeListener(listener: Query.Listener) {
      driver.removeListener("BatteryReading", listener = listener)
    }

    override fun <R> execute(mapper: (SqlCursor) -> QueryResult<R>): QueryResult<R> =
        driver.executeQuery(-1_241_419_671, """
    |SELECT BatteryReading.id, BatteryReading.timestamp, BatteryReading.voltageMillivolts, BatteryReading.amperageMicroamps, BatteryReading.temperatureCelsius, BatteryReading.batteryPercentage, BatteryReading.batteryState, BatteryReading.chargingType FROM BatteryReading
    |WHERE timestamp BETWEEN ? AND ?
    |ORDER BY timestamp ASC
    """.trimMargin(), mapper, 2) {
      bindLong(0, startTime)
      bindLong(1, endTime)
    }

    override fun toString(): String = "BatteryReading.sq:getAllReadingsInRange"
  }

  private inner class GetReadingCountInRangeQuery<out T : Any>(
    public val startTime: Long,
    public val endTime: Long,
    mapper: (SqlCursor) -> T,
  ) : Query<T>(mapper) {
    override fun addListener(listener: Query.Listener) {
      driver.addListener("BatteryReading", listener = listener)
    }

    override fun removeListener(listener: Query.Listener) {
      driver.removeListener("BatteryReading", listener = listener)
    }

    override fun <R> execute(mapper: (SqlCursor) -> QueryResult<R>): QueryResult<R> =
        driver.executeQuery(1_180_539_964, """
    |SELECT COUNT(*) FROM BatteryReading
    |WHERE timestamp BETWEEN ? AND ?
    """.trimMargin(), mapper, 2) {
      bindLong(0, startTime)
      bindLong(1, endTime)
    }

    override fun toString(): String = "BatteryReading.sq:getReadingCountInRange"
  }

  private inner class GetStatisticsQuery<out T : Any>(
    public val startTime: Long,
    public val endTime: Long,
    mapper: (SqlCursor) -> T,
  ) : Query<T>(mapper) {
    override fun addListener(listener: Query.Listener) {
      driver.addListener("BatteryReading", listener = listener)
    }

    override fun removeListener(listener: Query.Listener) {
      driver.removeListener("BatteryReading", listener = listener)
    }

    override fun <R> execute(mapper: (SqlCursor) -> QueryResult<R>): QueryResult<R> =
        driver.executeQuery(1_397_044_412, """
    |SELECT
    |    COUNT(*) AS totalCount,
    |    AVG(voltageMillivolts) AS avgVoltage,
    |    AVG(amperageMicroamps) AS avgAmperage,
    |    AVG(temperatureCelsius) AS avgTemperature,
    |    AVG(batteryPercentage) AS avgBatteryPercentage,
    |    MAX(voltageMillivolts) AS maxVoltage,
    |    MAX(amperageMicroamps) AS maxAmperage,
    |    MIN(voltageMillivolts) AS minVoltage,
    |    MIN(amperageMicroamps) AS minAmperage
    |FROM BatteryReading
    |WHERE timestamp BETWEEN ? AND ?
    """.trimMargin(), mapper, 2) {
      bindLong(0, startTime)
      bindLong(1, endTime)
    }

    override fun toString(): String = "BatteryReading.sq:getStatistics"
  }

  private inner class GetChargeCountQuery<out T : Any>(
    public val startTime: Long,
    public val endTime: Long,
    mapper: (SqlCursor) -> T,
  ) : Query<T>(mapper) {
    override fun addListener(listener: Query.Listener) {
      driver.addListener("BatteryReading", listener = listener)
    }

    override fun removeListener(listener: Query.Listener) {
      driver.removeListener("BatteryReading", listener = listener)
    }

    override fun <R> execute(mapper: (SqlCursor) -> QueryResult<R>): QueryResult<R> =
        driver.executeQuery(-8_208_830, """
    |SELECT COUNT(*)
    |FROM BatteryReading
    |WHERE timestamp BETWEEN ? AND ?
    |  AND batteryState LIKE 'Charging%'
    """.trimMargin(), mapper, 2) {
      bindLong(0, startTime)
      bindLong(1, endTime)
    }

    override fun toString(): String = "BatteryReading.sq:getChargeCount"
  }

  private inner class GetReadingsByIntervalQuery<out T : Any>(
    public val startTime: Long,
    public val endTime: Long,
    public val intervalSeconds: Long,
    mapper: (SqlCursor) -> T,
  ) : Query<T>(mapper) {
    override fun addListener(listener: Query.Listener) {
      driver.addListener("BatteryReading", listener = listener)
    }

    override fun removeListener(listener: Query.Listener) {
      driver.removeListener("BatteryReading", listener = listener)
    }

    override fun <R> execute(mapper: (SqlCursor) -> QueryResult<R>): QueryResult<R> =
        driver.executeQuery(-785_517_668, """
    |SELECT
    |    timestamp,
    |    voltageMillivolts,
    |    amperageMicroamps,
    |    temperatureCelsius,
    |    batteryPercentage,
    |    batteryState
    |FROM BatteryReading
    |WHERE timestamp BETWEEN ? AND ?
    |  AND id IN (
    |    SELECT MIN(id)
    |    FROM BatteryReading
    |    WHERE timestamp BETWEEN ? AND ?
    |    GROUP BY (timestamp / ?)
    |  )
    |ORDER BY timestamp ASC
    """.trimMargin(), mapper, 5) {
      bindLong(0, startTime)
      bindLong(1, endTime)
      bindLong(2, startTime)
      bindLong(3, endTime)
      bindLong(4, intervalSeconds)
    }

    override fun toString(): String = "BatteryReading.sq:getReadingsByInterval"
  }

  private inner class GetAveragePowerByIntervalQuery<out T : Any>(
    public val intervalSeconds: Long,
    public val startTime: Long,
    public val endTime: Long,
    mapper: (SqlCursor) -> T,
  ) : Query<T>(mapper) {
    override fun addListener(listener: Query.Listener) {
      driver.addListener("BatteryReading", listener = listener)
    }

    override fun removeListener(listener: Query.Listener) {
      driver.removeListener("BatteryReading", listener = listener)
    }

    override fun <R> execute(mapper: (SqlCursor) -> QueryResult<R>): QueryResult<R> =
        driver.executeQuery(-229_649_571, """
    |SELECT
    |    (timestamp / ?) * ? AS intervalStart,
    |    AVG((voltageMillivolts / 1000.0) * (amperageMicroamps / 1000000.0) * 1000.0) AS avgPowerMilliwatts,
    |    COUNT(*) AS sampleCount
    |FROM BatteryReading
    |WHERE timestamp BETWEEN ? AND ?
    |GROUP BY (timestamp / ?)
    |ORDER BY intervalStart ASC
    """.trimMargin(), mapper, 5) {
      bindLong(0, intervalSeconds)
      bindLong(1, intervalSeconds)
      bindLong(2, startTime)
      bindLong(3, endTime)
      bindLong(4, intervalSeconds)
    }

    override fun toString(): String = "BatteryReading.sq:getAveragePowerByInterval"
  }

  private inner class GetStateDurationsQuery<out T : Any>(
    public val sampleInterval: Long,
    public val startTime: Long,
    public val endTime: Long,
    mapper: (SqlCursor) -> T,
  ) : Query<T>(mapper) {
    override fun addListener(listener: Query.Listener) {
      driver.addListener("BatteryReading", listener = listener)
    }

    override fun removeListener(listener: Query.Listener) {
      driver.removeListener("BatteryReading", listener = listener)
    }

    override fun <R> execute(mapper: (SqlCursor) -> QueryResult<R>): QueryResult<R> =
        driver.executeQuery(1_191_011_047, """
    |SELECT
    |    batteryState,
    |    COUNT(*) * ? AS durationSeconds,
    |    COUNT(*) AS readingCount
    |FROM BatteryReading
    |WHERE timestamp BETWEEN ? AND ?
    |GROUP BY batteryState
    """.trimMargin(), mapper, 3) {
      bindLong(0, sampleInterval)
      bindLong(1, startTime)
      bindLong(2, endTime)
    }

    override fun toString(): String = "BatteryReading.sq:getStateDurations"
  }
}
