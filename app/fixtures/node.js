import Node from '../models/node';

export default {
  create: function() {
    Node.reopenClass({
      FIXTURES: [
        { id: 1, name: 'a', children: [2] },
        { id: 2, name: 'a.a', children: [] }
      ]
    });
  }
};

