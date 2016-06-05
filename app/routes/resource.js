import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord('resource', params.resource_id);
    },
    actions: {
        save(resource) {
            resource.save();
            Ember.Logger.log("Data is saved for id: " + resource.id);
        }
    }
});
