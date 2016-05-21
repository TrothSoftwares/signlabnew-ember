import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('quotation' ,{reload: true});
  },

  setupController: function(controller ,model) {
    controller.set('quotations',model);
  }
});
