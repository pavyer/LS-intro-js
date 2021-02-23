// for loop, loop over elements of cities array
// log length of each string to console
// if element is null, skip to next iteration without logging anything

let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let cityNum = 0; cityNum < cities.length; cityNum += 1) {
  if (cities[cityNum] === null) continue;
  //console.log(cities[cityNum]); // log the length of the string. 
  console.log(cities[cityNum].length); //got to pay attention to what's being asked in the problem
};

// control variable name is a bit clunky. Got to use variable names that you
// can't mix up with others.
