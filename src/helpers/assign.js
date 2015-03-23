/**
 * Assigns multiple objects to an empty base object
 * @param  {Object} objects
 * @return {Object}
 */
export function assign(...objects) {
  return Object.assign({}, ...objects);
}
