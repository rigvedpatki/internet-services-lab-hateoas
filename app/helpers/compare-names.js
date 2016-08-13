import Ember from 'ember';

export function compareNames(params) {
      /**
      * Compares 2 strings and returns if they are the same.
      * The helper injected to the application with "compareNames"
       * @param params: A list containing 2 strings
       */
  return params[0].trim().toLowerCase() === params[1].trim().toLowerCase();
}

export default Ember.Helper.helper(compareNames);
