import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord('resource', params.resource_id);
    },
    actions: {
        save() {
            Ember.Logger.log("Data is saved.");
        }
    }
});
