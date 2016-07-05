import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save(model) {
      model.save();
      Ember.Logger.log("Data is saved for Property with id: " + model.id);
      Ember.get(this, 'flashMessages').success('Saved!');
    },
    toggleVisibility(property) {
      property.get('visible') == true ? property.set('visible', false) : property.set('visible', true);
      property.save();
    }
  }
});