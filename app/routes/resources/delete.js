import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  model(params) {
    return this.store.findRecord('resource', params.resource_id);
  },
  afterModel(resource, transition) {
    /**
     * Deletes the given resource and everything linked to it.
     * That is, deletes all the Methods, Link Relations,
     * Query Parameters, Responses, Entities and Properties that
     * are linked to the given apiurl.
     * Once the objects are deleted, transitions to Application and
     * sends a flash message that deletion was successful.
     * @ param resource: the resource object to be deleted
     * @ param transition: Not used
     */
    let resId = resource.id;
    resource.get('methods').forEach( function(method) {
      method.get('linkRelations').forEach( function(linkRelation) {
        linkRelation.destroyRecord();
      });
      method.get('queryParams').forEach( function(queryParam) {
        queryParam.destroyRecord();
      });
      method.get('responses').forEach( function(response) {
        response.get('entity').then(function(entity) {
          entity.get('responses').then(function(entityResponses) {
            entityResponses.removeObject(response.id);
            entity.save();
            response.destroyRecord();
          });
        });
      });
      method.destroyRecord();
    });
    resource.get('api').then(function(api) {
      api.get('resources').then( function(resources) {
        resources.removeObject(resource.id);
        api.save();
        resource.destroyRecord();
        Ember.Logger.log("Data is destroyed for id: " + resId);
        Ember.get(this, 'flashMessages').success('Resource was deleted!');
        this.transitionTo('application');
      });
    });
  }
});
