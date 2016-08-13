import Ember from 'ember';

export default Ember.Component.extend({
  routing: Ember.inject.service('-routing'),
  actions: {
    createEntity(api) {
      /**
       * Creates a new empty Entity.
       * Once the object is created, reroutes to show that Entity.
       * @param api: the apiurl object for which the Entity is created
       */
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
      /**
       * Creates a new Property for the given Entity..
       * @ param entity: the Entity object for which the new
       *   Property is created
       */
      var property = this.store.createRecord('property', {
        name: '',
        entity: entity
      });
      property.save();
      entity.save();
    }
  }
});
