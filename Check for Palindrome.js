function isPalindrome(string) {
  let similarWords = 0;
  for (let i = 0; i < string.length; i++) {
    let firstWord = string.charAt(i)

    let secondWord = string.charAt(string.length-i-1)
    if(firstWord == secondWord){
        similarWords += 1;
    }

  }
  if(similarWords == string.length){
    console.log(string,": true")
  }
  else{
    console.log(string,": false")
  }
}



isPalindrome("racecar"); 
isPalindrome("hello");
