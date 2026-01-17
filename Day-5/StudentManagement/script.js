const studentsList = [];

let from = document.getElementById('studentForm');
let tablebody = document.getElementById('tabledata');
let addbtn = document.getElementById('addbtn');
let tbody = document.querySelector('tbody');

function addstudent(student) {
    studentsList.push(student);
    savelocalstorage();
    renderFunction();
}

function renderFunction() {
    tbody.innerHTML = "";
    if (studentsList.length === 0) {
        tablebody.style.display = "none";
        return;
    }
    tablebody.style.display = "table";

    studentsList.forEach((student, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `<td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.father}</td>
<td>${student.email}</td>
<td>${student.course}</td>
    <td>
    <button onclick ="deleteStudent(${index})">Delete</button>`;


        tbody.appendChild(row);
    })
}


function deleteStudent(index) {
    studentsList.splice(index, 1);
    savelocalstorage();
    renderFunction();
}


let names = document.getElementById('inputname');
let age = document.getElementById('inputage');
let father_name = document.getElementById('fathername');
let email = document.getElementById('inputemail');
let course = document.getElementById('inputcourse');
addbtn.addEventListener('click', () => {
    const student = {
        name: names.value,
        age: age.value,
        father: father_name.value,
        email: email.value,
        course: course.value
    };
    addstudent(student);

    if (Object.values(student).some(v => v === "")) {
        alert("All fields are required");
        return;
    }

    names.value = "";
    age.value = "";
    father_name.value = "";
    email.value = "";
    course.value = "";
})



function savelocalstorage() {
    localStorage.setItem("student", JSON.stringify(studentsList));
}

function loadFromLocalStorage() {
    const data = localStorage.getItem("student");
    if (data) {
        studentsList.push(...JSON.parse(data));
        renderFunction();
    }
}


loadFromLocalStorage();