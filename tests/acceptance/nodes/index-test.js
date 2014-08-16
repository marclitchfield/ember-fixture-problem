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
    equal(currentPath(), 'nodes.index');
    equal(find('.node:first').text(), 'a');
  });
});

test('navigate once', function() {
  visit('/');
  click('.node:first');

  andThen(function() {
    equal(find('h1').text(), 'a');
    click('.node:first');
  });
});

test('navigate twice', function() {
  visit('/');
  click('.node:first');

  andThen(function() {
    equal(find('h1').text(), 'a');
    click('.node:first');
  });

  andThen(function() {
    equal(find('h1').text(), 'a.a');
    click('.node:first');
  });
});

