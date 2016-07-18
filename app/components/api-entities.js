import Ember from 'ember';

export default Ember.Component.extend({
  routing: Ember.inject.service('-routing'),
  actions: {
    createEntity(api) {
      var entity = this.store.createRecord('entity', {
        name: '',
        description: '',
        api: api
      });
      entity.save();
      api.save();
      this.sendAction('reroute', 'entity', entity.id);
    },
    createProperty(entity) {
      var property = this.store.createRecord('property', {
        name: '',
        entity: entity
      });
      property.save();
      entity.save();
    }
  }
});
