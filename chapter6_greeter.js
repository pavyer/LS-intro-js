// greeter.js

/* function declaration
function firstName() {
  let rlSync = require('readline-sync');
  let name = rlSync.question("What is your first name?\n");
  return name;
}

function lastName() {
  let rlSync = require('readline-sync');
  let name = rlSync.question("What is your last name?\n");
  return name;
}
*/

/* function expression
let firstName = function () {
  let rlSync = require('readline-sync');
  let name = rlSync.question("What is your first name?\n");
  return name;
}

let lastName = function () {
  let rlSync = require('readline-sync');
  let name = rlSync.question("What is your last name?\n");
  return name;
}
*/

/* arrow function returns undefined since not a single expression
let firstName = () => {
  let rlSync = require('readline-sync');
  let name = rlSync.question("What is your first name?\n");
}

let lastName = () => {
  let rlSync = require('readline-sync');
  let name = rlSync.question("What is your last name?\n");
}
*/

/*
let firstName = () => require('readline-sync').question("What is your first name?\n");

// Shouldn't be let name = require('readline-sync').question("What is your first name?\n");
// Arrow functions with a single expression don't require local variables.

let lastName = () => require('readline-sync').question("What is your last name?\n");

console.log(`Hello ${firstName()} ${lastName()}!`);
*/
// Also I have two functions above instead of a single one as the solution shows.
// A more succinct version of the program would be.


let getPrompt = (prompt) => require('readline-sync').question(prompt);

console.log(`Hello ${getPrompt("What's your first name?\n")} ${getPrompt("What's your last name?\n")}!`);

