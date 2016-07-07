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
      Ember.Logger.log("Data is saved for Link Relation id: " + model.id);
      Ember.get(this, 'flashMessages').success('Saved!');
    },
    toggleVisibility(linkRelation) {
      linkRelation.get('visible') == true ? linkRelation.set('visible', false) : linkRelation.set('visible', true);
      linkRelation.save();
    }
  }
});
