import Ember from 'ember';

export default Ember.Component.extend({
    nextResourceId: 1,
    actions: {
        createResource() {
            var resource = this.get('store').createRecord('resource', {
                id: this.nextResourceId,
                path: '/path',
                name: 'New path',
                description: 'My new path.',
                variables: '',
                methods: ''
            });
            resource.save();
            this.set('nextResourceId', this.nextResourceId + 1);
            console.log('done');
        }
    }
});
