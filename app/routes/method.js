import Ember from 'ember';

export default Ember.Route.extend({
    flashMessages: Ember.inject.service(),
    model(params) {
        return this.store.findRecord('method', params.method_id);
    },
    actions: {
        save(method) {
            method.save();
            Ember.Logger.log("Data is saved for method id: " + method.id);
            Ember.get(this, 'flashMessages').success('Saved!');
        }
    }
});
