import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createProperty(entity) {
      /**
       * Creates a new Property for the given Entity.
       * Closes all other Link Relations.
       */
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
