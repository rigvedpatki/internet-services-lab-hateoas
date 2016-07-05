import Ember from 'ember';

export default Ember.Route.extend({
    model() {
      var res = this.store.createRecord('resource', {
        path: '/newPath',
        name: 'newPath',
        description: 'This is my new Path.'
      });
      res.save();
      
      return res;
    },
    redirect(model, transition) {
      this.transitionTo('resource', model.id);
    }
});
