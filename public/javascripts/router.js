define(function(require) {

  var Backbone = require('backbone');
  var RootView = require('views/root');

  return Backbone.Router.extend({

    initialize: function () {
      this.bind('all', this.change);
      this.rootView = new RootView();
    },

    routes: {
      '': 'default',
      '*actions(/)': 'unknown'
    },

    change: function () {
      //
    },

    default: function () {
      this.rootView.render();
    }
  });
});