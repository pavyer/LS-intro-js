/* implement function:

compareByLength('patience', 'perseverance'); // -1
compareByLength('strength', 'dignity');      //  1
compareByLength('humor', 'grace');           //  0

if string1 is less than string 2 then -1 
if string2 is less than string then 1 
0 if equal length

*/

function compareByLength(firstString, secondString) {
  if (firstString.length < secondString.length) return "-1";
  else if (firstString.length > secondString.length) return "1";
  else if (firstString.length === secondString.length) return "0"; // can also use the else statement 
  // instead of explicitly checking for the equals condition
}

console.log(compareByLength('patience', 'perseverance'));
console.log(compareByLength('strength', 'dignity'));
console.log(compareByLength('humor', 'grace'));

/*
interesting approach

function compareByLength(str1, str2) {
  lengthDiff = str1.length - str2.length;
  return lengthDiff === 0 ? 0 : lengthDiff / Math.abs(lengthDiff);
}

if lengthDiff equals 0 then return 0 else return 1 or -1 

*/

/*
Using Math.sign()

Math.sign returns:
      -1  - if the argument is a negative number, 
       0  - if the argument is 0 
       1  - if the argument is a positive number.   

       const compareByLength = (string1, string2) => {
        return (Math.sign(string1.length - string2.length));        
      }

*/
