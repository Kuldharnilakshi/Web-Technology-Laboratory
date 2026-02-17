const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

// Default
loginForm.classList.add("active");

function showLogin() {
    signupForm.classList.remove("active");
    loginForm.classList.add("active");
}

function showSignup() {
    loginForm.classList.remove("active");
    signupForm.classList.add("active");
}

// Login validation
function validateLogin() {
    let user = document.getElementById("luser").value;
    let pass = document.getElementById("lpass").value;

    if (user === "admin" && pass === "1234") {
        alert("Login Successful");
        window.location.href = "index.html";
        return false;
    } else {
        document.getElementById("loginError").textContent = "Invalid credentials";
        return false;
    }
}

// Signup validation (Gmail)
function validateSignup() {
    let email = document.getElementById("semail").value;
    let error = document.getElementById("signupError");

    let gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!gmailPattern.test(email)) {
        error.textContent = "Only Gmail addresses allowed";
        return false;
    }

    alert("Signup Successful! Please login.");
    showLogin();
    return false;
}
