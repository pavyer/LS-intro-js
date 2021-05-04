/*
Write a function that logs whether a number is between 0 and 50 (inclusive), 
between 51 and 100 (inclusive), greater than 100, or less than 0.

Expected Output:

25 is between 0 and 50
75 is between 51 and 100
125 is greater than 100
-25 is less than 0
*/

function numberRange(number) {

  if (number < 0) {
    console.log(`${number} is less than 0`);
  } else if ((number > 0) && (number <= 50)) {
    console.log(`${number} is between 0 and 50`);
  } else if ((number > 50) && (number <= 100)) {
    console.log(`${number} is between 50 and 100`);
  } else {
    console.log(`${number} is greater than 100`);
  }
  
/*
  Yeah switch doesn't work in these cases because case doesn't accept
  expressions. Case only accepts values. Switche accepts expressions which need
  to be evaluated to a single literal/value. And the case clauses check for 
  what that particular evaluated value is.
  Executing the below switch statement doesn't result in anything. It doesn't
  even error out. It just fails silently. Yeah doesn't call out a syntactical
  error for the case clause either. Because I don't think the case clause can
  accept an expression or rather a value enclosed in parens.
  But you can enclose the statements attached to a given case clause in brackets
  to form a new block and a new block scope. Yeah this helps in having the same
  variable being reused in different case blocks without conflicting with each
  other.
  // switch(number) {
  //   case ((number > 0) && (number <= 50)): 
  //     console.log(`${number} is between 0 and 50`);      
  // }
*/
}

numberRange(-25);
numberRange(25);
numberRange(75);
numberRange(1255);
