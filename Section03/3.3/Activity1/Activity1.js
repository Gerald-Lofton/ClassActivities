// Activity 1

//1.a
// Declare a function called helloWorld that prints out the string "Hello World"
function helloWorld() {
  console.log("Hello World");
}
// Invoke the helloWorld function
helloWorld();
// 1.b
// Declare a function called numSum
//    This is the requirements of the function:
//    Accepts 2 parameters
//    Inside the function, add the parameters together
//    The function will print out a string that says: <1st parameter> plus <2nd parameter> equals sum
//    The function will output the sum of the two parameters
// Hints: you will need to use template literals to print out the string
//        there is no one right way to do this, but don't overthink it
function numSum(num1, num2) {
  let sum = num1 + num2;
  console.log(`${num1} plus ${num2} equals ${sum}`);
  return sum;
}
// Invoke the function inside of a console.log so we can see the returned value
console.log(numSum(5, 7));

// 2.a
// 2.a
// Declare a function called testAverage
//  These are the requirements of the function:
//    Accepts a single parameter that can accept an infinite amount of arguments
//    Inside the function, add the parameters together
//    Divide the sum by the number of parameters that were passed in
//    The function will output the result
// Hints: Remember how a rest parameter represents arguments and what methods that can allow us to use
function testAverage(...scores) {
  let total = 0;
  for (let score of scores) {
    total += score;
  }
  return total / scores.length;
}
// Invoke testAverage with the following parameters: 92, 71, 85, 83
// testAverage(92, 71, 85, 83); // 82.75
// console.log(testAverage(92, 71, 85, 83)); //82.75

// 2.b
// Declare a function called gradeCheck
//  These are the requirements of the function:
//    Accepts a single parameter (we will be passing the returned value of our testAverage function)
//    Inside the function, build the following conditionals:
//    if argument is greater than or equal to 90, print "<grade> is an A, great job!" then output false
//    if argument is greater than or equal to 80 but less than 90, print "<grade> is a B, nice job!" then output false
//    if argument is greater than or equal to 70, print "<grade> is a C, extra studying required" then output true
//    if argument is less than 70, print "<grade>. Uh oh." then output true
function gradeCheck(grade) {
  if (grade >= 90) {
    console.log(`${grade} is an A, great job!`);
    return false;
  }
  if (grade >= 80) {
    console.log(`${grade} is a B, nice job!`);
    return false;
  }
  if (grade >= 70) {
    console.log(`${grade} is a C, extra studying required.`);
    return true;
  }
  if (grade < 70) {
    console.log(`${grade}. Uh oh.`);
    return true;
  }
}

// Invoke gradeCheck and pass in testAverage as an argument; testAverage should have the same parameters as before
gradeCheck(testAverage(92, 71, 85, 83)); // 82.75 is a B, nice job!
gradeCheck(testAverage(52, 71, 55, 44)); // 55.5. Uh oh.
