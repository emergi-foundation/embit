package eco.emergi.embit.`data`.local

import app.cash.sqldelight.Transacter
import app.cash.sqldelight.db.QueryResult
import app.cash.sqldelight.db.SqlDriver
import app.cash.sqldelight.db.SqlSchema
import eco.emergi.embit.`data`.local.shared.newInstance
import eco.emergi.embit.`data`.local.shared.schema
import kotlin.Unit

public interface EmbitDatabase : Transacter {
  public val batteryReadingQueries: BatteryReadingQueries

  public companion object {
    public val Schema: SqlSchema<QueryResult.Value<Unit>>
      get() = EmbitDatabase::class.schema

    public operator fun invoke(driver: SqlDriver): EmbitDatabase =
        EmbitDatabase::class.newInstance(driver)
  }
}
