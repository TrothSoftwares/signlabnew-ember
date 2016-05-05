import Ember from 'ember';

export default Ember.Route.extend({

        model: function() {
        return Ember.RSVP.hash({
        customers : this.store.findAll('customer'),
        agents : this.store.findAll('agent'),

      });
    }, 



setupController:function(controller, model){
  controller.set('customers' , model.customers);
  controller.set('agents', model.agents);
}

});
