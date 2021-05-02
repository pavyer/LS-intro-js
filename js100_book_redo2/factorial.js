/* factorial function

f(1) = 1 
f(2) = 1 * 2
f(3) = 1 * 2 * 3

f(n) = n * f(n - 1)

*/

// function factorial(num) {
  
//   if (num === 0) return 0;
//   if (num === 1) return 1;
  
//   let factorialResult = num;

//   while (num > 1) {
//     factorialResult = factorialResult * (num - 1);
//     num -= 1;
//   }

//   return factorialResult;
// }

function factorial(num) {
  
  if (num === 0) return 0;
  if (num === 1) return 1;

  return num * factorial(num - 1) ;
}



console.log(factorial(4));
console.log(factorial(3));
console.log(factorial(2));
console.log(factorial(1));
console.log(factorial(0));
