\*\*JavaScript

\*Everything in javascript happen inside an execution context.

                Execution Context
                        |
        ---------------------------------------
        |                                     |

Memory (Variable Environment) Code (Thread of Execution)

1️⃣ Memory / Variable Environment
Memory is allocated to:

Variables

Function declarations

Variables are initialized with undefined

Functions are stored completely in memory

2️⃣ Code / Thread of Execution

Code is executed line by line
Values are assigned to variables
Function calls are executed

🌍 Types of Execution Context
1️⃣ Global Execution Context (GEC)

Created when the program starts

Only one global execution context exists

Creates:

Global object (window in browser)

this keyword

2️⃣ Function Execution Context (FEC)

Created whenever a function is called

Each function call creates a new execution context

Has its own memory and execution phase

📚 Call Stack

JavaScript uses a Call Stack to manage execution contexts

Follows LIFO (Last In, First Out)

Global execution context stays at the bottom

Function contexts are pushed and popped as functions execute

📂 Files Created Today
🔹 Functions

function.js
→ Function declaration, function expression, arrow functions

FunctionAsArgument.js
→ Passing functions as arguments (callback concept)

rerunFunction.js
→ Function execution and return value behavior

functionOddEven.js
→ Odd and even number logic using functions

→ Odd and even number logic using functions

🔹 Closures

BasicExample.js
→ Basic closure example

Closure.js
→ Closure concept and explanation

DataEncapsula.js
→ Data encapsulation using closures

ArrowAreaOfRectangle.js
→ Arrow function example

fetchData.js
→ Closure with asynchronous code (setTimeout)
→ Odd and even number logic using functions

🔹 Closures

BasicExample.js
→ Basic closure example

Closure.js
→ Closure concept and explanation

DataEncapsula.js
→ Data encapsulation using closures

ArrowAreaOfRectangle.js
→ Arrow function example

fetchData.js
→ Closure with asynchronous code (setTimeout)

> Javascript is a "Synchronous" single threded language.
