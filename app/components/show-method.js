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
  hasValidationError: false,
  errorMessage: "Name must begin with a letter and may only contain letters, numbers or characters '-', '_', ':' and '.'.",
  actions: {
    save(method) {
      var pattern = new RegExp("[a-zA-Z][a-zA-Z0-9.:\-_]*"); // matches a text starting with a letter, and may only contain letters, numbers or characters '-', '_', ':' and '.'
      var ans = pattern.test(this.get('model').get('name'));
      if( !ans) {
        this.set('hasValidationError', true);
        return;
      }
      this.set('hasValidationError', false);
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
