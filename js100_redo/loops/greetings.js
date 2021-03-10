// write code that logs Aloha! 3 times

// can also start with 3 or 4 in the initialExpressions and decrement them by 1

let greeting = "Aloha!"

console.log("using for loop:"); 
for (let i = 1; i <= 3; i += 1) {
  console.log(greeting);
}

console.log("using while loop:")
let j = 0
while (j < 3) {
  console.log(greeting);
  j += 1
}

console.log("using do while loop")
let k = 1;
do {
  console.log(greeting);
  k += 1;
} while (k < 4)

console.log("using array")
let greetingArray = Array(3).fill(greeting);
greetingArray.forEach(item => console.log(item));
