/*
Let's make the problem a little harder. In this problem, we're again interested
 in even numbers, but this time the numbers are in nested arrays in a 
 single outer array.
*/


// let myArray = [
//   [1, 3, 6, 11],
//   [4, 2, 4],
//   [9, 17, 16, 0],
// ];

// let myArrayFlat = myArray.flat();

// myArrayFlat.forEach((element) => {
//   if(element % 2 === 0) console.log(element);
// });

/*
Let's try another variation on the even-numbers theme.

We'll return to the simpler one-dimensional array. In this problem, we want to 
use the map function to create a new array that contains one element for each 
element in the original array. If the element is an even value, then the 
corresponding element in the new array should contain the string 'even'; 
otherwise, the element in the new array should contain 'odd'.
*/

let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

let evenOddArray =  myArray.map((element) => {
                      if (element % 2) 
                        return "odd";
                      else 
                        return "even"
                      });

console.log(evenOddArray)                  
