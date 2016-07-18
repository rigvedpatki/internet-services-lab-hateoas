import Ember from 'ember';

export default Ember.Component.extend({
  isExpanded: true,
  actions: {
    toggleModel(item){
      item.toggleProperty('isExpanded');
    },
    showMethod(method) {
      method.set('visible', true);
    }
  }
});
