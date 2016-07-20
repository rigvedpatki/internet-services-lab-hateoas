import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
      createLinkRelation() {
        var entity = this.get('model');
        Ember.Logger.log(this.toString());
        entity.get('linkRelations').forEach(function(object) {
          object.set('visible', false);
          object.save();
        });
        Ember.Logger.log("Entered new Link Relation.");
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
