
function sumArray(array){
    let total = 0;
    array.forEach(element => {
      total += element
    });

    return total

}


console.log(sumArray([1, 2, 3, 4, 5]))
console.log(sumArray([-1, 0, 1])) 