// Remove falsy values from an array
function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

let mixedArray = [0, 1, false, 2, '', 3, null, undefined, 4, NaN, 5];
console.log(removeFalsyValues(mixedArray)); // Output: [1, 2, 3, 4, 5]