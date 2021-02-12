// say even or odd for each value in array with map method

let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

let evenOddArray = myArray.map(num => 
  {if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
  }
);

console.log(myArray);
console.log(evenOddArray);

// with for loop 

let evenOddArrayForLoop = [];

for (let i = 0; i < myArray.length; i +=1) {
  if (myArray[i] % 2 === 0) {
    evenOddArrayForLoop.push("even");
  } else {
    evenOddArrayForLoop.push("odd");
  }
}
 console.log(evenOddArrayForLoop);
