import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  createResponse() {
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
        name: 'myOKResponse',
        description: 'This is my OK response.',
        method: method,
        visible: 'true'
      });
      response.save();
      method.save();
    }
  }
});
