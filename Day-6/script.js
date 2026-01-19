const form = document.getElementById("formData");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const MIN_PASSWORD_LENGTH = 8;
const MIN_NAME_LENGTH = 2;
window.addEventListener("DOMContentLoaded", () => {
  const savedData = JSON.parse(localStorage.getItem("userData"));

  if (savedData) {
    nameInput.value = savedData.name;
    emailInput.value = savedData.email;
    passwordInput.value = savedData.password;
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (formValidation()) {
    saveLocalStorage();
    alert("Form submitted & saved 🎉");
    form.reset();
    document.querySelectorAll('.error').forEach(e => e.innerText = ""); // Clear validation error messages after successful submission
  }
});

function formValidation() {
  let isValid = true;

  if (nameInput.value.trim().length < MIN_NAME_LENGTH) {
    showErrorMeassage(nameInput, "Name must be at least 2 characters");
    isValid = false;
  } else {
    processInput(nameInput);
  }

  if (!emailValidation(emailInput.value.trim())) {
    showErrorMeassage(emailInput, "Enter a valid email");
    isValid = false;
  } else {
    processInput(emailInput);
  }

  if (passwordInput.value.length < MIN_PASSWORD_LENGTH) {
    showErrorMeassage(passwordInput, "Password must be at least 8 characters");
    isValid = false;
  } else {
    processInput(passwordInput);
  }

  return isValid;
}

function showErrorMeassage(input, message) {  
  const error = input.closest(".column")?.querySelector(".error");
  if (error) error.innerText = message;
}

function processInput(input) {  
  const error = input.closest(".column")?.querySelector(".error");
  if (error) error.innerText = "";
}

function emailValidation(email) {    
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}


function saveLocalStorage() {
  const userData = {   
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };

  localStorage.setItem("userData", JSON.stringify(userData));
}
