(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'sqldelight-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'sqldelight-runtime'.");
    }
    globalThis['sqldelight-runtime'] = factory(typeof globalThis['sqldelight-runtime'] === 'undefined' ? {} : globalThis['sqldelight-runtime'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.m7;
  var initMetadataForClass = kotlin_kotlin.$_$.v6;
  var VOID = kotlin_kotlin.$_$.d;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.p;
  var Unit_instance = kotlin_kotlin.$_$.y2;
  var toString = kotlin_kotlin.$_$.o7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var NullPointerException_init_$Create$ = kotlin_kotlin.$_$.u1;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.x;
  var copyToArray = kotlin_kotlin.$_$.y3;
  var toString_0 = kotlin_kotlin.$_$.n9;
  var hashCode = kotlin_kotlin.$_$.u6;
  var THROW_CCE = kotlin_kotlin.$_$.y8;
  var equals = kotlin_kotlin.$_$.m6;
  var initMetadataForCompanion = kotlin_kotlin.$_$.w6;
  var initMetadataForInterface = kotlin_kotlin.$_$.y6;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ExecutableQuery, 'ExecutableQuery');
  initMetadataForClass(Query, 'Query', VOID, ExecutableQuery);
  initMetadataForClass(SimpleQuery, 'SimpleQuery', VOID, Query);
  initMetadataForClass(BaseTransacterImpl, 'BaseTransacterImpl');
  initMetadataForClass(TransacterImpl, 'TransacterImpl', VOID, BaseTransacterImpl);
  function get_value() {
    throw IllegalStateException_init_$Create$('The driver used with SQLDelight is asynchronous, so SQLDelight should be configured for\nasynchronous usage:\n\nsqldelight {\n  databases {\n    MyDatabase {\n      generateAsync = true\n    }\n  }\n}');
  }
  initMetadataForInterface(QueryResult, 'QueryResult', VOID, VOID, VOID, [0]);
  initMetadataForClass(Value, 'Value', VOID, VOID, [QueryResult], [0]);
  initMetadataForClass(AsyncValue, 'AsyncValue', VOID, VOID, [QueryResult], [0]);
  initMetadataForCompanion(Companion);
  function execute$default(identifier, sql, parameters, binders, $super) {
    binders = binders === VOID ? null : binders;
    return $super === VOID ? this.ah(identifier, sql, parameters, binders) : $super.ah.call(this, identifier, sql, parameters, binders);
  }
  initMetadataForInterface(SqlDriver, 'SqlDriver');
  //endregion
  function Query(mapper) {
    ExecutableQuery.call(this, mapper);
  }
  function Query_0(identifier, queryKeys, driver, fileName, label, query, mapper) {
    return new SimpleQuery(identifier, queryKeys, driver, fileName, label, query, mapper);
  }
  function ExecutableQuery$executeAsList$lambda(this$0) {
    return function (cursor) {
      // Inline function 'kotlin.collections.mutableListOf' call
      var result = ArrayList_init_$Create$();
      while (cursor.k().k1()) {
        result.d(this$0.xf_1(cursor));
      }
      return new Value(_Value___init__impl__qy06ko(result));
    };
  }
  function ExecutableQuery$executeAsOneOrNull$lambda(this$0) {
    return function (cursor) {
      var tmp;
      if (!cursor.k().k1()) {
        return new Value(_Value___init__impl__qy06ko(null));
      }
      var value = this$0.xf_1(cursor);
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      if (!!cursor.k().k1()) {
        // Inline function 'app.cash.sqldelight.ExecutableQuery.executeAsOneOrNull.<anonymous>.<anonymous>' call
        var message = 'ResultSet returned more than 1 row for ' + toString(this$0);
        throw IllegalStateException_init_$Create$(toString(message));
      }
      return new Value(_Value___init__impl__qy06ko(value));
    };
  }
  function ExecutableQuery(mapper) {
    this.xf_1 = mapper;
  }
  protoOf(ExecutableQuery).zf = function () {
    return this.yf(ExecutableQuery$executeAsList$lambda(this)).k1();
  };
  protoOf(ExecutableQuery).ag = function () {
    var tmp0_elvis_lhs = this.bg();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw NullPointerException_init_$Create$('ResultSet returned null for ' + toString(this));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ExecutableQuery).bg = function () {
    return this.yf(ExecutableQuery$executeAsOneOrNull$lambda(this)).k1();
  };
  function SimpleQuery(identifier, queryKeys, driver, fileName, label, query, mapper) {
    Query.call(this, mapper);
    this.dg_1 = identifier;
    this.eg_1 = queryKeys;
    this.fg_1 = driver;
    this.gg_1 = fileName;
    this.hg_1 = label;
    this.ig_1 = query;
  }
  protoOf(SimpleQuery).yf = function (mapper) {
    return this.fg_1.jg(this.dg_1, this.ig_1, mapper, 0, null);
  };
  protoOf(SimpleQuery).toString = function () {
    return this.gg_1 + ':' + this.hg_1;
  };
  function TransacterImpl(driver) {
    BaseTransacterImpl.call(this, driver);
  }
  function BaseTransacterImpl$notifyQueries$lambda($transaction) {
    return function (it) {
      $transaction.qg_1.d(it);
      return Unit_instance;
    };
  }
  function BaseTransacterImpl$notifyQueries$lambda_0($tableKeys) {
    return function (it) {
      $tableKeys.d(it);
      return Unit_instance;
    };
  }
  function BaseTransacterImpl(driver) {
    this.kg_1 = driver;
  }
  protoOf(BaseTransacterImpl).lg = function (identifier, tableProvider) {
    var transaction = this.kg_1.ug();
    if (!(transaction == null)) {
      if (transaction.pg_1.d(identifier)) {
        tableProvider(BaseTransacterImpl$notifyQueries$lambda(transaction));
      }
    } else {
      // Inline function 'kotlin.collections.mutableSetOf' call
      var tableKeys = LinkedHashSet_init_$Create$();
      tableProvider(BaseTransacterImpl$notifyQueries$lambda_0(tableKeys));
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp$ret$1 = copyToArray(tableKeys);
      this.kg_1.vg(tmp$ret$1.slice());
    }
  };
  function _Value___init__impl__qy06ko(value) {
    return value;
  }
  function _Value___get_value__impl__eescu4($this) {
    return $this;
  }
  function Value__await_impl_guv754($this, $completion) {
    return _Value___get_value__impl__eescu4($this);
  }
  function Value__toString_impl_99l7rk($this) {
    return 'Value(value=' + toString_0($this) + ')';
  }
  function Value__hashCode_impl_chkp1b($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function Value__equals_impl_6swhr1($this, other) {
    if (!(other instanceof Value))
      return false;
    var tmp0_other_with_cast = other instanceof Value ? other.wg_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function _AsyncValue___init__impl__ea5r6c(getter) {
    return getter;
  }
  function _get_getter__ygn3c0($this) {
    return $this;
  }
  function AsyncValue__await_impl_5ecyd0($this, $completion) {
    return _get_getter__ygn3c0($this)($completion);
  }
  function AsyncValue__toString_impl_pesl5g($this) {
    return 'AsyncValue(getter=' + toString($this) + ')';
  }
  function AsyncValue__hashCode_impl_nv5k0t($this) {
    return hashCode($this);
  }
  function AsyncValue__equals_impl_r60awp($this, other) {
    if (!(other instanceof AsyncValue))
      return false;
    var tmp0_other_with_cast = other instanceof AsyncValue ? other.xg_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Value(value) {
    this.wg_1 = value;
  }
  protoOf(Value).k1 = function () {
    return _Value___get_value__impl__eescu4(this.wg_1);
  };
  protoOf(Value).yg = function ($completion) {
    return Value__await_impl_guv754(this.wg_1, $completion);
  };
  protoOf(Value).toString = function () {
    return Value__toString_impl_99l7rk(this.wg_1);
  };
  protoOf(Value).hashCode = function () {
    return Value__hashCode_impl_chkp1b(this.wg_1);
  };
  protoOf(Value).equals = function (other) {
    return Value__equals_impl_6swhr1(this.wg_1, other);
  };
  function AsyncValue(getter) {
    this.xg_1 = getter;
  }
  protoOf(AsyncValue).yg = function ($completion) {
    return AsyncValue__await_impl_5ecyd0(this.xg_1, $completion);
  };
  protoOf(AsyncValue).toString = function () {
    return AsyncValue__toString_impl_pesl5g(this.xg_1);
  };
  protoOf(AsyncValue).hashCode = function () {
    return AsyncValue__hashCode_impl_nv5k0t(this.xg_1);
  };
  protoOf(AsyncValue).equals = function (other) {
    return AsyncValue__equals_impl_r60awp(this.xg_1, other);
  };
  function Companion() {
    Companion_instance = this;
    this.zg_1 = _Value___init__impl__qy06ko(Unit_instance);
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function QueryResult() {
  }
  function SqlDriver() {
  }
  //region block: post-declaration
  protoOf(AsyncValue).k1 = get_value;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = AsyncValue;
  _.$_$.b = Value;
  _.$_$.c = SqlDriver;
  _.$_$.d = Query_0;
  _.$_$.e = Query;
  _.$_$.f = TransacterImpl;
  _.$_$.g = execute$default;
  _.$_$.h = _AsyncValue___init__impl__ea5r6c;
  _.$_$.i = _Value___init__impl__qy06ko;
  _.$_$.j = Companion_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=sqldelight-runtime.js.map
