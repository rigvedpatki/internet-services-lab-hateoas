import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var resource = this.store.createRecord('resource');
    return this.store.findAll('resource');
  }
});
