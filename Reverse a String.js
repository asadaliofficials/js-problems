
// function reverseString(string){
//   let stringArr = []
// for(let i = 0; i < string.length;i++){
//   stringArr.unshift(string.charAt(i));
// }
// let reverseString = stringArr.join("")

// console.log(reverseString)

// }

// reverseString("hello"); 
// reverseString("world"); 


function reverseString(string) {
  let reversed = string.split("").reverse().join("")
  console.log(reversed);
}

reverseString("hello");
reverseString("world");
