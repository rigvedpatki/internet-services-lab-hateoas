import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var queryParam = this.store.createRecord('query-parameter', {
            name: 'QueryParameter',
            type: 'String',
            description: 'My queryparameter',
            example: ''
        });
        queryParam.save();
        return queryParam;
    }
});
