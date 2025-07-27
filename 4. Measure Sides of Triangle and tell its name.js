//? Write a function called checkTriangleType that takes three parameters representing the
// lengths of the sides of a triangle. The function should return a string indicating the type
// of triangle: "equilateral", "isosceles", or "scalene".

function checkTriangleType(first, second, third) {
	if (first === second && second === third) {
		return 'Equilateral';
	} else if (first === second || first === third || second == third) {
		return 'Isosceles';
	} else {
		return 'scalene';
	}
}

// console.log(checkTriangleType(3, 3, 3)); // Output "equilateral"
// console.log(checkTriangleType(1, 3, 1)); // Output "isosceles"
console.log(checkTriangleType(5, 8, 6)); // Output:"scalene"
