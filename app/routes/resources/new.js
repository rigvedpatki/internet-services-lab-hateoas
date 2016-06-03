import Ember from 'ember';

export default Ember.Route.extend({
    nextResourceId: 1,
    model() {
        var res = this.store.createRecord('resource', {
            id: this.nextResourceId,
            path: 'newPath',
            name: '',
            description: '',
            variables: '',
            methods: ''
        });
        res.save();
        this.set('nextResourceId', this.nextResourceId + 1);
        return res;
    },
    redirect(model, transition) {
        this.transitionTo('resource', model);
    }
});
