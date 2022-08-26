// Correct these statements so they make sense
// Sunday = 0, Monday = 1, ... Saturday = 6
// re-assign day to any number from 0 - 7 to test the result
let day = "1";
let dayName = `Today`;

// Complete this switch case statement to produce the correct results please.

switch (day) {
  case "3":
    console.log("Today is Wednesday");
    break;

  case "1":
    console.log("Today is Monday");
    break;

  // Note the code blocks in the next 2 cases: Why?
  case "4":
    console.log("today is Thursday");
    break;

  case "5":
    console.log("Tomorrow its the weekend!");

    break;

  default:
    console.log("no");
    break;

  case "2":
    console.log("Today is Tuesday");
    break;

  // write a case here for the weekend (how many days in the weekend?)

  case "6":
  case "0":
    alert("It's the Weekend!!");
    if (dayName !== "Today") console.log("dayName");
}
