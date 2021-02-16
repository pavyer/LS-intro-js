// create array of keys of object given
// convert all keys to uppercase
// do not mutate given object

let obj = {
  b: 2,
  a: 1,
  c: 3
};

let objKeys = Object.keys(obj);

console.log(objKeys);

let upperCaseObjKeys = objKeys.map(key => key.toUpperCase());

console.log(upperCaseObjKeys);
console.log(obj);
