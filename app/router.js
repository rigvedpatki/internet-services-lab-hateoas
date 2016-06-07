import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('resources', function() {
      this.route('new');
      this.route('delete', { path: '/resources/delete/:resource_id' });
  });
  this.route('methods', function() {
      this.route('new');
      this.route('delete', { path: '/methods/delete/:method_id' });
  });
  this.route('resource', { path: '/resources/:resource_id' });
  this.route('method', { path: '/methods/:method_id' });
  this.route('representations');
});

export default Router;
