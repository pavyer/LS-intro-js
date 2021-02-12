// even values from a nested array

let myArray = [[1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0]];

// using only the for loop

for (let i = 0; i < myArray.length; i += 1) {
  for (let j = 0; j < myArray[i].length; j += 1){
    if (myArray[i][j] % 2 === 0) {
      console.log(myArray[i][j]);
    }
  }
}

// using the forEach method within a for loop

for (let i = 0; i < myArray.length; i += 1) {
  myArray[i].forEach(num => {if (num % 2 === 0) console.log(num)});
}

// using the filter method within a for loop

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i].filter(num => num % 2 === 0));
}

// using the forEach method without the for loop

myArray.forEach(nestedArray => {
  nestedArray.forEach(num => {if(num % 2 === 0) console.log(num)});
}
)
