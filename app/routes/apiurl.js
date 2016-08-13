import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  model(params) {
      return this.store.findRecord('apiurl', params.apiurl_id);
  },
  actions: {
    saveSelectionProtocol(selection,component){
      this.set('protocol',selection);
    },
    saveSelectionAuthProtocol(selection,component){
      this.set('authProtoName', selection);
    },
    save(apiurl) {
      /**
       * Saves the given apiurl.
       * Once the object is saved, sends a flash message that deletion was successful.
       * @ param apiurl: the apiurl object to be saved
       */
      var endpoint_url = null;
      var port = null;
        if (apiurl.get('protocol') === "HTTP/1.1"){
          endpoint_url = "http://"+apiurl.get('domain')+apiurl.get('base_path');
          port = 80;
        }else if (apiurl.get('protocol') === "HTTPS/1.1") {
          endpoint_url = "https://"+apiurl.get('domain')+apiurl.get('base_path');
          port = 443;
        }
        apiurl.set('port',port);
        apiurl.set('endpoint_url',endpoint_url);
        apiurl.save();
        this.controllerFor('application').send('saveSelection', apiurl);
        Ember.Logger.log("Data is saved for API URL id: " + apiurl.id);
        Ember.get(this, 'flashMessages').success('Saved!');
      }
  }
});
