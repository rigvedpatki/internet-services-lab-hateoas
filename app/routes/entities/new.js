import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var var_entity = this.store.createRecord('entity', {
      name: 'New Entity',
      description: ''
    });
    var_entity.save();
    return var_entity;
  },
  afterModel(apiModel) {
    var var_entity = this.store.createRecord('entity', {
      name: 'New Entity',
      description: '',
      api: apiModel
    });
    var_entity.save();
    return var_entity;
  },
  redirect(model, transition) {
    this.transitionTo('entity', model);
  }
});
