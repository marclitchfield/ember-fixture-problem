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

test('visiting /nodes/index', function() {
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

  andThen(function() {
    equal(find('h1').text(), 'a.a.a');
  });
});
