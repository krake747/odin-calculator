// Functions
const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
};

const divide = function (a, b) {
    return b !== 0 ? a / b : "Cannot divide with zero.";
};

const operate = function (operator, a, b) {
    const num1 = Number(a);
    const num2 = Number(b);
    switch (operator) {
        case ("add"):
            return add(num1, num2);
        case ("subtract"):
            return subtract(num1, num2);
        case ("multiply"):
            return multiply(num1, num2);
        case ("divide"):
            return divide(num1, num2);
    }
};

//Dom Elements
const screen = document.getElementById("screen");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.onclick = () => screen.textContent = button.value;
});
