import Ember from 'ember';

export default Ember.Component.extend({
  methods : [
    "DELETE",
    "GET",
    "OPTIONS",
    "PATCH",
    "POST",
    "PUT"
  ],
  actions: {
    save(method) {
      method.save();
      Ember.Logger.log("Data is saved for method id: " + method.id);
      const flashMessage = Ember.get(this, 'flashMessages');
      flashMessage.clearMessages();
      flashMessage.success('Saved!');
    },
    toggleVisibility(method) {
      method.get('visible') == true ? method.set('visible', false) : method.set('visible', true);
      method.save();
    }
  }
});
