// write a function to tell if it's a NaN or not
// not using Number.isNaN(value) or Object.is(value, NaN) or isNaN(value)
// was reading through the documentation for NaN and that's where I saw the 
// solution. Which is to use the property that this is the only value that is 
// not equal to itself

function isNotANumber(value) {
  return value !== value;
}

console.log(isNotANumber(NaN));
console.log(isNotANumber(1));
console.log(isNotANumber("NaN"));

