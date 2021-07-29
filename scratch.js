// let randomNumber = Math.round(Math.random());

// if (randomNumber) {
//   console.log('Yes!');
// } else {
//   console.log('No!');
// }

// console.log(randomNumber ? "Yes!" : "No");

// let rlSync = require('readline-sync');
// let weather = rlSync.question("What's the weather? \n");

// if (weather === "sunny") {
//   console.log("It's a beautiful day!");
// } else if (weather === "rainy") {
//   console.log("Grab your umbrella.");
// } else {
//   console.log("Let's stay inside.");
// }

// switch (weather) {
//   case("sunny"):
//     console.log("It's a beautiful day!");
//     break;
//   case("rainy"):
//     console.log("Grab your umbrella.");
//     break;
//   default:
//     console.log("Let's stay inside.");    
// }

// function someFunction() {
//   myVar = 'This is global';
// }

// someFunction();
// console.log(myVar);

// logValue();

// function logValue() {
//   console.log('Hello, world!');
// }

// const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed \
//                 ligula at risus vulputate faucibus. Aliquam venenatis nibh ut justo dignissim \
//                 dignissim. Proin dictum purus mollis diam auctor sollicitudin. Ut in bibendum \
//                 ligula. Suspendisse quam ante, dictum aliquam tristique id, porttitor pulvinar \
//                 diam. Maecenas blandit aliquet ipsum. Integer vitae sapien sed nulla rutrum \
//                 hendrerit ac a urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.';

// console.log(paragraph);

// 'use strict';

// var myVar = 'This is global';

// function someFunction() {
//   myVar = 'This is local';
// }

// someFunction();
// console.log(myVar);

// function someFunction() {
//   myVar = 'This is global';
// }

// someFunction();
// console.log(myVar);

// let a = 7;

// function myValue(a) {
//   a += 10;
// }

// myValue(a);
// console.log(a);

// let a = [1, 2, 3];

// function myValue(b) {
//   b[2] += 7;
// }

// myValue(a);
// console.log(a);


// console.log(a);
// var a = 1;

// logValue();

// function logValue() {
//   console.log('Hello, world!');
// }

// let myArray = [1, 2, 3, 4];
// const myOtherArray = myArray;

// myArray.pop();
// console.log(myArray);
// console.log(myOtherArray);

// myArray = [1, 2];
// console.log(myArray);
// console.log(myOtherArray);

// const myObject = {
//   a: 'name',
//   'b': 'test',
//   123: 'c',
//   1: 'd',
// };

// myObject[1];
// myObject["a"];
// myObject.a;

// const person = {
//   firstName() {
//     return 'Victor';
//   },
//   lastName() {
//     return 'Reyes';
//   },
// };

// console.log(`${person.firstName} ${person.lastName}`);

// function isUrl(url) {

//   return !!(url.match(/^http(s)?:\/\/\S+$/));
  
// }

// console.log(isUrl('http://launchschool.com'));   // -> true
// console.log(isUrl('https://example.com'));       // -> true
// console.log(isUrl('https://example.com hello')); // -> false
// console.log(isUrl('   https://example.com'));    // -> false

// function fields(rawStr) {

//   return rawStr.split(/[ \t,]+/);
  
// }

// console.log(fields("Pete,201,Student"));

// console.log(fields("Pete \t 201    ,  TA"));

// console.log(fields("Pete \t 201"));

// console.log(fields("Pete \n 201"));

// function mysteryMath(mathExp) {
  
// return mathExp.replace(/[+\-*/]/g, '?');

// }

// console.log(mysteryMath('4 + 3 - 5 = 2'));
// // -> '4 ? 3 - 5 = 2'

// console.log(mysteryMath('(4 * 3 + 2) / 7 - 1 = 1'));
// // -> '(4 ? 3 + 2) / 7 - 1 = 1'


// function danish(sentence) {
  
// return sentence.replace(/\bapple|blueberry|cherry\b/, 'danish');

// }

// console.log(danish('An apple a day keeps the doctor away'));
// console.log(danish('My favorite is blueberry pie'));
// console.log(danish('The cherry of my eye'));
// console.log(danish('apple. cherry. blueberry.'));
// console.log(danish('I love pineapple'));

function formatDate(rawDate) {
  return rawDate.replace(/(\d{4})[-/](\d{2})[-/](\d{2})/, '$3.$2.$1');
}

console.log(formatDate('2016-06-17')); // -> '17.06.2016'
console.log(formatDate('2016/06/17')); // -> '2016/06/17' (no change)

// hello
