import Ember from 'ember';

export default Ember.Route.extend({
    flashMessages: Ember.inject.service(),
    model(params) {
        return this.store.findRecord('method', params.method_id);
    },
    afterModel(method, transition) {
        const flashMessages = Ember.get(this, 'flashMessages');
        let methodId = method.id;

        method.get('resource').then(function(resource) {
            resource.get('methods').then( function(methods) {
                methods.removeObject(method.id);
                resource.save();
                method.destroyRecord();
                
                flashMessages.success('Method deleted!');
                Ember.Logger.log("Data is destroyed for method id: " + methodId);
            });
        });
        transition.abort();
    }
});
