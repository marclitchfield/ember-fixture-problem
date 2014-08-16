import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: Node', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

