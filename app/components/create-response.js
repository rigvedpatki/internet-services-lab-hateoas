import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createResponse() {
        var method = this.get('model');
        var response = this.store.createRecord('response', {
            status: '200 - OK',
            name: 'myOKResponse',
            description: 'This is my OK response.',
            method: method,
            visible: 'true'
        });
        response.save();
        method.save();
    }
  }
});
