/*
  A function is a block of code that is used to perform
  a specific task.

  In JavaScript, we mainly have:
  1. Function Declaration
  2. Function Expression
  3. Arrow Function
*/

// Function Declaration
// Function declarations are hoisted,
// so they can be called before they are defined.

greet("Harsh");

function greet(name) {
    console.log("Hello " + name);
}

greet("Akshay");

// Function Expression
// Function expressions are NOT hoisted,
// so they cannot be called before declaration.

// fun1("Charlie"); // ❌ Error: Cannot access 'fun1' before initialization

let fun1 = function (name) {
    console.log("Hey " + name);
};

fun1("Ravi");


// Function that returns a value

function fun2(greet, name) {
    return greet + ", " + name + "!";
}

const message = fun2("Good Morning", "Riddhi");
console.log(message);
// Output: Good Morning, Riddhi!

// Returning Numbers from a Function
function add(num1, num2) {
    return num1 + num2;
}

let sum = add(5, 3);
console.log(sum);


// Arrow function is a shorter syntax
// for writing function expressions.

const cartTotal = (item, price) => {
    return item + " costs $" + price;
};

const c1 = cartTotal("Laptop", 899);
console.log(c1);


// If there is only one parameter,
// parentheses () are optional.

// If there is only one statement,
// curly braces {} and return keyword are optional.

const square = num => num * num;

const result = square(6);
console.log(result);

//Function declarations are hoisted, while function expressions and arrow functions are not.