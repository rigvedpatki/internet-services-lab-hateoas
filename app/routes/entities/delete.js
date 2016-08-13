import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  model(params) {
      return this.store.findRecord('entity', params.entity_id);
  },
  afterModel(entity, transition) {
    /**
     * Deletes the given entity and every Property linked to it.
     * Once the objects are deleted, transitions to Application and
     * sends a flash message that the deletion was successful.
     * @ param entity: the entity object to be deleted
     * @ param transition: Not used
     */
    let entityId = entity.id;
    entity.get('properties').forEach( function(property) {
      property.destroyRecord();
    });
    entity.get('api').then(function(api) {
      api.get('entities').then( function(entities) {
        entities.removeObject(entity.id);
        api.save();
        entity.destroyRecord();
        Ember.Logger.log("Data is destroyed for id: " + entityId);
        Ember.get(this, 'flashMessages').success('Entity was deleted!');
        this.transitionTo('application');
      });
    });
  }
});
