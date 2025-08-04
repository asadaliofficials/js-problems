
// function countVowels(string) {
//   let Vowels = 0;
//   for (let i = 0; i < string.length; i++) {
//     let char = string.charAt(i)
//     if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//       Vowels += 1;
//     }
//   }
//   console.log("Total Vowels are:", Vowels)
// }

// countVowels("hello");
// countVowels("javascript"); 



function countVowels(string) {
  let vowelsCount = 0;
  const vowels = 'aeiou';
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string.charAt(i).toLowerCase())) {
      vowelsCount++;
    }
  }
  console.log("Total Vowels are:", vowelsCount);
}

countVowels("hello");
countVowels("javascript");

