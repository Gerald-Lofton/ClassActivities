let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false,
};
// reassign x, y, and z to FALSY values
// x = 0;
// y[0] = NaN;
// z.id = false;
// print x, y, and z
// console.log(x, y, z);
const a = "name";
const b = [];
const c = {};
// try to reassign a, b, and c to FALSY values

// a = "NAME";
// b = NaN;
// c = true;

// using BRACKET NOTATION, assign a value to b
b[0] = 3;
console.log(b[1]);
// using DOT NOTATION, assign a PROPERTY to c
c.name = "Gerald";
console.log(c);
// using DOT NOTATION, assign a METHOD to c
c.b = function() {
  return "Adding a method";
};
console.log(c.b());
// using BRACKET NOTATION, call the method in c
console.log(c["b"]());
// print a, b, and c
console.log(a, b, c);
