import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createQueryParameter() {
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

      var queryParam = this.store.createRecord('query-parameter', {
        name: '',
        type: 'String',
        description: '',
        example: '',
        method: method,
        visible: 'true'
      });
      queryParam.save();
      method.save();
    }
  }
});
