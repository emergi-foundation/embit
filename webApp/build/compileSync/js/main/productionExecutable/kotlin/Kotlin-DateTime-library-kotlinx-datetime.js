(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@js-joda/core', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@js-joda/core'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['@js-joda/core'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime'. Its dependency '@js-joda/core' was not found. Please, check whether '@js-joda/core' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime'.");
    }
    globalThis['Kotlin-DateTime-library-kotlinx-datetime'] = factory(typeof globalThis['Kotlin-DateTime-library-kotlinx-datetime'] === 'undefined' ? {} : globalThis['Kotlin-DateTime-library-kotlinx-datetime'], globalThis['@js-joda/core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, $module$_js_joda_core_gcv2k, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Instant = $module$_js_joda_core_gcv2k.Instant;
  var Clock = $module$_js_joda_core_gcv2k.Clock;
  var Duration = $module$_js_joda_core_gcv2k.Duration;
  var LocalDateTime = $module$_js_joda_core_gcv2k.LocalDateTime;
  var ZoneOffset = $module$_js_joda_core_gcv2k.ZoneOffset;
  var ZoneId = $module$_js_joda_core_gcv2k.ZoneId;
  var protoOf = kotlin_kotlin.$_$.m7;
  var initMetadataForObject = kotlin_kotlin.$_$.a7;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.w1;
  var objectCreate = kotlin_kotlin.$_$.l7;
  var captureStack = kotlin_kotlin.$_$.h6;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.v1;
  var RuntimeException = kotlin_kotlin.$_$.x8;
  var initMetadataForClass = kotlin_kotlin.$_$.v6;
  var Long = kotlin_kotlin.$_$.u8;
  var toLong = kotlin_kotlin.$_$.n7;
  var Unit_instance = kotlin_kotlin.$_$.y2;
  var ArithmeticException = kotlin_kotlin.$_$.n8;
  var initMetadataForCompanion = kotlin_kotlin.$_$.w6;
  var numberToLong = kotlin_kotlin.$_$.k7;
  var numberToInt = kotlin_kotlin.$_$.j7;
  var _Duration___get_inWholeSeconds__impl__hpy7b3 = kotlin_kotlin.$_$.e2;
  var _Duration___get_nanosecondsComponent__impl__nh19kq = kotlin_kotlin.$_$.g2;
  var Duration__isPositive_impl_tvkkt2 = kotlin_kotlin.$_$.f2;
  var Duration__unaryMinus_impl_x2k1y0 = kotlin_kotlin.$_$.i2;
  var Companion_getInstance = kotlin_kotlin.$_$.u2;
  var DurationUnit_SECONDS_getInstance = kotlin_kotlin.$_$.i;
  var toDuration = kotlin_kotlin.$_$.l8;
  var DurationUnit_NANOSECONDS_getInstance = kotlin_kotlin.$_$.h;
  var Duration__plus_impl_yu9v8f = kotlin_kotlin.$_$.h2;
  var THROW_CCE = kotlin_kotlin.$_$.y8;
  var VOID = kotlin_kotlin.$_$.d;
  var ArithmeticException_init_$Create$ = kotlin_kotlin.$_$.e1;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(System, 'System');
  initMetadataForClass(DateTimeArithmeticException, 'DateTimeArithmeticException', DateTimeArithmeticException_init_$Create$, RuntimeException);
  initMetadataForCompanion(Companion);
  initMetadataForClass(Instant_0, 'Instant');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(LocalDateTime_0, 'LocalDateTime');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(TimeZone, 'TimeZone');
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(FixedOffsetTimeZone, 'FixedOffsetTimeZone', VOID, TimeZone);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(UtcOffset, 'UtcOffset');
  //endregion
  function System() {
  }
  protoOf(System).n17 = function () {
    return Companion_getInstance_0().n17();
  };
  var System_instance;
  function System_getInstance() {
    return System_instance;
  }
  function DateTimeArithmeticException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function DateTimeArithmeticException_init_$Create$() {
    var tmp = DateTimeArithmeticException_init_$Init$(objectCreate(protoOf(DateTimeArithmeticException)));
    captureStack(tmp, DateTimeArithmeticException_init_$Create$);
    return tmp;
  }
  function DateTimeArithmeticException_init_$Init$_0(cause, $this) {
    RuntimeException_init_$Init$_0(cause, $this);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function DateTimeArithmeticException_init_$Create$_0(cause) {
    var tmp = DateTimeArithmeticException_init_$Init$_0(cause, objectCreate(protoOf(DateTimeArithmeticException)));
    captureStack(tmp, DateTimeArithmeticException_init_$Create$_0);
    return tmp;
  }
  function DateTimeArithmeticException() {
    captureStack(this, DateTimeArithmeticException);
  }
  function asTimeZone(_this__u8e3s4) {
    return FixedOffsetTimeZone_init_$Create$(_this__u8e3s4);
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    // Inline function 'kotlinx.datetime.jsTry' call
    // Inline function 'kotlinx.datetime.Companion.DISTANT_PAST.<anonymous>' call
    var tmp$ret$1 = Instant.ofEpochSecond((new Long(-931914497, -750)).p2(), 999999999);
    tmp.o17_1 = new Instant_0(tmp$ret$1);
    var tmp_0 = this;
    // Inline function 'kotlinx.datetime.jsTry' call
    // Inline function 'kotlinx.datetime.Companion.DISTANT_FUTURE.<anonymous>' call
    var tmp$ret$3 = Instant.ofEpochSecond((new Long(1151527680, 720)).p2(), 0);
    tmp_0.p17_1 = new Instant_0(tmp$ret$3);
    this.q17_1 = new Instant_0(Instant.MIN);
    this.r17_1 = new Instant_0(Instant.MAX);
  }
  protoOf(Companion).n17 = function () {
    return new Instant_0(Clock.systemUTC().instant());
  };
  protoOf(Companion).s17 = function (epochMilliseconds) {
    var tmp;
    try {
      // Inline function 'kotlin.Long.div' call
      var tmp_0 = epochMilliseconds.b2(toLong(1000));
      // Inline function 'kotlin.Long.times' call
      // Inline function 'kotlin.Long.rem' call
      var tmp$ret$2 = epochMilliseconds.c2(toLong(1000)).a2(toLong(1000000));
      tmp = this.t17(tmp_0, tmp$ret$2);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        if (!isJodaDateTimeException(e))
          throw e;
        tmp_1 = epochMilliseconds.v(new Long(0, 0)) > 0 ? this.r17_1 : this.q17_1;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  };
  protoOf(Companion).t17 = function (epochSeconds, nanosecondAdjustment) {
    var tmp;
    try {
      // Inline function 'kotlin.floorDiv' call
      var other = new Long(1000000000, 0);
      var q = nanosecondAdjustment.b2(other);
      if (nanosecondAdjustment.m2(other).v(new Long(0, 0)) < 0 && !q.a2(other).equals(nanosecondAdjustment)) {
        q = q.e2();
      }
      var tmp$ret$0 = q;
      var secs = safeAdd(epochSeconds, tmp$ret$0);
      // Inline function 'kotlin.mod' call
      var other_0 = new Long(1000000000, 0);
      var r = nanosecondAdjustment.c2(other_0);
      var nos = r.y1(other_0.k2(r.m2(other_0).k2(r.l2(r.f2())).i2(63))).n2();
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.Companion.fromEpochSeconds.<anonymous>' call
      var tmp$ret$3 = Instant.ofEpochSecond(secs.p2(), nos);
      tmp = new Instant_0(tmp$ret$3);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        var tmp_1;
        if (!isJodaDateTimeException(e)) {
          tmp_1 = !(e instanceof ArithmeticException);
        } else {
          tmp_1 = false;
        }
        if (tmp_1)
          throw e;
        tmp_0 = epochSeconds.v(new Long(0, 0)) > 0 ? this.r17_1 : this.q17_1;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Instant_0(value) {
    Companion_getInstance_0();
    this.u17_1 = value;
  }
  protoOf(Instant_0).v17 = function () {
    return numberToLong(this.u17_1.epochSecond());
  };
  protoOf(Instant_0).w17 = function () {
    return numberToInt(this.u17_1.nano());
  };
  protoOf(Instant_0).x17 = function () {
    // Inline function 'kotlin.Long.plus' call
    // Inline function 'kotlin.Long.times' call
    var this_0 = this.v17().a2(toLong(1000));
    var other = this.w17() / 1000000 | 0;
    return this_0.y1(toLong(other));
  };
  protoOf(Instant_0).y17 = function (duration) {
    // Inline function 'kotlin.time.Duration.toComponents' call
    // Inline function 'kotlin.contracts.contract' call
    var seconds = _Duration___get_inWholeSeconds__impl__hpy7b3(duration);
    var nanoseconds = _Duration___get_nanosecondsComponent__impl__nh19kq(duration);
    var tmp;
    try {
      tmp = new Instant_0(this.z17(seconds.p2(), nanoseconds));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (!isJodaDateTimeException(e))
          throw e;
        tmp_0 = Duration__isPositive_impl_tvkkt2(duration) ? Companion_getInstance_0().r17_1 : Companion_getInstance_0().q17_1;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Instant_0).z17 = function (seconds, nanos) {
    var newSeconds = this.u17_1.epochSecond() + seconds;
    var newNanos = this.u17_1.nano() + nanos;
    // Inline function 'kotlinx.datetime.jsTry' call
    // Inline function 'kotlinx.datetime.Instant.plusFix.<anonymous>' call
    return Instant.ofEpochSecond(newSeconds, numberToInt(newNanos));
  };
  protoOf(Instant_0).a18 = function (duration) {
    return this.y17(Duration__unaryMinus_impl_x2k1y0(duration));
  };
  protoOf(Instant_0).b18 = function (other) {
    var diff = Duration.between(other.u17_1, this.u17_1);
    // Inline function 'kotlin.time.Companion.seconds' call
    Companion_getInstance();
    var this_0 = diff.seconds();
    var tmp = toDuration(this_0, DurationUnit_SECONDS_getInstance());
    // Inline function 'kotlin.time.Companion.nanoseconds' call
    Companion_getInstance();
    var this_1 = diff.nano();
    var tmp$ret$1 = toDuration(this_1, DurationUnit_NANOSECONDS_getInstance());
    return Duration__plus_impl_yu9v8f(tmp, tmp$ret$1);
  };
  protoOf(Instant_0).c18 = function (other) {
    return this.u17_1.compareTo(other.u17_1);
  };
  protoOf(Instant_0).t1 = function (other) {
    return this.c18(other instanceof Instant_0 ? other : THROW_CCE());
  };
  protoOf(Instant_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof Instant_0) {
        tmp_0 = this.u17_1 === other.u17_1 || this.u17_1.equals(other.u17_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Instant_0).hashCode = function () {
    return this.u17_1.hashCode();
  };
  protoOf(Instant_0).toString = function () {
    return this.u17_1.toString();
  };
  function isJodaDateTimeException(_this__u8e3s4) {
    return hasJsExceptionName(_this__u8e3s4, 'DateTimeException');
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.d18_1 = new LocalDateTime_0(LocalDateTime.MIN);
    this.e18_1 = new LocalDateTime_0(LocalDateTime.MAX);
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function LocalDateTime_0(value) {
    Companion_getInstance_1();
    this.f18_1 = value;
  }
  protoOf(LocalDateTime_0).g18 = function () {
    return this.f18_1.hour();
  };
  protoOf(LocalDateTime_0).h18 = function () {
    return this.f18_1.minute();
  };
  protoOf(LocalDateTime_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalDateTime_0) {
        tmp_0 = this.f18_1 === other.f18_1 || this.f18_1.equals(other.f18_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalDateTime_0).hashCode = function () {
    return this.f18_1.hashCode();
  };
  protoOf(LocalDateTime_0).toString = function () {
    return this.f18_1.toString();
  };
  protoOf(LocalDateTime_0).i18 = function (other) {
    return this.f18_1.compareTo(other.f18_1);
  };
  protoOf(LocalDateTime_0).t1 = function (other) {
    return this.i18(other instanceof LocalDateTime_0 ? other : THROW_CCE());
  };
  function ofZone($this, zoneId) {
    var tmp;
    if (zoneId instanceof ZoneOffset) {
      tmp = FixedOffsetTimeZone_init_$Create$(new UtcOffset(zoneId));
    } else {
      if (zoneId.rules().isFixedOffset()) {
        var tmp_0 = zoneId.normalized();
        tmp = new FixedOffsetTimeZone(new UtcOffset(tmp_0 instanceof ZoneOffset ? tmp_0 : THROW_CCE()), zoneId);
      } else {
        tmp = new TimeZone(zoneId);
      }
    }
    return tmp;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.j18_1 = asTimeZone(new UtcOffset(ZoneOffset.UTC));
  }
  protoOf(Companion_1).k18 = function () {
    return ofZone(this, ZoneId.systemDefault());
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function TimeZone(zoneId) {
    Companion_getInstance_2();
    this.l18_1 = zoneId;
  }
  protoOf(TimeZone).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof TimeZone) {
        tmp_0 = this.l18_1 === other.l18_1 || this.l18_1.equals(other.l18_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(TimeZone).hashCode = function () {
    return this.l18_1.hashCode();
  };
  protoOf(TimeZone).toString = function () {
    return this.l18_1.toString();
  };
  function toLocalDateTime(_this__u8e3s4, timeZone) {
    var tmp;
    try {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.toLocalDateTime.<anonymous>' call
      // Inline function 'kotlin.contracts.contract' call
      var p0 = LocalDateTime.ofInstant(_this__u8e3s4.u17_1, timeZone.l18_1);
      tmp = new LocalDateTime_0(p0);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw DateTimeArithmeticException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function FixedOffsetTimeZone_init_$Init$(offset, $this) {
    FixedOffsetTimeZone.call($this, offset, offset.m18_1);
    return $this;
  }
  function FixedOffsetTimeZone_init_$Create$(offset) {
    return FixedOffsetTimeZone_init_$Init$(offset, objectCreate(protoOf(FixedOffsetTimeZone)));
  }
  function Companion_2() {
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    return Companion_instance_2;
  }
  function FixedOffsetTimeZone(offset, zoneId) {
    TimeZone.call(this, zoneId);
    this.o18_1 = offset;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.p18_1 = new UtcOffset(ZoneOffset.UTC);
  }
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function UtcOffset(zoneOffset) {
    Companion_getInstance_4();
    this.m18_1 = zoneOffset;
  }
  protoOf(UtcOffset).hashCode = function () {
    return this.m18_1.hashCode();
  };
  protoOf(UtcOffset).equals = function (other) {
    var tmp;
    if (other instanceof UtcOffset) {
      tmp = this.m18_1 === other.m18_1 || this.m18_1.equals(other.m18_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UtcOffset).toString = function () {
    return this.m18_1.toString();
  };
  function safeAdd(a, b) {
    var sum = a.y1(b);
    if (a.m2(sum).v(new Long(0, 0)) < 0 && a.m2(b).v(new Long(0, 0)) >= 0) {
      throw ArithmeticException_init_$Create$('Addition overflows a long: ' + a.toString() + ' + ' + b.toString());
    }
    return sum;
  }
  function hasJsExceptionName(_this__u8e3s4, name) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.name == name;
  }
  //region block: init
  System_instance = new System();
  Companion_instance_2 = new Companion_2();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = System_instance;
  _.$_$.b = Companion_getInstance_0;
  _.$_$.c = Companion_getInstance_2;
  _.$_$.d = toLocalDateTime;
  //endregion
  return _;
}));

//# sourceMappingURL=Kotlin-DateTime-library-kotlinx-datetime.js.map
