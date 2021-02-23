// using a while loop, loop over a given array and show all elements of array
// start with the below:

let array = [1, 2, 3, 4];
let index = 0;

while (index < array.length) {
  console.log(array[index]);
  index += 1;
}; 


/* This is slightly hard to understand:

let array = [1,2,3,4];
let index = 0; 


while (array[index]) {
    console.log(array[index]);
    index ++;
}

Produces an output of:
1
2
3
4
3

and if I change index++ to index += 1 produces:

1
2
3
4
4

Questions over here are:

1. How is the post increment operator working in the former case?
2. Why is the output showing 3 as the last element in the former case?
3. How and why is the loop terminating without a condition on index? 
Why is it not an infinite loop with undefined as the value for array indexes not
present in the array?
*/

/*
Also not sure why this works:

let array = [1, 2, 3, 4];
undefined
> let index = 0;
undefined
> while (index < array.length) {
... array.forEach(value => {
..... console.log(value);
..... index += 1;
.....
... });
... }
1
2
3
4
undefined
*/
