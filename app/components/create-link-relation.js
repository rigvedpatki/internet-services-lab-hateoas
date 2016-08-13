import Ember from 'ember';

export default Ember.Component.extend({
actions: {
    createLinkRelation() {
      /**
       * Creates a new Link Relation for the model of this function.
       * Closes all other Link Relations, Query Parameters and Responses
       * Once the object is created, reroutes to the created Resource.
       */
      var method = this.get('model');
      method.get('linkRelations').forEach(function(object) {
        object.set('visible', false);
        object.save();
      });
      method.get('queryParams').forEach(function(object) {
        object.set('visible', false);
        object.save();
      });
      method.get('responses').forEach(function(object) {
        object.set('visible', false);
        object.save();
      });

      var linkrelation = this.store.createRecord('link-relation', {
        rel: '',
        method: method,
        entity: null,
        visible: 'true'
      });
      linkrelation.save();
      method.save();
      Ember.Logger.log("Created a new Link Relation.");
    }
  }
});
