(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['ktor-ktor-shared-ktor-websockets'] = factory(typeof globalThis['ktor-ktor-shared-ktor-websockets'] === 'undefined' ? {} : globalThis['ktor-ktor-shared-ktor-websockets']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-shared-ktor-websockets.js.map
