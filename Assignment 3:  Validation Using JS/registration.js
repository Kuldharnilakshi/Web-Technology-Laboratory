function validateForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let dob = document.getElementById("dob").value;
    let pincode = document.getElementById("pincode").value.trim();
    let address = document.getElementById("address").value.trim();

    let genderSelected = document.querySelector('input[name="gender"]:checked');

    // Error elements
    let errors = document.querySelectorAll(".error");
    errors.forEach(e => e.textContent = "");

    let isValid = true;

    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required";
        isValid = false;
    }

    let emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Enter valid Gmail";
        isValid = false;
    }

    let mobilePattern = /^[6-9]\d{9}$/;
    if (!mobilePattern.test(mobile)) {
        document.getElementById("mobileError").textContent = "Enter valid 10-digit mobile number";
        isValid = false;
    }

    if (!genderSelected) {
        document.getElementById("genderError").textContent = "Select gender";
        isValid = false;
    }

    if (dob === "") {
        document.getElementById("dobError").textContent = "Select date of birth";
        isValid = false;
    }

    if (!/^\d{6}$/.test(pincode)) {
        document.getElementById("pincodeError").textContent = "Enter valid 6-digit pincode";
        isValid = false;
    }

    if (address === "") {
        document.getElementById("addressError").textContent = "Address is required";
        isValid = false;
    }

    if (isValid) {
        alert("Registration Successful!");
        return true;
    }

    return false;
}
