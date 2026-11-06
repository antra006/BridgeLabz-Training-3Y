// Q9: Validate the form, block invalid submission, and show live errors.
const signupForm = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const successMessage = document.getElementById("successMessage");

function validateName() {
    const valid = nameInput.value.trim() !== "";
    document.getElementById("nameError").textContent =
        valid ? "" : "Name is required.";
    return valid;
}

function validateEmail() {
    const valid = emailInput.value.trim().includes("@");
    document.getElementById("emailError").textContent =
        valid ? "" : "Enter a valid email containing @.";
    return valid;
}

function validatePassword() {
    const valid = passwordInput.value.length >= 6;
    document.getElementById("passwordError").textContent =
        valid ? "" : "Password must be at least 6 characters.";
    return valid;
}

// Recheck each field as the user corrects it.
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);

signupForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop the browser's default form submission.

    const nameIsValid = validateName();
    const emailIsValid = validateEmail();
    const passwordIsValid = validatePassword();

    if (nameIsValid && emailIsValid && passwordIsValid) {
        successMessage.textContent = "Form Submitted Successfully";
        signupForm.reset();
        document.querySelectorAll(".error").forEach(error => {
            error.textContent = "";
        });
    } else {
        successMessage.textContent = "";
    }
});
