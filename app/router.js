import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashboard', function() {
    this.route('projects', function() {
      this.route('home');
      this.route('new');

      this.route('project', {path: ':id'}, function() {
        this.route('enquiry-form');
        this.route('quotation-form');
        this.route('job');
        this.route('design');
        this.route('home');
      });
    });
    this.route('customers', function() {
      this.route('customer', {path: ':id'});
      this.route('new');
    });
    this.route('agents', function() {
      this.route('agent', {path: ':id'});
      this.route('new');


    });
  });
  this.route('login');
  this.route('hub');
});

export default Router;
