// write function sum 
// takes two arguments 
// returns sum of the arguments 
// assume always accepts numbers 

function sum(num1, num2) {
  return num1 + num2;
}

let rlSync = require('readline-sync');

let number1 = Number(rlSync.question('Enter the first number\n'));

let number2 = Number(rlSync.question('Enter the second number\n'));

console.log(sum(number1, number2));



