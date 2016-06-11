import Ember from 'ember';

export default Ember.Route.extend({
  model() {
      var var_entity = this.store.createRecord('entity', {
          name: 'Sample',
          description: '',
          type: ''
      });
      var_entity.save();
      Ember.get(this, 'flashMessages').success('Entity was created!');
      return var_entity;
  },
  redirect(model, transition) {
      this.transitionTo('entity', model);
  }
});
