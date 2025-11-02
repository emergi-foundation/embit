(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['ktor-ktor-utils'] = factory(typeof globalThis['ktor-ktor-utils'] === 'undefined' ? {} : globalThis['ktor-ktor-utils']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  var DISABLE_SFG;
  //region block: init
  DISABLE_SFG = false;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-utils.js.map
