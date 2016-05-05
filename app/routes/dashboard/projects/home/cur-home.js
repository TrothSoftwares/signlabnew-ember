import Ember from 'ember';


//TODO: Discuss to remove this page or not
export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('project' ,{reload: true});
  },

  setupController: function(controller ,model) {
    controller.set('projects',model);
  }
});
