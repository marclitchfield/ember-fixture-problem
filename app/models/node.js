import DS from 'ember-data';

var NodeModel = DS.Model.extend({
  name: DS.attr('string'),
  children: DS.hasMany('node', { async: true })
});

NodeModel.reopenClass({
  FIXTURES: [
    { id: 1, name: 'a', children: [2] },
    { id: 2, name: 'a.a', children: [] }
  ]
});

export default NodeModel;