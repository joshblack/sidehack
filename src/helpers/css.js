import camelize from '../vendor/camelize';
import from 'core-js';

function passThrough(literals, ...substitutions) {
  let result = '';

  for (let i = 0; i < substitutions.length; i++) {
    result += literals[i];
    result += substitutions[i];
  }

  result += literals[literals.length - 1];

  return result;
}

function clean(str) {
  return str.split(';')
    .map(l => l.trim())
    .filter((line) => line);
}

function validateDeclaration([prop, value]) {
  return [
    camelize(prop),
    value.trim()
  ];
}

/**
 * Takes in a Template String and returns a matching object of styles
 * @param  {String}  literals
 * @param  {Array}   substitutions
 * @return {Object}
 */
export function css(literals, ...substitutions) {
  let declarations = clean(passThrough(literals, ...substitutions))
        .map((declaration) => declaration.split(':'))
        .map(validateDeclaration);

  return Object.freeze(declarations.reduce((o, [prop, value]) => {
    return Object.assign(o, { [prop]: value });
  }, {}));
}

