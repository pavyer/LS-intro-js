/*
Write code that capitalizes the words in the string 'launch school tech & talk',
so that you get the string 'Launch School Tech & Talk'.
*/



function capitalizeFirstLetter(sentence) {
// let words = sentence.split(" ");
// let wordsCap = words.map((word) => word.split("")[0].toUpperCase().join(""));
  // return wordsCap.join(" ");

  let words = sentence.split(" ");

  let wordsFirstLetterCap = words.map((word) => {
    // let wordCharacters = word.split("");
    // wordCharacters[0] = wordCharacters[0].toUpperCase();
    // return wordCharacters.join("");
    
    // Trying out a different approach
    // return (wordCharacters[0].toUpperCase().concat(wordCharacters.slice(1))).join("");

    //Simplest one is using the word string with array notation
    
    return word[0].toUpperCase() + word.slice(1);
    
  });
    
  return wordsFirstLetterCap.join(" ");
}

console.log(capitalizeFirstLetter("launch school tech & talk"));


// One of the solutions given. Very succinct:

// Yeah but this is something that applies to just one word 
// and not to a sentence

// String.prototype.capitalize = function() {
//   return this.charAt(0).toUpperCase() + this.slice(1);
// }

//More succinct, expressive, elegant, easier to read way of implementing 
//the function would be.
// With this you don't have the headache of creating additional variables 
// within the function. Memory usage of those variables etc.
// This is definitely a more succinct and elegant implementation.

function capitalizeFirstLetterBetter(sentence) {

  return sentence.split(" ").
          map((word) => word[0].toUpperCase() + word.slice(1)).
          join(" ");
  
}

console.log(capitalizeFirstLetterBetter("launch school tech & talk"));
// Works as expected on the newline
console.log(capitalizeFirstLetterBetter(
  "launch school tech & talk.\nAlso what happens on a newline?"));
