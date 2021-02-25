// Implement a function to capitalize all words in a string
// 'launch school tech & talk' to 
// 'Launch School Tech & Talk'

function capitalizeString(sentence) {
  
  let words = sentence.split(" ");
  
  let capitalizedWords = words.map(word => {
    wordChars = word.split("");
    wordChars[0] = wordChars[0].toUpperCase();
    return wordChars.join("");
  });

  return capitalizedWords.join(" ");

}

console.log(capitalizeString('launch school tech & talk'));

/* Interesting implementations:
function capitalize(string) {
  return string.split(' ').map( (word) => { 
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
  }).join(' ');
}

Also the commentary provided by the student:
It looks like substring works pretty much the same as slice. 
This SO post on the differences is worth reading.

Methods that capitalize a string 
(Ruby and Python, among others, have a capitalize method) 
generally specifically lowercase all the characters but the first one; 
that's what I did too.

C# has a different and interesting approach; 
its TextInfo.toTitleCase() method assumes that words in all caps are acronyms 
and leaves them alone. Might be a good idea! Also, it capitalizes every word in 
the input string without you having to break it apart into an array of 
words, map it, and join the result back. Maybe that's a good idea too.


Not fully sure how the regex pattern works here. Will check out later.
// With RegEx and replace

let string = 'launch school tech & talk';

console.log(string.replace(/\b[\w]/g , x => x.toUpperCase()));

console.log(string.replace(/\b./g , x => x.toUpperCase())); // This works also


*/
