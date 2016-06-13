import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createQueryParameter() {
        var method = this.get('model');
        var queryParam = this.store.createRecord('query-parameter', {
            name: 'QueryParameter',
            type: 'String',
            description: 'This is my query parameter.',
            example: '',
            method: method
        });
        queryParam.save();
        method.save();
        Ember.get(this, 'flashMessages').success('Query Parameter was created!');
    }
  }
});
