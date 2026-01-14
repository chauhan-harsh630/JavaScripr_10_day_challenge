// In JavaScript, we have many types of loops
// such as: for, while, forEach, etc.
// We also use `break` and `continue` to control loops.


// ===============================
// Example 1: Print numbers from 1 to 100 using a for loop
// ===============================

console.log("Print numbers from 1 to 100");

let time = 100;

for (let i = 1; i <= time; i++) {
  console.log(i);
}

// Explanation:
// - i = 1 → starting point
// - i <= 100 → condition (loop runs while this is true)
// - i++ → increment (increase i by 1 after each iteration)


// ===============================
// Example 2: Print numbers using a while loop
// ===============================

let i = 1;

while (i <= 100) {
  console.log(i + " I Love Coding.");
  i++;
}

// Explanation:
// - while loop first checks the condition
// - if condition is true, the block executes
// - i++ increments the value until the condition becomes false


// ===============================
// Example 3: Using break
// ===============================

for (let j = 0; j < 10; j++) {
  if (j === 5) break; // stops the loop when j becomes 5
  console.log(j);
}

// Output:
// 0
// 1
// 2
// 3
// 4

// Explanation:
// - break immediately exits the loop


// ===============================
// Example 4: Using continue
// ===============================

for (let k = 0; k < 10; k++) {
  if (k === 5) continue; // skips only this iteration
  console.log(k);
}

// Output:
// 0
// 1
// 2
// 3
// 4
// 6
// 7
// 8
// 9

// Explanation:
// - continue skips the current iteration
// - the loop continues with the next value
