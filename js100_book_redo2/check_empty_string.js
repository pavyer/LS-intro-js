/*
Write a function that checks whether a string is empty or not. For example:

isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true
*/

function isBlank(input) {

  // return input.length > 0 ? false : true; // this is a redundant use of ternary operator

  // there is an even more succinct operation

  return input.length === 0;

  // so the pattern that is being used for testing either or conditions, true
  // false conditions is that the value of the comparison operator itself is 
  // being returned
  // like have a ternary operator where the returns are boolean true and false
  // is redundant 
  
}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));     // true

function isBlankWhiteSpace(input) {

  return input.trim().length === 0;
}

console.log(isBlankWhiteSpace('mars')); // false
console.log(isBlankWhiteSpace('  '));   // true
console.log(isBlankWhiteSpace(''));     // true

/*
Another interesting implementation from a student for whitespace:

function isBlank(text) {
  return text.length === 0 || /^\s{1}$/.test(text); // here I'd have used this
  // regex /^\s+$/ one or more whitespaces
}
*/
