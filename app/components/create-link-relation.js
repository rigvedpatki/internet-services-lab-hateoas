import Ember from 'ember';

export default Ember.Component.extend({
actions: {
    createLinkRelation() {
      var method = this.get('model');
      var linkrelation = this.store.createRecord('link-relation', {
		registered: 'false',
		self_defined: 'true',
		method: method,
        visible: 'true'
      });
      linkrelation.save();
      method.save();
    }
  }
});
