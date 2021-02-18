// write a function that takes as argumenta an array of strings and a regex
// return an array of the strings that contain the regex

function allMatches(inputArray, inputRegex) {
  return inputArray.filter(word => inputRegex.test(word));
}

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear'
];

console.log(allMatches(words, /lab/));
