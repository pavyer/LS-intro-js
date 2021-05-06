/*
Implement a function repeat that repeats an input string a 
given number of times, as shown in the example below; 
without using the pre-defined string method String.prototype.repeat().

repeat(3, 'ha'); // 'hahaha'
*/

// Like once I had written this down I wasn't able to come up other more
// elegant, concise solutions. But as I was going through the user submitted
// solutions I saw a couple of other elegant solutions.
// So there are always going to be more elegant solutions out there, you have to
// think harder and exercise creativity to see those solutions. 
// And you have to become familiar with the patterns of that language.
// Say for example understanding all the patterns of repetition in a language.
// In JS these are the patterns I know of now and we'll get to learn more as we
// learn more:
// Using looping constructs, recursion, array iteration methods and
// Array fill methods as shown in one of the student solutions below 

function repeat(times, input) {

  let repeatedString = "";

  for (let i = 1; i <= times; i++) {
    repeatedString += input;
  }
  
  return repeatedString;

}

console.log(repeat(3, 'ha')); // 'hahaha'

/*Interesting two more elegant solutions from other students:

// Using Arrays
const repeat = (num, text) => {
  return Array(num).fill(text).join('');
};

console.log(repeat(5, 'ha');

//Using recursion

function repeat(str, times) {
  return times === 1 ? str : str + repeat(str, times - 1);
}

*/

