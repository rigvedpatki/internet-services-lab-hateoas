import Ember from 'ember';

export default Ember.Controller.extend({
  selectedEndpoint: null,
  selectedEndpointId: null,
  actions: {
    saveSelection: function(url){
      Ember.Logger.log("entered saveSelection");
      this.set('selectedEndpoint', url.get('endpoint_url'));
      this.set('selectedEndpointId', url.get('id'));
      Ember.Logger.log(this.get('selectedEndpoint'));
    },
    clearSelection: function(){
      Ember.Logger.log("entered clearSelection");
      this.set('selectedEndpoint', null);
      this.set('selectedEndpoint', null);
    }
  }
});
