import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  createResponse() {
      /**
       * Creates a new Response for the Method-model of this function.
       * Closes all other Link Relations, Query Parameters and Responses
       */
      var method = this.get('model');
      method.get('linkRelations').forEach(function(object) {
        object.set('visible', false);
        object.save();
      });
      Ember.Logger.log("Starting to close Qury Parameter.");
      method.get('queryParams').forEach(function(object) {
        object.set('visible', false);
        object.save();
      });
      method.get('responses').forEach(function(object) {
        object.set('visible', false);
        object.save();
      });

      var response = this.store.createRecord('response', {
        status: '200 - OK',
        name: '',
        description: '',
        method: method,
        visible: 'true'
      });
      response.save();
      method.save();
    }
  }
});
