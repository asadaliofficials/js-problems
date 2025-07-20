// Write a function arraysAreEqual that takes two arrays
// arr1 and arr2 as input and returns true if the arrays are
// equal (i.e., contain the same elements in the same order),
// and false otherwise.

function arraysAreEqual(arr1, arr2) {
	if (arr1.length === 0 || arr2.length === 0) return 'empty arrays';
	if (arr1.length !== arr2.length) return 'not match';
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}
	return true;
}

console.log(arraysAreEqual([1, 2, 3], [1, 2, 3]));
console.log(arraysAreEqual([1, 2, 3], [1, 2, 1]));
console.log(arraysAreEqual([1, 3], [1, 3, 3]));
console.log(arraysAreEqual([], [1, 3, 3]));
