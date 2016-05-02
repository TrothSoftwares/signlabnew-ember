import Ember from 'ember';

export default Ember.Controller.extend({
  searchTerm: '',

  matchingCustomers: Ember.computed('customers.@each.name','searchTerm', function() {
    var searchTerm = this.get('searchTerm').toLowerCase();
    return this.get('customers').filter(function(customer) {
      return customer.get('name').toLowerCase().indexOf(searchTerm) !==-1;
    });
  }),


});
