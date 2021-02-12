// comparing the values of two given arrays

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i=0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) return false;

    return true;
  }
}

console.log(arraysEqual([1, 2, 3], [1, 2, 3]));
console.log(arraysEqual([1, 2, 3], [4, 5, 6]));
console.log(arraysEqual([1, 2, 3], [1, 2, 3, 4]));

// why are these two true in node when the inner arrays are two different objects? 
console.log(arraysEqual([1, 2, [3, 4]], [1, 2, [3, 4]])); // this is true?

console.log(arraysEqual([1, 2, [3, 4], 5], [1, 2, [3, 4], 5])); // this is true too?

