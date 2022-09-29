 // create output as only integers 0-10
  // math occasionally appears 0 or 10 by "Random"

  //We would create a function
  //We would make params (min, max) specifying the minimum and maximum numbers for random integers
  // min and max 


function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let newNum = Math.floor(Math.random() * (max - min) + min)
    if (newNum > 5) {
        console.log(`${newNum} is greater than five!`);
      } else {
        console.log(`${newNum} is less than five!`)
      }
    };
  
    randomInt(0, 10)