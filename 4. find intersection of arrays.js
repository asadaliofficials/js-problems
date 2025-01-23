// Find intersection of two arrays
function findIntersection(arr1, arr2) {
  return arr1.filter(value => arr2.includes(value));
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 4, 5, 6, 7];

console.log(findIntersection(array1, array2)); // Output: [3, 4, 5]