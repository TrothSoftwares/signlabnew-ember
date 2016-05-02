import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
      return this.store.findRecord('agent', params.id );
  },

  setupController: function(controller ,model) {
    controller.set('agent',model);
  }
  
});
