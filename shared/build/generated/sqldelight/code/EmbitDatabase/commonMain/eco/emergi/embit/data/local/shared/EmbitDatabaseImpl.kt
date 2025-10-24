package eco.emergi.embit.`data`.local.shared

import app.cash.sqldelight.TransacterImpl
import app.cash.sqldelight.db.AfterVersion
import app.cash.sqldelight.db.QueryResult
import app.cash.sqldelight.db.SqlDriver
import app.cash.sqldelight.db.SqlSchema
import eco.emergi.embit.`data`.local.BatteryReadingQueries
import eco.emergi.embit.`data`.local.EmbitDatabase
import kotlin.Long
import kotlin.Unit
import kotlin.reflect.KClass

internal val KClass<EmbitDatabase>.schema: SqlSchema<QueryResult.Value<Unit>>
  get() = EmbitDatabaseImpl.Schema

internal fun KClass<EmbitDatabase>.newInstance(driver: SqlDriver): EmbitDatabase =
    EmbitDatabaseImpl(driver)

private class EmbitDatabaseImpl(
  driver: SqlDriver,
) : TransacterImpl(driver), EmbitDatabase {
  override val batteryReadingQueries: BatteryReadingQueries = BatteryReadingQueries(driver)

  public object Schema : SqlSchema<QueryResult.Value<Unit>> {
    override val version: Long
      get() = 1

    override fun create(driver: SqlDriver): QueryResult.Value<Unit> {
      driver.execute(null, """
          |CREATE TABLE IF NOT EXISTS BatteryReading (
          |    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
          |    timestamp INTEGER NOT NULL,
          |    voltageMillivolts INTEGER NOT NULL,
          |    amperageMicroamps INTEGER NOT NULL,
          |    temperatureCelsius REAL,
          |    batteryPercentage INTEGER NOT NULL,
          |    batteryState TEXT NOT NULL,
          |    chargingType TEXT
          |)
          """.trimMargin(), 0)
      driver.execute(null,
          "CREATE INDEX IF NOT EXISTS idx_battery_reading_timestamp ON BatteryReading(timestamp)",
          0)
      driver.execute(null,
          "CREATE INDEX IF NOT EXISTS idx_battery_reading_state ON BatteryReading(batteryState)", 0)
      return QueryResult.Unit
    }

    override fun migrate(
      driver: SqlDriver,
      oldVersion: Long,
      newVersion: Long,
      vararg callbacks: AfterVersion,
    ): QueryResult.Value<Unit> = QueryResult.Unit
  }
}
