import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createQueryParameter() {
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

      var queryParam = this.store.createRecord('query-parameter', {
        name: 'QueryParameter',
        type: 'String',
        description: 'This is my query parameter.',
        example: '',
        method: method,
        visible: 'true'
      });
      queryParam.save();
      method.save();
    }
  }
});
