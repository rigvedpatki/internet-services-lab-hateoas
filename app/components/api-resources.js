import Ember from 'ember';

export default Ember.Component.extend({
  routing: Ember.inject.service('-routing'),
  actions: {
    createResource(api) {
      var resource = this.store.createRecord('resource', {
        path: '/newPath',
        description: '',
        api: api
      });
      resource.save();
      api.save();
      Ember.Logger.log("Starting to reroute.");
      this.sendAction('reroute', 'resource', resource.id);
    },
    createMethod(resource) {
      var method = this.store.createRecord('method', {
        method: 'GET',
        name: 'myMethod',
        description: 'This is my method.',
        resource: resource
      });
      method.save();
      resource.save();
    }
  }
});
