import Ember from 'ember';

export default Ember.Route.extend({

    model: function() {
      // return  this.modelFor('dashboard.projects.project' );
      return Ember.RSVP.hash({
      project: this.modelFor('dashboard.projects.project' , {reload:true}),
    });

    },

    setupController: function(controller ,model) {






      
      controller.set('project',model.project );

      // console.log(model.projects);
    },
});
