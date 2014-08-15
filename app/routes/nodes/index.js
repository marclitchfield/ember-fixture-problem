import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('node').then(function(nodes) {
      return nodes.filter(function(node) { 
        return node.get('parent') === null; 
      });
    });
  }
});
