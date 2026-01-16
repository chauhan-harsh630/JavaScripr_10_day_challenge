function createStudent(name, age, father_name, email, course) {
    return {
        name,
        age,
        father_name,
        email,
        course

    };
}
let s1 = createStudent("Harsh", 21, "Mr. Sharma", "Harsh@gmail.com", "B-Tech");
let s2 = createStudent("Riddhima", 19, "Mr. Verma", "riddhima@gmail.com", "BBA");
let s3 = createStudent("Akshay", 20, "Mr. Sharma", "akshay@gmail.com" , "BCA");


let studentsList = [];

studentsList.push(s1);
studentsList.push(s2);
studentsList.push(s3);

studentsList.forEach((students, index) => {
    console.log(`Student ${index + 1} Details:
        Name: ${students.name}
        Age: ${students.age}
        Father Name: ${students.father_name}
        Email id: ${students.email}
        Course: ${students.course}`);
});


let b_tech_Students = studentsList.filter(student => student.course === "B-Tech");
console.log("B-Tech Student ", b_tech_Students);

let names = studentsList.map(student => student.name);
console.log("Student Names: ", names);


let total_Student = studentsList.reduce((total, student) => total + 1, 0);
console.log("Total Students: ", total_Student);
