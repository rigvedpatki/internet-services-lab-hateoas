import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var response = this.store.createRecord('response', {
            status: '200-OK',
            name: 'myResponse',
            description: 'My OK Response'
        });
        response.save();
        Ember.get(this, 'flashMessages').success('Response was created!');
        return response;
    }
});
