import Ember from 'ember';

export default Ember.Route.extend({
    flashMessages: Ember.inject.service(),
    model(params) {
        return this.store.findRecord('response', params.response_id);
    },
    afterModel(response, transition) {
      const flashMessages = Ember.get(this, 'flashMessages');
      let responseId = response.id;

      response.get('entity').then(function(entity) {
        entity.get('responses').then(function(entityResponses) {
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
      });
      transition.abort();
    }
});
