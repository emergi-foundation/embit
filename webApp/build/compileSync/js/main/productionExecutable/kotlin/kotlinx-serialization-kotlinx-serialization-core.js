(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core'.");
    }
    globalThis['kotlinx-serialization-kotlinx-serialization-core'] = factory(typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined' ? {} : globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.m7;
  var initMetadataForInterface = kotlin_kotlin.$_$.y6;
  var asList = kotlin_kotlin.$_$.o3;
  var objectCreate = kotlin_kotlin.$_$.l7;
  var Unit_instance = kotlin_kotlin.$_$.y2;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.t2;
  var THROW_CCE = kotlin_kotlin.$_$.y8;
  var initMetadataForClass = kotlin_kotlin.$_$.v6;
  var emptyList = kotlin_kotlin.$_$.a4;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.k;
  var lazy = kotlin_kotlin.$_$.g9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var zip = kotlin_kotlin.$_$.j5;
  var toMap = kotlin_kotlin.$_$.h5;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var toString = kotlin_kotlin.$_$.o7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var mapCapacity = kotlin_kotlin.$_$.r4;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var VOID = kotlin_kotlin.$_$.d;
  var KProperty1 = kotlin_kotlin.$_$.b8;
  var getPropertyCallableRef = kotlin_kotlin.$_$.s6;
  var isBlank = kotlin_kotlin.$_$.f8;
  var equals = kotlin_kotlin.$_$.m6;
  var toList = kotlin_kotlin.$_$.g5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.p;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.u;
  var toHashSet = kotlin_kotlin.$_$.d5;
  var copyToArray = kotlin_kotlin.$_$.y3;
  var toBooleanArray = kotlin_kotlin.$_$.c5;
  var withIndex = kotlin_kotlin.$_$.i5;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.s3;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.o;
  var to = kotlin_kotlin.$_$.o9;
  var lazy_0 = kotlin_kotlin.$_$.h9;
  var contentEquals = kotlin_kotlin.$_$.u3;
  var until = kotlin_kotlin.$_$.x7;
  var joinToString = kotlin_kotlin.$_$.k4;
  var initMetadataForObject = kotlin_kotlin.$_$.a7;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var ensureNotNull = kotlin_kotlin.$_$.f9;
  var getStringHashCode = kotlin_kotlin.$_$.t6;
  var fillArrayVal = kotlin_kotlin.$_$.o6;
  var isInterface = kotlin_kotlin.$_$.e7;
  var hashCode = kotlin_kotlin.$_$.u6;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var contentHashCode = kotlin_kotlin.$_$.v3;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var booleanArray = kotlin_kotlin.$_$.g6;
  var emptyMap = kotlin_kotlin.$_$.b4;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.i9;
  var KClass = kotlin_kotlin.$_$.y7;
  var get_indices = kotlin_kotlin.$_$.j4;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.r1;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(KSerializer, 'KSerializer');
  initMetadataForClass(_no_name_provided__qut3iv);
  initMetadataForClass(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SealedClassSerializer, 'SealedClassSerializer', VOID, AbstractPolymorphicSerializer);
  initMetadataForInterface(SerialDescriptor, 'SerialDescriptor');
  initMetadataForClass(elementDescriptors$1);
  initMetadataForClass(_no_name_provided__qut3iv_0);
  initMetadataForClass(elementNames$1);
  initMetadataForClass(_no_name_provided__qut3iv_1);
  initMetadataForClass(ClassSerialDescriptorBuilder, 'ClassSerialDescriptorBuilder');
  initMetadataForInterface(CachedNames, 'CachedNames');
  initMetadataForClass(SerialDescriptorImpl, 'SerialDescriptorImpl', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(SerialKind, 'SerialKind');
  initMetadataForObject(ENUM, 'ENUM', VOID, SerialKind);
  initMetadataForObject(CONTEXTUAL, 'CONTEXTUAL', VOID, SerialKind);
  initMetadataForClass(PolymorphicKind, 'PolymorphicKind', VOID, SerialKind);
  initMetadataForObject(SEALED, 'SEALED', VOID, PolymorphicKind);
  initMetadataForClass(PrimitiveKind, 'PrimitiveKind', VOID, SerialKind);
  initMetadataForObject(STRING, 'STRING', VOID, PrimitiveKind);
  initMetadataForClass(StructureKind, 'StructureKind', VOID, SerialKind);
  initMetadataForObject(CLASS, 'CLASS', VOID, StructureKind);
  initMetadataForObject(LIST, 'LIST', VOID, StructureKind);
  initMetadataForObject(MAP, 'MAP', VOID, StructureKind);
  initMetadataForObject(OBJECT, 'OBJECT', VOID, StructureKind);
  initMetadataForClass(EnumSerializer, 'EnumSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(EnumDescriptor, 'EnumDescriptor', VOID, PluginGeneratedSerialDescriptor);
  initMetadataForClass(ObjectSerializer, 'ObjectSerializer', VOID, VOID, [KSerializer]);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  initMetadataForInterface(GeneratedSerializer, 'GeneratedSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(StringSerializer, 'StringSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PrimitiveSerialDescriptor, 'PrimitiveSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(SerializersModule, 'SerializersModule');
  initMetadataForClass(SerialModuleImpl, 'SerialModuleImpl', VOID, SerializersModule);
  initMetadataForClass(ContextualProvider, 'ContextualProvider');
  initMetadataForClass(Argless, 'Argless', VOID, ContextualProvider);
  initMetadataForClass(WithTypeArguments, 'WithTypeArguments', VOID, ContextualProvider);
  function contextual(kClass, serializer) {
    return this.q15(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  initMetadataForInterface(SerializersModuleCollector, 'SerializersModuleCollector');
  initMetadataForClass(SerializableWith, 'SerializableWith', VOID, VOID, VOID, VOID, 0);
  //endregion
  function KSerializer() {
  }
  function SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, $this) {
    SealedClassSerializer.call($this, serialName, baseClass, subclasses, subclassSerializers);
    $this.e12_1 = asList(classAnnotations);
    return $this;
  }
  function SealedClassSerializer_init_$Create$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations) {
    return SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, objectCreate(protoOf(SealedClassSerializer)));
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator = this$0.h12_1.p1().i();
      while (tmp0_iterator.j()) {
        var element = tmp0_iterator.k();
        // Inline function 'kotlinx.serialization.SealedClassSerializer.descriptor$delegate.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var name = element.j1();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element.k1();
        $this$buildSerialDescriptor.q12(name, serializer.c12());
      }
      return Unit_instance;
    };
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.q12('type', serializer(StringCompanionObject_instance).c12());
      var tmp = 'kotlinx.serialization.Sealed<' + this$0.d12_1.n9() + '>';
      var tmp_0 = CONTEXTUAL_getInstance();
      var elementDescriptor = buildSerialDescriptor(tmp, tmp_0, [], SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda(this$0));
      $this$buildSerialDescriptor.q12('value', elementDescriptor);
      $this$buildSerialDescriptor.k12_1 = this$0.e12_1;
      return Unit_instance;
    };
  }
  function SealedClassSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = SEALED_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], SealedClassSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function _no_name_provided__qut3iv($this) {
    this.r12_1 = $this;
  }
  protoOf(_no_name_provided__qut3iv).s12 = function () {
    return this.r12_1.i();
  };
  protoOf(_no_name_provided__qut3iv).t12 = function (element) {
    // Inline function 'kotlinx.serialization.SealedClassSerializer.<anonymous>' call
    return element.k1().c12().u12();
  };
  protoOf(_no_name_provided__qut3iv).v12 = function (element) {
    return this.t12((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function SealedClassSerializer(serialName, baseClass, subclasses, subclassSerializers) {
    AbstractPolymorphicSerializer.call(this);
    this.d12_1 = baseClass;
    this.e12_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.f12_1 = lazy(tmp_0, SealedClassSerializer$descriptor$delegate$lambda(serialName, this));
    if (!(subclasses.length === subclassSerializers.length)) {
      throw IllegalArgumentException_init_$Create$('All subclasses of sealed class ' + this.d12_1.n9() + ' should be marked @Serializable');
    }
    this.g12_1 = toMap(zip(subclasses, subclassSerializers));
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.aggregate' call
    // Inline function 'kotlin.collections.groupingBy' call
    var this_0 = this.g12_1.p1();
    // Inline function 'kotlin.collections.aggregateTo' call
    var this_1 = new _no_name_provided__qut3iv(this_0);
    // Inline function 'kotlin.collections.mutableMapOf' call
    var destination = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this_1.s12();
    while (tmp0_iterator.j()) {
      var e = tmp0_iterator.k();
      var key = this_1.v12(e);
      var accumulator = destination.n1(key);
      // Inline function 'kotlin.collections.set' call
      // Inline function 'kotlinx.serialization.SealedClassSerializer.<anonymous>' call
      accumulator == null && !destination.l1(key);
      if (!(accumulator == null)) {
        // Inline function 'kotlin.error' call
        var message = "Multiple sealed subclasses of '" + toString(this.d12_1) + "' have the same serial name '" + key + "':" + (" '" + toString(accumulator.j1()) + "', '" + toString(e.j1()) + "'");
        throw IllegalStateException_init_$Create$(toString(message));
      }
      destination.h4(key, e);
    }
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_0 = LinkedHashMap_init_$Create$_0(mapCapacity(destination.l()));
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator_0 = destination.p1().i();
    while (tmp0_iterator_0.j()) {
      var element = tmp0_iterator_0.k();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp_2 = element.j1();
      // Inline function 'kotlinx.serialization.SealedClassSerializer.<anonymous>' call
      var tmp$ret$7 = element.k1().k1();
      destination_0.h4(tmp_2, tmp$ret$7);
    }
    tmp_1.h12_1 = destination_0;
  }
  protoOf(SealedClassSerializer).c12 = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.f12_1;
    descriptor$factory();
    return this_0.k1();
  };
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.c12();
    }, null);
  }
  function serializer(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function SerialDescriptor() {
  }
  function get_elementDescriptors(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new _no_name_provided__qut3iv_0(_this__u8e3s4);
  }
  function get_elementNames(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new _no_name_provided__qut3iv_1(_this__u8e3s4);
  }
  function elementDescriptors$1($this_elementDescriptors) {
    this.b13_1 = $this_elementDescriptors;
    this.a13_1 = $this_elementDescriptors.x12();
  }
  protoOf(elementDescriptors$1).j = function () {
    return this.a13_1 > 0;
  };
  protoOf(elementDescriptors$1).k = function () {
    var tmp = this.b13_1.x12();
    var _unary__edvuaz = this.a13_1;
    this.a13_1 = _unary__edvuaz - 1 | 0;
    return this.b13_1.z12(tmp - _unary__edvuaz | 0);
  };
  function _no_name_provided__qut3iv_0($this_elementDescriptors) {
    this.c13_1 = $this_elementDescriptors;
  }
  protoOf(_no_name_provided__qut3iv_0).i = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    return new elementDescriptors$1(this.c13_1);
  };
  function elementNames$1($this_elementNames) {
    this.e13_1 = $this_elementNames;
    this.d13_1 = $this_elementNames.x12();
  }
  protoOf(elementNames$1).j = function () {
    return this.d13_1 > 0;
  };
  protoOf(elementNames$1).k = function () {
    var tmp = this.e13_1.x12();
    var _unary__edvuaz = this.d13_1;
    this.d13_1 = _unary__edvuaz - 1 | 0;
    return this.e13_1.y12(tmp - _unary__edvuaz | 0);
  };
  function _no_name_provided__qut3iv_1($this_elementNames) {
    this.f13_1 = $this_elementNames;
  }
  protoOf(_no_name_provided__qut3iv_1).i = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementNames>.<anonymous>' call
    return new elementNames$1(this.f13_1);
  };
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    var tmp;
    if (builder === VOID) {
      tmp = buildSerialDescriptor$lambda;
    } else {
      tmp = builder;
    }
    builder = tmp;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!equals(kind, CLASS_getInstance())) {
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      var message_0 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.l12_1.l(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.i12_1 = serialName;
    this.j12_1 = false;
    this.k12_1 = emptyList();
    this.l12_1 = ArrayList_init_$Create$();
    this.m12_1 = HashSet_init_$Create$();
    this.n12_1 = ArrayList_init_$Create$();
    this.o12_1 = ArrayList_init_$Create$();
    this.p12_1 = ArrayList_init_$Create$();
  }
  protoOf(ClassSerialDescriptorBuilder).g13 = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.m12_1.d(elementName)) {
      // Inline function 'kotlinx.serialization.descriptors.ClassSerialDescriptorBuilder.element.<anonymous>' call
      var message = "Element with name '" + elementName + "' is already registered in " + this.i12_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.l12_1.d(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.n12_1.d(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.o12_1.d(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.p12_1.d(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).q12 = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.g13(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.g13.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function _get__hashCode__tgwhef($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.s13_1;
    _hashCode$factory();
    return this_0.k1();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.r13_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.y12(it) + ': ' + this$0.z12(it).u12();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.h13_1 = serialName;
    this.i13_1 = kind;
    this.j13_1 = elementsCount;
    this.k13_1 = builder.k12_1;
    this.l13_1 = toHashSet(builder.l12_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.l12_1;
    tmp.m13_1 = copyToArray(this_0);
    this.n13_1 = compactArray(builder.n12_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.o12_1;
    tmp_0.o13_1 = copyToArray(this_1);
    this.p13_1 = toBooleanArray(builder.p12_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.m13_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_2, 10));
    var tmp0_iterator = this_2.i();
    while (tmp0_iterator.j()) {
      var item = tmp0_iterator.k();
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.name2Index.<anonymous>' call
      var tmp$ret$2 = to(item.xc_1, item.wc_1);
      destination.d(tmp$ret$2);
    }
    tmp_1.q13_1 = toMap(destination);
    this.r13_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.s13_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).u12 = function () {
    return this.h13_1;
  };
  protoOf(SerialDescriptorImpl).w12 = function () {
    return this.i13_1;
  };
  protoOf(SerialDescriptorImpl).x12 = function () {
    return this.j13_1;
  };
  protoOf(SerialDescriptorImpl).t13 = function () {
    return this.l13_1;
  };
  protoOf(SerialDescriptorImpl).y12 = function (index) {
    return getChecked(this.m13_1, index);
  };
  protoOf(SerialDescriptorImpl).z12 = function (index) {
    return getChecked(this.n13_1, index);
  };
  protoOf(SerialDescriptorImpl).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.u12() === other.u12())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.equals.<anonymous>' call
      if (!contentEquals(this.r13_1, other.r13_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.x12() === other.x12())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.x12();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.z12(index).u12() === other.z12(index).u12())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.z12(index).w12(), other.z12(index).w12())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SerialDescriptorImpl).hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  protoOf(SerialDescriptorImpl).toString = function () {
    var tmp = until(0, this.j13_1);
    var tmp_0 = this.h13_1 + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, SerialDescriptorImpl$toString$lambda(this));
  };
  function buildSerialDescriptor$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function _hashCode$factory() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef(receiver);
    }, null);
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  protoOf(SerialKind).toString = function () {
    return ensureNotNull(getKClassFromExpression(this).n9());
  };
  protoOf(SerialKind).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  function AbstractPolymorphicSerializer() {
  }
  function CachedNames() {
  }
  function createSimpleEnumSerializer(serialName, values) {
    return new EnumSerializer(serialName, values);
  }
  function createUnmarkedDescriptor($this, serialName) {
    var d = new EnumDescriptor(serialName, $this.u13_1.length);
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = $this.u13_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlinx.serialization.internal.EnumSerializer.createUnmarkedDescriptor.<anonymous>' call
      d.j14(element.q1_1);
    }
    return d;
  }
  function EnumSerializer$descriptor$delegate$lambda(this$0, $serialName) {
    return function () {
      var tmp0_elvis_lhs = this$0.v13_1;
      return tmp0_elvis_lhs == null ? createUnmarkedDescriptor(this$0, $serialName) : tmp0_elvis_lhs;
    };
  }
  function EnumSerializer(serialName, values) {
    this.u13_1 = values;
    this.v13_1 = null;
    var tmp = this;
    tmp.w13_1 = lazy_0(EnumSerializer$descriptor$delegate$lambda(this, serialName));
  }
  protoOf(EnumSerializer).c12 = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.w13_1;
    descriptor$factory_0();
    return this_0.k1();
  };
  protoOf(EnumSerializer).toString = function () {
    return 'kotlinx.serialization.internal.EnumSerializer<' + this.c12().u12() + '>';
  };
  function _get_elementDescriptors__y23q9p($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.x14_1;
    elementDescriptors$factory();
    return this_0.k1();
  }
  function EnumDescriptor$elementDescriptors$delegate$lambda($elementsCount, $name, this$0) {
    return function () {
      var tmp = 0;
      var tmp_0 = $elementsCount;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = fillArrayVal(Array(tmp_0), null);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = buildSerialDescriptor($name + '.' + this$0.y12(tmp_2), OBJECT_getInstance(), []);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function EnumDescriptor(name, elementsCount) {
    PluginGeneratedSerialDescriptor.call(this, name, VOID, elementsCount);
    this.w14_1 = ENUM_getInstance();
    var tmp = this;
    tmp.x14_1 = lazy_0(EnumDescriptor$elementDescriptors$delegate$lambda(elementsCount, name, this));
  }
  protoOf(EnumDescriptor).w12 = function () {
    return this.w14_1;
  };
  protoOf(EnumDescriptor).z12 = function (index) {
    return getChecked(_get_elementDescriptors__y23q9p(this), index);
  };
  protoOf(EnumDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!(!(other == null) ? isInterface(other, SerialDescriptor) : false))
      return false;
    if (!(other.w12() === ENUM_getInstance()))
      return false;
    if (!(this.u12() === other.u12()))
      return false;
    if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
      return false;
    return true;
  };
  protoOf(EnumDescriptor).toString = function () {
    return joinToString(get_elementNames(this), ', ', this.u12() + '(', ')');
  };
  protoOf(EnumDescriptor).hashCode = function () {
    var result = getStringHashCode(this.u12());
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = get_elementNames(this).i();
    while (tmp0_iterator.j()) {
      var element = tmp0_iterator.k();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.EnumDescriptor.hashCode.<anonymous>' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var elementsHashCode = accumulator;
    result = imul(31, result) + elementsHashCode | 0;
    return result;
  };
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.c12();
    }, null);
  }
  function elementDescriptors$factory() {
    return getPropertyCallableRef('elementDescriptors', 1, KProperty1, function (receiver) {
      return _get_elementDescriptors__y23q9p(receiver);
    }, null);
  }
  function ObjectSerializer_init_$Init$(serialName, objectInstance, classAnnotations, $this) {
    ObjectSerializer.call($this, serialName, objectInstance);
    $this.b15_1 = asList(classAnnotations);
    return $this;
  }
  function ObjectSerializer_init_$Create$(serialName, objectInstance, classAnnotations) {
    return ObjectSerializer_init_$Init$(serialName, objectInstance, classAnnotations, objectCreate(protoOf(ObjectSerializer)));
  }
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.k12_1 = this$0.b15_1;
      return Unit_instance;
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.a15_1 = objectInstance;
    this.b15_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.c15_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).c12 = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.c15_1;
    descriptor$factory_1();
    return this_0.k1();
  };
  function descriptor$factory_1() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.c12();
    }, null);
  }
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.t13();
    var result = HashSet_init_$Create$_0(_this__u8e3s4.x12());
    var inductionVariable = 0;
    var last = _this__u8e3s4.x12();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.y12(i);
        result.d(element);
      }
       while (inductionVariable < last);
    return result;
  }
  function compactArray(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    // Inline function 'kotlin.takeUnless' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'kotlinx.serialization.internal.compactArray.<anonymous>' call
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(_this__u8e3s4 == null || _this__u8e3s4.n())) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function _init_properties_Platform_common_kt__3qzecs() {
    if (!properties_initialized_Platform_common_kt_i7q4ty) {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_DESCRIPTOR_ARRAY = [];
    }
  }
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.u12());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = elementDescriptors.i();
    while (tmp0_iterator.j()) {
      var element = tmp0_iterator.k();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      var tmp0_safe_receiver = element.u12();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var tmp0_iterator_0 = elementDescriptors.i();
    while (tmp0_iterator_0.j()) {
      var element_0 = tmp0_iterator_0.k();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash_0 = accumulator_0;
      var tmp_0 = imul(31, hash_0);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      var tmp0_safe_receiver_0 = element_0.w12();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function _get_childSerializers__7vnyfa($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.g14_1;
    childSerializers$factory();
    return this_0.k1();
  }
  function _get__hashCode__tgwhef_0($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.i14_1;
    _hashCode$factory_0();
    return this_0.k1();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.b14_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.b14_1[i];
        indices.h4(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.y13_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d15();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.y13_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e15();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$_0(tmp1_safe_receiver.length);
        var inductionVariable = 0;
        var last = tmp1_safe_receiver.length;
        while (inductionVariable < last) {
          var item = tmp1_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.typeParameterDescriptors$delegate.<anonymous>.<anonymous>' call
          var tmp$ret$0 = item.c12();
          destination.d(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.y14());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.y12(i) + ': ' + this$0.z12(i).u12();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.x13_1 = serialName;
    this.y13_1 = generatedSerializer;
    this.z13_1 = elementsCount;
    this.a14_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.z13_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.b14_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.z13_1;
    tmp_3.c14_1 = fillArrayVal(Array(size), null);
    this.d14_1 = null;
    this.e14_1 = booleanArray(this.z13_1);
    this.f14_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.g14_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.h14_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.i14_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).u12 = function () {
    return this.x13_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).x12 = function () {
    return this.z13_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).w12 = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).t13 = function () {
    return this.f14_1.o1();
  };
  protoOf(PluginGeneratedSerialDescriptor).y14 = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.h14_1;
    typeParameterDescriptors$factory();
    return this_0.k1();
  };
  protoOf(PluginGeneratedSerialDescriptor).z14 = function (name, isOptional) {
    this.a14_1 = this.a14_1 + 1 | 0;
    this.b14_1[this.a14_1] = name;
    this.e14_1[this.a14_1] = isOptional;
    this.c14_1[this.a14_1] = null;
    if (this.a14_1 === (this.z13_1 - 1 | 0)) {
      this.f14_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).j14 = function (name, isOptional, $super) {
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.z14(name, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.z14.call(this, name, isOptional);
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).z12 = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).c12();
  };
  protoOf(PluginGeneratedSerialDescriptor).y12 = function (index) {
    return getChecked(this.b14_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.u12() === other.u12())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      if (!contentEquals(this.y14(), other.y14())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.x12() === other.x12())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.x12();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.z12(index).u12() === other.z12(index).u12())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.z12(index).w12(), other.z12(index).w12())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(PluginGeneratedSerialDescriptor).hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  protoOf(PluginGeneratedSerialDescriptor).toString = function () {
    var tmp = until(0, this.z13_1);
    var tmp_0 = this.u12() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.y14();
    }, null);
  }
  function _hashCode$factory_0() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef_0(receiver);
    }, null);
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    _init_properties_PluginHelperInterfaces_kt__xgvzfp();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function GeneratedSerializer() {
  }
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function _init_properties_PluginHelperInterfaces_kt__xgvzfp() {
    if (!properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_SERIALIZER_ARRAY = [];
    }
  }
  function StringSerializer() {
    StringSerializer_instance = this;
    this.f15_1 = new PrimitiveSerialDescriptor('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).c12 = function () {
    return this.f15_1;
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor does not have elements');
  }
  function PrimitiveSerialDescriptor(serialName, kind) {
    this.g15_1 = serialName;
    this.h15_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor).u12 = function () {
    return this.g15_1;
  };
  protoOf(PrimitiveSerialDescriptor).w12 = function () {
    return this.h15_1;
  };
  protoOf(PrimitiveSerialDescriptor).x12 = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor).y12 = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).z12 = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).toString = function () {
    return 'PrimitiveDescriptor(' + this.g15_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor))
      return false;
    if (this.g15_1 === other.g15_1 && equals(this.h15_1, other.h15_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.g15_1) + imul(31, this.h15_1.hashCode()) | 0;
  };
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.j15_1 = class2ContextualFactory;
    this.k15_1 = polyBase2Serializers;
    this.l15_1 = polyBase2DefaultSerializerProvider;
    this.m15_1 = polyBase2NamedSerializers;
    this.n15_1 = polyBase2DefaultDeserializerProvider;
    this.o15_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).i15 = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.j15_1.p1().i();
    while (tmp0_iterator.j()) {
      var element = tmp0_iterator.k();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.j1();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.k1();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.r15_1;
        collector.s15(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.q15(kclass, serial.p15_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_0 = this.k15_1.p1().i();
    while (tmp0_iterator_0.j()) {
      var element_0 = tmp0_iterator_0.k();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass = element_0.j1();
      // Inline function 'kotlin.collections.component2' call
      var classMap = element_0.k1();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator_1 = classMap.p1().i();
      while (tmp0_iterator_1.j()) {
        var element_1 = tmp0_iterator_1.k();
        // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var actualClass = element_1.j1();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element_1.k1();
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var tmp$ret$9 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.t15(tmp_1, tmp_2, tmp$ret$9);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_2 = this.l15_1.p1().i();
    while (tmp0_iterator_2.j()) {
      var element_2 = tmp0_iterator_2.k();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.j1();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.k1();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.u15(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_3 = this.n15_1.p1().i();
    while (tmp0_iterator_3.j()) {
      var element_3 = tmp0_iterator_3.k();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.j1();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.k1();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.v15(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless() {
  }
  function WithTypeArguments() {
  }
  function ContextualProvider() {
  }
  var properties_initialized_SerializersModule_kt_fjigjn;
  function _init_properties_SerializersModule_kt__u78ha3() {
    if (!properties_initialized_SerializersModule_kt_fjigjn) {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap(), false);
    }
  }
  function EmptySerializersModule_0() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function SerializersModuleCollector$contextual$lambda($serializer) {
    return function (it) {
      return $serializer;
    };
  }
  function SerializersModuleCollector() {
  }
  function SerializableWith() {
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ObjectSerializer_init_$Create$;
  _.$_$.b = SealedClassSerializer_init_$Create$;
  _.$_$.c = CONTEXTUAL_getInstance;
  _.$_$.d = LIST_getInstance;
  _.$_$.e = MAP_getInstance;
  _.$_$.f = PolymorphicKind;
  _.$_$.g = PrimitiveKind;
  _.$_$.h = ENUM;
  _.$_$.i = typeParametersSerializers;
  _.$_$.j = GeneratedSerializer;
  _.$_$.k = PluginGeneratedSerialDescriptor;
  _.$_$.l = createSimpleEnumSerializer;
  _.$_$.m = EmptySerializersModule_0;
  _.$_$.n = contextual;
  _.$_$.o = SerializersModuleCollector;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
