import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  model(params) {
    return this.store.findRecord('entity', params.entity_id);
  },
  actions: {
    save(entity) {
      entity.save();
      Ember.Logger.log("Data is saved for entity id: " + entity.id);
      Ember.get(this, 'flashMessages').success('Saved!');
    }
  }
});
