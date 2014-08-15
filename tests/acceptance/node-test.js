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

test('visiting /node', function() {
  visit('/node/1');

  andThen(function() {
    equal(currentPath(), 'node');
  });
});
