/*
Use map and filter to first determine the lengths of all the elements in an 
array of string values, then discard the even values (keep the odd values).

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
*/

function oddLengths(arr) {
  let strLength = arr.map((element) => element.length);
  return strLength.filter((num) => num % 2);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));

// How can I solve this problem without map?
// Can't think of any simple way now. Sure can use a loop, but if just using the
// array iteration methods then using map is the simplest way

/*
Write a function similar to the oddLengths function from Exercise 6, 
but don't use map or filter. Instead, try to use the reduce method.

Hmm using reduce. But reduce gets you a single value so how do I create an array
output using reduce?
*/

function oddLengths2(arrInput) {
  let oddLength; 
  return oddLength = arrInput.reduce((accumulator, element) => 
                          {if (element.length % 2) {
                              //return accumulator.push(element.length); // on the first iteration this would set accumulator to 1 and on the second iteration "1.push" would fail
                              accumulator.push(element.length);
                              }
                            return accumulator;    
                          }, []);
  
}

console.log(oddLengths2(arr));
