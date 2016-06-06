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
        Ember.get(this, 'flashMessages').success('Resource was created!');
        return res;
    },
    redirect(model, transition) {
        this.transitionTo('resource', model);
    }
});
