/*
Create a function that creates and returns a copy of an object. 
The function should take two arguments: the object to copy 
and an array of the keys that you want to copy. 
Do not mutate the original object.

The function should let you omit the array of keys argument 
when calling the function. 
If you do omit the argument, 
the function should copy all of the existing keys from the object.

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }
*/

function copyObj(objToCopy, keys = 0) { // can also say just keys and not assign 0 to it

  if (keys === 0) { // and change the condition to (!keys)
    return Object.assign({}, objToCopy);
  }
  
  keyValuePairs = keys.reduce((acc, current) => {
                              acc.push([current, objToCopy[current]]);
                              return acc;
                              }, []);
  return Object.fromEntries(keyValuePairs);
}

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }


/* Book implementatio
function copyObj(sourceObject, keys) {
  let destinationObject = {};

  if (keys) {
    keys.forEach(function(key) {
      destinationObject[key] = sourceObject[key];
    });

    return destinationObject;
  } else {
    return Object.assign(destinationObject, sourceObject);
  }
}
*/
