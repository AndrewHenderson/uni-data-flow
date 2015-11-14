define(function(require) {

  'use strict';

  var Marionette = require('marionette');
  var stream = require('stream');

  return Marionette.LayoutView.extend({

    template: require('text!partials/output.html'),

    ui: {
      greeting: '#greeting',
      question: '#question'
    },

    initialize: function() {
      var _this = this;
      stream.filter(function(model){
        return model.type == 'form' && model.get('name').length;
      }).onValue(function(model) {
        _this.ui.greeting.text('Nice to meet you, ' + model.get('name') + '. ');
      });
      stream.filter(function(model){
        return model.type == 'form' && model.get('location').length;
      }).onValue(function(model) {
        _this.ui.question.text('How\'s the weather in  ' + model.get('location') + '?');
      });
    },
  });
});