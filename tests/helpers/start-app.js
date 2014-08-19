/* global require */

var Application = require('ember-fixture-problem/app')['default'];
var Router = require('ember-fixture-problem/router')['default'];
import Ember from 'ember';
import DS from 'ember-data';

export default function startApp(attrs) {
  var App;

  var attributes = Ember.merge({
    // useful Test defaults
    rootElement: '#ember-testing',
    LOG_ACTIVE_GENERATION:false,
    LOG_VIEW_LOOKUPS: false
  }, attrs); // but you can override;

  Router.reopen({
    location: 'none'
  });

  Ember.run(function(){
    App = Application.create(attributes);
    App.setupForTesting();
    App.injectTestHelpers();
  });

  App.reset();
  
  return App;
}

