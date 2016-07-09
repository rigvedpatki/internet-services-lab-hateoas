import Ember from 'ember';

export default Ember.Component.extend({
actions: {
    createLinkRelation() {
      var method = this.get('model');
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
