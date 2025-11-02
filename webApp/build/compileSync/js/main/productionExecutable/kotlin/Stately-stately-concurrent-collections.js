(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'Stately-stately-concurrent-collections'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'Stately-stately-concurrent-collections'.");
    }
    globalThis['Stately-stately-concurrent-collections'] = factory(typeof globalThis['Stately-stately-concurrent-collections'] === 'undefined' ? {} : globalThis['Stately-stately-concurrent-collections'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Unit_instance = kotlin_kotlin.$_$.y2;
  var VOID = kotlin_kotlin.$_$.d;
  var protoOf = kotlin_kotlin.$_$.m7;
  var Collection = kotlin_kotlin.$_$.e3;
  var initMetadataForClass = kotlin_kotlin.$_$.v6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var objectCreate = kotlin_kotlin.$_$.l7;
  var KtMap = kotlin_kotlin.$_$.h3;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.x;
  var KtSet = kotlin_kotlin.$_$.j3;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ConcurrentMutableCollection, 'ConcurrentMutableCollection', VOID, VOID, [Collection]);
  initMetadataForClass(ConcurrentMutableIterator, 'ConcurrentMutableIterator');
  initMetadataForClass(ConcurrentMutableMap, 'ConcurrentMutableMap', ConcurrentMutableMap_init_$Create$, VOID, [KtMap]);
  initMetadataForClass(ConcurrentMutableSet, 'ConcurrentMutableSet', ConcurrentMutableSet_init_$Create$, ConcurrentMutableCollection, [ConcurrentMutableCollection, KtSet, Collection]);
  //endregion
  function ConcurrentMutableCollection$_get_size_$lambda_dssf9y(this$0) {
    return function () {
      return this$0.s18_1.l();
    };
  }
  function ConcurrentMutableCollection$contains$lambda(this$0, $element) {
    return function () {
      return this$0.s18_1.p($element);
    };
  }
  function ConcurrentMutableCollection$containsAll$lambda(this$0, $elements) {
    return function () {
      return this$0.s18_1.a1($elements);
    };
  }
  function ConcurrentMutableCollection$isEmpty$lambda(this$0) {
    return function () {
      return this$0.s18_1.n();
    };
  }
  function ConcurrentMutableCollection$add$lambda(this$0, $element) {
    return function () {
      return this$0.s18_1.d($element);
    };
  }
  function ConcurrentMutableCollection$addAll$lambda(this$0, $elements) {
    return function () {
      return this$0.s18_1.m($elements);
    };
  }
  function ConcurrentMutableCollection$clear$lambda(this$0) {
    return function () {
      this$0.s18_1.e1();
      return Unit_instance;
    };
  }
  function ConcurrentMutableCollection$iterator$lambda(this$0) {
    return function () {
      return new ConcurrentMutableIterator(this$0.t18_1, this$0.s18_1.i());
    };
  }
  function ConcurrentMutableCollection$remove$lambda(this$0, $element) {
    return function () {
      return this$0.s18_1.d1($element);
    };
  }
  function ConcurrentMutableCollection(rootArg, del) {
    rootArg = rootArg === VOID ? null : rootArg;
    this.s18_1 = del;
    var tmp = this;
    tmp.t18_1 = rootArg == null ? this : rootArg;
  }
  protoOf(ConcurrentMutableCollection).l = function () {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.t18_1;
    return ConcurrentMutableCollection$_get_size_$lambda_dssf9y(this)();
  };
  protoOf(ConcurrentMutableCollection).p = function (element) {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.t18_1;
    return ConcurrentMutableCollection$contains$lambda(this, element)();
  };
  protoOf(ConcurrentMutableCollection).a1 = function (elements) {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.t18_1;
    return ConcurrentMutableCollection$containsAll$lambda(this, elements)();
  };
  protoOf(ConcurrentMutableCollection).n = function () {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.t18_1;
    return ConcurrentMutableCollection$isEmpty$lambda(this)();
  };
  protoOf(ConcurrentMutableCollection).d = function (element) {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.t18_1;
    return ConcurrentMutableCollection$add$lambda(this, element)();
  };
  protoOf(ConcurrentMutableCollection).m = function (elements) {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.t18_1;
    return ConcurrentMutableCollection$addAll$lambda(this, elements)();
  };
  protoOf(ConcurrentMutableCollection).e1 = function () {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.t18_1;
    ConcurrentMutableCollection$clear$lambda(this)();
  };
  protoOf(ConcurrentMutableCollection).i = function () {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.t18_1;
    return ConcurrentMutableCollection$iterator$lambda(this)();
  };
  protoOf(ConcurrentMutableCollection).d1 = function (element) {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.t18_1;
    return ConcurrentMutableCollection$remove$lambda(this, element)();
  };
  function ConcurrentMutableIterator$hasNext$lambda(this$0) {
    return function () {
      return this$0.v18_1.j();
    };
  }
  function ConcurrentMutableIterator$next$lambda(this$0) {
    return function () {
      return this$0.v18_1.k();
    };
  }
  function ConcurrentMutableIterator$remove$lambda(this$0) {
    return function () {
      this$0.v18_1.g3();
      return Unit_instance;
    };
  }
  function ConcurrentMutableIterator(root, del) {
    this.u18_1 = root;
    this.v18_1 = del;
  }
  protoOf(ConcurrentMutableIterator).j = function () {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.u18_1;
    return ConcurrentMutableIterator$hasNext$lambda(this)();
  };
  protoOf(ConcurrentMutableIterator).k = function () {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.u18_1;
    return ConcurrentMutableIterator$next$lambda(this)();
  };
  protoOf(ConcurrentMutableIterator).g3 = function () {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.u18_1;
    ConcurrentMutableIterator$remove$lambda(this)();
  };
  function ConcurrentMutableMap_init_$Init$($this) {
    // Inline function 'kotlin.collections.mutableMapOf' call
    var tmp$ret$0 = LinkedHashMap_init_$Create$();
    ConcurrentMutableMap.call($this, null, tmp$ret$0);
    return $this;
  }
  function ConcurrentMutableMap_init_$Create$() {
    return ConcurrentMutableMap_init_$Init$(objectCreate(protoOf(ConcurrentMutableMap)));
  }
  function ConcurrentMutableMap$_get_size_$lambda_nuyc4q(this$0) {
    return function () {
      return this$0.w18_1.l();
    };
  }
  function ConcurrentMutableMap$_get_entries_$lambda_dp7xtt(this$0) {
    return function () {
      return new ConcurrentMutableSet(this$0, this$0.w18_1.p1());
    };
  }
  function ConcurrentMutableMap$_get_keys_$lambda_5gjoyr(this$0) {
    return function () {
      return new ConcurrentMutableSet(this$0, this$0.w18_1.o1());
    };
  }
  function ConcurrentMutableMap$_get_values_$lambda_tyvlyt(this$0) {
    return function () {
      return new ConcurrentMutableCollection(this$0, this$0.w18_1.g4());
    };
  }
  function ConcurrentMutableMap$containsKey$lambda(this$0, $key) {
    return function () {
      return this$0.w18_1.l1($key);
    };
  }
  function ConcurrentMutableMap$get$lambda(this$0, $key) {
    return function () {
      return this$0.w18_1.n1($key);
    };
  }
  function ConcurrentMutableMap$isEmpty$lambda(this$0) {
    return function () {
      return this$0.w18_1.n();
    };
  }
  function ConcurrentMutableMap$clear$lambda(this$0) {
    return function () {
      this$0.w18_1.e1();
      return Unit_instance;
    };
  }
  function ConcurrentMutableMap$put$lambda(this$0, $key, $value) {
    return function () {
      return this$0.w18_1.h4($key, $value);
    };
  }
  function ConcurrentMutableMap$remove$lambda(this$0, $key) {
    return function () {
      return this$0.w18_1.i4($key);
    };
  }
  function ConcurrentMutableMap(rootArg, del) {
    rootArg = rootArg === VOID ? null : rootArg;
    this.w18_1 = del;
    var tmp = this;
    tmp.x18_1 = rootArg == null ? this : rootArg;
  }
  protoOf(ConcurrentMutableMap).l = function () {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.x18_1;
    return ConcurrentMutableMap$_get_size_$lambda_nuyc4q(this)();
  };
  protoOf(ConcurrentMutableMap).p1 = function () {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.x18_1;
    return ConcurrentMutableMap$_get_entries_$lambda_dp7xtt(this)();
  };
  protoOf(ConcurrentMutableMap).o1 = function () {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.x18_1;
    return ConcurrentMutableMap$_get_keys_$lambda_5gjoyr(this)();
  };
  protoOf(ConcurrentMutableMap).g4 = function () {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.x18_1;
    return ConcurrentMutableMap$_get_values_$lambda_tyvlyt(this)();
  };
  protoOf(ConcurrentMutableMap).l1 = function (key) {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.x18_1;
    return ConcurrentMutableMap$containsKey$lambda(this, key)();
  };
  protoOf(ConcurrentMutableMap).n1 = function (key) {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.x18_1;
    return ConcurrentMutableMap$get$lambda(this, key)();
  };
  protoOf(ConcurrentMutableMap).n = function () {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.x18_1;
    return ConcurrentMutableMap$isEmpty$lambda(this)();
  };
  protoOf(ConcurrentMutableMap).e1 = function () {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.x18_1;
    ConcurrentMutableMap$clear$lambda(this)();
  };
  protoOf(ConcurrentMutableMap).h4 = function (key, value) {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.x18_1;
    return ConcurrentMutableMap$put$lambda(this, key, value)();
  };
  protoOf(ConcurrentMutableMap).i4 = function (key) {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.x18_1;
    return ConcurrentMutableMap$remove$lambda(this, key)();
  };
  function ConcurrentMutableSet_init_$Init$($this) {
    // Inline function 'kotlin.collections.mutableSetOf' call
    var tmp$ret$0 = LinkedHashSet_init_$Create$();
    ConcurrentMutableSet.call($this, null, tmp$ret$0);
    return $this;
  }
  function ConcurrentMutableSet_init_$Create$() {
    return ConcurrentMutableSet_init_$Init$(objectCreate(protoOf(ConcurrentMutableSet)));
  }
  function ConcurrentMutableSet(rootArg, del) {
    ConcurrentMutableCollection.call(this, rootArg, del);
    this.a19_1 = del;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ConcurrentMutableMap_init_$Create$;
  //endregion
  return _;
}));

//# sourceMappingURL=Stately-stately-concurrent-collections.js.map
