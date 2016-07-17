import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    Ember.Logger.log("Starting to create new Resource without model.");
    var var_resource = this.store.createRecord('resource', {
      path: '/path',
      description: ''
    });
    var_resource.save();
    return var_resource;
  },
  afterModel(apiModel) {
    Ember.Logger.log("Starting to create new Resource with model.");
    var var_resource = this.store.createRecord('resource', {
      path: '/path',
      description: '',
      api: apiModel
    });
    var_resource.save();
    return var_resource;
  },
  redirect(model, transition) {
    this.transitionTo('resource', model.id);
  }
});
