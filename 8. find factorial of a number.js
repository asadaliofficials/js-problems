// Write a function factorial that takes a non-negative
// integer num as input and returns its factorial. The factorial of 0 is defined as 1.

// Here are some examples of factorial calculations:
// factorial(0) => 1
// factorial (1) => 1
// factorial (2) => 2
// factorial (3) => 6
// factorial(4) => 24

function getFactorial(num) {
	let factorial = num;
	for (let i = num - 1; i >= 1; i--) {
		factorial *= i;
	}
	return factorial;
}

console.log(getFactorial(3));
