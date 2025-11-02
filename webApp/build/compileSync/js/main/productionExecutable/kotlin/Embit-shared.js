(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './sqldelight-runtime.js', './Kotlin-DateTime-library-kotlinx-datetime.js', './kotlinx-coroutines-core.js', './kotlinx-serialization-kotlinx-serialization-json.js', './projects-core-koin-core.js', './kotlinx-serialization-kotlinx-serialization-core.js', './sqldelight-drivers-web-worker-driver.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./sqldelight-runtime.js'), require('./Kotlin-DateTime-library-kotlinx-datetime.js'), require('./kotlinx-coroutines-core.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'), require('./projects-core-koin-core.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./sqldelight-drivers-web-worker-driver.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'Embit-shared'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'Embit-shared'.");
    }
    if (typeof globalThis['sqldelight-runtime'] === 'undefined') {
      throw new Error("Error loading module 'Embit-shared'. Its dependency 'sqldelight-runtime' was not found. Please, check whether 'sqldelight-runtime' is loaded prior to 'Embit-shared'.");
    }
    if (typeof globalThis['Kotlin-DateTime-library-kotlinx-datetime'] === 'undefined') {
      throw new Error("Error loading module 'Embit-shared'. Its dependency 'Kotlin-DateTime-library-kotlinx-datetime' was not found. Please, check whether 'Kotlin-DateTime-library-kotlinx-datetime' is loaded prior to 'Embit-shared'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'Embit-shared'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'Embit-shared'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'Embit-shared'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'Embit-shared'.");
    }
    if (typeof globalThis['projects-core-koin-core'] === 'undefined') {
      throw new Error("Error loading module 'Embit-shared'. Its dependency 'projects-core-koin-core' was not found. Please, check whether 'projects-core-koin-core' is loaded prior to 'Embit-shared'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'Embit-shared'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'Embit-shared'.");
    }
    if (typeof globalThis['sqldelight-drivers-web-worker-driver'] === 'undefined') {
      throw new Error("Error loading module 'Embit-shared'. Its dependency 'sqldelight-drivers-web-worker-driver' was not found. Please, check whether 'sqldelight-drivers-web-worker-driver' is loaded prior to 'Embit-shared'.");
    }
    globalThis['Embit-shared'] = factory(typeof globalThis['Embit-shared'] === 'undefined' ? {} : globalThis['Embit-shared'], globalThis['kotlin-kotlin-stdlib'], globalThis['sqldelight-runtime'], globalThis['Kotlin-DateTime-library-kotlinx-datetime'], globalThis['kotlinx-coroutines-core'], globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['projects-core-koin-core'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['sqldelight-drivers-web-worker-driver']);
  }
}(function (_, kotlin_kotlin, kotlin_app_cash_sqldelight_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_datetime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_io_insert_koin_koin_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_app_cash_sqldelight_web_worker_driver) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.m7;
  var getNumberHashCode = kotlin_kotlin.$_$.r6;
  var getStringHashCode = kotlin_kotlin.$_$.t6;
  var THROW_CCE = kotlin_kotlin.$_$.y8;
  var equals = kotlin_kotlin.$_$.m6;
  var initMetadataForClass = kotlin_kotlin.$_$.v6;
  var Unit_instance = kotlin_kotlin.$_$.y2;
  var Query = kotlin_app_cash_sqldelight_runtime.$_$.e;
  var VOID = kotlin_kotlin.$_$.d;
  var ensureNotNull = kotlin_kotlin.$_$.f9;
  var TransacterImpl = kotlin_app_cash_sqldelight_runtime.$_$.f;
  var Query_0 = kotlin_app_cash_sqldelight_runtime.$_$.d;
  var getKClass = kotlin_kotlin.$_$.b;
  var initMetadataForCompanion = kotlin_kotlin.$_$.w6;
  var initMetadataForInterface = kotlin_kotlin.$_$.y6;
  var toString = kotlin_kotlin.$_$.n9;
  var Companion_getInstance = kotlin_app_cash_sqldelight_runtime.$_$.j;
  var Value = kotlin_app_cash_sqldelight_runtime.$_$.b;
  var initMetadataForObject = kotlin_kotlin.$_$.a7;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.i9;
  var Companion_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.b;
  var startsWith = kotlin_kotlin.$_$.i8;
  var CoroutineImpl = kotlin_kotlin.$_$.a6;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.l5;
  var Result = kotlin_kotlin.$_$.w8;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var isInterface = kotlin_kotlin.$_$.e7;
  var toLong = kotlin_kotlin.$_$.n7;
  var Long = kotlin_kotlin.$_$.u8;
  var Companion_instance = kotlin_kotlin.$_$.x2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.l2;
  var createFailure = kotlin_kotlin.$_$.e9;
  var Exception = kotlin_kotlin.$_$.s8;
  var initMetadataForLambda = kotlin_kotlin.$_$.z6;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.s3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.o;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.k1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.p;
  var _Duration___get_inWholeSeconds__impl__hpy7b3 = kotlin_kotlin.$_$.e2;
  var numberToInt = kotlin_kotlin.$_$.j7;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var withContext = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var Companion_getInstance_1 = kotlin_io_insert_koin_koin_core.$_$.c;
  var Kind_Singleton_getInstance = kotlin_io_insert_koin_koin_core.$_$.b;
  var emptyList = kotlin_kotlin.$_$.a4;
  var BeanDefinition = kotlin_io_insert_koin_koin_core.$_$.i;
  var SingleInstanceFactory = kotlin_io_insert_koin_koin_core.$_$.l;
  var KoinDefinition = kotlin_io_insert_koin_koin_core.$_$.j;
  var Kind_Factory_getInstance = kotlin_io_insert_koin_koin_core.$_$.a;
  var FactoryInstanceFactory = kotlin_io_insert_koin_koin_core.$_$.k;
  var module_0 = kotlin_io_insert_koin_koin_core.$_$.m;
  var toString_0 = kotlin_kotlin.$_$.o7;
  var hashCode = kotlin_kotlin.$_$.u6;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var ObjectSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var SealedClassSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.k;
  var lazy = kotlin_kotlin.$_$.g9;
  var createSimpleEnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var Enum = kotlin_kotlin.$_$.q8;
  var coerceIn = kotlin_kotlin.$_$.u7;
  var coerceIn_0 = kotlin_kotlin.$_$.t7;
  var System_instance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.a;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.u2;
  var DurationUnit_DAYS_getInstance = kotlin_kotlin.$_$.e;
  var toDuration = kotlin_kotlin.$_$.m8;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.o2;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.n2;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.x6;
  var DurationUnit_HOURS_getInstance = kotlin_kotlin.$_$.f;
  var Pair = kotlin_kotlin.$_$.v8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.m2;
  var println = kotlin_kotlin.$_$.c6;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var onEach = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var catch_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var WebWorkerDriver = kotlin_app_cash_sqldelight_web_worker_driver.$_$.a;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var flow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(BatteryReading, 'BatteryReading');
  initMetadataForClass(GetReadingsInRangeQuery, 'GetReadingsInRangeQuery', VOID, Query);
  initMetadataForClass(GetAllReadingsInRangeQuery, 'GetAllReadingsInRangeQuery', VOID, Query);
  initMetadataForClass(GetStatisticsQuery, 'GetStatisticsQuery', VOID, Query);
  initMetadataForClass(GetChargeCountQuery, 'GetChargeCountQuery', VOID, Query);
  initMetadataForClass(GetStateDurationsQuery, 'GetStateDurationsQuery', VOID, Query);
  initMetadataForClass(BatteryReadingQueries, 'BatteryReadingQueries', VOID, TransacterImpl);
  initMetadataForCompanion(Companion);
  initMetadataForInterface(EmbitDatabase, 'EmbitDatabase');
  initMetadataForClass(GetStateDurations, 'GetStateDurations');
  initMetadataForClass(GetStatistics, 'GetStatistics');
  initMetadataForObject(Schema, 'Schema');
  initMetadataForClass(EmbitDatabaseImpl, 'EmbitDatabaseImpl', VOID, TransacterImpl, [TransacterImpl, EmbitDatabase]);
  initMetadataForLambda(BatteryRepositoryImpl$insertReading$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(BatteryRepositoryImpl$getReadingsInRange$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(BatteryRepositoryImpl$calculateStatistics$slambda, CoroutineImpl, VOID, [1]);
  function getReadingsInRange$default(start, end, limit, $completion, $super) {
    limit = limit === VOID ? null : limit;
    return $super === VOID ? this.j1h(start, end, limit, $completion) : $super.j1h.call(this, start, end, limit, $completion);
  }
  initMetadataForInterface(IBatteryRepository, 'IBatteryRepository', VOID, VOID, VOID, [1, 0, 3, 2]);
  initMetadataForClass(BatteryRepositoryImpl, 'BatteryRepositoryImpl', VOID, VOID, [IBatteryRepository], [1, 0, 3, 2]);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(BatteryReading_0, 'BatteryReading');
  initMetadataForCompanion(Companion_1);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(BatteryState, 'BatteryState', VOID, VOID, VOID, VOID, VOID, {0: Companion_getInstance_6});
  initMetadataForClass(Charging, 'Charging', VOID, BatteryState, VOID, VOID, VOID, {0: $serializer_getInstance});
  initMetadataForObject(Discharging, 'Discharging', VOID, BatteryState, VOID, VOID, VOID, {0: Discharging_getInstance});
  initMetadataForObject(Full, 'Full', VOID, BatteryState, VOID, VOID, VOID, {0: Full_getInstance});
  initMetadataForObject(NotCharging, 'NotCharging', VOID, BatteryState, VOID, VOID, VOID, {0: NotCharging_getInstance});
  initMetadataForObject(Unknown, 'Unknown', VOID, BatteryState, VOID, VOID, VOID, {0: Unknown_getInstance});
  initMetadataForCompanion(Companion_2);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(ChargingType, 'ChargingType', VOID, Enum, VOID, VOID, VOID, {0: Companion_getInstance_7});
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(BatteryStatistics, 'BatteryStatistics');
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(TimePeriod, 'TimePeriod', VOID, Enum, VOID, VOID, VOID, {0: Companion_getInstance_9});
  initMetadataForInterface(IBatteryMonitorService, 'IBatteryMonitorService', VOID, VOID, VOID, [0]);
  initMetadataForCoroutine($invokeCOROUTINE$2, CoroutineImpl);
  initMetadataForClass(AnalyzeBatteryHealthUseCase, 'AnalyzeBatteryHealthUseCase', VOID, VOID, VOID, [0]);
  initMetadataForClass(BatteryHealthAnalysis, 'BatteryHealthAnalysis');
  initMetadataForClass(BatteryPredictions, 'BatteryPredictions');
  initMetadataForClass(CalculateBatteryStatisticsUseCase, 'CalculateBatteryStatisticsUseCase', VOID, VOID, VOID, [3, 1]);
  initMetadataForClass(GenerateChargingRecommendationsUseCase, 'GenerateChargingRecommendationsUseCase', VOID, VOID, VOID, [1]);
  initMetadataForClass(GetBatteryHistoryUseCase, 'GetBatteryHistoryUseCase', VOID, VOID, VOID, [3]);
  initMetadataForClass(ManageBatteryDataUseCase, 'ManageBatteryDataUseCase', VOID, VOID, VOID, [1, 0]);
  initMetadataForLambda(MonitorBatteryUseCase$invoke$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(MonitorBatteryUseCase$invoke$slambda_1, CoroutineImpl, VOID, [2]);
  initMetadataForClass(MonitorBatteryUseCase, 'MonitorBatteryUseCase', VOID, VOID, VOID, [0]);
  initMetadataForClass(PredictBatteryLifeUseCase, 'PredictBatteryLifeUseCase', VOID, VOID, VOID, [1]);
  initMetadataForClass(DatabaseDriverFactory, 'DatabaseDriverFactory', DatabaseDriverFactory);
  initMetadataForClass(BatteryMonitorServiceFactory, 'BatteryMonitorServiceFactory', BatteryMonitorServiceFactory);
  initMetadataForLambda(JsBatteryMonitorService$startMonitoring$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(JsBatteryMonitorService, 'JsBatteryMonitorService', JsBatteryMonitorService, VOID, [IBatteryMonitorService], [0]);
  //endregion
  function BatteryReading(id, timestamp, voltageMillivolts, amperageMicroamps, temperatureCelsius, batteryPercentage, batteryState, chargingType) {
    this.z1c_1 = id;
    this.a1d_1 = timestamp;
    this.b1d_1 = voltageMillivolts;
    this.c1d_1 = amperageMicroamps;
    this.d1d_1 = temperatureCelsius;
    this.e1d_1 = batteryPercentage;
    this.f1d_1 = batteryState;
    this.g1d_1 = chargingType;
  }
  protoOf(BatteryReading).toString = function () {
    return 'BatteryReading(id=' + this.z1c_1.toString() + ', timestamp=' + this.a1d_1.toString() + ', voltageMillivolts=' + this.b1d_1.toString() + ', amperageMicroamps=' + this.c1d_1.toString() + ', temperatureCelsius=' + this.d1d_1 + ', batteryPercentage=' + this.e1d_1.toString() + ', batteryState=' + this.f1d_1 + ', chargingType=' + this.g1d_1 + ')';
  };
  protoOf(BatteryReading).hashCode = function () {
    var result = this.z1c_1.hashCode();
    result = imul(result, 31) + this.a1d_1.hashCode() | 0;
    result = imul(result, 31) + this.b1d_1.hashCode() | 0;
    result = imul(result, 31) + this.c1d_1.hashCode() | 0;
    result = imul(result, 31) + (this.d1d_1 == null ? 0 : getNumberHashCode(this.d1d_1)) | 0;
    result = imul(result, 31) + this.e1d_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.f1d_1) | 0;
    result = imul(result, 31) + (this.g1d_1 == null ? 0 : getStringHashCode(this.g1d_1)) | 0;
    return result;
  };
  protoOf(BatteryReading).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BatteryReading))
      return false;
    var tmp0_other_with_cast = other instanceof BatteryReading ? other : THROW_CCE();
    if (!this.z1c_1.equals(tmp0_other_with_cast.z1c_1))
      return false;
    if (!this.a1d_1.equals(tmp0_other_with_cast.a1d_1))
      return false;
    if (!this.b1d_1.equals(tmp0_other_with_cast.b1d_1))
      return false;
    if (!this.c1d_1.equals(tmp0_other_with_cast.c1d_1))
      return false;
    if (!equals(this.d1d_1, tmp0_other_with_cast.d1d_1))
      return false;
    if (!this.e1d_1.equals(tmp0_other_with_cast.e1d_1))
      return false;
    if (!(this.f1d_1 === tmp0_other_with_cast.f1d_1))
      return false;
    if (!(this.g1d_1 == tmp0_other_with_cast.g1d_1))
      return false;
    return true;
  };
  function BatteryReadingQueries$GetReadingsInRangeQuery$execute$lambda(this$0) {
    return function ($this$executeQuery) {
      $this$executeQuery.t11(0, this$0.i1d_1);
      $this$executeQuery.t11(1, this$0.j1d_1);
      $this$executeQuery.t11(2, this$0.k1d_1);
      return Unit_instance;
    };
  }
  function BatteryReadingQueries$GetAllReadingsInRangeQuery$execute$lambda(this$0) {
    return function ($this$executeQuery) {
      $this$executeQuery.t11(0, this$0.n1d_1);
      $this$executeQuery.t11(1, this$0.o1d_1);
      return Unit_instance;
    };
  }
  function BatteryReadingQueries$GetStatisticsQuery$execute$lambda(this$0) {
    return function ($this$executeQuery) {
      $this$executeQuery.t11(0, this$0.r1d_1);
      $this$executeQuery.t11(1, this$0.s1d_1);
      return Unit_instance;
    };
  }
  function BatteryReadingQueries$GetChargeCountQuery$execute$lambda(this$0) {
    return function ($this$executeQuery) {
      $this$executeQuery.t11(0, this$0.v1d_1);
      $this$executeQuery.t11(1, this$0.w1d_1);
      return Unit_instance;
    };
  }
  function BatteryReadingQueries$GetStateDurationsQuery$execute$lambda(this$0) {
    return function ($this$executeQuery) {
      $this$executeQuery.t11(0, this$0.z1d_1);
      $this$executeQuery.t11(1, this$0.a1e_1);
      $this$executeQuery.t11(2, this$0.b1e_1);
      return Unit_instance;
    };
  }
  function GetReadingsInRangeQuery($outer, startTime, endTime, limit, mapper) {
    this.l1d_1 = $outer;
    Query.call(this, mapper);
    this.i1d_1 = startTime;
    this.j1d_1 = endTime;
    this.k1d_1 = limit;
  }
  protoOf(GetReadingsInRangeQuery).yf = function (mapper) {
    return this.l1d_1.kg_1.jg(979354040, 'SELECT BatteryReading.id, BatteryReading.timestamp, BatteryReading.voltageMillivolts, BatteryReading.amperageMicroamps, BatteryReading.temperatureCelsius, BatteryReading.batteryPercentage, BatteryReading.batteryState, BatteryReading.chargingType FROM BatteryReading\nWHERE timestamp BETWEEN ? AND ?\nORDER BY timestamp DESC\nLIMIT ?', mapper, 3, BatteryReadingQueries$GetReadingsInRangeQuery$execute$lambda(this));
  };
  protoOf(GetReadingsInRangeQuery).toString = function () {
    return 'BatteryReading.sq:getReadingsInRange';
  };
  function GetAllReadingsInRangeQuery($outer, startTime, endTime, mapper) {
    this.p1d_1 = $outer;
    Query.call(this, mapper);
    this.n1d_1 = startTime;
    this.o1d_1 = endTime;
  }
  protoOf(GetAllReadingsInRangeQuery).yf = function (mapper) {
    return this.p1d_1.kg_1.jg(-1241419671, 'SELECT BatteryReading.id, BatteryReading.timestamp, BatteryReading.voltageMillivolts, BatteryReading.amperageMicroamps, BatteryReading.temperatureCelsius, BatteryReading.batteryPercentage, BatteryReading.batteryState, BatteryReading.chargingType FROM BatteryReading\nWHERE timestamp BETWEEN ? AND ?\nORDER BY timestamp ASC', mapper, 2, BatteryReadingQueries$GetAllReadingsInRangeQuery$execute$lambda(this));
  };
  protoOf(GetAllReadingsInRangeQuery).toString = function () {
    return 'BatteryReading.sq:getAllReadingsInRange';
  };
  function GetStatisticsQuery($outer, startTime, endTime, mapper) {
    this.t1d_1 = $outer;
    Query.call(this, mapper);
    this.r1d_1 = startTime;
    this.s1d_1 = endTime;
  }
  protoOf(GetStatisticsQuery).yf = function (mapper) {
    return this.t1d_1.kg_1.jg(1397044412, 'SELECT\n    COUNT(*) AS totalCount,\n    AVG(voltageMillivolts) AS avgVoltage,\n    AVG(amperageMicroamps) AS avgAmperage,\n    AVG(temperatureCelsius) AS avgTemperature,\n    AVG(batteryPercentage) AS avgBatteryPercentage,\n    MAX(voltageMillivolts) AS maxVoltage,\n    MAX(amperageMicroamps) AS maxAmperage,\n    MIN(voltageMillivolts) AS minVoltage,\n    MIN(amperageMicroamps) AS minAmperage\nFROM BatteryReading\nWHERE timestamp BETWEEN ? AND ?', mapper, 2, BatteryReadingQueries$GetStatisticsQuery$execute$lambda(this));
  };
  protoOf(GetStatisticsQuery).toString = function () {
    return 'BatteryReading.sq:getStatistics';
  };
  function GetChargeCountQuery($outer, startTime, endTime, mapper) {
    this.x1d_1 = $outer;
    Query.call(this, mapper);
    this.v1d_1 = startTime;
    this.w1d_1 = endTime;
  }
  protoOf(GetChargeCountQuery).yf = function (mapper) {
    return this.x1d_1.kg_1.jg(-8208830, "SELECT COUNT(*)\nFROM BatteryReading\nWHERE timestamp BETWEEN ? AND ?\n  AND batteryState LIKE 'Charging%'", mapper, 2, BatteryReadingQueries$GetChargeCountQuery$execute$lambda(this));
  };
  protoOf(GetChargeCountQuery).toString = function () {
    return 'BatteryReading.sq:getChargeCount';
  };
  function GetStateDurationsQuery($outer, sampleInterval, startTime, endTime, mapper) {
    this.c1e_1 = $outer;
    Query.call(this, mapper);
    this.z1d_1 = sampleInterval;
    this.a1e_1 = startTime;
    this.b1e_1 = endTime;
  }
  protoOf(GetStateDurationsQuery).yf = function (mapper) {
    return this.c1e_1.kg_1.jg(1191011047, 'SELECT\n    batteryState,\n    COUNT(*) * ? AS durationSeconds,\n    COUNT(*) AS readingCount\nFROM BatteryReading\nWHERE timestamp BETWEEN ? AND ?\nGROUP BY batteryState', mapper, 3, BatteryReadingQueries$GetStateDurationsQuery$execute$lambda(this));
  };
  protoOf(GetStateDurationsQuery).toString = function () {
    return 'BatteryReading.sq:getStateDurations';
  };
  function BatteryReadingQueries$getLatestReading$lambda($mapper) {
    return function (cursor) {
      return $mapper(ensureNotNull(cursor.a12(0)), ensureNotNull(cursor.a12(1)), ensureNotNull(cursor.a12(2)), ensureNotNull(cursor.a12(3)), cursor.b12(4), ensureNotNull(cursor.a12(5)), ensureNotNull(cursor.z11(6)), cursor.z11(7));
    };
  }
  function BatteryReadingQueries$getLatestReading$lambda_0(id, timestamp, voltageMillivolts, amperageMicroamps, temperatureCelsius, batteryPercentage, batteryState, chargingType) {
    return new BatteryReading(id, timestamp, voltageMillivolts, amperageMicroamps, temperatureCelsius, batteryPercentage, batteryState, chargingType);
  }
  function BatteryReadingQueries$getReadingsInRange$lambda($mapper) {
    return function (cursor) {
      return $mapper(ensureNotNull(cursor.a12(0)), ensureNotNull(cursor.a12(1)), ensureNotNull(cursor.a12(2)), ensureNotNull(cursor.a12(3)), cursor.b12(4), ensureNotNull(cursor.a12(5)), ensureNotNull(cursor.z11(6)), cursor.z11(7));
    };
  }
  function BatteryReadingQueries$getReadingsInRange$lambda_0(id, timestamp, voltageMillivolts, amperageMicroamps, temperatureCelsius, batteryPercentage, batteryState, chargingType) {
    return new BatteryReading(id, timestamp, voltageMillivolts, amperageMicroamps, temperatureCelsius, batteryPercentage, batteryState, chargingType);
  }
  function BatteryReadingQueries$getAllReadingsInRange$lambda($mapper) {
    return function (cursor) {
      return $mapper(ensureNotNull(cursor.a12(0)), ensureNotNull(cursor.a12(1)), ensureNotNull(cursor.a12(2)), ensureNotNull(cursor.a12(3)), cursor.b12(4), ensureNotNull(cursor.a12(5)), ensureNotNull(cursor.z11(6)), cursor.z11(7));
    };
  }
  function BatteryReadingQueries$getAllReadingsInRange$lambda_0(id, timestamp, voltageMillivolts, amperageMicroamps, temperatureCelsius, batteryPercentage, batteryState, chargingType) {
    return new BatteryReading(id, timestamp, voltageMillivolts, amperageMicroamps, temperatureCelsius, batteryPercentage, batteryState, chargingType);
  }
  function BatteryReadingQueries$getStatistics$lambda($mapper) {
    return function (cursor) {
      return $mapper(ensureNotNull(cursor.a12(0)), cursor.b12(1), cursor.b12(2), cursor.b12(3), cursor.b12(4), cursor.a12(5), cursor.a12(6), cursor.a12(7), cursor.a12(8));
    };
  }
  function BatteryReadingQueries$getStatistics$lambda_0(totalCount, avgVoltage, avgAmperage, avgTemperature, avgBatteryPercentage, maxVoltage, maxAmperage, minVoltage, minAmperage) {
    return new GetStatistics(totalCount, avgVoltage, avgAmperage, avgTemperature, avgBatteryPercentage, maxVoltage, maxAmperage, minVoltage, minAmperage);
  }
  function BatteryReadingQueries$getChargeCount$lambda(cursor) {
    return ensureNotNull(cursor.a12(0));
  }
  function BatteryReadingQueries$getStateDurations$lambda($mapper) {
    return function (cursor) {
      return $mapper(ensureNotNull(cursor.z11(0)), ensureNotNull(cursor.a12(1)), ensureNotNull(cursor.a12(2)));
    };
  }
  function BatteryReadingQueries$getStateDurations$lambda_0(batteryState, durationSeconds, readingCount) {
    return new GetStateDurations(batteryState, durationSeconds, readingCount);
  }
  function BatteryReadingQueries$insertReading$lambda($timestamp, $voltageMillivolts, $amperageMicroamps, $temperatureCelsius, $batteryPercentage, $batteryState, $chargingType) {
    return function ($this$execute) {
      $this$execute.t11(0, $timestamp);
      $this$execute.t11(1, $voltageMillivolts);
      $this$execute.t11(2, $amperageMicroamps);
      $this$execute.u11(3, $temperatureCelsius);
      $this$execute.t11(4, $batteryPercentage);
      $this$execute.v11(5, $batteryState);
      $this$execute.v11(6, $chargingType);
      return Unit_instance;
    };
  }
  function BatteryReadingQueries$insertReading$lambda_0(emit) {
    emit('BatteryReading');
    return Unit_instance;
  }
  function BatteryReadingQueries(driver) {
    TransacterImpl.call(this, driver);
  }
  protoOf(BatteryReadingQueries).e1e = function (mapper) {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = ['BatteryReading'];
    return Query_0(209701580, tmp, this.kg_1, 'BatteryReading.sq', 'getLatestReading', 'SELECT BatteryReading.id, BatteryReading.timestamp, BatteryReading.voltageMillivolts, BatteryReading.amperageMicroamps, BatteryReading.temperatureCelsius, BatteryReading.batteryPercentage, BatteryReading.batteryState, BatteryReading.chargingType FROM BatteryReading\nORDER BY timestamp DESC\nLIMIT 1', BatteryReadingQueries$getLatestReading$lambda(mapper));
  };
  protoOf(BatteryReadingQueries).f1e = function () {
    return this.e1e(BatteryReadingQueries$getLatestReading$lambda_0);
  };
  protoOf(BatteryReadingQueries).g1e = function (startTime, endTime, limit, mapper) {
    return new GetReadingsInRangeQuery(this, startTime, endTime, limit, BatteryReadingQueries$getReadingsInRange$lambda(mapper));
  };
  protoOf(BatteryReadingQueries).h1e = function (startTime, endTime, limit) {
    return this.g1e(startTime, endTime, limit, BatteryReadingQueries$getReadingsInRange$lambda_0);
  };
  protoOf(BatteryReadingQueries).i1e = function (startTime, endTime, mapper) {
    return new GetAllReadingsInRangeQuery(this, startTime, endTime, BatteryReadingQueries$getAllReadingsInRange$lambda(mapper));
  };
  protoOf(BatteryReadingQueries).j1e = function (startTime, endTime) {
    return this.i1e(startTime, endTime, BatteryReadingQueries$getAllReadingsInRange$lambda_0);
  };
  protoOf(BatteryReadingQueries).k1e = function (startTime, endTime, mapper) {
    return new GetStatisticsQuery(this, startTime, endTime, BatteryReadingQueries$getStatistics$lambda(mapper));
  };
  protoOf(BatteryReadingQueries).l1e = function (startTime, endTime) {
    return this.k1e(startTime, endTime, BatteryReadingQueries$getStatistics$lambda_0);
  };
  protoOf(BatteryReadingQueries).m1e = function (startTime, endTime) {
    return new GetChargeCountQuery(this, startTime, endTime, BatteryReadingQueries$getChargeCount$lambda);
  };
  protoOf(BatteryReadingQueries).n1e = function (sampleInterval, startTime, endTime, mapper) {
    return new GetStateDurationsQuery(this, sampleInterval, startTime, endTime, BatteryReadingQueries$getStateDurations$lambda(mapper));
  };
  protoOf(BatteryReadingQueries).o1e = function (sampleInterval, startTime, endTime) {
    return this.n1e(sampleInterval, startTime, endTime, BatteryReadingQueries$getStateDurations$lambda_0);
  };
  protoOf(BatteryReadingQueries).p1e = function (timestamp, voltageMillivolts, amperageMicroamps, temperatureCelsius, batteryPercentage, batteryState, chargingType) {
    this.kg_1.ah(-1936679626, 'INSERT INTO BatteryReading (\n    timestamp,\n    voltageMillivolts,\n    amperageMicroamps,\n    temperatureCelsius,\n    batteryPercentage,\n    batteryState,\n    chargingType\n) VALUES (?, ?, ?, ?, ?, ?, ?)', 7, BatteryReadingQueries$insertReading$lambda(timestamp, voltageMillivolts, amperageMicroamps, temperatureCelsius, batteryPercentage, batteryState, chargingType));
    this.lg(-1936679626, BatteryReadingQueries$insertReading$lambda_0);
  };
  function Companion() {
  }
  protoOf(Companion).q1e = function () {
    return get_schema(getKClass(EmbitDatabase));
  };
  protoOf(Companion).r1e = function (driver) {
    return newInstance(getKClass(EmbitDatabase), driver);
  };
  var Companion_instance_0;
  function Companion_getInstance_3() {
    return Companion_instance_0;
  }
  function EmbitDatabase() {
  }
  function GetStateDurations(batteryState, durationSeconds, readingCount) {
    this.t1e_1 = batteryState;
    this.u1e_1 = durationSeconds;
    this.v1e_1 = readingCount;
  }
  protoOf(GetStateDurations).toString = function () {
    return 'GetStateDurations(batteryState=' + this.t1e_1 + ', durationSeconds=' + this.u1e_1.toString() + ', readingCount=' + this.v1e_1.toString() + ')';
  };
  protoOf(GetStateDurations).hashCode = function () {
    var result = getStringHashCode(this.t1e_1);
    result = imul(result, 31) + this.u1e_1.hashCode() | 0;
    result = imul(result, 31) + this.v1e_1.hashCode() | 0;
    return result;
  };
  protoOf(GetStateDurations).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GetStateDurations))
      return false;
    var tmp0_other_with_cast = other instanceof GetStateDurations ? other : THROW_CCE();
    if (!(this.t1e_1 === tmp0_other_with_cast.t1e_1))
      return false;
    if (!this.u1e_1.equals(tmp0_other_with_cast.u1e_1))
      return false;
    if (!this.v1e_1.equals(tmp0_other_with_cast.v1e_1))
      return false;
    return true;
  };
  function GetStatistics(totalCount, avgVoltage, avgAmperage, avgTemperature, avgBatteryPercentage, maxVoltage, maxAmperage, minVoltage, minAmperage) {
    this.w1e_1 = totalCount;
    this.x1e_1 = avgVoltage;
    this.y1e_1 = avgAmperage;
    this.z1e_1 = avgTemperature;
    this.a1f_1 = avgBatteryPercentage;
    this.b1f_1 = maxVoltage;
    this.c1f_1 = maxAmperage;
    this.d1f_1 = minVoltage;
    this.e1f_1 = minAmperage;
  }
  protoOf(GetStatistics).toString = function () {
    return 'GetStatistics(totalCount=' + this.w1e_1.toString() + ', avgVoltage=' + this.x1e_1 + ', avgAmperage=' + this.y1e_1 + ', avgTemperature=' + this.z1e_1 + ', avgBatteryPercentage=' + this.a1f_1 + ', maxVoltage=' + toString(this.b1f_1) + ', maxAmperage=' + toString(this.c1f_1) + ', minVoltage=' + toString(this.d1f_1) + ', minAmperage=' + toString(this.e1f_1) + ')';
  };
  protoOf(GetStatistics).hashCode = function () {
    var result = this.w1e_1.hashCode();
    result = imul(result, 31) + (this.x1e_1 == null ? 0 : getNumberHashCode(this.x1e_1)) | 0;
    result = imul(result, 31) + (this.y1e_1 == null ? 0 : getNumberHashCode(this.y1e_1)) | 0;
    result = imul(result, 31) + (this.z1e_1 == null ? 0 : getNumberHashCode(this.z1e_1)) | 0;
    result = imul(result, 31) + (this.a1f_1 == null ? 0 : getNumberHashCode(this.a1f_1)) | 0;
    result = imul(result, 31) + (this.b1f_1 == null ? 0 : this.b1f_1.hashCode()) | 0;
    result = imul(result, 31) + (this.c1f_1 == null ? 0 : this.c1f_1.hashCode()) | 0;
    result = imul(result, 31) + (this.d1f_1 == null ? 0 : this.d1f_1.hashCode()) | 0;
    result = imul(result, 31) + (this.e1f_1 == null ? 0 : this.e1f_1.hashCode()) | 0;
    return result;
  };
  protoOf(GetStatistics).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GetStatistics))
      return false;
    var tmp0_other_with_cast = other instanceof GetStatistics ? other : THROW_CCE();
    if (!this.w1e_1.equals(tmp0_other_with_cast.w1e_1))
      return false;
    if (!equals(this.x1e_1, tmp0_other_with_cast.x1e_1))
      return false;
    if (!equals(this.y1e_1, tmp0_other_with_cast.y1e_1))
      return false;
    if (!equals(this.z1e_1, tmp0_other_with_cast.z1e_1))
      return false;
    if (!equals(this.a1f_1, tmp0_other_with_cast.a1f_1))
      return false;
    if (!equals(this.b1f_1, tmp0_other_with_cast.b1f_1))
      return false;
    if (!equals(this.c1f_1, tmp0_other_with_cast.c1f_1))
      return false;
    if (!equals(this.d1f_1, tmp0_other_with_cast.d1f_1))
      return false;
    if (!equals(this.e1f_1, tmp0_other_with_cast.e1f_1))
      return false;
    return true;
  };
  function get_schema(_this__u8e3s4) {
    return Schema_instance;
  }
  function newInstance(_this__u8e3s4, driver) {
    return new EmbitDatabaseImpl(driver);
  }
  function Schema() {
  }
  protoOf(Schema).f1f = function (driver) {
    driver.bh(null, 'CREATE TABLE IF NOT EXISTS BatteryReading (\n    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,\n    timestamp INTEGER NOT NULL,\n    voltageMillivolts INTEGER NOT NULL,\n    amperageMicroamps INTEGER NOT NULL,\n    temperatureCelsius REAL,\n    batteryPercentage INTEGER NOT NULL,\n    batteryState TEXT NOT NULL,\n    chargingType TEXT\n)', 0);
    driver.bh(null, 'CREATE INDEX IF NOT EXISTS idx_battery_reading_timestamp ON BatteryReading(timestamp)', 0);
    driver.bh(null, 'CREATE INDEX IF NOT EXISTS idx_battery_reading_state ON BatteryReading(batteryState)', 0);
    return Companion_getInstance().zg_1;
  };
  protoOf(Schema).g1f = function (driver) {
    return new Value(this.f1f(driver));
  };
  var Schema_instance;
  function Schema_getInstance() {
    return Schema_instance;
  }
  function EmbitDatabaseImpl(driver) {
    TransacterImpl.call(this, driver);
    this.i1f_1 = new BatteryReadingQueries(driver);
  }
  protoOf(EmbitDatabaseImpl).s1e = function () {
    return this.i1f_1;
  };
  function serializeBatteryState(state) {
    var tmp;
    if (state instanceof Charging) {
      tmp = 'Charging';
    } else {
      if (equals(state, Discharging_getInstance())) {
        tmp = 'Discharging';
      } else {
        if (equals(state, Full_getInstance())) {
          tmp = 'Full';
        } else {
          if (equals(state, NotCharging_getInstance())) {
            tmp = 'NotCharging';
          } else {
            if (equals(state, Unknown_getInstance())) {
              tmp = 'Unknown';
            } else {
              noWhenBranchMatchedException();
            }
          }
        }
      }
    }
    return tmp;
  }
  function serializeChargingType(state) {
    var tmp;
    if (state instanceof Charging) {
      var tmp_0;
      switch (state.j1f_1.r1_1) {
        case 0:
          tmp_0 = 'AC';
          break;
        case 1:
          tmp_0 = 'USB';
          break;
        case 2:
          tmp_0 = 'WIRELESS';
          break;
        case 3:
          tmp_0 = 'UNKNOWN';
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_0;
    } else {
      tmp = null;
    }
    return tmp;
  }
  function toDomainModel(_this__u8e3s4) {
    var tmp = Companion_getInstance_0().s17(_this__u8e3s4.a1d_1);
    var tmp_0 = _this__u8e3s4.b1d_1.n2();
    var tmp0_safe_receiver = _this__u8e3s4.d1d_1;
    return new BatteryReading_0(_this__u8e3s4.z1c_1, tmp, tmp_0, _this__u8e3s4.c1d_1, tmp0_safe_receiver == null ? null : tmp0_safe_receiver, _this__u8e3s4.e1d_1.n2(), parseBatteryState(_this__u8e3s4.f1d_1, _this__u8e3s4.g1d_1));
  }
  function parseBatteryState(state, chargingTypeStr) {
    var tmp;
    if (startsWith(state, 'Charging')) {
      var type;
      switch (chargingTypeStr) {
        case 'AC':
          type = ChargingType_AC_getInstance();
          break;
        case 'USB':
          type = ChargingType_USB_getInstance();
          break;
        case 'WIRELESS':
          type = ChargingType_WIRELESS_getInstance();
          break;
        default:
          type = ChargingType_UNKNOWN_getInstance();
          break;
      }
      tmp = new Charging(type);
    } else if (state === 'Discharging') {
      tmp = Discharging_getInstance();
    } else if (state === 'Full') {
      tmp = Full_getInstance();
    } else if (state === 'NotCharging') {
      tmp = NotCharging_getInstance();
    } else {
      tmp = Unknown_getInstance();
    }
    return tmp;
  }
  function calculateAveragePower($this, voltageMillivolts, amperageMicroamps) {
    var voltageVolts = voltageMillivolts / 1000.0;
    var amperageAmps = amperageMicroamps / 1000000.0;
    return voltageVolts * amperageAmps * 1000.0;
  }
  function BatteryRepositoryImpl$json$lambda($this$Json) {
    $this$Json.e16_1 = true;
    return Unit_instance;
  }
  function BatteryRepositoryImpl$insertReading$slambda(this$0, $reading, resultContinuation) {
    this.s1f_1 = this$0;
    this.t1f_1 = $reading;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BatteryRepositoryImpl$insertReading$slambda).v1f = function ($this$withContext, $completion) {
    var tmp = this.w1f($this$withContext, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    var tmp_0 = tmp.n8();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(BatteryRepositoryImpl$insertReading$slambda).b9 = function (p1, $completion) {
    return this.v1f((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BatteryRepositoryImpl$insertReading$slambda).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        if (tmp === 0) {
          this.g8_1 = 1;
          var tmp_0;
          try {
            var tmp_1 = this.t1f_1.y1f_1.x17();
            var tmp_2 = toLong(this.t1f_1.z1f_1);
            var tmp0_safe_receiver = this.t1f_1.b1g_1;
            this.s1f_1.f1g_1.p1e(tmp_1, tmp_2, this.t1f_1.a1g_1, tmp0_safe_receiver == null ? null : tmp0_safe_receiver, toLong(this.t1f_1.c1g_1), serializeBatteryState(this.t1f_1.d1g_1), serializeChargingType(this.t1f_1.d1g_1));
            var tmp1_safe_receiver = this.s1f_1.f1g_1.f1e().bg();
            var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.z1c_1;
            var lastInsertId = tmp2_elvis_lhs == null ? new Long(0, 0) : tmp2_elvis_lhs;
            tmp_0 = _Result___init__impl__xyqfz8(lastInsertId);
          } catch ($p) {
            var tmp_3;
            if ($p instanceof Exception) {
              var e = $p;
              tmp_3 = _Result___init__impl__xyqfz8(createFailure(e));
            } else {
              throw $p;
            }
            tmp_0 = tmp_3;
          }
          return new Result(tmp_0);
        } else if (tmp === 1) {
          throw this.i8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        throw e_0;
      }
     while (true);
  };
  protoOf(BatteryRepositoryImpl$insertReading$slambda).w1f = function ($this$withContext, completion) {
    var i = new BatteryRepositoryImpl$insertReading$slambda(this.s1f_1, this.t1f_1, completion);
    i.u1f_1 = $this$withContext;
    return i;
  };
  function BatteryRepositoryImpl$insertReading$slambda_0(this$0, $reading, resultContinuation) {
    var i = new BatteryRepositoryImpl$insertReading$slambda(this$0, $reading, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.v1f($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BatteryRepositoryImpl$getReadingsInRange$slambda($limit, this$0, $start, $end, resultContinuation) {
    this.p1g_1 = $limit;
    this.q1g_1 = this$0;
    this.r1g_1 = $start;
    this.s1g_1 = $end;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BatteryRepositoryImpl$getReadingsInRange$slambda).u1g = function ($this$withContext, $completion) {
    var tmp = this.w1f($this$withContext, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    var tmp_0 = tmp.n8();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(BatteryRepositoryImpl$getReadingsInRange$slambda).b9 = function (p1, $completion) {
    return this.u1g((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BatteryRepositoryImpl$getReadingsInRange$slambda).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        if (tmp === 0) {
          this.g8_1 = 1;
          var tmp_0;
          try {
            var tmp_1;
            if (!(this.p1g_1 == null)) {
              tmp_1 = this.q1g_1.f1g_1.h1e(this.r1g_1.x17(), this.s1g_1.x17(), toLong(this.p1g_1)).zf();
            } else {
              tmp_1 = this.q1g_1.f1g_1.j1e(this.r1g_1.x17(), this.s1g_1.x17()).zf();
            }
            var readings = tmp_1;
            var destination = ArrayList_init_$Create$(collectionSizeOrDefault(readings, 10));
            var tmp0_iterator = readings.i();
            while (tmp0_iterator.j()) {
              var item = tmp0_iterator.k();
              destination.d(toDomainModel(item));
            }
            tmp_0 = _Result___init__impl__xyqfz8(destination);
          } catch ($p) {
            var tmp_2;
            if ($p instanceof Exception) {
              var e = $p;
              tmp_2 = _Result___init__impl__xyqfz8(createFailure(e));
            } else {
              throw $p;
            }
            tmp_0 = tmp_2;
          }
          return new Result(tmp_0);
        } else if (tmp === 1) {
          throw this.i8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        throw e_0;
      }
     while (true);
  };
  protoOf(BatteryRepositoryImpl$getReadingsInRange$slambda).w1f = function ($this$withContext, completion) {
    var i = new BatteryRepositoryImpl$getReadingsInRange$slambda(this.p1g_1, this.q1g_1, this.r1g_1, this.s1g_1, completion);
    i.t1g_1 = $this$withContext;
    return i;
  };
  function BatteryRepositoryImpl$getReadingsInRange$slambda_0($limit, this$0, $start, $end, resultContinuation) {
    var i = new BatteryRepositoryImpl$getReadingsInRange$slambda($limit, this$0, $start, $end, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.u1g($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BatteryRepositoryImpl$calculateStatistics$slambda(this$0, $start, $end, resultContinuation) {
    this.d1h_1 = this$0;
    this.e1h_1 = $start;
    this.f1h_1 = $end;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BatteryRepositoryImpl$calculateStatistics$slambda).h1h = function ($this$withContext, $completion) {
    var tmp = this.w1f($this$withContext, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    var tmp_0 = tmp.n8();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(BatteryRepositoryImpl$calculateStatistics$slambda).b9 = function (p1, $completion) {
    return this.h1h((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BatteryRepositoryImpl$calculateStatistics$slambda).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        if (tmp === 0) {
          this.g8_1 = 1;
          var tmp_0;
          try {
            var stats = this.d1h_1.f1g_1.l1e(this.e1h_1.x17(), this.f1h_1.x17()).ag();
            if (stats.w1e_1.equals(new Long(0, 0))) {
              var exception = Exception_init_$Create$('No data available for this period');
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception)));
            }
            var tmp0_elvis_lhs = stats.x1e_1;
            var tmp_1 = tmp0_elvis_lhs == null ? 0.0 : tmp0_elvis_lhs;
            var tmp1_elvis_lhs = stats.y1e_1;
            var avgPowerMilliwatts = calculateAveragePower(this.d1h_1, tmp_1, tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs);
            var tmp2_safe_receiver = stats.b1f_1;
            var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.p2();
            var tmp_2 = tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs;
            var tmp4_safe_receiver = stats.c1f_1;
            var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.p2();
            var peakPowerMilliwatts = calculateAveragePower(this.d1h_1, tmp_2, tmp5_elvis_lhs == null ? 0.0 : tmp5_elvis_lhs);
            var tmp6_$this = this.d1h_1.f1g_1;
            var tmp7_startTime = this.e1h_1.x17();
            var tmp8_endTime = this.f1h_1.x17();
            var stateDurations = tmp6_$this.o1e(new Long(60, 0), tmp7_startTime, tmp8_endTime).zf();
            var destination = ArrayList_init_$Create$_0();
            var tmp0_iterator = stateDurations.i();
            while (tmp0_iterator.j()) {
              var element = tmp0_iterator.k();
              var tmp0_safe_receiver = element.t1e_1;
              if ((tmp0_safe_receiver == null ? null : startsWith(tmp0_safe_receiver, 'Charging')) === true) {
                destination.d(element);
              }
            }
            var sum = new Long(0, 0);
            var tmp0_iterator_0 = destination.i();
            while (tmp0_iterator_0.j()) {
              var element_0 = tmp0_iterator_0.k();
              var tmp_3 = sum;
              var tmp0_elvis_lhs_0 = element_0.u1e_1;
              sum = tmp_3.y1(tmp0_elvis_lhs_0 == null ? new Long(0, 0) : tmp0_elvis_lhs_0);
            }
            var chargingSeconds = sum;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_iterator_1 = stateDurations.i();
              while (tmp0_iterator_1.j()) {
                var element_1 = tmp0_iterator_1.k();
                if (element_1.t1e_1 === 'Discharging') {
                  tmp$ret$0 = element_1;
                  break l$ret$1;
                }
              }
              tmp$ret$0 = null;
            }
             while (false);
            var tmp9_safe_receiver = tmp$ret$0;
            var tmp10_elvis_lhs = tmp9_safe_receiver == null ? null : tmp9_safe_receiver.u1e_1;
            var dischargingSeconds = tmp10_elvis_lhs == null ? new Long(0, 0) : tmp10_elvis_lhs;
            var chargeCount = this.d1h_1.f1g_1.m1e(this.e1h_1.x17(), this.f1h_1.x17()).ag().n2();
            var durationHours = _Duration___get_inWholeSeconds__impl__hpy7b3(this.f1h_1.b18(this.e1h_1)).p2() / 3600.0;
            var totalEnergyMilliwattHours = avgPowerMilliwatts * durationHours;
            var tmp11_safe_receiver = stats.z1e_1;
            var tmp_4 = tmp11_safe_receiver == null ? null : tmp11_safe_receiver;
            var tmp12_safe_receiver = stats.a1f_1;
            var tmp13_elvis_lhs = tmp12_safe_receiver == null ? null : numberToInt(tmp12_safe_receiver);
            var statistics = new BatteryStatistics(this.e1h_1, this.f1h_1, avgPowerMilliwatts, peakPowerMilliwatts, totalEnergyMilliwattHours, tmp_4, chargingSeconds, dischargingSeconds, chargeCount, tmp13_elvis_lhs == null ? 0 : tmp13_elvis_lhs);
            tmp_0 = _Result___init__impl__xyqfz8(statistics);
          } catch ($p) {
            var tmp_5;
            if ($p instanceof Exception) {
              var e = $p;
              tmp_5 = _Result___init__impl__xyqfz8(createFailure(e));
            } else {
              throw $p;
            }
            tmp_0 = tmp_5;
          }
          return new Result(tmp_0);
        } else if (tmp === 1) {
          throw this.i8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        throw e_0;
      }
     while (true);
  };
  protoOf(BatteryRepositoryImpl$calculateStatistics$slambda).w1f = function ($this$withContext, completion) {
    var i = new BatteryRepositoryImpl$calculateStatistics$slambda(this.d1h_1, this.e1h_1, this.f1h_1, completion);
    i.g1h_1 = $this$withContext;
    return i;
  };
  function BatteryRepositoryImpl$calculateStatistics$slambda_0(this$0, $start, $end, resultContinuation) {
    var i = new BatteryRepositoryImpl$calculateStatistics$slambda(this$0, $start, $end, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.h1h($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BatteryRepositoryImpl(database) {
    this.e1g_1 = database;
    this.f1g_1 = this.e1g_1.s1e();
    var tmp = this;
    tmp.g1g_1 = Json(VOID, BatteryRepositoryImpl$json$lambda);
  }
  protoOf(BatteryRepositoryImpl).i1h = function (reading, $completion) {
    var tmp = Dispatchers_getInstance().kq_1;
    var tmp_0 = withContext(tmp, BatteryRepositoryImpl$insertReading$slambda_0(this, reading, null), $completion);
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(BatteryRepositoryImpl).j1h = function (start, end, limit, $completion) {
    var tmp = Dispatchers_getInstance().kq_1;
    var tmp_0 = withContext(tmp, BatteryRepositoryImpl$getReadingsInRange$slambda_0(limit, this, start, end, null), $completion);
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(BatteryRepositoryImpl).l1h = function (start, end, $completion) {
    var tmp = Dispatchers_getInstance().kq_1;
    var tmp_0 = withContext(tmp, BatteryRepositoryImpl$calculateStatistics$slambda_0(this, start, end, null), $completion);
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  function get_sharedModule() {
    _init_properties_SharedModule_kt__f2j32p();
    return sharedModule;
  }
  var sharedModule;
  function sharedModule$lambda($this$module) {
    _init_properties_SharedModule_kt__f2j32p();
    // Inline function 'org.koin.core.module.Module.single' call
    // Inline function 'org.koin.core.module._singleInstanceFactory' call
    var definition = sharedModule$lambda$lambda;
    var scopeQualifier = Companion_getInstance_1().o1a_1;
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind = Kind_Singleton_getInstance();
    var secondaryTypes = emptyList();
    var def = new BeanDefinition(scopeQualifier, getKClass(EmbitDatabase), null, definition, kind, secondaryTypes);
    var factory = new SingleInstanceFactory(def);
    $this$module.u1b(factory);
    if (false || $this$module.o1b_1) {
      $this$module.w1b(factory);
    }
    new KoinDefinition($this$module, factory);
    // Inline function 'org.koin.core.module.Module.single' call
    // Inline function 'org.koin.core.module._singleInstanceFactory' call
    var definition_0 = sharedModule$lambda$lambda_0;
    var scopeQualifier_0 = Companion_getInstance_1().o1a_1;
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind_0 = Kind_Singleton_getInstance();
    var secondaryTypes_0 = emptyList();
    var def_0 = new BeanDefinition(scopeQualifier_0, getKClass(IBatteryRepository), null, definition_0, kind_0, secondaryTypes_0);
    var factory_0 = new SingleInstanceFactory(def_0);
    $this$module.u1b(factory_0);
    if (false || $this$module.o1b_1) {
      $this$module.w1b(factory_0);
    }
    new KoinDefinition($this$module, factory_0);
    // Inline function 'org.koin.core.module.Module.single' call
    // Inline function 'org.koin.core.module._singleInstanceFactory' call
    var definition_1 = sharedModule$lambda$lambda_1;
    var scopeQualifier_1 = Companion_getInstance_1().o1a_1;
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind_1 = Kind_Singleton_getInstance();
    var secondaryTypes_1 = emptyList();
    var def_1 = new BeanDefinition(scopeQualifier_1, getKClass(IBatteryMonitorService), null, definition_1, kind_1, secondaryTypes_1);
    var factory_1 = new SingleInstanceFactory(def_1);
    $this$module.u1b(factory_1);
    if (false || $this$module.o1b_1) {
      $this$module.w1b(factory_1);
    }
    new KoinDefinition($this$module, factory_1);
    // Inline function 'org.koin.core.module.Module.factory' call
    // Inline function 'org.koin.core.module.Module.factory' call
    var definition_2 = sharedModule$lambda$lambda_2;
    // Inline function 'org.koin.core.module._factoryInstanceFactory' call
    var scopeQualifier_2 = Companion_getInstance_1().o1a_1;
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind_2 = Kind_Factory_getInstance();
    var secondaryTypes_2 = emptyList();
    var def_2 = new BeanDefinition(scopeQualifier_2, getKClass(MonitorBatteryUseCase), null, definition_2, kind_2, secondaryTypes_2);
    var factory_2 = new FactoryInstanceFactory(def_2);
    $this$module.u1b(factory_2);
    new KoinDefinition($this$module, factory_2);
    // Inline function 'org.koin.core.module.Module.factory' call
    // Inline function 'org.koin.core.module.Module.factory' call
    var definition_3 = sharedModule$lambda$lambda_3;
    // Inline function 'org.koin.core.module._factoryInstanceFactory' call
    var scopeQualifier_3 = Companion_getInstance_1().o1a_1;
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind_3 = Kind_Factory_getInstance();
    var secondaryTypes_3 = emptyList();
    var def_3 = new BeanDefinition(scopeQualifier_3, getKClass(GetBatteryHistoryUseCase), null, definition_3, kind_3, secondaryTypes_3);
    var factory_3 = new FactoryInstanceFactory(def_3);
    $this$module.u1b(factory_3);
    new KoinDefinition($this$module, factory_3);
    // Inline function 'org.koin.core.module.Module.factory' call
    // Inline function 'org.koin.core.module.Module.factory' call
    var definition_4 = sharedModule$lambda$lambda_4;
    // Inline function 'org.koin.core.module._factoryInstanceFactory' call
    var scopeQualifier_4 = Companion_getInstance_1().o1a_1;
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind_4 = Kind_Factory_getInstance();
    var secondaryTypes_4 = emptyList();
    var def_4 = new BeanDefinition(scopeQualifier_4, getKClass(CalculateBatteryStatisticsUseCase), null, definition_4, kind_4, secondaryTypes_4);
    var factory_4 = new FactoryInstanceFactory(def_4);
    $this$module.u1b(factory_4);
    new KoinDefinition($this$module, factory_4);
    // Inline function 'org.koin.core.module.Module.factory' call
    // Inline function 'org.koin.core.module.Module.factory' call
    var definition_5 = sharedModule$lambda$lambda_5;
    // Inline function 'org.koin.core.module._factoryInstanceFactory' call
    var scopeQualifier_5 = Companion_getInstance_1().o1a_1;
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind_5 = Kind_Factory_getInstance();
    var secondaryTypes_5 = emptyList();
    var def_5 = new BeanDefinition(scopeQualifier_5, getKClass(ManageBatteryDataUseCase), null, definition_5, kind_5, secondaryTypes_5);
    var factory_5 = new FactoryInstanceFactory(def_5);
    $this$module.u1b(factory_5);
    new KoinDefinition($this$module, factory_5);
    // Inline function 'org.koin.core.module.Module.factory' call
    // Inline function 'org.koin.core.module.Module.factory' call
    var definition_6 = sharedModule$lambda$lambda_6;
    // Inline function 'org.koin.core.module._factoryInstanceFactory' call
    var scopeQualifier_6 = Companion_getInstance_1().o1a_1;
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind_6 = Kind_Factory_getInstance();
    var secondaryTypes_6 = emptyList();
    var def_6 = new BeanDefinition(scopeQualifier_6, getKClass(AnalyzeBatteryHealthUseCase), null, definition_6, kind_6, secondaryTypes_6);
    var factory_6 = new FactoryInstanceFactory(def_6);
    $this$module.u1b(factory_6);
    new KoinDefinition($this$module, factory_6);
    // Inline function 'org.koin.core.module.Module.factory' call
    // Inline function 'org.koin.core.module.Module.factory' call
    var definition_7 = sharedModule$lambda$lambda_7;
    // Inline function 'org.koin.core.module._factoryInstanceFactory' call
    var scopeQualifier_7 = Companion_getInstance_1().o1a_1;
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind_7 = Kind_Factory_getInstance();
    var secondaryTypes_7 = emptyList();
    var def_7 = new BeanDefinition(scopeQualifier_7, getKClass(PredictBatteryLifeUseCase), null, definition_7, kind_7, secondaryTypes_7);
    var factory_7 = new FactoryInstanceFactory(def_7);
    $this$module.u1b(factory_7);
    new KoinDefinition($this$module, factory_7);
    // Inline function 'org.koin.core.module.Module.factory' call
    // Inline function 'org.koin.core.module.Module.factory' call
    var definition_8 = sharedModule$lambda$lambda_8;
    // Inline function 'org.koin.core.module._factoryInstanceFactory' call
    var scopeQualifier_8 = Companion_getInstance_1().o1a_1;
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind_8 = Kind_Factory_getInstance();
    var secondaryTypes_8 = emptyList();
    var def_8 = new BeanDefinition(scopeQualifier_8, getKClass(GenerateChargingRecommendationsUseCase), null, definition_8, kind_8, secondaryTypes_8);
    var factory_8 = new FactoryInstanceFactory(def_8);
    $this$module.u1b(factory_8);
    new KoinDefinition($this$module, factory_8);
    return Unit_instance;
  }
  function sharedModule$lambda$lambda($this$single, it) {
    _init_properties_SharedModule_kt__f2j32p();
    // Inline function 'org.koin.core.scope.Scope.get' call
    var driverFactory = $this$single.v1c(getKClass(DatabaseDriverFactory), null, null);
    return Companion_instance_0.r1e(driverFactory.m1h());
  }
  function sharedModule$lambda$lambda_0($this$single, it) {
    _init_properties_SharedModule_kt__f2j32p();
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$0 = $this$single.v1c(getKClass(EmbitDatabase), null, null);
    return new BatteryRepositoryImpl(tmp$ret$0);
  }
  function sharedModule$lambda$lambda_1($this$single, it) {
    _init_properties_SharedModule_kt__f2j32p();
    // Inline function 'org.koin.core.scope.Scope.get' call
    var factory = $this$single.v1c(getKClass(BatteryMonitorServiceFactory), null, null);
    return factory.n1h();
  }
  function sharedModule$lambda$lambda_2($this$factory, it) {
    _init_properties_SharedModule_kt__f2j32p();
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp = $this$factory.v1c(getKClass(IBatteryMonitorService), null, null);
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$1 = $this$factory.v1c(getKClass(IBatteryRepository), null, null);
    return new MonitorBatteryUseCase(tmp, tmp$ret$1);
  }
  function sharedModule$lambda$lambda_3($this$factory, it) {
    _init_properties_SharedModule_kt__f2j32p();
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$0 = $this$factory.v1c(getKClass(IBatteryRepository), null, null);
    return new GetBatteryHistoryUseCase(tmp$ret$0);
  }
  function sharedModule$lambda$lambda_4($this$factory, it) {
    _init_properties_SharedModule_kt__f2j32p();
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$0 = $this$factory.v1c(getKClass(IBatteryRepository), null, null);
    return new CalculateBatteryStatisticsUseCase(tmp$ret$0);
  }
  function sharedModule$lambda$lambda_5($this$factory, it) {
    _init_properties_SharedModule_kt__f2j32p();
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$0 = $this$factory.v1c(getKClass(IBatteryRepository), null, null);
    return new ManageBatteryDataUseCase(tmp$ret$0);
  }
  function sharedModule$lambda$lambda_6($this$factory, it) {
    _init_properties_SharedModule_kt__f2j32p();
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$0 = $this$factory.v1c(getKClass(IBatteryRepository), null, null);
    return new AnalyzeBatteryHealthUseCase(tmp$ret$0);
  }
  function sharedModule$lambda$lambda_7($this$factory, it) {
    _init_properties_SharedModule_kt__f2j32p();
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$0 = $this$factory.v1c(getKClass(IBatteryRepository), null, null);
    return new PredictBatteryLifeUseCase(tmp$ret$0);
  }
  function sharedModule$lambda$lambda_8($this$factory, it) {
    _init_properties_SharedModule_kt__f2j32p();
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$0 = $this$factory.v1c(getKClass(IBatteryRepository), null, null);
    return new GenerateChargingRecommendationsUseCase(tmp$ret$0);
  }
  var properties_initialized_SharedModule_kt_gis2hf;
  function _init_properties_SharedModule_kt__f2j32p() {
    if (!properties_initialized_SharedModule_kt_gis2hf) {
      properties_initialized_SharedModule_kt_gis2hf = true;
      sharedModule = module_0(VOID, sharedModule$lambda);
    }
  }
  function Companion_0() {
    Companion_instance_1 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.q1h_1 = [null, null, null, null, null, null, Companion_getInstance_6().p1h()];
  }
  var Companion_instance_1;
  function Companion_getInstance_4() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function BatteryReading_0(id, timestamp, voltageMillivolts, amperageMicroamps, temperatureCelsius, batteryPercentage, batteryState) {
    Companion_getInstance_4();
    id = id === VOID ? new Long(0, 0) : id;
    temperatureCelsius = temperatureCelsius === VOID ? null : temperatureCelsius;
    this.x1f_1 = id;
    this.y1f_1 = timestamp;
    this.z1f_1 = voltageMillivolts;
    this.a1g_1 = amperageMicroamps;
    this.b1g_1 = temperatureCelsius;
    this.c1g_1 = batteryPercentage;
    this.d1g_1 = batteryState;
  }
  protoOf(BatteryReading_0).toString = function () {
    return 'BatteryReading(id=' + this.x1f_1.toString() + ', timestamp=' + this.y1f_1.toString() + ', voltageMillivolts=' + this.z1f_1 + ', amperageMicroamps=' + this.a1g_1.toString() + ', temperatureCelsius=' + this.b1g_1 + ', batteryPercentage=' + this.c1g_1 + ', batteryState=' + toString_0(this.d1g_1) + ')';
  };
  protoOf(BatteryReading_0).hashCode = function () {
    var result = this.x1f_1.hashCode();
    result = imul(result, 31) + this.y1f_1.hashCode() | 0;
    result = imul(result, 31) + this.z1f_1 | 0;
    result = imul(result, 31) + this.a1g_1.hashCode() | 0;
    result = imul(result, 31) + (this.b1g_1 == null ? 0 : getNumberHashCode(this.b1g_1)) | 0;
    result = imul(result, 31) + this.c1g_1 | 0;
    result = imul(result, 31) + hashCode(this.d1g_1) | 0;
    return result;
  };
  protoOf(BatteryReading_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BatteryReading_0))
      return false;
    var tmp0_other_with_cast = other instanceof BatteryReading_0 ? other : THROW_CCE();
    if (!this.x1f_1.equals(tmp0_other_with_cast.x1f_1))
      return false;
    if (!this.y1f_1.equals(tmp0_other_with_cast.y1f_1))
      return false;
    if (!(this.z1f_1 === tmp0_other_with_cast.z1f_1))
      return false;
    if (!this.a1g_1.equals(tmp0_other_with_cast.a1g_1))
      return false;
    if (!equals(this.b1g_1, tmp0_other_with_cast.b1g_1))
      return false;
    if (!(this.c1g_1 === tmp0_other_with_cast.c1g_1))
      return false;
    if (!equals(this.d1g_1, tmp0_other_with_cast.d1g_1))
      return false;
    return true;
  };
  function Companion_1() {
    Companion_instance_2 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.s1h_1 = [Companion_getInstance_7().p1h()];
  }
  var Companion_instance_2;
  function Companion_getInstance_5() {
    if (Companion_instance_2 == null)
      new Companion_1();
    return Companion_instance_2;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('eco.emergi.embit.domain.models.BatteryState.Charging', this, 1);
    tmp0_serialDesc.z14('chargingType', false);
    this.t1h_1 = tmp0_serialDesc;
  }
  protoOf($serializer).c12 = function () {
    return this.t1h_1;
  };
  protoOf($serializer).d15 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_5().s1h_1[0]];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function BatteryState$Discharging$_anonymous__gf8foo() {
    var tmp = Discharging_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    return ObjectSerializer_init_$Create$('eco.emergi.embit.domain.models.BatteryState.Discharging', tmp, tmp$ret$2);
  }
  function BatteryState$Full$_anonymous__bohivc() {
    var tmp = Full_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    return ObjectSerializer_init_$Create$('eco.emergi.embit.domain.models.BatteryState.Full', tmp, tmp$ret$2);
  }
  function BatteryState$NotCharging$_anonymous__qt7gwd() {
    var tmp = NotCharging_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    return ObjectSerializer_init_$Create$('eco.emergi.embit.domain.models.BatteryState.NotCharging', tmp, tmp$ret$2);
  }
  function BatteryState$Unknown$_anonymous__dnuv9p() {
    var tmp = Unknown_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    return ObjectSerializer_init_$Create$('eco.emergi.embit.domain.models.BatteryState.Unknown', tmp, tmp$ret$2);
  }
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.o1h_1.k1();
  }
  function BatteryState$Companion$_anonymous__639n9n() {
    var tmp = getKClass(BatteryState);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [getKClass(Charging), getKClass(Discharging), getKClass(Full), getKClass(NotCharging), getKClass(Unknown)];
    // Inline function 'kotlin.arrayOf' call
    var tmp_1 = $serializer_getInstance();
    var tmp_2 = Discharging_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = [];
    var tmp_3 = ObjectSerializer_init_$Create$('eco.emergi.embit.domain.models.BatteryState.Discharging', tmp_2, tmp$ret$5);
    var tmp_4 = Full_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$8 = [];
    var tmp_5 = ObjectSerializer_init_$Create$('eco.emergi.embit.domain.models.BatteryState.Full', tmp_4, tmp$ret$8);
    var tmp_6 = NotCharging_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$11 = [];
    var tmp_7 = ObjectSerializer_init_$Create$('eco.emergi.embit.domain.models.BatteryState.NotCharging', tmp_6, tmp$ret$11);
    var tmp_8 = Unknown_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$14 = [];
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_9 = [tmp_1, tmp_3, tmp_5, tmp_7, ObjectSerializer_init_$Create$('eco.emergi.embit.domain.models.BatteryState.Unknown', tmp_8, tmp$ret$14)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$20 = [];
    return SealedClassSerializer_init_$Create$('eco.emergi.embit.domain.models.BatteryState', tmp, tmp_0, tmp_9, tmp$ret$20);
  }
  function Charging(chargingType) {
    Companion_getInstance_5();
    BatteryState.call(this);
    this.j1f_1 = chargingType;
  }
  protoOf(Charging).toString = function () {
    return 'Charging(chargingType=' + this.j1f_1.toString() + ')';
  };
  protoOf(Charging).hashCode = function () {
    return this.j1f_1.hashCode();
  };
  protoOf(Charging).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Charging))
      return false;
    var tmp0_other_with_cast = other instanceof Charging ? other : THROW_CCE();
    if (!this.j1f_1.equals(tmp0_other_with_cast.j1f_1))
      return false;
    return true;
  };
  function Discharging() {
    Discharging_instance = this;
    BatteryState.call(this);
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.u1h_1 = lazy(tmp_0, BatteryState$Discharging$_anonymous__gf8foo);
  }
  protoOf(Discharging).toString = function () {
    return 'Discharging';
  };
  protoOf(Discharging).hashCode = function () {
    return -44505902;
  };
  protoOf(Discharging).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Discharging))
      return false;
    other instanceof Discharging || THROW_CCE();
    return true;
  };
  var Discharging_instance;
  function Discharging_getInstance() {
    if (Discharging_instance == null)
      new Discharging();
    return Discharging_instance;
  }
  function Full() {
    Full_instance = this;
    BatteryState.call(this);
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.v1h_1 = lazy(tmp_0, BatteryState$Full$_anonymous__bohivc);
  }
  protoOf(Full).toString = function () {
    return 'Full';
  };
  protoOf(Full).hashCode = function () {
    return 245042716;
  };
  protoOf(Full).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Full))
      return false;
    other instanceof Full || THROW_CCE();
    return true;
  };
  var Full_instance;
  function Full_getInstance() {
    if (Full_instance == null)
      new Full();
    return Full_instance;
  }
  function NotCharging() {
    NotCharging_instance = this;
    BatteryState.call(this);
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.w1h_1 = lazy(tmp_0, BatteryState$NotCharging$_anonymous__qt7gwd);
  }
  protoOf(NotCharging).toString = function () {
    return 'NotCharging';
  };
  protoOf(NotCharging).hashCode = function () {
    return 538925623;
  };
  protoOf(NotCharging).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NotCharging))
      return false;
    other instanceof NotCharging || THROW_CCE();
    return true;
  };
  var NotCharging_instance;
  function NotCharging_getInstance() {
    if (NotCharging_instance == null)
      new NotCharging();
    return NotCharging_instance;
  }
  function Unknown() {
    Unknown_instance = this;
    BatteryState.call(this);
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.x1h_1 = lazy(tmp_0, BatteryState$Unknown$_anonymous__dnuv9p);
  }
  protoOf(Unknown).toString = function () {
    return 'Unknown';
  };
  protoOf(Unknown).hashCode = function () {
    return -1150355043;
  };
  protoOf(Unknown).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Unknown))
      return false;
    other instanceof Unknown || THROW_CCE();
    return true;
  };
  var Unknown_instance;
  function Unknown_getInstance() {
    if (Unknown_instance == null)
      new Unknown();
    return Unknown_instance;
  }
  function Companion_2() {
    Companion_instance_3 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.o1h_1 = lazy(tmp_0, BatteryState$Companion$_anonymous__639n9n);
  }
  protoOf(Companion_2).p1h = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  var Companion_instance_3;
  function Companion_getInstance_6() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function BatteryState() {
    Companion_getInstance_6();
  }
  function _get_$cachedSerializer__te6jhj_0($this) {
    return $this.r1h_1.k1();
  }
  function ChargingType$Companion$_anonymous__gccscc() {
    return createSimpleEnumSerializer('eco.emergi.embit.domain.models.ChargingType', values());
  }
  var ChargingType_AC_instance;
  var ChargingType_USB_instance;
  var ChargingType_WIRELESS_instance;
  var ChargingType_UNKNOWN_instance;
  function values() {
    return [ChargingType_AC_getInstance(), ChargingType_USB_getInstance(), ChargingType_WIRELESS_getInstance(), ChargingType_UNKNOWN_getInstance()];
  }
  function Companion_3() {
    Companion_instance_4 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.r1h_1 = lazy(tmp_0, ChargingType$Companion$_anonymous__gccscc);
  }
  protoOf(Companion_3).p1h = function () {
    return _get_$cachedSerializer__te6jhj_0(this);
  };
  var Companion_instance_4;
  function Companion_getInstance_7() {
    ChargingType_initEntries();
    if (Companion_instance_4 == null)
      new Companion_3();
    return Companion_instance_4;
  }
  var ChargingType_entriesInitialized;
  function ChargingType_initEntries() {
    if (ChargingType_entriesInitialized)
      return Unit_instance;
    ChargingType_entriesInitialized = true;
    ChargingType_AC_instance = new ChargingType('AC', 0);
    ChargingType_USB_instance = new ChargingType('USB', 1);
    ChargingType_WIRELESS_instance = new ChargingType('WIRELESS', 2);
    ChargingType_UNKNOWN_instance = new ChargingType('UNKNOWN', 3);
    Companion_getInstance_7();
  }
  function ChargingType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ChargingType_AC_getInstance() {
    ChargingType_initEntries();
    return ChargingType_AC_instance;
  }
  function ChargingType_USB_getInstance() {
    ChargingType_initEntries();
    return ChargingType_USB_instance;
  }
  function ChargingType_WIRELESS_getInstance() {
    ChargingType_initEntries();
    return ChargingType_WIRELESS_instance;
  }
  function ChargingType_UNKNOWN_getInstance() {
    ChargingType_initEntries();
    return ChargingType_UNKNOWN_instance;
  }
  function Companion_4() {
  }
  var Companion_instance_5;
  function Companion_getInstance_8() {
    return Companion_instance_5;
  }
  function BatteryStatistics(periodStart, periodEnd, averagePowerMilliwatts, peakPowerMilliwatts, totalEnergyMilliwattHours, averageTemperature, chargingTimeSeconds, dischargingTimeSeconds, chargeCount, averageBatteryPercentage) {
    averageTemperature = averageTemperature === VOID ? null : averageTemperature;
    this.y1h_1 = periodStart;
    this.z1h_1 = periodEnd;
    this.a1i_1 = averagePowerMilliwatts;
    this.b1i_1 = peakPowerMilliwatts;
    this.c1i_1 = totalEnergyMilliwattHours;
    this.d1i_1 = averageTemperature;
    this.e1i_1 = chargingTimeSeconds;
    this.f1i_1 = dischargingTimeSeconds;
    this.g1i_1 = chargeCount;
    this.h1i_1 = averageBatteryPercentage;
  }
  protoOf(BatteryStatistics).i1i = function () {
    return this.e1i_1.y1(this.f1i_1);
  };
  protoOf(BatteryStatistics).j1i = function () {
    var tmp;
    if (this.i1i().v(new Long(0, 0)) > 0) {
      tmp = this.e1i_1.o2() / this.i1i().o2() * 100.0;
    } else {
      tmp = 0.0;
    }
    return tmp;
  };
  protoOf(BatteryStatistics).k1i = function () {
    return this.a1i_1 / 1000.0;
  };
  protoOf(BatteryStatistics).l1i = function () {
    return this.c1i_1 / 1000.0;
  };
  protoOf(BatteryStatistics).toString = function () {
    return 'BatteryStatistics(periodStart=' + this.y1h_1.toString() + ', periodEnd=' + this.z1h_1.toString() + ', averagePowerMilliwatts=' + this.a1i_1 + ', peakPowerMilliwatts=' + this.b1i_1 + ', totalEnergyMilliwattHours=' + this.c1i_1 + ', averageTemperature=' + this.d1i_1 + ', chargingTimeSeconds=' + this.e1i_1.toString() + ', dischargingTimeSeconds=' + this.f1i_1.toString() + ', chargeCount=' + this.g1i_1 + ', averageBatteryPercentage=' + this.h1i_1 + ')';
  };
  protoOf(BatteryStatistics).hashCode = function () {
    var result = this.y1h_1.hashCode();
    result = imul(result, 31) + this.z1h_1.hashCode() | 0;
    result = imul(result, 31) + getNumberHashCode(this.a1i_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.b1i_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.c1i_1) | 0;
    result = imul(result, 31) + (this.d1i_1 == null ? 0 : getNumberHashCode(this.d1i_1)) | 0;
    result = imul(result, 31) + this.e1i_1.hashCode() | 0;
    result = imul(result, 31) + this.f1i_1.hashCode() | 0;
    result = imul(result, 31) + this.g1i_1 | 0;
    result = imul(result, 31) + this.h1i_1 | 0;
    return result;
  };
  protoOf(BatteryStatistics).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BatteryStatistics))
      return false;
    var tmp0_other_with_cast = other instanceof BatteryStatistics ? other : THROW_CCE();
    if (!this.y1h_1.equals(tmp0_other_with_cast.y1h_1))
      return false;
    if (!this.z1h_1.equals(tmp0_other_with_cast.z1h_1))
      return false;
    if (!equals(this.a1i_1, tmp0_other_with_cast.a1i_1))
      return false;
    if (!equals(this.b1i_1, tmp0_other_with_cast.b1i_1))
      return false;
    if (!equals(this.c1i_1, tmp0_other_with_cast.c1i_1))
      return false;
    if (!equals(this.d1i_1, tmp0_other_with_cast.d1i_1))
      return false;
    if (!this.e1i_1.equals(tmp0_other_with_cast.e1i_1))
      return false;
    if (!this.f1i_1.equals(tmp0_other_with_cast.f1i_1))
      return false;
    if (!(this.g1i_1 === tmp0_other_with_cast.g1i_1))
      return false;
    if (!(this.h1i_1 === tmp0_other_with_cast.h1i_1))
      return false;
    return true;
  };
  function TimePeriod$Companion$_anonymous__bb8a3l() {
    return createSimpleEnumSerializer('eco.emergi.embit.domain.models.TimePeriod', values_0());
  }
  var TimePeriod_HOUR_instance;
  var TimePeriod_DAY_instance;
  var TimePeriod_WEEK_instance;
  var TimePeriod_MONTH_instance;
  var TimePeriod_YEAR_instance;
  var TimePeriod_ALL_TIME_instance;
  var TimePeriod_CUSTOM_instance;
  function values_0() {
    return [TimePeriod_HOUR_getInstance(), TimePeriod_DAY_getInstance(), TimePeriod_WEEK_getInstance(), TimePeriod_MONTH_getInstance(), TimePeriod_YEAR_getInstance(), TimePeriod_ALL_TIME_getInstance(), TimePeriod_CUSTOM_getInstance()];
  }
  function Companion_5() {
    Companion_instance_6 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.m1i_1 = lazy(tmp_0, TimePeriod$Companion$_anonymous__bb8a3l);
  }
  var Companion_instance_6;
  function Companion_getInstance_9() {
    TimePeriod_initEntries();
    if (Companion_instance_6 == null)
      new Companion_5();
    return Companion_instance_6;
  }
  var TimePeriod_entriesInitialized;
  function TimePeriod_initEntries() {
    if (TimePeriod_entriesInitialized)
      return Unit_instance;
    TimePeriod_entriesInitialized = true;
    TimePeriod_HOUR_instance = new TimePeriod('HOUR', 0);
    TimePeriod_DAY_instance = new TimePeriod('DAY', 1);
    TimePeriod_WEEK_instance = new TimePeriod('WEEK', 2);
    TimePeriod_MONTH_instance = new TimePeriod('MONTH', 3);
    TimePeriod_YEAR_instance = new TimePeriod('YEAR', 4);
    TimePeriod_ALL_TIME_instance = new TimePeriod('ALL_TIME', 5);
    TimePeriod_CUSTOM_instance = new TimePeriod('CUSTOM', 6);
    Companion_getInstance_9();
  }
  function TimePeriod(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function TimePeriod_HOUR_getInstance() {
    TimePeriod_initEntries();
    return TimePeriod_HOUR_instance;
  }
  function TimePeriod_DAY_getInstance() {
    TimePeriod_initEntries();
    return TimePeriod_DAY_instance;
  }
  function TimePeriod_WEEK_getInstance() {
    TimePeriod_initEntries();
    return TimePeriod_WEEK_instance;
  }
  function TimePeriod_MONTH_getInstance() {
    TimePeriod_initEntries();
    return TimePeriod_MONTH_instance;
  }
  function TimePeriod_YEAR_getInstance() {
    TimePeriod_initEntries();
    return TimePeriod_YEAR_instance;
  }
  function TimePeriod_ALL_TIME_getInstance() {
    TimePeriod_initEntries();
    return TimePeriod_ALL_TIME_instance;
  }
  function TimePeriod_CUSTOM_getInstance() {
    TimePeriod_initEntries();
    return TimePeriod_CUSTOM_instance;
  }
  function IBatteryMonitorService() {
  }
  function IBatteryRepository() {
  }
  function calculateHealthScore($this, stats) {
    var score = 100;
    var tmp0_safe_receiver = stats.d1i_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      score = score - (tmp0_safe_receiver > 45.0 ? 30 : tmp0_safe_receiver > 40.0 ? 20 : tmp0_safe_receiver > 35.0 ? 10 : tmp0_safe_receiver > 30.0 ? 5 : tmp0_safe_receiver < 10.0 ? 10 : 0) | 0;
    }
    var avgChargesPerDay = stats.g1i_1 / 30.0;
    score = score - (avgChargesPerDay > 4 ? 30 : avgChargesPerDay > 3 ? 20 : avgChargesPerDay > 2 ? 10 : avgChargesPerDay < 0.3 ? 5 : 0) | 0;
    if (stats.a1i_1 > 5000) {
      score = score - 20 | 0;
    } else if (stats.a1i_1 > 3000) {
      score = score - 10 | 0;
    }
    var chargingRatio = stats.j1i();
    if (chargingRatio > 80.0) {
      score = score - 20 | 0;
    } else if (chargingRatio > 60.0) {
      score = score - 10 | 0;
    }
    return coerceIn(score, 0, 100);
  }
  function calculateTemperatureScore($this, stats) {
    var tmp0_safe_receiver = stats.d1i_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return (15.0 <= tmp0_safe_receiver ? tmp0_safe_receiver <= 30.0 : false) ? 100 : (30.0 <= tmp0_safe_receiver ? tmp0_safe_receiver <= 35.0 : false) ? 85 : (35.0 <= tmp0_safe_receiver ? tmp0_safe_receiver <= 40.0 : false) ? 70 : (40.0 <= tmp0_safe_receiver ? tmp0_safe_receiver <= 45.0 : false) ? 50 : tmp0_safe_receiver > 45.0 ? 25 : tmp0_safe_receiver < 10.0 ? 60 : 80;
    }
    return 80;
  }
  function calculateChargingPatternsScore($this, stats) {
    var avgChargesPerDay = stats.g1i_1 / 30.0;
    return (0.8 <= avgChargesPerDay ? avgChargesPerDay <= 1.5 : false) ? 100 : (1.5 <= avgChargesPerDay ? avgChargesPerDay <= 2.0 : false) ? 90 : (0.5 <= avgChargesPerDay ? avgChargesPerDay <= 0.8 : false) ? 85 : (2.0 <= avgChargesPerDay ? avgChargesPerDay <= 3.0 : false) ? 75 : avgChargesPerDay > 3.0 ? 50 : 70;
  }
  function calculateUsageScore($this, stats) {
    var avgPower = stats.a1i_1;
    return avgPower < 1000 ? 100 : avgPower < 2000 ? 90 : avgPower < 3000 ? 80 : avgPower < 4000 ? 70 : avgPower < 5000 ? 60 : 50;
  }
  function estimateDegradationRate($this, stats) {
    var cyclesPerDay = stats.g1i_1 / 30.0;
    var yearlyChargeCycles = cyclesPerDay * 365;
    var baseRate = yearlyChargeCycles / 500.0 * 20.0;
    var tmp0_safe_receiver = stats.d1i_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tempMultiplier = tmp0_safe_receiver > 40.0 ? 1.5 : tmp0_safe_receiver > 35.0 ? 1.2 : tmp0_safe_receiver < 15.0 ? 1.3 : 1.0;
      baseRate = baseRate * tempMultiplier;
    }
    return coerceIn_0(baseRate, 5.0, 50.0);
  }
  function estimateLifetimeRemaining($this, degradationRate) {
    var yearsTo80Percent = 20.0 / degradationRate;
    return coerceIn(numberToInt(yearsTo80Percent), 1, 10);
  }
  function generateAdvancedRecommendations($this, stats, healthScore) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var recommendations = ArrayList_init_$Create$_0();
    var tmp0_safe_receiver = stats.d1i_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (tmp0_safe_receiver > 40.0) {
        recommendations.d('\u26A0\uFE0F High Temperature: Avoid using device while charging. Remove case. Keep in cooler environment.');
      } else if (tmp0_safe_receiver > 35.0) {
        recommendations.d('Temperature elevated: Reduce intensive usage while charging.');
      } else if (tmp0_safe_receiver < 15.0) {
        recommendations.d('Low Temperature: Battery performance reduced in cold. Keep device warmer if possible.');
      }
    }
    var avgChargesPerDay = stats.g1i_1 / 30.0;
    if (avgChargesPerDay > 3) {
      recommendations.d('\uD83D\uDD0C Reduce charging frequency: Try to charge only once per day. Let battery drain to 20-30% before charging.');
    } else if (avgChargesPerDay < 0.5) {
      recommendations.d('\u26A1 Charge more regularly: Letting battery fully drain frequently can reduce lifespan.');
    } else if (stats.j1i() > 80.0) {
      recommendations.d('\uD83D\uDD0B Reduce charging time: Unplug when charged. Keeping device plugged in constantly degrades battery.');
    }
    if (stats.a1i_1 > 3000) {
      recommendations.d('\uD83D\uDCCA High power usage detected: Close background apps, reduce screen brightness, disable unused features.');
    }
    if (healthScore >= 90)
      recommendations.d('\u2705 Excellent battery health! Keep up current usage patterns.');
    else if (healthScore >= 80)
      recommendations.d('\uD83D\uDC4D Good battery health. Minor improvements recommended.');
    else if (healthScore >= 70)
      recommendations.d('\u26A0\uFE0F Battery health declining. Follow recommendations to improve.');
    else
      recommendations.d('\u274C Poor battery health. Consider battery replacement or aggressive optimization.');
    return recommendations;
  }
  function generatePredictions($this, stats, degradationRate) {
    var avgDischargingPower = stats.a1i_1;
    var estimatedCapacityWh = 13.0;
    var currentPercentage = stats.h1i_1 / 100.0;
    var remainingCapacityWh = estimatedCapacityWh * currentPercentage;
    var tmp;
    if (avgDischargingPower > 0) {
      tmp = remainingCapacityWh / (avgDischargingPower / 1000.0) * stats.f1i_1.p2() / stats.i1i().p2();
    } else {
      tmp = 8.0;
    }
    var hoursRemaining = tmp;
    var yearsUntilReplacement = 20.0 / degradationRate;
    return new BatteryPredictions(hoursRemaining, 2.5, 100.0 - degradationRate / 2.0, 100.0 - degradationRate, coerceIn(numberToInt(yearsUntilReplacement), 1, 10));
  }
  function $invokeCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w1i_1 = _this__u8e3s4;
  }
  protoOf($invokeCOROUTINE$2).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        switch (tmp) {
          case 0:
            this.g8_1 = 3;
            this.x1i_1 = System_instance.n17();
            var tmp_0 = this;
            Companion_getInstance_2();
            tmp_0.y1i_1 = this.x1i_1.a18(toDuration(30, DurationUnit_DAYS_getInstance()));
            this.f8_1 = 1;
            suspendResult = this.w1i_1.z1i_1.l1h(this.y1i_1, this.x1i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.f8_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mf_1;
            suspendResult = new Result(unboxed);
            this.f8_1 = 2;
            continue $sm;
          case 2:
            var this_0 = suspendResult.mf_1;
            var tmp_1;
            if (_Result___get_isFailure__impl__jpiriv(this_0)) {
              tmp_1 = null;
            } else {
              var tmp_2 = _Result___get_value__impl__bjfvqg(this_0);
              tmp_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
            }

            var tmp0_elvis_lhs = tmp_1;
            var tmp_3;
            if (tmp0_elvis_lhs == null) {
              var exception = Exception_init_$Create$('Insufficient data for analysis');
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception)));
            } else {
              tmp_3 = tmp0_elvis_lhs;
            }

            var stats = tmp_3;
            var healthScore = calculateHealthScore(this.w1i_1, stats);
            var degradationRate = estimateDegradationRate(this.w1i_1, stats);
            var recommendations = generateAdvancedRecommendations(this.w1i_1, stats, healthScore);
            var predictions = generatePredictions(this.w1i_1, stats, degradationRate);
            var analysis = new BatteryHealthAnalysis(this.x1i_1, healthScore, calculateTemperatureScore(this.w1i_1, stats), calculateChargingPatternsScore(this.w1i_1, stats), calculateUsageScore(this.w1i_1, stats), degradationRate, estimateLifetimeRemaining(this.w1i_1, degradationRate), recommendations, predictions);
            return new Result(_Result___init__impl__xyqfz8(analysis));
          case 3:
            throw this.i8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.g8_1 === 3) {
          throw e;
        } else {
          this.f8_1 = this.g8_1;
          this.i8_1 = e;
        }
      }
     while (true);
  };
  function AnalyzeBatteryHealthUseCase(repository) {
    this.z1i_1 = repository;
  }
  protoOf(AnalyzeBatteryHealthUseCase).a1j = function ($completion) {
    var tmp = new $invokeCOROUTINE$2(this, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    var tmp_0 = tmp.n8();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  function BatteryHealthAnalysis(timestamp, overallScore, temperatureScore, chargingPatternsScore, usageScore, degradationRate, estimatedLifetimeRemaining, recommendations, predictions) {
    this.b1j_1 = timestamp;
    this.c1j_1 = overallScore;
    this.d1j_1 = temperatureScore;
    this.e1j_1 = chargingPatternsScore;
    this.f1j_1 = usageScore;
    this.g1j_1 = degradationRate;
    this.h1j_1 = estimatedLifetimeRemaining;
    this.i1j_1 = recommendations;
    this.j1j_1 = predictions;
  }
  protoOf(BatteryHealthAnalysis).toString = function () {
    return 'BatteryHealthAnalysis(timestamp=' + this.b1j_1.toString() + ', overallScore=' + this.c1j_1 + ', temperatureScore=' + this.d1j_1 + ', chargingPatternsScore=' + this.e1j_1 + ', usageScore=' + this.f1j_1 + ', degradationRate=' + this.g1j_1 + ', estimatedLifetimeRemaining=' + this.h1j_1 + ', recommendations=' + toString_0(this.i1j_1) + ', predictions=' + this.j1j_1.toString() + ')';
  };
  protoOf(BatteryHealthAnalysis).hashCode = function () {
    var result = this.b1j_1.hashCode();
    result = imul(result, 31) + this.c1j_1 | 0;
    result = imul(result, 31) + this.d1j_1 | 0;
    result = imul(result, 31) + this.e1j_1 | 0;
    result = imul(result, 31) + this.f1j_1 | 0;
    result = imul(result, 31) + getNumberHashCode(this.g1j_1) | 0;
    result = imul(result, 31) + this.h1j_1 | 0;
    result = imul(result, 31) + hashCode(this.i1j_1) | 0;
    result = imul(result, 31) + this.j1j_1.hashCode() | 0;
    return result;
  };
  protoOf(BatteryHealthAnalysis).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BatteryHealthAnalysis))
      return false;
    var tmp0_other_with_cast = other instanceof BatteryHealthAnalysis ? other : THROW_CCE();
    if (!this.b1j_1.equals(tmp0_other_with_cast.b1j_1))
      return false;
    if (!(this.c1j_1 === tmp0_other_with_cast.c1j_1))
      return false;
    if (!(this.d1j_1 === tmp0_other_with_cast.d1j_1))
      return false;
    if (!(this.e1j_1 === tmp0_other_with_cast.e1j_1))
      return false;
    if (!(this.f1j_1 === tmp0_other_with_cast.f1j_1))
      return false;
    if (!equals(this.g1j_1, tmp0_other_with_cast.g1j_1))
      return false;
    if (!(this.h1j_1 === tmp0_other_with_cast.h1j_1))
      return false;
    if (!equals(this.i1j_1, tmp0_other_with_cast.i1j_1))
      return false;
    if (!this.j1j_1.equals(tmp0_other_with_cast.j1j_1))
      return false;
    return true;
  };
  function BatteryPredictions(estimatedTimeRemaining, predictedFullChargeTime, capacityIn6Months, capacityIn1Year, yearsUntilReplacement) {
    this.k1j_1 = estimatedTimeRemaining;
    this.l1j_1 = predictedFullChargeTime;
    this.m1j_1 = capacityIn6Months;
    this.n1j_1 = capacityIn1Year;
    this.o1j_1 = yearsUntilReplacement;
  }
  protoOf(BatteryPredictions).toString = function () {
    return 'BatteryPredictions(estimatedTimeRemaining=' + this.k1j_1 + ', predictedFullChargeTime=' + this.l1j_1 + ', capacityIn6Months=' + this.m1j_1 + ', capacityIn1Year=' + this.n1j_1 + ', yearsUntilReplacement=' + this.o1j_1 + ')';
  };
  protoOf(BatteryPredictions).hashCode = function () {
    var result = getNumberHashCode(this.k1j_1);
    result = imul(result, 31) + getNumberHashCode(this.l1j_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.m1j_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.n1j_1) | 0;
    result = imul(result, 31) + this.o1j_1 | 0;
    return result;
  };
  protoOf(BatteryPredictions).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BatteryPredictions))
      return false;
    var tmp0_other_with_cast = other instanceof BatteryPredictions ? other : THROW_CCE();
    if (!equals(this.k1j_1, tmp0_other_with_cast.k1j_1))
      return false;
    if (!equals(this.l1j_1, tmp0_other_with_cast.l1j_1))
      return false;
    if (!equals(this.m1j_1, tmp0_other_with_cast.m1j_1))
      return false;
    if (!equals(this.n1j_1, tmp0_other_with_cast.n1j_1))
      return false;
    if (!(this.o1j_1 === tmp0_other_with_cast.o1j_1))
      return false;
    return true;
  };
  function getTimeRange($this, period, customStart, customEnd) {
    var now = System_instance.n17();
    var tmp;
    switch (period.r1_1) {
      case 0:
        // Inline function 'kotlin.time.Companion.hours' call

        Companion_getInstance_2();
        var tmp$ret$0 = toDuration(1, DurationUnit_HOURS_getInstance());
        tmp = new Pair(now.a18(tmp$ret$0), now);
        break;
      case 1:
        // Inline function 'kotlin.time.Companion.days' call

        Companion_getInstance_2();
        var tmp$ret$1 = toDuration(1, DurationUnit_DAYS_getInstance());
        tmp = new Pair(now.a18(tmp$ret$1), now);
        break;
      case 2:
        // Inline function 'kotlin.time.Companion.days' call

        Companion_getInstance_2();
        var tmp$ret$2 = toDuration(7, DurationUnit_DAYS_getInstance());
        tmp = new Pair(now.a18(tmp$ret$2), now);
        break;
      case 3:
        // Inline function 'kotlin.time.Companion.days' call

        Companion_getInstance_2();
        var tmp$ret$3 = toDuration(30, DurationUnit_DAYS_getInstance());
        tmp = new Pair(now.a18(tmp$ret$3), now);
        break;
      case 4:
        // Inline function 'kotlin.time.Companion.days' call

        Companion_getInstance_2();
        var tmp$ret$4 = toDuration(365, DurationUnit_DAYS_getInstance());
        tmp = new Pair(now.a18(tmp$ret$4), now);
        break;
      case 5:
        tmp = new Pair(Companion_getInstance_0().o17_1, now);
        break;
      case 6:
        // Inline function 'kotlin.require' call

        // Inline function 'kotlin.contracts.contract' call

        if (!(!(customStart == null) && !(customEnd == null))) {
          // Inline function 'eco.emergi.embit.domain.usecases.CalculateBatteryStatisticsUseCase.getTimeRange.<anonymous>' call
          var message = 'Custom time period requires both start and end times';
          throw IllegalArgumentException_init_$Create$(toString_0(message));
        }

        tmp = new Pair(customStart, customEnd);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function CalculateBatteryStatisticsUseCase(repository) {
    this.p1j_1 = repository;
  }
  protoOf(CalculateBatteryStatisticsUseCase).q1j = function (period, customStart, customEnd, $completion) {
    var _destruct__k2r9zo = getTimeRange(this, period, customStart, customEnd);
    var start = _destruct__k2r9zo.gd();
    var end = _destruct__k2r9zo.hd();
    var tmp = this.p1j_1.l1h(start, end, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  };
  protoOf(CalculateBatteryStatisticsUseCase).r1j = function (period, customStart, customEnd, $completion, $super) {
    customStart = customStart === VOID ? null : customStart;
    customEnd = customEnd === VOID ? null : customEnd;
    return $super === VOID ? this.q1j(period, customStart, customEnd, $completion) : $super.q1j.call(this, period, customStart, customEnd, $completion);
  };
  function GenerateChargingRecommendationsUseCase(repository) {
    this.s1j_1 = repository;
  }
  function getTimeRange_0($this, period, customStart, customEnd) {
    var now = System_instance.n17();
    var tmp;
    switch (period.r1_1) {
      case 0:
        // Inline function 'kotlin.time.Companion.hours' call

        Companion_getInstance_2();
        var tmp$ret$0 = toDuration(1, DurationUnit_HOURS_getInstance());
        var start = now.a18(tmp$ret$0);
        tmp = new Pair(start, now);
        break;
      case 1:
        // Inline function 'kotlin.time.Companion.days' call

        Companion_getInstance_2();
        var tmp$ret$1 = toDuration(1, DurationUnit_DAYS_getInstance());
        var start_0 = now.a18(tmp$ret$1);
        tmp = new Pair(start_0, now);
        break;
      case 2:
        // Inline function 'kotlin.time.Companion.days' call

        Companion_getInstance_2();
        var tmp$ret$2 = toDuration(7, DurationUnit_DAYS_getInstance());
        var start_1 = now.a18(tmp$ret$2);
        tmp = new Pair(start_1, now);
        break;
      case 3:
        // Inline function 'kotlin.time.Companion.days' call

        Companion_getInstance_2();
        var tmp$ret$3 = toDuration(30, DurationUnit_DAYS_getInstance());
        var start_2 = now.a18(tmp$ret$3);
        tmp = new Pair(start_2, now);
        break;
      case 4:
        // Inline function 'kotlin.time.Companion.days' call

        Companion_getInstance_2();
        var tmp$ret$4 = toDuration(365, DurationUnit_DAYS_getInstance());
        var start_3 = now.a18(tmp$ret$4);
        tmp = new Pair(start_3, now);
        break;
      case 5:
        var start_4 = Companion_getInstance_0().o17_1;
        tmp = new Pair(start_4, now);
        break;
      case 6:
        // Inline function 'kotlin.require' call

        // Inline function 'kotlin.contracts.contract' call

        if (!(!(customStart == null) && !(customEnd == null))) {
          // Inline function 'eco.emergi.embit.domain.usecases.GetBatteryHistoryUseCase.getTimeRange.<anonymous>' call
          var message = 'Custom time period requires both start and end times';
          throw IllegalArgumentException_init_$Create$(toString_0(message));
        }

        tmp = new Pair(customStart, customEnd);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function GetBatteryHistoryUseCase(repository) {
    this.t1j_1 = repository;
  }
  protoOf(GetBatteryHistoryUseCase).u1j = function (period, customStart, customEnd, $completion) {
    var _destruct__k2r9zo = getTimeRange_0(this, period, customStart, customEnd);
    var start = _destruct__k2r9zo.gd();
    var end = _destruct__k2r9zo.hd();
    var tmp = this.t1j_1.k1h(start, end, VOID, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  };
  protoOf(GetBatteryHistoryUseCase).v1j = function (period, customStart, customEnd, $completion, $super) {
    customStart = customStart === VOID ? null : customStart;
    customEnd = customEnd === VOID ? null : customEnd;
    return $super === VOID ? this.u1j(period, customStart, customEnd, $completion) : $super.u1j.call(this, period, customStart, customEnd, $completion);
  };
  function ManageBatteryDataUseCase(repository) {
    this.w1j_1 = repository;
  }
  function MonitorBatteryUseCase$invoke$slambda(this$0, resultContinuation) {
    this.f1k_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MonitorBatteryUseCase$invoke$slambda).h1k = function (reading, $completion) {
    var tmp = this.i1k(reading, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(MonitorBatteryUseCase$invoke$slambda).b9 = function (p1, $completion) {
    return this.h1k(p1 instanceof BatteryReading_0 ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MonitorBatteryUseCase$invoke$slambda).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        switch (tmp) {
          case 0:
            this.g8_1 = 3;
            this.f8_1 = 1;
            suspendResult = this.f1k_1.k1k_1.i1h(this.g1k_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.f8_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mf_1;
            suspendResult = new Result(unboxed);
            this.f8_1 = 2;
            continue $sm;
          case 2:
            var this_0 = suspendResult.mf_1;
            var tmp0_safe_receiver = Result__exceptionOrNull_impl_p6xea9(this_0);
            if (tmp0_safe_receiver == null)
              null;
            else {
              println('Error storing battery reading: ' + tmp0_safe_receiver.message);
            }

            return Unit_instance;
          case 3:
            throw this.i8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.g8_1 === 3) {
          throw e;
        } else {
          this.f8_1 = this.g8_1;
          this.i8_1 = e;
        }
      }
     while (true);
  };
  protoOf(MonitorBatteryUseCase$invoke$slambda).i1k = function (reading, completion) {
    var i = new MonitorBatteryUseCase$invoke$slambda(this.f1k_1, completion);
    i.g1k_1 = reading;
    return i;
  };
  function MonitorBatteryUseCase$invoke$slambda_0(this$0, resultContinuation) {
    var i = new MonitorBatteryUseCase$invoke$slambda(this$0, resultContinuation);
    var l = function (reading, $completion) {
      return i.h1k(reading, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MonitorBatteryUseCase$invoke$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MonitorBatteryUseCase$invoke$slambda_1).v1k = function ($this$catch, error, $completion) {
    var tmp = this.w1k($this$catch, error, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(MonitorBatteryUseCase$invoke$slambda_1).x1k = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.v1k(tmp, p2 instanceof Error ? p2 : THROW_CCE(), $completion);
  };
  protoOf(MonitorBatteryUseCase$invoke$slambda_1).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        if (tmp === 0) {
          this.g8_1 = 1;
          println('Battery monitoring error: ' + this.u1k_1.message);
          throw this.u1k_1;
        } else if (tmp === 1) {
          throw this.i8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(MonitorBatteryUseCase$invoke$slambda_1).w1k = function ($this$catch, error, completion) {
    var i = new MonitorBatteryUseCase$invoke$slambda_1(completion);
    i.t1k_1 = $this$catch;
    i.u1k_1 = error;
    return i;
  };
  function MonitorBatteryUseCase$invoke$slambda_2(resultContinuation) {
    var i = new MonitorBatteryUseCase$invoke$slambda_1(resultContinuation);
    var l = function ($this$catch, error, $completion) {
      return i.v1k($this$catch, error, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function MonitorBatteryUseCase(monitorService, repository) {
    this.j1k_1 = monitorService;
    this.k1k_1 = repository;
  }
  protoOf(MonitorBatteryUseCase).y1k = function () {
    var tmp = this.j1k_1.n1i();
    var tmp_0 = onEach(tmp, MonitorBatteryUseCase$invoke$slambda_0(this, null));
    return catch_0(tmp_0, MonitorBatteryUseCase$invoke$slambda_2(null));
  };
  function PredictBatteryLifeUseCase(repository) {
    this.z1k_1 = repository;
  }
  function createWorker($this) {
    // Inline function 'kotlin.js.unsafeCast' call
    return new Worker(URL.createObjectURL(new Blob(['self.postMessage("ready");'], {type: 'application/javascript'})));
  }
  function DatabaseDriverFactory() {
  }
  protoOf(DatabaseDriverFactory).m1h = function () {
    var worker = createWorker(this);
    // Inline function 'kotlin.also' call
    var this_0 = new WebWorkerDriver(worker);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'eco.emergi.embit.data.local.DatabaseDriverFactory.createDriver.<anonymous>' call
    Companion_instance_0.q1e().g1f(this_0);
    return this_0;
  };
  function platformModule() {
    return module_0(VOID, platformModule$lambda);
  }
  function platformModule$lambda($this$module) {
    // Inline function 'org.koin.core.module.Module.single' call
    // Inline function 'org.koin.core.module._singleInstanceFactory' call
    var definition = platformModule$lambda$lambda;
    var scopeQualifier = Companion_getInstance_1().o1a_1;
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind = Kind_Singleton_getInstance();
    var secondaryTypes = emptyList();
    var def = new BeanDefinition(scopeQualifier, getKClass(DatabaseDriverFactory), null, definition, kind, secondaryTypes);
    var factory = new SingleInstanceFactory(def);
    $this$module.u1b(factory);
    if (false || $this$module.o1b_1) {
      $this$module.w1b(factory);
    }
    new KoinDefinition($this$module, factory);
    // Inline function 'org.koin.core.module.Module.single' call
    // Inline function 'org.koin.core.module._singleInstanceFactory' call
    var definition_0 = platformModule$lambda$lambda_0;
    var scopeQualifier_0 = Companion_getInstance_1().o1a_1;
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind_0 = Kind_Singleton_getInstance();
    var secondaryTypes_0 = emptyList();
    var def_0 = new BeanDefinition(scopeQualifier_0, getKClass(BatteryMonitorServiceFactory), null, definition_0, kind_0, secondaryTypes_0);
    var factory_0 = new SingleInstanceFactory(def_0);
    $this$module.u1b(factory_0);
    if (false || $this$module.o1b_1) {
      $this$module.w1b(factory_0);
    }
    new KoinDefinition($this$module, factory_0);
    return Unit_instance;
  }
  function platformModule$lambda$lambda($this$single, it) {
    return new DatabaseDriverFactory();
  }
  function platformModule$lambda$lambda_0($this$single, it) {
    return new BatteryMonitorServiceFactory();
  }
  function BatteryMonitorServiceFactory() {
  }
  protoOf(BatteryMonitorServiceFactory).n1h = function () {
    return new JsBatteryMonitorService();
  };
  function getBatteryManager($this, $completion) {
    var promise = navigator.getBattery();
    return await_0(promise, $completion);
  }
  function createBatteryReading($this, battery) {
    var tmp = battery.level;
    var level = ((!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE()) * 100;
    var tmp_0 = battery.charging;
    var charging = (!(tmp_0 == null) ? typeof tmp_0 === 'boolean' : false) ? tmp_0 : THROW_CCE();
    var voltage = estimateVoltage($this, numberToInt(level));
    var amperage = charging ? new Long(1000000, 0) : new Long(-1000000, -1);
    var state = charging && level >= 99.0 ? Full_getInstance() : charging ? new Charging(ChargingType_UNKNOWN_getInstance()) : !charging ? Discharging_getInstance() : Unknown_getInstance();
    return new BatteryReading_0(new Long(0, 0), System_instance.n17(), voltage, amperage, null, coerceIn(numberToInt(level), 0, 100), state);
  }
  function estimateVoltage($this, percentage) {
    var volts = 3.0 + percentage / 100.0 * (4.2 - 3.0);
    return numberToInt(volts * 1000);
  }
  function JsBatteryMonitorService$startMonitoring$slambda(this$0, resultContinuation) {
    this.i1l_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsBatteryMonitorService$startMonitoring$slambda).m1l = function ($this$flow, $completion) {
    var tmp = this.n1l($this$flow, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(JsBatteryMonitorService$startMonitoring$slambda).b9 = function (p1, $completion) {
    return this.m1l((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JsBatteryMonitorService$startMonitoring$slambda).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        switch (tmp) {
          case 0:
            this.g8_1 = 8;
            if (!this.i1l_1.p1l()) {
              throw UnsupportedOperationException_init_$Create$('Battery Status API not supported in this browser');
            }

            this.i1l_1.o1l_1 = true;
            this.g8_1 = 7;
            this.f8_1 = 1;
            suspendResult = getBatteryManager(this.i1l_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.k1l_1 = suspendResult;
            this.f8_1 = 2;
            continue $sm;
          case 2:
            if (!this.i1l_1.o1l_1) {
              this.f8_1 = 5;
              continue $sm;
            }

            this.l1l_1 = createBatteryReading(this.i1l_1, this.k1l_1);
            this.f8_1 = 3;
            suspendResult = this.j1l_1.or(this.l1l_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.f8_1 = 4;
            suspendResult = delay(new Long(30000, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.f8_1 = 2;
            continue $sm;
          case 5:
            this.g8_1 = 8;
            this.f8_1 = 6;
            continue $sm;
          case 6:
            this.g8_1 = 8;
            return Unit_instance;
          case 7:
            this.g8_1 = 8;
            var tmp_0 = this.i8_1;
            if (tmp_0 instanceof Exception) {
              var e = this.i8_1;
              this.i1l_1.o1l_1 = false;
              throw e;
            } else {
              throw this.i8_1;
            }

          case 8:
            throw this.i8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.g8_1 === 8) {
          throw e_0;
        } else {
          this.f8_1 = this.g8_1;
          this.i8_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(JsBatteryMonitorService$startMonitoring$slambda).n1l = function ($this$flow, completion) {
    var i = new JsBatteryMonitorService$startMonitoring$slambda(this.i1l_1, completion);
    i.j1l_1 = $this$flow;
    return i;
  };
  function JsBatteryMonitorService$startMonitoring$slambda_0(this$0, resultContinuation) {
    var i = new JsBatteryMonitorService$startMonitoring$slambda(this$0, resultContinuation);
    var l = function ($this$flow, $completion) {
      return i.m1l($this$flow, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function JsBatteryMonitorService() {
    this.o1l_1 = false;
  }
  protoOf(JsBatteryMonitorService).p1l = function () {
    var tmp = 'getBattery' in navigator;
    return (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
  };
  protoOf(JsBatteryMonitorService).n1i = function () {
    return flow(JsBatteryMonitorService$startMonitoring$slambda_0(this, null));
  };
  //region block: post-declaration
  protoOf(BatteryRepositoryImpl).k1h = getReadingsInRange$default;
  protoOf($serializer).e15 = typeParametersSerializers;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  Schema_instance = new Schema();
  Companion_instance_5 = new Companion_4();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = platformModule;
  _.$_$.b = get_sharedModule;
  _.$_$.c = BatteryReading_0;
  _.$_$.d = Charging;
  _.$_$.e = values_0;
  _.$_$.f = AnalyzeBatteryHealthUseCase;
  _.$_$.g = CalculateBatteryStatisticsUseCase;
  _.$_$.h = GetBatteryHistoryUseCase;
  _.$_$.i = MonitorBatteryUseCase;
  _.$_$.j = TimePeriod_DAY_getInstance;
  _.$_$.k = TimePeriod_MONTH_getInstance;
  _.$_$.l = Companion_getInstance_5;
  _.$_$.m = Discharging_getInstance;
  _.$_$.n = Full_getInstance;
  _.$_$.o = NotCharging_getInstance;
  _.$_$.p = Unknown_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=Embit-shared.js.map
