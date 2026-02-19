const form = document.getElementById("myForm");

const nameField = document.getElementById("name");
const telField = document.getElementById("tel");
const idField = document.getElementById("id");
const emailField = document.getElementById("email");
const dateField = document.getElementById("date");
const ageField = document.getElementById("age");
const genderField = document.getElementById("gender");
const otherField = document.getElementById("other");

// Show "Other gender" field
genderField.addEventListener("change", function () {
    if (genderField.value === "other") {
        otherField.style.display = "block";
    } else {
        otherField.style.display = "none";
        otherField.value = "";
    }
});

form.addEventListener("submit", function (e) {

    let valid = true;

    clearErrors();

    // Name validation
    if (nameField.value.trim() === "") {
        showError(nameField, "Full name is required");
        valid = false;
    }

    // Phone validation
    if (telField.value.length !== 10 || isNaN(telField.value)) {
        showError(telField, "Phone must be 10 digits");
        valid = false;
    }

    // National ID validation (16 digits)
    if (idField.value.length !== 16 || isNaN(idField.value)) {
        showError(idField, "National ID must be 16 digits");
        valid = false;
    }

    // Email validation
    if (!emailField.value.includes("@")) {
        showError(emailField, "Enter valid email");
        valid = false;
    }

    // Date validation
    if (dateField.value === "") {
        showError(dateField, "Select your date of birth");
        valid = false;
    }

    // Age validation
    if (ageField.value <= 0 || ageField.value > 90) {
        showError(ageField, "Enter valid age (1-90)");
        valid = false;
    }

    // Gender validation
    if (genderField.value === "") {
        showError(genderField, "Select your gender");
        valid = false;
    }

    if (genderField.value === "other" && otherField.value.trim() === "") {
        showError(otherField, "Please specify gender");
        valid = false;
    }

    if (!valid) {
        e.preventDefault();
    } else {
        alert("Form submitted successfully!");
    }

});

function showError(input, message) {
    const parent = input.parentElement;
    const small = parent.querySelector(".error");
    small.innerText = message;
    input.style.border = "2px solid red";
}

function clearErrors() {
    const errors = document.querySelectorAll(".error");
    errors.forEach(error => error.innerText = "");

    const inputs = document.querySelectorAll("input, select");
    inputs.forEach(input => input.style.border = "");
}

// Show/Hide Campus Life Section
function ShowLife() {
    const photo = document.getElementById("photo");

    if (photo.style.display === "none") {
        photo.style.display = "block";
    } else {
        photo.style.display = "none";
    }
}
