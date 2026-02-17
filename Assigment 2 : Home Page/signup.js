function validateSignup() {

    let name = document.getElementById("sname").value.trim();
    let email = document.getElementById("semail").value.trim();
    let pass = document.getElementById("spass").value;
    let confirmPass = document.getElementById("sconfirmpass").value;

    // Error spans
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passError = document.getElementById("passError");
    let confirmError = document.getElementById("confirmError");

    // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    passError.textContent = "";
    confirmError.textContent = "";

    let isValid = true;

    // Name validation
    if (name === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }

    // Gmail validation
    let gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!gmailPattern.test(email)) {
        emailError.textContent = "Enter a valid Gmail address";
        isValid = false;
    }

    // Password validation
    if (pass.length < 6) {
        passError.textContent = "Password must be at least 6 characters";
        isValid = false;
    }

    // Confirm password validation
    if (pass !== confirmPass) {
        confirmError.textContent = "Passwords do not match";
        isValid = false;
    }

    // If everything is valid
    if (isValid) {
        alert("Signup Successful! Please login.");
        return true;   // form will submit
    }

    return false; // stop form submission if error
}
