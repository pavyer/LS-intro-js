// write a function to repeat given string n number of times
// repeat(3, 'ha'); // 'hahaha'

function repeat(times, inputString) {

  let repeatedString = "";

  for (let i = 0; i < times; i +=1) {
    repeatedString += inputString;
  }

  return repeatedString;
}

/*Using the while loop as below:
while (n > 0) {
    repetitions += string;
    n -= 1;
  }
  allows us to avoid declaring a new variable "i" to control the loop
  but also we could have done the same with the for loop as well.
we could've expressed it as this:
for (times > 0; times -= 1) {
  ...
  ...
}
*/

console.log(repeat(3, "ha"));

/*Interesting approach:

const repeat = (n, string) => Array(n).fill(string).join('');

*/

/*
Using recursion. But I don't think we want to use recursion where not
absolutely necessary. 
function repeat(str, times) {
  return times === 1 ? str : str + repeat(str, times - 1);
}

This does work. Yes, we do want to avoid recursion solutions where not 
necessary. But it's always good to see all these different solutions while
studying so it helps understand the concept of recursion better.

Say for example in the solution above, how'd the computer know how to solve this?

Say the call is repeat("ha", 3)
The way I can think about it as,

1. Computer looks at the base case
2. Initiates str to "ha" on the base case of times = 1; so str = "ha" 
3. Then it calls the repeat itself for the second time whereupon it adds another 
"ha" to str; so str = "haha"
4. Then it again calls the repeat function itself to add another "ha" to str.
So str = "hahaha"

That's why you need to explicitly control how many additional times the function
needs to call itself from within the function. 
So that's why the recursive call is repeat(str, times - 1) and not again
repeat(str, times - 1) because the base case is already provided in the function
definition itself.

So the main insight for me from this analysis is that execution starts from the
base case and not from the top in a recursive function. 
And that the computer is operating on that same memory location or variable within
the function block that keeps getting modified by each subsequent call.

So again if you apply this to the factorial function,

factorial(n) {
  n === 1 ? 1 : n * factorial(n - 1);
}

I'm having some trouble extrapolating the reasoning of the solution above to this.

Like the thing is the same memory location "str" or "n" is being modified. very
important to have a base case. 

so for the str example.

base case:
times = 1 returns str

then it know it's being called twice 

so it says "hello" + repeat("hello", 2) gives us str + str 

Hmmm, no I need to look into this more. 

*/
