import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var queryParam = this.store.createRecord('query-parameter', {
            name: '',
            type: 'String',
            description: '',
            example: ''
        });
        queryParam.save();
        return queryParam;
    }
});
