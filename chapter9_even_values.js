// log all even values from given array to console

let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

//using the forEach method

myArray.forEach(num => {if (num % 2 === 0) console.log(num)});

// using the filter method 

console.log(myArray.filter(num => num % 2 === 0));

//using the for loop

for (let i = 0; i < myArray.length; i += 1) {
  if (myArray[i] % 2 === 0) {
    console.log(myArray[i]);
  }
}
