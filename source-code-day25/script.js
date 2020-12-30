// Change theme
$(document).ready(function () {
  $(".change-theme").on("click", function () {
    $("body").toggleClass("changeBg");
    $(".calculator").toggleClass("changeCalStyle");
    $(".change-theme").toggleClass("changeStyle");
  });

  // Create a object to save value;
  let calculator = {
    displayValue: "0",
    firstNumber: null,
    checkSecondNumber: false,
    operator: null,
  };

  // Check input is digit
  function inputDigit(digit) {
    let displayValue = calculator.displayValue;
    let checkSecondNumber = calculator.checkSecondNumber;

    if (checkSecondNumber == true) {
      calculator.displayValue = digit;
      calculator.checkSecondNumber = false;
    } else {
      if (displayValue == "0") {
        calculator.displayValue = digit;
      } else {
        calculator.displayValue = displayValue + digit;
      }
    }
  }

  // Check input is dot

  function inputDecimal(dot) {
    if (calculator.checkSecondNumber == true) {
      calculator.displayValue = "0.";
      calculator.checkSecondNumber = false;
      return;
    }

    if (!calculator.displayValue.includes(dot)) {
      calculator.displayValue += dot;
    }
  }

  // Handle Operator
  function handleOperator(nextOperator) {
    let firstNumber = calculator.firstNumber;
    let displayValue = calculator.displayValue;
    let operator = calculator.operator;
    let inputValue = parseFloat(displayValue);

    if (operator && calculator.checkSecondNumber) {
      calculator.operator = nextOperator;
      return;
    }

    if (firstNumber == null && !isNaN(inputValue)) {
      calculator.firstNumber = inputValue;
    } else if (operator) {
      let result = calculate(firstNumber, inputValue, operator);

      calculator.displayValue = `${parseFloat(result.toFixed(5))}`;
      calculator.firstNumber = result;
    }

    calculator.checkSecondNumber = true;
    calculator.operator = nextOperator;
  }

  // Handle Other Function
  function handleFn(fn) {
    let displayValue = calculator.displayValue;
    let checkSecondNumber = calculator.checkSecondNumber;
    let currentInput = parseFloat(displayValue);
    let result;
    switch (fn) {
      case "%":
        result = currentInput / 100;
        break;
      case "^2":
        result = currentInput * currentInput;
        break;
      case "pm":
        result = currentInput * -1;
        break;
      default:
        result = 0;
    }
    calculator.displayValue = `${parseFloat(result.toFixed(5))}`;

    if (checkSecondNumber) {
      calculator.checkSecondNumber = false;
    }
  }
  // Calculate function

  function calculate(firstNumber, secondNumber, operator) {
    if (operator == "+") {
      return firstNumber + secondNumber;
    } else if (operator == "-") {
      return firstNumber - secondNumber;
    } else if (operator == "*") {
      return firstNumber * secondNumber;
    } else if (operator == "/") {
      return firstNumber / secondNumber;
    }
    return secondNumber;
  }

  //  AC: All clear button
  function resetCalculator() {
    calculator.displayValue = "0";
    calculator.firstNumber = null;
    calculator.checkSecondNumber = false;
    calculator.operator = null;
  }

  // Update screen
  function updateDisplay() {
    return $(".calc-input").val(calculator.displayValue);
  }
  updateDisplay();

  // Check event button
  $(".calc-buttons").click(function (event) {
    let target = event.target;
    let value = target.value;

    if (!target.matches("button")) {
      return;
    }

    switch (value) {
      case "+":
      case "-":
      case "*":
      case "/":
      case "^":
      case "=":
        handleOperator(value);
        break;
      case "^2":
      case "%":
      case "pm":
        handleFn(value);
        break;
      case ".":
        inputDecimal(value);
        break;
      case "all-clear":
        resetCalculator();
        break;
      default:
        if (Number.isInteger(parseFloat(value))) {
          inputDigit(value);
        }
    }

    updateDisplay();
  });
});
