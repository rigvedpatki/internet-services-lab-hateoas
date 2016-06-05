import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var res = this.store.createRecord('resource', {
            path: 'newPath',
            name: '',
            description: '',
            variables: '',
            methods: ''
        });
        res.save();
        return res;
    },
    redirect(model, transition) {
        this.transitionTo('resource', model);
    }
});
