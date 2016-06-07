import Ember from 'ember';

export default Ember.Route.extend({
    flashMessages: Ember.inject.service(),
    model(params) {
        return this.store.findRecord('method', params.method_id);
    },
    afterModel(method, transition) {
        let resourceId = "1";
        let methodId = method.id;

        method.get('resource').then(function(resource) {
            resourceId = resource.id;
            resource.get('methods').then( function(methods) {
                methods.removeObject(method.id);
                resource.save();
                method.destroyRecord();
                
                Ember.Logger.log("Data is destroyed for method id: " + methodId);
                Ember.get(this, 'flashMessages').success('Method was deleted!');
            });
        });
        this.transitionTo('resource', resourceId);
    }
});
