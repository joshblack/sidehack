/**
 * Takes in a Template String and returns a matching styles object
 * @param  {String}  literals
 * @param  {Array}   substitutions
 * @return {Object}
 */
export function css(literals, ...substitutions) {
  let rules = clean(passThrough(literals, ...substitutions));
  let styles = rules.map((line) => line.split(':')).map(validateStyle);

  return styles.reduce((o, [prop, def]) => {
    return Object.assign(o, { [prop]: def })
  }, {})
}

function validateStyle([prop, def]) {
  return [prop, def.replace(/;$/, '').trim()];
}

function clean(str) {
  return str.split('\n')
    .map((line) => line.trim())
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
