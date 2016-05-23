import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        createResource() {
            var resource = this.get('store').createRecord('resource', {
                path: '/path',
                name: 'New path',
                description: 'My new path.',
                variables: '',
                methods: ''
            });
            console.log('done');
        }
    }
});
