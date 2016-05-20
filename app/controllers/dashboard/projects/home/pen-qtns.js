import Ember from 'ember';

export default Ember.Controller.extend({

  actions:{
    acceptOm: function(project){
      project.set('fstatusom', 'accepted');
      var confirm = window.confirm("Are you sure you want to accept the Quotation?");
      if (confirm) {
        project.save();
      }
    },


    rejectOm: function(project){
      project.set('fstatusom', 'rejected');
      var confirm = window.confirm("Are you sure you want to reject the Quotation?");
      if (confirm) {
        project.save();
      }
    },

    acceptGm: function(project){

      project.set('fstatusgm', 'accepted');
      var confirm = window.confirm("Are you sure you want to accept the Quotation?");
      if (confirm) {
        project.save();
      }
    },

    rejectGm : function(project){
      project.set('fstatusgm', 'rejected');
      var confirm = window.confirm("Are you sure you want to reject the Quotation?");
      if (confirm) {
        project.save();
      }

    }
  }
});
