// Arithmetic functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

// Utility to get numbers from input fields
function getNumbers() {
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;
    return [num1, num2];
}

// Display result in the DOM
function displayResult(result) {
    document.getElementById('calculation-result').textContent = result;
}

// Event listeners
document.getElementById('add').addEventListener('click', function () {
    const [a, b] = getNumbers();
    displayResult(add(a, b));
});

document.getElementById('subtract').addEventListener('click', function () {
    const [a, b] = getNumbers();
    displayResult(subtract(a, b));
});

document.getElementById('multiply').addEventListener('click', function () {
    const [a, b] = getNumbers();
    displayResult(multiply(a, b));
});

document.getElementById('divide').addEventListener('click', function () {
    const [a, b] = getNumbers();
    displayResult(divide(a, b));
});

