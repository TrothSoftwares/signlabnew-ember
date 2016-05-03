import Ember from 'ember';

export default Ember.Controller.extend({


  isCreateProjectButtonDisabled: Ember.computed('name',  function() {
    if(Ember.isEmpty(this.get('name')))
    {return 'disabled';}
    else{return '';}
  }),


  actions:{

    createProject: function(){

      var controller = this;

      var project = this.store.createRecord('project', {
        name: this.get('name'),
        agent: this.get('agents').get('firstObject'),
        customer: this.get('customers').get('firstObject'),
        status: 'created',
        duedate: new Date(),
      });

      project.save().then(function(){

        controller.set('name' , '');
        controller.transitionToRoute('dashboard.projects.home.cur-projects');

      }).catch(function(){
        controller.notifications.addNotification({
          message: 'Sorry, cant save at the moment !' ,
          type: 'error',
          autoClear: true
        });
      });


    }
  }


});
