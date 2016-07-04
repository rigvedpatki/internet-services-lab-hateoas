import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      resources: this.store.findAll('resource'),
      entities: this.store.findAll('entity'),
      apiurl: this.store.findAll('api-url')
    });
  }
});
