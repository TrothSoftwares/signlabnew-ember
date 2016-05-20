import Ember from 'ember';

export default Ember.Route.extend({

  session: Ember.inject.service('session'),


setupController:function(controller){
  if(Ember.isEqual('om', this.get('session.data.authenticated.role'))){
    controller.set('isOm',true );
  }
  if(Ember.isEqual('gm', this.get('session.data.authenticated.role'))){
    controller.set('isGm',true );
  }
}
});
