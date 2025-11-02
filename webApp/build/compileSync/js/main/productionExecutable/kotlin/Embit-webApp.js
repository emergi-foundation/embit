(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './html-internal-html-core-runtime.js', './projects-core-koin-core.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-html-core.js', './Embit-shared.js', './kotlinx-coroutines-core.js', './Kotlin-DateTime-library-kotlinx-datetime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./html-internal-html-core-runtime.js'), require('./projects-core-koin-core.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-html-core.js'), require('./Embit-shared.js'), require('./kotlinx-coroutines-core.js'), require('./Kotlin-DateTime-library-kotlinx-datetime.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'Embit:webApp'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'Embit:webApp'.");
    }
    if (typeof globalThis['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'Embit:webApp'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'Embit:webApp'.");
    }
    if (typeof globalThis['projects-core-koin-core'] === 'undefined') {
      throw new Error("Error loading module 'Embit:webApp'. Its dependency 'projects-core-koin-core' was not found. Please, check whether 'projects-core-koin-core' is loaded prior to 'Embit:webApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'Embit:webApp'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'Embit:webApp'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'Embit:webApp'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'Embit:webApp'.");
    }
    if (typeof globalThis['Embit-shared'] === 'undefined') {
      throw new Error("Error loading module 'Embit:webApp'. Its dependency 'Embit-shared' was not found. Please, check whether 'Embit-shared' is loaded prior to 'Embit:webApp'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'Embit:webApp'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'Embit:webApp'.");
    }
    if (typeof globalThis['Kotlin-DateTime-library-kotlinx-datetime'] === 'undefined') {
      throw new Error("Error loading module 'Embit:webApp'. Its dependency 'Kotlin-DateTime-library-kotlinx-datetime' was not found. Please, check whether 'Kotlin-DateTime-library-kotlinx-datetime' is loaded prior to 'Embit:webApp'.");
    }
    globalThis['Embit:webApp'] = factory(typeof globalThis['Embit:webApp'] === 'undefined' ? {} : globalThis['Embit:webApp'], globalThis['kotlin-kotlin-stdlib'], globalThis['html-internal-html-core-runtime'], globalThis['projects-core-koin-core'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['html-html-core'], globalThis['Embit-shared'], globalThis['kotlinx-coroutines-core'], globalThis['Kotlin-DateTime-library-kotlinx-datetime']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_io_insert_koin_koin_core, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_html_core, kotlin_Embit_shared, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_kotlinx_datetime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.y2;
  var renderComposable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.c;
  var startKoin = kotlin_io_insert_koin_koin_core.$_$.h;
  var THROW_CCE = kotlin_kotlin.$_$.y8;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var Style = kotlin_org_jetbrains_compose_html_html_core.$_$.h2;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.v1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var Header = kotlin_org_jetbrains_compose_html_html_core.$_$.b2;
  var Footer = kotlin_org_jetbrains_compose_html_html_core.$_$.w1;
  var Enum = kotlin_kotlin.$_$.q8;
  var protoOf = kotlin_kotlin.$_$.m7;
  var initMetadataForClass = kotlin_kotlin.$_$.v6;
  var VOID = kotlin_kotlin.$_$.d;
  var Companion_instance = kotlin_org_jetbrains_compose_html_html_core.$_$.d;
  var display = kotlin_org_jetbrains_compose_html_html_core.$_$.r;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.e;
  var flexDirection = kotlin_org_jetbrains_compose_html_html_core.$_$.s;
  var get_vh = kotlin_org_jetbrains_compose_html_html_core.$_$.q1;
  var minHeight = kotlin_org_jetbrains_compose_html_html_core.$_$.f1;
  var rgb = kotlin_org_jetbrains_compose_html_html_core.$_$.n1;
  var backgroundColor = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var Color_instance = kotlin_org_jetbrains_compose_html_html_core.$_$.c;
  var Color = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var color = kotlin_org_jetbrains_compose_html_html_core.$_$.o;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.p;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.l1;
  var padding = kotlin_org_jetbrains_compose_html_html_core.$_$.j1;
  var maxWidth = kotlin_org_jetbrains_compose_html_html_core.$_$.e1;
  var Companion_instance_1 = kotlin_org_jetbrains_compose_html_html_core.$_$.g;
  var justifyContent = kotlin_org_jetbrains_compose_html_html_core.$_$.z;
  var Companion_instance_2 = kotlin_org_jetbrains_compose_html_html_core.$_$.b;
  var alignItems = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var Companion_instance_3 = kotlin_org_jetbrains_compose_html_html_core.$_$.f;
  var flexWrap = kotlin_org_jetbrains_compose_html_html_core.$_$.t;
  var gap = kotlin_org_jetbrains_compose_html_html_core.$_$.x;
  var fontSize = kotlin_org_jetbrains_compose_html_html_core.$_$.v;
  var fontWeight = kotlin_org_jetbrains_compose_html_html_core.$_$.w;
  var margin = kotlin_org_jetbrains_compose_html_html_core.$_$.d1;
  var border = kotlin_org_jetbrains_compose_html_html_core.$_$.n;
  var cursor = kotlin_org_jetbrains_compose_html_html_core.$_$.q;
  var borderRadius = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var rgba = kotlin_org_jetbrains_compose_html_html_core.$_$.m1;
  var flex = kotlin_org_jetbrains_compose_html_html_core.$_$.u;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.k1;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.r1;
  var textAlign = kotlin_org_jetbrains_compose_html_html_core.$_$.o1;
  var textDecoration = kotlin_org_jetbrains_compose_html_html_core.$_$.p1;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.j;
  var StyleSheet_init_$Init$ = kotlin_org_jetbrains_compose_html_html_core.$_$.a;
  var initMetadataForObject = kotlin_kotlin.$_$.a7;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.i2;
  var A = kotlin_org_jetbrains_compose_html_html_core.$_$.s1;
  var P = kotlin_org_jetbrains_compose_html_html_core.$_$.f2;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var KMutableProperty0 = kotlin_kotlin.$_$.z7;
  var THROW_ISE = kotlin_kotlin.$_$.z8;
  var getLocalDelegateReference = kotlin_kotlin.$_$.q6;
  var platformModule = kotlin_Embit_shared.$_$.a;
  var get_sharedModule = kotlin_Embit_shared.$_$.b;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.i9;
  var Main = kotlin_org_jetbrains_compose_html_html_core.$_$.d2;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var Button = kotlin_org_jetbrains_compose_html_html_core.$_$.t1;
  var H1 = kotlin_org_jetbrains_compose_html_html_core.$_$.x1;
  var Nav = kotlin_org_jetbrains_compose_html_html_core.$_$.e2;
  var KProperty1 = kotlin_kotlin.$_$.b8;
  var getPropertyCallableRef = kotlin_kotlin.$_$.s6;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.s3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.o;
  var copyToArray = kotlin_kotlin.$_$.y3;
  var toString = kotlin_kotlin.$_$.o7;
  var getStringHashCode = kotlin_kotlin.$_$.t6;
  var hashCode = kotlin_kotlin.$_$.u6;
  var getBooleanHashCode = kotlin_kotlin.$_$.p6;
  var equals = kotlin_kotlin.$_$.m6;
  var marginBottom = kotlin_org_jetbrains_compose_html_html_core.$_$.a1;
  var charSequenceLength = kotlin_kotlin.$_$.j6;
  var H4 = kotlin_org_jetbrains_compose_html_html_core.$_$.a2;
  var Canvas = kotlin_org_jetbrains_compose_html_html_core.$_$.u1;
  var collectAsState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var to = kotlin_kotlin.$_$.o9;
  var AnalyzeBatteryHealthUseCase = kotlin_Embit_shared.$_$.f;
  var getKClass = kotlin_kotlin.$_$.b;
  var KoinScopeComponent = kotlin_io_insert_koin_koin_core.$_$.g;
  var isInterface = kotlin_kotlin.$_$.e7;
  var CalculateBatteryStatisticsUseCase = kotlin_Embit_shared.$_$.g;
  var CoroutineImpl = kotlin_kotlin.$_$.a6;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.l5;
  var Result = kotlin_kotlin.$_$.w8;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.o2;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.n2;
  var TimePeriod_MONTH_getInstance = kotlin_Embit_shared.$_$.k;
  var Exception = kotlin_kotlin.$_$.s8;
  var initMetadataForLambda = kotlin_kotlin.$_$.z6;
  var KoinPlatformTools_instance = kotlin_io_insert_koin_koin_core.$_$.d;
  var lazy = kotlin_kotlin.$_$.g9;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var getKoin = kotlin_io_insert_koin_koin_core.$_$.e;
  var KoinComponent = kotlin_io_insert_koin_koin_core.$_$.f;
  var toString_0 = kotlin_kotlin.$_$.n9;
  var height = kotlin_org_jetbrains_compose_html_html_core.$_$.y;
  var minWidth = kotlin_org_jetbrains_compose_html_html_core.$_$.g1;
  var marginTop = kotlin_org_jetbrains_compose_html_html_core.$_$.c1;
  var paddingTop = kotlin_org_jetbrains_compose_html_html_core.$_$.i1;
  var paddingLeft = kotlin_org_jetbrains_compose_html_html_core.$_$.h1;
  var Companion_instance_4 = kotlin_org_jetbrains_compose_html_html_core.$_$.h;
  var round = kotlin_kotlin.$_$.p7;
  var numberToInt = kotlin_kotlin.$_$.j7;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.k2;
  var padStart = kotlin_kotlin.$_$.g8;
  var Li = kotlin_org_jetbrains_compose_html_html_core.$_$.c2;
  var Ul = kotlin_org_jetbrains_compose_html_html_core.$_$.j2;
  var H3 = kotlin_org_jetbrains_compose_html_html_core.$_$.z1;
  var KProperty0 = kotlin_kotlin.$_$.a8;
  var H2 = kotlin_org_jetbrains_compose_html_html_core.$_$.y1;
  var ensureNotNull = kotlin_kotlin.$_$.f9;
  var Span = kotlin_org_jetbrains_compose_html_html_core.$_$.g2;
  var toLong = kotlin_kotlin.$_$.n7;
  var Companion_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.c;
  var toLocalDateTime = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.d;
  var GetBatteryHistoryUseCase = kotlin_Embit_shared.$_$.h;
  var emptyList = kotlin_kotlin.$_$.a4;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.x6;
  var TimePeriod_DAY_getInstance = kotlin_Embit_shared.$_$.j;
  var listOf = kotlin_kotlin.$_$.q4;
  var Collection = kotlin_kotlin.$_$.e3;
  var values = kotlin_Embit_shared.$_$.e;
  var average = kotlin_kotlin.$_$.q3;
  var average_0 = kotlin_kotlin.$_$.r3;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.p;
  var DisposableEffect_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var BatteryReading = kotlin_Embit_shared.$_$.c;
  var FunctionAdapter = kotlin_kotlin.$_$.d6;
  var MonitorBatteryUseCase = kotlin_Embit_shared.$_$.i;
  var catch_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var Unknown_getInstance = kotlin_Embit_shared.$_$.p;
  var NotCharging_getInstance = kotlin_Embit_shared.$_$.o;
  var Full_getInstance = kotlin_Embit_shared.$_$.n;
  var Discharging_getInstance = kotlin_Embit_shared.$_$.m;
  var Charging = kotlin_Embit_shared.$_$.d;
  var Companion_getInstance_1 = kotlin_Embit_shared.$_$.l;
  var marginRight = kotlin_org_jetbrains_compose_html_html_core.$_$.b1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Route, 'Route', VOID, Enum);
  initMetadataForObject(AppStyles, 'AppStyles', VOID, StyleSheet);
  initMetadataForObject(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt');
  initMetadataForClass(ChartType, 'ChartType', VOID, Enum);
  initMetadataForClass(ChartDataset, 'ChartDataset');
  initMetadataForObject(ChartStyles, 'ChartStyles', VOID, StyleSheet);
  initMetadataForClass(_no_name_provided__qut3iv);
  initMetadataForLambda(AnalyticsPresenter$loadAnalytics$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(AnalyticsPresenter, 'AnalyticsPresenter', AnalyticsPresenter, VOID, [KoinComponent]);
  initMetadataForClass(AnalyticsState, 'AnalyticsState', AnalyticsState);
  initMetadataForObject(AnalyticsStyles, 'AnalyticsStyles', VOID, StyleSheet);
  initMetadataForObject(ComposableSingletons$AnalyticsScreenKt, 'ComposableSingletons$AnalyticsScreenKt');
  initMetadataForLambda(AnalyticsScreen$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($loadHistoryCOROUTINE$0, CoroutineImpl);
  initMetadataForClass(HistoryPresenter, 'HistoryPresenter', HistoryPresenter, VOID, [KoinComponent], [1]);
  initMetadataForClass(HistoryState, 'HistoryState', HistoryState);
  initMetadataForClass(ChartData, 'ChartData');
  initMetadataForObject(HistoryStyles, 'HistoryStyles', VOID, StyleSheet);
  initMetadataForObject(ComposableSingletons$HistoryScreenKt, 'ComposableSingletons$HistoryScreenKt');
  initMetadataForLambda(HistoryScreen$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(HistoryScreen$lambda$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(MonitorPresenter$startMonitoring$slambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(MonitorPresenter$startMonitoring$slambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(MonitorPresenter$startMonitoring$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(MonitorPresenter, 'MonitorPresenter', MonitorPresenter, VOID, [KoinComponent]);
  initMetadataForClass(MonitorState, 'MonitorState', MonitorState);
  initMetadataForObject(MonitorStyles, 'MonitorStyles', VOID, StyleSheet);
  initMetadataForObject(ComposableSingletons$MonitorScreenKt, 'ComposableSingletons$MonitorScreenKt');
  initMetadataForLambda(MonitorScreen$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(_no_name_provided__qut3iv_0);
  initMetadataForObject(SettingsStyles, 'SettingsStyles', VOID, StyleSheet);
  initMetadataForObject(ComposableSingletons$SettingsScreenKt, 'ComposableSingletons$SettingsScreenKt');
  //endregion
  var AppStyles$stable;
  function main() {
    initializeKoin();
    if (!checkBrowserCompatibility()) {
      showCompatibilityError();
      return Unit_instance;
    }
    renderComposable('root', ComposableSingletons$MainKt_getInstance().o39_1);
  }
  function initializeKoin() {
    startKoin(initializeKoin$lambda);
  }
  function checkBrowserCompatibility() {
    var tmp = 'getBattery' in navigator;
    var hasBatteryApi = (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
    var tmp_0 = 'indexedDB' in window;
    var hasIndexedDB = (!(tmp_0 == null) ? typeof tmp_0 === 'boolean' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = 'serviceWorker' in navigator;
    var hasServiceWorker = (!(tmp_1 == null) ? typeof tmp_1 === 'boolean' : false) ? tmp_1 : THROW_CCE();
    console.log('Browser Compatibility Check:');
    console.log('  Battery API: ' + hasBatteryApi);
    console.log('  IndexedDB: ' + hasIndexedDB);
    console.log('  Service Worker: ' + hasServiceWorker);
    return hasBatteryApi && hasIndexedDB;
  }
  function showCompatibilityError() {
    var tmp = document.getElementById('root');
    var tmp0_elvis_lhs = tmp instanceof HTMLElement ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var rootElement = tmp_0;
    rootElement.innerHTML = '<div class="error-container">\n    <div class="error-icon">\u26A0\uFE0F<\/div>\n    <h1 class="error-title">Browser Not Supported<\/h1>\n    <p class="error-message">\n        Your browser doesn\'t support the Battery Status API required for this application.\n        Please try using a modern browser like Chrome, Edge, or Opera.\n    <\/p>\n<\/div>';
  }
  function EmbitApp($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(-1689430181);
    if (!($changed === 0) || !$composer_0.f24()) {
      if (isTraceInProgress()) {
        traceEventStart(-1689430181, $changed, -1, 'EmbitApp (Main.kt:80)');
      }
      $composer_0.m24(961280870);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'EmbitApp.<anonymous>' call
        var value = mutableStateOf(Route_Monitor_getInstance());
        this_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      var currentRoute$delegate = tmp0_group;
      // Inline function 'org.jetbrains.compose.web.css.Style' call
      var styleSheet = AppStyles_getInstance();
      var $composer_1 = $composer_0;
      $composer_1.k24(-1196466140);
      Style(null, styleSheet.f34(), $composer_1, 0, 1);
      $composer_1.l24();
      $composer_0.m24(961283478);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.l26();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'EmbitApp.<anonymous>' call
        var value_0 = EmbitApp$lambda_1;
        this_1.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'EmbitApp.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(788477308, true, EmbitApp$lambda_2(currentRoute$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_2.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_2.l26();
      var tmp_3;
      if (invalid || it_1 === Companion_getInstance().e1z_1) {
        // Inline function 'EmbitApp.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_5(dispatchReceiver);
        $composer_2.m26(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Div(tmp1_group, tmp0, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v1y();
    }
    var tmp2_safe_receiver = $composer_0.u25();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.g2c(EmbitApp$lambda_3($changed));
    }
  }
  function Header_0(currentRoute, onNavigate, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(2101010544);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1v(currentRoute) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f25(onNavigate) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.f24()) {
      if (isTraceInProgress()) {
        traceEventStart(2101010544, $dirty, -1, 'Header (Main.kt:114)');
      }
      $composer_0.m24(-1050522710);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'Header.<anonymous>' call
        var value = Header$lambda;
        this_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'Header.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(809281233, true, Header$lambda_0(currentRoute, onNavigate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.l26();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'Header.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_9(dispatchReceiver);
        $composer_1.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Header(tmp0_group, tmp0, $composer_0, 54, 0);
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
      tmp1_safe_receiver.g2c(Header$lambda_1(currentRoute, onNavigate, $changed));
    }
  }
  function Footer_0($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(-1045986374);
    if (!($changed === 0) || !$composer_0.f24()) {
      if (isTraceInProgress()) {
        traceEventStart(-1045986374, $changed, -1, 'Footer (Main.kt:144)');
      }
      $composer_0.m24(459538616);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'Footer.<anonymous>' call
        var value = Footer$lambda;
        this_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      Footer(tmp0_group, ComposableSingletons$MainKt_getInstance().s39_1, $composer_0, 54, 0);
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
      tmp1_safe_receiver.g2c(Footer$lambda_0($changed));
    }
  }
  var Route_Monitor_instance;
  var Route_Analytics_instance;
  var Route_History_instance;
  var Route_Settings_instance;
  function values_0() {
    return [Route_Monitor_getInstance(), Route_Analytics_getInstance(), Route_History_getInstance(), Route_Settings_getInstance()];
  }
  var Route_entriesInitialized;
  function Route_initEntries() {
    if (Route_entriesInitialized)
      return Unit_instance;
    Route_entriesInitialized = true;
    Route_Monitor_instance = new Route('Monitor', 0, 'Monitor');
    Route_Analytics_instance = new Route('Analytics', 1, 'Analytics');
    Route_History_instance = new Route('History', 2, 'History');
    Route_Settings_instance = new Route('Settings', 3, 'Settings');
  }
  function Route(name, ordinal, title) {
    Enum.call(this, name, ordinal);
    this.v39_1 = title;
  }
  function AppStyles$app$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    minHeight($this$style, get_vh(100));
    backgroundColor($this$style, rgb(245, 245, 245));
    return Unit_instance;
  }
  function AppStyles$header$delegate$lambda($this$style) {
    backgroundColor($this$style, rgb(27, 94, 32));
    // Inline function 'org.jetbrains.compose.web.css.Color.white' call
    var tmp$ret$0 = Color('white');
    color($this$style, tmp$ret$0);
    padding($this$style, [get_cssRem(1), get_px(0)]);
    $this$style.i34('box-shadow', '0 2px 4px rgba(0,0,0,0.1)');
    return Unit_instance;
  }
  function AppStyles$headerContainer$delegate$lambda($this$style) {
    maxWidth($this$style, get_px(1200));
    $this$style.i34('margin', '0 auto');
    padding($this$style, [get_px(0), get_cssRem(1)]);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceBetween' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$7 = 'space-between';
    justifyContent($this$style, tmp$ret$7);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$style, 'center');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Wrap' call
    // Inline function 'org.jetbrains.compose.web.css.FlexWrap' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexWrap($this$style, 'wrap');
    gap($this$style, get_cssRem(1));
    return Unit_instance;
  }
  function AppStyles$appTitle$delegate$lambda($this$style) {
    fontSize($this$style, get_cssRem(1.75));
    fontWeight($this$style, 600);
    margin($this$style, [get_px(0)]);
    return Unit_instance;
  }
  function AppStyles$nav$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    gap($this$style, get_cssRem(0.5));
    return Unit_instance;
  }
  function AppStyles$navButton$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Color.transparent' call
    var tmp$ret$0 = Color('transparent');
    backgroundColor($this$style, tmp$ret$0);
    // Inline function 'org.jetbrains.compose.web.css.Color.white' call
    var tmp$ret$1 = Color('white');
    color($this$style, tmp$ret$1);
    border($this$style, get_px(0));
    padding($this$style, [get_cssRem(0.5), get_cssRem(1)]);
    fontSize($this$style, get_cssRem(1));
    cursor($this$style, ['pointer']);
    borderRadius($this$style, get_px(4));
    $this$style.i34('transition', 'background-color 0.2s');
    return Unit_instance;
  }
  function AppStyles$navButtonActive$delegate$lambda($this$style) {
    backgroundColor($this$style, rgba(255, 255, 255, 0.2));
    fontWeight($this$style, 600);
    return Unit_instance;
  }
  function AppStyles$mainContent$delegate$lambda($this$style) {
    flex($this$style, 1);
    maxWidth($this$style, get_px(1200));
    width($this$style, get_percent(100));
    $this$style.i34('margin', '0 auto');
    padding($this$style, [get_cssRem(2), get_cssRem(1)]);
    return Unit_instance;
  }
  function AppStyles$footer$delegate$lambda($this$style) {
    backgroundColor($this$style, rgb(33, 33, 33));
    color($this$style, rgb(200, 200, 200));
    padding($this$style, [get_cssRem(1)]);
    textAlign($this$style, 'center');
    $this$style.i34('margin-top', 'auto');
    return Unit_instance;
  }
  function AppStyles$footerText$delegate$lambda($this$style) {
    margin($this$style, [get_px(0)]);
    fontSize($this$style, get_cssRem(0.875));
    return Unit_instance;
  }
  function AppStyles$footerLink$delegate$lambda($this$style) {
    color($this$style, rgb(129, 199, 132));
    textDecoration($this$style, 'none');
    return Unit_instance;
  }
  function AppStyles() {
    AppStyles_instance = this;
    StyleSheet_init_$Init$(VOID, VOID, this);
    var tmp = this;
    tmp.b3a_1 = this.h36(AppStyles$app$delegate$lambda).b36(this, app$factory());
    var tmp_0 = this;
    tmp_0.c3a_1 = this.h36(AppStyles$header$delegate$lambda).b36(this, header$factory());
    var tmp_1 = this;
    tmp_1.d3a_1 = this.h36(AppStyles$headerContainer$delegate$lambda).b36(this, headerContainer$factory());
    var tmp_2 = this;
    tmp_2.e3a_1 = this.h36(AppStyles$appTitle$delegate$lambda).b36(this, appTitle$factory());
    var tmp_3 = this;
    tmp_3.f3a_1 = this.h36(AppStyles$nav$delegate$lambda).b36(this, nav$factory());
    var tmp_4 = this;
    tmp_4.g3a_1 = this.h36(AppStyles$navButton$delegate$lambda).b36(this, navButton$factory());
    var tmp_5 = this;
    tmp_5.h3a_1 = this.h36(AppStyles$navButtonActive$delegate$lambda).b36(this, navButtonActive$factory());
    var tmp_6 = this;
    tmp_6.i3a_1 = this.h36(AppStyles$mainContent$delegate$lambda).b36(this, mainContent$factory());
    var tmp_7 = this;
    tmp_7.j3a_1 = this.h36(AppStyles$footer$delegate$lambda).b36(this, footer$factory());
    var tmp_8 = this;
    tmp_8.k3a_1 = this.h36(AppStyles$footerText$delegate$lambda).b36(this, footerText$factory());
    var tmp_9 = this;
    tmp_9.l3a_1 = this.h36(AppStyles$footerLink$delegate$lambda).b36(this, footerLink$factory());
  }
  protoOf(AppStyles).m3a = function () {
    return this.b3a_1.ie(this, app$factory_0());
  };
  protoOf(AppStyles).z34 = function () {
    return this.c3a_1.ie(this, header$factory_0());
  };
  protoOf(AppStyles).n3a = function () {
    return this.d3a_1.ie(this, headerContainer$factory_0());
  };
  protoOf(AppStyles).o3a = function () {
    return this.e3a_1.ie(this, appTitle$factory_0());
  };
  protoOf(AppStyles).p3a = function () {
    return this.f3a_1.ie(this, nav$factory_0());
  };
  protoOf(AppStyles).q3a = function () {
    return this.g3a_1.ie(this, navButton$factory_0());
  };
  protoOf(AppStyles).r3a = function () {
    return this.h3a_1.ie(this, navButtonActive$factory_0());
  };
  protoOf(AppStyles).s3a = function () {
    return this.i3a_1.ie(this, mainContent$factory_0());
  };
  protoOf(AppStyles).t3a = function () {
    return this.j3a_1.ie(this, footer$factory_0());
  };
  protoOf(AppStyles).u3a = function () {
    return this.k3a_1.ie(this, footerText$factory_0());
  };
  protoOf(AppStyles).v3a = function () {
    return this.l3a_1.ie(this, footerLink$factory_0());
  };
  var AppStyles_instance;
  function AppStyles_getInstance() {
    if (AppStyles_instance == null)
      new AppStyles();
    return AppStyles_instance;
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($this$renderComposable, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1521502105, $changed, -1, 'ComposableSingletons$MainKt.lambda-1.<anonymous> (Main.kt:26)');
    }
    EmbitApp($composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_2$lambda_dts8wk($this$H1, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1306430475, $changed, -1, 'ComposableSingletons$MainKt.lambda-2.<anonymous> (Main.kt:118)');
    }
    Text('\u26A1 Embit', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_3$lambda_ezu85n($this$A, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1173801161, $changed, -1, 'ComposableSingletons$MainKt.lambda-3.<anonymous> (Main.kt:149)');
    }
    Text('Open Source', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_4$lambda_r7ncra($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-795147447, $changed, -1, 'ComposableSingletons$MainKt.lambda-4.<anonymous> (Main.kt:147)');
    }
    Text('Embit v2.1.0 \xA9 2025 | ', $composer_0, 6);
    $composer_0.m24(885739307);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.l26();
    var tmp;
    if (false || it === Companion_getInstance().e1z_1) {
      // Inline function 'ComposableSingletons$MainKt.lambda-4.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$MainKt$lambda_4$lambda$lambda_tu4lbz;
      $composer_0.m26(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.o24();
    A('https://github.com/embit', tmp0_group, ComposableSingletons$MainKt_getInstance().q39_1, $composer_0, 438, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_4$lambda$lambda_tu4lbz($this$A) {
    $this$A.z32([AppStyles_getInstance().v3a()]);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_5$lambda_1lz4ax($this$Footer, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-963617749, $changed, -1, 'ComposableSingletons$MainKt.lambda-5.<anonymous> (Main.kt:146)');
    }
    $composer_0.m24(-1901680564);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.l26();
    var tmp;
    if (false || it === Companion_getInstance().e1z_1) {
      // Inline function 'ComposableSingletons$MainKt.lambda-5.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$MainKt$lambda_5$lambda$lambda_4wkiwu;
      $composer_0.m26(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.o24();
    P(tmp0_group, ComposableSingletons$MainKt_getInstance().r39_1, $composer_0, 54, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_5$lambda$lambda_4wkiwu($this$P) {
    $this$P.z32([AppStyles_getInstance().u3a()]);
    return Unit_instance;
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.o39_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-1521502105, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
    var tmp_0 = this;
    tmp_0.p39_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-1306430475, false, ComposableSingletons$MainKt$lambda_2$lambda_dts8wk));
    var tmp_1 = this;
    tmp_1.q39_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(-1173801161, false, ComposableSingletons$MainKt$lambda_3$lambda_ezu85n));
    var tmp_2 = this;
    tmp_2.r39_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(-795147447, false, ComposableSingletons$MainKt$lambda_4$lambda_r7ncra));
    var tmp_3 = this;
    tmp_3.s39_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(-963617749, false, ComposableSingletons$MainKt$lambda_5$lambda_1lz4ax));
  }
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function EmbitApp$lambda($currentRoute$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentRoute', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $currentRoute$delegate.k1();
  }
  function EmbitApp$lambda_0($currentRoute$delegate, _set____db54di) {
    getLocalDelegateReference('currentRoute', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $currentRoute$delegate.lt(_set____db54di);
    return Unit_instance;
  }
  function initializeKoin$lambda($this$startKoin) {
    $this$startKoin.x19([platformModule(), get_sharedModule()]);
    return Unit_instance;
  }
  function EmbitApp$lambda_1($this$Div) {
    $this$Div.z32([AppStyles_getInstance().m3a()]);
    return Unit_instance;
  }
  function EmbitApp$lambda$lambda($currentRoute$delegate) {
    return function (route) {
      EmbitApp$lambda_0($currentRoute$delegate, route);
      return Unit_instance;
    };
  }
  function EmbitApp$lambda$lambda_0($this$Main) {
    $this$Main.z32([AppStyles_getInstance().s3a()]);
    return Unit_instance;
  }
  function EmbitApp$lambda$lambda_1($currentRoute$delegate) {
    return function ($this$Main, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(520912719, $changed, -1, 'EmbitApp.<anonymous>.<anonymous> (Main.kt:94)');
      }
      switch (EmbitApp$lambda($currentRoute$delegate).r1_1) {
        case 0:
          $composer_0.m24(239900585);
          MonitorScreen($composer_0, 0);
          $composer_0.o24();
          break;
        case 1:
          $composer_0.m24(239902219);
          AnalyticsScreen($composer_0, 0);
          $composer_0.o24();
          break;
        case 2:
          $composer_0.m24(239903849);
          HistoryScreen($composer_0, 0);
          $composer_0.o24();
          break;
        case 3:
          $composer_0.m24(239905450);
          SettingsScreen($composer_0, 0);
          $composer_0.o24();
          break;
        default:
          $composer_0.m24(239899047);
          $composer_0.o24();
          noWhenBranchMatchedException();
          break;
      }
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function EmbitApp$lambda_2($currentRoute$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(788477308, $changed, -1, 'EmbitApp.<anonymous> (Main.kt:87)');
      }
      var tmp = EmbitApp$lambda($currentRoute$delegate);
      $composer_0.m24(-1728590372);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.l26();
      var tmp_0;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'EmbitApp.<anonymous>.<anonymous>.<anonymous>' call
        var value = EmbitApp$lambda$lambda($currentRoute$delegate);
        $composer_0.m26(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.o24();
      Header_0(tmp, tmp0_group, $composer_0, 48);
      $composer_0.m24(-1728587491);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.l26();
      var tmp_2;
      if (false || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'EmbitApp.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = EmbitApp$lambda$lambda_0;
        $composer_0.m26(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'EmbitApp.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(520912719, true, EmbitApp$lambda$lambda_1($currentRoute$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.l26();
      var tmp_4;
      if (invalid || it_1 === Companion_getInstance().e1z_1) {
        // Inline function 'EmbitApp.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_4(dispatchReceiver);
        $composer_1.m26(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Main(tmp1_group, tmp0, $composer_0, 54, 0);
      Footer_0($composer_0, 0);
      var tmp_6;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_6 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function EmbitApp$lambda_3($$changed) {
    return function ($composer, $force) {
      EmbitApp($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Header$lambda($this$Header) {
    $this$Header.z32([AppStyles_getInstance().z34()]);
    return Unit_instance;
  }
  function Header$lambda$lambda($this$Div) {
    $this$Div.z32([AppStyles_getInstance().n3a()]);
    return Unit_instance;
  }
  function Header$lambda$lambda$lambda($this$H1) {
    $this$H1.z32([AppStyles_getInstance().o3a()]);
    return Unit_instance;
  }
  function Header$lambda$lambda$lambda_0($this$Nav) {
    $this$Nav.z32([AppStyles_getInstance().p3a()]);
    return Unit_instance;
  }
  function Header$lambda$lambda$lambda$lambda$lambda($onNavigate, $route) {
    return function (it) {
      $onNavigate($route);
      return Unit_instance;
    };
  }
  function Header$lambda$lambda$lambda$lambda($currentRoute, $route, $onNavigate) {
    return function ($this$Button) {
      $this$Button.z32([AppStyles_getInstance().q3a(), $currentRoute.equals($route) ? AppStyles_getInstance().r3a() : '']);
      $this$Button.b33(Header$lambda$lambda$lambda$lambda$lambda($onNavigate, $route));
      return Unit_instance;
    };
  }
  function Header$lambda$lambda$lambda$lambda_0($route) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1737335607, $changed, -1, 'Header.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (Main.kt:132)');
      }
      Text($route.v39_1, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function Header$lambda$lambda$lambda_1($currentRoute, $onNavigate) {
    return function ($this$Nav, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1143924351, $changed, -1, 'Header.<anonymous>.<anonymous>.<anonymous> (Main.kt:122)');
      }
      // Inline function 'kotlin.collections.forEach' call
      var indexedObject = values_0();
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'Header.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        $composer_0.m24(-274272973);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!(!!($composer_0.w1v($currentRoute) | $composer_0.w1v(element)) | $composer_0.w1v($onNavigate));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.l26();
        var tmp;
        if (invalid || it === Companion_getInstance().e1z_1) {
          // Inline function 'Header.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = Header$lambda$lambda$lambda$lambda($currentRoute, element, $onNavigate);
          $composer_0.m26(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        $composer_0.o24();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'Header.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-1737335607, true, Header$lambda$lambda$lambda$lambda_0(element), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_1.w1v(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.l26();
        var tmp_1;
        if (invalid_0 || it_0 === Companion_getInstance().e1z_1) {
          // Inline function 'Header.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_6(dispatchReceiver);
          $composer_1.m26(value_0);
          tmp_1 = value_0;
        } else {
          tmp_1 = it_0;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Button(tmp0_group, tmp0, $composer_0, 48, 0);
      }
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function Header$lambda$lambda_0($currentRoute, $onNavigate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1326450510, $changed, -1, 'Header.<anonymous>.<anonymous> (Main.kt:117)');
      }
      $composer_0.m24(-1977966358);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'Header.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = Header$lambda$lambda$lambda;
        $composer_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      H1(tmp0_group, ComposableSingletons$MainKt_getInstance().p39_1, $composer_0, 54, 0);
      $composer_0.m24(-1977962971);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.l26();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'Header.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = Header$lambda$lambda$lambda_0;
        $composer_0.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'Header.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1143924351, true, Header$lambda$lambda$lambda_1($currentRoute, $onNavigate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.l26();
      var tmp_3;
      if (invalid || it_1 === Companion_getInstance().e1z_1) {
        // Inline function 'Header.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_7(dispatchReceiver);
        $composer_1.m26(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Nav(tmp1_group, tmp0, $composer_0, 54, 0);
      var tmp_5;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_5 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function Header$lambda_0($currentRoute, $onNavigate) {
    return function ($this$Header, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(809281233, $changed, -1, 'Header.<anonymous> (Main.kt:116)');
      }
      $composer_0.m24(-1349855022);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'Header.<anonymous>.<anonymous>.<anonymous>' call
        var value = Header$lambda$lambda;
        $composer_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'Header.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1326450510, true, Header$lambda$lambda_0($currentRoute, $onNavigate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.l26();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'Header.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_8(dispatchReceiver);
        $composer_1.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function Header$lambda_1($currentRoute, $onNavigate, $$changed) {
    return function ($composer, $force) {
      Header_0($currentRoute, $onNavigate, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Footer$lambda($this$Footer) {
    $this$Footer.z32([AppStyles_getInstance().t3a()]);
    return Unit_instance;
  }
  function Footer$lambda_0($$changed) {
    return function ($composer, $force) {
      Footer_0($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Route_Monitor_getInstance() {
    Route_initEntries();
    return Route_Monitor_instance;
  }
  function Route_Analytics_getInstance() {
    Route_initEntries();
    return Route_Analytics_instance;
  }
  function Route_History_getInstance() {
    Route_initEntries();
    return Route_History_instance;
  }
  function Route_Settings_getInstance() {
    Route_initEntries();
    return Route_Settings_instance;
  }
  function app$factory() {
    return getPropertyCallableRef('app', 1, KProperty1, function (receiver) {
      return receiver.m3a();
    }, null);
  }
  function header$factory() {
    return getPropertyCallableRef('header', 1, KProperty1, function (receiver) {
      return receiver.z34();
    }, null);
  }
  function headerContainer$factory() {
    return getPropertyCallableRef('headerContainer', 1, KProperty1, function (receiver) {
      return receiver.n3a();
    }, null);
  }
  function appTitle$factory() {
    return getPropertyCallableRef('appTitle', 1, KProperty1, function (receiver) {
      return receiver.o3a();
    }, null);
  }
  function nav$factory() {
    return getPropertyCallableRef('nav', 1, KProperty1, function (receiver) {
      return receiver.p3a();
    }, null);
  }
  function navButton$factory() {
    return getPropertyCallableRef('navButton', 1, KProperty1, function (receiver) {
      return receiver.q3a();
    }, null);
  }
  function navButtonActive$factory() {
    return getPropertyCallableRef('navButtonActive', 1, KProperty1, function (receiver) {
      return receiver.r3a();
    }, null);
  }
  function mainContent$factory() {
    return getPropertyCallableRef('mainContent', 1, KProperty1, function (receiver) {
      return receiver.s3a();
    }, null);
  }
  function footer$factory() {
    return getPropertyCallableRef('footer', 1, KProperty1, function (receiver) {
      return receiver.t3a();
    }, null);
  }
  function footerText$factory() {
    return getPropertyCallableRef('footerText', 1, KProperty1, function (receiver) {
      return receiver.u3a();
    }, null);
  }
  function footerLink$factory() {
    return getPropertyCallableRef('footerLink', 1, KProperty1, function (receiver) {
      return receiver.v3a();
    }, null);
  }
  function app$factory_0() {
    return getPropertyCallableRef('app', 1, KProperty1, function (receiver) {
      return receiver.m3a();
    }, null);
  }
  function header$factory_0() {
    return getPropertyCallableRef('header', 1, KProperty1, function (receiver) {
      return receiver.z34();
    }, null);
  }
  function headerContainer$factory_0() {
    return getPropertyCallableRef('headerContainer', 1, KProperty1, function (receiver) {
      return receiver.n3a();
    }, null);
  }
  function appTitle$factory_0() {
    return getPropertyCallableRef('appTitle', 1, KProperty1, function (receiver) {
      return receiver.o3a();
    }, null);
  }
  function nav$factory_0() {
    return getPropertyCallableRef('nav', 1, KProperty1, function (receiver) {
      return receiver.p3a();
    }, null);
  }
  function navButton$factory_0() {
    return getPropertyCallableRef('navButton', 1, KProperty1, function (receiver) {
      return receiver.q3a();
    }, null);
  }
  function navButtonActive$factory_0() {
    return getPropertyCallableRef('navButtonActive', 1, KProperty1, function (receiver) {
      return receiver.r3a();
    }, null);
  }
  function mainContent$factory_0() {
    return getPropertyCallableRef('mainContent', 1, KProperty1, function (receiver) {
      return receiver.s3a();
    }, null);
  }
  function footer$factory_0() {
    return getPropertyCallableRef('footer', 1, KProperty1, function (receiver) {
      return receiver.t3a();
    }, null);
  }
  function footerText$factory_0() {
    return getPropertyCallableRef('footerText', 1, KProperty1, function (receiver) {
      return receiver.u3a();
    }, null);
  }
  function footerLink$factory_0() {
    return getPropertyCallableRef('footerLink', 1, KProperty1, function (receiver) {
      return receiver.v3a();
    }, null);
  }
  function mainWrapper() {
    main();
  }
  var components_ChartDataset$stable;
  var components_ChartStyles$stable;
  function BatteryChart(chartId, chartType, labels, datasets, title, $composer, $changed, $default) {
    var chartType_0 = {_v: chartType};
    var title_0 = {_v: title};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(2075001012);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1v(chartId) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.w1v(chartType_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.f25(labels) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.f25(datasets) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.w1v(title_0._v) ? 16384 : 8192);
    if (!(($dirty & 9363) === 9362) || !$composer_0.f24()) {
      if (!(($default & 2) === 0)) {
        chartType_0._v = ChartType_LINE_getInstance();
      }
      if (!(($default & 16) === 0)) {
        title_0._v = '';
      }
      if (isTraceInProgress()) {
        traceEventStart(2075001012, $dirty, -1, 'components.BatteryChart (BatteryChart.kt:19)');
      }
      $composer_0.m24(331751049);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = !!(!!(!!(!!(($dirty & 14) === 4 | ($dirty & 112) === 32) | $composer_0.f25(labels)) | $composer_0.f25(datasets)) | ($dirty & 57344) === 16384);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l26();
      var tmp;
      if (invalid || it === Companion_getInstance().e1z_1) {
        // Inline function 'components.BatteryChart.<anonymous>' call
        var value = BatteryChart$lambda(chartId, chartType_0, labels, datasets, title_0);
        this_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      DisposableEffect(chartId, labels, datasets, tmp0_group, $composer_0, 14 & $dirty | 112 & $dirty >> 3 | 896 & $dirty >> 3);
      $composer_0.m24(331759600);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.l26();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'components.BatteryChart.<anonymous>' call
        var value_0 = BatteryChart$lambda_0;
        this_1.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'components.BatteryChart.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1762282675, true, BatteryChart$lambda_1(title_0, chartId), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.l26();
      var tmp_3;
      if (invalid_0 || it_1 === Companion_getInstance().e1z_1) {
        // Inline function 'components.BatteryChart.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_11(dispatchReceiver);
        $composer_1.m26(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp1_group, tmp0, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v1y();
    }
    var tmp2_safe_receiver = $composer_0.u25();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.g2c(BatteryChart$lambda_2(chartId, chartType_0, labels, datasets, title_0, $changed, $default));
    }
  }
  function createChart(canvas, chartType, labels, datasets, title) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(datasets, 10));
    var tmp0_iterator = datasets.i();
    while (tmp0_iterator.j()) {
      var item = tmp0_iterator.k();
      // Inline function 'components.createChart.<anonymous>' call
      var tmp$ret$0 = {label: item.label, data: item.data.map(function (n) {
        return n;
      }), backgroundColor: item.backgroundColor, borderColor: item.borderColor, borderWidth: item.borderWidth, fill: item.fill, tension: 0.4};
      destination.d(tmp$ret$0);
    }
    var jsDatasets = copyToArray(destination);
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var chartTypeStr = chartType.q1_1.toLowerCase();
    // Inline function 'kotlin.collections.toTypedArray' call
    var labelsArray = copyToArray(labels);
    (function () {
      var chartModule = require('chart.js/auto');
      var Chart = chartModule.Chart || chartModule.default || chartModule;
      if (window.charts === undefined) {
        window.charts = {};
      }
      if (window.charts[canvas.id]) {
        window.charts[canvas.id].destroy();
      }
      var config = {type: chartTypeStr, data: {labels: labelsArray, datasets: jsDatasets}, options: {responsive: true, maintainAspectRatio: true, aspectRatio: 2, plugins: {title: {display: title !== '', text: title, font: {size: 16, weight: 'bold'}}, legend: {display: true, position: 'top'}}, scales: {y: {beginAtZero: true}}}};
      window.charts[canvas.id] = new Chart(canvas, config);
    }());
  }
  function destroyChart(chartId) {
    if (window.charts && window.charts[chartId]) {
      window.charts[chartId].destroy();
      delete window.charts[chartId];
    }
  }
  var ChartType_LINE_instance;
  var ChartType_BAR_instance;
  var ChartType_AREA_instance;
  var ChartType_entriesInitialized;
  function ChartType_initEntries() {
    if (ChartType_entriesInitialized)
      return Unit_instance;
    ChartType_entriesInitialized = true;
    ChartType_LINE_instance = new ChartType('LINE', 0);
    ChartType_BAR_instance = new ChartType('BAR', 1);
    ChartType_AREA_instance = new ChartType('AREA', 2);
  }
  function ChartType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ChartDataset(label, data, backgroundColor, borderColor, borderWidth, fill) {
    backgroundColor = backgroundColor === VOID ? 'rgba(27, 94, 32, 0.2)' : backgroundColor;
    borderColor = borderColor === VOID ? 'rgb(27, 94, 32)' : borderColor;
    borderWidth = borderWidth === VOID ? 2 : borderWidth;
    fill = fill === VOID ? false : fill;
    this.w3a_1 = label;
    this.x3a_1 = data;
    this.y3a_1 = backgroundColor;
    this.z3a_1 = borderColor;
    this.a3b_1 = borderWidth;
    this.b3b_1 = fill;
  }
  protoOf(ChartDataset).toString = function () {
    return 'ChartDataset(label=' + this.w3a_1 + ', data=' + toString(this.x3a_1) + ', backgroundColor=' + this.y3a_1 + ', borderColor=' + this.z3a_1 + ', borderWidth=' + this.a3b_1 + ', fill=' + this.b3b_1 + ')';
  };
  protoOf(ChartDataset).hashCode = function () {
    var result = getStringHashCode(this.w3a_1);
    result = imul(result, 31) + hashCode(this.x3a_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.y3a_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.z3a_1) | 0;
    result = imul(result, 31) + this.a3b_1 | 0;
    result = imul(result, 31) + getBooleanHashCode(this.b3b_1) | 0;
    return result;
  };
  protoOf(ChartDataset).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ChartDataset))
      return false;
    var tmp0_other_with_cast = other instanceof ChartDataset ? other : THROW_CCE();
    if (!(this.w3a_1 === tmp0_other_with_cast.w3a_1))
      return false;
    if (!equals(this.x3a_1, tmp0_other_with_cast.x3a_1))
      return false;
    if (!(this.y3a_1 === tmp0_other_with_cast.y3a_1))
      return false;
    if (!(this.z3a_1 === tmp0_other_with_cast.z3a_1))
      return false;
    if (!(this.a3b_1 === tmp0_other_with_cast.a3b_1))
      return false;
    if (!(this.b3b_1 === tmp0_other_with_cast.b3b_1))
      return false;
    return true;
  };
  function ChartStyles$chartContainer$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Color.white' call
    var tmp$ret$0 = Color('white');
    backgroundColor($this$style, tmp$ret$0);
    borderRadius($this$style, get_px(12));
    padding($this$style, [get_cssRem(1.5)]);
    $this$style.i34('box-shadow', '0 2px 8px rgba(0,0,0,0.1)');
    marginBottom($this$style, get_cssRem(1.5));
    return Unit_instance;
  }
  function ChartStyles$chartTitle$delegate$lambda($this$style) {
    fontSize($this$style, get_cssRem(1.25));
    fontWeight($this$style, 600);
    color($this$style, rgb(33, 33, 33));
    margin($this$style, [get_px(0), get_px(0), get_cssRem(1)]);
    return Unit_instance;
  }
  function ChartStyles$canvas$delegate$lambda($this$style) {
    width($this$style, get_percent(100));
    $this$style.i34('max-height', '400px');
    return Unit_instance;
  }
  function ChartStyles() {
    ChartStyles_instance = this;
    StyleSheet_init_$Init$(VOID, VOID, this);
    var tmp = this;
    tmp.h3b_1 = this.h36(ChartStyles$chartContainer$delegate$lambda).b36(this, chartContainer$factory());
    var tmp_0 = this;
    tmp_0.i3b_1 = this.h36(ChartStyles$chartTitle$delegate$lambda).b36(this, chartTitle$factory());
    var tmp_1 = this;
    tmp_1.j3b_1 = this.h36(ChartStyles$canvas$delegate$lambda).b36(this, canvas$factory());
  }
  protoOf(ChartStyles).k3b = function () {
    return this.h3b_1.ie(this, chartContainer$factory_0());
  };
  protoOf(ChartStyles).l3b = function () {
    return this.i3b_1.ie(this, chartTitle$factory_0());
  };
  protoOf(ChartStyles).m3b = function () {
    return this.j3b_1.ie(this, canvas$factory_0());
  };
  var ChartStyles_instance;
  function ChartStyles_getInstance() {
    if (ChartStyles_instance == null)
      new ChartStyles();
    return ChartStyles_instance;
  }
  function _no_name_provided__qut3iv($chartId) {
    this.n3b_1 = $chartId;
  }
  protoOf(_no_name_provided__qut3iv).gl = function () {
    // Inline function 'components.BatteryChart.<anonymous>.<anonymous>.<anonymous>' call
    destroyChart(this.n3b_1);
  };
  function BatteryChart$lambda($chartId, $chartType, $labels, $datasets, $title) {
    return function ($this$DisposableEffect) {
      var tmp = document.getElementById($chartId);
      var canvas = tmp instanceof HTMLCanvasElement ? tmp : null;
      var tmp_0;
      if (!(canvas == null)) {
        createChart(canvas, $chartType._v, $labels, $datasets, $title._v);
        tmp_0 = Unit_instance;
      }
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv($chartId);
    };
  }
  function BatteryChart$lambda_0($this$Div) {
    $this$Div.z32([ChartStyles_getInstance().k3b()]);
    return Unit_instance;
  }
  function BatteryChart$lambda$lambda($this$H4) {
    $this$H4.z32([ChartStyles_getInstance().l3b()]);
    return Unit_instance;
  }
  function BatteryChart$lambda$lambda_0($title) {
    return function ($this$H4, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-253272786, $changed, -1, 'components.BatteryChart.<anonymous>.<anonymous> (BatteryChart.kt:34)');
      }
      Text($title._v, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function BatteryChart$lambda$lambda_1($chartId) {
    return function ($this$Canvas) {
      $this$Canvas.a33($chartId);
      $this$Canvas.z32([ChartStyles_getInstance().m3b()]);
      return Unit_instance;
    };
  }
  function BatteryChart$lambda_1($title, $chartId) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1762282675, $changed, -1, 'components.BatteryChart.<anonymous> (BatteryChart.kt:32)');
      }
      $composer_0.m24(-1260551373);
      // Inline function 'kotlin.text.isNotEmpty' call
      var this_0 = $title._v;
      if (charSequenceLength(this_0) > 0) {
        $composer_0.m24(-1260549909);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.l26();
        var tmp;
        if (false || it === Companion_getInstance().e1z_1) {
          // Inline function 'components.BatteryChart.<anonymous>.<anonymous>.<anonymous>' call
          var value = BatteryChart$lambda$lambda;
          $composer_0.m26(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        $composer_0.o24();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'components.BatteryChart.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-253272786, true, BatteryChart$lambda$lambda_0($title), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.w1v(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.l26();
        var tmp_1;
        if (invalid || it_0 === Companion_getInstance().e1z_1) {
          // Inline function 'components.BatteryChart.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_10(dispatchReceiver);
          $composer_1.m26(value_0);
          tmp_1 = value_0;
        } else {
          tmp_1 = it_0;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        H4(tmp0_group, tmp0, $composer_0, 54, 0);
      }
      $composer_0.o24();
      $composer_0.m24(-1260546221);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_0.w1v($chartId);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.l26();
      var tmp_3;
      if (invalid_0 || it_1 === Companion_getInstance().e1z_1) {
        // Inline function 'components.BatteryChart.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = BatteryChart$lambda$lambda_1($chartId);
        $composer_0.m26(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.o24();
      Canvas(tmp1_group, null, $composer_0, 0, 2);
      var tmp_5;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_5 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function BatteryChart$lambda_2($chartId, $chartType, $labels, $datasets, $title, $$changed, $$default) {
    return function ($composer, $force) {
      BatteryChart($chartId, $chartType._v, $labels, $datasets, $title._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function ChartType_LINE_getInstance() {
    ChartType_initEntries();
    return ChartType_LINE_instance;
  }
  function chartContainer$factory() {
    return getPropertyCallableRef('chartContainer', 1, KProperty1, function (receiver) {
      return receiver.k3b();
    }, null);
  }
  function chartTitle$factory() {
    return getPropertyCallableRef('chartTitle', 1, KProperty1, function (receiver) {
      return receiver.l3b();
    }, null);
  }
  function canvas$factory() {
    return getPropertyCallableRef('canvas', 1, KProperty1, function (receiver) {
      return receiver.m3b();
    }, null);
  }
  function chartContainer$factory_0() {
    return getPropertyCallableRef('chartContainer', 1, KProperty1, function (receiver) {
      return receiver.k3b();
    }, null);
  }
  function chartTitle$factory_0() {
    return getPropertyCallableRef('chartTitle', 1, KProperty1, function (receiver) {
      return receiver.l3b();
    }, null);
  }
  function canvas$factory_0() {
    return getPropertyCallableRef('canvas', 1, KProperty1, function (receiver) {
      return receiver.m3b();
    }, null);
  }
  var AnalyticsPresenter$stable;
  var AnalyticsState$stable;
  var AnalyticsStyles$stable;
  function AnalyticsScreen($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(1304408782);
    if (!($changed === 0) || !$composer_0.f24()) {
      if (isTraceInProgress()) {
        traceEventStart(1304408782, $changed, -1, 'AnalyticsScreen (AnalyticsScreen.kt:17)');
      }
      $composer_0.m24(104072851);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'AnalyticsScreen.<anonymous>' call
        var value = new AnalyticsPresenter();
        this_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      var presenter = tmp0_group;
      var state$delegate = collectAsState(presenter.r3b_1, null, $composer_0, 0, 1);
      $composer_0.m24(104076379);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      var invalid = $composer_0.f25(presenter);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.l26();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'AnalyticsScreen.<anonymous>' call
        var value_0 = AnalyticsScreen$slambda_0(presenter, null);
        this_1.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.o24();
      LaunchedEffect(Unit_instance, tmp1_group, $composer_0, 6);
      $composer_0.m24(104078264);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.l26();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().e1z_1) {
        // Inline function 'AnalyticsScreen.<anonymous>' call
        var value_1 = AnalyticsScreen$lambda_0;
        this_2.m26(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'AnalyticsScreen.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-85153105, true, AnalyticsScreen$lambda_1(state$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_1.l26();
      var tmp_5;
      if (invalid_0 || it_2 === Companion_getInstance().e1z_1) {
        // Inline function 'AnalyticsScreen.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_34(dispatchReceiver);
        $composer_1.m26(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp2_group, tmp0, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v1y();
    }
    var tmp3_safe_receiver = $composer_0.u25();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.g2c(AnalyticsScreen$lambda_2($changed));
    }
  }
  function HealthScoreCard(analysis, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(495100191);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f25(analysis) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.f24()) {
      if (isTraceInProgress()) {
        traceEventStart(495100191, $dirty, -1, 'HealthScoreCard (AnalyticsScreen.kt:51)');
      }
      $composer_0.m24(-658026301);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'HealthScoreCard.<anonymous>' call
        var value = HealthScoreCard$lambda;
        this_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'HealthScoreCard.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-428929058, true, HealthScoreCard$lambda_0(analysis), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.l26();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'HealthScoreCard.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_41(dispatchReceiver);
        $composer_1.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
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
      tmp1_safe_receiver.g2c(HealthScoreCard$lambda_1(analysis, $changed));
    }
  }
  function StatisticsCard(stats, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(1720767187);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f25(stats) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.f24()) {
      if (isTraceInProgress()) {
        traceEventStart(1720767187, $dirty, -1, 'StatisticsCard (AnalyticsScreen.kt:99)');
      }
      $composer_0.m24(1970595412);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'StatisticsCard.<anonymous>' call
        var value = StatisticsCard$lambda;
        this_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'StatisticsCard.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(104589492, true, StatisticsCard$lambda_0(stats), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.l26();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'StatisticsCard.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_43(dispatchReceiver);
        $composer_1.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
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
      tmp1_safe_receiver.g2c(StatisticsCard$lambda_1(stats, $changed));
    }
  }
  function RecommendationsCard(recommendations, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(1892539668);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f25(recommendations) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.f24()) {
      if (isTraceInProgress()) {
        traceEventStart(1892539668, $dirty, -1, 'RecommendationsCard (AnalyticsScreen.kt:117)');
      }
      $composer_0.m24(-79348464);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'RecommendationsCard.<anonymous>' call
        var value = RecommendationsCard$lambda;
        this_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'RecommendationsCard.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1992727563, true, RecommendationsCard$lambda_0(recommendations), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.l26();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'RecommendationsCard.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_47(dispatchReceiver);
        $composer_1.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
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
      tmp1_safe_receiver.g2c(RecommendationsCard$lambda_1(recommendations, $changed));
    }
  }
  function StatItem(label, value, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(-1093397853);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1v(label) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.w1v(value) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.f24()) {
      if (isTraceInProgress()) {
        traceEventStart(-1093397853, $dirty, -1, 'StatItem (AnalyticsScreen.kt:143)');
      }
      $composer_0.m24(983390700);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'StatItem.<anonymous>' call
        var value_0 = StatItem$lambda;
        this_0.m26(value_0);
        tmp = value_0;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'StatItem.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(2089147844, true, StatItem$lambda_0(label, value), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.l26();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'StatItem.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_50(dispatchReceiver);
        $composer_1.m26(value_1);
        tmp_1 = value_1;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
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
      tmp1_safe_receiver.g2c(StatItem$lambda_1(label, value, $changed));
    }
  }
  function LoadingSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(1689042715);
    if (!($changed === 0) || !$composer_0.f24()) {
      if (isTraceInProgress()) {
        traceEventStart(1689042715, $changed, -1, 'LoadingSection (AnalyticsScreen.kt:155)');
      }
      $composer_0.m24(1750547494);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'LoadingSection.<anonymous>' call
        var value = LoadingSection$lambda;
        this_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      Div(tmp0_group, ComposableSingletons$AnalyticsScreenKt_getInstance().h3c_1, $composer_0, 54, 0);
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
      tmp1_safe_receiver.g2c(LoadingSection$lambda_0($changed));
    }
  }
  function ErrorSection(error, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(-2009226792);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1v(error) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.f24()) {
      if (isTraceInProgress()) {
        traceEventStart(-2009226792, $dirty, -1, 'ErrorSection (AnalyticsScreen.kt:163)');
      }
      $composer_0.m24(723129977);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'ErrorSection.<anonymous>' call
        var value = ErrorSection$lambda;
        this_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ErrorSection.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(742363735, true, ErrorSection$lambda_0(error), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.l26();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'ErrorSection.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_52(dispatchReceiver);
        $composer_1.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
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
      tmp1_safe_receiver.g2c(ErrorSection$lambda_1(error, $changed));
    }
  }
  function EmptyStateSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(1992796351);
    if (!($changed === 0) || !$composer_0.f24()) {
      if (isTraceInProgress()) {
        traceEventStart(1992796351, $changed, -1, 'EmptyStateSection (AnalyticsScreen.kt:174)');
      }
      $composer_0.m24(2052756830);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'EmptyStateSection.<anonymous>' call
        var value = EmptyStateSection$lambda;
        this_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      Div(tmp0_group, ComposableSingletons$AnalyticsScreenKt_getInstance().n3c_1, $composer_0, 54, 0);
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
      tmp1_safe_receiver.g2c(EmptyStateSection$lambda_0($changed));
    }
  }
  function getHealthLabel(score) {
    return score >= 90 ? to('Excellent', 'rgb(76, 175, 80)') : score >= 75 ? to('Good', 'rgb(139, 195, 74)') : score >= 60 ? to('Fair', 'rgb(255, 193, 7)') : score >= 40 ? to('Poor', 'rgb(255, 152, 0)') : to('Critical', 'rgb(244, 67, 54)');
  }
  function getHealthDescription(score) {
    return score >= 90 ? 'Your battery is in excellent condition. Keep up the good practices!' : score >= 75 ? 'Your battery health is good. Minor improvements can be made.' : score >= 60 ? 'Battery health is acceptable, but could be improved with better practices.' : score >= 40 ? 'Battery health is declining. Follow recommendations to prevent further degradation.' : 'Battery health is critical. Immediate action recommended.';
  }
  function _get_analyzeHealthUseCase__gkh8w4($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.o3b_1;
    analyzeHealthUseCase$factory();
    return this_0.k1();
  }
  function _get_calculateStatsUseCase__huqatv($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.p3b_1;
    calculateStatsUseCase$factory();
    return this_0.k1();
  }
  function AnalyticsPresenter$analyzeHealthUseCase$delegate$lambda($this, $qualifier, $parameters) {
    return function () {
      // Inline function 'org.koin.core.component.get' call
      var this_0 = $this;
      var qualifier = $qualifier;
      var parameters = $parameters;
      var tmp;
      if (isInterface(this_0, KoinScopeComponent)) {
        // Inline function 'org.koin.core.scope.Scope.get' call
        tmp = this_0.d1a().v1c(getKClass(AnalyzeBatteryHealthUseCase), qualifier, parameters);
      } else {
        // Inline function 'org.koin.core.Koin.get' call
        // Inline function 'org.koin.core.scope.Scope.get' call
        tmp = this_0.b1a().b19_1.o19_1.v1c(getKClass(AnalyzeBatteryHealthUseCase), qualifier, parameters);
      }
      return tmp;
    };
  }
  function AnalyticsPresenter$calculateStatsUseCase$delegate$lambda($this, $qualifier, $parameters) {
    return function () {
      // Inline function 'org.koin.core.component.get' call
      var this_0 = $this;
      var qualifier = $qualifier;
      var parameters = $parameters;
      var tmp;
      if (isInterface(this_0, KoinScopeComponent)) {
        // Inline function 'org.koin.core.scope.Scope.get' call
        tmp = this_0.d1a().v1c(getKClass(CalculateBatteryStatisticsUseCase), qualifier, parameters);
      } else {
        // Inline function 'org.koin.core.Koin.get' call
        // Inline function 'org.koin.core.scope.Scope.get' call
        tmp = this_0.b1a().b19_1.o19_1.v1c(getKClass(CalculateBatteryStatisticsUseCase), qualifier, parameters);
      }
      return tmp;
    };
  }
  function AnalyticsPresenter$loadAnalytics$slambda(this$0, resultContinuation) {
    this.w3c_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AnalyticsPresenter$loadAnalytics$slambda).w2b = function ($this$launch, $completion) {
    var tmp = this.w1f($this$launch, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(AnalyticsPresenter$loadAnalytics$slambda).b9 = function (p1, $completion) {
    return this.w2b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AnalyticsPresenter$loadAnalytics$slambda).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        switch (tmp) {
          case 0:
            this.g8_1 = 7;
            this.w3c_1.q3b_1.lt(new AnalyticsState(VOID, VOID, true));
            this.g8_1 = 5;
            this.f8_1 = 1;
            suspendResult = _get_analyzeHealthUseCase__gkh8w4(this.w3c_1).a1j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.f8_1 = 2;
            continue $sm;
          case 1:
            this.y3c_1 = suspendResult.mf_1;
            suspendResult = new Result(this.y3c_1);
            this.f8_1 = 2;
            continue $sm;
          case 2:
            this.z3c_1 = suspendResult.mf_1;
            var tmp_0 = this;
            var this_0 = this.z3c_1;
            var tmp_1;
            if (_Result___get_isFailure__impl__jpiriv(this_0)) {
              tmp_1 = null;
            } else {
              var tmp_2 = _Result___get_value__impl__bjfvqg(this_0);
              tmp_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
            }

            tmp_0.a3d_1 = tmp_1;
            this.f8_1 = 3;
            suspendResult = _get_calculateStatsUseCase__huqatv(this.w3c_1).r1j(TimePeriod_MONTH_getInstance(), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.f8_1 = 4;
            continue $sm;
          case 3:
            var unboxed = suspendResult.mf_1;
            suspendResult = new Result(unboxed);
            this.f8_1 = 4;
            continue $sm;
          case 4:
            var statsResult = suspendResult.mf_1;
            var tmp_3;
            if (_Result___get_isFailure__impl__jpiriv(statsResult)) {
              tmp_3 = null;
            } else {
              var tmp_4 = _Result___get_value__impl__bjfvqg(statsResult);
              tmp_3 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
            }

            var statistics = tmp_3;
            this.w3c_1.q3b_1.lt(new AnalyticsState(this.a3d_1, statistics, false, this.a3d_1 == null ? 'Failed to load analytics' : null));
            this.g8_1 = 7;
            this.f8_1 = 6;
            continue $sm;
          case 5:
            this.g8_1 = 7;
            var tmp_5 = this.i8_1;
            if (tmp_5 instanceof Exception) {
              var e = this.i8_1;
              var tmp0_elvis_lhs = e.message;
              this.w3c_1.q3b_1.lt(new AnalyticsState(VOID, VOID, false, tmp0_elvis_lhs == null ? 'Unknown error occurred' : tmp0_elvis_lhs));
              this.f8_1 = 6;
              continue $sm;
            } else {
              throw this.i8_1;
            }

          case 6:
            this.g8_1 = 7;
            return Unit_instance;
          case 7:
            throw this.i8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.g8_1 === 7) {
          throw e_0;
        } else {
          this.f8_1 = this.g8_1;
          this.i8_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(AnalyticsPresenter$loadAnalytics$slambda).w1f = function ($this$launch, completion) {
    var i = new AnalyticsPresenter$loadAnalytics$slambda(this.w3c_1, completion);
    i.x3c_1 = $this$launch;
    return i;
  };
  function AnalyticsPresenter$loadAnalytics$slambda_0(this$0, resultContinuation) {
    var i = new AnalyticsPresenter$loadAnalytics$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.w2b($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AnalyticsPresenter() {
    var tmp = this;
    // Inline function 'org.koin.core.component.inject' call
    var mode = KoinPlatformTools_instance.y1c();
    tmp.o3b_1 = lazy(mode, AnalyticsPresenter$analyzeHealthUseCase$delegate$lambda(this, null, null));
    var tmp_0 = this;
    // Inline function 'org.koin.core.component.inject' call
    var mode_0 = KoinPlatformTools_instance.y1c();
    tmp_0.p3b_1 = lazy(mode_0, AnalyticsPresenter$calculateStatsUseCase$delegate$lambda(this, null, null));
    this.q3b_1 = MutableStateFlow(new AnalyticsState());
    this.r3b_1 = this.q3b_1;
  }
  protoOf(AnalyticsPresenter).b3d = function () {
    var tmp = CoroutineScope_0(Dispatchers_getInstance().kq_1);
    launch(tmp, VOID, VOID, AnalyticsPresenter$loadAnalytics$slambda_0(this, null));
  };
  function AnalyticsState(analysis, statistics, isLoading, error) {
    analysis = analysis === VOID ? null : analysis;
    statistics = statistics === VOID ? null : statistics;
    isLoading = isLoading === VOID ? false : isLoading;
    error = error === VOID ? null : error;
    this.c3d_1 = analysis;
    this.d3d_1 = statistics;
    this.e3d_1 = isLoading;
    this.f3d_1 = error;
  }
  protoOf(AnalyticsState).toString = function () {
    return 'AnalyticsState(analysis=' + toString_0(this.c3d_1) + ', statistics=' + toString_0(this.d3d_1) + ', isLoading=' + this.e3d_1 + ', error=' + this.f3d_1 + ')';
  };
  protoOf(AnalyticsState).hashCode = function () {
    var result = this.c3d_1 == null ? 0 : this.c3d_1.hashCode();
    result = imul(result, 31) + (this.d3d_1 == null ? 0 : this.d3d_1.hashCode()) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.e3d_1) | 0;
    result = imul(result, 31) + (this.f3d_1 == null ? 0 : getStringHashCode(this.f3d_1)) | 0;
    return result;
  };
  protoOf(AnalyticsState).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AnalyticsState))
      return false;
    var tmp0_other_with_cast = other instanceof AnalyticsState ? other : THROW_CCE();
    if (!equals(this.c3d_1, tmp0_other_with_cast.c3d_1))
      return false;
    if (!equals(this.d3d_1, tmp0_other_with_cast.d3d_1))
      return false;
    if (!(this.e3d_1 === tmp0_other_with_cast.e3d_1))
      return false;
    if (!(this.f3d_1 == tmp0_other_with_cast.f3d_1))
      return false;
    return true;
  };
  function AnalyticsStyles$container$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    gap($this$style, get_cssRem(1.5));
    return Unit_instance;
  }
  function AnalyticsStyles$title$delegate$lambda($this$style) {
    fontSize($this$style, get_cssRem(2));
    fontWeight($this$style, 600);
    color($this$style, rgb(33, 33, 33));
    margin($this$style, [get_px(0), get_px(0), get_cssRem(1)]);
    return Unit_instance;
  }
  function AnalyticsStyles$card$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Color.white' call
    var tmp$ret$0 = Color('white');
    backgroundColor($this$style, tmp$ret$0);
    borderRadius($this$style, get_px(12));
    padding($this$style, [get_cssRem(2)]);
    $this$style.i34('box-shadow', '0 2px 8px rgba(0,0,0,0.1)');
    return Unit_instance;
  }
  function AnalyticsStyles$cardTitle$delegate$lambda($this$style) {
    fontSize($this$style, get_cssRem(1.5));
    fontWeight($this$style, 600);
    color($this$style, rgb(33, 33, 33));
    margin($this$style, [get_px(0), get_px(0), get_cssRem(1.5)]);
    return Unit_instance;
  }
  function AnalyticsStyles$healthCard$delegate$lambda($this$style) {
    backgroundColor($this$style, rgb(232, 245, 233));
    return Unit_instance;
  }
  function AnalyticsStyles$scoreContainer$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$style, 'center');
    gap($this$style, get_cssRem(2));
    // Inline function 'org.jetbrains.compose.web.css.Companion.Wrap' call
    // Inline function 'org.jetbrains.compose.web.css.FlexWrap' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexWrap($this$style, 'wrap');
    return Unit_instance;
  }
  function AnalyticsStyles$scoreCircle$delegate$lambda($this$style) {
    width($this$style, get_px(150));
    height($this$style, get_px(150));
    borderRadius($this$style, get_percent(50));
    // Inline function 'org.jetbrains.compose.web.css.Color.white' call
    var tmp$ret$0 = Color('white');
    backgroundColor($this$style, tmp$ret$0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$style, 'center');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    justifyContent($this$style, 'center');
    $this$style.i34('box-shadow', '0 4px 12px rgba(0,0,0,0.1)');
    return Unit_instance;
  }
  function AnalyticsStyles$scoreNumber$delegate$lambda($this$style) {
    fontSize($this$style, get_cssRem(3));
    fontWeight($this$style, 700);
    color($this$style, rgb(27, 94, 32));
    return Unit_instance;
  }
  function AnalyticsStyles$scoreLabel$delegate$lambda($this$style) {
    fontSize($this$style, get_cssRem(1));
    color($this$style, rgb(100, 100, 100));
    return Unit_instance;
  }
  function AnalyticsStyles$scoreInterpretation$delegate$lambda($this$style) {
    flex($this$style, 1);
    minWidth($this$style, get_px(250));
    return Unit_instance;
  }
  function AnalyticsStyles$healthLabel$delegate$lambda($this$style) {
    fontSize($this$style, get_cssRem(1.5));
    fontWeight($this$style, 600);
    margin($this$style, [get_px(0), get_px(0), get_cssRem(0.5)]);
    return Unit_instance;
  }
  function AnalyticsStyles$healthDescription$delegate$lambda($this$style) {
    fontSize($this$style, get_cssRem(1));
    color($this$style, rgb(60, 60, 60));
    $this$style.i34('line-height', '1.6');
    margin($this$style, [get_px(0)]);
    return Unit_instance;
  }
  function AnalyticsStyles$factorsContainer$delegate$lambda($this$style) {
    marginTop($this$style, get_cssRem(1.5));
    paddingTop($this$style, get_cssRem(1.5));
    $this$style.i34('border-top', '1px solid rgb(200, 230, 201)');
    return Unit_instance;
  }
  function AnalyticsStyles$factorsTitle$delegate$lambda($this$style) {
    fontSize($this$style, get_cssRem(1.125));
    fontWeight($this$style, 600);
    color($this$style, rgb(33, 33, 33));
    margin($this$style, [get_px(0), get_px(0), get_cssRem(1)]);
    return Unit_instance;
  }
  function AnalyticsStyles$factorsList$delegate$lambda($this$style) {
    margin($this$style, [get_px(0)]);
    paddingLeft($this$style, get_cssRem(1.5));
    $this$style.i34('line-height', '1.8');
    color($this$style, rgb(60, 60, 60));
    return Unit_instance;
  }
  function AnalyticsStyles$statsGrid$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'grid');
    $this$style.i34('grid-template-columns', 'repeat(auto-fit, minmax(200px, 1fr))');
    gap($this$style, get_cssRem(1));
    return Unit_instance;
  }
  function AnalyticsStyles$statItem$delegate$lambda($this$style) {
    padding($this$style, [get_cssRem(1)]);
    backgroundColor($this$style, rgb(245, 245, 245));
    borderRadius($this$style, get_px(8));
    textAlign($this$style, 'center');
    return Unit_instance;
  }
  function AnalyticsStyles$statLabel$delegate$lambda($this$style) {
    fontSize($this$style, get_cssRem(0.875));
    color($this$style, rgb(100, 100, 100));
    margin($this$style, [get_px(0), get_px(0), get_cssRem(0.5)]);
    return Unit_instance;
  }
  function AnalyticsStyles$statValue$delegate$lambda($this$style) {
    fontSize($this$style, get_cssRem(1.5));
    fontWeight($this$style, 600);
    color($this$style, rgb(27, 94, 32));
    margin($this$style, [get_px(0)]);
    return Unit_instance;
  }
  function AnalyticsStyles$recommendationsCard$delegate$lambda($this$style) {
    backgroundColor($this$style, rgb(255, 248, 225));
    return Unit_instance;
  }
  function AnalyticsStyles$recommendationsList$delegate$lambda($this$style) {
    margin($this$style, [get_px(0)]);
    padding($this$style, [get_px(0)]);
    $this$style.i34('list-style', 'none');
    return Unit_instance;
  }
  function AnalyticsStyles$recommendationItem$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$7 = 'flex-start';
    alignItems($this$style, tmp$ret$7);
    gap($this$style, get_cssRem(0.75));
    padding($this$style, [get_cssRem(1)]);
    // Inline function 'org.jetbrains.compose.web.css.Color.white' call
    var tmp$ret$8 = Color('white');
    backgroundColor($this$style, tmp$ret$8);
    borderRadius($this$style, get_px(8));
    marginBottom($this$style, get_cssRem(0.75));
    $this$style.i34('line-height', '1.6');
    return Unit_instance;
  }
  function AnalyticsStyles$recommendationIcon$delegate$lambda($this$style) {
    fontSize($this$style, get_cssRem(1.25));
    return Unit_instance;
  }
  function AnalyticsStyles$centerCard$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$style, 'center');
    gap($this$style, get_cssRem(1));
    padding($this$style, [get_cssRem(3)]);
    textAlign($this$style, 'center');
    return Unit_instance;
  }
  function AnalyticsStyles$spinner$delegate$lambda($this$style) {
    width($this$style, get_px(40));
    height($this$style, get_px(40));
    var tmp = get_px(4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    border($this$style, tmp, 'solid', rgb(27, 94, 32));
    $this$style.i34('border-top-color', 'transparent');
    borderRadius($this$style, get_percent(50));
    $this$style.i34('animation', 'spin 1s linear infinite');
    return Unit_instance;
  }
  function AnalyticsStyles$errorCard$delegate$lambda($this$style) {
    backgroundColor($this$style, rgb(255, 245, 245));
    return Unit_instance;
  }
  function AnalyticsStyles$errorIcon$delegate$lambda($this$style) {
    fontSize($this$style, get_cssRem(3));
    return Unit_instance;
  }
  function AnalyticsStyles$emptyIcon$delegate$lambda($this$style) {
    fontSize($this$style, get_cssRem(4));
    return Unit_instance;
  }
  function AnalyticsStyles$emptyText$delegate$lambda($this$style) {
    fontSize($this$style, get_cssRem(1));
    color($this$style, rgb(100, 100, 100));
    margin($this$style, [get_px(0)]);
    return Unit_instance;
  }
  function AnalyticsStyles() {
    AnalyticsStyles_instance = this;
    StyleSheet_init_$Init$(VOID, VOID, this);
    var tmp = this;
    tmp.l3d_1 = this.h36(AnalyticsStyles$container$delegate$lambda).b36(this, container$factory());
    var tmp_0 = this;
    tmp_0.m3d_1 = this.h36(AnalyticsStyles$title$delegate$lambda).b36(this, title$factory());
    var tmp_1 = this;
    tmp_1.n3d_1 = this.h36(AnalyticsStyles$card$delegate$lambda).b36(this, card$factory());
    var tmp_2 = this;
    tmp_2.o3d_1 = this.h36(AnalyticsStyles$cardTitle$delegate$lambda).b36(this, cardTitle$factory());
    var tmp_3 = this;
    tmp_3.p3d_1 = this.h36(AnalyticsStyles$healthCard$delegate$lambda).b36(this, healthCard$factory());
    var tmp_4 = this;
    tmp_4.q3d_1 = this.h36(AnalyticsStyles$scoreContainer$delegate$lambda).b36(this, scoreContainer$factory());
    var tmp_5 = this;
    tmp_5.r3d_1 = this.h36(AnalyticsStyles$scoreCircle$delegate$lambda).b36(this, scoreCircle$factory());
    var tmp_6 = this;
    tmp_6.s3d_1 = this.h36(AnalyticsStyles$scoreNumber$delegate$lambda).b36(this, scoreNumber$factory());
    var tmp_7 = this;
    tmp_7.t3d_1 = this.h36(AnalyticsStyles$scoreLabel$delegate$lambda).b36(this, scoreLabel$factory());
    var tmp_8 = this;
    tmp_8.u3d_1 = this.h36(AnalyticsStyles$scoreInterpretation$delegate$lambda).b36(this, scoreInterpretation$factory());
    var tmp_9 = this;
    tmp_9.v3d_1 = this.h36(AnalyticsStyles$healthLabel$delegate$lambda).b36(this, healthLabel$factory());
    var tmp_10 = this;
    tmp_10.w3d_1 = this.h36(AnalyticsStyles$healthDescription$delegate$lambda).b36(this, healthDescription$factory());
    var tmp_11 = this;
    tmp_11.x3d_1 = this.h36(AnalyticsStyles$factorsContainer$delegate$lambda).b36(this, factorsContainer$factory());
    var tmp_12 = this;
    tmp_12.y3d_1 = this.h36(AnalyticsStyles$factorsTitle$delegate$lambda).b36(this, factorsTitle$factory());
    var tmp_13 = this;
    tmp_13.z3d_1 = this.h36(AnalyticsStyles$factorsList$delegate$lambda).b36(this, factorsList$factory());
    var tmp_14 = this;
    tmp_14.a3e_1 = this.h36(AnalyticsStyles$statsGrid$delegate$lambda).b36(this, statsGrid$factory());
    var tmp_15 = this;
    tmp_15.b3e_1 = this.h36(AnalyticsStyles$statItem$delegate$lambda).b36(this, statItem$factory());
    var tmp_16 = this;
    tmp_16.c3e_1 = this.h36(AnalyticsStyles$statLabel$delegate$lambda).b36(this, statLabel$factory());
    var tmp_17 = this;
    tmp_17.d3e_1 = this.h36(AnalyticsStyles$statValue$delegate$lambda).b36(this, statValue$factory());
    var tmp_18 = this;
    tmp_18.e3e_1 = this.h36(AnalyticsStyles$recommendationsCard$delegate$lambda).b36(this, recommendationsCard$factory());
    var tmp_19 = this;
    tmp_19.f3e_1 = this.h36(AnalyticsStyles$recommendationsList$delegate$lambda).b36(this, recommendationsList$factory());
    var tmp_20 = this;
    tmp_20.g3e_1 = this.h36(AnalyticsStyles$recommendationItem$delegate$lambda).b36(this, recommendationItem$factory());
    var tmp_21 = this;
    tmp_21.h3e_1 = this.h36(AnalyticsStyles$recommendationIcon$delegate$lambda).b36(this, recommendationIcon$factory());
    var tmp_22 = this;
    tmp_22.i3e_1 = this.h36(AnalyticsStyles$centerCard$delegate$lambda).b36(this, centerCard$factory());
    var tmp_23 = this;
    tmp_23.j3e_1 = this.h36(AnalyticsStyles$spinner$delegate$lambda).b36(this, spinner$factory());
    var tmp_24 = this;
    tmp_24.k3e_1 = this.h36(AnalyticsStyles$errorCard$delegate$lambda).b36(this, errorCard$factory());
    var tmp_25 = this;
    tmp_25.l3e_1 = this.h36(AnalyticsStyles$errorIcon$delegate$lambda).b36(this, errorIcon$factory());
    var tmp_26 = this;
    tmp_26.m3e_1 = this.h36(AnalyticsStyles$emptyIcon$delegate$lambda).b36(this, emptyIcon$factory());
    var tmp_27 = this;
    tmp_27.n3e_1 = this.h36(AnalyticsStyles$emptyText$delegate$lambda).b36(this, emptyText$factory());
  }
  protoOf(AnalyticsStyles).o3e = function () {
    return this.l3d_1.ie(this, container$factory_0());
  };
  protoOf(AnalyticsStyles).p3e = function () {
    return this.m3d_1.ie(this, title$factory_0());
  };
  protoOf(AnalyticsStyles).q3e = function () {
    return this.n3d_1.ie(this, card$factory_0());
  };
  protoOf(AnalyticsStyles).r3e = function () {
    return this.o3d_1.ie(this, cardTitle$factory_0());
  };
  protoOf(AnalyticsStyles).s3e = function () {
    return this.p3d_1.ie(this, healthCard$factory_0());
  };
  protoOf(AnalyticsStyles).t3e = function () {
    return this.q3d_1.ie(this, scoreContainer$factory_0());
  };
  protoOf(AnalyticsStyles).u3e = function () {
    return this.r3d_1.ie(this, scoreCircle$factory_0());
  };
  protoOf(AnalyticsStyles).v3e = function () {
    return this.s3d_1.ie(this, scoreNumber$factory_0());
  };
  protoOf(AnalyticsStyles).w3e = function () {
    return this.t3d_1.ie(this, scoreLabel$factory_0());
  };
  protoOf(AnalyticsStyles).x3e = function () {
    return this.u3d_1.ie(this, scoreInterpretation$factory_0());
  };
  protoOf(AnalyticsStyles).y3e = function () {
    return this.v3d_1.ie(this, healthLabel$factory_0());
  };
  protoOf(AnalyticsStyles).z3e = function () {
    return this.w3d_1.ie(this, healthDescription$factory_0());
  };
  protoOf(AnalyticsStyles).a3f = function () {
    return this.x3d_1.ie(this, factorsContainer$factory_0());
  };
  protoOf(AnalyticsStyles).b3f = function () {
    return this.y3d_1.ie(this, factorsTitle$factory_0());
  };
  protoOf(AnalyticsStyles).c3f = function () {
    return this.z3d_1.ie(this, factorsList$factory_0());
  };
  protoOf(AnalyticsStyles).d3f = function () {
    return this.a3e_1.ie(this, statsGrid$factory_0());
  };
  protoOf(AnalyticsStyles).e3f = function () {
    return this.b3e_1.ie(this, statItem$factory_0());
  };
  protoOf(AnalyticsStyles).f3f = function () {
    return this.c3e_1.ie(this, statLabel$factory_0());
  };
  protoOf(AnalyticsStyles).g3f = function () {
    return this.d3e_1.ie(this, statValue$factory_0());
  };
  protoOf(AnalyticsStyles).h3f = function () {
    return this.e3e_1.ie(this, recommendationsCard$factory_0());
  };
  protoOf(AnalyticsStyles).i3f = function () {
    return this.f3e_1.ie(this, recommendationsList$factory_0());
  };
  protoOf(AnalyticsStyles).j3f = function () {
    return this.g3e_1.ie(this, recommendationItem$factory_0());
  };
  protoOf(AnalyticsStyles).k3f = function () {
    return this.h3e_1.ie(this, recommendationIcon$factory_0());
  };
  protoOf(AnalyticsStyles).l3f = function () {
    return this.i3e_1.ie(this, centerCard$factory_0());
  };
  protoOf(AnalyticsStyles).m3f = function () {
    return this.j3e_1.ie(this, spinner$factory_0());
  };
  protoOf(AnalyticsStyles).n3f = function () {
    return this.k3e_1.ie(this, errorCard$factory_0());
  };
  protoOf(AnalyticsStyles).o3f = function () {
    return this.l3e_1.ie(this, errorIcon$factory_0());
  };
  protoOf(AnalyticsStyles).p3f = function () {
    return this.m3e_1.ie(this, emptyIcon$factory_0());
  };
  protoOf(AnalyticsStyles).q3f = function () {
    return this.n3e_1.ie(this, emptyText$factory_0());
  };
  var AnalyticsStyles_instance;
  function AnalyticsStyles_getInstance() {
    if (AnalyticsStyles_instance == null)
      new AnalyticsStyles();
    return AnalyticsStyles_instance;
  }
  function formatDecimal(value, decimalPlaces) {
    var multiplier;
    switch (decimalPlaces) {
      case 0:
        multiplier = 1.0;
        break;
      case 1:
        multiplier = 10.0;
        break;
      case 2:
        multiplier = 100.0;
        break;
      default:
        multiplier = 10.0;
        break;
    }
    var rounded = round(value * multiplier) / multiplier;
    var tmp;
    if (decimalPlaces === 0) {
      tmp = numberToInt(rounded).toString();
    } else {
      var intPart = numberToInt(rounded);
      var fracPart = numberToInt((rounded - intPart) * multiplier);
      tmp = '' + intPart + '.' + padStart(fracPart.toString(), decimalPlaces, _Char___init__impl__6a9atx(48));
    }
    return tmp;
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$AnalyticsScreenKt$lambda_1$lambda_6yg1g8($this$H2, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(555024849, $changed, -1, 'ComposableSingletons$AnalyticsScreenKt.lambda-1.<anonymous> (AnalyticsScreen.kt:27)');
    }
    Text('Battery Analytics', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$AnalyticsScreenKt$lambda_2$lambda_lv6flz($this$H3, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(72018301, $changed, -1, 'ComposableSingletons$AnalyticsScreenKt.lambda-2.<anonymous> (AnalyticsScreen.kt:54)');
    }
    Text('Battery Health Score', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$AnalyticsScreenKt$lambda_3$lambda_kcb5ay($this$Span, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1473384945, $changed, -1, 'ComposableSingletons$AnalyticsScreenKt.lambda-3.<anonymous> (AnalyticsScreen.kt:64)');
    }
    Text('/ 100', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$AnalyticsScreenKt$lambda_4$lambda_8hbbr9($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1804220980, $changed, -1, 'ComposableSingletons$AnalyticsScreenKt.lambda-4.<anonymous> (AnalyticsScreen.kt:86)');
    }
    Text('Health Factors', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$AnalyticsScreenKt$lambda_5$lambda_xq695o($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-2026122162, $changed, -1, 'ComposableSingletons$AnalyticsScreenKt.lambda-5.<anonymous> (AnalyticsScreen.kt:89)');
    }
    Text('Charging Cycles: Impact assessed', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$AnalyticsScreenKt$lambda_6$lambda_4wjs3h($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-54053129, $changed, -1, 'ComposableSingletons$AnalyticsScreenKt.lambda-6.<anonymous> (AnalyticsScreen.kt:90)');
    }
    Text('Temperature: Evaluated', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$AnalyticsScreenKt$lambda_7$lambda_nx2oyq($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(897778710, $changed, -1, 'ComposableSingletons$AnalyticsScreenKt.lambda-7.<anonymous> (AnalyticsScreen.kt:91)');
    }
    Text('Usage Patterns: Analyzed', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$AnalyticsScreenKt$lambda_8$lambda_iaevy7($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1849610549, $changed, -1, 'ComposableSingletons$AnalyticsScreenKt.lambda-8.<anonymous> (AnalyticsScreen.kt:92)');
    }
    Text('Discharge Rate: Monitored', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$AnalyticsScreenKt$lambda_9$lambda_aj7l40($this$Ul, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(2115940095, $changed, -1, 'ComposableSingletons$AnalyticsScreenKt.lambda-9.<anonymous> (AnalyticsScreen.kt:89)');
    }
    Li(null, ComposableSingletons$AnalyticsScreenKt_getInstance().w3b_1, $composer_0, 48, 1);
    Li(null, ComposableSingletons$AnalyticsScreenKt_getInstance().x3b_1, $composer_0, 48, 1);
    Li(null, ComposableSingletons$AnalyticsScreenKt_getInstance().y3b_1, $composer_0, 48, 1);
    Li(null, ComposableSingletons$AnalyticsScreenKt_getInstance().z3b_1, $composer_0, 48, 1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$AnalyticsScreenKt$lambda_10$lambda_1uo04e($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-41834220, $changed, -1, 'ComposableSingletons$AnalyticsScreenKt.lambda-10.<anonymous> (AnalyticsScreen.kt:85)');
    }
    $composer_0.m24(-266674997);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.l26();
    var tmp;
    if (false || it === Companion_getInstance().e1z_1) {
      // Inline function 'ComposableSingletons$AnalyticsScreenKt.lambda-10.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$AnalyticsScreenKt$lambda_10$lambda$lambda_pzhvv1;
      $composer_0.m26(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.o24();
    H4(tmp0_group, ComposableSingletons$AnalyticsScreenKt_getInstance().v3b_1, $composer_0, 54, 0);
    $composer_0.m24(-266671126);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.l26();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().e1z_1) {
      // Inline function 'ComposableSingletons$AnalyticsScreenKt.lambda-10.<anonymous>.<anonymous>' call
      var value_0 = ComposableSingletons$AnalyticsScreenKt$lambda_10$lambda$lambda_pzhvv1_0;
      $composer_0.m26(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.o24();
    Ul(tmp1_group, ComposableSingletons$AnalyticsScreenKt_getInstance().a3c_1, $composer_0, 54, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$AnalyticsScreenKt$lambda_10$lambda$lambda_pzhvv1($this$H4) {
    $this$H4.z32([AnalyticsStyles_getInstance().b3f()]);
    return Unit_instance;
  }
  function ComposableSingletons$AnalyticsScreenKt$lambda_10$lambda$lambda_pzhvv1_0($this$Ul) {
    $this$Ul.z32([AnalyticsStyles_getInstance().c3f()]);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$AnalyticsScreenKt$lambda_11$lambda_uoah6l($this$H3, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1006127029, $changed, -1, 'ComposableSingletons$AnalyticsScreenKt.lambda-11.<anonymous> (AnalyticsScreen.kt:102)');
    }
    Text('Usage Statistics', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$AnalyticsScreenKt$lambda_12$lambda_bj73qc($this$H3, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1503745014, $changed, -1, 'ComposableSingletons$AnalyticsScreenKt.lambda-12.<anonymous> (AnalyticsScreen.kt:120)');
    }
    Text('Recommendations', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$AnalyticsScreenKt$lambda_13$lambda_hafdbv($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(347431708, $changed, -1, 'ComposableSingletons$AnalyticsScreenKt.lambda-13.<anonymous> (AnalyticsScreen.kt:125)');
    }
    Text('No recommendations at this time. Your battery is in good condition!', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_25($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$AnalyticsScreenKt$lambda_14$lambda_ox27l2($this$Span, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1636752067, $changed, -1, 'ComposableSingletons$AnalyticsScreenKt.lambda-14.<anonymous> (AnalyticsScreen.kt:132)');
    }
    Text('\uD83D\uDCA1', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_26($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$AnalyticsScreenKt$lambda_15$lambda_3wk9h5($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1539666488, $changed, -1, 'ComposableSingletons$AnalyticsScreenKt.lambda-15.<anonymous> (AnalyticsScreen.kt:158)');
    }
    Text('Loading analytics...', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_27($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$AnalyticsScreenKt$lambda_16$lambda_wq6qjc($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1644218138, $changed, -1, 'ComposableSingletons$AnalyticsScreenKt.lambda-16.<anonymous> (AnalyticsScreen.kt:157)');
    }
    $composer_0.m24(188787692);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.l26();
    var tmp;
    if (false || it === Companion_getInstance().e1z_1) {
      // Inline function 'ComposableSingletons$AnalyticsScreenKt.lambda-16.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$AnalyticsScreenKt$lambda_16$lambda$lambda_xim6fn;
      $composer_0.m26(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.o24();
    Div(tmp0_group, null, $composer_0, 6, 2);
    P(null, ComposableSingletons$AnalyticsScreenKt_getInstance().g3c_1, $composer_0, 48, 1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$AnalyticsScreenKt$lambda_16$lambda$lambda_xim6fn($this$Div) {
    $this$Div.z32([AnalyticsStyles_getInstance().m3f()]);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_28($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$AnalyticsScreenKt$lambda_17$lambda_9haudl($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-605469418, $changed, -1, 'ComposableSingletons$AnalyticsScreenKt.lambda-17.<anonymous> (AnalyticsScreen.kt:166)');
    }
    Text('\u26A0\uFE0F', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_29($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$AnalyticsScreenKt$lambda_18$lambda_jcbmom($this$H3, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1445979574, $changed, -1, 'ComposableSingletons$AnalyticsScreenKt.lambda-18.<anonymous> (AnalyticsScreen.kt:168)');
    }
    Text('Error Loading Analytics', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_30($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$AnalyticsScreenKt$lambda_19$lambda_mv5y8b($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-40131135, $changed, -1, 'ComposableSingletons$AnalyticsScreenKt.lambda-19.<anonymous> (AnalyticsScreen.kt:177)');
    }
    Text('\uD83D\uDCCA', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_31($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$AnalyticsScreenKt$lambda_20$lambda_s1g0o1($this$H3, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-2052165343, $changed, -1, 'ComposableSingletons$AnalyticsScreenKt.lambda-20.<anonymous> (AnalyticsScreen.kt:179)');
    }
    Text('No Data Available', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_32($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$AnalyticsScreenKt$lambda_21$lambda_s6ge6($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1511736450, $changed, -1, 'ComposableSingletons$AnalyticsScreenKt.lambda-21.<anonymous> (AnalyticsScreen.kt:181)');
    }
    Text('Start monitoring your battery to see analytics and insights.', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_33($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$AnalyticsScreenKt$lambda_22$lambda_tlsxgd($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1936315296, $changed, -1, 'ComposableSingletons$AnalyticsScreenKt.lambda-22.<anonymous> (AnalyticsScreen.kt:176)');
    }
    $composer_0.m24(-2056969399);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.l26();
    var tmp;
    if (false || it === Companion_getInstance().e1z_1) {
      // Inline function 'ComposableSingletons$AnalyticsScreenKt.lambda-22.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$AnalyticsScreenKt$lambda_22$lambda$lambda_3mgjyq;
      $composer_0.m26(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.o24();
    Div(tmp0_group, ComposableSingletons$AnalyticsScreenKt_getInstance().k3c_1, $composer_0, 54, 0);
    H3(null, ComposableSingletons$AnalyticsScreenKt_getInstance().l3c_1, $composer_0, 48, 1);
    $composer_0.m24(-2056965111);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.l26();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().e1z_1) {
      // Inline function 'ComposableSingletons$AnalyticsScreenKt.lambda-22.<anonymous>.<anonymous>' call
      var value_0 = ComposableSingletons$AnalyticsScreenKt$lambda_22$lambda$lambda_3mgjyq_0;
      $composer_0.m26(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.o24();
    P(tmp1_group, ComposableSingletons$AnalyticsScreenKt_getInstance().m3c_1, $composer_0, 54, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$AnalyticsScreenKt$lambda_22$lambda$lambda_3mgjyq($this$Div) {
    $this$Div.z32([AnalyticsStyles_getInstance().p3f()]);
    return Unit_instance;
  }
  function ComposableSingletons$AnalyticsScreenKt$lambda_22$lambda$lambda_3mgjyq_0($this$P) {
    $this$P.z32([AnalyticsStyles_getInstance().q3f()]);
    return Unit_instance;
  }
  function ComposableSingletons$AnalyticsScreenKt() {
    ComposableSingletons$AnalyticsScreenKt_instance = this;
    var tmp = this;
    tmp.s3b_1 = ComposableLambda$invoke$ref_12(composableLambdaInstance(555024849, false, ComposableSingletons$AnalyticsScreenKt$lambda_1$lambda_6yg1g8));
    var tmp_0 = this;
    tmp_0.t3b_1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(72018301, false, ComposableSingletons$AnalyticsScreenKt$lambda_2$lambda_lv6flz));
    var tmp_1 = this;
    tmp_1.u3b_1 = ComposableLambda$invoke$ref_14(composableLambdaInstance(1473384945, false, ComposableSingletons$AnalyticsScreenKt$lambda_3$lambda_kcb5ay));
    var tmp_2 = this;
    tmp_2.v3b_1 = ComposableLambda$invoke$ref_15(composableLambdaInstance(1804220980, false, ComposableSingletons$AnalyticsScreenKt$lambda_4$lambda_8hbbr9));
    var tmp_3 = this;
    tmp_3.w3b_1 = ComposableLambda$invoke$ref_16(composableLambdaInstance(-2026122162, false, ComposableSingletons$AnalyticsScreenKt$lambda_5$lambda_xq695o));
    var tmp_4 = this;
    tmp_4.x3b_1 = ComposableLambda$invoke$ref_17(composableLambdaInstance(-54053129, false, ComposableSingletons$AnalyticsScreenKt$lambda_6$lambda_4wjs3h));
    var tmp_5 = this;
    tmp_5.y3b_1 = ComposableLambda$invoke$ref_18(composableLambdaInstance(897778710, false, ComposableSingletons$AnalyticsScreenKt$lambda_7$lambda_nx2oyq));
    var tmp_6 = this;
    tmp_6.z3b_1 = ComposableLambda$invoke$ref_19(composableLambdaInstance(1849610549, false, ComposableSingletons$AnalyticsScreenKt$lambda_8$lambda_iaevy7));
    var tmp_7 = this;
    tmp_7.a3c_1 = ComposableLambda$invoke$ref_20(composableLambdaInstance(2115940095, false, ComposableSingletons$AnalyticsScreenKt$lambda_9$lambda_aj7l40));
    var tmp_8 = this;
    tmp_8.b3c_1 = ComposableLambda$invoke$ref_21(composableLambdaInstance(-41834220, false, ComposableSingletons$AnalyticsScreenKt$lambda_10$lambda_1uo04e));
    var tmp_9 = this;
    tmp_9.c3c_1 = ComposableLambda$invoke$ref_22(composableLambdaInstance(1006127029, false, ComposableSingletons$AnalyticsScreenKt$lambda_11$lambda_uoah6l));
    var tmp_10 = this;
    tmp_10.d3c_1 = ComposableLambda$invoke$ref_23(composableLambdaInstance(1503745014, false, ComposableSingletons$AnalyticsScreenKt$lambda_12$lambda_bj73qc));
    var tmp_11 = this;
    tmp_11.e3c_1 = ComposableLambda$invoke$ref_24(composableLambdaInstance(347431708, false, ComposableSingletons$AnalyticsScreenKt$lambda_13$lambda_hafdbv));
    var tmp_12 = this;
    tmp_12.f3c_1 = ComposableLambda$invoke$ref_25(composableLambdaInstance(1636752067, false, ComposableSingletons$AnalyticsScreenKt$lambda_14$lambda_ox27l2));
    var tmp_13 = this;
    tmp_13.g3c_1 = ComposableLambda$invoke$ref_26(composableLambdaInstance(1539666488, false, ComposableSingletons$AnalyticsScreenKt$lambda_15$lambda_3wk9h5));
    var tmp_14 = this;
    tmp_14.h3c_1 = ComposableLambda$invoke$ref_27(composableLambdaInstance(1644218138, false, ComposableSingletons$AnalyticsScreenKt$lambda_16$lambda_wq6qjc));
    var tmp_15 = this;
    tmp_15.i3c_1 = ComposableLambda$invoke$ref_28(composableLambdaInstance(-605469418, false, ComposableSingletons$AnalyticsScreenKt$lambda_17$lambda_9haudl));
    var tmp_16 = this;
    tmp_16.j3c_1 = ComposableLambda$invoke$ref_29(composableLambdaInstance(1445979574, false, ComposableSingletons$AnalyticsScreenKt$lambda_18$lambda_jcbmom));
    var tmp_17 = this;
    tmp_17.k3c_1 = ComposableLambda$invoke$ref_30(composableLambdaInstance(-40131135, false, ComposableSingletons$AnalyticsScreenKt$lambda_19$lambda_mv5y8b));
    var tmp_18 = this;
    tmp_18.l3c_1 = ComposableLambda$invoke$ref_31(composableLambdaInstance(-2052165343, false, ComposableSingletons$AnalyticsScreenKt$lambda_20$lambda_s1g0o1));
    var tmp_19 = this;
    tmp_19.m3c_1 = ComposableLambda$invoke$ref_32(composableLambdaInstance(1511736450, false, ComposableSingletons$AnalyticsScreenKt$lambda_21$lambda_s6ge6));
    var tmp_20 = this;
    tmp_20.n3c_1 = ComposableLambda$invoke$ref_33(composableLambdaInstance(-1936315296, false, ComposableSingletons$AnalyticsScreenKt$lambda_22$lambda_tlsxgd));
  }
  var ComposableSingletons$AnalyticsScreenKt_instance;
  function ComposableSingletons$AnalyticsScreenKt_getInstance() {
    if (ComposableSingletons$AnalyticsScreenKt_instance == null)
      new ComposableSingletons$AnalyticsScreenKt();
    return ComposableSingletons$AnalyticsScreenKt_instance;
  }
  function AnalyticsScreen$lambda($state$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('state', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $state$delegate.k1();
  }
  function AnalyticsScreen$slambda($presenter, resultContinuation) {
    this.z3f_1 = $presenter;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AnalyticsScreen$slambda).w2b = function ($this$LaunchedEffect, $completion) {
    var tmp = this.w1f($this$LaunchedEffect, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(AnalyticsScreen$slambda).b9 = function (p1, $completion) {
    return this.w2b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AnalyticsScreen$slambda).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        if (tmp === 0) {
          this.g8_1 = 1;
          this.z3f_1.b3d();
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.i8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(AnalyticsScreen$slambda).w1f = function ($this$LaunchedEffect, completion) {
    var i = new AnalyticsScreen$slambda(this.z3f_1, completion);
    i.a3g_1 = $this$LaunchedEffect;
    return i;
  };
  function AnalyticsScreen$slambda_0($presenter, resultContinuation) {
    var i = new AnalyticsScreen$slambda($presenter, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.w2b($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AnalyticsScreen$lambda_0($this$Div) {
    $this$Div.z32([AnalyticsStyles_getInstance().o3e()]);
    return Unit_instance;
  }
  function AnalyticsScreen$lambda$lambda($this$H2) {
    $this$H2.z32([AnalyticsStyles_getInstance().p3e()]);
    return Unit_instance;
  }
  function AnalyticsScreen$lambda_1($state$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-85153105, $changed, -1, 'AnalyticsScreen.<anonymous> (AnalyticsScreen.kt:26)');
      }
      $composer_0.m24(1038387795);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'AnalyticsScreen.<anonymous>.<anonymous>.<anonymous>' call
        var value = AnalyticsScreen$lambda$lambda;
        $composer_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      H2(tmp0_group, ComposableSingletons$AnalyticsScreenKt_getInstance().s3b_1, $composer_0, 54, 0);
      if (AnalyticsScreen$lambda($state$delegate).e3d_1) {
        $composer_0.m24(1038392033);
        LoadingSection($composer_0, 0);
        $composer_0.o24();
      } else if (!(AnalyticsScreen$lambda($state$delegate).f3d_1 == null)) {
        $composer_0.m24(1038393708);
        ErrorSection(ensureNotNull(AnalyticsScreen$lambda($state$delegate).f3d_1), $composer_0, 0);
        $composer_0.o24();
      } else if (!(AnalyticsScreen$lambda($state$delegate).c3d_1 == null)) {
        $composer_0.m24(2125509146);
        HealthScoreCard(ensureNotNull(AnalyticsScreen$lambda($state$delegate).c3d_1), $composer_0, 0);
        var tmp0_safe_receiver = AnalyticsScreen$lambda($state$delegate).d3d_1;
        $composer_0.m24(1038400635);
        var tmp_1;
        if (tmp0_safe_receiver == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          StatisticsCard(tmp0_safe_receiver, $composer_0, 0);
          tmp_1 = Unit_instance;
        }
        $composer_0.o24();
        RecommendationsCard(ensureNotNull(AnalyticsScreen$lambda($state$delegate).c3d_1).i1j_1, $composer_0, 0);
        $composer_0.o24();
      } else {
        $composer_0.m24(1038407460);
        EmptyStateSection($composer_0, 0);
        $composer_0.o24();
      }
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_34($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function AnalyticsScreen$lambda_2($$changed) {
    return function ($composer, $force) {
      AnalyticsScreen($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function HealthScoreCard$lambda($this$Div) {
    $this$Div.z32([AnalyticsStyles_getInstance().q3e(), AnalyticsStyles_getInstance().s3e()]);
    return Unit_instance;
  }
  function HealthScoreCard$lambda$lambda($this$H3) {
    $this$H3.z32([AnalyticsStyles_getInstance().r3e()]);
    return Unit_instance;
  }
  function HealthScoreCard$lambda$lambda_0($this$Div) {
    $this$Div.z32([AnalyticsStyles_getInstance().t3e()]);
    return Unit_instance;
  }
  function HealthScoreCard$lambda$lambda$lambda($this$Div) {
    $this$Div.z32([AnalyticsStyles_getInstance().u3e()]);
    return Unit_instance;
  }
  function HealthScoreCard$lambda$lambda$lambda$lambda($this$Span) {
    $this$Span.z32([AnalyticsStyles_getInstance().v3e()]);
    return Unit_instance;
  }
  function HealthScoreCard$lambda$lambda$lambda$lambda_0($analysis) {
    return function ($this$Span, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1031650554, $changed, -1, 'HealthScoreCard.<anonymous>.<anonymous>.<anonymous>.<anonymous> (AnalyticsScreen.kt:61)');
      }
      Text('' + $analysis.c1j_1, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_35($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function HealthScoreCard$lambda$lambda$lambda$lambda_1($this$Span) {
    $this$Span.z32([AnalyticsStyles_getInstance().w3e()]);
    return Unit_instance;
  }
  function HealthScoreCard$lambda$lambda$lambda_0($analysis) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-189139940, $changed, -1, 'HealthScoreCard.<anonymous>.<anonymous>.<anonymous> (AnalyticsScreen.kt:60)');
      }
      $composer_0.m24(-1132439957);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'HealthScoreCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = HealthScoreCard$lambda$lambda$lambda$lambda;
        $composer_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'HealthScoreCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1031650554, true, HealthScoreCard$lambda$lambda$lambda$lambda_0($analysis), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.l26();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'HealthScoreCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_35(dispatchReceiver);
        $composer_1.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Span(tmp0_group, tmp0, $composer_0, 54, 0);
      $composer_0.m24(-1132435350);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.l26();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().e1z_1) {
        // Inline function 'HealthScoreCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = HealthScoreCard$lambda$lambda$lambda$lambda_1;
        $composer_0.m26(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.o24();
      Span(tmp1_group, ComposableSingletons$AnalyticsScreenKt_getInstance().u3b_1, $composer_0, 54, 0);
      var tmp_5;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_5 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_36($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function HealthScoreCard$lambda$lambda$lambda_1($this$Div) {
    $this$Div.z32([AnalyticsStyles_getInstance().x3e()]);
    return Unit_instance;
  }
  function HealthScoreCard$lambda$lambda$lambda$lambda$lambda($color) {
    return function ($this$style) {
      color($this$style, Color($color));
      return Unit_instance;
    };
  }
  function HealthScoreCard$lambda$lambda$lambda$lambda_2($color) {
    return function ($this$P) {
      $this$P.z32([AnalyticsStyles_getInstance().y3e()]);
      $this$P.x32(HealthScoreCard$lambda$lambda$lambda$lambda$lambda($color));
      return Unit_instance;
    };
  }
  function HealthScoreCard$lambda$lambda$lambda$lambda_3($label) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-368780623, $changed, -1, 'HealthScoreCard.<anonymous>.<anonymous>.<anonymous>.<anonymous> (AnalyticsScreen.kt:75)');
      }
      Text($label, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_37($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function HealthScoreCard$lambda$lambda$lambda$lambda_4($this$P) {
    $this$P.z32([AnalyticsStyles_getInstance().z3e()]);
    return Unit_instance;
  }
  function HealthScoreCard$lambda$lambda$lambda$lambda_5($analysis) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1562025448, $changed, -1, 'HealthScoreCard.<anonymous>.<anonymous>.<anonymous>.<anonymous> (AnalyticsScreen.kt:78)');
      }
      Text(getHealthDescription($analysis.c1j_1), $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_38($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function HealthScoreCard$lambda$lambda$lambda_2($analysis) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(446812307, $changed, -1, 'HealthScoreCard.<anonymous>.<anonymous>.<anonymous> (AnalyticsScreen.kt:70)');
      }
      var _destruct__k2r9zo = getHealthLabel($analysis.c1j_1);
      var label = _destruct__k2r9zo.gd();
      var color = _destruct__k2r9zo.hd();
      $composer_0.m24(-1132424927);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.w1v(color);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.l26();
      var tmp;
      if (invalid || it === Companion_getInstance().e1z_1) {
        // Inline function 'HealthScoreCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = HealthScoreCard$lambda$lambda$lambda$lambda_2(color);
        $composer_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'HealthScoreCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-368780623, true, HealthScoreCard$lambda$lambda$lambda$lambda_3(label), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.l26();
      var tmp_1;
      if (invalid_0 || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'HealthScoreCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_37(dispatchReceiver);
        $composer_1.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      P(tmp0_group, tmp0, $composer_0, 48, 0);
      $composer_0.m24(-1132418415);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.l26();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().e1z_1) {
        // Inline function 'HealthScoreCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = HealthScoreCard$lambda$lambda$lambda$lambda_4;
        $composer_0.m26(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'HealthScoreCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver_0 = rememberComposableLambda(1562025448, true, HealthScoreCard$lambda$lambda$lambda$lambda_5($analysis), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_2.w1v(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_2.l26();
      var tmp_5;
      if (invalid_1 || it_2 === Companion_getInstance().e1z_1) {
        // Inline function 'HealthScoreCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_38(dispatchReceiver_0);
        $composer_2.m26(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      P(tmp1_group, tmp0_0, $composer_0, 54, 0);
      var tmp_7;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_7 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_39($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function HealthScoreCard$lambda$lambda_1($analysis) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1206857949, $changed, -1, 'HealthScoreCard.<anonymous>.<anonymous> (AnalyticsScreen.kt:59)');
      }
      $composer_0.m24(1005543756);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'HealthScoreCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = HealthScoreCard$lambda$lambda$lambda;
        $composer_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'HealthScoreCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-189139940, true, HealthScoreCard$lambda$lambda$lambda_0($analysis), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.l26();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'HealthScoreCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_36(dispatchReceiver);
        $composer_1.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      $composer_0.m24(1005556148);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.l26();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().e1z_1) {
        // Inline function 'HealthScoreCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = HealthScoreCard$lambda$lambda$lambda_1;
        $composer_0.m26(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'HealthScoreCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver_0 = rememberComposableLambda(446812307, true, HealthScoreCard$lambda$lambda$lambda_2($analysis), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.w1v(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_2.l26();
      var tmp_5;
      if (invalid_0 || it_2 === Companion_getInstance().e1z_1) {
        // Inline function 'HealthScoreCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_39(dispatchReceiver_0);
        $composer_2.m26(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Div(tmp1_group, tmp0_0, $composer_0, 54, 0);
      var tmp_7;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_7 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_40($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function HealthScoreCard$lambda$lambda_2($this$Div) {
    $this$Div.z32([AnalyticsStyles_getInstance().a3f()]);
    return Unit_instance;
  }
  function HealthScoreCard$lambda_0($analysis) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-428929058, $changed, -1, 'HealthScoreCard.<anonymous> (AnalyticsScreen.kt:53)');
      }
      $composer_0.m24(811832363);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'HealthScoreCard.<anonymous>.<anonymous>.<anonymous>' call
        var value = HealthScoreCard$lambda$lambda;
        $composer_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      H3(tmp0_group, ComposableSingletons$AnalyticsScreenKt_getInstance().t3b_1, $composer_0, 54, 0);
      $composer_0.m24(811836016);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.l26();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'HealthScoreCard.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = HealthScoreCard$lambda$lambda_0;
        $composer_0.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'HealthScoreCard.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1206857949, true, HealthScoreCard$lambda$lambda_1($analysis), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.l26();
      var tmp_3;
      if (invalid || it_1 === Companion_getInstance().e1z_1) {
        // Inline function 'HealthScoreCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_40(dispatchReceiver);
        $composer_1.m26(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp1_group, tmp0, $composer_0, 54, 0);
      $composer_0.m24(811869522);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_0.l26();
      var tmp_5;
      if (false || it_2 === Companion_getInstance().e1z_1) {
        // Inline function 'HealthScoreCard.<anonymous>.<anonymous>.<anonymous>' call
        var value_2 = HealthScoreCard$lambda$lambda_2;
        $composer_0.m26(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp2_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.o24();
      Div(tmp2_group, ComposableSingletons$AnalyticsScreenKt_getInstance().b3c_1, $composer_0, 54, 0);
      var tmp_7;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_7 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_41($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function HealthScoreCard$lambda_1($analysis, $$changed) {
    return function ($composer, $force) {
      HealthScoreCard($analysis, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function StatisticsCard$lambda($this$Div) {
    $this$Div.z32([AnalyticsStyles_getInstance().q3e()]);
    return Unit_instance;
  }
  function StatisticsCard$lambda$lambda($this$H3) {
    $this$H3.z32([AnalyticsStyles_getInstance().r3e()]);
    return Unit_instance;
  }
  function StatisticsCard$lambda$lambda_0($this$Div) {
    $this$Div.z32([AnalyticsStyles_getInstance().d3f()]);
    return Unit_instance;
  }
  function StatisticsCard$lambda$lambda_1($stats) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1948457899, $changed, -1, 'StatisticsCard.<anonymous>.<anonymous> (AnalyticsScreen.kt:106)');
      }
      StatItem('Average Charge', '' + $stats.h1i_1 + '%', $composer_0, 6);
      var tmp0_elvis_lhs = $stats.d1i_1;
      StatItem('Avg Temperature', '' + (tmp0_elvis_lhs == null ? 0.0 : tmp0_elvis_lhs) + '\xB0C', $composer_0, 6);
      StatItem('Avg Power', formatDecimal($stats.k1i(), 2) + ' W', $composer_0, 6);
      StatItem('Charging Cycles', '' + $stats.g1i_1, $composer_0, 6);
      StatItem('Total Energy', formatDecimal($stats.l1i(), 2) + ' Wh', $composer_0, 6);
      // Inline function 'kotlin.Long.div' call
      var tmp$ret$0 = $stats.z1h_1.x17().z1($stats.y1h_1.x17()).b2(toLong(3600000));
      StatItem('Time Range', tmp$ret$0.toString() + 'h', $composer_0, 6);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_42($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function StatisticsCard$lambda_0($stats) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(104589492, $changed, -1, 'StatisticsCard.<anonymous> (AnalyticsScreen.kt:101)');
      }
      $composer_0.m24(1648196312);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'StatisticsCard.<anonymous>.<anonymous>.<anonymous>' call
        var value = StatisticsCard$lambda$lambda;
        $composer_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      H3(tmp0_group, ComposableSingletons$AnalyticsScreenKt_getInstance().c3c_1, $composer_0, 54, 0);
      $composer_0.m24(1648199832);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.l26();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'StatisticsCard.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = StatisticsCard$lambda$lambda_0;
        $composer_0.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'StatisticsCard.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1948457899, true, StatisticsCard$lambda$lambda_1($stats), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.l26();
      var tmp_3;
      if (invalid || it_1 === Companion_getInstance().e1z_1) {
        // Inline function 'StatisticsCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_42(dispatchReceiver);
        $composer_1.m26(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp1_group, tmp0, $composer_0, 54, 0);
      var tmp_5;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_5 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_43($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function StatisticsCard$lambda_1($stats, $$changed) {
    return function ($composer, $force) {
      StatisticsCard($stats, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function RecommendationsCard$lambda($this$Div) {
    $this$Div.z32([AnalyticsStyles_getInstance().q3e(), AnalyticsStyles_getInstance().h3f()]);
    return Unit_instance;
  }
  function RecommendationsCard$lambda$lambda($this$H3) {
    $this$H3.z32([AnalyticsStyles_getInstance().r3e()]);
    return Unit_instance;
  }
  function RecommendationsCard$lambda$lambda_0($this$P) {
    $this$P.z32([AnalyticsStyles_getInstance().q3f()]);
    return Unit_instance;
  }
  function RecommendationsCard$lambda$lambda_1($this$Ul) {
    $this$Ul.z32([AnalyticsStyles_getInstance().i3f()]);
    return Unit_instance;
  }
  function RecommendationsCard$lambda$lambda$lambda($this$Li) {
    $this$Li.z32([AnalyticsStyles_getInstance().j3f()]);
    return Unit_instance;
  }
  function RecommendationsCard$lambda$lambda$lambda$lambda($this$Span) {
    $this$Span.z32([AnalyticsStyles_getInstance().k3f()]);
    return Unit_instance;
  }
  function RecommendationsCard$lambda$lambda$lambda$lambda_0($recommendation) {
    return function ($this$Span, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-729240390, $changed, -1, 'RecommendationsCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (AnalyticsScreen.kt:134)');
      }
      Text($recommendation, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_44($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function RecommendationsCard$lambda$lambda$lambda_0($recommendation) {
    return function ($this$Li, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1129170917, $changed, -1, 'RecommendationsCard.<anonymous>.<anonymous>.<anonymous>.<anonymous> (AnalyticsScreen.kt:131)');
      }
      $composer_0.m24(-767740683);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'RecommendationsCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = RecommendationsCard$lambda$lambda$lambda$lambda;
        $composer_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      Span(tmp0_group, ComposableSingletons$AnalyticsScreenKt_getInstance().f3c_1, $composer_0, 54, 0);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'RecommendationsCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-729240390, true, RecommendationsCard$lambda$lambda$lambda$lambda_0($recommendation), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.l26();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'RecommendationsCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_44(dispatchReceiver);
        $composer_1.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Span(null, tmp0, $composer_0, 48, 1);
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_45($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function RecommendationsCard$lambda$lambda_2($recommendations) {
    return function ($this$Ul, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(275494790, $changed, -1, 'RecommendationsCard.<anonymous>.<anonymous> (AnalyticsScreen.kt:129)');
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = $recommendations.i();
      while (tmp0_iterator.j()) {
        var element = tmp0_iterator.k();
        // Inline function 'RecommendationsCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        $composer_0.m24(-974189962);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.l26();
        var tmp;
        if (false || it === Companion_getInstance().e1z_1) {
          // Inline function 'RecommendationsCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = RecommendationsCard$lambda$lambda$lambda;
          $composer_0.m26(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        $composer_0.o24();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'RecommendationsCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(1129170917, true, RecommendationsCard$lambda$lambda$lambda_0(element), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.w1v(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.l26();
        var tmp_1;
        if (invalid || it_0 === Companion_getInstance().e1z_1) {
          // Inline function 'RecommendationsCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_45(dispatchReceiver);
          $composer_1.m26(value_0);
          tmp_1 = value_0;
        } else {
          tmp_1 = it_0;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Li(tmp0_group, tmp0, $composer_0, 54, 0);
      }
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_46($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function RecommendationsCard$lambda_0($recommendations) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1992727563, $changed, -1, 'RecommendationsCard.<anonymous> (AnalyticsScreen.kt:119)');
      }
      $composer_0.m24(884521871);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'RecommendationsCard.<anonymous>.<anonymous>.<anonymous>' call
        var value = RecommendationsCard$lambda$lambda;
        $composer_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      H3(tmp0_group, ComposableSingletons$AnalyticsScreenKt_getInstance().d3c_1, $composer_0, 54, 0);
      if ($recommendations.n()) {
        $composer_0.m24(1650505636);
        $composer_0.m24(884526735);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.l26();
        var tmp_1;
        if (false || it_0 === Companion_getInstance().e1z_1) {
          // Inline function 'RecommendationsCard.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = RecommendationsCard$lambda$lambda_0;
          $composer_0.m26(value_0);
          tmp_1 = value_0;
        } else {
          tmp_1 = it_0;
        }
        var tmp_2 = tmp_1;
        var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.o24();
        P(tmp1_group, ComposableSingletons$AnalyticsScreenKt_getInstance().e3c_1, $composer_0, 54, 0);
        $composer_0.o24();
      } else {
        $composer_0.m24(1650700688);
        $composer_0.m24(884532761);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.l26();
        var tmp_3;
        if (false || it_1 === Companion_getInstance().e1z_1) {
          // Inline function 'RecommendationsCard.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = RecommendationsCard$lambda$lambda_1;
          $composer_0.m26(value_1);
          tmp_3 = value_1;
        } else {
          tmp_3 = it_1;
        }
        var tmp_4 = tmp_3;
        var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_0.o24();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'RecommendationsCard.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(275494790, true, RecommendationsCard$lambda$lambda_2($recommendations), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.w1v(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_1.l26();
        var tmp_5;
        if (invalid || it_2 === Companion_getInstance().e1z_1) {
          // Inline function 'RecommendationsCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_2 = ComposableLambda$invoke$ref_46(dispatchReceiver);
          $composer_1.m26(value_2);
          tmp_5 = value_2;
        } else {
          tmp_5 = it_2;
        }
        var tmp_6 = tmp_5;
        var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Ul(tmp2_group, tmp0, $composer_0, 54, 0);
        $composer_0.o24();
      }
      var tmp_7;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_7 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_47($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function RecommendationsCard$lambda_1($recommendations, $$changed) {
    return function ($composer, $force) {
      RecommendationsCard($recommendations, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function StatItem$lambda($this$Div) {
    $this$Div.z32([AnalyticsStyles_getInstance().e3f()]);
    return Unit_instance;
  }
  function StatItem$lambda$lambda($this$P) {
    $this$P.z32([AnalyticsStyles_getInstance().f3f()]);
    return Unit_instance;
  }
  function StatItem$lambda$lambda_0($label) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1402868966, $changed, -1, 'StatItem.<anonymous>.<anonymous> (AnalyticsScreen.kt:146)');
      }
      Text($label, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_48($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function StatItem$lambda$lambda_1($this$P) {
    $this$P.z32([AnalyticsStyles_getInstance().g3f()]);
    return Unit_instance;
  }
  function StatItem$lambda$lambda_2($value) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1534757199, $changed, -1, 'StatItem.<anonymous>.<anonymous> (AnalyticsScreen.kt:149)');
      }
      Text($value, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_49($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function StatItem$lambda_0($label, $value) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(2089147844, $changed, -1, 'StatItem.<anonymous> (AnalyticsScreen.kt:145)');
      }
      $composer_0.m24(-1985478452);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'StatItem.<anonymous>.<anonymous>.<anonymous>' call
        var value = StatItem$lambda$lambda;
        $composer_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'StatItem.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1402868966, true, StatItem$lambda$lambda_0($label), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.l26();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'StatItem.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_48(dispatchReceiver);
        $composer_1.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      P(tmp0_group, tmp0, $composer_0, 54, 0);
      $composer_0.m24(-1985475444);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.l26();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().e1z_1) {
        // Inline function 'StatItem.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = StatItem$lambda$lambda_1;
        $composer_0.m26(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'StatItem.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver_0 = rememberComposableLambda(1534757199, true, StatItem$lambda$lambda_2($value), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.w1v(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_2.l26();
      var tmp_5;
      if (invalid_0 || it_2 === Companion_getInstance().e1z_1) {
        // Inline function 'StatItem.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_49(dispatchReceiver_0);
        $composer_2.m26(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      P(tmp1_group, tmp0_0, $composer_0, 54, 0);
      var tmp_7;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_7 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_50($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function StatItem$lambda_1($label, $value, $$changed) {
    return function ($composer, $force) {
      StatItem($label, $value, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function LoadingSection$lambda($this$Div) {
    $this$Div.z32([AnalyticsStyles_getInstance().q3e(), AnalyticsStyles_getInstance().l3f()]);
    return Unit_instance;
  }
  function LoadingSection$lambda_0($$changed) {
    return function ($composer, $force) {
      LoadingSection($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ErrorSection$lambda($this$Div) {
    $this$Div.z32([AnalyticsStyles_getInstance().q3e(), AnalyticsStyles_getInstance().n3f()]);
    return Unit_instance;
  }
  function ErrorSection$lambda$lambda($this$Div) {
    $this$Div.z32([AnalyticsStyles_getInstance().o3f()]);
    return Unit_instance;
  }
  function ErrorSection$lambda$lambda_0($error) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(257785461, $changed, -1, 'ErrorSection.<anonymous>.<anonymous> (AnalyticsScreen.kt:169)');
      }
      Text($error, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_51($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ErrorSection$lambda_0($error) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(742363735, $changed, -1, 'ErrorSection.<anonymous> (AnalyticsScreen.kt:165)');
      }
      $composer_0.m24(-1570480286);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'ErrorSection.<anonymous>.<anonymous>.<anonymous>' call
        var value = ErrorSection$lambda$lambda;
        $composer_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      Div(tmp0_group, ComposableSingletons$AnalyticsScreenKt_getInstance().i3c_1, $composer_0, 54, 0);
      H3(null, ComposableSingletons$AnalyticsScreenKt_getInstance().j3c_1, $composer_0, 48, 1);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ErrorSection.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(257785461, true, ErrorSection$lambda$lambda_0($error), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.l26();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'ErrorSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_51(dispatchReceiver);
        $composer_1.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      P(null, tmp0, $composer_0, 48, 1);
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_52($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ErrorSection$lambda_1($error, $$changed) {
    return function ($composer, $force) {
      ErrorSection($error, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function EmptyStateSection$lambda($this$Div) {
    $this$Div.z32([AnalyticsStyles_getInstance().q3e(), AnalyticsStyles_getInstance().l3f()]);
    return Unit_instance;
  }
  function EmptyStateSection$lambda_0($$changed) {
    return function ($composer, $force) {
      EmptyStateSection($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function analyzeHealthUseCase$factory() {
    return getPropertyCallableRef('analyzeHealthUseCase', 1, KProperty1, function (receiver) {
      return _get_analyzeHealthUseCase__gkh8w4(receiver);
    }, null);
  }
  function calculateStatsUseCase$factory() {
    return getPropertyCallableRef('calculateStatsUseCase', 1, KProperty1, function (receiver) {
      return _get_calculateStatsUseCase__huqatv(receiver);
    }, null);
  }
  function container$factory() {
    return getPropertyCallableRef('container', 1, KProperty1, function (receiver) {
      return receiver.o3e();
    }, null);
  }
  function title$factory() {
    return getPropertyCallableRef('title', 1, KProperty1, function (receiver) {
      return receiver.p3e();
    }, null);
  }
  function card$factory() {
    return getPropertyCallableRef('card', 1, KProperty1, function (receiver) {
      return receiver.q3e();
    }, null);
  }
  function cardTitle$factory() {
    return getPropertyCallableRef('cardTitle', 1, KProperty1, function (receiver) {
      return receiver.r3e();
    }, null);
  }
  function healthCard$factory() {
    return getPropertyCallableRef('healthCard', 1, KProperty1, function (receiver) {
      return receiver.s3e();
    }, null);
  }
  function scoreContainer$factory() {
    return getPropertyCallableRef('scoreContainer', 1, KProperty1, function (receiver) {
      return receiver.t3e();
    }, null);
  }
  function scoreCircle$factory() {
    return getPropertyCallableRef('scoreCircle', 1, KProperty1, function (receiver) {
      return receiver.u3e();
    }, null);
  }
  function scoreNumber$factory() {
    return getPropertyCallableRef('scoreNumber', 1, KProperty1, function (receiver) {
      return receiver.v3e();
    }, null);
  }
  function scoreLabel$factory() {
    return getPropertyCallableRef('scoreLabel', 1, KProperty1, function (receiver) {
      return receiver.w3e();
    }, null);
  }
  function scoreInterpretation$factory() {
    return getPropertyCallableRef('scoreInterpretation', 1, KProperty1, function (receiver) {
      return receiver.x3e();
    }, null);
  }
  function healthLabel$factory() {
    return getPropertyCallableRef('healthLabel', 1, KProperty1, function (receiver) {
      return receiver.y3e();
    }, null);
  }
  function healthDescription$factory() {
    return getPropertyCallableRef('healthDescription', 1, KProperty1, function (receiver) {
      return receiver.z3e();
    }, null);
  }
  function factorsContainer$factory() {
    return getPropertyCallableRef('factorsContainer', 1, KProperty1, function (receiver) {
      return receiver.a3f();
    }, null);
  }
  function factorsTitle$factory() {
    return getPropertyCallableRef('factorsTitle', 1, KProperty1, function (receiver) {
      return receiver.b3f();
    }, null);
  }
  function factorsList$factory() {
    return getPropertyCallableRef('factorsList', 1, KProperty1, function (receiver) {
      return receiver.c3f();
    }, null);
  }
  function statsGrid$factory() {
    return getPropertyCallableRef('statsGrid', 1, KProperty1, function (receiver) {
      return receiver.d3f();
    }, null);
  }
  function statItem$factory() {
    return getPropertyCallableRef('statItem', 1, KProperty1, function (receiver) {
      return receiver.e3f();
    }, null);
  }
  function statLabel$factory() {
    return getPropertyCallableRef('statLabel', 1, KProperty1, function (receiver) {
      return receiver.f3f();
    }, null);
  }
  function statValue$factory() {
    return getPropertyCallableRef('statValue', 1, KProperty1, function (receiver) {
      return receiver.g3f();
    }, null);
  }
  function recommendationsCard$factory() {
    return getPropertyCallableRef('recommendationsCard', 1, KProperty1, function (receiver) {
      return receiver.h3f();
    }, null);
  }
  function recommendationsList$factory() {
    return getPropertyCallableRef('recommendationsList', 1, KProperty1, function (receiver) {
      return receiver.i3f();
    }, null);
  }
  function recommendationItem$factory() {
    return getPropertyCallableRef('recommendationItem', 1, KProperty1, function (receiver) {
      return receiver.j3f();
    }, null);
  }
  function recommendationIcon$factory() {
    return getPropertyCallableRef('recommendationIcon', 1, KProperty1, function (receiver) {
      return receiver.k3f();
    }, null);
  }
  function centerCard$factory() {
    return getPropertyCallableRef('centerCard', 1, KProperty1, function (receiver) {
      return receiver.l3f();
    }, null);
  }
  function spinner$factory() {
    return getPropertyCallableRef('spinner', 1, KProperty1, function (receiver) {
      return receiver.m3f();
    }, null);
  }
  function errorCard$factory() {
    return getPropertyCallableRef('errorCard', 1, KProperty1, function (receiver) {
      return receiver.n3f();
    }, null);
  }
  function errorIcon$factory() {
    return getPropertyCallableRef('errorIcon', 1, KProperty1, function (receiver) {
      return receiver.o3f();
    }, null);
  }
  function emptyIcon$factory() {
    return getPropertyCallableRef('emptyIcon', 1, KProperty1, function (receiver) {
      return receiver.p3f();
    }, null);
  }
  function emptyText$factory() {
    return getPropertyCallableRef('emptyText', 1, KProperty1, function (receiver) {
      return receiver.q3f();
    }, null);
  }
  function container$factory_0() {
    return getPropertyCallableRef('container', 1, KProperty1, function (receiver) {
      return receiver.o3e();
    }, null);
  }
  function title$factory_0() {
    return getPropertyCallableRef('title', 1, KProperty1, function (receiver) {
      return receiver.p3e();
    }, null);
  }
  function card$factory_0() {
    return getPropertyCallableRef('card', 1, KProperty1, function (receiver) {
      return receiver.q3e();
    }, null);
  }
  function cardTitle$factory_0() {
    return getPropertyCallableRef('cardTitle', 1, KProperty1, function (receiver) {
      return receiver.r3e();
    }, null);
  }
  function healthCard$factory_0() {
    return getPropertyCallableRef('healthCard', 1, KProperty1, function (receiver) {
      return receiver.s3e();
    }, null);
  }
  function scoreContainer$factory_0() {
    return getPropertyCallableRef('scoreContainer', 1, KProperty1, function (receiver) {
      return receiver.t3e();
    }, null);
  }
  function scoreCircle$factory_0() {
    return getPropertyCallableRef('scoreCircle', 1, KProperty1, function (receiver) {
      return receiver.u3e();
    }, null);
  }
  function scoreNumber$factory_0() {
    return getPropertyCallableRef('scoreNumber', 1, KProperty1, function (receiver) {
      return receiver.v3e();
    }, null);
  }
  function scoreLabel$factory_0() {
    return getPropertyCallableRef('scoreLabel', 1, KProperty1, function (receiver) {
      return receiver.w3e();
    }, null);
  }
  function scoreInterpretation$factory_0() {
    return getPropertyCallableRef('scoreInterpretation', 1, KProperty1, function (receiver) {
      return receiver.x3e();
    }, null);
  }
  function healthLabel$factory_0() {
    return getPropertyCallableRef('healthLabel', 1, KProperty1, function (receiver) {
      return receiver.y3e();
    }, null);
  }
  function healthDescription$factory_0() {
    return getPropertyCallableRef('healthDescription', 1, KProperty1, function (receiver) {
      return receiver.z3e();
    }, null);
  }
  function factorsContainer$factory_0() {
    return getPropertyCallableRef('factorsContainer', 1, KProperty1, function (receiver) {
      return receiver.a3f();
    }, null);
  }
  function factorsTitle$factory_0() {
    return getPropertyCallableRef('factorsTitle', 1, KProperty1, function (receiver) {
      return receiver.b3f();
    }, null);
  }
  function factorsList$factory_0() {
    return getPropertyCallableRef('factorsList', 1, KProperty1, function (receiver) {
      return receiver.c3f();
    }, null);
  }
  function statsGrid$factory_0() {
    return getPropertyCallableRef('statsGrid', 1, KProperty1, function (receiver) {
      return receiver.d3f();
    }, null);
  }
  function statItem$factory_0() {
    return getPropertyCallableRef('statItem', 1, KProperty1, function (receiver) {
      return receiver.e3f();
    }, null);
  }
  function statLabel$factory_0() {
    return getPropertyCallableRef('statLabel', 1, KProperty1, function (receiver) {
      return receiver.f3f();
    }, null);
  }
  function statValue$factory_0() {
    return getPropertyCallableRef('statValue', 1, KProperty1, function (receiver) {
      return receiver.g3f();
    }, null);
  }
  function recommendationsCard$factory_0() {
    return getPropertyCallableRef('recommendationsCard', 1, KProperty1, function (receiver) {
      return receiver.h3f();
    }, null);
  }
  function recommendationsList$factory_0() {
    return getPropertyCallableRef('recommendationsList', 1, KProperty1, function (receiver) {
      return receiver.i3f();
    }, null);
  }
  function recommendationItem$factory_0() {
    return getPropertyCallableRef('recommendationItem', 1, KProperty1, function (receiver) {
      return receiver.j3f();
    }, null);
  }
  function recommendationIcon$factory_0() {
    return getPropertyCallableRef('recommendationIcon', 1, KProperty1, function (receiver) {
      return receiver.k3f();
    }, null);
  }
  function centerCard$factory_0() {
    return getPropertyCallableRef('centerCard', 1, KProperty1, function (receiver) {
      return receiver.l3f();
    }, null);
  }
  function spinner$factory_0() {
    return getPropertyCallableRef('spinner', 1, KProperty1, function (receiver) {
      return receiver.m3f();
    }, null);
  }
  function errorCard$factory_0() {
    return getPropertyCallableRef('errorCard', 1, KProperty1, function (receiver) {
      return receiver.n3f();
    }, null);
  }
  function errorIcon$factory_0() {
    return getPropertyCallableRef('errorIcon', 1, KProperty1, function (receiver) {
      return receiver.o3f();
    }, null);
  }
  function emptyIcon$factory_0() {
    return getPropertyCallableRef('emptyIcon', 1, KProperty1, function (receiver) {
      return receiver.p3f();
    }, null);
  }
  function emptyText$factory_0() {
    return getPropertyCallableRef('emptyText', 1, KProperty1, function (receiver) {
      return receiver.q3f();
    }, null);
  }
  var HistoryPresenter$stable;
  var HistoryState$stable;
  var ChartData$stable;
  var HistoryStyles$stable;
  function HistoryScreen($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(168415474);
    if (!($changed === 0) || !$composer_0.f24()) {
      if (isTraceInProgress()) {
        traceEventStart(168415474, $changed, -1, 'HistoryScreen (HistoryScreen.kt:21)');
      }
      $composer_0.m24(-493822977);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'HistoryScreen.<anonymous>' call
        var value = new HistoryPresenter();
        this_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      var presenter = tmp0_group;
      var state$delegate = collectAsState(presenter.d3g_1, null, $composer_0, 0, 1);
      $composer_0.m24(-493819499);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      var invalid = $composer_0.f25(presenter);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.l26();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'HistoryScreen.<anonymous>' call
        var value_0 = HistoryScreen$slambda_0(presenter, null);
        this_1.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.o24();
      LaunchedEffect(Unit_instance, tmp1_group, $composer_0, 6);
      $composer_0.m24(-493817244);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.l26();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().e1z_1) {
        // Inline function 'HistoryScreen.<anonymous>' call
        var value_1 = HistoryScreen$lambda_0;
        this_2.m26(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'HistoryScreen.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1352146605, true, HistoryScreen$lambda_1(presenter, state$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_1.l26();
      var tmp_5;
      if (invalid_0 || it_2 === Companion_getInstance().e1z_1) {
        // Inline function 'HistoryScreen.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_63(dispatchReceiver);
        $composer_1.m26(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp2_group, tmp0, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v1y();
    }
    var tmp3_safe_receiver = $composer_0.u25();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.g2c(HistoryScreen$lambda_2($changed));
    }
  }
  function TimePeriodSelector(selectedPeriod, onPeriodChanged, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(-1679017916);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1v(selectedPeriod) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f25(onPeriodChanged) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.f24()) {
      if (isTraceInProgress()) {
        traceEventStart(-1679017916, $dirty, -1, 'TimePeriodSelector (HistoryScreen.kt:122)');
      }
      $composer_0.m24(-833677098);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'TimePeriodSelector.<anonymous>' call
        var value = TimePeriodSelector$lambda;
        this_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'TimePeriodSelector.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1691920131, true, TimePeriodSelector$lambda_0(selectedPeriod, onPeriodChanged), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.l26();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'TimePeriodSelector.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_65(dispatchReceiver);
        $composer_1.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
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
      tmp1_safe_receiver.g2c(TimePeriodSelector$lambda_1(selectedPeriod, onPeriodChanged, $changed));
    }
  }
  function StatisticsSummary(data, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(1505736881);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f25(data) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.f24()) {
      if (isTraceInProgress()) {
        traceEventStart(1505736881, $dirty, -1, 'StatisticsSummary (HistoryScreen.kt:139)');
      }
      $composer_0.m24(919117865);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'StatisticsSummary.<anonymous>' call
        var value = StatisticsSummary$lambda;
        this_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'StatisticsSummary.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1321537008, true, StatisticsSummary$lambda_0(data), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.l26();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'StatisticsSummary.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_67(dispatchReceiver);
        $composer_1.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
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
      tmp1_safe_receiver.g2c(StatisticsSummary$lambda_1(data, $changed));
    }
  }
  function SummaryItem(label, value, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(-1573398005);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1v(label) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.w1v(value) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.f24()) {
      if (isTraceInProgress()) {
        traceEventStart(-1573398005, $dirty, -1, 'SummaryItem (HistoryScreen.kt:159)');
      }
      $composer_0.m24(897437599);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'SummaryItem.<anonymous>' call
        var value_0 = SummaryItem$lambda;
        this_0.m26(value_0);
        tmp = value_0;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'SummaryItem.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1698729206, true, SummaryItem$lambda_0(label, value), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.l26();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'SummaryItem.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_70(dispatchReceiver);
        $composer_1.m26(value_1);
        tmp_1 = value_1;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
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
      tmp1_safe_receiver.g2c(SummaryItem$lambda_1(label, value, $changed));
    }
  }
  function HistoryLoadingSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(199325365);
    if (!($changed === 0) || !$composer_0.f24()) {
      if (isTraceInProgress()) {
        traceEventStart(199325365, $changed, -1, 'HistoryLoadingSection (HistoryScreen.kt:171)');
      }
      $composer_0.m24(-414148636);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'HistoryLoadingSection.<anonymous>' call
        var value = HistoryLoadingSection$lambda;
        this_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      Div(tmp0_group, ComposableSingletons$HistoryScreenKt_getInstance().i3g_1, $composer_0, 54, 0);
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
      tmp1_safe_receiver.g2c(HistoryLoadingSection$lambda_0($changed));
    }
  }
  function HistoryErrorSection(error, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(-289541966);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1v(error) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.f24()) {
      if (isTraceInProgress()) {
        traceEventStart(-289541966, $dirty, -1, 'HistoryErrorSection (HistoryScreen.kt:186)');
      }
      $composer_0.m24(309728472);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'HistoryErrorSection.<anonymous>' call
        var value = HistoryErrorSection$lambda;
        this_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'HistoryErrorSection.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(120158099, true, HistoryErrorSection$lambda_0(error), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.l26();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'HistoryErrorSection.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_73(dispatchReceiver);
        $composer_1.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
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
      tmp1_safe_receiver.g2c(HistoryErrorSection$lambda_1(error, $changed));
    }
  }
  function HistoryEmptyStateSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(361658761);
    if (!($changed === 0) || !$composer_0.f24()) {
      if (isTraceInProgress()) {
        traceEventStart(361658761, $changed, -1, 'HistoryEmptyStateSection (HistoryScreen.kt:203)');
      }
      $composer_0.m24(1980641364);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'HistoryEmptyStateSection.<anonymous>' call
        var value = HistoryEmptyStateSection$lambda;
        this_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      Div(tmp0_group, ComposableSingletons$HistoryScreenKt_getInstance().n3g_1, $composer_0, 54, 0);
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
      tmp1_safe_receiver.g2c(HistoryEmptyStateSection$lambda_0($changed));
    }
  }
  function getPeriodLabel(period) {
    var tmp;
    switch (period.r1_1) {
      case 0:
        tmp = 'Last Hour';
        break;
      case 1:
        tmp = 'Last 24 Hours';
        break;
      case 2:
        tmp = 'Last Week';
        break;
      case 3:
        tmp = 'Last Month';
        break;
      case 4:
        tmp = 'Last Year';
        break;
      case 5:
        tmp = 'All Time';
        break;
      case 6:
        tmp = 'Custom';
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function _get_getBatteryHistoryUseCase__5qpgpb($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.b3g_1;
    getBatteryHistoryUseCase$factory();
    return this_0.k1();
  }
  function formatTimestamp($this, timestamp) {
    var localDateTime = toLocalDateTime(timestamp, Companion_getInstance_0().k18());
    return padStart(localDateTime.g18().toString(), 2, _Char___init__impl__6a9atx(48)) + ':' + padStart(localDateTime.h18().toString(), 2, _Char___init__impl__6a9atx(48));
  }
  function HistoryPresenter$getBatteryHistoryUseCase$delegate$lambda($this, $qualifier, $parameters) {
    return function () {
      // Inline function 'org.koin.core.component.get' call
      var this_0 = $this;
      var qualifier = $qualifier;
      var parameters = $parameters;
      var tmp;
      if (isInterface(this_0, KoinScopeComponent)) {
        // Inline function 'org.koin.core.scope.Scope.get' call
        tmp = this_0.d1a().v1c(getKClass(GetBatteryHistoryUseCase), qualifier, parameters);
      } else {
        // Inline function 'org.koin.core.Koin.get' call
        // Inline function 'org.koin.core.scope.Scope.get' call
        tmp = this_0.b1a().b19_1.o19_1.v1c(getKClass(GetBatteryHistoryUseCase), qualifier, parameters);
      }
      return tmp;
    };
  }
  function $loadHistoryCOROUTINE$0(_this__u8e3s4, period, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w3g_1 = _this__u8e3s4;
    this.x3g_1 = period;
  }
  protoOf($loadHistoryCOROUTINE$0).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        switch (tmp) {
          case 0:
            this.g8_1 = 5;
            this.w3g_1.c3g_1.lt(new HistoryState(VOID, this.x3g_1, true));
            this.g8_1 = 3;
            this.f8_1 = 1;
            suspendResult = _get_getBatteryHistoryUseCase__5qpgpb(this.w3g_1).v1j(this.x3g_1, VOID, VOID, this);
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
            var result = suspendResult.mf_1;
            var tmp_0;
            if (_Result___get_isFailure__impl__jpiriv(result)) {
              tmp_0 = null;
            } else {
              var tmp_1 = _Result___get_value__impl__bjfvqg(result);
              tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
            }

            var tmp0_elvis_lhs = tmp_0;
            var readings = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
            if (readings.n()) {
              this.w3g_1.c3g_1.lt(new HistoryState(VOID, this.x3g_1));
              return Unit_instance;
            }

            var destination = ArrayList_init_$Create$(collectionSizeOrDefault(readings, 10));
            var tmp0_iterator = readings.i();
            while (tmp0_iterator.j()) {
              var item = tmp0_iterator.k();
              destination.d(formatTimestamp(this.w3g_1, item.y1f_1));
            }

            var labels = destination;
            var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(readings, 10));
            var tmp0_iterator_0 = readings.i();
            while (tmp0_iterator_0.j()) {
              var item_0 = tmp0_iterator_0.k();
              destination_0.d(item_0.c1g_1);
            }

            var batteryLevels = destination_0;
            var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(readings, 10));
            var tmp0_iterator_1 = readings.i();
            while (tmp0_iterator_1.j()) {
              var item_1 = tmp0_iterator_1.k();
              destination_1.d(item_1.z1f_1 / 1000.0);
            }

            var voltages = destination_1;
            var destination_2 = ArrayList_init_$Create$(collectionSizeOrDefault(readings, 10));
            var tmp0_iterator_2 = readings.i();
            while (tmp0_iterator_2.j()) {
              var item_2 = tmp0_iterator_2.k();
              var tmp0_safe_receiver = item_2.b1g_1;
              var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver;
              destination_2.d(tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs);
            }

            var temperatures = destination_2;
            var chartData = new ChartData(labels, batteryLevels, voltages, temperatures);
            this.w3g_1.c3g_1.lt(new HistoryState(chartData, this.x3g_1, false));
            this.g8_1 = 5;
            this.f8_1 = 4;
            continue $sm;
          case 3:
            this.g8_1 = 5;
            var tmp_2 = this.i8_1;
            if (tmp_2 instanceof Exception) {
              var e = this.i8_1;
              var tmp1_elvis_lhs_0 = e.message;
              var tmp2_error = tmp1_elvis_lhs_0 == null ? 'Unknown error occurred' : tmp1_elvis_lhs_0;
              this.w3g_1.c3g_1.lt(new HistoryState(VOID, this.x3g_1, false, tmp2_error));
              this.f8_1 = 4;
              continue $sm;
            } else {
              throw this.i8_1;
            }

          case 4:
            this.g8_1 = 5;
            return Unit_instance;
          case 5:
            throw this.i8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.g8_1 === 5) {
          throw e_0;
        } else {
          this.f8_1 = this.g8_1;
          this.i8_1 = e_0;
        }
      }
     while (true);
  };
  function HistoryPresenter() {
    var tmp = this;
    // Inline function 'org.koin.core.component.inject' call
    var mode = KoinPlatformTools_instance.y1c();
    tmp.b3g_1 = lazy(mode, HistoryPresenter$getBatteryHistoryUseCase$delegate$lambda(this, null, null));
    this.c3g_1 = MutableStateFlow(new HistoryState());
    this.d3g_1 = this.c3g_1;
  }
  protoOf(HistoryPresenter).y3g = function (period, $completion) {
    var tmp = new $loadHistoryCOROUTINE$0(this, period, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  function HistoryState(chartData, selectedPeriod, isLoading, error) {
    chartData = chartData === VOID ? null : chartData;
    selectedPeriod = selectedPeriod === VOID ? TimePeriod_DAY_getInstance() : selectedPeriod;
    isLoading = isLoading === VOID ? false : isLoading;
    error = error === VOID ? null : error;
    this.z3g_1 = chartData;
    this.a3h_1 = selectedPeriod;
    this.b3h_1 = isLoading;
    this.c3h_1 = error;
  }
  protoOf(HistoryState).toString = function () {
    return 'HistoryState(chartData=' + toString_0(this.z3g_1) + ', selectedPeriod=' + this.a3h_1.toString() + ', isLoading=' + this.b3h_1 + ', error=' + this.c3h_1 + ')';
  };
  protoOf(HistoryState).hashCode = function () {
    var result = this.z3g_1 == null ? 0 : this.z3g_1.hashCode();
    result = imul(result, 31) + this.a3h_1.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.b3h_1) | 0;
    result = imul(result, 31) + (this.c3h_1 == null ? 0 : getStringHashCode(this.c3h_1)) | 0;
    return result;
  };
  protoOf(HistoryState).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HistoryState))
      return false;
    var tmp0_other_with_cast = other instanceof HistoryState ? other : THROW_CCE();
    if (!equals(this.z3g_1, tmp0_other_with_cast.z3g_1))
      return false;
    if (!this.a3h_1.equals(tmp0_other_with_cast.a3h_1))
      return false;
    if (!(this.b3h_1 === tmp0_other_with_cast.b3h_1))
      return false;
    if (!(this.c3h_1 == tmp0_other_with_cast.c3h_1))
      return false;
    return true;
  };
  function ChartData(labels, batteryLevels, voltages, temperatures) {
    this.d3h_1 = labels;
    this.e3h_1 = batteryLevels;
    this.f3h_1 = voltages;
    this.g3h_1 = temperatures;
  }
  protoOf(ChartData).toString = function () {
    return 'ChartData(labels=' + toString(this.d3h_1) + ', batteryLevels=' + toString(this.e3h_1) + ', voltages=' + toString(this.f3h_1) + ', temperatures=' + toString(this.g3h_1) + ')';
  };
  protoOf(ChartData).hashCode = function () {
    var result = hashCode(this.d3h_1);
    result = imul(result, 31) + hashCode(this.e3h_1) | 0;
    result = imul(result, 31) + hashCode(this.f3h_1) | 0;
    result = imul(result, 31) + hashCode(this.g3h_1) | 0;
    return result;
  };
  protoOf(ChartData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ChartData))
      return false;
    var tmp0_other_with_cast = other instanceof ChartData ? other : THROW_CCE();
    if (!equals(this.d3h_1, tmp0_other_with_cast.d3h_1))
      return false;
    if (!equals(this.e3h_1, tmp0_other_with_cast.e3h_1))
      return false;
    if (!equals(this.f3h_1, tmp0_other_with_cast.f3h_1))
      return false;
    if (!equals(this.g3h_1, tmp0_other_with_cast.g3h_1))
      return false;
    return true;
  };
  function HistoryStyles$container$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    gap($this$style, get_cssRem(1.5));
    return Unit_instance;
  }
  function HistoryStyles$title$delegate$lambda($this$style) {
    fontSize($this$style, get_cssRem(2));
    fontWeight($this$style, 600);
    color($this$style, rgb(33, 33, 33));
    margin($this$style, [get_px(0), get_px(0), get_cssRem(1)]);
    return Unit_instance;
  }
  function HistoryStyles$periodSelector$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    gap($this$style, get_cssRem(0.5));
    // Inline function 'org.jetbrains.compose.web.css.Companion.Wrap' call
    // Inline function 'org.jetbrains.compose.web.css.FlexWrap' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexWrap($this$style, 'wrap');
    marginBottom($this$style, get_cssRem(1));
    return Unit_instance;
  }
  function HistoryStyles$periodButton$delegate$lambda($this$style) {
    padding($this$style, [get_cssRem(0.5), get_cssRem(1)]);
    fontSize($this$style, get_cssRem(0.875));
    fontWeight($this$style, 500);
    borderRadius($this$style, get_px(8));
    var tmp = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    border($this$style, tmp, 'solid', rgb(27, 94, 32));
    // Inline function 'org.jetbrains.compose.web.css.Color.white' call
    var tmp$ret$4 = Color('white');
    backgroundColor($this$style, tmp$ret$4);
    color($this$style, rgb(27, 94, 32));
    cursor($this$style, ['pointer']);
    $this$style.i34('transition', 'all 0.2s');
    return Unit_instance;
  }
  function HistoryStyles$periodButtonActive$delegate$lambda($this$style) {
    backgroundColor($this$style, rgb(27, 94, 32));
    // Inline function 'org.jetbrains.compose.web.css.Color.white' call
    var tmp$ret$0 = Color('white');
    color($this$style, tmp$ret$0);
    return Unit_instance;
  }
  function HistoryStyles$summaryCard$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Color.white' call
    var tmp$ret$0 = Color('white');
    backgroundColor($this$style, tmp$ret$0);
    borderRadius($this$style, get_px(12));
    padding($this$style, [get_cssRem(2)]);
    $this$style.i34('box-shadow', '0 2px 8px rgba(0,0,0,0.1)');
    return Unit_instance;
  }
  function HistoryStyles$summaryTitle$delegate$lambda($this$style) {
    fontSize($this$style, get_cssRem(1.5));
    fontWeight($this$style, 600);
    color($this$style, rgb(33, 33, 33));
    margin($this$style, [get_px(0), get_px(0), get_cssRem(1.5)]);
    return Unit_instance;
  }
  function HistoryStyles$summaryGrid$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'grid');
    $this$style.i34('grid-template-columns', 'repeat(auto-fit, minmax(150px, 1fr))');
    gap($this$style, get_cssRem(1));
    return Unit_instance;
  }
  function HistoryStyles$summaryItem$delegate$lambda($this$style) {
    textAlign($this$style, 'center');
    padding($this$style, [get_cssRem(1)]);
    backgroundColor($this$style, rgb(245, 245, 245));
    borderRadius($this$style, get_px(8));
    return Unit_instance;
  }
  function HistoryStyles$summaryLabel$delegate$lambda($this$style) {
    fontSize($this$style, get_cssRem(0.875));
    color($this$style, rgb(100, 100, 100));
    margin($this$style, [get_px(0), get_px(0), get_cssRem(0.5)]);
    return Unit_instance;
  }
  function HistoryStyles$summaryValue$delegate$lambda($this$style) {
    fontSize($this$style, get_cssRem(1.5));
    fontWeight($this$style, 600);
    color($this$style, rgb(27, 94, 32));
    margin($this$style, [get_px(0)]);
    return Unit_instance;
  }
  function HistoryStyles() {
    HistoryStyles_instance = this;
    StyleSheet_init_$Init$(VOID, VOID, this);
    var tmp = this;
    tmp.m3h_1 = this.h36(HistoryStyles$container$delegate$lambda).b36(this, container$factory_1());
    var tmp_0 = this;
    tmp_0.n3h_1 = this.h36(HistoryStyles$title$delegate$lambda).b36(this, title$factory_1());
    var tmp_1 = this;
    tmp_1.o3h_1 = this.h36(HistoryStyles$periodSelector$delegate$lambda).b36(this, periodSelector$factory());
    var tmp_2 = this;
    tmp_2.p3h_1 = this.h36(HistoryStyles$periodButton$delegate$lambda).b36(this, periodButton$factory());
    var tmp_3 = this;
    tmp_3.q3h_1 = this.h36(HistoryStyles$periodButtonActive$delegate$lambda).b36(this, periodButtonActive$factory());
    var tmp_4 = this;
    tmp_4.r3h_1 = this.h36(HistoryStyles$summaryCard$delegate$lambda).b36(this, summaryCard$factory());
    var tmp_5 = this;
    tmp_5.s3h_1 = this.h36(HistoryStyles$summaryTitle$delegate$lambda).b36(this, summaryTitle$factory());
    var tmp_6 = this;
    tmp_6.t3h_1 = this.h36(HistoryStyles$summaryGrid$delegate$lambda).b36(this, summaryGrid$factory());
    var tmp_7 = this;
    tmp_7.u3h_1 = this.h36(HistoryStyles$summaryItem$delegate$lambda).b36(this, summaryItem$factory());
    var tmp_8 = this;
    tmp_8.v3h_1 = this.h36(HistoryStyles$summaryLabel$delegate$lambda).b36(this, summaryLabel$factory());
    var tmp_9 = this;
    tmp_9.w3h_1 = this.h36(HistoryStyles$summaryValue$delegate$lambda).b36(this, summaryValue$factory());
  }
  protoOf(HistoryStyles).o3e = function () {
    return this.m3h_1.ie(this, container$factory_2());
  };
  protoOf(HistoryStyles).p3e = function () {
    return this.n3h_1.ie(this, title$factory_2());
  };
  protoOf(HistoryStyles).x3h = function () {
    return this.o3h_1.ie(this, periodSelector$factory_0());
  };
  protoOf(HistoryStyles).y3h = function () {
    return this.p3h_1.ie(this, periodButton$factory_0());
  };
  protoOf(HistoryStyles).z3h = function () {
    return this.q3h_1.ie(this, periodButtonActive$factory_0());
  };
  protoOf(HistoryStyles).a3i = function () {
    return this.r3h_1.ie(this, summaryCard$factory_0());
  };
  protoOf(HistoryStyles).b3i = function () {
    return this.s3h_1.ie(this, summaryTitle$factory_0());
  };
  protoOf(HistoryStyles).c3i = function () {
    return this.t3h_1.ie(this, summaryGrid$factory_0());
  };
  protoOf(HistoryStyles).d3i = function () {
    return this.u3h_1.ie(this, summaryItem$factory_0());
  };
  protoOf(HistoryStyles).e3i = function () {
    return this.v3h_1.ie(this, summaryLabel$factory_0());
  };
  protoOf(HistoryStyles).f3i = function () {
    return this.w3h_1.ie(this, summaryValue$factory_0());
  };
  var HistoryStyles_instance;
  function HistoryStyles_getInstance() {
    if (HistoryStyles_instance == null)
      new HistoryStyles();
    return HistoryStyles_instance;
  }
  function formatDecimal_0(value, decimalPlaces) {
    var multiplier;
    switch (decimalPlaces) {
      case 0:
        multiplier = 1.0;
        break;
      case 1:
        multiplier = 10.0;
        break;
      case 2:
        multiplier = 100.0;
        break;
      default:
        multiplier = 10.0;
        break;
    }
    var rounded = round(value * multiplier) / multiplier;
    var tmp;
    if (decimalPlaces === 0) {
      tmp = numberToInt(rounded).toString();
    } else {
      var intPart = numberToInt(rounded);
      var fracPart = numberToInt((rounded - intPart) * multiplier);
      tmp = '' + intPart + '.' + padStart(fracPart.toString(), decimalPlaces, _Char___init__impl__6a9atx(48));
    }
    return tmp;
  }
  function ComposableLambda$invoke$ref_53($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$HistoryScreenKt$lambda_1$lambda_6bljp2($this$H2, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(420288885, $changed, -1, 'ComposableSingletons$HistoryScreenKt.lambda-1.<anonymous> (HistoryScreen.kt:31)');
    }
    Text('Battery History', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_54($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$HistoryScreenKt$lambda_2$lambda_z580r9($this$H3, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1956962801, $changed, -1, 'ComposableSingletons$HistoryScreenKt.lambda-2.<anonymous> (HistoryScreen.kt:142)');
    }
    Text('Summary Statistics', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_55($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$HistoryScreenKt$lambda_3$lambda_729k5o($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-182524327, $changed, -1, 'ComposableSingletons$HistoryScreenKt.lambda-3.<anonymous> (HistoryScreen.kt:180)');
    }
    Text('Loading history data...', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_56($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$HistoryScreenKt$lambda_4$lambda_lrcwwj($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(766130999, $changed, -1, 'ComposableSingletons$HistoryScreenKt.lambda-4.<anonymous> (HistoryScreen.kt:180)');
    }
    P(null, ComposableSingletons$HistoryScreenKt_getInstance().g3g_1, $composer_0, 48, 1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_57($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$HistoryScreenKt$lambda_5$lambda_kg4o0e($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-400714218, $changed, -1, 'ComposableSingletons$HistoryScreenKt.lambda-5.<anonymous> (HistoryScreen.kt:173)');
    }
    $composer_0.m24(1792167983);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.l26();
    var tmp;
    if (false || it === Companion_getInstance().e1z_1) {
      // Inline function 'ComposableSingletons$HistoryScreenKt.lambda-5.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$HistoryScreenKt$lambda_5$lambda$lambda_eui6rr;
      $composer_0.m26(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.o24();
    Div(tmp0_group, ComposableSingletons$HistoryScreenKt_getInstance().h3g_1, $composer_0, 54, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$HistoryScreenKt$lambda_5$lambda$lambda_eui6rr($this$Div) {
    $this$Div.x32(ComposableSingletons$HistoryScreenKt$lambda_5$lambda$lambda$lambda_vdzomm);
    return Unit_instance;
  }
  function ComposableSingletons$HistoryScreenKt$lambda_5$lambda$lambda$lambda_vdzomm($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$style, 'center');
    gap($this$style, get_cssRem(1));
    padding($this$style, [get_cssRem(3)]);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_58($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$HistoryScreenKt$lambda_6$lambda_8dht1t($this$H3, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(902017525, $changed, -1, 'ComposableSingletons$HistoryScreenKt.lambda-6.<anonymous> (HistoryScreen.kt:196)');
    }
    Text('Error Loading History', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_59($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$HistoryScreenKt$lambda_7$lambda_xtzrv4($this$H3, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1678113818, $changed, -1, 'ComposableSingletons$HistoryScreenKt.lambda-7.<anonymous> (HistoryScreen.kt:212)');
    }
    Text('No History Data', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_60($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$HistoryScreenKt$lambda_8$lambda_50dasx($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(2045851493, $changed, -1, 'ComposableSingletons$HistoryScreenKt.lambda-8.<anonymous> (HistoryScreen.kt:213)');
    }
    Text('Start monitoring your battery to see historical trends.', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_61($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$HistoryScreenKt$lambda_9$lambda_nt969a($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1743106617, $changed, -1, 'ComposableSingletons$HistoryScreenKt.lambda-9.<anonymous> (HistoryScreen.kt:212)');
    }
    H3(null, ComposableSingletons$HistoryScreenKt_getInstance().k3g_1, $composer_0, 48, 1);
    P(null, ComposableSingletons$HistoryScreenKt_getInstance().l3g_1, $composer_0, 48, 1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_62($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$HistoryScreenKt$lambda_10$lambda_con46o($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(236327560, $changed, -1, 'ComposableSingletons$HistoryScreenKt.lambda-10.<anonymous> (HistoryScreen.kt:205)');
    }
    $composer_0.m24(1352889373);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.l26();
    var tmp;
    if (false || it === Companion_getInstance().e1z_1) {
      // Inline function 'ComposableSingletons$HistoryScreenKt.lambda-10.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$HistoryScreenKt$lambda_10$lambda$lambda_i9g4kl;
      $composer_0.m26(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.o24();
    Div(tmp0_group, ComposableSingletons$HistoryScreenKt_getInstance().m3g_1, $composer_0, 54, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$HistoryScreenKt$lambda_10$lambda$lambda_i9g4kl($this$Div) {
    $this$Div.x32(ComposableSingletons$HistoryScreenKt$lambda_10$lambda$lambda$lambda_qsbs5s);
    return Unit_instance;
  }
  function ComposableSingletons$HistoryScreenKt$lambda_10$lambda$lambda$lambda_qsbs5s($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$style, 'center');
    gap($this$style, get_cssRem(1));
    padding($this$style, [get_cssRem(3)]);
    return Unit_instance;
  }
  function ComposableSingletons$HistoryScreenKt() {
    ComposableSingletons$HistoryScreenKt_instance = this;
    var tmp = this;
    tmp.e3g_1 = ComposableLambda$invoke$ref_53(composableLambdaInstance(420288885, false, ComposableSingletons$HistoryScreenKt$lambda_1$lambda_6bljp2));
    var tmp_0 = this;
    tmp_0.f3g_1 = ComposableLambda$invoke$ref_54(composableLambdaInstance(-1956962801, false, ComposableSingletons$HistoryScreenKt$lambda_2$lambda_z580r9));
    var tmp_1 = this;
    tmp_1.g3g_1 = ComposableLambda$invoke$ref_55(composableLambdaInstance(-182524327, false, ComposableSingletons$HistoryScreenKt$lambda_3$lambda_729k5o));
    var tmp_2 = this;
    tmp_2.h3g_1 = ComposableLambda$invoke$ref_56(composableLambdaInstance(766130999, false, ComposableSingletons$HistoryScreenKt$lambda_4$lambda_lrcwwj));
    var tmp_3 = this;
    tmp_3.i3g_1 = ComposableLambda$invoke$ref_57(composableLambdaInstance(-400714218, false, ComposableSingletons$HistoryScreenKt$lambda_5$lambda_kg4o0e));
    var tmp_4 = this;
    tmp_4.j3g_1 = ComposableLambda$invoke$ref_58(composableLambdaInstance(902017525, false, ComposableSingletons$HistoryScreenKt$lambda_6$lambda_8dht1t));
    var tmp_5 = this;
    tmp_5.k3g_1 = ComposableLambda$invoke$ref_59(composableLambdaInstance(-1678113818, false, ComposableSingletons$HistoryScreenKt$lambda_7$lambda_xtzrv4));
    var tmp_6 = this;
    tmp_6.l3g_1 = ComposableLambda$invoke$ref_60(composableLambdaInstance(2045851493, false, ComposableSingletons$HistoryScreenKt$lambda_8$lambda_50dasx));
    var tmp_7 = this;
    tmp_7.m3g_1 = ComposableLambda$invoke$ref_61(composableLambdaInstance(-1743106617, false, ComposableSingletons$HistoryScreenKt$lambda_9$lambda_nt969a));
    var tmp_8 = this;
    tmp_8.n3g_1 = ComposableLambda$invoke$ref_62(composableLambdaInstance(236327560, false, ComposableSingletons$HistoryScreenKt$lambda_10$lambda_con46o));
  }
  var ComposableSingletons$HistoryScreenKt_instance;
  function ComposableSingletons$HistoryScreenKt_getInstance() {
    if (ComposableSingletons$HistoryScreenKt_instance == null)
      new ComposableSingletons$HistoryScreenKt();
    return ComposableSingletons$HistoryScreenKt_instance;
  }
  function HistoryScreen$lambda($state$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('state', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $state$delegate.k1();
  }
  function HistoryScreen$slambda($presenter, resultContinuation) {
    this.o3i_1 = $presenter;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HistoryScreen$slambda).w2b = function ($this$LaunchedEffect, $completion) {
    var tmp = this.w1f($this$LaunchedEffect, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(HistoryScreen$slambda).b9 = function (p1, $completion) {
    return this.w2b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HistoryScreen$slambda).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        switch (tmp) {
          case 0:
            this.g8_1 = 2;
            this.f8_1 = 1;
            suspendResult = this.o3i_1.y3g(TimePeriod_DAY_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(HistoryScreen$slambda).w1f = function ($this$LaunchedEffect, completion) {
    var i = new HistoryScreen$slambda(this.o3i_1, completion);
    i.p3i_1 = $this$LaunchedEffect;
    return i;
  };
  function HistoryScreen$slambda_0($presenter, resultContinuation) {
    var i = new HistoryScreen$slambda($presenter, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.w2b($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function HistoryScreen$lambda_0($this$Div) {
    $this$Div.z32([HistoryStyles_getInstance().o3e()]);
    return Unit_instance;
  }
  function HistoryScreen$lambda$lambda($this$H2) {
    $this$H2.z32([HistoryStyles_getInstance().p3e()]);
    return Unit_instance;
  }
  function HistoryScreen$lambda$lambda$slambda($presenter, $period, resultContinuation) {
    this.y3i_1 = $presenter;
    this.z3i_1 = $period;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HistoryScreen$lambda$lambda$slambda).w2b = function ($this$launch, $completion) {
    var tmp = this.w1f($this$launch, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(HistoryScreen$lambda$lambda$slambda).b9 = function (p1, $completion) {
    return this.w2b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HistoryScreen$lambda$lambda$slambda).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        switch (tmp) {
          case 0:
            this.g8_1 = 2;
            this.f8_1 = 1;
            suspendResult = this.y3i_1.y3g(this.z3i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(HistoryScreen$lambda$lambda$slambda).w1f = function ($this$launch, completion) {
    var i = new HistoryScreen$lambda$lambda$slambda(this.y3i_1, this.z3i_1, completion);
    i.a3j_1 = $this$launch;
    return i;
  };
  function HistoryScreen$lambda$lambda$slambda_0($presenter, $period, resultContinuation) {
    var i = new HistoryScreen$lambda$lambda$slambda($presenter, $period, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.w2b($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function HistoryScreen$lambda$lambda_0($presenter) {
    return function (period) {
      var tmp = CoroutineScope_0(Dispatchers_getInstance().kq_1);
      launch(tmp, VOID, VOID, HistoryScreen$lambda$lambda$slambda_0($presenter, period, null));
      return Unit_instance;
    };
  }
  function HistoryScreen$lambda_1($presenter, $state$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1352146605, $changed, -1, 'HistoryScreen.<anonymous> (HistoryScreen.kt:30)');
      }
      $composer_0.m24(2043100095);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'HistoryScreen.<anonymous>.<anonymous>.<anonymous>' call
        var value = HistoryScreen$lambda$lambda;
        $composer_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      H2(tmp0_group, ComposableSingletons$HistoryScreenKt_getInstance().e3g_1, $composer_0, 54, 0);
      var tmp_1 = HistoryScreen$lambda($state$delegate).a3h_1;
      $composer_0.m24(2043107385);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.f25($presenter);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.l26();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'HistoryScreen.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = HistoryScreen$lambda$lambda_0($presenter);
        $composer_0.m26(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.o24();
      TimePeriodSelector(tmp_1, tmp1_group, $composer_0, 0);
      if (HistoryScreen$lambda($state$delegate).b3h_1) {
        $composer_0.m24(2043114038);
        HistoryLoadingSection($composer_0, 0);
        $composer_0.o24();
      } else if (!(HistoryScreen$lambda($state$delegate).c3h_1 == null)) {
        $composer_0.m24(2043115937);
        HistoryErrorSection(ensureNotNull(HistoryScreen$lambda($state$delegate).c3h_1), $composer_0, 0);
        $composer_0.o24();
      } else if (!(HistoryScreen$lambda($state$delegate).z3g_1 == null)) {
        $composer_0.m24(-1087754873);
        var data = ensureNotNull(HistoryScreen$lambda($state$delegate).z3g_1);
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!data.d3h_1.n()) {
          $composer_0.m24(-1087629726);
          BatteryChart('batteryLevelChart', ChartType_LINE_getInstance(), data.d3h_1, listOf(new ChartDataset('Battery Level (%)', data.e3h_1, 'rgba(76, 175, 80, 0.1)', 'rgb(76, 175, 80)', 2, true)), 'Battery Level Over Time', $composer_0, 24630, 0);
          BatteryChart('voltageChart', ChartType_LINE_getInstance(), data.d3h_1, listOf(new ChartDataset('Voltage (V)', data.f3h_1, 'rgba(33, 150, 243, 0.1)', 'rgb(33, 150, 243)', 2, true)), 'Voltage Over Time', $composer_0, 24630, 0);
          $composer_0.m24(2043175422);
          var tmp$ret$9;
          $l$block_0: {
            // Inline function 'kotlin.collections.any' call
            var this_0 = data.g3h_1;
            var tmp_4;
            if (isInterface(this_0, Collection)) {
              tmp_4 = this_0.n();
            } else {
              tmp_4 = false;
            }
            if (tmp_4) {
              tmp$ret$9 = false;
              break $l$block_0;
            }
            var tmp0_iterator = this_0.i();
            while (tmp0_iterator.j()) {
              var element = tmp0_iterator.k();
              // Inline function 'HistoryScreen.<anonymous>.<anonymous>.<anonymous>' call
              if (element > 0) {
                tmp$ret$9 = true;
                break $l$block_0;
              }
            }
            tmp$ret$9 = false;
          }
          if (tmp$ret$9) {
            BatteryChart('temperatureChart', ChartType_LINE_getInstance(), data.d3h_1, listOf(new ChartDataset('Temperature (\xB0C)', data.g3h_1, 'rgba(255, 152, 0, 0.1)', 'rgb(255, 152, 0)', 2, true)), 'Temperature Over Time', $composer_0, 24630, 0);
          }
          $composer_0.o24();
          StatisticsSummary(data, $composer_0, 0);
          $composer_0.o24();
        } else {
          $composer_0.m24(-1085099103);
          HistoryEmptyStateSection($composer_0, 0);
          $composer_0.o24();
        }
        $composer_0.o24();
      } else {
        $composer_0.m24(2043209977);
        HistoryEmptyStateSection($composer_0, 0);
        $composer_0.o24();
      }
      var tmp_5;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_5 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_63($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function HistoryScreen$lambda_2($$changed) {
    return function ($composer, $force) {
      HistoryScreen($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function TimePeriodSelector$lambda($this$Div) {
    $this$Div.z32([HistoryStyles_getInstance().x3h()]);
    return Unit_instance;
  }
  function TimePeriodSelector$lambda$lambda$lambda($onPeriodChanged, $period) {
    return function (it) {
      $onPeriodChanged($period);
      return Unit_instance;
    };
  }
  function TimePeriodSelector$lambda$lambda($selectedPeriod, $period, $onPeriodChanged) {
    return function ($this$Button) {
      $this$Button.z32([HistoryStyles_getInstance().y3h(), $selectedPeriod.equals($period) ? HistoryStyles_getInstance().z3h() : '']);
      $this$Button.b33(TimePeriodSelector$lambda$lambda$lambda($onPeriodChanged, $period));
      return Unit_instance;
    };
  }
  function TimePeriodSelector$lambda$lambda_0($period) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1172179350, $changed, -1, 'TimePeriodSelector.<anonymous>.<anonymous>.<anonymous> (HistoryScreen.kt:132)');
      }
      Text(getPeriodLabel($period), $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_64($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function TimePeriodSelector$lambda_0($selectedPeriod, $onPeriodChanged) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1691920131, $changed, -1, 'TimePeriodSelector.<anonymous> (HistoryScreen.kt:124)');
      }
      // Inline function 'kotlin.collections.forEach' call
      var indexedObject = values();
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'TimePeriodSelector.<anonymous>.<anonymous>.<anonymous>' call
        $composer_0.m24(1190285092);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!(!!($composer_0.w1v($selectedPeriod) | $composer_0.w1v(element)) | $composer_0.w1v($onPeriodChanged));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.l26();
        var tmp;
        if (invalid || it === Companion_getInstance().e1z_1) {
          // Inline function 'TimePeriodSelector.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = TimePeriodSelector$lambda$lambda($selectedPeriod, element, $onPeriodChanged);
          $composer_0.m26(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        $composer_0.o24();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'TimePeriodSelector.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-1172179350, true, TimePeriodSelector$lambda$lambda_0(element), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_1.w1v(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.l26();
        var tmp_1;
        if (invalid_0 || it_0 === Companion_getInstance().e1z_1) {
          // Inline function 'TimePeriodSelector.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_64(dispatchReceiver);
          $composer_1.m26(value_0);
          tmp_1 = value_0;
        } else {
          tmp_1 = it_0;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Button(tmp0_group, tmp0, $composer_0, 48, 0);
      }
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_65($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function TimePeriodSelector$lambda_1($selectedPeriod, $onPeriodChanged, $$changed) {
    return function ($composer, $force) {
      TimePeriodSelector($selectedPeriod, $onPeriodChanged, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function StatisticsSummary$lambda($this$Div) {
    $this$Div.z32([HistoryStyles_getInstance().a3i()]);
    return Unit_instance;
  }
  function StatisticsSummary$lambda$lambda($this$H3) {
    $this$H3.z32([HistoryStyles_getInstance().b3i()]);
    return Unit_instance;
  }
  function StatisticsSummary$lambda$lambda_0($this$Div) {
    $this$Div.z32([HistoryStyles_getInstance().c3i()]);
    return Unit_instance;
  }
  function StatisticsSummary$lambda$lambda_1($data) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1755805039, $changed, -1, 'StatisticsSummary.<anonymous>.<anonymous> (HistoryScreen.kt:146)');
      }
      SummaryItem('Data Points', '' + $data.d3h_1.l(), $composer_0, 6);
      SummaryItem('Avg Battery', '' + numberToInt(average($data.e3h_1)) + '%', $composer_0, 6);
      SummaryItem('Avg Voltage', formatDecimal_0(average_0($data.f3h_1), 2) + ' V', $composer_0, 6);
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var this_0 = $data.g3h_1;
        var tmp;
        if (isInterface(this_0, Collection)) {
          tmp = this_0.n();
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var tmp0_iterator = this_0.i();
        while (tmp0_iterator.j()) {
          var element = tmp0_iterator.k();
          // Inline function 'StatisticsSummary.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (element > 0) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      if (tmp$ret$0) {
        // Inline function 'kotlin.collections.filter' call
        // Inline function 'kotlin.collections.filterTo' call
        var this_1 = $data.g3h_1;
        var destination = ArrayList_init_$Create$_0();
        var tmp0_iterator_0 = this_1.i();
        while (tmp0_iterator_0.j()) {
          var element_0 = tmp0_iterator_0.k();
          // Inline function 'StatisticsSummary.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (element_0 > 0) {
            destination.d(element_0);
          }
        }
        var avgTemp = average_0(destination);
        SummaryItem('Avg Temp', formatDecimal_0(avgTemp, 1) + ' \xB0C', $composer_0, 6);
      }
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_66($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function StatisticsSummary$lambda_0($data) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1321537008, $changed, -1, 'StatisticsSummary.<anonymous> (HistoryScreen.kt:141)');
      }
      $composer_0.m24(-1400517303);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'StatisticsSummary.<anonymous>.<anonymous>.<anonymous>' call
        var value = StatisticsSummary$lambda$lambda;
        $composer_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      H3(tmp0_group, ComposableSingletons$HistoryScreenKt_getInstance().f3g_1, $composer_0, 54, 0);
      $composer_0.m24(-1400513688);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.l26();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'StatisticsSummary.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = StatisticsSummary$lambda$lambda_0;
        $composer_0.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'StatisticsSummary.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1755805039, true, StatisticsSummary$lambda$lambda_1($data), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.l26();
      var tmp_3;
      if (invalid || it_1 === Companion_getInstance().e1z_1) {
        // Inline function 'StatisticsSummary.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_66(dispatchReceiver);
        $composer_1.m26(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp1_group, tmp0, $composer_0, 54, 0);
      var tmp_5;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_5 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_67($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function StatisticsSummary$lambda_1($data, $$changed) {
    return function ($composer, $force) {
      StatisticsSummary($data, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function SummaryItem$lambda($this$Div) {
    $this$Div.z32([HistoryStyles_getInstance().d3i()]);
    return Unit_instance;
  }
  function SummaryItem$lambda$lambda($this$P) {
    $this$P.z32([HistoryStyles_getInstance().e3i()]);
    return Unit_instance;
  }
  function SummaryItem$lambda$lambda_0($label) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1498537944, $changed, -1, 'SummaryItem.<anonymous>.<anonymous> (HistoryScreen.kt:162)');
      }
      Text($label, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_68($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function SummaryItem$lambda$lambda_1($this$P) {
    $this$P.z32([HistoryStyles_getInstance().f3i()]);
    return Unit_instance;
  }
  function SummaryItem$lambda$lambda_2($value) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1704970017, $changed, -1, 'SummaryItem.<anonymous>.<anonymous> (HistoryScreen.kt:165)');
      }
      Text($value, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_69($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function SummaryItem$lambda_0($label, $value) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1698729206, $changed, -1, 'SummaryItem.<anonymous> (HistoryScreen.kt:161)');
      }
      $composer_0.m24(1232317343);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'SummaryItem.<anonymous>.<anonymous>.<anonymous>' call
        var value = SummaryItem$lambda$lambda;
        $composer_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'SummaryItem.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1498537944, true, SummaryItem$lambda$lambda_0($label), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.l26();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'SummaryItem.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_68(dispatchReceiver);
        $composer_1.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      P(tmp0_group, tmp0, $composer_0, 54, 0);
      $composer_0.m24(1232320383);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.l26();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().e1z_1) {
        // Inline function 'SummaryItem.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = SummaryItem$lambda$lambda_1;
        $composer_0.m26(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'SummaryItem.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver_0 = rememberComposableLambda(-1704970017, true, SummaryItem$lambda$lambda_2($value), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.w1v(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_2.l26();
      var tmp_5;
      if (invalid_0 || it_2 === Companion_getInstance().e1z_1) {
        // Inline function 'SummaryItem.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_69(dispatchReceiver_0);
        $composer_2.m26(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      P(tmp1_group, tmp0_0, $composer_0, 54, 0);
      var tmp_7;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_7 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_70($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function SummaryItem$lambda_1($label, $value, $$changed) {
    return function ($composer, $force) {
      SummaryItem($label, $value, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function HistoryLoadingSection$lambda($this$Div) {
    $this$Div.z32([ChartStyles_getInstance().k3b()]);
    return Unit_instance;
  }
  function HistoryLoadingSection$lambda_0($$changed) {
    return function ($composer, $force) {
      HistoryLoadingSection($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function HistoryErrorSection$lambda($this$Div) {
    $this$Div.z32([ChartStyles_getInstance().k3b()]);
    return Unit_instance;
  }
  function HistoryErrorSection$lambda$lambda($this$Div) {
    $this$Div.x32(HistoryErrorSection$lambda$lambda$lambda);
    return Unit_instance;
  }
  function HistoryErrorSection$lambda$lambda$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$style, 'center');
    gap($this$style, get_cssRem(1));
    padding($this$style, [get_cssRem(3)]);
    backgroundColor($this$style, rgb(255, 245, 245));
    return Unit_instance;
  }
  function HistoryErrorSection$lambda$lambda$lambda_0($error) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(380825174, $changed, -1, 'HistoryErrorSection.<anonymous>.<anonymous>.<anonymous> (HistoryScreen.kt:197)');
      }
      Text($error, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_71($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function HistoryErrorSection$lambda$lambda_0($error) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1112759244, $changed, -1, 'HistoryErrorSection.<anonymous>.<anonymous> (HistoryScreen.kt:196)');
      }
      H3(null, ComposableSingletons$HistoryScreenKt_getInstance().j3g_1, $composer_0, 48, 1);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'HistoryErrorSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(380825174, true, HistoryErrorSection$lambda$lambda$lambda_0($error), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.l26();
      var tmp;
      if (invalid || it === Companion_getInstance().e1z_1) {
        // Inline function 'HistoryErrorSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_71(dispatchReceiver);
        $composer_1.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      P(null, tmp0, $composer_0, 48, 1);
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_72($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function HistoryErrorSection$lambda_0($error) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(120158099, $changed, -1, 'HistoryErrorSection.<anonymous> (HistoryScreen.kt:188)');
      }
      $composer_0.m24(-743059955);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'HistoryErrorSection.<anonymous>.<anonymous>.<anonymous>' call
        var value = HistoryErrorSection$lambda$lambda;
        $composer_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'HistoryErrorSection.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1112759244, true, HistoryErrorSection$lambda$lambda_0($error), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.l26();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'HistoryErrorSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_72(dispatchReceiver);
        $composer_1.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_73($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function HistoryErrorSection$lambda_1($error, $$changed) {
    return function ($composer, $force) {
      HistoryErrorSection($error, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function HistoryEmptyStateSection$lambda($this$Div) {
    $this$Div.z32([ChartStyles_getInstance().k3b()]);
    return Unit_instance;
  }
  function HistoryEmptyStateSection$lambda_0($$changed) {
    return function ($composer, $force) {
      HistoryEmptyStateSection($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function getBatteryHistoryUseCase$factory() {
    return getPropertyCallableRef('getBatteryHistoryUseCase', 1, KProperty1, function (receiver) {
      return _get_getBatteryHistoryUseCase__5qpgpb(receiver);
    }, null);
  }
  function container$factory_1() {
    return getPropertyCallableRef('container', 1, KProperty1, function (receiver) {
      return receiver.o3e();
    }, null);
  }
  function title$factory_1() {
    return getPropertyCallableRef('title', 1, KProperty1, function (receiver) {
      return receiver.p3e();
    }, null);
  }
  function periodSelector$factory() {
    return getPropertyCallableRef('periodSelector', 1, KProperty1, function (receiver) {
      return receiver.x3h();
    }, null);
  }
  function periodButton$factory() {
    return getPropertyCallableRef('periodButton', 1, KProperty1, function (receiver) {
      return receiver.y3h();
    }, null);
  }
  function periodButtonActive$factory() {
    return getPropertyCallableRef('periodButtonActive', 1, KProperty1, function (receiver) {
      return receiver.z3h();
    }, null);
  }
  function summaryCard$factory() {
    return getPropertyCallableRef('summaryCard', 1, KProperty1, function (receiver) {
      return receiver.a3i();
    }, null);
  }
  function summaryTitle$factory() {
    return getPropertyCallableRef('summaryTitle', 1, KProperty1, function (receiver) {
      return receiver.b3i();
    }, null);
  }
  function summaryGrid$factory() {
    return getPropertyCallableRef('summaryGrid', 1, KProperty1, function (receiver) {
      return receiver.c3i();
    }, null);
  }
  function summaryItem$factory() {
    return getPropertyCallableRef('summaryItem', 1, KProperty1, function (receiver) {
      return receiver.d3i();
    }, null);
  }
  function summaryLabel$factory() {
    return getPropertyCallableRef('summaryLabel', 1, KProperty1, function (receiver) {
      return receiver.e3i();
    }, null);
  }
  function summaryValue$factory() {
    return getPropertyCallableRef('summaryValue', 1, KProperty1, function (receiver) {
      return receiver.f3i();
    }, null);
  }
  function container$factory_2() {
    return getPropertyCallableRef('container', 1, KProperty1, function (receiver) {
      return receiver.o3e();
    }, null);
  }
  function title$factory_2() {
    return getPropertyCallableRef('title', 1, KProperty1, function (receiver) {
      return receiver.p3e();
    }, null);
  }
  function periodSelector$factory_0() {
    return getPropertyCallableRef('periodSelector', 1, KProperty1, function (receiver) {
      return receiver.x3h();
    }, null);
  }
  function periodButton$factory_0() {
    return getPropertyCallableRef('periodButton', 1, KProperty1, function (receiver) {
      return receiver.y3h();
    }, null);
  }
  function periodButtonActive$factory_0() {
    return getPropertyCallableRef('periodButtonActive', 1, KProperty1, function (receiver) {
      return receiver.z3h();
    }, null);
  }
  function summaryCard$factory_0() {
    return getPropertyCallableRef('summaryCard', 1, KProperty1, function (receiver) {
      return receiver.a3i();
    }, null);
  }
  function summaryTitle$factory_0() {
    return getPropertyCallableRef('summaryTitle', 1, KProperty1, function (receiver) {
      return receiver.b3i();
    }, null);
  }
  function summaryGrid$factory_0() {
    return getPropertyCallableRef('summaryGrid', 1, KProperty1, function (receiver) {
      return receiver.c3i();
    }, null);
  }
  function summaryItem$factory_0() {
    return getPropertyCallableRef('summaryItem', 1, KProperty1, function (receiver) {
      return receiver.d3i();
    }, null);
  }
  function summaryLabel$factory_0() {
    return getPropertyCallableRef('summaryLabel', 1, KProperty1, function (receiver) {
      return receiver.e3i();
    }, null);
  }
  function summaryValue$factory_0() {
    return getPropertyCallableRef('summaryValue', 1, KProperty1, function (receiver) {
      return receiver.f3i();
    }, null);
  }
  var MonitorPresenter$stable;
  var MonitorState$stable;
  var MonitorStyles$stable;
  function MonitorScreen($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(325003238);
    if (!($changed === 0) || !$composer_0.f24()) {
      if (isTraceInProgress()) {
        traceEventStart(325003238, $changed, -1, 'MonitorScreen (MonitorScreen.kt:16)');
      }
      $composer_0.m24(-275283291);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'MonitorScreen.<anonymous>' call
        var value = new MonitorPresenter();
        this_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      var presenter = tmp0_group;
      var state$delegate = collectAsState(presenter.d3j_1, null, $composer_0, 0, 1);
      $composer_0.m24(-275279823);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      var invalid = $composer_0.f25(presenter);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.l26();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'MonitorScreen.<anonymous>' call
        var value_0 = MonitorScreen$slambda_0(presenter, null);
        this_1.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.o24();
      LaunchedEffect(Unit_instance, tmp1_group, $composer_0, 6);
      $composer_0.m24(-275277486);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      var invalid_0 = $composer_0.f25(presenter);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.l26();
      var tmp_3;
      if (invalid_0 || it_1 === Companion_getInstance().e1z_1) {
        // Inline function 'MonitorScreen.<anonymous>' call
        var value_1 = MonitorScreen$lambda_0(presenter);
        this_2.m26(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.o24();
      DisposableEffect_0(Unit_instance, tmp2_group, $composer_0, 6);
      $composer_0.m24(-275274518);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_3 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = this_3.l26();
      var tmp_5;
      if (false || it_2 === Companion_getInstance().e1z_1) {
        // Inline function 'MonitorScreen.<anonymous>' call
        var value_2 = MonitorScreen$lambda_1;
        this_3.m26(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'MonitorScreen.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1195558841, true, MonitorScreen$lambda_2(state$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_1.l26();
      var tmp_7;
      if (invalid_1 || it_3 === Companion_getInstance().e1z_1) {
        // Inline function 'MonitorScreen.<anonymous>.<anonymous>' call
        var value_3 = ComposableLambda$invoke$ref_86(dispatchReceiver);
        $composer_1.m26(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = it_3;
      }
      var tmp_8 = tmp_7;
      var tmp0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp3_group, tmp0, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v1y();
    }
    var tmp4_safe_receiver = $composer_0.u25();
    if (tmp4_safe_receiver == null)
      null;
    else {
      tmp4_safe_receiver.g2c(MonitorScreen$lambda_3($changed));
    }
  }
  function BatteryCard(reading, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(28445710);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f25(reading) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.f24()) {
      if (isTraceInProgress()) {
        traceEventStart(28445710, $dirty, -1, 'BatteryCard (MonitorScreen.kt:55)');
      }
      $composer_0.m24(-889649961);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'BatteryCard.<anonymous>' call
        var value = BatteryCard$lambda;
        this_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'BatteryCard.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(438145775, true, BatteryCard$lambda_0(reading), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.l26();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'BatteryCard.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_92(dispatchReceiver);
        $composer_1.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
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
      tmp1_safe_receiver.g2c(BatteryCard$lambda_1(reading, $changed));
    }
  }
  function BatteryIcon(percentage, state, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(2140103239);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.h25(percentage) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f25(state) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.f24()) {
      if (isTraceInProgress()) {
        traceEventStart(2140103239, $dirty, -1, 'BatteryIcon (MonitorScreen.kt:84)');
      }
      var batteryColor = percentage >= 80 ? 'rgb(76, 175, 80)' : percentage >= 50 ? 'rgb(255, 193, 7)' : percentage >= 20 ? 'rgb(255, 152, 0)' : 'rgb(244, 67, 54)';
      $composer_0.m24(-716066899);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = $composer_0.w1v(batteryColor);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l26();
      var tmp;
      if (invalid || it === Companion_getInstance().e1z_1) {
        // Inline function 'BatteryIcon.<anonymous>' call
        var value = BatteryIcon$lambda(batteryColor);
        this_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'BatteryIcon.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(724874472, true, BatteryIcon$lambda_0(state), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.l26();
      var tmp_1;
      if (invalid_0 || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'BatteryIcon.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_93(dispatchReceiver);
        $composer_1.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 48, 0);
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
      tmp1_safe_receiver.g2c(BatteryIcon$lambda_1(percentage, state, $changed));
    }
  }
  function DetailItem(label, value, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(-1755856308);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1v(label) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.w1v(value) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.f24()) {
      if (isTraceInProgress()) {
        traceEventStart(-1755856308, $dirty, -1, 'DetailItem (MonitorScreen.kt:110)');
      }
      $composer_0.m24(406958089);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'DetailItem.<anonymous>' call
        var value_0 = DetailItem$lambda;
        this_0.m26(value_0);
        tmp = value_0;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'DetailItem.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1426689389, true, DetailItem$lambda_0(label, value), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.l26();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'DetailItem.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_96(dispatchReceiver);
        $composer_1.m26(value_1);
        tmp_1 = value_1;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
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
      tmp1_safe_receiver.g2c(DetailItem$lambda_1(label, value, $changed));
    }
  }
  function LoadingCard($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(119278752);
    if (!($changed === 0) || !$composer_0.f24()) {
      if (isTraceInProgress()) {
        traceEventStart(119278752, $changed, -1, 'LoadingCard (MonitorScreen.kt:122)');
      }
      $composer_0.m24(798740742);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'LoadingCard.<anonymous>' call
        var value = LoadingCard$lambda;
        this_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      Div(tmp0_group, ComposableSingletons$MonitorScreenKt_getInstance().h3j_1, $composer_0, 54, 0);
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
      tmp1_safe_receiver.g2c(LoadingCard$lambda_0($changed));
    }
  }
  function ErrorCard(error, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(-907855675);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1v(error) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.f24()) {
      if (isTraceInProgress()) {
        traceEventStart(-907855675, $dirty, -1, 'ErrorCard (MonitorScreen.kt:132)');
      }
      $composer_0.m24(31299504);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'ErrorCard.<anonymous>' call
        var value = ErrorCard$lambda;
        this_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ErrorCard.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1879132954, true, ErrorCard$lambda_0(error), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.l26();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'ErrorCard.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_98(dispatchReceiver);
        $composer_1.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
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
      tmp1_safe_receiver.g2c(ErrorCard$lambda_1(error, $changed));
    }
  }
  function InstructionsCard($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(102534907);
    if (!($changed === 0) || !$composer_0.f24()) {
      if (isTraceInProgress()) {
        traceEventStart(102534907, $changed, -1, 'InstructionsCard (MonitorScreen.kt:147)');
      }
      $composer_0.m24(610257044);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'InstructionsCard.<anonymous>' call
        var value = InstructionsCard$lambda;
        this_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      Div(tmp0_group, ComposableSingletons$MonitorScreenKt_getInstance().q3j_1, $composer_0, 54, 0);
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
      tmp1_safe_receiver.g2c(InstructionsCard$lambda_0($changed));
    }
  }
  function MonitorPresenter$startMonitoring$slambda$slambda(this$0, resultContinuation) {
    this.z3j_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MonitorPresenter$startMonitoring$slambda$slambda).v1k = function ($this$catch, e, $completion) {
    var tmp = this.w1k($this$catch, e, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(MonitorPresenter$startMonitoring$slambda$slambda).x1k = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.v1k(tmp, p2 instanceof Error ? p2 : THROW_CCE(), $completion);
  };
  protoOf(MonitorPresenter$startMonitoring$slambda$slambda).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        if (tmp === 0) {
          this.g8_1 = 1;
          var tmp0_elvis_lhs = this.b3k_1.message;
          this.z3j_1.c3j_1.lt(new MonitorState(VOID, tmp0_elvis_lhs == null ? 'Unknown error occurred' : tmp0_elvis_lhs));
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.i8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(MonitorPresenter$startMonitoring$slambda$slambda).w1k = function ($this$catch, e, completion) {
    var i = new MonitorPresenter$startMonitoring$slambda$slambda(this.z3j_1, completion);
    i.a3k_1 = $this$catch;
    i.b3k_1 = e;
    return i;
  };
  function MonitorPresenter$startMonitoring$slambda$slambda_0(this$0, resultContinuation) {
    var i = new MonitorPresenter$startMonitoring$slambda$slambda(this$0, resultContinuation);
    var l = function ($this$catch, e, $completion) {
      return i.v1k($this$catch, e, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function MonitorPresenter$startMonitoring$slambda$slambda_1(this$0, resultContinuation) {
    this.k3k_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MonitorPresenter$startMonitoring$slambda$slambda_1).h1k = function (reading, $completion) {
    var tmp = this.i1k(reading, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(MonitorPresenter$startMonitoring$slambda$slambda_1).b9 = function (p1, $completion) {
    return this.h1k(p1 instanceof BatteryReading ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MonitorPresenter$startMonitoring$slambda$slambda_1).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        if (tmp === 0) {
          this.g8_1 = 1;
          this.k3k_1.c3j_1.lt(new MonitorState(this.l3k_1));
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.i8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(MonitorPresenter$startMonitoring$slambda$slambda_1).i1k = function (reading, completion) {
    var i = new MonitorPresenter$startMonitoring$slambda$slambda_1(this.k3k_1, completion);
    i.l3k_1 = reading;
    return i;
  };
  function MonitorPresenter$startMonitoring$slambda$slambda_2(this$0, resultContinuation) {
    var i = new MonitorPresenter$startMonitoring$slambda$slambda_1(this$0, resultContinuation);
    var l = function (reading, $completion) {
      return i.h1k(reading, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _get_monitorUseCase__16epyq($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.b3j_1;
    monitorUseCase$factory();
    return this_0.k1();
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.m3k_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).or = function (value, $completion) {
    return this.m3k_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).q2 = function () {
    return this.m3k_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).hashCode = function () {
    return hashCode(this.q2());
  };
  function MonitorPresenter$monitorUseCase$delegate$lambda($this, $qualifier, $parameters) {
    return function () {
      // Inline function 'org.koin.core.component.get' call
      var this_0 = $this;
      var qualifier = $qualifier;
      var parameters = $parameters;
      var tmp;
      if (isInterface(this_0, KoinScopeComponent)) {
        // Inline function 'org.koin.core.scope.Scope.get' call
        tmp = this_0.d1a().v1c(getKClass(MonitorBatteryUseCase), qualifier, parameters);
      } else {
        // Inline function 'org.koin.core.Koin.get' call
        // Inline function 'org.koin.core.scope.Scope.get' call
        tmp = this_0.b1a().b19_1.o19_1.v1c(getKClass(MonitorBatteryUseCase), qualifier, parameters);
      }
      return tmp;
    };
  }
  function MonitorPresenter$startMonitoring$slambda(this$0, resultContinuation) {
    this.v3k_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MonitorPresenter$startMonitoring$slambda).w2b = function ($this$launch, $completion) {
    var tmp = this.w1f($this$launch, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(MonitorPresenter$startMonitoring$slambda).b9 = function (p1, $completion) {
    return this.w2b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MonitorPresenter$startMonitoring$slambda).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        switch (tmp) {
          case 0:
            this.g8_1 = 2;
            this.f8_1 = 1;
            var tmp_0 = _get_monitorUseCase__16epyq(this.v3k_1).y1k();
            var tmp_1 = catch_0(tmp_0, MonitorPresenter$startMonitoring$slambda$slambda_0(this.v3k_1, null));
            var tmp_2 = MonitorPresenter$startMonitoring$slambda$slambda_2(this.v3k_1, null);
            suspendResult = tmp_1.xq(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_2), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(MonitorPresenter$startMonitoring$slambda).w1f = function ($this$launch, completion) {
    var i = new MonitorPresenter$startMonitoring$slambda(this.v3k_1, completion);
    i.w3k_1 = $this$launch;
    return i;
  };
  function MonitorPresenter$startMonitoring$slambda_0(this$0, resultContinuation) {
    var i = new MonitorPresenter$startMonitoring$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.w2b($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MonitorPresenter() {
    var tmp = this;
    // Inline function 'org.koin.core.component.inject' call
    var mode = KoinPlatformTools_instance.y1c();
    tmp.b3j_1 = lazy(mode, MonitorPresenter$monitorUseCase$delegate$lambda(this, null, null));
    this.c3j_1 = MutableStateFlow(new MonitorState());
    this.d3j_1 = this.c3j_1;
    this.e3j_1 = null;
  }
  protoOf(MonitorPresenter).x3k = function () {
    var tmp = this;
    var tmp_0 = CoroutineScope_0(Dispatchers_getInstance().kq_1);
    tmp.e3j_1 = launch(tmp_0, VOID, VOID, MonitorPresenter$startMonitoring$slambda_0(this, null));
  };
  protoOf(MonitorPresenter).y3k = function () {
    var tmp0_safe_receiver = this.e3j_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.vi();
    }
  };
  function MonitorState(batteryReading, error) {
    batteryReading = batteryReading === VOID ? null : batteryReading;
    error = error === VOID ? null : error;
    this.z3k_1 = batteryReading;
    this.a3l_1 = error;
  }
  protoOf(MonitorState).toString = function () {
    return 'MonitorState(batteryReading=' + toString_0(this.z3k_1) + ', error=' + this.a3l_1 + ')';
  };
  protoOf(MonitorState).hashCode = function () {
    var result = this.z3k_1 == null ? 0 : this.z3k_1.hashCode();
    result = imul(result, 31) + (this.a3l_1 == null ? 0 : getStringHashCode(this.a3l_1)) | 0;
    return result;
  };
  protoOf(MonitorState).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MonitorState))
      return false;
    var tmp0_other_with_cast = other instanceof MonitorState ? other : THROW_CCE();
    if (!equals(this.z3k_1, tmp0_other_with_cast.z3k_1))
      return false;
    if (!(this.a3l_1 == tmp0_other_with_cast.a3l_1))
      return false;
    return true;
  };
  function getBatteryStateText(state) {
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
            tmp = 'Not Charging';
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
  function MonitorStyles$container$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    gap($this$style, get_cssRem(1.5));
    return Unit_instance;
  }
  function MonitorStyles$title$delegate$lambda($this$style) {
    fontSize($this$style, get_cssRem(2));
    fontWeight($this$style, 600);
    color($this$style, rgb(33, 33, 33));
    margin($this$style, [get_px(0), get_px(0), get_cssRem(1)]);
    return Unit_instance;
  }
  function MonitorStyles$card$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Color.white' call
    var tmp$ret$0 = Color('white');
    backgroundColor($this$style, tmp$ret$0);
    borderRadius($this$style, get_px(12));
    padding($this$style, [get_cssRem(2)]);
    $this$style.i34('box-shadow', '0 2px 8px rgba(0,0,0,0.1)');
    return Unit_instance;
  }
  function MonitorStyles$batteryCard$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$style, 'center');
    gap($this$style, get_cssRem(1.5));
    return Unit_instance;
  }
  function MonitorStyles$batteryIcon$delegate$lambda($this$style) {
    return Unit_instance;
  }
  function MonitorStyles$batteryLevel$delegate$lambda($this$style) {
    textAlign($this$style, 'center');
    return Unit_instance;
  }
  function MonitorStyles$levelNumber$delegate$lambda($this$style) {
    fontSize($this$style, get_cssRem(3));
    fontWeight($this$style, 700);
    margin($this$style, [get_px(0)]);
    color($this$style, rgb(27, 94, 32));
    return Unit_instance;
  }
  function MonitorStyles$levelLabel$delegate$lambda($this$style) {
    fontSize($this$style, get_cssRem(1.25));
    color($this$style, rgb(100, 100, 100));
    margin($this$style, [get_cssRem(0.5), get_px(0), get_px(0)]);
    return Unit_instance;
  }
  function MonitorStyles$detailsGrid$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'grid');
    $this$style.i34('grid-template-columns', 'repeat(auto-fit, minmax(150px, 1fr))');
    gap($this$style, get_cssRem(1));
    width($this$style, get_percent(100));
    marginTop($this$style, get_cssRem(1));
    return Unit_instance;
  }
  function MonitorStyles$detailItem$delegate$lambda($this$style) {
    textAlign($this$style, 'center');
    padding($this$style, [get_cssRem(1)]);
    backgroundColor($this$style, rgb(245, 245, 245));
    borderRadius($this$style, get_px(8));
    return Unit_instance;
  }
  function MonitorStyles$detailLabel$delegate$lambda($this$style) {
    fontSize($this$style, get_cssRem(0.875));
    color($this$style, rgb(100, 100, 100));
    margin($this$style, [get_px(0), get_px(0), get_cssRem(0.5)]);
    return Unit_instance;
  }
  function MonitorStyles$detailValue$delegate$lambda($this$style) {
    fontSize($this$style, get_cssRem(1.125));
    fontWeight($this$style, 600);
    color($this$style, rgb(33, 33, 33));
    margin($this$style, [get_px(0)]);
    return Unit_instance;
  }
  function MonitorStyles$loadingCard$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$style, 'center');
    gap($this$style, get_cssRem(1));
    padding($this$style, [get_cssRem(3)]);
    return Unit_instance;
  }
  function MonitorStyles$spinner$delegate$lambda($this$style) {
    width($this$style, get_px(40));
    height($this$style, get_px(40));
    var tmp = get_px(4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    border($this$style, tmp, 'solid', rgb(27, 94, 32));
    $this$style.i34('border-top-color', 'transparent');
    borderRadius($this$style, get_percent(50));
    $this$style.i34('animation', 'spin 1s linear infinite');
    return Unit_instance;
  }
  function MonitorStyles$loadingText$delegate$lambda($this$style) {
    fontSize($this$style, get_cssRem(1));
    color($this$style, rgb(100, 100, 100));
    margin($this$style, [get_px(0)]);
    return Unit_instance;
  }
  function MonitorStyles$errorCard$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$style, 'center');
    gap($this$style, get_cssRem(1));
    padding($this$style, [get_cssRem(3)]);
    backgroundColor($this$style, rgb(255, 245, 245));
    return Unit_instance;
  }
  function MonitorStyles$errorIcon$delegate$lambda($this$style) {
    fontSize($this$style, get_cssRem(3));
    return Unit_instance;
  }
  function MonitorStyles$errorTitle$delegate$lambda($this$style) {
    fontSize($this$style, get_cssRem(1.5));
    fontWeight($this$style, 600);
    color($this$style, rgb(198, 40, 40));
    margin($this$style, [get_px(0)]);
    return Unit_instance;
  }
  function MonitorStyles$errorMessage$delegate$lambda($this$style) {
    fontSize($this$style, get_cssRem(1));
    color($this$style, rgb(100, 100, 100));
    textAlign($this$style, 'center');
    margin($this$style, [get_px(0)]);
    return Unit_instance;
  }
  function MonitorStyles$instructionsCard$delegate$lambda($this$style) {
    marginTop($this$style, get_cssRem(1));
    backgroundColor($this$style, rgb(232, 245, 233));
    return Unit_instance;
  }
  function MonitorStyles$instructionsTitle$delegate$lambda($this$style) {
    fontSize($this$style, get_cssRem(1.25));
    fontWeight($this$style, 600);
    color($this$style, rgb(27, 94, 32));
    margin($this$style, [get_px(0), get_px(0), get_cssRem(1)]);
    return Unit_instance;
  }
  function MonitorStyles$instructionsList$delegate$lambda($this$style) {
    margin($this$style, [get_px(0)]);
    paddingLeft($this$style, get_cssRem(1.5));
    $this$style.i34('line-height', '1.8');
    color($this$style, rgb(60, 60, 60));
    return Unit_instance;
  }
  function MonitorStyles() {
    MonitorStyles_instance = this;
    StyleSheet_init_$Init$(VOID, VOID, this);
    var tmp = this;
    tmp.g3l_1 = this.h36(MonitorStyles$container$delegate$lambda).b36(this, container$factory_3());
    var tmp_0 = this;
    tmp_0.h3l_1 = this.h36(MonitorStyles$title$delegate$lambda).b36(this, title$factory_3());
    var tmp_1 = this;
    tmp_1.i3l_1 = this.h36(MonitorStyles$card$delegate$lambda).b36(this, card$factory_1());
    var tmp_2 = this;
    tmp_2.j3l_1 = this.h36(MonitorStyles$batteryCard$delegate$lambda).b36(this, batteryCard$factory());
    var tmp_3 = this;
    tmp_3.k3l_1 = this.h36(MonitorStyles$batteryIcon$delegate$lambda).b36(this, batteryIcon$factory());
    var tmp_4 = this;
    tmp_4.l3l_1 = this.h36(MonitorStyles$batteryLevel$delegate$lambda).b36(this, batteryLevel$factory());
    var tmp_5 = this;
    tmp_5.m3l_1 = this.h36(MonitorStyles$levelNumber$delegate$lambda).b36(this, levelNumber$factory());
    var tmp_6 = this;
    tmp_6.n3l_1 = this.h36(MonitorStyles$levelLabel$delegate$lambda).b36(this, levelLabel$factory());
    var tmp_7 = this;
    tmp_7.o3l_1 = this.h36(MonitorStyles$detailsGrid$delegate$lambda).b36(this, detailsGrid$factory());
    var tmp_8 = this;
    tmp_8.p3l_1 = this.h36(MonitorStyles$detailItem$delegate$lambda).b36(this, detailItem$factory());
    var tmp_9 = this;
    tmp_9.q3l_1 = this.h36(MonitorStyles$detailLabel$delegate$lambda).b36(this, detailLabel$factory());
    var tmp_10 = this;
    tmp_10.r3l_1 = this.h36(MonitorStyles$detailValue$delegate$lambda).b36(this, detailValue$factory());
    var tmp_11 = this;
    tmp_11.s3l_1 = this.h36(MonitorStyles$loadingCard$delegate$lambda).b36(this, loadingCard$factory());
    var tmp_12 = this;
    tmp_12.t3l_1 = this.h36(MonitorStyles$spinner$delegate$lambda).b36(this, spinner$factory_1());
    var tmp_13 = this;
    tmp_13.u3l_1 = this.h36(MonitorStyles$loadingText$delegate$lambda).b36(this, loadingText$factory());
    var tmp_14 = this;
    tmp_14.v3l_1 = this.h36(MonitorStyles$errorCard$delegate$lambda).b36(this, errorCard$factory_1());
    var tmp_15 = this;
    tmp_15.w3l_1 = this.h36(MonitorStyles$errorIcon$delegate$lambda).b36(this, errorIcon$factory_1());
    var tmp_16 = this;
    tmp_16.x3l_1 = this.h36(MonitorStyles$errorTitle$delegate$lambda).b36(this, errorTitle$factory());
    var tmp_17 = this;
    tmp_17.y3l_1 = this.h36(MonitorStyles$errorMessage$delegate$lambda).b36(this, errorMessage$factory());
    var tmp_18 = this;
    tmp_18.z3l_1 = this.h36(MonitorStyles$instructionsCard$delegate$lambda).b36(this, instructionsCard$factory());
    var tmp_19 = this;
    tmp_19.a3m_1 = this.h36(MonitorStyles$instructionsTitle$delegate$lambda).b36(this, instructionsTitle$factory());
    var tmp_20 = this;
    tmp_20.b3m_1 = this.h36(MonitorStyles$instructionsList$delegate$lambda).b36(this, instructionsList$factory());
  }
  protoOf(MonitorStyles).o3e = function () {
    return this.g3l_1.ie(this, container$factory_4());
  };
  protoOf(MonitorStyles).p3e = function () {
    return this.h3l_1.ie(this, title$factory_4());
  };
  protoOf(MonitorStyles).q3e = function () {
    return this.i3l_1.ie(this, card$factory_2());
  };
  protoOf(MonitorStyles).c3m = function () {
    return this.j3l_1.ie(this, batteryCard$factory_0());
  };
  protoOf(MonitorStyles).d3m = function () {
    return this.k3l_1.ie(this, batteryIcon$factory_0());
  };
  protoOf(MonitorStyles).e3m = function () {
    return this.l3l_1.ie(this, batteryLevel$factory_0());
  };
  protoOf(MonitorStyles).f3m = function () {
    return this.m3l_1.ie(this, levelNumber$factory_0());
  };
  protoOf(MonitorStyles).g3m = function () {
    return this.n3l_1.ie(this, levelLabel$factory_0());
  };
  protoOf(MonitorStyles).h3m = function () {
    return this.o3l_1.ie(this, detailsGrid$factory_0());
  };
  protoOf(MonitorStyles).i3m = function () {
    return this.p3l_1.ie(this, detailItem$factory_0());
  };
  protoOf(MonitorStyles).j3m = function () {
    return this.q3l_1.ie(this, detailLabel$factory_0());
  };
  protoOf(MonitorStyles).k3m = function () {
    return this.r3l_1.ie(this, detailValue$factory_0());
  };
  protoOf(MonitorStyles).l3m = function () {
    return this.s3l_1.ie(this, loadingCard$factory_0());
  };
  protoOf(MonitorStyles).m3f = function () {
    return this.t3l_1.ie(this, spinner$factory_2());
  };
  protoOf(MonitorStyles).m3m = function () {
    return this.u3l_1.ie(this, loadingText$factory_0());
  };
  protoOf(MonitorStyles).n3f = function () {
    return this.v3l_1.ie(this, errorCard$factory_2());
  };
  protoOf(MonitorStyles).o3f = function () {
    return this.w3l_1.ie(this, errorIcon$factory_2());
  };
  protoOf(MonitorStyles).n3m = function () {
    return this.x3l_1.ie(this, errorTitle$factory_0());
  };
  protoOf(MonitorStyles).o3m = function () {
    return this.y3l_1.ie(this, errorMessage$factory_0());
  };
  protoOf(MonitorStyles).p3m = function () {
    return this.z3l_1.ie(this, instructionsCard$factory_0());
  };
  protoOf(MonitorStyles).q3m = function () {
    return this.a3m_1.ie(this, instructionsTitle$factory_0());
  };
  protoOf(MonitorStyles).r3m = function () {
    return this.b3m_1.ie(this, instructionsList$factory_0());
  };
  var MonitorStyles_instance;
  function MonitorStyles_getInstance() {
    if (MonitorStyles_instance == null)
      new MonitorStyles();
    return MonitorStyles_instance;
  }
  function ComposableLambda$invoke$ref_74($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$MonitorScreenKt$lambda_1$lambda_b80l6s($this$H2, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(576876649, $changed, -1, 'ComposableSingletons$MonitorScreenKt.lambda-1.<anonymous> (MonitorScreen.kt:32)');
    }
    Text('Battery Monitor', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_75($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$MonitorScreenKt$lambda_2$lambda_hllvvf($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-314762397, $changed, -1, 'ComposableSingletons$MonitorScreenKt.lambda-2.<anonymous> (MonitorScreen.kt:126)');
    }
    Text('Initializing battery monitoring...', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_76($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$MonitorScreenKt$lambda_3$lambda_olvp1i($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-137051839, $changed, -1, 'ComposableSingletons$MonitorScreenKt.lambda-3.<anonymous> (MonitorScreen.kt:124)');
    }
    $composer_0.m24(1642054140);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.l26();
    var tmp;
    if (false || it === Companion_getInstance().e1z_1) {
      // Inline function 'ComposableSingletons$MonitorScreenKt.lambda-3.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$MonitorScreenKt$lambda_3$lambda$lambda_hbtuj3;
      $composer_0.m26(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.o24();
    Div(tmp0_group, null, $composer_0, 6, 2);
    $composer_0.m24(1642055872);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.l26();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().e1z_1) {
      // Inline function 'ComposableSingletons$MonitorScreenKt.lambda-3.<anonymous>.<anonymous>' call
      var value_0 = ComposableSingletons$MonitorScreenKt$lambda_3$lambda$lambda_hbtuj3_0;
      $composer_0.m26(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.o24();
    P(tmp1_group, ComposableSingletons$MonitorScreenKt_getInstance().g3j_1, $composer_0, 54, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$MonitorScreenKt$lambda_3$lambda$lambda_hbtuj3($this$Div) {
    $this$Div.z32([MonitorStyles_getInstance().m3f()]);
    return Unit_instance;
  }
  function ComposableSingletons$MonitorScreenKt$lambda_3$lambda$lambda_hbtuj3_0($this$P) {
    $this$P.z32([MonitorStyles_getInstance().m3m()]);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_77($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$MonitorScreenKt$lambda_4$lambda_47qs0p($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(280102599, $changed, -1, 'ComposableSingletons$MonitorScreenKt.lambda-4.<anonymous> (MonitorScreen.kt:135)');
    }
    Text('\u26A0\uFE0F', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_78($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$MonitorScreenKt$lambda_5$lambda_x1d92w($this$H3, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1706132007, $changed, -1, 'ComposableSingletons$MonitorScreenKt.lambda-5.<anonymous> (MonitorScreen.kt:138)');
    }
    Text('Error', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_79($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$MonitorScreenKt$lambda_6$lambda_964bu1($this$H3, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-468225575, $changed, -1, 'ComposableSingletons$MonitorScreenKt.lambda-6.<anonymous> (MonitorScreen.kt:150)');
    }
    Text('How to Use', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_80($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$MonitorScreenKt$lambda_7$lambda_jni586($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(890073780, $changed, -1, 'ComposableSingletons$MonitorScreenKt.lambda-7.<anonymous> (MonitorScreen.kt:153)');
    }
    Text('The Battery Status API provides basic battery information', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_81($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$MonitorScreenKt$lambda_8$lambda_mjzfor($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1854985059, $changed, -1, 'ComposableSingletons$MonitorScreenKt.lambda-8.<anonymous> (MonitorScreen.kt:154)');
    }
    Text('Monitoring updates every 30 seconds', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_82($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$MonitorScreenKt$lambda_9$lambda_69n1dg($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(2046983292, $changed, -1, 'ComposableSingletons$MonitorScreenKt.lambda-9.<anonymous> (MonitorScreen.kt:155)');
    }
    Text('Temperature data may not be available on all browsers', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_83($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$MonitorScreenKt$lambda_10$lambda_bo747e($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1653984347, $changed, -1, 'ComposableSingletons$MonitorScreenKt.lambda-10.<anonymous> (MonitorScreen.kt:156)');
    }
    Text('This works best on laptops and mobile devices', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_84($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$MonitorScreenKt$lambda_11$lambda_ujagpj($this$Ul, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1404580187, $changed, -1, 'ComposableSingletons$MonitorScreenKt.lambda-11.<anonymous> (MonitorScreen.kt:153)');
    }
    Li(null, ComposableSingletons$MonitorScreenKt_getInstance().l3j_1, $composer_0, 48, 1);
    Li(null, ComposableSingletons$MonitorScreenKt_getInstance().m3j_1, $composer_0, 48, 1);
    Li(null, ComposableSingletons$MonitorScreenKt_getInstance().n3j_1, $composer_0, 48, 1);
    Li(null, ComposableSingletons$MonitorScreenKt_getInstance().o3j_1, $composer_0, 48, 1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_85($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$MonitorScreenKt$lambda_12$lambda_1pnznc($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(57710330, $changed, -1, 'ComposableSingletons$MonitorScreenKt.lambda-12.<anonymous> (MonitorScreen.kt:149)');
    }
    $composer_0.m24(-1304089532);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.l26();
    var tmp;
    if (false || it === Companion_getInstance().e1z_1) {
      // Inline function 'ComposableSingletons$MonitorScreenKt.lambda-12.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$MonitorScreenKt$lambda_12$lambda$lambda_8ttkbn;
      $composer_0.m26(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.o24();
    H3(tmp0_group, ComposableSingletons$MonitorScreenKt_getInstance().k3j_1, $composer_0, 54, 0);
    $composer_0.m24(-1304086077);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.l26();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().e1z_1) {
      // Inline function 'ComposableSingletons$MonitorScreenKt.lambda-12.<anonymous>.<anonymous>' call
      var value_0 = ComposableSingletons$MonitorScreenKt$lambda_12$lambda$lambda_8ttkbn_0;
      $composer_0.m26(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.o24();
    Ul(tmp1_group, ComposableSingletons$MonitorScreenKt_getInstance().p3j_1, $composer_0, 54, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$MonitorScreenKt$lambda_12$lambda$lambda_8ttkbn($this$H3) {
    $this$H3.z32([MonitorStyles_getInstance().q3m()]);
    return Unit_instance;
  }
  function ComposableSingletons$MonitorScreenKt$lambda_12$lambda$lambda_8ttkbn_0($this$Ul) {
    $this$Ul.z32([MonitorStyles_getInstance().r3m()]);
    return Unit_instance;
  }
  function ComposableSingletons$MonitorScreenKt() {
    ComposableSingletons$MonitorScreenKt_instance = this;
    var tmp = this;
    tmp.f3j_1 = ComposableLambda$invoke$ref_74(composableLambdaInstance(576876649, false, ComposableSingletons$MonitorScreenKt$lambda_1$lambda_b80l6s));
    var tmp_0 = this;
    tmp_0.g3j_1 = ComposableLambda$invoke$ref_75(composableLambdaInstance(-314762397, false, ComposableSingletons$MonitorScreenKt$lambda_2$lambda_hllvvf));
    var tmp_1 = this;
    tmp_1.h3j_1 = ComposableLambda$invoke$ref_76(composableLambdaInstance(-137051839, false, ComposableSingletons$MonitorScreenKt$lambda_3$lambda_olvp1i));
    var tmp_2 = this;
    tmp_2.i3j_1 = ComposableLambda$invoke$ref_77(composableLambdaInstance(280102599, false, ComposableSingletons$MonitorScreenKt$lambda_4$lambda_47qs0p));
    var tmp_3 = this;
    tmp_3.j3j_1 = ComposableLambda$invoke$ref_78(composableLambdaInstance(1706132007, false, ComposableSingletons$MonitorScreenKt$lambda_5$lambda_x1d92w));
    var tmp_4 = this;
    tmp_4.k3j_1 = ComposableLambda$invoke$ref_79(composableLambdaInstance(-468225575, false, ComposableSingletons$MonitorScreenKt$lambda_6$lambda_964bu1));
    var tmp_5 = this;
    tmp_5.l3j_1 = ComposableLambda$invoke$ref_80(composableLambdaInstance(890073780, false, ComposableSingletons$MonitorScreenKt$lambda_7$lambda_jni586));
    var tmp_6 = this;
    tmp_6.m3j_1 = ComposableLambda$invoke$ref_81(composableLambdaInstance(-1854985059, false, ComposableSingletons$MonitorScreenKt$lambda_8$lambda_mjzfor));
    var tmp_7 = this;
    tmp_7.n3j_1 = ComposableLambda$invoke$ref_82(composableLambdaInstance(2046983292, false, ComposableSingletons$MonitorScreenKt$lambda_9$lambda_69n1dg));
    var tmp_8 = this;
    tmp_8.o3j_1 = ComposableLambda$invoke$ref_83(composableLambdaInstance(1653984347, false, ComposableSingletons$MonitorScreenKt$lambda_10$lambda_bo747e));
    var tmp_9 = this;
    tmp_9.p3j_1 = ComposableLambda$invoke$ref_84(composableLambdaInstance(-1404580187, false, ComposableSingletons$MonitorScreenKt$lambda_11$lambda_ujagpj));
    var tmp_10 = this;
    tmp_10.q3j_1 = ComposableLambda$invoke$ref_85(composableLambdaInstance(57710330, false, ComposableSingletons$MonitorScreenKt$lambda_12$lambda_1pnznc));
  }
  var ComposableSingletons$MonitorScreenKt_instance;
  function ComposableSingletons$MonitorScreenKt_getInstance() {
    if (ComposableSingletons$MonitorScreenKt_instance == null)
      new ComposableSingletons$MonitorScreenKt();
    return ComposableSingletons$MonitorScreenKt_instance;
  }
  function MonitorScreen$lambda($state$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('state', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $state$delegate.k1();
  }
  function MonitorScreen$slambda($presenter, resultContinuation) {
    this.a3n_1 = $presenter;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MonitorScreen$slambda).w2b = function ($this$LaunchedEffect, $completion) {
    var tmp = this.w1f($this$LaunchedEffect, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(MonitorScreen$slambda).b9 = function (p1, $completion) {
    return this.w2b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MonitorScreen$slambda).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        if (tmp === 0) {
          this.g8_1 = 1;
          this.a3n_1.x3k();
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.i8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(MonitorScreen$slambda).w1f = function ($this$LaunchedEffect, completion) {
    var i = new MonitorScreen$slambda(this.a3n_1, completion);
    i.b3n_1 = $this$LaunchedEffect;
    return i;
  };
  function MonitorScreen$slambda_0($presenter, resultContinuation) {
    var i = new MonitorScreen$slambda($presenter, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.w2b($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _no_name_provided__qut3iv_0($presenter) {
    this.c3n_1 = $presenter;
  }
  protoOf(_no_name_provided__qut3iv_0).gl = function () {
    // Inline function 'MonitorScreen.<anonymous>.<anonymous>.<anonymous>' call
    this.c3n_1.y3k();
  };
  function MonitorScreen$lambda_0($presenter) {
    return function ($this$DisposableEffect) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_0($presenter);
    };
  }
  function MonitorScreen$lambda_1($this$Div) {
    $this$Div.z32([MonitorStyles_getInstance().o3e()]);
    return Unit_instance;
  }
  function MonitorScreen$lambda$lambda($this$H2) {
    $this$H2.z32([MonitorStyles_getInstance().p3e()]);
    return Unit_instance;
  }
  function MonitorScreen$lambda_2($state$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1195558841, $changed, -1, 'MonitorScreen.<anonymous> (MonitorScreen.kt:31)');
      }
      $composer_0.m24(-1045826235);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'MonitorScreen.<anonymous>.<anonymous>.<anonymous>' call
        var value = MonitorScreen$lambda$lambda;
        $composer_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      H2(tmp0_group, ComposableSingletons$MonitorScreenKt_getInstance().f3j_1, $composer_0, 54, 0);
      if (!(MonitorScreen$lambda($state$delegate).a3l_1 == null)) {
        $composer_0.m24(1939257765);
        ErrorCard(ensureNotNull(MonitorScreen$lambda($state$delegate).a3l_1), $composer_0, 0);
        $composer_0.o24();
      } else if (MonitorScreen$lambda($state$delegate).z3k_1 == null) {
        $composer_0.m24(1939357616);
        LoadingCard($composer_0, 0);
        $composer_0.o24();
      } else {
        $composer_0.m24(1939423770);
        BatteryCard(ensureNotNull(MonitorScreen$lambda($state$delegate).z3k_1), $composer_0, 0);
        $composer_0.o24();
      }
      if (MonitorScreen$lambda($state$delegate).z3k_1 == null && MonitorScreen$lambda($state$delegate).a3l_1 == null) {
        InstructionsCard($composer_0, 0);
      }
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_86($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function MonitorScreen$lambda_3($$changed) {
    return function ($composer, $force) {
      MonitorScreen($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function BatteryCard$lambda($this$Div) {
    $this$Div.z32([MonitorStyles_getInstance().q3e(), MonitorStyles_getInstance().c3m()]);
    return Unit_instance;
  }
  function BatteryCard$lambda$lambda($this$Div) {
    $this$Div.z32([MonitorStyles_getInstance().d3m()]);
    return Unit_instance;
  }
  function BatteryCard$lambda$lambda_0($reading) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-794771568, $changed, -1, 'BatteryCard.<anonymous>.<anonymous> (MonitorScreen.kt:59)');
      }
      BatteryIcon($reading.c1g_1, $reading.d1g_1, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_87($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function BatteryCard$lambda$lambda_1($this$Div) {
    $this$Div.z32([MonitorStyles_getInstance().e3m()]);
    return Unit_instance;
  }
  function BatteryCard$lambda$lambda$lambda($this$H3) {
    $this$H3.z32([MonitorStyles_getInstance().f3m()]);
    return Unit_instance;
  }
  function BatteryCard$lambda$lambda$lambda_0($reading) {
    return function ($this$H3, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1804000122, $changed, -1, 'BatteryCard.<anonymous>.<anonymous>.<anonymous> (MonitorScreen.kt:65)');
      }
      Text('' + $reading.c1g_1 + '%', $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_88($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function BatteryCard$lambda$lambda$lambda_1($this$P) {
    $this$P.z32([MonitorStyles_getInstance().g3m()]);
    return Unit_instance;
  }
  function BatteryCard$lambda$lambda$lambda_2($reading) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-845642853, $changed, -1, 'BatteryCard.<anonymous>.<anonymous>.<anonymous> (MonitorScreen.kt:68)');
      }
      Text(getBatteryStateText($reading.d1g_1), $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_89($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function BatteryCard$lambda$lambda_2($reading) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1661191687, $changed, -1, 'BatteryCard.<anonymous>.<anonymous> (MonitorScreen.kt:64)');
      }
      $composer_0.m24(472426017);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'BatteryCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = BatteryCard$lambda$lambda$lambda;
        $composer_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'BatteryCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1804000122, true, BatteryCard$lambda$lambda$lambda_0($reading), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.l26();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'BatteryCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_88(dispatchReceiver);
        $composer_1.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      H3(tmp0_group, tmp0, $composer_0, 54, 0);
      $composer_0.m24(472430240);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.l26();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().e1z_1) {
        // Inline function 'BatteryCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = BatteryCard$lambda$lambda$lambda_1;
        $composer_0.m26(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'BatteryCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver_0 = rememberComposableLambda(-845642853, true, BatteryCard$lambda$lambda$lambda_2($reading), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.w1v(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_2.l26();
      var tmp_5;
      if (invalid_0 || it_2 === Companion_getInstance().e1z_1) {
        // Inline function 'BatteryCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_89(dispatchReceiver_0);
        $composer_2.m26(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      P(tmp1_group, tmp0_0, $composer_0, 54, 0);
      var tmp_7;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_7 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_90($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function BatteryCard$lambda$lambda_3($this$Div) {
    $this$Div.z32([MonitorStyles_getInstance().h3m()]);
    return Unit_instance;
  }
  function BatteryCard$lambda$lambda_4($reading) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-60025640, $changed, -1, 'BatteryCard.<anonymous>.<anonymous> (MonitorScreen.kt:74)');
      }
      DetailItem('Voltage', '' + $reading.z1f_1 / 1000.0 + ' V', $composer_0, 6);
      // Inline function 'kotlin.Long.div' call
      var tmp$ret$0 = $reading.a1g_1.p2() / 1000000.0;
      DetailItem('Current', '' + tmp$ret$0 + ' A', $composer_0, 6);
      var tmp0_safe_receiver = $reading.b1g_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        DetailItem('Temperature', '' + tmp0_safe_receiver + ' \xB0C', $composer_0, 6);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_91($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function BatteryCard$lambda_0($reading) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(438145775, $changed, -1, 'BatteryCard.<anonymous> (MonitorScreen.kt:58)');
      }
      $composer_0.m24(1831809154);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'BatteryCard.<anonymous>.<anonymous>.<anonymous>' call
        var value = BatteryCard$lambda$lambda;
        $composer_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'BatteryCard.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-794771568, true, BatteryCard$lambda$lambda_0($reading), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.l26();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'BatteryCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_87(dispatchReceiver);
        $composer_1.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      $composer_0.m24(1831814627);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.l26();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().e1z_1) {
        // Inline function 'BatteryCard.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = BatteryCard$lambda$lambda_1;
        $composer_0.m26(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'BatteryCard.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver_0 = rememberComposableLambda(-1661191687, true, BatteryCard$lambda$lambda_2($reading), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.w1v(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_2.l26();
      var tmp_5;
      if (invalid_0 || it_2 === Companion_getInstance().e1z_1) {
        // Inline function 'BatteryCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_90(dispatchReceiver_0);
        $composer_2.m26(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Div(tmp1_group, tmp0_0, $composer_0, 54, 0);
      $composer_0.m24(1831826530);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_0.l26();
      var tmp_7;
      if (false || it_3 === Companion_getInstance().e1z_1) {
        // Inline function 'BatteryCard.<anonymous>.<anonymous>.<anonymous>' call
        var value_3 = BatteryCard$lambda$lambda_3;
        $composer_0.m26(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = it_3;
      }
      var tmp_8 = tmp_7;
      var tmp2_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'BatteryCard.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver_1 = rememberComposableLambda(-60025640, true, BatteryCard$lambda$lambda_4($reading), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_3 = $composer_0;
      sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_3.w1v(dispatchReceiver_1);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = $composer_3.l26();
      var tmp_9;
      if (invalid_1 || it_4 === Companion_getInstance().e1z_1) {
        // Inline function 'BatteryCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_4 = ComposableLambda$invoke$ref_91(dispatchReceiver_1);
        $composer_3.m26(value_4);
        tmp_9 = value_4;
      } else {
        tmp_9 = it_4;
      }
      var tmp_10 = tmp_9;
      var tmp0_1 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      sourceInformationMarkerEnd($composer_3);
      Div(tmp2_group, tmp0_1, $composer_0, 54, 0);
      var tmp_11;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_11 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_92($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function BatteryCard$lambda_1($reading, $$changed) {
    return function ($composer, $force) {
      BatteryCard($reading, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function BatteryIcon$lambda$lambda($batteryColor) {
    return function ($this$style) {
      fontSize($this$style, get_cssRem(4));
      color($this$style, Color($batteryColor));
      return Unit_instance;
    };
  }
  function BatteryIcon$lambda($batteryColor) {
    return function ($this$Div) {
      $this$Div.x32(BatteryIcon$lambda$lambda($batteryColor));
      return Unit_instance;
    };
  }
  function BatteryIcon$lambda_0($state) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(724874472, $changed, -1, 'BatteryIcon.<anonymous> (MonitorScreen.kt:98)');
      }
      var tmp0_subject = $state;
      Text(equals(tmp0_subject, Companion_getInstance_1()) ? '\uD83D\uDD0B\u26A1' : equals(tmp0_subject, Full_getInstance()) ? '\uD83D\uDD0B\u2713' : equals(tmp0_subject, Discharging_getInstance()) ? '\uD83D\uDD0B' : '\uD83D\uDD0B', $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_93($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function BatteryIcon$lambda_1($percentage, $state, $$changed) {
    return function ($composer, $force) {
      BatteryIcon($percentage, $state, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function DetailItem$lambda($this$Div) {
    $this$Div.z32([MonitorStyles_getInstance().i3m()]);
    return Unit_instance;
  }
  function DetailItem$lambda$lambda($this$P) {
    $this$P.z32([MonitorStyles_getInstance().j3m()]);
    return Unit_instance;
  }
  function DetailItem$lambda$lambda_0($label) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(740410511, $changed, -1, 'DetailItem.<anonymous>.<anonymous> (MonitorScreen.kt:113)');
      }
      Text($label, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_94($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function DetailItem$lambda$lambda_1($this$P) {
    $this$P.z32([MonitorStyles_getInstance().k3m()]);
    return Unit_instance;
  }
  function DetailItem$lambda$lambda_2($value) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(872298744, $changed, -1, 'DetailItem.<anonymous>.<anonymous> (MonitorScreen.kt:116)');
      }
      Text($value, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_95($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function DetailItem$lambda_0($label, $value) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1426689389, $changed, -1, 'DetailItem.<anonymous> (MonitorScreen.kt:112)');
      }
      $composer_0.m24(-146742423);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'DetailItem.<anonymous>.<anonymous>.<anonymous>' call
        var value = DetailItem$lambda$lambda;
        $composer_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'DetailItem.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(740410511, true, DetailItem$lambda$lambda_0($label), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.l26();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'DetailItem.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_94(dispatchReceiver);
        $composer_1.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      P(tmp0_group, tmp0, $composer_0, 54, 0);
      $composer_0.m24(-146739415);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.l26();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().e1z_1) {
        // Inline function 'DetailItem.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = DetailItem$lambda$lambda_1;
        $composer_0.m26(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'DetailItem.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver_0 = rememberComposableLambda(872298744, true, DetailItem$lambda$lambda_2($value), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.w1v(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_2.l26();
      var tmp_5;
      if (invalid_0 || it_2 === Companion_getInstance().e1z_1) {
        // Inline function 'DetailItem.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_95(dispatchReceiver_0);
        $composer_2.m26(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      P(tmp1_group, tmp0_0, $composer_0, 54, 0);
      var tmp_7;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_7 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_96($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function DetailItem$lambda_1($label, $value, $$changed) {
    return function ($composer, $force) {
      DetailItem($label, $value, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function LoadingCard$lambda($this$Div) {
    $this$Div.z32([MonitorStyles_getInstance().q3e(), MonitorStyles_getInstance().l3m()]);
    return Unit_instance;
  }
  function LoadingCard$lambda_0($$changed) {
    return function ($composer, $force) {
      LoadingCard($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ErrorCard$lambda($this$Div) {
    $this$Div.z32([MonitorStyles_getInstance().q3e(), MonitorStyles_getInstance().n3f()]);
    return Unit_instance;
  }
  function ErrorCard$lambda$lambda($this$Div) {
    $this$Div.z32([MonitorStyles_getInstance().o3f()]);
    return Unit_instance;
  }
  function ErrorCard$lambda$lambda_0($this$H3) {
    $this$H3.z32([MonitorStyles_getInstance().n3m()]);
    return Unit_instance;
  }
  function ErrorCard$lambda$lambda_1($this$P) {
    $this$P.z32([MonitorStyles_getInstance().o3m()]);
    return Unit_instance;
  }
  function ErrorCard$lambda$lambda_2($error) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-2021052920, $changed, -1, 'ErrorCard.<anonymous>.<anonymous> (MonitorScreen.kt:141)');
      }
      Text($error, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_97($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ErrorCard$lambda_0($error) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1879132954, $changed, -1, 'ErrorCard.<anonymous> (MonitorScreen.kt:134)');
      }
      $composer_0.m24(2100625307);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'ErrorCard.<anonymous>.<anonymous>.<anonymous>' call
        var value = ErrorCard$lambda$lambda;
        $composer_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      Div(tmp0_group, ComposableSingletons$MonitorScreenKt_getInstance().i3j_1, $composer_0, 54, 0);
      $composer_0.m24(2100628252);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.l26();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'ErrorCard.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ErrorCard$lambda$lambda_0;
        $composer_0.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.o24();
      H3(tmp1_group, ComposableSingletons$MonitorScreenKt_getInstance().j3j_1, $composer_0, 54, 0);
      $composer_0.m24(2100631294);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.l26();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().e1z_1) {
        // Inline function 'ErrorCard.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = ErrorCard$lambda$lambda_1;
        $composer_0.m26(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ErrorCard.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-2021052920, true, ErrorCard$lambda$lambda_2($error), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_1.l26();
      var tmp_5;
      if (invalid || it_2 === Companion_getInstance().e1z_1) {
        // Inline function 'ErrorCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_97(dispatchReceiver);
        $composer_1.m26(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      P(tmp2_group, tmp0, $composer_0, 54, 0);
      var tmp_7;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_7 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_98($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ErrorCard$lambda_1($error, $$changed) {
    return function ($composer, $force) {
      ErrorCard($error, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function InstructionsCard$lambda($this$Div) {
    $this$Div.z32([MonitorStyles_getInstance().q3e(), MonitorStyles_getInstance().p3m()]);
    return Unit_instance;
  }
  function InstructionsCard$lambda_0($$changed) {
    return function ($composer, $force) {
      InstructionsCard($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function monitorUseCase$factory() {
    return getPropertyCallableRef('monitorUseCase', 1, KProperty1, function (receiver) {
      return _get_monitorUseCase__16epyq(receiver);
    }, null);
  }
  function container$factory_3() {
    return getPropertyCallableRef('container', 1, KProperty1, function (receiver) {
      return receiver.o3e();
    }, null);
  }
  function title$factory_3() {
    return getPropertyCallableRef('title', 1, KProperty1, function (receiver) {
      return receiver.p3e();
    }, null);
  }
  function card$factory_1() {
    return getPropertyCallableRef('card', 1, KProperty1, function (receiver) {
      return receiver.q3e();
    }, null);
  }
  function batteryCard$factory() {
    return getPropertyCallableRef('batteryCard', 1, KProperty1, function (receiver) {
      return receiver.c3m();
    }, null);
  }
  function batteryIcon$factory() {
    return getPropertyCallableRef('batteryIcon', 1, KProperty1, function (receiver) {
      return receiver.d3m();
    }, null);
  }
  function batteryLevel$factory() {
    return getPropertyCallableRef('batteryLevel', 1, KProperty1, function (receiver) {
      return receiver.e3m();
    }, null);
  }
  function levelNumber$factory() {
    return getPropertyCallableRef('levelNumber', 1, KProperty1, function (receiver) {
      return receiver.f3m();
    }, null);
  }
  function levelLabel$factory() {
    return getPropertyCallableRef('levelLabel', 1, KProperty1, function (receiver) {
      return receiver.g3m();
    }, null);
  }
  function detailsGrid$factory() {
    return getPropertyCallableRef('detailsGrid', 1, KProperty1, function (receiver) {
      return receiver.h3m();
    }, null);
  }
  function detailItem$factory() {
    return getPropertyCallableRef('detailItem', 1, KProperty1, function (receiver) {
      return receiver.i3m();
    }, null);
  }
  function detailLabel$factory() {
    return getPropertyCallableRef('detailLabel', 1, KProperty1, function (receiver) {
      return receiver.j3m();
    }, null);
  }
  function detailValue$factory() {
    return getPropertyCallableRef('detailValue', 1, KProperty1, function (receiver) {
      return receiver.k3m();
    }, null);
  }
  function loadingCard$factory() {
    return getPropertyCallableRef('loadingCard', 1, KProperty1, function (receiver) {
      return receiver.l3m();
    }, null);
  }
  function spinner$factory_1() {
    return getPropertyCallableRef('spinner', 1, KProperty1, function (receiver) {
      return receiver.m3f();
    }, null);
  }
  function loadingText$factory() {
    return getPropertyCallableRef('loadingText', 1, KProperty1, function (receiver) {
      return receiver.m3m();
    }, null);
  }
  function errorCard$factory_1() {
    return getPropertyCallableRef('errorCard', 1, KProperty1, function (receiver) {
      return receiver.n3f();
    }, null);
  }
  function errorIcon$factory_1() {
    return getPropertyCallableRef('errorIcon', 1, KProperty1, function (receiver) {
      return receiver.o3f();
    }, null);
  }
  function errorTitle$factory() {
    return getPropertyCallableRef('errorTitle', 1, KProperty1, function (receiver) {
      return receiver.n3m();
    }, null);
  }
  function errorMessage$factory() {
    return getPropertyCallableRef('errorMessage', 1, KProperty1, function (receiver) {
      return receiver.o3m();
    }, null);
  }
  function instructionsCard$factory() {
    return getPropertyCallableRef('instructionsCard', 1, KProperty1, function (receiver) {
      return receiver.p3m();
    }, null);
  }
  function instructionsTitle$factory() {
    return getPropertyCallableRef('instructionsTitle', 1, KProperty1, function (receiver) {
      return receiver.q3m();
    }, null);
  }
  function instructionsList$factory() {
    return getPropertyCallableRef('instructionsList', 1, KProperty1, function (receiver) {
      return receiver.r3m();
    }, null);
  }
  function container$factory_4() {
    return getPropertyCallableRef('container', 1, KProperty1, function (receiver) {
      return receiver.o3e();
    }, null);
  }
  function title$factory_4() {
    return getPropertyCallableRef('title', 1, KProperty1, function (receiver) {
      return receiver.p3e();
    }, null);
  }
  function card$factory_2() {
    return getPropertyCallableRef('card', 1, KProperty1, function (receiver) {
      return receiver.q3e();
    }, null);
  }
  function batteryCard$factory_0() {
    return getPropertyCallableRef('batteryCard', 1, KProperty1, function (receiver) {
      return receiver.c3m();
    }, null);
  }
  function batteryIcon$factory_0() {
    return getPropertyCallableRef('batteryIcon', 1, KProperty1, function (receiver) {
      return receiver.d3m();
    }, null);
  }
  function batteryLevel$factory_0() {
    return getPropertyCallableRef('batteryLevel', 1, KProperty1, function (receiver) {
      return receiver.e3m();
    }, null);
  }
  function levelNumber$factory_0() {
    return getPropertyCallableRef('levelNumber', 1, KProperty1, function (receiver) {
      return receiver.f3m();
    }, null);
  }
  function levelLabel$factory_0() {
    return getPropertyCallableRef('levelLabel', 1, KProperty1, function (receiver) {
      return receiver.g3m();
    }, null);
  }
  function detailsGrid$factory_0() {
    return getPropertyCallableRef('detailsGrid', 1, KProperty1, function (receiver) {
      return receiver.h3m();
    }, null);
  }
  function detailItem$factory_0() {
    return getPropertyCallableRef('detailItem', 1, KProperty1, function (receiver) {
      return receiver.i3m();
    }, null);
  }
  function detailLabel$factory_0() {
    return getPropertyCallableRef('detailLabel', 1, KProperty1, function (receiver) {
      return receiver.j3m();
    }, null);
  }
  function detailValue$factory_0() {
    return getPropertyCallableRef('detailValue', 1, KProperty1, function (receiver) {
      return receiver.k3m();
    }, null);
  }
  function loadingCard$factory_0() {
    return getPropertyCallableRef('loadingCard', 1, KProperty1, function (receiver) {
      return receiver.l3m();
    }, null);
  }
  function spinner$factory_2() {
    return getPropertyCallableRef('spinner', 1, KProperty1, function (receiver) {
      return receiver.m3f();
    }, null);
  }
  function loadingText$factory_0() {
    return getPropertyCallableRef('loadingText', 1, KProperty1, function (receiver) {
      return receiver.m3m();
    }, null);
  }
  function errorCard$factory_2() {
    return getPropertyCallableRef('errorCard', 1, KProperty1, function (receiver) {
      return receiver.n3f();
    }, null);
  }
  function errorIcon$factory_2() {
    return getPropertyCallableRef('errorIcon', 1, KProperty1, function (receiver) {
      return receiver.o3f();
    }, null);
  }
  function errorTitle$factory_0() {
    return getPropertyCallableRef('errorTitle', 1, KProperty1, function (receiver) {
      return receiver.n3m();
    }, null);
  }
  function errorMessage$factory_0() {
    return getPropertyCallableRef('errorMessage', 1, KProperty1, function (receiver) {
      return receiver.o3m();
    }, null);
  }
  function instructionsCard$factory_0() {
    return getPropertyCallableRef('instructionsCard', 1, KProperty1, function (receiver) {
      return receiver.p3m();
    }, null);
  }
  function instructionsTitle$factory_0() {
    return getPropertyCallableRef('instructionsTitle', 1, KProperty1, function (receiver) {
      return receiver.q3m();
    }, null);
  }
  function instructionsList$factory_0() {
    return getPropertyCallableRef('instructionsList', 1, KProperty1, function (receiver) {
      return receiver.r3m();
    }, null);
  }
  var SettingsStyles$stable;
  function SettingsScreen($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(-2104208616);
    if (!($changed === 0) || !$composer_0.f24()) {
      if (isTraceInProgress()) {
        traceEventStart(-2104208616, $changed, -1, 'SettingsScreen (SettingsScreen.kt:8)');
      }
      $composer_0.m24(-210238636);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'SettingsScreen.<anonymous>' call
        var value = SettingsScreen$lambda;
        this_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      Div(tmp0_group, ComposableSingletons$SettingsScreenKt_getInstance().e3n_1, $composer_0, 54, 0);
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
      tmp1_safe_receiver.g2c(SettingsScreen$lambda_0($changed));
    }
  }
  function AboutCard($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(-110962230);
    if (!($changed === 0) || !$composer_0.f24()) {
      if (isTraceInProgress()) {
        traceEventStart(-110962230, $changed, -1, 'AboutCard (SettingsScreen.kt:29)');
      }
      $composer_0.m24(-2047320131);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'AboutCard.<anonymous>' call
        var value = AboutCard$lambda;
        this_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      Div(tmp0_group, ComposableSingletons$SettingsScreenKt_getInstance().i3n_1, $composer_0, 54, 0);
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
      tmp1_safe_receiver.g2c(AboutCard$lambda_0($changed));
    }
  }
  function CompatibilityCard($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(-643350227);
    if (!($changed === 0) || !$composer_0.f24()) {
      if (isTraceInProgress()) {
        traceEventStart(-643350227, $changed, -1, 'CompatibilityCard (SettingsScreen.kt:44)');
      }
      var tmp = 'getBattery' in navigator;
      var hasBatteryApi = (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
      var tmp_0 = 'indexedDB' in window;
      var hasIndexedDB = (!(tmp_0 == null) ? typeof tmp_0 === 'boolean' : false) ? tmp_0 : THROW_CCE();
      var tmp_1 = 'serviceWorker' in navigator;
      var hasServiceWorker = (!(tmp_1 == null) ? typeof tmp_1 === 'boolean' : false) ? tmp_1 : THROW_CCE();
      var tmp_2 = 'Notification' in window;
      var hasNotifications = (!(tmp_2 == null) ? typeof tmp_2 === 'boolean' : false) ? tmp_2 : THROW_CCE();
      $composer_0.m24(-1124772160);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l26();
      var tmp_3;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'CompatibilityCard.<anonymous>' call
        var value = CompatibilityCard$lambda;
        this_0.m26(value);
        tmp_3 = value;
      } else {
        tmp_3 = it;
      }
      var tmp_4 = tmp_3;
      var tmp0_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'CompatibilityCard.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-770095764, true, CompatibilityCard$lambda_0(hasBatteryApi, hasIndexedDB, hasServiceWorker, hasNotifications), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.l26();
      var tmp_5;
      if (invalid || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'CompatibilityCard.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_123(dispatchReceiver);
        $composer_1.m26(value_0);
        tmp_5 = value_0;
      } else {
        tmp_5 = it_0;
      }
      var tmp_6 = tmp_5;
      var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
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
      tmp1_safe_receiver.g2c(CompatibilityCard$lambda_1($changed));
    }
  }
  function CompatibilityItem(name, supported, description, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(-1435384314);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1v(name) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.g25(supported) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.w1v(description) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.f24()) {
      if (isTraceInProgress()) {
        traceEventStart(-1435384314, $dirty, -1, 'CompatibilityItem (SettingsScreen.kt:76)');
      }
      $composer_0.m24(-935793200);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'CompatibilityItem.<anonymous>' call
        var value = CompatibilityItem$lambda;
        this_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'CompatibilityItem.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-15519961, true, CompatibilityItem$lambda_0(supported, name, description), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.l26();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'CompatibilityItem.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_128(dispatchReceiver);
        $composer_1.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
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
      tmp1_safe_receiver.g2c(CompatibilityItem$lambda_1(name, supported, description, $changed));
    }
  }
  function DataManagementCard($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(-1797899290);
    if (!($changed === 0) || !$composer_0.f24()) {
      if (isTraceInProgress()) {
        traceEventStart(-1797899290, $changed, -1, 'DataManagementCard (SettingsScreen.kt:98)');
      }
      $composer_0.m24(-722970785);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'DataManagementCard.<anonymous>' call
        var value = mutableStateOf(false);
        this_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      var showClearConfirm$delegate = tmp0_group;
      $composer_0.m24(-722969123);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.l26();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'DataManagementCard.<anonymous>' call
        var value_0 = DataManagementCard$lambda_1;
        this_1.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'DataManagementCard.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1432043641, true, DataManagementCard$lambda_2(showClearConfirm$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.l26();
      var tmp_3;
      if (invalid || it_1 === Companion_getInstance().e1z_1) {
        // Inline function 'DataManagementCard.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_131(dispatchReceiver);
        $composer_1.m26(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp1_group, tmp0, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v1y();
    }
    var tmp2_safe_receiver = $composer_0.u25();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.g2c(DataManagementCard$lambda_3($changed));
    }
  }
  function InfoCard($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(1158085895);
    if (!($changed === 0) || !$composer_0.f24()) {
      if (isTraceInProgress()) {
        traceEventStart(1158085895, $changed, -1, 'InfoCard (SettingsScreen.kt:145)');
      }
      $composer_0.m24(700967230);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'InfoCard.<anonymous>' call
        var value = InfoCard$lambda;
        this_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      Div(tmp0_group, ComposableSingletons$SettingsScreenKt_getInstance().z3n_1, $composer_0, 54, 0);
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
      tmp1_safe_receiver.g2c(InfoCard$lambda_0($changed));
    }
  }
  function InfoItem(label, value, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t25(1743251216);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1v(label) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.w1v(value) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.f24()) {
      if (isTraceInProgress()) {
        traceEventStart(1743251216, $dirty, -1, 'InfoItem (SettingsScreen.kt:182)');
      }
      $composer_0.m24(889949829);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'InfoItem.<anonymous>' call
        var value_0 = InfoItem$lambda;
        this_0.m26(value_0);
        tmp = value_0;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'InfoItem.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(321893327, true, InfoItem$lambda_0(label, value), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.l26();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'InfoItem.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_134(dispatchReceiver);
        $composer_1.m26(value_1);
        tmp_1 = value_1;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
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
      tmp1_safe_receiver.g2c(InfoItem$lambda_1(label, value, $changed));
    }
  }
  function clearAllData() {
    if (window.indexedDB) {
      window.indexedDB.databases().then(function (dbs) {
        dbs.forEach(function (db) {
          if (db.name && db.name.includes('embit')) {
            window.indexedDB.deleteDatabase(db.name);
          }
        });
      });
    }
    localStorage.clear();
    sessionStorage.clear();
    if ('caches' in window) {
      caches.keys().then(function (names) {
        names.forEach(function (name) {
          caches.delete(name);
        });
      });
    }
    window.location.reload();
  }
  function SettingsStyles$container$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    gap($this$style, get_cssRem(1.5));
    return Unit_instance;
  }
  function SettingsStyles$title$delegate$lambda($this$style) {
    fontSize($this$style, get_cssRem(2));
    fontWeight($this$style, 600);
    color($this$style, rgb(33, 33, 33));
    margin($this$style, [get_px(0), get_px(0), get_cssRem(1)]);
    return Unit_instance;
  }
  function SettingsStyles$card$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Color.white' call
    var tmp$ret$0 = Color('white');
    backgroundColor($this$style, tmp$ret$0);
    borderRadius($this$style, get_px(12));
    padding($this$style, [get_cssRem(2)]);
    $this$style.i34('box-shadow', '0 2px 8px rgba(0,0,0,0.1)');
    return Unit_instance;
  }
  function SettingsStyles$cardTitle$delegate$lambda($this$style) {
    fontSize($this$style, get_cssRem(1.5));
    fontWeight($this$style, 600);
    color($this$style, rgb(33, 33, 33));
    margin($this$style, [get_px(0), get_px(0), get_cssRem(1)]);
    return Unit_instance;
  }
  function SettingsStyles$description$delegate$lambda($this$style) {
    fontSize($this$style, get_cssRem(1));
    color($this$style, rgb(60, 60, 60));
    $this$style.i34('line-height', '1.6');
    margin($this$style, [get_px(0), get_px(0), get_cssRem(1)]);
    return Unit_instance;
  }
  function SettingsStyles$version$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.InlineBlock' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'inline-block';
    display($this$style, tmp$ret$3);
    padding($this$style, [get_cssRem(0.5), get_cssRem(1)]);
    backgroundColor($this$style, rgb(232, 245, 233));
    color($this$style, rgb(27, 94, 32));
    borderRadius($this$style, get_px(20));
    fontSize($this$style, get_cssRem(0.875));
    fontWeight($this$style, 600);
    return Unit_instance;
  }
  function SettingsStyles$compatibilityGrid$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    gap($this$style, get_cssRem(1));
    marginBottom($this$style, get_cssRem(1));
    return Unit_instance;
  }
  function SettingsStyles$compatibilityItem$delegate$lambda($this$style) {
    padding($this$style, [get_cssRem(1)]);
    backgroundColor($this$style, rgb(250, 250, 250));
    borderRadius($this$style, get_px(8));
    return Unit_instance;
  }
  function SettingsStyles$compatibilityHeader$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceBetween' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$7 = 'space-between';
    justifyContent($this$style, tmp$ret$7);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$style, 'center');
    marginBottom($this$style, get_cssRem(0.5));
    // Inline function 'org.jetbrains.compose.web.css.Companion.Wrap' call
    // Inline function 'org.jetbrains.compose.web.css.FlexWrap' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexWrap($this$style, 'wrap');
    gap($this$style, get_cssRem(0.5));
    return Unit_instance;
  }
  function SettingsStyles$compatibilityName$delegate$lambda($this$style) {
    fontSize($this$style, get_cssRem(1));
    fontWeight($this$style, 600);
    color($this$style, rgb(33, 33, 33));
    return Unit_instance;
  }
  function SettingsStyles$compatibilityStatus$delegate$lambda($this$style) {
    fontSize($this$style, get_cssRem(0.875));
    fontWeight($this$style, 500);
    padding($this$style, [get_cssRem(0.25), get_cssRem(0.75)]);
    borderRadius($this$style, get_px(12));
    return Unit_instance;
  }
  function SettingsStyles$statusSupported$delegate$lambda($this$style) {
    backgroundColor($this$style, rgb(232, 245, 233));
    color($this$style, rgb(27, 94, 32));
    return Unit_instance;
  }
  function SettingsStyles$statusUnsupported$delegate$lambda($this$style) {
    backgroundColor($this$style, rgb(255, 235, 238));
    color($this$style, rgb(198, 40, 40));
    return Unit_instance;
  }
  function SettingsStyles$compatibilityDescription$delegate$lambda($this$style) {
    fontSize($this$style, get_cssRem(0.875));
    color($this$style, rgb(100, 100, 100));
    margin($this$style, [get_px(0)]);
    return Unit_instance;
  }
  function SettingsStyles$warningBox$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    gap($this$style, get_cssRem(0.75));
    padding($this$style, [get_cssRem(1)]);
    backgroundColor($this$style, rgb(255, 243, 224));
    borderRadius($this$style, get_px(8));
    var tmp = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    border($this$style, tmp, 'solid', rgb(255, 193, 7));
    marginTop($this$style, get_cssRem(1));
    return Unit_instance;
  }
  function SettingsStyles$warningIcon$delegate$lambda($this$style) {
    fontSize($this$style, get_cssRem(1.25));
    return Unit_instance;
  }
  function SettingsStyles$confirmBox$delegate$lambda($this$style) {
    padding($this$style, [get_cssRem(1)]);
    backgroundColor($this$style, rgb(255, 245, 245));
    borderRadius($this$style, get_px(8));
    var tmp = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    border($this$style, tmp, 'solid', rgb(244, 67, 54));
    return Unit_instance;
  }
  function SettingsStyles$confirmText$delegate$lambda($this$style) {
    margin($this$style, [get_px(0), get_px(0), get_cssRem(1)]);
    color($this$style, rgb(60, 60, 60));
    return Unit_instance;
  }
  function SettingsStyles$confirmButtons$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    gap($this$style, get_cssRem(0.75));
    // Inline function 'org.jetbrains.compose.web.css.Companion.Wrap' call
    // Inline function 'org.jetbrains.compose.web.css.FlexWrap' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexWrap($this$style, 'wrap');
    return Unit_instance;
  }
  function SettingsStyles$button$delegate$lambda($this$style) {
    padding($this$style, [get_cssRem(0.75), get_cssRem(1.5)]);
    fontSize($this$style, get_cssRem(1));
    fontWeight($this$style, 500);
    borderRadius($this$style, get_px(8));
    border($this$style, get_px(0));
    cursor($this$style, ['pointer']);
    $this$style.i34('transition', 'all 0.2s');
    return Unit_instance;
  }
  function SettingsStyles$dangerButton$delegate$lambda($this$style) {
    backgroundColor($this$style, rgb(244, 67, 54));
    // Inline function 'org.jetbrains.compose.web.css.Color.white' call
    var tmp$ret$0 = Color('white');
    color($this$style, tmp$ret$0);
    return Unit_instance;
  }
  function SettingsStyles$dangerButtonHover$delegate$lambda($this$style) {
    backgroundColor($this$style, rgb(211, 47, 47));
    return Unit_instance;
  }
  function SettingsStyles$secondaryButton$delegate$lambda($this$style) {
    backgroundColor($this$style, rgb(224, 224, 224));
    color($this$style, rgb(33, 33, 33));
    return Unit_instance;
  }
  function SettingsStyles$secondaryButtonHover$delegate$lambda($this$style) {
    backgroundColor($this$style, rgb(189, 189, 189));
    return Unit_instance;
  }
  function SettingsStyles$infoGrid$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    gap($this$style, get_cssRem(0.75));
    marginBottom($this$style, get_cssRem(1.5));
    return Unit_instance;
  }
  function SettingsStyles$infoItem$delegate$lambda($this$style) {
    fontSize($this$style, get_cssRem(0.9375));
    color($this$style, rgb(60, 60, 60));
    return Unit_instance;
  }
  function SettingsStyles$infoLabel$delegate$lambda($this$style) {
    fontWeight($this$style, 600);
    marginRight($this$style, get_cssRem(0.5));
    return Unit_instance;
  }
  function SettingsStyles$infoValue$delegate$lambda($this$style) {
    color($this$style, rgb(100, 100, 100));
    return Unit_instance;
  }
  function SettingsStyles$linksContainer$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Wrap' call
    // Inline function 'org.jetbrains.compose.web.css.FlexWrap' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexWrap($this$style, 'wrap');
    gap($this$style, get_cssRem(1));
    return Unit_instance;
  }
  function SettingsStyles$linkButton$delegate$lambda($this$style) {
    color($this$style, rgb(27, 94, 32));
    textDecoration($this$style, 'none');
    fontSize($this$style, get_cssRem(1));
    fontWeight($this$style, 500);
    return Unit_instance;
  }
  function SettingsStyles() {
    SettingsStyles_instance = this;
    StyleSheet_init_$Init$(VOID, VOID, this);
    var tmp = this;
    tmp.f3o_1 = this.h36(SettingsStyles$container$delegate$lambda).b36(this, container$factory_5());
    var tmp_0 = this;
    tmp_0.g3o_1 = this.h36(SettingsStyles$title$delegate$lambda).b36(this, title$factory_5());
    var tmp_1 = this;
    tmp_1.h3o_1 = this.h36(SettingsStyles$card$delegate$lambda).b36(this, card$factory_3());
    var tmp_2 = this;
    tmp_2.i3o_1 = this.h36(SettingsStyles$cardTitle$delegate$lambda).b36(this, cardTitle$factory_1());
    var tmp_3 = this;
    tmp_3.j3o_1 = this.h36(SettingsStyles$description$delegate$lambda).b36(this, description$factory());
    var tmp_4 = this;
    tmp_4.k3o_1 = this.h36(SettingsStyles$version$delegate$lambda).b36(this, version$factory());
    var tmp_5 = this;
    tmp_5.l3o_1 = this.h36(SettingsStyles$compatibilityGrid$delegate$lambda).b36(this, compatibilityGrid$factory());
    var tmp_6 = this;
    tmp_6.m3o_1 = this.h36(SettingsStyles$compatibilityItem$delegate$lambda).b36(this, compatibilityItem$factory());
    var tmp_7 = this;
    tmp_7.n3o_1 = this.h36(SettingsStyles$compatibilityHeader$delegate$lambda).b36(this, compatibilityHeader$factory());
    var tmp_8 = this;
    tmp_8.o3o_1 = this.h36(SettingsStyles$compatibilityName$delegate$lambda).b36(this, compatibilityName$factory());
    var tmp_9 = this;
    tmp_9.p3o_1 = this.h36(SettingsStyles$compatibilityStatus$delegate$lambda).b36(this, compatibilityStatus$factory());
    var tmp_10 = this;
    tmp_10.q3o_1 = this.h36(SettingsStyles$statusSupported$delegate$lambda).b36(this, statusSupported$factory());
    var tmp_11 = this;
    tmp_11.r3o_1 = this.h36(SettingsStyles$statusUnsupported$delegate$lambda).b36(this, statusUnsupported$factory());
    var tmp_12 = this;
    tmp_12.s3o_1 = this.h36(SettingsStyles$compatibilityDescription$delegate$lambda).b36(this, compatibilityDescription$factory());
    var tmp_13 = this;
    tmp_13.t3o_1 = this.h36(SettingsStyles$warningBox$delegate$lambda).b36(this, warningBox$factory());
    var tmp_14 = this;
    tmp_14.u3o_1 = this.h36(SettingsStyles$warningIcon$delegate$lambda).b36(this, warningIcon$factory());
    var tmp_15 = this;
    tmp_15.v3o_1 = this.h36(SettingsStyles$confirmBox$delegate$lambda).b36(this, confirmBox$factory());
    var tmp_16 = this;
    tmp_16.w3o_1 = this.h36(SettingsStyles$confirmText$delegate$lambda).b36(this, confirmText$factory());
    var tmp_17 = this;
    tmp_17.x3o_1 = this.h36(SettingsStyles$confirmButtons$delegate$lambda).b36(this, confirmButtons$factory());
    var tmp_18 = this;
    tmp_18.y3o_1 = this.h36(SettingsStyles$button$delegate$lambda).b36(this, button$factory());
    var tmp_19 = this;
    tmp_19.z3o_1 = this.h36(SettingsStyles$dangerButton$delegate$lambda).b36(this, dangerButton$factory());
    var tmp_20 = this;
    tmp_20.a3p_1 = this.h36(SettingsStyles$dangerButtonHover$delegate$lambda).b36(this, dangerButtonHover$factory());
    var tmp_21 = this;
    tmp_21.b3p_1 = this.h36(SettingsStyles$secondaryButton$delegate$lambda).b36(this, secondaryButton$factory());
    var tmp_22 = this;
    tmp_22.c3p_1 = this.h36(SettingsStyles$secondaryButtonHover$delegate$lambda).b36(this, secondaryButtonHover$factory());
    var tmp_23 = this;
    tmp_23.d3p_1 = this.h36(SettingsStyles$infoGrid$delegate$lambda).b36(this, infoGrid$factory());
    var tmp_24 = this;
    tmp_24.e3p_1 = this.h36(SettingsStyles$infoItem$delegate$lambda).b36(this, infoItem$factory());
    var tmp_25 = this;
    tmp_25.f3p_1 = this.h36(SettingsStyles$infoLabel$delegate$lambda).b36(this, infoLabel$factory());
    var tmp_26 = this;
    tmp_26.g3p_1 = this.h36(SettingsStyles$infoValue$delegate$lambda).b36(this, infoValue$factory());
    var tmp_27 = this;
    tmp_27.h3p_1 = this.h36(SettingsStyles$linksContainer$delegate$lambda).b36(this, linksContainer$factory());
    var tmp_28 = this;
    tmp_28.i3p_1 = this.h36(SettingsStyles$linkButton$delegate$lambda).b36(this, linkButton$factory());
  }
  protoOf(SettingsStyles).o3e = function () {
    return this.f3o_1.ie(this, container$factory_6());
  };
  protoOf(SettingsStyles).p3e = function () {
    return this.g3o_1.ie(this, title$factory_6());
  };
  protoOf(SettingsStyles).q3e = function () {
    return this.h3o_1.ie(this, card$factory_4());
  };
  protoOf(SettingsStyles).r3e = function () {
    return this.i3o_1.ie(this, cardTitle$factory_2());
  };
  protoOf(SettingsStyles).j3p = function () {
    return this.j3o_1.ie(this, description$factory_0());
  };
  protoOf(SettingsStyles).k3p = function () {
    return this.k3o_1.ie(this, version$factory_0());
  };
  protoOf(SettingsStyles).l3p = function () {
    return this.l3o_1.ie(this, compatibilityGrid$factory_0());
  };
  protoOf(SettingsStyles).m3p = function () {
    return this.m3o_1.ie(this, compatibilityItem$factory_0());
  };
  protoOf(SettingsStyles).n3p = function () {
    return this.n3o_1.ie(this, compatibilityHeader$factory_0());
  };
  protoOf(SettingsStyles).o3p = function () {
    return this.o3o_1.ie(this, compatibilityName$factory_0());
  };
  protoOf(SettingsStyles).p3p = function () {
    return this.p3o_1.ie(this, compatibilityStatus$factory_0());
  };
  protoOf(SettingsStyles).q3p = function () {
    return this.q3o_1.ie(this, statusSupported$factory_0());
  };
  protoOf(SettingsStyles).r3p = function () {
    return this.r3o_1.ie(this, statusUnsupported$factory_0());
  };
  protoOf(SettingsStyles).s3p = function () {
    return this.s3o_1.ie(this, compatibilityDescription$factory_0());
  };
  protoOf(SettingsStyles).t3p = function () {
    return this.t3o_1.ie(this, warningBox$factory_0());
  };
  protoOf(SettingsStyles).u3p = function () {
    return this.u3o_1.ie(this, warningIcon$factory_0());
  };
  protoOf(SettingsStyles).v3p = function () {
    return this.v3o_1.ie(this, confirmBox$factory_0());
  };
  protoOf(SettingsStyles).w3p = function () {
    return this.w3o_1.ie(this, confirmText$factory_0());
  };
  protoOf(SettingsStyles).x3p = function () {
    return this.x3o_1.ie(this, confirmButtons$factory_0());
  };
  protoOf(SettingsStyles).y3p = function () {
    return this.y3o_1.ie(this, button$factory_0());
  };
  protoOf(SettingsStyles).z3p = function () {
    return this.z3o_1.ie(this, dangerButton$factory_0());
  };
  protoOf(SettingsStyles).a3q = function () {
    return this.a3p_1.ie(this, dangerButtonHover$factory_0());
  };
  protoOf(SettingsStyles).b3q = function () {
    return this.b3p_1.ie(this, secondaryButton$factory_0());
  };
  protoOf(SettingsStyles).c3q = function () {
    return this.c3p_1.ie(this, secondaryButtonHover$factory_0());
  };
  protoOf(SettingsStyles).d3q = function () {
    return this.d3p_1.ie(this, infoGrid$factory_0());
  };
  protoOf(SettingsStyles).e3q = function () {
    return this.e3p_1.ie(this, infoItem$factory_0());
  };
  protoOf(SettingsStyles).f3q = function () {
    return this.f3p_1.ie(this, infoLabel$factory_0());
  };
  protoOf(SettingsStyles).g3q = function () {
    return this.g3p_1.ie(this, infoValue$factory_0());
  };
  protoOf(SettingsStyles).h3q = function () {
    return this.h3p_1.ie(this, linksContainer$factory_0());
  };
  protoOf(SettingsStyles).i3q = function () {
    return this.i3p_1.ie(this, linkButton$factory_0());
  };
  var SettingsStyles_instance;
  function SettingsStyles_getInstance() {
    if (SettingsStyles_instance == null)
      new SettingsStyles();
    return SettingsStyles_instance;
  }
  function ComposableLambda$invoke$ref_99($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$SettingsScreenKt$lambda_1$lambda_7z7ypv($this$H2, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-572029221, $changed, -1, 'ComposableSingletons$SettingsScreenKt.lambda-1.<anonymous> (SettingsScreen.kt:11)');
    }
    Text('Settings', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_100($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$SettingsScreenKt$lambda_2$lambda_y89m72($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1219481401, $changed, -1, 'ComposableSingletons$SettingsScreenKt.lambda-2.<anonymous> (SettingsScreen.kt:10)');
    }
    $composer_0.m24(2048446515);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.l26();
    var tmp;
    if (false || it === Companion_getInstance().e1z_1) {
      // Inline function 'ComposableSingletons$SettingsScreenKt.lambda-2.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$SettingsScreenKt$lambda_2$lambda$lambda_alt60n;
      $composer_0.m26(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.o24();
    H2(tmp0_group, ComposableSingletons$SettingsScreenKt_getInstance().d3n_1, $composer_0, 54, 0);
    AboutCard($composer_0, 0);
    CompatibilityCard($composer_0, 0);
    DataManagementCard($composer_0, 0);
    InfoCard($composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$SettingsScreenKt$lambda_2$lambda$lambda_alt60n($this$H2) {
    $this$H2.z32([SettingsStyles_getInstance().p3e()]);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_101($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$SettingsScreenKt$lambda_3$lambda_5en54v($this$H3, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(444644136, $changed, -1, 'ComposableSingletons$SettingsScreenKt.lambda-3.<anonymous> (SettingsScreen.kt:32)');
    }
    Text('About Embit', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_102($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$SettingsScreenKt$lambda_4$lambda_nezbxc($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(290678439, $changed, -1, 'ComposableSingletons$SettingsScreenKt.lambda-4.<anonymous> (SettingsScreen.kt:35)');
    }
    Text("Embit is a battery monitoring and analytics application that helps you track your device's battery health, analyze usage patterns, and get intelligent recommendations for better battery life.", $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_103($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$SettingsScreenKt$lambda_5$lambda_isi8zl($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1557671288, $changed, -1, 'ComposableSingletons$SettingsScreenKt.lambda-5.<anonymous> (SettingsScreen.kt:38)');
    }
    Text('Version 2.1.0', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_104($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$SettingsScreenKt$lambda_6$lambda_a1482m($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-396325623, $changed, -1, 'ComposableSingletons$SettingsScreenKt.lambda-6.<anonymous> (SettingsScreen.kt:31)');
    }
    $composer_0.m24(-511268101);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.l26();
    var tmp;
    if (false || it === Companion_getInstance().e1z_1) {
      // Inline function 'ComposableSingletons$SettingsScreenKt.lambda-6.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$SettingsScreenKt$lambda_6$lambda$lambda_i3b1ot;
      $composer_0.m26(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.o24();
    H3(tmp0_group, ComposableSingletons$SettingsScreenKt_getInstance().f3n_1, $composer_0, 54, 0);
    $composer_0.m24(-511264867);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.l26();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().e1z_1) {
      // Inline function 'ComposableSingletons$SettingsScreenKt.lambda-6.<anonymous>.<anonymous>' call
      var value_0 = ComposableSingletons$SettingsScreenKt$lambda_6$lambda$lambda_i3b1ot_0;
      $composer_0.m26(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.o24();
    P(tmp1_group, ComposableSingletons$SettingsScreenKt_getInstance().g3n_1, $composer_0, 54, 0);
    $composer_0.m24(-511255751);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_0.l26();
    var tmp_3;
    if (false || it_1 === Companion_getInstance().e1z_1) {
      // Inline function 'ComposableSingletons$SettingsScreenKt.lambda-6.<anonymous>.<anonymous>' call
      var value_1 = ComposableSingletons$SettingsScreenKt$lambda_6$lambda$lambda_i3b1ot_1;
      $composer_0.m26(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    $composer_0.o24();
    Div(tmp2_group, ComposableSingletons$SettingsScreenKt_getInstance().h3n_1, $composer_0, 54, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$SettingsScreenKt$lambda_6$lambda$lambda_i3b1ot($this$H3) {
    $this$H3.z32([SettingsStyles_getInstance().r3e()]);
    return Unit_instance;
  }
  function ComposableSingletons$SettingsScreenKt$lambda_6$lambda$lambda_i3b1ot_0($this$P) {
    $this$P.z32([SettingsStyles_getInstance().j3p()]);
    return Unit_instance;
  }
  function ComposableSingletons$SettingsScreenKt$lambda_6$lambda$lambda_i3b1ot_1($this$Div) {
    $this$Div.z32([SettingsStyles_getInstance().k3p()]);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_105($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$SettingsScreenKt$lambda_7$lambda_w6dcub($this$H3, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(611640459, $changed, -1, 'ComposableSingletons$SettingsScreenKt.lambda-7.<anonymous> (SettingsScreen.kt:52)');
    }
    Text('Browser Compatibility', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_106($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$SettingsScreenKt$lambda_8$lambda_3cqvs4($this$Span, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-2017680476, $changed, -1, 'ComposableSingletons$SettingsScreenKt.lambda-8.<anonymous> (SettingsScreen.kt:65)');
    }
    Text('\u26A0\uFE0F', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_107($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$SettingsScreenKt$lambda_9$lambda_pgvla3($this$Span, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1884889829, $changed, -1, 'ComposableSingletons$SettingsScreenKt.lambda-9.<anonymous> (SettingsScreen.kt:68)');
    }
    Text("Your browser doesn't support the Battery Status API. Battery monitoring features will not work.", $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_108($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$SettingsScreenKt$lambda_10$lambda_wdg8gt($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1197045306, $changed, -1, 'ComposableSingletons$SettingsScreenKt.lambda-10.<anonymous> (SettingsScreen.kt:64)');
    }
    $composer_0.m24(-818265884);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.l26();
    var tmp;
    if (false || it === Companion_getInstance().e1z_1) {
      // Inline function 'ComposableSingletons$SettingsScreenKt.lambda-10.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$SettingsScreenKt$lambda_10$lambda$lambda_gv3wq0;
      $composer_0.m26(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.o24();
    Span(tmp0_group, ComposableSingletons$SettingsScreenKt_getInstance().k3n_1, $composer_0, 54, 0);
    Span(null, ComposableSingletons$SettingsScreenKt_getInstance().l3n_1, $composer_0, 48, 1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$SettingsScreenKt$lambda_10$lambda$lambda_gv3wq0($this$Span) {
    $this$Span.z32([SettingsStyles_getInstance().u3p()]);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_109($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$SettingsScreenKt$lambda_11$lambda_3jtrem($this$H3, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1547893688, $changed, -1, 'ComposableSingletons$SettingsScreenKt.lambda-11.<anonymous> (SettingsScreen.kt:103)');
    }
    Text('Data Management', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_110($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$SettingsScreenKt$lambda_12$lambda_p9spnl($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(2016008105, $changed, -1, 'ComposableSingletons$SettingsScreenKt.lambda-12.<anonymous> (SettingsScreen.kt:107)');
    }
    Text('All battery readings and analytics are stored locally in your browser. No data is sent to external servers.', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_111($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$SettingsScreenKt$lambda_13$lambda_gxov9c($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(275804047, $changed, -1, 'ComposableSingletons$SettingsScreenKt.lambda-13.<anonymous> (SettingsScreen.kt:113)');
    }
    Text('Are you sure you want to clear all data? This action cannot be undone.', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_112($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$SettingsScreenKt$lambda_14$lambda_bvxlsv($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-921043576, $changed, -1, 'ComposableSingletons$SettingsScreenKt.lambda-14.<anonymous> (SettingsScreen.kt:123)');
    }
    Text('Yes, Clear All Data', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_113($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$SettingsScreenKt$lambda_15$lambda_ubjz42($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1101246287, $changed, -1, 'ComposableSingletons$SettingsScreenKt.lambda-15.<anonymous> (SettingsScreen.kt:129)');
    }
    Text('Cancel', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_114($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$SettingsScreenKt$lambda_16$lambda_1hxi1v($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(566152477, $changed, -1, 'ComposableSingletons$SettingsScreenKt.lambda-16.<anonymous> (SettingsScreen.kt:138)');
    }
    Text('Clear All Data', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_115($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$SettingsScreenKt$lambda_17$lambda_rboz0c($this$H3, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1176008681, $changed, -1, 'ComposableSingletons$SettingsScreenKt.lambda-17.<anonymous> (SettingsScreen.kt:148)');
    }
    Text('Information', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_116($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$SettingsScreenKt$lambda_18$lambda_evslwl($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1249965193, $changed, -1, 'ComposableSingletons$SettingsScreenKt.lambda-18.<anonymous> (SettingsScreen.kt:152)');
    }
    InfoItem('Technology', 'Kotlin Multiplatform', $composer_0, 54);
    InfoItem('UI Framework', 'Compose for Web', $composer_0, 54);
    InfoItem('Database', 'SQLDelight + WebWorker', $composer_0, 54);
    InfoItem('Architecture', 'Clean Architecture + MVVM', $composer_0, 54);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_117($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$SettingsScreenKt$lambda_19$lambda_dxtv5m($this$A, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-902398012, $changed, -1, 'ComposableSingletons$SettingsScreenKt.lambda-19.<anonymous> (SettingsScreen.kt:163)');
    }
    Text('\uD83D\uDCD6 Documentation', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_118($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$SettingsScreenKt$lambda_20$lambda_8rjspw($this$A, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(842125677, $changed, -1, 'ComposableSingletons$SettingsScreenKt.lambda-20.<anonymous> (SettingsScreen.kt:169)');
    }
    Text('\uD83D\uDC1B Report Issue', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_119($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$SettingsScreenKt$lambda_21$lambda_xfxs71($this$A, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-814880564, $changed, -1, 'ComposableSingletons$SettingsScreenKt.lambda-21.<anonymous> (SettingsScreen.kt:175)');
    }
    Text('\u2B50 View on GitHub', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_120($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$SettingsScreenKt$lambda_22$lambda_4mbb4u($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1166565618, $changed, -1, 'ComposableSingletons$SettingsScreenKt.lambda-22.<anonymous> (SettingsScreen.kt:159)');
    }
    $composer_0.m24(1686416164);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.l26();
    var tmp;
    if (false || it === Companion_getInstance().e1z_1) {
      // Inline function 'ComposableSingletons$SettingsScreenKt.lambda-22.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$SettingsScreenKt$lambda_22$lambda$lambda_cquj3r;
      $composer_0.m26(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.o24();
    A('https://github.com/embit/embit', tmp0_group, ComposableSingletons$SettingsScreenKt_getInstance().v3n_1, $composer_0, 438, 0);
    $composer_0.m24(1686422980);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.l26();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().e1z_1) {
      // Inline function 'ComposableSingletons$SettingsScreenKt.lambda-22.<anonymous>.<anonymous>' call
      var value_0 = ComposableSingletons$SettingsScreenKt$lambda_22$lambda$lambda_cquj3r_0;
      $composer_0.m26(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.o24();
    A('https://github.com/embit/embit/issues', tmp1_group, ComposableSingletons$SettingsScreenKt_getInstance().w3n_1, $composer_0, 438, 0);
    $composer_0.m24(1686429540);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_0.l26();
    var tmp_3;
    if (false || it_1 === Companion_getInstance().e1z_1) {
      // Inline function 'ComposableSingletons$SettingsScreenKt.lambda-22.<anonymous>.<anonymous>' call
      var value_1 = ComposableSingletons$SettingsScreenKt$lambda_22$lambda$lambda_cquj3r_1;
      $composer_0.m26(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    $composer_0.o24();
    A('https://github.com/embit/embit', tmp2_group, ComposableSingletons$SettingsScreenKt_getInstance().x3n_1, $composer_0, 438, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$SettingsScreenKt$lambda_22$lambda$lambda_cquj3r($this$A) {
    $this$A.z32([SettingsStyles_getInstance().i3q()]);
    return Unit_instance;
  }
  function ComposableSingletons$SettingsScreenKt$lambda_22$lambda$lambda_cquj3r_0($this$A) {
    $this$A.z32([SettingsStyles_getInstance().i3q()]);
    return Unit_instance;
  }
  function ComposableSingletons$SettingsScreenKt$lambda_22$lambda$lambda_cquj3r_1($this$A) {
    $this$A.z32([SettingsStyles_getInstance().i3q()]);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_121($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function ComposableSingletons$SettingsScreenKt$lambda_23$lambda_o7b5xd($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(871785960, $changed, -1, 'ComposableSingletons$SettingsScreenKt.lambda-23.<anonymous> (SettingsScreen.kt:147)');
    }
    $composer_0.m24(-1101017148);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.l26();
    var tmp;
    if (false || it === Companion_getInstance().e1z_1) {
      // Inline function 'ComposableSingletons$SettingsScreenKt.lambda-23.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$SettingsScreenKt$lambda_23$lambda$lambda_c6pjbe;
      $composer_0.m26(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.o24();
    H3(tmp0_group, ComposableSingletons$SettingsScreenKt_getInstance().t3n_1, $composer_0, 54, 0);
    $composer_0.m24(-1101013821);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.l26();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().e1z_1) {
      // Inline function 'ComposableSingletons$SettingsScreenKt.lambda-23.<anonymous>.<anonymous>' call
      var value_0 = ComposableSingletons$SettingsScreenKt$lambda_23$lambda$lambda_c6pjbe_0;
      $composer_0.m26(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.o24();
    Div(tmp1_group, ComposableSingletons$SettingsScreenKt_getInstance().u3n_1, $composer_0, 54, 0);
    $composer_0.m24(-1101003863);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_0.l26();
    var tmp_3;
    if (false || it_1 === Companion_getInstance().e1z_1) {
      // Inline function 'ComposableSingletons$SettingsScreenKt.lambda-23.<anonymous>.<anonymous>' call
      var value_1 = ComposableSingletons$SettingsScreenKt$lambda_23$lambda$lambda_c6pjbe_1;
      $composer_0.m26(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    $composer_0.o24();
    Div(tmp2_group, ComposableSingletons$SettingsScreenKt_getInstance().y3n_1, $composer_0, 54, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$SettingsScreenKt$lambda_23$lambda$lambda_c6pjbe($this$H3) {
    $this$H3.z32([SettingsStyles_getInstance().r3e()]);
    return Unit_instance;
  }
  function ComposableSingletons$SettingsScreenKt$lambda_23$lambda$lambda_c6pjbe_0($this$Div) {
    $this$Div.z32([SettingsStyles_getInstance().d3q()]);
    return Unit_instance;
  }
  function ComposableSingletons$SettingsScreenKt$lambda_23$lambda$lambda_c6pjbe_1($this$Div) {
    $this$Div.z32([SettingsStyles_getInstance().h3q()]);
    return Unit_instance;
  }
  function ComposableSingletons$SettingsScreenKt() {
    ComposableSingletons$SettingsScreenKt_instance = this;
    var tmp = this;
    tmp.d3n_1 = ComposableLambda$invoke$ref_99(composableLambdaInstance(-572029221, false, ComposableSingletons$SettingsScreenKt$lambda_1$lambda_7z7ypv));
    var tmp_0 = this;
    tmp_0.e3n_1 = ComposableLambda$invoke$ref_100(composableLambdaInstance(1219481401, false, ComposableSingletons$SettingsScreenKt$lambda_2$lambda_y89m72));
    var tmp_1 = this;
    tmp_1.f3n_1 = ComposableLambda$invoke$ref_101(composableLambdaInstance(444644136, false, ComposableSingletons$SettingsScreenKt$lambda_3$lambda_5en54v));
    var tmp_2 = this;
    tmp_2.g3n_1 = ComposableLambda$invoke$ref_102(composableLambdaInstance(290678439, false, ComposableSingletons$SettingsScreenKt$lambda_4$lambda_nezbxc));
    var tmp_3 = this;
    tmp_3.h3n_1 = ComposableLambda$invoke$ref_103(composableLambdaInstance(-1557671288, false, ComposableSingletons$SettingsScreenKt$lambda_5$lambda_isi8zl));
    var tmp_4 = this;
    tmp_4.i3n_1 = ComposableLambda$invoke$ref_104(composableLambdaInstance(-396325623, false, ComposableSingletons$SettingsScreenKt$lambda_6$lambda_a1482m));
    var tmp_5 = this;
    tmp_5.j3n_1 = ComposableLambda$invoke$ref_105(composableLambdaInstance(611640459, false, ComposableSingletons$SettingsScreenKt$lambda_7$lambda_w6dcub));
    var tmp_6 = this;
    tmp_6.k3n_1 = ComposableLambda$invoke$ref_106(composableLambdaInstance(-2017680476, false, ComposableSingletons$SettingsScreenKt$lambda_8$lambda_3cqvs4));
    var tmp_7 = this;
    tmp_7.l3n_1 = ComposableLambda$invoke$ref_107(composableLambdaInstance(-1884889829, false, ComposableSingletons$SettingsScreenKt$lambda_9$lambda_pgvla3));
    var tmp_8 = this;
    tmp_8.m3n_1 = ComposableLambda$invoke$ref_108(composableLambdaInstance(-1197045306, false, ComposableSingletons$SettingsScreenKt$lambda_10$lambda_wdg8gt));
    var tmp_9 = this;
    tmp_9.n3n_1 = ComposableLambda$invoke$ref_109(composableLambdaInstance(-1547893688, false, ComposableSingletons$SettingsScreenKt$lambda_11$lambda_3jtrem));
    var tmp_10 = this;
    tmp_10.o3n_1 = ComposableLambda$invoke$ref_110(composableLambdaInstance(2016008105, false, ComposableSingletons$SettingsScreenKt$lambda_12$lambda_p9spnl));
    var tmp_11 = this;
    tmp_11.p3n_1 = ComposableLambda$invoke$ref_111(composableLambdaInstance(275804047, false, ComposableSingletons$SettingsScreenKt$lambda_13$lambda_gxov9c));
    var tmp_12 = this;
    tmp_12.q3n_1 = ComposableLambda$invoke$ref_112(composableLambdaInstance(-921043576, false, ComposableSingletons$SettingsScreenKt$lambda_14$lambda_bvxlsv));
    var tmp_13 = this;
    tmp_13.r3n_1 = ComposableLambda$invoke$ref_113(composableLambdaInstance(-1101246287, false, ComposableSingletons$SettingsScreenKt$lambda_15$lambda_ubjz42));
    var tmp_14 = this;
    tmp_14.s3n_1 = ComposableLambda$invoke$ref_114(composableLambdaInstance(566152477, false, ComposableSingletons$SettingsScreenKt$lambda_16$lambda_1hxi1v));
    var tmp_15 = this;
    tmp_15.t3n_1 = ComposableLambda$invoke$ref_115(composableLambdaInstance(1176008681, false, ComposableSingletons$SettingsScreenKt$lambda_17$lambda_rboz0c));
    var tmp_16 = this;
    tmp_16.u3n_1 = ComposableLambda$invoke$ref_116(composableLambdaInstance(1249965193, false, ComposableSingletons$SettingsScreenKt$lambda_18$lambda_evslwl));
    var tmp_17 = this;
    tmp_17.v3n_1 = ComposableLambda$invoke$ref_117(composableLambdaInstance(-902398012, false, ComposableSingletons$SettingsScreenKt$lambda_19$lambda_dxtv5m));
    var tmp_18 = this;
    tmp_18.w3n_1 = ComposableLambda$invoke$ref_118(composableLambdaInstance(842125677, false, ComposableSingletons$SettingsScreenKt$lambda_20$lambda_8rjspw));
    var tmp_19 = this;
    tmp_19.x3n_1 = ComposableLambda$invoke$ref_119(composableLambdaInstance(-814880564, false, ComposableSingletons$SettingsScreenKt$lambda_21$lambda_xfxs71));
    var tmp_20 = this;
    tmp_20.y3n_1 = ComposableLambda$invoke$ref_120(composableLambdaInstance(1166565618, false, ComposableSingletons$SettingsScreenKt$lambda_22$lambda_4mbb4u));
    var tmp_21 = this;
    tmp_21.z3n_1 = ComposableLambda$invoke$ref_121(composableLambdaInstance(871785960, false, ComposableSingletons$SettingsScreenKt$lambda_23$lambda_o7b5xd));
  }
  var ComposableSingletons$SettingsScreenKt_instance;
  function ComposableSingletons$SettingsScreenKt_getInstance() {
    if (ComposableSingletons$SettingsScreenKt_instance == null)
      new ComposableSingletons$SettingsScreenKt();
    return ComposableSingletons$SettingsScreenKt_instance;
  }
  function DataManagementCard$lambda($showClearConfirm$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('showClearConfirm', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $showClearConfirm$delegate.k1();
  }
  function DataManagementCard$lambda_0($showClearConfirm$delegate, _set____db54di) {
    getLocalDelegateReference('showClearConfirm', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $showClearConfirm$delegate.lt(_set____db54di);
    return Unit_instance;
  }
  function SettingsScreen$lambda($this$Div) {
    $this$Div.z32([SettingsStyles_getInstance().o3e()]);
    return Unit_instance;
  }
  function SettingsScreen$lambda_0($$changed) {
    return function ($composer, $force) {
      SettingsScreen($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function AboutCard$lambda($this$Div) {
    $this$Div.z32([SettingsStyles_getInstance().q3e()]);
    return Unit_instance;
  }
  function AboutCard$lambda_0($$changed) {
    return function ($composer, $force) {
      AboutCard($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function CompatibilityCard$lambda($this$Div) {
    $this$Div.z32([SettingsStyles_getInstance().q3e()]);
    return Unit_instance;
  }
  function CompatibilityCard$lambda$lambda($this$H3) {
    $this$H3.z32([SettingsStyles_getInstance().r3e()]);
    return Unit_instance;
  }
  function CompatibilityCard$lambda$lambda_0($this$Div) {
    $this$Div.z32([SettingsStyles_getInstance().l3p()]);
    return Unit_instance;
  }
  function CompatibilityCard$lambda$lambda_1($hasBatteryApi, $hasIndexedDB, $hasServiceWorker, $hasNotifications) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-708928533, $changed, -1, 'CompatibilityCard.<anonymous>.<anonymous> (SettingsScreen.kt:56)');
      }
      CompatibilityItem('Battery API', $hasBatteryApi, 'Required for battery monitoring', $composer_0, 390);
      CompatibilityItem('IndexedDB', $hasIndexedDB, 'Required for data storage', $composer_0, 390);
      CompatibilityItem('Service Worker', $hasServiceWorker, 'Required for offline support', $composer_0, 390);
      CompatibilityItem('Notifications', $hasNotifications, 'Optional for alerts', $composer_0, 390);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_122($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function CompatibilityCard$lambda$lambda_2($this$Div) {
    $this$Div.z32([SettingsStyles_getInstance().t3p()]);
    return Unit_instance;
  }
  function CompatibilityCard$lambda_0($hasBatteryApi, $hasIndexedDB, $hasServiceWorker, $hasNotifications) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-770095764, $changed, -1, 'CompatibilityCard.<anonymous> (SettingsScreen.kt:51)');
      }
      $composer_0.m24(1851252644);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'CompatibilityCard.<anonymous>.<anonymous>.<anonymous>' call
        var value = CompatibilityCard$lambda$lambda;
        $composer_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      H3(tmp0_group, ComposableSingletons$SettingsScreenKt_getInstance().j3n_1, $composer_0, 54, 0);
      $composer_0.m24(1851256300);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.l26();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'CompatibilityCard.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = CompatibilityCard$lambda$lambda_0;
        $composer_0.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'CompatibilityCard.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-708928533, true, CompatibilityCard$lambda$lambda_1($hasBatteryApi, $hasIndexedDB, $hasServiceWorker, $hasNotifications), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.l26();
      var tmp_3;
      if (invalid || it_1 === Companion_getInstance().e1z_1) {
        // Inline function 'CompatibilityCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_122(dispatchReceiver);
        $composer_1.m26(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp1_group, tmp0, $composer_0, 54, 0);
      if (!$hasBatteryApi) {
        $composer_0.m24(1851271685);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_0.l26();
        var tmp_5;
        if (false || it_2 === Companion_getInstance().e1z_1) {
          // Inline function 'CompatibilityCard.<anonymous>.<anonymous>.<anonymous>' call
          var value_2 = CompatibilityCard$lambda$lambda_2;
          $composer_0.m26(value_2);
          tmp_5 = value_2;
        } else {
          tmp_5 = it_2;
        }
        var tmp_6 = tmp_5;
        var tmp2_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        $composer_0.o24();
        Div(tmp2_group, ComposableSingletons$SettingsScreenKt_getInstance().m3n_1, $composer_0, 54, 0);
      }
      var tmp_7;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_7 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_123($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function CompatibilityCard$lambda_1($$changed) {
    return function ($composer, $force) {
      CompatibilityCard($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function CompatibilityItem$lambda($this$Div) {
    $this$Div.z32([SettingsStyles_getInstance().m3p()]);
    return Unit_instance;
  }
  function CompatibilityItem$lambda$lambda($this$Div) {
    $this$Div.z32([SettingsStyles_getInstance().n3p()]);
    return Unit_instance;
  }
  function CompatibilityItem$lambda$lambda$lambda($this$Span) {
    $this$Span.z32([SettingsStyles_getInstance().o3p()]);
    return Unit_instance;
  }
  function CompatibilityItem$lambda$lambda$lambda_0($name) {
    return function ($this$Span, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-638263958, $changed, -1, 'CompatibilityItem.<anonymous>.<anonymous>.<anonymous> (SettingsScreen.kt:80)');
      }
      Text($name, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_124($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function CompatibilityItem$lambda$lambda$lambda_1($supported) {
    return function ($this$Span) {
      $this$Span.z32([SettingsStyles_getInstance().p3p(), $supported ? SettingsStyles_getInstance().q3p() : SettingsStyles_getInstance().r3p()]);
      return Unit_instance;
    };
  }
  function CompatibilityItem$lambda$lambda$lambda_2($supported) {
    return function ($this$Span, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1120869485, $changed, -1, 'CompatibilityItem.<anonymous>.<anonymous>.<anonymous> (SettingsScreen.kt:88)');
      }
      Text($supported ? '\u2713 Supported' : '\u2717 Not Supported', $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_125($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function CompatibilityItem$lambda$lambda_0($supported, $name) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-845730296, $changed, -1, 'CompatibilityItem.<anonymous>.<anonymous> (SettingsScreen.kt:79)');
      }
      $composer_0.m24(-1782897554);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'CompatibilityItem.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = CompatibilityItem$lambda$lambda$lambda;
        $composer_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'CompatibilityItem.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-638263958, true, CompatibilityItem$lambda$lambda$lambda_0($name), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.l26();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'CompatibilityItem.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_124(dispatchReceiver);
        $composer_1.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Span(tmp0_group, tmp0, $composer_0, 54, 0);
      $composer_0.m24(-1782893701);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_0.g25($supported);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.l26();
      var tmp_3;
      if (invalid_0 || it_1 === Companion_getInstance().e1z_1) {
        // Inline function 'CompatibilityItem.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = CompatibilityItem$lambda$lambda$lambda_1($supported);
        $composer_0.m26(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'CompatibilityItem.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver_0 = rememberComposableLambda(-1120869485, true, CompatibilityItem$lambda$lambda$lambda_2($supported), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_2.w1v(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_2.l26();
      var tmp_5;
      if (invalid_1 || it_2 === Companion_getInstance().e1z_1) {
        // Inline function 'CompatibilityItem.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_125(dispatchReceiver_0);
        $composer_2.m26(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Span(tmp1_group, tmp0_0, $composer_0, 48, 0);
      var tmp_7;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_7 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_126($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function CompatibilityItem$lambda$lambda_1($this$P) {
    $this$P.z32([SettingsStyles_getInstance().s3p()]);
    return Unit_instance;
  }
  function CompatibilityItem$lambda$lambda_2($description) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-613621175, $changed, -1, 'CompatibilityItem.<anonymous>.<anonymous> (SettingsScreen.kt:92)');
      }
      Text($description, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_127($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function CompatibilityItem$lambda_0($supported, $name, $description) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-15519961, $changed, -1, 'CompatibilityItem.<anonymous> (SettingsScreen.kt:78)');
      }
      $composer_0.m24(-1163023375);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'CompatibilityItem.<anonymous>.<anonymous>.<anonymous>' call
        var value = CompatibilityItem$lambda$lambda;
        $composer_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'CompatibilityItem.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-845730296, true, CompatibilityItem$lambda$lambda_0($supported, $name), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.l26();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'CompatibilityItem.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_126(dispatchReceiver);
        $composer_1.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      $composer_0.m24(-1163006442);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.l26();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().e1z_1) {
        // Inline function 'CompatibilityItem.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = CompatibilityItem$lambda$lambda_1;
        $composer_0.m26(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'CompatibilityItem.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver_0 = rememberComposableLambda(-613621175, true, CompatibilityItem$lambda$lambda_2($description), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.w1v(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_2.l26();
      var tmp_5;
      if (invalid_0 || it_2 === Companion_getInstance().e1z_1) {
        // Inline function 'CompatibilityItem.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_127(dispatchReceiver_0);
        $composer_2.m26(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      P(tmp1_group, tmp0_0, $composer_0, 54, 0);
      var tmp_7;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_7 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_128($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function CompatibilityItem$lambda_1($name, $supported, $description, $$changed) {
    return function ($composer, $force) {
      CompatibilityItem($name, $supported, $description, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function DataManagementCard$lambda_1($this$Div) {
    $this$Div.z32([SettingsStyles_getInstance().q3e()]);
    return Unit_instance;
  }
  function DataManagementCard$lambda$lambda($this$H3) {
    $this$H3.z32([SettingsStyles_getInstance().r3e()]);
    return Unit_instance;
  }
  function DataManagementCard$lambda$lambda_0($this$P) {
    $this$P.z32([SettingsStyles_getInstance().j3p()]);
    return Unit_instance;
  }
  function DataManagementCard$lambda$lambda_1($this$Div) {
    $this$Div.z32([SettingsStyles_getInstance().v3p()]);
    return Unit_instance;
  }
  function DataManagementCard$lambda$lambda$lambda($this$P) {
    $this$P.z32([SettingsStyles_getInstance().w3p()]);
    return Unit_instance;
  }
  function DataManagementCard$lambda$lambda$lambda_0($this$Div) {
    $this$Div.z32([SettingsStyles_getInstance().x3p()]);
    return Unit_instance;
  }
  function DataManagementCard$lambda$lambda$lambda$lambda$lambda($showClearConfirm$delegate) {
    return function (it) {
      clearAllData();
      DataManagementCard$lambda_0($showClearConfirm$delegate, false);
      return Unit_instance;
    };
  }
  function DataManagementCard$lambda$lambda$lambda$lambda($showClearConfirm$delegate) {
    return function ($this$Button) {
      $this$Button.z32([SettingsStyles_getInstance().y3p(), SettingsStyles_getInstance().z3p()]);
      $this$Button.b33(DataManagementCard$lambda$lambda$lambda$lambda$lambda($showClearConfirm$delegate));
      return Unit_instance;
    };
  }
  function DataManagementCard$lambda$lambda$lambda$lambda$lambda_0($showClearConfirm$delegate) {
    return function (it) {
      DataManagementCard$lambda_0($showClearConfirm$delegate, false);
      return Unit_instance;
    };
  }
  function DataManagementCard$lambda$lambda$lambda$lambda_0($showClearConfirm$delegate) {
    return function ($this$Button) {
      $this$Button.z32([SettingsStyles_getInstance().y3p(), SettingsStyles_getInstance().b3q()]);
      $this$Button.b33(DataManagementCard$lambda$lambda$lambda$lambda$lambda_0($showClearConfirm$delegate));
      return Unit_instance;
    };
  }
  function DataManagementCard$lambda$lambda$lambda_1($showClearConfirm$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-390868914, $changed, -1, 'DataManagementCard.<anonymous>.<anonymous>.<anonymous> (SettingsScreen.kt:116)');
      }
      $composer_0.m24(-1758027071);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'DataManagementCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = DataManagementCard$lambda$lambda$lambda$lambda($showClearConfirm$delegate);
        $composer_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      Button(tmp0_group, ComposableSingletons$SettingsScreenKt_getInstance().q3n_1, $composer_0, 54, 0);
      $composer_0.m24(-1758015131);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.l26();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'DataManagementCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = DataManagementCard$lambda$lambda$lambda$lambda_0($showClearConfirm$delegate);
        $composer_0.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.o24();
      Button(tmp1_group, ComposableSingletons$SettingsScreenKt_getInstance().r3n_1, $composer_0, 54, 0);
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_129($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function DataManagementCard$lambda$lambda_2($showClearConfirm$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1782577555, $changed, -1, 'DataManagementCard.<anonymous>.<anonymous> (SettingsScreen.kt:112)');
      }
      $composer_0.m24(1897582274);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'DataManagementCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = DataManagementCard$lambda$lambda$lambda;
        $composer_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      P(tmp0_group, ComposableSingletons$SettingsScreenKt_getInstance().p3n_1, $composer_0, 54, 0);
      $composer_0.m24(1897588293);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.l26();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'DataManagementCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = DataManagementCard$lambda$lambda$lambda_0;
        $composer_0.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'DataManagementCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-390868914, true, DataManagementCard$lambda$lambda$lambda_1($showClearConfirm$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.l26();
      var tmp_3;
      if (invalid || it_1 === Companion_getInstance().e1z_1) {
        // Inline function 'DataManagementCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_129(dispatchReceiver);
        $composer_1.m26(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp1_group, tmp0, $composer_0, 54, 0);
      var tmp_5;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_5 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_130($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function DataManagementCard$lambda$lambda$lambda_2($showClearConfirm$delegate) {
    return function (it) {
      DataManagementCard$lambda_0($showClearConfirm$delegate, true);
      return Unit_instance;
    };
  }
  function DataManagementCard$lambda$lambda_3($showClearConfirm$delegate) {
    return function ($this$Button) {
      $this$Button.z32([SettingsStyles_getInstance().y3p(), SettingsStyles_getInstance().z3p()]);
      $this$Button.b33(DataManagementCard$lambda$lambda$lambda_2($showClearConfirm$delegate));
      return Unit_instance;
    };
  }
  function DataManagementCard$lambda_2($showClearConfirm$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1432043641, $changed, -1, 'DataManagementCard.<anonymous> (SettingsScreen.kt:102)');
      }
      $composer_0.m24(-1373117631);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'DataManagementCard.<anonymous>.<anonymous>.<anonymous>' call
        var value = DataManagementCard$lambda$lambda;
        $composer_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      H3(tmp0_group, ComposableSingletons$SettingsScreenKt_getInstance().n3n_1, $composer_0, 54, 0);
      $composer_0.m24(-1373114237);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.l26();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'DataManagementCard.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = DataManagementCard$lambda$lambda_0;
        $composer_0.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.o24();
      P(tmp1_group, ComposableSingletons$SettingsScreenKt_getInstance().o3n_1, $composer_0, 54, 0);
      if (DataManagementCard$lambda($showClearConfirm$delegate)) {
        $composer_0.m24(383372206);
        $composer_0.m24(-1373106622);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.l26();
        var tmp_3;
        if (false || it_1 === Companion_getInstance().e1z_1) {
          // Inline function 'DataManagementCard.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = DataManagementCard$lambda$lambda_1;
          $composer_0.m26(value_1);
          tmp_3 = value_1;
        } else {
          tmp_3 = it_1;
        }
        var tmp_4 = tmp_3;
        var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_0.o24();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'DataManagementCard.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-1782577555, true, DataManagementCard$lambda$lambda_2($showClearConfirm$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.w1v(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_1.l26();
        var tmp_5;
        if (invalid || it_2 === Companion_getInstance().e1z_1) {
          // Inline function 'DataManagementCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_2 = ComposableLambda$invoke$ref_130(dispatchReceiver);
          $composer_1.m26(value_2);
          tmp_5 = value_2;
        } else {
          tmp_5 = it_2;
        }
        var tmp_6 = tmp_5;
        var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Div(tmp2_group, tmp0, $composer_0, 54, 0);
        $composer_0.o24();
      } else {
        $composer_0.m24(384361912);
        $composer_0.m24(-1373073717);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_3 = $composer_0.l26();
        var tmp_7;
        if (false || it_3 === Companion_getInstance().e1z_1) {
          // Inline function 'DataManagementCard.<anonymous>.<anonymous>.<anonymous>' call
          var value_3 = DataManagementCard$lambda$lambda_3($showClearConfirm$delegate);
          $composer_0.m26(value_3);
          tmp_7 = value_3;
        } else {
          tmp_7 = it_3;
        }
        var tmp_8 = tmp_7;
        var tmp3_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
        $composer_0.o24();
        Button(tmp3_group, ComposableSingletons$SettingsScreenKt_getInstance().s3n_1, $composer_0, 54, 0);
        $composer_0.o24();
      }
      var tmp_9;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_9 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_131($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function DataManagementCard$lambda_3($$changed) {
    return function ($composer, $force) {
      DataManagementCard($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function InfoCard$lambda($this$Div) {
    $this$Div.z32([SettingsStyles_getInstance().q3e()]);
    return Unit_instance;
  }
  function InfoCard$lambda_0($$changed) {
    return function ($composer, $force) {
      InfoCard($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function InfoItem$lambda($this$Div) {
    $this$Div.z32([SettingsStyles_getInstance().e3q()]);
    return Unit_instance;
  }
  function InfoItem$lambda$lambda($this$Span) {
    $this$Span.z32([SettingsStyles_getInstance().f3q()]);
    return Unit_instance;
  }
  function InfoItem$lambda$lambda_0($label) {
    return function ($this$Span, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1111687085, $changed, -1, 'InfoItem.<anonymous>.<anonymous> (SettingsScreen.kt:185)');
      }
      Text($label + ':', $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_132($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function InfoItem$lambda$lambda_1($this$Span) {
    $this$Span.z32([SettingsStyles_getInstance().g3q()]);
    return Unit_instance;
  }
  function InfoItem$lambda$lambda_2($value) {
    return function ($this$Span, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1241713188, $changed, -1, 'InfoItem.<anonymous>.<anonymous> (SettingsScreen.kt:188)');
      }
      Text($value, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_133($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function InfoItem$lambda_0($label, $value) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(321893327, $changed, -1, 'InfoItem.<anonymous> (SettingsScreen.kt:184)');
      }
      $composer_0.m24(2125381285);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.l26();
      var tmp;
      if (false || it === Companion_getInstance().e1z_1) {
        // Inline function 'InfoItem.<anonymous>.<anonymous>.<anonymous>' call
        var value = InfoItem$lambda$lambda;
        $composer_0.m26(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'InfoItem.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1111687085, true, InfoItem$lambda$lambda_0($label), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w1v(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.l26();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().e1z_1) {
        // Inline function 'InfoItem.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_132(dispatchReceiver);
        $composer_1.m26(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Span(tmp0_group, tmp0, $composer_0, 54, 0);
      $composer_0.m24(2125384485);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.l26();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().e1z_1) {
        // Inline function 'InfoItem.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = InfoItem$lambda$lambda_1;
        $composer_0.m26(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.o24();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'InfoItem.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver_0 = rememberComposableLambda(1241713188, true, InfoItem$lambda$lambda_2($value), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.w1v(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_2.l26();
      var tmp_5;
      if (invalid_0 || it_2 === Companion_getInstance().e1z_1) {
        // Inline function 'InfoItem.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_133(dispatchReceiver_0);
        $composer_2.m26(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Span(tmp1_group, tmp0_0, $composer_0, 54, 0);
      var tmp_7;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_7 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_134($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w30(p0, p1, p2);
    };
  }
  function InfoItem$lambda_1($label, $value, $$changed) {
    return function ($composer, $force) {
      InfoItem($label, $value, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function container$factory_5() {
    return getPropertyCallableRef('container', 1, KProperty1, function (receiver) {
      return receiver.o3e();
    }, null);
  }
  function title$factory_5() {
    return getPropertyCallableRef('title', 1, KProperty1, function (receiver) {
      return receiver.p3e();
    }, null);
  }
  function card$factory_3() {
    return getPropertyCallableRef('card', 1, KProperty1, function (receiver) {
      return receiver.q3e();
    }, null);
  }
  function cardTitle$factory_1() {
    return getPropertyCallableRef('cardTitle', 1, KProperty1, function (receiver) {
      return receiver.r3e();
    }, null);
  }
  function description$factory() {
    return getPropertyCallableRef('description', 1, KProperty1, function (receiver) {
      return receiver.j3p();
    }, null);
  }
  function version$factory() {
    return getPropertyCallableRef('version', 1, KProperty1, function (receiver) {
      return receiver.k3p();
    }, null);
  }
  function compatibilityGrid$factory() {
    return getPropertyCallableRef('compatibilityGrid', 1, KProperty1, function (receiver) {
      return receiver.l3p();
    }, null);
  }
  function compatibilityItem$factory() {
    return getPropertyCallableRef('compatibilityItem', 1, KProperty1, function (receiver) {
      return receiver.m3p();
    }, null);
  }
  function compatibilityHeader$factory() {
    return getPropertyCallableRef('compatibilityHeader', 1, KProperty1, function (receiver) {
      return receiver.n3p();
    }, null);
  }
  function compatibilityName$factory() {
    return getPropertyCallableRef('compatibilityName', 1, KProperty1, function (receiver) {
      return receiver.o3p();
    }, null);
  }
  function compatibilityStatus$factory() {
    return getPropertyCallableRef('compatibilityStatus', 1, KProperty1, function (receiver) {
      return receiver.p3p();
    }, null);
  }
  function statusSupported$factory() {
    return getPropertyCallableRef('statusSupported', 1, KProperty1, function (receiver) {
      return receiver.q3p();
    }, null);
  }
  function statusUnsupported$factory() {
    return getPropertyCallableRef('statusUnsupported', 1, KProperty1, function (receiver) {
      return receiver.r3p();
    }, null);
  }
  function compatibilityDescription$factory() {
    return getPropertyCallableRef('compatibilityDescription', 1, KProperty1, function (receiver) {
      return receiver.s3p();
    }, null);
  }
  function warningBox$factory() {
    return getPropertyCallableRef('warningBox', 1, KProperty1, function (receiver) {
      return receiver.t3p();
    }, null);
  }
  function warningIcon$factory() {
    return getPropertyCallableRef('warningIcon', 1, KProperty1, function (receiver) {
      return receiver.u3p();
    }, null);
  }
  function confirmBox$factory() {
    return getPropertyCallableRef('confirmBox', 1, KProperty1, function (receiver) {
      return receiver.v3p();
    }, null);
  }
  function confirmText$factory() {
    return getPropertyCallableRef('confirmText', 1, KProperty1, function (receiver) {
      return receiver.w3p();
    }, null);
  }
  function confirmButtons$factory() {
    return getPropertyCallableRef('confirmButtons', 1, KProperty1, function (receiver) {
      return receiver.x3p();
    }, null);
  }
  function button$factory() {
    return getPropertyCallableRef('button', 1, KProperty1, function (receiver) {
      return receiver.y3p();
    }, null);
  }
  function dangerButton$factory() {
    return getPropertyCallableRef('dangerButton', 1, KProperty1, function (receiver) {
      return receiver.z3p();
    }, null);
  }
  function dangerButtonHover$factory() {
    return getPropertyCallableRef('dangerButtonHover', 1, KProperty1, function (receiver) {
      return receiver.a3q();
    }, null);
  }
  function secondaryButton$factory() {
    return getPropertyCallableRef('secondaryButton', 1, KProperty1, function (receiver) {
      return receiver.b3q();
    }, null);
  }
  function secondaryButtonHover$factory() {
    return getPropertyCallableRef('secondaryButtonHover', 1, KProperty1, function (receiver) {
      return receiver.c3q();
    }, null);
  }
  function infoGrid$factory() {
    return getPropertyCallableRef('infoGrid', 1, KProperty1, function (receiver) {
      return receiver.d3q();
    }, null);
  }
  function infoItem$factory() {
    return getPropertyCallableRef('infoItem', 1, KProperty1, function (receiver) {
      return receiver.e3q();
    }, null);
  }
  function infoLabel$factory() {
    return getPropertyCallableRef('infoLabel', 1, KProperty1, function (receiver) {
      return receiver.f3q();
    }, null);
  }
  function infoValue$factory() {
    return getPropertyCallableRef('infoValue', 1, KProperty1, function (receiver) {
      return receiver.g3q();
    }, null);
  }
  function linksContainer$factory() {
    return getPropertyCallableRef('linksContainer', 1, KProperty1, function (receiver) {
      return receiver.h3q();
    }, null);
  }
  function linkButton$factory() {
    return getPropertyCallableRef('linkButton', 1, KProperty1, function (receiver) {
      return receiver.i3q();
    }, null);
  }
  function container$factory_6() {
    return getPropertyCallableRef('container', 1, KProperty1, function (receiver) {
      return receiver.o3e();
    }, null);
  }
  function title$factory_6() {
    return getPropertyCallableRef('title', 1, KProperty1, function (receiver) {
      return receiver.p3e();
    }, null);
  }
  function card$factory_4() {
    return getPropertyCallableRef('card', 1, KProperty1, function (receiver) {
      return receiver.q3e();
    }, null);
  }
  function cardTitle$factory_2() {
    return getPropertyCallableRef('cardTitle', 1, KProperty1, function (receiver) {
      return receiver.r3e();
    }, null);
  }
  function description$factory_0() {
    return getPropertyCallableRef('description', 1, KProperty1, function (receiver) {
      return receiver.j3p();
    }, null);
  }
  function version$factory_0() {
    return getPropertyCallableRef('version', 1, KProperty1, function (receiver) {
      return receiver.k3p();
    }, null);
  }
  function compatibilityGrid$factory_0() {
    return getPropertyCallableRef('compatibilityGrid', 1, KProperty1, function (receiver) {
      return receiver.l3p();
    }, null);
  }
  function compatibilityItem$factory_0() {
    return getPropertyCallableRef('compatibilityItem', 1, KProperty1, function (receiver) {
      return receiver.m3p();
    }, null);
  }
  function compatibilityHeader$factory_0() {
    return getPropertyCallableRef('compatibilityHeader', 1, KProperty1, function (receiver) {
      return receiver.n3p();
    }, null);
  }
  function compatibilityName$factory_0() {
    return getPropertyCallableRef('compatibilityName', 1, KProperty1, function (receiver) {
      return receiver.o3p();
    }, null);
  }
  function compatibilityStatus$factory_0() {
    return getPropertyCallableRef('compatibilityStatus', 1, KProperty1, function (receiver) {
      return receiver.p3p();
    }, null);
  }
  function statusSupported$factory_0() {
    return getPropertyCallableRef('statusSupported', 1, KProperty1, function (receiver) {
      return receiver.q3p();
    }, null);
  }
  function statusUnsupported$factory_0() {
    return getPropertyCallableRef('statusUnsupported', 1, KProperty1, function (receiver) {
      return receiver.r3p();
    }, null);
  }
  function compatibilityDescription$factory_0() {
    return getPropertyCallableRef('compatibilityDescription', 1, KProperty1, function (receiver) {
      return receiver.s3p();
    }, null);
  }
  function warningBox$factory_0() {
    return getPropertyCallableRef('warningBox', 1, KProperty1, function (receiver) {
      return receiver.t3p();
    }, null);
  }
  function warningIcon$factory_0() {
    return getPropertyCallableRef('warningIcon', 1, KProperty1, function (receiver) {
      return receiver.u3p();
    }, null);
  }
  function confirmBox$factory_0() {
    return getPropertyCallableRef('confirmBox', 1, KProperty1, function (receiver) {
      return receiver.v3p();
    }, null);
  }
  function confirmText$factory_0() {
    return getPropertyCallableRef('confirmText', 1, KProperty1, function (receiver) {
      return receiver.w3p();
    }, null);
  }
  function confirmButtons$factory_0() {
    return getPropertyCallableRef('confirmButtons', 1, KProperty1, function (receiver) {
      return receiver.x3p();
    }, null);
  }
  function button$factory_0() {
    return getPropertyCallableRef('button', 1, KProperty1, function (receiver) {
      return receiver.y3p();
    }, null);
  }
  function dangerButton$factory_0() {
    return getPropertyCallableRef('dangerButton', 1, KProperty1, function (receiver) {
      return receiver.z3p();
    }, null);
  }
  function dangerButtonHover$factory_0() {
    return getPropertyCallableRef('dangerButtonHover', 1, KProperty1, function (receiver) {
      return receiver.a3q();
    }, null);
  }
  function secondaryButton$factory_0() {
    return getPropertyCallableRef('secondaryButton', 1, KProperty1, function (receiver) {
      return receiver.b3q();
    }, null);
  }
  function secondaryButtonHover$factory_0() {
    return getPropertyCallableRef('secondaryButtonHover', 1, KProperty1, function (receiver) {
      return receiver.c3q();
    }, null);
  }
  function infoGrid$factory_0() {
    return getPropertyCallableRef('infoGrid', 1, KProperty1, function (receiver) {
      return receiver.d3q();
    }, null);
  }
  function infoItem$factory_0() {
    return getPropertyCallableRef('infoItem', 1, KProperty1, function (receiver) {
      return receiver.e3q();
    }, null);
  }
  function infoLabel$factory_0() {
    return getPropertyCallableRef('infoLabel', 1, KProperty1, function (receiver) {
      return receiver.f3q();
    }, null);
  }
  function infoValue$factory_0() {
    return getPropertyCallableRef('infoValue', 1, KProperty1, function (receiver) {
      return receiver.g3q();
    }, null);
  }
  function linksContainer$factory_0() {
    return getPropertyCallableRef('linksContainer', 1, KProperty1, function (receiver) {
      return receiver.h3q();
    }, null);
  }
  function linkButton$factory_0() {
    return getPropertyCallableRef('linkButton', 1, KProperty1, function (receiver) {
      return receiver.i3q();
    }, null);
  }
  //region block: post-declaration
  protoOf(AnalyticsPresenter).b1a = getKoin;
  protoOf(HistoryPresenter).b1a = getKoin;
  protoOf(MonitorPresenter).b1a = getKoin;
  //endregion
  //region block: init
  AppStyles$stable = 8;
  components_ChartDataset$stable = 8;
  components_ChartStyles$stable = 8;
  AnalyticsPresenter$stable = 8;
  AnalyticsState$stable = 8;
  AnalyticsStyles$stable = 8;
  HistoryPresenter$stable = 8;
  HistoryState$stable = 8;
  ChartData$stable = 8;
  HistoryStyles$stable = 8;
  MonitorPresenter$stable = 8;
  MonitorState$stable = 8;
  MonitorStyles$stable = 8;
  SettingsStyles$stable = 8;
  //endregion
  mainWrapper();
  return _;
}));

//# sourceMappingURL=Embit-webApp.js.map
