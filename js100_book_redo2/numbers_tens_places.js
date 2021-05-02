/*Use the arithmetic operators to determine the individual digits of a 4-digit number like 4936:

thousands place is 4
hundreds place is 9
tens place is 3
ones place is 6

Similarly if inputs are the following:
2; ones place is 2
10; ones place is 0; tens place is 1
334; ones place is 4, tens place is 3, hundreds place is 3
*/

let rlSync = require('readline-sync');
let numberInput = rlSync.question("Enter a positive integer number\n");
let number = parseInt(numberInput);

//###########################################
// The approach here we can term it as 
// modulus and subtract the result. keep the number

// if (number < 10) {
//   onesPlace = number % 10;
//   console.log(`ones place is ${onesPlace}\n`);
// }

// if ((number >= 10) && (number < 100)) {
//   onesPlace = number % 10;
//   tensPlace = (number - onesPlace) / 10;

//   console.log(`ones place is ${onesPlace}\n`);
//   console.log(`tens place is ${tensPlace}\n`);
// }

// if ((number >= 100) && (number < 1000)) {
//   onesPlace = number % 10;
//   tensPlaceMidway = number % 100;
//   tensPlace = (tensPlaceMidway - onesPlace) / 10;
//   hundredsPlace = (number - tensPlaceMidway) / 100;

//   console.log(`ones place is ${onesPlace}\n`);
//   console.log(`tens place is ${tensPlace}\n`);
//   console.log(`hundreds place is ${hundredsPlace}\n`);
// }

// if ((number >= 1000) && (number < 10000)) {
//   onesPlace = number % 10;
//   tensPlaceMidway = number % 100;
//   tensPlace = (tensPlaceMidway - onesPlace) / 10;
//   hundredsPlaceMidway = number % 1000;
//   hundredsPlace = (hundredsPlaceMidway - tensPlaceMidway) / 100;
//   thousandsPlace = (number - hundredsPlaceMidway) / 1000;

//   console.log(`ones place is ${onesPlace}\n`);
//   console.log(`tens place is ${tensPlace}\n`);
//   console.log(`hundreds place is ${hundredsPlace}\n`);
//   console.log(`thousands place is ${thousandsPlace}\n`);
// }

// if (number > 10000) {
//   console.log('The number is too big.');
// }

//##############################
// This approach from the book we can term it as:
// reduce number with just reminder and division by 10 

let onesPlace = number % 10; //6 
console.log(`ones place is ${onesPlace}\n`);
number = (number - onesPlace) / 10; // 493

let tensPlace = number % 10; //3
console.log(`tens place is ${tensPlace}\n`);
number = (number - tensPlace) / 10; //49

let hundredsPlace = number % 10; // 9
console.log(`hundreds place is ${hundredsPlace}\n`);

let thousandsPlace = (number - hundredsPlace) / 10; //4
console.log(`thousands place is ${thousandsPlace}\n`);

