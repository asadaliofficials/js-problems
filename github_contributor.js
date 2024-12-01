const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

// Define the date range (corrected to DEC 1 2024 to MAR 20 2025)
const startDate = new Date('2024-12-01');
const endDate = new Date('2025-03-20'); // Corrected date range

// Sample JS problems data
const jsProblems = [
  {
    title: 'find largest word from string',
    code: `// Find the largest word from a string using JavaScript
let string = 'The quick brown fox jumped over the lazy dog';

let words = string.split(' ');

let longestWord = words.reduce(
  (accumulator, currentWord) =>
    accumulator.length < currentWord.length ? currentWord : accumulator,
  ''
);
console.log(longestWord);`,
  },
  {
    title: 'concat string and generate hashtag',
    code: `// You have given a string and you have to Capitalize its first character of each word and then concat them and then generate a hashtag.

let string = 'The quick brown fox jumped over the lazy DOG';
let words = string.split(' ');
let CapitalizedWords = words.map(word => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
});

let hashtag = '#' + CapitalizedWords.join('');
console.log(hashtag);`,
  },
  {
    title: 'check the words are palindrome or not',
    code: `// Write a function to determine whether a given string is
// a palindrome or not. A palindrome is a word, phrase,
// number, or other sequence of characters that reads the same
// forward and backward, ignoring spaces, punctuation, and
// capitalization.

function isPalindrome(string) {
  let rawCharacters = string.toLowerCase().split('');
  let characters = rawCharacters.filter(c => c !== ' ' && c !== ',');
  let original = characters.join('');
  let reverse = characters.reverse().join('');
  return original === reverse;
}
console.log(isPalindrome('A man, a plan, a canal,Panama')); // Output: true
console.log(isPalindrome('racecar')); // Output: true
console.log(isPalindrome('hello')); // Output: false`,
  },
  {
    title: 'character counter in string',
    code: `// Count the occurrence of each character in a string
let string = "Hello World";
let charCount = {};

for (let char of string) {
  charCount[char] = (charCount[char] || 0) + 1;
}

console.log(charCount);`,
  },
  {
    title: 'sort Array of Numbers',
    code: `// Sort an array of numbers in ascending order
let numbers = [5, 2, 8, 1, 9, 3];

// Using sort method
let sortedNumbers = numbers.sort((a, b) => a - b);

console.log(sortedNumbers);`,
  },
  {
    title: 'find the max number from the array',
    code: `// Find the maximum number from an array
let numbers = [5, 12, 8, 3, 19, 7, 1];

// Using Math.max with spread operator
let maxNumber = Math.max(...numbers);

console.log(maxNumber);`,
  },
  {
    title: 'find factorial of a number',
    code: `// Calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120`,
  },
  {
    title: 'calculate the average',
    code: `// Calculate the average of numbers in an array
let numbers = [10, 20, 30, 40, 50];

let sum = numbers.reduce((acc, num) => acc + num, 0);
let average = sum / numbers.length;

console.log(average); // Output: 30`,
  },
  {
    title: 'remove duplicate number',
    code: `// Remove duplicate numbers from an array
let numbers = [1, 2, 3, 2, 4, 1, 5, 3];

// Using Set to remove duplicates
let uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]`,
  },
  {
    title: 'sum of digits of a number',
    code: `// Calculate the sum of digits of a number
function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

console.log(sumOfDigits(123)); // Output: 6`,
  },
  // Additional problems to reduce duplication
  {
    title: 'reverse a string',
    code: `// Reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // Output: "olleh"`,
  },
  {
    title: 'find minimum value in array',
    code: `// Find the minimum value in an array
let numbers = [5, 2, 8, 1, 9, 3];

// Using Math.min with spread operator
let minValue = Math.min(...numbers);

console.log(minValue); // Output: 1`,
  },
  {
    title: 'count vowels in string',
    code: `// Count vowels in a string
function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  
  return count;
}

console.log(countVowels("Hello World")); // Output: 3`,
  },
  {
    title: 'filter even numbers',
    code: `// Filter even numbers from an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]`,
  },
  {
    title: 'fibonacci sequence',
    code: `// Generate Fibonacci sequence
function fibonacci(n) {
  if (n <= 1) return n;
  
  let a = 0;
  let b = 1;
  
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  
  return b;
}

console.log(fibonacci(10)); // Output: 55`,
  },
  {
    title: 'check prime number',
    code: `// Check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  
  if (num % 2 === 0 || num % 3 === 0) return false;
  
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  
  return true;
}

console.log(isPrime(17)); // Output: true
console.log(isPrime(15)); // Output: false`,
  },
  {
    title: 'flatten nested array',
    code: `// Flatten a nested array
function flattenArray(arr) {
  return arr.flat(Infinity);
}

let nestedArray = [1, [2, 3], [4, [5, 6]], 7];
console.log(flattenArray(nestedArray)); // Output: [1, 2, 3, 4, 5, 6, 7]`,
  },
  {
    title: 'find intersection of arrays',
    code: `// Find intersection of two arrays
function findIntersection(arr1, arr2) {
  return arr1.filter(value => arr2.includes(value));
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 4, 5, 6, 7];

console.log(findIntersection(array1, array2)); // Output: [3, 4, 5]`,
  },
  {
    title: 'capitalize first letter of words',
    code: `// Capitalize the first letter of each word in a sentence
function capitalizeWords(sentence) {
  return sentence
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

console.log(capitalizeWords("hello world")); // Output: "Hello World"`,
  },
  {
    title: 'remove falsy values',
    code: `// Remove falsy values from an array
function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

let mixedArray = [0, 1, false, 2, '', 3, null, undefined, 4, NaN, 5];
console.log(removeFalsyValues(mixedArray)); // Output: [1, 2, 3, 4, 5]`,
  },
];

// Function to get a random problem
function getRandomProblem() {
  const randomIndex = Math.floor(Math.random() * jsProblems.length);
  return jsProblems[randomIndex];
}

// Function to generate a random filename
function generateFilename(problemTitle, index) {
  // Some files with numbers, some without
  if (Math.random() > 0.5) {
    return index + '. ' + problemTitle + '.js';
  } else {
    return problemTitle + '.js';
  }
}

// Function to create commits for a specific date
function createCommitsForDate(date, commitCount) {
  const dateString = date.toISOString().split('T')[0];

  for (let i = 0; i < commitCount; i++) {
    // Get a random problem
    const problem = getRandomProblem();

    // Generate a filename
    const filename = generateFilename(problem.title, i + 1);
    const filepath = path.join(__dirname, filename);

    // Write the code to the file
    fs.writeFileSync(filepath, problem.code);

    // Stage the file
    execSync('git add .', { cwd: __dirname });

    try {
      // Commit with date
      execSync(
        'git commit --date="' +
          dateString +
          'T' +
          (9 + i).toString().padStart(2, '0') +
          ':' +
          Math.floor(Math.random() * 60)
            .toString()
            .padStart(2, '0') +
          ':00" -m "Add ' +
          filename +
          '"',
        {
          cwd: __dirname,
          stdio: 'ignore',
        }
      );

      console.log('Committed ' + filename + ' on ' + dateString);
    } catch (error) {
      console.log(
        'Skipped commit for ' +
          filename +
          ' on ' +
          dateString +
          ' (might be duplicate)'
      );
    }

    // Randomly decide to delete some files to create more variation
    if (Math.random() > 0.7) {
      try {
        fs.unlinkSync(filepath);
        execSync('git add .', { cwd: __dirname });
        execSync(
          'git commit --date="' +
            dateString +
            'T' +
            (10 + i).toString().padStart(2, '0') +
            ':' +
            Math.floor(Math.random() * 60)
              .toString()
              .padStart(2, '0') +
            ':00" -m "Remove ' +
            filename +
            '"',
          {
            cwd: __dirname,
            stdio: 'ignore',
          }
        );
        console.log('Removed ' + filename + ' on ' + dateString);
      } catch (error) {
        console.log(
          'Skipped removal commit for ' + filename + ' on ' + dateString
        );
      }
    }
  }
}

// Function to generate a random number of commits (1-4)
function getRandomCommitCount() {
  return Math.floor(Math.random() * 4) + 1;
}

// Main function to generate commits
function generateContributions() {
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    // Skip some days randomly to make it look more natural
    if (Math.random() > 0.2) {
      // 80% chance to commit on a day
      const commitCount = getRandomCommitCount();
      console.log(
        'Creating ' +
          commitCount +
          ' commits for ' +
          currentDate.toISOString().split('T')[0]
      );
      createCommitsForDate(currentDate, commitCount);
    }

    // Move to the next day
    currentDate.setDate(currentDate.getDate() + 1);
  }

  console.log('Contribution generation completed!');
}

// Run the script
generateContributions();
