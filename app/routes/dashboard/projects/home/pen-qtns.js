import Ember from 'ember';

export default Ember.Route.extend({

  session: Ember.inject.service('session'),

  model: function() {
    return Ember.RSVP.hash({
     projects: this.store.findAll('project' ,{reload: true}).then(function(projects){
          return {
            pendingQuotationsOM:  projects.filterBy('fstatusom', 'forwarded'),
            pendingQuotationsGM:  projects.filterBy('fstatusgm', 'forwarded'),
            pendingQuotationsIS:  projects.filterBy('fstatusis', 'forwarded'),
            pendingQuotationsPS:  projects.filterBy('fstatusps', 'forwarded')
        };
     }),
   });
  },



  setupController: function(controller ,model) {
      controller.set('projects',model.projects);
      controller.set('pendingQuotationsOM',model.projects.pendingQuotationsOM);
      controller.set('pendingQuotationsGM',model.projects.pendingQuotationsGM);
      controller.set('pendingQuotationsIS',model.projects.pendingQuotationsIS);
      controller.set('pendingQuotationsPS',model.projects.pendingQuotationsPS);

      if(Ember.isEqual('om', this.get('session.data.authenticated.role'))){
        controller.set('isOm',true );
      }
      if(Ember.isEqual('gm', this.get('session.data.authenticated.role'))){
        controller.set('isGm',true );
      }

      if(Ember.isEqual('is', this.get('session.data.authenticated.role'))){
        controller.set('isIs',true );
      }
      if(Ember.isEqual('ps', this.get('session.data.authenticated.role'))){
        controller.set('isPs',true );
      }

  }
});
