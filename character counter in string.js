// Count the occurrence of each character in a string
let string = "Hello World";
let charCount = {};

for (let char of string) {
  charCount[char] = (charCount[char] || 0) + 1;
}

console.log(charCount);