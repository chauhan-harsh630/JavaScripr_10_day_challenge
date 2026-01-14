// =======================================
// ==  Loose Equality (Type Coercion Happens)
// =======================================

// - Compares values only
// - Automatically converts data types
// - Convenient but error-prone

console.log(5 == "5");          // true
console.log(true == 1);         // true
console.log(null == undefined); // true

// JavaScript silently converts types here.
// This implicit behavior is where many bugs are born.


// =======================================
// === Strict Equality (No Type Coercion)
// =======================================

// - Compares both value AND type
// - No automatic type conversion
// - Predictable, safe, professional

console.log(5 === "5");          // false
console.log(true === 1);         // false
console.log(null === undefined); // false
