// Write a function findMax that takes an array of numbers
// as input and returns the maximum number in the array.
// Example usage:

// first Method:
// function findMax(arr) {
// 	return Math.max(...arr);
// }

// Second Method:
// function findMax(arr) {
// 	return arr.sort((a, b) => b - a)[0];
// }

// Third Method:
function findMax(arr) {
	return arr.reduce((max, current) => (current > max ? current : max));
}

console.log(findMax([1, 5, 3, 9, 21])); // Output: 9
console.log(findMax([-10, -5, -3, -9, -21])); // Output: -2
console.log(findMax([5])); // Output: 5
