import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('resources', function() {
      this.route('new');
  });
  this.route('resource', { path: '/resources/:resource_id' });
  this.route('representations');
});

export default Router;
