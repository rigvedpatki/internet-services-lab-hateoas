import Ember from 'ember';

export default Ember.Component.extend({
  types : [
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
      model.save();
      Ember.Logger.log("Data is saved for Query Parameter id: " + model.id);
      Ember.get(this, 'flashMessages').success('Saved!');
    },
    toggleVisibility(qParam) {
      qParam.get('visible') == true ? qParam.set('visible', false) : qParam.set('visible', true);
      qParam.save();
    }
  }
});
