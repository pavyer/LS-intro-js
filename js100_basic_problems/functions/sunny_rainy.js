// variable called weather
// if value of variable is 'sunny'
// print "It's a beautiful day!"
// if value of variable is 'rainy'
// "Grab your umbrella."
// any other string value print  
// "Let's stay inside."

let rlSync = require('readline-sync');

let weather = rlSync.question("What's the weather outside?\n");

if (weather === 'sunny') {
  console.log("It's a beautiful day!");
} else if (weather === 'rainy') {
  console.log("Grab your umbrella.");
} else {
  console.log("Let's stay inside.");
}

// you're repeating console.log three times in the above code. 
// even though you need to print only one output based on the given single input
// so yeah it's more DRY to save the value to a variable and print that variable
// with a single console.log() at the end of the if else statement
// same thing for the case statment

// can also use a switch statement for this since it's a single variable being 
// evaluated for different values

switch (weather) {
  case "sunny":
    console.log("It's a beautiful day!");
    break;

  case "rainy":
    console.log("Grab your umbrella.");
    break;

  default: 
    console.log("Let's stay inside.");    
}
