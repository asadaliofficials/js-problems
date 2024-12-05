// Remove duplicate numbers from an array
let numbers = [1, 2, 3, 2, 4, 1, 5, 3];

// Using Set to remove duplicates
let uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]