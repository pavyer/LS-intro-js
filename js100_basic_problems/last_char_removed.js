/*
Implement function removeLastChar takes string input. removes last char.

removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'
*/

function removeLastChar(inputString) {
  return inputString.slice(0, inputString.length - 1);
}

console.log(removeLastChar('ciao!'));
console.log(removeLastChar('hello'));
