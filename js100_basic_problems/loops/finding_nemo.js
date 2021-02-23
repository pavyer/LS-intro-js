// loop over all elements of array and print
// once you find string "nemo" quit the loop
// the requirement I missed here was that we also want to log Nemo. we don't want to
// skip Nemo

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for (let index = 0; index < fish.length; index += 1) {
  
  if (fish[index] === 'Nemo') break; // can also use match method and compare to regex 'Nemo'
  
  console.log(fish[index]); // so this should be the first statement

};

// empty array evaluates to truthy []. 
