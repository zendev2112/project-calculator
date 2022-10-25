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

const keys = document.querySelector('.container'); //event delegation
keys.addEventListener('click', (event) => {
    const {target} = event;

    if(!target.matches('button')){
        return;
    }

    if (target.classList.contains('operator')){
        console.log('operator', target.value);
        return;
    }

    if (target.classList.contains('decimal')){
        console.log('decimal', target.value);
        return;
    }

    if (target.classList.contains('clear')){
        console.log('clear', target.value);
        return;
    }

    console.log('number', target.value)

})