import Ember from 'ember';

export default Ember.Component.extend({
  methods : [
    /**
     * The possible HTTP-methods
     */
    "DELETE",
    "GET",
    "OPTIONS",
    "PATCH",
    "POST",
    "PUT"
  ],
  actions: {
      /**
       * Saves the given method.
       * Once successful, sends the Success-flashmessage.
       * @param method: The Method-object to be saved
       */
    save(method) {
      method.save();
      Ember.Logger.log("Data is saved for method id: " + method.id);
      const flashMessage = Ember.get(this, 'flashMessages');
      flashMessage.clearMessages();
      flashMessage.success('Saved!');
    },
    toggleVisibility(method) {
      if (method.get('visible') === true ) {
        method.set('visible', false);
      }else {
        method.set('visible', true);
      }
      method.save();
    },
    routeToNewEntity(apiurl) {
      /**
       * Reroutes the application to the given object.
       * @ param apiurl: the apiurl-model for which the Entity is created
       */
      Ember.Logger.log("Routing from Model.");
      this.sendAction('routeToNewEntity', apiurl);
    }
  }
});
