import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  model(params) {
      return this.store.findRecord('apiurl', params.apiurl_id);
  },
  actions: {
      save(apiurl) {
          apiurl.save();
          Ember.Logger.log("Data is saved for API URL id: " + apiurl.id);
          Ember.get(this, 'flashMessages').success('Saved!');
      }
  }
});
