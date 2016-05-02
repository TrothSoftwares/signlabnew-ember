import Ember from 'ember';

export default Ember.Route.extend({




  model: function() {
    // return this.store.findAll('project' ,{reload: true});
    return Ember.RSVP.hash({
     projects: this.store.findAll('project' ,{reload: true}).then(function(projects){
          return {
            runningProjects:  projects.filterBy('status', 'started'),
            processingProjects:  projects.filterBy('status', 'created')
        };
     }),
   });
  },

  setupController: function(controller ,model) {


      controller.set('projects',model.projects);

// let runningProjects = Ember.computed.filterBy('projects', 'status', 'started');

// let processingProjects = Ember.computed.filterBy('projects', 'status', 'created');

      controller.set('processingProjects',model.projects.processingProjects);
      controller.set('runningProjects',model.projects.runningProjects);





  }
});
