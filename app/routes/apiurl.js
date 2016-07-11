import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  model(params) {
      return this.store.findRecord('apiurl', params.apiurl_id);
  },
  actions: {
    saveSelection(selection,componenet){
      this.set('protocol',selection);
    },
    generateEndpoint(apiurl){
        Ember.Logger.log("log: " + apiurl.get('protocol'));
      var endpoint_url = null;
        if (apiurl.get('protocol') == "HTTP/1.1"){
          Ember.Logger.log("log: " + apiurl.id);
          endpoint_url = "http://"+apiurl.get('domain')+apiurl.get('base_path');
        }else if (apiurl.get('protocol') == "HTTPS/1.1") {
          Ember.Logger.log("log: " + apiurl.id);
          endpoint_url = "http://"+apiurl.get('domain')+apiurl.get('base_path');
        }
        apiurl.set('endpoint_url',endpoint_url);
    },
      save(apiurl) {
          apiurl.save();
          Ember.Logger.log("Data is saved for API URL id: " + apiurl.id);
          Ember.get(this, 'flashMessages').success('Saved!');
      }

  }
});
