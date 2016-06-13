import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createProperty(entity) {
        var property = this.store.createRecord('property', {
            name: 'newProperty',
            entity: entity
        });
        property.save();
        entity.save();
        Ember.get(this, 'flashMessages').success('Property was created!');
    }
  }
});
