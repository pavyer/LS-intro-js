// function takes array input and returns array with only the integers


function findIntegers(arr) { 
  return arr.filter(element => Number.isInteger(element));
}

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);

console.log(integers);


