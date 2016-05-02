import Ember from 'ember';

export default Ember.Controller.extend({
  searchTerm: '',

  matchingAgents: Ember.computed('agents.@each.name','searchTerm', function() {
    var searchTerm = this.get('searchTerm').toLowerCase();
    return this.get('agents').filter(function(agent) {
      return agent.get('name').toLowerCase().indexOf(searchTerm) !==-1;
    });
  }),
});
