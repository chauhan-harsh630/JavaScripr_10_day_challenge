// Day 1: Hoisting in JavaScript
// -----------------------------
// JavaScript prepares memory before executing code.
// This process is called hoisting.
//
// - var is hoisted and initialized with undefined
// - let and const are hoisted but NOT initialized
//   Accessing them before declaration causes a ReferenceError

// Example with var

console.log(a); // - undefined
var a = 10;

// Function declarations are fully hoisted

greet(); // - Works fine

function greet() {
  console.log("Hello, good morning");
}

// let example (Temporal Dead Zone)

// console.log(name); //  ReferenceError: Cannot access 'name' before initialization

let name = "Harsh";
