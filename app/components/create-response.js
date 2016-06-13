import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createResponse() {
        var method = this.get('model');
        var response = this.store.createRecord('response', {
            status: '200-OK',
            name: 'myOKResponse',
            description: 'This is my OK response.',
            entity: '',
            method: method
        });
        response.save();
        method.save();
        Ember.get(this, 'flashMessages').success('Response was created!');
    }
  }
});
