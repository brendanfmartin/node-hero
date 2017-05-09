const calc = require('./calc');
const _ = require('lodash');

const num = [
  2,3,4
];

console.log(`The result is: ${calc.sum(num)}`);
console.log(_.assign({'a': 1},{'b': 2}));