// use reduce to compute the sum of the squares of numbers in an array

function sumOfSquares(arr) {
  let sum = arr.reduce((accumulator, element) => {
    return accumulator + (element * element);
  });
  return sum; 
}




let array = [3, 5, 7];
console.log(sumOfSquares(array));
