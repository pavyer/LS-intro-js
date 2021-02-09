//Write a function that logs whether a given number is:
// between 0 and 50 (inclusive)
// between 51 and 100 (inclusive)
// greater than 100 
// less than 0

let input = (prompt) => require('readline-sync').question(prompt);

function numberRange(inputNumber) {
  if (!Number(inputNumber)) {
    console.log("Please enter a valid number");
    return;
  }  
  let compareNumber = Number(inputNumber);
  if (compareNumber < 0) {
    console.log(`${compareNumber} is less than zero`);
  } else if (compareNumber >= 0 && compareNumber <= 50) {
    console.log(`${compareNumber} is between 0 and 50`);
  } else if (compareNumber >= 51 && compareNumber <= 100) {
    console.log(`${compareNumber} is between 51 and 100`);
  } else {
    console.log(`${compareNumber} is greater than 100`);
  }
}

// Simpler implementation is not using the "&&" condition at all. 
// As per the launchSchool solution

numberRange(input("Enter a number\n"))
