import DS from 'ember-data';

var NodeModel = DS.Model.extend({
  type: DS.attr('object'),
  name: DS.attr('string'),
  children: DS.hasMany('node', { inverse: 'parent', async: true }),
  parent: DS.belongsTo('node', { inverse: 'children' })
});

NodeModel.reopenClass({
  FIXTURES: [
    { id: 1, name: 'a', children: [2,3,4] },
    { id: 2, name: 'a.a', children: [5,6], parent: 1 },
    { id: 3, name: 'a.b', children: [7], parent: 1 },
    { id: 4, name: 'a.c', children: [], parent: 1 },
    { id: 5, name: 'a.a.a', children: [], parent: 2 },
    { id: 6, name: 'a.a.b', children: [], parent: 2 },
    { id: 7, name: 'a.b.a', children: [8], parent: 3 },
    { id: 8, name: 'a.b.a.a', children: [], parent: 7 }
  ]
});

export default NodeModel;