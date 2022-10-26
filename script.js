//create a calculator object

const calculator = {
displayValue: '0', //this property represents the input of the user. It needs to be modified when any of the digits is clicked. 
firstOperand: null,
waitingForSecondOperand: false,
operator: null
}

function inputDigit(digit){
const {displayValue, waitingForSecondOperand} = calculator; //same as const displayValue = calculator.displayValue; es decir, estoy creando la const 'displayValue' y le estoy asignando el valor de la propiedad 'displayValue' del objeto 'calculator'.

if(waitingForSecondOperand === true){
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
} else {
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
}
//si la propiedad 'displayValue' del objeto 'calculator' le asigno el valor de la variable 'const displayValue', y es estrictamente igual a 0, retorna el digit; es decir, el target.value del keys.addEventListener. Si no es estrictamente igual a 0, aa la const 'displayValue' le voy a sumar un 'digit'. //STUDY THE DIFFERENCE BETWEEN TERNARY AND IF/ELSE. 
console.log(calculator)
}

function inputDecimal(dot){
    if(!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
    }
}

function handleOperator(nextOperator){
  const {firstOperand, displayValue, operator} = calculator;//Estoy creando variables, y el valor que le asigno a cada una de esas variables es el valor de las propiedades del objeto calculator.
  const inputValue = parseFloat(displayValue);

  if(firstOperand == null && !isNaN(inputValue)){
    calculator.firstOperand = inputValue;

  } else if (operator) {
    const result = calculate(firstOperand, inputValue, operator);

    calculator.displayValue = String(result);
    calculator.firstOperand = result;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
  console.log(calculator)
}

function calculate (firstOperand, secondOperand, operator) {
    if(operator === '+'){
        return firstOperand + secondOperand;
    } else if (operator === '-') {
        return firstOperand - secondOperand;
    } else if (operator === '*') {
        return firstOperand * secondOperand;
    } else if (operator === '/') {
        return firstOperand / secondOperand;
    }

    return secondOperand
};


function updateDisplay() {
const display = document.querySelector('.screen'); //capture with DOM screen class of the input element;
display.value = calculator.displayValue;
}

updateDisplay();


const keys = document.querySelector('.container'); //event delegation
keys.addEventListener('click', (event) => {
    const {target} = event;//same as const target = event.target

    if(!target.matches('button')){
        return;//return para salir de la funcion;
    }

    if (target.classList.contains('operator')){
        handleOperator(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('decimal')){
        inputDecimal(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('clear')){
        console.log('clear', target.value);
        return;
    }

    inputDigit(target.value);
    updateDisplay();

})