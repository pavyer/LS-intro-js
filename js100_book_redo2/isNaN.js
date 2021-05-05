/*
Earlier, we learned that Number.isNaN(value) returns true if value is 
the NaN value, false otherwise. 
You can also use Object.is(value, NaN) to make the same determination.

Without using either of those methods, write a function named isNotANumber 
that returns true if the value passed to it as an argument is NaN, 
false if it is not.
*/

function isNotANumber(num) {
  // if (num !== num) {
  //   return true;
  // } else {
  //   return false;
  // }
// even simpler is just the condition in if
  return num !== num;
}


console.log(isNotANumber(NaN));
console.log(isNotANumber(10));
