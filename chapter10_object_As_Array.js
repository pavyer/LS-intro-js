// create an object that behaves as an array in a "for" statement
// Object should have 3 elements 
// Place your code between the braces of the let statement

let myArray = {0: "hello", 
  1: "how",
  2: "are",
  length: 3
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}


