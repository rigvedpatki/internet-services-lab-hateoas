import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  model(params) {
      return this.store.findRecord('property', params.property_id);
  },
  actions: {
      save(property) {
          property.save();
          Ember.Logger.log("Data is saved for property id: " + property.id);
          Ember.get(this, 'flashMessages').success('Saved!');
      }
  }
});
