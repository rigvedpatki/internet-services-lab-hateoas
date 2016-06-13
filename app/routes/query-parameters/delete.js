import Ember from 'ember';

export default Ember.Route.extend({
    flashMessages: Ember.inject.service(),
    model(params) {
        return this.store.findRecord('query-parameter', params.qparam_id);
    },
    afterModel(queryParameter, transition) {
        const flashMessages = Ember.get(this, 'flashMessages');
        let qparamId = queryParameter.id;

        queryParameter.get('method').then(function(method) {
            method.get('queryParams').then( function(queryParams) {
                queryParams.removeObject(qparamId);
                method.save();
                queryParameter.destroyRecord();
                
                flashMessages.success('Query Parameter deleted!');
                Ember.Logger.log("Data is destroyed for queryparameter with id: " + qparamId);
            });
        });
        transition.abort();
    }
});
