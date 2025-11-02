(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './sqldelight-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./sqldelight-runtime.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'sqldelight-drivers-web-worker-driver'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'sqldelight-drivers-web-worker-driver'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'sqldelight-drivers-web-worker-driver'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'sqldelight-drivers-web-worker-driver'.");
    }
    if (typeof globalThis['sqldelight-runtime'] === 'undefined') {
      throw new Error("Error loading module 'sqldelight-drivers-web-worker-driver'. Its dependency 'sqldelight-runtime' was not found. Please, check whether 'sqldelight-runtime' is loaded prior to 'sqldelight-drivers-web-worker-driver'.");
    }
    globalThis['sqldelight-drivers-web-worker-driver'] = factory(typeof globalThis['sqldelight-drivers-web-worker-driver'] === 'undefined' ? {} : globalThis['sqldelight-drivers-web-worker-driver'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['sqldelight-runtime']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_app_cash_sqldelight_runtime) {
  'use strict';
  //region block: imports
  var copyToArray = kotlin_kotlin.$_$.y3;
  var Unit_instance = kotlin_kotlin.$_$.y2;
  var toString = kotlin_kotlin.$_$.o7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var CoroutineImpl = kotlin_kotlin.$_$.a6;
  var protoOf = kotlin_kotlin.$_$.m7;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.l5;
  var initMetadataForLambda = kotlin_kotlin.$_$.z6;
  var VOID = kotlin_kotlin.$_$.d;
  var numberToLong = kotlin_kotlin.$_$.k7;
  var Long = kotlin_kotlin.$_$.u8;
  var Companion_instance = kotlin_kotlin.$_$.x2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.l2;
  var createFailure = kotlin_kotlin.$_$.e9;
  var initMetadataForClass = kotlin_kotlin.$_$.v6;
  var intercepted = kotlin_kotlin.$_$.n5;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var returnIfSuspended = kotlin_kotlin.$_$.l;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.x6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var _AsyncValue___init__impl__ea5r6c = kotlin_app_cash_sqldelight_runtime.$_$.h;
  var AsyncValue = kotlin_app_cash_sqldelight_runtime.$_$.a;
  var execute$default = kotlin_app_cash_sqldelight_runtime.$_$.g;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.p;
  var emptySet = kotlin_kotlin.$_$.c4;
  var addAll = kotlin_kotlin.$_$.l3;
  var distinct = kotlin_kotlin.$_$.z3;
  var SqlDriver = kotlin_app_cash_sqldelight_runtime.$_$.c;
  var _Value___init__impl__qy06ko = kotlin_app_cash_sqldelight_runtime.$_$.i;
  var Value = kotlin_app_cash_sqldelight_runtime.$_$.b;
  var extendThrowable = kotlin_kotlin.$_$.n6;
  var captureStack = kotlin_kotlin.$_$.h6;
  var initMetadataForCompanion = kotlin_kotlin.$_$.w6;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(WebWorkerDriver$executeQuery$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(WebWorkerDriver$execute$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForClass(WebWorkerDriver$sendMessage$3);
  initMetadataForClass(WebWorkerDriver$sendMessage$4);
  initMetadataForCoroutine($sendMessageCOROUTINE$0, CoroutineImpl);
  initMetadataForClass(WebWorkerDriver, 'WebWorkerDriver', VOID, VOID, [SqlDriver], [2]);
  initMetadataForClass(JsWorkerSqlPreparedStatement, 'JsWorkerSqlPreparedStatement', JsWorkerSqlPreparedStatement);
  initMetadataForClass(JsWorkerSqlCursor, 'JsWorkerSqlCursor');
  initMetadataForClass(WebWorkerException, 'WebWorkerException', VOID, Error);
  initMetadataForCompanion(Companion);
  //endregion
  function WebWorkerDriver$executeQuery$slambda$lambda($sql, $bound) {
    return function ($this$sendMessage) {
      $this$sendMessage.sql = $sql;
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_0 = $bound.uz_1;
      $this$sendMessage.params = copyToArray(this_0);
      return Unit_instance;
    };
  }
  function WebWorkerDriver$execute$slambda$lambda($sql, $bound) {
    return function ($this$sendMessage) {
      $this$sendMessage.sql = $sql;
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_0 = $bound.uz_1;
      $this$sendMessage.params = copyToArray(this_0);
      return Unit_instance;
    };
  }
  function sendMessage(_this__u8e3s4, $this, action, message, $completion) {
    var tmp = new $sendMessageCOROUTINE$0($this, _this__u8e3s4, action, message, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  }
  function checkWorkerResults($this, results) {
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (results == null) {
        // Inline function 'app.cash.sqldelight.driver.worker.WebWorkerDriver.checkWorkerResults.<anonymous>' call
        var message = 'The worker result was null ';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        break $l$block;
      }
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.contracts.contract' call
    if (!Array.isArray(results.values)) {
      // Inline function 'app.cash.sqldelight.driver.worker.WebWorkerDriver.checkWorkerResults.<anonymous>' call
      var message_0 = 'The worker result values were not an array';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return results.values;
  }
  function WebWorkerDriver$executeQuery$slambda(this$0, $mapper, $sql, $bound, resultContinuation) {
    this.p10_1 = this$0;
    this.q10_1 = $mapper;
    this.r10_1 = $sql;
    this.s10_1 = $bound;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WebWorkerDriver$executeQuery$slambda).u10 = function ($completion) {
    var tmp = this.v10($completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(WebWorkerDriver$executeQuery$slambda).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        switch (tmp) {
          case 0:
            this.g8_1 = 3;
            this.f8_1 = 1;
            suspendResult = sendMessage(this.p10_1.w10_1, this.p10_1, 'exec', WebWorkerDriver$executeQuery$slambda$lambda(this.r10_1, this.s10_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.t10_1 = suspendResult;
            this.f8_1 = 2;
            suspendResult = this.q10_1(new JsWorkerSqlCursor(checkWorkerResults(this.p10_1, this.t10_1.results))).yg(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  protoOf(WebWorkerDriver$executeQuery$slambda).v10 = function (completion) {
    return new WebWorkerDriver$executeQuery$slambda(this.p10_1, this.q10_1, this.r10_1, this.s10_1, completion);
  };
  function WebWorkerDriver$executeQuery$slambda_0(this$0, $mapper, $sql, $bound, resultContinuation) {
    var i = new WebWorkerDriver$executeQuery$slambda(this$0, $mapper, $sql, $bound, resultContinuation);
    var l = function ($completion) {
      return i.u10($completion);
    };
    l.$arity = 0;
    return l;
  }
  function WebWorkerDriver$execute$slambda(this$0, $sql, $bound, resultContinuation) {
    this.i11_1 = this$0;
    this.j11_1 = $sql;
    this.k11_1 = $bound;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WebWorkerDriver$execute$slambda).l11 = function ($completion) {
    var tmp = this.v10($completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(WebWorkerDriver$execute$slambda).u10 = function ($completion) {
    return this.l11($completion);
  };
  protoOf(WebWorkerDriver$execute$slambda).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        switch (tmp) {
          case 0:
            this.g8_1 = 2;
            this.f8_1 = 1;
            suspendResult = sendMessage(this.i11_1.w10_1, this.i11_1, 'exec', WebWorkerDriver$execute$slambda$lambda(this.j11_1, this.k11_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var response = suspendResult;
            checkWorkerResults(this.i11_1, response.results);
            var tmp_0;
            if (response.results.values.length === 0) {
              tmp_0 = new Long(0, 0);
            } else {
              var this_0 = response.results.values[0][0];
              tmp_0 = numberToLong(this_0);
            }

            return tmp_0;
          case 2:
            throw this.i8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.g8_1 === 2) {
          throw e;
        } else {
          this.f8_1 = this.g8_1;
          this.i8_1 = e;
        }
      }
     while (true);
  };
  protoOf(WebWorkerDriver$execute$slambda).v10 = function (completion) {
    return new WebWorkerDriver$execute$slambda(this.i11_1, this.j11_1, this.k11_1, completion);
  };
  function WebWorkerDriver$execute$slambda_0(this$0, $sql, $bound, resultContinuation) {
    var i = new WebWorkerDriver$execute$slambda(this$0, $sql, $bound, resultContinuation);
    var l = function ($completion) {
      return i.l11($completion);
    };
    l.$arity = 0;
    return l;
  }
  function WebWorkerDriver$sendMessage$3($id, $this_sendMessage, $continuation) {
    this.m11_1 = $id;
    this.n11_1 = $this_sendMessage;
    this.o11_1 = $continuation;
  }
  protoOf(WebWorkerDriver$sendMessage$3).p11 = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    var data = event.data;
    if (data.id === this.m11_1) {
      this.n11_1.removeEventListener('message', this);
      if (!(data.error == null)) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var this_0 = this.o11_1;
        var tmp = JSON;
        var tmp_0 = data.error;
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$6 = ['message', 'arguments', 'type', 'name'];
        // Inline function 'kotlin.Companion.failure' call
        var exception = new WebWorkerException(tmp.stringify(tmp_0, tmp$ret$6));
        var tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure(exception));
        this_0.q8(tmp$ret$7);
      } else {
        // Inline function 'kotlin.coroutines.resume' call
        var this_1 = this.o11_1;
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$9 = _Result___init__impl__xyqfz8(data);
        this_1.q8(tmp$ret$9);
      }
    }
  };
  protoOf(WebWorkerDriver$sendMessage$3).handleEvent = function (event) {
    return this.p11(event);
  };
  function WebWorkerDriver$sendMessage$4($this_sendMessage, $continuation) {
    this.q11_1 = $this_sendMessage;
    this.r11_1 = $continuation;
  }
  protoOf(WebWorkerDriver$sendMessage$4).p11 = function (event) {
    this.q11_1.removeEventListener('error', this);
    // Inline function 'kotlin.coroutines.resumeWithException' call
    var this_0 = this.r11_1;
    var tmp = JSON;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = ['message', 'arguments', 'type', 'name'];
    // Inline function 'kotlin.Companion.failure' call
    var exception = new WebWorkerException(tmp.stringify(event, tmp$ret$2) + Object.entries(event));
    var tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(exception));
    this_0.q8(tmp$ret$3);
  };
  protoOf(WebWorkerDriver$sendMessage$4).handleEvent = function (event) {
    return this.p11(event);
  };
  function WebWorkerDriver$sendMessage$lambda($this_sendMessage, $messageListener, $errorListener) {
    return function (it) {
      $this_sendMessage.removeEventListener('message', $messageListener);
      $this_sendMessage.removeEventListener('error', $errorListener);
      return Unit_instance;
    };
  }
  function $sendMessageCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, action, message, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d10_1 = _this__u8e3s4;
    this.e10_1 = _this__u8e3s4_0;
    this.f10_1 = action;
    this.g10_1 = message;
  }
  protoOf($sendMessageCOROUTINE$0).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        switch (tmp) {
          case 0:
            this.g8_1 = 2;
            this.f8_1 = 1;
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.fl();
            var tmp0_this = this.d10_1;
            var tmp1 = tmp0_this.y10_1;
            tmp0_this.y10_1 = tmp1 + 1 | 0;
            var id = tmp1;
            var messageListener = new WebWorkerDriver$sendMessage$3(id, this.e10_1, cancellable);
            var errorListener = new WebWorkerDriver$sendMessage$4(this.e10_1, cancellable);
            this.e10_1.addEventListener('message', messageListener);
            this.e10_1.addEventListener('error', errorListener);
            var this_0 = {};
            this.g10_1(this_0);
            this_0.id = id;
            this_0.action = this.f10_1;
            var messageObject = this_0;
            this.e10_1.postMessage(messageObject);
            cancellable.bk(WebWorkerDriver$sendMessage$lambda(this.e10_1, messageListener, errorListener));
            suspendResult = returnIfSuspended(cancellable.nj(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.i8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.g8_1 === 2) {
          throw e;
        } else {
          this.f8_1 = this.g8_1;
          this.i8_1 = e;
        }
      }
     while (true);
  };
  function WebWorkerDriver(worker) {
    this.w10_1 = worker;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.x10_1 = LinkedHashMap_init_$Create$();
    this.y10_1 = 0;
    this.z10_1 = null;
  }
  protoOf(WebWorkerDriver).jg = function (identifier, sql, mapper, parameters, binders) {
    var bound = new JsWorkerSqlPreparedStatement();
    if (binders == null)
      null;
    else
      binders(bound);
    return new AsyncValue(_AsyncValue___init__impl__ea5r6c(WebWorkerDriver$executeQuery$slambda_0(this, mapper, sql, bound, null)));
  };
  protoOf(WebWorkerDriver).ah = function (identifier, sql, parameters, binders) {
    var bound = new JsWorkerSqlPreparedStatement();
    if (binders == null)
      null;
    else
      binders(bound);
    return new AsyncValue(_AsyncValue___init__impl__ea5r6c(WebWorkerDriver$execute$slambda_0(this, sql, bound, null)));
  };
  protoOf(WebWorkerDriver).vg = function (queryKeys) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = queryKeys.length;
    while (inductionVariable < last) {
      var element = queryKeys[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'app.cash.sqldelight.driver.worker.WebWorkerDriver.notifyListeners.<anonymous>' call
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = this.x10_1.n1(element);
      var list = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      addAll(destination, list);
    }
    var tmp0_iterator = distinct(destination).i();
    while (tmp0_iterator.j()) {
      var element_0 = tmp0_iterator.k();
      element_0.s11();
    }
  };
  protoOf(WebWorkerDriver).ug = function () {
    return this.z10_1;
  };
  function JsWorkerSqlPreparedStatement() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.uz_1 = ArrayList_init_$Create$();
  }
  protoOf(JsWorkerSqlPreparedStatement).t11 = function (index, long) {
    this.uz_1.d(long == null ? null : long.p2());
  };
  protoOf(JsWorkerSqlPreparedStatement).u11 = function (index, double) {
    this.uz_1.d(double);
  };
  protoOf(JsWorkerSqlPreparedStatement).v11 = function (index, string) {
    this.uz_1.d(string);
  };
  function JsWorkerSqlCursor(values) {
    this.w11_1 = values;
    this.x11_1 = -1;
  }
  protoOf(JsWorkerSqlCursor).y11 = function () {
    this.x11_1 = this.x11_1 + 1 | 0;
    return _Value___init__impl__qy06ko(this.x11_1 < this.w11_1.length);
  };
  protoOf(JsWorkerSqlCursor).k = function () {
    return new Value(this.y11());
  };
  protoOf(JsWorkerSqlCursor).z11 = function (index) {
    // Inline function 'kotlin.js.unsafeCast' call
    return this.w11_1[this.x11_1][index];
  };
  protoOf(JsWorkerSqlCursor).a12 = function (index) {
    var tmp = this.w11_1[this.x11_1][index];
    var tmp0_safe_receiver = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : null;
    return tmp0_safe_receiver == null ? null : numberToLong(tmp0_safe_receiver);
  };
  protoOf(JsWorkerSqlCursor).b12 = function (index) {
    // Inline function 'kotlin.js.unsafeCast' call
    return this.w11_1[this.x11_1][index];
  };
  function WebWorkerException(message) {
    extendThrowable(this, message);
    captureStack(this, WebWorkerException);
  }
  function Companion() {
  }
  var Companion_instance_0;
  function Companion_getInstance() {
    return Companion_instance_0;
  }
  //region block: post-declaration
  protoOf(WebWorkerDriver).bh = execute$default;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = WebWorkerDriver;
  //endregion
  return _;
}));

//# sourceMappingURL=sqldelight-drivers-web-worker-driver.js.map
