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
      /**
       * Reroutes the application to the given object.
       * @ param objectId: the id of the object to route to
       */
      Ember.Logger.log("Rerouting.");
      this.transitionTo(route, objectId);
    }
  }
});
