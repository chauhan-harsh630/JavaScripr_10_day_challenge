function outer() {
    let count = 0;
    function inner() {
        count++;
        console.log(count);
    }
    return inner;
}


const try1 = outer();
try1();
try1();
try1();
try1();

//outer() runs once

// inner() remembers count

// count stays alive in memory