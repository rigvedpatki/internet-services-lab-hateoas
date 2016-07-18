import Ember from 'ember';

export default Ember.Controller.extend({
  selectedEndpoint: null,
  selectedAPI: null,
  actions: {
    createAPI: function() {
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
      Ember.Logger.log("entered saveSelection");
      this.set('selectedEndpoint', url.get('endpoint_url'));
      this.set('selectedAPI', url);
      Ember.Logger.log(this.get('selectedEndpoint'));
    },
    clearSelection: function(){
      Ember.Logger.log("entered clearSelection");
      this.set('selectedEndpoint', null);
      this.set('selectedEndpoint', null);
    }
  }
});
