import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'sem/tests/helpers/start-app';

module('Acceptance | cur projects', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});








test('visiting /cur-projects', function(assert) {
  visit('/cur-projects');

  andThen(function() {
    assert.equal(currentURL(), '/cur-projects');
  });
});
