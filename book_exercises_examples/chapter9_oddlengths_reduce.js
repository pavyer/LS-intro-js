// find length of string then if it's odd save to array and print with only reduce

function oddLengths(arr) {
 // let elementLengths = arr.map(element => element.length);
 // let oddValues = elementLengths.filter(element => element % 2 !== 0);
 // return oddValues;

 let elementLengths = arr.reduce((accumulator, element) => {
  if (element.length % 2 !== 0) {
    accumulator.push(element.length);
  }
  return accumulator; // doesn't work without returning the accumulator or something that includes the accumulator from the callback
 }, [])
 return elementLengths;
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));

