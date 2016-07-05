import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createProperty(entity) {
      Ember.Logger.log("Creating property.");
      var property = this.store.createRecord('property', {
        name: 'newProperty',
        entity: entity,
        visible: 'true'
      });
      property.save();
      entity.save();
    },
  }
});
