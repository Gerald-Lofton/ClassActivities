// Question 3
// Write a function that generates a random number between 0-10.

// If the number is greater than 5, log “{number} is greater than five!”.

// If it is less than 5, log “{number} is less than five!”


// Create a Function specifying the parameters
// We want to generate a random number.
// We would create a variable that equals to the Math.random method 
// Numbers have to be in between 0-10 that is what we would use as our params
// if Number is greater than 5 (Log String)
// else number is less than 5 (Log String)
// We would call our randomNumber Function with (min, max) which is (0, 10)

function randomNumber(min, max) {
    let newNum = Math.random(min, max) * (max - min) + min;
    if (newNum > 5) {
      console.log(`${newNum} is greater than five!`);
    } else {
      console.log(`${newNum} is less than five!`)
    }
  };

  randomNumber(0, 10)