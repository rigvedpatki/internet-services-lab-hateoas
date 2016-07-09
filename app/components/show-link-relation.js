import Ember from 'ember';

export default Ember.Component.extend({
  willRender() {
    Ember.Logger.log("Initializing.");
    this.set('hints', {
      "next": "Indicates that the link's context is a part of a series, and that the next in the series is the link target."
    });
  },
  actions: {
    save(model) {
      model.save();
      Ember.Logger.log("Data is saved for Link Relation id: " + model.id);
      Ember.get(this, 'flashMessages').success('Saved!');
    },
    toggleVisibility(linkRelation) {
      linkRelation.get('visible') === true ? linkRelation.set('visible', false) : linkRelation.set('visible', true);
      linkRelation.save();
    }
  }
});
