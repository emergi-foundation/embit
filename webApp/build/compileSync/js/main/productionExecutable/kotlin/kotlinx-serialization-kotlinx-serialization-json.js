(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    globalThis['kotlinx-serialization-kotlinx-serialization-json'] = factory(typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined' ? {} : globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var protoOf = kotlin_kotlin.$_$.m7;
  var initMetadataForObject = kotlin_kotlin.$_$.a7;
  var VOID = kotlin_kotlin.$_$.d;
  var initMetadataForClass = kotlin_kotlin.$_$.v6;
  var toString = kotlin_kotlin.$_$.o7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var charSequenceLength = kotlin_kotlin.$_$.j6;
  var charSequenceGet = kotlin_kotlin.$_$.i6;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.k2;
  var Unit_instance = kotlin_kotlin.$_$.y2;
  var equals = kotlin_kotlin.$_$.m6;
  var toString_0 = kotlin_kotlin.$_$.n9;
  var Enum = kotlin_kotlin.$_$.q8;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.r;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Json, 'Json');
  initMetadataForObject(Default, 'Default', VOID, Json);
  initMetadataForClass(JsonBuilder, 'JsonBuilder');
  initMetadataForClass(JsonImpl, 'JsonImpl', VOID, Json);
  initMetadataForClass(JsonConfiguration, 'JsonConfiguration');
  initMetadataForClass(ClassDiscriminatorMode, 'ClassDiscriminatorMode', VOID, Enum);
  initMetadataForClass(PolymorphismValidator, 'PolymorphismValidator', VOID, VOID, [SerializersModuleCollector]);
  initMetadataForClass(DescriptorSchemaCache, 'DescriptorSchemaCache', DescriptorSchemaCache);
  //endregion
  function Default() {
    Default_instance = this;
    Json.call(this, new JsonConfiguration(), EmptySerializersModule());
  }
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Json(configuration, serializersModule) {
    Default_getInstance();
    this.w15_1 = configuration;
    this.x15_1 = serializersModule;
    this.y15_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).z15 = function () {
    return this.x15_1;
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.s16();
    return new JsonImpl(conf, builder.r16_1);
  }
  function JsonBuilder(json) {
    this.a16_1 = json.w15_1.t16_1;
    this.b16_1 = json.w15_1.y16_1;
    this.c16_1 = json.w15_1.u16_1;
    this.d16_1 = json.w15_1.v16_1;
    this.e16_1 = json.w15_1.x16_1;
    this.f16_1 = json.w15_1.z16_1;
    this.g16_1 = json.w15_1.a17_1;
    this.h16_1 = json.w15_1.c17_1;
    this.i16_1 = json.w15_1.j17_1;
    this.j16_1 = json.w15_1.e17_1;
    this.k16_1 = json.w15_1.f17_1;
    this.l16_1 = json.w15_1.g17_1;
    this.m16_1 = json.w15_1.h17_1;
    this.n16_1 = json.w15_1.i17_1;
    this.o16_1 = json.w15_1.d17_1;
    this.p16_1 = json.w15_1.w16_1;
    this.q16_1 = json.w15_1.b17_1;
    this.r16_1 = json.z15();
  }
  protoOf(JsonBuilder).s16 = function () {
    if (this.q16_1) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this.h16_1 === 'type')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!this.i16_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    if (!this.e16_1) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this.f16_1 === '    ')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    } else if (!(this.f16_1 === '    ')) {
      var tmp$ret$4;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var indexedObject = this.f16_1;
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(indexedObject)) {
          var element = charSequenceGet(indexedObject, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
          if (!(element === _Char___init__impl__6a9atx(32) || element === _Char___init__impl__6a9atx(9) || element === _Char___init__impl__6a9atx(13) || element === _Char___init__impl__6a9atx(10))) {
            tmp$ret$4 = false;
            break $l$block;
          }
        }
        tmp$ret$4 = true;
      }
      var allWhitespaces = tmp$ret$4;
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!allWhitespaces) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.f16_1;
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
    return new JsonConfiguration(this.a16_1, this.c16_1, this.d16_1, this.p16_1, this.e16_1, this.b16_1, this.f16_1, this.g16_1, this.q16_1, this.h16_1, this.o16_1, this.j16_1, this.k16_1, this.l16_1, this.m16_1, this.n16_1, this.i16_1);
  };
  function validateConfiguration($this) {
    if (equals($this.z15(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new PolymorphismValidator($this.w15_1.b17_1, $this.w15_1.c17_1);
    $this.z15().i15(collector);
  }
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
    validateConfiguration(this);
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive, allowTrailingComma, allowComments, classDiscriminatorMode) {
    encodeDefaults = encodeDefaults === VOID ? false : encodeDefaults;
    ignoreUnknownKeys = ignoreUnknownKeys === VOID ? false : ignoreUnknownKeys;
    isLenient = isLenient === VOID ? false : isLenient;
    allowStructuredMapKeys = allowStructuredMapKeys === VOID ? false : allowStructuredMapKeys;
    prettyPrint = prettyPrint === VOID ? false : prettyPrint;
    explicitNulls = explicitNulls === VOID ? true : explicitNulls;
    prettyPrintIndent = prettyPrintIndent === VOID ? '    ' : prettyPrintIndent;
    coerceInputValues = coerceInputValues === VOID ? false : coerceInputValues;
    useArrayPolymorphism = useArrayPolymorphism === VOID ? false : useArrayPolymorphism;
    classDiscriminator = classDiscriminator === VOID ? 'type' : classDiscriminator;
    allowSpecialFloatingPointValues = allowSpecialFloatingPointValues === VOID ? false : allowSpecialFloatingPointValues;
    useAlternativeNames = useAlternativeNames === VOID ? true : useAlternativeNames;
    namingStrategy = namingStrategy === VOID ? null : namingStrategy;
    decodeEnumsCaseInsensitive = decodeEnumsCaseInsensitive === VOID ? false : decodeEnumsCaseInsensitive;
    allowTrailingComma = allowTrailingComma === VOID ? false : allowTrailingComma;
    allowComments = allowComments === VOID ? false : allowComments;
    classDiscriminatorMode = classDiscriminatorMode === VOID ? ClassDiscriminatorMode_POLYMORPHIC_getInstance() : classDiscriminatorMode;
    this.t16_1 = encodeDefaults;
    this.u16_1 = ignoreUnknownKeys;
    this.v16_1 = isLenient;
    this.w16_1 = allowStructuredMapKeys;
    this.x16_1 = prettyPrint;
    this.y16_1 = explicitNulls;
    this.z16_1 = prettyPrintIndent;
    this.a17_1 = coerceInputValues;
    this.b17_1 = useArrayPolymorphism;
    this.c17_1 = classDiscriminator;
    this.d17_1 = allowSpecialFloatingPointValues;
    this.e17_1 = useAlternativeNames;
    this.f17_1 = namingStrategy;
    this.g17_1 = decodeEnumsCaseInsensitive;
    this.h17_1 = allowTrailingComma;
    this.i17_1 = allowComments;
    this.j17_1 = classDiscriminatorMode;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.t16_1 + ', ignoreUnknownKeys=' + this.u16_1 + ', isLenient=' + this.v16_1 + ', ' + ('allowStructuredMapKeys=' + this.w16_1 + ', prettyPrint=' + this.x16_1 + ', explicitNulls=' + this.y16_1 + ', ') + ("prettyPrintIndent='" + this.z16_1 + "', coerceInputValues=" + this.a17_1 + ', useArrayPolymorphism=' + this.b17_1 + ', ') + ("classDiscriminator='" + this.c17_1 + "', allowSpecialFloatingPointValues=" + this.d17_1 + ', ') + ('useAlternativeNames=' + this.e17_1 + ', namingStrategy=' + toString_0(this.f17_1) + ', decodeEnumsCaseInsensitive=' + this.g17_1 + ', ') + ('allowTrailingComma=' + this.h17_1 + ', allowComments=' + this.i17_1 + ', classDiscriminatorMode=' + this.j17_1.toString() + ')');
  };
  var ClassDiscriminatorMode_NONE_instance;
  var ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance;
  var ClassDiscriminatorMode_POLYMORPHIC_instance;
  var ClassDiscriminatorMode_entriesInitialized;
  function ClassDiscriminatorMode_initEntries() {
    if (ClassDiscriminatorMode_entriesInitialized)
      return Unit_instance;
    ClassDiscriminatorMode_entriesInitialized = true;
    ClassDiscriminatorMode_NONE_instance = new ClassDiscriminatorMode('NONE', 0);
    ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance = new ClassDiscriminatorMode('ALL_JSON_OBJECTS', 1);
    ClassDiscriminatorMode_POLYMORPHIC_instance = new ClassDiscriminatorMode('POLYMORPHIC', 2);
  }
  function ClassDiscriminatorMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ClassDiscriminatorMode_POLYMORPHIC_getInstance() {
    ClassDiscriminatorMode_initEntries();
    return ClassDiscriminatorMode_POLYMORPHIC_instance;
  }
  function checkKind($this, descriptor, actualClass) {
    var kind = descriptor.w12();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.n9() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.k17_1)
      return Unit_instance;
    var tmp_0;
    var tmp_1;
    if (equals(kind, LIST_getInstance()) || equals(kind, MAP_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = kind instanceof PrimitiveKind;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = kind instanceof ENUM;
    }
    if (tmp_0) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.n9() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.x12();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.y12(i);
        if (name === $this.l17_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + toString(actualClass) + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function PolymorphismValidator(useArrayPolymorphism, discriminator) {
    this.k17_1 = useArrayPolymorphism;
    this.l17_1 = discriminator;
  }
  protoOf(PolymorphismValidator).q15 = function (kClass, provider) {
  };
  protoOf(PolymorphismValidator).t15 = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.c12();
    checkKind(this, descriptor, actualClass);
    if (!this.k17_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  protoOf(PolymorphismValidator).u15 = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(PolymorphismValidator).v15 = function (baseClass, defaultDeserializerProvider) {
  };
  function DescriptorSchemaCache() {
    this.m17_1 = createMapForCache(16);
  }
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(PolymorphismValidator).s15 = contextual;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Json_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.js.map
