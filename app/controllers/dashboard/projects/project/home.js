import Ember from 'ember';

export default Ember.Controller.extend({
  Outputformat: 'DD/MM/YYYY',


    addedActive: Ember.computed('project.status',function(){
      if(this.get('project.status') === 'created'){
        return 'active';
      }else {return '';}
    }),

    startedActive: Ember.computed('project.status',function(){
      if(this.get('project.status') === 'started'){
        return 'active';
      }else {return '';}
    }),

    completedactive: Ember.computed('project.status',function(){
      if(this.get('project.status') === 'completed'){
        return 'active';
      }else {return '';}
    }),



});
