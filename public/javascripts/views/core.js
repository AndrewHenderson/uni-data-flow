define(function(require) {

  'use strict';

  var Marionette = require('marionette');

  return Marionette.LayoutView.extend({

    el: '.view-root',

    template: require('text!partials/root.html'),

    regions: {
    },

    childEvents: {
    },

    onRender: function() {
      this.showChildViews();
    },

    showChildViews: function() {
      //this.showChildView('action', new ActionView());
      //this.showChildView('canvas', canvasView);
    },

    start: function() {
      //canvasView.start();
    }
  });
});