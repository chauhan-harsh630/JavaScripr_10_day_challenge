// Day 1: Scope in JavaScript
// --------------------------
// Scope determines where variables can be accessed.

// BLOCK SCOPE
// Code inside {} such as if, for, while blocks
// let and const are block scoped

{
  let name = "Riddhima";
  console.log(name);
}

// console.log(name); //  ReferenceError: name is not defined

if (true) {
  let a = 10;
  console.log(a);
}

// console.log(a); //  ReferenceError: a is not defined

// FUNCTION SCOPE
// Variables declared inside a function are not accessible outside
// let and const follow block scope
// var ignores block scope, which can cause bugs

{
  var x = 10;
  let y = 5;
  const z = 2;
}

console.log(x); //  10
// console.log(y); //  ReferenceError: y is not defined
// console.log(z); //  ReferenceError: z is not defined

// Nested function scope example
function outerFunction() {
  let age = 20;

  function innerFunction() {
    console.log(age); // Accessible due to lexical scope
  }

  innerFunction();
}

outerFunction();

// console.log(age); //  ReferenceError: age is not defined

// Function-level scope example
function constantExample() {
  const PI = 3.1428;
  console.log(PI);
}

constantExample();

// console.log(PI); //  ReferenceError: PI is not defined
