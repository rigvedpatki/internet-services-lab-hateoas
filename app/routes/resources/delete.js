import Ember from 'ember';

export default Ember.Route.extend({
    flashMessages: Ember.inject.service(),
    model(params) {
        return this.store.findRecord('resource', params.resource_id);
    },
    afterModel(resource, transition) {
        let resId = resource.id;
        resource.destroyRecord();
        Ember.Logger.log("Data is destroyed for id: " + resId);
        Ember.get(this, 'flashMessages').success('Resource was deleted!');
        this.transitionTo('application');
    }
});
