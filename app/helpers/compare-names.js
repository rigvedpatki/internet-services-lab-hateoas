import Ember from 'ember';

export function compareNames(params/*, hash*/) {
  return params[0].trim().toLowerCase() === params[1].trim().toLowerCase();
}

export default Ember.Helper.helper(compareNames);
