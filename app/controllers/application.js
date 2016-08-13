import Ember from 'ember';

export default Ember.Controller.extend({
  selectedEndpoint: null,
  selectedAPI: null,
  actions: {
    createAPI: function() {
      /**
       * Creates a new empty apiurl- object and sets it as the selected API.
       */
      var var_apiurl = this.store.createRecord('apiurl', {
        protocol: '',
        port: '',
        domain: '',
        base_path:'',
        endpoint_url: '',
        generalInfoName: '',
        generalInfoDescription: '',
        generalInfoLicenseName: '',
        generalInfoLicenseURL:'',
        authProtoName: '',
        authProtoCode: ''
      });
      var_apiurl.save();
      this.set('selectedAPI', var_apiurl);
    },
    saveSelection: function(url){
      /**
       * Saves the given apiurl and sets it selected.
       */
      Ember.Logger.log("entered saveSelection");
      this.set('selectedEndpoint', url.get('endpoint_url'));
      this.set('selectedAPI', url);
      Ember.Logger.log(this.get('selectedEndpoint'));
    },
    clearSelection: function(){
      /**
       * Clears the selection of apiurl by setting selectedEndpoint
       * and SelectedAPI null.
       */
      Ember.Logger.log("entered clearSelection");
      this.set('selectedEndpoint', null);
      this.set('selectedAPI', null);
    }
  }
});
