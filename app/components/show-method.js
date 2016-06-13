import Ember from 'ember';

export default Ember.Component.extend({
    isShowingBody: false,
    actions: {
        save(method) {
            method.save();
            Ember.Logger.log("Data is saved for method id: " + method.id);
            const flashMessage = Ember.get(this, 'flashMessages');
            flashMessage.clearMessages();
            flashMessage.success('Saved!');
        },
        toggleBody() {
            this.toggleProperty('isShowingBody');
        }
    }
});
