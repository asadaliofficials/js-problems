console.log("hello...")


function findLargest(arr) {
  if (arr.length == 0) {
    console.log("Array is Empty")
    return null
  }
  let first = arr[0]
  console.log('first number is', first)

  arr.forEach(element => {
    console.log(element)
    if (element > first) {
      first = element
    }
  });
  console.log("Largest Number is = ", first)
}

findLargest([10, 5, 8, 20, 3]);
findLargest([-5, -2, -10, -1]);
findLargest([]);


