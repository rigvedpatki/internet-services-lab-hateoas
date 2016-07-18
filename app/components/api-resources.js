import Ember from 'ember';

export default Ember.Component.extend({
  routing: Ember.inject.service('-routing'),
  actions: {
    createResource(api) {
      var resource = this.store.createRecord('resource', {
        path: '',
        description: '',
        api: api
      });
      resource.save();
      api.save();
      this.sendAction('reroute', 'resource', resource.id);
    },
    createMethod(resource) {
      var method = this.store.createRecord('method', {
        method: 'GET',
        name: '',
        description: '',
        resource: resource
      });
      method.save();
      resource.save();
    }
  }
});
