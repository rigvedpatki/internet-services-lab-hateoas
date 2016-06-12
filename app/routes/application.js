import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    //return this.store.findAll('resource');
    return Ember.RSVP.hash({
      resources: this.store.findAll('resource'),
      entities: this.store.findAll('entity')
    });
  }
});
