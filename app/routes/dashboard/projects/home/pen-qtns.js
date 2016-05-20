import Ember from 'ember';

export default Ember.Route.extend({

  session: Ember.inject.service('session'),

  model: function() {
    return Ember.RSVP.hash({
     projects: this.store.findAll('project' ,{reload: true}).then(function(projects){
          return {
            pendingQuotationsOM:  projects.filterBy('fstatusom', 'forwarded'),
            pendingQuotationsGM:  projects.filterBy('fstatusgm', 'forwarded')
        };
     }),
   });
  },



  setupController: function(controller ,model) {
      controller.set('projects',model.projects);
      controller.set('pendingQuotationsOM',model.projects.pendingQuotationsOM);
      controller.set('pendingQuotationsGM',model.projects.pendingQuotationsGM);
      
      if(Ember.isEqual('om', this.get('session.data.authenticated.role'))){
        controller.set('isOm',true );
      }
      if(Ember.isEqual('gm', this.get('session.data.authenticated.role'))){
        controller.set('isGm',true );
      }

  }
});
