// Greeting the user single name

let rlSync = require('readline-sync');

//let name = rlSync.question("What is your name?\n");

//console.log(`Hello, ${name}!`)


// Greeting the user first and last names

let firstName = rlSync.question("What is your first name?\n");
let lastName = rlSync.question("What is your last name?\n");

console.log(`Hello, ${firstName} ${lastName}!`);
