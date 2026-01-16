// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

const students = new Map;

students.set("Harsh", { marks: 85, age: 21 });
students.set("Riddhima", { marks: 92, age: 19 });
students.set("Akshay", { marks: 78, age: 20 });
students.set("Ritik", { marks: 88, age: 21 });
students.set("Ankita", { marks: 95, age: 21 });
students.set("Simran", { marks: 80, age: 22 });
students.set("Rohit", { marks: 90, age: 20 });

console.log("Student Details:");
for (const [name, detail] of students) {
    console.log(`${name} - Marks: ${detail.marks}, Age: ${detail.age}`);
}


//Filter in js

const hightscorers = new Map([...students].filter(([name, detail]) => {
    return detail.marks >= 90;
}))

console.log("\nHigh Scorers (Marks >= 90):");
for (const [name, detail] of hightscorers) {
    console.log(`${name} - Marks: ${detail.marks}, Age: ${detail.age}`);
}

for (const [name, detail] of students) {
    console.log(`${name} - Marks: ${detail.marks}, Age: ${detail.age}`);
}