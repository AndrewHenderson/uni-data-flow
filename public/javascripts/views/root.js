define(function(require) {

  'use strict';

  var Marionette = require('marionette');
  var CoreModel = require('models/core');
  var NewView = require('views/form');
  var OutputView = require('views/output');

  return Marionette.LayoutView.extend({

    el: '.view-root',

    template: require('text!partials/root.html'),

    regions: {
      newRegion: '#new-region',
      outputRegion: '#output-region'
    },

    onRender: function() {
      this.showChildViews();
    },

    showChildViews: function() {
      this.showChildView('newRegion', new NewView({
        model: new CoreModel({}, {type: 'form'})
      }));
      this.showChildView('outputRegion', new OutputView());
    }
  });
});