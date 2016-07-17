import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      resources: this.store.findAll('resource'),
      entities: this.store.findAll('entity'),
      apiurls: this.store.findAll('apiurl')
    });
  },
  actions: {
    reroute(route, objectId) {
      Ember.Logger.log("Rerouting.");
      this.transitionTo(route, objectId);
    }
  }
});
