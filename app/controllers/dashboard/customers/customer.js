import Ember from 'ember';

export default Ember.Controller.extend({

  actions:{
    editCustomer:function(){
      Ember.$('.customerview').transition('hide');
      Ember.$('.customeredit').transition('show');
    },
    saveCustomer:function(){
      var controller = this;

        this.get('customer').save().then(function(){
          Ember.$('.customerview').transition('show');
          Ember.$('.customeredit').transition('hide');
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
