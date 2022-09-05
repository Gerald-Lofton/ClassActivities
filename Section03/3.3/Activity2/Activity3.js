//Activity 3

// Declare a variable called resultOne and assign it to the invocation you did for 2.b
// this will look something like this: let resultOne = gradeCheck(testAverage());
// Declare a variable called resultTwo and assign it to an invocation of testAverage with the arguments of 52, 71, 55, 44
// this will look like this: let resultTwo = gradeCheck(testAverage(52, 71, 55, 44));
// Declare a function called summerPlans
//  These are the requirements of the function:
//    Accepts two parameters: name and outcome (result will be passed as an argument through outcome)
//    Inside the function, create an object called student
//    this object will have two properties with keys name and school
//    set the value of the name key to be the name parameter
//    set the value of the school key to be the outcome parameter
//    set up an if conditional that examines if outcome is true/false
//    if true, print "<student name>'s will be attending summer school."
//    if false, print "<student name>'s will be going on vacation this summer!"
// Hint, you will need to utilize both dot notation and template literals to properly set up these conditions and what they print

let resultOne = gradeCheck(testAverage(92, 71, 85, 83));
let resultTwo = gradeCheck(testAverage(52, 71, 55, 44));

function summerPlans(studentName, outcome) {
  let student = {
    name: studentName,
    school: outcome,
  };
  if (student.school == true) {
    console.log(`${student.name} will be attending summer school.`);
  }
  if (student.school == false) {
    console.log(`${student.name} will be going on vacation this summer!`);
  }
}
// Invoke summerPlans with a name of your choice and the result variable
summerPlans("Steve", resultOne); // Steve will be going on vacation this summer!
summerPlans("Bob", resultTwo); // Bob will be attending summer school.
