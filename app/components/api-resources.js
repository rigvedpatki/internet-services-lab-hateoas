import Ember from 'ember';

export default Ember.Component.extend({
  routing: Ember.inject.service('-routing'),
  actions: {
    createResource(api) {
      /**
       * Creates a new resource for the given api.
       * Once the object is created, reroutes to the created Resource.
       * @param api: the apiurl object for which the Resource is created
       */
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
      /**
       * Creates a new method for the given resource.
       * @param resource: the Resource object for which the Method is created
       */
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
