define(function(require) {

  'use strict';

  var bb = require('backbone');
  var mn = require('marionette');
  var hb = require('handlebars');
  var Router = require('router');

  // Overwrite Marionette internal template logic to expect text.js to pass a string.
  mn.TemplateCache.prototype.loadTemplate = function (str) {
    return str;
  };
  mn.TemplateCache.prototype.compileTemplate = function (rawTemplate) {
    return hb.default.compile(rawTemplate);
  };

  var app = new mn.Application();
  var router = new Router();
  bb.history.start();

  return app;
});