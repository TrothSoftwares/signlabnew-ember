import Ember from 'ember';

export default Ember.Controller.extend({

  isCreateCustomerButtonDisabled: Ember.computed('customername' ,  function() {
    if( Ember.isEmpty(this.get('customername'))
  ){return 'disabled';}
  else{return '';}
  }),


  actions: {


    createCustomer:function(){

var controller = this;


      var customer = this.store.createRecord('customer', {
         name :this.get('customername'),
         contactname :this.get('customercontactname'),
         contactno :this.get('customercontactno'),
         othcontactno :this.get('othercontactnumber'),
         othrefdetails :this.get('otherefdetails'),
       });


       customer.save().then(function(){
         controller.set('itemcode' , '');
         controller.set('customercontactname' , '');
         controller.set('customercontactno' , '');
         controller.set('othercontactnumber' , '');
         controller.set('otherefdetails' , '');

         controller.transitionToRoute('dashboard.customers.customer' , customer);
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
