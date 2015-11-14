(function(require) {
  'use strict';

  // Store require configuration as an object so that it can be exported
  // if this file is required from within the Node.js developer tools
  var requireConfig = {};

  requireConfig.paths = {
    backbone: '../bower_components/backbone/backbone',
    bacon: '../bower_components/bacon/dist/Bacon',
    handlebars: '../bower_components/handlebars/handlebars.amd',
    jquery: '../bower_components/jquery/dist/jquery',
    marionette: '../bower_components/backbone.marionette/lib/backbone.marionette',
    text: '../bower_components/text/text',
    underscore: '../bower_components/underscore/underscore'
  };

  requireConfig.shim = {};


  // Detect environment by checking for the presence of the "module" global:
  if (typeof module !== 'undefined' && module.exports) {
    // We are in Node: export the configuration objects for use elsewhere
    // (this avoids duplication of the entire Require paths and shim lists)
    module.exports = requireConfig;
    // Exit out
    return;
  }

  // We are in the browser: continue to configure Require.js and initialize app
  require.config({
    baseUrl: 'javascripts',
    useStrict: true,
    findNestedDependencies: true,
    waitSeconds: 30,
    paths: requireConfig.paths,
    shim: requireConfig.shim
  });

  return requireConfig;

})(require);