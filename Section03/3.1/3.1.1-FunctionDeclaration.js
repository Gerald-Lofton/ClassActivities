// TODO: using the function expressions below, refactor them into function declarations

// Greet Function
const greet = function() {
  console.log("Hello!");
};

function greet() {
  console.log("Hello!");
}

greet();
console.log("Hello!");

// threeModTwo Function
const threeModTwo = function() {
  console.log(3 % 2);
};

function threeModTwo() {
  console.log(3 % 2);
}

// CheckDrivingAgeFunction

let age = 18;
const checkDrivingAge = function() {
  if (age >= 16) {
    console.log(true);
  } else {
    console.log(false);
  }
};

function checkDrivingAge() {
  if (age >= 16) {
    console.log(true);
  } else {
    console.log(false);
  }
}
