/*
Earlier, we learned that JavaScript has multiple versions of the numeric 
value zero. In particular, it has 0 and -0. These numbers, while being 
mathematically nonsensical, are distinct values in JavaScript. 
We won't get into why JavaScript has a 0 and -0, 
but it can be useful in some cases.

There's a problem, however: JavaScript itself doesn't seem to realize that the 
values are distinct:

> 0 === -0
= true

> String(-0)
= '0'

Fortunately, you can use Object.is to determine whether a value is -0:
> let value = -0;
> Object.is(value, 0)
= false

> Object.is(value, -0)
= true

There are other ways to detect a -0 value. Without using Object.is, write a 
function that will return true if the argument is -0, 
and false if it is 0 or any other number.
*/


// Using the string to array method
// Ah, so then this method does not work because String(0) and String(-0) result
// in the same output of '0'.

// function minusZeroArray(num) {
//   if (num === 0) {
//     zeroSign = String(num).split("");
//     console.log(zeroSign);
//     return zeroSign.length === 2 ? true : false;
//   }  
// }
// console.log(minusZeroArray(-0));
// console.log(minusZeroArray(0));
// console.log(minusZeroArray(2874));

// yeah just Infinity not equal to -

function isMinusZero(number) {
  // return (1 / number === -Infinity) ? true : false;
  return 1 / number === -Infinity;
}

console.log(isMinusZero(-0));
console.log(isMinusZero(0));
console.log(isMinusZero(2874));
