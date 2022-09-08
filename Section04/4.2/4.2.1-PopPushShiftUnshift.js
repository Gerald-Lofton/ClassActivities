const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
popreturn = nums.pop(); //0
popreturn2 = nums.pop(); //1

// remove each of the first two items with shift(), saving each item to a variable
let numShift1 = nums.shift(); //6
let numShift2 = nums.shift(); //5

// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.push(numShift2, numShift1);
nums.unshift(popreturn, popreturn2);
console.log(nums);
