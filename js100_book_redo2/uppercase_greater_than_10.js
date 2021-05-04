/*
Write a function that takes a string as an argument and returns an 
all-caps version of the string when the string is longer than 10 characters. 
Otherwise, it should return the original string. 
Example: change 'hello world' to 'HELLO WORLD', but don't change 'goodbye'.
*/

function uppercaseGreaterThan10Chars(inputText) {
  if (inputText.length >= 10) {
    console.log(`${inputText.toUpperCase()}`);
  } else {
    console.log(`${inputText}`);
  }
}

uppercaseGreaterThan10Chars('hello world');
uppercaseGreaterThan10Chars('goodbye');
