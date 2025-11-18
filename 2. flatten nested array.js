// Flatten a nested array
function flattenArray(arr) {
  return arr.flat(Infinity);
}

let nestedArray = [1, [2, 3], [4, [5, 6]], 7];
console.log(flattenArray(nestedArray)); // Output: [1, 2, 3, 4, 5, 6, 7]