// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2
let addedNumbers1 = parseFloat(numberOne) + parseFloat(numberTwo)

// --------------------------------------


// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";
let addedNumbers2 = (parseFloat(anotherNumberOne)+parseFloat(anotherNumberTwo)).toFixed(2)

// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals
let totalAvg = ((one+two+three)/3).toFixed(5)
console.log(totalAvg)

// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"
let c = letters[2]
console.log(c)


// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript
let fact2 = fact.replace("j", "J")
console.log(fact2)
// --------------------------------------



