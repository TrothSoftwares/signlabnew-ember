import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('project' ,{reload: true});
  },

  setupController: function(controller ,model) {
    controller.set('projects',model);
  }
});
