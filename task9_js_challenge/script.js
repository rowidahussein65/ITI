// Challenges 4

//1. Even or Odd Checker

let number = 7;
if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
/////////////////////////////////

//2. Traffic Light Simulator

let lightColor = "yellow";

switch (lightColor) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Prepare to stop");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid color");
}

////////////////////////////////////////////////

//3. Sum of Numbers (1 to 100)

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Total sum:", sum);
////////////////////////////////////////////////////

//4. Count Down from 5 to 1 (using while)

let i = 5;
while (i >= 1) {
  console.log(i);
  i--;
}
////////////////////////////////////////////////////

//5. Find First Even Number (using for and break)

const numbers = [1, 3, 5, 8, 9, 10];

for (let num of numbers) {
  if (num % 2 === 0) {
    console.log("First even number:", num);
    break;
  }
}
//////////////////////////////////////////////////////////

// Challenges 5

//1. Greeting Function (Declaration)

function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("Rowida");
//////////////////////////////////////////////

//2. Square Function (Expression)

const square = function (number) {
  return number * number;
};

console.log(square(5)); // 25
//////////////////////////////////////////////////
//3. Calculator Function (Parameters & Return)

function calculate(num1, num2, operation) {
  switch (operation) {
    case "add":
      return num1 + num2;
    case "subtract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
    default:
      return "Invalid operation";
  }
}

console.log(calculate(10, 2, "multiply")); // 20
///////////////////////////////////////////////////////////////////

//4. Is Palindrome (Arrow Function)

const isPalindrome = (str) => {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
};

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
/////////////////////////////////////////////////////////////////////////

// Challenges 6

//1. Map - Squared Numbers

const nums = [1, 2, 3, 4, 5];
const squared = nums.map((n) => n * n);
console.log(squared); // [1, 4, 9, 16, 25]
////////////////////////////////////////////////////////

//2. Filter - Adult Users
const people = [
  { name: "Anna", age: 28 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 35 },
];

const adults = people.filter((person) => person.age >= 18);
console.log(adults);
//////////////////////////////////////////////////////////////////////
//3. Reduce - Calculate Average

const grades = [85, 90, 78, 92, 88];
const average = grades.reduce((acc, grade) => acc + grade, 0) / grades.length;
console.log("Average grade:", average);
//////////////////////////////////////////////////////////////////////

//4. Array Destructuring with Defaults and Rest

const allTasks = [
  "Learn JS",
  "Build Project",
  "Practice DSA",
  "Exercise",
  "Read",
];

const [firstTask, , importantTask = "Review Concepts", ...otherTasks] =
  allTasks;

console.log("First Task:", firstTask);
console.log("Important Task:", importantTask);
console.log("Other Tasks:", otherTasks);
