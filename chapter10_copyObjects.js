// write a function that copies the given object
// function - two arguments
// object to copy and array of the keys to be copied
// if array is omitted then copy as is
// do not mutate the passed object

function copyObj(passedObject, keysArray) {
  
  let copyObj = {};

  if (keysArray === undefined) {    
    return Object.assign(copyObj, passedObject) // this is perfect
  }
  
  Object.assign(copyObj, passedObject);
  
  for (key in copyObj) {
    if (keysArray.includes(key) === false) delete copyObj[key];
  }

  return copyObj;
}

//but the method the book uses is different. 

/*
So the book uses this: 

function copyObj(sourceObject, keys) {
  let destinationObject = {};

  if (keys) { // if it's undefined it evaluates to false since undefined is falsy
    keys.forEach(key => destinationObject[key] = sourceObject[key]); 
      // this is the thing that I missed here that you can assign stuff like this
  } else {
    Object.assign(destinationObject, sourceObject);
  }
  return destinationObject;
}

*/

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3
};

//let copiedObject = copyObj(objToCopy, ["foo", "bar"]);
let copiedObject = copyObj(objToCopy, ["foo"]);
//let copiedObject = copyObj(objToCopy);

console.log(copiedObject);
console.log(objToCopy);


// if (copiedObject === objToCopy) console.log("point to the same location");
