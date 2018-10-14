const functions = require('./functions');
const config = require('./config');

const {
	min, max, array, string, arrayOfStrings, type,
} = config;
const {
	random,
	minIntegerFromArray,
	minIntegerFromString,
	concatStringsByLength,
} = functions;

const randNum = random(min, max);
const minIntFromArr = minIntegerFromArray(array);
const minIntFromStr = minIntegerFromString(string);
const concatStrings = concatStringsByLength(arrayOfStrings, type);
const concatMsg = type ? 'longest to shortest' : 'shortest to longest';

console.log({ min, max });
console.log(`( ${randNum} ) random number in range - inclusive`);

console.log('\n', array);
console.log(`( ${minIntFromArr} ) minimum integer from array`);

console.log(`\n'${string}'`);
console.log(`( ${minIntFromStr} ) minimum integer from string`);

console.log('\n', arrayOfStrings);
console.log(`( '${concatStrings}' ) concatenated strings from ${concatMsg}`);
