function isANumber(num) {
	return Number(num) === num && Number.isFinite(num);
}

function random(min, max) {
	let [low, high] = [min, max];
	if (max < min) {
		low = max;
		high = min;
	}
	if (isANumber(low) && isANumber(high)) {
		return Math.floor(Math.random() * (high - low + 1) + low);
	}
	return 'Input parameters must be valid numbers';
}

function minIntegerFromArray(array) {
	if (array.length < 6) {
		console.log('Array must have more than five values');
	}
	const arrIntegers = array.filter(val => Number.isInteger(val));
	if (!arrIntegers.length) return 'Array does not contain any integer';
	let min = arrIntegers[0];
	arrIntegers.forEach((val) => {
		if (val < min) min = val;
	});
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
	return arr.join('');
}

module.exports = {
	random,
	minIntegerFromArray,
	minIntegerFromString,
	concatStringsByLength,
};
