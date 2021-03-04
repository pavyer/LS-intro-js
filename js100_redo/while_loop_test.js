// test while loop with the pre-increment and post-increment control variables

// preincrement
console.log("Pre-increment")
let i  = 1;

while (i <= 5) {
  console.log(i);
  ++i;
}

// postincrement
console.log("Post-increment")

let j = 1;

while (j <= 5) {
  console.log(j);
  j++;
}

/* Output
Pre-increment
1
2
3
4
5
Post-increment
1
2
3
4
5

So don't see a difference between the two pre-increment vs post-increment.

*/

