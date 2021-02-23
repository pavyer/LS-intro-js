/* 

Implement:

cite('Brendan Eich', 'Always bet on JavaScript.');
// logs:
// Brendan Eich said: "Always bet on JavaScript."

*/

// function definition
/*
function cite(author, quote) {
  console.log(`${author} said: ${quote}`);
}
*/
// function expressions
/*

let cite = function (author, quote) {
  console.log(`${author} said: ${quote}`);    
}
*/
// with arrow notation that has implicit return for single statements 

let cite = (author, quote) => console.log(`${author} said: ${quote}`);

cite('Brendan Eich', 'Always bet on JavaScript.');



