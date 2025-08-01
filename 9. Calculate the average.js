// Write a function that takes an array of numbers as array and return the average of all numbers

function getAverage(arr) {
	let total = arr.reduce((accum, elem) => accum + elem, 0);
	return total / arr.length;
}

console.log(getAverage([1,2,3,4]));
