// factorial with a loop

let rlSync = require('readline-sync');
let numberFactorial = parseInt(rlSync.question("Enter a number\n"));

/*
let product = 1;

for (counter = numberFactorial; counter >=1; counter -= 1) {
 
  product = product * counter;

}

console.log(`${product} is the factorial of ${numberFactorial}`);
*/

// factorial with recursion

function factorial(numberFactorial) {

  if (numberFactorial === 1) return 1;

  return numberFactorial * factorial(numberFactorial - 1);
}

console.log(`${factorial(numberFactorial)} is the factorial of ${numberFactorial}`);
