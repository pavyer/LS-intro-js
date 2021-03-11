/*
for loop iterates over array, print where not null, skip printing where null

ha, that's the wrong description of the problem. you've to print the length of 
the string and not the string itself
*/


let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 
             'London', 'Beijing', null];

  for (let index = 0; index < cities.length; index++) {
    if (cities[index]) console.log(cities[index].length); // so adding the length property
    continue; // can also have "else continue" 
  }
