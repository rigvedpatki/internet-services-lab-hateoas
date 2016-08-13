import Ember from 'ember';

/**
 * Compares 2 given values and returns if they are equal.
 * Can be injected to the application with "eq".
 * @param params: List containing 2 comparable objects
 */
const eq = (params) => params[0] === params[1];

export default Ember.Helper.helper(eq);
