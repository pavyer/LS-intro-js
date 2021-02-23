// Write a for loop that iterates over all numbers from 1 to 100, 
// and outputs the result of multiplying each element by 2.

// iterate from 1 to 100; multiple by 2; display the result

for (let i = 1; i <=100; i += 1) {
  console.log(i * 2);
};

// don't always use "i" as the loop control variable
// get into the habit of using a more descriptive loop control variable name  

// so some people are declaring a variable within the for block
// like:
/*
let double = i * 2;
console.log(double);

so I was thinking this would error because you're trying to declare the same
variable on each iteration.
but this works. seems like each iteration of the block is treated as a separate
execution and each time double is initialized anew within that context.

also if you declare a variable with let in the parent program it is accessible
within the loop block. 
so yeah we need to understand the scoping of the variables better.
*/
