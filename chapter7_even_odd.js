// Determine if number is even or odd
// Encapsulate the logic in a function that takes a single argument as the input

function getInputNumber() {
  let rlSync = require('readline-sync');
  let inputNumber = rlSync.question('Enter an integer value\n');
  //return parseInt(inputNumber);
  // adding validation
  // but best is to add validation to the evenOdd function to check and 
  // terminate execution
  return inputNumber;
}

/*
function evenOrOdd(number) {
  if (Number.isInteger(Number(number))){
    if (number % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log("The input is not an integer number. Try again.")
  }
}
*/

// LaunchSchool implementation
function evenOrOdd(number) {
  if (!Number.isInteger(Number(number))){
    console.log("The input is not an integer number. Try again.");
    return;
  } 
  if (Number(number) % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(getInputNumber());


