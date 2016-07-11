import Ember from 'ember';

export default Ember.Component.extend({
actions: {
    createLinkRelation() {
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

      var linkrelation = this.store.createRecord('link-relation', {
        registered: 'true',
        rel: 'next',
        method: method,
        visible: 'true'
      });
      linkrelation.save();
      method.save();
      Ember.Logger.log("Created a new Link Relation.");
    }
  }
});
