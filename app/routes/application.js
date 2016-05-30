import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var resource = this.store.createRecord('resource'); // Created as a hotfix to get dynamic resources listed.
    return this.store.findAll('resource');
  }
});
