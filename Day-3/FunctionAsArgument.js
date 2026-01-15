function a(argu) {
    console.log("Function a is called");
    console.log(argu);
}

function b() {
    console.log("Function b is called");
    // No return statement → returns undefined by default
}

// Calling b() and logging its return value
console.log(b());

// a(b()); // b() would run first, then undefined would be passed to a
