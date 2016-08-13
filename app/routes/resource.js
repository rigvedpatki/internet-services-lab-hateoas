import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  model(params) {
    return Ember.RSVP.hash({
      resource: this.store.findRecord('resource', params.resource_id),
      entities: this.store.findAll('entity'),
      apis: this.store.findAll('apiurl')
    });
  },
  actions: {
    createMethod(resource) {
      /**
       * Creates a new Method for the given Resource.
       * Closes all other Methods.
       * @ param resource: the resource for which the new method is toGMTString
       *   be created
       */
      resource.get('methods').forEach( function(closableMethod) {
        closableMethod.set('visible', false);
      });
      var method = this.store.createRecord('method', {
        method: 'GET',
        name: 'myMethod',
        description: '',
        resource: resource,
        visible: 'true'
      });
      method.save();
      resource.save();
    },
    save(resource) {
      resource.save();
      Ember.Logger.log("Data is saved for resource id: " + resource.id);
      Ember.get(this, 'flashMessages').success('Saved!');
    },
    routeToNewEntity(entity) {
      /**
       * Reroutes the application to the given object.
       * @ param entity: the entity-model to route to
       */
      Ember.Logger.log("Rerouting.");
      this.transitionTo("entity", entity);
    }
  }
});
