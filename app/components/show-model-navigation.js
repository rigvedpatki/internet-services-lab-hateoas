import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleModel(item){
      if (! item) {
        return;
      }
      item.toggleProperty('isExpanded', true);
    }
  }
});
