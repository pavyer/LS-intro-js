// write if statement 
// prints "Yes!" if randomNumber is 1 
// prints "No." if randomNumber is 0

let randomNumber = Math.round(Math.random());

if (randomNumber === 1) { // could've just used (randomNumber) since "0" is falsy
  console.log('Yes!');
} else {
  console.log('No.');
} // don't have to terminate if else statements with semicolon. MDN doesn't for loops as well.
// Nor does Launch School. Nor do we use it for function definitions
// we only use it in array iteration methods where it makes sense because it's a function call with a callback
// and that kind of conflated it where we need to use semicolons and where we need not

randomNumber ? console.log('Yes!') : console.log('No.');

// also

console.log(randomNumber ? 'Yes!' : 'No.');
