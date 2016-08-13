import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  model(params) {
    return this.store.findRecord('property', params.property_id);
  },
  afterModel(property, transition) {
  /**
   * Deletes the given property and removes the relationship to Entity.
   * Once the object is deleted, sends a flash message that deletion was successful.
   * @ param property: the property object to be deleted
   * @ param transition: Not used (aborted)
   */
    const flashMessages = Ember.get(this, 'flashMessages');
    let propertyId = property.id;

    property.get('entity').then(function(entity) {
      entity.get('properties').then( function(properties) {
        properties.removeObject(property.id);
        entity.save();
        property.destroyRecord();
        flashMessages.success('Property deleted!');
        Ember.Logger.log("Data is destroyed for property id: " + propertyId);
      });
    });
    transition.abort();
  }
});
