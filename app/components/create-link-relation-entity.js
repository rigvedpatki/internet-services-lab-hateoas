import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
      createLinkRelation() {
      /**
       * Creates a new Link Relation for the Entity-model of this function.
       * Closes all other Link Relations, and Properties.
       */
        var entity = this.get('model');
        entity.get('linkRelations').forEach(function(object) {
          object.set('visible', false);
          object.save();
        });
        entity.get('properties').forEach(function(object) {
          object.set('visible', false);
          object.save();
        });
        var linkrelation = this.store.createRecord('link-relation', {
          rel: '',
          entity: entity,
          method: null,
          visible: 'true'
        });
        linkrelation.save();
        entity.save();
        Ember.Logger.log("Created a new Link Relation.");
      }
    }
});
