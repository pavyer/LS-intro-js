/*
Implement a function catAge that takes a number of human years as input and 
converts them into cat years. Cat years are calculated as follows:

The first human year corresponds to 15 cat years.
The second human year corresponds to 9 cat years.
Every subsequent human year corresponds to 4 cat years.

catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32
*/

function catAgeRecursion(humanYears) {
  // if construct won't work because I'm immediately returning for 2 and not 
  // going to the case for 1. would switch work?
  // if (humanYears === 0) return 0;
  // if (humanYears === 1) return 15;
  // if (humanYears === 2) return 9;

  switch (humanYears) {
    case 0:
      return 
    default:
      break;
  }
  
  return (humanYears * 4) + catAgeRecursion(humanYears - 1); 

  // I don't think I can use recursion here. Don't think recursion works with
  // mutlitple base cases. You need to have a single base case to use recursion.

  // Recursion is possible with multiple base cases. This is the solution from
  // another student:
  /*
    function catAge(years) {
    if (years === 0) {
      return 0;
    } else if (years === 1) {
      return 15;
    } else if (years === 2) {
      return 24;
    } else {
      return 4 + catAge(years - 1); // the key point here is having the addition 
      // of 4 for each subsequent year be carried into the next recursive call.
    }
  }
  */
  
}

function catAge(humanYears) {

  if (humanYears === 0) 
    return 0;
  else if (humanYears === 1) 
    return 15;
  else if (humanYears === 2)
    return 15 + 9;
  else if (humanYears > 2)
    return ((humanYears - 2) * 4) + 9 + 15;
  else
    return "Pass a positive number argument.";
}

// console.log(catAge(0)); // 0
// console.log(catAge(1)); // 15
// console.log(catAge(2)); // 24
// console.log(catAge(3)); // 28
// console.log(catAge(4)); // 32
// console.log(catAge("jkfhkdhfk")); 
// console.log(catAge(120.5)); 
// console.log(catAge(-565)); 


function catAgeSwitch(humanYears) {

  if ((typeof humanYears !== "number") || humanYears < 0)
    return "Pass a positive number argument."

  switch (humanYears) {
    case 0:
      return 0;  
    case 1:
      return 15;  
    case 2:
      return 9 + 15;
    default:
      return ((humanYears - 2) * 4) + 9 + 15;
  }
}

console.log(catAgeSwitch(0)); // 0
console.log(catAgeSwitch(1)); // 15
console.log(catAgeSwitch(2)); // 24
console.log(catAgeSwitch(3)); // 28
console.log(catAgeSwitch(4)); // 32
console.log(catAgeSwitch("jkfhkdhfk")); 
console.log(catAgeSwitch(120.5)); 
console.log(catAgeSwitch(-565)); 
