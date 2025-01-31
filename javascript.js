let currentInput = "";
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

const resultDisplay = document.querySelector(".result");

function updateDisplay() {
    resultDisplay.textContent = currentInput || "0";
}

function appendNumber(number) {
    if (currentInput.length < 10) {
        currentInput += number;
        updateDisplay();
    }
}


function chooseOperator(operator) {
    if (currentInput === "" && firstOperand === null) return;

    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else if (currentInput !== "") {
        secondOperand = parseFloat(currentInput);
        firstOperand = operate(firstOperand, secondOperand, currentOperator);
    }

    currentOperator = operator;
    currentInput = "";
    updateDisplay();
}


function calculate() {
    if (firstOperand !== null && currentOperator !== null && currentInput !== "") {
        secondOperand = parseFloat(currentInput);
        firstOperand = operate(firstOperand, secondOperand, currentOperator);
        currentInput = firstOperand.toString();
        currentOperator = null;
        secondOperand = null;
        updateDisplay();
    }
}

function operate(a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "x":
            return a * b;
        case "/":
            return b !== 0 ? a / b : "Error";
        default:
            return b;
    }
}


function clearCalculator() {
    currentInput = "";
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
    updateDisplay();
}


document.querySelectorAll(".one, .two, .three, .four, .five, .six, .seven, .eight, .nine, .zero").forEach(button => {
    button.addEventListener("click", () => {
        appendNumber(button.textContent);
    });
});

document.querySelectorAll(".add, .subtract, .multiply, .divide").forEach(button => {
    button.addEventListener("click", () => {
        chooseOperator(button.textContent);
    });
});


document.querySelector(".equal").addEventListener("click", calculate);

document.querySelector(".delete").addEventListener("click", clearCalculator);


updateDisplay();
