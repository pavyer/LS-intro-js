/*
Write a while loop to loop over all the elements of array and log the values
to console. Stop loop after logging the last element of the array

let array = [1, 2, 3, 4];
let index = 0;
*/

let array = [1, 2, 3, 4];
//let array = []; If the array is empty, there's nothing to print and nothing is
//printed to the console
let index = 0;

while (index < array.length) {
  console.log(array[index]);
  index += 1;
}


/*
while (array[index]) { // Using the truthiness of the values to control the loop
    console.log(array[index]);
    index ++;
}

Interesting approach but as noted in the comment this will fail when the array
contains any falsy value.
*/
