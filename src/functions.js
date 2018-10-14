function random(min, max) {
	function isANumber(num) {
		return Number(num) === num && Number.isFinite(num);
	}
	if (isANumber(min) && isANumber(max)) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
	return 'Input parameters must be valid numbers';
}

function minIntegerFromArray(array) {
	if (array.length < 6) {
		return 'Array must have more than five values';
	}
	const min = array.reduce((acc, val) => {
		if (Number.isInteger(val)) {
			if (val < acc) return val;
			return acc;
		}
		return false;
	}, 0);
	if (min === false) console.log('Array does not contain any integer');
	return min;
}

function minIntegerFromString(string) {
	if (string.length < 10) return 'String should have more than 10 characters';
	return string.match(/\d+/g).reduce((acc, val) => (val < acc ? val : acc));
}

function concatStringsByLength(arrayOfStrings, type) {
	const arr = [...arrayOfStrings];
	if (type) {
		arr.sort((a, b) => b.length - a.length);
	} else {
		arr.sort((a, b) => a.length - b.length);
	}
	return arr.reduce((acc, str) => [...acc, ...str], []).join('');
}

module.exports = {
	random,
	minIntegerFromArray,
	minIntegerFromString,
	concatStringsByLength,
};
