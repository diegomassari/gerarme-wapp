(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("/forms/advanced", ["jquery", "Site"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("jquery"), require("Site"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.jQuery, global.Site);
    global.formsAdvanced = mod.exports;
  }
})(this, function (_jquery, _Site) {
  "use strict";

  _jquery = babelHelpers.interopRequireDefault(_jquery);
  (0, _jquery.default)(document).ready(function ($$$1) {
    (0, _Site.run)();
  });

  // Example Multi-Select
  // --------------------


  (function () {
    // for multi-select public methods example
    (0, _jquery.default)('.multi-select-methods').multiSelect();
    (0, _jquery.default)('#buttonSelectAll').click(function () {
      (0, _jquery.default)('.multi-select-methods').multiSelect('select_all');
      return false;
    });
    (0, _jquery.default)('#buttonDeselectAll').click(function () {
      (0, _jquery.default)('.multi-select-methods').multiSelect('deselect_all');
      return false;
    });
    (0, _jquery.default)('#buttonSelectSome').click(function () {
      (0, _jquery.default)('.multi-select-methods').multiSelect('select', ['Idaho', 'Montana', 'Arkansas']);
      return false;
    });
    (0, _jquery.default)('#buttonDeselectSome').click(function () {
      (0, _jquery.default)('.multi-select-methods').multiSelect('select', ['Idaho', 'Montana', 'Arkansas']);
      return false;
    });
    (0, _jquery.default)('#buttonRefresh').on('click', function () {
      (0, _jquery.default)('.multi-select-methods').multiSelect('refresh');
      return false;
    });
    (0, _jquery.default)('#buttonAdd').on('click', function () {
      (0, _jquery.default)('.multi-select-methods').multiSelect('addOption', {
        value: 42,
        text: 'test 42',
        index: 0
      });
      return false;
    });
  })();
  
});