import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  model(params) {
    return Ember.RSVP.hash({
      resource: this.store.findRecord('resource', params.resource_id),
      entities: this.store.findAll('entity')
    });
  },
  actions: {
    save(resource) {
      resource.save();
      Ember.Logger.log("Data is saved for resource id: " + resource.id);
      Ember.get(this, 'flashMessages').success('Saved!');
    }
  }
});
