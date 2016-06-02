import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.store.createRecord('resource'); // Created as a hotfix to get dynamic resources listed.
    return this.store.findAll('resource');
  }
});
