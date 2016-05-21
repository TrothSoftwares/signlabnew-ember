import Ember from 'ember';


export default Ember.Route.extend({

session: Ember.inject.service('session'),
// 
// beforeModel: function(){
//   this.transitionTo('dashboard.projects.home.cur-projects');
// },

  actions: {


    logout() {
      this.get('session').invalidate();
      this.transitionTo('login');
    }
  }
});
