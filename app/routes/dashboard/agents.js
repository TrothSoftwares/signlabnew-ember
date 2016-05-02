import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('agent' ,{reload: true});
  },

  setupController: function(controller ,model) {
    controller.set('agents',model);
  }
});
