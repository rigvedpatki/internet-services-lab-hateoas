import Ember from 'ember';

export default Ember.Component.extend({
  isShowingTree:false,
  actions: {
    toggleBody(){
      this.toggleProperty('isShowingTree');
    }
  }
});
