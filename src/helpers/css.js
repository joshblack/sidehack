import camelize from '../vendor/camelize';
import from 'core-js';

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

  return declarations.reduce((o, [prop, value]) => {
    return Object.assign(o, { [prop]: value })
  }, {})
}

function validateDeclaration([prop, value]) {
  return [
    camelize(prop),
    value.trim()
  ];
}

function clean(str) {
  return str.split(';')
    .map(l => l.trim())
    .filter((line) => line);
}

function passThrough(literals, ...substitutions) {
  let result = "";

  for (let i = 0; i < substitutions.length; i++) {
    result += literals[i];
    result += substitutions[i];
  }

  result += literals[literals.length - 1];

  return result;
}
