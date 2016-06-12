import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  model(params) {
      return this.store.findRecord('entity', params.entity_id);
  },
  afterModel(entity, transition) {
      let entityId = entity.id;
      entity.destroyRecord();
      Ember.Logger.log("Data is destroyed for id: " + entityId);
      Ember.get(this, 'flashMessages').success('Entity was deleted!');
      this.transitionTo('application');
  }
});
