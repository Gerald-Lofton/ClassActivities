// select all unordered list (ul) elements
console.log("this is query All: ", document.querySelectorAll("ul"));
console.log("this is element by: ", document.getElementsByTagName("ul"));
// select all elements with the class "class-week"
console.log("This is query All: ", document.querySelectorAll(".class-week"));
console.log(
  "This is element by: ",
  document.getElementsByClassName("class-week")
);
// select all elements with the class "nav-bar"
console.log(document.querySelectorAll(".nav-bar"));
// select the element with the id "dog-picture" and save it to a variable
const dogPic = document.querySelector("#dog-picture");
console.log("Dog picture ... ", dogPic);
