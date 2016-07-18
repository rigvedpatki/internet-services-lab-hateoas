import Ember from 'ember';

export default Ember.Route.extend({
  model() {
      var property = this.store.createRecord('property', {
          property: '',
          name: '',
          description: '',
          queryparams: '',
          responses: ''
      });
      property.save();
      return property;
  },
  redirect(model, transition) {
      this.transitionTo('property', model);
  }
});
