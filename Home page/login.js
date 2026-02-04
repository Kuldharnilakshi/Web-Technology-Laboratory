function validateLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let userError = document.getElementById("userError");
    let passError = document.getElementById("passError");

    userError.textContent = "";
    passError.textContent = "";

    if (username === "") {
        userError.textContent = "Username is required";
        return false;
    }

    if (password === "") {
        passError.textContent = "Password is required";
        return false;
    }

    // Demo validation
    if (username === "admin" && password === "1234") {
        alert("Login Successful!");
        window.location.href = "index.html"; // back to home
        return false;
    } else {
        alert("Invalid username or password");
        return false;
    }
}
