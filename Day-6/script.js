const form = document.getElementById("formData");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");


window.addEventListener("DOMContentLoaded", () => {
  const savedData = JSON.parse(localStorage.getItem("user"));

  if (savedData) {
    nameInput.value = savedData.name;
    emailInput.value = savedData.email;
    passwordInput.value = savedData.password;
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (validateForm()) {
    saveLocalStorage();
    alert("Form submitted & saved 🎉");
    form.reset();
  }
});



function validateForm() {
  let isValid = true;

  if (nameInput.value.trim().length < 2) {
    showError(nameInput, "Name must be at least 2 characters");
    isValid = false;
  } else {
    clearError(nameInput);
  }

  if (!validateEmail(emailInput.value)) {
    showError(emailInput, "Enter a valid email");
    isValid = false;
  } else {
    clearError(emailInput);
  }

  if (passwordInput.value.length < 8) {
    showError(passwordInput, "Password must be at least 8 characters");
    isValid = false;
  } else {
    clearError(passwordInput);
  }

  return isValid;
}

function showError(input, message) {
  const error = input.closest(".column")?.querySelector(".error");
  if (error) error.innerText = message;
}

function clearError(input) {
  const error = input.closest(".column")?.querySelector(".error");
  if (error) error.innerText = "";
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}


function saveLocalStorage() {
  const user = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };

  localStorage.setItem("user", JSON.stringify(user));
}
