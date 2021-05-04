/*
Write a function, evenOrOdd, that determines whether its argument is an 
even number. If it is, the function should log 'even' to the console; 
otherwise, it should log 'odd'. 
For now, assume that the argument is always an integer.
*/

// let rlSync = require('readline-sync');
// let numberInput = rlSync.question("Enter a positive integer \n");
// let number = parseInt(numberInput);

function evenOrOdd(number) {

  if ((number < 0) || (Number.isInteger(number) === false))
  console.log(`${number} is not a valid positive integer input`);
  else if (number === 0)
  console.log("0 is neither even nor odd");
  else if (number % 2)
    console.log(`${number} is odd`);
  else  
    console.log(`${number} is even`);
}

evenOrOdd(0);
evenOrOdd(2);
evenOrOdd(3);
evenOrOdd(57);
evenOrOdd(56454);

evenOrOdd(-1);
evenOrOdd(235.25445);

