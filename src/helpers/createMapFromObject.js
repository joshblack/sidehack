import { Map } from 'core-js/es6/collections';

/**
 * Create a Map from an Object
 * @param  {Object} o
 * @return {Map}
 */
export function createMapFromObject(o) {
  const definitions = Object.keys(o).map((key) => {
    return [key, o[key]]
  });

  return new Map(definitions)
}
