//Calculate BMI

let weightInKg = 68;
let heightInMeters = 1.65;

let bmi = weightInKg / (heightInMeters * heightInMeters);
console.log("Your BMI is:", bmi.toFixed(2));

//Conditional Message  using Ternary Operator

let temperature = 30;

let message = temperature > 25 ? "It's hot!" : "It's cool.";
console.log(message);

//Operation Precedence Puzzle

console.log(10 + 5 * 2); // 20
console.log((10 + 5) * 2); // 30
console.log(10 / 2 + 3); // 8
console.log(10 / (2 + 3)); // 2
console.log(5 > 3 && 10 < 15); // true
console.log(true || (false && false)); // true
