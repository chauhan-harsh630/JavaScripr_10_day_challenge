/*
  A closure is a function that has access to variables from its
  parent (outer) function scope, even after the outer function
  has finished executing.
*/

function outerFun() {
    // Variable declared in outer function
    let name = "Riddhi";

    function innerFunction() {
        // innerFunction can access `name`
        // even though it is declared in outerFun
        console.log(name);
    }

    // Calling inner function
    innerFunction();
}

// Calling outer function
outerFun();
// Output: Riddhi