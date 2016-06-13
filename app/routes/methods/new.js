import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var method = this.store.createRecord('method', {
            method: 'newMethod',
            name: '',
            description: '',
            resource: '',
            queryparams: '',
            responses: ''
        });
        method.save();
        Ember.get(this, 'flashMessages').success('Method was created!');
        return method;
    },
    redirect(model, transition) {
        this.transitionTo('method', model);
    }
});
