//Variables are containers that store data in JavaScript.

//let ,const ,var;

//var - old and risky .

//.Scoped to function ,not a block.
//.Can br redecalred ans reassigned.
//.Hoisted to the top with undefined value.
 

function a() {
    var greet = "Hello there";
    function b() {
        var greet; // redeclare
     greet = "Good Morning."  //ressigned
        console.log(greet);    
    }
    b();
}
// console.log(greet);  // greet is not defined

a();


//let - Modern and safe
//.Scoped to block.
//.Can be reassigned but not redeclare.

let age = 20;
age = 21;   //reassigned
console.log(age);

{
    let age_num = 20;
    age_num = 21;

}
// console.log(age_num);  // ReferenceError

//let age =25;   //but not redeclared.

//const - Constaint value.
//.Scoped to blocks.
//.can't be reassigned at declaration.
//.TDZ applies here too.

//But if const holds an object /array,you can still change it's containt.

const student = { name: "Riddhima" };
student.name = "Harsh";
console.log(student);


    const obj = "Harsh";
    // obj = "Akshay";   //Assignment to constant variable.
console.log(obj);
    
{
    const PI = 3.1428;
}

// console.log(PI);  // PI is not defined


