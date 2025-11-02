(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-collection-collection.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-collection-collection.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-runtime-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-runtime-runtime'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-runtime-runtime'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-runtime-runtime'.");
    }
    if (typeof globalThis['compose-multiplatform-core-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-runtime-runtime'. Its dependency 'compose-multiplatform-core-collection-collection' was not found. Please, check whether 'compose-multiplatform-core-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-runtime-runtime'.");
    }
    globalThis['compose-multiplatform-core-compose-runtime-runtime'] = factory(typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-collection-collection']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_collection_internal_collection) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.m7;
  var initMetadataForInterface = kotlin_kotlin.$_$.y6;
  var Unit_instance = kotlin_kotlin.$_$.y2;
  var initMetadataForClass = kotlin_kotlin.$_$.v6;
  var VOID = kotlin_kotlin.$_$.d;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.p;
  var THROW_CCE = kotlin_kotlin.$_$.y8;
  var Companion_instance = kotlin_kotlin.$_$.x2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.l2;
  var createFailure = kotlin_kotlin.$_$.e9;
  var intercepted = kotlin_kotlin.$_$.n5;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var get = kotlin_kotlin.$_$.w5;
  var fold = kotlin_kotlin.$_$.v5;
  var minusKey = kotlin_kotlin.$_$.x5;
  var plus = kotlin_kotlin.$_$.z5;
  var toString = kotlin_kotlin.$_$.o7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var isInterface = kotlin_kotlin.$_$.e7;
  var equals = kotlin_kotlin.$_$.m6;
  var hashCode = kotlin_kotlin.$_$.u6;
  var rotateLeft = kotlin_kotlin.$_$.k9;
  var Enum = kotlin_kotlin.$_$.q8;
  var rotateRight = kotlin_kotlin.$_$.l9;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.x;
  var fill = kotlin_kotlin.$_$.d4;
  var MutableIntIntMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.a;
  var emptyList = kotlin_kotlin.$_$.a4;
  var Long = kotlin_kotlin.$_$.u8;
  var sortWith = kotlin_kotlin.$_$.b5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.o;
  var to = kotlin_kotlin.$_$.o9;
  var initMetadataForCompanion = kotlin_kotlin.$_$.w6;
  var IllegalStateException = kotlin_kotlin.$_$.t8;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.n1;
  var captureStack = kotlin_kotlin.$_$.h6;
  var defineProp = kotlin_kotlin.$_$.l6;
  var MutableIntObjectMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.c;
  var lazy = kotlin_kotlin.$_$.h9;
  var mutableScatterSetOf = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.k;
  var MutableScatterSet = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.h;
  var mutableListOf = kotlin_kotlin.$_$.t4;
  var KtMutableList = kotlin_kotlin.$_$.i3;
  var MutableScatterMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.g;
  var compareTo = kotlin_kotlin.$_$.k6;
  var FunctionAdapter = kotlin_kotlin.$_$.d6;
  var Comparator = kotlin_kotlin.$_$.p8;
  var KProperty1 = kotlin_kotlin.$_$.b8;
  var getPropertyCallableRef = kotlin_kotlin.$_$.s6;
  var MutableIntList = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.b;
  var isArray = kotlin_kotlin.$_$.c7;
  var KtSet = kotlin_kotlin.$_$.j3;
  var mutableScatterSetOf_0 = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.l;
  var KtMap = kotlin_kotlin.$_$.h3;
  var Exception = kotlin_kotlin.$_$.s8;
  var plus_0 = kotlin_kotlin.$_$.v4;
  var initMetadataForObject = kotlin_kotlin.$_$.a7;
  var fillArrayVal = kotlin_kotlin.$_$.o6;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var toString_0 = kotlin_kotlin.$_$.n9;
  var Element = kotlin_kotlin.$_$.y5;
  var getStringHashCode = kotlin_kotlin.$_$.t6;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var CoroutineImpl = kotlin_kotlin.$_$.a6;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.l5;
  var initMetadataForLambda = kotlin_kotlin.$_$.z6;
  var MutableObjectIntMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.e;
  var ScatterSet = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.i;
  var fill_0 = kotlin_kotlin.$_$.f4;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.q;
  var withContext = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.r;
  var addAll = kotlin_kotlin.$_$.l3;
  var toList = kotlin_kotlin.$_$.f5;
  var flatten = kotlin_kotlin.$_$.h4;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var CancellationException = kotlin_kotlin.$_$.k5;
  var addSuppressed = kotlin_kotlin.$_$.b9;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var returnIfSuspended = kotlin_kotlin.$_$.l;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.x6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var removeFirst = kotlin_kotlin.$_$.z4;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.s;
  var arrayCopy = kotlin_kotlin.$_$.m3;
  var MutableObjectList = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.f;
  var anyToString = kotlin_kotlin.$_$.e6;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var MutableIntSet = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.d;
  var first = kotlin_kotlin.$_$.g4;
  var last = kotlin_kotlin.$_$.o4;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.s2;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var copyOf = kotlin_kotlin.$_$.x3;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.d1;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var plus_1 = kotlin_kotlin.$_$.x4;
  var coerceAtMost = kotlin_kotlin.$_$.s7;
  var coerceAtLeast = kotlin_kotlin.$_$.r7;
  var copyOf_0 = kotlin_kotlin.$_$.w3;
  var ensureNotNull = kotlin_kotlin.$_$.f9;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.t1;
  var SequenceScope = kotlin_kotlin.$_$.c8;
  var numberRangeToNumber = kotlin_kotlin.$_$.h7;
  var until = kotlin_kotlin.$_$.x7;
  var iterator = kotlin_kotlin.$_$.d8;
  var Collection = kotlin_kotlin.$_$.e3;
  var mutableScatterMapOf = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.j;
  var mutableSetOf = kotlin_kotlin.$_$.u4;
  var NoSuchElementException_init_$Create$_0 = kotlin_kotlin.$_$.s1;
  var AbstractList = kotlin_kotlin.$_$.z2;
  var KtList = kotlin_kotlin.$_$.f3;
  var arrayIterator = kotlin_kotlin.$_$.f6;
  var AbstractMutableList = kotlin_kotlin.$_$.b3;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.o1;
  var indexOf = kotlin_kotlin.$_$.i4;
  var AbstractMap = kotlin_kotlin.$_$.a3;
  var Entry = kotlin_kotlin.$_$.g3;
  var AbstractSet = kotlin_kotlin.$_$.c3;
  var objectCreate = kotlin_kotlin.$_$.l7;
  var step = kotlin_kotlin.$_$.w7;
  var countOneBits = kotlin_kotlin.$_$.c9;
  var ConcurrentModificationException_init_$Create$_0 = kotlin_kotlin.$_$.g1;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.r1;
  var toString_1 = kotlin_kotlin.$_$.j8;
  var longArray = kotlin_kotlin.$_$.g7;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.t;
  var Char = kotlin_kotlin.$_$.o8;
  var isCharSequence = kotlin_kotlin.$_$.d7;
  var minus = kotlin_kotlin.$_$.s4;
  var contains = kotlin_kotlin.$_$.t3;
  var plus_2 = kotlin_kotlin.$_$.w4;
  var primitiveArrayConcat = kotlin_kotlin.$_$.c;
  var singleOrNull = kotlin_kotlin.$_$.a5;
  var intArrayIterator = kotlin_kotlin.$_$.b7;
  var toIntArray = kotlin_kotlin.$_$.e5;
  var sequence = kotlin_kotlin.$_$.e8;
  var countTrailingZeroBits = kotlin_kotlin.$_$.d9;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.s3;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var println = kotlin_kotlin.$_$.c6;
  var printStackTrace = kotlin_kotlin.$_$.j9;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.g;
  var toDuration = kotlin_kotlin.$_$.l8;
  var _Duration___get_inWholeNanoseconds__impl__r5x4mr = kotlin_kotlin.$_$.d2;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.c1;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.y;
  //endregion
  //region block: pre-declaration
  function onBeginChanges() {
  }
  function onEndChanges() {
  }
  initMetadataForInterface(Applier, 'Applier');
  initMetadataForClass(OffsetApplier, 'OffsetApplier', VOID, VOID, [Applier]);
  initMetadataForClass(AbstractApplier, 'AbstractApplier', VOID, VOID, [Applier]);
  initMetadataForClass(FrameAwaiter, 'FrameAwaiter');
  function get_key() {
    return Key_instance_0;
  }
  initMetadataForInterface(MonotonicFrameClock, 'MonotonicFrameClock', VOID, VOID, [Element], [1]);
  initMetadataForClass(BroadcastFrameClock, 'BroadcastFrameClock', BroadcastFrameClock, VOID, [MonotonicFrameClock], [1]);
  initMetadataForInterface(ComposeNodeLifecycleCallback, 'ComposeNodeLifecycleCallback');
  initMetadataForClass(Invalidation, 'Invalidation');
  initMetadataForInterface(RememberObserver, 'RememberObserver');
  initMetadataForInterface(ReusableRememberObserver, 'ReusableRememberObserver', VOID, VOID, [RememberObserver]);
  initMetadataForClass(CompositionContextHolder, 'CompositionContextHolder', VOID, VOID, [ReusableRememberObserver]);
  initMetadataForClass(ComposerImpl$derivedStateObserver$1);
  function changed(value) {
    return this.g25(value);
  }
  function changed_0(value) {
    return this.h25(value);
  }
  function changedInstance(value) {
    return this.w1v(value);
  }
  initMetadataForInterface(Composer, 'Composer');
  initMetadataForClass(ComposerImpl, 'ComposerImpl', VOID, VOID, [Composer]);
  initMetadataForClass(Composer$Companion$Empty$1);
  initMetadataForCompanion(Companion);
  initMetadataForClass(InvalidationResult, 'InvalidationResult', VOID, Enum);
  initMetadataForClass(MovableContentStateReference, 'MovableContentStateReference');
  initMetadataForClass(MovableContentState, 'MovableContentState');
  initMetadataForClass(MovableContent, 'MovableContent');
  initMetadataForClass(ComposeRuntimeError, 'ComposeRuntimeError', VOID, IllegalStateException);
  initMetadataForClass(RememberObserverHolder, 'RememberObserverHolder');
  initMetadataForClass(Pending, 'Pending');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(GroupInfo, 'GroupInfo');
  initMetadataForClass(MutableScatterMultiMap, 'MutableScatterMultiMap');
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(RememberEventDispatcher, 'RememberEventDispatcher');
  initMetadataForInterface(RecomposeScopeOwner, 'RecomposeScopeOwner');
  initMetadataForClass(CompositionImpl, 'CompositionImpl', VOID, VOID, [RecomposeScopeOwner]);
  initMetadataForClass(CompositionObserverHolder, 'CompositionObserverHolder', CompositionObserverHolder);
  initMetadataForObject(ComposableSingletons$CompositionKt, 'ComposableSingletons$CompositionKt');
  initMetadataForObject(ScopeInvalidated, 'ScopeInvalidated');
  initMetadataForClass(CompositionImplServiceKey$1);
  initMetadataForClass(CompositionContext, 'CompositionContext');
  initMetadataForClass(CompositionLocal, 'CompositionLocal');
  initMetadataForClass(ProvidableCompositionLocal, 'ProvidableCompositionLocal', VOID, CompositionLocal);
  initMetadataForClass(StaticProvidableCompositionLocal, 'StaticProvidableCompositionLocal', VOID, ProvidableCompositionLocal);
  initMetadataForInterface(PersistentCompositionLocalMap, 'PersistentCompositionLocalMap', VOID, VOID, [KtMap]);
  initMetadataForInterface(DerivedState, 'DerivedState');
  initMetadataForClass(DisposableEffectScope, 'DisposableEffectScope', DisposableEffectScope);
  initMetadataForClass(DisposableEffectImpl, 'DisposableEffectImpl', VOID, VOID, [RememberObserver]);
  initMetadataForClass(LaunchedEffectImpl, 'LaunchedEffectImpl', VOID, VOID, [RememberObserver]);
  initMetadataForClass(PlatformOptimizedCancellationException, 'PlatformOptimizedCancellationException', VOID, CancellationException);
  initMetadataForClass(LeftCompositionCancellationException, 'LeftCompositionCancellationException', LeftCompositionCancellationException, PlatformOptimizedCancellationException);
  initMetadataForClass(JoinedKey, 'JoinedKey');
  initMetadataForObject(Key, 'Key');
  initMetadataForClass(OpaqueKey, 'OpaqueKey');
  initMetadataForInterface(ProduceStateScope, 'ProduceStateScope', VOID, VOID, [CoroutineScope_0], [1]);
  initMetadataForClass(ProduceStateScopeImpl, 'ProduceStateScopeImpl', VOID, VOID, [ProduceStateScope], [1]);
  initMetadataForLambda(produceState$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(RecomposeScopeImpl, 'RecomposeScopeImpl');
  initMetadataForLambda(Recomposer$recompositionRunner$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(State, 'State', VOID, Enum);
  initMetadataForClass(RecomposerInfoImpl, 'RecomposerInfoImpl');
  initMetadataForClass(RecomposerErrorState, 'RecomposerErrorState');
  initMetadataForCompanion(Companion_2);
  initMetadataForLambda(Recomposer$runRecomposeAndApplyChanges$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(Recomposer$recompositionRunner$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($awaitWorkAvailableCOROUTINE$2, CoroutineImpl);
  initMetadataForClass(Recomposer, 'Recomposer', VOID, CompositionContext, VOID, [0, 1, 2]);
  initMetadataForClass(SlotTable, 'SlotTable', SlotTable);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(SlotWriter, 'SlotWriter');
  initMetadataForClass(Anchor, 'Anchor');
  initMetadataForClass(GroupSourceInformation, 'GroupSourceInformation');
  initMetadataForClass(SlotReader, 'SlotReader');
  initMetadataForClass(GroupIterator, 'GroupIterator');
  initMetadataForClass(SlotTableGroup, 'SlotTableGroup');
  initMetadataForClass(PrioritySet, 'PrioritySet', PrioritySet);
  initMetadataForClass(KeyInfo, 'KeyInfo');
  initMetadataForClass(SourceInformationGroupIterator, 'SourceInformationGroupIterator');
  initMetadataForClass(SourceInformationGroupPath, 'SourceInformationGroupPath');
  initMetadataForClass(AnchoredGroupPath, 'AnchoredGroupPath', VOID, SourceInformationGroupPath);
  initMetadataForClass(SourceInformationSlotTableGroup, 'SourceInformationSlotTableGroup');
  initMetadataForClass(RelativeGroupPath, 'RelativeGroupPath', VOID, SourceInformationGroupPath);
  initMetadataForLambda(collectAsState$slambda$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(collectAsState$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(collectAsState$slambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(collectAsState$slambda, CoroutineImpl, VOID, [1]);
  function merge(previous, current, applied) {
    return null;
  }
  initMetadataForInterface(SnapshotMutationPolicy, 'SnapshotMutationPolicy');
  initMetadataForObject(StructuralEqualityPolicy, 'StructuralEqualityPolicy', VOID, VOID, [SnapshotMutationPolicy]);
  initMetadataForClass(StateRecord, 'StateRecord');
  initMetadataForClass(StateStateRecord, 'StateStateRecord', VOID, StateRecord);
  function mergeRecords(previous, current, applied) {
    return null;
  }
  initMetadataForInterface(StateObject, 'StateObject');
  initMetadataForClass(StateObjectImpl, 'StateObjectImpl', VOID, VOID, [StateObject]);
  initMetadataForClass(SnapshotMutableStateImpl, 'SnapshotMutableStateImpl', VOID, StateObjectImpl);
  initMetadataForClass(SnapshotThreadLocal, 'SnapshotThreadLocal', SnapshotThreadLocal);
  initMetadataForClass(IntStack, 'IntStack', IntStack);
  initMetadataForClass(Stack, 'Stack', Stack);
  initMetadataForClass(LazyValueHolder, 'LazyValueHolder');
  initMetadataForClass(OperationsDebugStringFormattable, 'OperationsDebugStringFormattable');
  initMetadataForClass(ChangeList, 'ChangeList', ChangeList, OperationsDebugStringFormattable);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(ComposerChangeListWriter, 'ComposerChangeListWriter');
  initMetadataForClass(FixupList, 'FixupList', FixupList, OperationsDebugStringFormattable);
  initMetadataForClass(Operation, 'Operation');
  initMetadataForObject(Ups, 'Ups', VOID, Operation);
  initMetadataForObject(Downs, 'Downs', VOID, Operation);
  initMetadataForObject(AdvanceSlotsBy, 'AdvanceSlotsBy', VOID, Operation);
  initMetadataForObject(Remember, 'Remember', VOID, Operation);
  initMetadataForObject(AppendValue, 'AppendValue', VOID, Operation);
  initMetadataForObject(TrimParentValues, 'TrimParentValues', VOID, Operation);
  initMetadataForObject(UpdateValue, 'UpdateValue', VOID, Operation);
  initMetadataForObject(UpdateAnchoredValue, 'UpdateAnchoredValue', VOID, Operation);
  initMetadataForObject(UpdateAuxData, 'UpdateAuxData', VOID, Operation);
  initMetadataForObject(EnsureRootGroupStarted, 'EnsureRootGroupStarted', VOID, Operation);
  initMetadataForObject(EnsureGroupStarted, 'EnsureGroupStarted', VOID, Operation);
  initMetadataForObject(RemoveCurrentGroup, 'RemoveCurrentGroup', VOID, Operation);
  initMetadataForObject(MoveCurrentGroup, 'MoveCurrentGroup', VOID, Operation);
  initMetadataForObject(EndCurrentGroup, 'EndCurrentGroup', VOID, Operation);
  initMetadataForObject(SkipToEndOfCurrentGroup, 'SkipToEndOfCurrentGroup', VOID, Operation);
  initMetadataForObject(EndCompositionScope, 'EndCompositionScope', VOID, Operation);
  initMetadataForObject(UseCurrentNode, 'UseCurrentNode', VOID, Operation);
  initMetadataForObject(UpdateNode, 'UpdateNode', VOID, Operation);
  initMetadataForObject(RemoveNode, 'RemoveNode', VOID, Operation);
  initMetadataForObject(MoveNode, 'MoveNode', VOID, Operation);
  initMetadataForObject(InsertSlots, 'InsertSlots', VOID, Operation);
  initMetadataForObject(InsertSlotsWithFixups, 'InsertSlotsWithFixups', VOID, Operation);
  initMetadataForObject(InsertNodeFixup, 'InsertNodeFixup', VOID, Operation);
  initMetadataForObject(PostInsertNodeFixup, 'PostInsertNodeFixup', VOID, Operation);
  initMetadataForObject(ResetSlots, 'ResetSlots', VOID, Operation);
  initMetadataForObject(DetermineMovableContentNodeIndex, 'DetermineMovableContentNodeIndex', VOID, Operation);
  initMetadataForObject(CopyNodesToNewAnchorLocation, 'CopyNodesToNewAnchorLocation', VOID, Operation);
  initMetadataForObject(CopySlotTableToAnchorLocation, 'CopySlotTableToAnchorLocation', VOID, Operation);
  initMetadataForObject(EndMovableContentPlacement, 'EndMovableContentPlacement', VOID, Operation);
  initMetadataForObject(ReleaseMovableGroupAtCurrent, 'ReleaseMovableGroupAtCurrent', VOID, Operation);
  initMetadataForObject(ApplyChangeList, 'ApplyChangeList', VOID, Operation);
  initMetadataForClass(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1, VOID, VOID, VOID, [RecomposeScopeOwner]);
  initMetadataForClass(OpIterator, 'OpIterator');
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(Operations, 'Operations', Operations, OperationsDebugStringFormattable);
  initMetadataForClass(MutableVector, 'MutableVector');
  initMetadataForLambda(ScatterSetWrapper$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(ScatterSetWrapper, 'ScatterSetWrapper', VOID, VOID, [KtSet]);
  initMetadataForClass(ScopeMap, 'ScopeMap', ScopeMap);
  initMetadataForClass(AbstractListIterator, 'AbstractListIterator');
  initMetadataForClass(AbstractPersistentList, 'AbstractPersistentList', VOID, AbstractList, [KtList, Collection, AbstractList]);
  initMetadataForClass(BufferIterator, 'BufferIterator', VOID, AbstractListIterator);
  initMetadataForClass(PersistentVector, 'PersistentVector', VOID, AbstractPersistentList, [KtList, Collection, AbstractPersistentList]);
  initMetadataForClass(PersistentVectorBuilder, 'PersistentVectorBuilder', VOID, AbstractMutableList, [AbstractMutableList, Collection, KtMutableList]);
  initMetadataForClass(PersistentVectorIterator, 'PersistentVectorIterator', VOID, AbstractListIterator);
  initMetadataForClass(PersistentVectorMutableIterator, 'PersistentVectorMutableIterator', VOID, AbstractListIterator);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(SmallPersistentVector, 'SmallPersistentVector', VOID, AbstractPersistentList, [KtList, Collection, AbstractPersistentList]);
  initMetadataForClass(TrieIterator, 'TrieIterator', VOID, AbstractListIterator);
  initMetadataForClass(ObjectRef, 'ObjectRef');
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(PersistentHashMap, 'PersistentHashMap', VOID, AbstractMap, [AbstractMap, KtMap]);
  initMetadataForClass(PersistentHashMapBaseIterator, 'PersistentHashMapBaseIterator');
  initMetadataForClass(PersistentHashMapKeysIterator, 'PersistentHashMapKeysIterator', VOID, PersistentHashMapBaseIterator);
  initMetadataForClass(PersistentHashMapEntriesIterator, 'PersistentHashMapEntriesIterator', VOID, PersistentHashMapBaseIterator);
  initMetadataForClass(TrieNodeBaseIterator, 'TrieNodeBaseIterator');
  initMetadataForClass(TrieNodeKeysIterator, 'TrieNodeKeysIterator', TrieNodeKeysIterator, TrieNodeBaseIterator);
  initMetadataForClass(TrieNodeEntriesIterator, 'TrieNodeEntriesIterator', TrieNodeEntriesIterator, TrieNodeBaseIterator);
  initMetadataForClass(MapEntry, 'MapEntry', VOID, VOID, [Entry]);
  initMetadataForClass(PersistentHashMapKeys, 'PersistentHashMapKeys', VOID, AbstractSet, [KtSet, Collection, AbstractSet]);
  initMetadataForClass(PersistentHashMapEntries, 'PersistentHashMapEntries', VOID, AbstractSet, [KtSet, Collection, AbstractSet]);
  initMetadataForClass(ModificationResult, 'ModificationResult');
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(TrieNode, 'TrieNode');
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(PersistentOrderedSet, 'PersistentOrderedSet', VOID, AbstractSet, [AbstractSet, KtSet, Collection]);
  initMetadataForClass(Links, 'Links', Links_init_$Create$);
  initMetadataForClass(PersistentOrderedSetIterator, 'PersistentOrderedSetIterator');
  initMetadataForObject(EndOfChain, 'EndOfChain');
  initMetadataForObject(ListImplementation, 'ListImplementation');
  initMetadataForClass(MutabilityOwnership, 'MutabilityOwnership', MutabilityOwnership);
  initMetadataForClass(IntRef, 'IntRef', IntRef);
  initMetadataForCompanion(Companion_10);
  initMetadataForClass(PersistentCompositionLocalHashMap, 'PersistentCompositionLocalHashMap', VOID, PersistentHashMap, [PersistentHashMap, PersistentCompositionLocalMap]);
  initMetadataForClass(ThreadMap, 'ThreadMap');
  initMetadataForInterface(ObserverHandle, 'ObserverHandle');
  initMetadataForClass(sam$androidx_compose_runtime_snapshots_ObserverHandle$0, 'sam$androidx_compose_runtime_snapshots_ObserverHandle$0', VOID, VOID, [ObserverHandle, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0, 'sam$androidx_compose_runtime_snapshots_ObserverHandle$0', VOID, VOID, [ObserverHandle, FunctionAdapter]);
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(Snapshot, 'Snapshot');
  initMetadataForCompanion(Companion_12);
  initMetadataForClass(MutableSnapshot, 'MutableSnapshot', VOID, Snapshot);
  initMetadataForClass(SnapshotApplyResult, 'SnapshotApplyResult');
  initMetadataForObject(Success, 'Success', VOID, SnapshotApplyResult);
  initMetadataForClass(Failure, 'Failure', VOID, SnapshotApplyResult);
  initMetadataForClass(GlobalSnapshot, 'GlobalSnapshot', VOID, MutableSnapshot);
  initMetadataForClass(NestedMutableSnapshot, 'NestedMutableSnapshot', VOID, MutableSnapshot);
  initMetadataForClass(SnapshotDoubleIndexHeap, 'SnapshotDoubleIndexHeap', SnapshotDoubleIndexHeap);
  initMetadataForCompanion(Companion_13);
  initMetadataForLambda(SnapshotIdSet$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(SnapshotIdSet, 'SnapshotIdSet');
  initMetadataForClass(StateListStateRecord, 'StateListStateRecord', VOID, StateRecord);
  initMetadataForClass(SnapshotStateList, 'SnapshotStateList', SnapshotStateList, VOID, [StateObject, KtMutableList]);
  initMetadataForClass(StateListIterator, 'StateListIterator');
  initMetadataForClass(SnapshotWeakSet, 'SnapshotWeakSet', SnapshotWeakSet);
  initMetadataForCompanion(Companion_14);
  initMetadataForClass(AtomicReference, 'AtomicReference');
  initMetadataForClass(AtomicInt, 'AtomicInt');
  initMetadataForClass(ComposableLambdaImpl, 'ComposableLambdaImpl');
  initMetadataForCoroutine($withFrameNanosCOROUTINE$5, CoroutineImpl);
  initMetadataForClass(MonotonicClockImpl, 'MonotonicClockImpl', MonotonicClockImpl, VOID, [MonotonicFrameClock], [1]);
  initMetadataForObject(Trace, 'Trace');
  initMetadataForClass(IntMap, 'IntMap', IntMap);
  initMetadataForClass(WeakReference, 'WeakReference');
  //endregion
  function Applier() {
  }
  function OffsetApplier(applier, offset) {
    this.b1s_1 = applier;
    this.c1s_1 = offset;
    this.d1s_1 = 0;
  }
  protoOf(OffsetApplier).s1r = function () {
    return this.b1s_1.s1r();
  };
  protoOf(OffsetApplier).v1r = function (node) {
    this.d1s_1 = this.d1s_1 + 1 | 0;
    this.b1s_1.v1r(node);
  };
  protoOf(OffsetApplier).w1r = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.d1s_1 > 0)) {
      // Inline function 'androidx.compose.runtime.OffsetApplier.up.<anonymous>' call
      var tmp$ret$0 = 'OffsetApplier up called with no corresponding down';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.d1s_1 = this.d1s_1 - 1 | 0;
    this.b1s_1.w1r();
  };
  protoOf(OffsetApplier).x1r = function (index, instance) {
    this.b1s_1.x1r(index + (this.d1s_1 === 0 ? this.c1s_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).y1r = function (index, instance) {
    this.b1s_1.y1r(index + (this.d1s_1 === 0 ? this.c1s_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).z1r = function (index, count) {
    this.b1s_1.z1r(index + (this.d1s_1 === 0 ? this.c1s_1 : 0) | 0, count);
  };
  protoOf(OffsetApplier).a1s = function (from, to, count) {
    var effectiveOffset = this.d1s_1 === 0 ? this.c1s_1 : 0;
    this.b1s_1.a1s(from + effectiveOffset | 0, to + effectiveOffset | 0, count);
  };
  function AbstractApplier(root) {
    this.e1s_1 = root;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.f1s_1 = ArrayList_init_$Create$();
    this.g1s_1 = this.e1s_1;
  }
  protoOf(AbstractApplier).h1s = function (_set____db54di) {
    this.g1s_1 = _set____db54di;
  };
  protoOf(AbstractApplier).s1r = function () {
    return this.g1s_1;
  };
  protoOf(AbstractApplier).i1s = function (node) {
    this.f1s_1.d(this.s1r());
    this.h1s(node);
  };
  protoOf(AbstractApplier).v1r = function (node) {
    return this.i1s((node == null ? true : !(node == null)) ? node : THROW_CCE());
  };
  protoOf(AbstractApplier).w1r = function () {
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.f1s_1.n()) {
      // Inline function 'androidx.compose.runtime.AbstractApplier.up.<anonymous>' call
      var tmp$ret$1 = 'empty stack';
      throwIllegalStateException(tmp$ret$1);
    }
    this.h1s(this.f1s_1.h1(this.f1s_1.l() - 1 | 0));
  };
  function FrameAwaiter(onFrame, continuation) {
    this.j1s_1 = onFrame;
    this.k1s_1 = continuation;
  }
  protoOf(FrameAwaiter).l1s = function (timeNanos) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      // Inline function 'androidx.compose.runtime.FrameAwaiter.resume.<anonymous>' call
      var value = this.j1s_1(timeNanos);
      tmp = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var tmp$ret$3 = tmp;
    this.k1s_1.q8(tmp$ret$3);
  };
  function fail($this, cause) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.n1s_1;
    if (!($this.o1s_1 == null))
      return Unit_instance;
    $this.o1s_1 = cause;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var this_0 = $this.p1s_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.o(index);
        // Inline function 'androidx.compose.runtime.BroadcastFrameClock.fail.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var this_1 = item.k1s_1;
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        this_1.q8(tmp$ret$0);
      }
       while (inductionVariable <= last);
    $this.p1s_1.e1();
    $this.r1s_1.t1s(0);
  }
  function BroadcastFrameClock$withFrameNanos$lambda(this$0, $awaiter) {
    return function (it) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      this$0.n1s_1;
      this$0.p1s_1.d1($awaiter);
      if (this$0.p1s_1.n()) {
        this$0.r1s_1.t1s(0);
      }
      return Unit_instance;
    };
  }
  function BroadcastFrameClock(onNewAwaiters) {
    onNewAwaiters = onNewAwaiters === VOID ? null : onNewAwaiters;
    this.m1s_1 = onNewAwaiters;
    this.n1s_1 = new Object();
    this.o1s_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.p1s_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.q1s_1 = ArrayList_init_$Create$();
    this.r1s_1 = new AtomicInt(0);
  }
  protoOf(BroadcastFrameClock).u1s = function () {
    return !(this.r1s_1.pn() === 0);
  };
  protoOf(BroadcastFrameClock).v1s = function (timeNanos) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.n1s_1;
    var toResume = this.p1s_1;
    this.p1s_1 = this.q1s_1;
    this.q1s_1 = toResume;
    this.r1s_1.t1s(0);
    var inductionVariable = 0;
    var last = toResume.l();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        toResume.o(i).l1s(timeNanos);
      }
       while (inductionVariable < last);
    toResume.e1();
  };
  protoOf(BroadcastFrameClock).w1s = function (onFrame, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.fl();
    $l$block: {
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>' call
      var awaiter = new FrameAwaiter(onFrame, cancellable);
      // Inline function 'androidx.compose.runtime.synchronized' call
      this.n1s_1;
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>.<anonymous>' call
      var cause = this.o1s_1;
      if (!(cause == null)) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        cancellable.q8(tmp$ret$0);
        break $l$block;
      }
      // Inline function 'kotlin.collections.isNotEmpty' call
      var hadAwaiters = !this.p1s_1.n();
      this.p1s_1.d(awaiter);
      if (!hadAwaiters) {
        this.r1s_1.t1s(1);
      }
      var hasNewAwaiters = !hadAwaiters;
      cancellable.bk(BroadcastFrameClock$withFrameNanos$lambda(this, awaiter));
      if (hasNewAwaiters && !(this.m1s_1 == null)) {
        try {
          this.m1s_1();
        } catch ($p) {
          if ($p instanceof Error) {
            var t = $p;
            fail(this, t);
          } else {
            throw $p;
          }
        }
      }
    }
    return cancellable.nj();
  };
  function invalidApplier() {
    var message = 'Invalid applier';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function ComposeNodeLifecycleCallback() {
  }
  function get_compositionTracer() {
    _init_properties_Composer_kt__bmp4g0();
    return compositionTracer;
  }
  var compositionTracer;
  function get_invocation() {
    _init_properties_Composer_kt__bmp4g0();
    return invocation;
  }
  var invocation;
  var provider;
  function get_compositionLocalMap() {
    _init_properties_Composer_kt__bmp4g0();
    return compositionLocalMap;
  }
  var compositionLocalMap;
  var providerValues;
  var providerMaps;
  function get_reference() {
    _init_properties_Composer_kt__bmp4g0();
    return reference;
  }
  var reference;
  function get_InvalidationLocationAscending() {
    _init_properties_Composer_kt__bmp4g0();
    return InvalidationLocationAscending;
  }
  var InvalidationLocationAscending;
  function Invalidation(scope, location, instances) {
    this.a1t_1 = scope;
    this.b1t_1 = location;
    this.c1t_1 = instances;
  }
  protoOf(Invalidation).d1t = function () {
    return this.a1t_1.m1t(this.c1t_1);
  };
  function startRoot($this) {
    $this.y1t_1 = 0;
    $this.u1u_1 = $this.p1t_1.q1v();
    startGroup($this, 100);
    $this.o1t_1.r1v();
    $this.h1u_1 = $this.o1t_1.s1v();
    $this.k1u_1.v1v(asInt($this.j1u_1));
    $this.j1u_1 = $this.w1v($this.h1u_1);
    $this.y1u_1 = null;
    if (!$this.c1u_1) {
      $this.c1u_1 = $this.o1t_1.x1v();
    }
    if (!$this.p1u_1) {
      $this.p1u_1 = $this.o1t_1.y1v();
    }
    var tmp0_safe_receiver = read($this.h1u_1, get_LocalInspectionTables());
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.d($this.p1t_1);
      $this.o1t_1.z1v(tmp0_safe_receiver);
    }
    startGroup($this, $this.o1t_1.a1w());
  }
  function endRoot($this) {
    endGroup($this);
    $this.o1t_1.b1w();
    endGroup($this);
    $this.a1v_1.o1w();
    finalizeCompose($this);
    $this.u1u_1.e1x();
    $this.d1u_1 = false;
    $this.j1u_1 = asBool($this.k1u_1.f1x());
  }
  function abortRoot($this) {
    cleanUpCompose($this);
    $this.u1t_1.e1();
    $this.z1t_1.e1();
    $this.g1u_1.e1();
    $this.k1u_1.e1();
    $this.i1u_1 = null;
    $this.c1v_1.e1();
    $this.e1v_1 = 0;
    $this.n1u_1 = 0;
    $this.e1u_1 = false;
    $this.d1v_1 = false;
    $this.l1u_1 = false;
    $this.s1u_1 = false;
    $this.d1u_1 = false;
    $this.m1u_1 = -1;
    if (!$this.u1u_1.v1w_1) {
      $this.u1u_1.e1x();
    }
    if (!$this.w1u_1.f1y_1) {
      forceFreshInsertTable($this);
    }
  }
  function startGroup($this, key) {
    return start($this, key, null, Companion_getInstance_0().h1y_1, null);
  }
  function startGroup_0($this, key, dataKey) {
    return start($this, key, dataKey, Companion_getInstance_0().h1y_1, null);
  }
  function endGroup($this) {
    return end($this, false);
  }
  function skipGroup($this) {
    $this.x1t_1 = $this.x1t_1 + $this.u1u_1.k1y() | 0;
  }
  function updateSlot($this, value) {
    $this.l1y();
    $this.m1y(value);
  }
  function rememberObserverAnchor($this) {
    var tmp;
    if ($this.d1v_1) {
      var tmp_0;
      if (get_isAfterFirstChild($this.w1u_1)) {
        var group = $this.w1u_1.c1y_1 - 1 | 0;
        var parent = $this.w1u_1.n1y(group);
        while (!(parent === $this.w1u_1.e1y_1) && parent >= 0) {
          group = parent;
          parent = $this.w1u_1.n1y(group);
        }
        tmp_0 = $this.w1u_1.o1y(group);
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (get_isAfterFirstChild_0($this.u1u_1)) {
        var group_0 = $this.u1u_1.w1w_1 - 1 | 0;
        var parent_0 = $this.u1u_1.n1y(group_0);
        while (!(parent_0 === $this.u1u_1.y1w_1) && parent_0 >= 0) {
          group_0 = parent_0;
          parent_0 = $this.u1u_1.n1y(group_0);
        }
        tmp_1 = $this.u1u_1.o1y(group_0);
      } else {
        tmp_1 = null;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function currentCompositionLocalScope($this) {
    var tmp0_safe_receiver = $this.y1u_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    return currentCompositionLocalScope_0($this, $this.u1u_1.y1w_1);
  }
  function currentCompositionLocalScope_0($this, group) {
    if ($this.d1v_1 && $this.x1u_1) {
      var current = $this.w1u_1.e1y_1;
      while (current > 0) {
        if ($this.w1u_1.q1y(current) === 202 && equals($this.w1u_1.r1y(current), get_compositionLocalMap())) {
          var tmp = $this.w1u_1.p1y(current);
          var providers = (!(tmp == null) ? isInterface(tmp, PersistentCompositionLocalMap) : false) ? tmp : THROW_CCE();
          $this.y1u_1 = providers;
          return providers;
        }
        current = $this.w1u_1.n1y(current);
      }
    }
    if ($this.u1u_1.l() > 0) {
      var current_0 = group;
      while (current_0 > 0) {
        if ($this.u1u_1.q1y(current_0) === 202 && equals($this.u1u_1.r1y(current_0), get_compositionLocalMap())) {
          var tmp0_safe_receiver = $this.i1u_1;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o(current_0);
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            var tmp_1 = $this.u1u_1.p1y(current_0);
            tmp_0 = (!(tmp_1 == null) ? isInterface(tmp_1, PersistentCompositionLocalMap) : false) ? tmp_1 : THROW_CCE();
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var providers_0 = tmp_0;
          $this.y1u_1 = providers_0;
          return providers_0;
        }
        current_0 = $this.u1u_1.n1y(current_0);
      }
    }
    $this.y1u_1 = $this.h1u_1;
    return $this.h1u_1;
  }
  function recordProviderUpdate($this, providers) {
    var tmp0_elvis_lhs = $this.i1u_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.recordProviderUpdate.<anonymous>' call
      var newProviderUpdates = new IntMap();
      $this.i1u_1 = newProviderUpdates;
      tmp = newProviderUpdates;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var providerUpdates = tmp;
    providerUpdates.t1y($this.u1u_1.w1w_1, providers);
  }
  function ensureWriter($this) {
    if ($this.w1u_1.f1y_1) {
      $this.w1u_1 = $this.v1u_1.u1y();
      $this.w1u_1.v1y();
      $this.x1u_1 = false;
      $this.y1u_1 = null;
    }
  }
  function createFreshInsertTable($this) {
    runtimeCheck($this.w1u_1.f1y_1);
    forceFreshInsertTable($this);
  }
  function forceFreshInsertTable($this) {
    var tmp = $this;
    // Inline function 'kotlin.apply' call
    var this_0 = new SlotTable();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.forceFreshInsertTable.<anonymous>' call
    if ($this.p1u_1) {
      this_0.w1y();
    }
    if ($this.o1t_1.y1y()) {
      this_0.x1y();
    }
    tmp.v1u_1 = this_0;
    var tmp_0 = $this;
    // Inline function 'kotlin.also' call
    var this_1 = $this.v1u_1.u1y();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.forceFreshInsertTable.<anonymous>' call
    this_1.z1y(true);
    tmp_0.w1u_1 = this_1;
  }
  function startReaderGroup($this, isNode, data) {
    if (isNode) {
      $this.u1u_1.d1z();
    } else {
      if (!(data == null) && !($this.u1u_1.b1z() === data)) {
        $this.a1v_1.a1z(data);
      }
      $this.u1u_1.c1z();
    }
  }
  function start($this, key, objectKey, kind, data) {
    validateNodeNotExpected($this);
    // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroup' call
    var rGroupIndex = $this.y1t_1;
    if (objectKey == null)
      if (!(data == null) && key === 207 && !equals(data, Companion_getInstance().e1z_1)) {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var keyHash = hashCode(data);
        var tmp = $this;
        // Inline function 'androidx.compose.runtime.rol' call
        // Inline function 'androidx.compose.runtime.rol' call
        var this_0 = $this.e1v_1;
        var this_1 = rotateLeft(this_0, 3) ^ keyHash;
        tmp.e1v_1 = rotateLeft(this_1, 3) ^ rGroupIndex;
      } else {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var tmp_0 = $this;
        // Inline function 'androidx.compose.runtime.rol' call
        // Inline function 'androidx.compose.runtime.rol' call
        var this_2 = $this.e1v_1;
        var this_3 = rotateLeft(this_2, 3) ^ key;
        tmp_0.e1v_1 = rotateLeft(this_3, 3) ^ rGroupIndex;
      }
     else {
      if (objectKey instanceof Enum) {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var keyHash_0 = objectKey.r1_1;
        var tmp_1 = $this;
        // Inline function 'androidx.compose.runtime.rol' call
        // Inline function 'androidx.compose.runtime.rol' call
        var this_4 = $this.e1v_1;
        var this_5 = rotateLeft(this_4, 3) ^ keyHash_0;
        tmp_1.e1v_1 = rotateLeft(this_5, 3) ^ 0;
      } else {
        var keyHash_1 = hashCode(objectKey);
        var tmp_2 = $this;
        // Inline function 'androidx.compose.runtime.rol' call
        // Inline function 'androidx.compose.runtime.rol' call
        var this_6 = $this.e1v_1;
        var this_7 = rotateLeft(this_6, 3) ^ keyHash_1;
        tmp_2.e1v_1 = rotateLeft(this_7, 3) ^ 0;
      }
    }
    if (objectKey == null) {
      $this.y1t_1 = $this.y1t_1 + 1 | 0;
    }
    // Inline function 'androidx.compose.runtime.GroupKind.isNode' call
    var isNode = !(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_0().h1y_1));
    if ($this.d1v_1) {
      $this.u1u_1.f1z();
      var startIndex = $this.w1u_1.c1y_1;
      if (isNode) {
        $this.w1u_1.i1z(key, Companion_getInstance().e1z_1);
      } else if (!(data == null)) {
        var tmp_3 = $this.w1u_1;
        tmp_3.h1z(key, objectKey == null ? Companion_getInstance().e1z_1 : objectKey, data);
      } else {
        var tmp_4 = $this.w1u_1;
        tmp_4.g1z(key, objectKey == null ? Companion_getInstance().e1z_1 : objectKey);
      }
      var tmp4_safe_receiver = $this.v1t_1;
      if (tmp4_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.start.<anonymous>' call
        var insertKeyInfo = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex), -1, 0);
        tmp4_safe_receiver.p1z(insertKeyInfo, $this.w1t_1 - tmp4_safe_receiver.k1z_1 | 0);
        tmp4_safe_receiver.q1z(insertKeyInfo);
      }
      enterGroup($this, isNode, null);
      return Unit_instance;
    }
    var tmp_5;
    // Inline function 'androidx.compose.runtime.GroupKind.isReusable' call
    if (!!(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_0().i1y_1))) {
      tmp_5 = $this.l1u_1;
    } else {
      tmp_5 = false;
    }
    var forceReplace = tmp_5;
    if ($this.v1t_1 == null) {
      var slotKey = $this.u1u_1.r1z();
      if (!forceReplace && slotKey === key && equals(objectKey, $this.u1u_1.t1z())) {
        startReaderGroup($this, isNode, data);
      } else {
        $this.v1t_1 = new Pending($this.u1u_1.s1z(), $this.w1t_1);
      }
    }
    var pending = $this.v1t_1;
    var newPending = null;
    if (!(pending == null)) {
      var keyInfo = pending.u1z(key, objectKey);
      if (!forceReplace && !(keyInfo == null)) {
        pending.q1z(keyInfo);
        var location = keyInfo.y1z_1;
        $this.w1t_1 = pending.b20(keyInfo) + pending.k1z_1 | 0;
        var relativePosition = pending.c20(keyInfo);
        var currentRelativePosition = relativePosition - pending.l1z_1 | 0;
        pending.d20(relativePosition, pending.l1z_1);
        $this.a1v_1.e20(location);
        $this.u1u_1.f20(location);
        if (currentRelativePosition > 0) {
          $this.a1v_1.g20(currentRelativePosition);
        }
        startReaderGroup($this, isNode, data);
      } else {
        $this.u1u_1.f1z();
        $this.d1v_1 = true;
        $this.y1u_1 = null;
        ensureWriter($this);
        $this.w1u_1.v1z();
        var startIndex_0 = $this.w1u_1.c1y_1;
        if (isNode) {
          $this.w1u_1.i1z(key, Companion_getInstance().e1z_1);
        } else if (!(data == null)) {
          var tmp_6 = $this.w1u_1;
          tmp_6.h1z(key, objectKey == null ? Companion_getInstance().e1z_1 : objectKey, data);
        } else {
          var tmp_7 = $this.w1u_1;
          tmp_7.g1z(key, objectKey == null ? Companion_getInstance().e1z_1 : objectKey);
        }
        $this.b1v_1 = $this.w1u_1.o1y(startIndex_0);
        var insertKeyInfo_0 = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex_0), -1, 0);
        pending.p1z(insertKeyInfo_0, $this.w1t_1 - pending.k1z_1 | 0);
        pending.q1z(insertKeyInfo_0);
        // Inline function 'kotlin.collections.mutableListOf' call
        var tmp$ret$12 = ArrayList_init_$Create$();
        newPending = new Pending(tmp$ret$12, isNode ? 0 : $this.w1t_1);
      }
    }
    enterGroup($this, isNode, newPending);
  }
  function enterGroup($this, isNode, newPending) {
    $this.u1t_1.h20($this.v1t_1);
    $this.v1t_1 = newPending;
    $this.z1t_1.v1v($this.x1t_1);
    $this.z1t_1.v1v($this.y1t_1);
    $this.z1t_1.v1v($this.w1t_1);
    if (isNode)
      $this.w1t_1 = 0;
    $this.x1t_1 = 0;
    $this.y1t_1 = 0;
  }
  function exitGroup($this, expectedNodeCount, inserting) {
    var previousPending = $this.u1t_1.f1x();
    if (!(previousPending == null) && !inserting) {
      previousPending.l1z_1 = previousPending.l1z_1 + 1 | 0;
    }
    $this.v1t_1 = previousPending;
    $this.w1t_1 = $this.z1t_1.f1x() + expectedNodeCount | 0;
    $this.y1t_1 = $this.z1t_1.f1x();
    $this.x1t_1 = $this.z1t_1.f1x() + expectedNodeCount | 0;
  }
  function end($this, isNode) {
    var rGroupIndex = $this.z1t_1.i20() - 1 | 0;
    if ($this.d1v_1) {
      var parent = $this.w1u_1.e1y_1;
      // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroup' call
      var groupKey = $this.w1u_1.q1y(parent);
      var dataKey = $this.w1u_1.r1y(parent);
      var data = $this.w1u_1.p1y(parent);
      if (dataKey == null)
        if (!(data == null) && groupKey === 207 && !equals(data, Companion_getInstance().e1z_1)) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_0 = hashCode(data);
          var tmp = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          // Inline function 'androidx.compose.runtime.ror' call
          var this_0 = $this.e1v_1 ^ rGroupIndex;
          var this_1 = rotateRight(this_0, 3) ^ groupKey_0;
          tmp.e1v_1 = rotateRight(this_1, 3);
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var tmp_0 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          // Inline function 'androidx.compose.runtime.ror' call
          var this_2 = $this.e1v_1 ^ rGroupIndex;
          var this_3 = rotateRight(this_2, 3) ^ groupKey;
          tmp_0.e1v_1 = rotateRight(this_3, 3);
        }
       else {
        if (dataKey instanceof Enum) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_1 = dataKey.r1_1;
          var tmp_1 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          // Inline function 'androidx.compose.runtime.ror' call
          var this_4 = $this.e1v_1 ^ 0;
          var this_5 = rotateRight(this_4, 3) ^ groupKey_1;
          tmp_1.e1v_1 = rotateRight(this_5, 3);
        } else {
          var groupKey_2 = hashCode(dataKey);
          var tmp_2 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          // Inline function 'androidx.compose.runtime.ror' call
          var this_6 = $this.e1v_1 ^ 0;
          var this_7 = rotateRight(this_6, 3) ^ groupKey_2;
          tmp_2.e1v_1 = rotateRight(this_7, 3);
        }
      }
    } else {
      var parent_0 = $this.u1u_1.y1w_1;
      // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroup' call
      var groupKey_3 = $this.u1u_1.q1y(parent_0);
      var dataKey_0 = $this.u1u_1.r1y(parent_0);
      var data_0 = $this.u1u_1.p1y(parent_0);
      if (dataKey_0 == null)
        if (!(data_0 == null) && groupKey_3 === 207 && !equals(data_0, Companion_getInstance().e1z_1)) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_4 = hashCode(data_0);
          var tmp_3 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          // Inline function 'androidx.compose.runtime.ror' call
          var this_8 = $this.e1v_1 ^ rGroupIndex;
          var this_9 = rotateRight(this_8, 3) ^ groupKey_4;
          tmp_3.e1v_1 = rotateRight(this_9, 3);
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var tmp_4 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          // Inline function 'androidx.compose.runtime.ror' call
          var this_10 = $this.e1v_1 ^ rGroupIndex;
          var this_11 = rotateRight(this_10, 3) ^ groupKey_3;
          tmp_4.e1v_1 = rotateRight(this_11, 3);
        }
       else {
        if (dataKey_0 instanceof Enum) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_5 = dataKey_0.r1_1;
          var tmp_5 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          // Inline function 'androidx.compose.runtime.ror' call
          var this_12 = $this.e1v_1 ^ 0;
          var this_13 = rotateRight(this_12, 3) ^ groupKey_5;
          tmp_5.e1v_1 = rotateRight(this_13, 3);
        } else {
          var groupKey_6 = hashCode(dataKey_0);
          var tmp_6 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          // Inline function 'androidx.compose.runtime.ror' call
          var this_14 = $this.e1v_1 ^ 0;
          var this_15 = rotateRight(this_14, 3) ^ groupKey_6;
          tmp_6.e1v_1 = rotateRight(this_15, 3);
        }
      }
    }
    var expectedNodeCount = $this.x1t_1;
    var pending = $this.v1t_1;
    if (!(pending == null) && pending.j1z_1.l() > 0) {
      var previous = pending.j1z_1;
      var current = pending.j20();
      var usedKeys = fastToSet(current);
      // Inline function 'kotlin.collections.mutableSetOf' call
      var placedKeys = LinkedHashSet_init_$Create$();
      var currentIndex = 0;
      var currentEnd = current.l();
      var previousIndex = 0;
      var previousEnd = previous.l();
      var nodeOffset = 0;
      $l$loop_0: while (previousIndex < previousEnd) {
        var previousInfo = previous.o(previousIndex);
        if (!usedKeys.p(previousInfo)) {
          var deleteOffset = pending.b20(previousInfo);
          $this.a1v_1.k20(deleteOffset + pending.k1z_1 | 0, previousInfo.z1z_1);
          pending.l20(previousInfo.y1z_1, 0);
          $this.a1v_1.e20(previousInfo.y1z_1);
          $this.u1u_1.f20(previousInfo.y1z_1);
          recordDelete($this);
          $this.u1u_1.k1y();
          removeRange($this.f1u_1, previousInfo.y1z_1, previousInfo.y1z_1 + $this.u1u_1.m20(previousInfo.y1z_1) | 0);
          previousIndex = previousIndex + 1 | 0;
          continue $l$loop_0;
        }
        if (placedKeys.p(previousInfo)) {
          previousIndex = previousIndex + 1 | 0;
          continue $l$loop_0;
        }
        if (currentIndex < currentEnd) {
          var currentInfo = current.o(currentIndex);
          if (!(currentInfo === previousInfo)) {
            var nodePosition = pending.b20(currentInfo);
            placedKeys.d(currentInfo);
            if (!(nodePosition === nodeOffset)) {
              var updatedCount = pending.n20(currentInfo);
              $this.a1v_1.o20(nodePosition + pending.k1z_1 | 0, nodeOffset + pending.k1z_1 | 0, updatedCount);
              pending.p20(nodePosition, nodeOffset, updatedCount);
            }
          } else {
            previousIndex = previousIndex + 1 | 0;
          }
          currentIndex = currentIndex + 1 | 0;
          nodeOffset = nodeOffset + pending.n20(currentInfo) | 0;
        }
      }
      $this.a1v_1.q20();
      if (previous.l() > 0) {
        $this.a1v_1.e20($this.u1u_1.r20());
        $this.u1u_1.v1y();
      }
    }
    var removeIndex = $this.w1t_1;
    while (!$this.u1u_1.s20()) {
      var startSlot = $this.u1u_1.w1w_1;
      recordDelete($this);
      var nodesToRemove = $this.u1u_1.k1y();
      $this.a1v_1.k20(removeIndex, nodesToRemove);
      removeRange($this.f1u_1, startSlot, $this.u1u_1.w1w_1);
    }
    var inserting = $this.d1v_1;
    if (inserting) {
      if (isNode) {
        $this.c1v_1.y20();
        expectedNodeCount = 1;
      }
      $this.u1u_1.z20();
      var parentGroup = $this.w1u_1.e1y_1;
      $this.w1u_1.a21();
      if (!$this.u1u_1.d21()) {
        var virtualIndex = insertedGroupVirtualIndex($this, parentGroup);
        $this.w1u_1.b21();
        $this.w1u_1.z1y(true);
        recordInsert($this, $this.b1v_1);
        $this.d1v_1 = false;
        if (!$this.p1t_1.c21()) {
          updateNodeCount($this, virtualIndex, 0);
          updateNodeCountOverrides($this, virtualIndex, expectedNodeCount);
        }
      }
    } else {
      if (isNode) {
        $this.a1v_1.t20();
      }
      var remainingSlots = $this.u1u_1.u20();
      if (remainingSlots > 0) {
        $this.a1v_1.v20(remainingSlots);
      }
      $this.a1v_1.w20();
      var parentGroup_0 = $this.u1u_1.y1w_1;
      var parentNodeCount = updatedNodeCount($this, parentGroup_0);
      if (!(expectedNodeCount === parentNodeCount)) {
        updateNodeCountOverrides($this, parentGroup_0, expectedNodeCount);
      }
      if (isNode) {
        expectedNodeCount = 1;
      }
      $this.u1u_1.x20();
      $this.a1v_1.q20();
    }
    exitGroup($this, expectedNodeCount, inserting);
  }
  function recomposeToGroupEnd($this) {
    var wasComposing = $this.s1u_1;
    $this.s1u_1 = true;
    var recomposed = false;
    var parent = $this.u1u_1.y1w_1;
    var end = parent + $this.u1u_1.m20(parent) | 0;
    var recomposeIndex = $this.w1t_1;
    var recomposeCompoundKey = $this.e1v_1;
    var oldGroupNodeCount = $this.x1t_1;
    var oldRGroupIndex = $this.y1t_1;
    var oldGroup = parent;
    var firstInRange_0 = firstInRange($this.f1u_1, $this.u1u_1.w1w_1, end);
    while (!(firstInRange_0 == null)) {
      var location = firstInRange_0.b1t_1;
      removeLocation($this.f1u_1, location);
      if (firstInRange_0.d1t()) {
        recomposed = true;
        $this.u1u_1.f20(location);
        var newGroup = $this.u1u_1.w1w_1;
        recordUpsAndDowns($this, oldGroup, newGroup, parent);
        oldGroup = newGroup;
        $this.w1t_1 = nodeIndexOf($this, location, newGroup, parent, recomposeIndex);
        $this.y1t_1 = rGroupIndexOf($this, newGroup);
        var newParent = $this.u1u_1.n1y(newGroup);
        $this.e1v_1 = compoundKeyOf($this, newParent, rGroupIndexOf($this, newParent), parent, recomposeCompoundKey);
        $this.y1u_1 = null;
        firstInRange_0.a1t_1.f21($this);
        $this.y1u_1 = null;
        $this.u1u_1.g21(parent);
      } else {
        $this.r1u_1.h20(firstInRange_0.a1t_1);
        firstInRange_0.a1t_1.e21();
        $this.r1u_1.f1x();
      }
      firstInRange_0 = firstInRange($this.f1u_1, $this.u1u_1.w1w_1, end);
    }
    if (recomposed) {
      recordUpsAndDowns($this, oldGroup, parent, parent);
      $this.u1u_1.v1y();
      var parentGroupNodes = updatedNodeCount($this, parent);
      $this.w1t_1 = recomposeIndex + parentGroupNodes | 0;
      $this.x1t_1 = oldGroupNodeCount + parentGroupNodes | 0;
      $this.y1t_1 = oldRGroupIndex;
    } else {
      skipReaderToGroupEnd($this);
    }
    $this.e1v_1 = recomposeCompoundKey;
    $this.s1u_1 = wasComposing;
  }
  function insertedGroupVirtualIndex($this, index) {
    return -2 - index | 0;
  }
  function updateNodeCountOverrides($this, group, newCount) {
    var currentCount = updatedNodeCount($this, group);
    if (!(currentCount === newCount)) {
      var delta = newCount - currentCount | 0;
      var current = group;
      var minPending = $this.u1t_1.l() - 1 | 0;
      $l$loop_0: while (!(current === -1)) {
        var newCurrentNodes = updatedNodeCount($this, current) + delta | 0;
        updateNodeCount($this, current, newCurrentNodes);
        var inductionVariable = minPending;
        if (0 <= inductionVariable)
          $l$loop: do {
            var pendingIndex = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            var pending = $this.u1t_1.h21(pendingIndex);
            if (!(pending == null) && pending.l20(current, newCurrentNodes)) {
              minPending = pendingIndex - 1 | 0;
              break $l$loop;
            }
          }
           while (0 <= inductionVariable);
        if (current < 0) {
          current = $this.u1u_1.y1w_1;
        } else {
          if ($this.u1u_1.i21(current))
            break $l$loop_0;
          current = $this.u1u_1.n1y(current);
        }
      }
    }
  }
  function nodeIndexOf($this, groupLocation, group, recomposeGroup, recomposeIndex) {
    var anchorGroup = $this.u1u_1.n1y(group);
    $l$loop: while (!(anchorGroup === recomposeGroup) && !$this.u1u_1.i21(anchorGroup)) {
      anchorGroup = $this.u1u_1.n1y(anchorGroup);
    }
    var index = $this.u1u_1.i21(anchorGroup) ? 0 : recomposeIndex;
    if (anchorGroup === group)
      return index;
    var current = anchorGroup;
    var nodeIndexLimit = index + (updatedNodeCount($this, anchorGroup) - $this.u1u_1.j21(group) | 0) | 0;
    loop: while (index < nodeIndexLimit && current !== groupLocation) {
      current = current + 1 | 0;
      while (current < groupLocation) {
        var end = current + $this.u1u_1.m20(current) | 0;
        if (groupLocation < end)
          continue loop;
        index = index + ($this.u1u_1.i21(current) ? 1 : updatedNodeCount($this, current)) | 0;
        current = end;
      }
      break loop;
    }
    return index;
  }
  function rGroupIndexOf($this, group) {
    var result = 0;
    var parent = $this.u1u_1.n1y(group);
    var child = parent + 1 | 0;
    while (child < group) {
      if (!$this.u1u_1.k21(child)) {
        result = result + 1 | 0;
      }
      child = child + $this.u1u_1.m20(child) | 0;
    }
    return result;
  }
  function updatedNodeCount($this, group) {
    if (group < 0) {
      var tmp0_safe_receiver = $this.b1u_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.updatedNodeCount.<anonymous>' call
        tmp = tmp0_safe_receiver.d1m(group) ? tmp0_safe_receiver.o(group) : 0;
      }
      var tmp1_elvis_lhs = tmp;
      return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    var nodeCounts = $this.a1u_1;
    if (!(nodeCounts == null)) {
      var override = nodeCounts[group];
      if (override >= 0)
        return override;
    }
    return $this.u1u_1.j21(group);
  }
  function updateNodeCount($this, group, count) {
    if (!(updatedNodeCount($this, group) === count)) {
      if (group < 0) {
        var tmp0_elvis_lhs = $this.b1u_1;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts = new MutableIntIntMap();
          $this.b1u_1 = newCounts;
          tmp = newCounts;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var virtualCounts = tmp;
        virtualCounts.c1m(group, count);
      } else {
        var tmp1_elvis_lhs = $this.a1u_1;
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts_0 = new Int32Array($this.u1u_1.l());
          fill(newCounts_0, -1);
          $this.a1u_1 = newCounts_0;
          tmp_0 = newCounts_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var nodeCounts = tmp_0;
        nodeCounts[group] = count;
      }
    }
  }
  function clearUpdatedNodeCounts($this) {
    $this.a1u_1 = null;
    $this.b1u_1 = null;
  }
  function recordUpsAndDowns($this, oldGroup, newGroup, commonRoot) {
    var reader = $this.u1u_1;
    var nearestCommonRoot = nearestCommonRootOf(reader, oldGroup, newGroup, commonRoot);
    var current = oldGroup;
    while (current > 0 && !(current === nearestCommonRoot)) {
      if (reader.i21(current)) {
        $this.a1v_1.t20();
      }
      current = reader.n1y(current);
    }
    doRecordDownsFor($this, newGroup, nearestCommonRoot);
  }
  function doRecordDownsFor($this, group, nearestCommonRoot) {
    if (group > 0 && !(group === nearestCommonRoot)) {
      doRecordDownsFor($this, $this.u1u_1.n1y(group), nearestCommonRoot);
      if ($this.u1u_1.i21(group)) {
        $this.a1v_1.l21(nodeAt($this.u1u_1, $this, group));
      }
    }
  }
  function compoundKeyOf($this, group, rGroupIndex, recomposeGroup, recomposeKey) {
    var tmp;
    if (group === recomposeGroup) {
      tmp = recomposeKey;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.compoundKeyOf.<anonymous>' call
      var groupKey = groupCompoundKeyPart($this.u1u_1, $this, group);
      var tmp_0;
      if (groupKey === 126665345) {
        tmp_0 = groupKey;
      } else {
        var parent = $this.u1u_1.n1y(group);
        var parentKey = parent === recomposeGroup ? recomposeKey : compoundKeyOf($this, parent, rGroupIndexOf($this, parent), recomposeGroup, recomposeKey);
        var effectiveRGroupIndex = $this.u1u_1.k21(group) ? 0 : rGroupIndex;
        // Inline function 'androidx.compose.runtime.rol' call
        // Inline function 'androidx.compose.runtime.rol' call
        var this_0 = rotateLeft(parentKey, 3) ^ groupKey;
        tmp_0 = rotateLeft(this_0, 3) ^ effectiveRGroupIndex;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function groupCompoundKeyPart(_this__u8e3s4, $this, group) {
    var tmp;
    if (_this__u8e3s4.k21(group)) {
      var tmp0_safe_receiver = _this__u8e3s4.r1y(group);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
        var tmp_1;
        if (tmp0_safe_receiver instanceof Enum) {
          tmp_1 = tmp0_safe_receiver.r1_1;
        } else {
          if (tmp0_safe_receiver instanceof MovableContent) {
            tmp_1 = 126665345;
          } else {
            tmp_1 = hashCode(tmp0_safe_receiver);
          }
        }
        tmp_0 = tmp_1;
      }
      var tmp1_elvis_lhs = tmp_0;
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
      var it = _this__u8e3s4.q1y(group);
      var tmp_2;
      if (it === 207) {
        var tmp0_safe_receiver_0 = _this__u8e3s4.p1y(group);
        var tmp_3;
        if (tmp0_safe_receiver_0 == null) {
          tmp_3 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>.<anonymous>' call
          tmp_3 = equals(tmp0_safe_receiver_0, Companion_getInstance().e1z_1) ? it : hashCode(tmp0_safe_receiver_0);
        }
        var tmp1_elvis_lhs_0 = tmp_3;
        tmp_2 = tmp1_elvis_lhs_0 == null ? it : tmp1_elvis_lhs_0;
      } else {
        tmp_2 = it;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function skipReaderToGroupEnd($this) {
    $this.x1t_1 = $this.u1u_1.m21();
    $this.u1u_1.v1y();
  }
  function addRecomposeScope($this) {
    if ($this.d1v_1) {
      var tmp = $this.t1t_1;
      var scope = new RecomposeScopeImpl(tmp instanceof CompositionImpl ? tmp : THROW_CCE());
      $this.r1u_1.h20(scope);
      $this.m1y(scope);
      scope.q21($this.o1u_1);
    } else {
      var invalidation = removeLocation($this.f1u_1, $this.u1u_1.y1w_1);
      var slot = $this.u1u_1.k();
      var tmp_0;
      if (equals(slot, Companion_getInstance().e1z_1)) {
        var tmp_1 = $this.t1t_1;
        var newScope = new RecomposeScopeImpl(tmp_1 instanceof CompositionImpl ? tmp_1 : THROW_CCE());
        $this.m1y(newScope);
        tmp_0 = newScope;
      } else {
        tmp_0 = slot instanceof RecomposeScopeImpl ? slot : THROW_CCE();
      }
      var scope_0 = tmp_0;
      var tmp_2;
      if (!(invalidation == null)) {
        tmp_2 = true;
      } else {
        // Inline function 'kotlin.also' call
        var this_0 = scope_0.n21();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.addRecomposeScope.<anonymous>' call
        if (this_0) {
          scope_0.o21(false);
        }
        tmp_2 = this_0;
      }
      scope_0.p21(tmp_2);
      $this.r1u_1.h20(scope_0);
      scope_0.q21($this.o1u_1);
    }
  }
  function invokeMovableContentLambda($this, content, locals, parameter, force) {
    $this.r21(126665345, content);
    updateSlot($this, parameter);
    var savedCompoundKeyHash = $this.e1v_1;
    try {
      $this.e1v_1 = 126665345;
      if ($this.d1v_1) {
        $this.w1u_1.s21();
      }
      var providersChanged = $this.d1v_1 ? false : !equals($this.u1u_1.b1z(), locals);
      if (providersChanged) {
        recordProviderUpdate($this, locals);
      }
      start($this, 202, get_compositionLocalMap(), Companion_getInstance_0().h1y_1, locals);
      $this.y1u_1 = null;
      if ($this.d1v_1 && !force) {
        $this.x1u_1 = true;
        var anchor = $this.w1u_1.o1y($this.w1u_1.n1y($this.w1u_1.e1y_1));
        var reference = new MovableContentStateReference(content, parameter, $this.t1t_1, $this.v1u_1, anchor, emptyList(), currentCompositionLocalScope($this));
        $this.o1t_1.t21(reference);
      } else {
        var savedProvidersInvalid = $this.j1u_1;
        $this.j1u_1 = providersChanged;
        invokeComposable($this, ComposableLambda$invoke$ref(composableLambdaInstance(316014703, true, ComposerImpl$invokeMovableContentLambda$lambda(content, parameter))));
        $this.j1u_1 = savedProvidersInvalid;
      }
    }finally {
      endGroup($this);
      $this.y1u_1 = null;
      $this.e1v_1 = savedCompoundKeyHash;
      $this.u21();
    }
  }
  function insertMovableContentGuarded($this, references) {
    // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withChangeList' call
    var this_0 = $this.a1v_1;
    var newChangeList = $this.s1t_1;
    var previousChangeList = this_0.d1w_1;
    try {
      this_0.d1w_1 = newChangeList;
      // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>' call
      $this.a1v_1.v21();
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.l() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.o(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>' call
          var to = item.gd();
          var from = item.hd();
          var anchor = to.a22_1;
          var location = to.z21_1.d22(anchor);
          var effectiveNodeIndex = new IntRef();
          $this.a1v_1.e22(effectiveNodeIndex, anchor);
          if (from == null) {
            var toSlotTable = to.z21_1;
            if (equals(toSlotTable, $this.v1u_1)) {
              createFreshInsertTable($this);
            }
            // Inline function 'androidx.compose.runtime.SlotTable.read' call
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
            var reader = to.z21_1.q1v();
            var tmp;
            try {
              reader.f20(location);
              $this.a1v_1.j22(location);
              var offsetChanges = new ChangeList();
              recomposeMovableContent$default($this, VOID, VOID, VOID, VOID, ComposerImpl$insertMovableContentGuarded$lambda($this, offsetChanges, reader, to));
              $this.a1v_1.k22(offsetChanges, effectiveNodeIndex);
              tmp = Unit_instance;
            }finally {
              reader.e1x();
            }
          } else {
            var resolvedState = $this.o1t_1.f22(from);
            var tmp1_elvis_lhs = resolvedState == null ? null : resolvedState.g22_1;
            var fromTable = tmp1_elvis_lhs == null ? from.z21_1 : tmp1_elvis_lhs;
            var tmp3_safe_receiver = resolvedState == null ? null : resolvedState.g22_1;
            var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.o1y(0);
            var fromAnchor = tmp4_elvis_lhs == null ? from.a22_1 : tmp4_elvis_lhs;
            var nodesToInsert = collectNodesFrom(fromTable, fromAnchor);
            // Inline function 'kotlin.collections.isNotEmpty' call
            if (!nodesToInsert.n()) {
              $this.a1v_1.h22(nodesToInsert, effectiveNodeIndex);
              if (equals(to.z21_1, $this.p1t_1)) {
                var group = $this.p1t_1.d22(anchor);
                updateNodeCount($this, group, updatedNodeCount($this, group) + nodesToInsert.l() | 0);
              }
            }
            $this.a1v_1.i22(resolvedState, $this.o1t_1, from, to);
            // Inline function 'androidx.compose.runtime.SlotTable.read' call
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
            var reader_0 = fromTable.q1v();
            var tmp_0;
            try {
              $l$block: {
                // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
                var savedReader = $this.u1u_1;
                var savedCountOverrides = $this.a1u_1;
                var savedProviderUpdates = $this.i1u_1;
                $this.a1u_1 = null;
                $this.i1u_1 = null;
                try {
                  $this.u1u_1 = reader_0;
                  var newLocation = fromTable.d22(fromAnchor);
                  reader_0.f20(newLocation);
                  $this.a1v_1.j22(newLocation);
                  var offsetChanges_0 = new ChangeList();
                  // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withChangeList' call
                  var this_1 = $this.a1v_1;
                  var previousChangeList_0 = this_1.d1w_1;
                  try {
                    this_1.d1w_1 = offsetChanges_0;
                    // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withoutImplicitRootStart' call
                    var this_2 = $this.a1v_1;
                    var previousImplicitRootStart = this_2.g1w_1;
                    try {
                      this_2.g1w_1 = false;
                      // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                      var tmp_1 = reader_0.w1w_1;
                      var tmp_2 = from.b22_1;
                      recomposeMovableContent($this, from.y21_1, to.y21_1, tmp_1, tmp_2, ComposerImpl$insertMovableContentGuarded$lambda_0($this, to));
                    }finally {
                      this_2.g1w_1 = previousImplicitRootStart;
                    }
                  }finally {
                    this_1.d1w_1 = previousChangeList_0;
                  }
                  $this.a1v_1.k22(offsetChanges_0, effectiveNodeIndex);
                  break $l$block;
                }finally {
                  $this.u1u_1 = savedReader;
                  $this.a1u_1 = savedCountOverrides;
                  $this.i1u_1 = savedProviderUpdates;
                }
              }
              tmp_0 = Unit_instance;
            }finally {
              reader_0.e1x();
            }
          }
          $this.a1v_1.l22();
        }
         while (inductionVariable <= last);
      $this.a1v_1.m22();
      $this.a1v_1.j22(0);
    }finally {
      this_0.d1w_1 = previousChangeList;
    }
  }
  function recomposeMovableContent($this, from, to, index, invalidations, block) {
    var savedIsComposing = $this.s1u_1;
    var savedNodeIndex = $this.w1t_1;
    try {
      $this.s1u_1 = true;
      $this.w1t_1 = 0;
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = invalidations.l() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = invalidations.o(index_0);
          // Inline function 'androidx.compose.runtime.ComposerImpl.recomposeMovableContent.<anonymous>' call
          var scope = item.gd();
          var instances = item.hd();
          if (!(instances == null)) {
            $this.n22(scope, instances);
          } else {
            $this.n22(scope, null);
          }
        }
         while (inductionVariable <= last);
      var tmp;
      if (from == null) {
        tmp = null;
      } else {
        tmp = from.o22(to, index == null ? -1 : index, block);
      }
      var tmp2_elvis_lhs = tmp;
      return tmp2_elvis_lhs == null ? block() : tmp2_elvis_lhs;
    }finally {
      $this.s1u_1 = savedIsComposing;
      $this.w1t_1 = savedNodeIndex;
    }
  }
  function recomposeMovableContent$default($this, from, to, index, invalidations, block, $super) {
    from = from === VOID ? null : from;
    to = to === VOID ? null : to;
    index = index === VOID ? null : index;
    invalidations = invalidations === VOID ? emptyList() : invalidations;
    return recomposeMovableContent($this, from, to, index, invalidations, block);
  }
  function doCompose($this, invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.s1u_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>' call
      var tmp$ret$0 = 'Reentrant composition is not supported';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    $l$block_1: {
      // Inline function 'androidx.compose.runtime.trace' call
      var sectionName = 'Compose:recompose';
      var token = Trace_instance.p22(sectionName);
      try {
        $this.o1u_1 = currentSnapshot().u22();
        $this.i1u_1 = null;
        // Inline function 'androidx.collection.ScatterMap.forEach' call
        var this_0 = invalidationsRequested.v22_1;
        var k = this_0.j1o_1;
        var v = this_0.k1o_1;
        $l$block_0: {
          // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
          var m = this_0.i1o_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.k2(this_1.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                      $l$block: {
                        // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>.<anonymous>' call
                        var tmp = k[index];
                        var scope = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                        var tmp_0 = v[index];
                        var instances = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                        if (!(scope instanceof RecomposeScopeImpl))
                          THROW_CCE();
                        var tmp0_safe_receiver = scope.g1t_1;
                        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w22_1;
                        var tmp_1;
                        if (tmp1_elvis_lhs == null) {
                          break $l$block;
                        } else {
                          tmp_1 = tmp1_elvis_lhs;
                        }
                        var location = tmp_1;
                        // Inline function 'kotlin.takeUnless' call
                        // Inline function 'kotlin.contracts.contract' call
                        var tmp_2;
                        // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>.<anonymous>.<anonymous>' call
                        if (!(instances === ScopeInvalidated_instance)) {
                          tmp_2 = instances;
                        } else {
                          tmp_2 = null;
                        }
                        var tmp$ret$5 = tmp_2;
                        $this.f1u_1.d(new Invalidation(scope, location, tmp$ret$5));
                      }
                    }
                    slot = slot.i2(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block_0;
                }
              }
            }
             while (!(i === lastIndex));
        }
        sortWith($this.f1u_1, get_InvalidationLocationAscending());
        $this.w1t_1 = 0;
        var complete = false;
        $this.s1u_1 = true;
        try {
          startRoot($this);
          var savedContent = $this.l1y();
          if (!(savedContent === content) && !(content == null)) {
            $this.m1y((content == null ? true : !(content == null)) ? content : THROW_CCE());
          }
          // Inline function 'androidx.compose.runtime.observeDerivedStateRecalculations' call
          var observer = $this.q1u_1;
          var observers = derivedStateObservers_0();
          try {
            observers.a23(observer);
            // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>.<anonymous>' call
            if (!(content == null)) {
              startGroup_0($this, 200, get_invocation());
              invokeComposable($this, content);
              endGroup($this);
            } else if (($this.d1u_1 || $this.j1u_1) && !(savedContent == null) && !equals(savedContent, Companion_getInstance().e1z_1)) {
              startGroup_0($this, 200, get_invocation());
              invokeComposable($this, (!(savedContent == null) ? typeof savedContent === 'function' : false) ? savedContent : THROW_CCE());
              endGroup($this);
            } else {
              $this.b23();
            }
          }finally {
            // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
            var tmp$ret$7 = observers.z22_1 - 1 | 0;
            observers.h1(tmp$ret$7);
          }
          endRoot($this);
          complete = true;
        }finally {
          $this.s1u_1 = false;
          $this.f1u_1.e1();
          if (!complete) {
            abortRoot($this);
          }
          createFreshInsertTable($this);
        }
        break $l$block_1;
      }finally {
        Trace_instance.c23(token);
      }
    }
  }
  function _get_node__db0vwp(_this__u8e3s4, $this) {
    return _this__u8e3s4.d23(_this__u8e3s4.y1w_1);
  }
  function nodeAt(_this__u8e3s4, $this, index) {
    return _this__u8e3s4.d23(index);
  }
  function validateNodeExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!$this.e1u_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeExpected.<anonymous>' call
      var tmp$ret$0 = 'A call to createNode(), emitNode() or useNode() expected was not expected';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    $this.e1u_1 = false;
  }
  function validateNodeNotExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.e1u_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeNotExpected.<anonymous>' call
      var tmp$ret$0 = 'A call to createNode(), emitNode() or useNode() expected';
      composeImmediateRuntimeError(tmp$ret$0);
    }
  }
  function recordInsert($this, anchor) {
    if ($this.c1v_1.n()) {
      $this.a1v_1.f23(anchor, $this.v1u_1);
    } else {
      $this.a1v_1.e23(anchor, $this.v1u_1, $this.c1v_1);
      $this.c1v_1 = new FixupList();
    }
  }
  function recordDelete($this) {
    reportFreeMovableContent($this, $this.u1u_1.w1w_1);
    $this.a1v_1.g23();
  }
  function reportFreeMovableContent($this, groupBeingRemoved) {
    reportFreeMovableContent$reportGroup($this, groupBeingRemoved, false, 0);
    $this.a1v_1.q20();
  }
  function reportAllMovableContent($this) {
    if ($this.p1t_1.i23()) {
      var changes = new ChangeList();
      $this.z1u_1 = changes;
      // Inline function 'androidx.compose.runtime.SlotTable.read' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
      var reader = $this.p1t_1.q1v();
      var tmp;
      try {
        $this.u1u_1 = reader;
        // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withChangeList' call
        var this_0 = $this.a1v_1;
        var previousChangeList = this_0.d1w_1;
        try {
          this_0.d1w_1 = changes;
          // Inline function 'androidx.compose.runtime.ComposerImpl.reportAllMovableContent.<anonymous>.<anonymous>' call
          reportFreeMovableContent($this, 0);
          $this.a1v_1.h23();
        }finally {
          this_0.d1w_1 = previousChangeList;
        }
        tmp = Unit_instance;
      }finally {
        reader.e1x();
      }
    }
  }
  function finalizeCompose($this) {
    $this.a1v_1.j23();
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!$this.u1t_1.n()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.finalizeCompose.<anonymous>' call
      var tmp$ret$0 = 'Start/end imbalance';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    cleanUpCompose($this);
  }
  function cleanUpCompose($this) {
    $this.v1t_1 = null;
    $this.w1t_1 = 0;
    $this.x1t_1 = 0;
    $this.e1v_1 = 0;
    $this.e1u_1 = false;
    $this.a1v_1.k23();
    $this.r1u_1.e1();
    clearUpdatedNodeCounts($this);
  }
  function CompositionContextHolder() {
  }
  function reportFreeMovableContent$reportGroup(this$0, group, needsNodeDelete, nodeIndex) {
    var reader = this$0.u1u_1;
    var tmp;
    if (reader.b24(group)) {
      var key = reader.q1y(group);
      var objectKey = reader.r1y(group);
      var tmp_0;
      var tmp_1;
      if (key === 126665345) {
        tmp_1 = objectKey instanceof MovableContent;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var movableContent = objectKey instanceof MovableContent ? objectKey : THROW_CCE();
        var parameter = reader.m23(group, 0);
        var anchor = reader.o1y(group);
        var end = group + reader.m20(group) | 0;
        // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
        var this_0 = filterToRange(this$0.f1u_1, group, end);
        // Inline function 'kotlin.contracts.contract' call
        var target = ArrayList_init_$Create$_0(this_0.l());
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = this_0.l() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = this_0.o(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
            // Inline function 'kotlin.collections.plusAssign' call
            // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
            var element = to(item.a1t_1, item.c1t_1);
            target.d(element);
          }
           while (inductionVariable <= last);
        var invalidations = target;
        var reference = new MovableContentStateReference(movableContent, parameter, this$0.t1t_1, this$0.p1t_1, anchor, invalidations, currentCompositionLocalScope_0(this$0, group));
        this$0.o1t_1.x23(reference);
        this$0.a1v_1.y23();
        this$0.a1v_1.z23(this$0.t1t_1, this$0.o1t_1, reference);
        var tmp_2;
        if (needsNodeDelete) {
          this$0.a1v_1.a24(nodeIndex, group);
          tmp_2 = 0;
        } else {
          tmp_2 = reader.j21(group);
        }
        tmp_0 = tmp_2;
      } else {
        if (key === 206 && equals(objectKey, get_reference())) {
          var tmp_3 = reader.m23(group, 0);
          var contextHolder = tmp_3 instanceof CompositionContextHolder ? tmp_3 : null;
          if (!(contextHolder == null)) {
            var compositionContext = contextHolder.n23_1;
            // Inline function 'kotlin.collections.forEach' call
            var tmp0_iterator = compositionContext.t23_1.i();
            while (tmp0_iterator.j()) {
              var element_0 = tmp0_iterator.k();
              // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
              reportAllMovableContent(element_0);
              this$0.o1t_1.w23(element_0.t1t_1);
            }
          }
          tmp_0 = reader.j21(group);
        } else {
          if (reader.i21(group)) {
            tmp_0 = 1;
          } else {
            tmp_0 = reader.j21(group);
          }
        }
      }
      tmp = tmp_0;
    } else if (reader.l23(group)) {
      var size = reader.m20(group);
      var end_0 = group + size | 0;
      var current = group + 1 | 0;
      var runningNodeCount = 0;
      while (current < end_0) {
        var isNode = reader.i21(current);
        if (isNode) {
          this$0.a1v_1.q20();
          this$0.a1v_1.l21(reader.d23(current));
        }
        runningNodeCount = runningNodeCount + reportFreeMovableContent$reportGroup(this$0, current, isNode || needsNodeDelete, isNode ? 0 : nodeIndex + runningNodeCount | 0) | 0;
        if (isNode) {
          this$0.a1v_1.q20();
          this$0.a1v_1.t20();
        }
        current = current + reader.m20(current) | 0;
      }
      tmp = reader.i21(group) ? 1 : runningNodeCount;
    } else if (reader.i21(group)) {
      tmp = 1;
    } else {
      tmp = reader.j21(group);
    }
    return tmp;
  }
  function ComposerImpl$derivedStateObserver$1(this$0) {
    this.c24_1 = this$0;
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.d24(p0, p1);
    };
  }
  function ComposerImpl$invokeMovableContentLambda$lambda($content, $parameter) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C3293@126183L18:Composer.kt#9igjgp');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.f24()) {
        if (isTraceInProgress()) {
          traceEventStart(316014703, $changed, -1, 'androidx.compose.runtime.ComposerImpl.invokeMovableContentLambda.<anonymous> (Composer.kt:3293)');
        }
        $content.e24_1($parameter, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.v1y();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda(this$0, $offsetChanges, $reader, $to) {
    return function () {
      var this_0 = this$0.a1v_1;
      var newChangeList = $offsetChanges;
      var previousChangeList = this_0.d1w_1;
      var tmp;
      try {
        this_0.d1w_1 = newChangeList;
        $l$block: {
          // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
          var this_1 = this$0;
          var reader = $reader;
          var savedReader = this_1.u1u_1;
          var savedCountOverrides = this_1.a1u_1;
          var savedProviderUpdates = this_1.i1u_1;
          this_1.a1u_1 = null;
          this_1.i1u_1 = null;
          try {
            this_1.u1u_1 = reader;
            // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withoutImplicitRootStart' call
            var this_2 = this$0.a1v_1;
            var previousImplicitRootStart = this_2.g1w_1;
            try {
              this_2.g1w_1 = false;
              // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              invokeMovableContentLambda(this$0, $to.w21_1, $to.c22_1, $to.x21_1, true);
            }finally {
              this_2.g1w_1 = previousImplicitRootStart;
            }
            break $l$block;
          }finally {
            this_1.u1u_1 = savedReader;
            this_1.a1u_1 = savedCountOverrides;
            this_1.i1u_1 = savedProviderUpdates;
          }
        }
        tmp = Unit_instance;
      }finally {
        this_0.d1w_1 = previousChangeList;
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_0(this$0, $to) {
    return function () {
      invokeMovableContentLambda(this$0, $to.w21_1, $to.c22_1, $to.x21_1, true);
      return Unit_instance;
    };
  }
  function ComposerImpl(applier, parentContext, slotTable, abandonSet, changes, lateChanges, composition) {
    this.n1t_1 = applier;
    this.o1t_1 = parentContext;
    this.p1t_1 = slotTable;
    this.q1t_1 = abandonSet;
    this.r1t_1 = changes;
    this.s1t_1 = lateChanges;
    this.t1t_1 = composition;
    this.u1t_1 = new Stack();
    this.v1t_1 = null;
    this.w1t_1 = 0;
    this.x1t_1 = 0;
    this.y1t_1 = 0;
    this.z1t_1 = new IntStack();
    this.a1u_1 = null;
    this.b1u_1 = null;
    this.c1u_1 = false;
    this.d1u_1 = false;
    this.e1u_1 = false;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.f1u_1 = ArrayList_init_$Create$();
    this.g1u_1 = new IntStack();
    this.h1u_1 = persistentCompositionLocalHashMapOf();
    this.i1u_1 = null;
    this.j1u_1 = false;
    this.k1u_1 = new IntStack();
    this.l1u_1 = false;
    this.m1u_1 = -1;
    this.n1u_1 = 0;
    this.o1u_1 = 0;
    this.p1u_1 = this.o1t_1.y1v() || this.o1t_1.y1y();
    var tmp_0 = this;
    tmp_0.q1u_1 = new ComposerImpl$derivedStateObserver$1(this);
    this.r1u_1 = new Stack();
    this.s1u_1 = false;
    this.t1u_1 = false;
    var tmp_1 = this;
    // Inline function 'kotlin.also' call
    var this_0 = this.p1t_1.q1v();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.reader.<anonymous>' call
    this_0.e1x();
    tmp_1.u1u_1 = this_0;
    var tmp_2 = this;
    // Inline function 'kotlin.apply' call
    var this_1 = new SlotTable();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.insertTable.<anonymous>' call
    if (this.o1t_1.y1v()) {
      this_1.w1y();
    }
    if (this.o1t_1.y1y()) {
      this_1.x1y();
    }
    tmp_2.v1u_1 = this_1;
    var tmp_3 = this;
    // Inline function 'kotlin.also' call
    var this_2 = this.v1u_1.u1y();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.writer.<anonymous>' call
    this_2.z1y(true);
    tmp_3.w1u_1 = this_2;
    this.x1u_1 = false;
    this.y1u_1 = null;
    this.z1u_1 = null;
    this.a1v_1 = new ComposerChangeListWriter(this, this.r1t_1);
    var tmp_4 = this;
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var reader = this.v1u_1.q1v();
    var tmp_5;
    try {
      // Inline function 'androidx.compose.runtime.ComposerImpl.insertAnchor.<anonymous>' call
      tmp_5 = reader.o1y(0);
    }finally {
      reader.e1x();
    }
    tmp_4.b1v_1 = tmp_5;
    this.c1v_1 = new FixupList();
    this.d1v_1 = false;
    this.e1v_1 = 0;
  }
  protoOf(ComposerImpl).g24 = function () {
    return this.n1t_1;
  };
  protoOf(ComposerImpl).h24 = function () {
    return this.n1u_1 > 0;
  };
  protoOf(ComposerImpl).i24 = function () {
    return this.o1t_1.j24();
  };
  protoOf(ComposerImpl).k24 = function (key) {
    return start(this, key, null, Companion_getInstance_0().h1y_1, null);
  };
  protoOf(ComposerImpl).l24 = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).m24 = function (key) {
    var pending = this.v1t_1;
    if (!(pending == null)) {
      start(this, key, null, Companion_getInstance_0().h1y_1, null);
      return Unit_instance;
    }
    validateNodeNotExpected(this);
    // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroup' call
    var rGroupIndex = this.y1t_1;
    if (null == null)
      if (!(null == null) && key === 207 && !equals(null, Companion_getInstance().e1z_1)) {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var keyHash = hashCode(null);
        var tmp = this;
        // Inline function 'androidx.compose.runtime.rol' call
        // Inline function 'androidx.compose.runtime.rol' call
        var this_0 = this.e1v_1;
        var this_1 = rotateLeft(this_0, 3) ^ keyHash;
        tmp.e1v_1 = rotateLeft(this_1, 3) ^ rGroupIndex;
      } else {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var tmp_0 = this;
        // Inline function 'androidx.compose.runtime.rol' call
        // Inline function 'androidx.compose.runtime.rol' call
        var this_2 = this.e1v_1;
        var this_3 = rotateLeft(this_2, 3) ^ key;
        tmp_0.e1v_1 = rotateLeft(this_3, 3) ^ rGroupIndex;
      }
     else {
      if (null instanceof Enum) {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var keyHash_0 = null.r1_1;
        var tmp_1 = this;
        // Inline function 'androidx.compose.runtime.rol' call
        // Inline function 'androidx.compose.runtime.rol' call
        var this_4 = this.e1v_1;
        var this_5 = rotateLeft(this_4, 3) ^ keyHash_0;
        tmp_1.e1v_1 = rotateLeft(this_5, 3) ^ 0;
      } else {
        var keyHash_1 = hashCode(null);
        var tmp_2 = this;
        // Inline function 'androidx.compose.runtime.rol' call
        // Inline function 'androidx.compose.runtime.rol' call
        var this_6 = this.e1v_1;
        var this_7 = rotateLeft(this_6, 3) ^ keyHash_1;
        tmp_2.e1v_1 = rotateLeft(this_7, 3) ^ 0;
      }
    }
    this.y1t_1 = this.y1t_1 + 1 | 0;
    var reader = this.u1u_1;
    if (this.d1v_1) {
      reader.f1z();
      this.w1u_1.g1z(key, Companion_getInstance().e1z_1);
      enterGroup(this, false, null);
      return Unit_instance;
    }
    var slotKey = reader.r1z();
    if (slotKey === key && !reader.n24()) {
      reader.c1z();
      enterGroup(this, false, null);
      return Unit_instance;
    }
    if (!reader.s20()) {
      var removeIndex = this.w1t_1;
      var startSlot = reader.w1w_1;
      recordDelete(this);
      var nodesToRemove = reader.k1y();
      this.a1v_1.k20(removeIndex, nodesToRemove);
      removeRange(this.f1u_1, startSlot, reader.w1w_1);
    }
    reader.f1z();
    this.d1v_1 = true;
    this.y1u_1 = null;
    ensureWriter(this);
    var writer = this.w1u_1;
    writer.v1z();
    var startIndex = writer.c1y_1;
    writer.g1z(key, Companion_getInstance().e1z_1);
    this.b1v_1 = writer.o1y(startIndex);
    enterGroup(this, false, null);
  };
  protoOf(ComposerImpl).o24 = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).r21 = function (key, dataKey) {
    return start(this, key, dataKey, Companion_getInstance_0().h1y_1, null);
  };
  protoOf(ComposerImpl).u21 = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).p24 = function () {
    this.i1u_1 = null;
  };
  protoOf(ComposerImpl).q24 = function () {
    return this.d1v_1;
  };
  protoOf(ComposerImpl).f24 = function () {
    var tmp;
    var tmp_0;
    if (!this.d1v_1 && !this.l1u_1 && !this.j1u_1) {
      var tmp0_safe_receiver = this.r24();
      tmp_0 = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s24()) === false;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !this.d1u_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).d1z = function () {
    start(this, 125, null, Companion_getInstance_0().i1y_1, null);
    this.e1u_1 = true;
  };
  protoOf(ComposerImpl).t24 = function (factory) {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.d1v_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.createNode.<anonymous>' call
      var tmp$ret$0 = 'createNode() can only be called when inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var insertIndex = this.z1t_1.u24();
    var groupAnchor = this.w1u_1.o1y(this.w1u_1.e1y_1);
    this.x1t_1 = this.x1t_1 + 1 | 0;
    this.c1v_1.v24(factory, insertIndex, groupAnchor);
  };
  protoOf(ComposerImpl).w24 = function () {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.d1v_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.useNode.<anonymous>' call
      var tmp$ret$0 = 'useNode() called while inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var node = _get_node__db0vwp(this.u1u_1, this);
    this.a1v_1.l21(node);
    var tmp;
    if (this.l1u_1) {
      tmp = !(node == null) ? isInterface(node, ComposeNodeLifecycleCallback) : false;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.a1v_1.x24(node);
    }
  };
  protoOf(ComposerImpl).y24 = function () {
    return end(this, true);
  };
  protoOf(ComposerImpl).z24 = function (value, block) {
    if (this.d1v_1) {
      this.c1v_1.b25(value, block);
    } else {
      this.a1v_1.a25(value, block);
    }
  };
  protoOf(ComposerImpl).l1y = function () {
    var tmp;
    if (this.d1v_1) {
      validateNodeNotExpected(this);
      tmp = Companion_getInstance().e1z_1;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.nextSlot.<anonymous>' call
      var it = this.u1u_1.k();
      var tmp_0;
      var tmp_1;
      if (this.l1u_1) {
        tmp_1 = !(!(it == null) ? isInterface(it, ReusableRememberObserver) : false);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = Companion_getInstance().e1z_1;
      } else {
        tmp_0 = it;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(ComposerImpl).c25 = function () {
    var tmp;
    if (this.d1v_1) {
      validateNodeNotExpected(this);
      tmp = Companion_getInstance().e1z_1;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.nextSlotForCache.<anonymous>' call
      var it = this.u1u_1.k();
      var tmp_0;
      var tmp_1;
      if (this.l1u_1) {
        tmp_1 = !(!(it == null) ? isInterface(it, ReusableRememberObserver) : false);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = Companion_getInstance().e1z_1;
      } else {
        if (it instanceof RememberObserverHolder) {
          tmp_0 = it.d25_1;
        } else {
          tmp_0 = it;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(ComposerImpl).w1v = function (value) {
    var tmp;
    if (!equals(this.l1y(), value)) {
      this.m1y(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).f25 = function (value) {
    var tmp;
    if (!(this.l1y() === value)) {
      this.m1y(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).g25 = function (value) {
    var next = this.l1y();
    if (!(next == null) ? typeof next === 'boolean' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.m1y(value);
    return true;
  };
  protoOf(ComposerImpl).h25 = function (value) {
    var next = this.l1y();
    if (!(next == null) ? typeof next === 'number' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.m1y(value);
    return true;
  };
  protoOf(ComposerImpl).m1y = function (value) {
    if (this.d1v_1) {
      this.w1u_1.n25(value);
    } else {
      if (this.u1u_1.d1x_1) {
        var groupSlotIndex = this.u1u_1.j25() - 1 | 0;
        if (this.a1v_1.m25()) {
          this.a1v_1.l25(value, this.u1u_1.o1y(this.u1u_1.y1w_1), groupSlotIndex);
        } else {
          this.a1v_1.k25(value, groupSlotIndex);
        }
      } else {
        this.a1v_1.i25(this.u1u_1.o1y(this.u1u_1.y1w_1), value);
      }
    }
  };
  protoOf(ComposerImpl).o25 = function (value) {
    var tmp;
    if (!(value == null) ? isInterface(value, RememberObserver) : false) {
      if (this.d1v_1) {
        this.a1v_1.p25(value);
      }
      this.q1t_1.d(value);
      tmp = new RememberObserverHolder(value, rememberObserverAnchor(this));
    } else {
      tmp = value;
    }
    var toStore = tmp;
    this.m1y(toStore);
  };
  protoOf(ComposerImpl).r24 = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.<get-currentRecomposeScope>.<anonymous>' call
    var it = this.r1u_1;
    return this.n1u_1 === 0 && it.b1q() ? it.u24() : null;
  };
  protoOf(ComposerImpl).n22 = function (scope, instance) {
    var tmp0_elvis_lhs = scope.g1t_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var anchor = tmp;
    var slotTable = this.u1u_1.p1w_1;
    var location = anchor.q25(slotTable);
    if (this.s1u_1 && location >= this.u1u_1.w1w_1) {
      insertIfMissing(this.f1u_1, location, scope, instance);
      return true;
    }
    return false;
  };
  protoOf(ComposerImpl).b23 = function () {
    if (this.f1u_1.n()) {
      skipGroup(this);
    } else {
      var reader = this.u1u_1;
      var key = reader.r1z();
      var dataKey = reader.t1z();
      var aux = reader.b1z();
      var rGroupIndex = this.y1t_1;
      // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroup' call
      if (dataKey == null)
        if (!(aux == null) && key === 207 && !equals(aux, Companion_getInstance().e1z_1)) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
          var keyHash = hashCode(aux);
          var tmp = this;
          // Inline function 'androidx.compose.runtime.rol' call
          // Inline function 'androidx.compose.runtime.rol' call
          var this_0 = this.e1v_1;
          var this_1 = rotateLeft(this_0, 3) ^ keyHash;
          tmp.e1v_1 = rotateLeft(this_1, 3) ^ rGroupIndex;
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
          var tmp_0 = this;
          // Inline function 'androidx.compose.runtime.rol' call
          // Inline function 'androidx.compose.runtime.rol' call
          var this_2 = this.e1v_1;
          var this_3 = rotateLeft(this_2, 3) ^ key;
          tmp_0.e1v_1 = rotateLeft(this_3, 3) ^ rGroupIndex;
        }
       else {
        if (dataKey instanceof Enum) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
          var keyHash_0 = dataKey.r1_1;
          var tmp_1 = this;
          // Inline function 'androidx.compose.runtime.rol' call
          // Inline function 'androidx.compose.runtime.rol' call
          var this_4 = this.e1v_1;
          var this_5 = rotateLeft(this_4, 3) ^ keyHash_0;
          tmp_1.e1v_1 = rotateLeft(this_5, 3) ^ 0;
        } else {
          var keyHash_1 = hashCode(dataKey);
          var tmp_2 = this;
          // Inline function 'androidx.compose.runtime.rol' call
          // Inline function 'androidx.compose.runtime.rol' call
          var this_6 = this.e1v_1;
          var this_7 = rotateLeft(this_6, 3) ^ keyHash_1;
          tmp_2.e1v_1 = rotateLeft(this_7, 3) ^ 0;
        }
      }
      startReaderGroup(this, reader.r25(), null);
      recomposeToGroupEnd(this);
      reader.x20();
      // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroup' call
      if (dataKey == null)
        if (!(aux == null) && key === 207 && !equals(aux, Companion_getInstance().e1z_1)) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey = hashCode(aux);
          var tmp_3 = this;
          // Inline function 'androidx.compose.runtime.ror' call
          // Inline function 'androidx.compose.runtime.ror' call
          var this_8 = this.e1v_1 ^ rGroupIndex;
          var this_9 = rotateRight(this_8, 3) ^ groupKey;
          tmp_3.e1v_1 = rotateRight(this_9, 3);
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var tmp_4 = this;
          // Inline function 'androidx.compose.runtime.ror' call
          // Inline function 'androidx.compose.runtime.ror' call
          var this_10 = this.e1v_1 ^ rGroupIndex;
          var this_11 = rotateRight(this_10, 3) ^ key;
          tmp_4.e1v_1 = rotateRight(this_11, 3);
        }
       else {
        if (dataKey instanceof Enum) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_0 = dataKey.r1_1;
          var tmp_5 = this;
          // Inline function 'androidx.compose.runtime.ror' call
          // Inline function 'androidx.compose.runtime.ror' call
          var this_12 = this.e1v_1 ^ 0;
          var this_13 = rotateRight(this_12, 3) ^ groupKey_0;
          tmp_5.e1v_1 = rotateRight(this_13, 3);
        } else {
          var groupKey_1 = hashCode(dataKey);
          var tmp_6 = this;
          // Inline function 'androidx.compose.runtime.ror' call
          // Inline function 'androidx.compose.runtime.ror' call
          var this_14 = this.e1v_1 ^ 0;
          var this_15 = rotateRight(this_14, 3) ^ groupKey_1;
          tmp_6.e1v_1 = rotateRight(this_15, 3);
        }
      }
    }
  };
  protoOf(ComposerImpl).v1y = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.x1t_1 === 0)) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.skipToGroupEnd.<anonymous>' call
      var tmp$ret$0 = 'No nodes can be emitted before calling skipAndEndGroup';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var tmp0_safe_receiver = this.r24();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.s25();
    }
    if (this.f1u_1.n()) {
      skipReaderToGroupEnd(this);
    } else {
      recomposeToGroupEnd(this);
    }
  };
  protoOf(ComposerImpl).t25 = function (key) {
    this.m24(key);
    addRecomposeScope(this);
    return this;
  };
  protoOf(ComposerImpl).u25 = function () {
    var scope = this.r1u_1.b1q() ? this.r1u_1.f1x() : null;
    if (scope != null) {
      scope.p21(false);
    }
    var tmp2_safe_receiver = scope == null ? null : scope.v25(this.o1u_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.a1v_1.w25(tmp2_safe_receiver, this.t1t_1);
    }
    var tmp;
    if (!(scope == null) && !scope.y25() && (scope.j20() || this.c1u_1)) {
      if (scope.g1t_1 == null) {
        var tmp_0 = scope;
        var tmp_1;
        if (this.d1v_1) {
          tmp_1 = this.w1u_1.o1y(this.w1u_1.e1y_1);
        } else {
          tmp_1 = this.u1u_1.o1y(this.u1u_1.y1w_1);
        }
        tmp_0.g1t_1 = tmp_1;
      }
      scope.x25(false);
      tmp = scope;
    } else {
      tmp = null;
    }
    var result = tmp;
    end(this, false);
    return result;
  };
  protoOf(ComposerImpl).z25 = function (references) {
    var completed = false;
    try {
      insertMovableContentGuarded(this, references);
      completed = true;
    }finally {
      if (completed) {
        cleanUpCompose(this);
      } else {
        abortRoot(this);
      }
    }
  };
  protoOf(ComposerImpl).a26 = function (sourceInformation) {
    if (this.d1v_1 && this.p1u_1) {
      this.w1u_1.b26(sourceInformation);
    }
  };
  protoOf(ComposerImpl).c26 = function (key, sourceInformation) {
    if (this.d1v_1 && this.p1u_1) {
      this.w1u_1.d26(key, sourceInformation);
    }
  };
  protoOf(ComposerImpl).e26 = function () {
    if (this.d1v_1 && this.p1u_1) {
      this.w1u_1.f26();
    }
  };
  protoOf(ComposerImpl).g26 = function (invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.r1t_1.n()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.composeContent.<anonymous>' call
      var tmp$ret$0 = 'Expected applyChanges() to have been called';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    doCompose(this, invalidationsRequested, content);
  };
  protoOf(ComposerImpl).i26 = function (block) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.s1u_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.prepareCompose.<anonymous>' call
      var tmp$ret$0 = 'Preparing a composition while composing is not supported';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.s1u_1 = true;
    try {
      block();
    }finally {
      this.s1u_1 = false;
    }
  };
  protoOf(ComposerImpl).j26 = function (invalidationsRequested) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.r1t_1.n()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.recompose.<anonymous>' call
      var tmp$ret$0 = 'Expected applyChanges() to have been called';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var tmp;
    var tmp_0;
    if (invalidationsRequested.l() > 0) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_0 = !this.f1u_1.n();
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = this.d1u_1;
    }
    if (tmp) {
      doCompose(this, invalidationsRequested, null);
      return this.r1t_1.b1q();
    }
    return false;
  };
  protoOf(ComposerImpl).k26 = function () {
    return this.r24();
  };
  protoOf(ComposerImpl).l26 = function () {
    return this.c25();
  };
  protoOf(ComposerImpl).m26 = function (value) {
    return this.o25(value);
  };
  protoOf(ComposerImpl).n26 = function (scope) {
    var tmp0_safe_receiver = scope instanceof RecomposeScopeImpl ? scope : null;
    if (tmp0_safe_receiver != null) {
      tmp0_safe_receiver.o26(true);
    }
  };
  function Composer$Companion$Empty$1() {
  }
  protoOf(Composer$Companion$Empty$1).toString = function () {
    return 'Empty';
  };
  function Companion() {
    Companion_instance_0 = this;
    var tmp = this;
    tmp.e1z_1 = new Composer$Companion$Empty$1();
  }
  var Companion_instance_0;
  function Companion_getInstance() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function Composer() {
  }
  var InvalidationResult_IGNORED_instance;
  var InvalidationResult_SCHEDULED_instance;
  var InvalidationResult_DEFERRED_instance;
  var InvalidationResult_IMMINENT_instance;
  var InvalidationResult_entriesInitialized;
  function InvalidationResult_initEntries() {
    if (InvalidationResult_entriesInitialized)
      return Unit_instance;
    InvalidationResult_entriesInitialized = true;
    InvalidationResult_IGNORED_instance = new InvalidationResult('IGNORED', 0);
    InvalidationResult_SCHEDULED_instance = new InvalidationResult('SCHEDULED', 1);
    InvalidationResult_DEFERRED_instance = new InvalidationResult('DEFERRED', 2);
    InvalidationResult_IMMINENT_instance = new InvalidationResult('IMMINENT', 3);
  }
  function InvalidationResult(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function composeRuntimeError(message) {
    _init_properties_Composer_kt__bmp4g0();
    throw new ComposeRuntimeError('Compose Runtime internal error. Unexpected or incorrect use of the Compose ' + ('internal runtime API (' + message + '). Please report to Google or use ') + 'https://goo.gle/compose-feedback');
  }
  function removeCurrentGroup(_this__u8e3s4, rememberManager) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'androidx.compose.runtime.SlotWriter.forAllData' call
    var group = _this__u8e3s4.c1y_1;
    var address = groupIndexToAddress(_this__u8e3s4, group);
    var start = dataIndex_0(_this__u8e3s4.k1x_1, _this__u8e3s4, address);
    var end = dataIndex_0(_this__u8e3s4.k1x_1, _this__u8e3s4, groupIndexToAddress(_this__u8e3s4, _this__u8e3s4.c1y_1 + _this__u8e3s4.m20(_this__u8e3s4.c1y_1) | 0));
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.removeCurrentGroup.<anonymous>' call
        var slot_0 = _this__u8e3s4.l1x_1[dataIndexToDataAddress(_this__u8e3s4, slot)];
        if (!(slot_0 == null) ? isInterface(slot_0, ComposeNodeLifecycleCallback) : false) {
          var endRelativeOrder = _this__u8e3s4.p26() - slot | 0;
          rememberManager.q26(slot_0, endRelativeOrder, -1, -1);
        }
        if (slot_0 instanceof RememberObserverHolder) {
          var endRelativeSlotIndex = _this__u8e3s4.p26() - slot | 0;
          // Inline function 'androidx.compose.runtime.withAfterAnchorInfo' call
          var anchor = slot_0.e25_1;
          var priority = -1;
          var endRelativeAfter = -1;
          if (!(anchor == null) && anchor.s26()) {
            priority = _this__u8e3s4.d22(anchor);
            endRelativeAfter = _this__u8e3s4.p26() - _this__u8e3s4.r26(priority) | 0;
          }
          // Inline function 'androidx.compose.runtime.removeCurrentGroup.<anonymous>.<anonymous>' call
          var priority_0 = priority;
          var endRelativeAfter_0 = endRelativeAfter;
          rememberManager.t26(slot_0.d25_1, endRelativeSlotIndex, priority_0, endRelativeAfter_0);
        }
        if (slot_0 instanceof RecomposeScopeImpl) {
          slot_0.u26();
        }
      }
       while (inductionVariable < end);
    _this__u8e3s4.v26();
  }
  function MovableContentStateReference(content, parameter, composition, slotTable, anchor, invalidations, locals) {
    this.w21_1 = content;
    this.x21_1 = parameter;
    this.y21_1 = composition;
    this.z21_1 = slotTable;
    this.a22_1 = anchor;
    this.b22_1 = invalidations;
    this.c22_1 = locals;
  }
  function runtimeCheck(value) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    if (!value) {
      // Inline function 'androidx.compose.runtime.runtimeCheck.<anonymous>' call
      var tmp$ret$0 = 'Check failed';
      composeImmediateRuntimeError(tmp$ret$0);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function MovableContentState(slotTable) {
    this.g22_1 = slotTable;
  }
  function sourceInformation(composer, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.a26(sourceInformation);
  }
  function isTraceInProgress() {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.isTraceInProgress.<anonymous>' call
    var it = get_compositionTracer();
    return !(it == null) && it.w26();
  }
  function traceEventStart(key, dirty1, dirty2, info) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.x26(key, dirty1, dirty2, info);
    }
  }
  function traceEventEnd() {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y26();
    }
  }
  function MovableContent() {
  }
  function ComposeRuntimeError(message) {
    IllegalStateException_init_$Init$(this);
    captureStack(this, ComposeRuntimeError);
    this.z26_1 = message;
  }
  protoOf(ComposeRuntimeError).z8 = function () {
    return this.z26_1;
  };
  function RememberObserverHolder(wrapped, after) {
    this.d25_1 = wrapped;
    this.e25_1 = after;
  }
  function Pending$keyMap$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.also' call
      var this_0 = new MutableScatterMultiMap(multiMap(this$0.j1z_1.l()));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Pending.keyMap$delegate.<anonymous>.<anonymous>' call
      var it = this_0.a27_1;
      var inductionVariable = 0;
      var last = this$0.j1z_1.l();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var keyInfo = this$0.j1z_1.o(index);
          MutableScatterMultiMap__put_impl_1qpnrt(it, get_joinedKey(keyInfo), keyInfo);
        }
         while (inductionVariable < last);
      var tmp$ret$0 = this_0.a27_1;
      return new MutableScatterMultiMap(tmp$ret$0);
    };
  }
  function Pending(keyInfos, startIndex) {
    this.j1z_1 = keyInfos;
    this.k1z_1 = startIndex;
    this.l1z_1 = 0;
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.k1z_1 >= 0)) {
      // Inline function 'androidx.compose.runtime.Pending.<anonymous>' call
      var tmp$ret$0 = 'Invalid start index';
      throwIllegalArgumentException(tmp$ret$0);
    }
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.m1z_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Pending.groupInfos.<anonymous>' call
    var runningNodeIndex = 0;
    var result = new MutableIntObjectMap();
    var inductionVariable = 0;
    var last = this.j1z_1.l();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var keyInfo = this.j1z_1.o(index);
        result.z1m(keyInfo.y1z_1, new GroupInfo(index, runningNodeIndex, keyInfo.z1z_1));
        runningNodeIndex = runningNodeIndex + keyInfo.z1z_1 | 0;
      }
       while (inductionVariable < last);
    tmp_0.n1z_1 = result;
    var tmp_1 = this;
    tmp_1.o1z_1 = lazy(Pending$keyMap$delegate$lambda(this));
  }
  protoOf(Pending).b27 = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.o1z_1;
    keyMap$factory();
    return this_0.k1().a27_1;
  };
  protoOf(Pending).u1z = function (key, dataKey) {
    var joinedKey = !(dataKey == null) ? new JoinedKey(key, dataKey) : key;
    return MutableScatterMultiMap__pop_impl_h6qh61(this.b27(), joinedKey);
  };
  protoOf(Pending).q1z = function (keyInfo) {
    return this.m1z_1.d(keyInfo);
  };
  protoOf(Pending).j20 = function () {
    return this.m1z_1;
  };
  protoOf(Pending).d20 = function (from, to) {
    if (from > to) {
      // Inline function 'androidx.collection.IntObjectMap.forEachValue' call
      var this_0 = this.n1z_1;
      var v = this_0.q1m_1;
      $l$block: {
        // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
        var m = this_0.o1m_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.k2(this_1.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.IntObjectMap.forEachValue.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
                    var tmp = v[index];
                    var group = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    var position = group.c27_1;
                    if (position === from)
                      group.c27_1 = to;
                    else if (to <= position ? position < from : false)
                      group.c27_1 = position + 1 | 0;
                  }
                  slot = slot.i2(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
    } else if (to > from) {
      // Inline function 'androidx.collection.IntObjectMap.forEachValue' call
      var this_2 = this.n1z_1;
      var v_0 = this_2.q1m_1;
      $l$block_0: {
        // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
        var m_0 = this_2.o1m_1;
        var lastIndex_0 = m_0.length - 2 | 0;
        var inductionVariable_1 = 0;
        if (inductionVariable_1 <= lastIndex_0)
          do {
            var i_0 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var slot_0 = m_0[i_0];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_3 = slot_0;
            if (!this_3.k2(this_3.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
              var inductionVariable_2 = 0;
              if (inductionVariable_2 < bitCount_0)
                do {
                  var j_0 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_0.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index_0 = (i_0 << 3) + j_0 | 0;
                    // Inline function 'androidx.collection.IntObjectMap.forEachValue.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
                    var tmp_0 = v_0[index_0];
                    var group_0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                    var position_0 = group_0.c27_1;
                    if (position_0 === from)
                      group_0.c27_1 = to;
                    else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
                      group_0.c27_1 = position_0 - 1 | 0;
                  }
                  slot_0 = slot_0.i2(8);
                }
                 while (inductionVariable_2 < bitCount_0);
              if (!(bitCount_0 === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i_0 === lastIndex_0));
      }
    }
  };
  protoOf(Pending).p20 = function (from, to, count) {
    if (from > to) {
      // Inline function 'androidx.collection.IntObjectMap.forEachValue' call
      var this_0 = this.n1z_1;
      var v = this_0.q1m_1;
      $l$block: {
        // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
        var m = this_0.o1m_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.k2(this_1.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.IntObjectMap.forEachValue.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
                    var tmp = v[index];
                    var group = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    var position = group.d27_1;
                    if (from <= position ? position < (from + count | 0) : false)
                      group.d27_1 = to + (position - from | 0) | 0;
                    else if (to <= position ? position < from : false)
                      group.d27_1 = position + count | 0;
                  }
                  slot = slot.i2(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
    } else if (to > from) {
      // Inline function 'androidx.collection.IntObjectMap.forEachValue' call
      var this_2 = this.n1z_1;
      var v_0 = this_2.q1m_1;
      $l$block_0: {
        // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
        var m_0 = this_2.o1m_1;
        var lastIndex_0 = m_0.length - 2 | 0;
        var inductionVariable_1 = 0;
        if (inductionVariable_1 <= lastIndex_0)
          do {
            var i_0 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var slot_0 = m_0[i_0];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_3 = slot_0;
            if (!this_3.k2(this_3.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
              var inductionVariable_2 = 0;
              if (inductionVariable_2 < bitCount_0)
                do {
                  var j_0 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_0.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index_0 = (i_0 << 3) + j_0 | 0;
                    // Inline function 'androidx.collection.IntObjectMap.forEachValue.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
                    var tmp_0 = v_0[index_0];
                    var group_0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                    var position_0 = group_0.d27_1;
                    if (from <= position_0 ? position_0 < (from + count | 0) : false)
                      group_0.d27_1 = to + (position_0 - from | 0) | 0;
                    else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
                      group_0.d27_1 = position_0 - count | 0;
                  }
                  slot_0 = slot_0.i2(8);
                }
                 while (inductionVariable_2 < bitCount_0);
              if (!(bitCount_0 === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i_0 === lastIndex_0));
      }
    }
  };
  protoOf(Pending).p1z = function (keyInfo, insertIndex) {
    this.n1z_1.z1m(keyInfo.y1z_1, new GroupInfo(-1, insertIndex, 0));
  };
  protoOf(Pending).l20 = function (group, newCount) {
    var groupInfo = this.n1z_1.o(group);
    if (!(groupInfo == null)) {
      var index = groupInfo.d27_1;
      var difference = newCount - groupInfo.e27_1 | 0;
      groupInfo.e27_1 = newCount;
      if (!(difference === 0)) {
        // Inline function 'androidx.collection.IntObjectMap.forEachValue' call
        var this_0 = this.n1z_1;
        var v = this_0.q1m_1;
        $l$block: {
          // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
          var m = this_0.o1m_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.k2(this_1.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                      var index_0 = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.IntObjectMap.forEachValue.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.Pending.updateNodeCount.<anonymous>' call
                      var tmp = v[index_0];
                      var childGroupInfo = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      if (childGroupInfo.d27_1 >= index && !equals(childGroupInfo, groupInfo)) {
                        var newIndex = childGroupInfo.d27_1 + difference | 0;
                        if (newIndex >= 0)
                          childGroupInfo.d27_1 = newIndex;
                      }
                    }
                    slot = slot.i2(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
      }
      return true;
    }
    return false;
  };
  protoOf(Pending).c20 = function (keyInfo) {
    var tmp0_safe_receiver = this.n1z_1.o(keyInfo.y1z_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c27_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).b20 = function (keyInfo) {
    var tmp0_safe_receiver = this.n1z_1.o(keyInfo.y1z_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d27_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).n20 = function (keyInfo) {
    var tmp0_safe_receiver = this.n1z_1.o(keyInfo.y1z_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e27_1;
    return tmp1_elvis_lhs == null ? keyInfo.z1z_1 : tmp1_elvis_lhs;
  };
  function _GroupKind___init__impl__iwqg06(value) {
    return value;
  }
  function _GroupKind___get_value__impl__cf5pqe($this) {
    return $this;
  }
  function Companion_0() {
    Companion_instance_1 = this;
    this.h1y_1 = _GroupKind___init__impl__iwqg06(0);
    this.i1y_1 = _GroupKind___init__impl__iwqg06(1);
    this.j1y_1 = _GroupKind___init__impl__iwqg06(2);
  }
  var Companion_instance_1;
  function Companion_getInstance_0() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function removeRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.l()) {
      var validation = _this__u8e3s4.o(index);
      if (validation.b1t_1 < end) {
        _this__u8e3s4.h1(index);
      } else
        break $l$loop;
    }
  }
  function asInt(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return _this__u8e3s4 ? 1 : 0;
  }
  function asBool(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4 === 0);
  }
  function ReusableRememberObserver() {
  }
  function get_isAfterFirstChild(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return _this__u8e3s4.c1y_1 > (_this__u8e3s4.e1y_1 + 1 | 0);
  }
  function get_isAfterFirstChild_0(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return _this__u8e3s4.w1w_1 > (_this__u8e3s4.y1w_1 + 1 | 0);
  }
  function firstInRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    if (index < _this__u8e3s4.l()) {
      var firstInvalidation = _this__u8e3s4.o(index);
      if (firstInvalidation.b1t_1 < end)
        return firstInvalidation;
    }
    return null;
  }
  function removeLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    return index >= 0 ? _this__u8e3s4.h1(index) : null;
  }
  function nearestCommonRootOf(_this__u8e3s4, a, b, common) {
    _init_properties_Composer_kt__bmp4g0();
    if (a === b)
      return a;
    if (a === common || b === common)
      return common;
    if (_this__u8e3s4.n1y(a) === b)
      return b;
    if (_this__u8e3s4.n1y(b) === a)
      return a;
    if (_this__u8e3s4.n1y(a) === _this__u8e3s4.n1y(b))
      return _this__u8e3s4.n1y(a);
    var currentA = a;
    var currentB = b;
    var aDistance = distanceFrom(_this__u8e3s4, a, common);
    var bDistance = distanceFrom(_this__u8e3s4, b, common);
    // Inline function 'kotlin.repeat' call
    var times = aDistance - bDistance | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.nearestCommonRootOf.<anonymous>' call
        currentA = _this__u8e3s4.n1y(currentA);
      }
       while (inductionVariable < times);
    // Inline function 'kotlin.repeat' call
    var times_0 = bDistance - aDistance | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < times_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.runtime.nearestCommonRootOf.<anonymous>' call
        currentB = _this__u8e3s4.n1y(currentB);
      }
       while (inductionVariable_0 < times_0);
    while (!(currentA === currentB)) {
      currentA = _this__u8e3s4.n1y(currentA);
      currentB = _this__u8e3s4.n1y(currentB);
    }
    return currentA;
  }
  function insertIfMissing(_this__u8e3s4, location, scope, instance) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    if (index < 0) {
      var tmp = -(index + 1 | 0) | 0;
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      // Inline function 'androidx.compose.runtime.insertIfMissing.<anonymous>' call
      if (!(instance == null) ? isInterface(instance, DerivedState) : false) {
        tmp_0 = instance;
      } else {
        tmp_0 = null;
      }
      var tmp$ret$1 = tmp_0;
      _this__u8e3s4.g1(tmp, new Invalidation(scope, location, tmp$ret$1));
    } else {
      var invalidation = _this__u8e3s4.o(index);
      if (!(instance == null) ? isInterface(instance, DerivedState) : false) {
        var oldInstance = invalidation.c1t_1;
        if (oldInstance == null)
          invalidation.c1t_1 = instance;
        else {
          if (oldInstance instanceof MutableScatterSet) {
            if (!(oldInstance instanceof MutableScatterSet))
              THROW_CCE();
            oldInstance.d(instance);
          } else {
            invalidation.c1t_1 = mutableScatterSetOf(oldInstance, instance);
          }
        }
      } else {
        invalidation.c1t_1 = null;
      }
    }
  }
  function collectNodesFrom(_this__u8e3s4, anchor) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var reader = _this__u8e3s4.q1v();
    var tmp;
    try {
      var index = _this__u8e3s4.d22(anchor);
      collectNodesFrom$_anonymous_$collectFromGroup_lmwduz(reader, result, index);
      tmp = Unit_instance;
    }finally {
      reader.e1x();
    }
    return result;
  }
  function filterToRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.l()) {
      var invalidation = _this__u8e3s4.o(index);
      if (invalidation.b1t_1 < end) {
        result.d(invalidation);
      } else
        break $l$loop;
      index = index + 1 | 0;
    }
    return result;
  }
  function composeImmediateRuntimeError(message) {
    _init_properties_Composer_kt__bmp4g0();
    throw new ComposeRuntimeError('Compose Runtime internal error. Unexpected or incorrect use of the Compose ' + ('internal runtime API (' + message + '). Please report to Google or use ') + 'https://goo.gle/compose-feedback');
  }
  function GroupInfo(slotIndex, nodeIndex, nodeCount) {
    this.c27_1 = slotIndex;
    this.d27_1 = nodeIndex;
    this.e27_1 = nodeCount;
  }
  function _MutableScatterMultiMap___init__impl__s8ohqe(map) {
    return map;
  }
  function _MutableScatterMultiMap___get_map__impl__38gkgh($this) {
    return $this;
  }
  function MutableScatterMultiMap__put_impl_1qpnrt($this, key, value) {
    // Inline function 'androidx.collection.MutableScatterMap.compute' call
    var this_0 = _MutableScatterMultiMap___get_map__impl__38gkgh($this);
    var index = this_0.u1o(key);
    var inserting = index < 0;
    // Inline function 'androidx.compose.runtime.MutableScatterMultiMap.put.<anonymous>' call
    var tmp;
    if (inserting) {
      tmp = null;
    } else {
      var tmp_0 = this_0.k1o_1[index];
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    }
    var previous = tmp;
    var tmp_1;
    if (previous == null) {
      tmp_1 = value;
    } else {
      if (!(previous == null) ? isInterface(previous, KtMutableList) : false) {
        var list = (!(previous == null) ? isInterface(previous, KtMutableList) : false) ? previous : THROW_CCE();
        list.d(value);
        tmp_1 = list;
      } else {
        tmp_1 = mutableListOf([previous, value]);
      }
    }
    var computedValue = tmp_1;
    if (inserting) {
      var insertionIndex = ~index;
      this_0.j1o_1[insertionIndex] = key;
      this_0.k1o_1[insertionIndex] = computedValue;
    } else {
      this_0.k1o_1[index] = computedValue;
    }
  }
  function MutableScatterMultiMap__pop_impl_h6qh61($this, key) {
    var tmp0_safe_receiver = _MutableScatterMultiMap___get_map__impl__38gkgh($this).n1(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.MutableScatterMultiMap.pop.<anonymous>' call
      var tmp_0;
      if (isInterface(tmp0_safe_receiver, KtMutableList)) {
        var list = isInterface(tmp0_safe_receiver, KtMutableList) ? tmp0_safe_receiver : THROW_CCE();
        var result = list.h1(0);
        if (list.n()) {
          _MutableScatterMultiMap___get_map__impl__38gkgh($this).i4(key);
        }
        tmp_0 = result;
      } else {
        _MutableScatterMultiMap___get_map__impl__38gkgh($this).i4(key);
        tmp_0 = tmp0_safe_receiver;
      }
      var tmp_1 = tmp_0;
      tmp = !(tmp_1 == null) ? tmp_1 : THROW_CCE();
    }
    return tmp;
  }
  function MutableScatterMultiMap__toString_impl_ksvnwa($this) {
    return 'MutableScatterMultiMap(map=' + $this.toString() + ')';
  }
  function MutableScatterMultiMap__hashCode_impl_sh2h9z($this) {
    return $this.hashCode();
  }
  function MutableScatterMultiMap__equals_impl_j6710t($this, other) {
    if (!(other instanceof MutableScatterMultiMap))
      return false;
    var tmp0_other_with_cast = other instanceof MutableScatterMultiMap ? other.a27_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function MutableScatterMultiMap(map) {
    this.a27_1 = map;
  }
  protoOf(MutableScatterMultiMap).toString = function () {
    return MutableScatterMultiMap__toString_impl_ksvnwa(this.a27_1);
  };
  protoOf(MutableScatterMultiMap).hashCode = function () {
    return MutableScatterMultiMap__hashCode_impl_sh2h9z(this.a27_1);
  };
  protoOf(MutableScatterMultiMap).equals = function (other) {
    return MutableScatterMultiMap__equals_impl_j6710t(this.a27_1, other);
  };
  function get_joinedKey(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4.x1z_1 == null) ? new JoinedKey(_this__u8e3s4.w1z_1, _this__u8e3s4.x1z_1) : _this__u8e3s4.w1z_1;
  }
  function multiMap(initialCapacity) {
    _init_properties_Composer_kt__bmp4g0();
    return _MutableScatterMultiMap___init__impl__s8ohqe(new MutableScatterMap(initialCapacity));
  }
  function findInsertLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.findInsertLocation.<anonymous>' call
    var it = findLocation(_this__u8e3s4, location);
    return it < 0 ? -(it + 1 | 0) | 0 : it;
  }
  function findLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var low = 0;
    var high = _this__u8e3s4.l() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4.o(mid);
      var cmp = compareTo(midVal.b1t_1, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function distanceFrom(_this__u8e3s4, index, root) {
    _init_properties_Composer_kt__bmp4g0();
    var count = 0;
    var current = index;
    while (current > 0 && !(current === root)) {
      current = _this__u8e3s4.n1y(current);
      count = count + 1 | 0;
    }
    return count;
  }
  function sourceInformationMarkerStart(composer, key, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.c26(key, sourceInformation);
  }
  function sourceInformationMarkerEnd(composer) {
    _init_properties_Composer_kt__bmp4g0();
    composer.e26();
  }
  function _Updater___init__impl__rbfxm8(composer) {
    return composer;
  }
  function _Updater___get_composer__impl__9ty7av($this) {
    return $this;
  }
  function Updater__set_impl_v7kwss($this, value, block) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = _Updater___get_composer__impl__9ty7av($this);
    if ($this$with.q24() || !equals($this$with.l26(), value)) {
      $this$with.m26(value);
      _Updater___get_composer__impl__9ty7av($this).z24(value, block);
    }
    return Unit_instance;
  }
  function _SkippableUpdater___init__impl__4ft0t9(composer) {
    return composer;
  }
  function _SkippableUpdater___get_composer__impl__6t7yne($this) {
    return $this;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.f27_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).ya = function (a, b) {
    return this.f27_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.ya(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).q2 = function () {
    return this.f27_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
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
  protoOf(sam$kotlin_Comparator$0).hashCode = function () {
    return hashCode(this.q2());
  };
  function collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, group) {
    if ($reader.i21(group)) {
      result.d($reader.d23(group));
    } else {
      var current = group + 1 | 0;
      var end = group + $reader.m20(group) | 0;
      while (current < end) {
        collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, current);
        current = current + $reader.m20(current) | 0;
      }
    }
  }
  function InvalidationLocationAscending$lambda(i1, i2) {
    _init_properties_Composer_kt__bmp4g0();
    return compareTo(i1.b1t_1, i2.b1t_1);
  }
  function InvalidationResult_IGNORED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IGNORED_instance;
  }
  function InvalidationResult_SCHEDULED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_SCHEDULED_instance;
  }
  function InvalidationResult_DEFERRED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_DEFERRED_instance;
  }
  function InvalidationResult_IMMINENT_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IMMINENT_instance;
  }
  function keyMap$factory() {
    return getPropertyCallableRef('keyMap', 1, KProperty1, function (receiver) {
      return new MutableScatterMultiMap(receiver.b27());
    }, null);
  }
  var properties_initialized_Composer_kt_89qzc2;
  function _init_properties_Composer_kt__bmp4g0() {
    if (!properties_initialized_Composer_kt_89qzc2) {
      properties_initialized_Composer_kt_89qzc2 = true;
      compositionTracer = null;
      invocation = new OpaqueKey('provider');
      provider = new OpaqueKey('provider');
      compositionLocalMap = new OpaqueKey('compositionLocalMap');
      providerValues = new OpaqueKey('providerValues');
      providerMaps = new OpaqueKey('providers');
      reference = new OpaqueKey('reference');
      var tmp = InvalidationLocationAscending$lambda;
      InvalidationLocationAscending = new sam$kotlin_Comparator$0(tmp);
    }
  }
  function get_PendingApplyNoModifications() {
    _init_properties_Composition_kt__t5pjw8();
    return PendingApplyNoModifications;
  }
  var PendingApplyNoModifications;
  var CompositionImplServiceKey;
  function recordLeaving($this, instance, endRelativeOrder, priority, endRelativeAfter) {
    processPendingLeaving($this, endRelativeOrder);
    if (0 <= endRelativeAfter ? endRelativeAfter < endRelativeOrder : false) {
      $this.l27_1.d(instance);
      $this.m27_1.l1m(priority);
      $this.n27_1.l1m(endRelativeAfter);
    } else {
      $this.i27_1.d(instance);
    }
  }
  function processPendingLeaving($this, endRelativeOrder) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.l27_1.n()) {
      var index = 0;
      var toAdd = null;
      var toAddAfter = null;
      var toAddPriority = null;
      while (index < $this.n27_1.l()) {
        if (endRelativeOrder <= $this.n27_1.o(index)) {
          var instance = $this.l27_1.h1(index);
          var endRelativeAfter = $this.n27_1.h1(index);
          var priority = $this.m27_1.h1(index);
          if (toAdd == null) {
            toAdd = mutableListOf([instance]);
            // Inline function 'kotlin.also' call
            var this_0 = new MutableIntList();
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.RememberEventDispatcher.processPendingLeaving.<anonymous>' call
            this_0.l1m(endRelativeAfter);
            toAddAfter = this_0;
            // Inline function 'kotlin.also' call
            var this_1 = new MutableIntList();
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.RememberEventDispatcher.processPendingLeaving.<anonymous>' call
            this_1.l1m(priority);
            toAddPriority = this_1;
          } else {
            if (!(toAddPriority instanceof MutableIntList))
              THROW_CCE();
            if (!(toAddAfter instanceof MutableIntList))
              THROW_CCE();
            toAdd.d(instance);
            toAddAfter.l1m(endRelativeAfter);
            toAddPriority.l1m(priority);
          }
        } else {
          index = index + 1 | 0;
        }
      }
      if (!(toAdd == null)) {
        if (!(toAddPriority instanceof MutableIntList))
          THROW_CCE();
        if (!(toAddAfter instanceof MutableIntList))
          THROW_CCE();
        var inductionVariable = 0;
        var last = toAdd.l() - 1 | 0;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var inductionVariable_0 = i + 1 | 0;
            var last_0 = toAdd.l();
            if (inductionVariable_0 < last_0)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                var iAfter = toAddAfter.o(i);
                var jAfter = toAddAfter.o(j);
                if (iAfter < jAfter || (jAfter === iAfter && toAddPriority.o(i) < toAddPriority.o(j))) {
                  swap(toAdd, i, j);
                  swap_0(toAddPriority, i, j);
                  swap_0(toAddAfter, i, j);
                }
              }
               while (inductionVariable_0 < last_0);
          }
           while (inductionVariable < last);
        $this.i27_1.m(toAdd);
      }
    }
  }
  function _get_areChildrenComposing__c1uwup($this) {
    return $this.g28_1.h24();
  }
  function composeInitial($this, content) {
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.j28_1) {
      // Inline function 'androidx.compose.runtime.CompositionImpl.composeInitial.<anonymous>' call
      var tmp$ret$0 = 'The composition is disposed';
      throwIllegalStateException(tmp$ret$0);
    }
    $this.k28_1 = content;
    $this.o27_1.l28($this, $this.k28_1);
  }
  function drainPendingModificationsForCompositionLocked($this) {
    var toRecord = $this.q27_1.wt(get_PendingApplyNoModifications());
    if (toRecord != null) {
      if (equals(toRecord, get_PendingApplyNoModifications())) {
        composeRuntimeError('pending composition has not been applied');
      } else {
        if (!(toRecord == null) ? isInterface(toRecord, KtSet) : false) {
          addPendingInvalidationsLocked_0($this, (!(toRecord == null) ? isInterface(toRecord, KtSet) : false) ? toRecord : THROW_CCE(), true);
        } else {
          if (!(toRecord == null) ? isArray(toRecord) : false) {
            var indexedObject = (!(toRecord == null) ? isArray(toRecord) : false) ? toRecord : THROW_CCE();
            var inductionVariable = 0;
            var last = indexedObject.length;
            while (inductionVariable < last) {
              var changed = indexedObject[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              addPendingInvalidationsLocked_0($this, changed, true);
            }
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + toString($this.q27_1));
          }
        }
      }
    }
  }
  function drainPendingModificationsLocked($this) {
    var toRecord = $this.q27_1.wt(null);
    if (!equals(toRecord, get_PendingApplyNoModifications())) {
      if (!(toRecord == null) ? isInterface(toRecord, KtSet) : false) {
        addPendingInvalidationsLocked_0($this, (!(toRecord == null) ? isInterface(toRecord, KtSet) : false) ? toRecord : THROW_CCE(), false);
      } else {
        if (!(toRecord == null) ? isArray(toRecord) : false) {
          var indexedObject = (!(toRecord == null) ? isArray(toRecord) : false) ? toRecord : THROW_CCE();
          var inductionVariable = 0;
          var last = indexedObject.length;
          while (inductionVariable < last) {
            var changed = indexedObject[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            addPendingInvalidationsLocked_0($this, changed, false);
          }
        } else {
          if (toRecord == null) {
            composeRuntimeError('calling recordModificationsOf and applyChanges concurrently is not supported');
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + toString($this.q27_1));
          }
        }
      }
    }
  }
  function addPendingInvalidationsLocked($this, value, forgetConditionalScopes) {
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
    var value_0 = $this.u27_1.v22_1.n1(value);
    if (value_0 != null) {
      if (value_0 instanceof MutableScatterSet) {
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        var this_0 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var k = this_0.x1p_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = this_0.w1p_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.k2(this_1.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                      var tmp = k[index];
                      var scope = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      if (!$this.a28_1.o28(value, scope) && !scope.p28(value).equals(InvalidationResult_IGNORED_getInstance())) {
                        if (scope.n28() && !forgetConditionalScopes) {
                          $this.w27_1.d(scope);
                        } else {
                          $this.v27_1.d(scope);
                        }
                      }
                    }
                    slot = slot.i2(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
      } else {
        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
        var scope_0 = !(value_0 == null) ? value_0 : THROW_CCE();
        if (!$this.a28_1.o28(value, scope_0) && !scope_0.p28(value).equals(InvalidationResult_IGNORED_getInstance())) {
          if (scope_0.n28() && !forgetConditionalScopes) {
            $this.w27_1.d(scope_0);
          } else {
            $this.v27_1.d(scope_0);
          }
        }
      }
    }
  }
  function addPendingInvalidationsLocked_0($this, values, forgetConditionalScopes) {
    // Inline function 'androidx.compose.runtime.collection.fastForEach' call
    var tmp;
    if (values instanceof ScatterSetWrapper) {
      var this_0 = values.q28_1;
      // Inline function 'kotlin.contracts.contract' call
      var k = this_0.x1p_1;
      var tmp$ret$5;
      $l$block_0: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this_0.w1p_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.k2(this_1.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                    var tmp_0 = k[index];
                    var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                    if (value instanceof RecomposeScopeImpl) {
                      value.p28(null);
                    } else {
                      addPendingInvalidationsLocked($this, value, forgetConditionalScopes);
                      // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
                      var value_0 = $this.x27_1.v22_1.n1(value);
                      if (value_0 != null) {
                        if (value_0 instanceof MutableScatterSet) {
                          // Inline function 'androidx.collection.ScatterSet.forEach' call
                          var this_2 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
                          // Inline function 'kotlin.contracts.contract' call
                          var k_0 = this_2.x1p_1;
                          $l$block: {
                            // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                            // Inline function 'kotlin.contracts.contract' call
                            var m_0 = this_2.w1p_1;
                            var lastIndex_0 = m_0.length - 2 | 0;
                            var inductionVariable_1 = 0;
                            if (inductionVariable_1 <= lastIndex_0)
                              do {
                                var i_0 = inductionVariable_1;
                                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                                var slot_0 = m_0[i_0];
                                // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                                var this_3 = slot_0;
                                if (!this_3.k2(this_3.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                                  var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                                  var inductionVariable_2 = 0;
                                  if (inductionVariable_2 < bitCount_0)
                                    do {
                                      var j_0 = inductionVariable_2;
                                      inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                      // Inline function 'androidx.collection.isFull' call
                                      if (slot_0.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                                        var index_0 = (i_0 << 3) + j_0 | 0;
                                        // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                                        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                                        var tmp_1 = k_0[index_0];
                                        var it = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                                        addPendingInvalidationsLocked($this, it, forgetConditionalScopes);
                                      }
                                      slot_0 = slot_0.i2(8);
                                    }
                                     while (inductionVariable_2 < bitCount_0);
                                  if (!(bitCount_0 === 8)) {
                                    break $l$block;
                                  }
                                }
                              }
                               while (!(i_0 === lastIndex_0));
                          }
                        } else {
                          // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                          var it_0 = !(value_0 == null) ? value_0 : THROW_CCE();
                          addPendingInvalidationsLocked($this, it_0, forgetConditionalScopes);
                        }
                      }
                    }
                  }
                  slot = slot.i2(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                tmp$ret$5 = Unit_instance;
                break $l$block_0;
              }
            }
          }
           while (!(i === lastIndex));
      }
      tmp = tmp$ret$5;
    } else {
      var tmp0_iterator = values.i();
      while (tmp0_iterator.j()) {
        var element = tmp0_iterator.k();
        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
        if (element instanceof RecomposeScopeImpl) {
          element.p28(null);
        } else {
          addPendingInvalidationsLocked($this, element, forgetConditionalScopes);
          // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
          var value_1 = $this.x27_1.v22_1.n1(element);
          if (value_1 != null) {
            if (value_1 instanceof MutableScatterSet) {
              // Inline function 'androidx.collection.ScatterSet.forEach' call
              var this_4 = value_1 instanceof MutableScatterSet ? value_1 : THROW_CCE();
              // Inline function 'kotlin.contracts.contract' call
              var k_1 = this_4.x1p_1;
              $l$block_1: {
                // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                // Inline function 'kotlin.contracts.contract' call
                var m_1 = this_4.w1p_1;
                var lastIndex_1 = m_1.length - 2 | 0;
                var inductionVariable_3 = 0;
                if (inductionVariable_3 <= lastIndex_1)
                  do {
                    var i_1 = inductionVariable_3;
                    inductionVariable_3 = inductionVariable_3 + 1 | 0;
                    var slot_1 = m_1[i_1];
                    // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                    var this_5 = slot_1;
                    if (!this_5.k2(this_5.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                      var bitCount_1 = 8 - (~(i_1 - lastIndex_1 | 0) >>> 31 | 0) | 0;
                      var inductionVariable_4 = 0;
                      if (inductionVariable_4 < bitCount_1)
                        do {
                          var j_1 = inductionVariable_4;
                          inductionVariable_4 = inductionVariable_4 + 1 | 0;
                          // Inline function 'androidx.collection.isFull' call
                          if (slot_1.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                            var index_1 = (i_1 << 3) + j_1 | 0;
                            // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                            // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                            var tmp_2 = k_1[index_1];
                            var it_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
                            addPendingInvalidationsLocked($this, it_1, forgetConditionalScopes);
                          }
                          slot_1 = slot_1.i2(8);
                        }
                         while (inductionVariable_4 < bitCount_1);
                      if (!(bitCount_1 === 8)) {
                        break $l$block_1;
                      }
                    }
                  }
                   while (!(i_1 === lastIndex_1));
              }
            } else {
              // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
              var it_2 = !(value_1 == null) ? value_1 : THROW_CCE();
              addPendingInvalidationsLocked($this, it_2, forgetConditionalScopes);
            }
          }
        }
      }
      tmp = Unit_instance;
    }
    var conditionallyInvalidatedScopes = $this.w27_1;
    var invalidatedScopes = $this.v27_1;
    if (forgetConditionalScopes && conditionallyInvalidatedScopes.b1q()) {
      // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
      // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
      var this_6 = $this.u27_1.v22_1;
      $l$block_3: {
        // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
        var m_2 = this_6.i1o_1;
        var lastIndex_2 = m_2.length - 2 | 0;
        var inductionVariable_5 = 0;
        if (inductionVariable_5 <= lastIndex_2)
          do {
            var i_2 = inductionVariable_5;
            inductionVariable_5 = inductionVariable_5 + 1 | 0;
            var slot_2 = m_2[i_2];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_7 = slot_2;
            if (!this_7.k2(this_7.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_2 = 8 - (~(i_2 - lastIndex_2 | 0) >>> 31 | 0) | 0;
              var inductionVariable_6 = 0;
              if (inductionVariable_6 < bitCount_2)
                do {
                  var j_2 = inductionVariable_6;
                  inductionVariable_6 = inductionVariable_6 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_2.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index_2 = (i_2 << 3) + j_2 | 0;
                    // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                    var tmp_3 = this_6.j1o_1[index_2];
                    (tmp_3 == null ? true : !(tmp_3 == null)) || THROW_CCE();
                    var tmp_4 = this_6.k1o_1[index_2];
                    var value_2 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
                    var tmp_5;
                    if (value_2 instanceof MutableScatterSet) {
                      var set = value_2 instanceof MutableScatterSet ? value_2 : THROW_CCE();
                      // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                      var elements = set.x1p_1;
                      $l$block_2: {
                        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                        // Inline function 'kotlin.contracts.contract' call
                        var m_3 = set.w1p_1;
                        var lastIndex_3 = m_3.length - 2 | 0;
                        var inductionVariable_7 = 0;
                        if (inductionVariable_7 <= lastIndex_3)
                          do {
                            var i_3 = inductionVariable_7;
                            inductionVariable_7 = inductionVariable_7 + 1 | 0;
                            var slot_3 = m_3[i_3];
                            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                            var this_8 = slot_3;
                            if (!this_8.k2(this_8.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                              var bitCount_3 = 8 - (~(i_3 - lastIndex_3 | 0) >>> 31 | 0) | 0;
                              var inductionVariable_8 = 0;
                              if (inductionVariable_8 < bitCount_3)
                                do {
                                  var j_3 = inductionVariable_8;
                                  inductionVariable_8 = inductionVariable_8 + 1 | 0;
                                  // Inline function 'androidx.collection.isFull' call
                                  if (slot_3.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                                    var index_3 = (i_3 << 3) + j_3 | 0;
                                    // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                    // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                                    var tmp_6 = elements[index_3];
                                    var scope = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
                                    if (conditionallyInvalidatedScopes.p(scope) || invalidatedScopes.p(scope)) {
                                      set.j1r(index_3);
                                    }
                                  }
                                  slot_3 = slot_3.i2(8);
                                }
                                 while (inductionVariable_8 < bitCount_3);
                              if (!(bitCount_3 === 8)) {
                                break $l$block_2;
                              }
                            }
                          }
                           while (!(i_3 === lastIndex_3));
                      }
                      tmp_5 = set.n();
                    } else {
                      // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                      var scope_0 = !(value_2 == null) ? value_2 : THROW_CCE();
                      tmp_5 = conditionallyInvalidatedScopes.p(scope_0) || invalidatedScopes.p(scope_0);
                    }
                    if (tmp_5) {
                      this_6.b1n(index_2);
                    }
                  }
                  slot_2 = slot_2.i2(8);
                }
                 while (inductionVariable_6 < bitCount_2);
              if (!(bitCount_2 === 8)) {
                break $l$block_3;
              }
            }
          }
           while (!(i_2 === lastIndex_2));
      }
      conditionallyInvalidatedScopes.e1();
      cleanUpDerivedStateObservations($this);
    } else if (invalidatedScopes.b1q()) {
      // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
      // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
      var this_9 = $this.u27_1.v22_1;
      $l$block_5: {
        // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
        var m_4 = this_9.i1o_1;
        var lastIndex_4 = m_4.length - 2 | 0;
        var inductionVariable_9 = 0;
        if (inductionVariable_9 <= lastIndex_4)
          do {
            var i_4 = inductionVariable_9;
            inductionVariable_9 = inductionVariable_9 + 1 | 0;
            var slot_4 = m_4[i_4];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_10 = slot_4;
            if (!this_10.k2(this_10.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_4 = 8 - (~(i_4 - lastIndex_4 | 0) >>> 31 | 0) | 0;
              var inductionVariable_10 = 0;
              if (inductionVariable_10 < bitCount_4)
                do {
                  var j_4 = inductionVariable_10;
                  inductionVariable_10 = inductionVariable_10 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_4.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index_4 = (i_4 << 3) + j_4 | 0;
                    // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                    var tmp_7 = this_9.j1o_1[index_4];
                    (tmp_7 == null ? true : !(tmp_7 == null)) || THROW_CCE();
                    var tmp_8 = this_9.k1o_1[index_4];
                    var value_3 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
                    var tmp_9;
                    if (value_3 instanceof MutableScatterSet) {
                      var set_0 = value_3 instanceof MutableScatterSet ? value_3 : THROW_CCE();
                      // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                      var elements_0 = set_0.x1p_1;
                      $l$block_4: {
                        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                        // Inline function 'kotlin.contracts.contract' call
                        var m_5 = set_0.w1p_1;
                        var lastIndex_5 = m_5.length - 2 | 0;
                        var inductionVariable_11 = 0;
                        if (inductionVariable_11 <= lastIndex_5)
                          do {
                            var i_5 = inductionVariable_11;
                            inductionVariable_11 = inductionVariable_11 + 1 | 0;
                            var slot_5 = m_5[i_5];
                            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                            var this_11 = slot_5;
                            if (!this_11.k2(this_11.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                              var bitCount_5 = 8 - (~(i_5 - lastIndex_5 | 0) >>> 31 | 0) | 0;
                              var inductionVariable_12 = 0;
                              if (inductionVariable_12 < bitCount_5)
                                do {
                                  var j_5 = inductionVariable_12;
                                  inductionVariable_12 = inductionVariable_12 + 1 | 0;
                                  // Inline function 'androidx.collection.isFull' call
                                  if (slot_5.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                                    var index_5 = (i_5 << 3) + j_5 | 0;
                                    // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                    // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                                    var tmp_10 = elements_0[index_5];
                                    var scope_1 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
                                    if (invalidatedScopes.p(scope_1)) {
                                      set_0.j1r(index_5);
                                    }
                                  }
                                  slot_5 = slot_5.i2(8);
                                }
                                 while (inductionVariable_12 < bitCount_5);
                              if (!(bitCount_5 === 8)) {
                                break $l$block_4;
                              }
                            }
                          }
                           while (!(i_5 === lastIndex_5));
                      }
                      tmp_9 = set_0.n();
                    } else {
                      // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                      var scope_2 = !(value_3 == null) ? value_3 : THROW_CCE();
                      tmp_9 = invalidatedScopes.p(scope_2);
                    }
                    if (tmp_9) {
                      this_9.b1n(index_4);
                    }
                  }
                  slot_4 = slot_4.i2(8);
                }
                 while (inductionVariable_10 < bitCount_4);
              if (!(bitCount_4 === 8)) {
                break $l$block_5;
              }
            }
          }
           while (!(i_4 === lastIndex_4));
      }
      cleanUpDerivedStateObservations($this);
      invalidatedScopes.e1();
    }
  }
  function cleanUpDerivedStateObservations($this) {
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
    // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
    var this_0 = $this.x27_1.v22_1;
    $l$block_0: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.i1o_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          if (!this_1.k2(this_1.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                  // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                  var tmp = this_0.j1o_1[index];
                  (tmp == null ? true : !(tmp == null)) || THROW_CCE();
                  var tmp_0 = this_0.k1o_1[index];
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  var tmp_1;
                  if (value instanceof MutableScatterSet) {
                    var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                    // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                    var elements = set.x1p_1;
                    $l$block: {
                      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                      // Inline function 'kotlin.contracts.contract' call
                      var m_0 = set.w1p_1;
                      var lastIndex_0 = m_0.length - 2 | 0;
                      var inductionVariable_1 = 0;
                      if (inductionVariable_1 <= lastIndex_0)
                        do {
                          var i_0 = inductionVariable_1;
                          inductionVariable_1 = inductionVariable_1 + 1 | 0;
                          var slot_0 = m_0[i_0];
                          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                          var this_2 = slot_0;
                          if (!this_2.k2(this_2.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                            var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                            var inductionVariable_2 = 0;
                            if (inductionVariable_2 < bitCount_0)
                              do {
                                var j_0 = inductionVariable_2;
                                inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                // Inline function 'androidx.collection.isFull' call
                                if (slot_0.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                                  var index_0 = (i_0 << 3) + j_0 | 0;
                                  // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                  // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
                                  var tmp_2 = elements[index_0];
                                  var derivedState = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
                                  if (!$this.u27_1.r28(derivedState)) {
                                    set.j1r(index_0);
                                  }
                                }
                                slot_0 = slot_0.i2(8);
                              }
                               while (inductionVariable_2 < bitCount_0);
                            if (!(bitCount_0 === 8)) {
                              break $l$block;
                            }
                          }
                        }
                         while (!(i_0 === lastIndex_0));
                    }
                    tmp_1 = set.n();
                  } else {
                    // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
                    var derivedState_0 = !(value == null) ? value : THROW_CCE();
                    tmp_1 = !$this.u27_1.r28(derivedState_0);
                  }
                  if (tmp_1) {
                    this_0.b1n(index);
                  }
                }
                slot = slot.i2(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block_0;
            }
          }
        }
         while (!(i === lastIndex));
    }
    if ($this.w27_1.b1q()) {
      // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
      var this_3 = $this.w27_1;
      var elements_0 = this_3.x1p_1;
      $l$block_1: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m_1 = this_3.w1p_1;
        var lastIndex_1 = m_1.length - 2 | 0;
        var inductionVariable_3 = 0;
        if (inductionVariable_3 <= lastIndex_1)
          do {
            var i_1 = inductionVariable_3;
            inductionVariable_3 = inductionVariable_3 + 1 | 0;
            var slot_1 = m_1[i_1];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_4 = slot_1;
            if (!this_4.k2(this_4.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_1 = 8 - (~(i_1 - lastIndex_1 | 0) >>> 31 | 0) | 0;
              var inductionVariable_4 = 0;
              if (inductionVariable_4 < bitCount_1)
                do {
                  var j_1 = inductionVariable_4;
                  inductionVariable_4 = inductionVariable_4 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_1.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index_1 = (i_1 << 3) + j_1 | 0;
                    // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
                    var tmp_3 = elements_0[index_1];
                    if (!((tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE()).n28()) {
                      this_3.j1r(index_1);
                    }
                  }
                  slot_1 = slot_1.i2(8);
                }
                 while (inductionVariable_4 < bitCount_1);
              if (!(bitCount_1 === 8)) {
                break $l$block_1;
              }
            }
          }
           while (!(i_1 === lastIndex_1));
      }
    }
  }
  function invalidateScopeOfLocked($this, value) {
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
    var value_0 = $this.u27_1.v22_1.n1(value);
    if (value_0 != null) {
      if (value_0 instanceof MutableScatterSet) {
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        var this_0 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var k = this_0.x1p_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = this_0.w1p_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.k2(this_1.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateScopeOfLocked.<anonymous>' call
                      var tmp = k[index];
                      var scope = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      if (scope.p28(value).equals(InvalidationResult_IMMINENT_getInstance())) {
                        $this.a28_1.s28(value, scope);
                      }
                    }
                    slot = slot.i2(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
      } else {
        // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateScopeOfLocked.<anonymous>' call
        var scope_0 = !(value_0 == null) ? value_0 : THROW_CCE();
        if (scope_0.p28(value).equals(InvalidationResult_IMMINENT_getInstance())) {
          $this.a28_1.s28(value, scope_0);
        }
      }
    }
  }
  function applyChangesInLocked($this, changes) {
    var manager = new RememberEventDispatcher($this.s27_1);
    try {
      if (changes.n())
        return Unit_instance;
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:applyChanges';
        var token = Trace_instance.p22(sectionName);
        try {
          $this.p27_1.t1r();
          // Inline function 'androidx.compose.runtime.SlotTable.write' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
          var writer = $this.t27_1.u1y();
          var normalClose = false;
          var tmp;
          try {
            // Inline function 'kotlin.also' call
            changes.t28($this.p27_1, writer, manager);
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
            normalClose = true;
            tmp = Unit_instance;
          }finally {
            writer.z1y(normalClose);
          }
          $this.p27_1.u1r();
          break $l$block;
        }finally {
          Trace_instance.c23(token);
        }
      }
      manager.u28();
      manager.v28();
      if ($this.c28_1) {
        $l$block_2: {
          // Inline function 'androidx.compose.runtime.trace' call
          var sectionName_0 = 'Compose:unobserve';
          var token_0 = Trace_instance.p22(sectionName_0);
          try {
            $this.c28_1 = false;
            // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
            // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
            var this_0 = $this.u27_1.v22_1;
            $l$block_1: {
              // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
              var m = this_0.i1o_1;
              var lastIndex = m.length - 2 | 0;
              var inductionVariable = 0;
              if (inductionVariable <= lastIndex)
                do {
                  var i = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var slot = m[i];
                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                  var this_1 = slot;
                  if (!this_1.k2(this_1.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                    var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                    var inductionVariable_0 = 0;
                    if (inductionVariable_0 < bitCount)
                      do {
                        var j = inductionVariable_0;
                        inductionVariable_0 = inductionVariable_0 + 1 | 0;
                        // Inline function 'androidx.collection.isFull' call
                        if (slot.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                          var index = (i << 3) + j | 0;
                          // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                          // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                          var tmp_0 = this_0.j1o_1[index];
                          (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
                          var tmp_1 = this_0.k1o_1[index];
                          var value = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                          var tmp_2;
                          if (value instanceof MutableScatterSet) {
                            var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                            // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                            var elements = set.x1p_1;
                            $l$block_0: {
                              // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                              // Inline function 'kotlin.contracts.contract' call
                              var m_0 = set.w1p_1;
                              var lastIndex_0 = m_0.length - 2 | 0;
                              var inductionVariable_1 = 0;
                              if (inductionVariable_1 <= lastIndex_0)
                                do {
                                  var i_0 = inductionVariable_1;
                                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                                  var slot_0 = m_0[i_0];
                                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                                  var this_2 = slot_0;
                                  if (!this_2.k2(this_2.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                                    var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                                    var inductionVariable_2 = 0;
                                    if (inductionVariable_2 < bitCount_0)
                                      do {
                                        var j_0 = inductionVariable_2;
                                        inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                        // Inline function 'androidx.collection.isFull' call
                                        if (slot_0.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                                          var index_0 = (i_0 << 3) + j_0 | 0;
                                          // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                          // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>' call
                                          var tmp_3 = elements[index_0];
                                          if (!((tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE()).s26()) {
                                            set.j1r(index_0);
                                          }
                                        }
                                        slot_0 = slot_0.i2(8);
                                      }
                                       while (inductionVariable_2 < bitCount_0);
                                    if (!(bitCount_0 === 8)) {
                                      break $l$block_0;
                                    }
                                  }
                                }
                                 while (!(i_0 === lastIndex_0));
                            }
                            tmp_2 = set.n();
                          } else {
                            // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>' call
                            tmp_2 = !(!(value == null) ? value : THROW_CCE()).s26();
                          }
                          if (tmp_2) {
                            this_0.b1n(index);
                          }
                        }
                        slot = slot.i2(8);
                      }
                       while (inductionVariable_0 < bitCount);
                    if (!(bitCount === 8)) {
                      break $l$block_1;
                    }
                  }
                }
                 while (!(i === lastIndex));
            }
            cleanUpDerivedStateObservations($this);
            break $l$block_2;
          }finally {
            Trace_instance.c23(token_0);
          }
        }
      }
    }finally {
      if ($this.z27_1.n()) {
        manager.w28();
      }
    }
  }
  function tryImminentInvalidation($this, scope, instance) {
    return $this.x28() && $this.g28_1.n22(scope, instance);
  }
  function invalidateChecked($this, scope, anchor, instance) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.r27_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>' call
    var tmp0_safe_receiver = $this.d28_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>.<anonymous>' call
      var tmp_0;
      if ($this.t27_1.y28($this.e28_1, anchor)) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var delegate = tmp;
    if (delegate == null) {
      if (tryImminentInvalidation($this, scope, instance)) {
        return InvalidationResult_IMMINENT_getInstance();
      }
      var observer_0 = observer($this);
      if (instance == null) {
        $this.b28_1.z28(scope, ScopeInvalidated_instance);
      } else {
        var tmp_1;
        if (observer_0 == null) {
          tmp_1 = !(!(instance == null) ? isInterface(instance, DerivedState) : false);
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          $this.b28_1.z28(scope, ScopeInvalidated_instance);
        } else {
          var tmp$ret$5;
          $l$block_1: {
            // Inline function 'androidx.compose.runtime.collection.ScopeMap.anyScopeOf' call
            // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
            var value = $this.b28_1.v22_1.n1(scope);
            if (value != null) {
              if (value instanceof MutableScatterSet) {
                // Inline function 'androidx.collection.ScatterSet.forEach' call
                var this_0 = value instanceof MutableScatterSet ? value : THROW_CCE();
                // Inline function 'kotlin.contracts.contract' call
                var k = this_0.x1p_1;
                $l$block_0: {
                  // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                  // Inline function 'kotlin.contracts.contract' call
                  var m = this_0.w1p_1;
                  var lastIndex = m.length - 2 | 0;
                  var inductionVariable = 0;
                  if (inductionVariable <= lastIndex)
                    do {
                      var i = inductionVariable;
                      inductionVariable = inductionVariable + 1 | 0;
                      var slot = m[i];
                      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                      var this_1 = slot;
                      if (!this_1.k2(this_1.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                        var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                        var inductionVariable_0 = 0;
                        if (inductionVariable_0 < bitCount)
                          do {
                            var j = inductionVariable_0;
                            inductionVariable_0 = inductionVariable_0 + 1 | 0;
                            // Inline function 'androidx.collection.isFull' call
                            if (slot.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                              var index = (i << 3) + j | 0;
                              // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                              // Inline function 'androidx.compose.runtime.collection.ScopeMap.anyScopeOf.<anonymous>' call
                              var tmp_2 = k[index];
                              // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>.<anonymous>' call
                              if (((tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE()) === ScopeInvalidated_instance) {
                                tmp$ret$5 = true;
                                break $l$block_1;
                              }
                            }
                            slot = slot.i2(8);
                          }
                           while (inductionVariable_0 < bitCount);
                        if (!(bitCount === 8)) {
                          break $l$block_0;
                        }
                      }
                    }
                     while (!(i === lastIndex));
                }
              } else {
                // Inline function 'androidx.compose.runtime.collection.ScopeMap.anyScopeOf.<anonymous>' call
                // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>.<anonymous>' call
                if ((!(value == null) ? value : THROW_CCE()) === ScopeInvalidated_instance) {
                  tmp$ret$5 = true;
                  break $l$block_1;
                }
              }
            }
            tmp$ret$5 = false;
          }
          if (!tmp$ret$5) {
            $this.b28_1.s28(scope, instance);
          }
        }
      }
    }
    var delegate_0 = delegate;
    if (!(delegate_0 == null)) {
      return invalidateChecked(delegate_0, scope, anchor, instance);
    }
    $this.o27_1.a29($this);
    return $this.x28() ? InvalidationResult_DEFERRED_getInstance() : InvalidationResult_SCHEDULED_getInstance();
  }
  function takeInvalidations($this) {
    var invalidations = $this.b28_1;
    $this.b28_1 = new ScopeMap();
    return invalidations;
  }
  function observer($this) {
    var holder = $this.f28_1;
    var tmp;
    if (holder.d29_1) {
      tmp = holder.c29_1;
    } else {
      var parentHolder = $this.o27_1.b29();
      var parentObserver = parentHolder == null ? null : parentHolder.c29_1;
      if (!equals(parentObserver, holder.c29_1)) {
        holder.c29_1 = parentObserver;
      }
      tmp = parentObserver;
    }
    return tmp;
  }
  function RememberEventDispatcher(abandoning) {
    this.g27_1 = abandoning;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.h27_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.i27_1 = ArrayList_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.j27_1 = ArrayList_init_$Create$();
    this.k27_1 = null;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.l27_1 = ArrayList_init_$Create$();
    this.m27_1 = new MutableIntList();
    this.n27_1 = new MutableIntList();
  }
  protoOf(RememberEventDispatcher).e29 = function (instance) {
    this.h27_1.d(instance);
  };
  protoOf(RememberEventDispatcher).t26 = function (instance, endRelativeOrder, priority, endRelativeAfter) {
    recordLeaving(this, instance, endRelativeOrder, priority, endRelativeAfter);
  };
  protoOf(RememberEventDispatcher).q26 = function (instance, endRelativeOrder, priority, endRelativeAfter) {
    var tmp0_elvis_lhs = this.k27_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = mutableScatterSetOf_0();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RememberEventDispatcher.releasing.<anonymous>' call
      this.k27_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var releasing = tmp;
    releasing.n1r(instance);
    recordLeaving(this, instance, endRelativeOrder, priority, endRelativeAfter);
  };
  protoOf(RememberEventDispatcher).u28 = function () {
    processPendingLeaving(this, -2147483648);
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.i27_1.n()) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:onForgotten';
        var token = Trace_instance.p22(sectionName);
        try {
          var releasing = this.k27_1;
          var inductionVariable = this.i27_1.l() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              var instance = this.i27_1.o(i);
              if (isInterface(instance, RememberObserver)) {
                this.g27_1.d1(instance);
                instance.f29();
              }
              if (isInterface(instance, ComposeNodeLifecycleCallback)) {
                if (!(releasing == null) && releasing.p(instance)) {
                  instance.z1s();
                } else {
                  instance.y1s();
                }
              }
            }
             while (0 <= inductionVariable);
          break $l$block;
        }finally {
          Trace_instance.c23(token);
        }
      }
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.h27_1.n()) {
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName_0 = 'Compose:onRemembered';
        var token_0 = Trace_instance.p22(sectionName_0);
        try {
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var this_0 = this.h27_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable_0 = 0;
          var last = this_0.l() - 1 | 0;
          if (inductionVariable_0 <= last)
            do {
              var index = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var item = this_0.o(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchRememberObservers.<anonymous>.<anonymous>' call
              this.g27_1.d1(item);
              item.g29();
            }
             while (inductionVariable_0 <= last);
          break $l$block_0;
        }finally {
          Trace_instance.c23(token_0);
        }
      }
    }
  };
  protoOf(RememberEventDispatcher).v28 = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.j27_1.n()) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:sideeffects';
        var token = Trace_instance.p22(sectionName);
        try {
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var this_0 = this.j27_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = this_0.l() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = this_0.o(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchSideEffects.<anonymous>.<anonymous>' call
              item();
            }
             while (inductionVariable <= last);
          this.j27_1.e1();
          break $l$block;
        }finally {
          Trace_instance.c23(token);
        }
      }
    }
  };
  protoOf(RememberEventDispatcher).w28 = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.g27_1.n()) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:abandons';
        var token = Trace_instance.p22(sectionName);
        try {
          var iterator = this.g27_1.i();
          while (iterator.j()) {
            var instance = iterator.k();
            iterator.g3();
            instance.h29();
          }
          break $l$block;
        }finally {
          Trace_instance.c23(token);
        }
      }
    }
  };
  function CompositionImpl(parent, applier, recomposeContext) {
    recomposeContext = recomposeContext === VOID ? null : recomposeContext;
    this.o27_1 = parent;
    this.p27_1 = applier;
    this.q27_1 = new AtomicReference(null);
    this.r27_1 = new Object();
    this.s27_1 = (new MutableScatterSet()).r1r();
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = new SlotTable();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.slotTable.<anonymous>' call
    if (this.o27_1.y1y()) {
      this_0.x1y();
    }
    if (this.o27_1.y1v()) {
      this_0.w1y();
    }
    tmp.t27_1 = this_0;
    this.u27_1 = new ScopeMap();
    this.v27_1 = new MutableScatterSet();
    this.w27_1 = new MutableScatterSet();
    this.x27_1 = new ScopeMap();
    this.y27_1 = new ChangeList();
    this.z27_1 = new ChangeList();
    this.a28_1 = new ScopeMap();
    this.b28_1 = new ScopeMap();
    this.c28_1 = false;
    this.d28_1 = null;
    this.e28_1 = 0;
    this.f28_1 = new CompositionObserverHolder();
    var tmp_0 = this;
    // Inline function 'kotlin.also' call
    var this_1 = new ComposerImpl(this.p27_1, this.o27_1, this.t27_1, this.s27_1, this.y27_1, this.z27_1, this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.composer.<anonymous>' call
    this.o27_1.i29(this_1);
    tmp_0.g28_1 = this_1;
    this.h28_1 = recomposeContext;
    var tmp_1 = this;
    var tmp_2 = this.o27_1;
    tmp_1.i28_1 = tmp_2 instanceof Recomposer;
    this.j28_1 = false;
    this.k28_1 = ComposableSingletons$CompositionKt_getInstance().j29_1;
  }
  protoOf(CompositionImpl).x28 = function () {
    return this.g28_1.s1u_1;
  };
  protoOf(CompositionImpl).l29 = function () {
    return this.j28_1;
  };
  protoOf(CompositionImpl).m29 = function (content) {
    composeInitial(this, content);
  };
  protoOf(CompositionImpl).n29 = function (content) {
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.composeContent.<anonymous>' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        this.r27_1;
        // Inline function 'androidx.compose.runtime.CompositionImpl.composeContent.<anonymous>.<anonymous>' call
        drainPendingModificationsForCompositionLocked(this);
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          // Inline function 'androidx.compose.runtime.CompositionImpl.composeContent.<anonymous>.<anonymous>.<anonymous>' call
          var observer_0 = observer(this);
          if (!(observer_0 == null)) {
            var tmp_2 = invalidations.o29();
            observer_0.p29(this, isInterface(tmp_2, KtMap) ? tmp_2 : THROW_CCE());
          }
          this.g28_1.g26(invalidations, content);
          var tmp_3;
          if (observer_0 == null) {
            tmp_3 = null;
          } else {
            observer_0.q29(this);
            tmp_3 = Unit_instance;
          }
          tmp_1 = tmp_3;
        } catch ($p) {
          var tmp_4;
          if ($p instanceof Exception) {
            var e = $p;
            this.b28_1 = invalidations;
            throw e;
          } else {
            throw $p;
          }
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = tmp_1;
      }finally {
        var tmp_5;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_5 = !this.s27_1.n();
        } else {
          tmp_5 = false;
        }
        if (tmp_5) {
          (new RememberEventDispatcher(this.s27_1)).w28();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_6;
      if ($p instanceof Exception) {
        var e_0 = $p;
        this.r29();
        throw e_0;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).s29 = function (values) {
    $l$loop: while (true) {
      var old = this.q27_1.pn();
      var tmp;
      if (old == null ? true : equals(old, get_PendingApplyNoModifications())) {
        tmp = values;
      } else {
        if (!(old == null) ? isInterface(old, KtSet) : false) {
          // Inline function 'kotlin.arrayOf' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp = [old, values];
        } else {
          if (!(old == null) ? isArray(old) : false) {
            tmp = plus_0((!(old == null) ? isArray(old) : false) ? old : THROW_CCE(), values);
          } else {
            var message = 'corrupt pendingModifications: ' + toString(this.q27_1);
            throw IllegalStateException_init_$Create$(toString(message));
          }
        }
      }
      var new_0 = tmp;
      if (this.q27_1.vt(old, new_0)) {
        if (old == null) {
          // Inline function 'androidx.compose.runtime.synchronized' call
          this.r27_1;
          drainPendingModificationsLocked(this);
        }
        break $l$loop;
      }
    }
  };
  protoOf(CompositionImpl).t29 = function (values) {
    // Inline function 'androidx.compose.runtime.collection.fastForEach' call
    var tmp;
    if (values instanceof ScatterSetWrapper) {
      var this_0 = values.q28_1;
      // Inline function 'kotlin.contracts.contract' call
      var k = this_0.x1p_1;
      var tmp$ret$2;
      $l$block: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this_0.w1p_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.k2(this_1.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.CompositionImpl.observesAnyOf.<anonymous>' call
                    var tmp_0 = k[index];
                    var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                    if (this.u27_1.r28(value) || this.x27_1.r28(value))
                      return true;
                  }
                  slot = slot.i2(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                tmp$ret$2 = Unit_instance;
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
      tmp = tmp$ret$2;
    } else {
      var tmp0_iterator = values.i();
      while (tmp0_iterator.j()) {
        var element = tmp0_iterator.k();
        // Inline function 'androidx.compose.runtime.CompositionImpl.observesAnyOf.<anonymous>' call
        if (this.u27_1.r28(element) || this.x27_1.r28(element))
          return true;
      }
      tmp = Unit_instance;
    }
    return false;
  };
  protoOf(CompositionImpl).u29 = function (block) {
    return this.g28_1.i26(block);
  };
  protoOf(CompositionImpl).v29 = function (value) {
    if (!_get_areChildrenComposing__c1uwup(this)) {
      var tmp0_safe_receiver = this.g28_1.r24();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.o26(true);
        var alreadyRead = tmp0_safe_receiver.w29(value);
        if (!alreadyRead) {
          if (value instanceof StateObjectImpl) {
            // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
            var tmp$ret$0 = _ReaderKind___init__impl__jqeebu(1);
            value.y29(tmp$ret$0);
          }
          this.u27_1.s28(value, tmp0_safe_receiver);
          if (isInterface(value, DerivedState)) {
            var record = value.z29();
            this.x27_1.a2a(value);
            // Inline function 'androidx.collection.ObjectIntMap.forEachKey' call
            var this_0 = record.b2a();
            var k = this_0.o1n_1;
            $l$block: {
              // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
              var m = this_0.n1n_1;
              var lastIndex = m.length - 2 | 0;
              var inductionVariable = 0;
              if (inductionVariable <= lastIndex)
                do {
                  var i = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var slot = m[i];
                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                  var this_1 = slot;
                  if (!this_1.k2(this_1.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                    var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                    var inductionVariable_0 = 0;
                    if (inductionVariable_0 < bitCount)
                      do {
                        var j = inductionVariable_0;
                        inductionVariable_0 = inductionVariable_0 + 1 | 0;
                        // Inline function 'androidx.collection.isFull' call
                        if (slot.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                          var index = (i << 3) + j | 0;
                          // Inline function 'androidx.collection.ObjectIntMap.forEachKey.<anonymous>' call
                          // Inline function 'androidx.compose.runtime.CompositionImpl.recordReadOf.<anonymous>.<anonymous>' call
                          var tmp = k[index];
                          var dependency = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                          if (dependency instanceof StateObjectImpl) {
                            // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
                            var tmp$ret$3 = _ReaderKind___init__impl__jqeebu(1);
                            dependency.y29(tmp$ret$3);
                          }
                          this.x27_1.s28(dependency, value);
                        }
                        slot = slot.i2(8);
                      }
                       while (inductionVariable_0 < bitCount);
                    if (!(bitCount === 8)) {
                      break $l$block;
                    }
                  }
                }
                 while (!(i === lastIndex));
            }
            tmp0_safe_receiver.d2a(value, record.c2a());
          }
        }
      }
    }
  };
  protoOf(CompositionImpl).e2a = function (value) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.r27_1;
    invalidateScopeOfLocked(this, value);
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
    var value_0 = this.x27_1.v22_1.n1(value);
    if (value_0 != null) {
      if (value_0 instanceof MutableScatterSet) {
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        var this_0 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var k = this_0.x1p_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = this_0.w1p_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.k2(this_1.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.CompositionImpl.recordWriteOf.<anonymous>.<anonymous>' call
                      var tmp = k[index];
                      var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      invalidateScopeOfLocked(this, it);
                    }
                    slot = slot.i2(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
      } else {
        // Inline function 'androidx.compose.runtime.CompositionImpl.recordWriteOf.<anonymous>.<anonymous>' call
        var it_0 = !(value_0 == null) ? value_0 : THROW_CCE();
        invalidateScopeOfLocked(this, it_0);
      }
    }
    return Unit_instance;
  };
  protoOf(CompositionImpl).f2a = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.r27_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>' call
    drainPendingModificationsForCompositionLocked(this);
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>' call
          var observer_0 = observer(this);
          if (observer_0 == null)
            null;
          else {
            var tmp_2 = invalidations.o29();
            observer_0.p29(this, isInterface(tmp_2, KtMap) ? tmp_2 : THROW_CCE());
          }
          // Inline function 'kotlin.also' call
          var this_0 = this.g28_1.j26(invalidations);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!this_0) {
            drainPendingModificationsLocked(this);
          }
          if (observer_0 == null)
            null;
          else {
            observer_0.q29(this);
          }
          tmp_1 = this_0;
        } catch ($p) {
          var tmp_3;
          if ($p instanceof Exception) {
            var e = $p;
            this.b28_1 = invalidations;
            throw e;
          } else {
            throw $p;
          }
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = tmp_1;
      }finally {
        var tmp_4;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_4 = !this.s27_1.n();
        } else {
          tmp_4 = false;
        }
        if (tmp_4) {
          (new RememberEventDispatcher(this.s27_1)).w28();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_5;
      if ($p instanceof Exception) {
        var e_0 = $p;
        this.r29();
        throw e_0;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(CompositionImpl).g2a = function (references) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAll' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.l() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.o(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAll.<anonymous>' call
          // Inline function 'androidx.compose.runtime.CompositionImpl.insertMovableContent.<anonymous>' call
          if (!equals(item.ed_1.y21_1, this)) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = true;
    }
    runtimeCheck(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        this.g28_1.z25(references);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.s27_1.n();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.s27_1)).w28();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        this.r29();
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).h2a = function (state) {
    var manager = new RememberEventDispatcher(this.s27_1);
    var slotTable = state.g22_1;
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = slotTable.u1y();
    var normalClose = false;
    var tmp;
    try {
      // Inline function 'kotlin.also' call
      removeCurrentGroup(writer, manager);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
      normalClose = true;
      tmp = Unit_instance;
    }finally {
      writer.z1y(normalClose);
    }
    manager.u28();
  };
  protoOf(CompositionImpl).i2a = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.r27_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        applyChangesInLocked(this, this.y27_1);
        drainPendingModificationsLocked(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.s27_1.n();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.s27_1)).w28();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        this.r29();
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).j2a = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.r27_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        if (this.z27_1.b1q()) {
          applyChangesInLocked(this, this.z27_1);
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.s27_1.n();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.s27_1)).w28();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        this.r29();
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).k2a = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.r27_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        this.g28_1.p24();
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!this.s27_1.n()) {
          (new RememberEventDispatcher(this.s27_1)).w28();
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.s27_1.n();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.s27_1)).w28();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        this.r29();
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).r29 = function () {
    this.q27_1.mx(null);
    this.y27_1.e1();
    this.z27_1.e1();
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.s27_1.n()) {
      (new RememberEventDispatcher(this.s27_1)).w28();
    }
  };
  protoOf(CompositionImpl).l2a = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.r27_1;
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.t27_1.h1v_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateAll.<anonymous>.<anonymous>' call
      var tmp0_safe_receiver = element instanceof RecomposeScopeImpl ? element : null;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.m2a();
      }
    }
  };
  protoOf(CompositionImpl).o22 = function (to, groupIndex, block) {
    var tmp;
    if (!(to == null) && !equals(to, this) && groupIndex >= 0) {
      var tmp_0 = this;
      tmp_0.d28_1 = to instanceof CompositionImpl ? to : THROW_CCE();
      this.e28_1 = groupIndex;
      var tmp_1;
      try {
        tmp_1 = block();
      }finally {
        this.d28_1 = null;
        this.e28_1 = 0;
      }
      tmp = tmp_1;
    } else {
      tmp = block();
    }
    return tmp;
  };
  protoOf(CompositionImpl).n2a = function (scope, instance) {
    if (scope.o2a()) {
      scope.x25(true);
    }
    var anchor = scope.g1t_1;
    if (anchor == null || !anchor.s26())
      return InvalidationResult_IGNORED_getInstance();
    if (!this.t27_1.p2a(anchor)) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      this.r27_1;
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidate.<anonymous>' call
      var delegate = this.d28_1;
      if ((delegate == null ? null : tryImminentInvalidation(delegate, scope, instance)) === true)
        return InvalidationResult_IMMINENT_getInstance();
      return InvalidationResult_IGNORED_getInstance();
    }
    if (!scope.q2a())
      return InvalidationResult_IGNORED_getInstance();
    return invalidateChecked(this, scope, anchor, instance);
  };
  protoOf(CompositionImpl).r2a = function (scope) {
    this.c28_1 = true;
  };
  protoOf(CompositionImpl).s2a = function (instance, scope) {
    this.u27_1.o28(instance, scope);
  };
  protoOf(CompositionImpl).t2a = function (state) {
    if (!this.u27_1.r28(state)) {
      this.x27_1.a2a(state);
    }
  };
  function CompositionObserverHolder(observer, root) {
    observer = observer === VOID ? null : observer;
    root = root === VOID ? false : root;
    this.c29_1 = observer;
    this.d29_1 = root;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.d24(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 3) === 2) || !$composer_0.f24()) {
      if (isTraceInProgress()) {
        traceEventStart(954879418, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-1.<anonymous> (Composition.kt:623)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v1y();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.d24(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 3) === 2) || !$composer_0.f24()) {
      if (isTraceInProgress()) {
        traceEventStart(1918065384, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-2.<anonymous> (Composition.kt:757)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v1y();
    }
    return Unit_instance;
  }
  function ComposableSingletons$CompositionKt() {
    ComposableSingletons$CompositionKt_instance = this;
    var tmp = this;
    tmp.j29_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(954879418, false, ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s));
    var tmp_0 = this;
    tmp_0.k29_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(1918065384, false, ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5));
  }
  var ComposableSingletons$CompositionKt_instance;
  function ComposableSingletons$CompositionKt_getInstance() {
    if (ComposableSingletons$CompositionKt_instance == null)
      new ComposableSingletons$CompositionKt();
    return ComposableSingletons$CompositionKt_instance;
  }
  function ScopeInvalidated() {
  }
  var ScopeInvalidated_instance;
  function ScopeInvalidated_getInstance() {
    return ScopeInvalidated_instance;
  }
  function swap(_this__u8e3s4, a, b) {
    _init_properties_Composition_kt__t5pjw8();
    var item = _this__u8e3s4.o(a);
    _this__u8e3s4.f1(a, _this__u8e3s4.o(b));
    _this__u8e3s4.f1(b, item);
  }
  function swap_0(_this__u8e3s4, a, b) {
    _init_properties_Composition_kt__t5pjw8();
    var item = _this__u8e3s4.o(a);
    _this__u8e3s4.n1m(a, _this__u8e3s4.o(b));
    _this__u8e3s4.n1m(b, item);
  }
  function ControlledComposition(applier, parent) {
    _init_properties_Composition_kt__t5pjw8();
    return new CompositionImpl(parent, applier);
  }
  function CompositionImplServiceKey$1() {
  }
  var properties_initialized_Composition_kt_u7hvq2;
  function _init_properties_Composition_kt__t5pjw8() {
    if (!properties_initialized_Composition_kt_u7hvq2) {
      properties_initialized_Composition_kt_u7hvq2 = true;
      PendingApplyNoModifications = new Object();
      CompositionImplServiceKey = new CompositionImplServiceKey$1();
    }
  }
  function get_EmptyPersistentCompositionLocalMap() {
    _init_properties_CompositionContext_kt__4g1p1h();
    return EmptyPersistentCompositionLocalMap;
  }
  var EmptyPersistentCompositionLocalMap;
  function CompositionContext() {
  }
  protoOf(CompositionContext).b29 = function () {
    return null;
  };
  protoOf(CompositionContext).z1v = function (table) {
  };
  protoOf(CompositionContext).i29 = function (composer) {
  };
  protoOf(CompositionContext).s1v = function () {
    return get_EmptyPersistentCompositionLocalMap();
  };
  protoOf(CompositionContext).r1v = function () {
  };
  protoOf(CompositionContext).b1w = function () {
  };
  protoOf(CompositionContext).f22 = function (reference) {
    return null;
  };
  var properties_initialized_CompositionContext_kt_mk393b;
  function _init_properties_CompositionContext_kt__4g1p1h() {
    if (!properties_initialized_CompositionContext_kt_mk393b) {
      properties_initialized_CompositionContext_kt_mk393b = true;
      EmptyPersistentCompositionLocalMap = persistentCompositionLocalHashMapOf();
    }
  }
  function CompositionLocal(defaultFactory) {
    this.v2a_1 = new LazyValueHolder(defaultFactory);
  }
  protoOf(CompositionLocal).w2a = function () {
    return this.v2a_1;
  };
  function ProvidableCompositionLocal(defaultFactory) {
    CompositionLocal.call(this, defaultFactory);
  }
  function staticCompositionLocalOf(defaultFactory) {
    return new StaticProvidableCompositionLocal(defaultFactory);
  }
  function StaticProvidableCompositionLocal(defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
  }
  function PersistentCompositionLocalMap() {
  }
  function read(_this__u8e3s4, key) {
    // Inline function 'kotlin.collections.getOrElse' call
    var key_0 = key instanceof CompositionLocal ? key : THROW_CCE();
    // Inline function 'kotlin.contracts.contract' call
    var tmp0_elvis_lhs = _this__u8e3s4.n1(key_0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.read.<anonymous>' call
      tmp = key.w2a();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp_0 = tmp.x2a(_this__u8e3s4);
    return (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
  }
  var calculationBlockNestedLevel;
  function get_derivedStateObservers() {
    _init_properties_DerivedState_kt__eqt0x8();
    return derivedStateObservers;
  }
  var derivedStateObservers;
  function DerivedState() {
  }
  function derivedStateObservers_0() {
    _init_properties_DerivedState_kt__eqt0x8();
    var tmp0_elvis_lhs = get_derivedStateObservers().pn();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.collection.MutableVector' call
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp$ret$0 = fillArrayVal(Array(0), null);
      var this_0 = new MutableVector(tmp$ret$0, 0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.derivedStateObservers.<anonymous>' call
      get_derivedStateObservers().r18(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  var properties_initialized_DerivedState_kt_scch8q;
  function _init_properties_DerivedState_kt__eqt0x8() {
    if (!properties_initialized_DerivedState_kt_scch8q) {
      properties_initialized_DerivedState_kt_scch8q = true;
      calculationBlockNestedLevel = new SnapshotThreadLocal();
      derivedStateObservers = new SnapshotThreadLocal();
    }
  }
  function get_InternalDisposableEffectScope() {
    _init_properties_Effects_kt__be5lps();
    return InternalDisposableEffectScope;
  }
  var InternalDisposableEffectScope;
  function DisposableEffectScope() {
  }
  function DisposableEffect(key1, key2, key3, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1239538271, 'C(DisposableEffect)P(1,2,3)236@10007L59:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1239538271, $changed, -1, 'androidx.compose.runtime.DisposableEffect (Effects.kt:235)');
    }
    sourceInformationMarkerStart($composer_0, 1176325603, 'CC(remember):Effects.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!($composer_0.w1v(key1) | $composer_0.w1v(key2)) | $composer_0.w1v(key3));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.l26();
    var tmp;
    if (invalid || it === Companion_getInstance().e1z_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_0.m26(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  function LaunchedEffect(key1, block, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1179185413, 'C(LaunchedEffect)P(1)338@14267L58:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(1179185413, $changed, -1, 'androidx.compose.runtime.LaunchedEffect (Effects.kt:336)');
    }
    var applyContext = $composer_0.i24();
    sourceInformationMarkerStart($composer_0, 2064962644, 'CC(remember):Effects.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.w1v(key1);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.l26();
    var tmp;
    if (invalid || it === Companion_getInstance().e1z_1) {
      // Inline function 'androidx.compose.runtime.LaunchedEffect.<anonymous>' call
      var value = new LaunchedEffectImpl(applyContext, block);
      $composer_0.m26(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  function DisposableEffect_0(key1, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1371986847, 'C(DisposableEffect)P(1)155@6197L47:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1371986847, $changed, -1, 'androidx.compose.runtime.DisposableEffect (Effects.kt:154)');
    }
    sourceInformationMarkerStart($composer_0, 1176203671, 'CC(remember):Effects.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.w1v(key1);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.l26();
    var tmp;
    if (invalid || it === Companion_getInstance().e1z_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_0.m26(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  function DisposableEffectImpl(effect) {
    this.b2b_1 = effect;
    this.c2b_1 = null;
  }
  protoOf(DisposableEffectImpl).g29 = function () {
    this.c2b_1 = this.b2b_1(get_InternalDisposableEffectScope());
  };
  protoOf(DisposableEffectImpl).f29 = function () {
    var tmp0_safe_receiver = this.c2b_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.gl();
    }
    this.c2b_1 = null;
  };
  protoOf(DisposableEffectImpl).h29 = function () {
  };
  function LaunchedEffectImpl(parentCoroutineContext, task) {
    this.d2b_1 = task;
    this.e2b_1 = CoroutineScope(parentCoroutineContext);
    this.f2b_1 = null;
  }
  protoOf(LaunchedEffectImpl).g29 = function () {
    var tmp0_safe_receiver = this.f2b_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      cancel(tmp0_safe_receiver, 'Old job was still running!');
    }
    this.f2b_1 = launch(this.e2b_1, VOID, VOID, this.d2b_1);
  };
  protoOf(LaunchedEffectImpl).f29 = function () {
    var tmp0_safe_receiver = this.f2b_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.ui(new LeftCompositionCancellationException());
    }
    this.f2b_1 = null;
  };
  protoOf(LaunchedEffectImpl).h29 = function () {
    var tmp0_safe_receiver = this.f2b_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.ui(new LeftCompositionCancellationException());
    }
    this.f2b_1 = null;
  };
  function LeftCompositionCancellationException() {
    PlatformOptimizedCancellationException.call(this, 'The coroutine scope left the composition');
    captureStack(this, LeftCompositionCancellationException);
  }
  function LaunchedEffect_0(key1, key2, block, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 590241125, 'C(LaunchedEffect)P(1,2)361@15275L64:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(590241125, $changed, -1, 'androidx.compose.runtime.LaunchedEffect (Effects.kt:359)');
    }
    var applyContext = $composer_0.i24();
    sourceInformationMarkerStart($composer_0, 2064994906, 'CC(remember):Effects.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_0.w1v(key1) | $composer_0.w1v(key2));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.l26();
    var tmp;
    if (invalid || it === Companion_getInstance().e1z_1) {
      // Inline function 'androidx.compose.runtime.LaunchedEffect.<anonymous>' call
      var value = new LaunchedEffectImpl(applyContext, block);
      $composer_0.m26(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  function DisposableEffect_1(key1, key2, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1429097729, 'C(DisposableEffect)P(1,2)195@8083L53:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(1429097729, $changed, -1, 'androidx.compose.runtime.DisposableEffect (Effects.kt:194)');
    }
    sourceInformationMarkerStart($composer_0, 1176264029, 'CC(remember):Effects.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_0.w1v(key1) | $composer_0.w1v(key2));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.l26();
    var tmp;
    if (invalid || it === Companion_getInstance().e1z_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_0.m26(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  var properties_initialized_Effects_kt_cj8kem;
  function _init_properties_Effects_kt__be5lps() {
    if (!properties_initialized_Effects_kt_cj8kem) {
      properties_initialized_Effects_kt_cj8kem = true;
      InternalDisposableEffectScope = new DisposableEffectScope();
    }
  }
  function hashCodeOf($this, value) {
    var tmp;
    if (value instanceof Enum) {
      tmp = value.r1_1;
    } else {
      var tmp1_elvis_lhs = value == null ? null : hashCode(value);
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    return tmp;
  }
  function JoinedKey(left, right) {
    this.g2b_1 = left;
    this.h2b_1 = right;
  }
  protoOf(JoinedKey).hashCode = function () {
    return imul(hashCodeOf(this, this.g2b_1), 31) + hashCodeOf(this, this.h2b_1) | 0;
  };
  protoOf(JoinedKey).toString = function () {
    return 'JoinedKey(left=' + toString_0(this.g2b_1) + ', right=' + toString_0(this.h2b_1) + ')';
  };
  protoOf(JoinedKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JoinedKey))
      return false;
    var tmp0_other_with_cast = other instanceof JoinedKey ? other : THROW_CCE();
    if (!equals(this.g2b_1, tmp0_other_with_cast.g2b_1))
      return false;
    if (!equals(this.h2b_1, tmp0_other_with_cast.h2b_1))
      return false;
    return true;
  };
  function Key() {
  }
  var Key_instance_0;
  function Key_getInstance() {
    return Key_instance_0;
  }
  function MonotonicFrameClock() {
  }
  function get_monotonicFrameClock(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.s8(Key_instance_0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'A MonotonicFrameClock is not available in this CoroutineContext. Callers should supply an appropriate MonotonicFrameClock using withContext.';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function OpaqueKey(key) {
    this.i2b_1 = key;
  }
  protoOf(OpaqueKey).toString = function () {
    return 'OpaqueKey(key=' + this.i2b_1 + ')';
  };
  protoOf(OpaqueKey).hashCode = function () {
    return getStringHashCode(this.i2b_1);
  };
  protoOf(OpaqueKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OpaqueKey))
      return false;
    var tmp0_other_with_cast = other instanceof OpaqueKey ? other : THROW_CCE();
    if (!(this.i2b_1 === tmp0_other_with_cast.i2b_1))
      return false;
    return true;
  };
  function throwIllegalStateException(message) {
    throw IllegalStateException_init_$Create$(message);
  }
  function throwIllegalArgumentException(message) {
    throw IllegalArgumentException_init_$Create$(message);
  }
  function produceState(initialValue, key1, key2, producer, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1703169085, 'C(produceState)147@5571L41,148@5644L74,148@5617L101:ProduceState.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1703169085, $changed, -1, 'androidx.compose.runtime.produceState (ProduceState.kt:146)');
    }
    sourceInformationMarkerStart($composer_0, 2143085361, 'CC(remember):ProduceState.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.l26();
    var tmp;
    if (false || it === Companion_getInstance().e1z_1) {
      // Inline function 'androidx.compose.runtime.produceState.<anonymous>' call
      var value = mutableStateOf(initialValue);
      $composer_0.m26(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var result = tmp1_group;
    sourceInformationMarkerStart($composer_0, 2143087730, 'CC(remember):ProduceState.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.f25(producer);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.l26();
    var tmp_1;
    if (invalid || it_0 === Companion_getInstance().e1z_1) {
      // Inline function 'androidx.compose.runtime.produceState.<anonymous>' call
      var value_0 = produceState$slambda_0(producer, result, null);
      $composer_0.m26(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    LaunchedEffect_0(key1, key2, tmp2_group, $composer_0, 14 & $changed >> 3 | 112 & $changed >> 3);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return result;
  }
  function ProduceStateScope() {
  }
  function ProduceStateScopeImpl(state, coroutineContext) {
    this.j2b_1 = coroutineContext;
    this.k2b_1 = state;
  }
  protoOf(ProduceStateScopeImpl).mh = function () {
    return this.j2b_1;
  };
  protoOf(ProduceStateScopeImpl).lt = function (_set____db54di) {
    this.k2b_1.lt(_set____db54di);
  };
  protoOf(ProduceStateScopeImpl).k1 = function () {
    return this.k2b_1.k1();
  };
  function produceState$slambda($producer, $result, resultContinuation) {
    this.t2b_1 = $producer;
    this.u2b_1 = $result;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(produceState$slambda).w2b = function ($this$LaunchedEffect, $completion) {
    var tmp = this.w1f($this$LaunchedEffect, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(produceState$slambda).b9 = function (p1, $completion) {
    return this.w2b((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(produceState$slambda).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        switch (tmp) {
          case 0:
            this.g8_1 = 2;
            this.f8_1 = 1;
            suspendResult = this.t2b_1(new ProduceStateScopeImpl(this.u2b_1, this.v2b_1.mh()), this);
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
  protoOf(produceState$slambda).w1f = function ($this$LaunchedEffect, completion) {
    var i = new produceState$slambda(this.t2b_1, this.u2b_1, completion);
    i.v2b_1 = $this$LaunchedEffect;
    return i;
  };
  function produceState$slambda_0($producer, $result, resultContinuation) {
    var i = new produceState$slambda($producer, $result, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.w2b($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  var callbackLock;
  function _set_rereading__pnqtpo($this, value) {
    if (value) {
      $this.e1t_1 = $this.e1t_1 | 32;
    } else {
      $this.e1t_1 = $this.e1t_1 & -33;
    }
  }
  function _get_rereading__g2iruw($this) {
    return !(($this.e1t_1 & 32) === 0);
  }
  function _set_skipped__p8q2c5($this, value) {
    if (value) {
      $this.e1t_1 = $this.e1t_1 | 16;
    } else {
      $this.e1t_1 = $this.e1t_1 & -17;
    }
  }
  function checkDerivedStateChanged(_this__u8e3s4, $this, dependencies) {
    if (!isInterface(_this__u8e3s4, DerivedState))
      THROW_CCE();
    var tmp0_elvis_lhs = _this__u8e3s4.y2a();
    var policy = tmp0_elvis_lhs == null ? structuralEqualityPolicy() : tmp0_elvis_lhs;
    return !policy.x2b(_this__u8e3s4.z29().c2a(), dependencies.n1(_this__u8e3s4));
  }
  function Companion_1() {
  }
  protoOf(Companion_1).y2b = function (slots, anchors, newOwner) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors.n()) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = anchors.l() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = anchors.o(index);
          // Inline function 'androidx.compose.runtime.Companion.adoptAnchoredScopes.<anonymous>' call
          var tmp = slots.z2b(item, 0);
          var recomposeScope = tmp instanceof RecomposeScopeImpl ? tmp : null;
          if (recomposeScope == null)
            null;
          else {
            recomposeScope.a2c(newOwner);
          }
        }
         while (inductionVariable <= last);
    }
  };
  protoOf(Companion_1).b2c = function (slots, anchors) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors.n()) {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = anchors.l() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = anchors.o(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
            // Inline function 'androidx.compose.runtime.Companion.hasAnchoredRecomposeScopes.<anonymous>' call
            var tmp_0;
            if (slots.p2a(item)) {
              var tmp_1 = slots.c2c(slots.d22(item), 0);
              tmp_0 = tmp_1 instanceof RecomposeScopeImpl;
            } else {
              tmp_0 = false;
            }
            if (tmp_0) {
              tmp$ret$2 = true;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$2 = false;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = false;
    }
    return tmp;
  };
  var Companion_instance_2;
  function Companion_getInstance_1() {
    return Companion_instance_2;
  }
  function RecomposeScopeImpl$end$lambda(this$0, $token, $instances) {
    return function (composition) {
      var tmp;
      var tmp_0;
      if (this$0.j1t_1 === $token && $instances.equals(this$0.k1t_1)) {
        tmp_0 = composition instanceof CompositionImpl;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var this_0 = $instances;
        var tmp$ret$3;
        $l$block: {
          // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
          var m = this_0.n1n_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.k2(this_1.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.MutableObjectIntMap.removeIf.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>' call
                      var tmp_1 = this_0.o1n_1[index];
                      var instance = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                      var shouldRemove = !(this_0.p1n_1[index] === $token);
                      if (shouldRemove) {
                        composition.s2a(instance, this$0);
                        if (isInterface(instance, DerivedState)) {
                          composition.t2a(instance);
                          var tmp0_safe_receiver = this$0.l1t_1;
                          if (tmp0_safe_receiver == null)
                            null;
                          else
                            tmp0_safe_receiver.i4(instance);
                        }
                      }
                      if (shouldRemove) {
                        this_0.z1n(index);
                      }
                    }
                    slot = slot.i2(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  tmp$ret$3 = Unit_instance;
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
        tmp = tmp$ret$3;
      }
      return Unit_instance;
    };
  }
  function RecomposeScopeImpl(owner) {
    this.e1t_1 = 0;
    this.f1t_1 = owner;
    this.g1t_1 = null;
    this.h1t_1 = null;
    this.i1t_1 = null;
    this.j1t_1 = 0;
    this.k1t_1 = null;
    this.l1t_1 = null;
  }
  protoOf(RecomposeScopeImpl).s26 = function () {
    var tmp;
    if (!(this.f1t_1 == null)) {
      var tmp0_safe_receiver = this.g1t_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s26();
      tmp = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RecomposeScopeImpl).q2a = function () {
    return !(this.h1t_1 == null);
  };
  protoOf(RecomposeScopeImpl).o26 = function (value) {
    if (value) {
      this.e1t_1 = this.e1t_1 | 1;
    } else {
      this.e1t_1 = this.e1t_1 & -2;
    }
  };
  protoOf(RecomposeScopeImpl).j20 = function () {
    return !((this.e1t_1 & 1) === 0);
  };
  protoOf(RecomposeScopeImpl).o2a = function () {
    return !((this.e1t_1 & 2) === 0);
  };
  protoOf(RecomposeScopeImpl).x25 = function (value) {
    if (value) {
      this.e1t_1 = this.e1t_1 | 4;
    } else {
      this.e1t_1 = this.e1t_1 & -5;
    }
  };
  protoOf(RecomposeScopeImpl).p21 = function (value) {
    if (value) {
      this.e1t_1 = this.e1t_1 | 8;
    } else {
      this.e1t_1 = this.e1t_1 & -9;
    }
  };
  protoOf(RecomposeScopeImpl).s24 = function () {
    return !((this.e1t_1 & 8) === 0);
  };
  protoOf(RecomposeScopeImpl).f21 = function (composer) {
    var block = this.h1t_1;
    var observer = this.i1t_1;
    if (!(observer == null) && !(block == null)) {
      observer.d2c(this);
      try {
        block(composer, 1);
      }finally {
        observer.e2c(this);
      }
      return Unit_instance;
    }
    if ((block == null ? null : block(composer, 1)) == null) {
      // Inline function 'kotlin.error' call
      var message = 'Invalid restart scope';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(RecomposeScopeImpl).p28 = function (value) {
    var tmp0_safe_receiver = this.f1t_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n2a(this, value);
    return tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
  };
  protoOf(RecomposeScopeImpl).u26 = function () {
    var tmp0_safe_receiver = this.f1t_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r2a(this);
    }
    this.f1t_1 = null;
    this.k1t_1 = null;
    this.l1t_1 = null;
    var tmp1_safe_receiver = this.i1t_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.f2c(this);
    }
  };
  protoOf(RecomposeScopeImpl).a2c = function (owner) {
    this.f1t_1 = owner;
  };
  protoOf(RecomposeScopeImpl).m2a = function () {
    var tmp0_safe_receiver = this.f1t_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.n2a(this, null);
  };
  protoOf(RecomposeScopeImpl).g2c = function (block) {
    this.h1t_1 = block;
  };
  protoOf(RecomposeScopeImpl).o21 = function (value) {
    if (value) {
      this.e1t_1 = this.e1t_1 | 64;
    } else {
      this.e1t_1 = this.e1t_1 & -65;
    }
  };
  protoOf(RecomposeScopeImpl).n21 = function () {
    return !((this.e1t_1 & 64) === 0);
  };
  protoOf(RecomposeScopeImpl).y25 = function () {
    return !((this.e1t_1 & 16) === 0);
  };
  protoOf(RecomposeScopeImpl).q21 = function (token) {
    this.j1t_1 = token;
    _set_skipped__p8q2c5(this, false);
  };
  protoOf(RecomposeScopeImpl).s25 = function () {
    _set_skipped__p8q2c5(this, true);
  };
  protoOf(RecomposeScopeImpl).w29 = function (instance) {
    if (_get_rereading__g2iruw(this))
      return false;
    var tmp0_elvis_lhs = this.k1t_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new MutableObjectIntMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordRead.<anonymous>' call
      this.k1t_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var trackedInstances = tmp;
    var token = trackedInstances.y1n(instance, this.j1t_1, -1);
    if (token === this.j1t_1) {
      return true;
    }
    return false;
  };
  protoOf(RecomposeScopeImpl).d2a = function (instance, value) {
    var tmp0_elvis_lhs = this.l1t_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new MutableScatterMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordDerivedStateValue.<anonymous>' call
      this.l1t_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var trackedDependencies = tmp;
    trackedDependencies.t1o(instance, value);
  };
  protoOf(RecomposeScopeImpl).n28 = function () {
    return !(this.l1t_1 == null);
  };
  protoOf(RecomposeScopeImpl).m1t = function (instances) {
    if (instances == null)
      return true;
    var tmp0_elvis_lhs = this.l1t_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return true;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var trackedDependencies = tmp;
    var tmp_0;
    if (isInterface(instances, DerivedState)) {
      tmp_0 = checkDerivedStateChanged(instances, this, trackedDependencies);
    } else {
      if (instances instanceof ScatterSet) {
        var tmp_1;
        if (instances.b1q()) {
          var tmp$ret$3;
          $l$block: {
            // Inline function 'androidx.collection.ScatterSet.any' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.collection.ScatterSet.forEach' call
            // Inline function 'kotlin.contracts.contract' call
            var k = instances.x1p_1;
            $l$block_0: {
              // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
              // Inline function 'kotlin.contracts.contract' call
              var m = instances.w1p_1;
              var lastIndex = m.length - 2 | 0;
              var inductionVariable = 0;
              if (inductionVariable <= lastIndex)
                do {
                  var i = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var slot = m[i];
                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                  var this_0 = slot;
                  if (!this_0.k2(this_0.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                    var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                    var inductionVariable_0 = 0;
                    if (inductionVariable_0 < bitCount)
                      do {
                        var j = inductionVariable_0;
                        inductionVariable_0 = inductionVariable_0 + 1 | 0;
                        // Inline function 'androidx.collection.isFull' call
                        if (slot.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                          var index = (i << 3) + j | 0;
                          // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                          // Inline function 'androidx.collection.ScatterSet.any.<anonymous>' call
                          var tmp_2 = k[index];
                          // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.isInvalidFor.<anonymous>' call
                          var it = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
                          var tmp_3;
                          if (!(!(it == null) ? isInterface(it, DerivedState) : false)) {
                            tmp_3 = true;
                          } else {
                            tmp_3 = checkDerivedStateChanged(it, this, trackedDependencies);
                          }
                          if (tmp_3) {
                            tmp$ret$3 = true;
                            break $l$block;
                          }
                        }
                        slot = slot.i2(8);
                      }
                       while (inductionVariable_0 < bitCount);
                    if (!(bitCount === 8)) {
                      break $l$block_0;
                    }
                  }
                }
                 while (!(i === lastIndex));
            }
            tmp$ret$3 = false;
          }
          tmp_1 = tmp$ret$3;
        } else {
          tmp_1 = false;
        }
        tmp_0 = tmp_1;
      } else {
        tmp_0 = true;
      }
    }
    return tmp_0;
  };
  protoOf(RecomposeScopeImpl).e21 = function () {
    var tmp0_safe_receiver = this.f1t_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>' call
      var tmp0_safe_receiver_0 = this.k1t_1;
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        _set_rereading__pnqtpo(this, true);
        try {
          // Inline function 'androidx.collection.ObjectIntMap.forEach' call
          var k = tmp0_safe_receiver_0.o1n_1;
          var v = tmp0_safe_receiver_0.p1n_1;
          $l$block: {
            // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
            var m = tmp0_safe_receiver_0.n1n_1;
            var lastIndex = m.length - 2 | 0;
            var inductionVariable = 0;
            if (inductionVariable <= lastIndex)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var slot = m[i];
                // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                var this_0 = slot;
                if (!this_0.k2(this_0.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                  var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                  var inductionVariable_0 = 0;
                  if (inductionVariable_0 < bitCount)
                    do {
                      var j = inductionVariable_0;
                      inductionVariable_0 = inductionVariable_0 + 1 | 0;
                      // Inline function 'androidx.collection.isFull' call
                      if (slot.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                        var index = (i << 3) + j | 0;
                        // Inline function 'androidx.collection.ObjectIntMap.forEach.<anonymous>' call
                        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>.<anonymous>.<anonymous>' call
                        var tmp_0 = k[index];
                        var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                        v[index];
                        tmp0_safe_receiver.v29(value);
                      }
                      slot = slot.i2(8);
                    }
                     while (inductionVariable_0 < bitCount);
                  if (!(bitCount === 8)) {
                    break $l$block;
                  }
                }
              }
               while (!(i === lastIndex));
          }
        }finally {
          _set_rereading__pnqtpo(this, false);
        }
        tmp = Unit_instance;
      }
    }
  };
  protoOf(RecomposeScopeImpl).v25 = function (token) {
    var tmp0_safe_receiver = this.k1t_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>' call
      var tmp_0;
      var tmp_1;
      if (!this.y25()) {
        var tmp$ret$3;
        $l$block: {
          // Inline function 'androidx.collection.ObjectIntMap.any' call
          // Inline function 'androidx.collection.ObjectIntMap.forEach' call
          var k = tmp0_safe_receiver.o1n_1;
          var v = tmp0_safe_receiver.p1n_1;
          $l$block_0: {
            // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
            var m = tmp0_safe_receiver.n1n_1;
            var lastIndex = m.length - 2 | 0;
            var inductionVariable = 0;
            if (inductionVariable <= lastIndex)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var slot = m[i];
                // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                var this_0 = slot;
                if (!this_0.k2(this_0.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                  var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                  var inductionVariable_0 = 0;
                  if (inductionVariable_0 < bitCount)
                    do {
                      var j = inductionVariable_0;
                      inductionVariable_0 = inductionVariable_0 + 1 | 0;
                      // Inline function 'androidx.collection.isFull' call
                      if (slot.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                        var index = (i << 3) + j | 0;
                        // Inline function 'androidx.collection.ObjectIntMap.forEach.<anonymous>' call
                        // Inline function 'androidx.collection.ObjectIntMap.any.<anonymous>' call
                        var tmp_2 = k[index];
                        (tmp_2 == null ? true : !(tmp_2 == null)) || THROW_CCE();
                        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>' call
                        if (!(v[index] === token)) {
                          tmp$ret$3 = true;
                          break $l$block;
                        }
                      }
                      slot = slot.i2(8);
                    }
                     while (inductionVariable_0 < bitCount);
                  if (!(bitCount === 8)) {
                    break $l$block_0;
                  }
                }
              }
               while (!(i === lastIndex));
          }
          tmp$ret$3 = false;
        }
        tmp_1 = tmp$ret$3;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = RecomposeScopeImpl$end$lambda(this, token, tmp0_safe_receiver);
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  function RecomposeScopeOwner() {
  }
  function updateChangedFlags(flags) {
    _init_properties_RecomposeScopeImpl_kt__t15emj();
    var lowBits = flags & 306783378;
    var highBits = flags & 613566756;
    return flags & -920350135 | (lowBits | highBits >> 1) | lowBits << 1 & highBits;
  }
  var properties_initialized_RecomposeScopeImpl_kt_pxgdx3;
  function _init_properties_RecomposeScopeImpl_kt__t15emj() {
    if (!properties_initialized_RecomposeScopeImpl_kt_pxgdx3) {
      properties_initialized_RecomposeScopeImpl_kt_pxgdx3 = true;
      callbackLock = new Object();
    }
  }
  var ProduceAnotherFrame;
  var FramePending;
  var State_ShutDown_instance;
  var State_ShuttingDown_instance;
  var State_Inactive_instance;
  var State_InactivePendingWork_instance;
  var State_Idle_instance;
  var State_PendingWork_instance;
  var State_entriesInitialized;
  function State_initEntries() {
    if (State_entriesInitialized)
      return Unit_instance;
    State_entriesInitialized = true;
    State_ShutDown_instance = new State('ShutDown', 0);
    State_ShuttingDown_instance = new State('ShuttingDown', 1);
    State_Inactive_instance = new State('Inactive', 2);
    State_InactivePendingWork_instance = new State('InactivePendingWork', 3);
    State_Idle_instance = new State('Idle', 4);
    State_PendingWork_instance = new State('PendingWork', 5);
  }
  function addRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.h2c_1.k1();
      var new_0 = old.d(info);
      if (old === new_0 || $this.h2c_1.mt(old, new_0))
        break $l$loop;
    }
  }
  function removeRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.h2c_1.k1();
      var new_0 = old.d1(info);
      if (old === new_0 || $this.h2c_1.mt(old, new_0))
        break $l$loop;
    }
  }
  function invoke$clearRecompositionState(this$0, toRecompose, toInsert, toApply, toLateApply, toComplete, modifiedValues, alreadyComposed) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this$0.l2c_1;
    toRecompose.e1();
    toInsert.e1();
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = toApply.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = toApply.o(index);
        // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.clearRecompositionState.<anonymous>.<anonymous>' call
        item.r29();
        recordFailedCompositionLocked(this$0, item);
      }
       while (inductionVariable <= last);
    toApply.e1();
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = toLateApply.x1p_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = toLateApply.w1p_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= lastIndex)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k2(this_0.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_1 = 0;
            if (inductionVariable_1 < bitCount)
              do {
                var j = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index_0 = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.clearRecompositionState.<anonymous>.<anonymous>' call
                  var tmp = k[index_0];
                  var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  it.r29();
                  recordFailedCompositionLocked(this$0, it);
                }
                slot = slot.i2(8);
              }
               while (inductionVariable_1 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    toLateApply.e1();
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k_0 = toComplete.x1p_1;
    $l$block_0: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m_0 = toComplete.w1p_1;
      var lastIndex_0 = m_0.length - 2 | 0;
      var inductionVariable_2 = 0;
      if (inductionVariable_2 <= lastIndex_0)
        do {
          var i_0 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var slot_0 = m_0[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot_0;
          if (!this_1.k2(this_1.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
            var inductionVariable_3 = 0;
            if (inductionVariable_3 < bitCount_0)
              do {
                var j_0 = inductionVariable_3;
                inductionVariable_3 = inductionVariable_3 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot_0.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index_1 = (i_0 << 3) + j_0 | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.clearRecompositionState.<anonymous>.<anonymous>' call
                  var tmp_0 = k_0[index_1];
                  ((tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE()).k2a();
                }
                slot_0 = slot_0.i2(8);
              }
               while (inductionVariable_3 < bitCount_0);
            if (!(bitCount_0 === 8)) {
              break $l$block_0;
            }
          }
        }
         while (!(i_0 === lastIndex_0));
    }
    toComplete.e1();
    modifiedValues.e1();
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k_1 = alreadyComposed.x1p_1;
    $l$block_1: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m_1 = alreadyComposed.w1p_1;
      var lastIndex_1 = m_1.length - 2 | 0;
      var inductionVariable_4 = 0;
      if (inductionVariable_4 <= lastIndex_1)
        do {
          var i_1 = inductionVariable_4;
          inductionVariable_4 = inductionVariable_4 + 1 | 0;
          var slot_1 = m_1[i_1];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_2 = slot_1;
          if (!this_2.k2(this_2.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount_1 = 8 - (~(i_1 - lastIndex_1 | 0) >>> 31 | 0) | 0;
            var inductionVariable_5 = 0;
            if (inductionVariable_5 < bitCount_1)
              do {
                var j_1 = inductionVariable_5;
                inductionVariable_5 = inductionVariable_5 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot_1.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index_2 = (i_1 << 3) + j_1 | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.clearRecompositionState.<anonymous>.<anonymous>' call
                  var tmp_1 = k_1[index_2];
                  var it_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                  it_0.r29();
                  recordFailedCompositionLocked(this$0, it_0);
                }
                slot_1 = slot_1.i2(8);
              }
               while (inductionVariable_5 < bitCount_1);
            if (!(bitCount_1 === 8)) {
              break $l$block_1;
            }
          }
        }
         while (!(i_1 === lastIndex_1));
    }
    alreadyComposed.e1();
  }
  function invoke$fillToInsert(toInsert, this$0) {
    toInsert.e1();
    // Inline function 'androidx.compose.runtime.synchronized' call
    this$0.l2c_1;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var this_0 = this$0.t2c_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.o(index);
        // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.fillToInsert.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        toInsert.d(item);
      }
       while (inductionVariable <= last);
    this$0.t2c_1.e1();
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this$0, $toRecompose, $modifiedValues, $alreadyComposed, $toInsert, $toApply, $modifiedValuesSet, $toLateApply, $toComplete) {
    return function (frameTime) {
      var tmp;
      if (_get_hasBroadcastFrameClockAwaiters__y6inql(this$0)) {
        $l$block: {
          // Inline function 'androidx.compose.runtime.trace' call
          var sectionName = 'Recomposer:animation';
          var token = Trace_instance.p22(sectionName);
          try {
            this$0.k2c_1.v1s(frameTime);
            Companion_instance_12.i2d();
            break $l$block;
          }finally {
            Trace_instance.c23(token);
          }
        }
        tmp = Unit_instance;
      }
      $l$block_2: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName_0 = 'Recomposer:recompose';
        var token_0 = Trace_instance.p22(sectionName_0);
        try {
          recordComposerModifications(this$0);
          // Inline function 'androidx.compose.runtime.synchronized' call
          this$0.l2c_1;
          // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
          var this_0 = this$0.r2c_1;
          // Inline function 'kotlin.contracts.contract' call
          var size = this_0.z22_1;
          if (size > 0) {
            var i = 0;
            var tmp_0 = this_0.x22_1;
            var content = isArray(tmp_0) ? tmp_0 : THROW_CCE();
            do {
              // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              var it = content[i];
              // Inline function 'kotlin.collections.plusAssign' call
              $toRecompose.d(it);
              i = i + 1 | 0;
            }
             while (i < size);
          }
          this$0.r2c_1.e1();
          $modifiedValues.e1();
          $alreadyComposed.e1();
          $l$loop: while (true) {
            var tmp_1;
            // Inline function 'kotlin.collections.isNotEmpty' call
            if (!$toRecompose.n()) {
              tmp_1 = true;
            } else {
              // Inline function 'kotlin.collections.isNotEmpty' call
              tmp_1 = !$toInsert.n();
            }
            if (!tmp_1) {
              break $l$loop;
            }
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_1 = $toRecompose;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable = 0;
              var last = this_1.l() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = this_1.o(index);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  var tmp0_safe_receiver = performRecompose(this$0, item, $modifiedValues);
                  if (tmp0_safe_receiver == null)
                    null;
                  else {
                    // Inline function 'kotlin.let' call
                    // Inline function 'kotlin.contracts.contract' call
                    $toApply.d(tmp0_safe_receiver);
                  }
                  $alreadyComposed.d(item);
                }
                 while (inductionVariable <= last);
            } catch ($p) {
              if ($p instanceof Exception) {
                var e = $p;
                processCompositionError$default(this$0, e, VOID, true);
                invoke$clearRecompositionState(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toRecompose.e1();
            }
            if ($modifiedValues.b1q() || this$0.r2c_1.b1q()) {
              // Inline function 'androidx.compose.runtime.synchronized' call
              this$0.l2c_1;
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_2 = _get_knownCompositions__y8veaj(this$0);
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = this_2.l() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = this_2.o(index_0);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  if (!$alreadyComposed.p(item_0) && item_0.t29($modifiedValuesSet)) {
                    // Inline function 'kotlin.collections.plusAssign' call
                    $toRecompose.d(item_0);
                  }
                }
                 while (inductionVariable_0 <= last_0);
              var this_3 = this$0.r2c_1;
              var gap = 0;
              var size_0 = this_3.z22_1;
              var inductionVariable_1 = 0;
              if (inductionVariable_1 < size_0)
                $l$loop_0: do {
                  var i_0 = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  var tmp_2 = this_3.x22_1[i_0];
                  var value = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
                  var tmp_3;
                  if (!$alreadyComposed.p(value) && !$toRecompose.p(value)) {
                    // Inline function 'kotlin.collections.plusAssign' call
                    $toRecompose.d(value);
                    tmp_3 = true;
                  } else {
                    tmp_3 = false;
                  }
                  if (tmp_3) {
                    gap = gap + 1 | 0;
                    continue $l$loop_0;
                  }
                  if (gap > 0) {
                    this_3.x22_1[i_0 - gap | 0] = this_3.x22_1[i_0];
                  }
                }
                 while (inductionVariable_1 < size_0);
              fill_0(this_3.x22_1, null, size_0 - gap | 0, size_0);
              this_3.j2d(size_0 - gap | 0);
            }
            if ($toRecompose.n()) {
              try {
                invoke$fillToInsert($toInsert, this$0);
                $l$loop_1: while (true) {
                  // Inline function 'kotlin.collections.isNotEmpty' call
                  if (!!$toInsert.n()) {
                    break $l$loop_1;
                  }
                  $toLateApply.o1r(performInsertValues(this$0, $toInsert, $modifiedValues));
                  invoke$fillToInsert($toInsert, this$0);
                }
              } catch ($p) {
                if ($p instanceof Exception) {
                  var e_0 = $p;
                  processCompositionError$default(this$0, e_0, VOID, true);
                  invoke$clearRecompositionState(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                  return Unit_instance;
                } else {
                  throw $p;
                }
              }
            }
          }
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$toApply.n()) {
            var tmp0_this = this$0;
            tmp0_this.j2c_1 = tmp0_this.j2c_1.d2();
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_4 = $toApply;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_2 = 0;
              var last_1 = this_4.l() - 1 | 0;
              if (inductionVariable_2 <= last_1)
                do {
                  var index_1 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  var item_1 = this_4.o(index_1);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  $toComplete.d(item_1);
                }
                 while (inductionVariable_2 <= last_1);
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_5 = $toApply;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_3 = 0;
              var last_2 = this_5.l() - 1 | 0;
              if (inductionVariable_3 <= last_2)
                do {
                  var index_2 = inductionVariable_3;
                  inductionVariable_3 = inductionVariable_3 + 1 | 0;
                  var item_2 = this_5.o(index_2);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  item_2.i2a();
                }
                 while (inductionVariable_3 <= last_2);
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_1 = $p;
                processCompositionError$default(this$0, e_1);
                invoke$clearRecompositionState(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toApply.e1();
            }
          }
          if ($toLateApply.b1q()) {
            try {
              $toComplete.q1r($toLateApply);
              // Inline function 'androidx.collection.ScatterSet.forEach' call
              var this_6 = $toLateApply;
              // Inline function 'kotlin.contracts.contract' call
              var k = this_6.x1p_1;
              $l$block_0: {
                // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                // Inline function 'kotlin.contracts.contract' call
                var m = this_6.w1p_1;
                var lastIndex = m.length - 2 | 0;
                var inductionVariable_4 = 0;
                if (inductionVariable_4 <= lastIndex)
                  do {
                    var i_1 = inductionVariable_4;
                    inductionVariable_4 = inductionVariable_4 + 1 | 0;
                    var slot = m[i_1];
                    // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                    var this_7 = slot;
                    if (!this_7.k2(this_7.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                      var bitCount = 8 - (~(i_1 - lastIndex | 0) >>> 31 | 0) | 0;
                      var inductionVariable_5 = 0;
                      if (inductionVariable_5 < bitCount)
                        do {
                          var j = inductionVariable_5;
                          inductionVariable_5 = inductionVariable_5 + 1 | 0;
                          // Inline function 'androidx.collection.isFull' call
                          if (slot.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                            var index_3 = (i_1 << 3) + j | 0;
                            // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                            // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                            var tmp_4 = k[index_3];
                            ((tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE()).j2a();
                          }
                          slot = slot.i2(8);
                        }
                         while (inductionVariable_5 < bitCount);
                      if (!(bitCount === 8)) {
                        break $l$block_0;
                      }
                    }
                  }
                   while (!(i_1 === lastIndex));
              }
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_2 = $p;
                processCompositionError$default(this$0, e_2);
                invoke$clearRecompositionState(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toLateApply.e1();
            }
          }
          if ($toComplete.b1q()) {
            try {
              // Inline function 'androidx.collection.ScatterSet.forEach' call
              var this_8 = $toComplete;
              // Inline function 'kotlin.contracts.contract' call
              var k_0 = this_8.x1p_1;
              $l$block_1: {
                // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                // Inline function 'kotlin.contracts.contract' call
                var m_0 = this_8.w1p_1;
                var lastIndex_0 = m_0.length - 2 | 0;
                var inductionVariable_6 = 0;
                if (inductionVariable_6 <= lastIndex_0)
                  do {
                    var i_2 = inductionVariable_6;
                    inductionVariable_6 = inductionVariable_6 + 1 | 0;
                    var slot_0 = m_0[i_2];
                    // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                    var this_9 = slot_0;
                    if (!this_9.k2(this_9.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                      var bitCount_0 = 8 - (~(i_2 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                      var inductionVariable_7 = 0;
                      if (inductionVariable_7 < bitCount_0)
                        do {
                          var j_0 = inductionVariable_7;
                          inductionVariable_7 = inductionVariable_7 + 1 | 0;
                          // Inline function 'androidx.collection.isFull' call
                          if (slot_0.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                            var index_4 = (i_2 << 3) + j_0 | 0;
                            // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                            // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                            var tmp_5 = k_0[index_4];
                            ((tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE()).k2a();
                          }
                          slot_0 = slot_0.i2(8);
                        }
                         while (inductionVariable_7 < bitCount_0);
                      if (!(bitCount_0 === 8)) {
                        break $l$block_1;
                      }
                    }
                  }
                   while (!(i_2 === lastIndex_0));
              }
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_3 = $p;
                processCompositionError$default(this$0, e_3);
                invoke$clearRecompositionState(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toComplete.e1();
            }
          }
          // Inline function 'androidx.compose.runtime.synchronized' call
          this$0.l2c_1;
          // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          deriveStateLocked(this$0);
          Companion_instance_12.k2d();
          $alreadyComposed.e1();
          $modifiedValues.e1();
          this$0.x2c_1 = null;
          break $l$block_2;
        }finally {
          Trace_instance.c23(token_0);
        }
      }
      return Unit_instance;
    };
  }
  function Recomposer$recompositionRunner$slambda$lambda(this$0) {
    return function (changed, _anonymous_parameter_1__qggqgd) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      this$0.l2c_1;
      // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>' call
      var tmp;
      if (this$0.d2d_1.k1().s1(State_Idle_getInstance()) >= 0) {
        var snapshotInvalidations = this$0.q2c_1;
        // Inline function 'androidx.compose.runtime.collection.fastForEach' call
        var tmp_0;
        if (changed instanceof ScatterSetWrapper) {
          var this_0 = changed.q28_1;
          // Inline function 'kotlin.contracts.contract' call
          var k = this_0.x1p_1;
          var tmp$ret$4;
          $l$block_0: {
            // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
            // Inline function 'kotlin.contracts.contract' call
            var m = this_0.w1p_1;
            var lastIndex = m.length - 2 | 0;
            var inductionVariable = 0;
            if (inductionVariable <= lastIndex)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var slot = m[i];
                // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                var this_1 = slot;
                if (!this_1.k2(this_1.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                  var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                  var inductionVariable_0 = 0;
                  if (inductionVariable_0 < bitCount)
                    do {
                      var j = inductionVariable_0;
                      inductionVariable_0 = inductionVariable_0 + 1 | 0;
                      // Inline function 'androidx.collection.isFull' call
                      if (slot.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                        var index = (i << 3) + j | 0;
                        // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                        $l$block: {
                          // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                          var tmp_1 = k[index];
                          var it = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                          var tmp_2;
                          if (it instanceof StateObjectImpl) {
                            // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
                            var tmp$ret$2 = _ReaderKind___init__impl__jqeebu(1);
                            tmp_2 = !it.l2d(tmp$ret$2);
                          } else {
                            tmp_2 = false;
                          }
                          if (tmp_2) {
                            break $l$block;
                          }
                          snapshotInvalidations.d(it);
                        }
                      }
                      slot = slot.i2(8);
                    }
                     while (inductionVariable_0 < bitCount);
                  if (!(bitCount === 8)) {
                    tmp$ret$4 = Unit_instance;
                    break $l$block_0;
                  }
                }
              }
               while (!(i === lastIndex));
          }
          tmp_0 = tmp$ret$4;
        } else {
          var tmp0_iterator = changed.i();
          while (tmp0_iterator.j()) {
            var element = tmp0_iterator.k();
            $l$block_1: {
              // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              var tmp_3;
              if (element instanceof StateObjectImpl) {
                // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
                var tmp$ret$5 = _ReaderKind___init__impl__jqeebu(1);
                tmp_3 = !element.l2d(tmp$ret$5);
              } else {
                tmp_3 = false;
              }
              if (tmp_3) {
                break $l$block_1;
              }
              snapshotInvalidations.d(element);
            }
          }
          tmp_0 = Unit_instance;
        }
        tmp = deriveStateLocked(this$0);
      } else {
        tmp = null;
      }
      var tmp0_safe_receiver = tmp;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$10 = _Result___init__impl__xyqfz8(Unit_instance);
        tmp0_safe_receiver.q8(tmp$ret$10);
      }
      return Unit_instance;
    };
  }
  function Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation) {
    this.u2d_1 = $block;
    this.v2d_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda$slambda).w2b = function ($this$coroutineScope, $completion) {
    var tmp = this.w1f($this$coroutineScope, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).b9 = function (p1, $completion) {
    return this.w2b((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        switch (tmp) {
          case 0:
            this.g8_1 = 2;
            this.f8_1 = 1;
            suspendResult = this.u2d_1(this.w2d_1, this.v2d_1, this);
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
  protoOf(Recomposer$recompositionRunner$slambda$slambda).w1f = function ($this$coroutineScope, completion) {
    var i = new Recomposer$recompositionRunner$slambda$slambda(this.u2d_1, this.v2d_1, completion);
    i.w2d_1 = $this$coroutineScope;
    return i;
  };
  function Recomposer$recompositionRunner$slambda$slambda_0($block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.w2b($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function State(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function _get_knownCompositions__y8veaj($this) {
    var tmp0_elvis_lhs = $this.p2c_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.<get-knownCompositions>.<anonymous>' call
      var compositions = $this.o2c_1;
      var newCache = compositions.n() ? emptyList() : ArrayList_init_$Create$_1(compositions);
      $this.p2c_1 = newCache;
      tmp = newCache;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this) {
    return !$this.c2d_1 && $this.k2c_1.u1s();
  }
  function _get_hasBroadcastFrameClockAwaiters__y6inql($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.l2c_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasBroadcastFrameClockAwaiters>.<anonymous>' call
    return _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
  }
  function deriveStateLocked($this) {
    if ($this.d2d_1.k1().s1(State_ShuttingDown_getInstance()) <= 0) {
      clearKnownCompositionsLocked($this);
      $this.q2c_1 = new MutableScatterSet();
      $this.r2c_1.e1();
      $this.s2c_1.e1();
      $this.t2c_1.e1();
      $this.w2c_1 = null;
      var tmp0_safe_receiver = $this.y2c_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.ak();
      $this.y2c_1 = null;
      $this.b2d_1 = null;
      return null;
    }
    var tmp;
    if (!($this.b2d_1 == null)) {
      tmp = State_Inactive_getInstance();
    } else {
      if ($this.m2c_1 == null) {
        $this.q2c_1 = new MutableScatterSet();
        $this.r2c_1.e1();
        tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this) ? State_InactivePendingWork_getInstance() : State_Inactive_getInstance();
      } else {
        var tmp_0;
        var tmp_1;
        var tmp_2;
        var tmp_3;
        if ($this.r2c_1.b1q() || $this.q2c_1.b1q()) {
          tmp_3 = true;
        } else {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_3 = !$this.s2c_1.n();
        }
        if (tmp_3) {
          tmp_2 = true;
        } else {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_2 = !$this.t2c_1.n();
        }
        if (tmp_2) {
          tmp_1 = true;
        } else {
          tmp_1 = $this.z2c_1 > 0;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
        }
        if (tmp_0) {
          tmp = State_PendingWork_getInstance();
        } else {
          tmp = State_Idle_getInstance();
        }
      }
    }
    var newState = tmp;
    $this.d2d_1.lt(newState);
    var tmp_4;
    if (newState.equals(State_PendingWork_getInstance())) {
      // Inline function 'kotlin.also' call
      var this_0 = $this.y2c_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.deriveStateLocked.<anonymous>' call
      $this.y2c_1 = null;
      tmp_4 = this_0;
    } else {
      tmp_4 = null;
    }
    return tmp_4;
  }
  function _get_shouldKeepRecomposing__5j79sd($this) {
    var tmp;
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.l2c_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
    if (!$this.a2d_1) {
      tmp = true;
    } else {
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.sequences.any' call
        var tmp0_iterator = $this.e2d_1.rn().i();
        while (tmp0_iterator.j()) {
          var element = tmp0_iterator.k();
          // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
          if (element.nh()) {
            tmp$ret$3 = true;
            break $l$block;
          }
        }
        tmp$ret$3 = false;
      }
      tmp = tmp$ret$3;
    }
    return tmp;
  }
  function RecomposerInfoImpl($outer) {
    this.x2d_1 = $outer;
  }
  function RecomposerErrorState(recoverable, cause) {
    this.y2d_1 = recoverable;
    this.z2d_1 = cause;
  }
  function recordComposerModifications($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.l2c_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    if ($this.q2c_1.n())
      return _get_hasFrameWorkLocked__1gtyf7($this);
    // Inline function 'kotlin.also' call
    var this_0 = wrapIntoSet($this.q2c_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>.<anonymous>' call
    $this.q2c_1 = new MutableScatterSet();
    var changes = this_0;
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.l2c_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    var compositions = _get_knownCompositions__y8veaj($this);
    var complete = false;
    try {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      $l$block: {
        // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = compositions.l() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = compositions.o(index);
            // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>.<anonymous>' call
            item.s29(changes);
            if ($this.d2d_1.k1().s1(State_ShuttingDown_getInstance()) <= 0) {
              break $l$block;
            }
          }
           while (inductionVariable <= last);
      }
      // Inline function 'androidx.compose.runtime.synchronized' call
      $this.l2c_1;
      $this.q2c_1 = new MutableScatterSet();
      complete = true;
    }finally {
      if (!complete) {
        // Inline function 'androidx.compose.runtime.synchronized' call
        $this.l2c_1;
        // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
        $this.q2c_1.m1r(changes);
      }
    }
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.l2c_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    if (!(deriveStateLocked($this) == null)) {
      // Inline function 'kotlin.error' call
      var message = 'called outside of runRecomposeAndApplyChanges';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return _get_hasFrameWorkLocked__1gtyf7($this);
  }
  function registerRunnerJob($this, callingJob) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.l2c_1;
    // Inline function 'androidx.compose.runtime.Recomposer.registerRunnerJob.<anonymous>' call
    var tmp0_safe_receiver = $this.n2c_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
    if ($this.d2d_1.k1().s1(State_ShuttingDown_getInstance()) <= 0) {
      // Inline function 'kotlin.error' call
      var message = 'Recomposer shut down';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (!($this.m2c_1 == null)) {
      // Inline function 'kotlin.error' call
      var message_0 = 'Recomposer already running';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    $this.m2c_1 = callingJob;
    deriveStateLocked($this);
  }
  function processCompositionError($this, e, failedInitialComposition, recoverable) {
    var tmp;
    if (Companion_getInstance_2().i2c_1.pn()) {
      tmp = !(e instanceof ComposeRuntimeError);
    } else {
      tmp = false;
    }
    if (tmp) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      $this.l2c_1;
      // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>' call
      logError('Error was captured in composition while live edit was enabled.', e);
      $this.s2c_1.e1();
      $this.r2c_1.e1();
      $this.q2c_1 = new MutableScatterSet();
      $this.t2c_1.e1();
      $this.u2c_1.e1();
      $this.v2c_1.e1();
      $this.b2d_1 = new RecomposerErrorState(recoverable, e);
      if (!(failedInitialComposition == null)) {
        recordFailedCompositionLocked($this, failedInitialComposition);
      }
      deriveStateLocked($this);
    } else {
      // Inline function 'androidx.compose.runtime.synchronized' call
      $this.l2c_1;
      var errorState = $this.b2d_1;
      if (errorState == null) {
        $this.b2d_1 = new RecomposerErrorState(false, e);
      } else {
        throw errorState.z2d_1;
      }
      throw e;
    }
  }
  function processCompositionError$default($this, e, failedInitialComposition, recoverable, $super) {
    failedInitialComposition = failedInitialComposition === VOID ? null : failedInitialComposition;
    recoverable = recoverable === VOID ? false : recoverable;
    return processCompositionError($this, e, failedInitialComposition, recoverable);
  }
  function clearKnownCompositionsLocked($this) {
    $this.o2c_1.e1();
    $this.p2c_1 = emptyList();
  }
  function removeKnownCompositionLocked($this, composition) {
    // Inline function 'kotlin.collections.minusAssign' call
    $this.o2c_1.d1(composition);
    $this.p2c_1 = null;
  }
  function addKnownCompositionLocked($this, composition) {
    // Inline function 'kotlin.collections.plusAssign' call
    $this.o2c_1.d(composition);
    $this.p2c_1 = null;
  }
  function recordFailedCompositionLocked($this, composition) {
    var tmp0_elvis_lhs = $this.w2c_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var this_0 = ArrayList_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.recordFailedCompositionLocked.<anonymous>' call
      $this.w2c_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var failedCompositions = tmp;
    if (!failedCompositions.p(composition)) {
      // Inline function 'kotlin.collections.plusAssign' call
      failedCompositions.d(composition);
    }
    removeKnownCompositionLocked($this, composition);
  }
  function _get_hasSchedulingWork__b617oy($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.l2c_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasSchedulingWork>.<anonymous>' call
    return $this.q2c_1.b1q() || $this.r2c_1.b1q() || _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
  }
  function awaitWorkAvailable($this, $completion) {
    var tmp = new $awaitWorkAvailableCOROUTINE$2($this, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  }
  function recompositionRunner($this, block, $completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.l8();
    var parentFrameClock = get_monotonicFrameClock(tmp$ret$0);
    return withContext($this.k2c_1, Recomposer$recompositionRunner$slambda_0($this, block, parentFrameClock, null), $completion);
  }
  function performInitialMovableContentInserts($this, composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.l2c_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var this_0 = $this.t2c_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.l() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.o(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
          // Inline function 'androidx.compose.runtime.Recomposer.performInitialMovableContentInserts.<anonymous>.<anonymous>' call
          if (equals(item.y21_1, composition)) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    if (!tmp$ret$1)
      return Unit_instance;
    // Inline function 'kotlin.collections.mutableListOf' call
    var toInsert = ArrayList_init_$Create$();
    performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!toInsert.n()) {
        break $l$loop;
      }
      performInsertValues($this, toInsert, null);
      performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    }
  }
  function performRecompose($this, composition, modifiedValues) {
    var tmp;
    if (composition.x28() || composition.l29()) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = $this.x2c_1;
      tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p(composition)) === true;
    }
    if (tmp)
      return null;
    var tmp_0;
    $l$block_0: {
      // Inline function 'androidx.compose.runtime.Recomposer.composing' call
      var snapshot = Companion_instance_12.j2e(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
      try {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
          var previous = snapshot.k2e();
          try {
            // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>' call
            if ((modifiedValues == null ? null : modifiedValues.b1q()) === true) {
              composition.u29(Recomposer$performRecompose$lambda(modifiedValues, composition));
            }
            tmp$ret$1 = composition.f2a();
            break $l$block;
          }finally {
            snapshot.l2e(previous);
          }
        }
        break $l$block_0;
      }finally {
        applyAndCheck($this, snapshot);
      }
    }
    if (tmp$ret$1) {
      tmp_0 = composition;
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  }
  function performInsertValues($this, references, modifiedValues) {
    // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy' call
    // Inline function 'kotlin.contracts.contract' call
    var destination = HashMap_init_$Create$(references.l());
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = references.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = references.o(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>' call
        // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>' call
        var key = item.y21_1;
        // Inline function 'kotlin.collections.getOrPut' call
        var value = destination.n1(key);
        var tmp;
        if (value == null) {
          // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>.<anonymous>' call
          var answer = ArrayList_init_$Create$();
          destination.h4(key, answer);
          tmp = answer;
        } else {
          tmp = value;
        }
        var list = tmp;
        list.d(item);
      }
       while (inductionVariable <= last);
    var tasks = destination;
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = tasks.p1().i();
    while (tmp0_iterator.j()) {
      var tmp1_loop_parameter = tmp0_iterator.k();
      // Inline function 'kotlin.collections.component1' call
      var composition = tmp1_loop_parameter.j1();
      // Inline function 'kotlin.collections.component2' call
      var refs = tmp1_loop_parameter.k1();
      runtimeCheck(!composition.x28());
      $l$block_2: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_instance_12.j2e(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
        try {
          $l$block_1: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.k2e();
            try {
              // Inline function 'androidx.compose.runtime.synchronized' call
              $this.l2c_1;
              // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
              // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
              // Inline function 'kotlin.contracts.contract' call
              var target = ArrayList_init_$Create$_0(refs.l());
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = refs.l() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = refs.o(index_0);
                  // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
                  // Inline function 'kotlin.collections.plusAssign' call
                  // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>.<anonymous>' call
                  var element = to(item_0, removeLastMultiValue($this.u2c_1, item_0.w21_1));
                  target.d(element);
                }
                 while (inductionVariable_0 <= last_0);
              var pairs = target;
              var tmp_0;
              var tmp_1;
              var tmp$ret$12;
              $l$block: {
                // Inline function 'androidx.compose.runtime.snapshots.fastAll' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
                // Inline function 'kotlin.contracts.contract' call
                var inductionVariable_1 = 0;
                var last_1 = pairs.l() - 1 | 0;
                if (inductionVariable_1 <= last_1)
                  do {
                    var index_1 = inductionVariable_1;
                    inductionVariable_1 = inductionVariable_1 + 1 | 0;
                    var item_1 = pairs.o(index_1);
                    // Inline function 'androidx.compose.runtime.snapshots.fastAll.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
                    if (!(item_1.fd_1 == null)) {
                      tmp$ret$12 = false;
                      break $l$block;
                    }
                  }
                   while (inductionVariable_1 <= last_1);
                tmp$ret$12 = true;
              }
              if (tmp$ret$12) {
                tmp_1 = true;
              } else {
                var tmp$ret$14;
                $l$block_0: {
                  // Inline function 'androidx.compose.runtime.snapshots.fastAll' call
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
                  // Inline function 'kotlin.contracts.contract' call
                  var inductionVariable_2 = 0;
                  var last_2 = pairs.l() - 1 | 0;
                  if (inductionVariable_2 <= last_2)
                    do {
                      var index_2 = inductionVariable_2;
                      inductionVariable_2 = inductionVariable_2 + 1 | 0;
                      var item_2 = pairs.o(index_2);
                      // Inline function 'androidx.compose.runtime.snapshots.fastAll.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
                      if (!!(item_2.fd_1 == null)) {
                        tmp$ret$14 = false;
                        break $l$block_0;
                      }
                    }
                     while (inductionVariable_2 <= last_2);
                  tmp$ret$14 = true;
                }
                tmp_1 = tmp$ret$14;
              }
              if (tmp_1) {
                tmp_0 = pairs;
              } else {
                // Inline function 'androidx.compose.runtime.snapshots.fastMapNotNull' call
                // Inline function 'kotlin.contracts.contract' call
                var target_0 = ArrayList_init_$Create$_0(pairs.l());
                // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
                // Inline function 'kotlin.contracts.contract' call
                var inductionVariable_3 = 0;
                var last_3 = pairs.l() - 1 | 0;
                if (inductionVariable_3 <= last_3)
                  do {
                    var index_3 = inductionVariable_3;
                    inductionVariable_3 = inductionVariable_3 + 1 | 0;
                    var item_3 = pairs.o(index_3);
                    // Inline function 'androidx.compose.runtime.snapshots.fastMapNotNull.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
                    var tmp0_safe_receiver = item_3.fd_1 == null ? item_3.ed_1 : null;
                    if (tmp0_safe_receiver == null)
                      null;
                    else {
                      // Inline function 'kotlin.let' call
                      // Inline function 'kotlin.contracts.contract' call
                      target_0.d(tmp0_safe_receiver);
                    }
                  }
                   while (inductionVariable_3 <= last_3);
                var toReturn = target_0;
                // Inline function 'androidx.compose.runtime.synchronized' call
                $this.l2c_1;
                var this_0 = $this.t2c_1;
                addAll(this_0, toReturn);
                // Inline function 'androidx.compose.runtime.snapshots.fastFilterIndexed' call
                // Inline function 'kotlin.contracts.contract' call
                var target_1 = ArrayList_init_$Create$_0(pairs.l());
                // Inline function 'androidx.compose.runtime.snapshots.fastForEachIndexed' call
                // Inline function 'kotlin.contracts.contract' call
                var inductionVariable_4 = 0;
                var last_4 = pairs.l() - 1 | 0;
                if (inductionVariable_4 <= last_4)
                  do {
                    var index_4 = inductionVariable_4;
                    inductionVariable_4 = inductionVariable_4 + 1 | 0;
                    var item_4 = pairs.o(index_4);
                    // Inline function 'androidx.compose.runtime.snapshots.fastFilterIndexed.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
                    if (!(item_4.fd_1 == null)) {
                      // Inline function 'kotlin.collections.plusAssign' call
                      target_1.d(item_4);
                    }
                  }
                   while (inductionVariable_4 <= last_4);
                tmp_0 = target_1;
              }
              var toInsert = tmp_0;
              composition.g2a(toInsert);
              break $l$block_1;
            }finally {
              snapshot.l2e(previous);
            }
          }
          break $l$block_2;
        }finally {
          applyAndCheck($this, snapshot);
        }
      }
    }
    return toList(tasks.o1());
  }
  function discardUnusedValues($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.l2c_1;
    // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.u2c_1.n()) {
      var references = flatten($this.u2c_1.g4());
      $this.u2c_1.e1();
      // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
      // Inline function 'kotlin.contracts.contract' call
      var target = ArrayList_init_$Create$_0(references.l());
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.l() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.o(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
          // Inline function 'kotlin.collections.plusAssign' call
          // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>.<anonymous>' call
          var element = to(item, $this.v2c_1.n1(item));
          target.d(element);
        }
         while (inductionVariable <= last);
      var unusedValues = target;
      $this.v2c_1.e1();
      tmp = unusedValues;
    } else {
      tmp = emptyList();
    }
    var unusedValues_0 = tmp;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = unusedValues_0.l() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = unusedValues_0.o(index_0);
        // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
        var reference = item_0.gd();
        var state = item_0.hd();
        if (!(state == null)) {
          reference.y21_1.h2a(state);
        }
      }
       while (inductionVariable_0 <= last_0);
  }
  function readObserverOf($this, composition) {
    return Recomposer$readObserverOf$lambda(composition);
  }
  function writeObserverOf($this, composition, modifiedValues) {
    return Recomposer$writeObserverOf$lambda(composition, modifiedValues);
  }
  function applyAndCheck($this, snapshot) {
    try {
      var applyResult = snapshot.z2e();
      if (applyResult instanceof Failure) {
        // Inline function 'kotlin.error' call
        var message = 'Unsupported concurrent change during composition. A state object was modified by composition as well as being modified outside composition.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }finally {
      snapshot.gl();
    }
  }
  function _get_hasFrameWorkLocked__1gtyf7($this) {
    return $this.r2c_1.b1q() || _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
  }
  function Companion_2() {
    Companion_instance_3 = this;
    this.h2c_1 = MutableStateFlow(persistentSetOf());
    this.i2c_1 = new AtomicReference(false);
  }
  var Companion_instance_3;
  function Companion_getInstance_2() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function performInitialMovableContentInserts$fillToInsert(toInsert, this$0, $composition) {
    toInsert.e1();
    // Inline function 'androidx.compose.runtime.synchronized' call
    this$0.l2c_1;
    var iterator = this$0.t2c_1.i();
    while (iterator.j()) {
      var value = iterator.k();
      if (equals(value.y21_1, $composition)) {
        toInsert.d(value);
        iterator.g3();
      }
    }
  }
  function Recomposer$broadcastFrameClock$lambda(this$0) {
    return function () {
      // Inline function 'androidx.compose.runtime.synchronized' call
      this$0.l2c_1;
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.also' call
      var this_0 = deriveStateLocked(this$0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>.<anonymous>' call
      if (this$0.d2d_1.k1().s1(State_ShuttingDown_getInstance()) <= 0)
        throw CancellationException_init_$Create$('Recomposer shutdown; frame clock awaiter will never resume', this$0.n2c_1);
      if (this_0 == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
        this_0.q8(tmp$ret$3);
      }
      return Unit_instance;
    };
  }
  function Recomposer$effectJob$lambda$lambda(this$0, $throwable) {
    return function (runnerJobCause) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      this$0.l2c_1;
      var tmp = this$0;
      var tmp0_safe_receiver = $throwable;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1;
        if (runnerJobCause == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.takeIf' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp_2;
          // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!(runnerJobCause instanceof CancellationException)) {
            tmp_2 = runnerJobCause;
          } else {
            tmp_2 = null;
          }
          tmp_1 = tmp_2;
        }
        var tmp1_safe_receiver = tmp_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          addSuppressed(tmp0_safe_receiver, tmp1_safe_receiver);
        }
        tmp_0 = tmp0_safe_receiver;
      }
      tmp.n2c_1 = tmp_0;
      this$0.d2d_1.lt(State_ShutDown_getInstance());
      return Unit_instance;
    };
  }
  function Recomposer$effectJob$lambda(this$0) {
    return function (throwable) {
      var cancellation = CancellationException_init_$Create$('Recomposer effect job completed', throwable);
      var continuationToResume = null;
      // Inline function 'androidx.compose.runtime.synchronized' call
      this$0.l2c_1;
      // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>' call
      var runnerJob = this$0.m2c_1;
      var tmp;
      if (!(runnerJob == null)) {
        this$0.d2d_1.lt(State_ShuttingDown_getInstance());
        if (!this$0.a2d_1) {
          runnerJob.ui(cancellation);
        } else if (!(this$0.y2c_1 == null)) {
          continuationToResume = this$0.y2c_1;
        }
        this$0.y2c_1 = null;
        tmp = runnerJob.pi(Recomposer$effectJob$lambda$lambda(this$0, throwable));
      } else {
        this$0.n2c_1 = cancellation;
        this$0.d2d_1.lt(State_ShutDown_getInstance());
        tmp = Unit_instance;
      }
      var tmp0_safe_receiver = continuationToResume;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_instance);
        tmp0_safe_receiver.q8(tmp$ret$2);
      }
      return Unit_instance;
    };
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation) {
    this.i2f_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).t2f = function ($this$recompositionRunner, parentFrameClock, $completion) {
    var tmp = this.u2f($this$recompositionRunner, parentFrameClock, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).x1k = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE();
    return this.t2f(tmp, (!(p2 == null) ? isInterface(p2, MonotonicFrameClock) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        switch (tmp) {
          case 0:
            this.g8_1 = 6;
            var tmp_0 = this;
            tmp_0.l2f_1 = ArrayList_init_$Create$();
            var tmp_1 = this;
            tmp_1.m2f_1 = ArrayList_init_$Create$();
            var tmp_2 = this;
            tmp_2.n2f_1 = ArrayList_init_$Create$();
            this.o2f_1 = mutableScatterSetOf_0();
            this.p2f_1 = mutableScatterSetOf_0();
            this.q2f_1 = new MutableScatterSet();
            this.r2f_1 = wrapIntoSet(this.q2f_1);
            this.s2f_1 = mutableScatterSetOf_0();
            this.f8_1 = 1;
            continue $sm;
          case 1:
            if (!_get_shouldKeepRecomposing__5j79sd(this.i2f_1)) {
              this.f8_1 = 5;
              continue $sm;
            }

            this.f8_1 = 2;
            suspendResult = awaitWorkAvailable(this.i2f_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!recordComposerModifications(this.i2f_1)) {
              this.f8_1 = 1;
              continue $sm;
            } else {
              this.f8_1 = 3;
              continue $sm;
            }

          case 3:
            this.f8_1 = 4;
            suspendResult = this.k2f_1.w1s(Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this.i2f_1, this.l2f_1, this.q2f_1, this.s2f_1, this.m2f_1, this.n2f_1, this.r2f_1, this.o2f_1, this.p2f_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            discardUnusedValues(this.i2f_1);
            this.f8_1 = 1;
            continue $sm;
          case 5:
            return Unit_instance;
          case 6:
            throw this.i8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.g8_1 === 6) {
          throw e;
        } else {
          this.f8_1 = this.g8_1;
          this.i8_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).u2f = function ($this$recompositionRunner, parentFrameClock, completion) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this.i2f_1, completion);
    i.j2f_1 = $this$recompositionRunner;
    i.k2f_1 = parentFrameClock;
    return i;
  };
  function Recomposer$runRecomposeAndApplyChanges$slambda_0(this$0, resultContinuation) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation);
    var l = function ($this$recompositionRunner, parentFrameClock, $completion) {
      return i.t2f($this$recompositionRunner, parentFrameClock, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation) {
    this.d2g_1 = this$0;
    this.e2g_1 = $block;
    this.f2g_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda).w2b = function ($this$withContext, $completion) {
    var tmp = this.w1f($this$withContext, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(Recomposer$recompositionRunner$slambda).b9 = function (p1, $completion) {
    return this.w2b((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        switch (tmp) {
          case 0:
            this.g8_1 = 5;
            this.h2g_1 = get_job(this.g2g_1.mh());
            registerRunnerJob(this.d2g_1, this.h2g_1);
            var tmp_0 = this;
            var tmp_1 = Companion_instance_12;
            tmp_0.i2g_1 = tmp_1.k2g(Recomposer$recompositionRunner$slambda$lambda(this.d2g_1));
            addRunning(Companion_getInstance_2(), this.d2g_1.g2d_1);
            this.f8_1 = 1;
            continue $sm;
          case 1:
            this.g8_1 = 4;
            this.d2g_1.l2c_1;
            var this_0 = _get_knownCompositions__y8veaj(this.d2g_1);
            var inductionVariable = 0;
            var last = this_0.l() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = this_0.o(index);
                item.l2a();
              }
               while (inductionVariable <= last);
            this.f8_1 = 2;
            suspendResult = coroutineScope(Recomposer$recompositionRunner$slambda$slambda_0(this.e2g_1, this.f2g_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.j2g_1 = suspendResult;
            this.g8_1 = 5;
            this.f8_1 = 3;
            continue $sm;
          case 3:
            this.g8_1 = 5;
            this.i2g_1.gl();
            this.d2g_1.l2c_1;
            if (this.d2g_1.m2c_1 === this.h2g_1) {
              this.d2g_1.m2c_1 = null;
            }

            deriveStateLocked(this.d2g_1);
            removeRunning(Companion_getInstance_2(), this.d2g_1.g2d_1);
            return Unit_instance;
          case 4:
            this.g8_1 = 5;
            var t = this.i8_1;
            this.i2g_1.gl();
            this.d2g_1.l2c_1;
            if (this.d2g_1.m2c_1 === this.h2g_1) {
              this.d2g_1.m2c_1 = null;
            }

            deriveStateLocked(this.d2g_1);
            removeRunning(Companion_getInstance_2(), this.d2g_1.g2d_1);
            throw t;
          case 5:
            throw this.i8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.g8_1 === 5) {
          throw e;
        } else {
          this.f8_1 = this.g8_1;
          this.i8_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$recompositionRunner$slambda).w1f = function ($this$withContext, completion) {
    var i = new Recomposer$recompositionRunner$slambda(this.d2g_1, this.e2g_1, this.f2g_1, completion);
    i.g2g_1 = $this$withContext;
    return i;
  };
  function Recomposer$recompositionRunner$slambda_0(this$0, $block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.w2b($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Recomposer$performRecompose$lambda($modifiedValues, $composition) {
    return function () {
      var this_0 = $modifiedValues;
      // Inline function 'kotlin.contracts.contract' call
      var k = this_0.x1p_1;
      $l$block: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this_0.w1p_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.k2(this_1.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>.<anonymous>.<anonymous>' call
                    var tmp = k[index];
                    var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    $composition.e2a(it);
                  }
                  slot = slot.i2(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
      return Unit_instance;
    };
  }
  function Recomposer$readObserverOf$lambda($composition) {
    return function (value) {
      $composition.v29(value);
      return Unit_instance;
    };
  }
  function Recomposer$writeObserverOf$lambda($composition, $modifiedValues) {
    return function (value) {
      $composition.e2a(value);
      var tmp0_safe_receiver = $modifiedValues;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.d(value);
      return Unit_instance;
    };
  }
  function State_ShutDown_getInstance() {
    State_initEntries();
    return State_ShutDown_instance;
  }
  function State_ShuttingDown_getInstance() {
    State_initEntries();
    return State_ShuttingDown_instance;
  }
  function State_Inactive_getInstance() {
    State_initEntries();
    return State_Inactive_instance;
  }
  function State_InactivePendingWork_getInstance() {
    State_initEntries();
    return State_InactivePendingWork_instance;
  }
  function State_Idle_getInstance() {
    State_initEntries();
    return State_Idle_instance;
  }
  function State_PendingWork_getInstance() {
    State_initEntries();
    return State_PendingWork_instance;
  }
  function $awaitWorkAvailableCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i2e_1 = _this__u8e3s4;
  }
  protoOf($awaitWorkAvailableCOROUTINE$2).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        switch (tmp) {
          case 0:
            this.g8_1 = 3;
            if (!_get_hasSchedulingWork__b617oy(this.i2e_1)) {
              this.f8_1 = 1;
              var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
              cancellable.fl();
              this.i2e_1.l2c_1;
              var tmp_0;
              if (_get_hasSchedulingWork__b617oy(this.i2e_1)) {
                tmp_0 = cancellable;
              } else {
                this.i2e_1.y2c_1 = cancellable;
                tmp_0 = null;
              }
              var tmp0_safe_receiver = tmp_0;
              if (tmp0_safe_receiver == null)
                null;
              else {
                tmp0_safe_receiver.q8(_Result___init__impl__xyqfz8(Unit_instance));
              }
              suspendResult = returnIfSuspended(cancellable.nj(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.f8_1 = 2;
              continue $sm;
            }

          case 1:
            this.f8_1 = 2;
            continue $sm;
          case 2:
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
  function Recomposer(effectCoroutineContext) {
    Companion_getInstance_2();
    CompositionContext.call(this);
    this.j2c_1 = new Long(0, 0);
    var tmp = this;
    tmp.k2c_1 = new BroadcastFrameClock(Recomposer$broadcastFrameClock$lambda(this));
    this.l2c_1 = new Object();
    this.m2c_1 = null;
    this.n2c_1 = null;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.o2c_1 = ArrayList_init_$Create$();
    this.p2c_1 = null;
    this.q2c_1 = new MutableScatterSet();
    var tmp_1 = this;
    // Inline function 'androidx.compose.runtime.collection.mutableVectorOf' call
    // Inline function 'androidx.compose.runtime.collection.MutableVector' call
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp$ret$1 = fillArrayVal(Array(16), null);
    tmp_1.r2c_1 = new MutableVector(tmp$ret$1, 0);
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.s2c_1 = ArrayList_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_3.t2c_1 = ArrayList_init_$Create$();
    var tmp_4 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_4.u2c_1 = LinkedHashMap_init_$Create$();
    var tmp_5 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_5.v2c_1 = LinkedHashMap_init_$Create$();
    this.w2c_1 = null;
    this.x2c_1 = null;
    this.y2c_1 = null;
    this.z2c_1 = 0;
    this.a2d_1 = false;
    this.b2d_1 = null;
    this.c2d_1 = false;
    this.d2d_1 = MutableStateFlow(State_Inactive_getInstance());
    var tmp_6 = this;
    // Inline function 'kotlin.apply' call
    var this_0 = Job(effectCoroutineContext.s8(Key_instance));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>' call
    this_0.pi(Recomposer$effectJob$lambda(this));
    tmp_6.e2d_1 = this_0;
    this.f2d_1 = effectCoroutineContext.de(this.k2c_1).de(this.e2d_1);
    this.g2d_1 = new RecomposerInfoImpl(this);
  }
  protoOf(Recomposer).j24 = function () {
    return this.f2d_1;
  };
  protoOf(Recomposer).l2g = function ($completion) {
    return recompositionRunner(this, Recomposer$runRecomposeAndApplyChanges$slambda_0(this, null), $completion);
  };
  protoOf(Recomposer).l28 = function (composition, content) {
    var composerWasComposing = composition.x28();
    try {
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_instance_12.j2e(readObserverOf(this, composition), writeObserverOf(this, composition, null));
        try {
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.k2e();
            try {
              composition.n29(content);
              break $l$block;
            }finally {
              snapshot.l2e(previous);
            }
          }
          break $l$block_0;
        }finally {
          applyAndCheck(this, snapshot);
        }
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        processCompositionError(this, e, composition, true);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_instance_12.k2d();
    }
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.l2c_1;
    if (this.d2d_1.k1().s1(State_ShuttingDown_getInstance()) > 0) {
      if (!_get_knownCompositions__y8veaj(this).p(composition)) {
        addKnownCompositionLocked(this, composition);
      }
    }
    try {
      performInitialMovableContentInserts(this, composition);
    } catch ($p) {
      if ($p instanceof Exception) {
        var e_0 = $p;
        processCompositionError(this, e_0, composition, true);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    try {
      composition.i2a();
      composition.j2a();
    } catch ($p) {
      if ($p instanceof Exception) {
        var e_1 = $p;
        processCompositionError$default(this, e_1);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_instance_12.k2d();
    }
  };
  protoOf(Recomposer).a1w = function () {
    return 1000;
  };
  protoOf(Recomposer).y1y = function () {
    return Companion_getInstance_2().i2c_1.pn();
  };
  protoOf(Recomposer).x1v = function () {
    return false;
  };
  protoOf(Recomposer).y1v = function () {
    return false;
  };
  protoOf(Recomposer).z1v = function (table) {
  };
  protoOf(Recomposer).a29 = function (composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.l2c_1;
    // Inline function 'androidx.compose.runtime.Recomposer.invalidate.<anonymous>' call
    var tmp;
    if (!this.r2c_1.uc(composition)) {
      // Inline function 'androidx.compose.runtime.collection.MutableVector.plusAssign' call
      this.r2c_1.a23(composition);
      tmp = deriveStateLocked(this);
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_instance);
      tmp0_safe_receiver.q8(tmp$ret$2);
    }
  };
  protoOf(Recomposer).t21 = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.l2c_1;
    // Inline function 'androidx.compose.runtime.Recomposer.insertMovableContent.<anonymous>' call
    // Inline function 'kotlin.collections.plusAssign' call
    this.t2c_1.d(reference);
    var tmp0_safe_receiver = deriveStateLocked(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_instance);
      tmp0_safe_receiver.q8(tmp$ret$2);
    }
  };
  protoOf(Recomposer).x23 = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.l2c_1;
    // Inline function 'androidx.compose.runtime.Recomposer.deletedMovableContent.<anonymous>' call
    addMultiValue(this.u2c_1, reference.w21_1, reference);
  };
  protoOf(Recomposer).u2a = function (reference, data) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.l2c_1;
    this.v2c_1.h4(reference, data);
  };
  protoOf(Recomposer).w23 = function (composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.l2c_1;
    // Inline function 'androidx.compose.runtime.Recomposer.reportRemovedComposition.<anonymous>' call
    var tmp0_elvis_lhs = this.x2c_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.collections.mutableSetOf' call
      var this_0 = LinkedHashSet_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.reportRemovedComposition.<anonymous>.<anonymous>' call
      this.x2c_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var compositionsRemoved = tmp;
    compositionsRemoved.d(composition);
  };
  protoOf(Recomposer).f22 = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.l2c_1;
    // Inline function 'androidx.compose.runtime.Recomposer.movableContentStateResolve.<anonymous>' call
    return this.v2c_1.i4(reference);
  };
  function removeLastMultiValue(_this__u8e3s4, key) {
    _init_properties_Recomposer_kt__nj7w3x();
    var tmp0_safe_receiver = _this__u8e3s4.n1(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.removeLastMultiValue.<anonymous>' call
      // Inline function 'kotlin.also' call
      var this_0 = removeFirst(tmp0_safe_receiver);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.removeLastMultiValue.<anonymous>.<anonymous>' call
      if (tmp0_safe_receiver.n()) {
        _this__u8e3s4.i4(key);
      }
      tmp = this_0;
    }
    return tmp;
  }
  function addMultiValue(_this__u8e3s4, key, value) {
    _init_properties_Recomposer_kt__nj7w3x();
    // Inline function 'kotlin.collections.getOrPut' call
    var value_0 = _this__u8e3s4.n1(key);
    var tmp;
    if (value_0 == null) {
      // Inline function 'androidx.compose.runtime.addMultiValue.<anonymous>' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var answer = ArrayList_init_$Create$();
      _this__u8e3s4.h4(key, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    return tmp.d(value);
  }
  var properties_initialized_Recomposer_kt_k8q2ph;
  function _init_properties_Recomposer_kt__nj7w3x() {
    if (!properties_initialized_Recomposer_kt_k8q2ph) {
      properties_initialized_Recomposer_kt_k8q2ph = true;
      ProduceAnotherFrame = new Object();
      FramePending = new Object();
    }
  }
  function RememberObserver() {
  }
  function tryAnchor($this, index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.l1v_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.tryAnchor.<anonymous>' call
      var tmp$ret$0 = 'use active SlotWriter to crate an anchor for location instead';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    return (0 <= index ? index < $this.g1v_1 : false) ? find($this.n1v_1, index, $this.g1v_1) : null;
  }
  function SlotTable() {
    this.f1v_1 = new Int32Array(0);
    this.g1v_1 = 0;
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(0), null);
    while (tmp_0 < 0) {
      tmp_1[tmp_0] = null;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.h1v_1 = tmp_1;
    this.i1v_1 = 0;
    this.j1v_1 = 0;
    this.k1v_1 = new Object();
    this.l1v_1 = false;
    this.m1v_1 = 0;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp_2.n1v_1 = ArrayList_init_$Create$();
    this.o1v_1 = null;
    this.p1v_1 = null;
  }
  protoOf(SlotTable).c21 = function () {
    return this.g1v_1 === 0;
  };
  protoOf(SlotTable).q1v = function () {
    if (this.l1v_1) {
      // Inline function 'kotlin.error' call
      var message = 'Cannot read while a writer is pending';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.j1v_1 = this.j1v_1 + 1 | 0;
    return new SlotReader(this);
  };
  protoOf(SlotTable).u1y = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.l1v_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      var tmp$ret$0 = 'Cannot start a writer when another writer is pending';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.j1v_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      var tmp$ret$1 = 'Cannot start a writer when a reader is pending';
      composeImmediateRuntimeError(tmp$ret$1);
    }
    this.l1v_1 = true;
    this.m1v_1 = this.m1v_1 + 1 | 0;
    return new SlotWriter(this);
  };
  protoOf(SlotTable).o1y = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.l1v_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var tmp$ret$0 = 'use active SlotWriter to create an anchor location instead';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= index ? index < this.g1v_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var tmp$ret$1 = 'Parameter index is out of range';
      throwIllegalArgumentException(tmp$ret$1);
    }
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var this_0 = this.n1v_1;
    var effectiveSize = this.g1v_1;
    var location = search$accessor$145qfty(this_0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var anchor = new Anchor(index);
      this_0.g1(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = this_0.o(location);
    }
    return tmp;
  };
  protoOf(SlotTable).d22 = function (anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.l1v_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      var tmp$ret$0 = 'Use active SlotWriter to determine anchor location instead';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!anchor.s26()) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      var tmp$ret$1 = 'Anchor refers to a group that was removed';
      throwIllegalArgumentException(tmp$ret$1);
    }
    return anchor.w22_1;
  };
  protoOf(SlotTable).p2a = function (anchor) {
    var tmp;
    if (anchor.s26()) {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.ownsAnchor.<anonymous>' call
      var it = search$accessor$145qfty(this.n1v_1, anchor.w22_1, this.g1v_1);
      tmp = (it >= 0 && equals(this.n1v_1.o(it), anchor));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).y28 = function (groupIndex, anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.l1v_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      var tmp$ret$0 = 'Writer is active';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= groupIndex ? groupIndex < this.g1v_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      var tmp$ret$1 = 'Invalid group index';
      composeImmediateRuntimeError(tmp$ret$1);
    }
    var tmp;
    if (this.p2a(anchor)) {
      var containsUpper = groupIndex + groupSize(this.f1v_1, groupIndex) | 0;
      var containsArg = anchor.w22_1;
      tmp = groupIndex <= containsArg ? containsArg < containsUpper : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).m2g = function (reader, sourceInformationMap) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(reader.p1w_1 === this && this.j1v_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      var tmp$ret$0 = 'Unexpected reader close()';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.j1v_1 = this.j1v_1 - 1 | 0;
    if (!(sourceInformationMap == null)) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      this.k1v_1;
      var thisMap = this.o1v_1;
      if (!(thisMap == null)) {
        thisMap.y4(sourceInformationMap);
      } else {
        this.o1v_1 = sourceInformationMap;
      }
    }
  };
  protoOf(SlotTable).n2g = function (writer, groups, groupsSize, slots, slotsSize, anchors, sourceInformationMap, calledByMap) {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(writer.j1x_1 === this && this.l1v_1)) {
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      var tmp$ret$0 = 'Unexpected writer close()';
      throwIllegalArgumentException(tmp$ret$0);
    }
    this.l1v_1 = false;
    this.o2g(groups, groupsSize, slots, slotsSize, anchors, sourceInformationMap, calledByMap);
  };
  protoOf(SlotTable).o2g = function (groups, groupsSize, slots, slotsSize, anchors, sourceInformationMap, calledByMap) {
    this.f1v_1 = groups;
    this.g1v_1 = groupsSize;
    this.h1v_1 = slots;
    this.i1v_1 = slotsSize;
    this.n1v_1 = anchors;
    this.o1v_1 = sourceInformationMap;
    this.p1v_1 = calledByMap;
  };
  protoOf(SlotTable).i23 = function () {
    return this.g1v_1 > 0 && containsMark(this.f1v_1, 0);
  };
  protoOf(SlotTable).p2g = function (group) {
    var tmp0_safe_receiver = this.o1v_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.sourceInformationOf.<anonymous>' call
      var tmp0_safe_receiver_0 = tryAnchor(this, group);
      var tmp_0;
      if (tmp0_safe_receiver_0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotTable.sourceInformationOf.<anonymous>.<anonymous>' call
        tmp_0 = tmp0_safe_receiver.n1(tmp0_safe_receiver_0);
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SlotTable).x1y = function () {
    this.p1v_1 = new MutableIntObjectMap();
  };
  protoOf(SlotTable).w1y = function () {
    this.o1v_1 = HashMap_init_$Create$_0();
  };
  protoOf(SlotTable).c2c = function (group, slotIndex) {
    var start = slotAnchor(this.f1v_1, group);
    var end = (group + 1 | 0) < this.g1v_1 ? dataAnchor(this.f1v_1, group + 1 | 0) : this.h1v_1.length;
    var len = end - start | 0;
    var tmp;
    if (0 <= slotIndex ? slotIndex < len : false) {
      return this.h1v_1[start + slotIndex | 0];
    } else {
      tmp = Companion_getInstance().e1z_1;
    }
    return tmp;
  };
  protoOf(SlotTable).i = function () {
    return new GroupIterator(this, 0, this.g1v_1);
  };
  function moveGroup($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup) {
    var groupsToMove = fromWriter.m20(fromIndex);
    var sourceGroupsEnd = fromIndex + groupsToMove | 0;
    var sourceSlotsStart = dataIndex(fromWriter, fromIndex);
    var sourceSlotsEnd = dataIndex(fromWriter, sourceGroupsEnd);
    var slotsToMove = sourceSlotsEnd - sourceSlotsStart | 0;
    var hasMarks = containsAnyGroupMarks(fromWriter, fromIndex);
    insertGroups(toWriter, groupsToMove);
    insertSlots(toWriter, slotsToMove, toWriter.c1y_1);
    if (fromWriter.p1x_1 < sourceGroupsEnd) {
      moveGroupGapTo(fromWriter, sourceGroupsEnd);
    }
    if (fromWriter.t1x_1 < sourceSlotsEnd) {
      moveSlotGapTo(fromWriter, sourceSlotsEnd, sourceGroupsEnd);
    }
    var groups = toWriter.k1x_1;
    var currentGroup = toWriter.c1y_1;
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = fromWriter.k1x_1;
    var destinationOffset = imul(currentGroup, 5);
    var startIndex = imul(fromIndex, 5);
    var endIndex = imul(sourceGroupsEnd, 5);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, groups, destinationOffset, startIndex, endIndex);
    var slots = toWriter.l1x_1;
    var currentSlot = toWriter.r1x_1;
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = fromWriter.l1x_1;
    arrayCopy(this_1, slots, currentSlot, sourceSlotsStart, sourceSlotsEnd);
    var parent = toWriter.e1y_1;
    updateParentAnchor(groups, currentGroup, parent);
    var parentDelta = currentGroup - fromIndex | 0;
    var moveEnd = currentGroup + groupsToMove | 0;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
    var dataIndexDelta = currentSlot - dataIndex_0(groups, toWriter, currentGroup) | 0;
    var slotsGapOwner = toWriter.v1x_1;
    var slotsGapLen = toWriter.u1x_1;
    var slotsCapacity = slots.length;
    var inductionVariable = currentGroup;
    if (inductionVariable < moveEnd)
      do {
        var groupAddress = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(groupAddress === currentGroup)) {
          var previousParent = parentAnchor(groups, groupAddress);
          updateParentAnchor(groups, groupAddress, previousParent + parentDelta | 0);
        }
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
        var newDataIndex = dataIndex_0(groups, toWriter, groupAddress) + dataIndexDelta | 0;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
        var newDataAnchor = dataIndexToDataAnchor(toWriter, newDataIndex, slotsGapOwner < groupAddress ? 0 : toWriter.t1x_1, slotsGapLen, slotsCapacity);
        updateDataAnchor(groups, groupAddress, newDataAnchor);
        if (groupAddress === slotsGapOwner) {
          slotsGapOwner = slotsGapOwner + 1 | 0;
        }
      }
       while (inductionVariable < moveEnd);
    toWriter.v1x_1 = slotsGapOwner;
    var startAnchors = locationOf(fromWriter.m1x_1, fromIndex, fromWriter.q2g());
    var endAnchors = locationOf(fromWriter.m1x_1, sourceGroupsEnd, fromWriter.q2g());
    var tmp_0;
    if (startAnchors < endAnchors) {
      var sourceAnchors = fromWriter.m1x_1;
      var anchors = ArrayList_init_$Create$_0(endAnchors - startAnchors | 0);
      var anchorDelta = currentGroup - fromIndex | 0;
      var inductionVariable_0 = startAnchors;
      if (inductionVariable_0 < endAnchors)
        do {
          var anchorIndex = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var sourceAnchor = sourceAnchors.o(anchorIndex);
          sourceAnchor.w22_1 = sourceAnchor.w22_1 + anchorDelta | 0;
          anchors.d(sourceAnchor);
        }
         while (inductionVariable_0 < endAnchors);
      var insertLocation = locationOf(toWriter.m1x_1, toWriter.c1y_1, toWriter.q2g());
      toWriter.m1x_1.p4(insertLocation, anchors);
      sourceAnchors.i1(startAnchors, endAnchors).e1();
      tmp_0 = anchors;
    } else {
      tmp_0 = emptyList();
    }
    var anchors_0 = tmp_0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors_0.n()) {
      var sourceSourceInformationMap = fromWriter.n1x_1;
      var destinationSourceInformation = toWriter.n1x_1;
      if (!(sourceSourceInformationMap == null) && !(destinationSourceInformation == null)) {
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_1 = 0;
        var last = anchors_0.l() - 1 | 0;
        if (inductionVariable_1 <= last)
          do {
            var index = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var item = anchors_0.o(index);
            // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
            var information = sourceSourceInformationMap.n1(item);
            if (!(information == null)) {
              sourceSourceInformationMap.i4(item);
              // Inline function 'kotlin.collections.set' call
              destinationSourceInformation.h4(item, information);
            }
          }
           while (inductionVariable_1 <= last);
      }
    }
    var toWriterParent = toWriter.e1y_1;
    var tmp4_safe_receiver = sourceInformationOf(toWriter, parent);
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var predecessor = -1;
      var child = toWriterParent + 1 | 0;
      var endGroup = toWriter.c1y_1;
      while (child < endGroup) {
        predecessor = child;
        child = child + groupSize(toWriter.k1x_1, child) | 0;
      }
      tmp4_safe_receiver.x2g(toWriter, predecessor, endGroup);
    }
    var parentGroup = fromWriter.n1y(fromIndex);
    var tmp_1;
    if (!removeSourceGroup) {
      tmp_1 = false;
    } else if (updateFromCursor) {
      var needsStartGroups = parentGroup >= 0;
      if (needsStartGroups) {
        fromWriter.c1z();
        fromWriter.y2g(parentGroup - fromWriter.c1y_1 | 0);
        fromWriter.c1z();
      }
      fromWriter.y2g(fromIndex - fromWriter.c1y_1 | 0);
      var anchorsRemoved = fromWriter.v26();
      if (needsStartGroups) {
        fromWriter.v1y();
        fromWriter.a21();
        fromWriter.v1y();
        fromWriter.a21();
      }
      tmp_1 = anchorsRemoved;
    } else {
      var anchorsRemoved_0 = removeGroups(fromWriter, fromIndex, groupsToMove);
      removeSlots(fromWriter, sourceSlotsStart, slotsToMove, fromIndex - 1 | 0);
      tmp_1 = anchorsRemoved_0;
    }
    var anchorsRemoved_1 = tmp_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!anchorsRemoved_1) {
      // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
      var tmp$ret$14 = 'Unexpectedly removed anchors';
      composeImmediateRuntimeError(tmp$ret$14);
    }
    toWriter.x1x_1 = toWriter.x1x_1 + (isNode(groups, currentGroup) ? 1 : nodeCount(groups, currentGroup)) | 0;
    if (updateToCursor) {
      toWriter.c1y_1 = currentGroup + groupsToMove | 0;
      toWriter.r1x_1 = currentSlot + slotsToMove | 0;
    }
    if (hasMarks) {
      updateContainsMark(toWriter, parent);
    }
    return anchors_0;
  }
  function moveGroup$default($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup, $super) {
    removeSourceGroup = removeSourceGroup === VOID ? true : removeSourceGroup;
    return moveGroup($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup);
  }
  function rawUpdate($this, value) {
    var result = $this.z2g();
    $this.a2h(value);
    return result;
  }
  function groupSourceInformationFor($this, parent, sourceInformation) {
    var tmp0_safe_receiver = $this.n1x_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.getOrPut' call
      var key = $this.o1y(parent);
      var value = tmp0_safe_receiver.n1(key);
      var tmp_0;
      if (value == null) {
        // Inline function 'androidx.compose.runtime.SlotWriter.groupSourceInformationFor.<anonymous>' call
        var result = new GroupSourceInformation(0, sourceInformation, 0);
        if (sourceInformation == null) {
          var child = parent + 1 | 0;
          var end = $this.c1y_1;
          while (child < end) {
            result.b2h($this, child);
            child = child + groupSize($this.k1x_1, child) | 0;
          }
        }
        var answer = result;
        tmp0_safe_receiver.h4(key, answer);
        tmp_0 = answer;
      } else {
        tmp_0 = value;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function _get_currentGroupSlotIndex__p1glxf($this) {
    var tmp = $this.r1x_1 - $this.c2h($this.e1y_1) | 0;
    var tmp0_safe_receiver = $this.b1y_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o($this.e1y_1);
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.l();
    return tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
  }
  function startGroup_1($this, key, objectKey, isNode, aux) {
    var previousParent = $this.e1y_1;
    var inserting = $this.w1x_1 > 0;
    $this.a1y_1.v1v($this.x1x_1);
    var tmp = $this;
    var tmp_0;
    if (inserting) {
      var current = $this.c1y_1;
      var newCurrentSlot = dataIndex_0($this.k1x_1, $this, groupIndexToAddress($this, current));
      insertGroups($this, 1);
      $this.r1x_1 = newCurrentSlot;
      $this.s1x_1 = newCurrentSlot;
      var currentAddress = groupIndexToAddress($this, current);
      var hasObjectKey = !(objectKey === Companion_getInstance().e1z_1);
      var hasAux = !isNode && !(aux === Companion_getInstance().e1z_1);
      // Inline function 'kotlin.let' call
      var tmp0_gapLen = $this.u1x_1;
      var tmp1_gapStart = $this.t1x_1;
      var tmp2_capacity = $this.l1x_1.length;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotWriter.startGroup.<anonymous>' call
      var anchor = dataIndexToDataAnchor($this, newCurrentSlot, tmp1_gapStart, tmp0_gapLen, tmp2_capacity);
      var tmp_1;
      if (anchor >= 0 && $this.v1x_1 < current) {
        var slotsSize = $this.l1x_1.length - $this.u1x_1 | 0;
        tmp_1 = -((slotsSize - anchor | 0) + 1 | 0) | 0;
      } else {
        tmp_1 = anchor;
      }
      var dataAnchor = tmp_1;
      initGroup($this.k1x_1, currentAddress, key, isNode, hasObjectKey, hasAux, $this.e1y_1, dataAnchor);
      var dataSlotsNeeded = ((isNode ? 1 : 0) + (hasObjectKey ? 1 : 0) | 0) + (hasAux ? 1 : 0) | 0;
      if (dataSlotsNeeded > 0) {
        insertSlots($this, dataSlotsNeeded, current);
        var slots = $this.l1x_1;
        var currentSlot = $this.r1x_1;
        if (isNode) {
          var tmp3 = currentSlot;
          currentSlot = tmp3 + 1 | 0;
          slots[tmp3] = aux;
        }
        if (hasObjectKey) {
          var tmp4 = currentSlot;
          currentSlot = tmp4 + 1 | 0;
          slots[tmp4] = objectKey;
        }
        if (hasAux) {
          var tmp5 = currentSlot;
          currentSlot = tmp5 + 1 | 0;
          slots[tmp5] = aux;
        }
        $this.r1x_1 = currentSlot;
      }
      $this.x1x_1 = 0;
      var newCurrent = current + 1 | 0;
      $this.e1y_1 = current;
      $this.c1y_1 = newCurrent;
      if (previousParent >= 0) {
        var tmp6_safe_receiver = sourceInformationOf($this, previousParent);
        if (tmp6_safe_receiver == null)
          null;
        else {
          tmp6_safe_receiver.b2h($this, current);
        }
      }
      tmp_0 = newCurrent;
    } else {
      $this.y1x_1.v1v(previousParent);
      saveCurrentGroupEnd($this);
      var currentGroup = $this.c1y_1;
      var currentGroupAddress = groupIndexToAddress($this, currentGroup);
      if (!equals(aux, Companion_getInstance().e1z_1)) {
        if (isNode) {
          $this.e2h(aux);
        } else {
          $this.d2h(aux);
        }
      }
      $this.r1x_1 = slotIndex($this.k1x_1, $this, currentGroupAddress);
      $this.s1x_1 = dataIndex_0($this.k1x_1, $this, groupIndexToAddress($this, $this.c1y_1 + 1 | 0));
      $this.x1x_1 = nodeCount($this.k1x_1, currentGroupAddress);
      $this.e1y_1 = currentGroup;
      $this.c1y_1 = currentGroup + 1 | 0;
      tmp_0 = currentGroup + groupSize($this.k1x_1, currentGroupAddress) | 0;
    }
    tmp.d1y_1 = tmp_0;
  }
  function Companion_3() {
  }
  var Companion_instance_4;
  function Companion_getInstance_3() {
    return Companion_instance_4;
  }
  function containsGroupMark($this, group) {
    return group >= 0 && containsMark($this.k1x_1, groupIndexToAddress($this, group));
  }
  function containsAnyGroupMarks($this, group) {
    return group >= 0 && containsAnyMark($this.k1x_1, groupIndexToAddress($this, group));
  }
  function recalculateMarks($this) {
    var tmp0_safe_receiver = $this.g1y_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      while (tmp0_safe_receiver.b1q()) {
        updateContainsMarkNow($this, tmp0_safe_receiver.g2h(), tmp0_safe_receiver);
      }
    }
  }
  function updateContainsMark($this, group) {
    if (group >= 0) {
      var tmp0_elvis_lhs = $this.g1y_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_0 = new PrioritySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotWriter.updateContainsMark.<anonymous>' call
        $this.g1y_1 = this_0;
        tmp = this_0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      tmp.h2h(group);
    }
  }
  function updateContainsMarkNow($this, group, set) {
    var groupAddress = groupIndexToAddress($this, group);
    var containsAnyMarks = childContainsAnyMarks($this, group);
    var markChanges = !(containsMark($this.k1x_1, groupAddress) === containsAnyMarks);
    if (markChanges) {
      updateContainsMark_0($this.k1x_1, groupAddress, containsAnyMarks);
      var parent = $this.n1y(group);
      if (parent >= 0) {
        set.h2h(parent);
      }
    }
  }
  function childContainsAnyMarks($this, group) {
    var child = group + 1 | 0;
    var end = group + $this.m20(group) | 0;
    while (child < end) {
      if (containsAnyMark($this.k1x_1, groupIndexToAddress($this, child)))
        return true;
      child = child + $this.m20(child) | 0;
    }
    return false;
  }
  function saveCurrentGroupEnd($this) {
    $this.z1x_1.v1v((_get_capacity__a9k9f3($this) - $this.q1x_1 | 0) - $this.d1y_1 | 0);
  }
  function restoreCurrentGroupEnd($this) {
    var newGroupEnd = (_get_capacity__a9k9f3($this) - $this.q1x_1 | 0) - $this.z1x_1.f1x() | 0;
    $this.d1y_1 = newGroupEnd;
    return newGroupEnd;
  }
  function fixParentAnchorsFor($this, parent, endGroup, firstChild) {
    var parentAnchor = parentIndexToAnchor($this, parent, $this.p1x_1);
    var child = firstChild;
    while (child < endGroup) {
      updateParentAnchor($this.k1x_1, groupIndexToAddress($this, child), parentAnchor);
      var childEnd = child + groupSize($this.k1x_1, groupIndexToAddress($this, child)) | 0;
      fixParentAnchorsFor($this, child, childEnd, child + 1 | 0);
      child = childEnd;
    }
  }
  function moveGroupGapTo($this, index) {
    var gapLen = $this.q1x_1;
    var gapStart = $this.p1x_1;
    if (!(gapStart === index)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!$this.m1x_1.n()) {
        updateAnchors($this, gapStart, index);
      }
      if (gapLen > 0) {
        var groups = $this.k1x_1;
        var groupPhysicalAddress = imul(index, 5);
        var groupPhysicalGapLen = imul(gapLen, 5);
        var groupPhysicalGapStart = imul(gapStart, 5);
        if (index < gapStart) {
          // Inline function 'kotlin.collections.copyInto' call
          var destinationOffset = groupPhysicalAddress + groupPhysicalGapLen | 0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp = groups;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp, groups, destinationOffset, groupPhysicalAddress, groupPhysicalGapStart);
        } else {
          // Inline function 'kotlin.collections.copyInto' call
          var startIndex = groupPhysicalGapStart + groupPhysicalGapLen | 0;
          var endIndex = groupPhysicalAddress + groupPhysicalGapLen | 0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_0 = groups;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp_0, groups, groupPhysicalGapStart, startIndex, endIndex);
        }
      }
      var groupAddress = index < gapStart ? index + gapLen | 0 : gapStart;
      var capacity = _get_capacity__a9k9f3($this);
      runtimeCheck(groupAddress < capacity);
      while (groupAddress < capacity) {
        var oldAnchor = parentAnchor($this.k1x_1, groupAddress);
        var oldIndex = parentAnchorToIndex($this, oldAnchor);
        var newAnchor = parentIndexToAnchor($this, oldIndex, index);
        if (!(newAnchor === oldAnchor)) {
          updateParentAnchor($this.k1x_1, groupAddress, newAnchor);
        }
        groupAddress = groupAddress + 1 | 0;
        if (groupAddress === index)
          groupAddress = groupAddress + gapLen | 0;
      }
    }
    $this.p1x_1 = index;
  }
  function moveSlotGapTo($this, index, group) {
    var gapLen = $this.u1x_1;
    var gapStart = $this.t1x_1;
    var slotsGapOwner = $this.v1x_1;
    if (!(gapStart === index)) {
      var slots = $this.l1x_1;
      if (index < gapStart) {
        // Inline function 'kotlin.collections.copyInto' call
        var destinationOffset = index + gapLen | 0;
        arrayCopy(slots, slots, destinationOffset, index, gapStart);
      } else {
        // Inline function 'kotlin.collections.copyInto' call
        var startIndex = gapStart + gapLen | 0;
        var endIndex = index + gapLen | 0;
        arrayCopy(slots, slots, gapStart, startIndex, endIndex);
      }
    }
    // Inline function 'kotlin.math.min' call
    var a = group + 1 | 0;
    var b = $this.q2g();
    var newSlotsGapOwner = Math.min(a, b);
    if (!(slotsGapOwner === newSlotsGapOwner)) {
      var slotsSize = $this.l1x_1.length - gapLen | 0;
      if (newSlotsGapOwner < slotsGapOwner) {
        var updateAddress = groupIndexToAddress($this, newSlotsGapOwner);
        var stopUpdateAddress = groupIndexToAddress($this, slotsGapOwner);
        var groupGapStart = $this.p1x_1;
        while (updateAddress < stopUpdateAddress) {
          var anchor = dataAnchor($this.k1x_1, updateAddress);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          // Inline function 'kotlin.contracts.contract' call
          if (!(anchor >= 0)) {
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            var tmp$ret$3 = 'Unexpected anchor value, expected a positive anchor';
            composeImmediateRuntimeError(tmp$ret$3);
          }
          updateDataAnchor($this.k1x_1, updateAddress, -((slotsSize - anchor | 0) + 1 | 0) | 0);
          updateAddress = updateAddress + 1 | 0;
          if (updateAddress === groupGapStart)
            updateAddress = updateAddress + $this.q1x_1 | 0;
        }
      } else {
        var updateAddress_0 = groupIndexToAddress($this, slotsGapOwner);
        var stopUpdateAddress_0 = groupIndexToAddress($this, newSlotsGapOwner);
        while (updateAddress_0 < stopUpdateAddress_0) {
          var anchor_0 = dataAnchor($this.k1x_1, updateAddress_0);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          // Inline function 'kotlin.contracts.contract' call
          if (!(anchor_0 < 0)) {
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            var tmp$ret$4 = 'Unexpected anchor value, expected a negative anchor';
            composeImmediateRuntimeError(tmp$ret$4);
          }
          updateDataAnchor($this.k1x_1, updateAddress_0, (slotsSize + anchor_0 | 0) + 1 | 0);
          updateAddress_0 = updateAddress_0 + 1 | 0;
          if (updateAddress_0 === $this.p1x_1)
            updateAddress_0 = updateAddress_0 + $this.q1x_1 | 0;
        }
      }
      $this.v1x_1 = newSlotsGapOwner;
    }
    $this.t1x_1 = index;
  }
  function clearSlotGap($this) {
    var slotsGapStart = $this.t1x_1;
    var slotsGapEnd = slotsGapStart + $this.u1x_1 | 0;
    fill_0($this.l1x_1, null, slotsGapStart, slotsGapEnd);
  }
  function insertGroups($this, size) {
    if (size > 0) {
      var currentGroup = $this.c1y_1;
      moveGroupGapTo($this, currentGroup);
      var gapStart = $this.p1x_1;
      var gapLen = $this.q1x_1;
      var oldCapacity = $this.k1x_1.length / 5 | 0;
      var oldSize = oldCapacity - gapLen | 0;
      if (gapLen < size) {
        var groups = $this.k1x_1;
        // Inline function 'kotlin.math.max' call
        // Inline function 'kotlin.math.max' call
        var a = imul(oldCapacity, 2);
        var b = oldSize + size | 0;
        var a_0 = Math.max(a, b);
        var newCapacity = Math.max(a_0, 32);
        var newGroups = new Int32Array(imul(newCapacity, 5));
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex = imul(gapStart, 5);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = groups;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp, newGroups, 0, 0, endIndex);
        // Inline function 'kotlin.collections.copyInto' call
        var destinationOffset = imul(newGapEndAddress, 5);
        var startIndex = imul(oldGapEndAddress, 5);
        var endIndex_0 = imul(oldCapacity, 5);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = groups;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_0, newGroups, destinationOffset, startIndex, endIndex_0);
        $this.k1x_1 = newGroups;
        gapLen = newGapLen;
      }
      var currentEnd = $this.d1y_1;
      if (currentEnd >= gapStart)
        $this.d1y_1 = currentEnd + size | 0;
      $this.p1x_1 = gapStart + size | 0;
      $this.q1x_1 = gapLen - size | 0;
      var index = oldSize > 0 ? dataIndex($this, currentGroup + size | 0) : 0;
      var anchor = dataIndexToDataAnchor($this, index, $this.v1x_1 < gapStart ? 0 : $this.t1x_1, $this.u1x_1, $this.l1x_1.length);
      var inductionVariable = gapStart;
      var last = gapStart + size | 0;
      if (inductionVariable < last)
        do {
          var groupAddress = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          updateDataAnchor($this.k1x_1, groupAddress, anchor);
        }
         while (inductionVariable < last);
      var slotsGapOwner = $this.v1x_1;
      if (slotsGapOwner >= gapStart) {
        $this.v1x_1 = slotsGapOwner + size | 0;
      }
    }
  }
  function insertSlots($this, size, group) {
    if (size > 0) {
      moveSlotGapTo($this, $this.r1x_1, group);
      var gapStart = $this.t1x_1;
      var gapLen = $this.u1x_1;
      if (gapLen < size) {
        var slots = $this.l1x_1;
        var oldCapacity = slots.length;
        var oldSize = oldCapacity - gapLen | 0;
        // Inline function 'kotlin.math.max' call
        // Inline function 'kotlin.math.max' call
        var a = imul(oldCapacity, 2);
        var b = oldSize + size | 0;
        var a_0 = Math.max(a, b);
        var newCapacity = Math.max(a_0, 32);
        var tmp = 0;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp_0 = fillArrayVal(Array(newCapacity), null);
        while (tmp < newCapacity) {
          tmp_0[tmp] = null;
          tmp = tmp + 1 | 0;
        }
        var newData = tmp_0;
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, 0, 0, gapStart);
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, newGapEndAddress, oldGapEndAddress, oldCapacity);
        $this.l1x_1 = newData;
        gapLen = newGapLen;
      }
      var currentDataEnd = $this.s1x_1;
      if (currentDataEnd >= gapStart)
        $this.s1x_1 = currentDataEnd + size | 0;
      $this.t1x_1 = gapStart + size | 0;
      $this.u1x_1 = gapLen - size | 0;
    }
  }
  function removeGroups($this, start, len) {
    var tmp;
    if (len > 0) {
      var anchorsRemoved = false;
      var anchors = $this.m1x_1;
      moveGroupGapTo($this, start);
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!anchors.n()) {
        anchorsRemoved = removeAnchors($this, start, len, $this.n1x_1);
      }
      $this.p1x_1 = start;
      var previousGapLen = $this.q1x_1;
      var newGapLen = previousGapLen + len | 0;
      $this.q1x_1 = newGapLen;
      var slotsGapOwner = $this.v1x_1;
      if (slotsGapOwner > start) {
        var tmp_0 = $this;
        // Inline function 'kotlin.math.max' call
        var b = slotsGapOwner - len | 0;
        tmp_0.v1x_1 = Math.max(start, b);
      }
      if ($this.d1y_1 >= $this.p1x_1) {
        $this.d1y_1 = $this.d1y_1 - len | 0;
      }
      var parent = $this.e1y_1;
      if (containsGroupMark($this, parent)) {
        updateContainsMark($this, parent);
      }
      tmp = anchorsRemoved;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function sourceInformationOf($this, group) {
    var tmp0_safe_receiver = $this.n1x_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotWriter.sourceInformationOf.<anonymous>' call
      var tmp0_safe_receiver_0 = $this.i2h(group);
      var tmp_0;
      if (tmp0_safe_receiver_0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotWriter.sourceInformationOf.<anonymous>.<anonymous>' call
        tmp_0 = tmp0_safe_receiver.n1(tmp0_safe_receiver_0);
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function removeSlots($this, start, len, group) {
    if (len > 0) {
      var gapLen = $this.u1x_1;
      var removeEnd = start + len | 0;
      moveSlotGapTo($this, removeEnd, group);
      $this.t1x_1 = start;
      $this.u1x_1 = gapLen + len | 0;
      fill_0($this.l1x_1, null, start, start + len | 0);
      var currentDataEnd = $this.s1x_1;
      if (currentDataEnd >= start)
        $this.s1x_1 = currentDataEnd - len | 0;
    }
  }
  function updateNodeOfGroup($this, index, value) {
    var address = groupIndexToAddress($this, index);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(address < $this.k1x_1.length && isNode($this.k1x_1, address))) {
      // Inline function 'androidx.compose.runtime.SlotWriter.updateNodeOfGroup.<anonymous>' call
      var tmp$ret$0 = 'Updating the node of a group at ' + index + ' that was not created with as a node group';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    $this.l1x_1[dataIndexToDataAddress($this, nodeIndex($this.k1x_1, $this, address))] = value;
  }
  function updateAnchors($this, previousGapStart, newGapStart) {
    var gapLen = $this.q1x_1;
    var size = _get_capacity__a9k9f3($this) - gapLen | 0;
    if (previousGapStart < newGapStart) {
      var index = locationOf($this.m1x_1, previousGapStart, size);
      $l$loop_0: while (index < $this.m1x_1.l()) {
        var anchor = $this.m1x_1.o(index);
        var location = anchor.w22_1;
        if (location < 0) {
          var newLocation = size + location | 0;
          if (newLocation < newGapStart) {
            anchor.w22_1 = size + location | 0;
            index = index + 1 | 0;
          } else
            break $l$loop_0;
        } else
          break $l$loop_0;
      }
    } else {
      var index_0 = locationOf($this.m1x_1, newGapStart, size);
      $l$loop_1: while (index_0 < $this.m1x_1.l()) {
        var anchor_0 = $this.m1x_1.o(index_0);
        var location_0 = anchor_0.w22_1;
        if (location_0 >= 0) {
          anchor_0.w22_1 = -(size - location_0 | 0) | 0;
          index_0 = index_0 + 1 | 0;
        } else
          break $l$loop_1;
      }
    }
  }
  function removeAnchors($this, gapStart, size, sourceInformationMap) {
    var gapLen = $this.q1x_1;
    var removeEnd = gapStart + size | 0;
    var groupsSize = _get_capacity__a9k9f3($this) - gapLen | 0;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    var it = locationOf($this.m1x_1, gapStart + size | 0, groupsSize);
    var index = it >= $this.m1x_1.l() ? it - 1 | 0 : it;
    var removeAnchorEnd = 0;
    var removeAnchorStart = index + 1 | 0;
    $l$loop: while (index >= 0) {
      var anchor = $this.m1x_1.o(index);
      var location = $this.d22(anchor);
      if (location >= gapStart) {
        if (location < removeEnd) {
          anchor.w22_1 = -2147483648;
          if (sourceInformationMap == null)
            null;
          else
            sourceInformationMap.i4(anchor);
          removeAnchorStart = index;
          if (removeAnchorEnd === 0)
            removeAnchorEnd = index + 1 | 0;
        }
        index = index - 1 | 0;
      } else
        break $l$loop;
    }
    // Inline function 'kotlin.also' call
    var this_0 = removeAnchorStart < removeAnchorEnd;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    if (this_0) {
      $this.m1x_1.i1(removeAnchorStart, removeAnchorEnd).e1();
    }
    return this_0;
  }
  function moveAnchors($this, originalLocation, newLocation, size) {
    var end = originalLocation + size | 0;
    var groupsSize = $this.q2g();
    var index = locationOf($this.m1x_1, originalLocation, groupsSize);
    // Inline function 'kotlin.collections.mutableListOf' call
    var removedAnchors = ArrayList_init_$Create$();
    if (index >= 0) {
      $l$loop: while (index < $this.m1x_1.l()) {
        var anchor = $this.m1x_1.o(index);
        var location = $this.d22(anchor);
        if (location >= originalLocation && location < end) {
          removedAnchors.d(anchor);
          $this.m1x_1.h1(index);
        } else
          break $l$loop;
      }
    }
    var moveDelta = newLocation - originalLocation | 0;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = removedAnchors.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = removedAnchors.o(index_0);
        // Inline function 'androidx.compose.runtime.SlotWriter.moveAnchors.<anonymous>' call
        var anchorIndex = $this.d22(item);
        var newAnchorIndex = anchorIndex + moveDelta | 0;
        if (newAnchorIndex >= $this.p1x_1) {
          item.w22_1 = -(groupsSize - newAnchorIndex | 0) | 0;
        } else {
          item.w22_1 = newAnchorIndex;
        }
        var insertIndex = locationOf($this.m1x_1, newAnchorIndex, groupsSize);
        $this.m1x_1.g1(insertIndex, item);
      }
       while (inductionVariable <= last);
  }
  function _get_capacity__a9k9f3($this) {
    return $this.k1x_1.length / 5 | 0;
  }
  function groupIndexToAddress($this, index) {
    return index < $this.p1x_1 ? index : index + $this.q1x_1 | 0;
  }
  function dataIndexToDataAddress($this, dataIndex) {
    return dataIndex < $this.t1x_1 ? dataIndex : dataIndex + $this.u1x_1 | 0;
  }
  function parent(_this__u8e3s4, $this, index) {
    return parentAnchorToIndex($this, parentAnchor(_this__u8e3s4, groupIndexToAddress($this, index)));
  }
  function dataIndex($this, index) {
    return dataIndex_0($this.k1x_1, $this, groupIndexToAddress($this, index));
  }
  function dataIndex_0(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.l1x_1.length - $this.u1x_1 | 0 : dataAnchorToDataIndex($this, dataAnchor(_this__u8e3s4, address), $this.u1x_1, $this.l1x_1.length);
  }
  function slotIndex(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.l1x_1.length - $this.u1x_1 | 0 : dataAnchorToDataIndex($this, slotAnchor(_this__u8e3s4, address), $this.u1x_1, $this.l1x_1.length);
  }
  function updateDataIndex(_this__u8e3s4, $this, address, dataIndex) {
    updateDataAnchor(_this__u8e3s4, address, dataIndexToDataAnchor($this, dataIndex, $this.t1x_1, $this.u1x_1, $this.l1x_1.length));
  }
  function nodeIndex(_this__u8e3s4, $this, address) {
    return dataIndex_0(_this__u8e3s4, $this, address);
  }
  function auxIndex(_this__u8e3s4, $this, address) {
    return dataIndex_0(_this__u8e3s4, $this, address) + countOneBits_0(groupInfo(_this__u8e3s4, address) >> 29) | 0;
  }
  function dataIndexToDataAnchor($this, index, gapStart, gapLen, capacity) {
    return index > gapStart ? -(((capacity - gapLen | 0) - index | 0) + 1 | 0) | 0 : index;
  }
  function dataAnchorToDataIndex($this, anchor, gapLen, capacity) {
    return anchor < 0 ? ((capacity - gapLen | 0) + anchor | 0) + 1 | 0 : anchor;
  }
  function parentIndexToAnchor($this, index, gapStart) {
    return index < gapStart ? index : -(($this.q2g() - index | 0) - -2 | 0) | 0;
  }
  function parentAnchorToIndex($this, index) {
    return index > -2 ? index : ($this.q2g() + index | 0) - -2 | 0;
  }
  function SlotWriter(table) {
    this.j1x_1 = table;
    this.k1x_1 = this.j1x_1.f1v_1;
    this.l1x_1 = this.j1x_1.h1v_1;
    this.m1x_1 = this.j1x_1.n1v_1;
    this.n1x_1 = this.j1x_1.o1v_1;
    this.o1x_1 = this.j1x_1.p1v_1;
    this.p1x_1 = this.j1x_1.g1v_1;
    this.q1x_1 = (this.k1x_1.length / 5 | 0) - this.j1x_1.g1v_1 | 0;
    this.r1x_1 = 0;
    this.s1x_1 = 0;
    this.t1x_1 = this.j1x_1.i1v_1;
    this.u1x_1 = this.l1x_1.length - this.j1x_1.i1v_1 | 0;
    this.v1x_1 = this.j1x_1.g1v_1;
    this.w1x_1 = 0;
    this.x1x_1 = 0;
    this.y1x_1 = new IntStack();
    this.z1x_1 = new IntStack();
    this.a1y_1 = new IntStack();
    this.b1y_1 = null;
    this.c1y_1 = 0;
    this.d1y_1 = this.j1x_1.g1v_1;
    this.e1y_1 = -1;
    this.f1y_1 = false;
    this.g1y_1 = null;
  }
  protoOf(SlotWriter).p26 = function () {
    return this.l1x_1.length - this.u1x_1 | 0;
  };
  protoOf(SlotWriter).r25 = function () {
    return this.c1y_1 < this.d1y_1 && isNode(this.k1x_1, groupIndexToAddress(this, this.c1y_1));
  };
  protoOf(SlotWriter).j2h = function () {
    return !(this.n1x_1 == null);
  };
  protoOf(SlotWriter).k2h = function () {
    return !(this.o1x_1 == null);
  };
  protoOf(SlotWriter).i21 = function (index) {
    return isNode(this.k1x_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).j21 = function (index) {
    return nodeCount(this.k1x_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).q1y = function (index) {
    return key(this.k1x_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).r1y = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasObjectKey(this.k1x_1, address) ? this.l1x_1[objectKeyIndex(this.k1x_1, address)] : null;
  };
  protoOf(SlotWriter).m20 = function (index) {
    return groupSize(this.k1x_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).p1y = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasAux(this.k1x_1, address) ? this.l1x_1[auxIndex(this.k1x_1, this, address)] : Companion_getInstance().e1z_1;
  };
  protoOf(SlotWriter).l2h = function (index) {
    return index > this.e1y_1 && index < this.d1y_1 || (this.e1y_1 === 0 && index === 0);
  };
  protoOf(SlotWriter).m2h = function (index) {
    return this.n2h(index, this.c1y_1);
  };
  protoOf(SlotWriter).n2h = function (index, group) {
    var tmp;
    if (group === this.e1y_1) {
      tmp = this.d1y_1;
    } else if (group > this.y1x_1.p2h(0)) {
      tmp = group + this.m20(group) | 0;
    } else {
      var openIndex = this.y1x_1.o2h(group);
      tmp = openIndex < 0 ? group + this.m20(group) | 0 : (_get_capacity__a9k9f3(this) - this.q1x_1 | 0) - this.z1x_1.h21(openIndex) | 0;
    }
    var end = tmp;
    return index > group && index < end;
  };
  protoOf(SlotWriter).d23 = function (index) {
    var address = groupIndexToAddress(this, index);
    return isNode(this.k1x_1, address) ? this.l1x_1[dataIndexToDataAddress(this, nodeIndex(this.k1x_1, this, address))] : null;
  };
  protoOf(SlotWriter).q2h = function (anchor) {
    return this.d23(anchor.r2h(this));
  };
  protoOf(SlotWriter).n1y = function (index) {
    return parent(this.k1x_1, this, index);
  };
  protoOf(SlotWriter).z1y = function (normalClose) {
    this.f1y_1 = true;
    if (normalClose && this.y1x_1.n()) {
      moveGroupGapTo(this, this.q2g());
      moveSlotGapTo(this, this.l1x_1.length - this.u1x_1 | 0, this.p1x_1);
      clearSlotGap(this);
      recalculateMarks(this);
    }
    this.j1x_1.n2g(this, this.k1x_1, this.p1x_1, this.l1x_1, this.t1x_1, this.m1x_1, this.n1x_1, this.o1x_1);
  };
  protoOf(SlotWriter).s2h = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.w1x_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.reset.<anonymous>' call
      var tmp$ret$0 = 'Cannot reset when inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    recalculateMarks(this);
    this.c1y_1 = 0;
    this.d1y_1 = _get_capacity__a9k9f3(this) - this.q1x_1 | 0;
    this.r1x_1 = 0;
    this.s1x_1 = 0;
    this.x1x_1 = 0;
  };
  protoOf(SlotWriter).n25 = function (value) {
    if (this.w1x_1 > 0 && !(this.r1x_1 === this.t1x_1)) {
      // Inline function 'androidx.collection.MutableIntObjectMap.getOrPut' call
      // Inline function 'kotlin.also' call
      var tmp0_elvis_lhs = this.b1y_1;
      var this_0 = tmp0_elvis_lhs == null ? new MutableIntObjectMap() : tmp0_elvis_lhs;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotWriter.update.<anonymous>' call
      this.b1y_1 = this_0;
      var key = this.e1y_1;
      var tmp0_elvis_lhs_0 = this_0.o(key);
      var tmp;
      if (tmp0_elvis_lhs_0 == null) {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.SlotWriter.update.<anonymous>' call
        var this_1 = new MutableObjectList();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.collection.MutableIntObjectMap.getOrPut.<anonymous>' call
        this_0.z1m(key, this_1);
        tmp = this_1;
      } else {
        tmp = tmp0_elvis_lhs_0;
      }
      var deferred = tmp;
      deferred.d(value);
      return Companion_getInstance().e1z_1;
    }
    return rawUpdate(this, value);
  };
  protoOf(SlotWriter).t2h = function (anchor, value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.w1x_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.appendSlot.<anonymous>' call
      var tmp$ret$0 = 'Can only append a slot if not current inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var previousCurrentSlot = this.r1x_1;
    var previousCurrentSlotEnd = this.s1x_1;
    var anchorIndex = this.d22(anchor);
    var slotIndex = dataIndex_0(this.k1x_1, this, groupIndexToAddress(this, anchorIndex + 1 | 0));
    this.r1x_1 = slotIndex;
    this.s1x_1 = slotIndex;
    insertSlots(this, 1, anchorIndex);
    if (previousCurrentSlot >= slotIndex) {
      previousCurrentSlot = previousCurrentSlot + 1 | 0;
      previousCurrentSlotEnd = previousCurrentSlotEnd + 1 | 0;
    }
    this.l1x_1[slotIndex] = value;
    this.r1x_1 = previousCurrentSlot;
    this.s1x_1 = previousCurrentSlotEnd;
  };
  protoOf(SlotWriter).u2h = function (count) {
    runtimeCheck(count > 0);
    var parent = this.e1y_1;
    var groupSlotStart = slotIndex(this.k1x_1, this, groupIndexToAddress(this, parent));
    var groupSlotEnd = dataIndex_0(this.k1x_1, this, groupIndexToAddress(this, parent + 1 | 0));
    var removeStart = groupSlotEnd - count | 0;
    runtimeCheck(removeStart >= groupSlotStart);
    removeSlots(this, removeStart, count, parent);
    var currentSlot = this.r1x_1;
    if (currentSlot >= groupSlotStart) {
      this.r1x_1 = currentSlot - count | 0;
    }
  };
  protoOf(SlotWriter).d2h = function (value) {
    var address = groupIndexToAddress(this, this.c1y_1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!hasAux(this.k1x_1, address)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.updateAux.<anonymous>' call
      var tmp$ret$0 = 'Updating the data of a group that was not created with a data slot';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.l1x_1[dataIndexToDataAddress(this, auxIndex(this.k1x_1, this, address))] = value;
  };
  protoOf(SlotWriter).b26 = function (sourceInformation) {
    if (this.w1x_1 > 0) {
      groupSourceInformationFor(this, this.e1y_1, sourceInformation);
    }
  };
  protoOf(SlotWriter).d26 = function (key, value) {
    if (this.w1x_1 > 0) {
      var tmp0_safe_receiver = this.o1x_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        add_0(tmp0_safe_receiver, key, this.q1y(this.e1y_1));
      }
      var tmp1_safe_receiver = groupSourceInformationFor(this, this.e1y_1, null);
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.v2h(key, value, _get_currentGroupSlotIndex__p1glxf(this));
      }
    }
  };
  protoOf(SlotWriter).f26 = function () {
    if (this.w1x_1 > 0) {
      var tmp0_safe_receiver = groupSourceInformationFor(this, this.e1y_1, null);
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.w2h(_get_currentGroupSlotIndex__p1glxf(this));
      }
    }
  };
  protoOf(SlotWriter).e2h = function (value) {
    return updateNodeOfGroup(this, this.c1y_1, value);
  };
  protoOf(SlotWriter).x2h = function (anchor, value) {
    return updateNodeOfGroup(this, anchor.r2h(this), value);
  };
  protoOf(SlotWriter).a2h = function (value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.r1x_1 <= this.s1x_1)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.set.<anonymous>' call
      var tmp$ret$0 = 'Writing to an invalid slot';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.l1x_1[dataIndexToDataAddress(this, this.r1x_1 - 1 | 0)] = value;
  };
  protoOf(SlotWriter).y2h = function (index, value) {
    return this.z2h(this.c1y_1, index, value);
  };
  protoOf(SlotWriter).a2i = function (group, index) {
    var address = groupIndexToAddress(this, group);
    var slotsStart = slotIndex(this.k1x_1, this, address);
    var slotsEnd = dataIndex_0(this.k1x_1, this, groupIndexToAddress(this, group + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(slotsIndex >= slotsStart && slotsIndex < slotsEnd)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.slotIndexOfGroupSlotIndex.<anonymous>' call
      var tmp$ret$0 = 'Write to an invalid slot index ' + index + ' for group ' + group;
      composeImmediateRuntimeError(tmp$ret$0);
    }
    return slotsIndex;
  };
  protoOf(SlotWriter).z2h = function (group, index, value) {
    var slotsIndex = this.a2i(group, index);
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    var result = this.l1x_1[slotAddress];
    this.l1x_1[slotAddress] = value;
    return result;
  };
  protoOf(SlotWriter).z2g = function () {
    if (this.w1x_1 > 0) {
      insertSlots(this, 1, this.e1y_1);
    }
    var tmp = this.l1x_1;
    var tmp1 = this.r1x_1;
    this.r1x_1 = tmp1 + 1 | 0;
    return tmp[dataIndexToDataAddress(this, tmp1)];
  };
  protoOf(SlotWriter).z2b = function (anchor, index) {
    return this.b2i(this.d22(anchor), index);
  };
  protoOf(SlotWriter).b2i = function (groupIndex, index) {
    var address = groupIndexToAddress(this, groupIndex);
    var slotsStart = slotIndex(this.k1x_1, this, address);
    var slotsEnd = dataIndex_0(this.k1x_1, this, groupIndexToAddress(this, groupIndex + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    if (!(slotsStart <= slotsIndex ? slotsIndex < slotsEnd : false)) {
      return Companion_getInstance().e1z_1;
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    return this.l1x_1[slotAddress];
  };
  protoOf(SlotWriter).c2h = function (groupIndex) {
    return slotIndex(this.k1x_1, this, groupIndexToAddress(this, groupIndex));
  };
  protoOf(SlotWriter).c2i = function (groupIndex) {
    return dataIndex_0(this.k1x_1, this, groupIndexToAddress(this, groupIndex + 1 | 0));
  };
  protoOf(SlotWriter).r26 = function (groupIndex) {
    return dataIndex_0(this.k1x_1, this, groupIndexToAddress(this, groupIndex + this.m20(groupIndex) | 0));
  };
  protoOf(SlotWriter).y2g = function (amount) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(amount >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var tmp$ret$0 = 'Cannot seek backwards';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.w1x_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var tmp$ret$1 = 'Cannot call seek() while inserting';
      throwIllegalStateException(tmp$ret$1);
    }
    if (amount === 0)
      return Unit_instance;
    var index = this.c1y_1 + amount | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= this.e1y_1 && index <= this.d1y_1)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var tmp$ret$2 = 'Cannot seek outside the current group (' + this.e1y_1 + '-' + this.d1y_1 + ')';
      composeImmediateRuntimeError(tmp$ret$2);
    }
    this.c1y_1 = index;
    var newSlot = dataIndex_0(this.k1x_1, this, groupIndexToAddress(this, index));
    this.r1x_1 = newSlot;
    this.s1x_1 = newSlot;
  };
  protoOf(SlotWriter).v1y = function () {
    var newGroup = this.d1y_1;
    this.c1y_1 = newGroup;
    this.r1x_1 = dataIndex_0(this.k1x_1, this, groupIndexToAddress(this, newGroup));
  };
  protoOf(SlotWriter).v1z = function () {
    var tmp1 = this.w1x_1;
    this.w1x_1 = tmp1 + 1 | 0;
    if (tmp1 === 0) {
      saveCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).b21 = function () {
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.w1x_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
      var tmp$ret$0 = 'Unbalanced begin/end insert';
      throwIllegalStateException(tmp$ret$0);
    }
    this.w1x_1 = this.w1x_1 - 1 | 0;
    if (this.w1x_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this.a1y_1.l() === this.y1x_1.l())) {
        // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
        var tmp$ret$1 = 'startGroup/endGroup mismatch while inserting';
        composeImmediateRuntimeError(tmp$ret$1);
      }
      restoreCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).c1z = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.w1x_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.startGroup.<anonymous>' call
      var tmp$ret$0 = 'Key must be supplied when inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    startGroup_1(this, 0, Companion_getInstance().e1z_1, false, Companion_getInstance().e1z_1);
  };
  protoOf(SlotWriter).g1z = function (key, dataKey) {
    return startGroup_1(this, key, dataKey, false, Companion_getInstance().e1z_1);
  };
  protoOf(SlotWriter).i1z = function (key, objectKey) {
    return startGroup_1(this, key, objectKey, true, Companion_getInstance().e1z_1);
  };
  protoOf(SlotWriter).h1z = function (key, objectKey, aux) {
    return startGroup_1(this, key, objectKey, false, aux);
  };
  protoOf(SlotWriter).a21 = function () {
    var inserting = this.w1x_1 > 0;
    var currentGroup = this.c1y_1;
    var currentGroupEnd = this.d1y_1;
    var groupIndex = this.e1y_1;
    var groupAddress = groupIndexToAddress(this, groupIndex);
    var newNodes = this.x1x_1;
    var newGroupSize = currentGroup - groupIndex | 0;
    var isNode_0 = isNode(this.k1x_1, groupAddress);
    if (inserting) {
      var deferredSlotWrites = this.b1y_1;
      var tmp1_safe_receiver = deferredSlotWrites == null ? null : deferredSlotWrites.o(groupIndex);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotWriter.endGroup.<anonymous>' call
        // Inline function 'androidx.collection.ObjectList.forEach' call
        // Inline function 'kotlin.contracts.contract' call
        var content = tmp1_safe_receiver.b1o_1;
        var inductionVariable = 0;
        var last = tmp1_safe_receiver.c1o_1;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.SlotWriter.endGroup.<anonymous>.<anonymous>' call
            var tmp = content[i];
            var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
            rawUpdate(this, value);
          }
           while (inductionVariable < last);
        deferredSlotWrites.a1n(groupIndex);
      }
      updateGroupSize(this.k1x_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.k1x_1, groupAddress, newNodes);
      this.x1x_1 = this.a1y_1.f1x() + (isNode_0 ? 1 : newNodes) | 0;
      this.e1y_1 = parent(this.k1x_1, this, groupIndex);
      var nextAddress = this.e1y_1 < 0 ? this.q2g() : groupIndexToAddress(this, this.e1y_1 + 1 | 0);
      var newCurrentSlot = nextAddress < 0 ? 0 : dataIndex_0(this.k1x_1, this, nextAddress);
      this.r1x_1 = newCurrentSlot;
      this.s1x_1 = newCurrentSlot;
    } else {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(currentGroup === currentGroupEnd)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.endGroup.<anonymous>' call
        var tmp$ret$2 = 'Expected to be at the end of a group';
        composeImmediateRuntimeError(tmp$ret$2);
      }
      var oldGroupSize = groupSize(this.k1x_1, groupAddress);
      var oldNodes = nodeCount(this.k1x_1, groupAddress);
      updateGroupSize(this.k1x_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.k1x_1, groupAddress, newNodes);
      var newParent = this.y1x_1.f1x();
      restoreCurrentGroupEnd(this);
      this.e1y_1 = newParent;
      var groupParent = parent(this.k1x_1, this, groupIndex);
      this.x1x_1 = this.a1y_1.f1x();
      if (groupParent === newParent) {
        this.x1x_1 = this.x1x_1 + (isNode_0 ? 0 : newNodes - oldNodes | 0) | 0;
      } else {
        var groupSizeDelta = newGroupSize - oldGroupSize | 0;
        var nodesDelta = isNode_0 ? 0 : newNodes - oldNodes | 0;
        if (!(groupSizeDelta === 0) || !(nodesDelta === 0)) {
          var current = groupParent;
          while (!(current === 0) && !(current === newParent) && (!(nodesDelta === 0) || !(groupSizeDelta === 0))) {
            var currentAddress = groupIndexToAddress(this, current);
            if (!(groupSizeDelta === 0)) {
              var newSize = groupSize(this.k1x_1, currentAddress) + groupSizeDelta | 0;
              updateGroupSize(this.k1x_1, currentAddress, newSize);
            }
            if (!(nodesDelta === 0)) {
              updateNodeCount_0(this.k1x_1, currentAddress, nodeCount(this.k1x_1, currentAddress) + nodesDelta | 0);
            }
            if (isNode(this.k1x_1, currentAddress))
              nodesDelta = 0;
            current = parent(this.k1x_1, this, current);
          }
        }
        this.x1x_1 = this.x1x_1 + nodesDelta | 0;
      }
    }
    return newNodes;
  };
  protoOf(SlotWriter).d2i = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.w1x_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
      var tmp$ret$0 = 'Cannot call ensureStarted() while inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var parent = this.e1y_1;
    if (!(parent === index)) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(index >= parent && index < this.d1y_1)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
        var tmp$ret$1 = 'Started group at ' + index + ' must be a subgroup of the group at ' + parent;
        composeImmediateRuntimeError(tmp$ret$1);
      }
      var oldCurrent = this.c1y_1;
      var oldCurrentSlot = this.r1x_1;
      var oldCurrentSlotEnd = this.s1x_1;
      this.c1y_1 = index;
      this.c1z();
      this.c1y_1 = oldCurrent;
      this.r1x_1 = oldCurrentSlot;
      this.s1x_1 = oldCurrentSlotEnd;
    }
  };
  protoOf(SlotWriter).e2i = function (anchor) {
    return this.d2i(anchor.r2h(this));
  };
  protoOf(SlotWriter).k1y = function () {
    var groupAddress = groupIndexToAddress(this, this.c1y_1);
    var newGroup = this.c1y_1 + groupSize(this.k1x_1, groupAddress) | 0;
    this.c1y_1 = newGroup;
    this.r1x_1 = dataIndex_0(this.k1x_1, this, groupIndexToAddress(this, newGroup));
    return isNode(this.k1x_1, groupAddress) ? 1 : nodeCount(this.k1x_1, groupAddress);
  };
  protoOf(SlotWriter).v26 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.w1x_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>' call
      var tmp$ret$0 = 'Cannot remove group while inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var oldGroup = this.c1y_1;
    var oldSlot = this.r1x_1;
    var dataStart = dataIndex_0(this.k1x_1, this, groupIndexToAddress(this, oldGroup));
    var count = this.k1y();
    var tmp0_safe_receiver = sourceInformationOf(this, this.e1y_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>' call
      var tmp0_safe_receiver_0 = this.i2h(oldGroup);
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>.<anonymous>' call
        tmp = tmp0_safe_receiver.f2i(tmp0_safe_receiver_0);
      }
    }
    var tmp1_safe_receiver = this.g1y_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      while (tmp1_safe_receiver.b1q() && tmp1_safe_receiver.u24() >= oldGroup) {
        tmp1_safe_receiver.g2h();
      }
    }
    var anchorsRemoved = removeGroups(this, oldGroup, this.c1y_1 - oldGroup | 0);
    removeSlots(this, dataStart, this.r1x_1 - dataStart | 0, oldGroup - 1 | 0);
    this.c1y_1 = oldGroup;
    this.r1x_1 = oldSlot;
    this.x1x_1 = this.x1x_1 - count | 0;
    return anchorsRemoved;
  };
  protoOf(SlotWriter).g2i = function (offset) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.w1x_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var tmp$ret$0 = 'Cannot move a group while inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(offset >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var tmp$ret$1 = 'Parameter offset is out of bounds';
      composeImmediateRuntimeError(tmp$ret$1);
    }
    if (offset === 0)
      return Unit_instance;
    var current = this.c1y_1;
    var parent = this.e1y_1;
    var parentEnd = this.d1y_1;
    var count = offset;
    var groupToMove = current;
    while (count > 0) {
      groupToMove = groupToMove + groupSize(this.k1x_1, groupIndexToAddress(this, groupToMove)) | 0;
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(groupToMove <= parentEnd)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
        var tmp$ret$2 = 'Parameter offset is out of bounds';
        composeImmediateRuntimeError(tmp$ret$2);
      }
      count = count - 1 | 0;
    }
    var moveLen = groupSize(this.k1x_1, groupIndexToAddress(this, groupToMove));
    var destinationSlot = dataIndex_0(this.k1x_1, this, groupIndexToAddress(this, this.c1y_1));
    var dataStart = dataIndex_0(this.k1x_1, this, groupIndexToAddress(this, groupToMove));
    var dataEnd = dataIndex_0(this.k1x_1, this, groupIndexToAddress(this, groupToMove + moveLen | 0));
    var moveDataLen = dataEnd - dataStart | 0;
    // Inline function 'kotlin.math.max' call
    var a = this.c1y_1 - 1 | 0;
    var tmp$ret$3 = Math.max(a, 0);
    insertSlots(this, moveDataLen, tmp$ret$3);
    insertGroups(this, moveLen);
    var groups = this.k1x_1;
    var moveLocationAddress = groupIndexToAddress(this, groupToMove + moveLen | 0);
    var moveLocationOffset = imul(moveLocationAddress, 5);
    var currentAddress = groupIndexToAddress(this, current);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = imul(currentAddress, 5);
    var endIndex = moveLocationOffset + imul(moveLen, 5) | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = groups;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, groups, destinationOffset, moveLocationOffset, endIndex);
    if (moveDataLen > 0) {
      var slots = this.l1x_1;
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = dataIndexToDataAddress(this, dataStart + moveDataLen | 0);
      var endIndex_0 = dataIndexToDataAddress(this, dataEnd + moveDataLen | 0);
      arrayCopy(slots, slots, destinationSlot, startIndex, endIndex_0);
    }
    var dataMoveDistance = (dataStart + moveDataLen | 0) - destinationSlot | 0;
    var slotsGapStart = this.t1x_1;
    var slotsGapLen = this.u1x_1;
    var slotsCapacity = this.l1x_1.length;
    var slotsGapOwner = this.v1x_1;
    var inductionVariable = current;
    var last = current + moveLen | 0;
    if (inductionVariable < last)
      do {
        var group = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var groupAddress = groupIndexToAddress(this, group);
        var oldIndex = dataIndex_0(groups, this, groupAddress);
        var newIndex = oldIndex - dataMoveDistance | 0;
        var newAnchor = dataIndexToDataAnchor(this, newIndex, slotsGapOwner < groupAddress ? 0 : slotsGapStart, slotsGapLen, slotsCapacity);
        updateDataIndex(groups, this, groupAddress, newAnchor);
      }
       while (inductionVariable < last);
    moveAnchors(this, groupToMove + moveLen | 0, current, moveLen);
    var anchorsRemoved = removeGroups(this, groupToMove + moveLen | 0, moveLen);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!anchorsRemoved) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var tmp$ret$10 = 'Unexpectedly removed anchors';
      composeImmediateRuntimeError(tmp$ret$10);
    }
    fixParentAnchorsFor(this, parent, this.d1y_1, current);
    if (moveDataLen > 0) {
      removeSlots(this, dataStart + moveDataLen | 0, moveDataLen, (groupToMove + moveLen | 0) - 1 | 0);
    }
  };
  protoOf(SlotWriter).h2i = function (anchor, offset, writer) {
    runtimeCheck(writer.w1x_1 > 0);
    runtimeCheck(this.w1x_1 === 0);
    runtimeCheck(anchor.s26());
    var location = this.d22(anchor) + offset | 0;
    var currentGroup = this.c1y_1;
    runtimeCheck(currentGroup <= location ? location < this.d1y_1 : false);
    var parent = this.n1y(location);
    var size = this.m20(location);
    var nodes = this.i21(location) ? 1 : this.j21(location);
    var result = moveGroup$default(Companion_instance_4, this, location, writer, false, false);
    updateContainsMark(this, parent);
    var current = parent;
    var updatingNodes = nodes > 0;
    while (current >= currentGroup) {
      var currentAddress = groupIndexToAddress(this, current);
      updateGroupSize(this.k1x_1, currentAddress, groupSize(this.k1x_1, currentAddress) - size | 0);
      if (updatingNodes) {
        if (isNode(this.k1x_1, currentAddress))
          updatingNodes = false;
        else {
          updateNodeCount_0(this.k1x_1, currentAddress, nodeCount(this.k1x_1, currentAddress) - nodes | 0);
        }
      }
      current = this.n1y(current);
    }
    if (updatingNodes) {
      runtimeCheck(this.x1x_1 >= nodes);
      this.x1x_1 = this.x1x_1 - nodes | 0;
    }
    return result;
  };
  protoOf(SlotWriter).i2i = function (table, index, removeSourceGroup) {
    runtimeCheck(this.w1x_1 > 0);
    if (index === 0 && this.c1y_1 === 0 && this.j1x_1.g1v_1 === 0 && groupSize(table.f1v_1, index) === table.g1v_1) {
      var myGroups = this.k1x_1;
      var mySlots = this.l1x_1;
      var myAnchors = this.m1x_1;
      var mySourceInformation = this.n1x_1;
      var myCallInformation = this.o1x_1;
      var groups = table.f1v_1;
      var groupsSize = table.g1v_1;
      var slots = table.h1v_1;
      var slotsSize = table.i1v_1;
      var sourceInformation = table.o1v_1;
      var callInformation = table.p1v_1;
      this.k1x_1 = groups;
      this.l1x_1 = slots;
      this.m1x_1 = table.n1v_1;
      this.p1x_1 = groupsSize;
      this.q1x_1 = (groups.length / 5 | 0) - groupsSize | 0;
      this.t1x_1 = slotsSize;
      this.u1x_1 = slots.length - slotsSize | 0;
      this.v1x_1 = groupsSize;
      this.n1x_1 = sourceInformation;
      this.o1x_1 = callInformation;
      table.o2g(myGroups, 0, mySlots, 0, myAnchors, mySourceInformation, myCallInformation);
      return this.m1x_1;
    }
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = table.u1y();
    var normalClose = false;
    var tmp;
    try {
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.SlotWriter.moveFrom.<anonymous>' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
      normalClose = true;
      tmp = moveGroup(Companion_instance_4, writer, index, this, true, true, removeSourceGroup);
    }finally {
      writer.z1y(normalClose);
    }
    return tmp;
  };
  protoOf(SlotWriter).j2i = function (offset, table, index) {
    runtimeCheck(this.w1x_1 <= 0 && this.m20(this.c1y_1 + offset | 0) === 1);
    var previousCurrentGroup = this.c1y_1;
    var previousCurrentSlot = this.r1x_1;
    var previousCurrentSlotEnd = this.s1x_1;
    this.y2g(offset);
    this.c1z();
    this.v1z();
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = table.u1y();
    var normalClose = false;
    var tmp;
    try {
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.SlotWriter.moveIntoGroupFrom.<anonymous>' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
      normalClose = true;
      tmp = moveGroup$default(Companion_instance_4, writer, index, this, false, true);
    }finally {
      writer.z1y(normalClose);
    }
    var anchors = tmp;
    this.b21();
    this.a21();
    this.c1y_1 = previousCurrentGroup;
    this.r1x_1 = previousCurrentSlot;
    this.s1x_1 = previousCurrentSlotEnd;
    return anchors;
  };
  protoOf(SlotWriter).o1y = function (index) {
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var this_0 = this.m1x_1;
    var effectiveSize = this.q2g();
    var location = search$accessor$145qfty(this_0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotWriter.anchor.<anonymous>' call
      var anchor = new Anchor(index <= this.p1x_1 ? index : -(this.q2g() - index | 0) | 0);
      this_0.g1(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = this_0.o(location);
    }
    return tmp;
  };
  protoOf(SlotWriter).k2i = function (group) {
    var groupAddress = groupIndexToAddress(this, group);
    if (!hasMark(this.k1x_1, groupAddress)) {
      updateMark(this.k1x_1, groupAddress, true);
      if (!containsMark(this.k1x_1, groupAddress)) {
        updateContainsMark(this, this.n1y(group));
      }
    }
  };
  protoOf(SlotWriter).s21 = function (group, $super) {
    group = group === VOID ? this.e1y_1 : group;
    var tmp;
    if ($super === VOID) {
      this.k2i(group);
      tmp = Unit_instance;
    } else {
      tmp = $super.k2i.call(this, group);
    }
    return tmp;
  };
  protoOf(SlotWriter).d22 = function (anchor) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.anchorIndex.<anonymous>' call
    var it = anchor.w22_1;
    return it < 0 ? this.q2g() + it | 0 : it;
  };
  protoOf(SlotWriter).toString = function () {
    return 'SlotWriter(current = ' + this.c1y_1 + ' end=' + this.d1y_1 + ' size = ' + this.q2g() + ' ' + ('gap=' + this.p1x_1 + '-' + (this.p1x_1 + this.q1x_1 | 0) + ')');
  };
  protoOf(SlotWriter).i2h = function (group) {
    return (0 <= group ? group < this.q2g() : false) ? find(this.m1x_1, group, this.q2g()) : null;
  };
  protoOf(SlotWriter).q2g = function () {
    return _get_capacity__a9k9f3(this) - this.q1x_1 | 0;
  };
  function Anchor(loc) {
    this.w22_1 = loc;
  }
  protoOf(Anchor).s26 = function () {
    return !(this.w22_1 === -2147483648);
  };
  protoOf(Anchor).q25 = function (slots) {
    return slots.d22(this);
  };
  protoOf(Anchor).r2h = function (writer) {
    return writer.d22(this);
  };
  protoOf(Anchor).toString = function () {
    return anyToString(this) + '{ location = ' + this.w22_1 + ' }';
  };
  function openInformation($this) {
    var tmp0_safe_receiver = $this.u2g_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.GroupSourceInformation.openInformation.<anonymous>' call
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.fastLastOrNull' call
        var index = tmp0_safe_receiver.l() - 1 | 0;
        while (index >= 0) {
          var value = tmp0_safe_receiver.o(index);
          // Inline function 'androidx.compose.runtime.GroupSourceInformation.openInformation.<anonymous>.<anonymous>' call
          var tmp_0;
          if (value instanceof GroupSourceInformation) {
            tmp_0 = !value.v2g_1;
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$1 = value;
            break $l$block;
          }
          index = index - 1 | 0;
        }
        tmp$ret$1 = null;
      }
      tmp = tmp$ret$1;
    }
    var tmp_1 = tmp;
    var tmp1_safe_receiver = tmp_1 instanceof GroupSourceInformation ? tmp_1 : null;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : openInformation(tmp1_safe_receiver);
    return tmp2_elvis_lhs == null ? $this : tmp2_elvis_lhs;
  }
  function add($this, group) {
    var tmp0_elvis_lhs = $this.u2g_1;
    var groups = tmp0_elvis_lhs == null ? ArrayList_init_$Create$() : tmp0_elvis_lhs;
    $this.u2g_1 = groups;
    groups.d(group);
  }
  function hasAnchor($this, anchor) {
    var tmp0_safe_receiver = $this.u2g_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.l() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = tmp0_safe_receiver.o(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
            // Inline function 'androidx.compose.runtime.GroupSourceInformation.hasAnchor.<anonymous>' call
            var tmp_0;
            if (equals(item, anchor)) {
              tmp_0 = true;
            } else {
              var tmp_1;
              if (item instanceof GroupSourceInformation) {
                tmp_1 = hasAnchor(item, anchor);
              } else {
                tmp_1 = false;
              }
              tmp_0 = tmp_1;
            }
            if (tmp_0) {
              tmp$ret$1 = true;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$1 = false;
      }
      tmp = tmp$ret$1;
    }
    return tmp === true;
  }
  function GroupSourceInformation(key, sourceInformation, dataStartOffset) {
    this.r2g_1 = key;
    this.s2g_1 = sourceInformation;
    this.t2g_1 = dataStartOffset;
    this.u2g_1 = null;
    this.v2g_1 = false;
    this.w2g_1 = 0;
  }
  protoOf(GroupSourceInformation).v2h = function (key, sourceInformation, dataOffset) {
    add(openInformation(this), new GroupSourceInformation(key, sourceInformation, dataOffset));
  };
  protoOf(GroupSourceInformation).w2h = function (dataOffset) {
    openInformation(this).xn(dataOffset);
  };
  protoOf(GroupSourceInformation).b2h = function (writer, group) {
    add(openInformation(this), writer.o1y(group));
  };
  protoOf(GroupSourceInformation).l2i = function (table, group) {
    add(openInformation(this), table.o1y(group));
  };
  protoOf(GroupSourceInformation).x2g = function (writer, predecessor, group) {
    var tmp0_elvis_lhs = this.u2g_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = ArrayList_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.GroupSourceInformation.addGroupAfter.<anonymous>' call
      this.u2g_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var groups = tmp;
    var tmp_0;
    if (predecessor >= 0) {
      var anchor = writer.i2h(predecessor);
      var tmp_1;
      if (!(anchor == null)) {
        var tmp$ret$2;
        $l$block: {
          // Inline function 'androidx.compose.runtime.fastIndexOf' call
          var index = 0;
          var size = groups.l();
          while (index < size) {
            var value = groups.o(index);
            // Inline function 'androidx.compose.runtime.GroupSourceInformation.addGroupAfter.<anonymous>' call
            var tmp_2;
            if (equals(value, anchor)) {
              tmp_2 = true;
            } else {
              var tmp_3;
              if (value instanceof GroupSourceInformation) {
                tmp_3 = hasAnchor(value, anchor);
              } else {
                tmp_3 = false;
              }
              tmp_2 = tmp_3;
            }
            if (tmp_2) {
              tmp$ret$2 = index;
              break $l$block;
            }
            index = index + 1 | 0;
          }
          tmp$ret$2 = -1;
        }
        tmp_1 = tmp$ret$2;
      } else {
        tmp_1 = 0;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = 0;
    }
    var index_0 = tmp_0;
    groups.g1(index_0, writer.o1y(group));
  };
  protoOf(GroupSourceInformation).xn = function (dataOffset) {
    this.v2g_1 = true;
    this.w2g_1 = dataOffset;
  };
  protoOf(GroupSourceInformation).f2i = function (anchor) {
    var groups = this.u2g_1;
    if (!(groups == null)) {
      var index = groups.l() - 1 | 0;
      while (index >= 0) {
        var item = groups.o(index);
        if (item instanceof Anchor) {
          if (equals(item, anchor)) {
            groups.h1(index);
          }
        } else {
          if (item instanceof GroupSourceInformation)
            if (!item.f2i(anchor)) {
              groups.h1(index);
            }
        }
        index = index - 1 | 0;
      }
      if (groups.n()) {
        this.u2g_1 = null;
        return false;
      }
      return true;
    }
    return true;
  };
  function node(_this__u8e3s4, $this, index) {
    var tmp;
    if (isNode(_this__u8e3s4, index)) {
      tmp = $this.s1w_1[nodeIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance().e1z_1;
    }
    return tmp;
  }
  function aux(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasAux(_this__u8e3s4, index)) {
      tmp = $this.s1w_1[auxIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance().e1z_1;
    }
    return tmp;
  }
  function objectKey(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasObjectKey(_this__u8e3s4, index)) {
      tmp = $this.s1w_1[objectKeyIndex(_this__u8e3s4, index)];
    } else {
      tmp = null;
    }
    return tmp;
  }
  function SlotReader(table) {
    this.p1w_1 = table;
    this.q1w_1 = this.p1w_1.f1v_1;
    this.r1w_1 = this.p1w_1.g1v_1;
    this.s1w_1 = this.p1w_1.h1v_1;
    this.t1w_1 = this.p1w_1.i1v_1;
    this.u1w_1 = null;
    this.v1w_1 = false;
    this.w1w_1 = 0;
    this.x1w_1 = this.r1w_1;
    this.y1w_1 = -1;
    this.z1w_1 = new IntStack();
    this.a1x_1 = 0;
    this.b1x_1 = 0;
    this.c1x_1 = 0;
    this.d1x_1 = false;
  }
  protoOf(SlotReader).l = function () {
    return this.r1w_1;
  };
  protoOf(SlotReader).n1y = function (index) {
    return parentAnchor(this.q1w_1, index);
  };
  protoOf(SlotReader).r25 = function () {
    return isNode(this.q1w_1, this.w1w_1);
  };
  protoOf(SlotReader).i21 = function (index) {
    return isNode(this.q1w_1, index);
  };
  protoOf(SlotReader).j21 = function (index) {
    return nodeCount(this.q1w_1, index);
  };
  protoOf(SlotReader).d23 = function (index) {
    return isNode(this.q1w_1, index) ? node(this.q1w_1, this, index) : null;
  };
  protoOf(SlotReader).s20 = function () {
    return this.d21() || this.w1w_1 === this.x1w_1;
  };
  protoOf(SlotReader).d21 = function () {
    return this.a1x_1 > 0;
  };
  protoOf(SlotReader).m2i = function () {
    return groupSize(this.q1w_1, this.w1w_1);
  };
  protoOf(SlotReader).m20 = function (index) {
    return groupSize(this.q1w_1, index);
  };
  protoOf(SlotReader).r20 = function () {
    return this.x1w_1;
  };
  protoOf(SlotReader).r1z = function () {
    var tmp;
    if (this.w1w_1 < this.x1w_1) {
      tmp = key(this.q1w_1, this.w1w_1);
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(SlotReader).q1y = function (index) {
    return key(this.q1w_1, index);
  };
  protoOf(SlotReader).j25 = function () {
    return this.b1x_1 - slotAnchor(this.q1w_1, this.y1w_1) | 0;
  };
  protoOf(SlotReader).k21 = function (index) {
    return hasObjectKey(this.q1w_1, index);
  };
  protoOf(SlotReader).n24 = function () {
    return this.w1w_1 < this.x1w_1 && hasObjectKey(this.q1w_1, this.w1w_1);
  };
  protoOf(SlotReader).t1z = function () {
    return this.w1w_1 < this.x1w_1 ? objectKey(this.q1w_1, this, this.w1w_1) : null;
  };
  protoOf(SlotReader).r1y = function (index) {
    return objectKey(this.q1w_1, this, index);
  };
  protoOf(SlotReader).b1z = function () {
    return this.w1w_1 < this.x1w_1 ? aux(this.q1w_1, this, this.w1w_1) : 0;
  };
  protoOf(SlotReader).p1y = function (index) {
    return aux(this.q1w_1, this, index);
  };
  protoOf(SlotReader).b24 = function (index) {
    return hasMark(this.q1w_1, index);
  };
  protoOf(SlotReader).l23 = function (index) {
    return containsMark(this.q1w_1, index);
  };
  protoOf(SlotReader).m21 = function () {
    return this.y1w_1 >= 0 ? nodeCount(this.q1w_1, this.y1w_1) : 0;
  };
  protoOf(SlotReader).u20 = function () {
    return this.c1x_1 - this.b1x_1 | 0;
  };
  protoOf(SlotReader).m23 = function (group, index) {
    var start = slotAnchor(this.q1w_1, group);
    var next = group + 1 | 0;
    var end = next < this.r1w_1 ? dataAnchor(this.q1w_1, next) : this.t1w_1;
    var address = start + index | 0;
    return address < end ? this.s1w_1[address] : Companion_getInstance().e1z_1;
  };
  protoOf(SlotReader).k = function () {
    if (this.a1x_1 > 0 || this.b1x_1 >= this.c1x_1) {
      this.d1x_1 = false;
      return Companion_getInstance().e1z_1;
    }
    this.d1x_1 = true;
    var tmp1 = this.b1x_1;
    this.b1x_1 = tmp1 + 1 | 0;
    return this.s1w_1[tmp1];
  };
  protoOf(SlotReader).f1z = function () {
    this.a1x_1 = this.a1x_1 + 1 | 0;
  };
  protoOf(SlotReader).z20 = function () {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.a1x_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.endEmpty.<anonymous>' call
      var tmp$ret$0 = 'Unbalanced begin/end empty';
      throwIllegalArgumentException(tmp$ret$0);
    }
    this.a1x_1 = this.a1x_1 - 1 | 0;
  };
  protoOf(SlotReader).e1x = function () {
    this.v1w_1 = true;
    this.p1w_1.m2g(this, this.u1w_1);
  };
  protoOf(SlotReader).c1z = function () {
    if (this.a1x_1 <= 0) {
      var parent = this.y1w_1;
      var currentGroup = this.w1w_1;
      // Inline function 'androidx.compose.runtime.requirePrecondition' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(parentAnchor(this.q1w_1, currentGroup) === parent)) {
        // Inline function 'androidx.compose.runtime.SlotReader.startGroup.<anonymous>' call
        var tmp$ret$0 = 'Invalid slot table detected';
        throwIllegalArgumentException(tmp$ret$0);
      }
      var tmp0_safe_receiver = this.u1w_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n1(this.o1y(parent));
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.l2i(this.p1w_1, currentGroup);
      }
      var currentSlotStack = this.z1w_1;
      var currentSlot = this.b1x_1;
      var currentEndSlot = this.c1x_1;
      if (currentSlot === 0 && currentEndSlot === 0) {
        currentSlotStack.v1v(-1);
      } else {
        currentSlotStack.v1v(currentSlot);
      }
      this.y1w_1 = currentGroup;
      this.x1w_1 = currentGroup + groupSize(this.q1w_1, currentGroup) | 0;
      this.w1w_1 = currentGroup + 1 | 0;
      this.b1x_1 = slotAnchor(this.q1w_1, currentGroup);
      this.c1x_1 = currentGroup >= (this.r1w_1 - 1 | 0) ? this.t1w_1 : dataAnchor(this.q1w_1, currentGroup + 1 | 0);
    }
  };
  protoOf(SlotReader).d1z = function () {
    if (this.a1x_1 <= 0) {
      // Inline function 'androidx.compose.runtime.requirePrecondition' call
      // Inline function 'kotlin.contracts.contract' call
      if (!isNode(this.q1w_1, this.w1w_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.startNode.<anonymous>' call
        var tmp$ret$0 = 'Expected a node group';
        throwIllegalArgumentException(tmp$ret$0);
      }
      this.c1z();
    }
  };
  protoOf(SlotReader).k1y = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.a1x_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.skipGroup.<anonymous>' call
      var tmp$ret$0 = 'Cannot skip while in an empty region';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var count = isNode(this.q1w_1, this.w1w_1) ? 1 : nodeCount(this.q1w_1, this.w1w_1);
    this.w1w_1 = this.w1w_1 + groupSize(this.q1w_1, this.w1w_1) | 0;
    return count;
  };
  protoOf(SlotReader).v1y = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.a1x_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.skipToGroupEnd.<anonymous>' call
      var tmp$ret$0 = 'Cannot skip the enclosing group while in an empty region';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.w1w_1 = this.x1w_1;
    this.b1x_1 = 0;
    this.c1x_1 = 0;
  };
  protoOf(SlotReader).f20 = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.a1x_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.reposition.<anonymous>' call
      var tmp$ret$0 = 'Cannot reposition while in an empty region';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.w1w_1 = index;
    var parent = index < this.r1w_1 ? parentAnchor(this.q1w_1, index) : -1;
    this.y1w_1 = parent;
    if (parent < 0)
      this.x1w_1 = this.r1w_1;
    else
      this.x1w_1 = parent + groupSize(this.q1w_1, parent) | 0;
    this.b1x_1 = 0;
    this.c1x_1 = 0;
  };
  protoOf(SlotReader).g21 = function (index) {
    var newCurrentEnd = index + groupSize(this.q1w_1, index) | 0;
    var current = this.w1w_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(current >= index && current <= newCurrentEnd)) {
      // Inline function 'androidx.compose.runtime.SlotReader.restoreParent.<anonymous>' call
      var tmp$ret$0 = 'Index ' + index + ' is not a parent of ' + current;
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.y1w_1 = index;
    this.x1w_1 = newCurrentEnd;
    this.b1x_1 = 0;
    this.c1x_1 = 0;
  };
  protoOf(SlotReader).x20 = function () {
    if (this.a1x_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this.w1w_1 === this.x1w_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.endGroup.<anonymous>' call
        var tmp$ret$0 = 'endGroup() not called at the end of a group';
        composeImmediateRuntimeError(tmp$ret$0);
      }
      var parent = parentAnchor(this.q1w_1, this.y1w_1);
      this.y1w_1 = parent;
      this.x1w_1 = parent < 0 ? this.r1w_1 : parent + groupSize(this.q1w_1, parent) | 0;
      var currentSlotStack = this.z1w_1;
      var newCurrentSlot = currentSlotStack.f1x();
      if (newCurrentSlot < 0) {
        this.b1x_1 = 0;
        this.c1x_1 = 0;
      } else {
        this.b1x_1 = newCurrentSlot;
        this.c1x_1 = parent >= (this.r1w_1 - 1 | 0) ? this.t1w_1 : dataAnchor(this.q1w_1, parent + 1 | 0);
      }
    }
  };
  protoOf(SlotReader).s1z = function () {
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    if (this.a1x_1 > 0)
      return result;
    var index = 0;
    var childIndex = this.w1w_1;
    while (childIndex < this.x1w_1) {
      var tmp = key(this.q1w_1, childIndex);
      var tmp_0 = objectKey(this.q1w_1, this, childIndex);
      var tmp_1 = childIndex;
      var tmp_2 = isNode(this.q1w_1, childIndex) ? 1 : nodeCount(this.q1w_1, childIndex);
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      result.d(new KeyInfo(tmp, tmp_0, tmp_1, tmp_2, tmp0));
      childIndex = childIndex + groupSize(this.q1w_1, childIndex) | 0;
    }
    return result;
  };
  protoOf(SlotReader).toString = function () {
    return 'SlotReader(current=' + this.w1w_1 + ', key=' + this.r1z() + ', ' + ('parent=' + this.y1w_1 + ', end=' + this.x1w_1 + ')');
  };
  protoOf(SlotReader).o1y = function (index) {
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var this_0 = this.p1w_1.n1v_1;
    var effectiveSize = this.r1w_1;
    var location = search$accessor$145qfty(this_0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotReader.anchor.<anonymous>' call
      var anchor = new Anchor(index);
      this_0.g1(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = this_0.o(location);
    }
    return tmp;
  };
  function find(_this__u8e3s4, index, effectiveSize) {
    var location = search$accessor$145qfty(_this__u8e3s4, index, effectiveSize);
    return location >= 0 ? _this__u8e3s4.o(location) : null;
  }
  function search(_this__u8e3s4, location, effectiveSize) {
    var low = 0;
    var high = _this__u8e3s4.l() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.search.<anonymous>' call
      var it = _this__u8e3s4.o(mid).w22_1;
      var midVal = it < 0 ? effectiveSize + it | 0 : it;
      var cmp = compareTo(midVal, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function groupSize(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 3 | 0];
  }
  function containsMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 67108864) === 0);
  }
  function parentAnchor(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 2 | 0];
  }
  function dataAnchor(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 4 | 0];
  }
  function slotAnchor(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.slotAnchor.<anonymous>' call
    var slot = imul(address, 5);
    return _this__u8e3s4[slot + 4 | 0] + countOneBits_0(_this__u8e3s4[slot + 1 | 0] >> 28) | 0;
  }
  function hasAux(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 268435456) === 0);
  }
  function hasObjectKey(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 536870912) === 0);
  }
  function isNode(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 1073741824) === 0);
  }
  function nodeIndex_0(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 4 | 0];
  }
  function nodeCount(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 1 | 0] & 67108863;
  }
  function containsAnyMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 201326592) === 0);
  }
  function key(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5)];
  }
  function hasMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 134217728) === 0);
  }
  function objectKeyIndex(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.objectKeyIndex.<anonymous>' call
    var slot = imul(address, 5);
    return _this__u8e3s4[slot + 4 | 0] + countOneBits_0(_this__u8e3s4[slot + 1 | 0] >> 30) | 0;
  }
  function auxIndex_0(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.auxIndex.<anonymous>' call
    var slot = imul(address, 5);
    return slot >= _this__u8e3s4.length ? _this__u8e3s4.length : _this__u8e3s4[slot + 4 | 0] + countOneBits_0(_this__u8e3s4[slot + 1 | 0] >> 29) | 0;
  }
  function validateRead($this) {
    if (!($this.n2i_1.m1v_1 === $this.q2i_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function GroupIterator(table, start, end) {
    this.n2i_1 = table;
    this.o2i_1 = end;
    this.p2i_1 = start;
    this.q2i_1 = this.n2i_1.m1v_1;
    if (this.n2i_1.l1v_1)
      throw ConcurrentModificationException_init_$Create$();
  }
  protoOf(GroupIterator).j = function () {
    return this.p2i_1 < this.o2i_1;
  };
  protoOf(GroupIterator).k = function () {
    validateRead(this);
    var group = this.p2i_1;
    this.p2i_1 = this.p2i_1 + groupSize(this.n2i_1.f1v_1, group) | 0;
    return new SlotTableGroup(this.n2i_1, group, this.q2i_1);
  };
  function validateRead_0($this) {
    if (!($this.r2i_1.m1v_1 === $this.t2i_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function SlotTableGroup(table, group, version) {
    version = version === VOID ? table.m1v_1 : version;
    this.r2i_1 = table;
    this.s2i_1 = group;
    this.t2i_1 = version;
  }
  protoOf(SlotTableGroup).i = function () {
    validateRead_0(this);
    var tmp0_safe_receiver = this.r2i_1.p2g(this.s2i_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTableGroup.iterator.<anonymous>' call
      tmp = new SourceInformationGroupIterator(this.r2i_1, this.s2i_1, tmp0_safe_receiver, new AnchoredGroupPath(this.s2i_1));
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? new GroupIterator(this.r2i_1, this.s2i_1 + 1 | 0, this.s2i_1 + groupSize(this.r2i_1.f1v_1, this.s2i_1) | 0) : tmp1_elvis_lhs;
  };
  function add_0(_this__u8e3s4, key, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.o(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new MutableIntSet();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.add.<anonymous>' call
      _this__u8e3s4.z1m(key, this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.l1m(value);
  }
  function initGroup(_this__u8e3s4, address, key, isNode, hasDataKey, hasData, parentAnchor, dataAnchor) {
    var nodeBit = isNode ? 1073741824 : 0;
    var dataKeyBit = hasDataKey ? 536870912 : 0;
    var dataBit = hasData ? 268435456 : 0;
    var arrayIndex = imul(address, 5);
    _this__u8e3s4[arrayIndex + 0 | 0] = key;
    _this__u8e3s4[arrayIndex + 1 | 0] = nodeBit | dataKeyBit | dataBit;
    _this__u8e3s4[arrayIndex + 2 | 0] = parentAnchor;
    _this__u8e3s4[arrayIndex + 3 | 0] = 0;
    _this__u8e3s4[arrayIndex + 4 | 0] = dataAnchor;
  }
  function updateGroupSize(_this__u8e3s4, address, value) {
    runtimeCheck(value >= 0);
    _this__u8e3s4[imul(address, 5) + 3 | 0] = value;
  }
  function updateNodeCount_0(_this__u8e3s4, address, value) {
    runtimeCheck(value >= 0 && value < 67108863);
    _this__u8e3s4[imul(address, 5) + 1 | 0] = _this__u8e3s4[imul(address, 5) + 1 | 0] & -67108864 | value;
  }
  function PrioritySet(list) {
    var tmp;
    if (list === VOID) {
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp = ArrayList_init_$Create$();
    } else {
      tmp = list;
    }
    list = tmp;
    this.f2h_1 = list;
  }
  protoOf(PrioritySet).h2h = function (value) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.f2h_1.n()) {
      tmp = this.f2h_1.o(0) === value || this.f2h_1.o(this.f2h_1.l() - 1 | 0) === value;
    } else {
      tmp = false;
    }
    if (tmp)
      return Unit_instance;
    var index = this.f2h_1.l();
    this.f2h_1.d(value);
    $l$loop: while (index > 0) {
      var parent = ((index + 1 | 0) >>> 1 | 0) - 1 | 0;
      var parentValue = this.f2h_1.o(parent);
      if (value > parentValue) {
        this.f2h_1.f1(index, parentValue);
      } else
        break $l$loop;
      index = parent;
    }
    this.f2h_1.f1(index, value);
  };
  protoOf(PrioritySet).b1q = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.f2h_1.n();
  };
  protoOf(PrioritySet).u24 = function () {
    return first(this.f2h_1);
  };
  protoOf(PrioritySet).g2h = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.f2h_1.l() > 0)) {
      // Inline function 'androidx.compose.runtime.PrioritySet.takeMax.<anonymous>' call
      var tmp$ret$0 = 'Set is empty';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var value = this.f2h_1.o(0);
    $l$loop: while (true) {
      var tmp;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!this.f2h_1.n()) {
        tmp = this.f2h_1.o(0) === value;
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      this.f2h_1.f1(0, last(this.f2h_1));
      this.f2h_1.h1(this.f2h_1.l() - 1 | 0);
      var index = 0;
      var size = this.f2h_1.l();
      var max = this.f2h_1.l() >>> 1 | 0;
      $l$loop_2: while (index < max) {
        var indexValue = this.f2h_1.o(index);
        var left = imul(index + 1 | 0, 2) - 1 | 0;
        var leftValue = this.f2h_1.o(left);
        var right = imul(index + 1 | 0, 2);
        if (right < size) {
          var rightValue = this.f2h_1.o(right);
          if (rightValue > leftValue) {
            if (rightValue > indexValue) {
              this.f2h_1.f1(index, rightValue);
              this.f2h_1.f1(right, indexValue);
              index = right;
              continue $l$loop_2;
            } else
              break $l$loop_2;
          }
        }
        if (leftValue > indexValue) {
          this.f2h_1.f1(index, leftValue);
          this.f2h_1.f1(left, indexValue);
          index = left;
        } else
          break $l$loop_2;
      }
    }
    return value;
  };
  function updateParentAnchor(_this__u8e3s4, address, value) {
    _this__u8e3s4[imul(address, 5) + 2 | 0] = value;
  }
  function updateDataAnchor(_this__u8e3s4, address, anchor) {
    _this__u8e3s4[imul(address, 5) + 4 | 0] = anchor;
  }
  function locationOf(_this__u8e3s4, index, effectiveSize) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.locationOf.<anonymous>' call
    var it = search$accessor$145qfty(_this__u8e3s4, index, effectiveSize);
    return it >= 0 ? it : -(it + 1 | 0) | 0;
  }
  function updateMark(_this__u8e3s4, address, value) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    if (value) {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 134217728;
    } else {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] & -134217729;
    }
  }
  function updateContainsMark_0(_this__u8e3s4, address, value) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    if (value) {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 67108864;
    } else {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] & -67108865;
    }
  }
  function countOneBits_0(value) {
    switch (value) {
      case 0:
        return 0;
      case 1:
        return 1;
      case 2:
        return 1;
      case 3:
        return 2;
      case 4:
        return 1;
      case 5:
        return 2;
      case 6:
        return 2;
      default:
        return 3;
    }
  }
  function groupInfo(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 1 | 0];
  }
  function KeyInfo(key, objectKey, location, nodes, index) {
    this.w1z_1 = key;
    this.x1z_1 = objectKey;
    this.y1z_1 = location;
    this.z1z_1 = nodes;
    this.a20_1 = index;
  }
  function SourceInformationGroupIterator(table, parent, group, path) {
    this.u2i_1 = table;
    this.v2i_1 = parent;
    this.w2i_1 = group;
    this.x2i_1 = path;
    this.y2i_1 = this.u2i_1.m1v_1;
    this.z2i_1 = 0;
  }
  protoOf(SourceInformationGroupIterator).j = function () {
    var tmp0_safe_receiver = this.w2i_1.u2g_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SourceInformationGroupIterator.hasNext.<anonymous>' call
      tmp = this.z2i_1 < tmp0_safe_receiver.l();
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(SourceInformationGroupIterator).k = function () {
    var tmp2_safe_receiver = this.w2i_1.u2g_1;
    var tmp;
    if (tmp2_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp1 = this.z2i_1;
      this.z2i_1 = tmp1 + 1 | 0;
      tmp = tmp2_safe_receiver.o(tmp1);
    }
    var group = tmp;
    var tmp_0;
    if (group instanceof Anchor) {
      tmp_0 = new SlotTableGroup(this.u2i_1, group.w22_1, this.y2i_1);
    } else {
      if (group instanceof GroupSourceInformation) {
        tmp_0 = new SourceInformationSlotTableGroup(this.u2i_1, this.v2i_1, group, new RelativeGroupPath(this.x2i_1, this.z2i_1 - 1 | 0));
      } else {
        composeRuntimeError('Unexpected group information structure');
      }
    }
    return tmp_0;
  };
  function AnchoredGroupPath(group) {
    SourceInformationGroupPath.call(this);
    this.a2j_1 = group;
  }
  function SourceInformationGroupPath() {
  }
  function SourceInformationSlotTableGroup(table, parent, sourceInformation, identityPath) {
    this.b2j_1 = table;
    this.c2j_1 = parent;
    this.d2j_1 = sourceInformation;
    this.e2j_1 = identityPath;
    this.f2j_1 = this.d2j_1.r2g_1;
    this.g2j_1 = this;
  }
  protoOf(SourceInformationSlotTableGroup).i = function () {
    return new SourceInformationGroupIterator(this.b2j_1, this.c2j_1, this.d2j_1, this.e2j_1);
  };
  function RelativeGroupPath(parent, index) {
    SourceInformationGroupPath.call(this);
    this.h2j_1 = parent;
    this.i2j_1 = index;
  }
  function search$accessor$145qfty(_this__u8e3s4, location, effectiveSize) {
    return search(_this__u8e3s4, location, effectiveSize);
  }
  function collectAsState(_this__u8e3s4, context, $composer, $changed, $default) {
    var context_0 = context;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1439883919, 'C(collectAsState)49@1909L30:SnapshotFlow.kt#9igjgp');
    if (!(($default & 1) === 0))
      context_0 = EmptyCoroutineContext_getInstance();
    if (isTraceInProgress()) {
      traceEventStart(-1439883919, $changed, -1, 'androidx.compose.runtime.collectAsState (SnapshotFlow.kt:49)');
    }
    var tmp0 = collectAsState_0(_this__u8e3s4, _this__u8e3s4.k1(), context_0, $composer_0, 14 & $changed | 896 & $changed << 3, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function collectAsState_0(_this__u8e3s4, initial, context, $composer, $changed, $default) {
    var context_0 = {_v: context};
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -606625098, 'C(collectAsState)P(1)65@2578L149,65@2541L186:SnapshotFlow.kt#9igjgp');
    if (!(($default & 2) === 0)) {
      context_0._v = EmptyCoroutineContext_getInstance();
    }
    if (isTraceInProgress()) {
      traceEventStart(-606625098, $changed, -1, 'androidx.compose.runtime.collectAsState (SnapshotFlow.kt:65)');
    }
    var tmp = context_0._v;
    sourceInformationMarkerStart($composer_0, -498556383, 'CC(remember):SnapshotFlow.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_0.f25(context_0._v) | $composer_0.f25(_this__u8e3s4));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.l26();
    var tmp_0;
    if (invalid || it === Companion_getInstance().e1z_1) {
      // Inline function 'androidx.compose.runtime.collectAsState.<anonymous>' call
      var value = collectAsState$slambda_0(context_0, _this__u8e3s4, null);
      $composer_0.m26(value);
      tmp_0 = value;
    } else {
      tmp_0 = it;
    }
    var tmp_1 = tmp_0;
    var tmp1_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var tmp0 = produceState(initial, _this__u8e3s4, tmp, tmp1_group, $composer_0, 8 & $changed >> 3 | 14 & $changed >> 3 | 112 & $changed << 3 | 896 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function collectAsState$slambda$slambda$slambda($this_produceState, resultContinuation) {
    this.r2j_1 = $this_produceState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collectAsState$slambda$slambda$slambda).t2j = function (it, $completion) {
    var tmp = this.u2j(it, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(collectAsState$slambda$slambda$slambda).b9 = function (p1, $completion) {
    return this.t2j((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collectAsState$slambda$slambda$slambda).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        if (tmp === 0) {
          this.g8_1 = 1;
          this.r2j_1.lt(this.s2j_1);
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
  protoOf(collectAsState$slambda$slambda$slambda).u2j = function (it, completion) {
    var i = new collectAsState$slambda$slambda$slambda(this.r2j_1, completion);
    i.s2j_1 = it;
    return i;
  };
  function collectAsState$slambda$slambda$slambda_0($this_produceState, resultContinuation) {
    var i = new collectAsState$slambda$slambda$slambda($this_produceState, resultContinuation);
    var l = function (it, $completion) {
      return i.t2j(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.v2j_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).or = function (value, $completion) {
    return this.v2j_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).q2 = function () {
    return this.v2j_1;
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
  function collectAsState$slambda$slambda($this_produceState, resultContinuation) {
    this.e2k_1 = $this_produceState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collectAsState$slambda$slambda).t2j = function (it, $completion) {
    var tmp = this.u2j(it, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(collectAsState$slambda$slambda).b9 = function (p1, $completion) {
    return this.t2j((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collectAsState$slambda$slambda).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        if (tmp === 0) {
          this.g8_1 = 1;
          this.e2k_1.lt(this.f2k_1);
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
  protoOf(collectAsState$slambda$slambda).u2j = function (it, completion) {
    var i = new collectAsState$slambda$slambda(this.e2k_1, completion);
    i.f2k_1 = it;
    return i;
  };
  function collectAsState$slambda$slambda_0($this_produceState, resultContinuation) {
    var i = new collectAsState$slambda$slambda($this_produceState, resultContinuation);
    var l = function (it, $completion) {
      return i.t2j(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function collectAsState$slambda$slambda_1($this_collectAsState, $this_produceState, resultContinuation) {
    this.o2k_1 = $this_collectAsState;
    this.p2k_1 = $this_produceState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collectAsState$slambda$slambda_1).w2b = function ($this$withContext, $completion) {
    var tmp = this.w1f($this$withContext, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(collectAsState$slambda$slambda_1).b9 = function (p1, $completion) {
    return this.w2b((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collectAsState$slambda$slambda_1).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        switch (tmp) {
          case 0:
            this.g8_1 = 2;
            this.f8_1 = 1;
            var tmp_0 = collectAsState$slambda$slambda$slambda_0(this.p2k_1, null);
            suspendResult = this.o2k_1.xq(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
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
  protoOf(collectAsState$slambda$slambda_1).w1f = function ($this$withContext, completion) {
    var i = new collectAsState$slambda$slambda_1(this.o2k_1, this.p2k_1, completion);
    i.q2k_1 = $this$withContext;
    return i;
  };
  function collectAsState$slambda$slambda_2($this_collectAsState, $this_produceState, resultContinuation) {
    var i = new collectAsState$slambda$slambda_1($this_collectAsState, $this_produceState, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.w2b($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function collectAsState$slambda($context, $this_collectAsState, resultContinuation) {
    this.z2k_1 = $context;
    this.a2l_1 = $this_collectAsState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collectAsState$slambda).c2l = function ($this$produceState, $completion) {
    var tmp = this.d2l($this$produceState, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(collectAsState$slambda).b9 = function (p1, $completion) {
    return this.c2l((!(p1 == null) ? isInterface(p1, ProduceStateScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collectAsState$slambda).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        switch (tmp) {
          case 0:
            this.g8_1 = 4;
            if (equals(this.z2k_1._v, EmptyCoroutineContext_getInstance())) {
              this.f8_1 = 2;
              var tmp_0 = collectAsState$slambda$slambda_0(this.b2l_1, null);
              suspendResult = this.a2l_1.xq(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.f8_1 = 1;
              var tmp_1 = this.z2k_1._v;
              suspendResult = withContext(tmp_1, collectAsState$slambda$slambda_2(this.a2l_1, this.b2l_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.f8_1 = 3;
            continue $sm;
          case 2:
            this.f8_1 = 3;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.i8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.g8_1 === 4) {
          throw e;
        } else {
          this.f8_1 = this.g8_1;
          this.i8_1 = e;
        }
      }
     while (true);
  };
  protoOf(collectAsState$slambda).d2l = function ($this$produceState, completion) {
    var i = new collectAsState$slambda(this.z2k_1, this.a2l_1, completion);
    i.b2l_1 = $this$produceState;
    return i;
  };
  function collectAsState$slambda_0($context, $this_collectAsState, resultContinuation) {
    var i = new collectAsState$slambda($context, $this_collectAsState, resultContinuation);
    var l = function ($this$produceState, $completion) {
      return i.c2l($this$produceState, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SnapshotMutationPolicy() {
  }
  function structuralEqualityPolicy() {
    var tmp = StructuralEqualityPolicy_instance;
    return isInterface(tmp, SnapshotMutationPolicy) ? tmp : THROW_CCE();
  }
  function StructuralEqualityPolicy() {
  }
  protoOf(StructuralEqualityPolicy).f2l = function (a, b) {
    return equals(a, b);
  };
  protoOf(StructuralEqualityPolicy).x2b = function (a, b) {
    var tmp = (a == null ? true : !(a == null)) ? a : THROW_CCE();
    return this.f2l(tmp, (b == null ? true : !(b == null)) ? b : THROW_CCE());
  };
  protoOf(StructuralEqualityPolicy).toString = function () {
    return 'StructuralEqualityPolicy';
  };
  var StructuralEqualityPolicy_instance;
  function StructuralEqualityPolicy_getInstance() {
    return StructuralEqualityPolicy_instance;
  }
  function mutableStateOf(value, policy) {
    policy = policy === VOID ? structuralEqualityPolicy() : policy;
    return createSnapshotMutableState(value, policy);
  }
  function StateStateRecord(myValue) {
    StateRecord.call(this);
    this.i2l_1 = myValue;
  }
  protoOf(StateStateRecord).j2l = function (value) {
    var tmp = this;
    tmp.i2l_1 = (value instanceof StateStateRecord ? value : THROW_CCE()).i2l_1;
  };
  protoOf(StateStateRecord).n1h = function () {
    return new StateStateRecord(this.i2l_1);
  };
  function SnapshotMutableStateImpl(value, policy) {
    StateObjectImpl.call(this);
    this.l2l_1 = policy;
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = new StateStateRecord(value);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.next.<anonymous>' call
    if (Companion_instance_12.p2l()) {
      var tmp_0 = this_0;
      // Inline function 'kotlin.also' call
      var this_1 = new StateStateRecord(value);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.next.<anonymous>.<anonymous>' call
      this_1.n2l_1 = 1;
      tmp_0.o2l_1 = this_1;
    }
    tmp.m2l_1 = this_0;
  }
  protoOf(SnapshotMutableStateImpl).y2a = function () {
    return this.l2l_1;
  };
  protoOf(SnapshotMutableStateImpl).lt = function (value) {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = this.m2l_1;
    var it = current(this_0);
    if (!this.y2a().x2b(it.i2l_1, value)) {
      // Inline function 'androidx.compose.runtime.snapshots.overwritable' call
      var this_1 = this.m2l_1;
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      snapshot = Companion_instance_12.s1r();
      overwritableRecord(this_1, this, snapshot, it).i2l_1 = value;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      notifyWrite(snapshot, this);
    }
    return Unit_instance;
  };
  protoOf(SnapshotMutableStateImpl).k1 = function () {
    return readable_0(this.m2l_1, this).i2l_1;
  };
  protoOf(SnapshotMutableStateImpl).q2l = function () {
    return this.m2l_1;
  };
  protoOf(SnapshotMutableStateImpl).r2l = function (value) {
    var tmp = this;
    tmp.m2l_1 = value instanceof StateStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotMutableStateImpl).s2l = function (previous, current, applied) {
    var previousRecord = previous instanceof StateStateRecord ? previous : THROW_CCE();
    var currentRecord = current instanceof StateStateRecord ? current : THROW_CCE();
    var appliedRecord = applied instanceof StateStateRecord ? applied : THROW_CCE();
    var tmp;
    if (this.y2a().x2b(currentRecord.i2l_1, appliedRecord.i2l_1)) {
      tmp = current;
    } else {
      var merged = this.y2a().e2l(previousRecord.i2l_1, currentRecord.i2l_1, appliedRecord.i2l_1);
      var tmp_0;
      if (!(merged == null)) {
        // Inline function 'kotlin.also' call
        var this_0 = appliedRecord.n1h();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.mergeRecords.<anonymous>' call
        (this_0 instanceof StateStateRecord ? this_0 : THROW_CCE()).i2l_1 = merged;
        tmp_0 = this_0;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SnapshotMutableStateImpl).toString = function () {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = this.m2l_1;
    // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.toString.<anonymous>' call
    var it = current(this_0);
    return 'MutableState(value=' + toString_0(it.i2l_1) + ')@' + hashCode(this);
  };
  function mutableStateListOf() {
    return new SnapshotStateList();
  }
  function SnapshotThreadLocal() {
    this.z2a_1 = new AtomicReference(get_emptyThreadMap());
    this.a2b_1 = new Object();
  }
  protoOf(SnapshotThreadLocal).pn = function () {
    var tmp = this.z2a_1.pn().w2l(currentThreadId());
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SnapshotThreadLocal).r18 = function (value) {
    var key = currentThreadId();
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.a2b_1;
    var current = this.z2a_1.pn();
    if (current.x2l(key, value))
      return Unit_instance;
    this.z2a_1.mx(current.y2l(key, value));
  };
  function IntStack() {
    this.t1v_1 = new Int32Array(10);
    this.u1v_1 = 0;
  }
  protoOf(IntStack).l = function () {
    return this.u1v_1;
  };
  protoOf(IntStack).v1v = function (value) {
    if (this.u1v_1 >= this.t1v_1.length) {
      this.t1v_1 = copyOf(this.t1v_1, imul(this.t1v_1.length, 2));
    }
    var tmp = this.t1v_1;
    var tmp1 = this.u1v_1;
    this.u1v_1 = tmp1 + 1 | 0;
    tmp[tmp1] = value;
  };
  protoOf(IntStack).f1x = function () {
    var tmp = this.t1v_1;
    this.u1v_1 = this.u1v_1 - 1 | 0;
    return tmp[this.u1v_1];
  };
  protoOf(IntStack).p2h = function (default_0) {
    return this.u1v_1 > 0 ? this.u24() : default_0;
  };
  protoOf(IntStack).u24 = function () {
    return this.t1v_1[this.u1v_1 - 1 | 0];
  };
  protoOf(IntStack).i20 = function () {
    return this.t1v_1[this.u1v_1 - 2 | 0];
  };
  protoOf(IntStack).h21 = function (index) {
    return this.t1v_1[index];
  };
  protoOf(IntStack).n = function () {
    return this.u1v_1 === 0;
  };
  protoOf(IntStack).e1 = function () {
    this.u1v_1 = 0;
  };
  protoOf(IntStack).o2h = function (value) {
    var inductionVariable = 0;
    var last = this.u1v_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.t1v_1[i] === value)
          return i;
      }
       while (inductionVariable < last);
    return -1;
  };
  function Stack() {
    this.g1x_1 = ArrayList_init_$Create$();
  }
  protoOf(Stack).l = function () {
    return this.g1x_1.l();
  };
  protoOf(Stack).h20 = function (value) {
    return this.g1x_1.d(value);
  };
  protoOf(Stack).f1x = function () {
    return this.g1x_1.h1(this.l() - 1 | 0);
  };
  protoOf(Stack).u24 = function () {
    return this.g1x_1.o(this.l() - 1 | 0);
  };
  protoOf(Stack).h21 = function (index) {
    return this.g1x_1.o(index);
  };
  protoOf(Stack).n = function () {
    return this.g1x_1.n();
  };
  protoOf(Stack).b1q = function () {
    return !this.n();
  };
  protoOf(Stack).e1 = function () {
    return this.g1x_1.e1();
  };
  protoOf(Stack).q4 = function () {
    var tmp = 0;
    var tmp_0 = this.g1x_1.l();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = this.g1x_1.o(tmp_2);
      tmp = tmp + 1 | 0;
    }
    var tmp_3 = tmp_1;
    return isArray(tmp_3) ? tmp_3 : THROW_CCE();
  };
  function _get_current__qcrdxk($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.z2l_1;
    current$factory();
    return this_0.k1();
  }
  function LazyValueHolder(valueProducer) {
    this.z2l_1 = lazy(valueProducer);
  }
  protoOf(LazyValueHolder).x2a = function (map) {
    return _get_current__qcrdxk(this);
  };
  function current$factory() {
    return getPropertyCallableRef('current', 1, KProperty1, function (receiver) {
      return _get_current__qcrdxk(receiver);
    }, null);
  }
  function ChangeList() {
    OperationsDebugStringFormattable.call(this);
    this.h26_1 = new Operations();
  }
  protoOf(ChangeList).n = function () {
    return this.h26_1.n();
  };
  protoOf(ChangeList).b1q = function () {
    return this.h26_1.b1q();
  };
  protoOf(ChangeList).e1 = function () {
    this.h26_1.e1();
  };
  protoOf(ChangeList).t28 = function (applier, slots, rememberManager) {
    return this.h26_1.i2m(applier, slots, rememberManager);
  };
  protoOf(ChangeList).j2m = function (value) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.h26_1;
    var operation = Remember_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k2m(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushRemember.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.Remember.Value' call
    Remember_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g2m_1 === createExpectedArgMask(this_0, operation.l2m_1) && this_0.h2m_1 === createExpectedArgMask(this_0, operation.m2m_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.k7(', ');
            }
            this_1.k7(operation.n2m(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.k7(', ');
            }
            this_2.k7(operation.o2m(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).p2m = function (value, groupSlotIndex) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.h26_1;
    var operation = UpdateValue_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k2m(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUpdateValue.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.Value' call
    UpdateValue_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.GroupSlotIndex' call
    UpdateValue_getInstance();
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$1, groupSlotIndex);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g2m_1 === createExpectedArgMask(this_0, operation.l2m_1) && this_0.h2m_1 === createExpectedArgMask(this_0, operation.m2m_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.k7(', ');
            }
            this_1.k7(operation.n2m(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.k7(', ');
            }
            this_2.k7(operation.o2m(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).q2m = function (value, anchor, groupSlotIndex) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.h26_1;
    var operation = UpdateAnchoredValue_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k2m(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUpdateAnchoredValue.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Value' call
    UpdateAnchoredValue_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Anchor' call
    UpdateAnchoredValue_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, anchor);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.GroupSlotIndex' call
    UpdateAnchoredValue_getInstance();
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$2, groupSlotIndex);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g2m_1 === createExpectedArgMask(this_0, operation.l2m_1) && this_0.h2m_1 === createExpectedArgMask(this_0, operation.m2m_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.k7(', ');
            }
            this_1.k7(operation.n2m(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.k7(', ');
            }
            this_2.k7(operation.o2m(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$7);
    }
  };
  protoOf(ChangeList).r2m = function (anchor, value) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.h26_1;
    var operation = AppendValue_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k2m(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushAppendValue.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.AppendValue.Anchor' call
    AppendValue_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, anchor);
    // Inline function 'androidx.compose.runtime.changelist.AppendValue.Value' call
    AppendValue_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, value);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g2m_1 === createExpectedArgMask(this_0, operation.l2m_1) && this_0.h2m_1 === createExpectedArgMask(this_0, operation.m2m_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.k7(', ');
            }
            this_1.k7(operation.n2m(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.k7(', ');
            }
            this_2.k7(operation.o2m(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).s2m = function (count) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.h26_1;
    var operation = TrimParentValues_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k2m(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushTrimValues.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.TrimParentValues.Count' call
    TrimParentValues_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, count);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g2m_1 === createExpectedArgMask(this_0, operation.l2m_1) && this_0.h2m_1 === createExpectedArgMask(this_0, operation.m2m_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.k7(', ');
            }
            this_1.k7(operation.n2m(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.k7(', ');
            }
            this_2.k7(operation.o2m(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).t2m = function () {
    this.h26_1.u2m(ResetSlots_getInstance());
  };
  protoOf(ChangeList).v2m = function (data) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.h26_1;
    var operation = UpdateAuxData_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k2m(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUpdateAuxData.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAuxData.Data' call
    UpdateAuxData_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, data);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g2m_1 === createExpectedArgMask(this_0, operation.l2m_1) && this_0.h2m_1 === createExpectedArgMask(this_0, operation.m2m_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.k7(', ');
            }
            this_1.k7(operation.n2m(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.k7(', ');
            }
            this_2.k7(operation.o2m(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).w2m = function () {
    this.h26_1.u2m(EnsureRootGroupStarted_getInstance());
  };
  protoOf(ChangeList).x2m = function (anchor) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.h26_1;
    var operation = EnsureGroupStarted_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k2m(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushEnsureGroupStarted.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.EnsureGroupStarted.Anchor' call
    EnsureGroupStarted_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, anchor);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g2m_1 === createExpectedArgMask(this_0, operation.l2m_1) && this_0.h2m_1 === createExpectedArgMask(this_0, operation.m2m_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.k7(', ');
            }
            this_1.k7(operation.n2m(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.k7(', ');
            }
            this_2.k7(operation.o2m(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).y2m = function () {
    this.h26_1.u2m(EndCurrentGroup_getInstance());
  };
  protoOf(ChangeList).z2m = function () {
    this.h26_1.u2m(SkipToEndOfCurrentGroup_getInstance());
  };
  protoOf(ChangeList).a2n = function () {
    this.h26_1.u2m(RemoveCurrentGroup_getInstance());
  };
  protoOf(ChangeList).b2n = function (anchor, from) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.h26_1;
    var operation = InsertSlots_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k2m(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushInsertSlots.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.Anchor' call
    InsertSlots_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, anchor);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.FromSlotTable' call
    InsertSlots_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, from);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g2m_1 === createExpectedArgMask(this_0, operation.l2m_1) && this_0.h2m_1 === createExpectedArgMask(this_0, operation.m2m_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.k7(', ');
            }
            this_1.k7(operation.n2m(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.k7(', ');
            }
            this_2.k7(operation.o2m(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).c2n = function (anchor, from, fixups) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.h26_1;
    var operation = InsertSlotsWithFixups_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k2m(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushInsertSlots.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Anchor' call
    InsertSlotsWithFixups_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, anchor);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.FromSlotTable' call
    InsertSlotsWithFixups_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, from);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Fixups' call
    InsertSlotsWithFixups_getInstance();
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, fixups);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g2m_1 === createExpectedArgMask(this_0, operation.l2m_1) && this_0.h2m_1 === createExpectedArgMask(this_0, operation.m2m_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.k7(', ');
            }
            this_1.k7(operation.n2m(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.k7(', ');
            }
            this_2.k7(operation.o2m(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$7);
    }
  };
  protoOf(ChangeList).d2n = function (offset) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.h26_1;
    var operation = MoveCurrentGroup_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k2m(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushMoveCurrentGroup.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.MoveCurrentGroup.Offset' call
    MoveCurrentGroup_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, offset);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g2m_1 === createExpectedArgMask(this_0, operation.l2m_1) && this_0.h2m_1 === createExpectedArgMask(this_0, operation.m2m_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.k7(', ');
            }
            this_1.k7(operation.n2m(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.k7(', ');
            }
            this_2.k7(operation.o2m(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).e2n = function (action, composition) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.h26_1;
    var operation = EndCompositionScope_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k2m(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushEndCompositionScope.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Action' call
    EndCompositionScope_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, action);
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Composition' call
    EndCompositionScope_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, composition);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g2m_1 === createExpectedArgMask(this_0, operation.l2m_1) && this_0.h2m_1 === createExpectedArgMask(this_0, operation.m2m_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.k7(', ');
            }
            this_1.k7(operation.n2m(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.k7(', ');
            }
            this_2.k7(operation.o2m(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).f2n = function (node) {
    if (!(node == null) ? isInterface(node, ComposeNodeLifecycleCallback) : false) {
      this.h26_1.u2m(UseCurrentNode_getInstance());
    }
  };
  protoOf(ChangeList).g2n = function (value, block) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.h26_1;
    var operation = UpdateNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k2m(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUpdateNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    UpdateNode_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
    UpdateNode_getInstance();
    var tmp = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp, typeof block === 'function' ? block : THROW_CCE());
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g2m_1 === createExpectedArgMask(this_0, operation.l2m_1) && this_0.h2m_1 === createExpectedArgMask(this_0, operation.m2m_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.k7(', ');
            }
            this_1.k7(operation.n2m(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.k7(', ');
            }
            this_2.k7(operation.o2m(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).h2n = function (removeFrom, moveCount) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.h26_1;
    var operation = RemoveNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k2m(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushRemoveNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.RemoveIndex' call
    RemoveNode_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, removeFrom);
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.Count' call
    RemoveNode_getInstance();
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(1);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$1, moveCount);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g2m_1 === createExpectedArgMask(this_0, operation.l2m_1) && this_0.h2m_1 === createExpectedArgMask(this_0, operation.m2m_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.k7(', ');
            }
            this_1.k7(operation.n2m(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.k7(', ');
            }
            this_2.k7(operation.o2m(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).i2n = function (to, from, count) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.h26_1;
    var operation = MoveNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k2m(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushMoveNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.To' call
    MoveNode_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(1);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, to);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.From' call
    MoveNode_getInstance();
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$1, from);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.Count' call
    MoveNode_getInstance();
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(2);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$2, count);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g2m_1 === createExpectedArgMask(this_0, operation.l2m_1) && this_0.h2m_1 === createExpectedArgMask(this_0, operation.m2m_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.k7(', ');
            }
            this_1.k7(operation.n2m(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.k7(', ');
            }
            this_2.k7(operation.o2m(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$7);
    }
  };
  protoOf(ChangeList).j2n = function (distance) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.h26_1;
    var operation = AdvanceSlotsBy_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k2m(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushAdvanceSlotsBy.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.AdvanceSlotsBy.Distance' call
    AdvanceSlotsBy_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, distance);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g2m_1 === createExpectedArgMask(this_0, operation.l2m_1) && this_0.h2m_1 === createExpectedArgMask(this_0, operation.m2m_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.k7(', ');
            }
            this_1.k7(operation.n2m(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.k7(', ');
            }
            this_2.k7(operation.o2m(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).k2n = function (count) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.h26_1;
    var operation = Ups_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k2m(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUps.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.Ups.Count' call
    Ups_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, count);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g2m_1 === createExpectedArgMask(this_0, operation.l2m_1) && this_0.h2m_1 === createExpectedArgMask(this_0, operation.m2m_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.k7(', ');
            }
            this_1.k7(operation.n2m(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.k7(', ');
            }
            this_2.k7(operation.o2m(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).l2n = function (nodes) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(nodes.length === 0)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
      var this_0 = this.h26_1;
      var operation = Downs_getInstance();
      // Inline function 'kotlin.contracts.contract' call
      this_0.k2m(operation);
      // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushDowns.<anonymous>' call
      var $this$push = _WriteScope___init__impl__4xwato(this_0);
      // Inline function 'androidx.compose.runtime.changelist.Downs.Nodes' call
      Downs_getInstance();
      var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(0);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, nodes);
      // Inline function 'androidx.compose.runtime.checkPrecondition' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this_0.g2m_1 === createExpectedArgMask(this_0, operation.l2m_1) && this_0.h2m_1 === createExpectedArgMask(this_0, operation.m2m_1))) {
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
        var missingIntCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times = operation.l2m_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < times)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index & this_0.g2m_1) === 0)) {
              if (missingIntCount > 0) {
                this_1.k7(', ');
              }
              this_1.k7(operation.n2m(_IntParameter___init__impl__oy5xkp(index)));
              missingIntCount = missingIntCount + 1 | 0;
            }
          }
           while (inductionVariable < times);
        var missingInts = this_1.toString();
        var missingObjectCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_2 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times_0 = operation.m2m_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < times_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index_0 & this_0.h2m_1) === 0)) {
              if (missingIntCount > 0) {
                this_2.k7(', ');
              }
              this_2.k7(operation.o2m(_ObjectParameter___init__impl__iyg1ip(index_0)));
              missingObjectCount = missingObjectCount + 1 | 0;
            }
          }
           while (inductionVariable_0 < times_0);
        var missingObjects = this_2.toString();
        var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
        throwIllegalStateException(tmp$ret$7);
      }
    }
  };
  protoOf(ChangeList).m2n = function (effectiveNodeIndexOut, anchor) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.h26_1;
    var operation = DetermineMovableContentNodeIndex_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k2m(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushDetermineMovableContentNodeIndex.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.EffectiveNodeIndexOut' call
    DetermineMovableContentNodeIndex_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, effectiveNodeIndexOut);
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.Anchor' call
    DetermineMovableContentNodeIndex_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, anchor);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g2m_1 === createExpectedArgMask(this_0, operation.l2m_1) && this_0.h2m_1 === createExpectedArgMask(this_0, operation.m2m_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.k7(', ');
            }
            this_1.k7(operation.n2m(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.k7(', ');
            }
            this_2.k7(operation.o2m(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).n2n = function (nodes, effectiveNodeIndex) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!nodes.n()) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
      var this_0 = this.h26_1;
      var operation = CopyNodesToNewAnchorLocation_getInstance();
      // Inline function 'kotlin.contracts.contract' call
      this_0.k2m(operation);
      // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushCopyNodesToNewAnchorLocation.<anonymous>' call
      var $this$push = _WriteScope___init__impl__4xwato(this_0);
      // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.Nodes' call
      CopyNodesToNewAnchorLocation_getInstance();
      var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, nodes);
      // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.EffectiveNodeIndex' call
      CopyNodesToNewAnchorLocation_getInstance();
      var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(0);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, effectiveNodeIndex);
      // Inline function 'androidx.compose.runtime.checkPrecondition' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this_0.g2m_1 === createExpectedArgMask(this_0, operation.l2m_1) && this_0.h2m_1 === createExpectedArgMask(this_0, operation.m2m_1))) {
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
        var missingIntCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times = operation.l2m_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < times)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index & this_0.g2m_1) === 0)) {
              if (missingIntCount > 0) {
                this_1.k7(', ');
              }
              this_1.k7(operation.n2m(_IntParameter___init__impl__oy5xkp(index)));
              missingIntCount = missingIntCount + 1 | 0;
            }
          }
           while (inductionVariable < times);
        var missingInts = this_1.toString();
        var missingObjectCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_2 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times_0 = operation.m2m_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < times_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index_0 & this_0.h2m_1) === 0)) {
              if (missingIntCount > 0) {
                this_2.k7(', ');
              }
              this_2.k7(operation.o2m(_ObjectParameter___init__impl__iyg1ip(index_0)));
              missingObjectCount = missingObjectCount + 1 | 0;
            }
          }
           while (inductionVariable_0 < times_0);
        var missingObjects = this_2.toString();
        var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
        throwIllegalStateException(tmp$ret$7);
      }
    }
  };
  protoOf(ChangeList).o2n = function (resolvedState, parentContext, from, to) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.h26_1;
    var operation = CopySlotTableToAnchorLocation_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k2m(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushCopySlotTableToAnchorLocation.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ResolvedState' call
    CopySlotTableToAnchorLocation_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, resolvedState);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ParentCompositionContext' call
    CopySlotTableToAnchorLocation_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, parentContext);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.To' call
    CopySlotTableToAnchorLocation_getInstance();
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(3);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, to);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.From' call
    CopySlotTableToAnchorLocation_getInstance();
    var tmp$ret$3 = _ObjectParameter___init__impl__iyg1ip(2);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$3, from);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g2m_1 === createExpectedArgMask(this_0, operation.l2m_1) && this_0.h2m_1 === createExpectedArgMask(this_0, operation.m2m_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.k7(', ');
            }
            this_1.k7(operation.n2m(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.k7(', ');
            }
            this_2.k7(operation.o2m(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$8 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$8);
    }
  };
  protoOf(ChangeList).p2n = function (composition, parentContext, reference) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.h26_1;
    var operation = ReleaseMovableGroupAtCurrent_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k2m(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushReleaseMovableGroupAtCurrent.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Composition' call
    ReleaseMovableGroupAtCurrent_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, composition);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.ParentCompositionContext' call
    ReleaseMovableGroupAtCurrent_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, parentContext);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Reference' call
    ReleaseMovableGroupAtCurrent_getInstance();
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, reference);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g2m_1 === createExpectedArgMask(this_0, operation.l2m_1) && this_0.h2m_1 === createExpectedArgMask(this_0, operation.m2m_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.k7(', ');
            }
            this_1.k7(operation.n2m(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.k7(', ');
            }
            this_2.k7(operation.o2m(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$7);
    }
  };
  protoOf(ChangeList).q2n = function () {
    this.h26_1.u2m(EndMovableContentPlacement_getInstance());
  };
  protoOf(ChangeList).r2n = function (changeList, effectiveNodeIndex) {
    if (changeList.b1q()) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
      var this_0 = this.h26_1;
      var operation = ApplyChangeList_getInstance();
      // Inline function 'kotlin.contracts.contract' call
      this_0.k2m(operation);
      // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushExecuteOperationsIn.<anonymous>' call
      var $this$push = _WriteScope___init__impl__4xwato(this_0);
      // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.Changes' call
      ApplyChangeList_getInstance();
      var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, changeList);
      // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.EffectiveNodeIndex' call
      ApplyChangeList_getInstance();
      var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, effectiveNodeIndex);
      // Inline function 'androidx.compose.runtime.checkPrecondition' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this_0.g2m_1 === createExpectedArgMask(this_0, operation.l2m_1) && this_0.h2m_1 === createExpectedArgMask(this_0, operation.m2m_1))) {
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
        var missingIntCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times = operation.l2m_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < times)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index & this_0.g2m_1) === 0)) {
              if (missingIntCount > 0) {
                this_1.k7(', ');
              }
              this_1.k7(operation.n2m(_IntParameter___init__impl__oy5xkp(index)));
              missingIntCount = missingIntCount + 1 | 0;
            }
          }
           while (inductionVariable < times);
        var missingInts = this_1.toString();
        var missingObjectCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_2 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times_0 = operation.m2m_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < times_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index_0 & this_0.h2m_1) === 0)) {
              if (missingIntCount > 0) {
                this_2.k7(', ');
              }
              this_2.k7(operation.o2m(_ObjectParameter___init__impl__iyg1ip(index_0)));
              missingObjectCount = missingObjectCount + 1 | 0;
            }
          }
           while (inductionVariable_0 < times_0);
        var missingObjects = this_2.toString();
        var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
        throwIllegalStateException(tmp$ret$6);
      }
    }
  };
  function _get_reader__fd8dw8($this) {
    return $this.c1w_1.u1u_1;
  }
  function pushApplierOperationPreamble($this) {
    pushPendingUpsAndDowns($this);
  }
  function pushSlotEditingOperationPreamble($this) {
    realizeOperationLocation$default($this);
    $this.y23();
  }
  function pushSlotTableOperationPreamble($this, useParentSlot) {
    realizeOperationLocation($this, useParentSlot);
  }
  function pushSlotTableOperationPreamble$default($this, useParentSlot, $super) {
    useParentSlot = useParentSlot === VOID ? false : useParentSlot;
    return pushSlotTableOperationPreamble($this, useParentSlot);
  }
  function ensureRootStarted($this) {
    if (!$this.e1w_1 && $this.g1w_1) {
      pushSlotTableOperationPreamble$default($this);
      $this.d1w_1.w2m();
      $this.e1w_1 = true;
    }
  }
  function ensureGroupStarted($this, anchor) {
    pushSlotTableOperationPreamble$default($this);
    $this.d1w_1.x2m(anchor);
    $this.e1w_1 = true;
  }
  function realizeOperationLocation($this, forParent) {
    var location = forParent ? _get_reader__fd8dw8($this).y1w_1 : _get_reader__fd8dw8($this).w1w_1;
    var distance = location - $this.h1w_1 | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(distance >= 0)) {
      // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.realizeOperationLocation.<anonymous>' call
      var tmp$ret$0 = 'Tried to seek backward';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    if (distance > 0) {
      $this.d1w_1.j2n(distance);
      $this.h1w_1 = location;
    }
  }
  function realizeOperationLocation$default($this, forParent, $super) {
    forParent = forParent === VOID ? false : forParent;
    return realizeOperationLocation($this, forParent);
  }
  function realizeNodeMovementOperations($this) {
    if ($this.n1w_1 > 0) {
      if ($this.k1w_1 >= 0) {
        realizeRemoveNode($this, $this.k1w_1, $this.n1w_1);
        $this.k1w_1 = -1;
      } else {
        realizeMoveNode($this, $this.m1w_1, $this.l1w_1, $this.n1w_1);
        $this.l1w_1 = -1;
        $this.m1w_1 = -1;
      }
      $this.n1w_1 = 0;
    }
  }
  function realizeRemoveNode($this, removeFrom, moveCount) {
    pushApplierOperationPreamble($this);
    $this.d1w_1.h2n(removeFrom, moveCount);
  }
  function realizeMoveNode($this, to, from, count) {
    pushApplierOperationPreamble($this);
    $this.d1w_1.i2n(to, from, count);
  }
  function pushPendingUpsAndDowns($this) {
    if ($this.i1w_1 > 0) {
      $this.d1w_1.k2n($this.i1w_1);
      $this.i1w_1 = 0;
    }
    if ($this.j1w_1.b1q()) {
      $this.d1w_1.l2n($this.j1w_1.q4());
      $this.j1w_1.e1();
    }
  }
  function Companion_4() {
    this.s2n_1 = -2;
  }
  var Companion_instance_5;
  function Companion_getInstance_4() {
    return Companion_instance_5;
  }
  function ComposerChangeListWriter(composer, changeList) {
    this.c1w_1 = composer;
    this.d1w_1 = changeList;
    this.e1w_1 = false;
    this.f1w_1 = new IntStack();
    this.g1w_1 = true;
    this.h1w_1 = 0;
    this.i1w_1 = 0;
    this.j1w_1 = new Stack();
    this.k1w_1 = -1;
    this.l1w_1 = -1;
    this.m1w_1 = -1;
    this.n1w_1 = 0;
  }
  protoOf(ComposerChangeListWriter).e20 = function (location) {
    this.h1w_1 = this.h1w_1 + (location - _get_reader__fd8dw8(this).w1w_1 | 0) | 0;
  };
  protoOf(ComposerChangeListWriter).j22 = function (location) {
    this.h1w_1 = location;
  };
  protoOf(ComposerChangeListWriter).y23 = function () {
    if (_get_reader__fd8dw8(this).l() > 0) {
      var reader = _get_reader__fd8dw8(this);
      var location = reader.y1w_1;
      if (!(this.f1w_1.p2h(-2) === location)) {
        ensureRootStarted(this);
        if (location > 0) {
          var anchor = reader.o1y(location);
          this.f1w_1.v1v(location);
          ensureGroupStarted(this, anchor);
        }
      }
    }
  };
  protoOf(ComposerChangeListWriter).m25 = function () {
    return (_get_reader__fd8dw8(this).y1w_1 - this.h1w_1 | 0) < 0;
  };
  protoOf(ComposerChangeListWriter).p25 = function (value) {
    this.d1w_1.j2m(value);
  };
  protoOf(ComposerChangeListWriter).k25 = function (value, groupSlotIndex) {
    pushSlotTableOperationPreamble(this, true);
    this.d1w_1.p2m(value, groupSlotIndex);
  };
  protoOf(ComposerChangeListWriter).l25 = function (value, anchor, groupSlotIndex) {
    this.d1w_1.q2m(value, anchor, groupSlotIndex);
  };
  protoOf(ComposerChangeListWriter).i25 = function (anchor, value) {
    this.d1w_1.r2m(anchor, value);
  };
  protoOf(ComposerChangeListWriter).v20 = function (count) {
    if (count > 0) {
      pushSlotEditingOperationPreamble(this);
      this.d1w_1.s2m(count);
    }
  };
  protoOf(ComposerChangeListWriter).v21 = function () {
    this.d1w_1.t2m();
  };
  protoOf(ComposerChangeListWriter).a1z = function (data) {
    pushSlotTableOperationPreamble$default(this);
    this.d1w_1.v2m(data);
  };
  protoOf(ComposerChangeListWriter).o1w = function () {
    if (this.e1w_1) {
      pushSlotTableOperationPreamble$default(this);
      pushSlotTableOperationPreamble$default(this);
      this.d1w_1.y2m();
      this.e1w_1 = false;
    }
  };
  protoOf(ComposerChangeListWriter).w20 = function () {
    var location = _get_reader__fd8dw8(this).y1w_1;
    var currentStartedGroup = this.f1w_1.p2h(-1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(currentStartedGroup <= location)) {
      // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.endCurrentGroup.<anonymous>' call
      var tmp$ret$0 = 'Missed recording an endGroup';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    if (this.f1w_1.p2h(-1) === location) {
      pushSlotTableOperationPreamble$default(this);
      this.f1w_1.f1x();
      this.d1w_1.y2m();
    }
  };
  protoOf(ComposerChangeListWriter).l22 = function () {
    this.d1w_1.z2m();
  };
  protoOf(ComposerChangeListWriter).g23 = function () {
    pushSlotEditingOperationPreamble(this);
    this.d1w_1.a2n();
    this.h1w_1 = this.h1w_1 + _get_reader__fd8dw8(this).m2i() | 0;
  };
  protoOf(ComposerChangeListWriter).f23 = function (anchor, from) {
    pushPendingUpsAndDowns(this);
    pushSlotEditingOperationPreamble(this);
    realizeNodeMovementOperations(this);
    this.d1w_1.b2n(anchor, from);
  };
  protoOf(ComposerChangeListWriter).e23 = function (anchor, from, fixups) {
    pushPendingUpsAndDowns(this);
    pushSlotEditingOperationPreamble(this);
    realizeNodeMovementOperations(this);
    this.d1w_1.c2n(anchor, from, fixups);
  };
  protoOf(ComposerChangeListWriter).g20 = function (offset) {
    pushSlotEditingOperationPreamble(this);
    this.d1w_1.d2n(offset);
  };
  protoOf(ComposerChangeListWriter).w25 = function (action, composition) {
    this.d1w_1.e2n(action, composition);
  };
  protoOf(ComposerChangeListWriter).x24 = function (node) {
    pushApplierOperationPreamble(this);
    this.d1w_1.f2n(node);
  };
  protoOf(ComposerChangeListWriter).a25 = function (value, block) {
    pushApplierOperationPreamble(this);
    this.d1w_1.g2n(value, block);
  };
  protoOf(ComposerChangeListWriter).k20 = function (nodeIndex, count) {
    if (count > 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(nodeIndex >= 0)) {
        // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.removeNode.<anonymous>' call
        var tmp$ret$0 = 'Invalid remove index ' + nodeIndex;
        composeImmediateRuntimeError(tmp$ret$0);
      }
      if (this.k1w_1 === nodeIndex) {
        this.n1w_1 = this.n1w_1 + count | 0;
      } else {
        realizeNodeMovementOperations(this);
        this.k1w_1 = nodeIndex;
        this.n1w_1 = count;
      }
    }
  };
  protoOf(ComposerChangeListWriter).o20 = function (from, to, count) {
    if (count > 0) {
      if (this.n1w_1 > 0 && this.l1w_1 === (from - this.n1w_1 | 0) && this.m1w_1 === (to - this.n1w_1 | 0)) {
        this.n1w_1 = this.n1w_1 + count | 0;
      } else {
        realizeNodeMovementOperations(this);
        this.l1w_1 = from;
        this.m1w_1 = to;
        this.n1w_1 = count;
      }
    }
  };
  protoOf(ComposerChangeListWriter).h23 = function () {
    pushPendingUpsAndDowns(this);
    if (this.e1w_1) {
      this.l22();
      this.o1w();
    }
  };
  protoOf(ComposerChangeListWriter).q20 = function () {
    realizeNodeMovementOperations(this);
  };
  protoOf(ComposerChangeListWriter).a24 = function (nodeIndex, group) {
    this.q20();
    pushPendingUpsAndDowns(this);
    var nodeCount = _get_reader__fd8dw8(this).i21(group) ? 1 : _get_reader__fd8dw8(this).j21(group);
    if (nodeCount > 0) {
      this.k20(nodeIndex, nodeCount);
    }
  };
  protoOf(ComposerChangeListWriter).t20 = function () {
    realizeNodeMovementOperations(this);
    if (this.j1w_1.b1q()) {
      this.j1w_1.f1x();
    } else {
      this.i1w_1 = this.i1w_1 + 1 | 0;
    }
  };
  protoOf(ComposerChangeListWriter).l21 = function (node) {
    realizeNodeMovementOperations(this);
    this.j1w_1.h20(node);
  };
  protoOf(ComposerChangeListWriter).e22 = function (effectiveNodeIndexOut, anchor) {
    pushPendingUpsAndDowns(this);
    this.d1w_1.m2n(effectiveNodeIndexOut, anchor);
  };
  protoOf(ComposerChangeListWriter).h22 = function (nodes, effectiveNodeIndex) {
    this.d1w_1.n2n(nodes, effectiveNodeIndex);
  };
  protoOf(ComposerChangeListWriter).i22 = function (resolvedState, parentContext, from, to) {
    this.d1w_1.o2n(resolvedState, parentContext, from, to);
  };
  protoOf(ComposerChangeListWriter).z23 = function (composition, parentContext, reference) {
    this.d1w_1.p2n(composition, parentContext, reference);
  };
  protoOf(ComposerChangeListWriter).m22 = function () {
    this.d1w_1.q2n();
    this.h1w_1 = 0;
  };
  protoOf(ComposerChangeListWriter).k22 = function (other, effectiveNodeIndex) {
    this.d1w_1.r2n(other, effectiveNodeIndex);
  };
  protoOf(ComposerChangeListWriter).j23 = function () {
    pushPendingUpsAndDowns(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.f1w_1.n()) {
      // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.finalizeComposition.<anonymous>' call
      var tmp$ret$0 = 'Missed recording an endGroup()';
      composeImmediateRuntimeError(tmp$ret$0);
    }
  };
  protoOf(ComposerChangeListWriter).k23 = function () {
    this.e1w_1 = false;
    this.f1w_1.e1();
    this.h1w_1 = 0;
  };
  function FixupList() {
    OperationsDebugStringFormattable.call(this);
    this.h1x_1 = new Operations();
    this.i1x_1 = new Operations();
  }
  protoOf(FixupList).n = function () {
    return this.h1x_1.n();
  };
  protoOf(FixupList).e1 = function () {
    this.i1x_1.e1();
    this.h1x_1.e1();
  };
  protoOf(FixupList).t2n = function (applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.i1x_1.n()) {
      // Inline function 'androidx.compose.runtime.changelist.FixupList.executeAndFlushAllPendingFixups.<anonymous>' call
      var tmp$ret$0 = 'FixupList has pending fixup operations that were not realized. Were there mismatched insertNode() and endNodeInsert() calls?';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.h1x_1.i2m(applier, slots, rememberManager);
  };
  protoOf(FixupList).v24 = function (factory, insertIndex, groupAnchor) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.h1x_1;
    var operation = InsertNodeFixup_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k2m(operation);
    // Inline function 'androidx.compose.runtime.changelist.FixupList.createAndInsertNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.Factory' call
    InsertNodeFixup_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, factory);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.InsertIndex' call
    InsertNodeFixup_getInstance();
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$1, insertIndex);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.GroupAnchor' call
    InsertNodeFixup_getInstance();
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, groupAnchor);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g2m_1 === createExpectedArgMask(this_0, operation.l2m_1) && this_0.h2m_1 === createExpectedArgMask(this_0, operation.m2m_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.k7(', ');
            }
            this_1.k7(operation.n2m(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.k7(', ');
            }
            this_2.k7(operation.o2m(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$7);
    }
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_3 = this.i1x_1;
    var operation_0 = PostInsertNodeFixup_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_3.k2m(operation_0);
    // Inline function 'androidx.compose.runtime.changelist.FixupList.createAndInsertNode.<anonymous>' call
    var $this$push_0 = _WriteScope___init__impl__4xwato(this_3);
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.InsertIndex' call
    PostInsertNodeFixup_getInstance();
    var tmp$ret$8 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push_0, tmp$ret$8, insertIndex);
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.GroupAnchor' call
    PostInsertNodeFixup_getInstance();
    var tmp$ret$9 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push_0, tmp$ret$9, groupAnchor);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_3.g2m_1 === createExpectedArgMask(this_3, operation_0.l2m_1) && this_3.h2m_1 === createExpectedArgMask(this_3, operation_0.m2m_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount_0 = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_4 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_1 = operation_0.l2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_1 = 0;
      if (inductionVariable_1 < times_1)
        do {
          var index_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_1 & this_3.g2m_1) === 0)) {
            if (missingIntCount_0 > 0) {
              this_4.k7(', ');
            }
            this_4.k7(operation_0.n2m(_IntParameter___init__impl__oy5xkp(index_1)));
            missingIntCount_0 = missingIntCount_0 + 1 | 0;
          }
        }
         while (inductionVariable_1 < times_1);
      var missingInts_0 = this_4.toString();
      var missingObjectCount_0 = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_5 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_2 = operation_0.m2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_2 = 0;
      if (inductionVariable_2 < times_2)
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_2 & this_3.h2m_1) === 0)) {
            if (missingIntCount_0 > 0) {
              this_5.k7(', ');
            }
            this_5.k7(operation_0.o2m(_ObjectParameter___init__impl__iyg1ip(index_2)));
            missingObjectCount_0 = missingObjectCount_0 + 1 | 0;
          }
        }
         while (inductionVariable_2 < times_2);
      var missingObjects_0 = this_5.toString();
      var tmp$ret$14 = 'Error while pushing ' + operation_0.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount_0 + ' int arguments (' + missingInts_0 + ') ') + ('and ' + missingObjectCount_0 + ' object arguments (' + missingObjects_0 + ').');
      throwIllegalStateException(tmp$ret$14);
    }
  };
  protoOf(FixupList).y20 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.i1x_1.b1q()) {
      // Inline function 'androidx.compose.runtime.changelist.FixupList.endNodeInsert.<anonymous>' call
      var tmp$ret$0 = 'Cannot end node insertion, there are no pending operations that can be realized.';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.i1x_1.u2n(this.h1x_1);
  };
  protoOf(FixupList).b25 = function (value, block) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.h1x_1;
    var operation = UpdateNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.k2m(operation);
    // Inline function 'androidx.compose.runtime.changelist.FixupList.updateNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    UpdateNode_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
    UpdateNode_getInstance();
    var tmp = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp, typeof block === 'function' ? block : THROW_CCE());
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.g2m_1 === createExpectedArgMask(this_0, operation.l2m_1) && this_0.h2m_1 === createExpectedArgMask(this_0, operation.m2m_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.l2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.g2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.k7(', ');
            }
            this_1.k7(operation.n2m(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.m2m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.h2m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.k7(', ');
            }
            this_2.k7(operation.o2m(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  function _IntParameter___init__impl__oy5xkp(offset) {
    return offset;
  }
  function _IntParameter___get_offset__impl__xsdcin($this) {
    return $this;
  }
  function _ObjectParameter___init__impl__iyg1ip(offset) {
    return offset;
  }
  function _ObjectParameter___get_offset__impl__x7fx93($this) {
    return $this;
  }
  function Ups() {
    Ups_instance = this;
    Operation.call(this, 1);
  }
  protoOf(Ups).n2m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.Ups.Count' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'count';
    } else {
      tmp = protoOf(Operation).n2m.call(this, parameter);
    }
    return tmp;
  };
  protoOf(Ups).x2n = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'kotlin.repeat' call
    // Inline function 'androidx.compose.runtime.changelist.Ups.Count' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    var times = _this__u8e3s4.y2n(tmp$ret$0);
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.changelist.Ups.execute.<anonymous>' call
        applier.w1r();
      }
       while (inductionVariable < times);
  };
  var Ups_instance;
  function Ups_getInstance() {
    if (Ups_instance == null)
      new Ups();
    return Ups_instance;
  }
  function Downs() {
    Downs_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(Downs).o2m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.Downs.Nodes' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'nodes';
    } else {
      tmp = protoOf(Operation).o2m.call(this, parameter);
    }
    return tmp;
  };
  protoOf(Downs).x2n = function (_this__u8e3s4, applier, slots, rememberManager) {
    var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
    // Inline function 'androidx.compose.runtime.changelist.Downs.Nodes' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var nodes = _this__u8e3s4.c2o(tmp$ret$0);
    var inductionVariable = 0;
    var last = nodes.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        nodeApplier.v1r(nodes[index]);
      }
       while (inductionVariable <= last);
  };
  var Downs_instance;
  function Downs_getInstance() {
    if (Downs_instance == null)
      new Downs();
    return Downs_instance;
  }
  function AdvanceSlotsBy() {
    AdvanceSlotsBy_instance = this;
    Operation.call(this, 1);
  }
  protoOf(AdvanceSlotsBy).n2m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.AdvanceSlotsBy.Distance' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'distance';
    } else {
      tmp = protoOf(Operation).n2m.call(this, parameter);
    }
    return tmp;
  };
  protoOf(AdvanceSlotsBy).x2n = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.AdvanceSlotsBy.Distance' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    slots.y2g(_this__u8e3s4.y2n(tmp$ret$0));
  };
  var AdvanceSlotsBy_instance;
  function AdvanceSlotsBy_getInstance() {
    if (AdvanceSlotsBy_instance == null)
      new AdvanceSlotsBy();
    return AdvanceSlotsBy_instance;
  }
  function Remember() {
    Remember_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(Remember).o2m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.Remember.Value' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      tmp = protoOf(Operation).o2m.call(this, parameter);
    }
    return tmp;
  };
  protoOf(Remember).x2n = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.Remember.Value' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    rememberManager.e29(_this__u8e3s4.c2o(tmp$ret$0));
  };
  var Remember_instance;
  function Remember_getInstance() {
    if (Remember_instance == null)
      new Remember();
    return Remember_instance;
  }
  function AppendValue() {
    AppendValue_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(AppendValue).o2m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.AppendValue.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.AppendValue.Value' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'value';
      } else {
        tmp = protoOf(Operation).o2m.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(AppendValue).x2n = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.AppendValue.Anchor' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var anchor = _this__u8e3s4.c2o(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.AppendValue.Value' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var value = _this__u8e3s4.c2o(tmp$ret$1);
    if (value instanceof RememberObserverHolder) {
      rememberManager.e29(value.d25_1);
    }
    slots.t2h(anchor, value);
  };
  var AppendValue_instance;
  function AppendValue_getInstance() {
    if (AppendValue_instance == null)
      new AppendValue();
    return AppendValue_instance;
  }
  function TrimParentValues() {
    TrimParentValues_instance = this;
    Operation.call(this, 1);
  }
  protoOf(TrimParentValues).n2m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.TrimParentValues.Count' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'count';
    } else {
      tmp = protoOf(Operation).n2m.call(this, parameter);
    }
    return tmp;
  };
  protoOf(TrimParentValues).x2n = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.TrimParentValues.Count' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    var count = _this__u8e3s4.y2n(tmp$ret$0);
    var slotsSize = slots.p26();
    // Inline function 'androidx.compose.runtime.SlotWriter.forEachTailSlot' call
    var groupIndex = slots.e1y_1;
    var slotsStart = slots.c2h(groupIndex);
    var slotsEnd = slots.c2i(groupIndex);
    // Inline function 'kotlin.math.max' call
    var b = slotsEnd - count | 0;
    var inductionVariable = Math.max(slotsStart, b);
    if (inductionVariable < slotsEnd)
      do {
        var slotIndex = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.changelist.TrimParentValues.execute.<anonymous>' call
        var value = slots.l1x_1[dataIndexToDataAddress(slots, slotIndex)];
        if (value instanceof RememberObserverHolder) {
          var endRelativeOrder = slotsSize - slotIndex | 0;
          rememberManager.t26(value.d25_1, endRelativeOrder, -1, -1);
        } else {
          if (value instanceof RecomposeScopeImpl) {
            value.u26();
          }
        }
      }
       while (inductionVariable < slotsEnd);
    slots.u2h(count);
  };
  var TrimParentValues_instance;
  function TrimParentValues_getInstance() {
    if (TrimParentValues_instance == null)
      new TrimParentValues();
    return TrimParentValues_instance;
  }
  function UpdateValue() {
    UpdateValue_instance = this;
    Operation.call(this, 1, 1);
  }
  protoOf(UpdateValue).n2m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.GroupSlotIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'groupSlotIndex';
    } else {
      tmp = protoOf(Operation).n2m.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateValue).o2m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.Value' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      tmp = protoOf(Operation).o2m.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateValue).x2n = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.Value' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var value = _this__u8e3s4.c2o(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.GroupSlotIndex' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    var groupSlotIndex = _this__u8e3s4.y2n(tmp$ret$1);
    if (value instanceof RememberObserverHolder) {
      rememberManager.e29(value.d25_1);
    }
    var previous = slots.y2h(groupSlotIndex, value);
    if (previous instanceof RememberObserverHolder) {
      var endRelativeOrder = slots.p26() - slots.a2i(slots.c1y_1, groupSlotIndex) | 0;
      rememberManager.t26(previous.d25_1, endRelativeOrder, -1, -1);
    } else {
      if (previous instanceof RecomposeScopeImpl) {
        previous.u26();
      }
    }
  };
  var UpdateValue_instance;
  function UpdateValue_getInstance() {
    if (UpdateValue_instance == null)
      new UpdateValue();
    return UpdateValue_instance;
  }
  function UpdateAnchoredValue() {
    UpdateAnchoredValue_instance = this;
    Operation.call(this, 1, 2);
  }
  protoOf(UpdateAnchoredValue).n2m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.GroupSlotIndex' call
    UpdateAnchoredValue_getInstance();
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'groupSlotIndex';
    } else {
      tmp = protoOf(Operation).n2m.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateAnchoredValue).o2m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Value' call
    UpdateAnchoredValue_getInstance();
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Anchor' call
      UpdateAnchoredValue_getInstance();
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'anchor';
      } else {
        tmp = protoOf(Operation).o2m.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(UpdateAnchoredValue).x2n = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Value' call
    UpdateAnchoredValue_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var value = _this__u8e3s4.c2o(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Anchor' call
    UpdateAnchoredValue_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var anchor = _this__u8e3s4.c2o(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.GroupSlotIndex' call
    UpdateAnchoredValue_getInstance();
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(0);
    var groupSlotIndex = _this__u8e3s4.y2n(tmp$ret$2);
    if (value instanceof RememberObserverHolder) {
      rememberManager.e29(value.d25_1);
    }
    var groupIndex = slots.d22(anchor);
    var previous = slots.z2h(groupIndex, groupSlotIndex, value);
    if (previous instanceof RememberObserverHolder) {
      var endRelativeSlotOrder = slots.p26() - slots.a2i(groupIndex, groupSlotIndex) | 0;
      // Inline function 'androidx.compose.runtime.withAfterAnchorInfo' call
      var anchor_0 = previous.e25_1;
      var priority = -1;
      var endRelativeAfter = -1;
      if (!(anchor_0 == null) && anchor_0.s26()) {
        priority = slots.d22(anchor_0);
        endRelativeAfter = slots.p26() - slots.r26(priority) | 0;
      }
      // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.execute.<anonymous>' call
      var priority_0 = priority;
      var endRelativeAfter_0 = endRelativeAfter;
      rememberManager.t26(previous.d25_1, endRelativeSlotOrder, priority_0, endRelativeAfter_0);
    } else {
      if (previous instanceof RecomposeScopeImpl) {
        previous.u26();
      }
    }
  };
  var UpdateAnchoredValue_instance;
  function UpdateAnchoredValue_getInstance() {
    if (UpdateAnchoredValue_instance == null)
      new UpdateAnchoredValue();
    return UpdateAnchoredValue_instance;
  }
  function UpdateAuxData() {
    UpdateAuxData_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(UpdateAuxData).o2m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateAuxData.Data' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'data';
    } else {
      tmp = protoOf(Operation).o2m.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateAuxData).x2n = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateAuxData.Data' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    slots.d2h(_this__u8e3s4.c2o(tmp$ret$0));
  };
  var UpdateAuxData_instance;
  function UpdateAuxData_getInstance() {
    if (UpdateAuxData_instance == null)
      new UpdateAuxData();
    return UpdateAuxData_instance;
  }
  function EnsureRootGroupStarted() {
    EnsureRootGroupStarted_instance = this;
    Operation.call(this);
  }
  protoOf(EnsureRootGroupStarted).x2n = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.d2i(0);
  };
  var EnsureRootGroupStarted_instance;
  function EnsureRootGroupStarted_getInstance() {
    if (EnsureRootGroupStarted_instance == null)
      new EnsureRootGroupStarted();
    return EnsureRootGroupStarted_instance;
  }
  function EnsureGroupStarted() {
    EnsureGroupStarted_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(EnsureGroupStarted).o2m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.EnsureGroupStarted.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      tmp = protoOf(Operation).o2m.call(this, parameter);
    }
    return tmp;
  };
  protoOf(EnsureGroupStarted).x2n = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.EnsureGroupStarted.Anchor' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    slots.e2i(_this__u8e3s4.c2o(tmp$ret$0));
  };
  var EnsureGroupStarted_instance;
  function EnsureGroupStarted_getInstance() {
    if (EnsureGroupStarted_instance == null)
      new EnsureGroupStarted();
    return EnsureGroupStarted_instance;
  }
  function RemoveCurrentGroup() {
    RemoveCurrentGroup_instance = this;
    Operation.call(this);
  }
  protoOf(RemoveCurrentGroup).x2n = function (_this__u8e3s4, applier, slots, rememberManager) {
    removeCurrentGroup(slots, rememberManager);
  };
  var RemoveCurrentGroup_instance;
  function RemoveCurrentGroup_getInstance() {
    if (RemoveCurrentGroup_instance == null)
      new RemoveCurrentGroup();
    return RemoveCurrentGroup_instance;
  }
  function MoveCurrentGroup() {
    MoveCurrentGroup_instance = this;
    Operation.call(this, 1);
  }
  protoOf(MoveCurrentGroup).n2m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.MoveCurrentGroup.Offset' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'offset';
    } else {
      tmp = protoOf(Operation).n2m.call(this, parameter);
    }
    return tmp;
  };
  protoOf(MoveCurrentGroup).x2n = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.MoveCurrentGroup.Offset' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    slots.g2i(_this__u8e3s4.y2n(tmp$ret$0));
  };
  var MoveCurrentGroup_instance;
  function MoveCurrentGroup_getInstance() {
    if (MoveCurrentGroup_instance == null)
      new MoveCurrentGroup();
    return MoveCurrentGroup_instance;
  }
  function EndCurrentGroup() {
    EndCurrentGroup_instance = this;
    Operation.call(this);
  }
  protoOf(EndCurrentGroup).x2n = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.a21();
  };
  var EndCurrentGroup_instance;
  function EndCurrentGroup_getInstance() {
    if (EndCurrentGroup_instance == null)
      new EndCurrentGroup();
    return EndCurrentGroup_instance;
  }
  function SkipToEndOfCurrentGroup() {
    SkipToEndOfCurrentGroup_instance = this;
    Operation.call(this);
  }
  protoOf(SkipToEndOfCurrentGroup).x2n = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.v1y();
  };
  var SkipToEndOfCurrentGroup_instance;
  function SkipToEndOfCurrentGroup_getInstance() {
    if (SkipToEndOfCurrentGroup_instance == null)
      new SkipToEndOfCurrentGroup();
    return SkipToEndOfCurrentGroup_instance;
  }
  function EndCompositionScope() {
    EndCompositionScope_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(EndCompositionScope).o2m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Action' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Composition' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'composition';
      } else {
        tmp = protoOf(Operation).o2m.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(EndCompositionScope).x2n = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Action' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var action = _this__u8e3s4.c2o(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Composition' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var composition = _this__u8e3s4.c2o(tmp$ret$1);
    action(composition);
  };
  var EndCompositionScope_instance;
  function EndCompositionScope_getInstance() {
    if (EndCompositionScope_instance == null)
      new EndCompositionScope();
    return EndCompositionScope_instance;
  }
  function UseCurrentNode() {
    UseCurrentNode_instance = this;
    Operation.call(this);
  }
  protoOf(UseCurrentNode).x2n = function (_this__u8e3s4, applier, slots, rememberManager) {
    var tmp = applier.s1r();
    ((!(tmp == null) ? isInterface(tmp, ComposeNodeLifecycleCallback) : false) ? tmp : THROW_CCE()).x1s();
  };
  var UseCurrentNode_instance;
  function UseCurrentNode_getInstance() {
    if (UseCurrentNode_instance == null)
      new UseCurrentNode();
    return UseCurrentNode_instance;
  }
  function UpdateNode() {
    UpdateNode_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(UpdateNode).o2m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'block';
      } else {
        tmp = protoOf(Operation).o2m.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(UpdateNode).x2n = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var value = _this__u8e3s4.c2o(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var block = _this__u8e3s4.c2o(tmp$ret$1);
    block(applier.s1r(), value);
  };
  var UpdateNode_instance;
  function UpdateNode_getInstance() {
    if (UpdateNode_instance == null)
      new UpdateNode();
    return UpdateNode_instance;
  }
  function RemoveNode() {
    RemoveNode_instance = this;
    Operation.call(this, 2);
  }
  protoOf(RemoveNode).n2m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.RemoveIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'removeIndex';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.RemoveNode.Count' call
      if (parameter === _IntParameter___init__impl__oy5xkp(1)) {
        tmp = 'count';
      } else {
        tmp = protoOf(Operation).n2m.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(RemoveNode).x2n = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.RemoveIndex' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    var tmp = _this__u8e3s4.y2n(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.Count' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(1);
    applier.z1r(tmp, _this__u8e3s4.y2n(tmp$ret$1));
  };
  var RemoveNode_instance;
  function RemoveNode_getInstance() {
    if (RemoveNode_instance == null)
      new RemoveNode();
    return RemoveNode_instance;
  }
  function MoveNode() {
    MoveNode_instance = this;
    Operation.call(this, 3);
  }
  protoOf(MoveNode).n2m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.From' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'from';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.MoveNode.To' call
      if (parameter === _IntParameter___init__impl__oy5xkp(1)) {
        tmp = 'to';
      } else {
        // Inline function 'androidx.compose.runtime.changelist.MoveNode.Count' call
        if (parameter === _IntParameter___init__impl__oy5xkp(2)) {
          tmp = 'count';
        } else {
          tmp = protoOf(Operation).n2m.call(this, parameter);
        }
      }
    }
    return tmp;
  };
  protoOf(MoveNode).x2n = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.From' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    var tmp = _this__u8e3s4.y2n(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.To' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(1);
    var tmp_0 = _this__u8e3s4.y2n(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.Count' call
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(2);
    applier.a1s(tmp, tmp_0, _this__u8e3s4.y2n(tmp$ret$2));
  };
  var MoveNode_instance;
  function MoveNode_getInstance() {
    if (MoveNode_instance == null)
      new MoveNode();
    return MoveNode_instance;
  }
  function InsertSlots() {
    InsertSlots_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(InsertSlots).o2m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.InsertSlots.FromSlotTable' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'from';
      } else {
        tmp = protoOf(Operation).o2m.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(InsertSlots).x2n = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.FromSlotTable' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(1);
    var insertTable = _this__u8e3s4.c2o(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.Anchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(0);
    var anchor = _this__u8e3s4.c2o(tmp$ret$1);
    slots.v1z();
    slots.i2i(insertTable, anchor.q25(insertTable), false);
    slots.b21();
  };
  var InsertSlots_instance;
  function InsertSlots_getInstance() {
    if (InsertSlots_instance == null)
      new InsertSlots();
    return InsertSlots_instance;
  }
  function InsertSlotsWithFixups() {
    InsertSlotsWithFixups_instance = this;
    Operation.call(this, VOID, 3);
  }
  protoOf(InsertSlotsWithFixups).o2m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.FromSlotTable' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'from';
      } else {
        // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Fixups' call
        if (parameter === _ObjectParameter___init__impl__iyg1ip(2)) {
          tmp = 'fixups';
        } else {
          tmp = protoOf(Operation).o2m.call(this, parameter);
        }
      }
    }
    return tmp;
  };
  protoOf(InsertSlotsWithFixups).x2n = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.FromSlotTable' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(1);
    var insertTable = _this__u8e3s4.c2o(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Anchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(0);
    var anchor = _this__u8e3s4.c2o(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Fixups' call
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    var fixups = _this__u8e3s4.c2o(tmp$ret$2);
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = insertTable.u1y();
    var normalClose = false;
    var tmp;
    try {
      // Inline function 'kotlin.also' call
      fixups.t2n(applier, writer, rememberManager);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
      normalClose = true;
      tmp = Unit_instance;
    }finally {
      writer.z1y(normalClose);
    }
    slots.v1z();
    slots.i2i(insertTable, anchor.q25(insertTable), false);
    slots.b21();
  };
  var InsertSlotsWithFixups_instance;
  function InsertSlotsWithFixups_getInstance() {
    if (InsertSlotsWithFixups_instance == null)
      new InsertSlotsWithFixups();
    return InsertSlotsWithFixups_instance;
  }
  function InsertNodeFixup() {
    InsertNodeFixup_instance = this;
    Operation.call(this, 1, 2);
  }
  protoOf(InsertNodeFixup).n2m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.InsertIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'insertIndex';
    } else {
      tmp = protoOf(Operation).n2m.call(this, parameter);
    }
    return tmp;
  };
  protoOf(InsertNodeFixup).o2m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.Factory' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'factory';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.GroupAnchor' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'groupAnchor';
      } else {
        tmp = protoOf(Operation).o2m.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(InsertNodeFixup).x2n = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.Factory' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var node = _this__u8e3s4.c2o(tmp$ret$0)();
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.GroupAnchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var groupAnchor = _this__u8e3s4.c2o(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.InsertIndex' call
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(0);
    var insertIndex = _this__u8e3s4.y2n(tmp$ret$2);
    var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
    slots.x2h(groupAnchor, node);
    nodeApplier.x1r(insertIndex, node);
    nodeApplier.v1r(node);
  };
  var InsertNodeFixup_instance;
  function InsertNodeFixup_getInstance() {
    if (InsertNodeFixup_instance == null)
      new InsertNodeFixup();
    return InsertNodeFixup_instance;
  }
  function PostInsertNodeFixup() {
    PostInsertNodeFixup_instance = this;
    Operation.call(this, 1, 1);
  }
  protoOf(PostInsertNodeFixup).n2m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.InsertIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'insertIndex';
    } else {
      tmp = protoOf(Operation).n2m.call(this, parameter);
    }
    return tmp;
  };
  protoOf(PostInsertNodeFixup).o2m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.GroupAnchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'groupAnchor';
    } else {
      tmp = protoOf(Operation).o2m.call(this, parameter);
    }
    return tmp;
  };
  protoOf(PostInsertNodeFixup).x2n = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.GroupAnchor' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var groupAnchor = _this__u8e3s4.c2o(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.InsertIndex' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    var insertIndex = _this__u8e3s4.y2n(tmp$ret$1);
    applier.w1r();
    var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
    var nodeToInsert = slots.q2h(groupAnchor);
    nodeApplier.y1r(insertIndex, nodeToInsert);
  };
  var PostInsertNodeFixup_instance;
  function PostInsertNodeFixup_getInstance() {
    if (PostInsertNodeFixup_instance == null)
      new PostInsertNodeFixup();
    return PostInsertNodeFixup_instance;
  }
  function ResetSlots() {
    ResetSlots_instance = this;
    Operation.call(this);
  }
  protoOf(ResetSlots).x2n = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.s2h();
  };
  var ResetSlots_instance;
  function ResetSlots_getInstance() {
    if (ResetSlots_instance == null)
      new ResetSlots();
    return ResetSlots_instance;
  }
  function DetermineMovableContentNodeIndex() {
    DetermineMovableContentNodeIndex_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(DetermineMovableContentNodeIndex).o2m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.EffectiveNodeIndexOut' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'effectiveNodeIndexOut';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.Anchor' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'anchor';
      } else {
        tmp = protoOf(Operation).o2m.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(DetermineMovableContentNodeIndex).x2n = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.EffectiveNodeIndexOut' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var effectiveNodeIndexOut = _this__u8e3s4.c2o(tmp$ret$0);
    var tmp = effectiveNodeIndexOut;
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.Anchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var tmp_0 = _this__u8e3s4.c2o(tmp$ret$1);
    tmp.z2p_1 = positionToInsert(slots, tmp_0, isInterface(applier, Applier) ? applier : THROW_CCE());
  };
  var DetermineMovableContentNodeIndex_instance;
  function DetermineMovableContentNodeIndex_getInstance() {
    if (DetermineMovableContentNodeIndex_instance == null)
      new DetermineMovableContentNodeIndex();
    return DetermineMovableContentNodeIndex_instance;
  }
  function CopyNodesToNewAnchorLocation() {
    CopyNodesToNewAnchorLocation_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(CopyNodesToNewAnchorLocation).o2m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.EffectiveNodeIndex' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'effectiveNodeIndex';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.Nodes' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'nodes';
      } else {
        tmp = protoOf(Operation).o2m.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(CopyNodesToNewAnchorLocation).x2n = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.EffectiveNodeIndex' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var effectiveNodeIndex = _this__u8e3s4.c2o(tmp$ret$0).z2p_1;
    // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.Nodes' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var nodesToInsert = _this__u8e3s4.c2o(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.snapshots.fastForEachIndexed' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = nodesToInsert.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = nodesToInsert.o(index);
        // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.execute.<anonymous>' call
        if (!isInterface(applier, Applier))
          THROW_CCE();
        applier.y1r(effectiveNodeIndex + index | 0, item);
        applier.x1r(effectiveNodeIndex + index | 0, item);
      }
       while (inductionVariable <= last);
  };
  var CopyNodesToNewAnchorLocation_instance;
  function CopyNodesToNewAnchorLocation_getInstance() {
    if (CopyNodesToNewAnchorLocation_instance == null)
      new CopyNodesToNewAnchorLocation();
    return CopyNodesToNewAnchorLocation_instance;
  }
  function CopySlotTableToAnchorLocation() {
    CopySlotTableToAnchorLocation_instance = this;
    Operation.call(this, VOID, 4);
  }
  protoOf(CopySlotTableToAnchorLocation).o2m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ResolvedState' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'resolvedState';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ParentCompositionContext' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'resolvedCompositionContext';
      } else {
        // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.From' call
        if (parameter === _ObjectParameter___init__impl__iyg1ip(2)) {
          tmp = 'from';
        } else {
          // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.To' call
          if (parameter === _ObjectParameter___init__impl__iyg1ip(3)) {
            tmp = 'to';
          } else {
            tmp = protoOf(Operation).o2m.call(this, parameter);
          }
        }
      }
    }
    return tmp;
  };
  protoOf(CopySlotTableToAnchorLocation).x2n = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.From' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(2);
    var from = _this__u8e3s4.c2o(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.To' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(3);
    var to = _this__u8e3s4.c2o(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ParentCompositionContext' call
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(1);
    var parentCompositionContext = _this__u8e3s4.c2o(tmp$ret$2);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ResolvedState' call
    var tmp$ret$3 = _ObjectParameter___init__impl__iyg1ip(0);
    var tmp0_elvis_lhs = _this__u8e3s4.c2o(tmp$ret$3);
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? parentCompositionContext.f22(from) : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      composeRuntimeError('Could not resolve state for movable content');
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var resolvedState = tmp;
    var anchors = slots.j2i(1, resolvedState.g22_1, 2);
    var tmp_0 = Companion_instance_2;
    var tmp_1 = to.y21_1;
    tmp_0.y2b(slots, anchors, isInterface(tmp_1, RecomposeScopeOwner) ? tmp_1 : THROW_CCE());
  };
  var CopySlotTableToAnchorLocation_instance;
  function CopySlotTableToAnchorLocation_getInstance() {
    if (CopySlotTableToAnchorLocation_instance == null)
      new CopySlotTableToAnchorLocation();
    return CopySlotTableToAnchorLocation_instance;
  }
  function EndMovableContentPlacement() {
    EndMovableContentPlacement_instance = this;
    Operation.call(this);
  }
  protoOf(EndMovableContentPlacement).x2n = function (_this__u8e3s4, applier, slots, rememberManager) {
    positionToParentOf(slots, isInterface(applier, Applier) ? applier : THROW_CCE(), 0);
    slots.a21();
  };
  var EndMovableContentPlacement_instance;
  function EndMovableContentPlacement_getInstance() {
    if (EndMovableContentPlacement_instance == null)
      new EndMovableContentPlacement();
    return EndMovableContentPlacement_instance;
  }
  function ReleaseMovableGroupAtCurrent() {
    ReleaseMovableGroupAtCurrent_instance = this;
    Operation.call(this, VOID, 3);
  }
  protoOf(ReleaseMovableGroupAtCurrent).o2m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Composition' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'composition';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.ParentCompositionContext' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'parentCompositionContext';
      } else {
        // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Reference' call
        if (parameter === _ObjectParameter___init__impl__iyg1ip(2)) {
          tmp = 'reference';
        } else {
          tmp = protoOf(Operation).o2m.call(this, parameter);
        }
      }
    }
    return tmp;
  };
  protoOf(ReleaseMovableGroupAtCurrent).x2n = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Composition' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var tmp = _this__u8e3s4.c2o(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.ParentCompositionContext' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var tmp_0 = _this__u8e3s4.c2o(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Reference' call
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    releaseMovableGroupAtCurrent(tmp, tmp_0, _this__u8e3s4.c2o(tmp$ret$2), slots);
  };
  var ReleaseMovableGroupAtCurrent_instance;
  function ReleaseMovableGroupAtCurrent_getInstance() {
    if (ReleaseMovableGroupAtCurrent_instance == null)
      new ReleaseMovableGroupAtCurrent();
    return ReleaseMovableGroupAtCurrent_instance;
  }
  function ApplyChangeList() {
    ApplyChangeList_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(ApplyChangeList).o2m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.Changes' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'changes';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.EffectiveNodeIndex' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'effectiveNodeIndex';
      } else {
        tmp = protoOf(Operation).o2m.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(ApplyChangeList).x2n = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.EffectiveNodeIndex' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(1);
    var tmp0_safe_receiver = _this__u8e3s4.c2o(tmp$ret$0);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z2p_1;
    var effectiveNodeIndex = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.Changes' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(0);
    var tmp = _this__u8e3s4.c2o(tmp$ret$1);
    var tmp_0;
    if (effectiveNodeIndex > 0) {
      tmp_0 = new OffsetApplier(applier, effectiveNodeIndex);
    } else {
      tmp_0 = applier;
    }
    tmp.t28(tmp_0, slots, rememberManager);
  };
  var ApplyChangeList_instance;
  function ApplyChangeList_getInstance() {
    if (ApplyChangeList_instance == null)
      new ApplyChangeList();
    return ApplyChangeList_instance;
  }
  function Operation(ints, objects) {
    ints = ints === VOID ? 0 : ints;
    objects = objects === VOID ? 0 : objects;
    this.l2m_1 = ints;
    this.m2m_1 = objects;
  }
  protoOf(Operation).z2n = function () {
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = getKClassFromExpression(this).n9();
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  protoOf(Operation).n2m = function (parameter) {
    return 'IntParameter(' + _IntParameter___get_offset__impl__xsdcin(parameter) + ')';
  };
  protoOf(Operation).o2m = function (parameter) {
    return 'ObjectParameter(' + _ObjectParameter___get_offset__impl__x7fx93(parameter) + ')';
  };
  protoOf(Operation).toString = function () {
    return this.z2n();
  };
  function positionToInsert(slots, anchor, applier) {
    var destination = slots.d22(anchor);
    runtimeCheck(slots.c1y_1 < destination);
    positionToParentOf(slots, applier, destination);
    var nodeIndex = currentNodeIndex(slots);
    while (slots.c1y_1 < destination) {
      if (slots.m2h(destination)) {
        if (slots.r25()) {
          applier.v1r(slots.d23(slots.c1y_1));
          nodeIndex = 0;
        }
        slots.c1z();
      } else
        nodeIndex = nodeIndex + slots.k1y() | 0;
    }
    runtimeCheck(slots.c1y_1 === destination);
    return nodeIndex;
  }
  function positionToParentOf(slots, applier, index) {
    while (!slots.l2h(index)) {
      slots.v1y();
      if (slots.i21(slots.e1y_1)) {
        applier.w1r();
      }
      slots.a21();
    }
  }
  function releaseMovableGroupAtCurrent(composition, parentContext, reference, slots) {
    var slotTable = new SlotTable();
    if (slots.j2h()) {
      slotTable.w1y();
    }
    if (slots.k2h()) {
      slotTable.x1y();
    }
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = slotTable.u1y();
    var normalClose = false;
    var tmp;
    try {
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.changelist.releaseMovableGroupAtCurrent.<anonymous>' call
      writer.v1z();
      writer.g1z(126665345, reference.w21_1);
      writer.s21();
      writer.n25(reference.x21_1);
      var anchors = slots.h2i(reference.a22_1, 1, writer);
      writer.k1y();
      writer.a21();
      writer.b21();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
      normalClose = true;
      tmp = anchors;
    }finally {
      writer.z1y(normalClose);
    }
    var anchors_0 = tmp;
    var state = new MovableContentState(slotTable);
    if (Companion_instance_2.b2c(slotTable, anchors_0)) {
      var movableContentRecomposeScopeOwner = new releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1(composition, reference);
      // Inline function 'androidx.compose.runtime.SlotTable.write' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
      var writer_0 = slotTable.u1y();
      var normalClose_0 = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        Companion_instance_2.y2b(writer_0, anchors_0, movableContentRecomposeScopeOwner);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
        normalClose_0 = true;
        tmp_0 = Unit_instance;
      }finally {
        writer_0.z1y(normalClose_0);
      }
    }
    parentContext.u2a(reference, state);
  }
  function currentNodeIndex(slots) {
    var original = slots.c1y_1;
    var current = slots.e1y_1;
    while (current >= 0 && !slots.i21(current)) {
      current = slots.n1y(current);
    }
    var index = 0;
    current = current + 1 | 0;
    while (current < original) {
      if (slots.n2h(original, current)) {
        if (slots.i21(current))
          index = 0;
        current = current + 1 | 0;
      } else {
        index = index + (slots.i21(current) ? 1 : slots.j21(current)) | 0;
        current = current + slots.m20(current) | 0;
      }
    }
    return index;
  }
  function releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1($composition, $reference) {
    this.k2q_1 = $composition;
    this.l2q_1 = $reference;
  }
  protoOf(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).n2a = function (scope, instance) {
    var tmp = this.k2q_1;
    var tmp0_safe_receiver = isInterface(tmp, RecomposeScopeOwner) ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n2a(scope, instance);
    var result = tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
    if (result.equals(InvalidationResult_IGNORED_getInstance())) {
      var tmp2_this = this.l2q_1;
      tmp2_this.b22_1 = plus_1(tmp2_this.b22_1, to(scope, instance));
      return InvalidationResult_SCHEDULED_getInstance();
    }
    return result;
  };
  protoOf(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).r2a = function (scope) {
  };
  protoOf(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).v29 = function (value) {
  };
  function OperationsDebugStringFormattable() {
  }
  function _WriteScope___init__impl__4xwato(stack) {
    return stack;
  }
  function _get_stack__b8zp2v($this) {
    return $this;
  }
  function _WriteScope___get_operation__impl__krvgwa($this) {
    return peekOperation(_get_stack__b8zp2v($this));
  }
  function WriteScope__setInt_impl_yt2o8b($this, parameter, value) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = _get_stack__b8zp2v($this);
    var mask = 1 << _IntParameter___get_offset__impl__xsdcin(parameter);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(($this$with.g2m_1 & mask) === 0)) {
      // Inline function 'androidx.compose.runtime.changelist.WriteScope.setInt.<anonymous>.<anonymous>' call
      var tmp$ret$0 = 'Already pushed argument ' + _WriteScope___get_operation__impl__krvgwa($this).n2m(parameter);
      throwIllegalStateException(tmp$ret$0);
    }
    $this$with.g2m_1 = $this$with.g2m_1 | mask;
    $this$with.c2m_1[topIntIndexOf($this$with, parameter)] = value;
    return Unit_instance;
  }
  function WriteScope__setObject_impl_rr41y9($this, parameter, value) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = _get_stack__b8zp2v($this);
    var mask = 1 << _ObjectParameter___get_offset__impl__x7fx93(parameter);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(($this$with.h2m_1 & mask) === 0)) {
      // Inline function 'androidx.compose.runtime.changelist.WriteScope.setObject.<anonymous>.<anonymous>' call
      var tmp$ret$0 = 'Already pushed argument ' + _WriteScope___get_operation__impl__krvgwa($this).o2m(parameter);
      throwIllegalStateException(tmp$ret$0);
    }
    $this$with.h2m_1 = $this$with.h2m_1 | mask;
    $this$with.e2m_1[topObjectIndexOf($this$with, parameter)] = value;
    return Unit_instance;
  }
  function determineNewSize($this, currentSize, requiredSize) {
    var resizeAmount = coerceAtMost(currentSize, 1024);
    return coerceAtLeast(currentSize + resizeAmount | 0, requiredSize);
  }
  function ensureIntArgsSizeAtLeast($this, requiredSize) {
    var currentSize = $this.c2m_1.length;
    if (requiredSize > currentSize) {
      $this.c2m_1 = copyOf($this.c2m_1, determineNewSize($this, currentSize, requiredSize));
    }
  }
  function ensureObjectArgsSizeAtLeast($this, requiredSize) {
    var currentSize = $this.e2m_1.length;
    if (requiredSize > currentSize) {
      $this.e2m_1 = copyOf_0($this.e2m_1, determineNewSize($this, currentSize, requiredSize));
    }
  }
  function createExpectedArgMask($this, paramCount) {
    return paramCount === 0 ? 0 : -1 >>> (32 - paramCount | 0) | 0;
  }
  function peekOperation($this) {
    return ensureNotNull($this.a2m_1[$this.b2m_1 - 1 | 0]);
  }
  function topIntIndexOf($this, parameter) {
    return ($this.d2m_1 - peekOperation($this).l2m_1 | 0) + _IntParameter___get_offset__impl__xsdcin(parameter) | 0;
  }
  function topObjectIndexOf($this, parameter) {
    return ($this.f2m_1 - peekOperation($this).m2m_1 | 0) + _ObjectParameter___get_offset__impl__x7fx93(parameter) | 0;
  }
  function OpIterator($outer) {
    this.p2q_1 = $outer;
    this.m2q_1 = 0;
    this.n2q_1 = 0;
    this.o2q_1 = 0;
  }
  protoOf(OpIterator).k = function () {
    if (this.m2q_1 >= this.p2q_1.b2m_1)
      return false;
    var op = this.q2q();
    this.n2q_1 = this.n2q_1 + op.l2m_1 | 0;
    this.o2q_1 = this.o2q_1 + op.m2m_1 | 0;
    this.m2q_1 = this.m2q_1 + 1 | 0;
    return this.m2q_1 < this.p2q_1.b2m_1;
  };
  protoOf(OpIterator).q2q = function () {
    return ensureNotNull(this.p2q_1.a2m_1[this.m2q_1]);
  };
  protoOf(OpIterator).y2n = function (parameter) {
    return this.p2q_1.c2m_1[this.n2q_1 + _IntParameter___get_offset__impl__xsdcin(parameter) | 0];
  };
  protoOf(OpIterator).c2o = function (parameter) {
    var tmp = this.p2q_1.e2m_1[this.o2q_1 + _ObjectParameter___get_offset__impl__x7fx93(parameter) | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function Companion_5() {
    this.r2q_1 = 1024;
    this.s2q_1 = 16;
  }
  var Companion_instance_6;
  function Companion_getInstance_5() {
    return Companion_instance_6;
  }
  function Operations() {
    OperationsDebugStringFormattable.call(this);
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.a2m_1 = fillArrayVal(Array(16), null);
    this.b2m_1 = 0;
    this.c2m_1 = new Int32Array(16);
    this.d2m_1 = 0;
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.e2m_1 = fillArrayVal(Array(16), null);
    this.f2m_1 = 0;
    this.g2m_1 = 0;
    this.h2m_1 = 0;
  }
  protoOf(Operations).l = function () {
    return this.b2m_1;
  };
  protoOf(Operations).n = function () {
    return this.l() === 0;
  };
  protoOf(Operations).b1q = function () {
    return !(this.l() === 0);
  };
  protoOf(Operations).e1 = function () {
    this.b2m_1 = 0;
    this.d2m_1 = 0;
    fill_0(this.e2m_1, null, 0, this.f2m_1);
    this.f2m_1 = 0;
  };
  protoOf(Operations).k2m = function (operation) {
    this.g2m_1 = 0;
    this.h2m_1 = 0;
    if (this.b2m_1 === this.a2m_1.length) {
      var resizeAmount = coerceAtMost(this.b2m_1, 1024);
      this.a2m_1 = copyOf_0(this.a2m_1, this.b2m_1 + resizeAmount | 0);
    }
    ensureIntArgsSizeAtLeast(this, this.d2m_1 + operation.l2m_1 | 0);
    ensureObjectArgsSizeAtLeast(this, this.f2m_1 + operation.m2m_1 | 0);
    var tmp = this.a2m_1;
    var tmp1 = this.b2m_1;
    this.b2m_1 = tmp1 + 1 | 0;
    tmp[tmp1] = operation;
    this.d2m_1 = this.d2m_1 + operation.l2m_1 | 0;
    this.f2m_1 = this.f2m_1 + operation.m2m_1 | 0;
  };
  protoOf(Operations).u2m = function (operation) {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(operation.l2m_1 === 0 && operation.m2m_1 === 0)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var tmp$ret$0 = 'Cannot push ' + operation.toString() + ' without arguments because it expects ' + ('' + operation.l2m_1 + ' ints and ' + operation.m2m_1 + ' objects.');
      throwIllegalArgumentException(tmp$ret$0);
    }
    this.k2m(operation);
  };
  protoOf(Operations).u2n = function (other) {
    if (this.n()) {
      throw NoSuchElementException_init_$Create$('Cannot pop(), because the stack is empty.');
    }
    var tmp = this.a2m_1;
    this.b2m_1 = this.b2m_1 - 1 | 0;
    var op = ensureNotNull(tmp[this.b2m_1]);
    this.a2m_1[this.b2m_1] = null;
    other.k2m(op);
    var thisObjIdx = this.f2m_1;
    var otherObjIdx = other.f2m_1;
    // Inline function 'kotlin.repeat' call
    var times = op.m2m_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.changelist.Operations.popInto.<anonymous>' call
        otherObjIdx = otherObjIdx - 1 | 0;
        thisObjIdx = thisObjIdx - 1 | 0;
        other.e2m_1[otherObjIdx] = this.e2m_1[thisObjIdx];
        this.e2m_1[thisObjIdx] = null;
      }
       while (inductionVariable < times);
    var thisIntIdx = this.d2m_1;
    var otherIntIdx = other.d2m_1;
    // Inline function 'kotlin.repeat' call
    var times_0 = op.l2m_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < times_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.runtime.changelist.Operations.popInto.<anonymous>' call
        otherIntIdx = otherIntIdx - 1 | 0;
        thisIntIdx = thisIntIdx - 1 | 0;
        other.c2m_1[otherIntIdx] = this.c2m_1[thisIntIdx];
        this.c2m_1[thisIntIdx] = 0;
      }
       while (inductionVariable_0 < times_0);
    this.f2m_1 = this.f2m_1 - op.m2m_1 | 0;
    this.d2m_1 = this.d2m_1 - op.l2m_1 | 0;
  };
  protoOf(Operations).i2m = function (applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.drain' call
    // Inline function 'androidx.compose.runtime.changelist.Operations.forEach' call
    if (this.b1q()) {
      var iterator = new OpIterator(this);
      do {
        // Inline function 'androidx.compose.runtime.changelist.Operations.executeAndFlushAllPendingOperations.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        iterator.q2q().x2n(iterator, applier, slots, rememberManager);
      }
       while (iterator.k());
    }
    this.e1();
  };
  protoOf(Operations).toString = function () {
    return protoOf(OperationsDebugStringFormattable).toString.call(this);
  };
  function MutableVector(content, size) {
    this.x22_1 = content;
    this.y22_1 = null;
    this.z22_1 = size;
  }
  protoOf(MutableVector).a23 = function (element) {
    this.m1m(this.z22_1 + 1 | 0);
    this.x22_1[this.z22_1] = element;
    this.z22_1 = this.z22_1 + 1 | 0;
    return true;
  };
  protoOf(MutableVector).e1 = function () {
    var content = this.x22_1;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    var inductionVariable = this.z22_1 - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        content[i] = null;
      }
       while (0 <= inductionVariable);
    this.z22_1 = 0;
  };
  protoOf(MutableVector).uc = function (element) {
    var inductionVariable = 0;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    var last = this.z22_1 - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.collection.MutableVector.get' call
        var index = i;
        var tmp = this.x22_1[index];
        var tmp$ret$1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
        if (equals(tmp$ret$1, element))
          return true;
      }
       while (!(i === last));
    return false;
  };
  protoOf(MutableVector).m1m = function (capacity) {
    var oldContent = this.x22_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.math.max' call
      var b = imul(oldContent.length, 2);
      var newSize = Math.max(capacity, b);
      this.x22_1 = copyOf_0(oldContent, newSize);
    }
  };
  protoOf(MutableVector).b1q = function () {
    return !(this.z22_1 === 0);
  };
  protoOf(MutableVector).h1 = function (index) {
    var content = this.x22_1;
    var tmp = content[index];
    var item = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    if (!(index === (this.z22_1 - 1 | 0))) {
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = index + 1 | 0;
      var endIndex = this.z22_1;
      arrayCopy(content, content, index, startIndex, endIndex);
    }
    this.z22_1 = this.z22_1 - 1 | 0;
    content[this.z22_1] = null;
    return item;
  };
  protoOf(MutableVector).j2d = function (newSize) {
    this.z22_1 = newSize;
  };
  function wrapIntoSet(_this__u8e3s4) {
    return new ScatterSetWrapper(_this__u8e3s4);
  }
  function ScatterSetWrapper$iterator$slambda(this$0, resultContinuation) {
    this.b2r_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ScatterSetWrapper$iterator$slambda).s2r = function ($this$iterator, $completion) {
    var tmp = this.t2r($this$iterator, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(ScatterSetWrapper$iterator$slambda).b9 = function (p1, $completion) {
    return this.s2r(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ScatterSetWrapper$iterator$slambda).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        switch (tmp) {
          case 0:
            this.g8_1 = 11;
            var tmp_0 = this;
            tmp_0.d2r_1 = this.b2r_1.q28_1;
            this.e2r_1 = this.d2r_1.x1p_1;
            this.f8_1 = 1;
            continue $sm;
          case 1:
            var tmp_1 = this;
            tmp_1.g2r_1 = this.d2r_1;
            this.h2r_1 = this.g2r_1.w1p_1;
            this.i2r_1 = this.h2r_1.length - 2 | 0;
            this.j2r_1 = numberRangeToNumber(0, this.i2r_1).i();
            this.f8_1 = 2;
            continue $sm;
          case 2:
            if (!this.j2r_1.j()) {
              this.f8_1 = 9;
              continue $sm;
            }

            this.k2r_1 = this.j2r_1.k();
            this.l2r_1 = this.h2r_1[this.k2r_1];
            var this_0 = this.l2r_1;
            if (!this_0.k2(this_0.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              this.m2r_1 = 8 - (~(this.k2r_1 - this.i2r_1 | 0) >>> 31 | 0) | 0;
              this.n2r_1 = until(0, this.m2r_1).i();
              this.f8_1 = 3;
              continue $sm;
            } else {
              this.f8_1 = 8;
              continue $sm;
            }

          case 3:
            if (!this.n2r_1.j()) {
              this.f8_1 = 6;
              continue $sm;
            }

            this.o2r_1 = this.n2r_1.k();
            if (this.l2r_1.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
              this.p2r_1 = (this.k2r_1 << 3) + this.o2r_1 | 0;
              var tmp_2 = this;
              tmp_2.q2r_1 = this.p2r_1;
              var tmp_3 = this;
              var tmp_4 = this.e2r_1[this.q2r_1];
              tmp_3.r2r_1 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
              this.f8_1 = 4;
              suspendResult = this.c2r_1.ld(this.r2r_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.f8_1 = 5;
              continue $sm;
            }

          case 4:
            this.f8_1 = 5;
            continue $sm;
          case 5:
            this.l2r_1 = this.l2r_1.i2(8);
            this.f8_1 = 3;
            continue $sm;
          case 6:
            if (!(this.m2r_1 === 8)) {
              this.f2r_1 = Unit_instance;
              this.f8_1 = 10;
              continue $sm;
            } else {
              this.f8_1 = 7;
              continue $sm;
            }

          case 7:
            this.f8_1 = 8;
            continue $sm;
          case 8:
            this.f8_1 = 2;
            continue $sm;
          case 9:
            if (false) {
              this.f8_1 = 1;
              continue $sm;
            }

            this.f8_1 = 10;
            continue $sm;
          case 10:
            return Unit_instance;
          case 11:
            throw this.i8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.g8_1 === 11) {
          throw e;
        } else {
          this.f8_1 = this.g8_1;
          this.i8_1 = e;
        }
      }
     while (true);
  };
  protoOf(ScatterSetWrapper$iterator$slambda).t2r = function ($this$iterator, completion) {
    var i = new ScatterSetWrapper$iterator$slambda(this.b2r_1, completion);
    i.c2r_1 = $this$iterator;
    return i;
  };
  function ScatterSetWrapper$iterator$slambda_0(this$0, resultContinuation) {
    var i = new ScatterSetWrapper$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$iterator, $completion) {
      return i.s2r($this$iterator, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ScatterSetWrapper(set) {
    this.q28_1 = set;
  }
  protoOf(ScatterSetWrapper).l = function () {
    return this.q28_1.l();
  };
  protoOf(ScatterSetWrapper).n = function () {
    return this.q28_1.n();
  };
  protoOf(ScatterSetWrapper).i = function () {
    return iterator(ScatterSetWrapper$iterator$slambda_0(this, null));
  };
  protoOf(ScatterSetWrapper).vc = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.n();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.i();
      while (tmp0_iterator.j()) {
        var element = tmp0_iterator.k();
        // Inline function 'androidx.compose.runtime.collection.ScatterSetWrapper.containsAll.<anonymous>' call
        if (!this.q28_1.p(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(ScatterSetWrapper).a1 = function (elements) {
    return this.vc(elements);
  };
  protoOf(ScatterSetWrapper).uc = function (element) {
    return this.q28_1.p(element);
  };
  protoOf(ScatterSetWrapper).p = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.uc((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function ScopeMap() {
    this.v22_1 = mutableScatterMapOf();
  }
  protoOf(ScopeMap).l = function () {
    return this.v22_1.l();
  };
  protoOf(ScopeMap).s28 = function (key, scope) {
    // Inline function 'androidx.collection.MutableScatterMap.compute' call
    var this_0 = this.v22_1;
    var index = this_0.u1o(key);
    var inserting = index < 0;
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.add.<anonymous>' call
    var tmp;
    if (inserting) {
      tmp = null;
    } else {
      var tmp_0 = this_0.k1o_1[index];
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    }
    var value = tmp;
    var tmp_1;
    if (value == null) {
      tmp_1 = scope;
    } else {
      if (value instanceof MutableScatterSet) {
        (value instanceof MutableScatterSet ? value : THROW_CCE()).d(scope);
        tmp_1 = value;
      } else {
        var tmp_2;
        if (!(value === scope)) {
          var set = new MutableScatterSet();
          set.d(!(value == null) ? value : THROW_CCE());
          set.d(scope);
          tmp_2 = set;
        } else {
          tmp_2 = value;
        }
        tmp_1 = tmp_2;
      }
    }
    var computedValue = tmp_1;
    if (inserting) {
      var insertionIndex = ~index;
      this_0.j1o_1[insertionIndex] = key;
      this_0.k1o_1[insertionIndex] = computedValue;
    } else {
      this_0.k1o_1[index] = computedValue;
    }
  };
  protoOf(ScopeMap).z28 = function (key, value) {
    this.v22_1.t1o(key, value);
  };
  protoOf(ScopeMap).r28 = function (element) {
    return this.v22_1.l1(element);
  };
  protoOf(ScopeMap).o28 = function (key, scope) {
    var tmp0_elvis_lhs = this.v22_1.n1(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var value = tmp;
    var tmp_0;
    if (value instanceof MutableScatterSet) {
      var set = value instanceof MutableScatterSet ? value : THROW_CCE();
      var removed = set.d1(scope);
      if (removed && set.n()) {
        this.v22_1.i4(key);
      }
      return removed;
    } else {
      if (equals(value, scope)) {
        this.v22_1.i4(key);
        tmp_0 = true;
      } else {
        tmp_0 = false;
      }
    }
    return tmp_0;
  };
  protoOf(ScopeMap).a2a = function (scope) {
    // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
    var this_0 = this.v22_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.i1o_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          if (!this_1.k2(this_1.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                  // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScope.<anonymous>' call
                  var tmp = this_0.j1o_1[index];
                  (tmp == null ? true : !(tmp == null)) || THROW_CCE();
                  var tmp_0 = this_0.k1o_1[index];
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  var tmp_1;
                  if (value instanceof MutableScatterSet) {
                    var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                    set.d1(scope);
                    tmp_1 = set.n();
                  } else {
                    tmp_1 = value === scope;
                  }
                  if (tmp_1) {
                    this_0.b1n(index);
                  }
                }
                slot = slot.i2(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
  };
  protoOf(ScopeMap).o29 = function () {
    // Inline function 'kotlin.collections.hashMapOf' call
    var result = HashMap_init_$Create$_0();
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var this_0 = this.v22_1;
    var k = this_0.j1o_1;
    var v = this_0.k1o_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.i1o_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          if (!this_1.k2(this_1.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                  // Inline function 'androidx.compose.runtime.collection.ScopeMap.asMap.<anonymous>' call
                  var tmp = k[index];
                  var key = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = v[index];
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  // Inline function 'kotlin.collections.set' call
                  var key_0 = !(key == null) ? key : THROW_CCE();
                  var tmp_1;
                  if (value instanceof MutableScatterSet) {
                    var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                    tmp_1 = set.d1q();
                  } else {
                    tmp_1 = mutableSetOf([!(value == null) ? value : THROW_CCE()]);
                  }
                  var value_0 = tmp_1;
                  result.h4(key_0, value_0);
                }
                slot = slot.i2(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return result;
  };
  function persistentSetOf() {
    return Companion_getInstance_9().v2r();
  }
  function persistentListOf() {
    return persistentVectorOf();
  }
  function AbstractListIterator(index, size) {
    this.w2r_1 = index;
    this.x2r_1 = size;
  }
  protoOf(AbstractListIterator).j = function () {
    return this.w2r_1 < this.x2r_1;
  };
  protoOf(AbstractListIterator).q3 = function () {
    return this.w2r_1 > 0;
  };
  protoOf(AbstractListIterator).y2r = function () {
    if (!this.j())
      throw NoSuchElementException_init_$Create$_0();
  };
  protoOf(AbstractListIterator).z2r = function () {
    if (!this.q3())
      throw NoSuchElementException_init_$Create$_0();
  };
  function AbstractPersistentList() {
    AbstractList.call(this);
  }
  protoOf(AbstractPersistentList).m = function (elements) {
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.mutate' call
    // Inline function 'kotlin.apply' call
    var this_0 = this.a2s();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.AbstractPersistentList.addAll.<anonymous>' call
    this_0.m(elements);
    return this_0.b2s();
  };
  protoOf(AbstractPersistentList).d1 = function (element) {
    var index = this.q(element);
    if (!(index === -1)) {
      return this.h1(index);
    }
    return this;
  };
  protoOf(AbstractPersistentList).p = function (element) {
    return !(this.q(element) === -1);
  };
  protoOf(AbstractPersistentList).a1 = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.n();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.i();
      while (tmp0_iterator.j()) {
        var element = tmp0_iterator.k();
        // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.AbstractPersistentList.containsAll.<anonymous>' call
        if (!this.p(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(AbstractPersistentList).i = function () {
    return this.b1();
  };
  protoOf(AbstractPersistentList).b1 = function () {
    return this.c1(0);
  };
  function BufferIterator(buffer, index, size) {
    AbstractListIterator.call(this, index, size);
    this.f2s_1 = buffer;
  }
  protoOf(BufferIterator).k = function () {
    if (!this.j()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    var tmp1 = this.w2r_1;
    this.w2r_1 = tmp1 + 1 | 0;
    return this.f2s_1[tmp1];
  };
  protoOf(BufferIterator).r3 = function () {
    if (!this.q3()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    this.w2r_1 = this.w2r_1 - 1 | 0;
    return this.f2s_1[this.w2r_1];
  };
  function rootSize($this) {
    return rootSize_1($this.i2s_1);
  }
  function pushFilledTail($this, root, filledTail, newTail) {
    if ($this.i2s_1 >> 5 > 1 << $this.j2s_1) {
      var newRoot = presizedBufferWith(root);
      var newRootShift = $this.j2s_1 + 5 | 0;
      newRoot = pushTail($this, newRoot, newRootShift, filledTail);
      return new PersistentVector(newRoot, newTail, $this.i2s_1 + 1 | 0, newRootShift);
    }
    var newRoot_0 = pushTail($this, root, $this.j2s_1, filledTail);
    return new PersistentVector(newRoot_0, newTail, $this.i2s_1 + 1 | 0, $this.j2s_1);
  }
  function pushTail($this, root, shift, tail) {
    var bufferIndex = indexSegment($this.i2s_1 - 1 | 0, shift);
    var tmp1_elvis_lhs = root == null ? null : copyOf_0(root, 32);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp = fillArrayVal(Array(32), null);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var newRootNode = tmp;
    if (shift === 5) {
      newRootNode[bufferIndex] = tail;
    } else {
      var tmp_0 = newRootNode[bufferIndex];
      newRootNode[bufferIndex] = pushTail($this, (tmp_0 == null ? true : isArray(tmp_0)) ? tmp_0 : THROW_CCE(), shift - 5 | 0, tail);
    }
    return newRootNode;
  }
  function insertIntoTail($this, root, tailIndex, element) {
    var tailSize = $this.i2s_1 - rootSize($this) | 0;
    var newTail = copyOf_0($this.h2s_1, 32);
    if (tailSize < 32) {
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.h2s_1;
      var destinationOffset = tailIndex + 1 | 0;
      arrayCopy(this_0, newTail, destinationOffset, tailIndex, tailSize);
      newTail[tailIndex] = element;
      return new PersistentVector(root, newTail, $this.i2s_1 + 1 | 0, $this.j2s_1);
    }
    var lastElement = $this.h2s_1[31];
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = $this.h2s_1;
    var destinationOffset_0 = tailIndex + 1 | 0;
    var endIndex = tailSize - 1 | 0;
    arrayCopy(this_1, newTail, destinationOffset_0, tailIndex, endIndex);
    newTail[tailIndex] = element;
    return pushFilledTail($this, root, newTail, presizedBufferWith(lastElement));
  }
  function insertIntoRoot($this, root, shift, index, element, elementCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var tmp;
      if (bufferIndex === 0) {
        // Inline function 'kotlin.arrayOfNulls' call
        tmp = fillArrayVal(Array(32), null);
      } else {
        tmp = copyOf_0(root, 32);
      }
      var newRoot = tmp;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = bufferIndex + 1 | 0;
      arrayCopy(root, newRoot, destinationOffset, bufferIndex, 31);
      elementCarry.k2s_1 = root[31];
      newRoot[bufferIndex] = element;
      return newRoot;
    }
    var newRoot_0 = copyOf_0(root, 32);
    var lowerLevelShift = shift - 5 | 0;
    var tmp_0 = root[bufferIndex];
    newRoot_0[bufferIndex] = insertIntoRoot($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, index, element, elementCarry);
    var inductionVariable = bufferIndex + 1 | 0;
    if (inductionVariable < 32)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (newRoot_0[i] == null)
          break $l$loop;
        var tmp_1 = root[i];
        newRoot_0[i] = insertIntoRoot($this, (!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE(), lowerLevelShift, 0, elementCarry.k2s_1, elementCarry);
      }
       while (inductionVariable < 32);
    return newRoot_0;
  }
  function removeFromTailAt($this, root, rootSize, shift, index) {
    var tailSize = $this.i2s_1 - rootSize | 0;
    assert(index < tailSize);
    if (tailSize === 1) {
      return pullLastBufferFromRoot($this, root, rootSize, shift);
    }
    var newTail = copyOf_0($this.h2s_1, 32);
    if (index < (tailSize - 1 | 0)) {
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.h2s_1;
      var startIndex = index + 1 | 0;
      arrayCopy(this_0, newTail, index, startIndex, tailSize);
    }
    newTail[tailSize - 1 | 0] = null;
    return new PersistentVector(root, newTail, (rootSize + tailSize | 0) - 1 | 0, shift);
  }
  function pullLastBufferFromRoot($this, root, rootSize, shift) {
    if (shift === 0) {
      var buffer = root.length === 33 ? copyOf_0(root, 32) : root;
      return new SmallPersistentVector(buffer);
    }
    var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(pullLastBuffer($this, root, shift, rootSize - 1 | 0, tailCarry));
    var tmp = tailCarry.k2s_1;
    var newTail = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    if (newRoot[1] == null) {
      var tmp_0 = newRoot[0];
      var lowerLevelRoot = (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE();
      return new PersistentVector(lowerLevelRoot, newTail, rootSize, shift - 5 | 0);
    }
    return new PersistentVector(newRoot, newTail, rootSize, shift);
  }
  function pullLastBuffer($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    var tmp;
    if (shift === 5) {
      tailCarry.k2s_1 = root[bufferIndex];
      tmp = null;
    } else {
      var tmp_0 = root[bufferIndex];
      tmp = pullLastBuffer($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), shift - 5 | 0, index, tailCarry);
    }
    var newBufferAtIndex = tmp;
    if (newBufferAtIndex == null && bufferIndex === 0) {
      return null;
    }
    var newRoot = copyOf_0(root, 32);
    newRoot[bufferIndex] = newBufferAtIndex;
    return newRoot;
  }
  function removeFromRootAt($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var tmp;
      if (bufferIndex === 0) {
        // Inline function 'kotlin.arrayOfNulls' call
        tmp = fillArrayVal(Array(32), null);
      } else {
        tmp = copyOf_0(root, 32);
      }
      var newRoot = tmp;
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = bufferIndex + 1 | 0;
      arrayCopy(root, newRoot, bufferIndex, startIndex, 32);
      newRoot[31] = tailCarry.k2s_1;
      tailCarry.k2s_1 = root[bufferIndex];
      return newRoot;
    }
    var bufferLastIndex = 31;
    if (root[bufferLastIndex] == null) {
      bufferLastIndex = indexSegment(rootSize($this) - 1 | 0, shift);
    }
    var newRoot_0 = copyOf_0(root, 32);
    var lowerLevelShift = shift - 5 | 0;
    var inductionVariable = bufferLastIndex;
    var last = bufferIndex + 1 | 0;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp_0 = newRoot_0[i];
        newRoot_0[i] = removeFromRootAt($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, 0, tailCarry);
      }
       while (!(i === last));
    var tmp_1 = newRoot_0[bufferIndex];
    newRoot_0[bufferIndex] = removeFromRootAt($this, (!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE(), lowerLevelShift, index, tailCarry);
    return newRoot_0;
  }
  function bufferFor($this, index) {
    if (rootSize($this) <= index) {
      return $this.h2s_1;
    }
    var buffer = $this.g2s_1;
    var shift = $this.j2s_1;
    while (shift > 0) {
      var tmp = buffer[indexSegment(index, shift)];
      buffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      shift = shift - 5 | 0;
    }
    return buffer;
  }
  function setInRoot($this, root, shift, index, e) {
    var bufferIndex = indexSegment(index, shift);
    var newRoot = copyOf_0(root, 32);
    if (shift === 0) {
      newRoot[bufferIndex] = e;
    } else {
      var tmp = newRoot[bufferIndex];
      newRoot[bufferIndex] = setInRoot($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), shift - 5 | 0, index, e);
    }
    return newRoot;
  }
  function PersistentVector(root, tail, size, rootShift) {
    AbstractPersistentList.call(this);
    this.g2s_1 = root;
    this.h2s_1 = tail;
    this.i2s_1 = size;
    this.j2s_1 = rootShift;
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.i2s_1 > 32)) {
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVector.<anonymous>' call
      var tmp$ret$0 = 'Trie-based persistent vector should have at least ' + ('33 elements, got ' + this.i2s_1);
      throwIllegalArgumentException(tmp$ret$0);
    }
    assert((this.i2s_1 - rootSize_1(this.i2s_1) | 0) <= coerceAtMost(this.h2s_1.length, 32));
  }
  protoOf(PersistentVector).l = function () {
    return this.i2s_1;
  };
  protoOf(PersistentVector).d = function (element) {
    var tailSize = this.i2s_1 - rootSize(this) | 0;
    if (tailSize < 32) {
      var newTail = copyOf_0(this.h2s_1, 32);
      newTail[tailSize] = element;
      return new PersistentVector(this.g2s_1, newTail, this.i2s_1 + 1 | 0, this.j2s_1);
    }
    var newTail_0 = presizedBufferWith(element);
    return pushFilledTail(this, this.g2s_1, this.h2s_1, newTail_0);
  };
  protoOf(PersistentVector).c2s = function (index, element) {
    ListImplementation_instance.l2s(index, this.i2s_1);
    if (index === this.i2s_1) {
      return this.d(element);
    }
    var rootSize_0 = rootSize(this);
    if (index >= rootSize_0) {
      return insertIntoTail(this, this.g2s_1, index - rootSize_0 | 0, element);
    }
    var elementCarry = new ObjectRef(null);
    var newRoot = insertIntoRoot(this, this.g2s_1, this.j2s_1, index, element, elementCarry);
    return insertIntoTail(this, newRoot, 0, elementCarry.k2s_1);
  };
  protoOf(PersistentVector).h1 = function (index) {
    ListImplementation_instance.m2s(index, this.i2s_1);
    var rootSize_0 = rootSize(this);
    if (index >= rootSize_0) {
      return removeFromTailAt(this, this.g2s_1, rootSize_0, this.j2s_1, index - rootSize_0 | 0);
    }
    var newRoot = removeFromRootAt(this, this.g2s_1, this.j2s_1, index, new ObjectRef(this.h2s_1[0]));
    return removeFromTailAt(this, newRoot, rootSize_0, this.j2s_1, 0);
  };
  protoOf(PersistentVector).a2s = function () {
    return new PersistentVectorBuilder(this, this.g2s_1, this.h2s_1, this.j2s_1);
  };
  protoOf(PersistentVector).c1 = function (index) {
    ListImplementation_instance.l2s(index, this.i2s_1);
    var tmp = this.h2s_1;
    return new PersistentVectorIterator(this.g2s_1, isArray(tmp) ? tmp : THROW_CCE(), index, this.i2s_1, (this.j2s_1 / 5 | 0) + 1 | 0);
  };
  protoOf(PersistentVector).o = function (index) {
    ListImplementation_instance.m2s(index, this.i2s_1);
    var buffer = bufferFor(this, index);
    var tmp = buffer[index & 31];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVector).f1 = function (index, element) {
    ListImplementation_instance.m2s(index, this.i2s_1);
    if (rootSize(this) <= index) {
      var newTail = copyOf_0(this.h2s_1, 32);
      newTail[index & 31] = element;
      return new PersistentVector(this.g2s_1, newTail, this.i2s_1, this.j2s_1);
    }
    var newRoot = setInRoot(this, this.g2s_1, this.j2s_1, index, element);
    return new PersistentVector(newRoot, this.h2s_1, this.i2s_1, this.j2s_1);
  };
  function rootSize_0($this) {
    if ($this.v2s_1 <= 32) {
      return 0;
    }
    return rootSize_1($this.v2s_1);
  }
  function tailSize($this, size) {
    if (size <= 32) {
      return size;
    }
    return size - rootSize_1(size) | 0;
  }
  function tailSize_0($this) {
    return tailSize($this, $this.v2s_1);
  }
  function isMutable($this, buffer) {
    return buffer.length === 33 && buffer[32] === $this.s2s_1;
  }
  function makeMutable($this, buffer) {
    if (buffer == null) {
      return mutableBuffer($this);
    }
    if (isMutable($this, buffer)) {
      return buffer;
    }
    // Inline function 'kotlin.collections.copyInto' call
    var destination = mutableBuffer($this);
    var endIndex = coerceAtMost(buffer.length, 32);
    arrayCopy(buffer, destination, 0, 0, endIndex);
    return destination;
  }
  function mutableBufferWith($this, element) {
    // Inline function 'kotlin.arrayOfNulls' call
    var buffer = fillArrayVal(Array(33), null);
    buffer[0] = element;
    buffer[32] = $this.s2s_1;
    return buffer;
  }
  function mutableBuffer($this) {
    // Inline function 'kotlin.arrayOfNulls' call
    var buffer = fillArrayVal(Array(33), null);
    buffer[32] = $this.s2s_1;
    return buffer;
  }
  function pushFilledTail_0($this, root, filledTail, newTail) {
    var tmp;
    if ($this.v2s_1 >> 5 > 1 << $this.r2s_1) {
      $this.t2s_1 = pushTail_0($this, mutableBufferWith($this, root), filledTail, $this.r2s_1 + 5 | 0);
      $this.u2s_1 = newTail;
      $this.r2s_1 = $this.r2s_1 + 5 | 0;
      $this.v2s_1 = $this.v2s_1 + 1 | 0;
      tmp = Unit_instance;
    } else if (root == null) {
      $this.t2s_1 = filledTail;
      $this.u2s_1 = newTail;
      $this.v2s_1 = $this.v2s_1 + 1 | 0;
      tmp = Unit_instance;
    } else {
      $this.t2s_1 = pushTail_0($this, root, filledTail, $this.r2s_1);
      $this.u2s_1 = newTail;
      $this.v2s_1 = $this.v2s_1 + 1 | 0;
      tmp = Unit_instance;
    }
    return tmp;
  }
  function pushTail_0($this, root, tail, shift) {
    var index = indexSegment($this.v2s_1 - 1 | 0, shift);
    var mutableRoot = makeMutable($this, root);
    if (shift === 5) {
      mutableRoot[index] = tail;
    } else {
      var tmp = mutableRoot[index];
      mutableRoot[index] = pushTail_0($this, (tmp == null ? true : isArray(tmp)) ? tmp : THROW_CCE(), tail, shift - 5 | 0);
    }
    return mutableRoot;
  }
  function copyToBuffer($this, buffer, bufferIndex, sourceIterator) {
    var index = bufferIndex;
    while (index < 32 && sourceIterator.j()) {
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      buffer[tmp0] = sourceIterator.k();
    }
    return buffer;
  }
  function pushBuffersIncreasingHeightIfNeeded($this, root, rootSize, buffers) {
    var buffersIterator = arrayIterator(buffers);
    var mutableRoot = rootSize >> 5 < 1 << $this.r2s_1 ? pushBuffers($this, root, rootSize, $this.r2s_1, buffersIterator) : makeMutable($this, root);
    while (buffersIterator.j()) {
      $this.r2s_1 = $this.r2s_1 + 5 | 0;
      mutableRoot = mutableBufferWith($this, mutableRoot);
      pushBuffers($this, mutableRoot, 1 << $this.r2s_1, $this.r2s_1, buffersIterator);
    }
    return mutableRoot;
  }
  function pushBuffers($this, root, rootSize, shift, buffersIterator) {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!buffersIterator.j()) {
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVectorBuilder.pushBuffers.<anonymous>' call
      var tmp$ret$0 = 'invalid buffersIterator';
      throwIllegalArgumentException(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(shift >= 0)) {
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVectorBuilder.pushBuffers.<anonymous>' call
      var tmp$ret$1 = 'negative shift';
      throwIllegalArgumentException(tmp$ret$1);
    }
    if (shift === 0) {
      return buffersIterator.k();
    }
    var mutableRoot = makeMutable($this, root);
    var index = indexSegment(rootSize, shift);
    var tmp = index;
    var tmp_0 = mutableRoot[index];
    mutableRoot[tmp] = pushBuffers($this, (tmp_0 == null ? true : isArray(tmp_0)) ? tmp_0 : THROW_CCE(), rootSize, shift - 5 | 0, buffersIterator);
    $l$loop: while (true) {
      var tmp_1;
      index = index + 1 | 0;
      if (index < 32) {
        tmp_1 = buffersIterator.j();
      } else {
        tmp_1 = false;
      }
      if (!tmp_1) {
        break $l$loop;
      }
      var tmp_2 = index;
      var tmp_3 = mutableRoot[index];
      mutableRoot[tmp_2] = pushBuffers($this, (tmp_3 == null ? true : isArray(tmp_3)) ? tmp_3 : THROW_CCE(), 0, shift - 5 | 0, buffersIterator);
    }
    return mutableRoot;
  }
  function insertIntoTail_0($this, root, index, element) {
    var tailSize = tailSize_0($this);
    var mutableTail = makeMutable($this, $this.u2s_1);
    if (tailSize < 32) {
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.u2s_1;
      var destinationOffset = index + 1 | 0;
      arrayCopy(this_0, mutableTail, destinationOffset, index, tailSize);
      mutableTail[index] = element;
      $this.t2s_1 = root;
      $this.u2s_1 = mutableTail;
      $this.v2s_1 = $this.v2s_1 + 1 | 0;
    } else {
      var lastElement = $this.u2s_1[31];
      // Inline function 'kotlin.collections.copyInto' call
      var this_1 = $this.u2s_1;
      var destinationOffset_0 = index + 1 | 0;
      arrayCopy(this_1, mutableTail, destinationOffset_0, index, 31);
      mutableTail[index] = element;
      pushFilledTail_0($this, root, mutableTail, mutableBufferWith($this, lastElement));
    }
  }
  function insertIntoRoot_0($this, root, shift, index, element, elementCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      elementCarry.k2s_1 = root[31];
      // Inline function 'kotlin.collections.copyInto' call
      var destination = makeMutable($this, root);
      var destinationOffset = bufferIndex + 1 | 0;
      arrayCopy(root, destination, destinationOffset, bufferIndex, 31);
      var mutableRoot = destination;
      mutableRoot[bufferIndex] = element;
      return mutableRoot;
    }
    var mutableRoot_0 = makeMutable($this, root);
    var lowerLevelShift = shift - 5 | 0;
    var tmp = mutableRoot_0[bufferIndex];
    mutableRoot_0[bufferIndex] = insertIntoRoot_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), lowerLevelShift, index, element, elementCarry);
    var inductionVariable = bufferIndex + 1 | 0;
    if (inductionVariable < 32)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (mutableRoot_0[i] == null)
          break $l$loop;
        var tmp_0 = mutableRoot_0[i];
        mutableRoot_0[i] = insertIntoRoot_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, 0, elementCarry.k2s_1, elementCarry);
      }
       while (inductionVariable < 32);
    return mutableRoot_0;
  }
  function bufferFor_0($this, index) {
    if (rootSize_0($this) <= index) {
      return $this.u2s_1;
    }
    var buffer = ensureNotNull($this.t2s_1);
    var shift = $this.r2s_1;
    while (shift > 0) {
      var tmp = buffer[indexSegment(index, shift)];
      buffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      shift = shift - 5 | 0;
    }
    return buffer;
  }
  function removeFromTailAt_0($this, root, rootSize, shift, index) {
    var tailSize = $this.v2s_1 - rootSize | 0;
    assert(index < tailSize);
    var removedElement;
    if (tailSize === 1) {
      removedElement = $this.u2s_1[0];
      pullLastBufferFromRoot_0($this, root, rootSize, shift);
    } else {
      removedElement = $this.u2s_1[index];
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.u2s_1;
      var destination = makeMutable($this, $this.u2s_1);
      var startIndex = index + 1 | 0;
      arrayCopy(this_0, destination, index, startIndex, tailSize);
      var mutableTail = destination;
      mutableTail[tailSize - 1 | 0] = null;
      $this.t2s_1 = root;
      $this.u2s_1 = mutableTail;
      $this.v2s_1 = (rootSize + tailSize | 0) - 1 | 0;
      $this.r2s_1 = shift;
    }
    return removedElement;
  }
  function removeFromRootAt_0($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var removedElement = root[bufferIndex];
      // Inline function 'kotlin.collections.copyInto' call
      var destination = makeMutable($this, root);
      var startIndex = bufferIndex + 1 | 0;
      arrayCopy(root, destination, bufferIndex, startIndex, 32);
      var mutableRoot = destination;
      mutableRoot[31] = tailCarry.k2s_1;
      tailCarry.k2s_1 = removedElement;
      return mutableRoot;
    }
    var bufferLastIndex = 31;
    if (root[bufferLastIndex] == null) {
      bufferLastIndex = indexSegment(rootSize_0($this) - 1 | 0, shift);
    }
    var mutableRoot_0 = makeMutable($this, root);
    var lowerLevelShift = shift - 5 | 0;
    var inductionVariable = bufferLastIndex;
    var last = bufferIndex + 1 | 0;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp = mutableRoot_0[i];
        mutableRoot_0[i] = removeFromRootAt_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), lowerLevelShift, 0, tailCarry);
      }
       while (!(i === last));
    var tmp_0 = mutableRoot_0[bufferIndex];
    mutableRoot_0[bufferIndex] = removeFromRootAt_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, index, tailCarry);
    return mutableRoot_0;
  }
  function pullLastBufferFromRoot_0($this, root, rootSize, shift) {
    if (shift === 0) {
      $this.t2s_1 = null;
      var tmp = $this;
      var tmp_0;
      if (root == null) {
        // Inline function 'kotlin.emptyArray' call
        tmp_0 = [];
      } else {
        tmp_0 = root;
      }
      tmp.u2s_1 = tmp_0;
      $this.v2s_1 = rootSize;
      $this.r2s_1 = shift;
      return Unit_instance;
    }
    var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(pullLastBuffer_0($this, ensureNotNull(root), shift, rootSize, tailCarry));
    var tmp_1 = $this;
    var tmp_2 = tailCarry.k2s_1;
    tmp_1.u2s_1 = (!(tmp_2 == null) ? isArray(tmp_2) : false) ? tmp_2 : THROW_CCE();
    $this.v2s_1 = rootSize;
    if (newRoot[1] == null) {
      var tmp_3 = $this;
      var tmp_4 = newRoot[0];
      tmp_3.t2s_1 = (tmp_4 == null ? true : isArray(tmp_4)) ? tmp_4 : THROW_CCE();
      $this.r2s_1 = shift - 5 | 0;
    } else {
      $this.t2s_1 = newRoot;
      $this.r2s_1 = shift;
    }
  }
  function pullLastBuffer_0($this, root, shift, rootSize, tailCarry) {
    var bufferIndex = indexSegment(rootSize - 1 | 0, shift);
    var tmp;
    if (shift === 5) {
      tailCarry.k2s_1 = root[bufferIndex];
      tmp = null;
    } else {
      var tmp_0 = root[bufferIndex];
      tmp = pullLastBuffer_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), shift - 5 | 0, rootSize, tailCarry);
    }
    var newBufferAtIndex = tmp;
    if (newBufferAtIndex == null && bufferIndex === 0) {
      return null;
    }
    var mutableRoot = makeMutable($this, root);
    mutableRoot[bufferIndex] = newBufferAtIndex;
    return mutableRoot;
  }
  function setInRoot_0($this, root, shift, index, e, oldElementCarry) {
    var bufferIndex = indexSegment(index, shift);
    var mutableRoot = makeMutable($this, root);
    if (shift === 0) {
      if (!(mutableRoot === root)) {
        $this.k3_1 = $this.k3_1 + 1 | 0;
      }
      oldElementCarry.k2s_1 = mutableRoot[bufferIndex];
      mutableRoot[bufferIndex] = e;
      return mutableRoot;
    }
    var tmp = mutableRoot[bufferIndex];
    mutableRoot[bufferIndex] = setInRoot_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), shift - 5 | 0, index, e, oldElementCarry);
    return mutableRoot;
  }
  function PersistentVectorBuilder(vector, vectorRoot, vectorTail, rootShift) {
    AbstractMutableList.call(this);
    this.o2s_1 = vector;
    this.p2s_1 = vectorRoot;
    this.q2s_1 = vectorTail;
    this.r2s_1 = rootShift;
    this.s2s_1 = new MutabilityOwnership();
    this.t2s_1 = this.p2s_1;
    this.u2s_1 = this.q2s_1;
    this.v2s_1 = this.o2s_1.l();
  }
  protoOf(PersistentVectorBuilder).l = function () {
    return this.v2s_1;
  };
  protoOf(PersistentVectorBuilder).w2s = function () {
    return this.k3_1;
  };
  protoOf(PersistentVectorBuilder).b2s = function () {
    var tmp = this;
    var tmp_0;
    if (this.t2s_1 === this.p2s_1 && this.u2s_1 === this.q2s_1) {
      tmp_0 = this.o2s_1;
    } else {
      this.s2s_1 = new MutabilityOwnership();
      this.p2s_1 = this.t2s_1;
      this.q2s_1 = this.u2s_1;
      var tmp_1;
      if (this.t2s_1 == null) {
        var tmp_2;
        // Inline function 'kotlin.collections.isEmpty' call
        if (this.u2s_1.length === 0) {
          tmp_2 = persistentVectorOf();
        } else {
          tmp_2 = new SmallPersistentVector(copyOf_0(this.u2s_1, this.v2s_1));
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = new PersistentVector(ensureNotNull(this.t2s_1), this.u2s_1, this.v2s_1, this.r2s_1);
      }
      tmp_0 = tmp_1;
    }
    tmp.o2s_1 = tmp_0;
    return this.o2s_1;
  };
  protoOf(PersistentVectorBuilder).d = function (element) {
    this.k3_1 = this.k3_1 + 1 | 0;
    var tailSize = tailSize_0(this);
    if (tailSize < 32) {
      var mutableTail = makeMutable(this, this.u2s_1);
      mutableTail[tailSize] = element;
      this.u2s_1 = mutableTail;
      this.v2s_1 = this.v2s_1 + 1 | 0;
    } else {
      var newTail = mutableBufferWith(this, element);
      pushFilledTail_0(this, this.t2s_1, this.u2s_1, newTail);
    }
    return true;
  };
  protoOf(PersistentVectorBuilder).m = function (elements) {
    if (elements.n()) {
      return false;
    }
    this.k3_1 = this.k3_1 + 1 | 0;
    var tailSize = tailSize_0(this);
    var elementsIterator = elements.i();
    if ((32 - tailSize | 0) >= elements.l()) {
      this.u2s_1 = copyToBuffer(this, makeMutable(this, this.u2s_1), tailSize, elementsIterator);
      this.v2s_1 = this.v2s_1 + elements.l() | 0;
    } else {
      var buffersSize = ((elements.l() + tailSize | 0) - 1 | 0) / 32 | 0;
      // Inline function 'kotlin.arrayOfNulls' call
      var buffers = fillArrayVal(Array(buffersSize), null);
      buffers[0] = copyToBuffer(this, makeMutable(this, this.u2s_1), tailSize, elementsIterator);
      var inductionVariable = 1;
      if (inductionVariable < buffersSize)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          buffers[index] = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
        }
         while (inductionVariable < buffersSize);
      var tmp = this;
      var tmp_0 = this.t2s_1;
      var tmp_1 = rootSize_0(this);
      tmp.t2s_1 = pushBuffersIncreasingHeightIfNeeded(this, tmp_0, tmp_1, isArray(buffers) ? buffers : THROW_CCE());
      this.u2s_1 = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
      this.v2s_1 = this.v2s_1 + elements.l() | 0;
    }
    return true;
  };
  protoOf(PersistentVectorBuilder).g1 = function (index, element) {
    ListImplementation_instance.l2s(index, this.v2s_1);
    if (index === this.v2s_1) {
      this.d(element);
      return Unit_instance;
    }
    this.k3_1 = this.k3_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      insertIntoTail_0(this, this.t2s_1, index - rootSize | 0, element);
      return Unit_instance;
    }
    var elementCarry = new ObjectRef(null);
    var newRest = insertIntoRoot_0(this, ensureNotNull(this.t2s_1), this.r2s_1, index, element, elementCarry);
    var tmp = elementCarry.k2s_1;
    insertIntoTail_0(this, newRest, 0, (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE());
  };
  protoOf(PersistentVectorBuilder).o = function (index) {
    ListImplementation_instance.m2s(index, this.v2s_1);
    var buffer = bufferFor_0(this, index);
    var tmp = buffer[index & 31];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).h1 = function (index) {
    ListImplementation_instance.m2s(index, this.v2s_1);
    this.k3_1 = this.k3_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      var tmp = removeFromTailAt_0(this, this.t2s_1, rootSize, this.r2s_1, index - rootSize | 0);
      return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    }
    var elementCarry = new ObjectRef(this.u2s_1[0]);
    var newRoot = removeFromRootAt_0(this, ensureNotNull(this.t2s_1), this.r2s_1, index, elementCarry);
    removeFromTailAt_0(this, newRoot, rootSize, this.r2s_1, 0);
    var tmp_0 = elementCarry.k2s_1;
    return (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).f1 = function (index, element) {
    ListImplementation_instance.m2s(index, this.v2s_1);
    if (rootSize_0(this) <= index) {
      var mutableTail = makeMutable(this, this.u2s_1);
      if (!(mutableTail === this.u2s_1)) {
        this.k3_1 = this.k3_1 + 1 | 0;
      }
      var tailIndex = index & 31;
      var oldElement = mutableTail[tailIndex];
      mutableTail[tailIndex] = element;
      this.u2s_1 = mutableTail;
      return (oldElement == null ? true : !(oldElement == null)) ? oldElement : THROW_CCE();
    }
    var oldElementCarry = new ObjectRef(null);
    this.t2s_1 = setInRoot_0(this, ensureNotNull(this.t2s_1), this.r2s_1, index, element, oldElementCarry);
    var tmp = oldElementCarry.k2s_1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).i = function () {
    return this.b1();
  };
  protoOf(PersistentVectorBuilder).b1 = function () {
    return this.c1(0);
  };
  protoOf(PersistentVectorBuilder).c1 = function (index) {
    ListImplementation_instance.l2s(index, this.v2s_1);
    return new PersistentVectorMutableIterator(this, index);
  };
  function PersistentVectorIterator(root, tail, index, size, trieHeight) {
    AbstractListIterator.call(this, index, size);
    this.z2s_1 = tail;
    var trieSize = rootSize_1(size);
    var trieIndex = coerceAtMost(index, trieSize);
    this.a2t_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
  }
  protoOf(PersistentVectorIterator).k = function () {
    this.y2r();
    if (this.a2t_1.j()) {
      this.w2r_1 = this.w2r_1 + 1 | 0;
      return this.a2t_1.k();
    }
    var tmp3 = this.w2r_1;
    this.w2r_1 = tmp3 + 1 | 0;
    return this.z2s_1[tmp3 - this.a2t_1.x2r_1 | 0];
  };
  protoOf(PersistentVectorIterator).r3 = function () {
    this.z2r();
    if (this.w2r_1 > this.a2t_1.x2r_1) {
      this.w2r_1 = this.w2r_1 - 1 | 0;
      return this.z2s_1[this.w2r_1 - this.a2t_1.x2r_1 | 0];
    }
    this.w2r_1 = this.w2r_1 - 1 | 0;
    return this.a2t_1.r3();
  };
  function reset($this) {
    $this.x2r_1 = $this.i2t_1.v2s_1;
    $this.j2t_1 = $this.i2t_1.w2s();
    $this.l2t_1 = -1;
    setupTrieIterator($this);
  }
  function setupTrieIterator($this) {
    var root = $this.i2t_1.t2s_1;
    if (root == null) {
      $this.k2t_1 = null;
      return Unit_instance;
    }
    var trieSize = rootSize_1($this.i2t_1.v2s_1);
    var trieIndex = coerceAtMost($this.w2r_1, trieSize);
    var trieHeight = ($this.i2t_1.r2s_1 / 5 | 0) + 1 | 0;
    if ($this.k2t_1 == null) {
      $this.k2t_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
    } else {
      ensureNotNull($this.k2t_1).m2t(root, trieIndex, trieSize, trieHeight);
    }
  }
  function checkForComodification($this) {
    if (!($this.j2t_1 === $this.i2t_1.w2s()))
      throw ConcurrentModificationException_init_$Create$();
  }
  function checkHasIterated($this) {
    if ($this.l2t_1 === -1)
      throw IllegalStateException_init_$Create$_0();
  }
  function PersistentVectorMutableIterator(builder, index) {
    AbstractListIterator.call(this, index, builder.v2s_1);
    this.i2t_1 = builder;
    this.j2t_1 = this.i2t_1.w2s();
    this.k2t_1 = null;
    this.l2t_1 = -1;
    setupTrieIterator(this);
  }
  protoOf(PersistentVectorMutableIterator).r3 = function () {
    checkForComodification(this);
    this.z2r();
    this.l2t_1 = this.w2r_1 - 1 | 0;
    var tmp1_elvis_lhs = this.k2t_1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0 = this.i2t_1.u2s_1;
      this.w2r_1 = this.w2r_1 - 1 | 0;
      var tmp_1 = tmp_0[this.w2r_1];
      return (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var trieIterator = tmp;
    if (this.w2r_1 > trieIterator.x2r_1) {
      var tmp_2 = this.i2t_1.u2s_1;
      this.w2r_1 = this.w2r_1 - 1 | 0;
      var tmp_3 = tmp_2[this.w2r_1 - trieIterator.x2r_1 | 0];
      return (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
    }
    this.w2r_1 = this.w2r_1 - 1 | 0;
    return trieIterator.r3();
  };
  protoOf(PersistentVectorMutableIterator).k = function () {
    checkForComodification(this);
    this.y2r();
    this.l2t_1 = this.w2r_1;
    var tmp2_elvis_lhs = this.k2t_1;
    var tmp;
    if (tmp2_elvis_lhs == null) {
      var tmp_0 = this.i2t_1.u2s_1;
      var tmp1 = this.w2r_1;
      this.w2r_1 = tmp1 + 1 | 0;
      var tmp_1 = tmp_0[tmp1];
      return (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = tmp2_elvis_lhs;
    }
    var trieIterator = tmp;
    if (trieIterator.j()) {
      this.w2r_1 = this.w2r_1 + 1 | 0;
      return trieIterator.k();
    }
    var tmp_2 = this.i2t_1.u2s_1;
    var tmp6 = this.w2r_1;
    this.w2r_1 = tmp6 + 1 | 0;
    var tmp_3 = tmp_2[tmp6 - trieIterator.x2r_1 | 0];
    return (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
  };
  protoOf(PersistentVectorMutableIterator).g3 = function () {
    checkForComodification(this);
    checkHasIterated(this);
    this.i2t_1.h1(this.l2t_1);
    if (this.l2t_1 < this.w2r_1)
      this.w2r_1 = this.l2t_1;
    reset(this);
  };
  function bufferOfSize($this, size) {
    // Inline function 'kotlin.arrayOfNulls' call
    return fillArrayVal(Array(size), null);
  }
  function Companion_6() {
    Companion_instance_7 = this;
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    tmp.n2t_1 = new SmallPersistentVector(tmp$ret$0);
  }
  var Companion_instance_7;
  function Companion_getInstance_6() {
    if (Companion_instance_7 == null)
      new Companion_6();
    return Companion_instance_7;
  }
  function SmallPersistentVector(buffer) {
    Companion_getInstance_6();
    AbstractPersistentList.call(this);
    this.o2t_1 = buffer;
    assert(this.o2t_1.length <= 32);
  }
  protoOf(SmallPersistentVector).l = function () {
    return this.o2t_1.length;
  };
  protoOf(SmallPersistentVector).d = function (element) {
    if (this.l() < 32) {
      var newBuffer = copyOf_0(this.o2t_1, this.l() + 1 | 0);
      newBuffer[this.l()] = element;
      return new SmallPersistentVector(newBuffer);
    }
    var tail = presizedBufferWith(element);
    return new PersistentVector(this.o2t_1, tail, this.l() + 1 | 0, 0);
  };
  protoOf(SmallPersistentVector).m = function (elements) {
    if ((this.l() + elements.l() | 0) <= 32) {
      var newBuffer = copyOf_0(this.o2t_1, this.l() + elements.l() | 0);
      var index = this.l();
      var tmp0_iterator = elements.i();
      while (tmp0_iterator.j()) {
        var element = tmp0_iterator.k();
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        newBuffer[tmp1] = element;
      }
      return new SmallPersistentVector(newBuffer);
    }
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.mutate' call
    // Inline function 'kotlin.apply' call
    var this_0 = this.a2s();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.SmallPersistentVector.addAll.<anonymous>' call
    this_0.m(elements);
    return this_0.b2s();
  };
  protoOf(SmallPersistentVector).c2s = function (index, element) {
    ListImplementation_instance.l2s(index, this.l());
    if (index === this.l()) {
      return this.d(element);
    }
    if (this.l() < 32) {
      var newBuffer = bufferOfSize(this, this.l() + 1 | 0);
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = this.o2t_1;
      arrayCopy(this_0, newBuffer, 0, 0, index);
      // Inline function 'kotlin.collections.copyInto' call
      var this_1 = this.o2t_1;
      var destinationOffset = index + 1 | 0;
      var endIndex = this.l();
      arrayCopy(this_1, newBuffer, destinationOffset, index, endIndex);
      newBuffer[index] = element;
      return new SmallPersistentVector(newBuffer);
    }
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var root = this.o2t_1.slice();
    // Inline function 'kotlin.collections.copyInto' call
    var this_2 = this.o2t_1;
    var destinationOffset_0 = index + 1 | 0;
    var endIndex_0 = this.l() - 1 | 0;
    arrayCopy(this_2, root, destinationOffset_0, index, endIndex_0);
    root[index] = element;
    var tail = presizedBufferWith(this.o2t_1[31]);
    return new PersistentVector(root, tail, this.l() + 1 | 0, 0);
  };
  protoOf(SmallPersistentVector).h1 = function (index) {
    ListImplementation_instance.m2s(index, this.l());
    if (this.l() === 1) {
      return Companion_getInstance_6().n2t_1;
    }
    var newBuffer = copyOf_0(this.o2t_1, this.l() - 1 | 0);
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = this.o2t_1;
    var startIndex = index + 1 | 0;
    var endIndex = this.l();
    arrayCopy(this_0, newBuffer, index, startIndex, endIndex);
    return new SmallPersistentVector(newBuffer);
  };
  protoOf(SmallPersistentVector).a2s = function () {
    return new PersistentVectorBuilder(this, null, this.o2t_1, 0);
  };
  protoOf(SmallPersistentVector).q = function (element) {
    return indexOf(this.o2t_1, element);
  };
  protoOf(SmallPersistentVector).c1 = function (index) {
    ListImplementation_instance.l2s(index, this.l());
    var tmp = this.o2t_1;
    return new BufferIterator(isArray(tmp) ? tmp : THROW_CCE(), index, this.l());
  };
  protoOf(SmallPersistentVector).o = function (index) {
    ListImplementation_instance.m2s(index, this.l());
    var tmp = this.o2t_1[index];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SmallPersistentVector).f1 = function (index, element) {
    ListImplementation_instance.m2s(index, this.l());
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = this.o2t_1.slice();
    newBuffer[index] = element;
    return new SmallPersistentVector(newBuffer);
  };
  function fillPath($this, index, startLevel) {
    var shift = imul($this.d2t_1 - startLevel | 0, 5);
    var i = startLevel;
    while (i < $this.d2t_1) {
      var tmp = $this.e2t_1;
      var tmp_0 = i;
      var tmp_1 = $this.e2t_1[i - 1 | 0];
      tmp[tmp_0] = ((!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE())[indexSegment(index, shift)];
      shift = shift - 5 | 0;
      i = i + 1 | 0;
    }
  }
  function fillPathIfNeeded($this, indexPredicate) {
    var shift = 0;
    while (indexSegment($this.w2r_1, shift) === indexPredicate) {
      shift = shift + 5 | 0;
    }
    if (shift > 0) {
      var level = ($this.d2t_1 - 1 | 0) - (shift / 5 | 0) | 0;
      fillPath($this, $this.w2r_1, level + 1 | 0);
    }
  }
  function elementAtCurrentIndex($this) {
    var leafBufferIndex = $this.w2r_1 & 31;
    var tmp = $this.e2t_1[$this.d2t_1 - 1 | 0];
    return ((!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE())[leafBufferIndex];
  }
  function TrieIterator(root, index, size, height) {
    AbstractListIterator.call(this, index, size);
    this.d2t_1 = height;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size_0 = this.d2t_1;
    tmp.e2t_1 = fillArrayVal(Array(size_0), null);
    this.f2t_1 = index === size;
    this.e2t_1[0] = root;
    fillPath(this, index - (this.f2t_1 ? 1 : 0) | 0, 1);
  }
  protoOf(TrieIterator).m2t = function (root, index, size, height) {
    this.w2r_1 = index;
    this.x2r_1 = size;
    this.d2t_1 = height;
    if (this.e2t_1.length < height) {
      var tmp = this;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp.e2t_1 = fillArrayVal(Array(height), null);
    }
    this.e2t_1[0] = root;
    this.f2t_1 = index === size;
    fillPath(this, index - (this.f2t_1 ? 1 : 0) | 0, 1);
  };
  protoOf(TrieIterator).k = function () {
    if (!this.j()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    var result = elementAtCurrentIndex(this);
    this.w2r_1 = this.w2r_1 + 1 | 0;
    if (this.w2r_1 === this.x2r_1) {
      this.f2t_1 = true;
      return result;
    }
    fillPathIfNeeded(this, 0);
    return result;
  };
  protoOf(TrieIterator).r3 = function () {
    if (!this.q3()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    this.w2r_1 = this.w2r_1 - 1 | 0;
    if (this.f2t_1) {
      this.f2t_1 = false;
      return elementAtCurrentIndex(this);
    }
    fillPathIfNeeded(this, 31);
    return elementAtCurrentIndex(this);
  };
  function persistentVectorOf() {
    return Companion_getInstance_6().n2t_1;
  }
  function presizedBufferWith(element) {
    // Inline function 'kotlin.arrayOfNulls' call
    var buffer = fillArrayVal(Array(32), null);
    buffer[0] = element;
    return buffer;
  }
  function rootSize_1(vectorSize) {
    return (vectorSize - 1 | 0) & -32;
  }
  function indexSegment(index, shift) {
    return index >> shift & 31;
  }
  function ObjectRef(value) {
    this.k2s_1 = value;
  }
  function createEntries($this) {
    return new PersistentHashMapEntries($this);
  }
  function Companion_7() {
    Companion_instance_8 = this;
    this.p2t_1 = new PersistentHashMap(Companion_getInstance_8().q2t_1, 0);
  }
  protoOf(Companion_7).r2t = function () {
    var tmp = this.p2t_1;
    return tmp instanceof PersistentHashMap ? tmp : THROW_CCE();
  };
  var Companion_instance_8;
  function Companion_getInstance_7() {
    if (Companion_instance_8 == null)
      new Companion_7();
    return Companion_instance_8;
  }
  function PersistentHashMap(node, size) {
    Companion_getInstance_7();
    AbstractMap.call(this);
    this.u2t_1 = node;
    this.v2t_1 = size;
  }
  protoOf(PersistentHashMap).l = function () {
    return this.v2t_1;
  };
  protoOf(PersistentHashMap).o1 = function () {
    return new PersistentHashMapKeys(this);
  };
  protoOf(PersistentHashMap).p1 = function () {
    return createEntries(this);
  };
  protoOf(PersistentHashMap).l1 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.u2t_1.a2u(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).n1 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.u2t_1.b2u(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).h4 = function (key, value) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = this.u2t_1.c2u(tmp$ret$0, key, value, 0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var newNodeResult = tmp;
    return new PersistentHashMap(newNodeResult.d2u_1, this.l() + newNodeResult.e2u_1 | 0);
  };
  protoOf(PersistentHashMap).i4 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var newNode = this.u2t_1.f2u(tmp$ret$0, key, 0);
    if (this.u2t_1 === newNode) {
      return this;
    }
    if (newNode == null) {
      return Companion_getInstance_7().r2t();
    }
    return new PersistentHashMap(newNode, this.l() - 1 | 0);
  };
  function PersistentHashMapKeysIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeKeysIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function PersistentHashMapEntriesIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeEntriesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function moveToNextNodeWithData($this, pathIndex) {
    if ($this.g2u_1[pathIndex].m2u()) {
      return pathIndex;
    }
    if ($this.g2u_1[pathIndex].q2u()) {
      var node = $this.g2u_1[pathIndex].n2u();
      if (pathIndex === 6) {
        $this.g2u_1[pathIndex + 1 | 0].p2u(node.z2t_1, node.z2t_1.length);
      } else {
        $this.g2u_1[pathIndex + 1 | 0].p2u(node.z2t_1, imul(2, node.o2u()));
      }
      return moveToNextNodeWithData($this, pathIndex + 1 | 0);
    }
    return -1;
  }
  function ensureNextEntryIsReady($this) {
    if ($this.g2u_1[$this.h2u_1].m2u()) {
      return Unit_instance;
    }
    var inductionVariable = $this.h2u_1;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var result = moveToNextNodeWithData($this, i);
        if (result === -1 && $this.g2u_1[i].q2u()) {
          $this.g2u_1[i].r2u();
          result = moveToNextNodeWithData($this, i);
        }
        if (!(result === -1)) {
          $this.h2u_1 = result;
          return Unit_instance;
        }
        if (i > 0) {
          $this.g2u_1[i - 1 | 0].r2u();
        }
        $this.g2u_1[i].p2u(Companion_getInstance_8().q2t_1.z2t_1, 0);
      }
       while (0 <= inductionVariable);
    $this.i2u_1 = false;
  }
  function checkHasNext($this) {
    if (!$this.j())
      throw NoSuchElementException_init_$Create$_0();
  }
  function PersistentHashMapBaseIterator(node, path) {
    this.g2u_1 = path;
    this.h2u_1 = 0;
    this.i2u_1 = true;
    this.g2u_1[0].p2u(node.z2t_1, imul(2, node.o2u()));
    this.h2u_1 = 0;
    ensureNextEntryIsReady(this);
  }
  protoOf(PersistentHashMapBaseIterator).j = function () {
    return this.i2u_1;
  };
  protoOf(PersistentHashMapBaseIterator).k = function () {
    checkHasNext(this);
    var result = this.g2u_1[this.h2u_1].k();
    ensureNextEntryIsReady(this);
    return result;
  };
  function TrieNodeBaseIterator() {
    this.j2u_1 = Companion_getInstance_8().q2t_1.z2t_1;
    this.k2u_1 = 0;
    this.l2u_1 = 0;
  }
  protoOf(TrieNodeBaseIterator).s2u = function (buffer, dataSize, index) {
    this.j2u_1 = buffer;
    this.k2u_1 = dataSize;
    this.l2u_1 = index;
  };
  protoOf(TrieNodeBaseIterator).p2u = function (buffer, dataSize) {
    this.s2u(buffer, dataSize, 0);
  };
  protoOf(TrieNodeBaseIterator).m2u = function () {
    return this.l2u_1 < this.k2u_1;
  };
  protoOf(TrieNodeBaseIterator).q2u = function () {
    assert(this.l2u_1 >= this.k2u_1);
    return this.l2u_1 < this.j2u_1.length;
  };
  protoOf(TrieNodeBaseIterator).n2u = function () {
    assert(this.q2u());
    var tmp = this.j2u_1[this.l2u_1];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNodeBaseIterator).r2u = function () {
    assert(this.q2u());
    this.l2u_1 = this.l2u_1 + 1 | 0;
  };
  protoOf(TrieNodeBaseIterator).j = function () {
    return this.m2u();
  };
  function TrieNodeKeysIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeKeysIterator).k = function () {
    assert(this.m2u());
    this.l2u_1 = this.l2u_1 + 2 | 0;
    var tmp = this.j2u_1[this.l2u_1 - 2 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function TrieNodeEntriesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeEntriesIterator).k = function () {
    assert(this.m2u());
    this.l2u_1 = this.l2u_1 + 2 | 0;
    var tmp = this.j2u_1[this.l2u_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var tmp_1 = this.j2u_1[this.l2u_1 - 1 | 0];
    return new MapEntry(tmp_0, (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
  };
  function MapEntry(key, value) {
    this.z2u_1 = key;
    this.a2v_1 = value;
  }
  protoOf(MapEntry).j1 = function () {
    return this.z2u_1;
  };
  protoOf(MapEntry).k1 = function () {
    return this.a2v_1;
  };
  protoOf(MapEntry).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.j1();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.k1();
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    return tmp ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0);
  };
  protoOf(MapEntry).equals = function (other) {
    var tmp0_safe_receiver = (!(other == null) ? isInterface(other, Entry) : false) ? other : null;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.MapEntry.equals.<anonymous>' call
      tmp = (equals(tmp0_safe_receiver.j1(), this.j1()) && equals(tmp0_safe_receiver.k1(), this.k1()));
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(MapEntry).toString = function () {
    return toString_0(this.j1()) + '=' + toString_0(this.k1());
  };
  function PersistentHashMapKeys(map) {
    AbstractSet.call(this);
    this.b2v_1 = map;
  }
  protoOf(PersistentHashMapKeys).l = function () {
    return this.b2v_1.l();
  };
  protoOf(PersistentHashMapKeys).x4 = function (element) {
    return this.b2v_1.l1(element);
  };
  protoOf(PersistentHashMapKeys).p = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.x4((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapKeys).i = function () {
    return new PersistentHashMapKeysIterator(this.b2v_1.u2t_1);
  };
  function PersistentHashMapEntries(map) {
    AbstractSet.call(this);
    this.c2v_1 = map;
  }
  protoOf(PersistentHashMapEntries).l = function () {
    return this.c2v_1.l();
  };
  protoOf(PersistentHashMapEntries).d2v = function (element) {
    var tmp = !(element == null) ? element : THROW_CCE();
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    var tmp0_safe_receiver = this.c2v_1.n1(element.j1());
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapEntries.contains.<anonymous>' call
      tmp_0 = equals(tmp0_safe_receiver, element.k1());
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? element.k1() == null && this.c2v_1.l1(element.j1()) : tmp1_elvis_lhs;
  };
  protoOf(PersistentHashMapEntries).p = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.d2v((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapEntries).i = function () {
    return new PersistentHashMapEntriesIterator(this.c2v_1.u2t_1);
  };
  function TrieNode_init_$Init$(dataMap, nodeMap, buffer, $this) {
    TrieNode.call($this, dataMap, nodeMap, buffer, null);
    return $this;
  }
  function TrieNode_init_$Create$(dataMap, nodeMap, buffer) {
    return TrieNode_init_$Init$(dataMap, nodeMap, buffer, objectCreate(protoOf(TrieNode)));
  }
  function ModificationResult(node, sizeDelta) {
    this.d2u_1 = node;
    this.e2u_1 = sizeDelta;
  }
  function asInsertResult($this) {
    return new ModificationResult($this, 1);
  }
  function asUpdateResult($this) {
    return new ModificationResult($this, 0);
  }
  function hasNodeAt($this, positionMask) {
    return !(($this.x2t_1 & positionMask) === 0);
  }
  function keyAtIndex($this, keyIndex) {
    var tmp = $this.z2t_1[keyIndex];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  function valueAtKeyIndex($this, keyIndex) {
    var tmp = $this.z2t_1[keyIndex + 1 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  function insertEntryAt($this, positionMask, key, value) {
    var keyIndex = $this.e2v(positionMask);
    var newBuffer = insertEntryAtIndex($this.z2t_1, keyIndex, key, value);
    return TrieNode_init_$Create$($this.w2t_1 | positionMask, $this.x2t_1, newBuffer);
  }
  function updateValueAtIndex($this, keyIndex, value) {
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = $this.z2t_1.slice();
    newBuffer[keyIndex + 1 | 0] = value;
    return TrieNode_init_$Create$($this.w2t_1, $this.x2t_1, newBuffer);
  }
  function updateNodeAtIndex($this, nodeIndex, positionMask, newNode) {
    var newNodeBuffer = newNode.z2t_1;
    if (newNodeBuffer.length === 2 && newNode.x2t_1 === 0) {
      if ($this.z2t_1.length === 1) {
        newNode.w2t_1 = $this.x2t_1;
        return newNode;
      }
      var keyIndex = $this.e2v(positionMask);
      var newBuffer = replaceNodeWithEntry($this.z2t_1, nodeIndex, keyIndex, newNodeBuffer[0], newNodeBuffer[1]);
      return TrieNode_init_$Create$($this.w2t_1 ^ positionMask, $this.x2t_1 ^ positionMask, newBuffer);
    }
    var newBuffer_0 = copyOf_0($this.z2t_1, $this.z2t_1.length);
    newBuffer_0[nodeIndex] = newNode;
    return TrieNode_init_$Create$($this.w2t_1, $this.x2t_1, newBuffer_0);
  }
  function removeNodeAtIndex($this, nodeIndex, positionMask) {
    if ($this.z2t_1.length === 1)
      return null;
    var newBuffer = removeNodeAtIndex_0($this.z2t_1, nodeIndex);
    return TrieNode_init_$Create$($this.w2t_1, $this.x2t_1 ^ positionMask, newBuffer);
  }
  function bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    var storedKey = keyAtIndex($this, keyIndex);
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = storedKey == null ? null : hashCode(storedKey);
    var storedKeyHash = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var storedValue = valueAtKeyIndex($this, keyIndex);
    var newNode = makeNode($this, storedKeyHash, storedKey, storedValue, newKeyHash, newKey, newValue, shift + 5 | 0, owner);
    var nodeIndex = $this.f2v(positionMask) + 1 | 0;
    return replaceEntryWithNode($this.z2t_1, keyIndex, nodeIndex, newNode);
  }
  function moveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift) {
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, null);
    return TrieNode_init_$Create$($this.w2t_1 ^ positionMask, $this.x2t_1 | positionMask, newBuffer);
  }
  function makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift, owner) {
    if (shift > 30) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = [key1, value1, key2, value2];
      return new TrieNode(0, 0, tmp$ret$2, owner);
    }
    var setBit1 = indexSegment_0(keyHash1, shift);
    var setBit2 = indexSegment_0(keyHash2, shift);
    if (!(setBit1 === setBit2)) {
      var tmp;
      if (setBit1 < setBit2) {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = [key1, value1, key2, value2];
      } else {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = [key2, value2, key1, value1];
      }
      var nodeBuffer = tmp;
      return new TrieNode(1 << setBit1 | 1 << setBit2, 0, nodeBuffer, owner);
    }
    var node = makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift + 5 | 0, owner);
    var tmp_0 = 1 << setBit1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$11 = [node];
    return new TrieNode(0, tmp_0, tmp$ret$11, owner);
  }
  function removeEntryAtIndex($this, keyIndex, positionMask) {
    if ($this.z2t_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.z2t_1, keyIndex);
    return TrieNode_init_$Create$($this.w2t_1 ^ positionMask, $this.x2t_1, newBuffer);
  }
  function collisionRemoveEntryAtIndex($this, i) {
    if ($this.z2t_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.z2t_1, i);
    return TrieNode_init_$Create$(0, 0, newBuffer);
  }
  function collisionContainsKey($this, key) {
    var progression = step(until(0, $this.z2t_1.length), 2);
    var inductionVariable = progression.w_1;
    var last = progression.x_1;
    var step_0 = progression.y_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, $this.z2t_1[i]))
          return true;
      }
       while (!(i === last));
    return false;
  }
  function collisionGet($this, key) {
    var progression = step(until(0, $this.z2t_1.length), 2);
    var inductionVariable = progression.w_1;
    var last = progression.x_1;
    var step_0 = progression.y_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return valueAtKeyIndex($this, i);
        }
      }
       while (!(i === last));
    return null;
  }
  function collisionPut($this, key, value) {
    var progression = step(until(0, $this.z2t_1.length), 2);
    var inductionVariable = progression.w_1;
    var last = progression.x_1;
    var step_0 = progression.y_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          if (value === valueAtKeyIndex($this, i)) {
            return null;
          }
          // Inline function 'kotlin.collections.copyOf' call
          // Inline function 'kotlin.js.asDynamic' call
          var newBuffer = $this.z2t_1.slice();
          newBuffer[i + 1 | 0] = value;
          return asUpdateResult(TrieNode_init_$Create$(0, 0, newBuffer));
        }
      }
       while (!(i === last));
    var newBuffer_0 = insertEntryAtIndex($this.z2t_1, 0, key, value);
    return asInsertResult(TrieNode_init_$Create$(0, 0, newBuffer_0));
  }
  function collisionRemove($this, key) {
    var progression = step(until(0, $this.z2t_1.length), 2);
    var inductionVariable = progression.w_1;
    var last = progression.x_1;
    var step_0 = progression.y_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return collisionRemoveEntryAtIndex($this, i);
        }
      }
       while (!(i === last));
    return $this;
  }
  function replaceNode($this, targetNode, newNode, nodeIndex, positionMask) {
    return newNode == null ? removeNodeAtIndex($this, nodeIndex, positionMask) : !(targetNode === newNode) ? updateNodeAtIndex($this, nodeIndex, positionMask, newNode) : $this;
  }
  function Companion_8() {
    Companion_instance_9 = this;
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    tmp.q2t_1 = TrieNode_init_$Create$(0, 0, tmp$ret$0);
  }
  var Companion_instance_9;
  function Companion_getInstance_8() {
    if (Companion_instance_9 == null)
      new Companion_8();
    return Companion_instance_9;
  }
  function TrieNode(dataMap, nodeMap, buffer, ownedBy) {
    Companion_getInstance_8();
    this.w2t_1 = dataMap;
    this.x2t_1 = nodeMap;
    this.y2t_1 = ownedBy;
    this.z2t_1 = buffer;
  }
  protoOf(TrieNode).o2u = function () {
    return countOneBits(this.w2t_1);
  };
  protoOf(TrieNode).g2v = function (positionMask) {
    return !((this.w2t_1 & positionMask) === 0);
  };
  protoOf(TrieNode).e2v = function (positionMask) {
    return imul(2, countOneBits(this.w2t_1 & (positionMask - 1 | 0)));
  };
  protoOf(TrieNode).f2v = function (positionMask) {
    return (this.z2t_1.length - 1 | 0) - countOneBits(this.x2t_1 & (positionMask - 1 | 0)) | 0;
  };
  protoOf(TrieNode).h2v = function (nodeIndex) {
    var tmp = this.z2t_1[nodeIndex];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNode).a2u = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.g2v(keyPositionMask)) {
      return equals(key, keyAtIndex(this, this.e2v(keyPositionMask)));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.h2v(this.f2v(keyPositionMask));
      if (shift === 30) {
        return collisionContainsKey(targetNode, key);
      }
      return targetNode.a2u(keyHash, key, shift + 5 | 0);
    }
    return false;
  };
  protoOf(TrieNode).b2u = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.g2v(keyPositionMask)) {
      var keyIndex = this.e2v(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return valueAtKeyIndex(this, keyIndex);
      }
      return null;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.h2v(this.f2v(keyPositionMask));
      if (shift === 30) {
        return collisionGet(targetNode, key);
      }
      return targetNode.b2u(keyHash, key, shift + 5 | 0);
    }
    return null;
  };
  protoOf(TrieNode).c2u = function (keyHash, key, value, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.g2v(keyPositionMask)) {
      var keyIndex = this.e2v(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        if (valueAtKeyIndex(this, keyIndex) === value)
          return null;
        return asUpdateResult(updateValueAtIndex(this, keyIndex, value));
      }
      return asInsertResult(moveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.f2v(keyPositionMask);
      var targetNode = this.h2v(nodeIndex);
      var tmp;
      if (shift === 30) {
        var tmp0_elvis_lhs = collisionPut(targetNode, key, value);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp = tmp_0;
      } else {
        var tmp1_elvis_lhs = targetNode.c2u(keyHash, key, value, shift + 5 | 0);
        var tmp_1;
        if (tmp1_elvis_lhs == null) {
          return null;
        } else {
          tmp_1 = tmp1_elvis_lhs;
        }
        tmp = tmp_1;
      }
      var putResult = tmp;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode' call
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode.<anonymous>' call
      var tmp_2 = putResult;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.put.<anonymous>' call
      var node = putResult.d2u_1;
      tmp_2.d2u_1 = updateNodeAtIndex(this, nodeIndex, keyPositionMask, node);
      return putResult;
    }
    return asInsertResult(insertEntryAt(this, keyPositionMask, key, value));
  };
  protoOf(TrieNode).f2u = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.g2v(keyPositionMask)) {
      var keyIndex = this.e2v(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return removeEntryAtIndex(this, keyIndex, keyPositionMask);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.f2v(keyPositionMask);
      var targetNode = this.h2v(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = collisionRemove(targetNode, key);
      } else {
        tmp = targetNode.f2u(keyHash, key, shift + 5 | 0);
      }
      var newNode = tmp;
      return replaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask);
    }
    return this;
  };
  function insertEntryAtIndex(_this__u8e3s4, keyIndex, key, value) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length + 2 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = keyIndex + 2 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, destinationOffset, keyIndex, endIndex);
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function replaceNodeWithEntry(_this__u8e3s4, nodeIndex, keyIndex, key, value) {
    var newBuffer = copyOf_0(_this__u8e3s4, _this__u8e3s4.length + 1 | 0);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = nodeIndex + 2 | 0;
    var startIndex = nodeIndex + 1 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(newBuffer, newBuffer, destinationOffset, startIndex, endIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset_0 = keyIndex + 2 | 0;
    arrayCopy(newBuffer, newBuffer, destinationOffset_0, keyIndex, nodeIndex);
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function removeNodeAtIndex_0(_this__u8e3s4, nodeIndex) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length - 1 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, nodeIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var startIndex = nodeIndex + 1 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, nodeIndex, startIndex, endIndex);
    return newBuffer;
  }
  function replaceEntryWithNode(_this__u8e3s4, keyIndex, nodeIndex, newNode) {
    var newNodeIndex = nodeIndex - 2 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = (_this__u8e3s4.length - 2 | 0) + 1 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var startIndex = keyIndex + 2 | 0;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, startIndex, nodeIndex);
    newBuffer[newNodeIndex] = newNode;
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = newNodeIndex + 1 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, destinationOffset, nodeIndex, endIndex);
    return newBuffer;
  }
  function indexSegment_0(index, shift) {
    return index >> shift & 31;
  }
  function removeEntryAtIndex_0(_this__u8e3s4, keyIndex) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length - 2 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var startIndex = keyIndex + 2 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, startIndex, endIndex);
    return newBuffer;
  }
  function Companion_9() {
    Companion_instance_10 = this;
    this.u2r_1 = new PersistentOrderedSet(EndOfChain_instance, EndOfChain_instance, Companion_getInstance_7().r2t());
  }
  protoOf(Companion_9).v2r = function () {
    return this.u2r_1;
  };
  var Companion_instance_10;
  function Companion_getInstance_9() {
    if (Companion_instance_10 == null)
      new Companion_9();
    return Companion_instance_10;
  }
  function PersistentOrderedSet(firstElement, lastElement, hashMap) {
    Companion_getInstance_9();
    AbstractSet.call(this);
    this.i2v_1 = firstElement;
    this.j2v_1 = lastElement;
    this.k2v_1 = hashMap;
  }
  protoOf(PersistentOrderedSet).l = function () {
    return this.k2v_1.l();
  };
  protoOf(PersistentOrderedSet).p = function (element) {
    return this.k2v_1.l1(element);
  };
  protoOf(PersistentOrderedSet).d = function (element) {
    if (this.k2v_1.l1(element)) {
      return this;
    }
    if (this.n()) {
      var newMap = this.k2v_1.h4(element, Links_init_$Create$());
      return new PersistentOrderedSet(element, element, newMap);
    }
    var tmp = this.j2v_1;
    var lastElement = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var lastLinks = ensureNotNull(this.k2v_1.n1(lastElement));
    var newMap_0 = this.k2v_1.h4(lastElement, lastLinks.n2v(element)).h4(element, Links_init_$Create$_0(lastElement));
    return new PersistentOrderedSet(this.i2v_1, element, newMap_0);
  };
  protoOf(PersistentOrderedSet).d1 = function (element) {
    var tmp0_elvis_lhs = this.k2v_1.n1(element);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var links = tmp;
    var newMap = this.k2v_1.i4(element);
    if (links.o2v()) {
      // Inline function 'kotlin.collections.get' call
      var this_0 = newMap;
      var key = links.l2v_1;
      var tmp$ret$0 = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).n1(key);
      var previousLinks = ensureNotNull(tmp$ret$0);
      var tmp_0 = newMap;
      var tmp_1 = links.l2v_1;
      newMap = tmp_0.h4((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE(), previousLinks.n2v(links.m2v_1));
    }
    if (links.q2v()) {
      // Inline function 'kotlin.collections.get' call
      var this_1 = newMap;
      var key_0 = links.m2v_1;
      var tmp$ret$1 = (isInterface(this_1, KtMap) ? this_1 : THROW_CCE()).n1(key_0);
      var nextLinks = ensureNotNull(tmp$ret$1);
      var tmp_2 = newMap;
      var tmp_3 = links.m2v_1;
      newMap = tmp_2.h4((tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE(), nextLinks.p2v(links.l2v_1));
    }
    var newFirstElement = !links.o2v() ? links.m2v_1 : this.i2v_1;
    var newLastElement = !links.q2v() ? links.l2v_1 : this.j2v_1;
    return new PersistentOrderedSet(newFirstElement, newLastElement, newMap);
  };
  protoOf(PersistentOrderedSet).i = function () {
    return new PersistentOrderedSetIterator(this.i2v_1, this.k2v_1);
  };
  function Links_init_$Init$($this) {
    Links.call($this, EndOfChain_instance, EndOfChain_instance);
    return $this;
  }
  function Links_init_$Create$() {
    return Links_init_$Init$(objectCreate(protoOf(Links)));
  }
  function Links_init_$Init$_0(previous, $this) {
    Links.call($this, previous, EndOfChain_instance);
    return $this;
  }
  function Links_init_$Create$_0(previous) {
    return Links_init_$Init$_0(previous, objectCreate(protoOf(Links)));
  }
  function Links(previous, next) {
    this.l2v_1 = previous;
    this.m2v_1 = next;
  }
  protoOf(Links).n2v = function (newNext) {
    return new Links(this.l2v_1, newNext);
  };
  protoOf(Links).p2v = function (newPrevious) {
    return new Links(newPrevious, this.m2v_1);
  };
  protoOf(Links).q2v = function () {
    return !(this.m2v_1 === EndOfChain_instance);
  };
  protoOf(Links).o2v = function () {
    return !(this.l2v_1 === EndOfChain_instance);
  };
  function checkHasNext_0($this) {
    if (!$this.j())
      throw NoSuchElementException_init_$Create$_0();
  }
  function PersistentOrderedSetIterator(nextElement, map) {
    this.r2v_1 = nextElement;
    this.s2v_1 = map;
    this.t2v_1 = 0;
  }
  protoOf(PersistentOrderedSetIterator).j = function () {
    return this.t2v_1 < this.s2v_1.l();
  };
  protoOf(PersistentOrderedSetIterator).k = function () {
    checkHasNext_0(this);
    var tmp = this.r2v_1;
    var result = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    this.t2v_1 = this.t2v_1 + 1 | 0;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.getOrElse' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp0_elvis_lhs = this.s2v_1.n1(result);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      throw ConcurrentModificationException_init_$Create$_0('Hash code of an element (' + toString_0(result) + ') has changed after it was added to the persistent set.');
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp_0.r2v_1 = tmp_1.m2v_1;
    return result;
  };
  function EndOfChain() {
  }
  var EndOfChain_instance;
  function EndOfChain_getInstance() {
    return EndOfChain_instance;
  }
  function ListImplementation() {
  }
  protoOf(ListImplementation).m2s = function (index, size) {
    if (index < 0 || index >= size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  protoOf(ListImplementation).l2s = function (index, size) {
    if (index < 0 || index > size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  var ListImplementation_instance;
  function ListImplementation_getInstance() {
    return ListImplementation_instance;
  }
  function MutabilityOwnership() {
  }
  function assert(condition) {
  }
  function get_lambdaKey() {
    _init_properties_ComposableLambda_kt__wilkc();
    return lambdaKey;
  }
  var lambdaKey;
  function composableLambdaInstance(key, tracked, block) {
    _init_properties_ComposableLambda_kt__wilkc();
    return new ComposableLambdaImpl(key, tracked, block);
  }
  function replacableWith(_this__u8e3s4, other) {
    _init_properties_ComposableLambda_kt__wilkc();
    var tmp;
    if (_this__u8e3s4 == null) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      if (_this__u8e3s4 instanceof RecomposeScopeImpl) {
        tmp_1 = other instanceof RecomposeScopeImpl;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = !_this__u8e3s4.s26() || equals(_this__u8e3s4, other) || equals(_this__u8e3s4.g1t_1, other.g1t_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function differentBits(slot) {
    _init_properties_ComposableLambda_kt__wilkc();
    return bitsForSlot(2, slot);
  }
  function sameBits(slot) {
    _init_properties_ComposableLambda_kt__wilkc();
    return bitsForSlot(1, slot);
  }
  function bitsForSlot(bits, slot) {
    _init_properties_ComposableLambda_kt__wilkc();
    var realSlot = slot % 10 | 0;
    return bits << (imul(realSlot, 3) + 1 | 0);
  }
  function rememberComposableLambda(key, tracked, block, $composer, $changed) {
    _init_properties_ComposableLambda_kt__wilkc();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1573003438, 'C(rememberComposableLambda)P(1,2)*628@13280L54:ComposableLambda.kt#9drcc');
    if (isTraceInProgress()) {
      traceEventStart(-1573003438, $changed, -1, 'androidx.compose.runtime.internal.rememberComposableLambda (ComposableLambda.kt:628)');
    }
    // Inline function 'kotlin.also' call
    sourceInformationMarkerStart($composer_0, 1920923313, 'CC(remember):ComposableLambda.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.l26();
    var tmp;
    if (false || it === Companion_getInstance().e1z_1) {
      // Inline function 'androidx.compose.runtime.internal.rememberComposableLambda.<anonymous>' call
      var value = new ComposableLambdaImpl(key, tracked, block);
      $composer_0.m26(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.internal.rememberComposableLambda.<anonymous>' call
    tmp1_group.z2v(block);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1_group;
  }
  function composableLambda(composer, key, tracked, block) {
    _init_properties_ComposableLambda_kt__wilkc();
    // Inline function 'androidx.compose.runtime.rol' call
    var tmp$ret$0 = rotateLeft(key, 1);
    composer.r21(tmp$ret$0, get_lambdaKey());
    var slot = composer.l26();
    var tmp;
    if (slot === Companion_getInstance().e1z_1) {
      var value = new ComposableLambdaImpl(key, tracked, block);
      composer.m26(value);
      tmp = value;
    } else {
      if (!(slot instanceof ComposableLambdaImpl))
        THROW_CCE();
      slot.z2v(block);
      tmp = slot;
    }
    var result = tmp;
    composer.u21();
    return result;
  }
  var properties_initialized_ComposableLambda_kt_u87f2i;
  function _init_properties_ComposableLambda_kt__wilkc() {
    if (!properties_initialized_ComposableLambda_kt_u87f2i) {
      properties_initialized_ComposableLambda_kt_u87f2i = true;
      lambdaKey = new Object();
    }
  }
  function IntRef(element) {
    element = element === VOID ? 0 : element;
    this.z2p_1 = element;
  }
  protoOf(IntRef).toString = function () {
    return 'IntRef(element = ' + this.z2p_1 + ')@' + toString_1(hashCode(this), 16);
  };
  function Companion_10() {
    Companion_instance_11 = this;
    var tmp = this;
    var tmp_0 = Companion_getInstance_8().q2t_1;
    tmp.a2w_1 = new PersistentCompositionLocalHashMap(tmp_0 instanceof TrieNode ? tmp_0 : THROW_CCE(), 0);
  }
  var Companion_instance_11;
  function Companion_getInstance_10() {
    if (Companion_instance_11 == null)
      new Companion_10();
    return Companion_instance_11;
  }
  function PersistentCompositionLocalHashMap(node, size) {
    Companion_getInstance_10();
    PersistentHashMap.call(this, node, size);
  }
  protoOf(PersistentCompositionLocalHashMap).p1 = function () {
    return protoOf(PersistentHashMap).p1.call(this);
  };
  function persistentCompositionLocalHashMapOf() {
    return Companion_getInstance_10().a2w_1;
  }
  function get_emptyThreadMap() {
    _init_properties_ThreadMap_jvm_kt__b3bhkj();
    return emptyThreadMap;
  }
  var emptyThreadMap;
  function find_0($this, key) {
    var high = $this.t2l_1 - 1 | 0;
    var tmp0_subject = high;
    if (tmp0_subject === -1)
      return -1;
    else if (tmp0_subject === 0)
      return $this.u2l_1[0].equals(key) ? 0 : $this.u2l_1[0].v(key) > 0 ? -2 : -1;
    var low = 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = $this.u2l_1[mid];
      var comparison = midVal.z1(key);
      if (comparison.v(new Long(0, 0)) < 0)
        low = mid + 1 | 0;
      else if (comparison.v(new Long(0, 0)) > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function ThreadMap(size, keys, values) {
    this.t2l_1 = size;
    this.u2l_1 = keys;
    this.v2l_1 = values;
  }
  protoOf(ThreadMap).w2l = function (key) {
    var index = find_0(this, key);
    return index >= 0 ? this.v2l_1[index] : null;
  };
  protoOf(ThreadMap).x2l = function (key, value) {
    var index = find_0(this, key);
    if (index < 0)
      return false;
    this.v2l_1[index] = value;
    return true;
  };
  protoOf(ThreadMap).y2l = function (key, value) {
    var size = this.t2l_1;
    // Inline function 'kotlin.collections.count' call
    var count = 0;
    var indexedObject = this.v2l_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.runtime.internal.ThreadMap.newWith.<anonymous>' call
      if (!(element == null)) {
        count = count + 1 | 0;
      }
    }
    var newSize = count + 1 | 0;
    var newKeys = longArray(newSize);
    // Inline function 'kotlin.arrayOfNulls' call
    var newValues = fillArrayVal(Array(newSize), null);
    if (newSize > 1) {
      var dest = 0;
      var source = 0;
      $l$loop: while (dest < newSize && source < size) {
        var oldKey = this.u2l_1[source];
        var oldValue = this.v2l_1[source];
        if (oldKey.v(key) > 0) {
          newKeys[dest] = key;
          newValues[dest] = value;
          dest = dest + 1 | 0;
          break $l$loop;
        }
        if (!(oldValue == null)) {
          newKeys[dest] = oldKey;
          newValues[dest] = oldValue;
          dest = dest + 1 | 0;
        }
        source = source + 1 | 0;
      }
      if (source === size) {
        newKeys[newSize - 1 | 0] = key;
        newValues[newSize - 1 | 0] = value;
      } else {
        while (dest < newSize) {
          var oldKey_0 = this.u2l_1[source];
          var oldValue_0 = this.v2l_1[source];
          if (!(oldValue_0 == null)) {
            newKeys[dest] = oldKey_0;
            newValues[dest] = oldValue_0;
            dest = dest + 1 | 0;
          }
          source = source + 1 | 0;
        }
      }
    } else {
      newKeys[0] = key;
      newValues[0] = value;
    }
    return new ThreadMap(newSize, newKeys, newValues);
  };
  var properties_initialized_ThreadMap_jvm_kt_y907p1;
  function _init_properties_ThreadMap_jvm_kt__b3bhkj() {
    if (!properties_initialized_ThreadMap_jvm_kt_y907p1) {
      properties_initialized_ThreadMap_jvm_kt_y907p1 = true;
      var tmp = longArray(0);
      // Inline function 'kotlin.emptyArray' call
      var tmp$ret$0 = [];
      emptyThreadMap = new ThreadMap(0, tmp, tmp$ret$0);
    }
  }
  function fastJoinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return fastJoinTo(_this__u8e3s4, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function fastToSet(_this__u8e3s4) {
    // Inline function 'kotlin.also' call
    var this_0 = HashSet_init_$Create$(_this__u8e3s4.l());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.o(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>.<anonymous>' call
        this_0.d(item);
      }
       while (inductionVariable <= last);
    return this_0;
  }
  function fastJoinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.e(prefix);
    var count = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.l() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = _this__u8e3s4.o(index);
        count = count + 1 | 0;
        if (count > 1) {
          buffer.e(separator);
        }
        if (limit < 0 || count <= limit) {
          appendElement(buffer, element, transform);
        } else
          break $l$loop;
      }
       while (inductionVariable <= last);
    if (limit >= 0 && count > limit) {
      buffer.e(truncated);
    }
    buffer.e(postfix);
    return buffer;
  }
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null)) {
      _this__u8e3s4.e(transform(element));
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this__u8e3s4.e(element);
      } else {
        if (element instanceof Char) {
          _this__u8e3s4.l7(element.se_1);
        } else {
          _this__u8e3s4.e(toString_0(element));
        }
      }
    }
  }
  function get_emptyLambda() {
    _init_properties_Snapshot_kt__l6n1ng();
    return emptyLambda;
  }
  var emptyLambda;
  function get_threadSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    return threadSnapshot;
  }
  var threadSnapshot;
  function get_lock() {
    _init_properties_Snapshot_kt__l6n1ng();
    return lock;
  }
  var lock;
  function set_openSnapshots(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    openSnapshots = _set____db54di;
  }
  function get_openSnapshots() {
    _init_properties_Snapshot_kt__l6n1ng();
    return openSnapshots;
  }
  var openSnapshots;
  function set_nextSnapshotId(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    nextSnapshotId = _set____db54di;
  }
  function get_nextSnapshotId() {
    _init_properties_Snapshot_kt__l6n1ng();
    return nextSnapshotId;
  }
  var nextSnapshotId;
  function get_pinningTable() {
    _init_properties_Snapshot_kt__l6n1ng();
    return pinningTable;
  }
  var pinningTable;
  function get_extraStateObjects() {
    _init_properties_Snapshot_kt__l6n1ng();
    return extraStateObjects;
  }
  var extraStateObjects;
  function set_applyObservers(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    applyObservers = _set____db54di;
  }
  function get_applyObservers() {
    _init_properties_Snapshot_kt__l6n1ng();
    return applyObservers;
  }
  var applyObservers;
  function set_globalWriteObservers(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    globalWriteObservers = _set____db54di;
  }
  function get_globalWriteObservers() {
    _init_properties_Snapshot_kt__l6n1ng();
    return globalWriteObservers;
  }
  var globalWriteObservers;
  function get_currentGlobalSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    return currentGlobalSnapshot;
  }
  var currentGlobalSnapshot;
  function get_snapshotInitializer() {
    _init_properties_Snapshot_kt__l6n1ng();
    return snapshotInitializer;
  }
  var snapshotInitializer;
  function get_pendingApplyObserverCount() {
    _init_properties_Snapshot_kt__l6n1ng();
    return pendingApplyObserverCount;
  }
  var pendingApplyObserverCount;
  function StateObject() {
  }
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0(function_0) {
    this.f2w_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).gl = function () {
    return this.f2w_1();
  };
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).q2 = function () {
    return this.f2w_1;
  };
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, ObserverHandle) : false) {
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
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).hashCode = function () {
    return hashCode(this.q2());
  };
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(function_0) {
    this.g2w_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).gl = function () {
    return this.g2w_1();
  };
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).q2 = function () {
    return this.g2w_1;
  };
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, ObserverHandle) : false) {
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
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).hashCode = function () {
    return hashCode(this.q2());
  };
  function Snapshot$Companion$registerApplyObserver$lambda($observer) {
    return function () {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      set_applyObservers(minus(get_applyObservers(), $observer));
      return Unit_instance;
    };
  }
  function Snapshot$Companion$registerGlobalWriteObserver$lambda($observer) {
    return function () {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      set_globalWriteObservers(minus(get_globalWriteObservers(), $observer));
      advanceGlobalSnapshot_0();
      return Unit_instance;
    };
  }
  function Companion_11() {
    this.h2d_1 = 1;
  }
  protoOf(Companion_11).s1r = function () {
    return currentSnapshot();
  };
  protoOf(Companion_11).p2l = function () {
    return !(get_threadSnapshot().pn() == null);
  };
  protoOf(Companion_11).j2e = function (readObserver, writeObserver) {
    var tmp = currentSnapshot();
    var tmp0_safe_receiver = tmp instanceof MutableSnapshot ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h2w(readObserver, writeObserver);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var message = 'Cannot create a mutable snapshot of an read-only snapshot';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  };
  protoOf(Companion_11).k2g = function (observer) {
    advanceGlobalSnapshot(get_emptyLambda());
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    set_applyObservers(plus_1(get_applyObservers(), observer));
    var tmp = Snapshot$Companion$registerApplyObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0(tmp);
  };
  protoOf(Companion_11).i2w = function (observer) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    set_globalWriteObservers(plus_1(get_globalWriteObservers(), observer));
    advanceGlobalSnapshot_0();
    var tmp = Snapshot$Companion$registerGlobalWriteObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(tmp);
  };
  protoOf(Companion_11).k2d = function () {
    return currentSnapshot().j2w();
  };
  protoOf(Companion_11).i2d = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.Companion.sendApplyNotifications.<anonymous>' call
    var tmp0_safe_receiver = get_currentGlobalSnapshot().pn().k2w();
    var changes = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b1q()) === true;
    if (changes) {
      advanceGlobalSnapshot_0();
    }
  };
  var Companion_instance_12;
  function Companion_getInstance_11() {
    return Companion_instance_12;
  }
  function Snapshot(id, invalid) {
    this.q22_1 = invalid;
    this.r22_1 = id;
    this.s22_1 = false;
    this.t22_1 = !(id === 0) ? trackPinning(id, this.l2w()) : -1;
  }
  protoOf(Snapshot).m2w = function (_set____db54di) {
    this.q22_1 = _set____db54di;
  };
  protoOf(Snapshot).l2w = function () {
    return this.q22_1;
  };
  protoOf(Snapshot).n2w = function (_set____db54di) {
    this.r22_1 = _set____db54di;
  };
  protoOf(Snapshot).u22 = function () {
    return this.r22_1;
  };
  protoOf(Snapshot).o2w = function (value) {
    // Inline function 'kotlin.error' call
    var message = 'Updating write count is not supported for this snapshot';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(Snapshot).p2w = function () {
    return 0;
  };
  protoOf(Snapshot).gl = function () {
    this.s22_1 = true;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    this.r2w();
  };
  protoOf(Snapshot).k2e = function () {
    var previous = get_threadSnapshot().pn();
    get_threadSnapshot().r18(this);
    return previous;
  };
  protoOf(Snapshot).l2e = function (snapshot) {
    get_threadSnapshot().r18(snapshot);
  };
  protoOf(Snapshot).v2w = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    this.w2w();
    this.x2w();
  };
  protoOf(Snapshot).w2w = function () {
    set_openSnapshots(get_openSnapshots().c2x(this.u22()));
  };
  protoOf(Snapshot).x2w = function () {
    this.r2w();
  };
  protoOf(Snapshot).d2x = function () {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.s22_1) {
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.validateNotDisposed.<anonymous>' call
      var tmp$ret$0 = 'Cannot use a disposed snapshot';
      throwIllegalArgumentException(tmp$ret$0);
    }
  };
  protoOf(Snapshot).r2w = function () {
    if (this.t22_1 >= 0) {
      releasePinningLocked(this.t22_1);
      this.t22_1 = -1;
    }
  };
  protoOf(Snapshot).e2x = function () {
    // Inline function 'kotlin.also' call
    var this_0 = this.t22_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.Snapshot.takeoverPinnedSnapshot.<anonymous>' call
    this.t22_1 = -1;
    return this_0;
  };
  function ObserverHandle() {
  }
  function validateNotApplied($this) {
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.y2e_1) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotApplied.<anonymous>' call
      var tmp$ret$0 = 'Unsupported operation on a snapshot that has been applied';
      throwIllegalStateException(tmp$ret$0);
    }
  }
  function validateNotAppliedOrPinned($this) {
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    var tmp;
    if (!$this.y2e_1) {
      tmp = true;
    } else {
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.isPinned' call
      tmp = $this.t22_1 >= 0;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotAppliedOrPinned.<anonymous>' call
      var tmp$ret$1 = 'Unsupported operation on a disposed or applied snapshot';
      throwIllegalStateException(tmp$ret$1);
    }
  }
  function abandon($this) {
    var modified = $this.k2w();
    if (!(modified == null)) {
      validateNotApplied($this);
      $this.f2x(null);
      var id = $this.u22();
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = modified.x1p_1;
      $l$block: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = modified.w1p_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_0 = slot;
            if (!this_0.k2(this_0.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.abandon.<anonymous>' call
                    var tmp = k[index];
                    var current = ((tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE()).q2l();
                    while (!(current == null)) {
                      if (current.n2l_1 === id || contains($this.v2e_1, current.n2l_1)) {
                        current.n2l_1 = 0;
                      }
                      current = current.o2l_1;
                    }
                  }
                  slot = slot.i2(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
    }
    $this.v2w();
  }
  function releasePreviouslyPinnedSnapshotsLocked($this) {
    var inductionVariable = 0;
    var last = $this.w2e_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        releasePinningLocked($this.w2e_1[index]);
      }
       while (inductionVariable <= last);
  }
  function Companion_12() {
    Companion_instance_13 = this;
    this.g2x_1 = new Int32Array(0);
  }
  var Companion_instance_13;
  function Companion_getInstance_12() {
    if (Companion_instance_13 == null)
      new Companion_12();
    return Companion_instance_13;
  }
  function MutableSnapshot(id, invalid, readObserver, writeObserver) {
    Companion_getInstance_12();
    Snapshot.call(this, id, invalid);
    this.q2e_1 = readObserver;
    this.r2e_1 = writeObserver;
    this.s2e_1 = 0;
    this.t2e_1 = null;
    this.u2e_1 = null;
    this.v2e_1 = Companion_getInstance_13().h2x_1;
    this.w2e_1 = Companion_getInstance_12().g2x_1;
    this.x2e_1 = 1;
    this.y2e_1 = false;
  }
  protoOf(MutableSnapshot).s2w = function () {
    return this.q2e_1;
  };
  protoOf(MutableSnapshot).t2w = function () {
    return this.r2e_1;
  };
  protoOf(MutableSnapshot).h2w = function (readObserver, writeObserver) {
    this.d2x();
    validateNotAppliedOrPinned(this);
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.i2x(this.u22());
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedMutableSnapshot.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedMutableSnapshot.<anonymous>.<anonymous>' call
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var newId = tmp0;
    set_openSnapshots(get_openSnapshots().j2x(newId));
    var currentInvalid = this.l2w();
    this.m2w(currentInvalid.j2x(newId));
    var this_0 = new NestedMutableSnapshot(newId, addRange(currentInvalid, this.u22() + 1 | 0, newId), mergedReadObserver(readObserver, this.s2w()), mergedWriteObserver(writeObserver, this.t2w()), this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.y2e_1 && !this.s22_1) {
      var previousId = this.u22();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      var tmp0_0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0_0 + 1 | 0);
      this.n2w(tmp0_0);
      set_openSnapshots(get_openSnapshots().j2x(this.u22()));
      this.m2w(addRange(this.l2w(), previousId + 1 | 0, this.u22()));
    }
    return this_0;
  };
  protoOf(MutableSnapshot).z2e = function () {
    var modified = this.k2w();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(get_currentGlobalSnapshot().pn(), this, get_openSnapshots().c2x(get_currentGlobalSnapshot().pn().u22())) : null;
    var observers = emptyList();
    var globalModified = null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    validateOpen(this);
    if (modified == null || modified.l() === 0) {
      this.w2w();
      var previousGlobalSnapshot = get_currentGlobalSnapshot().pn();
      takeNewGlobalSnapshot(previousGlobalSnapshot, get_emptyLambda());
      var previousModified = previousGlobalSnapshot.k2w();
      if (!(previousModified == null) && previousModified.b1q()) {
        observers = get_applyObservers();
        globalModified = previousModified;
      }
    } else {
      var previousGlobalSnapshot_0 = get_currentGlobalSnapshot().pn();
      var result = this.k2x(get_nextSnapshotId(), optimisticMerges_0, get_openSnapshots().c2x(previousGlobalSnapshot_0.u22()));
      if (!equals(result, Success_getInstance()))
        return result;
      this.w2w();
      takeNewGlobalSnapshot(previousGlobalSnapshot_0, get_emptyLambda());
      var previousModified_0 = previousGlobalSnapshot_0.k2w();
      this.f2x(null);
      previousGlobalSnapshot_0.f2x(null);
      observers = get_applyObservers();
      globalModified = previousModified_0;
    }
    this.y2e_1 = true;
    if (!(globalModified == null)) {
      var nonNullGlobalModified = wrapIntoSet(ensureNotNull(globalModified));
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!nonNullGlobalModified.n()) {
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        var this_0 = observers;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = this_0.l() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = this_0.o(index);
            // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
            item(nonNullGlobalModified, this);
          }
           while (inductionVariable <= last);
      }
    }
    if (!(modified == null) && modified.b1q()) {
      var modifiedSet = wrapIntoSet(modified);
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var this_1 = observers;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = this_1.l() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = this_1.o(index_0);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
          item_0(modifiedSet, this);
        }
         while (inductionVariable_0 <= last_0);
    }
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    this.x2w();
    checkAndOverwriteUnusedRecordsLocked();
    var tmp0_safe_receiver = globalModified;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = tmp0_safe_receiver.x1p_1;
      $l$block: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = tmp0_safe_receiver.w1p_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable_1 = 0;
        if (inductionVariable_1 <= lastIndex)
          do {
            var i = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_2 = slot;
            if (!this_2.k2(this_2.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_2 = 0;
              if (inductionVariable_2 < bitCount)
                do {
                  var j = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index_1 = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
                    var tmp = k[index_1];
                    var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    processForUnusedRecordsLocked(it);
                  }
                  slot = slot.i2(8);
                }
                 while (inductionVariable_2 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
    }
    if (modified == null)
      null;
    else {
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k_0 = modified.x1p_1;
      $l$block_0: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m_0 = modified.w1p_1;
        var lastIndex_0 = m_0.length - 2 | 0;
        var inductionVariable_3 = 0;
        if (inductionVariable_3 <= lastIndex_0)
          do {
            var i_0 = inductionVariable_3;
            inductionVariable_3 = inductionVariable_3 + 1 | 0;
            var slot_0 = m_0[i_0];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_3 = slot_0;
            if (!this_3.k2(this_3.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
              var inductionVariable_4 = 0;
              if (inductionVariable_4 < bitCount_0)
                do {
                  var j_0 = inductionVariable_4;
                  inductionVariable_4 = inductionVariable_4 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_0.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index_2 = (i_0 << 3) + j_0 | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
                    var tmp_0 = k_0[index_2];
                    var it_0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                    processForUnusedRecordsLocked(it_0);
                  }
                  slot_0 = slot_0.i2(8);
                }
                 while (inductionVariable_4 < bitCount_0);
              if (!(bitCount_0 === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i_0 === lastIndex_0));
      }
    }
    var tmp2_safe_receiver = this.u2e_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_5 = 0;
      var last_1 = tmp2_safe_receiver.l() - 1 | 0;
      if (inductionVariable_5 <= last_1)
        do {
          var index_3 = inductionVariable_5;
          inductionVariable_5 = inductionVariable_5 + 1 | 0;
          var item_1 = tmp2_safe_receiver.o(index_3);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
          processForUnusedRecordsLocked(item_1);
        }
         while (inductionVariable_5 <= last_1);
    }
    this.u2e_1 = null;
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).q2w = function () {
    return false;
  };
  protoOf(MutableSnapshot).gl = function () {
    if (!this.s22_1) {
      protoOf(Snapshot).gl.call(this);
      this.l2x(this);
    }
  };
  protoOf(MutableSnapshot).m2x = function (snapshot) {
    this.x2e_1 = this.x2e_1 + 1 | 0;
  };
  protoOf(MutableSnapshot).l2x = function (snapshot) {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.x2e_1 > 0)) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.nestedDeactivated.<anonymous>' call
      var tmp$ret$0 = 'no pending nested snapshots';
      throwIllegalArgumentException(tmp$ret$0);
    }
    this.x2e_1 = this.x2e_1 - 1 | 0;
    if (this.x2e_1 === 0) {
      if (!this.y2e_1) {
        abandon(this);
      }
    }
  };
  protoOf(MutableSnapshot).j2w = function () {
    if (this.y2e_1 || this.s22_1)
      return Unit_instance;
    this.n2x();
  };
  protoOf(MutableSnapshot).w2w = function () {
    set_openSnapshots(get_openSnapshots().c2x(this.u22()).o2x(this.v2e_1));
  };
  protoOf(MutableSnapshot).x2w = function () {
    releasePreviouslyPinnedSnapshotsLocked(this);
    protoOf(Snapshot).x2w.call(this);
  };
  protoOf(MutableSnapshot).k2x = function (snapshotId, optimisticMerges, invalidSnapshots) {
    var mergedRecords = null;
    var start = this.l2w().j2x(this.u22()).p2x(this.v2e_1);
    var modified = ensureNotNull(this.k2w());
    var statesToRemove = null;
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = modified.x1p_1;
    $l$block_2: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = modified.w1p_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k2(this_0.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  $l$block_1: {
                    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
                    var tmp = k[index];
                    var state = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    var first = state.q2l();
                    var tmp0_elvis_lhs = readable(first, snapshotId, invalidSnapshots);
                    var tmp_0;
                    if (tmp0_elvis_lhs == null) {
                      break $l$block_1;
                    } else {
                      tmp_0 = tmp0_elvis_lhs;
                    }
                    var current = tmp_0;
                    var tmp1_elvis_lhs = readable(first, this.u22(), start);
                    var tmp_1;
                    if (tmp1_elvis_lhs == null) {
                      break $l$block_1;
                    } else {
                      tmp_1 = tmp1_elvis_lhs;
                    }
                    var previous = tmp_1;
                    if (previous.n2l_1 === 1) {
                      break $l$block_1;
                    }
                    if (!equals(current, previous)) {
                      var tmp2_elvis_lhs = readable(first, this.u22(), this.l2w());
                      var tmp_2;
                      if (tmp2_elvis_lhs == null) {
                        readError();
                      } else {
                        tmp_2 = tmp2_elvis_lhs;
                      }
                      var applied = tmp_2;
                      var tmp4_elvis_lhs = optimisticMerges == null ? null : optimisticMerges.n1(current);
                      var tmp_3;
                      if (tmp4_elvis_lhs == null) {
                        // Inline function 'kotlin.run' call
                        // Inline function 'kotlin.contracts.contract' call
                        // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                        tmp_3 = state.s2l(previous, current, applied);
                      } else {
                        tmp_3 = tmp4_elvis_lhs;
                      }
                      var merged = tmp_3;
                      if (merged == null)
                        return new Failure(this);
                      else if (!equals(merged, applied))
                        if (equals(merged, current)) {
                          var tmp6_elvis_lhs = mergedRecords;
                          var tmp_4;
                          if (tmp6_elvis_lhs == null) {
                            // Inline function 'kotlin.also' call
                            // Inline function 'kotlin.collections.mutableListOf' call
                            var this_1 = ArrayList_init_$Create$();
                            // Inline function 'kotlin.contracts.contract' call
                            // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                            mergedRecords = this_1;
                            tmp_4 = this_1;
                          } else {
                            tmp_4 = tmp6_elvis_lhs;
                          }
                          tmp_4.d(to(state, current.n1h()));
                          var tmp7_elvis_lhs = statesToRemove;
                          var tmp_5;
                          if (tmp7_elvis_lhs == null) {
                            // Inline function 'kotlin.also' call
                            // Inline function 'kotlin.collections.mutableListOf' call
                            var this_2 = ArrayList_init_$Create$();
                            // Inline function 'kotlin.contracts.contract' call
                            // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                            statesToRemove = this_2;
                            tmp_5 = this_2;
                          } else {
                            tmp_5 = tmp7_elvis_lhs;
                          }
                          tmp_5.d(state);
                        } else {
                          var tmp8_elvis_lhs = mergedRecords;
                          var tmp_6;
                          if (tmp8_elvis_lhs == null) {
                            // Inline function 'kotlin.also' call
                            // Inline function 'kotlin.collections.mutableListOf' call
                            var this_3 = ArrayList_init_$Create$();
                            // Inline function 'kotlin.contracts.contract' call
                            // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                            mergedRecords = this_3;
                            tmp_6 = this_3;
                          } else {
                            tmp_6 = tmp8_elvis_lhs;
                          }
                          tmp_6.d(!equals(merged, previous) ? to(state, merged) : to(state, previous.n1h()));
                        }
                    }
                  }
                }
                slot = slot.i2(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block_2;
            }
          }
        }
         while (!(i === lastIndex));
    }
    var tmp0_safe_receiver = mergedRecords;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.n2x();
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_1 = 0;
      var last = tmp0_safe_receiver.l() - 1 | 0;
      if (inductionVariable_1 <= last)
        do {
          var index_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var item = tmp0_safe_receiver.o(index_0);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
          var state_0 = item.gd();
          var stateRecord = item.hd();
          stateRecord.n2l_1 = this.u22();
          // Inline function 'androidx.compose.runtime.snapshots.sync' call
          // Inline function 'androidx.compose.runtime.synchronized' call
          get_lock();
          stateRecord.o2l_1 = state_0.q2l();
          state_0.r2l(stateRecord);
        }
         while (inductionVariable_1 <= last);
    }
    var tmp1_safe_receiver = statesToRemove;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_2 = 0;
      var last_0 = tmp1_safe_receiver.l() - 1 | 0;
      if (inductionVariable_2 <= last_0)
        do {
          var index_1 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var item_0 = tmp1_safe_receiver.o(index_1);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
          modified.d1(item_0);
        }
         while (inductionVariable_2 <= last_0);
      var mergedList = this.u2e_1;
      this.u2e_1 = mergedList == null ? tmp1_safe_receiver : plus_2(mergedList, tmp1_safe_receiver);
    }
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).n2x = function () {
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.i2x(this.u22());
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.y2e_1 && !this.s22_1) {
      var previousId = this.u22();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      this.n2w(tmp0);
      set_openSnapshots(get_openSnapshots().j2x(this.u22()));
      this.m2w(addRange(this.l2w(), previousId + 1 | 0, this.u22()));
    }
    return Unit_instance;
  };
  protoOf(MutableSnapshot).i2x = function (id) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    this.v2e_1 = this.v2e_1.j2x(id);
  };
  protoOf(MutableSnapshot).q2x = function (id) {
    if (id >= 0) {
      var tmp = this;
      // Inline function 'kotlin.collections.plus' call
      // Inline function 'kotlin.collections.plus' call
      var this_0 = this.w2e_1;
      // Inline function 'kotlin.intArrayOf' call
      var elements = new Int32Array([id]);
      tmp.w2e_1 = primitiveArrayConcat([this_0, elements]);
    }
  };
  protoOf(MutableSnapshot).r2x = function (handles) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (handles.length === 0)
      return Unit_instance;
    var pinned = this.w2e_1;
    var tmp = this;
    var tmp_0;
    // Inline function 'kotlin.collections.isEmpty' call
    if (pinned.length === 0) {
      tmp_0 = handles;
    } else {
      // Inline function 'kotlin.collections.plus' call
      tmp_0 = primitiveArrayConcat([pinned, handles]);
    }
    tmp.w2e_1 = tmp_0;
  };
  protoOf(MutableSnapshot).s2x = function (snapshots) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    this.v2e_1 = this.v2e_1.p2x(snapshots);
  };
  protoOf(MutableSnapshot).u2w = function (state) {
    var tmp0_elvis_lhs = this.k2w();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = mutableScatterSetOf_0();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.recordModified.<anonymous>' call
      this.f2x(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.d(state);
  };
  protoOf(MutableSnapshot).o2w = function (_set____db54di) {
    this.s2e_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).p2w = function () {
    return this.s2e_1;
  };
  protoOf(MutableSnapshot).f2x = function (_set____db54di) {
    this.t2e_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).k2w = function () {
    return this.t2e_1;
  };
  function Success() {
    Success_instance = this;
    SnapshotApplyResult.call(this);
  }
  var Success_instance;
  function Success_getInstance() {
    if (Success_instance == null)
      new Success();
    return Success_instance;
  }
  function Failure(snapshot) {
    SnapshotApplyResult.call(this);
    this.t2x_1 = snapshot;
  }
  function SnapshotApplyResult() {
  }
  function GlobalSnapshot$_init_$lambda_36kgl8($it) {
    return function (state) {
      var this_0 = $it;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.l() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.o(index);
          // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(state);
        }
         while (inductionVariable <= last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function GlobalSnapshot$takeNestedMutableSnapshot$lambda($readObserver, $writeObserver) {
    return function (invalid) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.takeNestedMutableSnapshot.<anonymous>.<anonymous>' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      return new MutableSnapshot(tmp0, invalid, $readObserver, $writeObserver);
    };
  }
  function GlobalSnapshot(id, invalid) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>' call
    var it = get_globalWriteObservers();
    var tmp0_elvis_lhs = singleOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = GlobalSnapshot$_init_$lambda_36kgl8(it);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp$ret$4 = tmp;
    MutableSnapshot.call(this, id, invalid, null, tmp$ret$4);
  }
  protoOf(GlobalSnapshot).h2w = function (readObserver, writeObserver) {
    return takeNewSnapshot(GlobalSnapshot$takeNestedMutableSnapshot$lambda(readObserver, writeObserver));
  };
  protoOf(GlobalSnapshot).j2w = function () {
    advanceGlobalSnapshot_0();
  };
  protoOf(GlobalSnapshot).h2y = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).l2x = function (snapshot) {
    return this.h2y(snapshot);
  };
  protoOf(GlobalSnapshot).i2y = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).m2x = function (snapshot) {
    return this.i2y(snapshot);
  };
  protoOf(GlobalSnapshot).z2e = function () {
    var message = 'Cannot apply the global snapshot directly. Call Snapshot.advanceGlobalSnapshot';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(GlobalSnapshot).gl = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    this.r2w();
  };
  function StateRecord() {
    this.n2l_1 = currentSnapshot().u22();
    this.o2l_1 = null;
  }
  function trackPinning(id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var pinned = invalid.j2y(id);
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.trackPinning.<anonymous>' call
    return get_pinningTable().l1m(pinned);
  }
  function releasePinningLocked(handle) {
    _init_properties_Snapshot_kt__l6n1ng();
    get_pinningTable().p2y(handle);
  }
  function currentSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp0_elvis_lhs = get_threadSnapshot().pn();
    return tmp0_elvis_lhs == null ? get_currentGlobalSnapshot().pn() : tmp0_elvis_lhs;
  }
  function mergedReadObserver(readObserver, parentObserver, mergeReadObserver) {
    mergeReadObserver = mergeReadObserver === VOID ? true : mergeReadObserver;
    _init_properties_Snapshot_kt__l6n1ng();
    var parentObserver_0 = mergeReadObserver ? parentObserver : null;
    var tmp;
    if (!(readObserver == null) && !(parentObserver_0 == null) && !(readObserver === parentObserver_0)) {
      tmp = mergedReadObserver$lambda(readObserver, parentObserver_0);
    } else {
      tmp = readObserver == null ? parentObserver_0 : readObserver;
    }
    return tmp;
  }
  function mergedWriteObserver(writeObserver, parentObserver) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp;
    if (!(writeObserver == null) && !(parentObserver == null) && !(writeObserver === parentObserver)) {
      tmp = mergedWriteObserver$lambda(writeObserver, parentObserver);
    } else {
      tmp = writeObserver == null ? parentObserver : writeObserver;
    }
    return tmp;
  }
  function advanceGlobalSnapshot(block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp = get_snapshotInitializer();
    var previousGlobalSnapshot = tmp instanceof GlobalSnapshot ? tmp : THROW_CCE();
    var modified = null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
    previousGlobalSnapshot = get_currentGlobalSnapshot().pn();
    modified = previousGlobalSnapshot.k2w();
    if (!(modified == null)) {
      get_pendingApplyObserverCount().l1m(1);
    }
    var result = takeNewGlobalSnapshot(previousGlobalSnapshot, block);
    var tmp0_safe_receiver = modified;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      try {
        var observers = get_applyObservers();
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = observers.l() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = observers.o(index);
            // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
            item(wrapIntoSet(tmp0_safe_receiver), previousGlobalSnapshot);
          }
           while (inductionVariable <= last);
      }finally {
        get_pendingApplyObserverCount().l1m(-1);
      }
    }
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
    checkAndOverwriteUnusedRecordsLocked();
    var tmp0_safe_receiver_0 = modified;
    var tmp_0;
    if (tmp0_safe_receiver_0 == null) {
      tmp_0 = null;
    } else {
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = tmp0_safe_receiver_0.x1p_1;
      $l$block: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = tmp0_safe_receiver_0.w1p_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 <= lastIndex)
          do {
            var i = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_0 = slot;
            if (!this_0.k2(this_0.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_1 = 0;
              if (inductionVariable_1 < bitCount)
                do {
                  var j = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                    var index_0 = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
                    var tmp_1 = k[index_0];
                    var it = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                    processForUnusedRecordsLocked(it);
                  }
                  slot = slot.i2(8);
                }
                 while (inductionVariable_1 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
      tmp_0 = Unit_instance;
    }
    return result;
  }
  function advanceGlobalSnapshot_0() {
    _init_properties_Snapshot_kt__l6n1ng();
    return advanceGlobalSnapshot(advanceGlobalSnapshot$lambda);
  }
  function deactivate($this) {
    if (!$this.e2z_1) {
      $this.e2z_1 = true;
      $this.d2z_1.l2x($this);
    }
  }
  function NestedMutableSnapshot(id, invalid, readObserver, writeObserver, parent) {
    MutableSnapshot.call(this, id, invalid, readObserver, writeObserver);
    this.d2z_1 = parent;
    this.e2z_1 = false;
    this.d2z_1.m2x(this);
  }
  protoOf(NestedMutableSnapshot).gl = function () {
    if (!this.s22_1) {
      protoOf(MutableSnapshot).gl.call(this);
      deactivate(this);
    }
  };
  protoOf(NestedMutableSnapshot).z2e = function () {
    if (this.d2z_1.y2e_1 || this.d2z_1.s22_1)
      return new Failure(this);
    var modified = this.k2w();
    var id = this.u22();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(this.d2z_1, this, this.d2z_1.l2w()) : null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    validateOpen(this);
    if (modified == null || modified.l() === 0) {
      this.v2w();
    } else {
      var result = this.k2x(this.d2z_1.u22(), optimisticMerges_0, this.d2z_1.l2w());
      if (!equals(result, Success_getInstance()))
        return result;
      var tmp0_safe_receiver = this.d2z_1.k2w();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        tmp0_safe_receiver.p1r(modified);
        tmp = tmp0_safe_receiver;
      }
      if (tmp == null) {
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        this.d2z_1.f2x(modified);
        this.f2x(null);
      }
    }
    if (this.d2z_1.u22() < id) {
      this.d2z_1.n2x();
    }
    this.d2z_1.m2w(this.d2z_1.l2w().c2x(id).o2x(this.v2e_1));
    this.d2z_1.i2x(id);
    this.d2z_1.q2x(this.e2x());
    this.d2z_1.s2x(this.v2e_1);
    this.d2z_1.r2x(this.w2e_1);
    this.y2e_1 = true;
    deactivate(this);
    return Success_getInstance();
  };
  function addRange(_this__u8e3s4, from, until) {
    _init_properties_Snapshot_kt__l6n1ng();
    var result = _this__u8e3s4;
    var inductionVariable = from;
    if (inductionVariable < until)
      do {
        var invalidId = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = result.j2x(invalidId);
      }
       while (inductionVariable < until);
    return result;
  }
  function optimisticMerges(currentSnapshot, applyingSnapshot, invalidSnapshots) {
    _init_properties_Snapshot_kt__l6n1ng();
    var modified = applyingSnapshot.k2w();
    var id = currentSnapshot.u22();
    if (modified == null)
      return null;
    var start = applyingSnapshot.l2w().j2x(applyingSnapshot.u22()).p2x(applyingSnapshot.v2e_1);
    var result = null;
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = modified.x1p_1;
    $l$block_1: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = modified.w1p_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k2(this_0.g2().h2(7)).k2(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k2(new Long(255, 0)).v(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  $l$block_0: {
                    // Inline function 'androidx.compose.runtime.snapshots.optimisticMerges.<anonymous>' call
                    var tmp = k[index];
                    var state = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    var first = state.q2l();
                    var tmp0_elvis_lhs = readable(first, id, invalidSnapshots);
                    var tmp_0;
                    if (tmp0_elvis_lhs == null) {
                      break $l$block_0;
                    } else {
                      tmp_0 = tmp0_elvis_lhs;
                    }
                    var current = tmp_0;
                    var tmp1_elvis_lhs = readable(first, id, start);
                    var tmp_1;
                    if (tmp1_elvis_lhs == null) {
                      break $l$block_0;
                    } else {
                      tmp_1 = tmp1_elvis_lhs;
                    }
                    var previous = tmp_1;
                    if (!equals(current, previous)) {
                      var tmp2_elvis_lhs = readable(first, applyingSnapshot.u22(), applyingSnapshot.l2w());
                      var tmp_2;
                      if (tmp2_elvis_lhs == null) {
                        readError();
                      } else {
                        tmp_2 = tmp2_elvis_lhs;
                      }
                      var applied = tmp_2;
                      var merged = state.s2l(previous, current, applied);
                      if (!(merged == null)) {
                        // Inline function 'kotlin.collections.set' call
                        var tmp3_elvis_lhs = result;
                        var tmp_3;
                        if (tmp3_elvis_lhs == null) {
                          // Inline function 'kotlin.also' call
                          // Inline function 'kotlin.collections.hashMapOf' call
                          var this_1 = HashMap_init_$Create$_0();
                          // Inline function 'kotlin.contracts.contract' call
                          // Inline function 'androidx.compose.runtime.snapshots.optimisticMerges.<anonymous>.<anonymous>' call
                          result = this_1;
                          tmp_3 = this_1;
                        } else {
                          tmp_3 = tmp3_elvis_lhs;
                        }
                        tmp_3.h4(current, merged);
                      } else {
                        return null;
                      }
                    }
                  }
                }
                slot = slot.i2(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block_1;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return result;
  }
  function validateOpen(snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    var openSnapshots = get_openSnapshots();
    if (!openSnapshots.o(snapshot.u22())) {
      // Inline function 'kotlin.error' call
      var tmp = snapshot.u22();
      var tmp_0 = snapshot.s22_1;
      var tmp0_safe_receiver = snapshot instanceof MutableSnapshot ? snapshot : null;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y2e_1;
      var tmp_1 = toString(tmp1_elvis_lhs == null ? 'read-only' : tmp1_elvis_lhs);
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.validateOpen.<anonymous>' call
      var message = 'Snapshot is not open: id=' + tmp + ', disposed=' + tmp_0 + ', applied=' + tmp_1 + ', lowestPin=' + get_pinningTable().f2z(-1);
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function takeNewGlobalSnapshot(previousGlobalSnapshot, block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var result = block(get_openSnapshots().c2x(previousGlobalSnapshot.u22()));
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var globalId = tmp0;
    set_openSnapshots(get_openSnapshots().c2x(previousGlobalSnapshot.u22()));
    get_currentGlobalSnapshot().mx(new GlobalSnapshot(globalId, get_openSnapshots()));
    previousGlobalSnapshot.gl();
    set_openSnapshots(get_openSnapshots().j2x(globalId));
    return result;
  }
  function checkAndOverwriteUnusedRecordsLocked() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotWeakSet.removeIf' call
    var this_0 = get_extraStateObjects();
    var size = this_0.g2z_1;
    var currentUsed = 0;
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var entry = this_0.i2z_1[i];
        var value = entry == null ? null : entry.pn();
        var tmp;
        if (!(value == null)) {
          // Inline function 'androidx.compose.runtime.snapshots.checkAndOverwriteUnusedRecordsLocked.<anonymous>' call
          tmp = !!overwriteUnusedRecordsLocked(value);
        } else {
          tmp = false;
        }
        if (tmp) {
          if (!(currentUsed === i)) {
            this_0.i2z_1[currentUsed] = entry;
            this_0.h2z_1[currentUsed] = this_0.h2z_1[i];
          }
          currentUsed = currentUsed + 1 | 0;
        }
      }
       while (inductionVariable < size);
    var inductionVariable_0 = currentUsed;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this_0.i2z_1[i_0] = null;
        this_0.h2z_1[i_0] = 0;
      }
       while (inductionVariable_0 < size);
    if (!(currentUsed === size)) {
      this_0.g2z_1 = currentUsed;
    }
  }
  function processForUnusedRecordsLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (overwriteUnusedRecordsLocked(state)) {
      get_extraStateObjects().k2z(state);
    }
  }
  function readable(r, id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = r;
    var candidate = null;
    while (!(current == null)) {
      if (valid(current, id, invalid)) {
        candidate = candidate == null ? current : candidate.n2l_1 < current.n2l_1 ? current : candidate;
      }
      current = current.o2l_1;
    }
    if (!(candidate == null)) {
      return candidate instanceof StateRecord ? candidate : THROW_CCE();
    }
    return null;
  }
  function readError() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.error' call
    var message = 'Reading a state that was created after the snapshot was taken or in a snapshot that has not yet been applied';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function takeNewSnapshot(block) {
    _init_properties_Snapshot_kt__l6n1ng();
    return advanceGlobalSnapshot(takeNewSnapshot$lambda(block));
  }
  function overwriteUnusedRecordsLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.q2l();
    var overwriteRecord = null;
    var validRecord = null;
    var reuseLimit = get_pinningTable().f2z(get_nextSnapshotId());
    var retainedRecords = 0;
    while (!(current == null)) {
      var currentId = current.n2l_1;
      if (!(currentId === 0)) {
        if (currentId < reuseLimit) {
          if (validRecord == null) {
            validRecord = current;
            retainedRecords = retainedRecords + 1 | 0;
          } else {
            var tmp;
            if (current.n2l_1 < validRecord.n2l_1) {
              tmp = current;
            } else {
              var result = validRecord;
              validRecord = current;
              tmp = result;
            }
            var recordToOverwrite = tmp;
            if (overwriteRecord == null) {
              var tmp$ret$1;
              $l$block: {
                // Inline function 'androidx.compose.runtime.snapshots.findYoungestOr' call
                var this_0 = state.q2l();
                var current_0 = this_0;
                var youngest = this_0;
                while (!(current_0 == null)) {
                  // Inline function 'androidx.compose.runtime.snapshots.overwriteUnusedRecordsLocked.<anonymous>' call
                  if (current_0.n2l_1 >= reuseLimit) {
                    tmp$ret$1 = current_0;
                    break $l$block;
                  }
                  if (youngest.n2l_1 < current_0.n2l_1)
                    youngest = current_0;
                  current_0 = current_0.o2l_1;
                }
                tmp$ret$1 = youngest;
              }
              overwriteRecord = tmp$ret$1;
            }
            recordToOverwrite.n2l_1 = 0;
            recordToOverwrite.j2l(overwriteRecord);
          }
        } else {
          retainedRecords = retainedRecords + 1 | 0;
        }
      }
      current = current.o2l_1;
    }
    return retainedRecords > 1;
  }
  function valid(data, snapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return valid_0(snapshot, data.n2l_1, invalid);
  }
  function valid_0(currentSnapshot, candidateSnapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return !(candidateSnapshot === 0) && candidateSnapshot <= currentSnapshot && !invalid.o(candidateSnapshot);
  }
  function readable_0(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var snapshot = Companion_instance_12.s1r();
    var tmp0_safe_receiver = snapshot.s2w();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(state);
    var tmp1_elvis_lhs = readable(_this__u8e3s4, snapshot.u22(), snapshot.l2w());
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.readable.<anonymous>' call
      var syncSnapshot = Companion_instance_12.s1r();
      var tmp_0 = state.q2l();
      var tmp0_elvis_lhs = readable(tmp_0 instanceof StateRecord ? tmp_0 : THROW_CCE(), syncSnapshot.u22(), syncSnapshot.l2w());
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        readError();
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp = tmp_1;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function current(r) {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>' call
    var snapshot = Companion_instance_12.s1r();
    var tmp0_elvis_lhs = readable(r, snapshot.u22(), snapshot.l2w());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>.<anonymous>' call
      var syncSnapshot = Companion_instance_12.s1r();
      tmp = readable(r, syncSnapshot.u22(), syncSnapshot.l2w());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      readError();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function notifyWrite(snapshot, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    snapshot.o2w(snapshot.p2w() + 1 | 0);
    var tmp1_safe_receiver = snapshot.t2w();
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver(state);
  }
  function overwritableRecord(_this__u8e3s4, state, snapshot, candidate) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.q2w()) {
      snapshot.u2w(state);
    }
    var id = snapshot.u22();
    if (candidate.n2l_1 === id)
      return candidate;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.overwritableRecord.<anonymous>' call
    var newData = newOverwritableRecordLocked(_this__u8e3s4, state);
    newData.n2l_1 = id;
    if (!(candidate.n2l_1 === 1)) {
      snapshot.u2w(state);
    }
    return newData;
  }
  function newOverwritableRecordLocked(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp = usedLocked(state);
    var tmp0_safe_receiver = (tmp == null ? true : tmp instanceof StateRecord) ? tmp : THROW_CCE();
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecordLocked.<anonymous>' call
      tmp0_safe_receiver.n2l_1 = 2147483647;
      tmp_0 = tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var this_0 = _this__u8e3s4.n1h();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecordLocked.<anonymous>' call
      this_0.n2l_1 = 2147483647;
      this_0.o2l_1 = state.q2l();
      state.r2l(this_0 instanceof StateRecord ? this_0 : THROW_CCE());
      var tmp_2 = this_0;
      tmp_1 = tmp_2 instanceof StateRecord ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function usedLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.q2l();
    var validRecord = null;
    var reuseLimit = get_pinningTable().f2z(get_nextSnapshotId()) - 1 | 0;
    var invalid = Companion_getInstance_13().h2x_1;
    while (!(current == null)) {
      var currentId = current.n2l_1;
      if (currentId === 0) {
        return current;
      }
      if (valid(current, reuseLimit, invalid)) {
        if (validRecord == null) {
          validRecord = current;
        } else {
          return current.n2l_1 < validRecord.n2l_1 ? current : validRecord;
        }
      }
      current = current.o2l_1;
    }
    return null;
  }
  function writableRecord(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.q2w()) {
      snapshot.u2w(state);
    }
    var id = snapshot.u22();
    var tmp0_elvis_lhs = readable(_this__u8e3s4, id, snapshot.l2w());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      readError();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var readData = tmp;
    if (readData.n2l_1 === snapshot.u22())
      return readData;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.writableRecord.<anonymous>' call
    var tmp0_elvis_lhs_0 = readable(state.q2l(), id, snapshot.l2w());
    var tmp_0;
    if (tmp0_elvis_lhs_0 == null) {
      readError();
    } else {
      tmp_0 = tmp0_elvis_lhs_0;
    }
    var newReadData = tmp_0;
    var tmp_1 = newReadData.n2l_1 === id ? newReadData : newWritableRecordLocked(newReadData, state, snapshot);
    var newData = tmp_1 instanceof StateRecord ? tmp_1 : THROW_CCE();
    if (!(readData.n2l_1 === 1)) {
      snapshot.u2w(state);
    }
    return newData;
  }
  function newWritableRecordLocked(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    var newData = newOverwritableRecordLocked(_this__u8e3s4, state);
    newData.j2l(_this__u8e3s4);
    newData.n2l_1 = snapshot.u22();
    return newData;
  }
  function emptyLambda$lambda(it) {
    _init_properties_Snapshot_kt__l6n1ng();
    return Unit_instance;
  }
  function mergedReadObserver$lambda($readObserver, $parentObserver) {
    return function (state) {
      $readObserver(state);
      $parentObserver(state);
      return Unit_instance;
    };
  }
  function mergedWriteObserver$lambda($writeObserver, $parentObserver) {
    return function (state) {
      $writeObserver(state);
      $parentObserver(state);
      return Unit_instance;
    };
  }
  function advanceGlobalSnapshot$lambda(it) {
    _init_properties_Snapshot_kt__l6n1ng();
    return Unit_instance;
  }
  function takeNewSnapshot$lambda($block) {
    return function (invalid) {
      var result = $block(invalid);
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      set_openSnapshots(get_openSnapshots().j2x(result.u22()));
      return result;
    };
  }
  var properties_initialized_Snapshot_kt_2vlcoq;
  function _init_properties_Snapshot_kt__l6n1ng() {
    if (!properties_initialized_Snapshot_kt_2vlcoq) {
      properties_initialized_Snapshot_kt_2vlcoq = true;
      emptyLambda = emptyLambda$lambda;
      threadSnapshot = new SnapshotThreadLocal();
      lock = new Object();
      openSnapshots = Companion_getInstance_13().h2x_1;
      nextSnapshotId = 2;
      pinningTable = new SnapshotDoubleIndexHeap();
      extraStateObjects = new SnapshotWeakSet();
      applyObservers = emptyList();
      globalWriteObservers = emptyList();
      // Inline function 'kotlin.also' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      var this_0 = new GlobalSnapshot(tmp0, Companion_getInstance_13().h2x_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.currentGlobalSnapshot.<anonymous>' call
      set_openSnapshots(get_openSnapshots().j2x(this_0.u22()));
      currentGlobalSnapshot = new AtomicReference(this_0);
      snapshotInitializer = get_currentGlobalSnapshot().pn();
      pendingApplyObserverCount = new AtomicInt(0);
    }
  }
  function shiftUp($this, index) {
    var values = $this.l2y_1;
    var value = values[index];
    var current = index;
    $l$loop: while (current > 0) {
      var parent = ((current + 1 | 0) >> 1) - 1 | 0;
      if (values[parent] > value) {
        swap_1($this, parent, current);
        current = parent;
        continue $l$loop;
      }
      break $l$loop;
    }
  }
  function shiftDown($this, index) {
    var values = $this.l2y_1;
    var half = $this.k2y_1 >> 1;
    var current = index;
    while (current < half) {
      var right = (current + 1 | 0) << 1;
      var left = right - 1 | 0;
      if (right < $this.k2y_1 && values[right] < values[left]) {
        if (values[right] < values[current]) {
          swap_1($this, right, current);
          current = right;
        } else
          return Unit_instance;
      } else if (values[left] < values[current]) {
        swap_1($this, left, current);
        current = left;
      } else
        return Unit_instance;
    }
  }
  function swap_1($this, a, b) {
    var values = $this.l2y_1;
    var index = $this.m2y_1;
    var handles = $this.n2y_1;
    var t = values[a];
    values[a] = values[b];
    values[b] = t;
    t = index[a];
    index[a] = index[b];
    index[b] = t;
    handles[index[a]] = a;
    handles[index[b]] = b;
  }
  function ensure($this, atLeast) {
    var capacity = $this.l2y_1.length;
    if (atLeast <= capacity)
      return Unit_instance;
    var newCapacity = imul(capacity, 2);
    var newValues = new Int32Array(newCapacity);
    var newIndex = new Int32Array(newCapacity);
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = $this.l2y_1;
    var endIndex = this_0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, newValues, 0, 0, endIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = $this.m2y_1;
    var endIndex_0 = this_1.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = this_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, newIndex, 0, 0, endIndex_0);
    $this.l2y_1 = newValues;
    $this.m2y_1 = newIndex;
  }
  function allocateHandle($this) {
    var capacity = $this.n2y_1.length;
    if ($this.o2y_1 >= capacity) {
      var tmp = 0;
      var tmp_0 = imul(capacity, 2);
      var tmp_1 = new Int32Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = tmp_2 + 1 | 0;
        tmp = tmp + 1 | 0;
      }
      var newHandles = tmp_1;
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.n2y_1;
      var endIndex = this_0.length;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_3 = this_0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_3, newHandles, 0, 0, endIndex);
      $this.n2y_1 = newHandles;
    }
    var handle = $this.o2y_1;
    $this.o2y_1 = $this.n2y_1[$this.o2y_1];
    return handle;
  }
  function freeHandle($this, handle) {
    $this.n2y_1[handle] = $this.o2y_1;
    $this.o2y_1 = handle;
  }
  function SnapshotDoubleIndexHeap() {
    this.k2y_1 = 0;
    this.l2y_1 = new Int32Array(16);
    this.m2y_1 = new Int32Array(16);
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = new Int32Array(16);
    while (tmp_0 < 16) {
      var tmp_2 = tmp_0;
      tmp_1[tmp_2] = tmp_2 + 1 | 0;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.n2y_1 = tmp_1;
    this.o2y_1 = 0;
  }
  protoOf(SnapshotDoubleIndexHeap).f2z = function (default_0) {
    return this.k2y_1 > 0 ? this.l2y_1[0] : default_0;
  };
  protoOf(SnapshotDoubleIndexHeap).l1m = function (value) {
    ensure(this, this.k2y_1 + 1 | 0);
    var tmp1 = this.k2y_1;
    this.k2y_1 = tmp1 + 1 | 0;
    var i = tmp1;
    var handle = allocateHandle(this);
    this.l2y_1[i] = value;
    this.m2y_1[i] = handle;
    this.n2y_1[handle] = i;
    shiftUp(this, i);
    return handle;
  };
  protoOf(SnapshotDoubleIndexHeap).p2y = function (handle) {
    var i = this.n2y_1[handle];
    swap_1(this, i, this.k2y_1 - 1 | 0);
    this.k2y_1 = this.k2y_1 - 1 | 0;
    shiftUp(this, i);
    shiftDown(this, i);
    freeHandle(this, handle);
  };
  function Companion_13() {
    Companion_instance_14 = this;
    this.h2x_1 = new SnapshotIdSet(new Long(0, 0), new Long(0, 0), 0, null);
  }
  var Companion_instance_14;
  function Companion_getInstance_13() {
    if (Companion_instance_14 == null)
      new Companion_13();
    return Companion_instance_14;
  }
  function SnapshotIdSet$iterator$slambda(this$0, resultContinuation) {
    this.t2z_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SnapshotIdSet$iterator$slambda).c30 = function ($this$sequence, $completion) {
    var tmp = this.d30($this$sequence, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(SnapshotIdSet$iterator$slambda).b9 = function (p1, $completion) {
    return this.c30(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SnapshotIdSet$iterator$slambda).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        switch (tmp) {
          case 0:
            this.g8_1 = 15;
            this.v2z_1 = this.t2z_1.b2x_1;
            if (!(this.v2z_1 == null)) {
              this.w2z_1 = intArrayIterator(this.v2z_1);
              this.f8_1 = 1;
              continue $sm;
            } else {
              this.f8_1 = 4;
              continue $sm;
            }

          case 1:
            if (!this.w2z_1.j()) {
              this.f8_1 = 3;
              continue $sm;
            }

            this.x2z_1 = this.w2z_1.k();
            this.f8_1 = 2;
            suspendResult = this.u2z_1.ld(this.x2z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.f8_1 = 1;
            continue $sm;
          case 3:
            this.f8_1 = 4;
            continue $sm;
          case 4:
            if (!this.t2z_1.z2w_1.equals(new Long(0, 0))) {
              this.y2z_1 = until(0, 64).i();
              this.f8_1 = 5;
              continue $sm;
            } else {
              this.f8_1 = 9;
              continue $sm;
            }

          case 5:
            if (!this.y2z_1.j()) {
              this.f8_1 = 8;
              continue $sm;
            }

            this.z2z_1 = this.y2z_1.k();
            if (!this.t2z_1.z2w_1.k2((new Long(1, 0)).h2(this.z2z_1)).equals(new Long(0, 0))) {
              this.f8_1 = 6;
              suspendResult = this.u2z_1.ld(this.z2z_1 + this.t2z_1.a2x_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.f8_1 = 7;
              continue $sm;
            }

          case 6:
            this.f8_1 = 7;
            continue $sm;
          case 7:
            this.f8_1 = 5;
            continue $sm;
          case 8:
            this.f8_1 = 9;
            continue $sm;
          case 9:
            if (!this.t2z_1.y2w_1.equals(new Long(0, 0))) {
              this.a30_1 = until(0, 64).i();
              this.f8_1 = 10;
              continue $sm;
            } else {
              this.f8_1 = 14;
              continue $sm;
            }

          case 10:
            if (!this.a30_1.j()) {
              this.f8_1 = 13;
              continue $sm;
            }

            this.b30_1 = this.a30_1.k();
            if (!this.t2z_1.y2w_1.k2((new Long(1, 0)).h2(this.b30_1)).equals(new Long(0, 0))) {
              this.f8_1 = 11;
              suspendResult = this.u2z_1.ld((this.b30_1 + 64 | 0) + this.t2z_1.a2x_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.f8_1 = 12;
              continue $sm;
            }

          case 11:
            this.f8_1 = 12;
            continue $sm;
          case 12:
            this.f8_1 = 10;
            continue $sm;
          case 13:
            this.f8_1 = 14;
            continue $sm;
          case 14:
            return Unit_instance;
          case 15:
            throw this.i8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.g8_1 === 15) {
          throw e;
        } else {
          this.f8_1 = this.g8_1;
          this.i8_1 = e;
        }
      }
     while (true);
  };
  protoOf(SnapshotIdSet$iterator$slambda).d30 = function ($this$sequence, completion) {
    var i = new SnapshotIdSet$iterator$slambda(this.t2z_1, completion);
    i.u2z_1 = $this$sequence;
    return i;
  };
  function SnapshotIdSet$iterator$slambda_0(this$0, resultContinuation) {
    var i = new SnapshotIdSet$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.c30($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SnapshotIdSet(upperSet, lowerSet, lowerBound, belowBound) {
    Companion_getInstance_13();
    this.y2w_1 = upperSet;
    this.z2w_1 = lowerSet;
    this.a2x_1 = lowerBound;
    this.b2x_1 = belowBound;
  }
  protoOf(SnapshotIdSet).o = function (bit) {
    var offset = bit - this.a2x_1 | 0;
    if (offset >= 0 && offset < 64) {
      return !(new Long(1, 0)).h2(offset).k2(this.z2w_1).equals(new Long(0, 0));
    } else if (offset >= 64 && offset < 128) {
      return !(new Long(1, 0)).h2(offset - 64 | 0).k2(this.y2w_1).equals(new Long(0, 0));
    } else if (offset > 0) {
      return false;
    } else {
      var tmp0_safe_receiver = this.b2x_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.get.<anonymous>' call
        tmp = binarySearch(tmp0_safe_receiver, bit) >= 0;
      }
      var tmp1_elvis_lhs = tmp;
      return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    }
  };
  protoOf(SnapshotIdSet).j2x = function (bit) {
    var offset = bit - this.a2x_1 | 0;
    if (offset >= 0 && offset < 64) {
      var mask = (new Long(1, 0)).h2(offset);
      if (this.z2w_1.k2(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.y2w_1, this.z2w_1.l2(mask), this.a2x_1, this.b2x_1);
      }
    } else if (offset >= 64 && offset < 128) {
      var mask_0 = (new Long(1, 0)).h2(offset - 64 | 0);
      if (this.y2w_1.k2(mask_0).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.y2w_1.l2(mask_0), this.z2w_1, this.a2x_1, this.b2x_1);
      }
    } else if (offset >= 128) {
      if (!this.o(bit)) {
        var newUpperSet = this.y2w_1;
        var newLowerSet = this.z2w_1;
        var newLowerBound = this.a2x_1;
        var newBelowBound = null;
        var targetLowerBound = imul((bit + 1 | 0) / 64 | 0, 64);
        $l$loop: while (newLowerBound < targetLowerBound) {
          if (!newLowerSet.equals(new Long(0, 0))) {
            if (newBelowBound == null) {
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.collections.mutableListOf' call
              var this_0 = ArrayList_init_$Create$();
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>' call
              var tmp0_safe_receiver = this.b2x_1;
              if (tmp0_safe_receiver == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'kotlin.collections.forEach' call
                var inductionVariable = 0;
                var last = tmp0_safe_receiver.length;
                while (inductionVariable < last) {
                  var element = tmp0_safe_receiver[inductionVariable];
                  inductionVariable = inductionVariable + 1 | 0;
                  // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>.<anonymous>.<anonymous>' call
                  this_0.d(element);
                }
              }
              newBelowBound = this_0;
            }
            // Inline function 'kotlin.repeat' call
            // Inline function 'kotlin.contracts.contract' call
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < 64)
              do {
                var index = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>' call
                if (!newLowerSet.k2((new Long(1, 0)).h2(index)).equals(new Long(0, 0))) {
                  newBelowBound.d(index + newLowerBound | 0);
                }
              }
               while (inductionVariable_0 < 64);
          }
          if (newUpperSet.equals(new Long(0, 0))) {
            newLowerBound = targetLowerBound;
            newLowerSet = new Long(0, 0);
            break $l$loop;
          }
          newLowerSet = newUpperSet;
          newUpperSet = new Long(0, 0);
          newLowerBound = newLowerBound + 64 | 0;
        }
        var tmp = newUpperSet;
        var tmp_0 = newLowerSet;
        var tmp_1 = newLowerBound;
        var tmp0_safe_receiver_0 = newBelowBound;
        var tmp1_elvis_lhs = tmp0_safe_receiver_0 == null ? null : toIntArray(tmp0_safe_receiver_0);
        return (new SnapshotIdSet(tmp, tmp_0, tmp_1, tmp1_elvis_lhs == null ? this.b2x_1 : tmp1_elvis_lhs)).j2x(bit);
      }
    } else {
      var tmp2_elvis_lhs = this.b2x_1;
      var tmp_2;
      if (tmp2_elvis_lhs == null) {
        // Inline function 'kotlin.intArrayOf' call
        var tmp$ret$3 = new Int32Array([bit]);
        return new SnapshotIdSet(this.y2w_1, this.z2w_1, this.a2x_1, tmp$ret$3);
      } else {
        tmp_2 = tmp2_elvis_lhs;
      }
      var array = tmp_2;
      var location = binarySearch(array, bit);
      if (location < 0) {
        var insertLocation = -(location + 1 | 0) | 0;
        var newSize = array.length + 1 | 0;
        var newBelowBound_0 = new Int32Array(newSize);
        // Inline function 'kotlin.collections.copyInto' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_3 = array;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_3, newBelowBound_0, 0, 0, insertLocation);
        // Inline function 'kotlin.collections.copyInto' call
        var destinationOffset = insertLocation + 1 | 0;
        var endIndex = newSize - 1 | 0;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_4 = array;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_4, newBelowBound_0, destinationOffset, insertLocation, endIndex);
        newBelowBound_0[insertLocation] = bit;
        return new SnapshotIdSet(this.y2w_1, this.z2w_1, this.a2x_1, newBelowBound_0);
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).c2x = function (bit) {
    var offset = bit - this.a2x_1 | 0;
    if (offset >= 0 && offset < 64) {
      var mask = (new Long(1, 0)).h2(offset);
      if (!this.z2w_1.k2(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.y2w_1, this.z2w_1.k2(mask.g2()), this.a2x_1, this.b2x_1);
      }
    } else if (offset >= 64 && offset < 128) {
      var mask_0 = (new Long(1, 0)).h2(offset - 64 | 0);
      if (!this.y2w_1.k2(mask_0).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.y2w_1.k2(mask_0.g2()), this.z2w_1, this.a2x_1, this.b2x_1);
      }
    } else if (offset < 0) {
      var array = this.b2x_1;
      if (!(array == null)) {
        var location = binarySearch(array, bit);
        if (location >= 0) {
          var newSize = array.length - 1 | 0;
          if (newSize === 0) {
            return new SnapshotIdSet(this.y2w_1, this.z2w_1, this.a2x_1, null);
          }
          var newBelowBound = new Int32Array(newSize);
          if (location > 0) {
            // Inline function 'kotlin.collections.copyInto' call
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp = array;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            arrayCopy(tmp, newBelowBound, 0, 0, location);
          }
          if (location < newSize) {
            // Inline function 'kotlin.collections.copyInto' call
            var startIndex = location + 1 | 0;
            var endIndex = newSize + 1 | 0;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_0 = array;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            arrayCopy(tmp_0, newBelowBound, location, startIndex, endIndex);
          }
          return new SnapshotIdSet(this.y2w_1, this.z2w_1, this.a2x_1, newBelowBound);
        }
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).o2x = function (bits) {
    if (bits === Companion_getInstance_13().h2x_1)
      return this;
    if (this === Companion_getInstance_13().h2x_1)
      return Companion_getInstance_13().h2x_1;
    var tmp;
    if (bits.a2x_1 === this.a2x_1 && bits.b2x_1 === this.b2x_1) {
      tmp = new SnapshotIdSet(this.y2w_1.k2(bits.y2w_1.g2()), this.z2w_1.k2(bits.z2w_1.g2()), this.a2x_1, this.b2x_1);
    } else {
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold' call
      var accumulator = this;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastForEach' call
      var belowBound = bits.b2x_1;
      if (!(belowBound == null)) {
        var inductionVariable = 0;
        var last = belowBound.length;
        while (inductionVariable < last) {
          var element = belowBound[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.andNot.<anonymous>' call
          accumulator = accumulator.c2x(element);
        }
      }
      if (!bits.z2w_1.equals(new Long(0, 0))) {
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < 64)
          do {
            var index = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            if (!bits.z2w_1.k2((new Long(1, 0)).h2(index)).equals(new Long(0, 0))) {
              // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
              var element_0 = index + bits.a2x_1 | 0;
              // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.andNot.<anonymous>' call
              accumulator = accumulator.c2x(element_0);
            }
          }
           while (inductionVariable_0 < 64);
      }
      if (!bits.y2w_1.equals(new Long(0, 0))) {
        var inductionVariable_1 = 0;
        if (inductionVariable_1 < 64)
          do {
            var index_0 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            if (!bits.y2w_1.k2((new Long(1, 0)).h2(index_0)).equals(new Long(0, 0))) {
              // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
              var element_1 = (index_0 + 64 | 0) + bits.a2x_1 | 0;
              // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.andNot.<anonymous>' call
              accumulator = accumulator.c2x(element_1);
            }
          }
           while (inductionVariable_1 < 64);
      }
      tmp = accumulator;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).p2x = function (bits) {
    if (bits === Companion_getInstance_13().h2x_1)
      return this;
    if (this === Companion_getInstance_13().h2x_1)
      return bits;
    var tmp;
    if (bits.a2x_1 === this.a2x_1 && bits.b2x_1 === this.b2x_1) {
      tmp = new SnapshotIdSet(this.y2w_1.l2(bits.y2w_1), this.z2w_1.l2(bits.z2w_1), this.a2x_1, this.b2x_1);
    } else {
      var tmp_0;
      if (this.b2x_1 == null) {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold' call
        var accumulator = bits;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastForEach' call
        var belowBound = this.b2x_1;
        if (!(belowBound == null)) {
          var inductionVariable = 0;
          var last = belowBound.length;
          while (inductionVariable < last) {
            var element = belowBound[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
            // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
            accumulator = accumulator.j2x(element);
          }
        }
        if (!this.z2w_1.equals(new Long(0, 0))) {
          var inductionVariable_0 = 0;
          if (inductionVariable_0 < 64)
            do {
              var index = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              if (!this.z2w_1.k2((new Long(1, 0)).h2(index)).equals(new Long(0, 0))) {
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
                var element_0 = index + this.a2x_1 | 0;
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
                accumulator = accumulator.j2x(element_0);
              }
            }
             while (inductionVariable_0 < 64);
        }
        if (!this.y2w_1.equals(new Long(0, 0))) {
          var inductionVariable_1 = 0;
          if (inductionVariable_1 < 64)
            do {
              var index_0 = inductionVariable_1;
              inductionVariable_1 = inductionVariable_1 + 1 | 0;
              if (!this.y2w_1.k2((new Long(1, 0)).h2(index_0)).equals(new Long(0, 0))) {
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
                var element_1 = (index_0 + 64 | 0) + this.a2x_1 | 0;
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
                accumulator = accumulator.j2x(element_1);
              }
            }
             while (inductionVariable_1 < 64);
        }
        tmp_0 = accumulator;
      } else {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold' call
        var accumulator_0 = this;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastForEach' call
        var belowBound_0 = bits.b2x_1;
        if (!(belowBound_0 == null)) {
          var inductionVariable_2 = 0;
          var last_0 = belowBound_0.length;
          while (inductionVariable_2 < last_0) {
            var element_2 = belowBound_0[inductionVariable_2];
            inductionVariable_2 = inductionVariable_2 + 1 | 0;
            // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
            // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
            accumulator_0 = accumulator_0.j2x(element_2);
          }
        }
        if (!bits.z2w_1.equals(new Long(0, 0))) {
          var inductionVariable_3 = 0;
          if (inductionVariable_3 < 64)
            do {
              var index_1 = inductionVariable_3;
              inductionVariable_3 = inductionVariable_3 + 1 | 0;
              if (!bits.z2w_1.k2((new Long(1, 0)).h2(index_1)).equals(new Long(0, 0))) {
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
                var element_3 = index_1 + bits.a2x_1 | 0;
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
                accumulator_0 = accumulator_0.j2x(element_3);
              }
            }
             while (inductionVariable_3 < 64);
        }
        if (!bits.y2w_1.equals(new Long(0, 0))) {
          var inductionVariable_4 = 0;
          if (inductionVariable_4 < 64)
            do {
              var index_2 = inductionVariable_4;
              inductionVariable_4 = inductionVariable_4 + 1 | 0;
              if (!bits.y2w_1.k2((new Long(1, 0)).h2(index_2)).equals(new Long(0, 0))) {
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
                var element_4 = (index_2 + 64 | 0) + bits.a2x_1 | 0;
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
                accumulator_0 = accumulator_0.j2x(element_4);
              }
            }
             while (inductionVariable_4 < 64);
        }
        tmp_0 = accumulator_0;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).i = function () {
    return sequence(SnapshotIdSet$iterator$slambda_0(this, null)).i();
  };
  protoOf(SnapshotIdSet).j2y = function (default_0) {
    var belowBound = this.b2x_1;
    if (!(belowBound == null))
      return belowBound[0];
    if (!this.z2w_1.equals(new Long(0, 0)))
      return this.a2x_1 + countTrailingZeroBits(this.z2w_1) | 0;
    if (!this.y2w_1.equals(new Long(0, 0)))
      return (this.a2x_1 + 64 | 0) + countTrailingZeroBits(this.y2w_1) | 0;
    return default_0;
  };
  protoOf(SnapshotIdSet).toString = function () {
    var tmp = anyToString(this);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this, 10));
    var tmp0_iterator = this.i();
    while (tmp0_iterator.j()) {
      var item = tmp0_iterator.k();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.toString.<anonymous>' call
      var tmp$ret$0 = item.toString();
      destination.d(tmp$ret$0);
    }
    return tmp + ' [' + fastJoinToString(destination) + ']';
  };
  function binarySearch(_this__u8e3s4, value) {
    var low = 0;
    var high = _this__u8e3s4.length - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4[mid];
      if (value > midVal)
        low = mid + 1 | 0;
      else if (value < midVal)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function get_sync() {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    return sync;
  }
  var sync;
  function StateListStateRecord(list) {
    StateRecord.call(this);
    this.g30_1 = list;
    this.h30_1 = 0;
    this.i30_1 = 0;
  }
  protoOf(StateListStateRecord).j2l = function (value) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    _get_sync_$accessor$8381d7_hayxw0();
    var tmp = this;
    tmp.g30_1 = (value instanceof StateListStateRecord ? value : THROW_CCE()).g30_1;
    this.h30_1 = value.h30_1;
    this.i30_1 = value.i30_1;
  };
  protoOf(StateListStateRecord).n1h = function () {
    return new StateListStateRecord(this.g30_1);
  };
  function SnapshotStateList() {
    var tmp = this;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.firstStateRecord.<anonymous>' call
    var list = persistentListOf();
    // Inline function 'kotlin.also' call
    var this_0 = new StateListStateRecord(list);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.firstStateRecord.<anonymous>.<anonymous>' call
    if (Companion_instance_12.p2l()) {
      var tmp_0 = this_0;
      // Inline function 'kotlin.also' call
      var this_1 = new StateListStateRecord(list);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.firstStateRecord.<anonymous>.<anonymous>.<anonymous>' call
      this_1.n2l_1 = 1;
      tmp_0.o2l_1 = this_1;
    }
    tmp.j30_1 = this_0;
  }
  protoOf(SnapshotStateList).q2l = function () {
    return this.j30_1;
  };
  protoOf(SnapshotStateList).r2l = function (value) {
    value.o2l_1 = this.j30_1;
    var tmp = this;
    tmp.j30_1 = value instanceof StateListStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotStateList).k30 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp = this.j30_1;
    var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.<get-structure>.<anonymous>' call
    return current(this_0).i30_1;
  };
  protoOf(SnapshotStateList).l30 = function () {
    var tmp = this.j30_1;
    return readable_0(tmp instanceof StateListStateRecord ? tmp : THROW_CCE(), this);
  };
  protoOf(SnapshotStateList).l = function () {
    return this.l30().g30_1.l();
  };
  protoOf(SnapshotStateList).uc = function (element) {
    return this.l30().g30_1.p(element);
  };
  protoOf(SnapshotStateList).p = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.uc((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).vc = function (elements) {
    return this.l30().g30_1.a1(elements);
  };
  protoOf(SnapshotStateList).a1 = function (elements) {
    return this.vc(elements);
  };
  protoOf(SnapshotStateList).o = function (index) {
    return this.l30().g30_1.o(index);
  };
  protoOf(SnapshotStateList).m30 = function (element) {
    return this.l30().g30_1.q(element);
  };
  protoOf(SnapshotStateList).q = function (element) {
    if (!(element == null ? true : !(element == null)))
      return -1;
    return this.m30((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).n = function () {
    return this.l30().g30_1.n();
  };
  protoOf(SnapshotStateList).i = function () {
    return this.b1();
  };
  protoOf(SnapshotStateList).b1 = function () {
    return new StateListIterator(this, 0);
  };
  protoOf(SnapshotStateList).c1 = function (index) {
    return new StateListIterator(this, index);
  };
  protoOf(SnapshotStateList).toString = function () {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp = this.j30_1;
    var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.toString.<anonymous>' call
    var it = current(this_0);
    return 'SnapshotStateList(value=' + toString(it.g30_1) + ')@' + hashCode(this);
  };
  protoOf(SnapshotStateList).a23 = function (element) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.j30_1;
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.h30_1;
      oldList = current_0.g30_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.add.<anonymous>' call
      var newList = ensureNotNull(oldList).d(element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.j30_1;
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.s1r();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.h30_1 === currentModification) {
        $this$writable.g30_1 = newList;
        if (true) {
          $this$writable.i30_1 = $this$writable.i30_1 + 1 | 0;
        }
        $this$writable.h30_1 = $this$writable.h30_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_2 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).d = function (element) {
    return this.a23((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).n30 = function (index, element) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.j30_1;
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.h30_1;
      oldList = current_0.g30_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.add.<anonymous>' call
      var newList = ensureNotNull(oldList).c2s(index, element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.j30_1;
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.s1r();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.h30_1 === currentModification) {
        $this$writable.g30_1 = newList;
        if (true) {
          $this$writable.i30_1 = $this$writable.i30_1 + 1 | 0;
        }
        $this$writable.h30_1 = $this$writable.h30_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_2 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return Unit_instance;
  };
  protoOf(SnapshotStateList).g1 = function (index, element) {
    return this.n30(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).o30 = function (elements) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.j30_1;
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.h30_1;
      oldList = current_0.g30_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.addAll.<anonymous>' call
      var newList = ensureNotNull(oldList).m(elements);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.j30_1;
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.s1r();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.h30_1 === currentModification) {
        $this$writable.g30_1 = newList;
        if (true) {
          $this$writable.i30_1 = $this$writable.i30_1 + 1 | 0;
        }
        $this$writable.h30_1 = $this$writable.h30_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_2 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).m = function (elements) {
    return this.o30(elements);
  };
  protoOf(SnapshotStateList).e1 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
    // Inline function 'androidx.compose.runtime.snapshots.writable' call
    var tmp = this.j30_1;
    var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    var snapshot = get_snapshotInitializer();
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
    snapshot = Companion_instance_12.s1r();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.clear.<anonymous>' call
    var $this$writable = writableRecord(this_0, this, snapshot);
    // Inline function 'androidx.compose.runtime.synchronized' call
    _get_sync_$accessor$8381d7_hayxw0();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.clear.<anonymous>.<anonymous>' call
    $this$writable.g30_1 = persistentListOf();
    $this$writable.h30_1 = $this$writable.h30_1 + 1 | 0;
    $this$writable.i30_1 = $this$writable.i30_1 + 1 | 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
    notifyWrite(snapshot, this);
  };
  protoOf(SnapshotStateList).p30 = function (element) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.j30_1;
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.h30_1;
      oldList = current_0.g30_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.remove.<anonymous>' call
      var newList = ensureNotNull(oldList).d1(element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.j30_1;
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.s1r();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.h30_1 === currentModification) {
        $this$writable.g30_1 = newList;
        if (true) {
          $this$writable.i30_1 = $this$writable.i30_1 + 1 | 0;
        }
        $this$writable.h30_1 = $this$writable.h30_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_2 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).d1 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.p30((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).h1 = function (index) {
    // Inline function 'kotlin.also' call
    var this_0 = this.o(index);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.removeAt.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.update' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.j30_1;
      var this_1 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_1);
      currentModification = current_0.h30_1;
      oldList = current_0.g30_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.removeAt.<anonymous>.<anonymous>' call
      var newList = ensureNotNull(oldList).h1(index);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.j30_1;
      var this_2 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.s1r();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_2, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.h30_1 === currentModification) {
        $this$writable.g30_1 = newList;
        if (true) {
          $this$writable.i30_1 = $this$writable.i30_1 + 1 | 0;
        }
        $this$writable.h30_1 = $this$writable.h30_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_3 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_3) {
        result = true;
        break $l$loop_0;
      }
    }
    return this_0;
  };
  protoOf(SnapshotStateList).q30 = function (index, element) {
    // Inline function 'kotlin.also' call
    var this_0 = this.o(index);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.set.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.update' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.j30_1;
      var this_1 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_1);
      currentModification = current_0.h30_1;
      oldList = current_0.g30_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.set.<anonymous>.<anonymous>' call
      var newList = ensureNotNull(oldList).f1(index, element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.j30_1;
      var this_2 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.s1r();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_2, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.h30_1 === currentModification) {
        $this$writable.g30_1 = newList;
        if (false) {
          $this$writable.i30_1 = $this$writable.i30_1 + 1 | 0;
        }
        $this$writable.h30_1 = $this$writable.h30_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_3 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_3) {
        result = true;
        break $l$loop_0;
      }
    }
    return this_0;
  };
  protoOf(SnapshotStateList).f1 = function (index, element) {
    return this.q30(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function validateModification($this) {
    if (!($this.r30_1.k30() === $this.u30_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function StateListIterator(list, offset) {
    this.r30_1 = list;
    this.s30_1 = offset - 1 | 0;
    this.t30_1 = -1;
    this.u30_1 = this.r30_1.k30();
  }
  protoOf(StateListIterator).q3 = function () {
    return this.s30_1 >= 0;
  };
  protoOf(StateListIterator).r3 = function () {
    validateModification(this);
    validateRange(this.s30_1, this.r30_1.l());
    this.t30_1 = this.s30_1;
    // Inline function 'kotlin.also' call
    var this_0 = this.r30_1.o(this.s30_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.StateListIterator.previous.<anonymous>' call
    this.s30_1 = this.s30_1 - 1 | 0;
    return this_0;
  };
  protoOf(StateListIterator).j = function () {
    return this.s30_1 < (this.r30_1.l() - 1 | 0);
  };
  protoOf(StateListIterator).k = function () {
    validateModification(this);
    var newIndex = this.s30_1 + 1 | 0;
    this.t30_1 = newIndex;
    validateRange(newIndex, this.r30_1.l());
    // Inline function 'kotlin.also' call
    var this_0 = this.r30_1.o(newIndex);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.StateListIterator.next.<anonymous>' call
    this.s30_1 = newIndex;
    return this_0;
  };
  protoOf(StateListIterator).g3 = function () {
    validateModification(this);
    this.r30_1.h1(this.s30_1);
    this.s30_1 = this.s30_1 - 1 | 0;
    this.t30_1 = -1;
    this.u30_1 = this.r30_1.k30();
  };
  function validateRange(index, size) {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    if (!(0 <= index ? index < size : false)) {
      throw IndexOutOfBoundsException_init_$Create$('index (' + index + ') is out of bound of [0, ' + size + ')');
    }
  }
  function _get_sync_$accessor$8381d7_hayxw0() {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    return get_sync();
  }
  var properties_initialized_SnapshotStateList_kt_lcuarf;
  function _init_properties_SnapshotStateList_kt__mu1ud5() {
    if (!properties_initialized_SnapshotStateList_kt_lcuarf) {
      properties_initialized_SnapshotStateList_kt_lcuarf = true;
      sync = new Object();
    }
  }
  var sync_0;
  function unsupported() {
    _init_properties_SnapshotStateMap_kt__p43o8h();
    throw UnsupportedOperationException_init_$Create$();
  }
  var properties_initialized_SnapshotStateMap_kt_9i73ip;
  function _init_properties_SnapshotStateMap_kt__p43o8h() {
    if (!properties_initialized_SnapshotStateMap_kt_9i73ip) {
      properties_initialized_SnapshotStateMap_kt_9i73ip = true;
      sync_0 = new Object();
    }
  }
  function find_1($this, value, hash) {
    var low = 0;
    var high = $this.g2z_1 - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midHash = $this.h2z_1[mid];
      if (midHash < hash)
        low = mid + 1 | 0;
      else if (midHash > hash)
        high = mid - 1 | 0;
      else {
        var tmp0_safe_receiver = $this.i2z_1[mid];
        var midVal = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.pn();
        if (value === midVal)
          return mid;
        return findExactIndex($this, mid, value, hash);
      }
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex($this, midIndex, value, valueHash) {
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if (!($this.h2z_1[i] === valueHash)) {
          break $l$loop;
        }
        var tmp1_safe_receiver = $this.i2z_1[i];
        var v = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.pn();
        if (v === value) {
          return i;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.g2z_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (!($this.h2z_1[i_0] === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
        var tmp3_safe_receiver = $this.i2z_1[i_0];
        var v_0 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.pn();
        if (v_0 === value) {
          return i_0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.g2z_1 + 1 | 0) | 0;
  }
  function SnapshotWeakSet() {
    this.g2z_1 = 0;
    this.h2z_1 = new Int32Array(16);
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.i2z_1 = fillArrayVal(Array(16), null);
  }
  protoOf(SnapshotWeakSet).k2z = function (value) {
    var index;
    var size = this.g2z_1;
    var hash = identityHashCode(value);
    if (size > 0) {
      index = find_1(this, value, hash);
      if (index >= 0) {
        return false;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    var capacity = this.i2z_1.length;
    if (size === capacity) {
      var newCapacity = imul(capacity, 2);
      // Inline function 'kotlin.arrayOfNulls' call
      var newValues = fillArrayVal(Array(newCapacity), null);
      var newHashes = new Int32Array(newCapacity);
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = this.i2z_1;
      var destinationOffset = insertIndex + 1 | 0;
      arrayCopy(this_0, newValues, destinationOffset, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var this_1 = this.i2z_1;
      arrayCopy(this_1, newValues, 0, 0, insertIndex);
      // Inline function 'kotlin.collections.copyInto' call
      var this_2 = this.h2z_1;
      var destinationOffset_0 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = this_2;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, newHashes, destinationOffset_0, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = this.h2z_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, newHashes, 0, 0, insertIndex);
      this.i2z_1 = newValues;
      this.h2z_1 = newHashes;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      var this_3 = this.i2z_1;
      var destination = this.i2z_1;
      var destinationOffset_1 = insertIndex + 1 | 0;
      arrayCopy(this_3, destination, destinationOffset_1, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var this_4 = this.h2z_1;
      var destination_0 = this.h2z_1;
      var destinationOffset_2 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = this_4;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_1, destination_0, destinationOffset_2, insertIndex, size);
    }
    this.i2z_1[insertIndex] = new WeakReference(value);
    this.h2z_1[insertIndex] = hash;
    this.g2z_1 = this.g2z_1 + 1 | 0;
    return true;
  };
  function StateObjectImpl() {
    this.x29_1 = new AtomicInt(0);
  }
  protoOf(StateObjectImpl).y29 = function (reader) {
    do {
      var old = _ReaderKind___init__impl__jqeebu(this.x29_1.pn());
      // Inline function 'androidx.compose.runtime.snapshots.ReaderKind.isReadIn' call
      var this_0 = old;
      if (!((_ReaderKind___get_mask__impl__gmhzqb(this_0) & _ReaderKind___get_mask__impl__gmhzqb(reader)) === 0))
        return Unit_instance;
      // Inline function 'androidx.compose.runtime.snapshots.ReaderKind.withReadIn' call
      var this_1 = old;
      var new_0 = _ReaderKind___init__impl__jqeebu(_ReaderKind___get_mask__impl__gmhzqb(this_1) | _ReaderKind___get_mask__impl__gmhzqb(reader));
    }
     while (!this.x29_1.v30(_ReaderKind___get_mask__impl__gmhzqb(old), _ReaderKind___get_mask__impl__gmhzqb(new_0)));
  };
  protoOf(StateObjectImpl).l2d = function (reader) {
    // Inline function 'androidx.compose.runtime.snapshots.ReaderKind.isReadIn' call
    var this_0 = _ReaderKind___init__impl__jqeebu(this.x29_1.pn());
    return !((_ReaderKind___get_mask__impl__gmhzqb(this_0) & _ReaderKind___get_mask__impl__gmhzqb(reader)) === 0);
  };
  function _ReaderKind___init__impl__jqeebu(mask) {
    mask = mask === VOID ? 0 : mask;
    return mask;
  }
  function _ReaderKind___get_mask__impl__gmhzqb($this) {
    return $this;
  }
  function Companion_14() {
  }
  var Companion_instance_15;
  function Companion_getInstance_14() {
    return Companion_instance_15;
  }
  function get_LocalInspectionTables() {
    _init_properties_InspectionTables_kt__ovfk2v();
    return LocalInspectionTables;
  }
  var LocalInspectionTables;
  function LocalInspectionTables$lambda() {
    _init_properties_InspectionTables_kt__ovfk2v();
    return null;
  }
  var properties_initialized_InspectionTables_kt_tgdbmt;
  function _init_properties_InspectionTables_kt__ovfk2v() {
    if (!properties_initialized_InspectionTables_kt_tgdbmt) {
      properties_initialized_InspectionTables_kt_tgdbmt = true;
      LocalInspectionTables = staticCompositionLocalOf(LocalInspectionTables$lambda);
    }
  }
  function AtomicReference(value) {
    this.m28_1 = value;
  }
  protoOf(AtomicReference).pn = function () {
    // Inline function 'kotlinx.atomicfu.atomicfu_getValue' call
    return this.m28_1;
  };
  protoOf(AtomicReference).mx = function (value) {
    // Inline function 'kotlinx.atomicfu.atomicfu_setValue' call
    // Inline function 'androidx.compose.runtime.AtomicReference.set.<set-delegate>' call
    this.m28_1 = value;
  };
  protoOf(AtomicReference).wt = function (value) {
    // Inline function 'kotlinx.atomicfu.atomicfu_getAndSet' call
    var oldValue = this.m28_1;
    // Inline function 'androidx.compose.runtime.AtomicReference.getAndSet.<set-delegate>' call
    this.m28_1 = value;
    return oldValue;
  };
  protoOf(AtomicReference).vt = function (expect, newValue) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.atomicfu.atomicfu_compareAndSet' call
      if (equals(this.m28_1, expect)) {
        // Inline function 'androidx.compose.runtime.AtomicReference.compareAndSet.<set-delegate>' call
        this.m28_1 = newValue;
        tmp$ret$0 = true;
        break $l$block_0;
      } else {
        tmp$ret$0 = false;
        break $l$block_0;
      }
    }
    return tmp$ret$0;
  };
  function AtomicInt(value) {
    this.s1s_1 = value;
  }
  protoOf(AtomicInt).pn = function () {
    // Inline function 'kotlinx.atomicfu.atomicfu_getValue' call
    return this.s1s_1;
  };
  protoOf(AtomicInt).t1s = function (value) {
    // Inline function 'kotlinx.atomicfu.atomicfu_setValue' call
    // Inline function 'androidx.compose.runtime.AtomicInt.set.<set-delegate>' call
    this.s1s_1 = value;
  };
  protoOf(AtomicInt).l1m = function (amount) {
    // Inline function 'kotlinx.atomicfu.atomicfu_addAndGet' call
    // Inline function 'androidx.compose.runtime.AtomicInt.add.<set-delegate>' call
    this.s1s_1 = this.s1s_1 + amount | 0;
    return this.s1s_1;
  };
  protoOf(AtomicInt).v30 = function (expect, newValue) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.atomicfu.atomicfu_compareAndSet' call
      if (equals(this.s1s_1, expect)) {
        // Inline function 'androidx.compose.runtime.AtomicInt.compareAndSet.<set-delegate>' call
        this.s1s_1 = newValue;
        tmp$ret$0 = true;
        break $l$block_0;
      } else {
        tmp$ret$0 = false;
        break $l$block_0;
      }
    }
    return tmp$ret$0;
  };
  function trackWrite($this) {
    if ($this.v2v_1) {
      var scope = $this.x2v_1;
      if (!(scope == null)) {
        scope.m2a();
        $this.x2v_1 = null;
      }
      var scopes = $this.y2v_1;
      if (!(scopes == null)) {
        var inductionVariable = 0;
        var last = scopes.l();
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = scopes.o(index);
            item.m2a();
          }
           while (inductionVariable < last);
        scopes.e1();
      }
    }
  }
  function trackRead($this, composer) {
    if ($this.v2v_1) {
      var scope = composer.k26();
      if (!(scope == null)) {
        composer.n26(scope);
        var lastScope = $this.x2v_1;
        if (replacableWith(lastScope, scope)) {
          $this.x2v_1 = scope;
        } else {
          var lastScopes = $this.y2v_1;
          if (lastScopes == null) {
            // Inline function 'kotlin.collections.mutableListOf' call
            var newScopes = ArrayList_init_$Create$();
            $this.y2v_1 = newScopes;
            newScopes.d(scope);
          } else {
            var inductionVariable = 0;
            var last = lastScopes.l();
            if (inductionVariable < last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var scopeAtIndex = lastScopes.o(index);
                if (replacableWith(scopeAtIndex, scope)) {
                  lastScopes.f1(index, scope);
                  return Unit_instance;
                }
              }
               while (inductionVariable < last);
            lastScopes.d(scope);
          }
        }
      }
    }
  }
  function invoke$invoke(receiver, p0, p1) {
    receiver.d24(p0, p1);
  }
  function ComposableLambdaImpl$invoke$invoke$ref($boundThis) {
    return function (p0, p1) {
      invoke$invoke($boundThis, p0, p1);
      return Unit_instance;
    };
  }
  function ComposableLambdaImpl$invoke$lambda(this$0, $p1, $changed) {
    return function (nc, _anonymous_parameter_1__qggqgd) {
      this$0.w30($p1, nc, updateChangedFlags($changed) | 1);
      return Unit_instance;
    };
  }
  function ComposableLambdaImpl(key, tracked, block) {
    this.u2v_1 = key;
    this.v2v_1 = tracked;
    this.w2v_1 = block;
    this.x2v_1 = null;
    this.y2v_1 = null;
  }
  protoOf(ComposableLambdaImpl).z2v = function (block) {
    if (!equals(this.w2v_1, block)) {
      var oldBlockNull = this.w2v_1 == null;
      this.w2v_1 = block;
      if (!oldBlockNull) {
        trackWrite(this);
      }
    }
  };
  protoOf(ComposableLambdaImpl).d24 = function (c, changed) {
    var c_0 = c.t25(this.u2v_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.w1v(this) ? differentBits(0) : sameBits(0));
    var tmp = this.w2v_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(c_0, dirty);
    var tmp0_safe_receiver = c_0.u25();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.g2c(ComposableLambdaImpl$invoke$invoke$ref(this));
    }
    return result;
  };
  protoOf(ComposableLambdaImpl).w30 = function (p1, c, changed) {
    var c_0 = c.t25(this.u2v_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.w1v(this) ? differentBits(1) : sameBits(1));
    var tmp = this.w2v_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(p1, c_0, dirty);
    var tmp0_safe_receiver = c_0.u25();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.g2c(ComposableLambdaImpl$invoke$lambda(this, p1, changed));
    }
    return result;
  };
  function set_nextHash(_set____db54di) {
    _init_properties_ActualJs_js_kt__rh77u6();
    nextHash = _set____db54di;
  }
  function get_nextHash() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return nextHash;
  }
  var nextHash;
  function get_DefaultMonotonicFrameClock() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return DefaultMonotonicFrameClock;
  }
  var DefaultMonotonicFrameClock;
  function logError(message, e) {
    _init_properties_ActualJs_js_kt__rh77u6();
    println(message);
    printStackTrace(e);
  }
  function currentThreadId() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return new Long(0, 0);
  }
  function identityHashCode(instance) {
    _init_properties_ActualJs_js_kt__rh77u6();
    if (instance == null) {
      return 0;
    }
    // Inline function 'kotlin.js.asDynamic' call
    var hashCode = instance['kotlinIdentityHashcodeValue$'];
    if (hashCode != null) {
      return hashCode;
    }
    var tmp;
    switch (typeof instance) {
      case 'object':
      case 'function':
        tmp = memoizeIdentityHashCode(instance);
        break;
      default:
        throw IllegalArgumentException_init_$Create$('identity hash code for ' + typeof instance + ' is not supported');
    }
    return tmp;
  }
  function MonotonicClockImpl$withFrameNanos$lambda($onFrame, $continuation) {
    return function (it) {
      var duration = toDuration(it, DurationUnit_MILLISECONDS_getInstance());
      var result = $onFrame(_Duration___get_inWholeNanoseconds__impl__r5x4mr(duration));
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(result);
      this_0.q8(tmp$ret$0);
      return Unit_instance;
    };
  }
  function $withFrameNanosCOROUTINE$5(_this__u8e3s4, onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f31_1 = _this__u8e3s4;
    this.g31_1 = onFrame;
  }
  protoOf($withFrameNanosCOROUTINE$5).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        switch (tmp) {
          case 0:
            this.g8_1 = 2;
            this.f8_1 = 1;
            var safe = SafeContinuation_init_$Create$(intercepted(this));
            var tmp_0 = window;
            tmp_0.requestAnimationFrame(MonotonicClockImpl$withFrameNanos$lambda(this.g31_1, safe));
            suspendResult = returnIfSuspended(safe.x8(), this);
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
  function MonotonicClockImpl() {
  }
  protoOf(MonotonicClockImpl).w1s = function (onFrame, $completion) {
    var tmp = new $withFrameNanosCOROUTINE$5(this, onFrame, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  function memoizeIdentityHashCode(instance) {
    _init_properties_ActualJs_js_kt__rh77u6();
    var tmp0 = get_nextHash();
    set_nextHash(tmp0 + 1 | 0);
    var value = tmp0;
    var descriptor = new Object();
    descriptor.value = value;
    descriptor.writable = false;
    descriptor.configurable = false;
    descriptor.enumerable = false;
    Object.defineProperty(instance, 'kotlinIdentityHashcodeValue$', descriptor);
    return value;
  }
  var properties_initialized_ActualJs_js_kt_azbr3k;
  function _init_properties_ActualJs_js_kt__rh77u6() {
    if (!properties_initialized_ActualJs_js_kt_azbr3k) {
      properties_initialized_ActualJs_js_kt_azbr3k = true;
      nextHash = 1;
      DefaultMonotonicFrameClock = new MonotonicClockImpl();
    }
  }
  function Trace() {
  }
  protoOf(Trace).p22 = function (name) {
    return null;
  };
  protoOf(Trace).c23 = function (token) {
  };
  var Trace_instance;
  function Trace_getInstance() {
    return Trace_instance;
  }
  function invokeComposable(composer, composable) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    composable(composer, 1);
  }
  function createSnapshotMutableState(value, policy) {
    return new SnapshotMutableStateImpl(value, policy);
  }
  function PlatformOptimizedCancellationException(message) {
    message = message === VOID ? null : message;
    CancellationException_init_$Init$(message, this);
    captureStack(this, PlatformOptimizedCancellationException);
  }
  function IntMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 10 : initialCapacity;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.s1y_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(IntMap).o = function (key) {
    return this.s1y_1.n1(key);
  };
  protoOf(IntMap).t1y = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.s1y_1.h4(key, value);
  };
  function WeakReference(reference) {
    this.j2z_1 = reference;
  }
  protoOf(WeakReference).pn = function () {
    return this.j2z_1;
  };
  //region block: post-declaration
  protoOf(OffsetApplier).t1r = onBeginChanges;
  protoOf(OffsetApplier).u1r = onEndChanges;
  protoOf(AbstractApplier).t1r = onBeginChanges;
  protoOf(AbstractApplier).u1r = onEndChanges;
  protoOf(BroadcastFrameClock).j1 = get_key;
  protoOf(BroadcastFrameClock).s8 = get;
  protoOf(BroadcastFrameClock).ce = fold;
  protoOf(BroadcastFrameClock).be = minusKey;
  protoOf(BroadcastFrameClock).de = plus;
  defineProp(protoOf(ComposeRuntimeError), 'message', function () {
    return this.z8();
  });
  protoOf(StructuralEqualityPolicy).e2l = merge;
  protoOf(StateObjectImpl).s2l = mergeRecords;
  protoOf(SnapshotStateList).s2l = mergeRecords;
  protoOf(MonotonicClockImpl).j1 = get_key;
  protoOf(MonotonicClockImpl).s8 = get;
  protoOf(MonotonicClockImpl).ce = fold;
  protoOf(MonotonicClockImpl).be = minusKey;
  protoOf(MonotonicClockImpl).de = plus;
  //endregion
  //region block: init
  ScopeInvalidated_instance = new ScopeInvalidated();
  Key_instance_0 = new Key();
  Companion_instance_2 = new Companion_1();
  Companion_instance_4 = new Companion_3();
  StructuralEqualityPolicy_instance = new StructuralEqualityPolicy();
  Companion_instance_5 = new Companion_4();
  Companion_instance_6 = new Companion_5();
  EndOfChain_instance = new EndOfChain();
  ListImplementation_instance = new ListImplementation();
  Companion_instance_12 = new Companion_11();
  Companion_instance_15 = new Companion_14();
  Trace_instance = new Trace();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = composableLambdaInstance;
  _.$_$.b = composableLambda;
  _.$_$.c = rememberComposableLambda;
  _.$_$.d = AbstractApplier;
  _.$_$.e = ControlledComposition;
  _.$_$.f = get_DefaultMonotonicFrameClock;
  _.$_$.g = DisposableEffect;
  _.$_$.h = DisposableEffect_1;
  _.$_$.i = DisposableEffect_0;
  _.$_$.j = LaunchedEffect;
  _.$_$.k = Recomposer;
  _.$_$.l = collectAsState;
  _.$_$.m = invalidApplier;
  _.$_$.n = isTraceInProgress;
  _.$_$.o = mutableStateListOf;
  _.$_$.p = mutableStateOf;
  _.$_$.q = sourceInformationMarkerEnd;
  _.$_$.r = sourceInformationMarkerStart;
  _.$_$.s = traceEventEnd;
  _.$_$.t = traceEventStart;
  _.$_$.u = updateChangedFlags;
  _.$_$.v = _SkippableUpdater___init__impl__4ft0t9;
  _.$_$.w = _SkippableUpdater___get_composer__impl__6t7yne;
  _.$_$.x = _Updater___init__impl__rbfxm8;
  _.$_$.y = Updater__set_impl_v7kwss;
  _.$_$.z = Companion_instance_12;
  _.$_$.a1 = Companion_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-runtime-runtime.js.map
