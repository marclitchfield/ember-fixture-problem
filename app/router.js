import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberFixtureProblemENV.locationType
});

Router.map(function() {
  this.resource('nodes', { path: '/'}, function() {});
  this.resource('node', { path: 'node/:node_id' });
});

export default Router;
