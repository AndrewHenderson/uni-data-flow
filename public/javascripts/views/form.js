define(function(require) {

  'use strict';

  var Marionette = require('marionette');

  return Marionette.LayoutView.extend({

    template: require('text!partials/form.html'),

    ui: {
      nameInput: '#nameInput',
      locationInput: '#locationInput'
    },

    events: {
      'keyup': 'onKeyUp'
    },

    onKeyUp: function() {
      this.model.set({
        name: this.ui.nameInput.val(),
        location: this.ui.locationInput.val()
      });
    }
  });
});