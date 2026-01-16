// The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

let fruit = ["Apple", "Banana", "Cherry"];
fruit.push("Orange"); // push adds a element to the end of array;
console.log(fruit); // Output: ["Apple", "Banana", "Cherry", "Orange"]
fruit.pop(); // pop removes the last element from array;
fruit.unshift("Mango"); // unshift adds a element to the beginning of array;
fruit.shift(); // shift removes the first element from array;
// console.log(fruit); // Output: ["Apple", "Banana", "Cherry"]
console.log(fruit.length); // Output: 3
fruit.sort(); // sort sorts the array in ascending order
for (let x of fruit) {

    console.log(x);
}

// fruit.pop();
// console.log(fruit); // Output: ["Apple", "Banana"]

// In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:

// JavaScript arrays are resizable and can contain a mix of different data types.

// JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.

// JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.

// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).