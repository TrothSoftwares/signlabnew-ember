import Ember from 'ember';

export default Ember.Controller.extend({


  isCreateAgentButtonDisabled: Ember.computed('agentname' ,  function() {
    if( Ember.isEmpty(this.get('agentname'))
){return 'disabled';}
  else{return '';}
}),


  actions: {


    createAgent:function(){

var controller = this;


      var agent = this.store.createRecord('agent', {
         name :this.get('agentname'),
         contactname :this.get('agentcontactname'),
         contactno :this.get('agentcontactno'),
         othcontactno :this.get('othercontactnumber'),
         othrefdetails :this.get('otherefdetails'),
       });


       agent.save().then(function(){
         controller.set('agentname' , '');
         controller.set('agentcontactname' , '');
         controller.set('agentcontactno' , '');
         controller.set('othercontactnumber' , '');
         controller.set('otherefdetails' , '');

         controller.transitionToRoute('dashboard.agents.agent' , agent);
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
