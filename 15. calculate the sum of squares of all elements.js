
function getSum(arr){
 let total = arr.reduce((accum,elem) => accum = accum + elem * elem,0)
 return total;
}


console.log(getSum([1,2,3]));
