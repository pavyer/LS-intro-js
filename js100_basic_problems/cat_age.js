// function catAge takes human years converts them into cat years
/*
Cat years are calculated as follows:

The first human year corresponds to 15 cat years.
The second human year corresponds to 9 cat years.
Every subsequent human year corresponds to 4 cat years.

Example
catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32
*/

function catAge(humanAge) {

  let ageInCatYears = 0;

  if (humanAge === 0){
    return ageInCatYears;
  } else if (humanAge === 1) {
    return ageInCatYears = 15;
  } else if  (humanAge === 2) {
    return ageInCatYears = 15 + 9;
  } else if (humanAge > 2) {
    let additionalHumanYears = humanAge - 2;
    ageInCatYears = 15 + 9; 
    for (let years = 0; years < additionalHumanYears; additionalHumanYears -= 1){
      ageInCatYears = ageInCatYears + 4;
    }
    return ageInCatYears;
  } else {
    console.log("Enter a valid age");
  } 
}

console.log(catAge(0));
console.log(catAge(1));
console.log(catAge(2));
console.log(catAge(3));
console.log(catAge(4));
console.log(catAge(5));
console.log(catAge());

/* The case statement was the way to go for this:

function catAge(humanYears) {
  switch(humanYears) {
    case 0:
      return 0;
    case 1:
      return 15;
    case 2:
      return 24;
    default:
      return 24 + (humanYears - 2) * 4;
  }
}

*/
