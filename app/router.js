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
  this.route('queryParameters', function() {
      this.route('new');
      this.route('delete', { path: '/queryparameters/delete/:qparam_id' });
  });
  this.route('responses', function() {
      this.route('new');
      this.route('delete', { path: '/responses/delete/:response_id' });
  });
  this.route('resource', { path: '/resources/:resource_id' });
  this.route('method', { path: '/methods/:method_id' });
  this.route('about');

  this.route('entity', { path: '/entities/:entity_id' });
  this.route('entities', function() {
    this.route('new');
    this.route('delete', { path: '/entities/delete/:enitity_id' });
  });
  this.route('property', { path: '/properties/:property_id' });
  this.route('properties', function() {
    this.route('new');
    this.route('delete', { path: '/properties/delete/:property_id' });
  });

  this.route('contact');
  this.route('help');

  this.route('apiurl', { path: '/apiurls/:apiurl_id' });

  this.route('apiurls', function() {
    this.route('new');
    this.route('delete', { path: '/apiurls/delete/:apiurl_id' });
  });
});

export default Router;
