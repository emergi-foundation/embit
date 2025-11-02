(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-internal-html-core-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-internal-html-core-runtime.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'html-html-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'html-html-core'.");
    }
    if (typeof globalThis['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'html-html-core'.");
    }
    globalThis['html-html-core'] = factory(typeof globalThis['html-html-core'] === 'undefined' ? {} : globalThis['html-html-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['html-internal-html-core-runtime']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_internal_html_core_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.y2;
  var protoOf = kotlin_kotlin.$_$.m7;
  var asList = kotlin_kotlin.$_$.o3;
  var initMetadataForInterface = kotlin_kotlin.$_$.y6;
  var VOID = kotlin_kotlin.$_$.d;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.p;
  var addAll = kotlin_kotlin.$_$.k3;
  var initMetadataForClass = kotlin_kotlin.$_$.v6;
  var charSequenceLength = kotlin_kotlin.$_$.j6;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.x;
  var ensureNotNull = kotlin_kotlin.$_$.f9;
  var initMetadataForCompanion = kotlin_kotlin.$_$.w6;
  var toString = kotlin_kotlin.$_$.o7;
  var hashCode = kotlin_kotlin.$_$.u6;
  var THROW_CCE = kotlin_kotlin.$_$.y8;
  var equals = kotlin_kotlin.$_$.m6;
  var numberToDouble = kotlin_kotlin.$_$.i7;
  var getNumberHashCode = kotlin_kotlin.$_$.r6;
  var defineProp = kotlin_kotlin.$_$.l6;
  var initMetadataForObject = kotlin_kotlin.$_$.a7;
  var getStringHashCode = kotlin_kotlin.$_$.t6;
  var isInterface = kotlin_kotlin.$_$.e7;
  var Collection = kotlin_kotlin.$_$.e3;
  var FunctionAdapter = kotlin_kotlin.$_$.d6;
  var ReadOnlyProperty = kotlin_kotlin.$_$.q7;
  var objectCreate = kotlin_kotlin.$_$.l7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var to = kotlin_kotlin.$_$.o9;
  var listOfNotNull = kotlin_kotlin.$_$.p4;
  var joinToString = kotlin_kotlin.$_$.k4;
  var joinToString_0 = kotlin_kotlin.$_$.l4;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var _SkippableUpdater___get_composer__impl__6t7yne = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var DomNodeWrapper = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.b;
  var emptyList = kotlin_kotlin.$_$.a4;
  var copyToArray = kotlin_kotlin.$_$.y3;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.m9;
  var lazy = kotlin_kotlin.$_$.h9;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m;
  var DomApplier = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.a;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var DisposableEffect_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h;
  var KProperty1 = kotlin_kotlin.$_$.b8;
  var getPropertyCallableRef = kotlin_kotlin.$_$.s6;
  //endregion
  //region block: pre-declaration
  function onClick(listener) {
    this.j33(new MouseEventListener('click', listener));
  }
  initMetadataForInterface(EventsListenerScope, 'EventsListenerScope');
  function classes(classes) {
    return this.y32(asList(classes));
  }
  function id(value) {
    return this.w32('id', value);
  }
  initMetadataForInterface(AttrsScope, 'AttrsScope', VOID, VOID, [EventsListenerScope]);
  initMetadataForClass(AttrsScopeBuilder, 'AttrsScopeBuilder', AttrsScopeBuilder, VOID, [AttrsScope, EventsListenerScope]);
  initMetadataForClass(EventsListenerScopeBuilder, 'EventsListenerScopeBuilder', EventsListenerScopeBuilder, VOID, [EventsListenerScope]);
  initMetadataForClass(SyntheticEventListener, 'SyntheticEventListener');
  initMetadataForClass(MouseEventListener, 'MouseEventListener', VOID, SyntheticEventListener);
  function property(propertyName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.n34(propertyName, value);
  }
  function property_0(propertyName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.n34(propertyName, value);
  }
  initMetadataForInterface(StyleScope, 'StyleScope');
  initMetadataForInterface(StyleHolder, 'StyleHolder');
  initMetadataForClass(StyleScopeBuilder, 'StyleScopeBuilder', StyleScopeBuilder, VOID, [StyleScope, StyleHolder]);
  initMetadataForClass(CSSRuleBuilderImpl, 'CSSRuleBuilderImpl', CSSRuleBuilderImpl, StyleScopeBuilder, [StyleScope, StyleScopeBuilder]);
  function add(selector, style) {
    this.g34(new CSSStyleRuleDeclaration(selector, style));
  }
  initMetadataForInterface(CSSRulesHolder, 'CSSRulesHolder');
  function returnUniversalSelector() {
    return get_Universal();
  }
  function returnHoverSelector() {
    return this.q34();
  }
  function get_hover() {
    return new PseudoClassInternal('hover');
  }
  initMetadataForInterface(SelectorsScope, 'SelectorsScope');
  initMetadataForClass(CSSBuilderImpl, 'CSSBuilderImpl', VOID, CSSRuleBuilderImpl, [CSSRuleBuilderImpl, StyleScope, CSSRulesHolder, SelectorsScope]);
  initMetadataForCompanion(Companion);
  initMetadataForCompanion(Companion_0);
  initMetadataForCompanion(Companion_1);
  initMetadataForCompanion(Companion_2);
  initMetadataForCompanion(Companion_3);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(CSSKeyframesRuleDeclaration, 'CSSKeyframesRuleDeclaration');
  initMetadataForInterface(CSSStyledRuleDeclaration, 'CSSStyledRuleDeclaration');
  initMetadataForClass(CSSStyleRuleDeclaration, 'CSSStyleRuleDeclaration', VOID, VOID, [CSSStyledRuleDeclaration]);
  initMetadataForInterface(CSSGroupingRuleDeclaration, 'CSSGroupingRuleDeclaration');
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(CSSUnitValueTyped, 'CSSUnitValueTyped');
  initMetadataForObject(Color, 'Color');
  initMetadataForClass(RGB, 'RGB');
  initMetadataForClass(RGBA, 'RGBA');
  initMetadataForClass(StylePropertyDeclaration, 'StylePropertyDeclaration');
  initMetadataForClass(sam$kotlin_properties_ReadOnlyProperty$0, 'sam$kotlin_properties_ReadOnlyProperty$0', VOID, VOID, [ReadOnlyProperty, FunctionAdapter]);
  initMetadataForClass(CSSSelector, 'CSSSelector');
  initMetadataForClass(StyleSheet$CSSHolder$provideDelegate$selector$1, VOID, VOID, CSSSelector);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(CSSSelfSelector, 'CSSSelfSelector', CSSSelfSelector, CSSSelector);
  initMetadataForClass(CSSHolder, 'CSSHolder');
  initMetadataForClass(StyleSheet, 'StyleSheet', StyleSheet_init_$Create$, VOID, [CSSRulesHolder, SelectorsScope]);
  initMetadataForClass(CSSRulesHolderState, 'CSSRulesHolderState', CSSRulesHolderState, VOID, [CSSRulesHolder]);
  initMetadataForClass(RawSelector, 'RawSelector', VOID, CSSSelector);
  initMetadataForClass(PseudoClassInternal, 'PseudoClassInternal', VOID, CSSSelector);
  initMetadataForClass(StyleSheetBuilderImpl, 'StyleSheetBuilderImpl', StyleSheetBuilderImpl, VOID, [CSSRulesHolder, SelectorsScope]);
  initMetadataForClass(CSSBorder, 'CSSBorder', CSSBorder);
  initMetadataForClass(DomElementWrapper, 'DomElementWrapper', VOID, DomNodeWrapper);
  initMetadataForClass(ElementScopeBase, 'ElementScopeBase');
  initMetadataForClass(ElementScopeImpl, 'ElementScopeImpl', ElementScopeImpl, ElementScopeBase);
  initMetadataForClass(ElementBuilderImplementation, 'ElementBuilderImplementation');
  initMetadataForClass(_no_name_provided__qut3iv);
  initMetadataForClass(SyntheticEvent, 'SyntheticEvent');
  initMetadataForClass(SyntheticMouseEvent, 'SyntheticMouseEvent', VOID, SyntheticEvent);
  //endregion
  var setInputValue;
  var setTextAreaDefaultValue;
  var setCheckedValue;
  function href(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.w32('href', value);
  }
  function setInputValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    if (!(v === e.value)) {
      e.value = v;
    }
    saveControlledInputState(e, v);
    return Unit_instance;
  }
  function setTextAreaDefaultValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    e.innerText = v;
    return Unit_instance;
  }
  function setCheckedValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    e.checked = v;
    saveControlledInputState(e, v);
    return Unit_instance;
  }
  var properties_initialized_Attrs_kt_uypsku;
  function _init_properties_Attrs_kt__w5qjhs() {
    if (!properties_initialized_Attrs_kt_uypsku) {
      properties_initialized_Attrs_kt_uypsku = true;
      setInputValue = setInputValue$lambda;
      setTextAreaDefaultValue = setTextAreaDefaultValue$lambda;
      setCheckedValue = setCheckedValue$lambda;
    }
  }
  function AttrsScope() {
  }
  function AttrsScopeBuilder(eventsListenerScopeBuilder) {
    eventsListenerScopeBuilder = eventsListenerScopeBuilder === VOID ? new EventsListenerScopeBuilder() : eventsListenerScopeBuilder;
    this.c33_1 = eventsListenerScopeBuilder;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.d33_1 = LinkedHashMap_init_$Create$();
    this.e33_1 = new StyleScopeBuilder();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.f33_1 = ArrayList_init_$Create$();
    this.g33_1 = null;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.h33_1 = ArrayList_init_$Create$();
    this.i33_1 = 8;
  }
  protoOf(AttrsScopeBuilder).b33 = function (listener) {
    this.c33_1.b33(listener);
  };
  protoOf(AttrsScopeBuilder).j33 = function (listener) {
    this.c33_1.j33(listener);
  };
  protoOf(AttrsScopeBuilder).y32 = function (classes) {
    this.h33_1.m(classes);
  };
  protoOf(AttrsScopeBuilder).z32 = function (classes) {
    addAll(this.h33_1, classes);
  };
  protoOf(AttrsScopeBuilder).x32 = function (builder) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    builder(this.e33_1);
  };
  protoOf(AttrsScopeBuilder).w32 = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    this.d33_1.h4(attr, value);
    return this;
  };
  protoOf(AttrsScopeBuilder).m33 = function () {
    return this.d33_1;
  };
  function EventsListenerScope() {
  }
  function EventsListenerScopeBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.k33_1 = ArrayList_init_$Create$();
    this.l33_1 = 8;
  }
  protoOf(EventsListenerScopeBuilder).j33 = function (listener) {
    this.k33_1.d(listener);
  };
  protoOf(EventsListenerScopeBuilder).n33 = function () {
    return this.k33_1;
  };
  function SyntheticEventListener(event, listener) {
    this.o33_1 = event;
    this.p33_1 = listener;
    this.q33_1 = this.o33_1;
    this.r33_1 = 0;
  }
  protoOf(SyntheticEventListener).z2n = function () {
    return this.q33_1;
  };
  protoOf(SyntheticEventListener).p11 = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new SyntheticEvent(event);
    this.p33_1(tmp$ret$1);
  };
  protoOf(SyntheticEventListener).handleEvent = function (event) {
    return this.p11(event);
  };
  function MouseEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
    this.w33_1 = 0;
  }
  protoOf(MouseEventListener).p11 = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.p33_1(new SyntheticMouseEvent(event));
  };
  protoOf(MouseEventListener).handleEvent = function (event) {
    return this.p11(event);
  };
  function get_controlledInputsValuesWeakMap() {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    return controlledInputsValuesWeakMap;
  }
  var controlledInputsValuesWeakMap;
  function get_controlledRadioGroups() {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    return controlledRadioGroups;
  }
  var controlledRadioGroups;
  function saveControlledInputState(element, value) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    get_controlledInputsValuesWeakMap().set(element, value);
    if (element instanceof HTMLInputElement) {
      updateRadioGroupIfNeeded(element);
    }
  }
  function updateRadioGroupIfNeeded(element) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    var tmp;
    if (element.type === 'radio') {
      // Inline function 'kotlin.text.isNotEmpty' call
      var this_0 = element.name;
      tmp = charSequenceLength(this_0) > 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      if (!get_controlledRadioGroups().l1(element.name)) {
        // Inline function 'kotlin.collections.set' call
        var this_1 = get_controlledRadioGroups();
        var key = element.name;
        // Inline function 'kotlin.collections.mutableSetOf' call
        var value = LinkedHashSet_init_$Create$();
        this_1.h4(key, value);
      }
      ensureNotNull(get_controlledRadioGroups().n1(element.name)).d(element);
    }
  }
  var properties_initialized_InternalControlledInputUtils_kt_dwq2r0;
  function _init_properties_InternalControlledInputUtils_kt__h0qaxa() {
    if (!properties_initialized_InternalControlledInputUtils_kt_dwq2r0) {
      properties_initialized_InternalControlledInputUtils_kt_dwq2r0 = true;
      // Inline function 'kotlin.js.unsafeCast' call
      controlledInputsValuesWeakMap = new WeakMap();
      // Inline function 'kotlin.collections.mutableMapOf' call
      controlledRadioGroups = LinkedHashMap_init_$Create$();
    }
  }
  function CSSBuilderImpl(currentRoot, self_0, rulesHolder) {
    CSSRuleBuilderImpl.call(this);
    this.b34_1 = currentRoot;
    this.c34_1 = self_0;
    this.d34_1 = rulesHolder;
    this.e34_1 = 8;
  }
  protoOf(CSSBuilderImpl).f34 = function () {
    return this.d34_1.f34();
  };
  protoOf(CSSBuilderImpl).g34 = function (cssRule) {
    this.d34_1.g34(cssRule);
  };
  protoOf(CSSBuilderImpl).h34 = function (selector, style) {
    this.d34_1.h34(selector, style);
  };
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance_0() {
    return Companion_instance;
  }
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    return Companion_instance_0;
  }
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_2() {
    return Companion_instance_1;
  }
  function Companion_2() {
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    return Companion_instance_2;
  }
  function Companion_3() {
  }
  var Companion_instance_3;
  function Companion_getInstance_4() {
    return Companion_instance_3;
  }
  function Companion_4() {
  }
  var Companion_instance_4;
  function Companion_getInstance_5() {
    return Companion_instance_4;
  }
  function CSSKeyframesRuleDeclaration() {
  }
  function CSSRuleBuilderImpl() {
    StyleScopeBuilder.call(this);
    this.u34_1 = 0;
  }
  function CSSStyleRuleDeclaration(selector, style) {
    this.v34_1 = selector;
    this.w34_1 = style;
    this.x34_1 = 8;
  }
  protoOf(CSSStyleRuleDeclaration).y34 = function () {
    return this.w34_1;
  };
  protoOf(CSSStyleRuleDeclaration).z34 = function () {
    return this.v34_1.b35();
  };
  protoOf(CSSStyleRuleDeclaration).toString = function () {
    return 'CSSStyleRuleDeclaration(selector=' + toString(this.v34_1) + ', style=' + toString(this.w34_1) + ')';
  };
  protoOf(CSSStyleRuleDeclaration).hashCode = function () {
    var result = hashCode(this.v34_1);
    result = imul(result, 31) + hashCode(this.w34_1) | 0;
    return result;
  };
  protoOf(CSSStyleRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSStyleRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSStyleRuleDeclaration ? other : THROW_CCE();
    if (!equals(this.v34_1, tmp0_other_with_cast.v34_1))
      return false;
    if (!equals(this.w34_1, tmp0_other_with_cast.w34_1))
      return false;
    return true;
  };
  function CSSStyledRuleDeclaration() {
  }
  function CSSGroupingRuleDeclaration() {
  }
  function Companion_5() {
  }
  var Companion_instance_5;
  function Companion_getInstance_6() {
    return Companion_instance_5;
  }
  function get_vh(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.vh' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'vh');
  }
  function get_cssRem(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.rem' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'rem');
  }
  function get_px(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'px');
  }
  function get_percent(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.percent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, '%');
  }
  function CSSUnitValueTyped(value, unit) {
    this.d35_1 = value;
    this.e35_1 = unit;
    this.f35_1 = 0;
  }
  protoOf(CSSUnitValueTyped).k1 = function () {
    return this.d35_1;
  };
  protoOf(CSSUnitValueTyped).g35 = function () {
    return this.e35_1;
  };
  protoOf(CSSUnitValueTyped).toString = function () {
    return '' + this.d35_1 + toString(this.e35_1);
  };
  protoOf(CSSUnitValueTyped).hashCode = function () {
    var result = getNumberHashCode(this.d35_1);
    result = imul(result, 31) + hashCode(this.e35_1) | 0;
    return result;
  };
  protoOf(CSSUnitValueTyped).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSUnitValueTyped))
      return false;
    var tmp0_other_with_cast = other instanceof CSSUnitValueTyped ? other : THROW_CCE();
    if (!equals(this.d35_1, tmp0_other_with_cast.d35_1))
      return false;
    if (!equals(this.e35_1, tmp0_other_with_cast.e35_1))
      return false;
    return true;
  };
  function rgb(r, g, b) {
    return new RGB(r, g, b);
  }
  function Color() {
    this.h35_1 = 0;
  }
  var Color_instance;
  function Color_getInstance() {
    return Color_instance;
  }
  function rgba(r, g, b, a) {
    return new RGBA(r, g, b, a);
  }
  function Color_0(name) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return name;
  }
  function RGB(r, g, b) {
    this.i35_1 = r;
    this.j35_1 = g;
    this.k35_1 = b;
  }
  protoOf(RGB).toString = function () {
    return 'rgb(' + toString(this.i35_1) + ', ' + toString(this.j35_1) + ', ' + toString(this.k35_1) + ')';
  };
  function RGBA(r, g, b, a) {
    this.l35_1 = r;
    this.m35_1 = g;
    this.n35_1 = b;
    this.o35_1 = a;
  }
  protoOf(RGBA).toString = function () {
    return 'rgba(' + toString(this.l35_1) + ', ' + toString(this.m35_1) + ', ' + toString(this.n35_1) + ', ' + toString(this.o35_1) + ')';
  };
  function StyleScope() {
  }
  function StyleHolder() {
  }
  function StylePropertyDeclaration(name, value) {
    this.p35_1 = name;
    this.q35_1 = value;
    this.r35_1 = 8;
  }
  protoOf(StylePropertyDeclaration).gd = function () {
    return this.p35_1;
  };
  protoOf(StylePropertyDeclaration).hd = function () {
    return this.q35_1;
  };
  protoOf(StylePropertyDeclaration).toString = function () {
    return 'StylePropertyDeclaration(name=' + this.p35_1 + ', value=' + toString(this.q35_1) + ')';
  };
  protoOf(StylePropertyDeclaration).hashCode = function () {
    var result = getStringHashCode(this.p35_1);
    result = imul(result, 31) + hashCode(this.q35_1) | 0;
    return result;
  };
  protoOf(StylePropertyDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StylePropertyDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof StylePropertyDeclaration ? other : THROW_CCE();
    if (!(this.p35_1 === tmp0_other_with_cast.p35_1))
      return false;
    if (!equals(this.q35_1, tmp0_other_with_cast.q35_1))
      return false;
    return true;
  };
  function StyleScopeBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.k34_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.l34_1 = ArrayList_init_$Create$();
    this.m34_1 = 0;
  }
  protoOf(StyleScopeBuilder).o34 = function () {
    return this.k34_1;
  };
  protoOf(StyleScopeBuilder).p34 = function () {
    return this.l34_1;
  };
  protoOf(StyleScopeBuilder).n34 = function (propertyName, value) {
    this.o34().d(new StylePropertyDeclaration(propertyName, value));
  };
  protoOf(StyleScopeBuilder).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, StyleHolder) : false) {
      tmp = (nativeEquals(this.o34(), other.o34()) && nativeEquals(this.p34(), other.p34()));
    } else {
      tmp = false;
    }
    return tmp;
  };
  function nativeEquals(_this__u8e3s4, properties) {
    if (!(_this__u8e3s4.l() === properties.l()))
      return false;
    var index = 0;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(_this__u8e3s4, Collection)) {
        tmp = _this__u8e3s4.n();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = _this__u8e3s4.i();
      while (tmp0_iterator.j()) {
        var element = tmp0_iterator.k();
        // Inline function 'org.jetbrains.compose.web.css.nativeEquals.<anonymous>' call
        var tmp0 = index;
        index = tmp0 + 1 | 0;
        var otherProp = properties.o(tmp0);
        if (!(element.p35_1 === otherProp.p35_1 && toString(element.q35_1) === toString(otherProp.q35_1))) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  }
  function sam$kotlin_properties_ReadOnlyProperty$0(function_0) {
    this.s35_1 = function_0;
  }
  protoOf(sam$kotlin_properties_ReadOnlyProperty$0).ie = function (thisRef, property) {
    return this.s35_1(thisRef, property);
  };
  protoOf(sam$kotlin_properties_ReadOnlyProperty$0).q2 = function () {
    return this.s35_1;
  };
  protoOf(sam$kotlin_properties_ReadOnlyProperty$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, ReadOnlyProperty) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.q2(), other.q2());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_properties_ReadOnlyProperty$0).hashCode = function () {
    return hashCode(this.q2());
  };
  function StyleSheet$CSSHolder$provideDelegate$selector$1($className) {
    this.u35_1 = $className;
    CSSSelector.call(this);
  }
  protoOf(StyleSheet$CSSHolder$provideDelegate$selector$1).b35 = function () {
    return '.' + this.u35_1;
  };
  function StyleSheet$CSSHolder$provideDelegate$lambda($className) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
      return $className;
    };
  }
  function StyleSheet_init_$Init$(rulesHolder, usePrefix, $this) {
    rulesHolder = rulesHolder === VOID ? new CSSRulesHolderState() : rulesHolder;
    usePrefix = usePrefix === VOID ? true : usePrefix;
    StyleSheet.call($this, usePrefix ? null : '', rulesHolder);
    return $this;
  }
  function StyleSheet_init_$Create$(rulesHolder, usePrefix) {
    return StyleSheet_init_$Init$(rulesHolder, usePrefix, objectCreate(protoOf(StyleSheet)));
  }
  function Companion_6() {
    this.v35_1 = 0;
  }
  var Companion_instance_6;
  function Companion_getInstance_7() {
    return Companion_instance_6;
  }
  function CSSSelfSelector(selector) {
    selector = selector === VOID ? null : selector;
    CSSSelector.call(this);
    this.x35_1 = selector;
    this.y35_1 = 8;
  }
  protoOf(CSSSelfSelector).toString = function () {
    throw IllegalStateException_init_$Create$("You can't concatenate `String + CSSSelector` which contains `self` or `root`. Use `selector(<your string>)` to convert `String` to `CSSSelector` for proper work. https://github.com/JetBrains/compose-jb/issues/1440");
  };
  protoOf(CSSSelfSelector).b35 = function () {
    var tmp0_safe_receiver = this.x35_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b35();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$("You can't instantiate self");
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  protoOf(CSSSelfSelector).equals = function (other) {
    return other instanceof CSSSelfSelector;
  };
  function CSSHolder(prefix, cssBuilder) {
    this.z35_1 = prefix;
    this.a36_1 = cssBuilder;
  }
  protoOf(CSSHolder).b36 = function (sheet, property) {
    var className = this.z35_1 + property.callableName;
    var selector = new StyleSheet$CSSHolder$provideDelegate$selector$1(className);
    var tmp0_container = buildCSS(selector, selector, this.a36_1);
    var properties = tmp0_container.gd();
    var rules = tmp0_container.hd();
    sheet.h34(selector, properties);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = rules.i();
    while (tmp0_iterator.j()) {
      var element = tmp0_iterator.k();
      // Inline function 'org.jetbrains.compose.web.css.CSSHolder.provideDelegate.<anonymous>' call
      sheet.g34(element);
    }
    var tmp = StyleSheet$CSSHolder$provideDelegate$lambda(className);
    return new sam$kotlin_properties_ReadOnlyProperty$0(tmp);
  };
  function StyleSheet(customPrefix, rulesHolder) {
    rulesHolder = rulesHolder === VOID ? new CSSRulesHolderState() : rulesHolder;
    this.c36_1 = rulesHolder;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.d36_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    tmp_0.e36_1 = customPrefix == null ? '' + getKClassFromExpression(this).n9() + '-' : customPrefix;
    this.f36_1 = customPrefix == null;
    this.g36_1 = 0;
  }
  protoOf(StyleSheet).f34 = function () {
    return this.c36_1.f34();
  };
  protoOf(StyleSheet).g34 = function (cssRule) {
    this.c36_1.g34(cssRule);
  };
  protoOf(StyleSheet).h34 = function (selector, style) {
    this.c36_1.h34(selector, style);
  };
  protoOf(StyleSheet).h36 = function (cssRule) {
    return new CSSHolder(this.e36_1, cssRule);
  };
  function CSSRulesHolderState() {
    this.i36_1 = mutableStateListOf();
    this.j36_1 = 0;
  }
  protoOf(CSSRulesHolderState).f34 = function () {
    return this.i36_1;
  };
  protoOf(CSSRulesHolderState).g34 = function (cssRule) {
    this.i36_1.a23(cssRule);
  };
  function buildCSS(thisClass, thisContext, cssRule) {
    var styleSheet = new StyleSheetBuilderImpl();
    var tmp0_elvis_lhs = thisClass instanceof CSSSelfSelector ? thisClass : null;
    var root = tmp0_elvis_lhs == null ? new CSSSelfSelector(thisClass) : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = thisContext instanceof CSSSelfSelector ? thisContext : null;
    var self_0 = tmp1_elvis_lhs == null ? new CSSSelfSelector(thisContext) : tmp1_elvis_lhs;
    var builder = new CSSBuilderImpl(root, self_0, styleSheet);
    cssRule(builder);
    return to(builder, styleSheet.f34());
  }
  function get_Universal() {
    _init_properties_StyleSheetBuilder_kt__ftybdn();
    return Universal;
  }
  var Universal;
  function RawSelector(selector) {
    CSSSelector.call(this);
    this.n36_1 = selector;
  }
  protoOf(RawSelector).toString = function () {
    return this.n36_1;
  };
  protoOf(RawSelector).hashCode = function () {
    return getStringHashCode(this.n36_1);
  };
  protoOf(RawSelector).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RawSelector))
      return false;
    var tmp0_other_with_cast = other instanceof RawSelector ? other : THROW_CCE();
    if (!(this.n36_1 === tmp0_other_with_cast.n36_1))
      return false;
    return true;
  };
  function SelectorsScope() {
  }
  function PseudoClassInternal(name) {
    CSSSelector.call(this);
    this.p36_1 = name;
  }
  protoOf(PseudoClassInternal).equals = function (other) {
    var tmp;
    if (other instanceof PseudoClassInternal) {
      tmp = (this.p36_1 === other.p36_1 && this.q36() == other.q36());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(PseudoClassInternal).q36 = function () {
    return null;
  };
  protoOf(PseudoClassInternal).toString = function () {
    var tmp0_safe_receiver = this.q36();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.web.css.PseudoClassInternal.toString.<anonymous>' call
      tmp = '(' + tmp0_safe_receiver + ')';
    }
    var tmp1_elvis_lhs = tmp;
    return ':' + this.p36_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  function CSSRulesHolder() {
  }
  function StyleSheetBuilderImpl() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.k36_1 = ArrayList_init_$Create$();
    this.l36_1 = 8;
  }
  protoOf(StyleSheetBuilderImpl).f34 = function () {
    return this.k36_1;
  };
  protoOf(StyleSheetBuilderImpl).g34 = function (cssRule) {
    this.f34().d(cssRule);
  };
  var properties_initialized_StyleSheetBuilder_kt_uqx9b1;
  function _init_properties_StyleSheetBuilder_kt__ftybdn() {
    if (!properties_initialized_StyleSheetBuilder_kt_uqx9b1) {
      properties_initialized_StyleSheetBuilder_kt_uqx9b1 = true;
      Universal = new RawSelector('*');
    }
  }
  function backgroundColor(_this__u8e3s4, value) {
    _this__u8e3s4.n34('background-color', value);
  }
  function border(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    border_0(_this__u8e3s4, border$lambda(width, style, color));
  }
  function borderRadius(_this__u8e3s4, r) {
    _this__u8e3s4.n34('border-radius', r);
  }
  function border_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(this_0);
    _this__u8e3s4.n34('border', this_0);
  }
  function CSSBorder() {
    this.r36_1 = null;
    this.s36_1 = null;
    this.t36_1 = null;
    this.u36_1 = 8;
  }
  protoOf(CSSBorder).equals = function (other) {
    var tmp;
    if (other instanceof CSSBorder) {
      tmp = (equals(this.r36_1, other.r36_1) && equals(this.s36_1, other.s36_1) && equals(this.t36_1, other.t36_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CSSBorder).toString = function () {
    var values = listOfNotNull([this.r36_1, this.s36_1, this.t36_1]);
    return joinToString(values, ' ');
  };
  function width(_this__u8e3s4, size) {
    _this__u8e3s4.r36_1 = size;
  }
  function style(_this__u8e3s4, style) {
    _this__u8e3s4.s36_1 = style;
  }
  function color(_this__u8e3s4, color) {
    _this__u8e3s4.t36_1 = color;
  }
  function border$lambda($width, $style, $color) {
    return function ($this$border) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        width($this$border, tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        style($this$border, tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        color($this$border, tmp2_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function minHeight(_this__u8e3s4, value) {
    _this__u8e3s4.n34('min-height', value);
  }
  function maxWidth(_this__u8e3s4, value) {
    _this__u8e3s4.n34('max-width', value);
  }
  function width_0(_this__u8e3s4, value) {
    _this__u8e3s4.n34('width', value);
  }
  function height(_this__u8e3s4, value) {
    _this__u8e3s4.n34('height', value);
  }
  function minWidth(_this__u8e3s4, value) {
    _this__u8e3s4.n34('min-width', value);
  }
  function color_0(_this__u8e3s4, value) {
    _this__u8e3s4.n34('color', value);
  }
  function flexDirection(_this__u8e3s4, flexDirection) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.i34('flex-direction', flexDirection);
  }
  function justifyContent(_this__u8e3s4, justifyContent) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.i34('justify-content', justifyContent);
  }
  function alignItems(_this__u8e3s4, alignItems) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.i34('align-items', alignItems);
  }
  function flexWrap(_this__u8e3s4, flexWrap) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.i34('flex-wrap', flexWrap);
  }
  function flex(_this__u8e3s4, value) {
    _this__u8e3s4.j34('flex', value);
  }
  function gap(_this__u8e3s4, value) {
    _this__u8e3s4.n34('gap', value);
  }
  function margin(_this__u8e3s4, value) {
    _this__u8e3s4.i34('margin', joinToString_0(value, ' '));
  }
  function marginBottom(_this__u8e3s4, value) {
    _this__u8e3s4.n34('margin-bottom', value);
  }
  function marginTop(_this__u8e3s4, value) {
    _this__u8e3s4.n34('margin-top', value);
  }
  function marginRight(_this__u8e3s4, value) {
    _this__u8e3s4.n34('margin-right', value);
  }
  function padding(_this__u8e3s4, value) {
    _this__u8e3s4.i34('padding', joinToString_0(value, ' '));
  }
  function paddingTop(_this__u8e3s4, value) {
    _this__u8e3s4.n34('padding-top', value);
  }
  function paddingLeft(_this__u8e3s4, value) {
    _this__u8e3s4.n34('padding-left', value);
  }
  function display(_this__u8e3s4, displayStyle) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.i34('display', displayStyle);
  }
  function fontSize(_this__u8e3s4, value) {
    _this__u8e3s4.n34('font-size', value);
  }
  function fontWeight(_this__u8e3s4, value) {
    _this__u8e3s4.j34('font-weight', value);
  }
  function textAlign(_this__u8e3s4, value) {
    _this__u8e3s4.i34('text-align', value);
  }
  function textDecoration(_this__u8e3s4, value) {
    _this__u8e3s4.i34('text-decoration', value);
  }
  function cursor(_this__u8e3s4, value) {
    _this__u8e3s4.i34('cursor', joinToString_0(value, ', '));
  }
  function CSSSelector() {
    this.a35_1 = 0;
  }
  protoOf(CSSSelector).b35 = function () {
    return toString(this);
  };
  function TagElement(elementBuilder, applyAttrs, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(-576127026);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.w1v(elementBuilder) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.f25(applyAttrs) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.f25(content) ? 256 : 128);
    if (!(($dirty & 731) === 146) || !$composer_0.f24()) {
      if (isTraceInProgress()) {
        traceEventStart(-576127026, $dirty, -1, 'org.jetbrains.compose.web.dom.TagElement (Base.kt:110)');
      }
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, -492369756, 'CC(remember):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>' call
        var value = new ElementScopeImpl();
        $composer_1.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      var scope = tmp0;
      var refEffect = null;
      // Inline function 'org.jetbrains.compose.web.dom.ComposeDomNode' call
      var $composer_2 = $composer_0;
      $composer_2.d1z();
      if ($composer_2.q24()) {
        var tmp_1 = $composer_2;
        tmp_1.t24(TagElement$lambda(elementBuilder, scope));
      } else {
        $composer_2.w24();
      }
      // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>' call
      var $this$ComposeDomNode = _SkippableUpdater___init__impl__4ft0t9($composer_2);
      var $composer_3 = $composer_2;
      var attrsScope = new AttrsScopeBuilder();
      if (applyAttrs == null)
        null;
      else
        applyAttrs(attrsScope);
      refEffect = attrsScope.g33_1;
      // Inline function 'androidx.compose.runtime.SkippableUpdater.update' call
      _SkippableUpdater___get_composer__impl__6t7yne($this$ComposeDomNode).k24(509942095);
      // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>.<anonymous>' call
      var $this$update = _Updater___init__impl__rbfxm8(_SkippableUpdater___get_composer__impl__6t7yne($this$ComposeDomNode));
      Updater__set_impl_v7kwss($this$update, attrsScope.h33_1, DomElementWrapper$updateClasses$ref());
      Updater__set_impl_v7kwss($this$update, attrsScope.e33_1, DomElementWrapper$updateStyleDeclarations$ref());
      var tmp_2 = attrsScope.m33();
      Updater__set_impl_v7kwss($this$update, tmp_2, DomElementWrapper$updateAttrs$ref());
      var tmp_3 = attrsScope.c33_1.n33();
      Updater__set_impl_v7kwss($this$update, tmp_3, DomElementWrapper$updateEventListeners$ref());
      Updater__set_impl_v7kwss($this$update, attrsScope.f33_1, DomElementWrapper$updateProperties$ref());
      _SkippableUpdater___get_composer__impl__6t7yne($this$ComposeDomNode).l24();
      $composer_2.k24(2058660585);
      // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>' call
      var $changed_0 = 8 & 64 >> 3 | 14 & 64 >> 3 | 112 & 64 >> 6;
      var $composer_4 = $composer_2;
      $composer_4.k24(-914956529);
      content == null || content(scope, $composer_4, 14 & $changed_0 | 112 & $dirty >> 3);
      $composer_4.l24();
      $composer_2.l24();
      $composer_2.y24();
      var tmp0_safe_receiver = refEffect;
      var tmp_4;
      if (tmp0_safe_receiver == null) {
        tmp_4 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        DisposableEffect(null, TagElement$lambda_0(tmp0_safe_receiver, scope), $composer_0, 6);
        tmp_4 = Unit_instance;
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v1y();
    }
    var tmp1_safe_receiver = $composer_0.u25();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.g2c(TagElement$lambda_1(elementBuilder, applyAttrs, content, $changed));
    }
  }
  function DomElementWrapper(node) {
    DomNodeWrapper.call(this, node);
    this.x36_1 = node;
    this.y36_1 = emptyList();
  }
  protoOf(DomElementWrapper).j31 = function () {
    return this.x36_1;
  };
  protoOf(DomElementWrapper).z36 = function (list) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.y36_1.i();
    while (tmp0_iterator.j()) {
      var element = tmp0_iterator.k();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateEventListeners.<anonymous>' call
      this.x36_1.removeEventListener(element.z2n(), element);
    }
    this.y36_1 = list;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = this.y36_1.i();
    while (tmp0_iterator_0.j()) {
      var element_0 = tmp0_iterator_0.k();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateEventListeners.<anonymous>' call
      this.x36_1.addEventListener(element_0.z2n(), element_0);
    }
  };
  protoOf(DomElementWrapper).a37 = function (applicators) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = applicators.i();
    while (tmp0_iterator.j()) {
      var element = tmp0_iterator.k();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateProperties.<anonymous>' call
      var applicator = element.gd();
      var item = element.hd();
      applicator(this.x36_1, item);
    }
  };
  protoOf(DomElementWrapper).b37 = function (styleApplier) {
    var tmp0_subject = this.x36_1;
    var tmp;
    if (tmp0_subject instanceof HTMLElement) {
      tmp = true;
    } else {
      tmp = tmp0_subject instanceof SVGElement;
    }
    if (tmp) {
      this.x36_1.removeAttribute('style');
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var style = this.x36_1.style;
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = styleApplier.o34().i();
      while (tmp0_iterator.j()) {
        var element = tmp0_iterator.k();
        // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateStyleDeclarations.<anonymous>' call
        var name = element.gd();
        var value = element.hd();
        style.setProperty(name, toString(value));
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = styleApplier.p34().i();
      while (tmp0_iterator_0.j()) {
        var element_0 = tmp0_iterator_0.k();
        // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateStyleDeclarations.<anonymous>' call
        var name_0 = element_0.gd();
        var value_0 = element_0.hd();
        style.setProperty(name_0, toString(value_0));
      }
    }
  };
  protoOf(DomElementWrapper).c37 = function (attrs) {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.x36_1.getAttributeNames();
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateAttrs.<anonymous>' call
      switch (element) {
        case 'style':
        case 'class':
          break;
        default:
          this.x36_1.removeAttribute(element);
          break;
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = attrs.p1().i();
    while (tmp0_iterator.j()) {
      var element_0 = tmp0_iterator.k();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateAttrs.<anonymous>' call
      this.x36_1.setAttribute(element_0.j1(), element_0.k1());
    }
  };
  protoOf(DomElementWrapper).d37 = function (classes) {
    this.x36_1.removeAttribute('class');
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!classes.n()) {
      var tmp = this.x36_1.classList;
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp$ret$1 = copyToArray(classes);
      (function () {
        var $externalVarargReceiverTmp = tmp;
        return $externalVarargReceiverTmp.add.apply($externalVarargReceiverTmp, [].slice.call(tmp$ret$1.slice()));
      }.call(this));
    }
  };
  function TagElement$lambda($elementBuilder, $scope) {
    return function () {
      // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>' call
      var node = $elementBuilder.n1h();
      $scope.i37(node);
      return new DomElementWrapper(node);
    };
  }
  function DomElementWrapper$updateClasses$ref() {
    var l = function (p0, p1) {
      p0.d37(p1);
      return Unit_instance;
    };
    l.callableName = 'updateClasses';
    return l;
  }
  function DomElementWrapper$updateStyleDeclarations$ref() {
    var l = function (p0, p1) {
      p0.b37(p1);
      return Unit_instance;
    };
    l.callableName = 'updateStyleDeclarations';
    return l;
  }
  function DomElementWrapper$updateAttrs$ref() {
    var l = function (p0, p1) {
      p0.c37(p1);
      return Unit_instance;
    };
    l.callableName = 'updateAttrs';
    return l;
  }
  function DomElementWrapper$updateEventListeners$ref() {
    var l = function (p0, p1) {
      p0.z36(p1);
      return Unit_instance;
    };
    l.callableName = 'updateEventListeners';
    return l;
  }
  function DomElementWrapper$updateProperties$ref() {
    var l = function (p0, p1) {
      p0.a37(p1);
      return Unit_instance;
    };
    l.callableName = 'updateProperties';
    return l;
  }
  function TagElement$lambda_0($this, $scope) {
    return function ($this$DisposableEffect) {
      return $this($this$DisposableEffect, $scope.j37());
    };
  }
  function TagElement$lambda_1($elementBuilder, $applyAttrs, $content, $$changed) {
    return function ($composer, $force) {
      TagElement($elementBuilder, $applyAttrs, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ElementScopeImpl() {
    ElementScopeBase.call(this);
    this.h37_1 = 8;
  }
  protoOf(ElementScopeImpl).i37 = function (_set____db54di) {
    this.g37_1 = _set____db54di;
  };
  protoOf(ElementScopeImpl).j37 = function () {
    var tmp = this.g37_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('element');
    }
  };
  protoOf(ElementScopeImpl).k37 = function (_this__u8e3s4) {
    return this.j37();
  };
  function ElementScopeBase() {
    this.l37_1 = 0;
    this.m37_1 = 8;
  }
  var Address;
  var Article;
  var Aside;
  function get_Header() {
    _init_properties_Elements_kt__eyv5nt();
    return Header;
  }
  var Header;
  var Area;
  var Audio;
  var Map;
  var Track;
  var Video;
  var Datalist;
  var Fieldset;
  var Legend;
  var Meter;
  var Output;
  var Progress;
  var Embed;
  var Iframe;
  var Object_0;
  var Param;
  var Picture;
  var Source;
  function get_Canvas() {
    _init_properties_Elements_kt__eyv5nt();
    return Canvas;
  }
  var Canvas;
  var DList;
  var DTerm;
  var DDescription;
  function get_Div() {
    _init_properties_Elements_kt__eyv5nt();
    return Div;
  }
  var Div;
  function get_A() {
    _init_properties_Elements_kt__eyv5nt();
    return A;
  }
  var A;
  var Input;
  function get_Button() {
    _init_properties_Elements_kt__eyv5nt();
    return Button;
  }
  var Button;
  function get_H1() {
    _init_properties_Elements_kt__eyv5nt();
    return H1;
  }
  var H1;
  function get_H2() {
    _init_properties_Elements_kt__eyv5nt();
    return H2;
  }
  var H2;
  function get_H3() {
    _init_properties_Elements_kt__eyv5nt();
    return H3;
  }
  var H3;
  function get_H4() {
    _init_properties_Elements_kt__eyv5nt();
    return H4;
  }
  var H4;
  var H5;
  var H6;
  function get_P() {
    _init_properties_Elements_kt__eyv5nt();
    return P;
  }
  var P;
  var Em;
  var I;
  var B;
  var Small;
  var Sup;
  var Sub;
  var Blockquote;
  function get_Span() {
    _init_properties_Elements_kt__eyv5nt();
    return Span;
  }
  var Span;
  var Br;
  function get_Ul() {
    _init_properties_Elements_kt__eyv5nt();
    return Ul;
  }
  var Ul;
  var Ol;
  function get_Li() {
    _init_properties_Elements_kt__eyv5nt();
    return Li;
  }
  var Li;
  var Img;
  var Form;
  var Select;
  var Option;
  var OptGroup;
  var Section;
  var TextArea;
  function get_Nav() {
    _init_properties_Elements_kt__eyv5nt();
    return Nav;
  }
  var Nav;
  var Pre;
  var Code;
  function get_Main() {
    _init_properties_Elements_kt__eyv5nt();
    return Main;
  }
  var Main;
  function get_Footer() {
    _init_properties_Elements_kt__eyv5nt();
    return Footer;
  }
  var Footer;
  var Hr;
  var Label;
  var Table;
  var Caption;
  var Col;
  var Colgroup;
  var Tr;
  var Thead;
  var Th;
  var Td;
  var Tbody;
  var Tfoot;
  function get_Style() {
    _init_properties_Elements_kt__eyv5nt();
    return Style;
  }
  var Style;
  function _get_el__ndc0ck($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.o37_1;
    el$factory();
    return this_0.k1();
  }
  function ElementBuilderImplementation$el$delegate$lambda(this$0) {
    return function () {
      return document.createElement(this$0.n37_1);
    };
  }
  function ElementBuilderImplementation(tagName) {
    this.n37_1 = tagName;
    var tmp = this;
    tmp.o37_1 = lazy(ElementBuilderImplementation$el$delegate$lambda(this));
  }
  protoOf(ElementBuilderImplementation).n1h = function () {
    var tmp = _get_el__ndc0ck(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function Div_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(1121267064);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.f25(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.f25(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.f24()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1121267064, $dirty, -1, 'org.jetbrains.compose.web.dom.Div (Elements.kt:495)');
      }
      TagElement(get_Div(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v1y();
    }
    var tmp0_safe_receiver = $composer_0.u25();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.g2c(Div$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Main_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(80229820);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.f25(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.f25(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.f24()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(80229820, $dirty, -1, 'org.jetbrains.compose.web.dom.Main (Elements.kt:822)');
      }
      TagElement(get_Main(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v1y();
    }
    var tmp0_safe_receiver = $composer_0.u25();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.g2c(Main$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Header_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(790946064);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.f25(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.f25(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.f24()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(790946064, $dirty, -1, 'org.jetbrains.compose.web.dom.Header (Elements.kt:220)');
      }
      TagElement(get_Header(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v1y();
    }
    var tmp0_safe_receiver = $composer_0.u25();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.g2c(Header$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function H1_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(867530828);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.f25(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.f25(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.f24()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(867530828, $dirty, -1, 'org.jetbrains.compose.web.dom.H1 (Elements.kt:533)');
      }
      TagElement(get_H1(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v1y();
    }
    var tmp0_safe_receiver = $composer_0.u25();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.g2c(H1$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Nav_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(-1033668854);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.f25(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.f25(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.f24()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1033668854, $dirty, -1, 'org.jetbrains.compose.web.dom.Nav (Elements.kt:788)');
      }
      TagElement(get_Nav(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v1y();
    }
    var tmp0_safe_receiver = $composer_0.u25();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.g2c(Nav$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Button_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(17018421);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.f25(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.f25(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.f24()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(17018421, $dirty, -1, 'org.jetbrains.compose.web.dom.Button (Elements.kt:527)');
      }
      TagElement(get_Button(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v1y();
    }
    var tmp0_safe_receiver = $composer_0.u25();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.g2c(Button$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Text_0(value, $composer, $changed) {
    _init_properties_Elements_kt__eyv5nt();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(-1813500779);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.w1v(value) ? 4 : 2);
    if (!(($dirty & 11) === 2) || !$composer_0.f24()) {
      if (isTraceInProgress()) {
        traceEventStart(-1813500779, $dirty, -1, 'org.jetbrains.compose.web.dom.Text (Elements.kt:482)');
      }
      // Inline function 'androidx.compose.runtime.ComposeNode' call
      $composer_0.k24(-671462136);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Text.<anonymous>' call
        var value_0 = Text$lambda;
        this_0.m26(value_0);
        tmp = value_0;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.l24();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1886828752, 'CC(ComposeNode):Composables.kt#9igjgp');
      var tmp_1 = $composer_1.g24();
      if (!(tmp_1 instanceof DomApplier)) {
        invalidApplier();
      }
      $composer_1.d1z();
      if ($composer_1.q24()) {
        $composer_1.t24(tmpCache);
      } else {
        $composer_1.w24();
      }
      // Inline function 'org.jetbrains.compose.web.dom.Text.<anonymous>' call
      var $this$ComposeNode = _Updater___init__impl__rbfxm8($composer_1);
      Updater__set_impl_v7kwss($this$ComposeNode, value, Text$lambda_0);
      $composer_1.y24();
      sourceInformationMarkerEnd($composer_1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v1y();
    }
    var tmp0_safe_receiver = $composer_0.u25();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.g2c(Text$lambda_1(value, $changed));
    }
  }
  function Footer_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(744300318);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.f25(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.f25(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.f24()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(744300318, $dirty, -1, 'org.jetbrains.compose.web.dom.Footer (Elements.kt:834)');
      }
      TagElement(get_Footer(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v1y();
    }
    var tmp0_safe_receiver = $composer_0.u25();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.g2c(Footer$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function A_0(href, attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var href_0 = {_v: href};
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(1386364631);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.w1v(href_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.f25(attrs_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.f25(content_0._v) ? 256 : 128);
    if (!(($dirty & 731) === 146) || !$composer_0.f24()) {
      if (!(($default & 1) === 0)) {
        href_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1386364631, $dirty, -1, 'org.jetbrains.compose.web.dom.A (Elements.kt:508)');
      }
      var tmp = get_A();
      $composer_0.k24(-671461516);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = !!($composer_0.w1v(href_0._v) | $composer_0.f25(attrs_0._v));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l26();
      var tmp_0;
      if (invalid || it === Companion_getInstance().e1z_1) {
        // Inline function 'org.jetbrains.compose.web.dom.A.<anonymous>' call
        var value = A$lambda(href_0, attrs_0);
        this_0.m26(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.l24();
      TagElement(tmp, tmpCache, content_0._v, $composer_0, 896 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v1y();
    }
    var tmp0_safe_receiver = $composer_0.u25();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.g2c(A$lambda_0(href_0, attrs_0, content_0, $changed, $default));
    }
  }
  function P_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(-892332201);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.f25(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.f25(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.f24()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-892332201, $dirty, -1, 'org.jetbrains.compose.web.dom.P (Elements.kt:569)');
      }
      TagElement(get_P(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v1y();
    }
    var tmp0_safe_receiver = $composer_0.u25();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.g2c(P$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function H4_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(908129231);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.f25(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.f25(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.f24()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(908129231, $dirty, -1, 'org.jetbrains.compose.web.dom.H4 (Elements.kt:551)');
      }
      TagElement(get_H4(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v1y();
    }
    var tmp0_safe_receiver = $composer_0.u25();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.g2c(H4$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Canvas_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(651019099);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.f25(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.f25(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.f24()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(651019099, $dirty, -1, 'org.jetbrains.compose.web.dom.Canvas (Elements.kt:436)');
      }
      TagElement(get_Canvas(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v1y();
    }
    var tmp0_safe_receiver = $composer_0.u25();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.g2c(Canvas$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function H2_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(881063629);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.f25(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.f25(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.f24()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(881063629, $dirty, -1, 'org.jetbrains.compose.web.dom.H2 (Elements.kt:539)');
      }
      TagElement(get_H2(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v1y();
    }
    var tmp0_safe_receiver = $composer_0.u25();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.g2c(H2$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function H3_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(894596430);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.f25(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.f25(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.f24()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(894596430, $dirty, -1, 'org.jetbrains.compose.web.dom.H3 (Elements.kt:545)');
      }
      TagElement(get_H3(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v1y();
    }
    var tmp0_safe_receiver = $composer_0.u25();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.g2c(H3$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Span_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(-606646835);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.f25(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.f25(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.f24()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-606646835, $dirty, -1, 'org.jetbrains.compose.web.dom.Span (Elements.kt:617)');
      }
      TagElement(get_Span(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v1y();
    }
    var tmp0_safe_receiver = $composer_0.u25();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.g2c(Span$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Ul_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(-1470249702);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.f25(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.f25(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.f24()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1470249702, $dirty, -1, 'org.jetbrains.compose.web.dom.Ul (Elements.kt:627)');
      }
      TagElement(get_Ul(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v1y();
    }
    var tmp0_safe_receiver = $composer_0.u25();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.g2c(Ul$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Li_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(-991532288);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.f25(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.f25(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.f24()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-991532288, $dirty, -1, 'org.jetbrains.compose.web.dom.Li (Elements.kt:639)');
      }
      TagElement(get_Li(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v1y();
    }
    var tmp0_safe_receiver = $composer_0.u25();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.g2c(Li$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Style_0(applyAttrs, cssRules, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var applyAttrs_0 = {_v: applyAttrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(244974285);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.f25(applyAttrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.w1v(cssRules) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.f24()) {
      if (!(($default & 1) === 0)) {
        applyAttrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(244974285, $dirty, -1, 'org.jetbrains.compose.web.dom.Style (Elements.kt:1002)');
      }
      var tmp = get_Style();
      $composer_0.k24(-671448825);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = $composer_0.f25(applyAttrs_0._v);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l26();
      var tmp_0;
      if (invalid || it === Companion_getInstance().e1z_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Style.<anonymous>' call
        var value = Style$lambda(applyAttrs_0);
        this_0.m26(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.l24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.web.dom.Style.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, 962227798, true, Style$lambda_0(cssRules));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.l26();
      var tmp_3;
      if (invalid_0 || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Style.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.m26(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      TagElement(tmp, tmpCache, tmp0, $composer_0, 384);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v1y();
    }
    var tmp0_safe_receiver = $composer_0.u25();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.g2c(Style$lambda_1(applyAttrs_0, cssRules, $changed, $default));
    }
  }
  function clearCSSRules(_this__u8e3s4) {
    _init_properties_Elements_kt__eyv5nt();
    // Inline function 'kotlin.repeat' call
    var times = _this__u8e3s4.cssRules.length;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.jetbrains.compose.web.dom.clearCSSRules.<anonymous>' call
        _this__u8e3s4.deleteRule(0);
      }
       while (inductionVariable < times);
  }
  function Div$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Div_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Main$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Main_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Header$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Header_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function H1$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      H1_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Nav$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Nav_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Button$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Button_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Text$lambda() {
    _init_properties_Elements_kt__eyv5nt();
    return new DomNodeWrapper(document.createTextNode(''));
  }
  function Text$lambda_0($this$set, value) {
    _init_properties_Elements_kt__eyv5nt();
    var tmp = $this$set.j31();
    (tmp instanceof Text ? tmp : THROW_CCE()).data = value;
    return Unit_instance;
  }
  function Text$lambda_1($value, $$changed) {
    return function ($composer, $force) {
      Text_0($value, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Footer$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Footer_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function A$lambda($href, $attrs) {
    return function ($this$TagElement) {
      var tmp;
      if (!($href._v == null)) {
        href($this$TagElement, $href._v);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!($attrs._v == null)) {
        tmp_0 = $attrs._v($this$TagElement);
      }
      return Unit_instance;
    };
  }
  function A$lambda_0($href, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      A_0($href._v, $attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function P$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      P_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function H4$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      H4_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Canvas$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Canvas_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function H2$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      H2_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function H3$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      H3_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Span$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Span_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Ul$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Ul_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Li$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Li_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Style$lambda($applyAttrs) {
    return function ($this$TagElement) {
      var tmp;
      if (!($applyAttrs._v == null)) {
        tmp = $applyAttrs._v($this$TagElement);
      }
      return Unit_instance;
    };
  }
  function _no_name_provided__qut3iv($cssStylesheet) {
    this.p37_1 = $cssStylesheet;
  }
  protoOf(_no_name_provided__qut3iv).gl = function () {
    // Inline function 'org.jetbrains.compose.web.dom.Style.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    var tmp0_safe_receiver = this.p37_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      clearCSSRules(tmp0_safe_receiver);
    }
  };
  function Style$lambda$lambda($this_TagElement, $cssRules) {
    return function ($this$DisposableEffect) {
      var tmp = $this_TagElement.k37($this$DisposableEffect).sheet;
      var cssStylesheet = tmp instanceof CSSStyleSheet ? tmp : null;
      if (cssStylesheet == null)
        null;
      else {
        setCSSRules(cssStylesheet, $cssRules);
      }
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv(cssStylesheet);
    };
  }
  function Style$lambda_0($cssRules) {
    return function ($this$TagElement, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.w1v($this$TagElement) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) || !$composer_0.f24()) {
        if (isTraceInProgress()) {
          traceEventStart(962227798, $dirty, -1, 'org.jetbrains.compose.web.dom.Style.<anonymous> (Elements.kt:1011)');
        }
        var tmp_1 = $cssRules.l();
        DisposableEffect_0($cssRules, tmp_1, Style$lambda$lambda($this$TagElement, $cssRules), $composer_0, 0);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp_0 = tmp_2;
      } else {
        $composer_0.v1y();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function Style$lambda_1($applyAttrs, $cssRules, $$changed, $$default) {
    return function ($composer, $force) {
      Style_0($applyAttrs._v, $cssRules, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function el$factory() {
    return getPropertyCallableRef('el', 1, KProperty1, function (receiver) {
      return _get_el__ndc0ck(receiver);
    }, null);
  }
  var properties_initialized_Elements_kt_gtqiqv;
  function _init_properties_Elements_kt__eyv5nt() {
    if (!properties_initialized_Elements_kt_gtqiqv) {
      properties_initialized_Elements_kt_gtqiqv = true;
      Address = new ElementBuilderImplementation('address');
      Article = new ElementBuilderImplementation('article');
      Aside = new ElementBuilderImplementation('aside');
      Header = new ElementBuilderImplementation('header');
      Area = new ElementBuilderImplementation('area');
      Audio = new ElementBuilderImplementation('audio');
      Map = new ElementBuilderImplementation('map');
      Track = new ElementBuilderImplementation('track');
      Video = new ElementBuilderImplementation('video');
      Datalist = new ElementBuilderImplementation('datalist');
      Fieldset = new ElementBuilderImplementation('fieldset');
      Legend = new ElementBuilderImplementation('legend');
      Meter = new ElementBuilderImplementation('meter');
      Output = new ElementBuilderImplementation('output');
      Progress = new ElementBuilderImplementation('progress');
      Embed = new ElementBuilderImplementation('embed');
      Iframe = new ElementBuilderImplementation('iframe');
      Object_0 = new ElementBuilderImplementation('object');
      Param = new ElementBuilderImplementation('param');
      Picture = new ElementBuilderImplementation('picture');
      Source = new ElementBuilderImplementation('source');
      Canvas = new ElementBuilderImplementation('canvas');
      DList = new ElementBuilderImplementation('dl');
      DTerm = new ElementBuilderImplementation('dt');
      DDescription = new ElementBuilderImplementation('dd');
      Div = new ElementBuilderImplementation('div');
      A = new ElementBuilderImplementation('a');
      Input = new ElementBuilderImplementation('input');
      Button = new ElementBuilderImplementation('button');
      H1 = new ElementBuilderImplementation('h1');
      H2 = new ElementBuilderImplementation('h2');
      H3 = new ElementBuilderImplementation('h3');
      H4 = new ElementBuilderImplementation('h4');
      H5 = new ElementBuilderImplementation('h5');
      H6 = new ElementBuilderImplementation('h6');
      P = new ElementBuilderImplementation('p');
      Em = new ElementBuilderImplementation('em');
      I = new ElementBuilderImplementation('i');
      B = new ElementBuilderImplementation('b');
      Small = new ElementBuilderImplementation('small');
      Sup = new ElementBuilderImplementation('sup');
      Sub = new ElementBuilderImplementation('sub');
      Blockquote = new ElementBuilderImplementation('blockquote');
      Span = new ElementBuilderImplementation('span');
      Br = new ElementBuilderImplementation('br');
      Ul = new ElementBuilderImplementation('ul');
      Ol = new ElementBuilderImplementation('ol');
      Li = new ElementBuilderImplementation('li');
      Img = new ElementBuilderImplementation('img');
      Form = new ElementBuilderImplementation('form');
      Select = new ElementBuilderImplementation('select');
      Option = new ElementBuilderImplementation('option');
      OptGroup = new ElementBuilderImplementation('optgroup');
      Section = new ElementBuilderImplementation('section');
      TextArea = new ElementBuilderImplementation('textarea');
      Nav = new ElementBuilderImplementation('nav');
      Pre = new ElementBuilderImplementation('pre');
      Code = new ElementBuilderImplementation('code');
      Main = new ElementBuilderImplementation('main');
      Footer = new ElementBuilderImplementation('footer');
      Hr = new ElementBuilderImplementation('hr');
      Label = new ElementBuilderImplementation('label');
      Table = new ElementBuilderImplementation('table');
      Caption = new ElementBuilderImplementation('caption');
      Col = new ElementBuilderImplementation('col');
      Colgroup = new ElementBuilderImplementation('colgroup');
      Tr = new ElementBuilderImplementation('tr');
      Thead = new ElementBuilderImplementation('thead');
      Th = new ElementBuilderImplementation('th');
      Td = new ElementBuilderImplementation('td');
      Tbody = new ElementBuilderImplementation('tbody');
      Tfoot = new ElementBuilderImplementation('tfoot');
      Style = new ElementBuilderImplementation('style');
    }
  }
  function setCSSRules(_this__u8e3s4, cssRules) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = cssRules.i();
    while (tmp0_iterator.j()) {
      var element = tmp0_iterator.k();
      // Inline function 'org.jetbrains.compose.web.dom.setCSSRules.<anonymous>' call
      addRule(_this__u8e3s4, element);
    }
  }
  function addRule(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_0(_this__u8e3s4, cssRuleDeclaration.z34() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_0(_this__u8e3s4, cssRule) {
    var cssRuleIndex = _this__u8e3s4.insertRule(cssRule, _this__u8e3s4.cssRules.length);
    return _this__u8e3s4.cssRules.item(cssRuleIndex);
  }
  function fillRule(cssRuleDeclaration, cssRule) {
    if (isInterface(cssRuleDeclaration, CSSStyledRuleDeclaration)) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var cssStyleRule = cssRule;
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = cssRuleDeclaration.y34().o34().i();
      while (tmp0_iterator.j()) {
        var element = tmp0_iterator.k();
        // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
        var name = element.gd();
        var value = element.hd();
        setProperty(cssStyleRule.style, name, value);
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = cssRuleDeclaration.y34().p34().i();
      while (tmp0_iterator_0.j()) {
        var element_0 = tmp0_iterator_0.k();
        // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
        var name_0 = element_0.gd();
        var value_0 = element_0.hd();
        setVariable(cssStyleRule.style, name_0, value_0);
      }
    } else {
      if (isInterface(cssRuleDeclaration, CSSGroupingRuleDeclaration)) {
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var cssGroupingRule = cssRule;
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator_1 = cssRuleDeclaration.c35().i();
        while (tmp0_iterator_1.j()) {
          var element_1 = tmp0_iterator_1.k();
          // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
          addRule_1(cssGroupingRule, element_1);
        }
      } else {
        if (cssRuleDeclaration instanceof CSSKeyframesRuleDeclaration) {
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var cssGroupingRule_0 = cssRule;
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator_2 = cssRuleDeclaration.q37_1.i();
          while (tmp0_iterator_2.j()) {
            var element_2 = tmp0_iterator_2.k();
            // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
            addRule_2(cssGroupingRule_0, element_2);
          }
        }
      }
    }
  }
  function setProperty(style, name, value) {
    style.setProperty(name, toString(value));
  }
  function setVariable(style, name, value) {
    style.setProperty('--' + name, toString(value));
  }
  function addRule_1(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_3(_this__u8e3s4, cssRuleDeclaration.z34() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_2(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_4(_this__u8e3s4, cssRuleDeclaration.z34() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_3(_this__u8e3s4, cssRule) {
    var cssRuleIndex = _this__u8e3s4.insertRule(cssRule, _this__u8e3s4.cssRules.length);
    return _this__u8e3s4.cssRules.item(cssRuleIndex);
  }
  function addRule_4(_this__u8e3s4, cssRule) {
    // Inline function 'org.jetbrains.compose.web.css.appendRule' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.appendRule(cssRule);
    return _this__u8e3s4.cssRules.item(_this__u8e3s4.cssRules.length - 1 | 0);
  }
  function SyntheticEvent(nativeEvent) {
    this.u37_1 = nativeEvent;
    var tmp = this;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.v37_1 = this.u37_1.target;
    this.w37_1 = this.u37_1.bubbles;
    this.x37_1 = this.u37_1.cancelable;
    this.y37_1 = this.u37_1.composed;
    this.z37_1 = this.u37_1.currentTarget;
    this.a38_1 = this.u37_1.eventPhase;
    this.b38_1 = this.u37_1.defaultPrevented;
    this.c38_1 = this.u37_1.timeStamp;
    this.d38_1 = this.u37_1.type;
    this.e38_1 = this.u37_1.isTrusted;
    this.f38_1 = 0;
  }
  function SyntheticMouseEvent(nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.s38_1 = nativeEvent;
    this.t38_1 = nativeEvent.altKey;
    this.u38_1 = nativeEvent.button;
    this.v38_1 = nativeEvent.buttons;
    this.w38_1 = nativeEvent.clientX;
    this.x38_1 = nativeEvent.clientY;
    this.y38_1 = nativeEvent.ctrlKey;
    this.z38_1 = nativeEvent.metaKey;
    var tmp = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = nativeEvent.movementX;
    var tmp0_elvis_lhs = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : null;
    tmp.a39_1 = tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
    var tmp_1 = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = nativeEvent.movementY;
    var tmp0_elvis_lhs_0 = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : null;
    tmp_1.b39_1 = tmp0_elvis_lhs_0 == null ? 0 : tmp0_elvis_lhs_0;
    this.c39_1 = nativeEvent.offsetX;
    this.d39_1 = nativeEvent.offsetY;
    this.e39_1 = nativeEvent.pageX;
    this.f39_1 = nativeEvent.pageY;
    this.g39_1 = nativeEvent.region;
    this.h39_1 = nativeEvent.relatedTarget;
    this.i39_1 = nativeEvent.screenX;
    this.j39_1 = nativeEvent.screenY;
    this.k39_1 = nativeEvent.shiftKey;
    this.l39_1 = nativeEvent.x;
    this.m39_1 = nativeEvent.y;
    this.n39_1 = 0;
  }
  //region block: post-declaration
  protoOf(AttrsScopeBuilder).a33 = id;
  protoOf(EventsListenerScopeBuilder).b33 = onClick;
  protoOf(StyleScopeBuilder).i34 = property;
  protoOf(StyleScopeBuilder).j34 = property_0;
  protoOf(CSSBuilderImpl).returnUniversalSelector = returnUniversalSelector;
  protoOf(CSSBuilderImpl).returnHoverSelector = returnHoverSelector;
  protoOf(CSSBuilderImpl).q34 = get_hover;
  defineProp(protoOf(CSSUnitValueTyped), 'value', function () {
    return this.k1();
  });
  defineProp(protoOf(CSSUnitValueTyped), 'unit', function () {
    return this.g35();
  });
  protoOf(StyleSheet).returnUniversalSelector = returnUniversalSelector;
  protoOf(StyleSheet).returnHoverSelector = returnHoverSelector;
  protoOf(StyleSheet).q34 = get_hover;
  protoOf(CSSRulesHolderState).h34 = add;
  protoOf(StyleSheetBuilderImpl).h34 = add;
  protoOf(StyleSheetBuilderImpl).returnUniversalSelector = returnUniversalSelector;
  protoOf(StyleSheetBuilderImpl).returnHoverSelector = returnHoverSelector;
  protoOf(StyleSheetBuilderImpl).q34 = get_hover;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Companion_instance_3 = new Companion_3();
  Companion_instance_4 = new Companion_4();
  Companion_instance_5 = new Companion_5();
  Color_instance = new Color();
  Companion_instance_6 = new Companion_6();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = StyleSheet_init_$Init$;
  _.$_$.b = Companion_instance_2;
  _.$_$.c = Color_instance;
  _.$_$.d = Companion_instance;
  _.$_$.e = Companion_instance_0;
  _.$_$.f = Companion_instance_3;
  _.$_$.g = Companion_instance_1;
  _.$_$.h = Companion_instance_4;
  _.$_$.i = Color_0;
  _.$_$.j = StyleSheet;
  _.$_$.k = alignItems;
  _.$_$.l = backgroundColor;
  _.$_$.m = borderRadius;
  _.$_$.n = border;
  _.$_$.o = color_0;
  _.$_$.p = get_cssRem;
  _.$_$.q = cursor;
  _.$_$.r = display;
  _.$_$.s = flexDirection;
  _.$_$.t = flexWrap;
  _.$_$.u = flex;
  _.$_$.v = fontSize;
  _.$_$.w = fontWeight;
  _.$_$.x = gap;
  _.$_$.y = height;
  _.$_$.z = justifyContent;
  _.$_$.a1 = marginBottom;
  _.$_$.b1 = marginRight;
  _.$_$.c1 = marginTop;
  _.$_$.d1 = margin;
  _.$_$.e1 = maxWidth;
  _.$_$.f1 = minHeight;
  _.$_$.g1 = minWidth;
  _.$_$.h1 = paddingLeft;
  _.$_$.i1 = paddingTop;
  _.$_$.j1 = padding;
  _.$_$.k1 = get_percent;
  _.$_$.l1 = get_px;
  _.$_$.m1 = rgba;
  _.$_$.n1 = rgb;
  _.$_$.o1 = textAlign;
  _.$_$.p1 = textDecoration;
  _.$_$.q1 = get_vh;
  _.$_$.r1 = width_0;
  _.$_$.s1 = A_0;
  _.$_$.t1 = Button_0;
  _.$_$.u1 = Canvas_0;
  _.$_$.v1 = Div_0;
  _.$_$.w1 = Footer_0;
  _.$_$.x1 = H1_0;
  _.$_$.y1 = H2_0;
  _.$_$.z1 = H3_0;
  _.$_$.a2 = H4_0;
  _.$_$.b2 = Header_0;
  _.$_$.c2 = Li_0;
  _.$_$.d2 = Main_0;
  _.$_$.e2 = Nav_0;
  _.$_$.f2 = P_0;
  _.$_$.g2 = Span_0;
  _.$_$.h2 = Style_0;
  _.$_$.i2 = Text_0;
  _.$_$.j2 = Ul_0;
  //endregion
  return _;
}));

//# sourceMappingURL=html-html-core.js.map
