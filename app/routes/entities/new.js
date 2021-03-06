import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var var_entity = this.store.createRecord('entity', {
      name: '',
      description: ''
    });
    var_entity.save();
    return var_entity;
  },
  redirect(model, transition) {
    this.transitionTo('entity', model);
  }
});
