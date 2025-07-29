// Write a function to determine whether a given string is
// a palindrome or not. A palindrome is a word, phrase,
// number, or other sequence of characters that reads the same
// forward and backward, ignoring spaces, punctuation, and
// capitalization.

// First Method
// function isPalindrome(string) {
// 	let rawCharacters = string.toLowerCase().split('');
// 	let characters = rawCharacters.filter(c => c !== ' ' && c !== ',');
// 	for (let i = 0; i < length; i++) {
// 		if (characters[i] !== characters[length - 1 - i]) {
// 			return false;
// 		let length = characters.length;
// 	}
// 	}
// 	return true;
// }

// Second Method:

function isPalindrome(string) {
	let rawCharacters = string.toLowerCase().split('');
	let characters = rawCharacters.filter(c => c !== ' ' && c !== ',');
	let original = characters.join('');
	let reverse = characters.reverse().join('');
	return original === reverse;
}
console.log(isPalindrome('A man, a plan, a canal,Panama')); // Output: true
console.log(isPalindrome('racecar')); // Output: true
console.log(isPalindrome('hello')); // Output: false
