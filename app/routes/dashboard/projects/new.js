import Ember from 'ember';

export default Ember.Route.extend({

  model: function(){
    return Ember.RSVP.hash({
agents: this.store.findAll('agent'),
customers: this.store.findAll('customer'),
      });

  },











  setupController: function(controller , model){

    controller.set('customers', model.customers);
    controller.set('agents', model.agents);

  }
});
