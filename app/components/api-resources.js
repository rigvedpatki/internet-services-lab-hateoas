import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createMethod(resource) {
        var method = this.store.createRecord('method', {
            method: 'newMethod',
            name: 'This is my method.',
            description: '',
            resource: resource,
            queryparams: '',
            responses: ''
        });
        method.save();
        resource.save();
        Ember.get(this, 'flashMessages').success('Method was created!');
    }
  }
});
