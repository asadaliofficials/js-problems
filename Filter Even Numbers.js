// function filterEvenNumbers(array){
//   filteredArray = []
//   array.forEach(element => {
//     if((element % 2) == 0){
//       filteredArray.push(element)
//     }
//   });
//   console.log(filteredArray)
// }

// filterEvenNumbers([1, 2, 3, 4, 5, 6]); // [2, 4, 6]
// filterEvenNumbers([7, 8, 9, 10, 11]); // [8, 10]


function filterEvenNumbers(array) {
  let filteredArray = array.filter(element => element % 2 === 0);
  console.log(filteredArray);
} 

filterEvenNumbers([1, 2, 3, 4, 5, 6]); // [2, 4, 6]
filterEvenNumbers([7, 8, 9, 10, 11]); // [8, 10]
