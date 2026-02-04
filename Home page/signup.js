
function validateSignup() {
    let name = document.getElementById("sname").value;
    let email = document.getElementById("semail").value;
    let pass = document.getElementById("spass").value;
    let confirmPass = document.getElementById("sconfirmpass").value;
    let error = document.getElementById("signupError");

    error.textContent = "";

    // Name validation
    if (name === "") {
        error.textContent = "Name is required";
        return false;
    }

    // Gmail validation
    let gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!gmailPattern.test(email)) {
        error.textContent = "Only Gmail addresses are allowed";
        return false;
    }

    // Password validation
    if (pass.length < 6) {
        error.textContent = "Password must be at least 6 characters";
        return false;
    }

    // Confirm password validation
    if (pass !== confirmPass) {
        error.textContent = "Passwords do not match";
        return false;
    }

    alert("Signup Successful! Please login.");
    showLogin();   // switch back to login form
    return false;
}
