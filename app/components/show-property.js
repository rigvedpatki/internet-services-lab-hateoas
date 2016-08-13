import Ember from 'ember';

export default Ember.Component.extend({
  types: [
    /**
     * The possible object types a Property can have.
     */
    "URL",
    "String",
    "Integer",
    "Boolean",
    "Double",
    "Long",
    "Float",
    "Short",
    "Byte",
    "Timestamp"
  ],
  actions: {
    save(model) {
      /**
       * Saves the given method.
       * Once successful, sends the Success-flashmessage.
       * @param model: The Property-object to be saved
       */
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
