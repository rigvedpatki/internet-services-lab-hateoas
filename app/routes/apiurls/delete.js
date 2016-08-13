import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  model(params) {
    return this.store.findRecord('apiurl', params.apiurl_id);
  },
  afterModel(apiurl, transition) {
    /**
     * Deletes the given apiurl and everything linked to it.
     * That is, deletes all the Resources, Methods, Link Relations,
     * Query Parameters, Responses, Entities and Properties that
     * are linked to the given apiurl.
     * Once the objects are deleted, transitions to Application and
     * sends a flash message that deletion was successful.
     * @ param apiurl: the apiurl object to be deleted
     * @ param transition: Not used
     */
    apiurl.get('resources').forEach( function(resource) {
      resource.get('methods').forEach( function(method) {
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
      resource.destroyRecord();
    });

    apiurl.get('entities').forEach( function(entity) {
      entity.get('properties').forEach( function(property) {
          property.destroyRecord();
      });
      entity.destroyRecord();
    });
    apiurl.destroyRecord();
    this.controllerFor('application').send('clearSelection');
    Ember.Logger.log("Data is destroyed for id: " + apiurl.id);
    Ember.get(this, 'flashMessages').success('API URL was deleted!');
    this.transitionTo('application');
  }
});
