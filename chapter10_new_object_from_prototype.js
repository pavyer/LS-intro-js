// create new object called myObj 
// from myProtoObj as the prototype

let myProtoObj = {
  foo: 1,
  bar: 2
}; 

let myObj = Object.create(myProtoObj);

console.log(myObj);

myObj.qux = 3;

console.log(myObj);
