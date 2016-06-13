import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        save(method) {
            method.save();
            Ember.Logger.log("Data is saved for method id: " + method.id);
            const flashMessage = Ember.get(this, 'flashMessages');
            flashMessage.clearMessages();
            flashMessage.success('Saved!');
        }
    }
});
