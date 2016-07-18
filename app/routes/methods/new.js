import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var method = this.store.createRecord('method', {
            method: '',
            description: '',
            resource: '',
            queryparams: '',
            responses: ''
        });
        method.save();
        return method;
    },
    redirect(model, transition) {
        this.transitionTo('method', model);
    }
});
