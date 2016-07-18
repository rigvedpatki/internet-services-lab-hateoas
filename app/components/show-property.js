import Ember from 'ember';

export default Ember.Component.extend({
  types: [
    "URL"
  ],
  actions: {
    save(model) {
      model.save();
      Ember.Logger.log("Data is saved for Property with id: " + model.id);
      Ember.get(this, 'flashMessages').success('Saved!');
    },
    toggleVisibility(property) {
      if (property.get('visible') === true) {
        property.set('visible', false);
      }else {
        property.set('visible', true);
      }
      property.save();
    }
  }
});
