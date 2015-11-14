define(function (require) {

  'use strict';

  var Bacon = require('bacon');
  var dispatcher = require('dispatcher');

  return Bacon.fromBinder(function (sink) {
    function push() {
      sink.apply(this, arguments);
    }
    dispatcher.on('change', push);
    return function () {
      dispatcher.off('change', push);
    };
  })
});