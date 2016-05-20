import Ember from 'ember';

export default Ember.Route.extend({

  session: Ember.inject.service('session'),


  model: function() {
    return Ember.RSVP.hash({
      project: this.modelFor('dashboard.projects.project' , {reload:true}),

    });
  },



  setupController:function(controller, model){

    controller.set('project', model.project);

    if(Ember.isEqual('om', this.get('session.data.authenticated.role'))){
      controller.set('isOm',true );
    }
    if(Ember.isEqual('gm', this.get('session.data.authenticated.role'))){
      controller.set('isGm',true );
    }






  }
});
