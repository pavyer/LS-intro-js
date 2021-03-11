// while loop that logs all odd natural numbers between 1 and 40.

// I know this solution which is just increment by 2 instead of the standard
// solution which is to check the modulus or reminder

let number = 1;

while (number <= 40) {
  console.log(number);
  number += 2;
}


/*
  let index = 1;
  while ( index < 40) {
    if (index % 2) {
      console.log(index);
    }
    index += 1;
  }

This is also good because it shows the way in which the reminder itself which is
truthy can be used in the condition
*/
