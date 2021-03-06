import Ember from 'ember';

export default Ember.Controller.extend({

  actions:{
    editAgent:function(){
      Ember.$('.agentview').transition('hide');
      Ember.$('.agentedit').transition('show');
    },
    saveAgent:function(){
      var controller = this;

        this.get('agent').save().then(function(){
          Ember.$('.agentview').transition('show');
          Ember.$('.agentedit').transition('hide');
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
