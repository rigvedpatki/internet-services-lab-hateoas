import Ember from 'ember';

export default Ember.Component.extend({
  routing: Ember.inject.service('-routing'),
  actions: {
    createEntity(api) {
      var entity = this.store.createRecord('entity', {
        name: 'New Entity',
        description: '',
        api: api
      });
      entity.save();
      api.save();
      Ember.Logger.log("Starting to reroute.");
      this.sendAction('reroute', 'entity', entity.id);
    },
    createProperty(entity) {
      var property = this.store.createRecord('property', {
        name: 'newProperty',
        entity: entity
      });
      property.save();
      entity.save();
    }
  }
});
