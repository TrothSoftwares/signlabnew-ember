import Ember from 'ember';

export default Ember.Route.extend({

        model: function() {
        return Ember.RSVP.hash({
        project: this.modelFor('dashboard.projects.project' , {reload:true}),
        customers : this.store.findAll('customer'),
        agents : this.store.findAll('agent'),
        itemtypes: this.store.findAll('itemtype'),
        jobtypes: this.store.findAll('jobtype'),

      });
    }, 



setupController:function(controller, model){
  controller.set('customers' , model.customers);
  controller.set('agents', model.agents);
  controller.set('itemtypes', model.itemtypes);
  controller.set('jobtypes', model.jobtypes);
  controller.set('project', model.project);
}

});
