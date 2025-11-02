(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-atomicfu.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-atomicfu.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-coroutines-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-coroutines-core'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-coroutines-core'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'kotlinx-coroutines-core'.");
    }
    globalThis['kotlinx-coroutines-core'] = factory(typeof globalThis['kotlinx-coroutines-core'] === 'undefined' ? {} : globalThis['kotlinx-coroutines-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-atomicfu']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.y2;
  var protoOf = kotlin_kotlin.$_$.m7;
  var THROW_CCE = kotlin_kotlin.$_$.y8;
  var Continuation = kotlin_kotlin.$_$.u5;
  var initMetadataForClass = kotlin_kotlin.$_$.v6;
  var VOID = kotlin_kotlin.$_$.d;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.s2;
  var Key_instance = kotlin_kotlin.$_$.r2;
  var equals = kotlin_kotlin.$_$.m6;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.m5;
  var toString = kotlin_kotlin.$_$.o7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var intercepted = kotlin_kotlin.$_$.n5;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.l5;
  var initMetadataForInterface = kotlin_kotlin.$_$.y6;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var isInterface = kotlin_kotlin.$_$.e7;
  var toString_0 = kotlin_kotlin.$_$.n9;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var initMetadataForObject = kotlin_kotlin.$_$.a7;
  var hashCode = kotlin_kotlin.$_$.u6;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.z;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.m2;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.o2;
  var Companion_instance = kotlin_kotlin.$_$.x2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.l2;
  var createFailure = kotlin_kotlin.$_$.e9;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.q5;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.p5;
  var get = kotlin_kotlin.$_$.r5;
  var minusKey = kotlin_kotlin.$_$.s5;
  var ContinuationInterceptor = kotlin_kotlin.$_$.t5;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.z1;
  var addSuppressed = kotlin_kotlin.$_$.b9;
  var Enum = kotlin_kotlin.$_$.q8;
  var startCoroutine = kotlin_kotlin.$_$.b6;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.i9;
  var Long = kotlin_kotlin.$_$.u8;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.m;
  var RuntimeException = kotlin_kotlin.$_$.x8;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.y1;
  var captureStack = kotlin_kotlin.$_$.h6;
  var Error_0 = kotlin_kotlin.$_$.r8;
  var Error_init_$Init$ = kotlin_kotlin.$_$.h1;
  var Element = kotlin_kotlin.$_$.y5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.d1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.m9;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.o;
  var CancellationException = kotlin_kotlin.$_$.k5;
  var ArrayList = kotlin_kotlin.$_$.d3;
  var CoroutineImpl = kotlin_kotlin.$_$.a6;
  var SequenceScope = kotlin_kotlin.$_$.c8;
  var initMetadataForLambda = kotlin_kotlin.$_$.z6;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.q1;
  var sequence = kotlin_kotlin.$_$.e8;
  var plus = kotlin_kotlin.$_$.z5;
  var get_0 = kotlin_kotlin.$_$.w5;
  var fold = kotlin_kotlin.$_$.v5;
  var minusKey_0 = kotlin_kotlin.$_$.x5;
  var anyToString = kotlin_kotlin.$_$.e6;
  var UnsupportedOperationException = kotlin_kotlin.$_$.a9;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.x6;
  var toLong = kotlin_kotlin.$_$.n7;
  var ensureNotNull = kotlin_kotlin.$_$.f9;
  var fillArrayVal = kotlin_kotlin.$_$.o6;
  var copyOf = kotlin_kotlin.$_$.w3;
  var FunctionAdapter = kotlin_kotlin.$_$.d6;
  var Exception = kotlin_kotlin.$_$.s8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var startCoroutineUninterceptedOrReturnNonGeneratorVersion = kotlin_kotlin.$_$.o5;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var removeFirstOrNull = kotlin_kotlin.$_$.y4;
  var KtMutableList = kotlin_kotlin.$_$.i3;
  var coerceIn = kotlin_kotlin.$_$.v7;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.a1;
  var getStringHashCode = kotlin_kotlin.$_$.t6;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.b1;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.t;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.x1;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.x;
  //endregion
  //region block: pre-declaration
  function cancel$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.ui(cause);
      tmp = Unit_instance;
    } else {
      tmp = $super.ui.call(this, cause);
    }
    return tmp;
  }
  initMetadataForInterface(Job, 'Job', VOID, VOID, [Element], [0]);
  initMetadataForInterface(ParentJob, 'ParentJob', VOID, VOID, [Job], [0]);
  initMetadataForClass(JobSupport, 'JobSupport', VOID, VOID, [Job, ParentJob], [0]);
  initMetadataForInterface(CoroutineScope, 'CoroutineScope');
  initMetadataForClass(AbstractCoroutine, 'AbstractCoroutine', VOID, JobSupport, [JobSupport, Job, Continuation, CoroutineScope], [0]);
  initMetadataForClass(StandaloneCoroutine, 'StandaloneCoroutine', VOID, AbstractCoroutine, VOID, [0]);
  initMetadataForClass(LazyStandaloneCoroutine, 'LazyStandaloneCoroutine', VOID, StandaloneCoroutine, VOID, [0]);
  initMetadataForClass(ScopeCoroutine, 'ScopeCoroutine', VOID, AbstractCoroutine, VOID, [0]);
  initMetadataForClass(DispatchedCoroutine, 'DispatchedCoroutine', VOID, ScopeCoroutine, VOID, [0]);
  function cancel$default_0(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.zj(cause) : $super.zj.call(this, cause);
  }
  initMetadataForInterface(CancellableContinuation, 'CancellableContinuation', VOID, VOID, [Continuation]);
  initMetadataForInterface(Runnable, 'Runnable');
  initMetadataForClass(SchedulerTask, 'SchedulerTask', VOID, VOID, [Runnable]);
  initMetadataForClass(DispatchedTask, 'DispatchedTask', VOID, SchedulerTask);
  initMetadataForClass(CancellableContinuationImpl, 'CancellableContinuationImpl', VOID, DispatchedTask, [DispatchedTask, CancellableContinuation]);
  initMetadataForInterface(NotCompleted, 'NotCompleted');
  initMetadataForInterface(CancelHandler, 'CancelHandler', VOID, VOID, [NotCompleted]);
  initMetadataForClass(UserSupplied, 'UserSupplied', VOID, VOID, [CancelHandler]);
  initMetadataForObject(Active, 'Active', VOID, VOID, [NotCompleted]);
  initMetadataForClass(CompletedContinuation, 'CompletedContinuation');
  initMetadataForClass(LockFreeLinkedListNode, 'LockFreeLinkedListNode', LockFreeLinkedListNode);
  initMetadataForInterface(Incomplete, 'Incomplete');
  initMetadataForClass(JobNode, 'JobNode', VOID, LockFreeLinkedListNode, [LockFreeLinkedListNode, Incomplete]);
  initMetadataForClass(ChildContinuation, 'ChildContinuation', VOID, JobNode);
  initMetadataForClass(CompletedExceptionally, 'CompletedExceptionally');
  initMetadataForClass(CancelledContinuation, 'CancelledContinuation', VOID, CompletedExceptionally);
  initMetadataForObject(Key, 'Key', VOID, AbstractCoroutineContextKey);
  initMetadataForClass(CoroutineDispatcher, 'CoroutineDispatcher', VOID, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, ContinuationInterceptor]);
  initMetadataForObject(Key_0, 'Key');
  initMetadataForClass(CoroutineStart, 'CoroutineStart', VOID, Enum);
  initMetadataForInterface(Delay, 'Delay', VOID, VOID, VOID, [1]);
  initMetadataForClass(EventLoop, 'EventLoop', VOID, CoroutineDispatcher);
  initMetadataForObject(ThreadLocalEventLoop, 'ThreadLocalEventLoop');
  initMetadataForClass(CompletionHandlerException, 'CompletionHandlerException', VOID, RuntimeException);
  initMetadataForClass(CoroutinesInternalError, 'CoroutinesInternalError', VOID, Error_0);
  initMetadataForObject(Key_1, 'Key');
  initMetadataForObject(NonDisposableHandle, 'NonDisposableHandle');
  initMetadataForClass(Empty, 'Empty', VOID, VOID, [Incomplete]);
  initMetadataForClass(LockFreeLinkedListHead, 'LockFreeLinkedListHead', LockFreeLinkedListHead, LockFreeLinkedListNode);
  initMetadataForClass(NodeList, 'NodeList', NodeList, LockFreeLinkedListHead, [LockFreeLinkedListHead, Incomplete]);
  initMetadataForClass(SynchronizedObject, 'SynchronizedObject', SynchronizedObject);
  initMetadataForClass(Finishing, 'Finishing', VOID, SynchronizedObject, [SynchronizedObject, Incomplete]);
  initMetadataForClass(ChildCompletion, 'ChildCompletion', VOID, JobNode);
  initMetadataForLambda(JobSupport$_get_children_$slambda_k839f8, CoroutineImpl, VOID, [1]);
  initMetadataForClass(InactiveNodeList, 'InactiveNodeList', VOID, VOID, [Incomplete]);
  initMetadataForClass(InvokeOnCompletion, 'InvokeOnCompletion', VOID, JobNode);
  initMetadataForClass(InvokeOnCancelling, 'InvokeOnCancelling', VOID, JobNode);
  initMetadataForClass(ChildHandleNode, 'ChildHandleNode', VOID, JobNode);
  initMetadataForClass(IncompleteStateBox, 'IncompleteStateBox');
  initMetadataForClass(JobImpl, 'JobImpl', VOID, JobSupport, [JobSupport, Job], [0]);
  initMetadataForClass(MainCoroutineDispatcher, 'MainCoroutineDispatcher', VOID, CoroutineDispatcher);
  initMetadataForClass(SupervisorJobImpl, 'SupervisorJobImpl', VOID, JobImpl, VOID, [0]);
  initMetadataForClass(TimeoutCancellationException, 'TimeoutCancellationException', VOID, CancellationException);
  initMetadataForObject(Unconfined, 'Unconfined', VOID, CoroutineDispatcher);
  initMetadataForObject(Key_2, 'Key');
  initMetadataForClass(AbstractFlow, 'AbstractFlow', VOID, VOID, VOID, [1]);
  initMetadataForClass(SafeFlow, 'SafeFlow', VOID, AbstractFlow, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$11, CoroutineImpl);
  initMetadataForInterface(FlowCollector, 'FlowCollector', VOID, VOID, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$13, CoroutineImpl);
  initMetadataForClass(AbstractSharedFlow, 'AbstractSharedFlow', VOID, SynchronizedObject);
  initMetadataForClass(StateFlowImpl, 'StateFlowImpl', VOID, AbstractSharedFlow, [AbstractSharedFlow, FlowCollector], [1]);
  initMetadataForClass(AbstractSharedFlowSlot, 'AbstractSharedFlowSlot');
  initMetadataForClass(StateFlowSlot, 'StateFlowSlot', StateFlowSlot, AbstractSharedFlowSlot, VOID, [0]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForCoroutine($collectCOROUTINE$17, CoroutineImpl);
  initMetadataForClass(_no_name_provided__qut3iv, VOID, VOID, VOID, VOID, [1]);
  initMetadataForLambda(catchImpl$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($catchImplCOROUTINE$16, CoroutineImpl);
  initMetadataForCoroutine($onSubscriptionCOROUTINE$22, CoroutineImpl);
  initMetadataForClass(SubscribedFlowCollector, 'SubscribedFlowCollector', VOID, VOID, [FlowCollector], [1, 0]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(onEach$o$collect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$23, CoroutineImpl);
  initMetadataForClass(_no_name_provided__qut3iv_0, VOID, VOID, VOID, VOID, [1]);
  initMetadataForClass(ConcurrentLinkedListNode, 'ConcurrentLinkedListNode');
  initMetadataForClass(Segment, 'Segment', VOID, ConcurrentLinkedListNode, [ConcurrentLinkedListNode, NotCompleted]);
  initMetadataForObject(ExceptionSuccessfullyProcessed, 'ExceptionSuccessfullyProcessed', VOID, Exception);
  initMetadataForClass(DispatchedContinuation, 'DispatchedContinuation', VOID, DispatchedTask, [DispatchedTask, Continuation]);
  initMetadataForClass(ContextScope, 'ContextScope', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(Symbol, 'Symbol');
  initMetadataForClass(SetTimeoutBasedDispatcher, 'SetTimeoutBasedDispatcher', VOID, CoroutineDispatcher, [CoroutineDispatcher, Delay], [1]);
  initMetadataForObject(NodeDispatcher, 'NodeDispatcher', VOID, SetTimeoutBasedDispatcher, VOID, [1]);
  initMetadataForClass(MessageQueue, 'MessageQueue', VOID, VOID, [KtMutableList]);
  initMetadataForClass(ScheduledMessageQueue, 'ScheduledMessageQueue', VOID, MessageQueue);
  initMetadataForClass(WindowMessageQueue, 'WindowMessageQueue', VOID, MessageQueue);
  initMetadataForClass(UnconfinedEventLoop, 'UnconfinedEventLoop', UnconfinedEventLoop, EventLoop);
  initMetadataForObject(SetTimeoutDispatcher, 'SetTimeoutDispatcher', VOID, SetTimeoutBasedDispatcher, VOID, [1]);
  initMetadataForClass(ClearTimeout, 'ClearTimeout', VOID, VOID, [CancelHandler]);
  initMetadataForClass(WindowClearTimeout, 'WindowClearTimeout', VOID, ClearTimeout);
  initMetadataForClass(WindowDispatcher, 'WindowDispatcher', VOID, CoroutineDispatcher, [CoroutineDispatcher, Delay], [1]);
  initMetadataForClass(UndispatchedCoroutine, 'UndispatchedCoroutine', VOID, ScopeCoroutine, VOID, [0]);
  initMetadataForObject(Dispatchers, 'Dispatchers');
  initMetadataForClass(JsMainDispatcher, 'JsMainDispatcher', VOID, MainCoroutineDispatcher);
  initMetadataForClass(JobCancellationException, 'JobCancellationException', VOID, CancellationException);
  initMetadataForClass(SafeCollector, 'SafeCollector', VOID, VOID, [FlowCollector], [1]);
  initMetadataForClass(WorkaroundAtomicReference, 'WorkaroundAtomicReference');
  initMetadataForClass(DiagnosticCoroutineContextException, 'DiagnosticCoroutineContextException', VOID, RuntimeException);
  initMetadataForClass(ListClosed, 'ListClosed', VOID, LockFreeLinkedListNode);
  initMetadataForClass(CommonThreadLocal, 'CommonThreadLocal', CommonThreadLocal);
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob) {
      this.ih(parentContext.s8(Key_instance_2));
    }
    this.lh_1 = parentContext.de(this);
  }
  protoOf(AbstractCoroutine).l8 = function () {
    return this.lh_1;
  };
  protoOf(AbstractCoroutine).mh = function () {
    return this.lh_1;
  };
  protoOf(AbstractCoroutine).nh = function () {
    return protoOf(JobSupport).nh.call(this);
  };
  protoOf(AbstractCoroutine).oh = function (value) {
  };
  protoOf(AbstractCoroutine).ph = function (cause, handled) {
  };
  protoOf(AbstractCoroutine).qh = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  protoOf(AbstractCoroutine).rh = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.ph(state.sh_1, state.uh());
    } else {
      this.oh((state == null ? true : !(state == null)) ? state : THROW_CCE());
    }
  };
  protoOf(AbstractCoroutine).q8 = function (result) {
    var state = this.vh(toState_0(result));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_instance;
    this.wh(state);
  };
  protoOf(AbstractCoroutine).wh = function (state) {
    return this.xh(state);
  };
  protoOf(AbstractCoroutine).yh = function (exception) {
    handleCoroutineException(this.lh_1, exception);
  };
  protoOf(AbstractCoroutine).zh = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.lh_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return protoOf(JobSupport).zh.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + protoOf(JobSupport).zh.call(this);
  };
  protoOf(AbstractCoroutine).ai = function (start, receiver, block) {
    start.di(block, receiver, this);
  };
  function launch(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.hj() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.ai(start, coroutine, block);
    return coroutine;
  }
  function withContext(context, block, $completion) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.withContext.<anonymous>' call
      var oldContext = $completion.l8();
      var newContext = newCoroutineContext_0(oldContext, context);
      ensureActive(newContext);
      if (newContext === oldContext) {
        var coroutine = new ScopeCoroutine(newContext, $completion);
        tmp$ret$0 = startUndispatchedOrReturn(coroutine, coroutine, block);
        break $l$block_0;
      }
      if (equals(newContext.s8(Key_instance), oldContext.s8(Key_instance))) {
        var coroutine_0 = new UndispatchedCoroutine(newContext, $completion);
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        coroutine_0.lh_1;
        tmp$ret$0 = startUndispatchedOrReturn(coroutine_0, coroutine_0, block);
        break $l$block_0;
      }
      var coroutine_1 = new DispatchedCoroutine(newContext, $completion);
      startCoroutineCancellable(block, coroutine_1, coroutine_1);
      tmp$ret$0 = coroutine_1.nj();
    }
    return tmp$ret$0;
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(StandaloneCoroutine).fj = function (exception) {
    handleCoroutineException(this.lh_1, exception);
    return true;
  };
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.uj_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyStandaloneCoroutine).li = function () {
    startCoroutineCancellable_0(this.uj_1, this);
  };
  function trySuspend($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.mj_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.DispatchedCoroutine.trySuspend.<anonymous>' call
      switch (this_0.kotlinx$atomicfu$value) {
        case 0:
          if ($this.mj_1.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already suspended';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function tryResume($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.mj_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.DispatchedCoroutine.tryResume.<anonymous>' call
      switch (this_0.kotlinx$atomicfu$value) {
        case 0:
          if ($this.mj_1.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already resumed';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function DispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
    this.mj_1 = atomic$int$1(0);
  }
  protoOf(DispatchedCoroutine).xh = function (state) {
    this.wh(state);
  };
  protoOf(DispatchedCoroutine).wh = function (state) {
    if (tryResume(this))
      return Unit_instance;
    resumeCancellableWith(intercepted(this.yj_1), recoverResult(state, this.yj_1));
  };
  protoOf(DispatchedCoroutine).nj = function () {
    if (trySuspend(this))
      return get_COROUTINE_SUSPENDED();
    var state = unboxState(this.hi());
    if (state instanceof CompletedExceptionally)
      throw state.sh_1;
    return (state == null ? true : !(state == null)) ? state : THROW_CCE();
  };
  function CancellableContinuation() {
  }
  function invokeOnCancellation(_this__u8e3s4, handler) {
    var tmp;
    if (_this__u8e3s4 instanceof CancellableContinuationImpl) {
      _this__u8e3s4.jk(handler);
      tmp = Unit_instance;
    } else {
      throw UnsupportedOperationException_init_$Create$('third-party implementation of CancellableContinuation is not supported');
    }
    return tmp;
  }
  function _get_parentHandle__f8dcex($this) {
    return $this.ik_1.kotlinx$atomicfu$value;
  }
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp5_subject = $this.hi();
    var tmp;
    if (!(tmp5_subject == null) ? isInterface(tmp5_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp5_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        tmp = 'Completed';
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (get_isReusableMode($this.rk_1)) {
      var tmp_0 = $this.ek_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).qk();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.ek_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.sk(cause);
  }
  function callSegmentOnCancellation($this, segment, cause) {
    // Inline function 'kotlinx.coroutines.index' call
    var index = $this.gk_1.kotlinx$atomicfu$value & 536870911;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(index === 536870911)) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callSegmentOnCancellation.<anonymous>' call
      var message = 'The index for Segment.onCancellation(..) is broken';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callCancelHandlerSafely' call
    try {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callSegmentOnCancellation.<anonymous>' call
      segment.tk(index, cause, $this.l8());
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException($this.l8(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this.toString(), ex));
      } else {
        throw $p;
      }
    }
  }
  function trySuspend_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.gk_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.trySuspend.<anonymous>' call
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> 29) {
        case 0:
          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          // Inline function 'kotlinx.coroutines.index' call

          var tmp$ret$2 = (1 << 29) + (cur & 536870911) | 0;
          if ($this.gk_1.atomicfu$compareAndSet(cur, tmp$ret$2))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already suspended';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function tryResume_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.gk_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResume.<anonymous>' call
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> 29) {
        case 0:
          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          // Inline function 'kotlinx.coroutines.index' call

          var tmp$ret$2 = (2 << 29) + (cur & 536870911) | 0;
          if ($this.gk_1.atomicfu$compareAndSet(cur, tmp$ret$2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already resumed';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this.l8().s8(Key_instance_2);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var handle = invokeOnCompletion(parent, VOID, new ChildContinuation($this));
    $this.ik_1.atomicfu$compareAndSet(null, handle);
    return handle;
  }
  function invokeOnCancellationImpl($this, handler) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.hk_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellationImpl.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (state instanceof Active) {
        if ($this.hk_1.atomicfu$compareAndSet(state, handler))
          return Unit_instance;
      } else {
        var tmp;
        if (!(state == null) ? isInterface(state, CancelHandler) : false) {
          tmp = true;
        } else {
          tmp = state instanceof Segment;
        }
        if (tmp) {
          multipleHandlersError($this, handler, state);
        } else {
          if (state instanceof CompletedExceptionally) {
            if (!state.cl()) {
              multipleHandlersError($this, handler, state);
            }
            if (state instanceof CancelledContinuation) {
              var tmp13_safe_receiver = state instanceof CompletedExceptionally ? state : null;
              var cause = tmp13_safe_receiver == null ? null : tmp13_safe_receiver.sh_1;
              if (isInterface(handler, CancelHandler)) {
                $this.zk(handler, cause);
              } else {
                var segment = handler instanceof Segment ? handler : THROW_CCE();
                callSegmentOnCancellation($this, segment, cause);
              }
            }
            return Unit_instance;
          } else {
            if (state instanceof CompletedContinuation) {
              if (!(state.vk_1 == null)) {
                multipleHandlersError($this, handler, state);
              }
              if (handler instanceof Segment)
                return Unit_instance;
              if (!isInterface(handler, CancelHandler))
                THROW_CCE();
              if (state.al()) {
                $this.zk(handler, state.yk_1);
                return Unit_instance;
              }
              var update = state.bl(VOID, handler);
              if ($this.hk_1.atomicfu$compareAndSet(state, update))
                return Unit_instance;
            } else {
              if (handler instanceof Segment)
                return Unit_instance;
              if (!isInterface(handler, CancelHandler))
                THROW_CCE();
              var update_0 = new CompletedContinuation(state, handler);
              if ($this.hk_1.atomicfu$compareAndSet(state, update_0))
                return Unit_instance;
            }
          }
        }
      }
    }
  }
  function multipleHandlersError($this, handler, state) {
    // Inline function 'kotlin.error' call
    var message = "It's prohibited to register multiple handlers, tried to register " + toString(handler) + ', already has ' + toString_0(state);
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function dispatchResume($this, mode) {
    if (tryResume_0($this))
      return Unit_instance;
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlinx.coroutines.assert' call
      tmp = proposedUpdate;
    } else {
      if (!get_isCancellableMode(resumeMode) && idempotent == null) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          tmp_1 = isInterface(state, CancelHandler);
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = !(idempotent == null);
        }
        if (tmp_0) {
          tmp = new CompletedContinuation(proposedUpdate, isInterface(state, CancelHandler) ? state : null, onCancellation, idempotent);
        } else {
          tmp = proposedUpdate;
        }
      }
    }
    return tmp;
  }
  function alreadyResumedError($this, proposedUpdate) {
    // Inline function 'kotlin.error' call
    var message = 'Already resumed, but proposed with update ' + toString_0(proposedUpdate);
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this)) {
      $this.dl();
    }
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.ek_1 = delegate;
    // Inline function 'kotlinx.coroutines.assert' call
    this.fk_1 = this.ek_1.l8();
    var tmp = this;
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    var tmp$ret$0 = (0 << 29) + 536870911 | 0;
    tmp.gk_1 = atomic$int$1(tmp$ret$0);
    this.hk_1 = atomic$ref$1(Active_instance);
    this.ik_1 = atomic$ref$1(null);
  }
  protoOf(CancellableContinuationImpl).el = function () {
    return this.ek_1;
  };
  protoOf(CancellableContinuationImpl).l8 = function () {
    return this.fk_1;
  };
  protoOf(CancellableContinuationImpl).hi = function () {
    return this.hk_1.kotlinx$atomicfu$value;
  };
  protoOf(CancellableContinuationImpl).ii = function () {
    var tmp = this.hi();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  protoOf(CancellableContinuationImpl).fl = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.ii()) {
      handle.gl();
      this.ik_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
    }
  };
  protoOf(CancellableContinuationImpl).hl = function () {
    return this.hi();
  };
  protoOf(CancellableContinuationImpl).il = function (takenState, cause) {
    var this_0 = this.hk_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (!(state == null) ? isInterface(state, NotCompleted) : false) {
        // Inline function 'kotlin.error' call
        var message = 'Not completed';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        if (state instanceof CompletedExceptionally)
          return Unit_instance;
        else {
          if (state instanceof CompletedContinuation) {
            // Inline function 'kotlin.check' call
            // Inline function 'kotlin.contracts.contract' call
            if (!!state.al()) {
              // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>.<anonymous>' call
              var message_0 = 'Must be called at most once';
              throw IllegalStateException_init_$Create$(toString(message_0));
            }
            var update = state.bl(VOID, VOID, VOID, VOID, cause);
            if (this.hk_1.atomicfu$compareAndSet(state, update)) {
              state.jl(this, cause);
              return Unit_instance;
            }
          } else {
            if (this.hk_1.atomicfu$compareAndSet(state, new CompletedContinuation(state, VOID, VOID, VOID, cause))) {
              return Unit_instance;
            }
          }
        }
      }
    }
    return Unit_instance;
  };
  protoOf(CancellableContinuationImpl).zj = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.hk_1;
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancel.<anonymous>' call
        var state = this_0.kotlinx$atomicfu$value;
        if (!(!(state == null) ? isInterface(state, NotCompleted) : false))
          return false;
        var tmp;
        if (isInterface(state, CancelHandler)) {
          tmp = true;
        } else {
          tmp = state instanceof Segment;
        }
        var update = new CancelledContinuation(this, cause, tmp);
        if (!this.hk_1.atomicfu$compareAndSet(state, update)) {
          break $l$block;
        }
        if (isInterface(state, CancelHandler)) {
          this.zk(state, cause);
        } else {
          if (state instanceof Segment) {
            callSegmentOnCancellation(this, state, cause);
          }
        }
        detachChildIfNonResuable(this);
        dispatchResume(this, this.rk_1);
        return true;
      }
    }
  };
  protoOf(CancellableContinuationImpl).kl = function (cause) {
    if (cancelLater(this, cause))
      return Unit_instance;
    this.zj(cause);
    detachChildIfNonResuable(this);
  };
  protoOf(CancellableContinuationImpl).zk = function (handler, cause) {
    var tmp;
    try {
      handler.ll(cause);
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.l8(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this.toString(), ex));
        tmp_0 = Unit_instance;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).ml = function (onCancellation, cause, value) {
    try {
      onCancellation(cause, value, this.l8());
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.l8(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this.toString(), ex));
      } else {
        throw $p;
      }
    }
  };
  protoOf(CancellableContinuationImpl).nl = function (parent) {
    return parent.mi();
  };
  protoOf(CancellableContinuationImpl).nj = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend_0(this)) {
      if (_get_parentHandle__f8dcex(this) == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        this.ol();
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      this.ol();
    }
    var state = this.hi();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.sh_1, this);
    if (get_isCancellableMode(this.rk_1)) {
      var job = this.l8().s8(Key_instance_2);
      if (!(job == null) && !job.nh()) {
        var cause = job.mi();
        this.il(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.pl(state);
  };
  protoOf(CancellableContinuationImpl).ol = function () {
    var tmp = this.ek_1;
    var tmp10_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp0_elvis_lhs = tmp10_safe_receiver == null ? null : tmp10_safe_receiver.ql(this);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    this.dl();
    this.zj(cancellationCause);
  };
  protoOf(CancellableContinuationImpl).q8 = function (result) {
    return this.rl(toState(result, this), this.rk_1);
  };
  protoOf(CancellableContinuationImpl).bk = function (handler) {
    return invokeOnCancellation(this, new UserSupplied(handler));
  };
  protoOf(CancellableContinuationImpl).jk = function (handler) {
    return invokeOnCancellationImpl(this, handler);
  };
  protoOf(CancellableContinuationImpl).sl = function (proposedUpdate, resumeMode, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.hk_1;
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.resumeImpl.<anonymous>' call
        var state = this_0.kotlinx$atomicfu$value;
        if (!(state == null) ? isInterface(state, NotCompleted) : false) {
          var update = resumedState(this, state, proposedUpdate, resumeMode, onCancellation, null);
          if (!this.hk_1.atomicfu$compareAndSet(state, update)) {
            break $l$block;
          }
          detachChildIfNonResuable(this);
          dispatchResume(this, resumeMode);
          return Unit_instance;
        } else {
          if (state instanceof CancelledContinuation) {
            if (state.wl()) {
              if (onCancellation == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                this.ml(onCancellation, state.sh_1, proposedUpdate);
              }
              return Unit_instance;
            }
          }
        }
        alreadyResumedError(this, proposedUpdate);
      }
    }
  };
  protoOf(CancellableContinuationImpl).rl = function (proposedUpdate, resumeMode, onCancellation, $super) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    var tmp;
    if ($super === VOID) {
      this.sl(proposedUpdate, resumeMode, onCancellation);
      tmp = Unit_instance;
    } else {
      tmp = $super.sl.call(this, proposedUpdate, resumeMode, onCancellation);
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).dl = function () {
    var tmp0_elvis_lhs = _get_parentHandle__f8dcex(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.gl();
    this.ik_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
  };
  protoOf(CancellableContinuationImpl).ck = function (_this__u8e3s4, value) {
    var tmp = this.ek_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    if ((dc == null ? null : dc.lk_1) === _this__u8e3s4) {
      tmp_0 = 4;
    } else {
      tmp_0 = this.rk_1;
    }
    this.rl(value, tmp_0);
  };
  protoOf(CancellableContinuationImpl).pl = function (state) {
    var tmp;
    if (state instanceof CompletedContinuation) {
      var tmp_0 = state.uk_1;
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = (state == null ? true : !(state == null)) ? state : THROW_CCE();
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).xl = function (state) {
    var tmp20_safe_receiver = protoOf(DispatchedTask).xl.call(this, state);
    var tmp;
    if (tmp20_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.getExceptionalResult.<anonymous>' call
      tmp = recoverStackTrace(tmp20_safe_receiver, this.ek_1);
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).toString = function () {
    return this.yl() + '(' + toDebugString(this.ek_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  protoOf(CancellableContinuationImpl).yl = function () {
    return 'CancellableContinuation';
  };
  function NotCompleted() {
  }
  function UserSupplied(handler) {
    this.bm_1 = handler;
  }
  protoOf(UserSupplied).ll = function (cause) {
    this.bm_1(cause);
  };
  protoOf(UserSupplied).toString = function () {
    return 'CancelHandler.UserSupplied[' + get_classSimpleName(this.bm_1) + '@' + get_hexAddress(this) + ']';
  };
  function CancelHandler() {
  }
  function Active() {
  }
  protoOf(Active).toString = function () {
    return 'Active';
  };
  var Active_instance;
  function Active_getInstance() {
    return Active_instance;
  }
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    cancelHandler = cancelHandler === VOID ? null : cancelHandler;
    onCancellation = onCancellation === VOID ? null : onCancellation;
    idempotentResume = idempotentResume === VOID ? null : idempotentResume;
    cancelCause = cancelCause === VOID ? null : cancelCause;
    this.uk_1 = result;
    this.vk_1 = cancelHandler;
    this.wk_1 = onCancellation;
    this.xk_1 = idempotentResume;
    this.yk_1 = cancelCause;
  }
  protoOf(CompletedContinuation).al = function () {
    return !(this.yk_1 == null);
  };
  protoOf(CompletedContinuation).jl = function (cont, cause) {
    var tmp21_safe_receiver = this.vk_1;
    if (tmp21_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.zk(tmp21_safe_receiver, cause);
    }
    var tmp22_safe_receiver = this.wk_1;
    if (tmp22_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.ml(tmp22_safe_receiver, cause, this.uk_1);
    }
  };
  protoOf(CompletedContinuation).cm = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).bl = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $super) {
    result = result === VOID ? this.uk_1 : result;
    cancelHandler = cancelHandler === VOID ? this.vk_1 : cancelHandler;
    onCancellation = onCancellation === VOID ? this.wk_1 : onCancellation;
    idempotentResume = idempotentResume === VOID ? this.xk_1 : idempotentResume;
    cancelCause = cancelCause === VOID ? this.yk_1 : cancelCause;
    return $super === VOID ? this.cm(result, cancelHandler, onCancellation, idempotentResume, cancelCause) : $super.cm.call(this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).toString = function () {
    return 'CompletedContinuation(result=' + toString_0(this.uk_1) + ', cancelHandler=' + toString_0(this.vk_1) + ', onCancellation=' + toString_0(this.wk_1) + ', idempotentResume=' + toString_0(this.xk_1) + ', cancelCause=' + toString_0(this.yk_1) + ')';
  };
  protoOf(CompletedContinuation).hashCode = function () {
    var result = this.uk_1 == null ? 0 : hashCode(this.uk_1);
    result = imul(result, 31) + (this.vk_1 == null ? 0 : hashCode(this.vk_1)) | 0;
    result = imul(result, 31) + (this.wk_1 == null ? 0 : hashCode(this.wk_1)) | 0;
    result = imul(result, 31) + (this.xk_1 == null ? 0 : hashCode(this.xk_1)) | 0;
    result = imul(result, 31) + (this.yk_1 == null ? 0 : hashCode(this.yk_1)) | 0;
    return result;
  };
  protoOf(CompletedContinuation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.uk_1, tmp0_other_with_cast.uk_1))
      return false;
    if (!equals(this.vk_1, tmp0_other_with_cast.vk_1))
      return false;
    if (!equals(this.wk_1, tmp0_other_with_cast.wk_1))
      return false;
    if (!equals(this.xk_1, tmp0_other_with_cast.xk_1))
      return false;
    if (!equals(this.yk_1, tmp0_other_with_cast.yk_1))
      return false;
    return true;
  };
  function ChildContinuation(child) {
    JobNode.call(this);
    this.hm_1 = child;
  }
  protoOf(ChildContinuation).im = function () {
    return true;
  };
  protoOf(ChildContinuation).ll = function (cause) {
    this.hm_1.kl(this.hm_1.nl(this.nm()));
  };
  function CompletedExceptionally(cause, handled) {
    handled = handled === VOID ? false : handled;
    this.sh_1 = cause;
    this.th_1 = atomic$boolean$1(handled);
  }
  protoOf(CompletedExceptionally).uh = function () {
    return this.th_1.kotlinx$atomicfu$value;
  };
  protoOf(CompletedExceptionally).cl = function () {
    return this.th_1.atomicfu$compareAndSet(false, true);
  };
  protoOf(CompletedExceptionally).toString = function () {
    return get_classSimpleName(this) + '[' + this.sh_1.toString() + ']';
  };
  function CancelledContinuation(continuation, cause, handled) {
    CompletedExceptionally.call(this, cause == null ? CancellationException_init_$Create$('Continuation ' + toString(continuation) + ' was cancelled normally') : cause, handled);
    this.vl_1 = atomic$boolean$1(false);
  }
  protoOf(CancelledContinuation).wl = function () {
    return this.vl_1.atomicfu$compareAndSet(false, true);
  };
  function toState(_this__u8e3s4, caller) {
    // Inline function 'kotlin.getOrElse' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp = new CompletedExceptionally(recoverStackTrace(exception, caller));
    }
    return tmp;
  }
  function toState_0(_this__u8e3s4) {
    // Inline function 'kotlin.getOrElse' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp = new CompletedExceptionally(exception);
    }
    return tmp;
  }
  function recoverResult(state, uCont) {
    var tmp;
    if (state instanceof CompletedExceptionally) {
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(state.sh_1, uCont);
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      var value = (state == null ? true : !(state == null)) ? state : THROW_CCE();
      tmp = _Result___init__impl__xyqfz8(value);
    }
    return tmp;
  }
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5(it) {
    return it instanceof CoroutineDispatcher ? it : null;
  }
  function Key() {
    Key_instance_0 = this;
    var tmp = Key_instance;
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5);
  }
  var Key_instance_0;
  function Key_getInstance() {
    if (Key_instance_0 == null)
      new Key();
    return Key_instance_0;
  }
  function CoroutineDispatcher() {
    Key_getInstance();
    AbstractCoroutineContextElement.call(this, Key_instance);
  }
  protoOf(CoroutineDispatcher).wm = function (context) {
    return true;
  };
  protoOf(CoroutineDispatcher).t8 = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  protoOf(CoroutineDispatcher).u8 = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.ym();
  };
  protoOf(CoroutineDispatcher).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  function handleCoroutineException(context, exception) {
    try {
      var tmp23_safe_receiver = context.s8(Key_instance_1);
      if (tmp23_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp23_safe_receiver.zm(context, exception);
        return Unit_instance;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        handleUncaughtCoroutineException(context, handlerException(exception, t));
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    handleUncaughtCoroutineException(context, exception);
  }
  function Key_0() {
  }
  var Key_instance_1;
  function Key_getInstance_0() {
    return Key_instance_1;
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    // Inline function 'kotlin.apply' call
    var this_0 = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.handlerException.<anonymous>' call
    addSuppressed(this_0, originalException);
    return this_0;
  }
  function CoroutineScope() {
  }
  function CoroutineScope_0(context) {
    return new ContextScope(!(context.s8(Key_instance_2) == null) ? context : context.de(Job_0()));
  }
  function coroutineScope(block, $completion) {
    // Inline function 'kotlinx.coroutines.coroutineScope.<anonymous>' call
    var coroutine = new ScopeCoroutine($completion.l8(), $completion);
    return startUndispatchedOrReturn(coroutine, coroutine, block);
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_instance;
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(CoroutineStart).di = function (block, receiver, completion) {
    var tmp;
    switch (this.r1_1) {
      case 0:
        startCoroutineCancellable(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 2:
        startCoroutine(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 3:
        startCoroutineUndispatched(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 1:
        tmp = Unit_instance;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(CoroutineStart).hj = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function CoroutineStart_UNDISPATCHED_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_UNDISPATCHED_instance;
  }
  function Delay() {
  }
  function get_delay(_this__u8e3s4) {
    var tmp = _this__u8e3s4.s8(Key_instance);
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, Delay) : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? get_DefaultDelay() : tmp0_elvis_lhs;
  }
  function delay(timeMillis, $completion) {
    if (timeMillis.v(new Long(0, 0)) <= 0)
      return Unit_instance;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.fl();
    // Inline function 'kotlinx.coroutines.delay.<anonymous>' call
    if (timeMillis.v(new Long(-1, 2147483647)) < 0) {
      get_delay(cancellable.l8()).an(timeMillis, cancellable);
    }
    return cancellable.nj();
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.cn_1 = new Long(0, 0);
    this.dn_1 = false;
    this.en_1 = null;
  }
  protoOf(EventLoop).fn = function () {
    var tmp0_elvis_lhs = this.en_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.lc();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.zl();
    return true;
  };
  protoOf(EventLoop).gn = function (task) {
    var tmp0_elvis_lhs = this.en_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = ArrayDeque_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.EventLoop.dispatchUnconfined.<anonymous>' call
      this.en_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.jc(task);
  };
  protoOf(EventLoop).hn = function () {
    return this.cn_1.v(delta(this, true)) >= 0;
  };
  protoOf(EventLoop).in = function () {
    var tmp27_safe_receiver = this.en_1;
    var tmp0_elvis_lhs = tmp27_safe_receiver == null ? null : tmp27_safe_receiver.n();
    return tmp0_elvis_lhs == null ? true : tmp0_elvis_lhs;
  };
  protoOf(EventLoop).jn = function (unconfined) {
    this.cn_1 = this.cn_1.y1(delta(this, unconfined));
    if (!unconfined)
      this.dn_1 = true;
  };
  protoOf(EventLoop).kn = function (unconfined) {
    this.cn_1 = this.cn_1.z1(delta(this, unconfined));
    if (this.cn_1.v(new Long(0, 0)) > 0)
      return Unit_instance;
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.dn_1) {
      this.ln();
    }
  };
  protoOf(EventLoop).ln = function () {
  };
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.mn_1 = commonThreadLocal(new Symbol('ThreadLocalEventLoop'));
  }
  protoOf(ThreadLocalEventLoop).nn = function () {
    var tmp0_elvis_lhs = this.mn_1.pn();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = createEventLoop();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.ThreadLocalEventLoop.<get-eventLoop>.<anonymous>' call
      ThreadLocalEventLoop_getInstance().mn_1.qn(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  function Key_1() {
  }
  var Key_instance_2;
  function Key_getInstance_1() {
    return Key_instance_2;
  }
  function Job() {
  }
  function ParentJob() {
  }
  function NonDisposableHandle() {
  }
  protoOf(NonDisposableHandle).gi = function () {
    return null;
  };
  protoOf(NonDisposableHandle).gl = function () {
  };
  protoOf(NonDisposableHandle).yi = function (cause) {
    return false;
  };
  protoOf(NonDisposableHandle).toString = function () {
    return 'NonDisposableHandle';
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    return NonDisposableHandle_instance;
  }
  function ensureActive(_this__u8e3s4) {
    var tmp41_safe_receiver = _this__u8e3s4.s8(Key_instance_2);
    if (tmp41_safe_receiver == null)
      null;
    else {
      ensureActive_0(tmp41_safe_receiver);
    }
  }
  function invokeOnCompletion(_this__u8e3s4, invokeImmediately, handler) {
    invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
    var tmp;
    if (_this__u8e3s4 instanceof JobSupport) {
      tmp = _this__u8e3s4.ri(invokeImmediately, handler);
    } else {
      var tmp_0 = handler.im();
      tmp = _this__u8e3s4.qi(tmp_0, invokeImmediately, JobNode$invoke$ref(handler));
    }
    return tmp;
  }
  function ensureActive_0(_this__u8e3s4) {
    if (!_this__u8e3s4.nh())
      throw _this__u8e3s4.mi();
  }
  function cancel(_this__u8e3s4, message, cause) {
    cause = cause === VOID ? null : cause;
    return _this__u8e3s4.ui(CancellationException_0(message, cause));
  }
  function Job_0(parent) {
    parent = parent === VOID ? null : parent;
    return new JobImpl(parent);
  }
  function get_job(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.s8(Key_instance_2);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = "Current context doesn't contain Job in it: " + toString(_this__u8e3s4);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function JobNode$invoke$ref($boundThis) {
    var l = function (p0) {
      $boundThis.ll(p0);
      return Unit_instance;
    };
    l.callableName = 'invoke';
    return l;
  }
  function get_COMPLETING_ALREADY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function get_COMPLETING_WAITING_CHILDREN() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function get_COMPLETING_RETRY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function get_TOO_LATE_TO_CANCEL() {
    _init_properties_JobSupport_kt__68f172();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function get_SEALED() {
    _init_properties_JobSupport_kt__68f172();
    return SEALED;
  }
  var SEALED;
  function get_EMPTY_NEW() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function get_EMPTY_ACTIVE() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this.sn_1 = isActive;
  }
  protoOf(Empty).nh = function () {
    return this.sn_1;
  };
  protoOf(Empty).om = function () {
    return null;
  };
  protoOf(Empty).toString = function () {
    return 'Empty{' + (this.sn_1 ? 'Active' : 'New') + '}';
  };
  function Incomplete() {
  }
  function NodeList() {
    LockFreeLinkedListHead.call(this);
  }
  protoOf(NodeList).nh = function () {
    return true;
  };
  protoOf(NodeList).om = function () {
    return this;
  };
  protoOf(NodeList).wn = function (state) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>' call
    this_0.k7('List{');
    this_0.k7(state);
    this_0.k7('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = this.pm_1;
    while (!equals(cur, this)) {
      // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>.<anonymous>' call
      var node = cur;
      if (node instanceof JobNode) {
        if (first) {
          first = false;
        } else
          this_0.k7(', ');
        this_0.j7(node);
      }
      cur = cur.pm_1;
    }
    this_0.k7(']');
    return this_0.toString();
  };
  protoOf(NodeList).toString = function () {
    return get_DEBUG() ? this.wn('Active') : protoOf(LockFreeLinkedListHead).toString.call(this);
  };
  function JobNode() {
    LockFreeLinkedListNode.call(this);
  }
  protoOf(JobNode).nm = function () {
    var tmp = this.mm_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  protoOf(JobNode).nh = function () {
    return true;
  };
  protoOf(JobNode).om = function () {
    return null;
  };
  protoOf(JobNode).gl = function () {
    return this.nm().si(this);
  };
  protoOf(JobNode).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.nm()) + ']';
  };
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this.bo_1.kotlinx$atomicfu$value = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this.bo_1.kotlinx$atomicfu$value;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp46_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp46_safe_receiver == null ? null : tmp46_safe_receiver.sh_1;
    var wasCancelling;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.JobSupport.finalizeFinishingState.<anonymous>' call
    wasCancelling = state.co();
    var exceptions = state.do(proposedException);
    var finalCause = getFinalRootCause($this, state, exceptions);
    if (!(finalCause == null)) {
      addSuppressedExceptions($this, finalCause, exceptions);
    }
    var finalException = finalCause;
    var finalState = finalException == null ? proposedUpdate : finalException === proposedException ? proposedUpdate : new CompletedExceptionally(finalException);
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) || $this.fj(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).cl();
      }
    }
    if (!wasCancelling) {
      $this.cj(finalException);
    }
    $this.rh(finalState);
    var casSuccess = $this.gh_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.n()) {
      if (state.co()) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        return new JobCancellationException(null == null ? $this.qh() : null, null, $this);
      }
      return null;
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = exceptions.i();
      while (tmp0_iterator.j()) {
        var element = tmp0_iterator.k();
        // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
        if (!(element instanceof CancellationException)) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var firstNonCancellation = tmp$ret$2;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.o(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator_0 = exceptions.i();
        while (tmp0_iterator_0.j()) {
          var element_0 = tmp0_iterator_0.k();
          // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
          var tmp;
          if (!(element_0 === first)) {
            tmp = element_0 instanceof TimeoutCancellationException;
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$4 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$4 = null;
      }
      var detailedTimeoutException = tmp$ret$4;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions.l() <= 1)
      return Unit_instance;
    var seenExceptions = identitySet(exceptions.l());
    var unwrappedCause = unwrap(rootCause);
    var _iterator__ex2g4s = exceptions.i();
    while (_iterator__ex2g4s.j()) {
      var exception = _iterator__ex2g4s.k();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) && !(unwrapped === unwrappedCause)) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.d(unwrapped);
      } else {
        tmp = false;
      }
      if (tmp) {
        addSuppressed(rootCause, unwrapped);
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    if (!$this.gh_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.cj(null);
    $this.rh(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp47_safe_receiver = $this.fi();
    if (tmp47_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp47_safe_receiver.gl();
      $this.ei(NonDisposableHandle_instance);
    }
    var tmp48_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp48_safe_receiver == null ? null : tmp48_safe_receiver.sh_1;
    if (state instanceof JobNode) {
      try {
        state.ll(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          var ex = $p;
          $this.yh(new CompletionHandlerException('Exception in completion handler ' + state.toString() + ' for ' + $this.toString(), ex));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp49_safe_receiver = state.om();
      if (tmp49_safe_receiver == null)
        null;
      else {
        notifyCompletion(tmp49_safe_receiver, $this, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.cj(cause);
    list.xn(4);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = list.pm_1;
    while (!equals(cur, list)) {
      // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
      var node = cur;
      var tmp;
      if (node instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyCancelling.<anonymous>' call
        tmp = node.im();
      } else {
        tmp = false;
      }
      if (tmp) {
        try {
          node.ll(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp50_safe_receiver = exception;
            var tmp_0;
            if (tmp50_safe_receiver == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              addSuppressed(tmp50_safe_receiver, ex);
              tmp_0 = tmp50_safe_receiver;
            }
            if (tmp_0 == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node.toString() + ' for ' + $this.toString(), ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.pm_1;
    }
    var tmp51_safe_receiver = exception;
    if (tmp51_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.yh(tmp51_safe_receiver);
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.dj())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.fi();
    if (parent === null || parent === NonDisposableHandle_instance) {
      return isCancellation;
    }
    return parent.yi(cause) || isCancellation;
  }
  function notifyCompletion(_this__u8e3s4, $this, cause) {
    _this__u8e3s4.xn(1);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = _this__u8e3s4.pm_1;
    while (!equals(cur, _this__u8e3s4)) {
      // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
      var node = cur;
      var tmp;
      if (node instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyCompletion.<anonymous>' call
        tmp = true;
      } else {
        tmp = false;
      }
      if (tmp) {
        try {
          node.ll(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp50_safe_receiver = exception;
            var tmp_0;
            if (tmp50_safe_receiver == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              addSuppressed(tmp50_safe_receiver, ex);
              tmp_0 = tmp50_safe_receiver;
            }
            if (tmp_0 == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node.toString() + ' for ' + $this.toString(), ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.pm_1;
    }
    var tmp51_safe_receiver = exception;
    if (tmp51_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.yh(tmp51_safe_receiver);
    }
  }
  function startInternal($this, state) {
    if (state instanceof Empty) {
      if (state.sn_1)
        return 0;
      if (!$this.gh_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.li();
      return 1;
    } else {
      if (state instanceof InactiveNodeList) {
        if (!$this.gh_1.atomicfu$compareAndSet(state, state.eo_1))
          return -1;
        $this.li();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.sn_1 ? list : new InactiveNodeList(list);
    $this.gh_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.um(new NodeList());
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.nextNode' call
    var list = state.pm_1;
    $this.gh_1.atomicfu$compareAndSet(state, list);
  }
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.cancelMakeCompleting.<anonymous>' call
      var state = $this.hi();
      var tmp;
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (state instanceof Finishing) {
          tmp_0 = state.fo();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        return get_COMPLETING_ALREADY();
      }
      var proposedUpdate = new CompletedExceptionally(createCauseException($this, cause));
      var finalState = tryMakeCompleting($this, state, proposedUpdate);
      if (!(finalState === get_COMPLETING_RETRY()))
        return finalState;
    }
  }
  function createCauseException($this, cause) {
    var tmp;
    if (cause == null ? true : cause instanceof Error) {
      var tmp_0;
      if (cause == null) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        tmp_0 = new JobCancellationException(null == null ? $this.qh() : null, null, $this);
      } else {
        tmp_0 = cause;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).aj();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>' call
        var state = $this.hi();
        if (state instanceof Finishing) {
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
          if (state.go())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = state.co();
          if (!(cause == null) || !wasCancelling) {
            var tmp0_elvis_lhs = causeExceptionCache;
            var tmp;
            if (tmp0_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var this_0 = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
              causeExceptionCache = this_0;
              tmp = this_0;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            var causeException = tmp;
            state.ho(causeException);
          }
          // Inline function 'kotlin.takeIf' call
          var this_1 = state.io();
          // Inline function 'kotlin.contracts.contract' call
          var tmp_0;
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
          if (!wasCancelling) {
            tmp_0 = this_1;
          } else {
            tmp_0 = null;
          }
          var notifyRootCause = tmp_0;
          if (notifyRootCause == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            notifyCancelling($this, state.yn_1, notifyRootCause);
          }
          return get_COMPLETING_ALREADY();
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var tmp0_elvis_lhs_0 = causeExceptionCache;
            var tmp_1;
            if (tmp0_elvis_lhs_0 == null) {
              // Inline function 'kotlin.also' call
              var this_2 = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
              causeExceptionCache = this_2;
              tmp_1 = this_2;
            } else {
              tmp_1 = tmp0_elvis_lhs_0;
            }
            var causeException_0 = tmp_1;
            if (state.nh()) {
              if (tryMakeCancelling($this, state, causeException_0))
                return get_COMPLETING_ALREADY();
            } else {
              var finalState = tryMakeCompleting($this, state, new CompletedExceptionally(causeException_0));
              if (finalState === get_COMPLETING_ALREADY()) {
                // Inline function 'kotlin.error' call
                var message = 'Cannot happen in ' + toString(state);
                throw IllegalStateException_init_$Create$(toString(message));
              } else if (finalState === get_COMPLETING_RETRY()) {
                break $l$block;
              } else
                return finalState;
            }
          } else {
            return get_TOO_LATE_TO_CANCEL();
          }
        }
      }
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp0_elvis_lhs = state.om();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0;
      if (state instanceof Empty) {
        tmp_0 = new NodeList();
      } else {
        if (state instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          var message = 'State should have list: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.gh_1.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return get_COMPLETING_ALREADY();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      tmp_1 = state instanceof JobNode;
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }
      return get_COMPLETING_RETRY();
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return get_COMPLETING_RETRY();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    if (finishing.fo())
      return get_COMPLETING_ALREADY();
    finishing.jo(true);
    if (!(finishing === state)) {
      if (!$this.gh_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.co();
    var tmp65_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp65_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      finishing.ho(tmp65_safe_receiver.sh_1);
    }
    // Inline function 'kotlin.takeIf' call
    var this_0 = finishing.io();
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    // Inline function 'kotlinx.coroutines.JobSupport.tryMakeCompletingSlowPath.<anonymous>.<anonymous>' call
    if (!wasCancelling) {
      tmp_0 = this_0;
    } else {
      tmp_0 = null;
    }
    notifyRootCause = tmp_0;
    if (notifyRootCause == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      notifyCancelling($this, list, notifyRootCause);
    }
    var child = nextChild(list, $this);
    if (!(child == null) && tryWaitForChild($this, finishing, child, proposedUpdate))
      return get_COMPLETING_WAITING_CHILDREN();
    list.xn(2);
    var anotherChild = nextChild(list, $this);
    if (!(anotherChild == null) && tryWaitForChild($this, finishing, anotherChild, proposedUpdate))
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js(_this__u8e3s4, $this) {
    var tmp67_safe_receiver = _this__u8e3s4 instanceof CompletedExceptionally ? _this__u8e3s4 : null;
    return tmp67_safe_receiver == null ? null : tmp67_safe_receiver.sh_1;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    $l$1: do {
      $l$0: do {
        var handle = invokeOnCompletion(child_0.oo_1, false, new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0));
        if (!(handle === NonDisposableHandle_instance))
          return true;
        var tmp0_elvis_lhs = nextChild(child_0, $this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return false;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var nextChild_0 = tmp;
        $this_0 = $this_0;
        state_0 = state_0;
        child_0 = nextChild_0;
        proposedUpdate_0 = proposedUpdate_0;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    var waitChild = nextChild(lastChild, $this);
    if (!(waitChild == null) && tryWaitForChild($this, state, waitChild, proposedUpdate))
      return Unit_instance;
    state.yn_1.xn(2);
    var waitChildAgain = nextChild(lastChild, $this);
    if (!(waitChildAgain == null) && tryWaitForChild($this, state, waitChildAgain, proposedUpdate)) {
      return Unit_instance;
    }
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.xh(finalState);
  }
  function nextChild(_this__u8e3s4, $this) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.isRemoved' call
      if (!cur.rm_1) {
        break $l$loop;
      }
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.prevNode' call
      cur = cur.qm_1;
    }
    $l$loop_0: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.nextNode' call
      cur = cur.pm_1;
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.isRemoved' call
      if (cur.rm_1)
        continue $l$loop_0;
      if (cur instanceof ChildHandleNode)
        return cur;
      if (cur instanceof NodeList)
        return null;
    }
  }
  function stateString($this, state) {
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.co() ? 'Cancelling' : state.fo() ? 'Completing' : 'Active';
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        tmp = state.nh() ? 'Active' : 'New';
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    SynchronizedObject.call(this);
    this.yn_1 = list;
    this.zn_1 = atomic$boolean$1(isCompleting);
    this.ao_1 = atomic$ref$1(rootCause);
    this.bo_1 = atomic$ref$1(null);
  }
  protoOf(Finishing).om = function () {
    return this.yn_1;
  };
  protoOf(Finishing).jo = function (value) {
    this.zn_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).fo = function () {
    return this.zn_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).po = function (value) {
    this.ao_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).io = function () {
    return this.ao_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).go = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  protoOf(Finishing).co = function () {
    return !(this.io() == null);
  };
  protoOf(Finishing).nh = function () {
    return this.io() == null;
  };
  protoOf(Finishing).do = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        // Inline function 'kotlin.also' call
        var this_0 = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.sealLocked.<anonymous>' call
        this_0.d(eh);
        tmp = this_0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          var message = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    var list = tmp;
    var rootCause = this.io();
    if (rootCause == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      list.g1(0, rootCause);
    }
    if (!(proposedException == null) && !equals(proposedException, rootCause)) {
      list.d(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  protoOf(Finishing).ho = function (exception) {
    var rootCause = this.io();
    if (rootCause == null) {
      this.po(exception);
      return Unit_instance;
    }
    if (exception === rootCause)
      return Unit_instance;
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null) {
      _set_exceptionsHolder__tqm22h(this, exception);
    } else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_instance;
        // Inline function 'kotlin.apply' call
        var this_0 = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.addExceptionLocked.<anonymous>' call
        this_0.d(eh);
        this_0.d(exception);
        _set_exceptionsHolder__tqm22h(this, this_0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).d(exception);
        } else {
          var message = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
  };
  protoOf(Finishing).toString = function () {
    return 'Finishing[cancelling=' + this.co() + ', completing=' + this.fo() + ', rootCause=' + toString_0(this.io()) + ', exceptions=' + toString_0(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.yn_1.toString() + ']';
  };
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.uo_1 = parent;
    this.vo_1 = state;
    this.wo_1 = child;
    this.xo_1 = proposedUpdate;
  }
  protoOf(ChildCompletion).im = function () {
    return false;
  };
  protoOf(ChildCompletion).ll = function (cause) {
    continueCompleting(this.uo_1, this.vo_1, this.wo_1, this.xo_1);
  };
  function JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation) {
    this.gp_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JobSupport$_get_children_$slambda_k839f8).qp = function ($this$sequence, $completion) {
    var tmp = this.rp($this$sequence, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).b9 = function (p1, $completion) {
    return this.qp(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        switch (tmp) {
          case 0:
            this.g8_1 = 8;
            this.ip_1 = this.gp_1.hi();
            var tmp_0 = this.ip_1;
            if (tmp_0 instanceof ChildHandleNode) {
              this.f8_1 = 6;
              suspendResult = this.hp_1.ld(this.ip_1.oo_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.ip_1;
              if (!(tmp_1 == null) ? isInterface(tmp_1, Incomplete) : false) {
                this.jp_1 = this.ip_1.om();
                if (this.jp_1 == null) {
                  this.kp_1 = null;
                  this.f8_1 = 5;
                  continue $sm;
                } else {
                  var tmp_2 = this;
                  tmp_2.lp_1 = this.jp_1;
                  var tmp_3 = this;
                  tmp_3.mp_1 = this.lp_1;
                  var tmp_4 = this;
                  tmp_4.np_1 = this.mp_1;
                  this.op_1 = this.np_1.pm_1;
                  this.f8_1 = 1;
                  continue $sm;
                }
              } else {
                this.f8_1 = 7;
                continue $sm;
              }
            }

          case 1:
            if (!!equals(this.op_1, this.np_1)) {
              this.f8_1 = 4;
              continue $sm;
            }

            var tmp_5 = this;
            tmp_5.pp_1 = this.op_1;
            var tmp_6 = this.pp_1;
            if (tmp_6 instanceof ChildHandleNode) {
              this.f8_1 = 2;
              suspendResult = this.hp_1.ld(this.pp_1.oo_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.f8_1 = 3;
              continue $sm;
            }

          case 2:
            this.f8_1 = 3;
            continue $sm;
          case 3:
            this.op_1 = this.op_1.pm_1;
            this.f8_1 = 1;
            continue $sm;
          case 4:
            this.kp_1 = Unit_instance;
            this.f8_1 = 5;
            continue $sm;
          case 5:
            this.f8_1 = 7;
            continue $sm;
          case 6:
            this.f8_1 = 7;
            continue $sm;
          case 7:
            return Unit_instance;
          case 8:
            throw this.i8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.g8_1 === 8) {
          throw e;
        } else {
          this.f8_1 = this.g8_1;
          this.i8_1 = e;
        }
      }
     while (true);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).rp = function ($this$sequence, completion) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this.gp_1, completion);
    i.hp_1 = $this$sequence;
    return i;
  };
  function JobSupport$_get_children_$slambda_k839f8_0(this$0, resultContinuation) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.qp($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function JobSupport(active) {
    this.gh_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.hh_1 = atomic$ref$1(null);
  }
  protoOf(JobSupport).j1 = function () {
    return Key_instance_2;
  };
  protoOf(JobSupport).ei = function (value) {
    this.hh_1.kotlinx$atomicfu$value = value;
  };
  protoOf(JobSupport).fi = function () {
    return this.hh_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).gi = function () {
    var tmp45_safe_receiver = this.fi();
    return tmp45_safe_receiver == null ? null : tmp45_safe_receiver.gi();
  };
  protoOf(JobSupport).ih = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.ei(NonDisposableHandle_instance);
      return Unit_instance;
    }
    parent.ki();
    var handle = parent.bj(this);
    this.ei(handle);
    if (this.ii()) {
      handle.gl();
      this.ei(NonDisposableHandle_instance);
    }
  };
  protoOf(JobSupport).hi = function () {
    return this.gh_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).nh = function () {
    var state = this.hi();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.nh();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(JobSupport).ii = function () {
    var tmp = this.hi();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  protoOf(JobSupport).ji = function () {
    var state = this.hi();
    var tmp;
    if (state instanceof CompletedExceptionally) {
      tmp = true;
    } else {
      var tmp_0;
      if (state instanceof Finishing) {
        tmp_0 = state.co();
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobSupport).ki = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.start.<anonymous>' call
      var state = this.hi();
      var tmp52_subject = startInternal(this, state);
      if (tmp52_subject === 0)
        return false;
      else if (tmp52_subject === 1)
        return true;
    }
  };
  protoOf(JobSupport).li = function () {
  };
  protoOf(JobSupport).mi = function () {
    var state = this.hi();
    var tmp;
    if (state instanceof Finishing) {
      var tmp54_safe_receiver = state.io();
      var tmp0_elvis_lhs = tmp54_safe_receiver == null ? null : this.ni(tmp54_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var message = 'Job is still new or active: ' + this.toString();
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var message_0 = 'Job is still new or active: ' + this.toString();
        throw IllegalStateException_init_$Create$(toString(message_0));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.oi(state.sh_1);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  protoOf(JobSupport).ni = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(message == null ? this.qh() : message, _this__u8e3s4, this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(JobSupport).oi = function (_this__u8e3s4, message, $super) {
    message = message === VOID ? null : message;
    return $super === VOID ? this.ni(_this__u8e3s4, message) : $super.ni.call(this, _this__u8e3s4, message);
  };
  protoOf(JobSupport).pi = function (handler) {
    return this.ri(true, new InvokeOnCompletion(handler));
  };
  protoOf(JobSupport).qi = function (onCancelling, invokeImmediately, handler) {
    var tmp;
    if (onCancelling) {
      tmp = new InvokeOnCancelling(handler);
    } else {
      tmp = new InvokeOnCompletion(handler);
    }
    return this.ri(invokeImmediately, tmp);
  };
  protoOf(JobSupport).ri = function (invokeImmediately, node) {
    node.mm_1 = this;
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.JobSupport.tryPutNodeIntoList' call
      // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
      while (true) {
        // Inline function 'kotlinx.coroutines.JobSupport.tryPutNodeIntoList.<anonymous>' call
        var state = this.hi();
        if (state instanceof Empty) {
          if (state.sn_1) {
            if (this.gh_1.atomicfu$compareAndSet(state, node)) {
              tmp$ret$0 = true;
              break $l$block_1;
            }
          } else {
            promoteEmptyToNodeList(this, state);
          }
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var list = state.om();
            if (list == null) {
              promoteSingleToNodeList(this, state instanceof JobNode ? state : THROW_CCE());
            } else {
              // Inline function 'kotlinx.coroutines.JobSupport.invokeOnCompletionInternal.<anonymous>' call
              var tmp;
              if (node.im()) {
                var tmp55_safe_receiver = state instanceof Finishing ? state : null;
                var rootCause = tmp55_safe_receiver == null ? null : tmp55_safe_receiver.io();
                var tmp_0;
                if (rootCause == null) {
                  tmp_0 = list.sm(node, 5);
                } else {
                  if (invokeImmediately) {
                    node.ll(rootCause);
                  }
                  return NonDisposableHandle_instance;
                }
                tmp = tmp_0;
              } else {
                tmp = list.sm(node, 1);
              }
              if (tmp) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
            }
          } else {
            tmp$ret$0 = false;
            break $l$block_1;
          }
        }
      }
    }
    var added = tmp$ret$0;
    if (added)
      return node;
    else if (invokeImmediately) {
      var tmp_1 = this.hi();
      var tmp56_safe_receiver = tmp_1 instanceof CompletedExceptionally ? tmp_1 : null;
      node.ll(tmp56_safe_receiver == null ? null : tmp56_safe_receiver.sh_1);
    }
    return NonDisposableHandle_instance;
  };
  protoOf(JobSupport).si = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.removeNode.<anonymous>' call
      var state = this.hi();
      if (state instanceof JobNode) {
        if (!(state === node))
          return Unit_instance;
        if (this.gh_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
          return Unit_instance;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          if (!(state.om() == null)) {
            node.tm();
          }
          return Unit_instance;
        } else {
          return Unit_instance;
        }
      }
    }
  };
  protoOf(JobSupport).ti = function () {
    return false;
  };
  protoOf(JobSupport).ui = function (cause) {
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.qh() : null, null, this);
    } else {
      tmp = cause;
    }
    this.wi(tmp);
  };
  protoOf(JobSupport).qh = function () {
    return 'Job was cancelled';
  };
  protoOf(JobSupport).wi = function (cause) {
    this.zi(cause);
  };
  protoOf(JobSupport).xi = function (parentJob) {
    this.zi(parentJob);
  };
  protoOf(JobSupport).yi = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.zi(cause) && this.ej();
  };
  protoOf(JobSupport).zi = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.ti()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === get_COMPLETING_WAITING_CHILDREN())
        return true;
    }
    if (finalState === get_COMPLETING_ALREADY()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === get_COMPLETING_ALREADY()) {
      tmp = true;
    } else if (finalState === get_COMPLETING_WAITING_CHILDREN()) {
      tmp = true;
    } else if (finalState === get_TOO_LATE_TO_CANCEL()) {
      tmp = false;
    } else {
      this.xh(finalState);
      tmp = true;
    }
    return tmp;
  };
  protoOf(JobSupport).aj = function () {
    var state = this.hi();
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.io();
    } else {
      if (state instanceof CompletedExceptionally) {
        tmp = state.sh_1;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          var message = 'Cannot be cancelling child in this state: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp0_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp0_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp0_elvis_lhs;
  };
  protoOf(JobSupport).vh = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompletingOnce.<anonymous>' call
        var state = this.hi();
        var finalState = tryMakeCompleting(this, state, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          throw IllegalStateException_init_$Create$_0('Job ' + this.toString() + ' is already complete or completing, ' + ('but is being completed with ' + toString_0(proposedUpdate)), _get_exceptionOrNull__b3j7js(proposedUpdate, this));
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else
          return finalState;
      }
    }
  };
  protoOf(JobSupport).rn = function () {
    return sequence(JobSupport$_get_children_$slambda_k839f8_0(this, null));
  };
  protoOf(JobSupport).bj = function (child) {
    // Inline function 'kotlin.also' call
    var this_0 = new ChildHandleNode(child);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.JobSupport.attachChild.<anonymous>' call
    this_0.mm_1 = this;
    var node = this_0;
    var tmp$ret$1;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.JobSupport.tryPutNodeIntoList' call
      // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
      while (true) {
        // Inline function 'kotlinx.coroutines.JobSupport.tryPutNodeIntoList.<anonymous>' call
        var state = this.hi();
        if (state instanceof Empty) {
          if (state.sn_1) {
            if (this.gh_1.atomicfu$compareAndSet(state, node)) {
              tmp$ret$1 = true;
              break $l$block_1;
            }
          } else {
            promoteEmptyToNodeList(this, state);
          }
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var list = state.om();
            if (list == null) {
              promoteSingleToNodeList(this, state instanceof JobNode ? state : THROW_CCE());
            } else {
              // Inline function 'kotlinx.coroutines.JobSupport.attachChild.<anonymous>' call
              var addedBeforeCancellation = list.sm(node, 7);
              var tmp;
              if (addedBeforeCancellation) {
                tmp = true;
              } else {
                var addedBeforeCompletion = list.sm(node, 3);
                var latestState = this.hi();
                var tmp_0;
                if (latestState instanceof Finishing) {
                  tmp_0 = latestState.io();
                } else {
                  // Inline function 'kotlinx.coroutines.assert' call
                  var tmp69_safe_receiver = latestState instanceof CompletedExceptionally ? latestState : null;
                  tmp_0 = tmp69_safe_receiver == null ? null : tmp69_safe_receiver.sh_1;
                }
                var rootCause = tmp_0;
                node.ll(rootCause);
                var tmp_1;
                if (addedBeforeCompletion) {
                  // Inline function 'kotlinx.coroutines.assert' call
                  tmp_1 = true;
                } else {
                  return NonDisposableHandle_instance;
                }
                tmp = tmp_1;
              }
              if (tmp) {
                tmp$ret$1 = true;
                break $l$block_1;
              }
            }
          } else {
            tmp$ret$1 = false;
            break $l$block_1;
          }
        }
      }
    }
    var added = tmp$ret$1;
    if (added)
      return node;
    var tmp_2 = this.hi();
    var tmp70_safe_receiver = tmp_2 instanceof CompletedExceptionally ? tmp_2 : null;
    node.ll(tmp70_safe_receiver == null ? null : tmp70_safe_receiver.sh_1);
    return NonDisposableHandle_instance;
  };
  protoOf(JobSupport).yh = function (exception) {
    throw exception;
  };
  protoOf(JobSupport).cj = function (cause) {
  };
  protoOf(JobSupport).dj = function () {
    return false;
  };
  protoOf(JobSupport).ej = function () {
    return true;
  };
  protoOf(JobSupport).fj = function (exception) {
    return false;
  };
  protoOf(JobSupport).rh = function (state) {
  };
  protoOf(JobSupport).xh = function (state) {
  };
  protoOf(JobSupport).toString = function () {
    return this.gj() + '@' + get_hexAddress(this);
  };
  protoOf(JobSupport).gj = function () {
    return this.zh() + '{' + stateString(this, this.hi()) + '}';
  };
  protoOf(JobSupport).zh = function () {
    return get_classSimpleName(this);
  };
  function boxIncomplete(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp;
    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function InactiveNodeList(list) {
    this.eo_1 = list;
  }
  protoOf(InactiveNodeList).om = function () {
    return this.eo_1;
  };
  protoOf(InactiveNodeList).nh = function () {
    return false;
  };
  protoOf(InactiveNodeList).toString = function () {
    return get_DEBUG() ? this.eo_1.wn('New') : anyToString(this);
  };
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.wp_1 = handler;
  }
  protoOf(InvokeOnCompletion).im = function () {
    return false;
  };
  protoOf(InvokeOnCompletion).ll = function (cause) {
    return this.wp_1(cause);
  };
  function InvokeOnCancelling(handler) {
    JobNode.call(this);
    this.bq_1 = handler;
    this.cq_1 = atomic$boolean$1(false);
  }
  protoOf(InvokeOnCancelling).im = function () {
    return true;
  };
  protoOf(InvokeOnCancelling).ll = function (cause) {
    if (this.cq_1.atomicfu$compareAndSet(false, true))
      this.bq_1(cause);
  };
  function ChildHandleNode(childJob) {
    JobNode.call(this);
    this.oo_1 = childJob;
  }
  protoOf(ChildHandleNode).gi = function () {
    return this.nm();
  };
  protoOf(ChildHandleNode).im = function () {
    return true;
  };
  protoOf(ChildHandleNode).ll = function (cause) {
    return this.oo_1.xi(this.nm());
  };
  protoOf(ChildHandleNode).yi = function (cause) {
    return this.nm().yi(cause);
  };
  function unboxState(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp74_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp0_elvis_lhs = tmp74_safe_receiver == null ? null : tmp74_safe_receiver.dq_1;
    return tmp0_elvis_lhs == null ? _this__u8e3s4 : tmp0_elvis_lhs;
  }
  function IncompleteStateBox(state) {
    this.dq_1 = state;
  }
  function handlesExceptionF($this) {
    var tmp = $this.fi();
    var tmp75_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp0_elvis_lhs = tmp75_safe_receiver == null ? null : tmp75_safe_receiver.nm();
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob.ej())
        return true;
      var tmp_1 = parentJob.fi();
      var tmp76_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp1_elvis_lhs = tmp76_safe_receiver == null ? null : tmp76_safe_receiver.nm();
      var tmp_2;
      if (tmp1_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp1_elvis_lhs;
      }
      parentJob = tmp_2;
    }
  }
  function JobImpl(parent) {
    JobSupport.call(this, true);
    this.ih(parent);
    this.gq_1 = handlesExceptionF(this);
  }
  protoOf(JobImpl).ti = function () {
    return true;
  };
  protoOf(JobImpl).ej = function () {
    return this.gq_1;
  };
  var properties_initialized_JobSupport_kt_5iq8a4;
  function _init_properties_JobSupport_kt__68f172() {
    if (!properties_initialized_JobSupport_kt_5iq8a4) {
      properties_initialized_JobSupport_kt_5iq8a4 = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  protoOf(MainCoroutineDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.jq();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  protoOf(MainCoroutineDispatcher).jq = function () {
    var main = Dispatchers_getInstance().oq();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.iq();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  function SupervisorJob(parent) {
    parent = parent === VOID ? null : parent;
    return new SupervisorJobImpl(parent);
  }
  function SupervisorJobImpl(parent) {
    JobImpl.call(this, parent);
  }
  protoOf(SupervisorJobImpl).yi = function (cause) {
    return false;
  };
  function TimeoutCancellationException() {
  }
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  protoOf(Unconfined).wm = function (context) {
    return false;
  };
  protoOf(Unconfined).xm = function (context, block) {
    var yieldContext = context.s8(Key_instance_3);
    if (!(yieldContext == null)) {
      yieldContext.uq_1 = true;
      return Unit_instance;
    }
    throw UnsupportedOperationException_init_$Create$('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  protoOf(Unconfined).toString = function () {
    return 'Dispatchers.Unconfined';
  };
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_2() {
  }
  var Key_instance_3;
  function Key_getInstance_2() {
    return Key_instance_3;
  }
  function flow(block) {
    return new SafeFlow(block);
  }
  function SafeFlow(block) {
    AbstractFlow.call(this);
    this.vq_1 = block;
  }
  protoOf(SafeFlow).wq = function (collector, $completion) {
    return this.vq_1(collector, $completion);
  };
  function $collectCOROUTINE$11(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.gr_1 = _this__u8e3s4;
    this.hr_1 = collector;
  }
  protoOf($collectCOROUTINE$11).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        switch (tmp) {
          case 0:
            this.g8_1 = 5;
            var tmp_0 = this;
            tmp_0.ir_1 = new SafeCollector(this.hr_1, this.l8());
            this.f8_1 = 1;
            continue $sm;
          case 1:
            this.g8_1 = 4;
            this.f8_1 = 2;
            suspendResult = this.gr_1.wq(this.ir_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.jr_1 = suspendResult;
            this.g8_1 = 5;
            this.f8_1 = 3;
            continue $sm;
          case 3:
            this.g8_1 = 5;
            this.ir_1.p8();
            return Unit_instance;
          case 4:
            this.g8_1 = 5;
            var t = this.i8_1;
            this.ir_1.p8();
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
  function AbstractFlow() {
  }
  protoOf(AbstractFlow).xq = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$11(this, collector, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  function FlowCollector() {
  }
  var NO_VALUE;
  function _get_head__d7jo8b($this) {
    // Inline function 'kotlin.comparisons.minOf' call
    var a = $this.yr_1;
    var b = $this.xr_1;
    return a.v(b) <= 0 ? a : b;
  }
  function _get_replaySize__dxgnb1($this) {
    // Inline function 'kotlin.Long.plus' call
    var this_0 = _get_head__d7jo8b($this);
    var other = $this.zr_1;
    return this_0.y1(toLong(other)).z1($this.xr_1).n2();
  }
  function _get_totalSize__xhdb3o($this) {
    return $this.zr_1 + $this.as_1 | 0;
  }
  function _get_bufferEndIndex__d2rk18($this) {
    // Inline function 'kotlin.Long.plus' call
    var this_0 = _get_head__d7jo8b($this);
    var other = $this.zr_1;
    return this_0.y1(toLong(other));
  }
  function _get_queueEndIndex__4m025l($this) {
    // Inline function 'kotlin.Long.plus' call
    // Inline function 'kotlin.Long.plus' call
    var this_0 = _get_head__d7jo8b($this);
    var other = $this.zr_1;
    var this_1 = this_0.y1(toLong(other));
    var other_0 = $this.as_1;
    return this_1.y1(toLong(other_0));
  }
  function tryEmitLocked($this, value) {
    if ($this.cs_1 === 0)
      return tryEmitNoCollectorsLocked($this, value);
    if ($this.zr_1 >= $this.ur_1 && $this.yr_1.v($this.xr_1) <= 0) {
      switch ($this.vr_1.r1_1) {
        case 0:
          return false;
        case 2:
          return true;
        case 1:
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
    }
    enqueueLocked($this, value);
    $this.zr_1 = $this.zr_1 + 1 | 0;
    if ($this.zr_1 > $this.ur_1) {
      dropOldestLocked($this);
    }
    if (_get_replaySize__dxgnb1($this) > $this.tr_1) {
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$0 = $this.xr_1.y1(toLong(1));
      updateBufferLocked($this, tmp$ret$0, $this.yr_1, _get_bufferEndIndex__d2rk18($this), _get_queueEndIndex__4m025l($this));
    }
    return true;
  }
  function tryEmitNoCollectorsLocked($this, value) {
    // Inline function 'kotlinx.coroutines.assert' call
    if ($this.tr_1 === 0)
      return true;
    enqueueLocked($this, value);
    $this.zr_1 = $this.zr_1 + 1 | 0;
    if ($this.zr_1 > $this.tr_1) {
      dropOldestLocked($this);
    }
    var tmp = $this;
    // Inline function 'kotlin.Long.plus' call
    var this_0 = _get_head__d7jo8b($this);
    var other = $this.zr_1;
    tmp.yr_1 = this_0.y1(toLong(other));
    return true;
  }
  function dropOldestLocked($this) {
    setBufferAt(ensureNotNull($this.wr_1), _get_head__d7jo8b($this), null);
    $this.zr_1 = $this.zr_1 - 1 | 0;
    // Inline function 'kotlin.Long.plus' call
    var newHead = _get_head__d7jo8b($this).y1(toLong(1));
    if ($this.xr_1.v(newHead) < 0)
      $this.xr_1 = newHead;
    if ($this.yr_1.v(newHead) < 0) {
      correctCollectorIndexesOnDropOldest($this, newHead);
    }
    // Inline function 'kotlinx.coroutines.assert' call
  }
  function correctCollectorIndexesOnDropOldest($this, newHead) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if ($this.cs_1 === 0) {
        break $l$block;
      }
      var tmp133_safe_receiver = $this.bs_1;
      if (tmp133_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp133_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp133_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
          if (!(element == null)) {
            // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.correctCollectorIndexesOnDropOldest.<anonymous>' call
            if (element.fs_1.v(new Long(0, 0)) >= 0 && element.fs_1.v(newHead) < 0) {
              element.fs_1 = newHead;
            }
          }
        }
      }
    }
    $this.yr_1 = newHead;
  }
  function enqueueLocked($this, item) {
    var curSize = _get_totalSize__xhdb3o($this);
    var curBuffer = $this.wr_1;
    var buffer = curBuffer == null ? growBuffer($this, null, 0, 2) : curSize >= curBuffer.length ? growBuffer($this, curBuffer, curSize, imul(curBuffer.length, 2)) : curBuffer;
    // Inline function 'kotlin.Long.plus' call
    var tmp$ret$0 = _get_head__d7jo8b($this).y1(toLong(curSize));
    setBufferAt(buffer, tmp$ret$0, item);
  }
  function growBuffer($this, curBuffer, curSize, newSize) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(newSize > 0)) {
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.growBuffer.<anonymous>' call
      var message = 'Buffer size overflow';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.arrayOfNulls' call
    var this_0 = fillArrayVal(Array(newSize), null);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.growBuffer.<anonymous>' call
    $this.wr_1 = this_0;
    var newBuffer = this_0;
    if (curBuffer == null)
      return newBuffer;
    var head = _get_head__d7jo8b($this);
    var inductionVariable = 0;
    if (inductionVariable < curSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.Long.plus' call
        var tmp = head.y1(toLong(i));
        // Inline function 'kotlin.Long.plus' call
        var tmp$ret$4 = head.y1(toLong(i));
        setBufferAt(newBuffer, tmp, getBufferAt(curBuffer, tmp$ret$4));
      }
       while (inductionVariable < curSize);
    return newBuffer;
  }
  function updateBufferLocked($this, newReplayIndex, newMinCollectorIndex, newBufferEndIndex, newQueueEndIndex) {
    // Inline function 'kotlin.comparisons.minOf' call
    var newHead = newMinCollectorIndex.v(newReplayIndex) <= 0 ? newMinCollectorIndex : newReplayIndex;
    // Inline function 'kotlinx.coroutines.assert' call
    var inductionVariable = _get_head__d7jo8b($this);
    if (inductionVariable.v(newHead) < 0)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable.y1(new Long(1, 0));
        setBufferAt(ensureNotNull($this.wr_1), index, null);
      }
       while (inductionVariable.v(newHead) < 0);
    $this.xr_1 = newReplayIndex;
    $this.yr_1 = newMinCollectorIndex;
    $this.zr_1 = newBufferEndIndex.z1(newHead).n2();
    $this.as_1 = newQueueEndIndex.z1(newBufferEndIndex).n2();
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
  }
  function tryPeekLocked($this, slot) {
    var index = slot.fs_1;
    if (index.v(_get_bufferEndIndex__d2rk18($this)) < 0)
      return index;
    if ($this.ur_1 > 0)
      return new Long(-1, -1);
    if (index.v(_get_head__d7jo8b($this)) > 0)
      return new Long(-1, -1);
    if ($this.as_1 === 0)
      return new Long(-1, -1);
    return index;
  }
  function findSlotsToResumeLocked($this, resumesIn) {
    var resumes = resumesIn;
    var resumeCount = resumesIn.length;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if ($this.cs_1 === 0) {
        break $l$block;
      }
      var tmp133_safe_receiver = $this.bs_1;
      if (tmp133_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp133_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp133_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
          if (!(element == null)) {
            $l$block_1: {
              // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.findSlotsToResumeLocked.<anonymous>' call
              var tmp0_elvis_lhs = element.gs_1;
              var tmp;
              if (tmp0_elvis_lhs == null) {
                break $l$block_1;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              var cont = tmp;
              if (tryPeekLocked($this, element).v(new Long(0, 0)) < 0) {
                break $l$block_1;
              }
              if (resumeCount >= resumes.length) {
                var tmp_0 = resumes;
                // Inline function 'kotlin.comparisons.maxOf' call
                var b = imul(2, resumes.length);
                var tmp$ret$2 = Math.max(2, b);
                resumes = copyOf(tmp_0, tmp$ret$2);
              }
              var tmp_1 = resumes;
              var _unary__edvuaz = resumeCount;
              resumeCount = _unary__edvuaz + 1 | 0;
              tmp_1[_unary__edvuaz] = cont;
              element.gs_1 = null;
            }
          }
        }
      }
    }
    return resumes;
  }
  function getBufferAt(_this__u8e3s4, index) {
    _init_properties_SharedFlow_kt__umasnn();
    return _this__u8e3s4[index.n2() & (_this__u8e3s4.length - 1 | 0)];
  }
  function setBufferAt(_this__u8e3s4, index, item) {
    _init_properties_SharedFlow_kt__umasnn();
    return _this__u8e3s4[index.n2() & (_this__u8e3s4.length - 1 | 0)] = item;
  }
  var properties_initialized_SharedFlow_kt_tmefor;
  function _init_properties_SharedFlow_kt__umasnn() {
    if (!properties_initialized_SharedFlow_kt_tmefor) {
      properties_initialized_SharedFlow_kt_tmefor = true;
      NO_VALUE = new Symbol('NO_VALUE');
    }
  }
  function get_NONE() {
    _init_properties_StateFlow_kt__eu9yi5();
    return NONE;
  }
  var NONE;
  function get_PENDING() {
    _init_properties_StateFlow_kt__eu9yi5();
    return PENDING;
  }
  var PENDING;
  function MutableStateFlow(value) {
    _init_properties_StateFlow_kt__eu9yi5();
    return new StateFlowImpl(value == null ? get_NULL() : value);
  }
  function updateState($this, expectedState, newState) {
    var curSequence;
    var curSlots;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var oldState = $this.ls_1.kotlinx$atomicfu$value;
    if (!(expectedState == null) && !equals(oldState, expectedState))
      return false;
    if (equals(oldState, newState))
      return true;
    $this.ls_1.kotlinx$atomicfu$value = newState;
    curSequence = $this.ms_1;
    if ((curSequence & 1) === 0) {
      curSequence = curSequence + 1 | 0;
      $this.ms_1 = curSequence;
    } else {
      $this.ms_1 = curSequence + 2 | 0;
      return true;
    }
    curSlots = $this.bs_1;
    while (true) {
      var tmp127_safe_receiver = curSlots;
      if (tmp127_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp127_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp127_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.flow.StateFlowImpl.updateState.<anonymous>' call
          if (element == null)
            null;
          else {
            element.os();
          }
        }
      }
      // Inline function 'kotlinx.coroutines.internal.synchronized' call
      // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
      if ($this.ms_1 === curSequence) {
        $this.ms_1 = curSequence + 1 | 0;
        return true;
      }
      curSequence = $this.ms_1;
      curSlots = $this.bs_1;
    }
  }
  function $collectCOROUTINE$13(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.xs_1 = _this__u8e3s4;
    this.ys_1 = collector;
  }
  protoOf($collectCOROUTINE$13).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        switch (tmp) {
          case 0:
            this.g8_1 = 12;
            this.zs_1 = this.xs_1.et();
            this.f8_1 = 1;
            continue $sm;
          case 1:
            this.g8_1 = 11;
            var tmp_0 = this.ys_1;
            if (tmp_0 instanceof SubscribedFlowCollector) {
              this.f8_1 = 2;
              suspendResult = this.ys_1.ht(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.f8_1 = 3;
              continue $sm;
            }

          case 2:
            this.f8_1 = 3;
            continue $sm;
          case 3:
            var tmp_1 = this;
            tmp_1.bt_1 = this.l8().s8(Key_instance_2);
            this.ct_1 = null;
            this.f8_1 = 4;
            continue $sm;
          case 4:
            if (!true) {
              this.f8_1 = 9;
              continue $sm;
            }

            this.dt_1 = this.xs_1.ls_1.kotlinx$atomicfu$value;
            var tmp129_safe_receiver = this.bt_1;
            if (tmp129_safe_receiver == null)
              null;
            else {
              ensureActive_0(tmp129_safe_receiver);
            }

            if (this.ct_1 == null || !equals(this.ct_1, this.dt_1)) {
              this.f8_1 = 5;
              var this_0 = get_NULL();
              var value = this.dt_1;
              var tmp_2;
              if (value === this_0) {
                tmp_2 = (null == null ? true : !(null == null)) ? null : THROW_CCE();
              } else {
                tmp_2 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
              }
              suspendResult = this.ys_1.or(tmp_2, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.f8_1 = 6;
              continue $sm;
            }

          case 5:
            this.ct_1 = this.dt_1;
            this.f8_1 = 6;
            continue $sm;
          case 6:
            if (!this.zs_1.jt()) {
              this.f8_1 = 7;
              suspendResult = this.zs_1.it(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.f8_1 = 8;
              continue $sm;
            }

          case 7:
            this.f8_1 = 8;
            continue $sm;
          case 8:
            this.f8_1 = 4;
            continue $sm;
          case 9:
            this.at_1 = Unit_instance;
            this.g8_1 = 12;
            this.f8_1 = 10;
            continue $sm;
          case 10:
            this.g8_1 = 12;
            this.xs_1.kt(this.zs_1);
            return Unit_instance;
          case 11:
            this.g8_1 = 12;
            var t = this.i8_1;
            this.xs_1.kt(this.zs_1);
            throw t;
          case 12:
            throw this.i8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.g8_1 === 12) {
          throw e;
        } else {
          this.f8_1 = this.g8_1;
          this.i8_1 = e;
        }
      }
     while (true);
  };
  function StateFlowImpl(initialState) {
    AbstractSharedFlow.call(this);
    this.ls_1 = atomic$ref$1(initialState);
    this.ms_1 = 0;
  }
  protoOf(StateFlowImpl).lt = function (value) {
    updateState(this, null, value == null ? get_NULL() : value);
  };
  protoOf(StateFlowImpl).k1 = function () {
    // Inline function 'kotlinx.coroutines.internal.Symbol.unbox' call
    var this_0 = get_NULL();
    var value = this.ls_1.kotlinx$atomicfu$value;
    var tmp;
    if (value === this_0) {
      tmp = (null == null ? true : !(null == null)) ? null : THROW_CCE();
    } else {
      tmp = (value == null ? true : !(value == null)) ? value : THROW_CCE();
    }
    return tmp;
  };
  protoOf(StateFlowImpl).mt = function (expect, update) {
    var tmp = expect == null ? get_NULL() : expect;
    return updateState(this, tmp, update == null ? get_NULL() : update);
  };
  protoOf(StateFlowImpl).or = function (value, $completion) {
    this.lt(value);
    return Unit_instance;
  };
  protoOf(StateFlowImpl).nt = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$13(this, collector, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(StateFlowImpl).xq = function (collector, $completion) {
    return this.nt(collector, $completion);
  };
  protoOf(StateFlowImpl).ot = function () {
    return new StateFlowSlot();
  };
  protoOf(StateFlowImpl).pt = function (size) {
    // Inline function 'kotlin.arrayOfNulls' call
    return fillArrayVal(Array(size), null);
  };
  function StateFlowSlot() {
    AbstractSharedFlowSlot.call(this);
    this.ns_1 = new WorkaroundAtomicReference(null);
  }
  protoOf(StateFlowSlot).qt = function (flow) {
    if (!(get_value(this.ns_1) == null))
      return false;
    set_value(this.ns_1, get_NONE());
    return true;
  };
  protoOf(StateFlowSlot).rt = function (flow) {
    return this.qt(flow instanceof StateFlowImpl ? flow : THROW_CCE());
  };
  protoOf(StateFlowSlot).st = function (flow) {
    set_value(this.ns_1, null);
    return get_EMPTY_RESUMES();
  };
  protoOf(StateFlowSlot).tt = function (flow) {
    return this.st(flow instanceof StateFlowImpl ? flow : THROW_CCE());
  };
  protoOf(StateFlowSlot).os = function () {
    // Inline function 'kotlinx.coroutines.internal.loop' call
    var this_0 = this.ns_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.flow.StateFlowSlot.makePending.<anonymous>' call
      var state = get_value(this_0);
      if (state == null)
        return Unit_instance;
      else if (state === get_PENDING())
        return Unit_instance;
      else if (state === get_NONE()) {
        if (this.ns_1.vt(state, get_PENDING()))
          return Unit_instance;
      } else {
        if (this.ns_1.vt(state, get_NONE())) {
          // Inline function 'kotlin.coroutines.resume' call
          var this_1 = state instanceof CancellableContinuationImpl ? state : THROW_CCE();
          // Inline function 'kotlin.Companion.success' call
          var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
          this_1.q8(tmp$ret$0);
          return Unit_instance;
        }
      }
    }
  };
  protoOf(StateFlowSlot).jt = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.assert' call
    return ensureNotNull(this.ns_1.wt(get_NONE())) === get_PENDING();
  };
  protoOf(StateFlowSlot).it = function ($completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.fl();
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.StateFlowSlot.awaitPending.<anonymous>' call
      // Inline function 'kotlinx.coroutines.assert' call
      if (this.ns_1.vt(get_NONE(), cancellable)) {
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(Unit_instance);
      cancellable.q8(tmp$ret$1);
    }
    return cancellable.nj();
  };
  var properties_initialized_StateFlow_kt_nsqikx;
  function _init_properties_StateFlow_kt__eu9yi5() {
    if (!properties_initialized_StateFlow_kt_nsqikx) {
      properties_initialized_StateFlow_kt_nsqikx = true;
      NONE = new Symbol('NONE');
      PENDING = new Symbol('PENDING');
    }
  }
  function get_EMPTY_RESUMES() {
    _init_properties_AbstractSharedFlow_kt__h2xygb();
    return EMPTY_RESUMES;
  }
  var EMPTY_RESUMES;
  function AbstractSharedFlow() {
    SynchronizedObject.call(this);
    this.bs_1 = null;
    this.cs_1 = 0;
    this.ds_1 = 0;
    this.es_1 = null;
  }
  protoOf(AbstractSharedFlow).et = function () {
    var subscriptionCount;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>' call
    var curSlots = this.bs_1;
    var tmp;
    if (curSlots == null) {
      // Inline function 'kotlin.also' call
      var this_0 = this.pt(2);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
      this.bs_1 = this_0;
      tmp = this_0;
    } else {
      var tmp_0;
      if (this.cs_1 >= curSlots.length) {
        // Inline function 'kotlin.also' call
        var this_1 = copyOf(curSlots, imul(2, curSlots.length));
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
        this.bs_1 = this_1;
        tmp_0 = this_1;
      } else {
        tmp_0 = curSlots;
      }
      tmp = tmp_0;
    }
    var slots = tmp;
    var index = this.ds_1;
    var slot;
    $l$loop: while (true) {
      var tmp0_elvis_lhs = slots[index];
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_2 = this.ot();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
        slots[index] = this_2;
        tmp_1 = this_2;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      slot = tmp_1;
      index = index + 1 | 0;
      if (index >= slots.length)
        index = 0;
      if ((slot instanceof AbstractSharedFlowSlot ? slot : THROW_CCE()).rt(this))
        break $l$loop;
    }
    this.ds_1 = index;
    this.cs_1 = this.cs_1 + 1 | 0;
    subscriptionCount = this.es_1;
    var slot_0 = slot;
    if (subscriptionCount == null)
      null;
    else
      subscriptionCount.ju(1);
    return slot_0;
  };
  protoOf(AbstractSharedFlow).kt = function (slot) {
    var subscriptionCount;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.freeSlot.<anonymous>' call
    this.cs_1 = this.cs_1 - 1 | 0;
    subscriptionCount = this.es_1;
    if (this.cs_1 === 0)
      this.ds_1 = 0;
    var resumes = (slot instanceof AbstractSharedFlowSlot ? slot : THROW_CCE()).tt(this);
    var inductionVariable = 0;
    var last = resumes.length;
    while (inductionVariable < last) {
      var cont = resumes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (cont == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
        cont.q8(tmp$ret$3);
      }
    }
    if (subscriptionCount == null)
      null;
    else
      subscriptionCount.ju(-1);
  };
  function AbstractSharedFlowSlot() {
  }
  var properties_initialized_AbstractSharedFlow_kt_2mpafr;
  function _init_properties_AbstractSharedFlow_kt__h2xygb() {
    if (!properties_initialized_AbstractSharedFlow_kt_2mpafr) {
      properties_initialized_AbstractSharedFlow_kt_2mpafr = true;
      // Inline function 'kotlin.arrayOfNulls' call
      EMPTY_RESUMES = fillArrayVal(Array(0), null);
    }
  }
  function get_NULL() {
    _init_properties_NullSurrogate_kt__n2yti9();
    return NULL;
  }
  var NULL;
  var UNINITIALIZED;
  var DONE;
  var properties_initialized_NullSurrogate_kt_39v8bl;
  function _init_properties_NullSurrogate_kt__n2yti9() {
    if (!properties_initialized_NullSurrogate_kt_39v8bl) {
      properties_initialized_NullSurrogate_kt_39v8bl = true;
      NULL = new Symbol('NULL');
      UNINITIALIZED = new Symbol('UNINITIALIZED');
      DONE = new Symbol('DONE');
    }
  }
  function checkContext(_this__u8e3s4, currentContext) {
    var result = currentContext.ce(0, checkContext$lambda(_this__u8e3s4));
    if (!(result === _this__u8e3s4.mr_1)) {
      // Inline function 'kotlin.error' call
      var message = 'Flow invariant is violated:\n' + ('\t\tFlow was collected in ' + toString(_this__u8e3s4.lr_1) + ',\n') + ('\t\tbut emission happened in ' + toString(currentContext) + '.\n') + "\t\tPlease refer to 'flow' documentation or use 'flowOn' instead";
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function transitiveCoroutineParent(_this__u8e3s4, collectJob) {
    var $this = _this__u8e3s4;
    var collectJob_0 = collectJob;
    $l$1: do {
      $l$0: do {
        if ($this === null)
          return null;
        if ($this === collectJob_0)
          return $this;
        if (!($this instanceof ScopeCoroutine))
          return $this;
        $this = $this.gi();
        collectJob_0 = collectJob_0;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function checkContext$lambda($this_checkContext) {
    return function (count, element) {
      var key = element.j1();
      var collectElement = $this_checkContext.lr_1.s8(key);
      var tmp;
      if (!(key === Key_instance_2)) {
        return !(element === collectElement) ? -2147483648 : count + 1 | 0;
      }
      var collectJob = (collectElement == null ? true : isInterface(collectElement, Job)) ? collectElement : THROW_CCE();
      var emissionParentJob = transitiveCoroutineParent(isInterface(element, Job) ? element : THROW_CCE(), collectJob);
      var tmp_0;
      if (!(emissionParentJob === collectJob)) {
        var message = 'Flow invariant is violated:\n\t\tEmission from another coroutine is detected.\n' + ('\t\tChild of ' + toString_0(emissionParentJob) + ', expected child of ' + toString_0(collectJob) + '.\n') + '\t\tFlowCollector is not thread-safe and concurrent emissions are prohibited.\n' + "\t\tTo mitigate this restriction please use 'channelFlow' builder instead of 'flow'";
        throw IllegalStateException_init_$Create$(toString(message));
      }
      return collectJob == null ? count : count + 1 | 0;
    };
  }
  function catch_0(_this__u8e3s4, action) {
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv(_this__u8e3s4, action);
  }
  function catchImpl(_this__u8e3s4, collector, $completion) {
    var tmp = new $catchImplCOROUTINE$16(_this__u8e3s4, collector, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  }
  function isSameExceptionAs(_this__u8e3s4, other) {
    return !(other == null) && equals(unwrap(other), unwrap(_this__u8e3s4));
  }
  function isCancellationCause(_this__u8e3s4, coroutineContext) {
    var job = coroutineContext.s8(Key_instance_2);
    if (job == null || !job.ji())
      return false;
    return isSameExceptionAs(_this__u8e3s4, job.mi());
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.vu_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).or = function (value, $completion) {
    return this.vu_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).q2 = function () {
    return this.vu_1;
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
  function $collectCOROUTINE$17(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ev_1 = _this__u8e3s4;
    this.fv_1 = collector;
  }
  protoOf($collectCOROUTINE$17).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        switch (tmp) {
          case 0:
            this.g8_1 = 4;
            var tmp_0 = this;
            tmp_0.gv_1 = this.fv_1;
            this.f8_1 = 1;
            suspendResult = catchImpl(this.ev_1.iv_1, this.gv_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.hv_1 = suspendResult;
            if (!(this.hv_1 == null)) {
              this.f8_1 = 2;
              suspendResult = this.ev_1.jv_1(this.gv_1, this.hv_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.f8_1 = 3;
              continue $sm;
            }

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
  function _no_name_provided__qut3iv($this_catch, $action) {
    this.iv_1 = $this_catch;
    this.jv_1 = $action;
  }
  protoOf(_no_name_provided__qut3iv).kv = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$17(this, collector, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(_no_name_provided__qut3iv).xq = function (collector, $completion) {
    return this.kv(collector, $completion);
  };
  function catchImpl$slambda($collector, $fromDownstream, resultContinuation) {
    this.tv_1 = $collector;
    this.uv_1 = $fromDownstream;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(catchImpl$slambda).wv = function (it, $completion) {
    var tmp = this.xv(it, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(catchImpl$slambda).b9 = function (p1, $completion) {
    return this.wv((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(catchImpl$slambda).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        switch (tmp) {
          case 0:
            this.g8_1 = 4;
            this.g8_1 = 3;
            this.f8_1 = 1;
            suspendResult = this.tv_1.or(this.vv_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.g8_1 = 4;
            this.f8_1 = 2;
            continue $sm;
          case 2:
            this.g8_1 = 4;
            return Unit_instance;
          case 3:
            this.g8_1 = 4;
            var tmp_0 = this.i8_1;
            if (tmp_0 instanceof Error) {
              var e = this.i8_1;
              this.uv_1._v = e;
              throw e;
            } else {
              throw this.i8_1;
            }

          case 4:
            throw this.i8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.g8_1 === 4) {
          throw e_0;
        } else {
          this.f8_1 = this.g8_1;
          this.i8_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(catchImpl$slambda).xv = function (it, completion) {
    var i = new catchImpl$slambda(this.tv_1, this.uv_1, completion);
    i.vv_1 = it;
    return i;
  };
  function catchImpl$slambda_0($collector, $fromDownstream, resultContinuation) {
    var i = new catchImpl$slambda($collector, $fromDownstream, resultContinuation);
    var l = function (it, $completion) {
      return i.wv(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $catchImplCOROUTINE$16(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.su_1 = _this__u8e3s4;
    this.tu_1 = collector;
  }
  protoOf($catchImplCOROUTINE$16).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        switch (tmp) {
          case 0:
            this.g8_1 = 4;
            this.uu_1 = {_v: null};
            this.g8_1 = 3;
            this.f8_1 = 1;
            var tmp_0 = catchImpl$slambda_0(this.tu_1, this.uu_1, null);
            suspendResult = this.su_1.xq(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.g8_1 = 4;
            this.f8_1 = 2;
            continue $sm;
          case 2:
            this.g8_1 = 4;
            return null;
          case 3:
            this.g8_1 = 4;
            var tmp_1 = this.i8_1;
            if (tmp_1 instanceof Error) {
              var e = this.i8_1;
              var fromDownstream = this.uu_1._v;
              var tmp_2;
              if (isSameExceptionAs(e, fromDownstream)) {
                tmp_2 = true;
              } else {
                tmp_2 = isCancellationCause(e, this.l8());
              }
              if (tmp_2) {
                throw e;
              } else {
                if (fromDownstream == null) {
                  return e;
                }
                if (e instanceof CancellationException) {
                  addSuppressed(fromDownstream, e);
                  throw fromDownstream;
                } else {
                  addSuppressed(e, fromDownstream);
                  throw e;
                }
              }
            } else {
              throw this.i8_1;
            }

          case 4:
            throw this.i8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.g8_1 === 4) {
          throw e_0;
        } else {
          this.f8_1 = this.g8_1;
          this.i8_1 = e_0;
        }
      }
     while (true);
  };
  function $onSubscriptionCOROUTINE$22(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.gw_1 = _this__u8e3s4;
  }
  protoOf($onSubscriptionCOROUTINE$22).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        switch (tmp) {
          case 0:
            this.g8_1 = 7;
            var tmp_0 = this;
            tmp_0.hw_1 = new SafeCollector(this.gw_1.ft_1, this.l8());
            this.f8_1 = 1;
            continue $sm;
          case 1:
            this.g8_1 = 6;
            this.f8_1 = 2;
            suspendResult = this.gw_1.gt_1(this.hw_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.iw_1 = suspendResult;
            this.g8_1 = 7;
            this.f8_1 = 3;
            continue $sm;
          case 3:
            this.g8_1 = 7;
            this.hw_1.p8();
            var tmp_1 = this.gw_1.ft_1;
            if (tmp_1 instanceof SubscribedFlowCollector) {
              this.f8_1 = 4;
              suspendResult = this.gw_1.ft_1.ht(this);
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
            return Unit_instance;
          case 6:
            this.g8_1 = 7;
            var t = this.i8_1;
            this.hw_1.p8();
            throw t;
          case 7:
            throw this.i8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.g8_1 === 7) {
          throw e;
        } else {
          this.f8_1 = this.g8_1;
          this.i8_1 = e;
        }
      }
     while (true);
  };
  function SubscribedFlowCollector() {
  }
  protoOf(SubscribedFlowCollector).ht = function ($completion) {
    var tmp = new $onSubscriptionCOROUTINE$22(this, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  function onEach(_this__u8e3s4, action) {
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv_0(_this__u8e3s4, action);
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.jw_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).or = function (value, $completion) {
    return this.jw_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).q2 = function () {
    return this.jw_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).equals = function (other) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).hashCode = function () {
    return hashCode(this.q2());
  };
  function onEach$o$collect$slambda($$this$unsafeFlow, $action, resultContinuation) {
    this.sw_1 = $$this$unsafeFlow;
    this.tw_1 = $action;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(onEach$o$collect$slambda).xw = function (value, $completion) {
    var tmp = this.yw(value, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(onEach$o$collect$slambda).b9 = function (p1, $completion) {
    return this.xw((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(onEach$o$collect$slambda).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        switch (tmp) {
          case 0:
            this.g8_1 = 3;
            var tmp_0 = this;
            tmp_0.vw_1 = this.sw_1;
            var tmp_1 = this;
            tmp_1.ww_1 = this.uw_1;
            this.f8_1 = 1;
            suspendResult = this.tw_1(this.ww_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.f8_1 = 2;
            suspendResult = this.vw_1.or(this.ww_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

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
  protoOf(onEach$o$collect$slambda).yw = function (value, completion) {
    var i = new onEach$o$collect$slambda(this.sw_1, this.tw_1, completion);
    i.uw_1 = value;
    return i;
  };
  function onEach$o$collect$slambda_0($$this$unsafeFlow, $action, resultContinuation) {
    var i = new onEach$o$collect$slambda($$this$unsafeFlow, $action, resultContinuation);
    var l = function (value, $completion) {
      return i.xw(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$23(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.hx_1 = _this__u8e3s4;
    this.ix_1 = collector;
  }
  protoOf($collectCOROUTINE$23).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        switch (tmp) {
          case 0:
            this.g8_1 = 2;
            var tmp_0 = this;
            tmp_0.jx_1 = this.ix_1;
            this.f8_1 = 1;
            var tmp_1 = onEach$o$collect$slambda_0(this.jx_1, this.hx_1.lx_1, null);
            suspendResult = this.hx_1.kx_1.xq(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_1), this);
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
  function _no_name_provided__qut3iv_0($this, $action) {
    this.kx_1 = $this;
    this.lx_1 = $action;
  }
  protoOf(_no_name_provided__qut3iv_0).kv = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$23(this, collector, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(_no_name_provided__qut3iv_0).xq = function (collector, $completion) {
    return this.kv(collector, $completion);
  };
  function set_value(_this__u8e3s4, value) {
    return _this__u8e3s4.mx(value);
  }
  function get_value(_this__u8e3s4) {
    return _this__u8e3s4.pn();
  }
  function Segment() {
  }
  function ConcurrentLinkedListNode() {
  }
  function handleUncaughtCoroutineException(context, exception) {
    var _iterator__ex2g4s = get_platformExceptionHandlers().i();
    while (_iterator__ex2g4s.j()) {
      var handler = _iterator__ex2g4s.k();
      try {
        handler.zm(context, exception);
      } catch ($p) {
        if ($p instanceof ExceptionSuccessfullyProcessed) {
          var _unused_var__etf5q3 = $p;
          return Unit_instance;
        } else {
          if ($p instanceof Error) {
            var t = $p;
            propagateExceptionFinalResort(handlerException(exception, t));
          } else {
            throw $p;
          }
        }
      }
    }
    try {
      addSuppressed(exception, new DiagnosticCoroutineContextException(context));
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
      } else {
        throw $p;
      }
    }
    propagateExceptionFinalResort(exception);
  }
  function ExceptionSuccessfullyProcessed() {
  }
  function get_UNDEFINED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return UNDEFINED;
  }
  var UNDEFINED;
  function get_REUSABLE_CLAIMED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this.pk_1.kotlinx$atomicfu$value;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, -1);
    this.lk_1 = dispatcher;
    this.mk_1 = continuation;
    this.nk_1 = get_UNDEFINED();
    this.ok_1 = threadContextElements(this.l8());
    this.pk_1 = atomic$ref$1(null);
  }
  protoOf(DispatchedContinuation).l8 = function () {
    return this.mk_1.l8();
  };
  protoOf(DispatchedContinuation).qk = function () {
    return !(this.pk_1.kotlinx$atomicfu$value == null);
  };
  protoOf(DispatchedContinuation).nx = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.pk_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.awaitReusability.<anonymous>' call
      if (!(this_0.kotlinx$atomicfu$value === get_REUSABLE_CLAIMED()))
        return Unit_instance;
    }
  };
  protoOf(DispatchedContinuation).ym = function () {
    this.nx();
    var tmp148_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp148_safe_receiver == null)
      null;
    else {
      tmp148_safe_receiver.dl();
    }
  };
  protoOf(DispatchedContinuation).ql = function (continuation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.pk_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.tryReleaseClaimedContinuation.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (state === get_REUSABLE_CLAIMED()) {
        if (this.pk_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
          return null;
      } else {
        if (state instanceof Error) {
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!this.pk_1.atomicfu$compareAndSet(state, null)) {
            // Inline function 'kotlin.require.<anonymous>' call
            var message = 'Failed requirement.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          }
          return state;
        } else {
          var message_0 = 'Inconsistent state ' + toString_0(state);
          throw IllegalStateException_init_$Create$(toString(message_0));
        }
      }
    }
  };
  protoOf(DispatchedContinuation).sk = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.pk_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.postponeCancellation.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (equals(state, get_REUSABLE_CLAIMED())) {
        if (this.pk_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
          return true;
      } else {
        if (state instanceof Error)
          return true;
        else {
          if (this.pk_1.atomicfu$compareAndSet(state, null))
            return false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).hl = function () {
    var state = this.nk_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this.nk_1 = get_UNDEFINED();
    return state;
  };
  protoOf(DispatchedContinuation).el = function () {
    return this;
  };
  protoOf(DispatchedContinuation).q8 = function (result) {
    var state = toState_0(result);
    if (this.lk_1.wm(this.l8())) {
      this.nk_1 = state;
      this.rk_1 = 0;
      this.lk_1.xm(this.l8(), this);
    } else {
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().nn();
        if (false && eventLoop.in()) {
          break $l$block;
        }
        var tmp;
        if (eventLoop.hn()) {
          this.nk_1 = state;
          this.rk_1 = 0;
          eventLoop.gn(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.jn(true);
          try {
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeWith.<anonymous>' call
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            this.l8();
            this.ok_1;
            this.mk_1.q8(result);
            $l$loop: while (eventLoop.fn()) {
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              this.am(e);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.kn(true);
          }
          tmp = false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).toString = function () {
    return 'DispatchedContinuation[' + this.lk_1.toString() + ', ' + toDebugString(this.mk_1) + ']';
  };
  function resumeCancellableWith(_this__u8e3s4, result) {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp;
    if (_this__u8e3s4 instanceof DispatchedContinuation) {
      var state = toState_0(result);
      if (_this__u8e3s4.lk_1.wm(_this__u8e3s4.l8())) {
        _this__u8e3s4.nk_1 = state;
        _this__u8e3s4.rk_1 = 1;
        _this__u8e3s4.lk_1.xm(_this__u8e3s4.l8(), _this__u8e3s4);
      } else {
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().nn();
          if (false && eventLoop.in()) {
            break $l$block;
          }
          var tmp_0;
          if (eventLoop.hn()) {
            _this__u8e3s4.nk_1 = state;
            _this__u8e3s4.rk_1 = 1;
            eventLoop.gn(_this__u8e3s4);
            tmp_0 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.jn(true);
            try {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith.<anonymous>' call
              var tmp$ret$3;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = _this__u8e3s4.l8().s8(Key_instance_2);
                if (!(job == null) && !job.nh()) {
                  var cause = job.mi();
                  _this__u8e3s4.il(state, cause);
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  // Inline function 'kotlin.Companion.failure' call
                  var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                  _this__u8e3s4.q8(tmp$ret$1);
                  tmp$ret$3 = true;
                  break $l$block_0;
                }
                tmp$ret$3 = false;
              }
              if (!tmp$ret$3) {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
                // Inline function 'kotlinx.coroutines.withContinuationContext' call
                _this__u8e3s4.mk_1;
                _this__u8e3s4.ok_1;
                _this__u8e3s4.mk_1.q8(result);
              }
              $l$loop: while (eventLoop.fn()) {
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var e = $p;
                _this__u8e3s4.am(e);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.kn(true);
            }
            tmp_0 = false;
          }
        }
      }
      tmp = Unit_instance;
    } else {
      _this__u8e3s4.q8(result);
      tmp = Unit_instance;
    }
    return tmp;
  }
  var properties_initialized_DispatchedContinuation_kt_2siadq;
  function _init_properties_DispatchedContinuation_kt__tnmqc0() {
    if (!properties_initialized_DispatchedContinuation_kt_2siadq) {
      properties_initialized_DispatchedContinuation_kt_2siadq = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }
  }
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.rk_1 = resumeMode;
  }
  protoOf(DispatchedTask).il = function (takenState, cause) {
  };
  protoOf(DispatchedTask).pl = function (state) {
    return (state == null ? true : !(state == null)) ? state : THROW_CCE();
  };
  protoOf(DispatchedTask).xl = function (state) {
    var tmp151_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp151_safe_receiver == null ? null : tmp151_safe_receiver.sh_1;
  };
  protoOf(DispatchedTask).zl = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    var fatalException = null;
    try {
      var tmp = this.el();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.mk_1;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      delegate.ok_1;
      var context = continuation.l8();
      var state = this.hl();
      var exception = this.xl(state);
      var job = exception == null && get_isCancellableMode(this.rk_1) ? context.s8(Key_instance_2) : null;
      if (!(job == null) && !job.nh()) {
        var cause = job.mi();
        this.il(state, cause);
        // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
        // Inline function 'kotlin.Companion.failure' call
        var exception_0 = recoverStackTrace(cause, continuation);
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception_0));
        continuation.q8(tmp$ret$0);
      } else {
        if (!(exception == null)) {
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.q8(tmp$ret$1);
        } else {
          // Inline function 'kotlin.coroutines.resume' call
          // Inline function 'kotlin.Companion.success' call
          var value = this.pl(state);
          var tmp$ret$3 = _Result___init__impl__xyqfz8(value);
          continuation.q8(tmp$ret$3);
        }
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        fatalException = e;
      } else {
        throw $p;
      }
    }
    finally {
      var tmp152_safe_receiver = fatalException;
      if (tmp152_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        this.am(tmp152_safe_receiver);
      }
    }
  };
  protoOf(DispatchedTask).am = function (exception) {
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + toString(this) + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", exception);
    handleCoroutineException(this.el().l8(), reason);
  };
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 || _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    // Inline function 'kotlinx.coroutines.assert' call
    var delegate = _this__u8e3s4.el();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.rk_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.lk_1;
      var context = delegate.l8();
      if (dispatcher.wm(context)) {
        dispatcher.xm(context, _this__u8e3s4);
      } else {
        resumeUnconfined(_this__u8e3s4);
      }
    } else {
      resume(_this__u8e3s4, delegate, undispatched);
    }
  }
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().nn();
    if (eventLoop.hn()) {
      eventLoop.gn(_this__u8e3s4);
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.jn(true);
      try {
        // Inline function 'kotlinx.coroutines.resumeUnconfined.<anonymous>' call
        resume(_this__u8e3s4, _this__u8e3s4.el(), true);
        $l$loop: while (eventLoop.fn()) {
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          _this__u8e3s4.am(e);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.kn(true);
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.hl();
    var exception = _this__u8e3s4.xl(state);
    var tmp;
    if (!(exception == null)) {
      // Inline function 'kotlin.Companion.failure' call
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      var value = _this__u8e3s4.pl(state);
      tmp = _Result___init__impl__xyqfz8(value);
    }
    var result = tmp;
    if (undispatched) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
      var this_0 = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      this_0.mk_1;
      this_0.ok_1;
      this_0.mk_1.q8(result);
    } else {
      delegate.q8(result);
    }
  }
  function ScopeCoroutine(context, uCont) {
    AbstractCoroutine.call(this, context, true, true);
    this.yj_1 = uCont;
  }
  protoOf(ScopeCoroutine).dj = function () {
    return true;
  };
  protoOf(ScopeCoroutine).xh = function (state) {
    resumeCancellableWith(intercepted(this.yj_1), recoverResult(state, this.yj_1));
  };
  protoOf(ScopeCoroutine).wh = function (state) {
    this.yj_1.q8(recoverResult(state, this.yj_1));
  };
  function ContextScope(context) {
    this.ox_1 = context;
  }
  protoOf(ContextScope).mh = function () {
    return this.ox_1;
  };
  protoOf(ContextScope).toString = function () {
    return 'CoroutineScope(coroutineContext=' + toString(this.ox_1) + ')';
  };
  function Symbol(symbol) {
    this.px_1 = symbol;
  }
  protoOf(Symbol).toString = function () {
    return '<' + this.px_1 + '>';
  };
  function startCoroutineCancellable(_this__u8e3s4, receiver, completion) {
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWith(tmp_0, tmp$ret$0);
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure$accessor$glj1hg(completion, e);
        tmp_1 = Unit_instance;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function startCoroutineCancellable_0(_this__u8e3s4, fatalCompletion) {
    var tmp;
    try {
      var tmp_0 = intercepted(_this__u8e3s4);
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWith(tmp_0, tmp$ret$0);
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure$accessor$glj1hg(fatalCompletion, e);
        tmp_1 = Unit_instance;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function dispatcherFailure(completion, e) {
    // Inline function 'kotlin.Companion.failure' call
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
    completion.q8(tmp$ret$0);
    throw e;
  }
  function dispatcherFailure$accessor$glj1hg(completion, e) {
    return dispatcherFailure(completion, e);
  }
  function startUndispatchedOrReturn(_this__u8e3s4, receiver, block) {
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.intrinsics.undispatchedResult' call
      var tmp;
      try {
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturn.<anonymous>' call
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        tmp = startCoroutineUninterceptedOrReturnNonGeneratorVersion(block, receiver, _this__u8e3s4);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          tmp_0 = new CompletedExceptionally(e);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var result = tmp;
      if (result === get_COROUTINE_SUSPENDED()) {
        tmp$ret$2 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var state = _this__u8e3s4.vh(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$2 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturn.<anonymous>' call
        state.sh_1;
        if (true) {
          throw recoverStackTrace(state.sh_1, _this__u8e3s4.yj_1);
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.sh_1, _this__u8e3s4.yj_1);
          } else {
            tmp_2 = result;
          }
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = unboxState(state);
      }
      tmp$ret$2 = tmp_1;
    }
    return tmp$ret$2;
  }
  function startCoroutineUndispatched(_this__u8e3s4, receiver, completion) {
    // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
    var actualCompletion = completion;
    var tmp;
    try {
      // Inline function 'kotlinx.coroutines.withCoroutineContext' call
      actualCompletion.l8();
      // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>' call
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineResumed' call
      // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
      tmp = startCoroutineUninterceptedOrReturnNonGeneratorVersion(_this__u8e3s4, receiver, actualCompletion);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$4 = _Result___init__impl__xyqfz8(createFailure(e));
        actualCompletion.q8(tmp$ret$4);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    var value = tmp;
    if (!(value === get_COROUTINE_SUSPENDED())) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var value_0 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
      var tmp$ret$6 = _Result___init__impl__xyqfz8(value_0);
      actualCompletion.q8(tmp$ret$6);
    }
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_1 = window != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = !(typeof window.addEventListener === 'undefined');
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' || typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          tmp = NodeDispatcher_getInstance();
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return !(typeof navigator === 'undefined') && navigator != null && navigator.userAgent != null && !(typeof navigator.userAgent === 'undefined') && !(typeof navigator.userAgent.match === 'undefined') && navigator.userAgent.match('\\bjsdom\\b');
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).n9();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function get_hexAddress(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var result = _this__u8e3s4.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(NodeDispatcher).sx = function () {
    process.nextTick(this.zx_1.xx_1);
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.dy();
      return Unit_instance;
    };
  }
  function ScheduledMessageQueue(dispatcher) {
    MessageQueue.call(this);
    this.wx_1 = dispatcher;
    var tmp = this;
    tmp.xx_1 = ScheduledMessageQueue$processQueue$lambda(this);
  }
  protoOf(ScheduledMessageQueue).ey = function () {
    this.wx_1.sx();
  };
  protoOf(ScheduledMessageQueue).fy = function () {
    setTimeout(this.xx_1, 0);
  };
  protoOf(ScheduledMessageQueue).gy = function (timeout) {
    setTimeout(this.xx_1, timeout);
  };
  function w3cSetTimeout(handler, timeout) {
    return setTimeout(handler, timeout);
  }
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.ty_1 && event.data == this$0.uy_1) {
        event.stopPropagation();
        this$0.dy();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.dy();
      return Unit_instance;
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.ty_1 = window_0;
    this.uy_1 = 'dispatchCoroutine';
    this.ty_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  protoOf(WindowMessageQueue).ey = function () {
    var tmp = Promise.resolve(Unit_instance);
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  protoOf(WindowMessageQueue).fy = function () {
    this.ty_1.postMessage(this.uy_1, '*');
  };
  function w3cSetTimeout_0(window_0, handler, timeout) {
    return setTimeout_0(window_0, handler, timeout);
  }
  function w3cClearTimeout(window_0, handle) {
    return window_0.clearTimeout(handle);
  }
  function w3cClearTimeout_0(handle) {
    return clearTimeout(handle);
  }
  function setTimeout_0(window_0, handler, timeout) {
    return window_0.setTimeout(handler, timeout);
  }
  function await_0(_this__u8e3s4, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.fl();
    // Inline function 'kotlinx.coroutines.await.<anonymous>' call
    var tmp = await$lambda(cancellable);
    _this__u8e3s4.then(tmp, await$lambda_0(cancellable));
    return cancellable.nj();
  }
  function await$lambda($cont) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(it);
      this_0.q8(tmp$ret$0);
      return Unit_instance;
    };
  }
  function await$lambda_0($cont) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(it));
      this_0.q8(tmp$ret$0);
      return Unit_instance;
    };
  }
  function asCoroutineDispatcher(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_elvis_lhs = _this__u8e3s4.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new WindowDispatcher(_this__u8e3s4);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.asCoroutineDispatcher.<anonymous>' call
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.coroutineDispatcher = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function propagateExceptionFinalResort(exception) {
    console.error(exception.toString());
  }
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  protoOf(UnconfinedEventLoop).xm = function (context, block) {
    unsupported();
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(SetTimeoutDispatcher).sx = function () {
    this.zx_1.gy(0);
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.ck(this$0, Unit_instance);
      return Unit_instance;
    };
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.zx_1 = new ScheduledMessageQueue(this);
  }
  protoOf(SetTimeoutBasedDispatcher).xm = function (context, block) {
    this.zx_1.py(block);
  };
  protoOf(SetTimeoutBasedDispatcher).an = function (timeMillis, continuation) {
    var handle = w3cSetTimeout(SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    invokeOnCancellation(continuation, new ClearTimeout(handle));
  };
  function MessageQueue() {
    this.ay_1 = ArrayDeque_init_$Create$();
    this.by_1 = 16;
    this.cy_1 = false;
  }
  protoOf(MessageQueue).hy = function (element) {
    return this.ay_1.d(element);
  };
  protoOf(MessageQueue).d = function (element) {
    return this.hy((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).iy = function (index, element) {
    this.ay_1.g1(index, element);
  };
  protoOf(MessageQueue).g1 = function (index, element) {
    return this.iy(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).jy = function (elements) {
    return this.ay_1.m(elements);
  };
  protoOf(MessageQueue).m = function (elements) {
    return this.jy(elements);
  };
  protoOf(MessageQueue).e1 = function () {
    this.ay_1.e1();
  };
  protoOf(MessageQueue).c1 = function (index) {
    return this.ay_1.c1(index);
  };
  protoOf(MessageQueue).ky = function (element) {
    return this.ay_1.d1(element);
  };
  protoOf(MessageQueue).d1 = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return false;
    return this.ky((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).h1 = function (index) {
    return this.ay_1.h1(index);
  };
  protoOf(MessageQueue).ly = function (index, element) {
    return this.ay_1.f1(index, element);
  };
  protoOf(MessageQueue).f1 = function (index, element) {
    return this.ly(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).my = function (element) {
    return this.ay_1.p(element);
  };
  protoOf(MessageQueue).p = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return false;
    return this.my((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).ny = function (elements) {
    return this.ay_1.a1(elements);
  };
  protoOf(MessageQueue).a1 = function (elements) {
    return this.ny(elements);
  };
  protoOf(MessageQueue).o = function (index) {
    return this.ay_1.o(index);
  };
  protoOf(MessageQueue).oy = function (element) {
    return this.ay_1.q(element);
  };
  protoOf(MessageQueue).q = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return -1;
    return this.oy((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).n = function () {
    return this.ay_1.n();
  };
  protoOf(MessageQueue).i = function () {
    return this.ay_1.i();
  };
  protoOf(MessageQueue).l = function () {
    return this.ay_1.ec_1;
  };
  protoOf(MessageQueue).py = function (element) {
    this.hy(element);
    if (!this.cy_1) {
      this.cy_1 = true;
      this.ey();
    }
  };
  protoOf(MessageQueue).dy = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var times = this.by_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.MessageQueue.process.<anonymous>' call
          var tmp0_elvis_lhs = removeFirstOrNull(this);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return Unit_instance;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var element = tmp;
          element.zl();
        }
         while (inductionVariable < times);
    }finally {
      if (this.n()) {
        this.cy_1 = false;
      } else {
        this.fy();
      }
    }
  };
  function WindowClearTimeout($outer, handle) {
    this.cz_1 = $outer;
    ClearTimeout.call(this, handle);
  }
  protoOf(WindowClearTimeout).gl = function () {
    w3cClearTimeout(this.cz_1.ez_1, this.gz_1);
  };
  function WindowDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.ck(this$0, Unit_instance);
      return Unit_instance;
    };
  }
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.ez_1 = window_0;
    this.fz_1 = new WindowMessageQueue(this.ez_1);
  }
  protoOf(WindowDispatcher).xm = function (context, block) {
    return this.fz_1.py(block);
  };
  protoOf(WindowDispatcher).an = function (timeMillis, continuation) {
    var handle = w3cSetTimeout_0(this.ez_1, WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    invokeOnCancellation(continuation, new WindowClearTimeout(this, handle));
  };
  function delayToInt(timeMillis) {
    return coerceIn(timeMillis, new Long(0, 0), new Long(2147483647, 0)).n2();
  }
  function ClearTimeout(handle) {
    this.gz_1 = handle;
  }
  protoOf(ClearTimeout).gl = function () {
    w3cClearTimeout_0(this.gz_1);
  };
  protoOf(ClearTimeout).ll = function (cause) {
    this.gl();
  };
  protoOf(ClearTimeout).toString = function () {
    return 'ClearTimeout[' + this.gz_1 + ']';
  };
  function toDebugString(_this__u8e3s4) {
    return toString(_this__u8e3s4);
  }
  function get_DefaultDelay() {
    var tmp = Dispatchers_getInstance().kq_1;
    return isInterface(tmp, Delay) ? tmp : THROW_CCE();
  }
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.mh().de(context);
    return !(combined === Dispatchers_getInstance().kq_1) && combined.s8(Key_instance) == null ? combined.de(Dispatchers_getInstance().kq_1) : combined;
  }
  function newCoroutineContext_0(_this__u8e3s4, addedContext) {
    return _this__u8e3s4.de(addedContext);
  }
  function UndispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
  }
  protoOf(UndispatchedCoroutine).wh = function (state) {
    return this.yj_1.q8(recoverResult(state, this.yj_1));
  };
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.kq_1 = createDefaultDispatcher();
    this.lq_1 = Unconfined_getInstance();
    this.mq_1 = new JsMainDispatcher(this.kq_1, false);
    this.nq_1 = null;
  }
  protoOf(Dispatchers).oq = function () {
    var tmp0_elvis_lhs = this.nq_1;
    return tmp0_elvis_lhs == null ? this.mq_1 : tmp0_elvis_lhs;
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.mz_1 = delegate;
    this.nz_1 = invokeImmediately;
    this.oz_1 = this.nz_1 ? this : new JsMainDispatcher(this.mz_1, true);
  }
  protoOf(JsMainDispatcher).iq = function () {
    return this.oz_1;
  };
  protoOf(JsMainDispatcher).wm = function (context) {
    return !this.nz_1;
  };
  protoOf(JsMainDispatcher).xm = function (context, block) {
    return this.mz_1.xm(context, block);
  };
  protoOf(JsMainDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.jq();
    return tmp0_elvis_lhs == null ? this.mz_1.toString() : tmp0_elvis_lhs;
  };
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$(message, cause, this);
    captureStack(this, JobCancellationException);
    this.pz_1 = job;
  }
  protoOf(JobCancellationException).toString = function () {
    return protoOf(CancellationException).toString.call(this) + '; job=' + toString(this.pz_1);
  };
  protoOf(JobCancellationException).equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = equals(other.pz_1, this.pz_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobCancellationException).hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.pz_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs) | 0;
  };
  function CancellationException_0(message, cause) {
    return CancellationException_init_$Create$_0(message, cause);
  }
  function Runnable() {
  }
  function SchedulerTask() {
  }
  function SafeCollector$collectContextSize$lambda(count, _unused_var__etf5q3) {
    return count + 1 | 0;
  }
  function SafeCollector(collector, collectContext) {
    this.kr_1 = collector;
    this.lr_1 = collectContext;
    var tmp = this;
    tmp.mr_1 = this.lr_1.ce(0, SafeCollector$collectContextSize$lambda);
    this.nr_1 = null;
  }
  protoOf(SafeCollector).or = function (value, $completion) {
    // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
    // Inline function 'kotlin.js.getCoroutineContext' call
    var currentContext = $completion.l8();
    ensureActive(currentContext);
    if (!(this.nr_1 === currentContext)) {
      checkContext(this, currentContext);
      this.nr_1 = currentContext;
    }
    return this.kr_1.or(value, $completion);
  };
  protoOf(SafeCollector).p8 = function () {
  };
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function WorkaroundAtomicReference(value) {
    this.ut_1 = value;
  }
  protoOf(WorkaroundAtomicReference).pn = function () {
    return this.ut_1;
  };
  protoOf(WorkaroundAtomicReference).mx = function (value) {
    this.ut_1 = value;
  };
  protoOf(WorkaroundAtomicReference).wt = function (value) {
    var prev = this.ut_1;
    this.ut_1 = value;
    return prev;
  };
  protoOf(WorkaroundAtomicReference).vt = function (expected, value) {
    if (this.ut_1 === expected) {
      this.ut_1 = value;
      return true;
    }
    return false;
  };
  function get_platformExceptionHandlers_() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return platformExceptionHandlers_;
  }
  var platformExceptionHandlers_;
  function get_platformExceptionHandlers() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return get_platformExceptionHandlers_();
  }
  function DiagnosticCoroutineContextException(context) {
    RuntimeException_init_$Init$_0(toString(context), this);
    captureStack(this, DiagnosticCoroutineContextException);
  }
  var properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx;
  function _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf() {
    if (!properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx) {
      properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx = true;
      // Inline function 'kotlin.collections.mutableSetOf' call
      platformExceptionHandlers_ = LinkedHashSet_init_$Create$();
    }
  }
  function LockFreeLinkedListHead() {
    LockFreeLinkedListNode.call(this);
  }
  function LockFreeLinkedListNode() {
    this.pm_1 = this;
    this.qm_1 = this;
    this.rm_1 = false;
  }
  protoOf(LockFreeLinkedListNode).sm = function (node, permissionsBitmask) {
    var prev = this.qm_1;
    var tmp;
    if (prev instanceof ListClosed) {
      tmp = ((prev.tz_1 & permissionsBitmask) === 0 && prev.sm(node, permissionsBitmask));
    } else {
      node.pm_1 = this;
      node.qm_1 = prev;
      prev.pm_1 = node;
      this.qm_1 = node;
      tmp = true;
    }
    return tmp;
  };
  protoOf(LockFreeLinkedListNode).xn = function (forbiddenElementsBit) {
    this.sm(new ListClosed(forbiddenElementsBit), forbiddenElementsBit);
  };
  protoOf(LockFreeLinkedListNode).tm = function () {
    if (this.rm_1)
      return false;
    var prev = this.qm_1;
    var next = this.pm_1;
    prev.pm_1 = next;
    next.qm_1 = prev;
    this.rm_1 = true;
    return true;
  };
  protoOf(LockFreeLinkedListNode).um = function (node) {
    if (!(this.pm_1 === this))
      return false;
    this.sm(node, -2147483648);
    return true;
  };
  function ListClosed(forbiddenElementsBitmask) {
    LockFreeLinkedListNode.call(this);
    this.tz_1 = forbiddenElementsBitmask;
  }
  function unwrap(exception) {
    return exception;
  }
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function SynchronizedObject() {
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this.on_1 = null;
  }
  protoOf(CommonThreadLocal).pn = function () {
    var tmp = this.on_1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(CommonThreadLocal).qn = function (value) {
    this.on_1 = value;
  };
  function commonThreadLocal(name) {
    return new CommonThreadLocal();
  }
  //region block: post-declaration
  protoOf(JobSupport).vi = cancel$default;
  protoOf(JobSupport).de = plus;
  protoOf(JobSupport).s8 = get_0;
  protoOf(JobSupport).ce = fold;
  protoOf(JobSupport).be = minusKey_0;
  protoOf(CancellableContinuationImpl).ak = cancel$default_0;
  protoOf(CoroutineDispatcher).s8 = get;
  protoOf(CoroutineDispatcher).be = minusKey;
  //endregion
  //region block: init
  Active_instance = new Active();
  Key_instance_1 = new Key_0();
  Key_instance_2 = new Key_1();
  NonDisposableHandle_instance = new NonDisposableHandle();
  Key_instance_3 = new Key_2();
  counter = 0;
  DEBUG = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CoroutineStart_UNDISPATCHED_getInstance;
  _.$_$.b = await_0;
  _.$_$.c = coroutineScope;
  _.$_$.d = delay;
  _.$_$.e = withContext;
  _.$_$.f = Dispatchers_getInstance;
  _.$_$.g = Key_instance_2;
  _.$_$.h = FlowCollector;
  _.$_$.i = MutableStateFlow;
  _.$_$.j = catch_0;
  _.$_$.k = flow;
  _.$_$.l = onEach;
  _.$_$.m = CancellableContinuationImpl;
  _.$_$.n = CoroutineDispatcher;
  _.$_$.o = CoroutineScope_0;
  _.$_$.p = CoroutineScope;
  _.$_$.q = Job_0;
  _.$_$.r = SupervisorJob;
  _.$_$.s = cancel;
  _.$_$.t = get_job;
  _.$_$.u = launch;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-coroutines-core.js.map
