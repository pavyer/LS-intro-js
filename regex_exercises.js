// From https://launchschool.com/books/regex/read/using

// Write a method that returns true if its argument looks like a URL, 
// false if it does not.
function isUrl(url) {

  return !!(url.match(/^http(s)?:\/\/\S+$/));
  
}

console.log(isUrl('http://launchschool.com'));   // -> true
console.log(isUrl('https://example.com'));       // -> true
console.log(isUrl('https://example.com hello')); // -> false
console.log(isUrl('   https://example.com'));    // -> false

//######################

//Write a method that returns all of the fields in a haphazardly formatted 
// string. A variety of spaces, tabs, and commas separate the fields, 
// with possibly multiple occurrences of each delimiter.

function fields(rawStr) {

  return rawStr.split(/[ \t,]+/);
  
}

console.log(fields("Pete,201,Student"));

console.log(fields("Pete \t 201    ,  TA"));

console.log(fields("Pete \t 201"));

console.log(fields("Pete \n 201"));

//######################

// Write a method that changes the first arithmetic operator (+, -, *, /) in a 
// string to a '?' and returns the resulting string. 
//Don't modify the original string.

function mysteryMath(mathExp) {
  
return mathExp.replace(/[+\-*/]/g, '?');

}

console.log(mysteryMath('4 + 3 - 5 = 2'));
// -> '4 ? 3 - 5 = 2'

console.log(mysteryMath('(4 * 3 + 2) / 7 - 1 = 1'));
// -> '(4 ? 3 + 2) / 7 - 1 = 1'

//######################

//Write a method that changes the first occurrence of the word apple, 
// blueberry, or cherry in a string to danish.

function danish(sentence) {
  
return sentence.replace(/\bapple|blueberry|cherry\b/, 'danish');

}

console.log(danish('An apple a day keeps the doctor away'));
console.log(danish('My favorite is blueberry pie'));
console.log(danish('The cherry of my eye'));
console.log(danish('apple. cherry. blueberry.'));
console.log(danish('I love pineapple'));

//######################

// Challenge: write a method that changes dates in the format 2016-06-17 to the
// format 17.06.2016. You must use a regular expression 
// and should use methods described in this section.

function formatDate(rawDate) {
  return rawDate.replace(/(\d{4})[-/](\d{2})[-/](\d{2})/, '$3.$2.$1');
}

console.log(formatDate('2016-06-17')); // -> '17.06.2016'
console.log(formatDate('2016/06/17')); // -> '2016/06/17' (no change)
