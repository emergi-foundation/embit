(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['ktor-ktor-client-ktor-client-js'] = factory(typeof globalThis['ktor-ktor-client-ktor-client-js'] === 'undefined' ? {} : globalThis['ktor-ktor-client-ktor-client-js']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-ktor-client-js.js.map
