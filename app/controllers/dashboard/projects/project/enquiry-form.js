import Ember from 'ember';

export default Ember.Controller.extend({


  actions: {

      saveProject:function(){

        var controller= this;
        var  project = controller.get('project');
        var customer = controller.get('project.customer');
        var agent = controller.get('project.agent');
        var  getEnquiry = this.get('project').get('enquiry');
        getEnquiry.then(function(enquiry){
          enquiry.save().catch(function(){
            controller.notifications.addNotification({
              message: 'Sorry, cant save at the moment !' ,
              type: 'error',
              autoClear: true
            });
          });
        });


        project.set('customer', customer );
        project.set('agent', agent );

        var currentItems = project.get('items');
        currentItems.forEach(function(curitem){
          curitem.save().catch(function(){
            controller.notifications.addNotification({
              message: 'Sorry, cant save at the moment !' ,
              type: 'error',
              autoClear: true
            });
          });
        });


        return project.save().then(function(){
          controller.notifications.addNotification({
            message: 'Project Saved!' ,
            type: 'success',
            autoClear: true
          });
        }).catch(function(){
          controller.notifications.addNotification({
            message: 'Sorry, cant save at the moment !' ,
            type: 'error',
            autoClear: true
          });
        });


      },


      AddNewItem: function(){

  var controller = this;
  let itemtype = this.get('itemtypes').get('firstObject');
  let jobtype = this.get('jobtypes').get('firstObject');
  let project = this.get('project');
  var newitem = this.store.createRecord('item', {
    dimensions: '',
    description: '',
    itemtype: itemtype ,
    jobtype: jobtype,
    project: project });


    newitem.save().catch(function(){
      controller.notifications.addNotification({
        message: 'Sorry, cant save at the moment !' ,
        type: 'error',
        autoClear: true
      });
    });
    this.get('project.items').pushObject(newitem);
  },



  deleteItem: function(item){

    console.log("sdfsdf");

        var controller = this;
        item.destroyRecord().then(function () {
        }).catch(function () {
          controller.notifications.addNotification({
            message: 'Item cannot be deleted at this moment' ,
            type: 'error',
            autoClear: true
          });
          item.rollbackAttributes();
        });
      },



  }
});
