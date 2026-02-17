const display = document.getElementById("display");

// Add value to display
function append(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Calculate result
function calculate() {
    try {
        // Evaluate the expression
        display.value = eval(display.value);
    } catch (error) {
        // Handle invalid expression
        display.value = "Error";
    }
}
