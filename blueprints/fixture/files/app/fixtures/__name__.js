import <%= classifiedModuleName %> from '../models/<%= dasherizedModuleName %>';

export default {
  create: function () {
    <%= classifiedModuleName %>.reopenClass({
      FIXTURES: []
    });
  }
};
