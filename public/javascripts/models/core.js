define(function (require) {

  'use strict';

  var _ = require('underscore');
  var Backbone = require('backbone');
  var Model = Backbone.Model;
  var dispatcher = require('dispatcher');

  return Model.extend({

    initialize: function(attrs, options) {
      if (options.type) {
        this.type = options.type;
      }
      Model.prototype.initialize.apply(this, arguments);
    },

    set: function() {
      Model.prototype.set.apply(this, arguments);
      dispatcher.trigger('change', this);
    }
  });
});
