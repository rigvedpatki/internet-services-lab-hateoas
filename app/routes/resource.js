import Ember from 'ember';

export default Ember.Route.extend({
    flashMessages: Ember.inject.service(),
    model(params) {
        return this.store.findRecord('resource', params.resource_id);
    },
    actions: {
        save(resource) {
            resource.save();
            Ember.Logger.log("Data is saved for resource id: " + resource.id);
            Ember.get(this, 'flashMessages').success('Saved!');
        }
    }
});
