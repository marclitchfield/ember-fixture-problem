import Ember from 'ember';
import startApp from '../../helpers/start-app';

var App;

module('Acceptance: NodesIndex', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('visit /', function() {
  visit('/');

  andThen(function() {
    console.log('Test visit/ andThen');
    equal(currentPath(), 'nodes.index');
    equal(find('.node:first').text(), 'a');
  });
});

test('navigate', function() {
  visit('/');
  andThen(function() {
    equal(find('.node:first').text(), 'a');
    click('.node:first');
  });

  andThen(function() {
    console.log('Navigated to node page');
    equal(find('h1').text(), 'a');
    equal(find('.node:first').text(), 'a.a');  // This assertion fails 50% of the time.
  });
});

