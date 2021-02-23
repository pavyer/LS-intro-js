// With while loop
// log all odd natural numbers 
// between 1 and 40 

let i = 1;

while (i <= 40) {
  
  if (i % 2 !== 0) { // you can also use (i % 2) because zero evaluates as falsy. it works
    console.log(i); // also if there is only one clause can omit the braces and put it on a single line to make it more succinct
  };

  i += 1;

};

// Solution from LaunchSchool based on the fact that each second number is odd, 
// so if we start at 1, we can simply increment the number by 2 on each 
// iterating, effectively looping only over the odd numbers.

/*

let num = 1;

while (num <= 40) {
  console.log(num);
  num += 2;
};

*/
