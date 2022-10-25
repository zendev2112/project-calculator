//create a calculator object

const calculator = {
displayValue: '0',
firstOperand: null,
waitingForSecondOperand: false,
operator: null
}

function updateDisplay() {
const display = document.querySelector('.screen'); //capture with DOM screen class of the input element;
display.value = calculator.displayValue;
}

updateDisplay();

const keys = document.querySelector('.calculator-keys')