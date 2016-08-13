import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  model(params) {
      return this.store.findRecord('response', params.response_id);
  },
  afterModel(response, transition) {
    /**
     * Deletes the given response and relations to Entity and Method.
     * That is, deletes all the Resources, Methods, Link Relations,
     * Query Parameters, Responses, Entities and Properties that
     * are linked to the given apiurl.
     * Once the objects are deleted, transitions to Application and
     * sends a flash message that deletion was successful.
     * @ param apiurl: the apiurl object to be deleted
     * @ param transition: Not used (aborted)
     */
    const flashMessages = Ember.get(this, 'flashMessages');
    let responseId = response.id;

    response.get('entity').then(function(entity) {
      Ember.Logger.log("entity: " + entity);
      if (entity && entity.hasOwnProperty('responses')) {
      entity.get('responses').then(function(entityResponses) {
        Ember.Logger.log("entityResponse: " + entityResponses);
        entityResponses.removeObject(responseId);
        
        response.get('method').then(function(method) {
          method.get('responses').then(function(methodResponses) {
            methodResponses.removeObject(responseId);
            response.destroyRecord();
            
            entity.save();
            method.save();
            flashMessages.success('Response deleted!');
            Ember.Logger.log("Data is destroyed for response with id: " + responseId);
          });
        });
      });
    } else {
      Ember.Logger.log("Entity has no responses");
      response.get('method').then(function(method) {
        method.get('responses').then(function(methodResponses) {
          methodResponses.removeObject(responseId);
          response.destroyRecord();
          
          method.save();
          flashMessages.success('Response deleted!');
          Ember.Logger.log("Data is destroyed for response with id: " + responseId);
        });
      });
    }
  });
  transition.abort();
  }
});
