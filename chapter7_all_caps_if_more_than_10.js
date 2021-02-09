// Function takes string input
// Returns all caps if greater than 10 in length
// Returns original string if less than 10 in length

let input = (prompt) => require('readline-sync').question(prompt);

function capitalizeGreaterThan10(stringInput) {
  if (stringInput.length > 10) {
    console.log(`${stringInput.toUpperCase()}`); // This is not returning. 
  } else {
    console.log(`${stringInput}`); //Not returning.
  }
}

// Got to be paying attention to what is being asked of the function we're 
// asked to create. We did not return but displayed it to the console. 

// Also more succinct logic would have been using the ternary operator
// return ((stringInput.length > 10 ? stringInput.toUpperCase() : stringInput))

capitalizeGreaterThan10(input("Enter a sentence.\n"))
