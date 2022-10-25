//create a calculator object

const calculator = {
displayValue: '0', //this property represents the input of the user. It needs to be modified when any of the digits is clicked. 
firstOperand: null,
waitingForSecondOperand: false,
operator: null
}

function inputDigit(digit){
const {displayValue} = calculator; //same as const displayValue = calculator.displayValue; es decir, estoy creando la const 'displayValue' y le estoy asignando el valor de la propiedad 'displayValue' del objeto 'calculator'.
calculator.displayValue = displayValue  === '0' ? digit : displayValue + digit; //si la propiedad 'displayValue' del objeto 'calculator' le asigno el valor de la variable 'const displayValue', y es estrictamente igual a 0, retorna el digit; es decir, el target.value del keys.addEventListener. Si no es estrictamente igual a 0, aa la const 'displayValue' le voy a sumar un 'digit'.
}

function inputDecimal(dot){
    if(!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
    }
}


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
        console.log('operator', target.value);
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