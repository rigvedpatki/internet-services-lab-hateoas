import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  model(params) {
    return this.store.findRecord('method', params.method_id);
  },
  afterModel(method, transition) {
    /**
     * Deletes the given method and everything linked to it.
     * That is, deletes all the Link Relations, Query Parameters 
     * and Responses that are linked to the given Method. Also
     * removes the relationships between Responses and Entities.
     * Once the objects are deleted, transition sends a flash 
     * message that deletion was successful.
     * @ param method: the method object to be deleted
     * @ param transition: Not used (aborted)
     */
    const flashMessages = Ember.get(this, 'flashMessages');
    let methodId = method.id;

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
        });
      });
      response.destroyRecord();
    });
    
    method.get('resource').then(function(resource) {
      resource.get('methods').then( function(methods) {
        methods.removeObject(method.id);
        resource.save();
        method.destroyRecord();
        
        flashMessages.success('Method deleted!');
        Ember.Logger.log("Data is destroyed for method id: " + methodId);
      });
    });
    transition.abort();
  }
});
