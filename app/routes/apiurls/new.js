import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var var_apiurl = this.store.createRecord('apiurl', {
      protocol: '',
      port: '',
      domain: '',
      base_path:'',
      endpoint_url: ''
    });
    var_apiurl.save();
    return var_apiurl;
  },
  redirect(model, transition) {
    this.transitionTo('apiurl', model);
  }
});
