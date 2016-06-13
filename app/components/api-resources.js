import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createMethod(resource) {
        var method = this.store.createRecord('method', {
            method: 'GET',
            name: 'myMethod',
            description: 'This is my method.',
            resource: resource
        });
        method.save();
        resource.save();
        Ember.get(this, 'flashMessages').success('Method was created!');
    }
  }
});
