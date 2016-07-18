import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createProperty(entity) {
      entity.get('properties').forEach(function(object) {
        object.set('visible', false);
        object.save();
      });
      var property = this.store.createRecord('property', {
        name: '',
        description: '',
        type: '',
        entity: entity,
        visible: 'true'
      });
      property.save();
      entity.save();
    },
  }
});
