import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var linkRelation = this.store.createRecord('link-relation', {
            rel: 'next',
            registered: true,
            visible: true
        });
        linkRelation.save();
        return linkRelation;
    }
});
