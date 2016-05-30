import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord('resource', params.resource_id);
        //return this.store.findRecord('resource', params.resource_id);
    }
});
