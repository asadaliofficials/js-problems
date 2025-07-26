// write a function that take two parameter one is word string and second is character for count in occurrences

// First Method:
// function countChar(string, char) {
// 	let characters = string.split('');
// 	let counts = 0;
// 	for (const character of characters) {
// 		if (character.toLowerCase() == char) {
// 			counts += 1;
// 		}
// 	}
// 	return counts;
// }
// console.log(countChar('WebsiteDevelopment', 'w'));

// Second Method:

// function countChar(string, char) {
//   return string.toLowerCase().split(char).length - 1;
// }
// console.log(countChar('WebsiteDevelopmentWorld', 'w'));

// Third Method:

function countChar(string, char) {
	return string
		.toLowerCase()
		.split('')
		.filter(c => c == char.toLowerCase()).length;
}
console.log(countChar('WebsiteDevelopment', 'E'));
