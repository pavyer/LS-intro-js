// find length of string then if it's odd save to array and print

function oddLengths(arr) {
  let elementLengths = arr.map(element => element.length);
  let oddValues = elementLengths.filter(element => element % 2 !== 0);
  return oddValues;
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));
