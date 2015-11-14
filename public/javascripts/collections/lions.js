define(function (require) {

  'use strict';

  var bb = require('backbone');
  var Lion = require('models/lion');

  return Backbone.Collection.extend({

    model: Lion,

    initialize: function initialize(modelsArray, options) {
      this.options = options || {};
    },

    url: '/api/lions'
  });

});