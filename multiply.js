// Collect two numbers from the user
// Present the multiplication of the two as an equation

let getInput = (prompt) => require("readline-sync").question(prompt);
let multiply = (a, b) => a * b;

let firstNumber = Number(getInput("Enter the first number\n"));
let secondNumber = Number(getInput("Enter the second number\n"));

// can also use parseFloat instead of Number

console.log(`${firstNumber} * ${secondNumber} = ${multiply(firstNumber, secondNumber)}`);
