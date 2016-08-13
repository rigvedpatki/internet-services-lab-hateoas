import Ember from 'ember';

export default Ember.Component.extend({
  types : [
    /**
     * The possible object types a Query Parameter can have.
     */
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
  didReceiveAttrs() {
      /**
       * Adds all the entities of the selected api to the types-list.
       */
    Ember.Logger.log("Starting to push entities.");
    var types = this.get('types');
    this.get('entities').forEach(function(entity) {
      Ember.Logger.log("Pushing entity.");
      types.pushObject(entity.get('name'));
    });
  },
  actions: {
    save(model) {
      /**
       * Saves the given Query Parameter.
       * Once successful, sends the Success-flashmessage.
       * @param model: The Query Parameter-object to be saved
       */
      model.save();
      Ember.Logger.log("Data is saved for Query Parameter id: " + model.id);
      Ember.get(this, 'flashMessages').success('Saved!');
    },
    toggleVisibility(qParam) {
      if (qParam.get('visible') === true) {
        qParam.set('visible', false);
      }else {
        qParam.set('visible', true);
      }
      qParam.save();
    }
  }
});
