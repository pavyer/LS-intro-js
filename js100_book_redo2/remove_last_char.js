/*
Create a function removeLastChar that takes a string as an argument, 
and returns the string without the last character.

removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'
*/

function removeLastChar(strInput) {

  // return strInput.substring(0, strInput.length - 1);
  
  // or 

  // return strInput.slice(0, strInput.length - 1);

  // can also use a negative offset when specifying the end of a string or array
  // so
  return strInput.slice(0, -1);

}

console.log(removeLastChar('ciao!')); // 'ciao'
console.log(removeLastChar('hello')); // 'hell'
