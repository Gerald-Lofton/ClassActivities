// select the root node
document.querySelector("html");
// select the last child of the root node
console.log("last html child", document.querySelector("html").lastElementChild);

// select all the children of the body element
console.log("body children", document.querySelector("body").children);

// select the next sibling of the h2 node
console.log("h2 next sibling", document.querySelector("h2").nextElementSibling);

// select the parent element of the h1 node
console.log("h1 parent", document.querySelector("h1").parentElement);

console.log(document.querySelector("header").outerHTML);
console.log(document.querySelector("header").innerHTML);
console.log(document.querySelector("header > h1").innerHTML);
