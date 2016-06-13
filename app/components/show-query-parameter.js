import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        save(model) {
            model.save();
            Ember.Logger.log("Data is saved for Query Parameter id: " + model.id);
            Ember.get(this, 'flashMessages').success('Saved!');
        },
        toggleBody() {
            this.toggleProperty('isShowingBody');
        }
    }
});
