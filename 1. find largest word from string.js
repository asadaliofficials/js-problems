// Find the largest word from a string using JavaScript
let string = 'The quick brown fox jumped over the lazy dog';

let words = string.split(' ');

let longestWord = words.reduce(
  (accumulator, currentWord) =>
    accumulator.length < currentWord.length ? currentWord : accumulator,
  ''
);
console.log(longestWord);