import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
  editAgent :function() {
    var controller = this;
    this.toggleProperty('enableEditAgent');
  }
}
});
