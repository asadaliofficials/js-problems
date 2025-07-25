// You have given a string and you have to Capitalize its first character of each word and then concat them and then generate a hashtag.

let string = 'The quick brown fox jumped over the lazy DOG';
let words = string.split(' ');
let CapitalizedWords = words.map(word => {
	return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
});

// console.log(CapitalizedWords.join(''));

let hashtag = '#' + CapitalizedWords.join('');
console.log(hashtag);
