import Ember from 'ember';

export default Ember.Controller.extend({


actions:{


  saveQuotation :function(){
  var controller  = this;

  var  quotations = this.get('project').get('quotation');
  quotations.then(function(quotation){
    quotation.save().catch(function(){
      controller.notifications.addNotification({
        message: 'Sorry, cant save at the moment !' ,
        type: 'error',
        autoClear: true
      });
    });
  });
  let items = this.get('project').get('items');
  items.forEach(function(item){
    item.save().catch(function(){
      controller.notifications.addNotification({
        message: 'Sorry, cant save at the moment !' ,
        type: 'error',
        autoClear: true
      });
    });
  }).then(function(){
    controller.notifications.addNotification({
      message: 'Quotation Saved!' ,
      type: 'success',
      autoClear: true
    });
  });
},


printQuotation :function(){
      window.print();
    },


    forwardToOm:function(project){
      project.set('fstatusom' , 'forwarded');
      project.save();
    },

    forwardToGm:function(project){
      project.set('fstatusgm' , 'forwarded');
      project.save();
    },


    AcceptQuotationOM:function(project){
      project.set('fstatusom', 'accepted');
      project.save();
    },
    RejectQuotationOM:function(project){
      project.set('fstatusom', 'rejected');
      project.save();
    },

    AcceptQuotationGM:function(project){
      project.set('fstatusgm', 'accepted');
      project.save();
    },

    RejectQuotationGM:function(project){
      project.set('fstatusgm', 'rejected');
      project.save();
    },

    startProject: function(project){
      project.set('status' , 'started');
      project.save();
    },

    ForwardtoIs: function(project){
      project.set('fstatusis' , 'forwarded');
      project.save();
    },

    ForwardtoPs: function(project){
      project.set('fstatusps' , 'forwarded');
      project.save();
    },

    isSentToGM: function(project){
      project.set('iscomment', this.get('project.iscomment'));
      project.set('fstatusis', 'replied');
      project.save();
    },

    psSentToGM: function(project){
      project.set('pscomment', this.get('project.pscomment'));
      project.set('fstatusps', 'replied');
      project.save();
    }




}

});
