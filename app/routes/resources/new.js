import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var var_resource = this.store.createRecord('resource', {
      path: '',
      description: ''
    });
    var_resource.save();
    return var_resource;
  },
  afterModel(apiModel) {
    var var_resource = this.store.createRecord('resource', {
      path: '',
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
