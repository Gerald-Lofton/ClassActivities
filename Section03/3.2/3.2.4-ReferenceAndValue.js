// comparing and passing by reference and value
// ? determine whether each log will print true or false

console.log(4 === 4); // True
console.log("Hello, world" === "Hello, world"); //True
/
let x = false;
let y = x;
console.log(x === y); //True
x = !x;
console.log(x === y); //False

console.log([1, 2, "c"] === [1, 2, "c"]);//False
console.log({} === {});//False

y = { id: 1 };
x = y;
console.log(x === y);//True
y.id += 1;
console.log(x.id === y.id);//True
