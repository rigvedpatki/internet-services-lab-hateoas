import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        save(model) {
            model.save();
            Ember.Logger.log("Data is saved for Response id: " + model.id);
            Ember.get(this, 'flashMessages').success('Saved!');
        }
    }
});
