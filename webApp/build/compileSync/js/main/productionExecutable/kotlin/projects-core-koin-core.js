(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './Stately-stately-concurrency.js', './Stately-stately-concurrent-collections.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./Stately-stately-concurrency.js'), require('./Stately-stately-concurrent-collections.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'projects-core-koin-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'projects-core-koin-core'.");
    }
    if (typeof globalThis['Stately-stately-concurrency'] === 'undefined') {
      throw new Error("Error loading module 'projects-core-koin-core'. Its dependency 'Stately-stately-concurrency' was not found. Please, check whether 'Stately-stately-concurrency' is loaded prior to 'projects-core-koin-core'.");
    }
    if (typeof globalThis['Stately-stately-concurrent-collections'] === 'undefined') {
      throw new Error("Error loading module 'projects-core-koin-core'. Its dependency 'Stately-stately-concurrent-collections' was not found. Please, check whether 'Stately-stately-concurrent-collections' is loaded prior to 'projects-core-koin-core'.");
    }
    globalThis['projects-core-koin-core'] = factory(typeof globalThis['projects-core-koin-core'] === 'undefined' ? {} : globalThis['projects-core-koin-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['Stately-stately-concurrency'], globalThis['Stately-stately-concurrent-collections']);
  }
}(function (_, kotlin_kotlin, kotlin_co_touchlab_stately_concurrency, kotlin_co_touchlab_stately_concurrent_collections) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.y2;
  var protoOf = kotlin_kotlin.$_$.m7;
  var Monotonic_instance = kotlin_kotlin.$_$.v2;
  var ValueTimeMark__elapsedNow_impl_eonqvs = kotlin_kotlin.$_$.j2;
  var initMetadataForClass = kotlin_kotlin.$_$.v6;
  var initMetadataForCompanion = kotlin_kotlin.$_$.w6;
  var toList = kotlin_kotlin.$_$.g5;
  var initMetadataForInterface = kotlin_kotlin.$_$.y6;
  var VOID = kotlin_kotlin.$_$.d;
  var emptyList = kotlin_kotlin.$_$.a4;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.d1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.k2;
  var equals = kotlin_kotlin.$_$.m6;
  var joinTo = kotlin_kotlin.$_$.m4;
  var THROW_CCE = kotlin_kotlin.$_$.y8;
  var hashCode = kotlin_kotlin.$_$.u6;
  var Enum = kotlin_kotlin.$_$.q8;
  var toString = kotlin_kotlin.$_$.n9;
  var toString_0 = kotlin_kotlin.$_$.o7;
  var Exception = kotlin_kotlin.$_$.s8;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.j1;
  var captureStack = kotlin_kotlin.$_$.h6;
  var Exception_init_$Init$_0 = kotlin_kotlin.$_$.l1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.x;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.p;
  var getStringHashCode = kotlin_kotlin.$_$.t6;
  var asReversed = kotlin_kotlin.$_$.p3;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.n;
  var get_lastIndex = kotlin_kotlin.$_$.n4;
  var toList_0 = kotlin_kotlin.$_$.f5;
  var getKClass = kotlin_kotlin.$_$.b;
  var copyToArray = kotlin_kotlin.$_$.y3;
  var arrayListOf = kotlin_kotlin.$_$.n3;
  var TimedValue = kotlin_kotlin.$_$.k8;
  var ArrayDeque_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var ThreadLocalRef = kotlin_co_touchlab_stately_concurrency.$_$.a;
  var _Duration___get_inWholeMicroseconds__impl__8oe8vv = kotlin_kotlin.$_$.c2;
  var Companion_getInstance = kotlin_kotlin.$_$.w2;
  var initMetadataForObject = kotlin_kotlin.$_$.a7;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.i1;
  var split = kotlin_kotlin.$_$.h8;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.j;
  var ConcurrentMutableMap_init_$Create$ = kotlin_co_touchlab_stately_concurrent_collections.$_$.a;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Koin, 'Koin', Koin);
  initMetadataForCompanion(Companion);
  initMetadataForClass(KoinApplication, 'KoinApplication');
  function getKoin() {
    return KoinPlatformTools_instance.c1a().pn();
  }
  initMetadataForInterface(KoinComponent, 'KoinComponent');
  initMetadataForInterface(KoinScopeComponent, 'KoinScopeComponent', VOID, VOID, [KoinComponent]);
  initMetadataForClass(BeanDefinition, 'BeanDefinition');
  initMetadataForClass(Kind, 'Kind', VOID, Enum);
  initMetadataForClass(Callbacks, 'Callbacks', Callbacks);
  initMetadataForClass(KoinDefinition, 'KoinDefinition');
  initMetadataForClass(ClosedScopeException, 'ClosedScopeException', VOID, Exception);
  initMetadataForClass(DefinitionOverrideException, 'DefinitionOverrideException', VOID, Exception);
  initMetadataForClass(InstanceCreationException, 'InstanceCreationException', VOID, Exception);
  initMetadataForClass(KoinApplicationAlreadyStartedException, 'KoinApplicationAlreadyStartedException', VOID, Exception);
  initMetadataForClass(NoDefinitionFoundException, 'NoDefinitionFoundException', VOID, Exception);
  initMetadataForClass(ExtensionManager, 'ExtensionManager');
  initMetadataForClass(InstanceFactory, 'InstanceFactory');
  initMetadataForClass(FactoryInstanceFactory, 'FactoryInstanceFactory', VOID, InstanceFactory);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(ResolutionContext, 'ResolutionContext');
  initMetadataForClass(NoClass, 'NoClass', NoClass);
  initMetadataForClass(SingleInstanceFactory, 'SingleInstanceFactory', VOID, InstanceFactory);
  initMetadataForClass(Logger, 'Logger');
  initMetadataForClass(EmptyLogger, 'EmptyLogger', EmptyLogger, Logger);
  initMetadataForClass(Level, 'Level', VOID, Enum);
  initMetadataForClass(Module, 'Module', Module);
  initMetadataForClass(ParametersHolder, 'ParametersHolder', ParametersHolder);
  initMetadataForClass(StringQualifier, 'StringQualifier');
  initMetadataForClass(InstanceRegistry, 'InstanceRegistry');
  initMetadataForClass(PropertyRegistry, 'PropertyRegistry');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(ScopeRegistry, 'ScopeRegistry');
  initMetadataForClass(Scope, 'Scope');
  initMetadataForObject(GlobalContext, 'GlobalContext');
  initMetadataForObject(KoinPlatformTools, 'KoinPlatformTools');
  //endregion
  function Koin() {
    this.b19_1 = new ScopeRegistry(this);
    this.c19_1 = new InstanceRegistry(this);
    this.d19_1 = new PropertyRegistry(this);
    this.e19_1 = new ExtensionManager(this);
    this.f19_1 = new EmptyLogger();
  }
  protoOf(Koin).g19 = function (modules, allowOverride, createEagerInstances) {
    var flattedModules = flatten(modules);
    this.c19_1.k19(flattedModules, allowOverride);
    this.b19_1.p19(flattedModules);
    if (createEagerInstances) {
      this.q19();
    }
  };
  protoOf(Koin).q19 = function () {
    this.f19_1.s19('Create eager instances ...');
    // Inline function 'kotlin.time.measureTime' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.time.measureTime' call
    // Inline function 'kotlin.contracts.contract' call
    var mark = Monotonic_instance.ib();
    // Inline function 'org.koin.core.Koin.createEagerInstances.<anonymous>' call
    this.c19_1.t19();
    var duration = ValueTimeMark__elapsedNow_impl_eonqvs(mark);
    this.f19_1.s19('Created eager instances in ' + get_inMs(duration) + ' ms');
  };
  function loadModules($this, modules) {
    $this.u19_1.g19(modules, $this.v19_1, false);
  }
  function Companion() {
  }
  protoOf(Companion).w19 = function () {
    var app = new KoinApplication();
    return app;
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    return Companion_instance;
  }
  function KoinApplication() {
    this.u19_1 = new Koin();
    this.v19_1 = true;
  }
  protoOf(KoinApplication).x19 = function (modules) {
    return this.y19(toList(modules));
  };
  protoOf(KoinApplication).y19 = function (modules) {
    // Inline function 'org.koin.core.logger.Logger.isAt' call
    var this_0 = this.u19_1.f19_1;
    var lvl = Level_INFO_getInstance();
    if (this_0.r19_1.s1(lvl) <= 0) {
      // Inline function 'kotlin.time.measureTime' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.time.measureTime' call
      // Inline function 'kotlin.contracts.contract' call
      var mark = Monotonic_instance.ib();
      // Inline function 'org.koin.core.KoinApplication.modules.<anonymous>' call
      loadModules(this, modules);
      var duration = ValueTimeMark__elapsedNow_impl_eonqvs(mark);
      var count = this.u19_1.c19_1.z19();
      this.u19_1.f19_1.a1a(Level_INFO_getInstance(), 'Started ' + count + ' definitions in ' + get_inMs(duration) + ' ms');
    } else {
      loadModules(this, modules);
    }
    return this;
  };
  function KoinComponent() {
  }
  function KoinScopeComponent() {
  }
  function startKoin(appDeclaration) {
    return KoinPlatformTools_instance.c1a().e1a(appDeclaration);
  }
  function BeanDefinition$toString$lambda(it) {
    return getFullName(it);
  }
  function BeanDefinition(scopeQualifier, primaryType, qualifier, definition, kind, secondaryTypes) {
    qualifier = qualifier === VOID ? null : qualifier;
    var tmp;
    if (secondaryTypes === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = secondaryTypes;
    }
    secondaryTypes = tmp;
    this.f1a_1 = scopeQualifier;
    this.g1a_1 = primaryType;
    this.h1a_1 = qualifier;
    this.i1a_1 = definition;
    this.j1a_1 = kind;
    this.k1a_1 = secondaryTypes;
    this.l1a_1 = new Callbacks();
    this.m1a_1 = false;
  }
  protoOf(BeanDefinition).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.koin.core.definition.BeanDefinition.toString.<anonymous>' call
    this_0.l7(_Char___init__impl__6a9atx(91));
    this_0.j7(this.j1a_1);
    this_0.k7(": '");
    this_0.k7(getFullName(this.g1a_1));
    this_0.l7(_Char___init__impl__6a9atx(39));
    if (!(this.h1a_1 == null)) {
      this_0.k7(',qualifier:');
      this_0.j7(this.h1a_1);
    }
    if (!equals(this.f1a_1, Companion_getInstance_2().o1a_1)) {
      this_0.k7(',scope:');
      this_0.j7(this.f1a_1);
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.k1a_1.n()) {
      this_0.k7(',binds:');
      var tmp = this.k1a_1;
      joinTo(tmp, this_0, ',', VOID, VOID, VOID, VOID, BeanDefinition$toString$lambda);
    }
    this_0.l7(_Char___init__impl__6a9atx(93));
    return this_0.toString();
  };
  protoOf(BeanDefinition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BeanDefinition))
      THROW_CCE();
    if (!this.g1a_1.equals(other.g1a_1))
      return false;
    if (!equals(this.h1a_1, other.h1a_1))
      return false;
    if (!equals(this.f1a_1, other.f1a_1))
      return false;
    return true;
  };
  protoOf(BeanDefinition).hashCode = function () {
    var tmp0_safe_receiver = this.h1a_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    result = imul(31, result) + this.g1a_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.f1a_1) | 0;
    return result;
  };
  var Kind_Singleton_instance;
  var Kind_Factory_instance;
  var Kind_Scoped_instance;
  var Kind_entriesInitialized;
  function Kind_initEntries() {
    if (Kind_entriesInitialized)
      return Unit_instance;
    Kind_entriesInitialized = true;
    Kind_Singleton_instance = new Kind('Singleton', 0);
    Kind_Factory_instance = new Kind('Factory', 1);
    Kind_Scoped_instance = new Kind('Scoped', 2);
  }
  function Kind(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Kind_Singleton_getInstance() {
    Kind_initEntries();
    return Kind_Singleton_instance;
  }
  function Kind_Factory_getInstance() {
    Kind_initEntries();
    return Kind_Factory_instance;
  }
  function Callbacks(onClose) {
    onClose = onClose === VOID ? null : onClose;
    this.p1a_1 = onClose;
  }
  protoOf(Callbacks).toString = function () {
    return 'Callbacks(onClose=' + toString(this.p1a_1) + ')';
  };
  protoOf(Callbacks).hashCode = function () {
    return this.p1a_1 == null ? 0 : hashCode(this.p1a_1);
  };
  protoOf(Callbacks).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Callbacks))
      return false;
    var tmp0_other_with_cast = other instanceof Callbacks ? other : THROW_CCE();
    if (!equals(this.p1a_1, tmp0_other_with_cast.p1a_1))
      return false;
    return true;
  };
  function KoinDefinition(module_0, factory) {
    this.q1a_1 = module_0;
    this.r1a_1 = factory;
  }
  protoOf(KoinDefinition).toString = function () {
    return 'KoinDefinition(module=' + toString_0(this.q1a_1) + ', factory=' + toString_0(this.r1a_1) + ')';
  };
  protoOf(KoinDefinition).hashCode = function () {
    var result = this.q1a_1.hashCode();
    result = imul(result, 31) + hashCode(this.r1a_1) | 0;
    return result;
  };
  protoOf(KoinDefinition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KoinDefinition))
      return false;
    var tmp0_other_with_cast = other instanceof KoinDefinition ? other : THROW_CCE();
    if (!this.q1a_1.equals(tmp0_other_with_cast.q1a_1))
      return false;
    if (!equals(this.r1a_1, tmp0_other_with_cast.r1a_1))
      return false;
    return true;
  };
  function ClosedScopeException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, ClosedScopeException);
  }
  function DefinitionOverrideException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, DefinitionOverrideException);
  }
  function InstanceCreationException(msg, parent) {
    Exception_init_$Init$_0(msg, parent, this);
    captureStack(this, InstanceCreationException);
  }
  function KoinApplicationAlreadyStartedException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, KoinApplicationAlreadyStartedException);
  }
  function NoDefinitionFoundException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, NoDefinitionFoundException);
  }
  function ExtensionManager(_koin) {
    this.s1a_1 = _koin;
    var tmp = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp.t1a_1 = HashMap_init_$Create$();
  }
  function FactoryInstanceFactory(beanDefinition) {
    InstanceFactory.call(this, beanDefinition);
  }
  protoOf(FactoryInstanceFactory).v1a = function (context) {
    return this.x1a(context);
  };
  function Companion_0() {
    this.y1a_1 = '\n\t';
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    return Companion_instance_0;
  }
  function InstanceFactory(beanDefinition) {
    this.w1a_1 = beanDefinition;
  }
  protoOf(InstanceFactory).x1a = function (context) {
    context.z1a_1.s19("| (+) '" + this.w1a_1.toString() + "'");
    try {
      var tmp0_elvis_lhs = context.d1b_1;
      var parameters = tmp0_elvis_lhs == null ? emptyParametersHolder() : tmp0_elvis_lhs;
      return this.w1a_1.i1a_1(context.a1b_1, parameters);
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var stack = KoinPlatformTools_instance.f1b(e);
        context.z1a_1.g1b("* Instance creation error : could not create instance for '" + this.w1a_1.toString() + "': " + stack);
        throw new InstanceCreationException("Could not create instance for '" + this.w1a_1.toString() + "'", e);
      } else {
        throw $p;
      }
    }
  };
  function ResolutionContext(logger, scope, clazz, qualifier, parameters) {
    qualifier = qualifier === VOID ? null : qualifier;
    parameters = parameters === VOID ? null : parameters;
    this.z1a_1 = logger;
    this.a1b_1 = scope;
    this.b1b_1 = clazz;
    this.c1b_1 = qualifier;
    this.d1b_1 = parameters;
    this.e1b_1 = "t:'" + getFullName(this.b1b_1) + "' - q:'" + toString(this.c1b_1) + "'";
  }
  function NoClass() {
  }
  function getValue($this) {
    var tmp0_elvis_lhs = $this.i1b_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = "Single instance created couldn't return value";
      throw IllegalStateException_init_$Create$(toString_0(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SingleInstanceFactory$get$lambda(this$0, $context) {
    return function () {
      var tmp;
      if (!this$0.j1b($context)) {
        this$0.i1b_1 = this$0.x1a($context);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function SingleInstanceFactory(beanDefinition) {
    InstanceFactory.call(this, beanDefinition);
    this.i1b_1 = null;
  }
  protoOf(SingleInstanceFactory).j1b = function (context) {
    return !(this.i1b_1 == null);
  };
  protoOf(SingleInstanceFactory).x1a = function (context) {
    var tmp;
    if (this.i1b_1 == null) {
      tmp = protoOf(InstanceFactory).x1a.call(this, context);
    } else {
      tmp = getValue(this);
    }
    return tmp;
  };
  protoOf(SingleInstanceFactory).v1a = function (context) {
    var tmp = KoinPlatformTools_instance;
    tmp.k1b(this, SingleInstanceFactory$get$lambda(this, context));
    return getValue(this);
  };
  function EmptyLogger() {
    Logger.call(this, Level_NONE_getInstance());
  }
  protoOf(EmptyLogger).a1a = function (level, msg) {
  };
  function Logger(level) {
    level = level === VOID ? Level_INFO_getInstance() : level;
    this.r19_1 = level;
  }
  protoOf(Logger).s19 = function (msg) {
    this.n1b(Level_DEBUG_getInstance(), msg);
  };
  protoOf(Logger).m1b = function (msg) {
    this.n1b(Level_WARNING_getInstance(), msg);
  };
  protoOf(Logger).g1b = function (msg) {
    this.n1b(Level_ERROR_getInstance(), msg);
  };
  protoOf(Logger).n1b = function (lvl, msg) {
    // Inline function 'org.koin.core.logger.Logger.isAt' call
    if (this.r19_1.s1(lvl) <= 0) {
      this.a1a(lvl, msg);
    }
  };
  var Level_DEBUG_instance;
  var Level_INFO_instance;
  var Level_WARNING_instance;
  var Level_ERROR_instance;
  var Level_NONE_instance;
  var Level_entriesInitialized;
  function Level_initEntries() {
    if (Level_entriesInitialized)
      return Unit_instance;
    Level_entriesInitialized = true;
    Level_DEBUG_instance = new Level('DEBUG', 0);
    Level_INFO_instance = new Level('INFO', 1);
    Level_WARNING_instance = new Level('WARNING', 2);
    Level_ERROR_instance = new Level('ERROR', 3);
    Level_NONE_instance = new Level('NONE', 4);
  }
  function Level(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Level_DEBUG_getInstance() {
    Level_initEntries();
    return Level_DEBUG_instance;
  }
  function Level_INFO_getInstance() {
    Level_initEntries();
    return Level_INFO_instance;
  }
  function Level_WARNING_getInstance() {
    Level_initEntries();
    return Level_WARNING_instance;
  }
  function Level_ERROR_getInstance() {
    Level_initEntries();
    return Level_ERROR_instance;
  }
  function Level_NONE_getInstance() {
    Level_initEntries();
    return Level_NONE_instance;
  }
  function Module(_createdAtStart) {
    _createdAtStart = _createdAtStart === VOID ? false : _createdAtStart;
    this.o1b_1 = _createdAtStart;
    this.p1b_1 = generateId(KoinPlatformTools_instance);
    this.q1b_1 = LinkedHashSet_init_$Create$();
    this.r1b_1 = LinkedHashMap_init_$Create$();
    this.s1b_1 = LinkedHashSet_init_$Create$();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.t1b_1 = ArrayList_init_$Create$();
  }
  protoOf(Module).u1b = function (instanceFactory) {
    var def = instanceFactory.w1a_1;
    // Inline function 'org.koin.core.definition.indexKey' call
    var clazz = def.g1a_1;
    var typeQualifier = def.h1a_1;
    var scopeQualifier = def.f1a_1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.koin.core.definition.indexKey.<anonymous>' call
    this_0.k7(getFullName(clazz));
    this_0.l7(_Char___init__impl__6a9atx(58));
    var tmp1_elvis_lhs = typeQualifier == null ? null : typeQualifier.k1();
    this_0.k7(tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
    this_0.l7(_Char___init__impl__6a9atx(58));
    this_0.j7(scopeQualifier);
    var mapping = this_0.toString();
    this.v1b(mapping, instanceFactory);
  };
  protoOf(Module).w1b = function (instanceFactory) {
    this.q1b_1.d(instanceFactory);
  };
  protoOf(Module).v1b = function (mapping, factory) {
    // Inline function 'kotlin.collections.set' call
    this.r1b_1.h4(mapping, factory);
  };
  protoOf(Module).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Module))
      return false;
    return this.p1b_1 === other.p1b_1;
  };
  protoOf(Module).hashCode = function () {
    return getStringHashCode(this.p1b_1);
  };
  function flatten(modules) {
    // Inline function 'kotlin.collections.linkedSetOf' call
    var flatten = LinkedHashSet_init_$Create$();
    var stack = ArrayDeque_init_$Create$(asReversed(modules));
    $l$loop_0: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!stack.n()) {
        break $l$loop_0;
      }
      var current = stack.mc();
      if (!flatten.d(current)) {
        continue $l$loop_0;
      }
      var _iterator__ex2g4s = current.t1b_1.i();
      while (_iterator__ex2g4s.j()) {
        var module_0 = _iterator__ex2g4s.k();
        if (!flatten.p(module_0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          stack.d(module_0);
        }
      }
    }
    return flatten;
  }
  function overrideError(factory, mapping) {
    throw new DefinitionOverrideException('Already existing definition for ' + factory.w1a_1.toString() + ' at ' + mapping);
  }
  function getFirstValue($this, clazz) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = $this.x1b_1.i();
      while (tmp0_iterator.j()) {
        var element = tmp0_iterator.k();
        // Inline function 'org.koin.core.parameter.ParametersHolder.getFirstValue.<anonymous>' call
        if (clazz.o9(element)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp = tmp$ret$1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : null;
  }
  function getIndexedValue($this, clazz) {
    // Inline function 'kotlin.takeIf' call
    var this_0 = $this.x1b_1.o($this.z1b_1);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'org.koin.core.parameter.ParametersHolder.getIndexedValue.<anonymous>' call
    if (clazz.o9(this_0)) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp_0 = tmp;
    var currentValue = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : null;
    if (!(currentValue == null)) {
      $this.a1c();
    }
    return currentValue;
  }
  function ParametersHolder(_values, useIndexedValues) {
    var tmp;
    if (_values === VOID) {
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp = ArrayList_init_$Create$();
    } else {
      tmp = _values;
    }
    _values = tmp;
    useIndexedValues = useIndexedValues === VOID ? null : useIndexedValues;
    this.x1b_1 = _values;
    this.y1b_1 = useIndexedValues;
    this.z1b_1 = 0;
  }
  protoOf(ParametersHolder).b1c = function (clazz) {
    var tmp;
    if (this.x1b_1.n()) {
      tmp = null;
    } else {
      var tmp_0;
      switch (this.y1b_1) {
        case null:
          var tmp1_elvis_lhs = getIndexedValue(this, clazz);
          tmp_0 = tmp1_elvis_lhs == null ? getFirstValue(this, clazz) : tmp1_elvis_lhs;
          break;
        case true:
          tmp_0 = getIndexedValue(this, clazz);
          break;
        default:
          tmp_0 = getFirstValue(this, clazz);
          break;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(ParametersHolder).a1c = function () {
    if (this.z1b_1 < get_lastIndex(this.x1b_1)) {
      this.z1b_1 = this.z1b_1 + 1 | 0;
    }
  };
  protoOf(ParametersHolder).toString = function () {
    return 'DefinitionParameters' + toString_0(toList_0(this.x1b_1));
  };
  function emptyParametersHolder() {
    return new ParametersHolder();
  }
  function _q(name) {
    return new StringQualifier(name);
  }
  function StringQualifier(value) {
    this.c1c_1 = value;
  }
  protoOf(StringQualifier).k1 = function () {
    return this.c1c_1;
  };
  protoOf(StringQualifier).toString = function () {
    return this.c1c_1;
  };
  protoOf(StringQualifier).hashCode = function () {
    return getStringHashCode(this.c1c_1);
  };
  protoOf(StringQualifier).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StringQualifier))
      return false;
    var tmp0_other_with_cast = other instanceof StringQualifier ? other : THROW_CCE();
    if (!(this.c1c_1 === tmp0_other_with_cast.c1c_1))
      return false;
    return true;
  };
  function addAllEagerInstances($this, module_0) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = module_0.q1b_1.i();
    while (tmp0_iterator.j()) {
      var element = tmp0_iterator.k();
      // Inline function 'org.koin.core.registry.InstanceRegistry.addAllEagerInstances.<anonymous>' call
      // Inline function 'kotlin.collections.set' call
      var this_0 = $this.j19_1;
      var key = element.w1a_1.hashCode();
      this_0.h4(key, element);
    }
  }
  function loadModule($this, module_0, allowOverride) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = module_0.r1b_1.p1().i();
    while (tmp0_iterator.j()) {
      var element = tmp0_iterator.k();
      // Inline function 'org.koin.core.registry.InstanceRegistry.loadModule.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var mapping = element.j1();
      // Inline function 'kotlin.collections.component2' call
      var factory = element.k1();
      $this.d1c(allowOverride, mapping, factory);
    }
  }
  function createEagerInstances($this, instances) {
    var defaultContext = new ResolutionContext($this.h19_1.f19_1, $this.h19_1.b19_1.o19_1, getKClass(NoClass));
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = instances.i();
    while (tmp0_iterator.j()) {
      var element = tmp0_iterator.k();
      // Inline function 'org.koin.core.registry.InstanceRegistry.createEagerInstances.<anonymous>' call
      element.v1a(defaultContext);
    }
  }
  function InstanceRegistry(_koin) {
    this.h19_1 = _koin;
    this.i19_1 = KoinPlatformTools_instance.e1c();
    this.j19_1 = KoinPlatformTools_instance.e1c();
  }
  protoOf(InstanceRegistry).k19 = function (modules, allowOverride) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = modules.i();
    while (tmp0_iterator.j()) {
      var element = tmp0_iterator.k();
      // Inline function 'org.koin.core.registry.InstanceRegistry.loadModules.<anonymous>' call
      loadModule(this, element, allowOverride);
      addAllEagerInstances(this, element);
    }
  };
  protoOf(InstanceRegistry).t19 = function () {
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = this.j19_1.g4();
    var tmp$ret$0 = copyToArray(this_0);
    var instances = arrayListOf(tmp$ret$0.slice());
    this.j19_1.e1();
    createEagerInstances(this, instances);
  };
  protoOf(InstanceRegistry).f1c = function (allowOverride, mapping, factory, logWarning) {
    if (this.i19_1.n1(mapping) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!allowOverride) {
        overrideError(factory, mapping);
      } else if (logWarning) {
        this.h19_1.f19_1.m1b("(+) override index '" + mapping + "' -> '" + factory.w1a_1.toString() + "'");
      }
    }
    this.h19_1.f19_1.s19("(+) index '" + mapping + "' -> '" + factory.w1a_1.toString() + "'");
    // Inline function 'kotlin.collections.set' call
    this.i19_1.h4(mapping, factory);
  };
  protoOf(InstanceRegistry).d1c = function (allowOverride, mapping, factory, logWarning, $super) {
    logWarning = logWarning === VOID ? true : logWarning;
    var tmp;
    if ($super === VOID) {
      this.f1c(allowOverride, mapping, factory, logWarning);
      tmp = Unit_instance;
    } else {
      tmp = $super.f1c.call(this, allowOverride, mapping, factory, logWarning);
    }
    return tmp;
  };
  protoOf(InstanceRegistry).g1c = function (clazz, qualifier, scopeQualifier) {
    // Inline function 'org.koin.core.definition.indexKey' call
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.koin.core.definition.indexKey.<anonymous>' call
    this_0.k7(getFullName(clazz));
    this_0.l7(_Char___init__impl__6a9atx(58));
    var tmp1_elvis_lhs = qualifier == null ? null : qualifier.k1();
    this_0.k7(tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
    this_0.l7(_Char___init__impl__6a9atx(58));
    this_0.j7(scopeQualifier);
    var indexKey = this_0.toString();
    return this.i19_1.n1(indexKey);
  };
  protoOf(InstanceRegistry).h1c = function (qualifier, clazz, scopeQualifier, instanceContext) {
    var tmp0_safe_receiver = this.g1c(clazz, qualifier, scopeQualifier);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v1a(instanceContext);
    return (tmp == null ? true : !(tmp == null)) ? tmp : null;
  };
  protoOf(InstanceRegistry).z19 = function () {
    return this.i19_1.l();
  };
  function PropertyRegistry(_koin) {
    this.i1c_1 = _koin;
    this.j1c_1 = KoinPlatformTools_instance.e1c();
  }
  function loadModule_0($this, module_0) {
    $this.m19_1.m(module_0.s1b_1);
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.n1a_1 = '_root_';
    this.o1a_1 = _q('_root_');
  }
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function ScopeRegistry(_koin) {
    Companion_getInstance_2();
    this.l19_1 = _koin;
    this.m19_1 = KoinPlatformTools_instance.k1c();
    this.n19_1 = KoinPlatformTools_instance.e1c();
    this.o19_1 = new Scope(Companion_getInstance_2().o1a_1, '_root_', true, this.l19_1);
    this.m19_1.d(this.o19_1.l1c_1);
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.n19_1;
    var key = this.o19_1.m1c_1;
    var value = this.o19_1;
    this_0.h4(key, value);
  }
  protoOf(ScopeRegistry).p19 = function (modules) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = modules.i();
    while (tmp0_iterator.j()) {
      var element = tmp0_iterator.k();
      // Inline function 'org.koin.core.registry.ScopeRegistry.loadScopes.<anonymous>' call
      loadModule_0(this, element);
    }
  };
  function get($this, clazz, qualifier, parameters) {
    return resolveWithOptionalLogging($this, clazz, qualifier, parameters);
  }
  function resolveWithOptionalLogging($this, clazz, qualifier, parameters) {
    // Inline function 'org.koin.core.logger.Logger.isAt' call
    var this_0 = $this.o1c_1.f19_1;
    var lvl = Level_DEBUG_getInstance();
    if (!(this_0.r19_1.s1(lvl) <= 0)) {
      return resolveInstance($this, qualifier, clazz, parameters);
    }
    // Inline function 'org.koin.core.scope.Scope.logInstanceRequest' call
    var tmp;
    if (qualifier == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.koin.core.scope.Scope.logInstanceRequest.<anonymous>' call
      tmp = " with qualifier '" + toString(qualifier) + "'";
    }
    var tmp1_elvis_lhs = tmp;
    var qualifierString = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    var scopeId = $this.n1c_1 ? '' : " - scope:'" + $this.m1c_1 + "'";
    $this.o1c_1.f19_1.a1a(Level_DEBUG_getInstance(), "|- '" + getFullName(clazz) + "'" + qualifierString + scopeId + '...');
    // Inline function 'kotlin.time.measureTimedValue' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.time.measureTimedValue' call
    // Inline function 'kotlin.contracts.contract' call
    var mark = Monotonic_instance.ib();
    // Inline function 'org.koin.core.scope.Scope.resolveWithOptionalLogging.<anonymous>' call
    var result = resolveInstance($this, qualifier, clazz, parameters);
    var result_0 = new TimedValue(result, ValueTimeMark__elapsedNow_impl_eonqvs(mark));
    // Inline function 'org.koin.core.scope.Scope.logInstanceDuration' call
    var duration = result_0.if_1;
    $this.o1c_1.f19_1.a1a(Level_DEBUG_getInstance(), "|- '" + getFullName(clazz) + "' in " + get_inMs(duration) + ' ms');
    return result_0.hf_1;
  }
  function resolveInstance($this, qualifier, clazz, parameters) {
    // Inline function 'org.koin.core.scope.Scope.checkScopeIsOpen' call
    if ($this.t1c_1) {
      throw new ClosedScopeException("Scope '" + $this.m1c_1 + "' is closed");
    }
    var instanceContext = new ResolutionContext($this.o1c_1.f19_1, $this, clazz, qualifier, parameters);
    return stackParametersCall($this, parameters, instanceContext);
  }
  function stackParametersCall($this, parameters, instanceContext) {
    if (parameters == null) {
      return resolveFromContext($this, instanceContext);
    }
    // Inline function 'org.koin.core.logger.Logger.log' call
    var this_0 = $this.o1c_1.f19_1;
    var lvl = Level_DEBUG_getInstance();
    // Inline function 'org.koin.core.logger.Logger.isAt' call
    if (this_0.r19_1.s1(lvl) <= 0) {
      // Inline function 'org.koin.core.scope.Scope.stackParametersCall.<anonymous>' call
      var tmp$ret$1 = '| >> parameters ' + toString(parameters);
      this_0.a1a(lvl, tmp$ret$1);
    }
    var stack = onParameterOnStack($this, parameters);
    try {
      return resolveFromContext($this, instanceContext);
    }finally {
      $this.o1c_1.f19_1.s19('| << parameters');
      clearParameterStack($this, stack);
    }
  }
  function onParameterOnStack($this, parameters) {
    var stack = getOrCreateParameterStack($this);
    stack.ic(parameters);
    return stack;
  }
  function clearParameterStack($this, stack) {
    stack.lc();
    if (stack.n()) {
      var tmp0_safe_receiver = $this.s1c_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.g3();
      }
      $this.s1c_1 = null;
    }
  }
  function getOrCreateParameterStack($this) {
    var tmp0_safe_receiver = $this.s1c_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.pn();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.koin.core.scope.Scope.getOrCreateParameterStack.<anonymous>' call
      var it = ArrayDeque_init_$Create$_0();
      $this.s1c_1 = new ThreadLocalRef();
      var tmp0_safe_receiver_0 = $this.s1c_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        tmp0_safe_receiver_0.r18(it);
      }
      tmp = it;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function resolveFromContext($this, instanceContext) {
    // Inline function 'org.koin.core.scope.Scope.resolveFromInjectedParameters' call
    var tmp;
    if (instanceContext.d1b_1 == null) {
      tmp = null;
    } else {
      $this.o1c_1.f19_1.s19('|- ? ' + instanceContext.e1b_1 + ' look in injected parameters');
      tmp = instanceContext.d1b_1.b1c(instanceContext.b1b_1);
    }
    var tmp0_elvis_lhs = tmp;
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? resolveFromRegistry($this, instanceContext) : tmp0_elvis_lhs;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'org.koin.core.scope.Scope.resolveFromStackedParameters' call
      var tmp0_safe_receiver = $this.s1c_1;
      var current = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.pn();
      var tmp_1;
      // Inline function 'kotlin.collections.isNullOrEmpty' call
      // Inline function 'kotlin.contracts.contract' call
      if (current == null || current.n()) {
        tmp_1 = null;
      } else {
        $this.o1c_1.f19_1.s19('|- ? ' + instanceContext.e1b_1 + ' look in stack parameters');
        var parameters = current.hc();
        tmp_1 = parameters == null ? null : parameters.b1c(instanceContext.b1b_1);
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var tmp2_elvis_lhs = tmp_0;
    var tmp_2;
    if (tmp2_elvis_lhs == null) {
      var tmp$ret$3;
      $l$block: {
        // Inline function 'org.koin.core.scope.Scope.resolveFromScopeSource' call
        if ($this.n1c_1) {
          tmp$ret$3 = null;
          break $l$block;
        }
        $this.o1c_1.f19_1.s19('|- ? ' + instanceContext.e1b_1 + ' look at scope source');
        var tmp_3;
        if (instanceContext.b1b_1.o9($this.q1c_1) && instanceContext.c1b_1 == null) {
          var tmp_4 = $this.q1c_1;
          tmp_3 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : null;
        } else {
          tmp_3 = null;
        }
        tmp$ret$3 = tmp_3;
      }
      tmp_2 = tmp$ret$3;
    } else {
      tmp_2 = tmp2_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_2;
    var tmp4_elvis_lhs = tmp3_elvis_lhs == null ? resolveFromParentScopes($this, instanceContext) : tmp3_elvis_lhs;
    var tmp_5;
    if (tmp4_elvis_lhs == null) {
      $this.o1c_1.f19_1.s19('|- << parameters');
      var tmp0_safe_receiver_0 = instanceContext.c1b_1;
      var tmp_6;
      if (tmp0_safe_receiver_0 == null) {
        tmp_6 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.koin.core.scope.Scope.throwDefinitionNotFound.<anonymous>' call
        tmp_6 = " and qualifier '" + toString_0(tmp0_safe_receiver_0) + "'";
      }
      var tmp1_elvis_lhs_0 = tmp_6;
      var qualifierString = tmp1_elvis_lhs_0 == null ? '' : tmp1_elvis_lhs_0;
      throw new NoDefinitionFoundException("No definition found for type '" + getFullName(instanceContext.b1b_1) + "'" + qualifierString + '. Check your Modules configuration and add missing type and/or qualifier!');
    } else {
      tmp_5 = tmp4_elvis_lhs;
    }
    return tmp_5;
  }
  function resolveFromRegistry($this, ctx) {
    return $this.o1c_1.c19_1.h1c(ctx.c1b_1, ctx.b1b_1, $this.l1c_1, ctx);
  }
  function resolveFromParentScopes($this, ctx) {
    $this.o1c_1.f19_1.s19('|- ? ' + ctx.e1b_1 + ' look in other scopes');
    return findInOtherScope($this, ctx);
  }
  function findInOtherScope($this, ctx) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstNotNullOfOrNull' call
      var tmp0_iterator = $this.p1c_1.i();
      while (tmp0_iterator.j()) {
        var element = tmp0_iterator.k();
        // Inline function 'org.koin.core.scope.Scope.findInOtherScope.<anonymous>' call
        var result = element.u1c(ctx);
        if (!(result == null)) {
          tmp$ret$1 = result;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  }
  function Scope(scopeQualifier, id, isRoot, _koin) {
    isRoot = isRoot === VOID ? false : isRoot;
    this.l1c_1 = scopeQualifier;
    this.m1c_1 = id;
    this.n1c_1 = isRoot;
    this.o1c_1 = _koin;
    this.p1c_1 = LinkedHashSet_init_$Create$();
    this.q1c_1 = null;
    this.r1c_1 = LinkedHashSet_init_$Create$();
    this.s1c_1 = null;
    this.t1c_1 = false;
  }
  protoOf(Scope).u1c = function (ctx) {
    var tmp;
    try {
      tmp = get(this, ctx.b1b_1, ctx.c1b_1, ctx.d1b_1);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof ClosedScopeException) {
        var e = $p;
        this.o1c_1.f19_1.s19('* Scope closed - no instance found for ' + getFullName(ctx.b1b_1) + ' on scope ' + this.toString());
        tmp_0 = null;
      } else {
        if ($p instanceof NoDefinitionFoundException) {
          var e_0 = $p;
          this.o1c_1.f19_1.s19("* No instance found for type '" + getFullName(ctx.b1b_1) + "' on scope '" + this.toString() + "'");
          tmp_0 = null;
        } else {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Scope).v1c = function (clazz, qualifier, parameters) {
    return resolveWithOptionalLogging(this, clazz, qualifier, parameters == null ? null : parameters());
  };
  protoOf(Scope).toString = function () {
    return "['" + this.m1c_1 + "']";
  };
  function get_inMs(_this__u8e3s4) {
    // Inline function 'kotlin.Long.div' call
    return _Duration___get_inWholeMicroseconds__impl__8oe8vv(_this__u8e3s4).p2() / 1000.0;
  }
  function module_0(createdAtStart, moduleDeclaration) {
    createdAtStart = createdAtStart === VOID ? false : createdAtStart;
    var module_0 = new Module(createdAtStart);
    moduleDeclaration(module_0);
    return module_0;
  }
  function get_classNames() {
    _init_properties_KClassExt_kt__5ro5b2();
    return classNames;
  }
  var classNames;
  function getFullName(_this__u8e3s4) {
    _init_properties_KClassExt_kt__5ro5b2();
    var tmp0_elvis_lhs = get_classNames().n1(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? saveCache(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function saveCache(_this__u8e3s4) {
    _init_properties_KClassExt_kt__5ro5b2();
    var name = KoinPlatformTools_instance.w1c(_this__u8e3s4);
    // Inline function 'kotlin.collections.set' call
    get_classNames().h4(_this__u8e3s4, name);
    return name;
  }
  var properties_initialized_KClassExt_kt_dizwhw;
  function _init_properties_KClassExt_kt__5ro5b2() {
    if (!properties_initialized_KClassExt_kt_dizwhw) {
      properties_initialized_KClassExt_kt_dizwhw = true;
      classNames = KoinPlatformTools_instance.e1c();
    }
  }
  function getKClassDefaultName(_this__u8e3s4, kClass) {
    return 'KClass@' + kClass.hashCode();
  }
  function generateId(_this__u8e3s4) {
    return Companion_getInstance().wf().toString();
  }
  function register($this, koinApplication) {
    if (!($this.x1c_1 == null)) {
      throw new KoinApplicationAlreadyStartedException('A Koin Application has already been started');
    }
    $this.x1c_1 = koinApplication.u19_1;
  }
  function GlobalContext() {
    this.x1c_1 = null;
  }
  protoOf(GlobalContext).pn = function () {
    var tmp0_elvis_lhs = this.x1c_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'KoinApplication has not been started';
      throw IllegalStateException_init_$Create$(toString_0(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(GlobalContext).e1a = function (appDeclaration) {
    var koinApplication = Companion_instance.w19();
    register(this, koinApplication);
    appDeclaration(koinApplication);
    return koinApplication;
  };
  var GlobalContext_instance;
  function GlobalContext_getInstance() {
    return GlobalContext_instance;
  }
  function KoinPlatformTools() {
  }
  protoOf(KoinPlatformTools).f1b = function (e) {
    return e.toString() + toString_0(split(Exception_init_$Create$().toString(), ['\n']));
  };
  protoOf(KoinPlatformTools).w1c = function (kClass) {
    var tmp0_elvis_lhs = kClass.n9();
    return tmp0_elvis_lhs == null ? getKClassDefaultName(this, kClass) : tmp0_elvis_lhs;
  };
  protoOf(KoinPlatformTools).y1c = function () {
    return LazyThreadSafetyMode_NONE_getInstance();
  };
  protoOf(KoinPlatformTools).c1a = function () {
    return GlobalContext_instance;
  };
  protoOf(KoinPlatformTools).k1b = function (lock, block) {
    return block();
  };
  protoOf(KoinPlatformTools).e1c = function () {
    return ConcurrentMutableMap_init_$Create$();
  };
  protoOf(KoinPlatformTools).k1c = function () {
    // Inline function 'kotlin.collections.mutableSetOf' call
    return LinkedHashSet_init_$Create$();
  };
  var KoinPlatformTools_instance;
  function KoinPlatformTools_getInstance() {
    return KoinPlatformTools_instance;
  }
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  GlobalContext_instance = new GlobalContext();
  KoinPlatformTools_instance = new KoinPlatformTools();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Kind_Factory_getInstance;
  _.$_$.b = Kind_Singleton_getInstance;
  _.$_$.c = Companion_getInstance_2;
  _.$_$.d = KoinPlatformTools_instance;
  _.$_$.e = getKoin;
  _.$_$.f = KoinComponent;
  _.$_$.g = KoinScopeComponent;
  _.$_$.h = startKoin;
  _.$_$.i = BeanDefinition;
  _.$_$.j = KoinDefinition;
  _.$_$.k = FactoryInstanceFactory;
  _.$_$.l = SingleInstanceFactory;
  _.$_$.m = module_0;
  //endregion
  return _;
}));

//# sourceMappingURL=projects-core-koin-core.js.map
