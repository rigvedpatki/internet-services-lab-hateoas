import Ember from 'ember';

export default Ember.Route.extend({
  model() {
      var property = this.store.createRecord('property', {
          property: 'newProperty',
          name: '',
          description: '',
          queryparams: '',
          responses: ''
      });
      property.save();
      Ember.get(this, 'flashMessages').success('Property was created!');
      return property;
  },
  redirect(model, transition) {
      this.transitionTo('property', model);
  }
});
