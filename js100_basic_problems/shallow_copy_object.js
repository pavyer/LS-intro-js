/* shallow copy

function clone(obj) {
  // TODO
}

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33

*/

function clone(obj) {
  objEntries = Object.entries(obj);
  return Object.fromEntries(objEntries);
}

// hmm simplest is to use Object.assign({}, obj) instead of the above

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};


let clonedPerson = clone(person);
person.age = 34;

console.log(clonedPerson);

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33
